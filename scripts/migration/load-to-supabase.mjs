#!/usr/bin/env node

/**
 * Migration Script 3: Load to Supabase
 * 
 * Purpose: Insert validated CSV data into Supabase database
 * 
 * Input: 3 validated CSV files from transform-data.mjs
 * Output: Data loaded into api.supplements, api.products, api.prices tables
 * 
 * Data Flow:
 * 1. Read validated CSV files
 * 2. Connect to Supabase with service_role key
 * 3. Load supplements (parent table)
 * 4. Load products with foreign keys
 * 5. Load prices with foreign keys
 * 6. Verify row counts
 * 7. Create backup JSON files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, 'data/transformed'),
  backupDir: path.join(__dirname, 'data/backups'),
  batchSize: 100  // Insert in batches to avoid timeouts
};

// Statistics tracking
const stats = {
  supplements: { loaded: 0, failed: 0 },
  products: { loaded: 0, failed: 0 },
  prices: { loaded: 0, failed: 0 },
  errors: []
};

/**
 * Initialize Supabase client
 */
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials in .env.local');
  }
  
  return createClient(supabaseUrl, supabaseKey, {
    db: { schema: 'api' },
    auth: { persistSession: false }
  });
}

/**
 * Ensure backup directory exists
 */
function ensureBackupDir() {
  if (!fs.existsSync(CONFIG.backupDir)) {
    fs.mkdirSync(CONFIG.backupDir, { recursive: true });
  }
}

/**
 * Read CSV file
 */
function readCSV(filename) {
  const filepath = path.join(CONFIG.inputDir, filename);
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    return parse(content, {
      columns: true,
      skip_empty_lines: true,
      cast: (value, context) => {
        // Handle empty/null values
        if (value === '' || value === 'null' || value === 'undefined') {
          return null;
        }
        // Keep as string, let Supabase handle type conversion
        return value;
      }
    });
  } catch (error) {
    stats.errors.push(`Failed to read ${filename}: ${error.message}`);
    return [];
  }
}

/**
 * Insert data in batches (with upsert for idempotency)
 */
async function insertBatch(supabase, table, records, batchSize = CONFIG.batchSize, useUpsert = false) {
  const batches = [];
  for (let i = 0; i < records.length; i += batchSize) {
    batches.push(records.slice(i, i + batchSize));
  }
  
  let loaded = 0;
  let failed = 0;
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    try {
      let query = supabase.from(table);
      
      if (useUpsert) {
        // Use upsert to update if exists, insert if not
        const { data, error } = await query.upsert(batch, { onConflict: getConflictColumn(table) });
        if (error) throw error;
      } else {
        const { data, error} = await query.insert(batch);
        if (error) throw error;
      }
      
      loaded += batch.length;
      process.stdout.write(`\r  Progress: ${loaded}/${records.length} records inserted`);
    } catch (error) {
      failed += batch.length;
      stats.errors.push(`Batch ${i + 1} failed for ${table}: ${error.message}`);
      console.error(`\n  ✗ Batch ${i + 1} failed: ${error.message}`);
    }
  }
  
  console.log(); // New line after progress
  return { loaded, failed };
}

/**
 * Get conflict column for upsert
 */
function getConflictColumn(table) {
  const conflicts = {
    'supplements': 'slug',
    'products': 'json_id',
    'prices': 'product_id,retailer_id'
  };
  return conflicts[table] || 'id';
}

/**
 * Load supplements
 */
async function loadSupplements(supabase, supplements) {
  console.log('Loading supplements...');
  
  const result = await insertBatch(supabase, 'supplements', supplements, CONFIG.batchSize, true);
  stats.supplements.loaded = result.loaded;
  stats.supplements.failed = result.failed;
  
  console.log(`  ✓ Loaded ${result.loaded} supplements, ${result.failed} failed`);
}

/**
 * Load products
 */
async function loadProducts(supabase, products) {
  console.log('Loading products...');
  
  const result = await insertBatch(supabase, 'products', products, CONFIG.batchSize, true);
  stats.products.loaded = result.loaded;
  stats.products.failed = result.failed;
  
  console.log(`  ✓ Loaded ${result.loaded} products, ${result.failed} failed`);
}

