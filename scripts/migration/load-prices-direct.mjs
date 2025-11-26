#!/usr/bin/env node

/**
 * Load Prices Script
 * 
 * Purpose: Load prices using actual product/retailer IDs from database
 * This script queries the database for existing product/retailer IDs and uses those
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env.local') });

const CONFIG = {
  inputDir: path.join(__dirname, 'data'),
  batchSize: 100
};

async function main() {
  console.log('='.repeat(80));
  console.log('LOADING PRICES WITH DATABASE IDS');
  console.log('='.repeat(80));
  console.log();
  
  // Connect to Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { db: { schema: 'api' }, auth: { persistSession: false } }
  );
  
  // Read raw CSV
  console.log('Reading prices CSV...');
  const pricesFile = path.join(CONFIG.inputDir, 'prices.csv');
  const pricesCsv = fs.readFileSync(pricesFile, 'utf8');
  const rawPrices = parse(pricesCsv, { columns: true, skip_empty_lines: true });
  console.log(`✓ Read ${rawPrices.length} price records`);
  console.log();
  
  // Query all products and retailers from database
  console.log('Querying database for product and retailer IDs...');
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('id, dsld_id');
  
  if (prodError) throw prodError;
  
  const { data: retailers, error: retError } = await supabase
    .from('retailers')
    .select('id, name');
  
  if (retError) throw retError;
  
  console.log(`✓ Found ${products.length} products`);
  console.log(`✓ Found ${retailers.length} retailers`);
  console.log();
  
  // Build lookup maps
  const productMap = new Map(products.map(p => [p.dsld_id, p.id]));
  const retailerMap = new Map(retailers.map(r => [r.name, r.id]));
  
  // Transform prices with database IDs
  console.log('Transforming prices with database IDs...');
  const transformedPrices = [];
  const seenPairs = new Set();
  let skipped = 0;
  
  for (const price of rawPrices) {
    const productId = productMap.get(price.product_dsld_id);
    const retailerId = retailerMap.get(price.retailer_name);
    
    if (!productId || !retailerId) {
      skipped++;
      continue;
    }
    
    // Skip duplicates
    const pairKey = `${productId}-${retailerId}`;
    if (seenPairs.has(pairKey)) {
      skipped++;
      continue;
    }
    seenPairs.add(pairKey);
    
    transformedPrices.push({
      id: randomUUID(),
      product_id: productId,
      retailer_id: retailerId,
      price: parseFloat(price.price),
      currency: price.currency || 'USD',
      product_url: price.product_url,
      affiliate_url: price.affiliate_url || price.product_url,
      in_stock: true,
      last_checked_at: new Date().toISOString()
    });
  }
  
  console.log(`✓ Transformed ${transformedPrices.length} prices (skipped ${skipped})`);
  console.log();
  
  // Load prices in batches
  console.log('Loading prices to database...');
  let loaded = 0;
  let failed = 0;
  
  for (let i = 0; i < transformedPrices.length; i += CONFIG.batchSize) {
    const batch = transformedPrices.slice(i, i + CONFIG.batchSize);
    
    try {
      const { error } = await supabase
        .from('prices')
        .upsert(batch, { onConflict: 'product_id,retailer_id' });
      
      if (error) throw error;
      
      loaded += batch.length;
      process.stdout.write(`\r  Progress: ${loaded}/${transformedPrices.length} prices loaded`);
    } catch (error) {
      failed += batch.length;
      console.error(`\n  ✗ Batch failed: ${error.message}`);
    }
  }
  
  console.log();
  console.log();
  
  // Verify
  const { count } = await supabase
    .from('prices')
    .select('*', { count: 'exact', head: true });
  
  console.log('='.repeat(80));
  console.log(`✅ MIGRATION COMPLETE`);
  console.log('='.repeat(80));
  console.log(`Loaded: ${loaded} prices`);
  console.log(`Failed: ${failed} prices`);
  console.log(`Total in database: ${count} prices`);
  console.log();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
