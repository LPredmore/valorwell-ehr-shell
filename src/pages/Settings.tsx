
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { RoleGuard } from '@/components/RoleGuard';
import { useClinicians } from '@/hooks/useClinicians';

export default function Settings() {
  const [staffForm, setStaffForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [inviting, setInviting] = useState(false);
  const { toast } = useToast();
  const { refetch: refetchClinicians } = useClinicians();

  const handleStaffInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!staffForm.email || !staffForm.firstName || !staffForm.lastName) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    console.log('🔄 [STAFF_INVITE] Starting invitation process for:', staffForm.email);
    setInviting(true);

    try {
      console.log('🚀 [STAFF_INVITE] Calling create-staff-user edge function...');
      
      const { data, error } = await supabase.functions.invoke('create-staff-user', {
        body: {
          email: staffForm.email,
          firstName: staffForm.firstName,
          lastName: staffForm.lastName,
          phone: staffForm.phone
        }
      });

      console.log('📦 [STAFF_INVITE] Edge function response:', { data, error });

      if (error) {
        console.error('❌ [STAFF_INVITE] Edge function error:', error);
        throw new Error(error.message || 'Failed to create staff member');
      }

      if (!data?.success) {
        console.error('❌ [STAFF_INVITE] Edge function returned failure:', data);
        throw new Error(data?.error || 'Failed to create staff member');
      }

      console.log('✅ [STAFF_INVITE] Staff member created successfully');
      console.log('🔑 [STAFF_INVITE] Temporary password:', data.temporaryPassword);

      toast({
        title: 'Success',
        description: `Staff member invited successfully. Temporary password: ${data.temporaryPassword}`,
      });

      // Reset form
      setStaffForm({
        email: '',
        firstName: '',
        lastName: '',
        phone: ''
      });

      // Refresh clinicians list
      refetchClinicians();

    } catch (error: any) {
      console.error('💥 [STAFF_INVITE] Unexpected error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to invite staff member. Please try again.',
        variant: 'destructive',
      });
    } finally {
      console.log('🔄 [STAFF_INVITE] Set inviting state to false - process complete');
      setInviting(false);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your application settings and configurations.
          </p>
        </div>

        <RoleGuard allowedRoles={['admin']}>
          <Card>
            <CardHeader>
              <CardTitle>Staff Management</CardTitle>
              <CardDescription>
                Add new staff members to your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleStaffInvite} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={staffForm.firstName}
                      onChange={(e) => setStaffForm({ ...staffForm, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={staffForm.lastName}
                      onChange={(e) => setStaffForm({ ...staffForm, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={staffForm.email}
                    onChange={(e) => setStaffForm({ ...staffForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={staffForm.phone}
                    onChange={(e) => setStaffForm({ ...staffForm, phone: e.target.value })}
                  />
                </div>
                <Button type="submit" disabled={inviting}>
                  {inviting ? 'Adding Staff Member...' : 'Add Staff Member'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </RoleGuard>

        {/* Additional settings sections can be added here */}
      </div>
    </div>
  );
}
