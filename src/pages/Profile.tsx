
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-full">
      <IframeContainer 
        title="User Profile Management"
        initialSrc=""
        allowFullscreen={true}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
};
