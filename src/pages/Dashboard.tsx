
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const Dashboard: React.FC = () => {
  return (
    <IframeContainer 
      title="Dashboard Management"
      initialSrc=""
      allowFullscreen={true}
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
    />
  );
};
