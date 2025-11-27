/**
 * Supabase Client (Browser)
 * 
 * This file creates a Supabase client for browser-side operations.
 * Uses the public anon key which has Row-Level Security (RLS) restrictions.
 * 
 * Usage:
 * import { supabase } from '@/lib/supabase/client';
 * const { data, error } = await supabase.from('supplements').select('*');
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types-generated';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  db: { schema: 'api' },
  auth: {
    persistSession: false, // We don't use auth yet
  },
});
