/**
 * Supabase Server Client
 * 
 * This file creates a Supabase client for server-side operations.
 * Uses the service role key which bypasses Row-Level Security (RLS).
 * 
 * ⚠️ WARNING: Only use this on the server (API routes, Server Components).
 * Never expose the service role key to the client.
 * 
 * Usage:
 * import { createClient } from '@/lib/supabase/server';
 * const supabase = createClient();
 * const { data, error } = await supabase.from('products').select('*');
 */

import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types-generated';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      'Missing Supabase server environment variables. ' +
      'Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
    );
  }

  return createSupabaseClient<Database>(supabaseUrl, supabaseServiceKey, {
    db: { schema: 'api' },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

// Legacy export for backward compatibility
export const getSupabaseServer = createClient;