/**
 * Load prices
 */
async function loadPrices(supabase, prices) {
  console.log('Loading prices...');
  
  const result = await insertBatch(supabase, 'prices', prices, CONFIG.batchSize, true);
  stats.prices.loaded = result.loaded;
  stats.prices.failed = result.failed;
  
  console.log(`  ✓ Loaded ${result.loaded} prices, ${result.failed} failed`);
}

/**
 * Verify row counts
 */
async function verifyData(supabase) {
  console.log('Verifying data in database...');
  
  try {
    // Count supplements
    const { count: suppCount, error: suppError } = await supabase
      .from('supplements')
      .select('*', { count: 'exact', head: true });
    
    if (suppError) throw suppError;
    console.log(`  ✓ Supplements: ${suppCount} rows`);
    
    // Count products
    const { count: prodCount, error: prodError } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
    
    if (prodError) throw prodError;
    console.log(`  ✓ Products: ${prodCount} rows`);
    
    // Count prices
    const { count: priceCount, error: priceError } = await supabase
      .from('prices')
      .select('*', { count: 'exact', head: true });
    
    if (priceError) throw priceError;
    console.log(`  ✓ Prices: ${priceCount} rows`);
    
    // Count retailers (should be 7 from seed)
    const { count: retailerCount, error: retailerError } = await supabase
      .from('retailers')
      .select('*', { count: 'exact', head: true });
    
    if (retailerError) throw retailerError;
    console.log(`  ✓ Retailers: ${retailerCount} rows (seeded)`);
    
    return {
      supplements: suppCount,
      products: prodCount,
      prices: priceCount,
      retailers: retailerCount
    };
  } catch (error) {
    console.error(`  ✗ Verification failed: ${error.message}`);
    stats.errors.push(`Verification failed: ${error.message}`);
    return null;
  }
}

/**
 * Create backup JSON files
 */
function createBackups(supplements, products, prices) {
  console.log('Creating backup JSON files...');
  ensureBackupDir();
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
  
  try {
    fs.writeFileSync(
      path.join(CONFIG.backupDir, `supplements-${timestamp}.json`),
      JSON.stringify(supplements, null, 2)
    );
    console.log(`  ✓ Backed up supplements`);
    
    fs.writeFileSync(
      path.join(CONFIG.backupDir, `products-${timestamp}.json`),
      JSON.stringify(products, null, 2)
    );
    console.log(`  ✓ Backed up products`);
    
    fs.writeFileSync(
      path.join(CONFIG.backupDir, `prices-${timestamp}.json`),
      JSON.stringify(prices, null, 2)
    );
    console.log(`  ✓ Backed up prices`);
    
    return true;
  } catch (error) {
    console.error(`  ✗ Backup failed: ${error.message}`);
    stats.errors.push(`Backup failed: ${error.message}`);
    return false;
  }
}

/**
 * Query and display sample data
 */
async function showSampleData(supabase) {
  console.log('Sample data from database:');
  console.log();
  
  try {
    // Show 3 supplements
    const { data: supplements, error: suppError } = await supabase
      .from('supplements')
      .select('slug, name, display_name')
      .limit(3);
    
    if (suppError) throw suppError;
    console.log('Supplements:');
    supplements.forEach(s => {
      console.log(`  - ${s.name} (${s.slug})`);
    });
    console.log();
    
    // Show 3 products
    const { data: products, error: prodError } = await supabase
      .from('products')
      .select('brand, product_name, dsld_id')
      .limit(3);
    
    if (prodError) throw prodError;
    console.log('Products:');
    products.forEach(p => {
      console.log(`  - ${p.brand} - ${p.product_name} (DSLD: ${p.dsld_id})`);
    });
    console.log();
    
    // Show price stats
    const { data: priceStats, error: priceError } = await supabase
      .from('prices')
      .select('price')
      .order('price', { ascending: true });
    
    if (priceError) throw priceError;
    if (priceStats && priceStats.length > 0) {
      const prices = priceStats.map(p => parseFloat(p.price)).filter(p => !isNaN(p));
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
      
      console.log('Price Range:');
      console.log(`  - Min: $${min.toFixed(2)}`);
      console.log(`  - Max: $${max.toFixed(2)}`);
      console.log(`  - Avg: $${avg.toFixed(2)}`);
    }
    console.log();
  } catch (error) {
    console.error(`  ✗ Failed to fetch sample data: ${error.message}`);
  }
}

