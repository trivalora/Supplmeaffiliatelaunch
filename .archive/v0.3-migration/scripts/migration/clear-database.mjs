#!/usr/bin/env node

/**
 * Clear Database Script
 * 
 * Purpose: Truncate all data from tables (except retailers)
 * Use this to reset the database before re-running migration
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env.local') });

async function clearDatabase() {
  console.log('='.repeat(80));
  console.log('CLEARING DATABASE');
  console.log('='.repeat(80));
  console.log();
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('✗ Missing Supabase credentials in .env.local');
    process.exit(1);
  }
  
  const supabase = createClient(supabaseUrl, supabaseKey, {
    db: { schema: 'api' },
    auth: { persistSession: false }
  });
  
  console.log('Connected to Supabase');
  console.log();
  
  try {
    // Delete in reverse order of foreign keys
    console.log('Deleting prices...');
    const { error: pricesError } = await supabase
      .from('prices')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (pricesError) throw pricesError;
    console.log('✓ Prices deleted');
    
    console.log('Deleting products...');
    const { error: productsError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (productsError) throw productsError;
    console.log('✓ Products deleted');
    
    console.log('Deleting supplements...');
    const { error: supplementsError } = await supabase
      .from('supplements')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (supplementsError) throw supplementsError;
    console.log('✓ Supplements deleted');
    
    console.log();
    console.log('Database cleared successfully!');
    console.log('Retailers table preserved (seeded data)');
    console.log();
    console.log('='.repeat(80));
  } catch (error) {
    console.error('✗ Error clearing database:', error.message);
    process.exit(1);
  }
}

clearDatabase();
