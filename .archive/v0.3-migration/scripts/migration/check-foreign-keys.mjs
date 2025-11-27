#!/usr/bin/env node
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

async function checkForeignKeys() {
  console.log('🔍 Checking foreign key relationships...\n');
  
  // Get a product ID
  const { data: product } = await supabase
    .from('products')
    .select('id, brand')
    .limit(1)
    .single();
    
  console.log('Sample product:', product);
  
  // Check if any prices reference this product
  const { data: prices, count } = await supabase
    .from('prices')
    .select('id, price, product_id', { count: 'exact' })
    .eq('product_id', product.id);
    
  console.log(`\nPrices for product ${product.id}:`, count);
  console.log('Sample:', prices?.slice(0, 2));
  
  // Now try the reverse - get prices and check if product_id matches
  const { data: allPrices } = await supabase
    .from('prices')
    .select('product_id')
    .limit(10);
    
  console.log('\nSample product_ids from prices table:');
  allPrices?.forEach(p => console.log('  -', p.product_id));
  
  // Check if these IDs exist in products table
  if (allPrices && allPrices.length > 0) {
    const { data: matchingProducts, count } = await supabase
      .from('products')
      .select('id', { count: 'exact' })
      .in('id', allPrices.map(p => p.product_id));
      
    console.log(`\nMatching products found: ${count}/${allPrices.length}`);
  }
  
  // Try manual join query
  console.log('\n📊 Testing manual query without join...');
  const { data: testProduct } = await supabase
    .from('products')
    .select('id')
    .eq('supplement_id', '6b1c6882-8a3b-44a3-b496-827e930cf954')
    .limit(1)
    .single();
    
  const { data: testPrices, count: priceCount } = await supabase
    .from('prices')
    .select('*', { count: 'exact' })
    .eq('product_id', testProduct.id);
    
  console.log(`Product ${testProduct.id} has ${priceCount} prices`);
}

checkForeignKeys();
