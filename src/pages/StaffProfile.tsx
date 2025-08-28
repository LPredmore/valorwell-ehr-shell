
import React, { useEffect } from 'react';
import { IframeContainer } from '@/components/IframeContainer';
import { messageHandler } from '@/utils/iframeMessageHandler';

export const StaffProfile: React.FC = () => {
  // Get the staff profile URL from environment variables with fallback
  const staffProfileUrl = import.meta.env.VITE_STAFF_PROFILE_URL || 'http://localhost:8081';
  
  // Construct the URL with iframe-specific parameters
  const iframeUrl = `${staffProfileUrl}?hideHeader=true&hideSidebar=true&parentOrigin=${encodeURIComponent(window.location.origin)}`;

  useEffect(() => {
    console.log('[StaffProfile] Setting up message listeners for iframe communication');

    // Listen for messages from staff profile iframe
    const handleProfileMessage = (data: any, origin: string) => {
      console.log('[StaffProfile] Received message from iframe:', {
        type: 'profile-message',
        data,
        origin,
        timestamp: new Date().toISOString()
      });
      // Handle different message types as needed
    };

    const handleReadyMessage = (data: any, origin: string) => {
      console.log('[StaffProfile] Staff profile iframe is ready:', { data, origin });
    };

    const handleNavigationMessage = (data: any, origin: string) => {
      console.log('[StaffProfile] Navigation event from iframe:', { data, origin });
    };

    const handleSaveSuccess = (data: any, origin: string) => {
      console.log('[StaffProfile] Profile save success:', { data, origin });
    };

    const handleSaveError = (data: any, origin: string) => {
      console.error('[StaffProfile] Profile save error:', { data, origin });
    };

    // Register message listeners
    messageHandler.on('ready', handleReadyMessage);
    messageHandler.on('navigation', handleNavigationMessage);
    messageHandler.on('profile-save-success', handleSaveSuccess);
    messageHandler.on('profile-save-error', handleSaveError);
    messageHandler.on('profile-message', handleProfileMessage);

    return () => {
      // Clean up listeners on component unmount
      console.log('[StaffProfile] Cleaning up message listeners');
      messageHandler.off('ready', handleReadyMessage);
      messageHandler.off('navigation', handleNavigationMessage);
      messageHandler.off('profile-save-success', handleSaveSuccess);
      messageHandler.off('profile-save-error', handleSaveError);
      messageHandler.off('profile-message', handleProfileMessage);
    };
  }, []);

  return (
    <div className="h-full">
      <IframeContainer 
        title="Staff Profile Management"
        initialSrc={iframeUrl}
        allowFullscreen={true}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};
