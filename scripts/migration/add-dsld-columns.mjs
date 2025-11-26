#!/usr/bin/env node
/**
 * Add missing DSLD columns to products table
 */

import { createClient } from '@supabase/supabase-js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: 'api' }}
);

async function addColumns() {
  console.log('🔧 Adding missing DSLD columns to products table...\n');
  
  const sql = `
    ALTER TABLE api.products 
    ADD COLUMN IF NOT EXISTS dsld_content TEXT,
    ADD COLUMN IF NOT EXISTS dsld_label_info JSONB;
  `;
  
  try {
    const { error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('❌ Error adding columns:', error);
      console.log('\n⚠️  Try running this SQL in Supabase dashboard:');
      console.log(sql);
      return false;
    }
    
    console.log('✅ Columns added successfully!');
    return true;
  } catch (err) {
    console.error('❌ Error:', err);
    console.log('\n⚠️  Manual SQL needed in Supabase dashboard:');
    console.log(sql);
    return false;
  }
}

addColumns();
