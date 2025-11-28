/**
 * Apply database migrations to Supabase
 * 
 * This script applies the new migrations for:
 * - newsletter_subscribers table
 * - partner_leads table
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables');
  console.error('   Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' },
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

async function applyMigration(filePath) {
  const migrationName = path.basename(filePath);
  console.log(`\n📋 Applying migration: ${migrationName}`);
  
  try {
    // Read migration file
    const sql = await fs.readFile(filePath, 'utf-8');
    
    // Execute SQL
    const { data, error } = await supabase.rpc('exec_sql', { query: sql });
    
    if (error) {
      // Try alternative approach - split by semicolon and execute individually
      console.log('   Trying alternative approach (split statements)...');
      const statements = sql
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0 && !s.startsWith('--'));
      
      for (const statement of statements) {
        const { error: stmtError } = await supabase.rpc('exec_sql', { query: statement });
        if (stmtError) {
          console.error(`   ❌ Error in statement:`, stmtError);
          throw stmtError;
        }
      }
    }
    
    console.log(`   ✅ Migration applied successfully`);
    return true;
  } catch (error) {
    console.error(`   ❌ Error applying migration:`, error.message);
    
    // For now, let's manually execute via SQL directly
    console.log('\n⚠️  Manual execution required. Use Supabase SQL Editor:');
    console.log(`   https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new`);
    console.log('\n   Or run this file manually:\n');
    const sql = await fs.readFile(filePath, 'utf-8');
    console.log('   ' + '='.repeat(60));
    console.log(sql);
    console.log('   ' + '='.repeat(60) + '\n');
    
    return false;
  }
}

async function runMigrations() {
  console.log('='.repeat(60));
  console.log('🔄 Applying Backend Extension Migrations');
  console.log('='.repeat(60));
  
  const migrationsDir = path.join(__dirname, '../supabase/migrations');
  
  const migrations = [
    '20251127000001_create_newsletter_table.sql',
    '20251127000002_create_partner_leads_table.sql',
  ];
  
  let allSuccess = true;
  
  for (const migration of migrations) {
    const filePath = path.join(migrationsDir, migration);
    const success = await applyMigration(filePath);
    if (!success) {
      allSuccess = false;
    }
  }
  
  if (allSuccess) {
    console.log('\n' + '='.repeat(60));
    console.log('✅ All migrations applied successfully!');
    console.log('='.repeat(60));
  } else {
    console.log('\n' + '='.repeat(60));
    console.log('⚠️  Some migrations require manual execution');
    console.log('   Copy the SQL above and run in Supabase SQL Editor');
    console.log('='.repeat(60));
  }
}

// Run migrations
runMigrations().catch(console.error);
