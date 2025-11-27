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

async function analyzeProductPriceCoverage() {
  console.log('📊 Analyzing product-price coverage...\n');
  
  // Get multivitamin
  const { data: supplement } = await supabase
    .from('supplements')
    .select('id, name')
    .eq('slug', 'multivitamin')
    .single();
    
  // Get all products for this supplement
  const { data: products, count: totalProducts } = await supabase
    .from('products')
    .select('id, brand, product_name', { count: 'exact' })
    .eq('supplement_id', supplement.id);
    
  console.log(`Total ${supplement.name} products: ${totalProducts}`);
  
  // Check how many have prices
  let productsWithPrices = 0;
  let productsWithoutPrices = [];
  
  for (const product of products.slice(0, 10)) {
    const { count: priceCount } = await supabase
      .from('prices')
      .select('*', { count: 'exact', head: true })
      .eq('product_id', product.id);
      
    if (priceCount > 0) {
      productsWithPrices++;
    } else {
      productsWithoutPrices.push(product);
    }
  }
  
  console.log(`\nChecked first 10 products:`);
  console.log(`  ✅ With prices: ${productsWithPrices}`);
  console.log(`  ❌ Without prices: ${productsWithoutPrices.length}`);
  
  if (productsWithoutPrices.length > 0) {
    console.log(`\n📋 Products without prices:`);
    productsWithoutPrices.forEach(p => {
      console.log(`     - ${p.brand}: ${p.product_name.substring(0, 50)}...`);
    });
  }
  
  // Get total prices for this supplement
  const { count: pricesForSupplement } = await supabase
    .from('prices')
    .select('*', { count: 'exact', head: true })
    .in('product_id', products.map(p => p.id));
    
  console.log(`\nTotal prices for ${supplement.name}: ${pricesForSupplement}`);
  console.log(`Average prices per product: ${(pricesForSupplement / totalProducts).toFixed(2)}`);
}

analyzeProductPriceCoverage();
