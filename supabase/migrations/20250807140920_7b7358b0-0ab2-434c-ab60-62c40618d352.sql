-- Add clinic_taxid column to tables for multi-tenancy support

-- Add clinic_taxid to appointments table
ALTER TABLE public.appointments 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to templates table
ALTER TABLE public.templates 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to CMS1500_claims table
ALTER TABLE public.CMS1500_claims 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to appointment_audit table
ALTER TABLE public.appointment_audit 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to client_insurance table
ALTER TABLE public.client_insurance 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to practiceinfo table
ALTER TABLE public.practiceinfo 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to nylas_accounts table
ALTER TABLE public.nylas_accounts 
ADD COLUMN clinic_taxid text;

-- Add clinic_taxid to nylas_events table
ALTER TABLE public.nylas_events 
ADD COLUMN clinic_taxid text;

-- Create indexes for better performance on clinic_taxid lookups
CREATE INDEX idx_appointments_clinic_taxid ON public.appointments(clinic_taxid);
CREATE INDEX idx_form_submissions_clinic_taxid ON public.form_submissions(clinic_taxid);
CREATE INDEX idx_templates_clinic_taxid ON public.templates(clinic_taxid);
CREATE INDEX idx_cms1500_claims_clinic_taxid ON public.CMS1500_claims(clinic_taxid);
CREATE INDEX idx_appointment_audit_clinic_taxid ON public.appointment_audit(clinic_taxid);
CREATE INDEX idx_client_insurance_clinic_taxid ON public.client_insurance(clinic_taxid);
CREATE INDEX idx_practiceinfo_clinic_taxid ON public.practiceinfo(clinic_taxid);
CREATE INDEX idx_nylas_accounts_clinic_taxid ON public.nylas_accounts(clinic_taxid);
CREATE INDEX idx_nylas_events_clinic_taxid ON public.nylas_events(clinic_taxid);