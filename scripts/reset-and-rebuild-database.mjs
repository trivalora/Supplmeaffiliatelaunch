#!/usr/bin/env node
/**
 * Reset and rebuild database from scratch
 * Runs the RESET_AND_REBUILD.sql file
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

console.log('🔄 Resetting and rebuilding database...\n');

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' },
  auth: { persistSession: false }
});

// Read SQL file
const sqlPath = path.join(__dirname, '../supabase/migrations/RESET_AND_REBUILD.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

// Split into statements and execute
const statements = sql
  .split(';')
  .map(s => s.trim())
  .filter(s => s && !s.startsWith('--'));

console.log(`📋 Executing ${statements.length} SQL statements...\n`);

for (let i = 0; i < statements.length; i++) {
  const stmt = statements[i];
  if (!stmt) continue;
  
  try {
    // Use raw SQL query
    const { error } = await supabase.rpc('exec_sql', { 
      sql: stmt + ';' 
    });
    
    if (error) {
      console.error(`❌ Statement ${i + 1} failed:`, error.message);
      console.error('Statement:', stmt.substring(0, 100) + '...');
    } else {
      if (stmt.includes('CREATE TABLE')) {
        const match = stmt.match(/CREATE TABLE (?:IF NOT EXISTS )?api\.(\w+)/);
        if (match) console.log(`✅ Created table: ${match[1]}`);
      } else if (stmt.includes('CREATE INDEX')) {
        const match = stmt.match(/CREATE INDEX (?:IF NOT EXISTS )?(\w+)/);
        if (match) console.log(`✅ Created index: ${match[1]}`);
      } else if (stmt.includes('INSERT INTO')) {
        const match = stmt.match(/INSERT INTO api\.(\w+)/);
        if (match) console.log(`✅ Seeded: ${match[1]}`);
      }
    }
  } catch (err) {
    console.error(`❌ Error executing statement ${i + 1}:`, err.message);
  }
}

console.log('\n✅ Database reset complete!');
console.log('\nNext step: Run migration scripts to load data');
console.log('  1. node scripts/migration/extract-products-to-csv.mjs');
console.log('  2. node scripts/migration/transform-data.mjs');
console.log('  3. node scripts/migration/load-to-supabase.mjs');
console.log('  4. node scripts/migration/enrich-products-with-metadata.mjs');
