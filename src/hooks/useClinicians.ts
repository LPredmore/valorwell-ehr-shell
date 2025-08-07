import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ClinicianRaw {
  id: string;
  profile_id: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  accepting_new_clients?: boolean;
  created_at: string;
  updated_at: string;
  profiles: { email: string } | null;
}

export interface Clinician {
  id: string;
  profile_id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  accepting_new_clients?: boolean;
  created_at: string;
  updated_at: string;
}

export const useClinicians = () => {
  return useQuery({
    queryKey: ['clinicians'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('clinicians')
          .select(`
            *,
            profiles!inner(email)
          `)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Database error fetching clinicians:', error);
          throw error;
        }

        // Transform the data to flatten the email from profiles
        const transformedData: Clinician[] = data?.map((clinician: any) => ({
          id: clinician.id,
          profile_id: clinician.profile_id,
          first_name: clinician.first_name,
          last_name: clinician.last_name,
          email: clinician.profiles?.email || '',
          phone: clinician.phone,
          accepting_new_clients: clinician.accepting_new_clients,
          created_at: clinician.created_at,
          updated_at: clinician.updated_at,
        })) || [];

        return transformedData;
      } catch (error) {
        console.error('Error in clinicians query:', error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useDeleteClinician = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (clinicianId: string) => {
      const { error } = await supabase
        .from('clinicians')
        .delete()
        .eq('id', clinicianId);

      if (error) {
        console.error('Error deleting clinician:', error);
        throw error;
      }
      
      return clinicianId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clinicians'] });
    },
  });
};