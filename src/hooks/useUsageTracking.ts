/**
 * Usage tracking hook for monitoring component and API usage
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { logger, performanceLogger } from '@/utils/loggingService';

export interface UsageTrackingOptions {
  componentName?: string;
  trackMount?: boolean;
  trackUnmount?: boolean;
  trackProps?: boolean;
  trackRenders?: boolean;
}

export const useUsageTracking = (
  componentName: string,
  options: UsageTrackingOptions = {}
) => {
  const {
    trackMount = true,
    trackUnmount = true,
    trackProps = false,
    trackRenders = false
  } = options;

  const renderCount = useRef(0);
  const mountTime = useRef<number>();
  const location = useLocation();

  // Track component mount
  useEffect(() => {
    if (trackMount) {
      mountTime.current = performance.now();
      logger.info(`Component mounted: ${componentName}`, {
        component: componentName,
        action: 'mount',
        route: location.pathname,
        timestamp: new Date().toISOString()
      });
    }

    return () => {
      if (trackUnmount && mountTime.current) {
        const duration = performance.now() - mountTime.current;
        logger.info(`Component unmounted: ${componentName}`, {
          component: componentName,
          action: 'unmount',
          duration,
          renderCount: renderCount.current,
          route: location.pathname
        });
      }
    };
  }, [componentName, trackMount, trackUnmount, location.pathname]);

  // Track renders
  useEffect(() => {
    if (trackRenders) {
      renderCount.current++;
      logger.debug(`Component rendered: ${componentName}`, {
        component: componentName,
        action: 'render',
        renderCount: renderCount.current,
        route: location.pathname
      });
    }
  });

  return {
    logAction: (action: string, context: Record<string, any> = {}) => {
      logger.info(`${componentName}: ${action}`, {
        component: componentName,
        action,
        route: location.pathname,
        ...context
      });
    },
    
    logApiCall: (endpoint: string, method: string = 'GET') => {
      return performanceLogger.measureAsync(
        `API: ${method} ${endpoint}`,
        async () => {
          logger.info(`API call from ${componentName}`, {
            component: componentName,
            action: 'api_call',
            endpoint,
            method,
            route: location.pathname
          });
        },
        { component: componentName, endpoint, method }
      );
    },

    logError: (error: Error, context: Record<string, any> = {}) => {
      logger.error(`Error in ${componentName}`, {
        component: componentName,
        action: 'error',
        route: location.pathname,
        ...context
      }, error);
    }
  };
};

// Route tracking hook
export const useRouteTracking = () => {
  const location = useLocation();
  const visitTime = useRef<number>();

  useEffect(() => {
    visitTime.current = performance.now();
    
    logger.info(`Route accessed: ${location.pathname}`, {
      action: 'route_access',
      route: location.pathname,
      search: location.search,
      hash: location.hash
    });

    return () => {
      if (visitTime.current) {
        const duration = performance.now() - visitTime.current;
        logger.info(`Route left: ${location.pathname}`, {
          action: 'route_leave',
          route: location.pathname,
          duration
        });
      }
    };
  }, [location]);
};