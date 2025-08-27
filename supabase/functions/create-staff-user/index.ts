
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    const { email, firstName, lastName, phone } = await req.json()

    console.log('🔵 Creating staff user with data:', { email, firstName, lastName, phone })

    // Generate a random password for the new staff member
    const generatedPassword = crypto.randomUUID().substring(0, 12) + '!'
    
    console.log('🔑 Generated password (length):', generatedPassword.length)

    // Create the auth user with metadata that will trigger the handle_new_user function
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: generatedPassword,
      email_confirm: true,
      user_metadata: {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        role: 'clinician'
      }
    })

    if (authError) {
      console.error('❌ Auth user creation failed:', authError)
      return new Response(
        JSON.stringify({ error: 'Failed to create auth user', details: authError }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ Auth user created successfully:', authUser.user.id)

    // The handle_new_user trigger should have automatically created the profile and clinician records
    // Let's verify the clinician record was created and update it with additional fields
    const { data: clinician, error: clinicianFetchError } = await supabaseAdmin
      .from('clinicians')
      .select('*')
      .eq('profile_id', authUser.user.id)
      .single()

    if (clinicianFetchError) {
      console.error('❌ Failed to fetch created clinician:', clinicianFetchError)
      return new Response(
        JSON.stringify({ error: 'Failed to verify clinician creation', details: clinicianFetchError }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Update the clinician record with additional default fields
    const { error: clinicianUpdateError } = await supabaseAdmin
      .from('clinicians')
      .update({
        professional_name: `${firstName} ${lastName}`,
        type: 'Clinician',
        accepting_new_clients: true,
        min_client_age: 18,
        time_zone: 'America/New_York',
        time_granularity: 'hour',
        calendar_start_time: '08:00:00',
        calendar_end_time: '17:00:00',
        max_advance_days: 30,
        min_notice_days: 1,
        updated_at: new Date().toISOString()
      })
      .eq('profile_id', authUser.user.id)

    if (clinicianUpdateError) {
      console.error('❌ Clinician update failed:', clinicianUpdateError)
      return new Response(
        JSON.stringify({ error: 'Failed to update clinician record', details: clinicianUpdateError }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ Clinician record updated successfully with additional fields')

    return new Response(
      JSON.stringify({ 
        success: true, 
        user: authUser.user,
        temporaryPassword: generatedPassword,
        message: 'Staff member created successfully with all required records'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('💥 Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
