#!/usr/bin/env node
/**
 * Apply Database Migrations
 * 
 * This script applies the SQL migrations directly to Supabase
 * without requiring the Supabase CLI to be linked.
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Supabase configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function runMigration(filename, sql) {
  console.log(`\n📄 Running migration: ${filename}`);
  console.log('─'.repeat(60));
  
  try {
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      throw error;
    }
    
    console.log('✅ Migration successful');
    return true;
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    return false;
  }
}

async function applyMigrations() {
  console.log('🚀 Applying database migrations...\n');
  
  const migrations = [
    '20251126160000_add_product_metadata.sql',
    '20251126160100_create_comparison_view.sql'
  ];
  
  for (const migration of migrations) {
    const migrationPath = join(__dirname, '../../supabase/migrations', migration);
    const sql = readFileSync(migrationPath, 'utf-8');
    
    const success = await runMigration(migration, sql);
    
    if (!success) {
      console.error('\n❌ Migration failed. Stopping.');
      process.exit(1);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ All migrations applied successfully!');
  console.log('='.repeat(60));
}

applyMigrations().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
