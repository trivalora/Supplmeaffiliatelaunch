#!/usr/bin/env node
/**
 * Direct API test - fetch products via Supabase client
 * Tests if the API route logic works correctly
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
dotenv.config({ path: join(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseKey ? '✓' : '✗');
  process.exit(1);
}

console.log('🔗 Connecting to Supabase...');
const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' },
  auth: { persistSession: false }
});

// Test 1: Check supplement exists
console.log('\n📋 Test 1: Check if ashwagandha supplement exists');
const { data: supplement, error: suppError } = await supabase
  .from('supplements')
  .select('id, slug, name')
  .eq('slug', 'ashwagandha')
  .single();

if (suppError) {
  console.error('❌ Error fetching supplement:', suppError.message);
  process.exit(1);
}

console.log('✅ Found supplement:', supplement);

// Test 2: Count products for this supplement
console.log('\n📋 Test 2: Count products for ashwagandha');
const { count, error: countError } = await supabase
  .from('products')
  .select('*', { count: 'exact', head: true })
  .eq('supplement_id', supplement.id);

if (countError) {
  console.error('❌ Error counting products:', countError.message);
  process.exit(1);
}

console.log(`✅ Found ${count} products for ashwagandha`);

// Test 3: Fetch first 2 products with prices
console.log('\n📋 Test 3: Fetch first 2 products with all fields');
const { data: products, error: prodError } = await supabase
  .from('products')
  .select(`
    id,
    dsld_id,
    brand,
    product_name,
    display_name,
    product_image_url,
    serving_size,
    third_party_tested,
    certifications,
    unit,
    amount_per_serving,
    net_contents,
    filters,
    prices (
      price,
      in_stock,
      retailer:retailers (
        name
      )
    )
  `)
  .eq('supplement_id', supplement.id)
  .limit(2);

if (prodError) {
  console.error('❌ Error fetching products:', prodError.message);
  console.error('Details:', prodError);
  process.exit(1);
}

console.log(`✅ Fetched ${products.length} products`);
console.log('\n📦 First product:');
console.log('  ID:', products[0]?.id);
console.log('  Brand:', products[0]?.brand);
console.log('  Name:', products[0]?.product_name);
console.log('  Unit:', products[0]?.unit);
console.log('  Amount per serving:', products[0]?.amount_per_serving);
console.log('  Filters:', products[0]?.filters);
console.log('  Price count:', products[0]?.prices?.length || 0);
console.log('  First price:', products[0]?.prices?.[0]);

// Test 4: Check price filtering
console.log('\n📋 Test 4: Check how many products have prices');
let productsWithPrices = 0;
let productsWithInStockPrices = 0;

for (const product of products) {
  if (product.prices && product.prices.length > 0) {
    productsWithPrices++;
    const inStockPrices = product.prices.filter(p => p.in_stock);
    if (inStockPrices.length > 0) {
      productsWithInStockPrices++;
    }
  }
}

console.log(`  Products with any prices: ${productsWithPrices}/${products.length}`);
console.log(`  Products with in-stock prices: ${productsWithInStockPrices}/${products.length}`);

console.log('\n✅ All tests passed!');
