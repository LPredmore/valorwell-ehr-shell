
import React, { useEffect } from 'react';
import { IframeContainer } from '@/components/IframeContainer';
import { messageHandler } from '@/utils/iframeMessageHandler';
import { useAuth } from '@/context/AuthContext';

export const StaffProfile: React.FC = () => {
  const { user, session } = useAuth();
  
  // Get the staff profile URL from environment variables with fallback
  const staffProfileUrl = import.meta.env.VITE_STAFF_PROFILE_URL || 'https://valorwell-custom-final.lovable.app';
  
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
      
      // Send ready acknowledgment - IframeContainer handles message sending
      console.log('[StaffProfile] Sending ready-ack message');
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

    const handleProfileLoaded = (data: any, origin: string) => {
      console.log('[StaffProfile] Profile loaded in iframe:', { data, origin });
    };

    const handleProfileUpdated = (data: any, origin: string) => {
      console.log('[StaffProfile] Profile updated in iframe:', { data, origin });
    };

    const handleAuthRequired = (data: any, origin: string) => {
      console.log('[StaffProfile] Iframe requesting authentication:', { data, origin });
      // IframeContainer automatically sends auth-state on load and when needed
    };

    const handleRequestAuthState = (data: any, origin: string) => {
      console.log('[StaffProfile] Iframe requesting current auth state:', { data, origin });
      // IframeContainer automatically handles auth-state messages
    };

    // Register message listeners
    messageHandler.on('ready', handleReadyMessage);
    messageHandler.on('navigation', handleNavigationMessage);
    messageHandler.on('profile-save-success', handleSaveSuccess);
    messageHandler.on('profile-save-error', handleSaveError);
    messageHandler.on('profile-message', handleProfileMessage);
    messageHandler.on('profile-loaded', handleProfileLoaded);
    messageHandler.on('profile-updated', handleProfileUpdated);
    messageHandler.on('auth-required', handleAuthRequired);
    messageHandler.on('request-auth-state', handleRequestAuthState);

    return () => {
      // Clean up listeners on component unmount
      console.log('[StaffProfile] Cleaning up message listeners');
      messageHandler.off('ready', handleReadyMessage);
      messageHandler.off('navigation', handleNavigationMessage);
      messageHandler.off('profile-save-success', handleSaveSuccess);
      messageHandler.off('profile-save-error', handleSaveError);
      messageHandler.off('profile-message', handleProfileMessage);
      messageHandler.off('profile-loaded', handleProfileLoaded);
      messageHandler.off('profile-updated', handleProfileUpdated);
      messageHandler.off('auth-required', handleAuthRequired);
      messageHandler.off('request-auth-state', handleRequestAuthState);
    };
  }, [user, session]);

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
