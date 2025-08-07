/**
 * Supabase query tracker for usage analytics
 */

import { SupabaseClient } from '@supabase/supabase-js';
import { usageAnalytics } from './usageAnalytics';

// Wrap Supabase client methods to add tracking
export function createTrackedSupabaseClient(client: SupabaseClient) {
  const originalFrom = client.from.bind(client);
  
  client.from = function(table: string) {
    const queryBuilder = originalFrom(table);
    
    // Track table access
    usageAnalytics.trackSupabaseQuery(table, 'access');
    
    // Wrap common methods
    const originalSelect = queryBuilder.select.bind(queryBuilder);
    const originalInsert = queryBuilder.insert.bind(queryBuilder);
    const originalUpdate = queryBuilder.update.bind(queryBuilder);
    const originalDelete = queryBuilder.delete.bind(queryBuilder);
    const originalUpsert = queryBuilder.upsert.bind(queryBuilder);

    queryBuilder.select = function(columns?: string, options?: any) {
      const columnList = typeof columns === 'string' ? columns.split(',').map(c => c.trim()) : undefined;
      usageAnalytics.trackSupabaseQuery(table, 'select', columnList);
      return originalSelect(columns, options);
    };

    queryBuilder.insert = function(values: any, options?: any) {
      usageAnalytics.trackSupabaseQuery(table, 'insert');
      return originalInsert(values, options);
    };

    queryBuilder.update = function(values: any, options?: any) {
      usageAnalytics.trackSupabaseQuery(table, 'update');
      return originalUpdate(values, options);
    };

    queryBuilder.delete = function(options?: any) {
      usageAnalytics.trackSupabaseQuery(table, 'delete');
      return originalDelete(options);
    };

    queryBuilder.upsert = function(values: any, options?: any) {
      usageAnalytics.trackSupabaseQuery(table, 'upsert');
      return originalUpsert(values, options);
    };

    return queryBuilder;
  };

  return client;
}

// Calendar-specific tables to monitor for removal
export const CALENDAR_TABLES = [
  'appointments',
  'appointment_templates',
  'clinician_availability',
  'video_rooms'
];

export const trackCalendarQueries = {
  isCalendarTable: (tableName: string) => CALENDAR_TABLES.includes(tableName),
  
  logCalendarQuery: (tableName: string, operation: string) => {
    if (CALENDAR_TABLES.includes(tableName)) {
      usageAnalytics.trackSupabaseQuery(`calendar:${tableName}`, operation);
    }
  }
};