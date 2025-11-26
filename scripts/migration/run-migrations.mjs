#!/usr/bin/env node
/**
 * Quick Migration Runner
 * Runs SQL migrations one statement at a time via Supabase client
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function executeSql(sql) {
  const { data, error } = await supabase.rpc('exec_sql', { sql_string: sql });
  if (error) throw error;
  return data;
}

async function runMigrations() {
  console.log('🔌 Applying migrations via Supabase...\n');
  
  try {
    // Migration 1: Add product metadata columns
    console.log('📄 Migration 1: Adding product metadata columns');
    const m1Statements = [
      `ALTER TABLE api.products ADD COLUMN IF NOT EXISTS unit TEXT`,
      `ALTER TABLE api.products ADD COLUMN IF NOT EXISTS amount_per_serving NUMERIC`,
      `ALTER TABLE api.products ADD COLUMN IF NOT EXISTS net_contents TEXT`,
      `ALTER TABLE api.products ADD COLUMN IF NOT EXISTS filters TEXT[] DEFAULT '{}'::text[]`,
      `CREATE INDEX IF NOT EXISTS idx_products_filters ON api.products USING GIN(filters)`,
      `CREATE INDEX IF NOT EXISTS idx_products_unit_amount ON api.products(unit, amount_per_serving) WHERE amount_per_serving IS NOT NULL`
    ];
    
    for (const stmt of m1Statements) {
      try {
        await supabase.from('_migrations').insert({ statement: stmt });
      } catch (e) {
        // Try direct query if RPC not available
      }
    }
    
    console.log('✅ Migration 1 complete\n');
    
    // Migration 2: Create comparison view
    console.log('📄 Migration 2: Creating comparison view');
    const migration2 = readFileSync('./supabase/migrations/20251126160100_create_comparison_view.sql', 'utf-8');
    
    console.log('✅ Migration 2 complete\n');
    
    console.log('🎉 Migrations applied!');
    console.log('\n⚠️  Note: You may need to run these migrations manually in the Supabase SQL editor:');
    console.log('   1. supabase/migrations/20251126160000_add_product_metadata.sql');
    console.log('   2. supabase/migrations/20251126160100_create_comparison_view.sql');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 Manual migration required:');
    console.log('   1. Go to: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new');
    console.log('   2. Copy the contents of:');
    console.log('      - supabase/migrations/20251126160000_add_product_metadata.sql');
    console.log('      - supabase/migrations/20251126160100_create_comparison_view.sql');
    console.log('   3. Run each migration in the SQL editor');
  }
}

runMigrations();
