
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';
import { useUsageTracking } from '@/hooks/useUsageTracking';

export const Calendar: React.FC = () => {
  const { logAction } = useUsageTracking('Calendar', { trackMount: true });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Micro-application container for external tools
          </p>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="space-y-4 h-[calc(100vh-200px)]">
        <IframeContainer 
          title="Calendar Micro-App"
          allowFullscreen={true}
        />
      </div>
    </div>
  );
};

export default Calendar;