/**
 * Main loading process
 */
async function main() {
  console.log('='.repeat(80));
  console.log('LOAD SCRIPT: Insert Data into Supabase');
  console.log('='.repeat(80));
  console.log();
  
  // Step 1: Read CSV files
  console.log('Step 1: Reading validated CSV files...');
  const supplements = readCSV('supplements-validated.csv');
  const products = readCSV('products-validated.csv');
  const prices = readCSV('prices-validated.csv');
  console.log(`  ✓ Read ${supplements.length} supplements`);
  console.log(`  ✓ Read ${products.length} products`);
  console.log(`  ✓ Read ${prices.length} prices`);
  console.log();
  
  // Step 2: Create backups
  console.log('Step 2: Creating backup files...');
  createBackups(supplements, products, prices);
  console.log();
  
  // Step 3: Connect to Supabase
  console.log('Step 3: Connecting to Supabase...');
  let supabase;
  try {
    supabase = getSupabaseClient();
    console.log('  ✓ Connected to Supabase');
  } catch (error) {
    console.error(`  ✗ Failed to connect: ${error.message}`);
    process.exit(1);
  }
  console.log();
  
  // Step 4: Load data (order matters - parent tables first)
  console.log('Step 4: Loading data into database...');
  console.log();
  
  // Check if data already exists
  const { count: existingSupps } = await supabase.from('supplements').select('*', { count: 'exact', head: true });
  const { count: existingProds } = await supabase.from('products').select('*', { count: 'exact', head: true });
  const { count: existingPrices } = await supabase.from('prices').select('*', { count: 'exact', head: true });
  
  if (existingSupps > 0) {
    console.log(`Supplements already loaded (${existingSupps} rows) - skipping`);
    stats.supplements.loaded = existingSupps;
  } else {
    await loadSupplements(supabase, supplements);
  }
  
  if (existingProds > 0) {
    console.log(`Products already loaded (${existingProds} rows) - skipping`);
    stats.products.loaded = existingProds;
  } else {
    await loadProducts(supabase, products);
  }
  
  if (existingPrices > 0) {
    console.log(`Prices already loaded (${existingPrices} rows) - skipping`);
    stats.prices.loaded = existingPrices;
  } else {
    await loadPrices(supabase, prices);
  }
  
  console.log();
  
  // Step 5: Verify data
  console.log('Step 5: Verifying data integrity...');
  const counts = await verifyData(supabase);
  console.log();
  
  // Step 6: Show sample data
  if (counts) {
    console.log('Step 6: Sample data preview...');
    await showSampleData(supabase);
  }
  
  // Step 7: Summary
  console.log('='.repeat(80));
  console.log('LOAD COMPLETE');
  console.log('='.repeat(80));
  console.log(`Supplements: ${stats.supplements.loaded} loaded, ${stats.supplements.failed} failed`);
  console.log(`Products:    ${stats.products.loaded} loaded, ${stats.products.failed} failed`);
  console.log(`Prices:      ${stats.prices.loaded} loaded, ${stats.prices.failed} failed`);
  console.log();
  
  if (stats.errors.length > 0) {
    console.log(`⚠ ${stats.errors.length} errors encountered:`);
    stats.errors.slice(0, 10).forEach(err => console.log(`  ✗ ${err}`));
    if (stats.errors.length > 10) {
      console.log(`  ... and ${stats.errors.length - 10} more errors`);
    }
    console.log();
  }
  
  if (counts) {
    console.log('Database totals:');
    console.log(`  - Supplements: ${counts.supplements}`);
    console.log(`  - Products: ${counts.products}`);
    console.log(`  - Prices: ${counts.prices}`);
    console.log(`  - Retailers: ${counts.retailers} (seeded)`);
    console.log();
  }
  
  console.log('Backup files:');
  console.log(`  - ${CONFIG.backupDir}/`);
  console.log();
  console.log('✅ Data migration complete!');
  console.log('Next step: Test API queries and begin Week 3 API development');
  console.log('='.repeat(80));
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
