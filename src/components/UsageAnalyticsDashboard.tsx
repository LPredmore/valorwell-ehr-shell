/**
 * Dashboard for viewing usage analytics and identifying unused code
 */

import React, { useState } from 'react';
import { usageAnalytics } from '@/utils/usageAnalytics';
import { logger } from '@/utils/loggingService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download, Trash2, AlertTriangle } from 'lucide-react';

export const UsageAnalyticsDashboard: React.FC = () => {
  const [report, setReport] = useState(usageAnalytics.getUsageReport());
  const [logs, setLogs] = useState(logger.getLogs());

  const refreshData = () => {
    setReport(usageAnalytics.getUsageReport());
    setLogs(logger.getLogs());
  };

  const exportData = () => {
    const data = {
      analytics: usageAnalytics.exportAnalytics(),
      logs: logger.exportLogs()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `usage-report-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    usageAnalytics.clearAnalytics();
    logger.clearLogs();
    refreshData();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Usage Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor component and API usage for code cleanup
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={refreshData} variant="outline">
            Refresh
          </Button>
          <Button onClick={exportData} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={clearData} variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>
      </div>

      <Tabs defaultValue="components" className="space-y-4">
        <TabsList>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
          <TabsTrigger value="functions">Functions</TabsTrigger>
          <TabsTrigger value="unused">Unused Code</TabsTrigger>
          <TabsTrigger value="logs">Recent Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Component Usage ({report.components.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {report.components.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <span className="font-medium">{stat.component}</span>
                        <div className="text-sm text-muted-foreground">
                          Last accessed: {stat.lastAccessed.toLocaleString()}
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {stat.accessCount} uses
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoint Usage ({report.endpoints.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {report.endpoints.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <span className="font-medium">{stat.endpoint}</span>
                        <div className="text-sm text-muted-foreground">
                          Last accessed: {stat.lastAccessed.toLocaleString()}
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {stat.accessCount} calls
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="functions">
          <Card>
            <CardHeader>
              <CardTitle>Function Usage ({report.functions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {report.functions.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <span className="font-medium">{stat.function}</span>
                        <div className="text-sm text-muted-foreground">
                          Last accessed: {stat.lastAccessed.toLocaleString()}
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {stat.accessCount} calls
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unused">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Potentially Unused Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Components ({report.unused.components.length})</h4>
                    <ScrollArea className="h-32">
                      <div className="space-y-1">
                        {report.unused.components.map((component, index) => (
                          <Badge key={index} variant="outline" className="block">
                            {component}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Endpoints ({report.unused.endpoints.length})</h4>
                    <ScrollArea className="h-32">
                      <div className="space-y-1">
                        {report.unused.endpoints.map((endpoint, index) => (
                          <Badge key={index} variant="outline" className="block">
                            {endpoint}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Functions ({report.unused.functions.length})</h4>
                    <ScrollArea className="h-32">
                      <div className="space-y-1">
                        {report.unused.functions.map((func, index) => (
                          <Badge key={index} variant="outline" className="block">
                            {func}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Recent Logs ({logs.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {logs.slice(-50).reverse().map((log, index) => (
                    <div key={index} className="p-3 border rounded text-sm">
                      <div className="flex items-center justify-between">
                        <Badge variant={log.level === 'error' ? 'destructive' : 'secondary'}>
                          {log.level}
                        </Badge>
                        <span className="text-muted-foreground">
                          {log.timestamp.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-1 font-medium">{log.message}</div>
                      {log.context && (
                        <div className="mt-1 text-muted-foreground">
                          {JSON.stringify(log.context, null, 2)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};