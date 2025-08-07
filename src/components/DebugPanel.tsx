/**
 * Debug panel for development and troubleshooting
 */

import React, { useState } from 'react';
import { logger } from '@/utils/loggingService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Bug, Download, Trash2 } from 'lucide-react';

interface DebugPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({ isOpen, onClose }) => {
  const [selectedLog, setSelectedLog] = useState<any>(null);

  if (!isOpen) return null;

  const logs = logger.getLogs();
  const recentErrors = logger.getRecentErrors();

  const handleExportLogs = () => {
    const logsData = logger.exportLogs();
    const blob = new Blob([logsData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `debug-logs-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearLogs = () => {
    logger.clearLogs();
    setSelectedLog(null);
  };


  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error':
      case 'fatal':
        return 'destructive';
      case 'warn':
        return 'secondary';
      case 'info':
        return 'default';
      case 'debug':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bug className="w-5 h-5" />
              Debug Panel
            </CardTitle>
            <CardDescription>
              Development debugging and error tracking
            </CardDescription>
          </div>
          <Button variant="ghost" onClick={onClose}>
            ×
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden">
          <Tabs defaultValue="logs" className="h-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="logs">Logs ({logs.length})</TabsTrigger>
              <TabsTrigger value="errors">
                Errors ({recentErrors.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logs" className="h-full mt-4">
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleExportLogs}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleClearLogs}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 h-[calc(100%-60px)]">
                <ScrollArea className="border rounded p-2">
                  <div className="space-y-1">
                    {logs.slice(-100).reverse().map((log, index) => (
                      <div
                        key={index}
                        className={`p-2 text-xs rounded cursor-pointer hover:bg-muted ${
                          selectedLog === log ? 'bg-muted' : ''
                        }`}
                        onClick={() => setSelectedLog(log)}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={getLevelColor(log.level)}>
                            {log.level}
                          </Badge>
                          <span className="text-muted-foreground">
                            {log.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="truncate">{log.message}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <ScrollArea className="border rounded p-4">
                  {selectedLog ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Message</h4>
                        <p className="text-sm">{selectedLog.message}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Context</h4>
                        <pre className="text-xs bg-muted p-2 rounded overflow-auto">
                          {JSON.stringify(selectedLog.context, null, 2)}
                        </pre>
                      </div>

                      {selectedLog.stack && (
                        <div>
                          <h4 className="font-semibold">Stack Trace</h4>
                          <pre className="text-xs bg-muted p-2 rounded overflow-auto">
                            {selectedLog.stack}
                          </pre>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      Select a log entry to view details
                    </div>
                  )}
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="errors" className="h-full mt-4">
              <ScrollArea className="h-full">
                <div className="space-y-4">
                  {recentErrors.map((error, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-sm text-destructive">
                          {error.message}
                        </CardTitle>
                        <CardDescription>
                          {error.timestamp.toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      {error.context && (
                        <CardContent>
                          <pre className="text-xs bg-muted p-2 rounded overflow-auto">
                            {JSON.stringify(error.context, null, 2)}
                          </pre>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};