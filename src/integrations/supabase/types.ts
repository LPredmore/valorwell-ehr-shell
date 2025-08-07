export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      api_logs: {
        Row: {
          client_context: Json | null
          client_id: string | null
          correlation_id: string | null
          created_at: string
          endpoint: string
          error_category: Database["public"]["Enums"]["error_category"] | null
          error_message: string | null
          error_severity: Database["public"]["Enums"]["error_severity"] | null
          id: string
          processing_time_ms: number | null
          request_payload: Json | null
          resolution_notes: string | null
          resolution_status:
            | Database["public"]["Enums"]["resolution_status"]
            | null
          resolved_at: string | null
          resolved_by: string | null
          response_data: Json | null
          response_time_ms: number | null
          retry_count: number | null
          status: string
          user_context: Json | null
        }
        Insert: {
          client_context?: Json | null
          client_id?: string | null
          correlation_id?: string | null
          created_at?: string
          endpoint: string
          error_category?: Database["public"]["Enums"]["error_category"] | null
          error_message?: string | null
          error_severity?: Database["public"]["Enums"]["error_severity"] | null
          id?: string
          processing_time_ms?: number | null
          request_payload?: Json | null
          resolution_notes?: string | null
          resolution_status?:
            | Database["public"]["Enums"]["resolution_status"]
            | null
          resolved_at?: string | null
          resolved_by?: string | null
          response_data?: Json | null
          response_time_ms?: number | null
          retry_count?: number | null
          status: string
          user_context?: Json | null
        }
        Update: {
          client_context?: Json | null
          client_id?: string | null
          correlation_id?: string | null
          created_at?: string
          endpoint?: string
          error_category?: Database["public"]["Enums"]["error_category"] | null
          error_message?: string | null
          error_severity?: Database["public"]["Enums"]["error_severity"] | null
          id?: string
          processing_time_ms?: number | null
          request_payload?: Json | null
          resolution_notes?: string | null
          resolution_status?:
            | Database["public"]["Enums"]["resolution_status"]
            | null
          resolved_at?: string | null
          resolved_by?: string | null
          response_data?: Json | null
          response_time_ms?: number | null
          retry_count?: number | null
          status?: string
          user_context?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "api_logs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_sync_mapping: {
        Row: {
          appointment_id: string
          created_at: string | null
          id: string
          last_synced_at: string | null
          nylas_calendar_id: string
          nylas_event_id: string
          sync_status: string | null
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          id?: string
          last_synced_at?: string | null
          nylas_calendar_id: string
          nylas_event_id: string
          sync_status?: string | null
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          id?: string
          last_synced_at?: string | null
          nylas_calendar_id?: string
          nylas_event_id?: string
          sync_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointment_sync_mapping_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_sync_mapping_nylas_calendar_id_fkey"
            columns: ["nylas_calendar_id"]
            isOneToOne: false
            referencedRelation: "nylas_calendars"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_templates: {
        Row: {
          color: string | null
          created_at: string
          default_notes: string | null
          default_status: string
          default_type: string
          description: string | null
          duration: number
          id: string
          is_default: boolean | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          default_notes?: string | null
          default_status?: string
          default_type?: string
          description?: string | null
          duration: number
          id?: string
          is_default?: boolean | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          default_notes?: string | null
          default_status?: string
          default_type?: string
          description?: string | null
          duration?: number
          id?: string
          is_default?: boolean | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_recurring: string | null
          buffer_after: number | null
          buffer_before: number | null
          client_email: string | null
          client_id: string
          client_name: string | null
          client_timezone: Database["public"]["Enums"]["time_zones"] | null
          clinician_email: string | null
          clinician_id: string
          clinician_name: string | null
          created_at: string
          date_of_session: string | null
          end_at: string
          flexibility_window: Json | null
          id: string
          is_flexible: boolean | null
          last_real_time_update: string | null
          last_synced_at: string | null
          notes: string | null
          priority: number | null
          real_time_update_source: string | null
          recurring_group_id: string | null
          start_at: string
          status: string
          template_id: string | null
          type: string
          updated_at: string
          video_room_url: string | null
        }
        Insert: {
          appointment_recurring?: string | null
          buffer_after?: number | null
          buffer_before?: number | null
          client_email?: string | null
          client_id: string
          client_name?: string | null
          client_timezone?: Database["public"]["Enums"]["time_zones"] | null
          clinician_email?: string | null
          clinician_id: string
          clinician_name?: string | null
          created_at?: string
          date_of_session?: string | null
          end_at: string
          flexibility_window?: Json | null
          id?: string
          is_flexible?: boolean | null
          last_real_time_update?: string | null
          last_synced_at?: string | null
          notes?: string | null
          priority?: number | null
          real_time_update_source?: string | null
          recurring_group_id?: string | null
          start_at: string
          status?: string
          template_id?: string | null
          type: string
          updated_at?: string
          video_room_url?: string | null
        }
        Update: {
          appointment_recurring?: string | null
          buffer_after?: number | null
          buffer_before?: number | null
          client_email?: string | null
          client_id?: string
          client_name?: string | null
          client_timezone?: Database["public"]["Enums"]["time_zones"] | null
          clinician_email?: string | null
          clinician_id?: string
          clinician_name?: string | null
          created_at?: string
          date_of_session?: string | null
          end_at?: string
          flexibility_window?: Json | null
          id?: string
          is_flexible?: boolean | null
          last_real_time_update?: string | null
          last_synced_at?: string | null
          notes?: string | null
          priority?: number | null
          real_time_update_source?: string | null
          recurring_group_id?: string | null
          start_at?: string
          status?: string
          template_id?: string | null
          type?: string
          updated_at?: string
          video_room_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "appointment_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      automated_batch_schedules: {
        Row: {
          created_at: string | null
          cron_expression: string
          id: string
          is_active: boolean | null
          last_run_at: string | null
          next_run_at: string | null
          run_count: number | null
          schedule_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          cron_expression: string
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at?: string | null
          run_count?: number | null
          schedule_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          cron_expression?: string
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at?: string | null
          run_count?: number | null
          schedule_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      availability_blocks: {
        Row: {
          clinician_id: string
          created_at: string
          end_at: string
          id: string
          is_active: boolean
          recurring_pattern: Json | null
          start_at: string
          updated_at: string
        }
        Insert: {
          clinician_id: string
          created_at?: string
          end_at: string
          id?: string
          is_active?: boolean
          recurring_pattern?: Json | null
          start_at: string
          updated_at?: string
        }
        Update: {
          clinician_id?: string
          created_at?: string
          end_at?: string
          id?: string
          is_active?: boolean
          recurring_pattern?: Json | null
          start_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "availability_blocks_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      availability_exceptions: {
        Row: {
          clinician_id: string
          created_at: string | null
          day_of_week: string | null
          end_time: string
          id: string
          is_active: boolean | null
          is_deleted: boolean | null
          specific_date: string
          start_time: string
          updated_at: string | null
        }
        Insert: {
          clinician_id: string
          created_at?: string | null
          day_of_week?: string | null
          end_time: string
          id?: string
          is_active?: boolean | null
          is_deleted?: boolean | null
          specific_date: string
          start_time: string
          updated_at?: string | null
        }
        Update: {
          clinician_id?: string
          created_at?: string | null
          day_of_week?: string | null
          end_time?: string
          id?: string
          is_active?: boolean | null
          is_deleted?: boolean | null
          specific_date?: string
          start_time?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      availability_sync_status: {
        Row: {
          clinician_id: string
          created_at: string | null
          day_of_week: string
          error_message: string | null
          id: string
          last_synced_at: string | null
          nylas_event_id: string | null
          slot_number: number
          sync_status: string | null
          updated_at: string | null
        }
        Insert: {
          clinician_id: string
          created_at?: string | null
          day_of_week: string
          error_message?: string | null
          id?: string
          last_synced_at?: string | null
          nylas_event_id?: string | null
          slot_number: number
          sync_status?: string | null
          updated_at?: string | null
        }
        Update: {
          clinician_id?: string
          created_at?: string | null
          day_of_week?: string
          error_message?: string | null
          id?: string
          last_synced_at?: string | null
          nylas_event_id?: string | null
          slot_number?: number
          sync_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "availability_sync_status_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      batch_claims: {
        Row: {
          batch_log_id: string | null
          claim_id: string | null
          created_at: string | null
          error_details: Json | null
          id: string
          status: string | null
          submission_order: number | null
          updated_at: string | null
        }
        Insert: {
          batch_log_id?: string | null
          claim_id?: string | null
          created_at?: string | null
          error_details?: Json | null
          id?: string
          status?: string | null
          submission_order?: number | null
          updated_at?: string | null
        }
        Update: {
          batch_log_id?: string | null
          claim_id?: string | null
          created_at?: string | null
          error_details?: Json | null
          id?: string
          status?: string | null
          submission_order?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "batch_claims_batch_log_id_fkey"
            columns: ["batch_log_id"]
            isOneToOne: false
            referencedRelation: "batch_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "batch_claims_claim_id_fkey"
            columns: ["claim_id"]
            isOneToOne: false
            referencedRelation: "CMS1500_claims"
            referencedColumns: ["id"]
          },
        ]
      }
      batch_logs: {
        Row: {
          batch_id: string
          claims_count: number | null
          created_at: string | null
          failed_claims: number | null
          file_name: string | null
          id: string
          response_body: Json | null
          response_code: number | null
          status: string | null
          successful_claims: number | null
          updated_at: string | null
          upload_time: string | null
        }
        Insert: {
          batch_id: string
          claims_count?: number | null
          created_at?: string | null
          failed_claims?: number | null
          file_name?: string | null
          id?: string
          response_body?: Json | null
          response_code?: number | null
          status?: string | null
          successful_claims?: number | null
          updated_at?: string | null
          upload_time?: string | null
        }
        Update: {
          batch_id?: string
          claims_count?: number | null
          created_at?: string | null
          failed_claims?: number | null
          file_name?: string | null
          id?: string
          response_body?: Json | null
          response_code?: number | null
          status?: string | null
          successful_claims?: number | null
          updated_at?: string | null
          upload_time?: string | null
        }
        Relationships: []
      }
      batch_performance_metrics: {
        Row: {
          average_response_time_ms: number | null
          batch_date: string
          created_at: string | null
          error_rate_percent: number | null
          failed_claims: number | null
          id: string
          processing_time_minutes: number | null
          successful_claims: number | null
          total_claims: number | null
          updated_at: string | null
        }
        Insert: {
          average_response_time_ms?: number | null
          batch_date: string
          created_at?: string | null
          error_rate_percent?: number | null
          failed_claims?: number | null
          id?: string
          processing_time_minutes?: number | null
          successful_claims?: number | null
          total_claims?: number | null
          updated_at?: string | null
        }
        Update: {
          average_response_time_ms?: number | null
          batch_date?: string
          created_at?: string | null
          error_rate_percent?: number | null
          failed_claims?: number | null
          id?: string
          processing_time_minutes?: number | null
          successful_claims?: number | null
          total_claims?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blocked_time: {
        Row: {
          clinician_id: string
          created_at: string
          end_at: string
          id: string
          label: string
          notes: string | null
          start_at: string
          updated_at: string
        }
        Insert: {
          clinician_id: string
          created_at?: string
          end_at: string
          id?: string
          label?: string
          notes?: string | null
          start_at: string
          updated_at?: string
        }
        Update: {
          clinician_id?: string
          created_at?: string
          end_at?: string
          id?: string
          label?: string
          notes?: string | null
          start_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocked_time_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_sync_logs: {
        Row: {
          appointment_id: string | null
          connection_id: string
          created_at: string | null
          error_message: string | null
          external_event_id: string | null
          id: string
          operation: string
          status: string
          sync_data: Json | null
          sync_type: string
        }
        Insert: {
          appointment_id?: string | null
          connection_id: string
          created_at?: string | null
          error_message?: string | null
          external_event_id?: string | null
          id?: string
          operation: string
          status?: string
          sync_data?: Json | null
          sync_type: string
        }
        Update: {
          appointment_id?: string | null
          connection_id?: string
          created_at?: string | null
          error_message?: string | null
          external_event_id?: string | null
          id?: string
          operation?: string
          status?: string
          sync_data?: Json | null
          sync_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_sync_logs_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_sync_logs_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "nylas_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      claim_status_audit_trail: {
        Row: {
          batch_id: string | null
          changed_at: string | null
          changed_by: string | null
          claim_id: string
          created_at: string | null
          error_message: string | null
          id: string
          metadata: Json | null
          status_from: string | null
          status_to: string
        }
        Insert: {
          batch_id?: string | null
          changed_at?: string | null
          changed_by?: string | null
          claim_id: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          metadata?: Json | null
          status_from?: string | null
          status_to: string
        }
        Update: {
          batch_id?: string | null
          changed_at?: string | null
          changed_by?: string | null
          claim_id?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          metadata?: Json | null
          status_from?: string | null
          status_to?: string
        }
        Relationships: [
          {
            foreignKeyName: "claim_status_audit_trail_claim_id_fkey"
            columns: ["claim_id"]
            isOneToOne: false
            referencedRelation: "CMS1500_claims"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history: {
        Row: {
          additional_info: string | null
          additional_info2: string | null
          alcohol_use: string | null
          attempted_suicide: boolean | null
          childhood_elaboration: string | null
          chronic_health_problems: string | null
          client_id: string
          counseling_goals: string | null
          created_at: string
          current_issues: string | null
          drug_use: string | null
          education_level: string | null
          emergency_name: string | null
          emergency_phone: string | null
          emergency_relationship: string | null
          has_past_spouses: boolean | null
          has_received_mental_health_treatment: boolean | null
          hobbies: string | null
          hospitalized_psychiatric: boolean | null
          id: string
          is_family_same_as_household: boolean | null
          is_married: boolean | null
          life_changes: string | null
          occupation_details: string | null
          pdf_path: string | null
          personal_strengths: string | null
          progression_of_issues: string | null
          psych_hold: boolean | null
          relationship_problems: string | null
          selected_childhood_experiences: Json | null
          selected_medical_conditions: Json | null
          selected_symptoms: Json | null
          signature: string | null
          sleep_hours: string | null
          submission_date: string | null
          takes_medications: boolean | null
          tobacco_use: string | null
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          additional_info2?: string | null
          alcohol_use?: string | null
          attempted_suicide?: boolean | null
          childhood_elaboration?: string | null
          chronic_health_problems?: string | null
          client_id: string
          counseling_goals?: string | null
          created_at?: string
          current_issues?: string | null
          drug_use?: string | null
          education_level?: string | null
          emergency_name?: string | null
          emergency_phone?: string | null
          emergency_relationship?: string | null
          has_past_spouses?: boolean | null
          has_received_mental_health_treatment?: boolean | null
          hobbies?: string | null
          hospitalized_psychiatric?: boolean | null
          id?: string
          is_family_same_as_household?: boolean | null
          is_married?: boolean | null
          life_changes?: string | null
          occupation_details?: string | null
          pdf_path?: string | null
          personal_strengths?: string | null
          progression_of_issues?: string | null
          psych_hold?: boolean | null
          relationship_problems?: string | null
          selected_childhood_experiences?: Json | null
          selected_medical_conditions?: Json | null
          selected_symptoms?: Json | null
          signature?: string | null
          sleep_hours?: string | null
          submission_date?: string | null
          takes_medications?: boolean | null
          tobacco_use?: string | null
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          additional_info2?: string | null
          alcohol_use?: string | null
          attempted_suicide?: boolean | null
          childhood_elaboration?: string | null
          chronic_health_problems?: string | null
          client_id?: string
          counseling_goals?: string | null
          created_at?: string
          current_issues?: string | null
          drug_use?: string | null
          education_level?: string | null
          emergency_name?: string | null
          emergency_phone?: string | null
          emergency_relationship?: string | null
          has_past_spouses?: boolean | null
          has_received_mental_health_treatment?: boolean | null
          hobbies?: string | null
          hospitalized_psychiatric?: boolean | null
          id?: string
          is_family_same_as_household?: boolean | null
          is_married?: boolean | null
          life_changes?: string | null
          occupation_details?: string | null
          pdf_path?: string | null
          personal_strengths?: string | null
          progression_of_issues?: string | null
          psych_hold?: boolean | null
          relationship_problems?: string | null
          selected_childhood_experiences?: Json | null
          selected_medical_conditions?: Json | null
          selected_symptoms?: Json | null
          signature?: string | null
          sleep_hours?: string | null
          submission_date?: string | null
          takes_medications?: boolean | null
          tobacco_use?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_current_spouse: {
        Row: {
          created_at: string
          history_id: string
          id: string
          name: string | null
          personality: string | null
          relationship: string | null
        }
        Insert: {
          created_at?: string
          history_id: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship?: string | null
        }
        Update: {
          created_at?: string
          history_id?: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_current_spouse_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_family: {
        Row: {
          created_at: string
          history_id: string
          id: string
          name: string | null
          personality: string | null
          relationship_growing: string | null
          relationship_now: string | null
          relationship_type: string | null
        }
        Insert: {
          created_at?: string
          history_id: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship_growing?: string | null
          relationship_now?: string | null
          relationship_type?: string | null
        }
        Update: {
          created_at?: string
          history_id?: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship_growing?: string | null
          relationship_now?: string | null
          relationship_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_family_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_household: {
        Row: {
          created_at: string
          history_id: string
          id: string
          name: string | null
          personality: string | null
          relationship_now: string | null
          relationship_type: string | null
        }
        Insert: {
          created_at?: string
          history_id: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship_now?: string | null
          relationship_type?: string | null
        }
        Update: {
          created_at?: string
          history_id?: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship_now?: string | null
          relationship_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_household_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_medications: {
        Row: {
          created_at: string
          duration: string | null
          history_id: string
          id: string
          name: string | null
          purpose: string | null
        }
        Insert: {
          created_at?: string
          duration?: string | null
          history_id: string
          id?: string
          name?: string | null
          purpose?: string | null
        }
        Update: {
          created_at?: string
          duration?: string | null
          history_id?: string
          id?: string
          name?: string | null
          purpose?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_medications_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_spouses: {
        Row: {
          created_at: string
          history_id: string
          id: string
          name: string | null
          personality: string | null
          relationship: string | null
        }
        Insert: {
          created_at?: string
          history_id: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship?: string | null
        }
        Update: {
          created_at?: string
          history_id?: string
          id?: string
          name?: string | null
          personality?: string | null
          relationship?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_spouses_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      client_history_treatments: {
        Row: {
          created_at: string
          history_id: string
          id: string
          length: string | null
          provider: string | null
          reason: string | null
          year: string | null
        }
        Insert: {
          created_at?: string
          history_id: string
          id?: string
          length?: string | null
          provider?: string | null
          reason?: string | null
          year?: string | null
        }
        Update: {
          created_at?: string
          history_id?: string
          id?: string
          length?: string | null
          provider?: string | null
          reason?: string | null
          year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_history_treatments_history_id_fkey"
            columns: ["history_id"]
            isOneToOne: false
            referencedRelation: "client_history"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          client_address: string | null
          client_affect: string | null
          client_age: number | null
          client_appearance: string | null
          client_assigned_therapist: string | null
          client_attitude: string | null
          client_behavior: string | null
          client_branchOS: string | null
          client_champva: string | null
          client_city: string | null
          client_currentsymptoms: string | null
          client_date_of_birth: string | null
          client_diagnosis: string[] | null
          client_disabilityrating: string | null
          client_email: string | null
          client_first_name: string | null
          client_functioning: string | null
          client_gender: string | null
          client_gender_identity: string | null
          client_group_number_primary: string | null
          client_group_number_secondary: string | null
          client_group_number_tertiary: string | null
          client_homicidalideation: string | null
          client_insightjudgement: string | null
          client_insurance_company_primary: string | null
          client_insurance_company_secondary: string | null
          client_insurance_company_tertiary: string | null
          client_insurance_type_primary: string | null
          client_insurance_type_secondary: string | null
          client_insurance_type_tertiary: string | null
          client_intervention1: string | null
          client_intervention2: string | null
          client_intervention3: string | null
          client_intervention4: string | null
          client_intervention5: string | null
          client_intervention6: string | null
          client_is_profile_complete: string | null
          client_last_name: string | null
          client_medications: string | null
          client_memoryconcentration: string | null
          client_middle_name: string | null
          client_minor: string | null
          client_mood: string | null
          client_nexttreatmentplanupdate: string | null
          client_orientation: string | null
          client_perception: string | null
          client_personsinattendance: string | null
          client_phone: string | null
          client_planlength: string | null
          client_policy_number_primary: string | null
          client_policy_number_secondary: string | null
          client_policy_number_tertiary: string | null
          client_preferred_name: string | null
          client_primary_payer_id: string | null
          client_primaryobjective: string | null
          client_privatenote: string | null
          client_problem: string | null
          client_prognosis: string | null
          client_progress: string | null
          client_recentdischarge: string | null
          client_referral_source: string | null
          client_relationship: string | null
          client_secondary_payer_id: string | null
          client_secondaryobjective: string | null
          client_self_goal: string | null
          client_sessionnarrative: string | null
          client_speech: string | null
          client_state: string | null
          client_status: string | null
          client_subscriber_dob_primary: string | null
          client_subscriber_dob_secondary: string | null
          client_subscriber_dob_tertiary: string | null
          client_subscriber_name_primary: string | null
          client_subscriber_name_secondary: string | null
          client_subscriber_name_tertiary: string | null
          client_subscriber_relationship_primary: string | null
          client_subscriber_relationship_secondary: string | null
          client_subscriber_relationship_tertiary: string | null
          client_substanceabuserisk: string | null
          client_suicidalideation: string | null
          client_temppassword: string | null
          client_tertiary_payer_id: string | null
          client_tertiaryobjective: string | null
          client_thoughtprocess: string | null
          client_time_zone: string | null
          client_treatmentfrequency: string | null
          client_treatmentgoal: string | null
          client_treatmentplan_startdate: string | null
          client_tricare_beneficiary_category: string | null
          client_tricare_has_referral: string | null
          client_tricare_plan: string | null
          client_tricare_policy_id: string | null
          client_tricare_referral_number: string | null
          client_tricare_region: string | null
          client_tricare_sponsor_branch: string | null
          client_tricare_sponsor_id: string | null
          client_tricare_sponsor_name: string | null
          client_vacoverage: string | null
          client_zip_code: string | null
          created_at: string
          eligibility_claimmd_id_primary: string | null
          eligibility_claimmd_id_secondary: string | null
          eligibility_claimmd_id_tertiary: string | null
          eligibility_coinsurance_primary_percent: number | null
          eligibility_coinsurance_secondary_percent: number | null
          eligibility_coinsurance_tertiary_percent: number | null
          eligibility_copay_primary: number | null
          eligibility_copay_secondary: number | null
          eligibility_copay_tertiary: number | null
          eligibility_deductible_primary: number | null
          eligibility_deductible_secondary: number | null
          eligibility_deductible_tertiary: number | null
          eligibility_last_checked_primary: string | null
          eligibility_last_checked_secondary: string | null
          eligibility_last_checked_tertiary: string | null
          eligibility_response_details_primary_json: Json | null
          eligibility_response_details_secondary_json: Json | null
          eligibility_response_details_tertiary_json: Json | null
          eligibility_status_primary: string | null
          eligibility_status_secondary: string | null
          eligibility_status_tertiary: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          stripe_customer_id: string | null
          updated_at: string
        }
        Insert: {
          client_address?: string | null
          client_affect?: string | null
          client_age?: number | null
          client_appearance?: string | null
          client_assigned_therapist?: string | null
          client_attitude?: string | null
          client_behavior?: string | null
          client_branchOS?: string | null
          client_champva?: string | null
          client_city?: string | null
          client_currentsymptoms?: string | null
          client_date_of_birth?: string | null
          client_diagnosis?: string[] | null
          client_disabilityrating?: string | null
          client_email?: string | null
          client_first_name?: string | null
          client_functioning?: string | null
          client_gender?: string | null
          client_gender_identity?: string | null
          client_group_number_primary?: string | null
          client_group_number_secondary?: string | null
          client_group_number_tertiary?: string | null
          client_homicidalideation?: string | null
          client_insightjudgement?: string | null
          client_insurance_company_primary?: string | null
          client_insurance_company_secondary?: string | null
          client_insurance_company_tertiary?: string | null
          client_insurance_type_primary?: string | null
          client_insurance_type_secondary?: string | null
          client_insurance_type_tertiary?: string | null
          client_intervention1?: string | null
          client_intervention2?: string | null
          client_intervention3?: string | null
          client_intervention4?: string | null
          client_intervention5?: string | null
          client_intervention6?: string | null
          client_is_profile_complete?: string | null
          client_last_name?: string | null
          client_medications?: string | null
          client_memoryconcentration?: string | null
          client_middle_name?: string | null
          client_minor?: string | null
          client_mood?: string | null
          client_nexttreatmentplanupdate?: string | null
          client_orientation?: string | null
          client_perception?: string | null
          client_personsinattendance?: string | null
          client_phone?: string | null
          client_planlength?: string | null
          client_policy_number_primary?: string | null
          client_policy_number_secondary?: string | null
          client_policy_number_tertiary?: string | null
          client_preferred_name?: string | null
          client_primary_payer_id?: string | null
          client_primaryobjective?: string | null
          client_privatenote?: string | null
          client_problem?: string | null
          client_prognosis?: string | null
          client_progress?: string | null
          client_recentdischarge?: string | null
          client_referral_source?: string | null
          client_relationship?: string | null
          client_secondary_payer_id?: string | null
          client_secondaryobjective?: string | null
          client_self_goal?: string | null
          client_sessionnarrative?: string | null
          client_speech?: string | null
          client_state?: string | null
          client_status?: string | null
          client_subscriber_dob_primary?: string | null
          client_subscriber_dob_secondary?: string | null
          client_subscriber_dob_tertiary?: string | null
          client_subscriber_name_primary?: string | null
          client_subscriber_name_secondary?: string | null
          client_subscriber_name_tertiary?: string | null
          client_subscriber_relationship_primary?: string | null
          client_subscriber_relationship_secondary?: string | null
          client_subscriber_relationship_tertiary?: string | null
          client_substanceabuserisk?: string | null
          client_suicidalideation?: string | null
          client_temppassword?: string | null
          client_tertiary_payer_id?: string | null
          client_tertiaryobjective?: string | null
          client_thoughtprocess?: string | null
          client_time_zone?: string | null
          client_treatmentfrequency?: string | null
          client_treatmentgoal?: string | null
          client_treatmentplan_startdate?: string | null
          client_tricare_beneficiary_category?: string | null
          client_tricare_has_referral?: string | null
          client_tricare_plan?: string | null
          client_tricare_policy_id?: string | null
          client_tricare_referral_number?: string | null
          client_tricare_region?: string | null
          client_tricare_sponsor_branch?: string | null
          client_tricare_sponsor_id?: string | null
          client_tricare_sponsor_name?: string | null
          client_vacoverage?: string | null
          client_zip_code?: string | null
          created_at?: string
          eligibility_claimmd_id_primary?: string | null
          eligibility_claimmd_id_secondary?: string | null
          eligibility_claimmd_id_tertiary?: string | null
          eligibility_coinsurance_primary_percent?: number | null
          eligibility_coinsurance_secondary_percent?: number | null
          eligibility_coinsurance_tertiary_percent?: number | null
          eligibility_copay_primary?: number | null
          eligibility_copay_secondary?: number | null
          eligibility_copay_tertiary?: number | null
          eligibility_deductible_primary?: number | null
          eligibility_deductible_secondary?: number | null
          eligibility_deductible_tertiary?: number | null
          eligibility_last_checked_primary?: string | null
          eligibility_last_checked_secondary?: string | null
          eligibility_last_checked_tertiary?: string | null
          eligibility_response_details_primary_json?: Json | null
          eligibility_response_details_secondary_json?: Json | null
          eligibility_response_details_tertiary_json?: Json | null
          eligibility_status_primary?: string | null
          eligibility_status_secondary?: string | null
          eligibility_status_tertiary?: string | null
          id: string
          role?: Database["public"]["Enums"]["app_role"]
          stripe_customer_id?: string | null
          updated_at?: string
        }
        Update: {
          client_address?: string | null
          client_affect?: string | null
          client_age?: number | null
          client_appearance?: string | null
          client_assigned_therapist?: string | null
          client_attitude?: string | null
          client_behavior?: string | null
          client_branchOS?: string | null
          client_champva?: string | null
          client_city?: string | null
          client_currentsymptoms?: string | null
          client_date_of_birth?: string | null
          client_diagnosis?: string[] | null
          client_disabilityrating?: string | null
          client_email?: string | null
          client_first_name?: string | null
          client_functioning?: string | null
          client_gender?: string | null
          client_gender_identity?: string | null
          client_group_number_primary?: string | null
          client_group_number_secondary?: string | null
          client_group_number_tertiary?: string | null
          client_homicidalideation?: string | null
          client_insightjudgement?: string | null
          client_insurance_company_primary?: string | null
          client_insurance_company_secondary?: string | null
          client_insurance_company_tertiary?: string | null
          client_insurance_type_primary?: string | null
          client_insurance_type_secondary?: string | null
          client_insurance_type_tertiary?: string | null
          client_intervention1?: string | null
          client_intervention2?: string | null
          client_intervention3?: string | null
          client_intervention4?: string | null
          client_intervention5?: string | null
          client_intervention6?: string | null
          client_is_profile_complete?: string | null
          client_last_name?: string | null
          client_medications?: string | null
          client_memoryconcentration?: string | null
          client_middle_name?: string | null
          client_minor?: string | null
          client_mood?: string | null
          client_nexttreatmentplanupdate?: string | null
          client_orientation?: string | null
          client_perception?: string | null
          client_personsinattendance?: string | null
          client_phone?: string | null
          client_planlength?: string | null
          client_policy_number_primary?: string | null
          client_policy_number_secondary?: string | null
          client_policy_number_tertiary?: string | null
          client_preferred_name?: string | null
          client_primary_payer_id?: string | null
          client_primaryobjective?: string | null
          client_privatenote?: string | null
          client_problem?: string | null
          client_prognosis?: string | null
          client_progress?: string | null
          client_recentdischarge?: string | null
          client_referral_source?: string | null
          client_relationship?: string | null
          client_secondary_payer_id?: string | null
          client_secondaryobjective?: string | null
          client_self_goal?: string | null
          client_sessionnarrative?: string | null
          client_speech?: string | null
          client_state?: string | null
          client_status?: string | null
          client_subscriber_dob_primary?: string | null
          client_subscriber_dob_secondary?: string | null
          client_subscriber_dob_tertiary?: string | null
          client_subscriber_name_primary?: string | null
          client_subscriber_name_secondary?: string | null
          client_subscriber_name_tertiary?: string | null
          client_subscriber_relationship_primary?: string | null
          client_subscriber_relationship_secondary?: string | null
          client_subscriber_relationship_tertiary?: string | null
          client_substanceabuserisk?: string | null
          client_suicidalideation?: string | null
          client_temppassword?: string | null
          client_tertiary_payer_id?: string | null
          client_tertiaryobjective?: string | null
          client_thoughtprocess?: string | null
          client_time_zone?: string | null
          client_treatmentfrequency?: string | null
          client_treatmentgoal?: string | null
          client_treatmentplan_startdate?: string | null
          client_tricare_beneficiary_category?: string | null
          client_tricare_has_referral?: string | null
          client_tricare_plan?: string | null
          client_tricare_policy_id?: string | null
          client_tricare_referral_number?: string | null
          client_tricare_region?: string | null
          client_tricare_sponsor_branch?: string | null
          client_tricare_sponsor_id?: string | null
          client_tricare_sponsor_name?: string | null
          client_vacoverage?: string | null
          client_zip_code?: string | null
          created_at?: string
          eligibility_claimmd_id_primary?: string | null
          eligibility_claimmd_id_secondary?: string | null
          eligibility_claimmd_id_tertiary?: string | null
          eligibility_coinsurance_primary_percent?: number | null
          eligibility_coinsurance_secondary_percent?: number | null
          eligibility_coinsurance_tertiary_percent?: number | null
          eligibility_copay_primary?: number | null
          eligibility_copay_secondary?: number | null
          eligibility_copay_tertiary?: number | null
          eligibility_deductible_primary?: number | null
          eligibility_deductible_secondary?: number | null
          eligibility_deductible_tertiary?: number | null
          eligibility_last_checked_primary?: string | null
          eligibility_last_checked_secondary?: string | null
          eligibility_last_checked_tertiary?: string | null
          eligibility_response_details_primary_json?: Json | null
          eligibility_response_details_secondary_json?: Json | null
          eligibility_response_details_tertiary_json?: Json | null
          eligibility_status_primary?: string | null
          eligibility_status_secondary?: string | null
          eligibility_status_tertiary?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          stripe_customer_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      clinical_documents: {
        Row: {
          client_id: string
          created_at: string
          created_by: string | null
          document_date: string
          document_title: string
          document_type: string
          file_path: string
          id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          created_by?: string | null
          document_date: string
          document_title: string
          document_type: string
          file_path: string
          id?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          created_by?: string | null
          document_date?: string
          document_title?: string
          document_type?: string
          file_path?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_documents_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clinician_licenses: {
        Row: {
          clinician_id: string | null
          created_at: string | null
          expiration_date: string | null
          id: string
          issue_date: string | null
          license_number: string | null
          license_type: string | null
          state: string | null
          status: string | null
          updated_at: string | null
          verification_date: string | null
        }
        Insert: {
          clinician_id?: string | null
          created_at?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          license_number?: string | null
          license_type?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          verification_date?: string | null
        }
        Update: {
          clinician_id?: string | null
          created_at?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          license_number?: string | null
          license_type?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          verification_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clinician_licenses_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      clinicians: {
        Row: {
          clinician_accepting_new_clients:
            | Database["public"]["Enums"]["Yes/No"]
            | null
          clinician_availability_end_friday_1: string | null
          clinician_availability_end_friday_2: string | null
          clinician_availability_end_friday_3: string | null
          clinician_availability_end_monday_1: string | null
          clinician_availability_end_monday_2: string | null
          clinician_availability_end_monday_3: string | null
          clinician_availability_end_saturday_1: string | null
          clinician_availability_end_saturday_2: string | null
          clinician_availability_end_saturday_3: string | null
          clinician_availability_end_sunday_1: string | null
          clinician_availability_end_sunday_2: string | null
          clinician_availability_end_sunday_3: string | null
          clinician_availability_end_thursday_1: string | null
          clinician_availability_end_thursday_2: string | null
          clinician_availability_end_thursday_3: string | null
          clinician_availability_end_tuesday_1: string | null
          clinician_availability_end_tuesday_2: string | null
          clinician_availability_end_tuesday_3: string | null
          clinician_availability_end_wednesday_1: string | null
          clinician_availability_end_wednesday_2: string | null
          clinician_availability_end_wednesday_3: string | null
          clinician_availability_start_friday_1: string | null
          clinician_availability_start_friday_2: string | null
          clinician_availability_start_friday_3: string | null
          clinician_availability_start_monday_1: string | null
          clinician_availability_start_monday_2: string | null
          clinician_availability_start_monday_3: string | null
          clinician_availability_start_saturday_1: string | null
          clinician_availability_start_saturday_2: string | null
          clinician_availability_start_saturday_3: string | null
          clinician_availability_start_sunday_1: string | null
          clinician_availability_start_sunday_2: string | null
          clinician_availability_start_sunday_3: string | null
          clinician_availability_start_thursday_1: string | null
          clinician_availability_start_thursday_2: string | null
          clinician_availability_start_thursday_3: string | null
          clinician_availability_start_tuesday_1: string | null
          clinician_availability_start_tuesday_2: string | null
          clinician_availability_start_tuesday_3: string | null
          clinician_availability_start_wednesday_1: string | null
          clinician_availability_start_wednesday_2: string | null
          clinician_availability_start_wednesday_3: string | null
          clinician_bio: string | null
          clinician_calendar_end_time: string | null
          clinician_calendar_start_time: string | null
          clinician_email: string | null
          clinician_first_name: string | null
          clinician_image_url: string | null
          clinician_last_name: string | null
          clinician_license_type: string | null
          clinician_licensed_states: string[] | null
          clinician_max_advance_days: number | null
          clinician_min_client_age: number | null
          clinician_min_notice_days: number | null
          clinician_nameinsurance: string | null
          clinician_npi_number: string | null
          clinician_phone: string | null
          clinician_professional_name: string | null
          clinician_status:
            | Database["public"]["Enums"]["clinician_status_enum"]
            | null
          clinician_taxonomy_code: string | null
          clinician_temppassword: string | null
          clinician_time_granularity: string | null
          clinician_time_zone: string | null
          clinician_timezone: Database["public"]["Enums"]["time_zones"][] | null
          clinician_treatment_approaches: string[] | null
          clinician_type: string | null
          created_at: string
          id: string
          is_admin: boolean
          last_google_sync: string | null
          profile_id: string | null
          updated_at: string
        }
        Insert: {
          clinician_accepting_new_clients?:
            | Database["public"]["Enums"]["Yes/No"]
            | null
          clinician_availability_end_friday_1?: string | null
          clinician_availability_end_friday_2?: string | null
          clinician_availability_end_friday_3?: string | null
          clinician_availability_end_monday_1?: string | null
          clinician_availability_end_monday_2?: string | null
          clinician_availability_end_monday_3?: string | null
          clinician_availability_end_saturday_1?: string | null
          clinician_availability_end_saturday_2?: string | null
          clinician_availability_end_saturday_3?: string | null
          clinician_availability_end_sunday_1?: string | null
          clinician_availability_end_sunday_2?: string | null
          clinician_availability_end_sunday_3?: string | null
          clinician_availability_end_thursday_1?: string | null
          clinician_availability_end_thursday_2?: string | null
          clinician_availability_end_thursday_3?: string | null
          clinician_availability_end_tuesday_1?: string | null
          clinician_availability_end_tuesday_2?: string | null
          clinician_availability_end_tuesday_3?: string | null
          clinician_availability_end_wednesday_1?: string | null
          clinician_availability_end_wednesday_2?: string | null
          clinician_availability_end_wednesday_3?: string | null
          clinician_availability_start_friday_1?: string | null
          clinician_availability_start_friday_2?: string | null
          clinician_availability_start_friday_3?: string | null
          clinician_availability_start_monday_1?: string | null
          clinician_availability_start_monday_2?: string | null
          clinician_availability_start_monday_3?: string | null
          clinician_availability_start_saturday_1?: string | null
          clinician_availability_start_saturday_2?: string | null
          clinician_availability_start_saturday_3?: string | null
          clinician_availability_start_sunday_1?: string | null
          clinician_availability_start_sunday_2?: string | null
          clinician_availability_start_sunday_3?: string | null
          clinician_availability_start_thursday_1?: string | null
          clinician_availability_start_thursday_2?: string | null
          clinician_availability_start_thursday_3?: string | null
          clinician_availability_start_tuesday_1?: string | null
          clinician_availability_start_tuesday_2?: string | null
          clinician_availability_start_tuesday_3?: string | null
          clinician_availability_start_wednesday_1?: string | null
          clinician_availability_start_wednesday_2?: string | null
          clinician_availability_start_wednesday_3?: string | null
          clinician_bio?: string | null
          clinician_calendar_end_time?: string | null
          clinician_calendar_start_time?: string | null
          clinician_email?: string | null
          clinician_first_name?: string | null
          clinician_image_url?: string | null
          clinician_last_name?: string | null
          clinician_license_type?: string | null
          clinician_licensed_states?: string[] | null
          clinician_max_advance_days?: number | null
          clinician_min_client_age?: number | null
          clinician_min_notice_days?: number | null
          clinician_nameinsurance?: string | null
          clinician_npi_number?: string | null
          clinician_phone?: string | null
          clinician_professional_name?: string | null
          clinician_status?:
            | Database["public"]["Enums"]["clinician_status_enum"]
            | null
          clinician_taxonomy_code?: string | null
          clinician_temppassword?: string | null
          clinician_time_granularity?: string | null
          clinician_time_zone?: string | null
          clinician_timezone?:
            | Database["public"]["Enums"]["time_zones"][]
            | null
          clinician_treatment_approaches?: string[] | null
          clinician_type?: string | null
          created_at?: string
          id: string
          is_admin?: boolean
          last_google_sync?: string | null
          profile_id?: string | null
          updated_at?: string
        }
        Update: {
          clinician_accepting_new_clients?:
            | Database["public"]["Enums"]["Yes/No"]
            | null
          clinician_availability_end_friday_1?: string | null
          clinician_availability_end_friday_2?: string | null
          clinician_availability_end_friday_3?: string | null
          clinician_availability_end_monday_1?: string | null
          clinician_availability_end_monday_2?: string | null
          clinician_availability_end_monday_3?: string | null
          clinician_availability_end_saturday_1?: string | null
          clinician_availability_end_saturday_2?: string | null
          clinician_availability_end_saturday_3?: string | null
          clinician_availability_end_sunday_1?: string | null
          clinician_availability_end_sunday_2?: string | null
          clinician_availability_end_sunday_3?: string | null
          clinician_availability_end_thursday_1?: string | null
          clinician_availability_end_thursday_2?: string | null
          clinician_availability_end_thursday_3?: string | null
          clinician_availability_end_tuesday_1?: string | null
          clinician_availability_end_tuesday_2?: string | null
          clinician_availability_end_tuesday_3?: string | null
          clinician_availability_end_wednesday_1?: string | null
          clinician_availability_end_wednesday_2?: string | null
          clinician_availability_end_wednesday_3?: string | null
          clinician_availability_start_friday_1?: string | null
          clinician_availability_start_friday_2?: string | null
          clinician_availability_start_friday_3?: string | null
          clinician_availability_start_monday_1?: string | null
          clinician_availability_start_monday_2?: string | null
          clinician_availability_start_monday_3?: string | null
          clinician_availability_start_saturday_1?: string | null
          clinician_availability_start_saturday_2?: string | null
          clinician_availability_start_saturday_3?: string | null
          clinician_availability_start_sunday_1?: string | null
          clinician_availability_start_sunday_2?: string | null
          clinician_availability_start_sunday_3?: string | null
          clinician_availability_start_thursday_1?: string | null
          clinician_availability_start_thursday_2?: string | null
          clinician_availability_start_thursday_3?: string | null
          clinician_availability_start_tuesday_1?: string | null
          clinician_availability_start_tuesday_2?: string | null
          clinician_availability_start_tuesday_3?: string | null
          clinician_availability_start_wednesday_1?: string | null
          clinician_availability_start_wednesday_2?: string | null
          clinician_availability_start_wednesday_3?: string | null
          clinician_bio?: string | null
          clinician_calendar_end_time?: string | null
          clinician_calendar_start_time?: string | null
          clinician_email?: string | null
          clinician_first_name?: string | null
          clinician_image_url?: string | null
          clinician_last_name?: string | null
          clinician_license_type?: string | null
          clinician_licensed_states?: string[] | null
          clinician_max_advance_days?: number | null
          clinician_min_client_age?: number | null
          clinician_min_notice_days?: number | null
          clinician_nameinsurance?: string | null
          clinician_npi_number?: string | null
          clinician_phone?: string | null
          clinician_professional_name?: string | null
          clinician_status?:
            | Database["public"]["Enums"]["clinician_status_enum"]
            | null
          clinician_taxonomy_code?: string | null
          clinician_temppassword?: string | null
          clinician_time_granularity?: string | null
          clinician_time_zone?: string | null
          clinician_timezone?:
            | Database["public"]["Enums"]["time_zones"][]
            | null
          clinician_treatment_approaches?: string[] | null
          clinician_type?: string | null
          created_at?: string
          id?: string
          is_admin?: boolean
          last_google_sync?: string | null
          profile_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      CMS1500_claims: {
        Row: {
          accept_assign: string
          appointment_id: string | null
          batch_status: string | null
          bill_addr_1: string
          bill_addr_2: string | null
          bill_city: string
          bill_name: string
          bill_npi: string
          bill_state: string
          bill_taxid: string
          bill_taxid_type: string
          bill_taxonomy: string
          bill_zip: string
          charge: number
          claim_md_batch_id: string | null
          claim_md_id: string | null
          created_at: string | null
          diag_1: string | null
          diag_10: string | null
          diag_11: string | null
          diag_12: string | null
          diag_2: string | null
          diag_3: string | null
          diag_4: string | null
          diag_5: string | null
          diag_6: string | null
          diag_7: string | null
          diag_8: string | null
          diag_9: string | null
          diag_ref: string
          from_date: string
          id: string
          ins_addr_1: string
          ins_city: string
          ins_dob: string
          ins_group: string | null
          ins_name_f: string
          ins_name_l: string
          ins_number: string
          ins_state: string
          ins_zip: string
          last_batch_error: string | null
          last_status_check: string | null
          last_submission: string | null
          mod_1: string | null
          mod_2: string | null
          mod_3: string | null
          mod_4: string | null
          pat_addr_1: string
          pat_city: string
          pat_dob: string
          pat_name_f: string
          pat_name_l: string
          pat_rel: string
          pat_sex: string
          pat_state: string
          pat_zip: string
          payerid: string
          pcn: string
          place_of_service: string
          proc_code: string
          prov_name_f: string
          prov_name_l: string
          prov_npi: string
          prov_taxonomy: string | null
          remote_claimid: string
          response_json: Json | null
          status: string | null
          submission_attempts: number | null
          submission_history: Json | null
          thru_date: string
          total_charge: number
          units: number
          updated_at: string | null
        }
        Insert: {
          accept_assign?: string
          appointment_id?: string | null
          batch_status?: string | null
          bill_addr_1: string
          bill_addr_2?: string | null
          bill_city: string
          bill_name: string
          bill_npi: string
          bill_state: string
          bill_taxid: string
          bill_taxid_type: string
          bill_taxonomy: string
          bill_zip: string
          charge: number
          claim_md_batch_id?: string | null
          claim_md_id?: string | null
          created_at?: string | null
          diag_1?: string | null
          diag_10?: string | null
          diag_11?: string | null
          diag_12?: string | null
          diag_2?: string | null
          diag_3?: string | null
          diag_4?: string | null
          diag_5?: string | null
          diag_6?: string | null
          diag_7?: string | null
          diag_8?: string | null
          diag_9?: string | null
          diag_ref: string
          from_date: string
          id?: string
          ins_addr_1: string
          ins_city: string
          ins_dob: string
          ins_group?: string | null
          ins_name_f: string
          ins_name_l: string
          ins_number: string
          ins_state: string
          ins_zip: string
          last_batch_error?: string | null
          last_status_check?: string | null
          last_submission?: string | null
          mod_1?: string | null
          mod_2?: string | null
          mod_3?: string | null
          mod_4?: string | null
          pat_addr_1: string
          pat_city: string
          pat_dob: string
          pat_name_f: string
          pat_name_l: string
          pat_rel: string
          pat_sex: string
          pat_state: string
          pat_zip: string
          payerid: string
          pcn: string
          place_of_service: string
          proc_code: string
          prov_name_f: string
          prov_name_l: string
          prov_npi: string
          prov_taxonomy?: string | null
          remote_claimid: string
          response_json?: Json | null
          status?: string | null
          submission_attempts?: number | null
          submission_history?: Json | null
          thru_date: string
          total_charge: number
          units?: number
          updated_at?: string | null
        }
        Update: {
          accept_assign?: string
          appointment_id?: string | null
          batch_status?: string | null
          bill_addr_1?: string
          bill_addr_2?: string | null
          bill_city?: string
          bill_name?: string
          bill_npi?: string
          bill_state?: string
          bill_taxid?: string
          bill_taxid_type?: string
          bill_taxonomy?: string
          bill_zip?: string
          charge?: number
          claim_md_batch_id?: string | null
          claim_md_id?: string | null
          created_at?: string | null
          diag_1?: string | null
          diag_10?: string | null
          diag_11?: string | null
          diag_12?: string | null
          diag_2?: string | null
          diag_3?: string | null
          diag_4?: string | null
          diag_5?: string | null
          diag_6?: string | null
          diag_7?: string | null
          diag_8?: string | null
          diag_9?: string | null
          diag_ref?: string
          from_date?: string
          id?: string
          ins_addr_1?: string
          ins_city?: string
          ins_dob?: string
          ins_group?: string | null
          ins_name_f?: string
          ins_name_l?: string
          ins_number?: string
          ins_state?: string
          ins_zip?: string
          last_batch_error?: string | null
          last_status_check?: string | null
          last_submission?: string | null
          mod_1?: string | null
          mod_2?: string | null
          mod_3?: string | null
          mod_4?: string | null
          pat_addr_1?: string
          pat_city?: string
          pat_dob?: string
          pat_name_f?: string
          pat_name_l?: string
          pat_rel?: string
          pat_sex?: string
          pat_state?: string
          pat_zip?: string
          payerid?: string
          pcn?: string
          place_of_service?: string
          proc_code?: string
          prov_name_f?: string
          prov_name_l?: string
          prov_npi?: string
          prov_taxonomy?: string | null
          remote_claimid?: string
          response_json?: Json | null
          status?: string | null
          submission_attempts?: number | null
          submission_history?: Json | null
          thru_date?: string
          total_charge?: number
          units?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "claims_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      completed_appointments: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      cpt_codes: {
        Row: {
          clinical_type: string | null
          code: string
          created_at: string
          description: string | null
          fee: number
          name: string
          status: string | null
          updated_at: string
        }
        Insert: {
          clinical_type?: string | null
          code: string
          created_at?: string
          description?: string | null
          fee: number
          name: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          clinical_type?: string | null
          code?: string
          created_at?: string
          description?: string | null
          fee?: number
          name?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      document_assignments: {
        Row: {
          assigned_by: string | null
          client_id: string
          created_at: string
          document_name: string
          id: string
          status: string | null
          updated_at: string
        }
        Insert: {
          assigned_by?: string | null
          client_id: string
          created_at?: string
          document_name: string
          id?: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          assigned_by?: string | null
          client_id?: string
          created_at?: string
          document_name?: string
          id?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          category: Database["public"]["Enums"]["document_category"]
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          template: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["document_category"]
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          template?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["document_category"]
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          template?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      eligibility_audit: {
        Row: {
          claimmd_transaction_id: string | null
          client_id: string
          coinsurance_percent: number | null
          copay: number | null
          created_at: string | null
          deductible: number | null
          error_message: string | null
          id: string
          insurance_level: string
          processing_time_ms: number | null
          request_payload: Json | null
          response_payload: Json | null
          status: string
          verification_date: string | null
        }
        Insert: {
          claimmd_transaction_id?: string | null
          client_id: string
          coinsurance_percent?: number | null
          copay?: number | null
          created_at?: string | null
          deductible?: number | null
          error_message?: string | null
          id?: string
          insurance_level: string
          processing_time_ms?: number | null
          request_payload?: Json | null
          response_payload?: Json | null
          status: string
          verification_date?: string | null
        }
        Update: {
          claimmd_transaction_id?: string | null
          client_id?: string
          coinsurance_percent?: number | null
          copay?: number | null
          created_at?: string | null
          deductible?: number | null
          error_message?: string | null
          id?: string
          insurance_level?: string
          processing_time_ms?: number | null
          request_payload?: Json | null
          response_payload?: Json | null
          status?: string
          verification_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "eligibility_audit_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      error_monitoring: {
        Row: {
          alert_enabled: boolean
          created_at: string
          error_pattern: string
          id: string
          last_triggered_at: string | null
          threshold_count: number
          time_window_minutes: number
          updated_at: string
        }
        Insert: {
          alert_enabled?: boolean
          created_at?: string
          error_pattern: string
          id?: string
          last_triggered_at?: string | null
          threshold_count?: number
          time_window_minutes?: number
          updated_at?: string
        }
        Update: {
          alert_enabled?: boolean
          created_at?: string
          error_pattern?: string
          id?: string
          last_triggered_at?: string | null
          threshold_count?: number
          time_window_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      error_resolution_workflow: {
        Row: {
          actual_resolution_time: unknown | null
          api_log_id: string
          assigned_to: string | null
          created_at: string
          estimated_resolution_time: unknown | null
          id: string
          priority: number
          stage_notes: string | null
          updated_at: string
          workflow_stage: string
        }
        Insert: {
          actual_resolution_time?: unknown | null
          api_log_id: string
          assigned_to?: string | null
          created_at?: string
          estimated_resolution_time?: unknown | null
          id?: string
          priority?: number
          stage_notes?: string | null
          updated_at?: string
          workflow_stage?: string
        }
        Update: {
          actual_resolution_time?: unknown | null
          api_log_id?: string
          assigned_to?: string | null
          created_at?: string
          estimated_resolution_time?: unknown | null
          id?: string
          priority?: number
          stage_notes?: string | null
          updated_at?: string
          workflow_stage?: string
        }
        Relationships: [
          {
            foreignKeyName: "error_resolution_workflow_api_log_id_fkey"
            columns: ["api_log_id"]
            isOneToOne: false
            referencedRelation: "api_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      external_calendar_mappings: {
        Row: {
          appointment_id: string
          connection_id: string
          created_at: string | null
          external_calendar_id: string
          external_event_id: string
          id: string
          last_synced_at: string | null
        }
        Insert: {
          appointment_id: string
          connection_id: string
          created_at?: string | null
          external_calendar_id: string
          external_event_id: string
          id?: string
          last_synced_at?: string | null
        }
        Update: {
          appointment_id?: string
          connection_id?: string
          created_at?: string | null
          external_calendar_id?: string
          external_event_id?: string
          id?: string
          last_synced_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "external_calendar_mappings_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_calendar_mappings_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "nylas_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      icd10: {
        Row: {
          diagnosis_name: string
          icd10: string
          id: number
        }
        Insert: {
          diagnosis_name: string
          icd10: string
          id?: number
        }
        Update: {
          diagnosis_name?: string
          icd10?: string
          id?: number
        }
        Relationships: []
      }
      licenses: {
        Row: {
          clinician_id: string
          created_at: string
          expiration_date: string | null
          id: string
          issue_date: string | null
          license_number: string
          license_type: string | null
          state: string
          status: string | null
          updated_at: string
        }
        Insert: {
          clinician_id: string
          created_at?: string
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          license_number: string
          license_type?: string | null
          state: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          clinician_id?: string
          created_at?: string
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          license_number?: string
          license_type?: string | null
          state?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      licenses_backup: {
        Row: {
          clinician_id: string | null
          created_at: string | null
          expiration_date: string | null
          id: string | null
          issue_date: string | null
          license_number: string | null
          license_type: string | null
          state: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          clinician_id?: string | null
          created_at?: string | null
          expiration_date?: string | null
          id?: string | null
          issue_date?: string | null
          license_number?: string | null
          license_type?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          clinician_id?: string | null
          created_at?: string | null
          expiration_date?: string | null
          id?: string | null
          issue_date?: string | null
          license_number?: string | null
          license_type?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migration_logs: {
        Row: {
          created_at: string | null
          description: string
          details: Json | null
          id: number
          migration_name: string
          status: string
        }
        Insert: {
          created_at?: string | null
          description: string
          details?: Json | null
          id?: number
          migration_name: string
          status?: string
        }
        Update: {
          created_at?: string | null
          description?: string
          details?: Json | null
          id?: number
          migration_name?: string
          status?: string
        }
        Relationships: []
      }
      nylas_accounts: {
        Row: {
          access_token: string
          clinician_id: string
          created_at: string | null
          email: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          nylas_grant_id: string
          provider: string
          refresh_token: string | null
          updated_at: string | null
        }
        Insert: {
          access_token: string
          clinician_id: string
          created_at?: string | null
          email: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          nylas_grant_id: string
          provider: string
          refresh_token?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string
          clinician_id?: string
          created_at?: string | null
          email?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          nylas_grant_id?: string
          provider?: string
          refresh_token?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nylas_accounts_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      nylas_calendars: {
        Row: {
          calendar_description: string | null
          calendar_name: string
          created_at: string | null
          id: string
          is_primary: boolean | null
          is_synced: boolean | null
          nylas_account_id: string
          nylas_calendar_id: string
          sync_direction: string | null
          updated_at: string | null
        }
        Insert: {
          calendar_description?: string | null
          calendar_name: string
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          is_synced?: boolean | null
          nylas_account_id: string
          nylas_calendar_id: string
          sync_direction?: string | null
          updated_at?: string | null
        }
        Update: {
          calendar_description?: string | null
          calendar_name?: string
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          is_synced?: boolean | null
          nylas_account_id?: string
          nylas_calendar_id?: string
          sync_direction?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nylas_calendars_nylas_account_id_fkey"
            columns: ["nylas_account_id"]
            isOneToOne: false
            referencedRelation: "nylas_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      nylas_connections: {
        Row: {
          access_token: string
          calendar_ids: string[] | null
          connector_id: string | null
          created_at: string | null
          email: string
          grant_id: string | null
          grant_status: string | null
          id: string
          is_active: boolean | null
          last_sync_at: string | null
          provider: string
          refresh_token: string | null
          scopes: string[] | null
          sync_preferences: Json | null
          token_expires_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_token: string
          calendar_ids?: string[] | null
          connector_id?: string | null
          created_at?: string | null
          email: string
          grant_id?: string | null
          grant_status?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          provider?: string
          refresh_token?: string | null
          scopes?: string[] | null
          sync_preferences?: Json | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_token?: string
          calendar_ids?: string[] | null
          connector_id?: string | null
          created_at?: string | null
          email?: string
          grant_id?: string | null
          grant_status?: string | null
          id?: string
          is_active?: boolean | null
          last_sync_at?: string | null
          provider?: string
          refresh_token?: string | null
          scopes?: string[] | null
          sync_preferences?: Json | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      nylas_scheduler_configs: {
        Row: {
          clinician_id: string
          config_data: Json
          created_at: string | null
          id: string
          is_active: boolean | null
          public_url: string | null
          scheduler_id: string
          updated_at: string | null
        }
        Insert: {
          clinician_id: string
          config_data?: Json
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          public_url?: string | null
          scheduler_id: string
          updated_at?: string | null
        }
        Update: {
          clinician_id?: string
          config_data?: Json
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          public_url?: string | null
          scheduler_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      nylas_sync_logs: {
        Row: {
          completed_at: string | null
          connection_id: string
          created_at: string | null
          direction: string
          errors: Json | null
          events_processed: number | null
          id: string
          started_at: string | null
          status: string
          sync_type: string
        }
        Insert: {
          completed_at?: string | null
          connection_id: string
          created_at?: string | null
          direction: string
          errors?: Json | null
          events_processed?: number | null
          id?: string
          started_at?: string | null
          status: string
          sync_type: string
        }
        Update: {
          completed_at?: string | null
          connection_id?: string
          created_at?: string | null
          direction?: string
          errors?: Json | null
          events_processed?: number | null
          id?: string
          started_at?: string | null
          status?: string
          sync_type?: string
        }
        Relationships: []
      }
      nylas_sync_status: {
        Row: {
          created_at: string | null
          error_message: string | null
          events_synced: number | null
          id: string
          last_sync_at: string | null
          nylas_account_id: string
          sync_direction: string
          sync_status: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          events_synced?: number | null
          id?: string
          last_sync_at?: string | null
          nylas_account_id: string
          sync_direction: string
          sync_status?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          events_synced?: number | null
          id?: string
          last_sync_at?: string | null
          nylas_account_id?: string
          sync_direction?: string
          sync_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nylas_sync_status_nylas_account_id_fkey"
            columns: ["nylas_account_id"]
            isOneToOne: false
            referencedRelation: "nylas_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      phq9_assessments: {
        Row: {
          additional_notes: string | null
          appointment_id: string | null
          assessment_date: string
          client_id: string
          created_at: string
          id: string
          phq9_narrative: string | null
          question_1: number
          question_2: number
          question_3: number
          question_4: number
          question_5: number
          question_6: number
          question_7: number
          question_8: number
          question_9: number
          total_score: number
        }
        Insert: {
          additional_notes?: string | null
          appointment_id?: string | null
          assessment_date?: string
          client_id: string
          created_at?: string
          id?: string
          phq9_narrative?: string | null
          question_1: number
          question_2: number
          question_3: number
          question_4: number
          question_5: number
          question_6: number
          question_7: number
          question_8: number
          question_9: number
          total_score: number
        }
        Update: {
          additional_notes?: string | null
          appointment_id?: string | null
          assessment_date?: string
          client_id?: string
          created_at?: string
          id?: string
          phq9_narrative?: string | null
          question_1?: number
          question_2?: number
          question_3?: number
          question_4?: number
          question_5?: number
          question_6?: number
          question_7?: number
          question_8?: number
          question_9?: number
          total_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "phq9_assessments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      practiceinfo: {
        Row: {
          created_at: string
          id: string
          practice_address1: string | null
          practice_address2: string | null
          practice_city: string | null
          practice_name: string | null
          practice_npi: string | null
          practice_state: string | null
          practice_taxid: string | null
          practice_taxonomy: string | null
          practice_zip: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          practice_address1?: string | null
          practice_address2?: string | null
          practice_city?: string | null
          practice_name?: string | null
          practice_npi?: string | null
          practice_state?: string | null
          practice_taxid?: string | null
          practice_taxonomy?: string | null
          practice_zip?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          practice_address1?: string | null
          practice_address2?: string | null
          practice_city?: string | null
          practice_name?: string | null
          practice_npi?: string | null
          practice_state?: string | null
          practice_taxid?: string | null
          practice_taxonomy?: string | null
          practice_zip?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      real_time_notifications: {
        Row: {
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          is_read: boolean | null
          message: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      scheduling_preferences: {
        Row: {
          allow_concurrent_appointments: boolean | null
          auto_confirm_threshold: number | null
          buffer_between_appointments: number | null
          created_at: string
          default_appointment_duration: number | null
          enable_real_time_updates: boolean | null
          id: string
          max_daily_appointments: number | null
          real_time_notification_preferences: Json | null
          timezone: string
          updated_at: string
          user_id: string
          working_hours: Json | null
        }
        Insert: {
          allow_concurrent_appointments?: boolean | null
          auto_confirm_threshold?: number | null
          buffer_between_appointments?: number | null
          created_at?: string
          default_appointment_duration?: number | null
          enable_real_time_updates?: boolean | null
          id?: string
          max_daily_appointments?: number | null
          real_time_notification_preferences?: Json | null
          timezone?: string
          updated_at?: string
          user_id: string
          working_hours?: Json | null
        }
        Update: {
          allow_concurrent_appointments?: boolean | null
          auto_confirm_threshold?: number | null
          buffer_between_appointments?: number | null
          created_at?: string
          default_appointment_duration?: number | null
          enable_real_time_updates?: boolean | null
          id?: string
          max_daily_appointments?: number | null
          real_time_notification_preferences?: Json | null
          timezone?: string
          updated_at?: string
          user_id?: string
          working_hours?: Json | null
        }
        Relationships: []
      }
      session_notes: {
        Row: {
          affect: string | null
          appearance: string | null
          appointment_id: string | null
          attitude: string | null
          behavior: string | null
          client_dob: string | null
          client_id: string
          client_name: string | null
          clinician_id: string
          clinician_name: string | null
          created_at: string
          current_symptoms: string | null
          diagnosis: string[] | null
          functioning: string | null
          homicidal_ideation: string | null
          id: string
          insight_judgement: string | null
          intervention1: string | null
          intervention2: string | null
          intervention3: string | null
          intervention4: string | null
          intervention5: string | null
          intervention6: string | null
          medications: string | null
          memory_concentration: string | null
          mood: string | null
          next_treatment_plan_update: string | null
          orientation: string | null
          patient_dob: string | null
          patient_name: string | null
          pdf_path: string | null
          perception: string | null
          persons_in_attendance: string | null
          phq9_data: Json | null
          phq9_score: number | null
          plan_type: string | null
          primary_objective: string | null
          private_note: string | null
          problem_narrative: string | null
          prognosis: string | null
          progress: string | null
          secondary_objective: string | null
          session_date: string
          session_narrative: string | null
          session_type: string | null
          signature: string | null
          speech: string | null
          substance_abuse_risk: string | null
          suicidal_ideation: string | null
          tertiary_objective: string | null
          thought_process: string | null
          treatment_frequency: string | null
          treatment_goal_narrative: string | null
          updated_at: string
        }
        Insert: {
          affect?: string | null
          appearance?: string | null
          appointment_id?: string | null
          attitude?: string | null
          behavior?: string | null
          client_dob?: string | null
          client_id: string
          client_name?: string | null
          clinician_id: string
          clinician_name?: string | null
          created_at?: string
          current_symptoms?: string | null
          diagnosis?: string[] | null
          functioning?: string | null
          homicidal_ideation?: string | null
          id?: string
          insight_judgement?: string | null
          intervention1?: string | null
          intervention2?: string | null
          intervention3?: string | null
          intervention4?: string | null
          intervention5?: string | null
          intervention6?: string | null
          medications?: string | null
          memory_concentration?: string | null
          mood?: string | null
          next_treatment_plan_update?: string | null
          orientation?: string | null
          patient_dob?: string | null
          patient_name?: string | null
          pdf_path?: string | null
          perception?: string | null
          persons_in_attendance?: string | null
          phq9_data?: Json | null
          phq9_score?: number | null
          plan_type?: string | null
          primary_objective?: string | null
          private_note?: string | null
          problem_narrative?: string | null
          prognosis?: string | null
          progress?: string | null
          secondary_objective?: string | null
          session_date: string
          session_narrative?: string | null
          session_type?: string | null
          signature?: string | null
          speech?: string | null
          substance_abuse_risk?: string | null
          suicidal_ideation?: string | null
          tertiary_objective?: string | null
          thought_process?: string | null
          treatment_frequency?: string | null
          treatment_goal_narrative?: string | null
          updated_at?: string
        }
        Update: {
          affect?: string | null
          appearance?: string | null
          appointment_id?: string | null
          attitude?: string | null
          behavior?: string | null
          client_dob?: string | null
          client_id?: string
          client_name?: string | null
          clinician_id?: string
          clinician_name?: string | null
          created_at?: string
          current_symptoms?: string | null
          diagnosis?: string[] | null
          functioning?: string | null
          homicidal_ideation?: string | null
          id?: string
          insight_judgement?: string | null
          intervention1?: string | null
          intervention2?: string | null
          intervention3?: string | null
          intervention4?: string | null
          intervention5?: string | null
          intervention6?: string | null
          medications?: string | null
          memory_concentration?: string | null
          mood?: string | null
          next_treatment_plan_update?: string | null
          orientation?: string | null
          patient_dob?: string | null
          patient_name?: string | null
          pdf_path?: string | null
          perception?: string | null
          persons_in_attendance?: string | null
          phq9_data?: Json | null
          phq9_score?: number | null
          plan_type?: string | null
          primary_objective?: string | null
          private_note?: string | null
          problem_narrative?: string | null
          prognosis?: string | null
          progress?: string | null
          secondary_objective?: string | null
          session_date?: string
          session_narrative?: string | null
          session_type?: string | null
          signature?: string | null
          speech?: string | null
          substance_abuse_risk?: string | null
          suicidal_ideation?: string | null
          tertiary_objective?: string | null
          thought_process?: string | null
          treatment_frequency?: string | null
          treatment_goal_narrative?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_notes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      session_notes_history: {
        Row: {
          appointment_id: string | null
          client_id: string
          clinician_id: string | null
          created_at: string
          id: string
          pdf_path: string | null
          session_data: Json
          session_date: string
          session_type: string | null
        }
        Insert: {
          appointment_id?: string | null
          client_id: string
          clinician_id?: string | null
          created_at?: string
          id?: string
          pdf_path?: string | null
          session_data: Json
          session_date: string
          session_type?: string | null
        }
        Update: {
          appointment_id?: string | null
          client_id?: string
          clinician_id?: string | null
          created_at?: string
          id?: string
          pdf_path?: string | null
          session_data?: Json
          session_date?: string
          session_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "session_notes_history_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      session_notes_history_backup: {
        Row: {
          appointment_id: string | null
          client_id: string | null
          clinician_id: string | null
          created_at: string | null
          id: string | null
          pdf_path: string | null
          session_data: Json | null
          session_date: string | null
          session_type: string | null
        }
        Insert: {
          appointment_id?: string | null
          client_id?: string | null
          clinician_id?: string | null
          created_at?: string | null
          id?: string | null
          pdf_path?: string | null
          session_data?: Json | null
          session_date?: string | null
          session_type?: string | null
        }
        Update: {
          appointment_id?: string | null
          client_id?: string | null
          clinician_id?: string | null
          created_at?: string | null
          id?: string | null
          pdf_path?: string | null
          session_data?: Json | null
          session_date?: string | null
          session_type?: string | null
        }
        Relationships: []
      }
      staff_licenses: {
        Row: {
          created_at: string | null
          id: string
          license_number: string
          license_state: string
          license_type: string
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          license_number: string
          license_state: string
          license_type: string
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          license_number?: string
          license_state?: string
          license_type?: string
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      staff_licenses_backup: {
        Row: {
          created_at: string | null
          id: string | null
          license_number: string | null
          license_state: string | null
          license_type: string | null
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          license_number?: string | null
          license_state?: string | null
          license_type?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          license_number?: string | null
          license_state?: string | null
          license_type?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      synced_events: {
        Row: {
          clinician_id: string
          created_at: string | null
          display_title: string | null
          end_at: string
          google_calendar_event_id: string | null
          id: string
          is_busy: boolean | null
          original_description: string | null
          original_title: string | null
          start_at: string
          updated_at: string | null
        }
        Insert: {
          clinician_id: string
          created_at?: string | null
          display_title?: string | null
          end_at: string
          google_calendar_event_id?: string | null
          id?: string
          is_busy?: boolean | null
          original_description?: string | null
          original_title?: string | null
          start_at: string
          updated_at?: string | null
        }
        Update: {
          clinician_id?: string
          created_at?: string | null
          display_title?: string | null
          end_at?: string
          google_calendar_event_id?: string | null
          id?: string
          is_busy?: boolean | null
          original_description?: string | null
          original_title?: string | null
          start_at?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "synced_events_clinician_id_fkey"
            columns: ["clinician_id"]
            isOneToOne: false
            referencedRelation: "clinicians"
            referencedColumns: ["id"]
          },
        ]
      }
      system_health_metrics: {
        Row: {
          context: Json | null
          id: string
          metric_name: string
          metric_type: string
          metric_value: number
          recorded_at: string
        }
        Insert: {
          context?: Json | null
          id?: string
          metric_name: string
          metric_type: string
          metric_value: number
          recorded_at?: string
        }
        Update: {
          context?: Json | null
          id?: string
          metric_name?: string
          metric_type?: string
          metric_value?: number
          recorded_at?: string
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          created_at: string | null
          description: string | null
          key: string
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          key: string
          updated_at?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          key?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      template_settings: {
        Row: {
          created_at: string
          id: string
          is_assignable: boolean
          template_id: string
          template_name: string
          template_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_assignable?: boolean
          template_id: string
          template_name: string
          template_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_assignable?: boolean
          template_id?: string
          template_name?: string
          template_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      treatment_plans: {
        Row: {
          client_dob: string | null
          client_id: string
          client_name: string | null
          clinician_id: string
          clinician_name: string | null
          created_at: string
          diagnosis: string[] | null
          id: string
          intervention1: string
          intervention2: string
          intervention3: string | null
          intervention4: string | null
          intervention5: string | null
          intervention6: string | null
          next_update: string
          pdf_path: string | null
          plan_length: string
          primary_objective: string
          private_note: string | null
          problem_narrative: string | null
          secondary_objective: string | null
          start_date: string
          tertiary_objective: string | null
          treatment_frequency: string
          treatment_goal_narrative: string | null
          updated_at: string
        }
        Insert: {
          client_dob?: string | null
          client_id: string
          client_name?: string | null
          clinician_id: string
          clinician_name?: string | null
          created_at?: string
          diagnosis?: string[] | null
          id?: string
          intervention1: string
          intervention2: string
          intervention3?: string | null
          intervention4?: string | null
          intervention5?: string | null
          intervention6?: string | null
          next_update: string
          pdf_path?: string | null
          plan_length: string
          primary_objective: string
          private_note?: string | null
          problem_narrative?: string | null
          secondary_objective?: string | null
          start_date: string
          tertiary_objective?: string | null
          treatment_frequency: string
          treatment_goal_narrative?: string | null
          updated_at?: string
        }
        Update: {
          client_dob?: string | null
          client_id?: string
          client_name?: string | null
          clinician_id?: string
          clinician_name?: string | null
          created_at?: string
          diagnosis?: string[] | null
          id?: string
          intervention1?: string
          intervention2?: string
          intervention3?: string | null
          intervention4?: string | null
          intervention5?: string | null
          intervention6?: string | null
          next_update?: string
          pdf_path?: string | null
          plan_length?: string
          primary_objective?: string
          private_note?: string | null
          problem_narrative?: string | null
          secondary_objective?: string | null
          start_date?: string
          tertiary_objective?: string | null
          treatment_frequency?: string
          treatment_goal_narrative?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "treatment_plans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          auth_provider: string
          created_at: string | null
          email: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auth_provider?: string
          created_at?: string | null
          email?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auth_provider?: string
          created_at?: string | null
          email?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      audit_email_sync_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          clinician_id: string
          auth_email: string
          clinician_email: string
          sync_status: string
          last_auth_update: string
          last_clinician_update: string
          mismatch_duration: unknown
        }[]
      }
      cancel_appointment_and_delete_mapping: {
        Args: {
          p_appointment_id: string
          p_mapping_id: string
          p_notes: string
        }
        Returns: undefined
      }
      categorize_error: {
        Args: { error_message: string; endpoint: string; status: string }
        Returns: Database["public"]["Enums"]["error_category"]
      }
      check_blocked_time_integrity: {
        Args: Record<PropertyKey, never>
        Returns: {
          check_type: string
          status: string
          count: number
          message: string
        }[]
      }
      check_error_thresholds: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      check_table_exists: {
        Args: { check_table_name: string }
        Returns: boolean
      }
      convert_appointment_times_to_utc: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_appointment_and_mapping: {
        Args: {
          p_clinician_id: string
          p_type: string
          p_status: Database["public"]["Enums"]["appointment_status"]
          p_start_at: string
          p_end_at: string
          p_notes: string
          p_external_event_id: string
          p_connection_id: string
          p_sync_direction: string
          p_last_sync_hash: string
        }
        Returns: undefined
      }
      create_or_replace_check_table_exists_function: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      debug_auth_context: {
        Args: Record<PropertyKey, never>
        Returns: {
          current_user_id: string
          current_user_role: string
          is_authenticated: boolean
        }[]
      }
      debug_client_therapist_matching: {
        Args: { p_therapist_id: string }
        Returns: {
          client_id: string
          client_name: string
          therapist_id: string
          therapist_id_type: string
        }[]
      }
      debug_rls_check: {
        Args: {
          schema_name: string
          table_name: string
          operation: string
          record_id: string
        }
        Returns: boolean
      }
      determine_error_severity: {
        Args: {
          error_category: Database["public"]["Enums"]["error_category"]
          retry_count: number
        }
        Returns: Database["public"]["Enums"]["error_severity"]
      }
      format_date_for_claimmd: {
        Args: { input_date: string }
        Returns: string
      }
      format_timestamp_for_claimmd: {
        Args: { input_timestamp: string }
        Returns: string
      }
      get_clinician_availability_instances: {
        Args: {
          p_clinician_id: string
          p_start_date: string
          p_end_date: string
          p_user_timezone?: string
        }
        Returns: {
          day_of_week: string
          start_time: string
          end_time: string
          timezone: string
          slot_number: number
          specific_date: string
          utc_start_time: string
          utc_end_time: string
        }[]
      }
      get_filtered_clinical_documents: {
        Args: { p_client_id: string }
        Returns: {
          id: string
          client_id: string
          document_title: string
          document_type: string
          document_date: string
          file_path: string
          created_at: string
          created_by: string
        }[]
      }
      get_unread_notification_count: {
        Args: { p_user_id: string }
        Returns: number
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_client: {
        Args: { user_id: string }
        Returns: boolean
      }
      is_clinician: {
        Args: { user_id: string }
        Returns: boolean
      }
      log_email_update_operation: {
        Args: {
          operation_type: string
          clinician_id: string
          old_email: string
          new_email: string
          source_component: string
          correlation_id?: string
          additional_data?: Json
        }
        Returns: undefined
      }
      mark_notifications_as_read: {
        Args: { p_user_id: string; p_notification_ids?: string[] }
        Returns: number
      }
      parse_claimmd_date: {
        Args: { claimmd_date: string }
        Returns: string
      }
      standardize_uuid: {
        Args: { input_id: string }
        Returns: string
      }
      update_appointment_and_mapping: {
        Args: {
          p_appointment_id: string
          p_start_at: string
          p_end_at: string
          p_notes: string
          p_mapping_id: string
          p_last_sync_hash: string
        }
        Returns: undefined
      }
      update_batch_performance_metrics: {
        Args: {
          p_batch_date: string
          p_total_claims: number
          p_successful_claims: number
          p_failed_claims: number
          p_processing_time_minutes: number
          p_average_response_time_ms: number
        }
        Returns: undefined
      }
      user_has_admin_privileges: {
        Args: { user_id: string }
        Returns: boolean
      }
      user_has_admin_role: {
        Args: { user_id: string }
        Returns: boolean
      }
      validate_clinician_email_consistency: {
        Args: Record<PropertyKey, never>
        Returns: {
          clinician_id: string
          auth_email: string
          clinician_email: string
          status: string
        }[]
      }
      validate_timezone_integrity: {
        Args: Record<PropertyKey, never>
        Returns: {
          check_type: string
          status: string
          count: number
          message: string
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "client" | "clinician"
      appointment_status: "scheduled" | "documented" | "no show" | "cancelled"
      client_gender_identity_type: "Male" | "Female" | "Other"
      client_gender_type: "Male" | "Female"
      client_relationship_type: "Self" | "Parent/Guardian" | "Spouse" | "Child"
      client_status_type:
        | "New"
        | "Profile Complete"
        | "Signed"
        | "No Clinician Availabile"
        | "First Sessions"
        | "Established"
        | "At Risk"
        | "Went Cold"
        | "Re-Engaged"
        | "Success"
        | "Discharged"
        | "Blacklist"
        | "Do Not Contact"
        | "Scheduled"
      client_va_coverage_type:
        | "CHAMPVA"
        | "VA Community Care"
        | "TRICARE"
        | "No Coverage - Veteran"
        | "No Coverage - Not a Veteran"
      clinician_status_enum:
        | "New"
        | "Active"
        | "Available"
        | "Unavailable"
        | "Inactive"
        | "Pending"
      document_category:
        | "medical_record"
        | "consent_form"
        | "therapy_note"
        | "questionnaire"
      error_category:
        | "api_authentication"
        | "network_error"
        | "data_validation"
        | "rate_limiting"
        | "provider_enrollment"
        | "payer_specific"
        | "system_error"
      error_severity: "critical" | "high" | "medium" | "low" | "informational"
      event_type: "appointment" | "time_off" | "availability"
      insurance_type:
        | "PPO"
        | "HMO"
        | "EPO"
        | "POS"
        | "Medicare"
        | "Medicaid"
        | "CHIP"
        | "Other"
      resolution_status:
        | "new"
        | "in_progress"
        | "resolved"
        | "escalated"
        | "closed"
      states:
        | "Alabama"
        | "Alaska"
        | "American Samoa"
        | "Arizona"
        | "Arkansas"
        | "California"
        | "Colorado"
        | "Connecticut"
        | "Delaware"
        | "District of Columbia"
        | "Florida"
        | "Georgia"
        | "Guam"
        | "Hawaii"
        | "Idaho"
        | "Illinois"
        | "Indiana"
        | "Iowa"
        | "Kansas"
        | "Kentucky"
        | "Louisiana"
        | "Maine"
        | "Maryland"
        | "Massachusetts"
        | "Michigan"
        | "Minnesota"
        | "Mississippi"
        | "Missouri"
        | "Montana"
        | "Nebraska"
        | "Nevada"
        | "New Hampshire"
        | "New Jersey"
        | "New Mexico"
        | "New York"
        | "North Carolina"
        | "North Dakota"
        | "Northern Mariana Islands"
        | "Ohio"
        | "Oklahoma"
        | "Oregon"
        | "Pennsylvania"
        | "Puerto Rico"
        | "Rhode Island"
        | "South Carolina"
        | "South Dakota"
        | "Tennessee"
        | "Texas"
        | "Utah"
        | "Vermont"
        | "Virgin Islands"
        | "Virginia"
        | "Washington"
        | "West Virginia"
        | "Wisconsin"
        | "Wyoming"
      time_zones:
        | "America/New_York"
        | "America/Chicago"
        | "America/Denver"
        | "America/Los_Angeles"
        | "America/Anchorage"
        | "Pacific/Honolulu"
        | "America/Phoenix"
      user_role: "user" | "admin"
      "Yes/No": "Yes" | "No"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "client", "clinician"],
      appointment_status: ["scheduled", "documented", "no show", "cancelled"],
      client_gender_identity_type: ["Male", "Female", "Other"],
      client_gender_type: ["Male", "Female"],
      client_relationship_type: ["Self", "Parent/Guardian", "Spouse", "Child"],
      client_status_type: [
        "New",
        "Profile Complete",
        "Signed",
        "No Clinician Availabile",
        "First Sessions",
        "Established",
        "At Risk",
        "Went Cold",
        "Re-Engaged",
        "Success",
        "Discharged",
        "Blacklist",
        "Do Not Contact",
        "Scheduled",
      ],
      client_va_coverage_type: [
        "CHAMPVA",
        "VA Community Care",
        "TRICARE",
        "No Coverage - Veteran",
        "No Coverage - Not a Veteran",
      ],
      clinician_status_enum: [
        "New",
        "Active",
        "Available",
        "Unavailable",
        "Inactive",
        "Pending",
      ],
      document_category: [
        "medical_record",
        "consent_form",
        "therapy_note",
        "questionnaire",
      ],
      error_category: [
        "api_authentication",
        "network_error",
        "data_validation",
        "rate_limiting",
        "provider_enrollment",
        "payer_specific",
        "system_error",
      ],
      error_severity: ["critical", "high", "medium", "low", "informational"],
      event_type: ["appointment", "time_off", "availability"],
      insurance_type: [
        "PPO",
        "HMO",
        "EPO",
        "POS",
        "Medicare",
        "Medicaid",
        "CHIP",
        "Other",
      ],
      resolution_status: [
        "new",
        "in_progress",
        "resolved",
        "escalated",
        "closed",
      ],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      time_zones: [
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "America/Anchorage",
        "Pacific/Honolulu",
        "America/Phoenix",
      ],
      user_role: ["user", "admin"],
      "Yes/No": ["Yes", "No"],
    },
  },
} as const
