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

async function testProductPricesJoin() {
  console.log('🔍 Testing product-price relationship...\n');
  
  // Get multivitamin supplement
  const { data: supplement } = await supabase
    .from('supplements')
    .select('id, slug, name')
    .eq('slug', 'multivitamin')
    .single();
    
  console.log('Supplement:', supplement);
  
  // Get products for this supplement
  const { data: products, count } = await supabase
    .from('products')
    .select('id, brand, product_name', { count: 'exact' })
    .eq('supplement_id', supplement.id)
    .limit(3);
    
  console.log(`\nProducts for ${supplement.name}: ${count} total`);
  console.log('Sample products:', products);
  
  // Try to get product with prices
  const { data: productWithPrices } = await supabase
    .from('products')
    .select(`
      id,
      brand,
      product_name,
      prices (
        price,
        in_stock,
        retailer:retailers (
          name
        )
      )
    `)
    .eq('supplement_id', supplement.id)
    .limit(1)
    .single();
    
  console.log('\nProduct with prices join:');
  console.log(JSON.stringify(productWithPrices, null, 2));
  
  // Check if prices table has product_id references
  const { data: samplePrice } = await supabase
    .from('prices')
    .select('id, product_id, price, in_stock')
    .limit(1)
    .single();
    
  console.log('\nSample price record:');
  console.log(samplePrice);
  
  // Check if that product_id matches any product
  if (samplePrice) {
    const { data: matchingProduct } = await supabase
      .from('products')
      .select('id, brand')
      .eq('id', samplePrice.product_id)
      .single();
      
    console.log('Matching product:', matchingProduct);
  }
}

testProductPricesJoin();
