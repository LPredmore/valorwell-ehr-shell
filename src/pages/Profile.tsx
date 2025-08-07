import React from 'react';

export const Profile: React.FC = () => {
  // Add iframe-specific parameters to the URL
  const iframeUrl = 'https://valorwell-ehr-staff-profile.lovable.app/?hideHeader=true&hideSidebar=true&parentOrigin=' + 
                   encodeURIComponent(window.location.origin);

  return (
    <div className="h-full">
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden'
        }}
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        title="Staff Profile Application"
        onLoad={(e) => {
          console.log('Profile iframe loaded');
        }}
        onError={(e) => {
          console.error('Profile iframe failed to load:', e);
        }}
      />
    </div>
  );
};