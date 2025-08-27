
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const StaffProfile: React.FC = () => {
  // Get the staff profile URL from environment variables with fallback
  const staffProfileUrl = import.meta.env.VITE_STAFF_PROFILE_URL || 'http://localhost:8081';
  
  // Construct the URL with iframe-specific parameters
  const iframeUrl = `${staffProfileUrl}?hideHeader=true&hideSidebar=true&parentOrigin=${encodeURIComponent(window.location.origin)}`;

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
