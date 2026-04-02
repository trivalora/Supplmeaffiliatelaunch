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

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types-generated";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing Supabase environment variables. " +
      "Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local",
  );
}

export const supabase = createClient<Database>(
  supabaseUrl,
  supabasePublishableKey,
  {
    db: { schema: "api" },
    auth: {
      persistSession: false, // We don't use auth yet
    },
  },
);
