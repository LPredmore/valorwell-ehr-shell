
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';
import { useUsageTracking } from '@/hooks/useUsageTracking';

export const ClientList: React.FC = () => {
  useUsageTracking('ClientList');

  return (
    <div className="h-full">
      <IframeContainer 
        title="Client Management System"
        initialSrc=""
      />
    </div>
  );
};
