/**
 * Iframe container component for micro-app system
 */

import React, { useState, useEffect, useRef } from 'react';
import { useUsageTracking } from '@/hooks/useUsageTracking';
import { useAuth } from '@/context/AuthContext';
import { messageHandler } from '@/utils/iframeMessageHandler';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, RefreshCw } from 'lucide-react';

interface IframeContainerProps {
  initialSrc?: string;
  title?: string;
  allowFullscreen?: boolean;
  sandbox?: string;
}

export const IframeContainer: React.FC<IframeContainerProps> = ({
  initialSrc = '',
  title = 'Micro App',
  allowFullscreen = true,
  sandbox = 'allow-same-origin allow-scripts allow-forms allow-popups'
}) => {
  const { logAction, logError } = useUsageTracking('IframeContainer');
  const { user, session } = useAuth();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState(initialSrc);
  const [inputUrl, setInputUrl] = useState(initialSrc);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (src) {
      logAction('iframe_load', { url: src });
    }
  }, [src, logAction]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
    logAction('iframe_loaded', { url: src });

    // Send authentication to iframe if user is available
    if (iframeRef.current && user && session) {
      console.log('[IframeContainer] Iframe loaded, preparing to send auth data:', {
        userId: user.id,
        email: user.email,
        hasToken: !!session.access_token,
        url: src
      });

      // Give iframe time to set up listeners before sending auth
      setTimeout(() => {
        if (iframeRef.current) {
          const authData = {
            user: {
              id: user.id,
              email: user.email,
              role: user.user_metadata?.role || 'clinician'
            },
            token: session.access_token,
            isAuthenticated: true,
            timestamp: new Date().toISOString()
          };

          console.log('[IframeContainer] Sending auth-state message to iframe:', authData);
          messageHandler.sendMessage(iframeRef.current, 'auth-state', authData);
        }
      }, 1000);
    } else {
      console.log('[IframeContainer] Iframe loaded but auth not ready:', {
        hasIframe: !!iframeRef.current,
        hasUser: !!user,
        hasSession: !!session,
        url: src
      });
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load the application');
    logError(new Error('Iframe load error'), { url: src });
  };

  const handleUrlChange = () => {
    if (inputUrl.trim()) {
      setIsLoading(true);
      setError(null);
      setSrc(inputUrl.trim());
      logAction('url_changed', { newUrl: inputUrl.trim() });
    }
  };

  const handleRefresh = () => {
    if (src) {
      setIsLoading(true);
      setError(null);
      // Force refresh by briefly changing src
      const currentSrc = src;
      setSrc('');
      setTimeout(() => setSrc(currentSrc), 10);
      logAction('iframe_refresh', { url: src });
    }
  };

  const openInNewTab = () => {
    if (src) {
      window.open(src, '_blank');
      logAction('open_in_new_tab', { url: src });
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* URL Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Application URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Enter application URL (e.g., https://example.com)"
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleUrlChange()}
            />
            <Button onClick={handleUrlChange} disabled={!inputUrl.trim()}>
              Load
            </Button>
            {src && (
              <>
                <Button variant="outline" size="icon" onClick={handleRefresh}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={openInNewTab}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
          {error && (
            <p className="text-destructive text-sm mt-2">{error}</p>
          )}
        </CardContent>
      </Card>

      {/* Iframe Container */}
      <div className="flex-1 relative border rounded-lg overflow-hidden bg-background">
        {!src ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">No Application Loaded</h3>
              <p>Enter a URL above to load a micro-application</p>
            </div>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <span>Loading application...</span>
                </div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              className="w-full h-full border-0"
              onLoad={handleLoad}
              onError={handleError}
              allowFullScreen={allowFullscreen}
              sandbox={sandbox}
            />
          </>
        )}
      </div>
    </div>
  );
};