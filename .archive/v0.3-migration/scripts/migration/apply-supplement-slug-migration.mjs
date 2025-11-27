#!/usr/bin/env node

/**
 * Apply migration: Add supplement_slug to products table
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
});

async function applyMigration() {
  console.log('🔧 Checking if supplement_slug column exists and populating if needed');
  console.log('');
  
  try {
    // Step 1: Check if column exists by trying to query it
    console.log('1. Checking if supplement_slug column exists...');
    const { data: testData, error: testError } = await supabase
      .from('products')
      .select('id, supplement_slug')
      .limit(1);
    
    if (testError) {
      console.log('   ⚠ Column does not exist yet');
      console.log('');
      console.log('❌ MANUAL ACTION REQUIRED:');
      console.log('');
      console.log('Please run the following SQL in Supabase SQL Editor:');
      console.log('(Dashboard → SQL Editor → New Query)');
      console.log('');
      console.log('```sql');
      console.log('-- Add supplement_slug column');
      console.log('ALTER TABLE api.products ADD COLUMN supplement_slug TEXT;');
      console.log('');
      console.log('-- Populate from supplements table');
      console.log('UPDATE api.products p');
      console.log('SET supplement_slug = s.slug');
      console.log('FROM api.supplements s');
      console.log('WHERE p.supplement_id = s.id;');
      console.log('');
      console.log('-- Add NOT NULL constraint');
      console.log('ALTER TABLE api.products ALTER COLUMN supplement_slug SET NOT NULL;');
      console.log('');
      console.log('-- Create index');
      console.log('CREATE INDEX idx_products_supplement_slug ON api.products(supplement_slug);');
      console.log('');
      console.log('-- Verify');
      console.log('SELECT COUNT(*) as total, COUNT(supplement_slug) as with_slug FROM api.products;');
      console.log('```');
      console.log('');
      console.log('After running the SQL, run this script again to verify.');
      return;
    }
    
    console.log('   ✓ Column exists');
    
    // Step 2: Check if it's populated
    console.log('2. Checking if supplement_slug is populated...');
    const { data: products, error: selectError } = await supabase
      .from('products')
      .select('id, supplement_slug, supplement_id');
    
    if (selectError) {
      console.error('❌ Error fetching products:', selectError);
      return;
    }
    
    const nullCount = products.filter(p => !p.supplement_slug).length;
    
    if (nullCount > 0) {
      console.log(`   ⚠ Found ${nullCount} products with null supplement_slug`);
      console.log('   Please run the UPDATE query from Supabase SQL Editor (see above)');
      return;
    }
    
    console.log(`   ✓ All ${products.length} products have supplement_slug populated`);
    
    // Step 3: Show sample data
    console.log('3. Sample data:');
    const sample = products.slice(0, 3);
    sample.forEach(p => {
      console.log(`   - Product ${p.id.substring(0, 8)}...: supplement_slug="${p.supplement_slug}"`);
    });
    
    console.log('');
    console.log('✅ Migration verified successfully!');
    console.log('');
    console.log('Summary:');
    console.log(`  - Total products: ${products.length}`);
    console.log(`  - All have supplement_slug populated`);
    console.log('  - Supplement slugs by count:');
    
    const slugCounts = {};
    products.forEach(p => {
      slugCounts[p.supplement_slug] = (slugCounts[p.supplement_slug] || 0) + 1;
    });
    
    Object.entries(slugCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([slug, count]) => {
        console.log(`    - ${slug}: ${count} products`);
      });
    
  } catch (error) {
    console.error('❌ Migration check failed:', error);
    process.exit(1);
  }
}

applyMigration();
