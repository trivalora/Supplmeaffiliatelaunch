#!/usr/bin/env node

/**
 * Apply Glossary Migration to Database
 * 
 * This script applies the glossary seed migration directly to the database
 * using the Supabase client.
 * 
 * Usage:
 *   node scripts/migration/apply-glossary-migration.mjs
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SQL_FILE = path.join(__dirname, '../../supabase/migrations/20251127120000_seed_glossary_terms.sql');

console.log('🚀 Applying Glossary Migration to Database\n');
console.log('═'.repeat(60));

async function applyMigration() {
  try {
    // Check environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('❌ Error: Missing Supabase environment variables');
      console.log('\nRequired variables in .env.local:');
      console.log('  - NEXT_PUBLIC_SUPABASE_URL');
      console.log('  - SUPABASE_SERVICE_ROLE_KEY');
      return false;
    }
    
    console.log('✅ Environment variables found');
    console.log(`📁 SQL file: ${SQL_FILE}`);
    
    // Read SQL file
    if (!fs.existsSync(SQL_FILE)) {
      console.error(`❌ Error: SQL file not found: ${SQL_FILE}`);
      return false;
    }
    
    const sql = fs.readFileSync(SQL_FILE, 'utf-8');
    const fileSizeKB = (sql.length / 1024).toFixed(2);
    console.log(`✅ SQL file loaded (${fileSizeKB} KB)`);
    
    // Create Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    
    console.log('\n🔄 Applying migration...');
    console.log('   This may take 30-60 seconds...\n');
    
    // Note: Supabase JS client doesn't support raw SQL execution
    // We need to use the SQL Editor in Supabase dashboard or psql
    
    console.log('ℹ️  The Supabase JS client does not support raw SQL execution.');
    console.log('📝 Please apply the migration using one of these methods:\n');
    
    console.log('═'.repeat(60));
    console.log('METHOD 1: Supabase SQL Editor (RECOMMENDED)');
    console.log('═'.repeat(60));
    console.log('1. Go to: https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new');
    console.log(`2. Copy contents of: ${SQL_FILE}`);
    console.log('3. Paste into SQL Editor');
    console.log('4. Click "Run" button');
    console.log('5. Wait for success message');
    console.log('6. Run validation: node scripts/migration/validate-glossary-data.mjs\n');
    
    console.log('═'.repeat(60));
    console.log('METHOD 2: Supabase CLI');
    console.log('═'.repeat(60));
    console.log('1. Link project: npx supabase link --project-ref rdraqlnxypwlhkhngyjk');
    console.log('2. Push migration: npx supabase db push');
    console.log('3. Run validation: node scripts/migration/validate-glossary-data.mjs\n');
    
    console.log('═'.repeat(60));
    console.log('METHOD 3: Direct psql (if you have connection string)');
    console.log('═'.repeat(60));
    console.log(`1. psql "postgresql://..." -f ${SQL_FILE}`);
    console.log('2. Run validation: node scripts/migration/validate-glossary-data.mjs\n');
    
    console.log('═'.repeat(60));
    console.log('ALTERNATIVE: Apply via npx supabase db execute');
    console.log('═'.repeat(60));
    console.log(`npx supabase db execute --file ${SQL_FILE} --linked\n`);
    
    // Show first few lines of SQL as preview
    const lines = sql.split('\n').slice(0, 20);
    console.log('📄 SQL Preview (first 20 lines):');
    console.log('─'.repeat(60));
    lines.forEach(line => console.log(line));
    console.log('─'.repeat(60));
    console.log(`... ${sql.split('\n').length - 20} more lines\n`);
    
    return true;
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    return false;
  }
}

applyMigration().then(success => {
  if (success) {
    console.log('\n✅ Instructions provided');
    console.log('📝 Follow one of the methods above to apply the migration');
    process.exit(0);
  } else {
    process.exit(1);
  }
});
