import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * POST /api/subscribe
 * 
 * Subscribe a user to the newsletter
 * 
 * Request body:
 * - email (string, required): Email address to subscribe
 * - source (string, optional): Source of subscription (default: 'landing_newsletter')
 * 
 * Returns:
 * - 201: Successfully subscribed
 * - 200: Already subscribed (duplicate email)
 * - 400: Invalid email
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    // Validation: Check if email is provided
    if (!email) {
      return NextResponse.json(
        { ok: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Validation: Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Get client info for compliance tracking
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || request.headers.get('x-real-ip') 
      || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Create Supabase client
    const supabase = createClient();
    
    // Insert subscriber (on conflict do nothing if already exists)
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.toLowerCase().trim(),
        source: source || 'landing_newsletter',
        ip_address: ip,
        user_agent: userAgent,
      })
      .select()
      .single();
    
    if (error) {
      // Check if duplicate email (unique constraint violation)
      if (error.code === '23505') {
        return NextResponse.json(
          { ok: true, message: 'Already subscribed to newsletter' },
          { status: 200 }
        );
      }
      
      console.error('Newsletter subscription error:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }
    
    // Success
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Successfully subscribed to newsletter',
        subscriber: {
          id: data.id,
          email: data.email,
          subscribed_at: data.subscribed_at,
        }
      },
      { 
        status: 201,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
    
  } catch (error: any) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
