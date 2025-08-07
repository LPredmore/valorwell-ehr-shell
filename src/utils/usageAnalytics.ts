/**
 * Enhanced usage analytics for code cleanup and optimization
 */

import { logger } from './loggingService';

export interface UsageStats {
  component: string;
  endpoint?: string;
  function?: string;
  accessCount: number;
  lastAccessed: Date;
  firstAccessed: Date;
}

class UsageAnalyticsService {
  private stats = new Map<string, UsageStats>();
  private maxStats = 10000;

  trackComponentUsage(componentName: string) {
    this.updateStats('component', componentName);
    logger.info('Component accessed', {
      component: componentName,
      action: 'component_access',
      timestamp: new Date().toISOString()
    });
  }

  trackApiEndpoint(endpoint: string, method: string = 'GET', tableName?: string) {
    const key = `${method}:${endpoint}`;
    this.updateStats('endpoint', key);
    logger.info('API endpoint accessed', {
      action: 'api_access',
      endpoint,
      method,
      tableName,
      timestamp: new Date().toISOString()
    });
  }

  trackFunctionCall(functionName: string, module?: string) {
    const key = module ? `${module}.${functionName}` : functionName;
    this.updateStats('function', key);
    logger.info('Function called', {
      action: 'function_call',
      function: functionName,
      module,
      timestamp: new Date().toISOString()
    });
  }

  trackSupabaseQuery(table: string, operation: string, columns?: string[]) {
    const key = `supabase:${table}:${operation}`;
    this.updateStats('endpoint', key);
    logger.info('Supabase query executed', {
      action: 'supabase_query',
      table,
      operation,
      columns: columns?.join(','),
      timestamp: new Date().toISOString()
    });
  }

  private updateStats(type: 'component' | 'endpoint' | 'function', identifier: string) {
    const key = `${type}:${identifier}`;
    const existing = this.stats.get(key);
    const now = new Date();

    if (existing) {
      existing.accessCount++;
      existing.lastAccessed = now;
    } else {
      this.stats.set(key, {
        component: type === 'component' ? identifier : '',
        endpoint: type === 'endpoint' ? identifier : undefined,
        function: type === 'function' ? identifier : undefined,
        accessCount: 1,
        lastAccessed: now,
        firstAccessed: now
      });
    }

    // Cleanup old stats
    if (this.stats.size > this.maxStats) {
      const oldestKeys = Array.from(this.stats.entries())
        .sort(([,a], [,b]) => a.lastAccessed.getTime() - b.lastAccessed.getTime())
        .slice(0, this.stats.size - this.maxStats)
        .map(([key]) => key);
      
      oldestKeys.forEach(key => this.stats.delete(key));
    }
  }

  getUsageReport(daysBack = 30): {
    components: UsageStats[];
    endpoints: UsageStats[];
    functions: UsageStats[];
    unused: { components: string[]; endpoints: string[]; functions: string[] };
  } {
    const cutoff = new Date(Date.now() - (daysBack * 24 * 60 * 60 * 1000));
    const components: UsageStats[] = [];
    const endpoints: UsageStats[] = [];
    const functions: UsageStats[] = [];

    this.stats.forEach((stat) => {
      if (stat.component) components.push(stat);
      if (stat.endpoint) endpoints.push(stat);
      if (stat.function) functions.push(stat);
    });

    // Identify unused items (not accessed in the specified time period)
    const unused = {
      components: components.filter(s => s.lastAccessed < cutoff).map(s => s.component),
      endpoints: endpoints.filter(s => s.lastAccessed < cutoff).map(s => s.endpoint!),
      functions: functions.filter(s => s.lastAccessed < cutoff).map(s => s.function!)
    };

    return {
      components: components.sort((a, b) => b.accessCount - a.accessCount),
      endpoints: endpoints.sort((a, b) => b.accessCount - a.accessCount),
      functions: functions.sort((a, b) => b.accessCount - a.accessCount),
      unused
    };
  }

  exportAnalytics(): string {
    const report = this.getUsageReport();
    return JSON.stringify({
      generatedAt: new Date().toISOString(),
      stats: Object.fromEntries(this.stats),
      summary: {
        totalComponents: report.components.length,
        totalEndpoints: report.endpoints.length,
        totalFunctions: report.functions.length,
        unusedComponents: report.unused.components.length,
        unusedEndpoints: report.unused.endpoints.length,
        unusedFunctions: report.unused.functions.length
      },
      report
    }, null, 2);
  }

  clearAnalytics() {
    this.stats.clear();
  }
}

export const usageAnalytics = new UsageAnalyticsService();
