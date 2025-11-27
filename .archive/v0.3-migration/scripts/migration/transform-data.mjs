#!/usr/bin/env node

/**
 * Migration Script 2: Transform and Validate Data
 * 
 * Purpose: Clean, normalize, and validate extracted CSV data
 * 
 * Input: 3 CSV files from extract-products-to-csv.mjs
 * Output: 3 validated CSV files + mapping files
 * 
 * Data Flow:
 * 1. Read CSV files from extraction
 * 2. Clean and normalize data (trim, standardize formats)
 * 3. Validate foreign key relationships
 * 4. Generate UUIDs for all records
 * 5. Create ID mapping files
 * 6. Write validated CSV files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createObjectCsvWriter } from 'csv-writer';
import { parse } from 'csv-parse/sync';
import { randomUUID } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, 'data'),
  outputDir: path.join(__dirname, 'data/transformed'),
  mappingDir: path.join(__dirname, 'data/mappings')
};

// Statistics tracking
const stats = {
  supplements: { read: 0, valid: 0, invalid: 0 },
  products: { read: 0, valid: 0, invalid: 0, duplicates: 0 },
  prices: { read: 0, valid: 0, invalid: 0 },
  errors: []
};

// ID mappings
const idMaps = {
  supplements: new Map(),  // slug -> uuid
  products: new Map(),      // dsld_id -> uuid
  retailers: new Map()      // name -> uuid (from seeded data)
};

// Actual retailer UUIDs from database (queried from api.retailers table)
const RETAILER_IDS = {
  'iHerb': '56021f3f-7116-4085-924b-a535fba2115c',
  'Vitacost': '527e056c-89b7-435d-8ab0-32ec06a21b9b',
  'Amazon': '93a38438-9e18-40e5-9125-7960d323cc8e',
  'Walmart': '67590889-1a34-46d2-a8e7-05a6e91395ca',
  'GNC': 'a27ddca9-f529-41d7-ab7f-995a6fc73389',
  'Bodybuilding.com': '001f07b1-8d1a-41e8-a285-53b71dec5326',
  'Supplement Warehouse': '506e3448-642b-4871-ad93-4a2c52c46ab6'
};

/**
 * Ensure output directories exist
 */
function ensureOutputDirs() {
  [CONFIG.outputDir, CONFIG.mappingDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
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
      skip_empty_lines: true
    });
  } catch (error) {
    stats.errors.push(`Failed to read ${filename}: ${error.message}`);
    return [];
  }
}

/**
 * Clean and trim string
 */
function clean(value) {
  if (!value || value === 'null' || value === 'undefined') return null;
  return String(value).trim();
}

/**
 * Parse number safely
 */
function parseNumber(value) {
  if (!value || value === 'null' || value === 'undefined') return null;
  const num = parseFloat(value);
  return isNaN(num) ? null : num;
}

/**
 * Validate and transform supplements
 */
function transformSupplements(supplements) {
  console.log('Transforming supplements...');
  const transformed = [];
  
  for (const supp of supplements) {
    stats.supplements.read++;
    
    // Validate required fields
    if (!supp.slug || !supp.name) {
      stats.supplements.invalid++;
      stats.errors.push(`Supplement missing required fields: ${JSON.stringify(supp)}`);
      continue;
    }
    
    // Generate UUID
    const id = randomUUID();
    idMaps.supplements.set(supp.slug, id);
    
    // Transform record
    transformed.push({
      id,
      slug: clean(supp.slug),
      name: clean(supp.name),
      display_name: clean(supp.display_name) || clean(supp.name),
      subcategory: clean(supp.subcategory),
      description: clean(supp.description),
      hero_description: clean(supp.hero_description),
      hero_image_url: clean(supp.hero_image_url),
      show_in_nav: (supp.show_in_nav === 'true' || supp.show_in_nav === true) ? true : false,
      sort_order: parseInt(supp.sort_order) || 0,
      meta_title: clean(supp.meta_title),
      meta_description: clean(supp.meta_description),
      meta_keywords: clean(supp.meta_keywords) ? `{${clean(supp.meta_keywords)}}` : null
    });
    
    stats.supplements.valid++;
  }
  
  console.log(`  ✓ Valid: ${stats.supplements.valid}, Invalid: ${stats.supplements.invalid}`);
  return transformed;
}

/**
 * Validate and transform products
 */
function transformProducts(products) {
  console.log('Transforming products...');
  const transformed = [];
  const seenIds = new Set();
  
  for (const product of products) {
    stats.products.read++;
    
    // Validate required fields - json_id FROM CSV IS NOW REQUIRED!
    if (!product.json_id || !product.brand || !product.product_name) {
      stats.products.invalid++;
      stats.errors.push(`Product missing required fields: json_id=${product.json_id}, brand=${product.brand}`);
      continue;
    }
    
    // Check for duplicates using the JSON ID
    if (seenIds.has(product.json_id)) {
      stats.products.duplicates++;
      console.log(`  ⚠ Duplicate product ID: ${product.json_id} - skipping`);
      continue;
    }
    seenIds.add(product.json_id);
    
    // Validate supplement foreign key
    const supplementId = idMaps.supplements.get(product.supplement_slug);
    if (!supplementId) {
      stats.products.invalid++;
      stats.errors.push(`Product references unknown supplement: ${product.supplement_slug}`);
      continue;
    }
    
    // Generate a proper UUID for database, but store the json_id for reference
    const id = randomUUID();
    const jsonId = clean(product.json_id);
    idMaps.products.set(jsonId, id); // Map json_id to database UUID for price lookups
    
    // Transform record
    transformed.push({
      id,
      json_id: jsonId, // Store the original JSON ID
      supplement_id: supplementId,
      supplement_slug: product.supplement_slug, // KEEP supplement_slug for database
      dsld_id: clean(product.dsld_id),
      brand: clean(product.brand),
      product_name: clean(product.product_name),
      display_name: clean(product.display_name),
      dsld_product_name: clean(product.dsld_product_name),
      dsld_brand: clean(product.dsld_brand),
      serving_size: clean(product.serving_size),
      servings_per_container: clean(product.servings_per_container),
      net_quantity: clean(product.net_quantity),
      label_data: clean(product.label_data) || '{}',
      ingredients: clean(product.ingredients) || '[]',
      product_image_url: clean(product.product_image_url),
      is_active: (product.is_active === 'true' || product.is_active === true) ? true : false,
      third_party_tested: (product.third_party_tested === 'true' || product.third_party_tested === true) ? true : false,
      certifications: clean(product.certifications) ? `{${clean(product.certifications)}}` : '{}'
    });
    
    stats.products.valid++;
  }
  
  console.log(`  ✓ Valid: ${stats.products.valid}, Invalid: ${stats.products.invalid}, Duplicates: ${stats.products.duplicates}`);
  return transformed;
}

/**
 * Validate and transform prices
 */
function transformPrices(prices) {
  console.log('Transforming prices...');
  const transformed = [];
  const seenPairs = new Set(); // Track product_id + retailer_id combinations
  
  for (const price of prices) {
    stats.prices.read++;
    
    // Validate required fields - USE product_json_id FROM CSV!
    if (!price.product_json_id || !price.retailer_name || !price.price) {
      stats.prices.invalid++;
      continue;
    }
    
    // Look up the database UUID using the json_id
    const productJsonId = clean(price.product_json_id);
    const productId = idMaps.products.get(productJsonId);
    if (!productId) {
      stats.prices.invalid++;
      stats.errors.push(`Price references unknown product JSON ID: ${productJsonId}`);
      continue;
    }
    
    // Validate retailer foreign key
    const retailerId = RETAILER_IDS[price.retailer_name];
    if (!retailerId) {
      stats.prices.invalid++;
      stats.errors.push(`Price references unknown retailer: ${price.retailer_name}`);
      continue;
    }
    
    // Check for duplicate product-retailer pair
    const pairKey = `${productId}-${retailerId}`;
    if (seenPairs.has(pairKey)) {
      stats.prices.invalid++;
      continue; // Skip duplicate price entry
    }
    seenPairs.add(pairKey);
    
    // Generate UUID only for prices
    const id = randomUUID();
    // Transform record
    transformed.push({
      id,
      product_id: productId,
      retailer_id: retailerId,
      price: parseNumber(price.price),
      currency: clean(price.currency) || 'USD',
      product_url: clean(price.product_url),
      affiliate_url: clean(price.affiliate_url) || clean(price.product_url),
      in_stock: (price.in_stock === 'true' || price.in_stock === true) ? true : false,
      last_checked_at: clean(price.last_checked_at)
    });
    
    stats.prices.valid++;
  }
  
  console.log(`  ✓ Valid: ${stats.prices.valid}, Invalid: ${stats.prices.invalid}`);
  return transformed;
}

/**
 * Write CSV file
 */
async function writeCSV(filename, records, headers) {
  const filepath = path.join(CONFIG.outputDir, filename);
  
  const csvWriter = createObjectCsvWriter({
    path: filepath,
    header: headers
  });
  
  try {
    await csvWriter.writeRecords(records);
    console.log(`✓ Wrote ${records.length} records to ${filename}`);
    return true;
  } catch (error) {
    stats.errors.push(`Failed to write ${filename}: ${error.message}`);
    console.error(`✗ Failed to write ${filename}: ${error.message}`);
    return false;
  }
}

/**
 * Write ID mapping files
 */
function writeMappings() {
  console.log('Writing ID mapping files...');
  
  // Supplements mapping
  const suppMapping = {};
  idMaps.supplements.forEach((id, slug) => {
    suppMapping[slug] = id;
  });
  fs.writeFileSync(
    path.join(CONFIG.mappingDir, 'supplements-mapping.json'),
    JSON.stringify(suppMapping, null, 2)
  );
  console.log(`  ✓ Wrote supplements-mapping.json (${idMaps.supplements.size} entries)`);
  
  // Products mapping
  const prodMapping = {};
  idMaps.products.forEach((id, dsldId) => {
    prodMapping[dsldId] = id;
  });
  fs.writeFileSync(
    path.join(CONFIG.mappingDir, 'products-mapping.json'),
    JSON.stringify(prodMapping, null, 2)
  );
  console.log(`  ✓ Wrote products-mapping.json (${idMaps.products.size} entries)`);
  
  // Retailers mapping (for reference)
  fs.writeFileSync(
    path.join(CONFIG.mappingDir, 'retailers-mapping.json'),
    JSON.stringify(RETAILER_IDS, null, 2)
  );
  console.log(`  ✓ Wrote retailers-mapping.json (${Object.keys(RETAILER_IDS).length} entries)`);
}

/**
 * Main transformation process
 */
async function main() {
  console.log('='.repeat(80));
  console.log('TRANSFORMATION SCRIPT: Validate & Clean CSV Data');
  console.log('='.repeat(80));
  console.log();
  
  // Step 1: Setup
  console.log('Step 1: Setting up output directories...');
  ensureOutputDirs();
  console.log();
  
  // Step 2: Read CSV files
  console.log('Step 2: Reading extracted CSV files...');
  const supplements = readCSV('supplements.csv');
  const products = readCSV('products.csv');
  const prices = readCSV('prices.csv');
  console.log(`  ✓ Read ${supplements.length} supplements`);
  console.log(`  ✓ Read ${products.length} products`);
  console.log(`  ✓ Read ${prices.length} prices`);
  console.log();
  
  // Step 3: Transform data
  console.log('Step 3: Transforming and validating data...');
  const transformedSupplements = transformSupplements(supplements);
  const transformedProducts = transformProducts(products);
  const transformedPrices = transformPrices(prices);
  console.log();
  
  // Step 4: Write transformed CSV files
  console.log('Step 4: Writing validated CSV files...');
  
  await writeCSV('supplements-validated.csv', transformedSupplements, [
    { id: 'id', title: 'id' },
    { id: 'slug', title: 'slug' },
    { id: 'name', title: 'name' },
    { id: 'display_name', title: 'display_name' },
    { id: 'subcategory', title: 'subcategory' },
    { id: 'description', title: 'description' },
    { id: 'hero_description', title: 'hero_description' },
    { id: 'hero_image_url', title: 'hero_image_url' },
    { id: 'show_in_nav', title: 'show_in_nav' },
    { id: 'sort_order', title: 'sort_order' },
    { id: 'meta_title', title: 'meta_title' },
    { id: 'meta_description', title: 'meta_description' },
    { id: 'meta_keywords', title: 'meta_keywords' }
  ]);
  
  await writeCSV('products-validated.csv', transformedProducts, [
    { id: 'id', title: 'id' },
    { id: 'json_id', title: 'json_id' },
    { id: 'supplement_id', title: 'supplement_id' },
    { id: 'supplement_slug', title: 'supplement_slug' },
    { id: 'dsld_id', title: 'dsld_id' },
    { id: 'brand', title: 'brand' },
    { id: 'product_name', title: 'product_name' },
    { id: 'display_name', title: 'display_name' },
    { id: 'dsld_product_name', title: 'dsld_product_name' },
    { id: 'dsld_brand', title: 'dsld_brand' },
    { id: 'serving_size', title: 'serving_size' },
    { id: 'servings_per_container', title: 'servings_per_container' },
    { id: 'net_quantity', title: 'net_quantity' },
    { id: 'label_data', title: 'label_data' },
    { id: 'ingredients', title: 'ingredients' },
    { id: 'product_image_url', title: 'product_image_url' },
    { id: 'is_active', title: 'is_active' },
    { id: 'third_party_tested', title: 'third_party_tested' },
    { id: 'certifications', title: 'certifications' }
  ]);
  await writeCSV('prices-validated.csv', transformedPrices, [
    { id: 'id', title: 'id' },
    { id: 'product_id', title: 'product_id' },
    { id: 'retailer_id', title: 'retailer_id' },
    { id: 'price', title: 'price' },
    { id: 'currency', title: 'currency' },
    { id: 'product_url', title: 'product_url' },
    { id: 'affiliate_url', title: 'affiliate_url' },
    { id: 'in_stock', title: 'in_stock' },
    { id: 'last_checked_at', title: 'last_checked_at' }
  ]);
  
  console.log();
  
  // Step 5: Write ID mappings
  console.log('Step 5: Writing ID mapping files...');
  writeMappings();
  console.log();
  
  // Step 6: Summary
  console.log('='.repeat(80));
  console.log('TRANSFORMATION COMPLETE');
  console.log('='.repeat(80));
  console.log(`Supplements: ${stats.supplements.valid}/${stats.supplements.read} valid`);
  console.log(`Products:    ${stats.products.valid}/${stats.products.read} valid (${stats.products.duplicates} duplicates skipped)`);
  console.log(`Prices:      ${stats.prices.valid}/${stats.prices.read} valid`);
  console.log();
  
  if (stats.errors.length > 0) {
    console.log(`⚠ ${stats.errors.length} errors encountered (see details above)`);
    console.log();
  }
  
  console.log('Output files:');
  console.log(`  - ${path.join(CONFIG.outputDir, 'supplements-validated.csv')}`);
  console.log(`  - ${path.join(CONFIG.outputDir, 'products-validated.csv')}`);
  console.log(`  - ${path.join(CONFIG.outputDir, 'prices-validated.csv')}`);
  console.log();
  console.log('Mapping files:');
  console.log(`  - ${path.join(CONFIG.mappingDir, 'supplements-mapping.json')}`);
  console.log(`  - ${path.join(CONFIG.mappingDir, 'products-mapping.json')}`);
  console.log(`  - ${path.join(CONFIG.mappingDir, 'retailers-mapping.json')}`);
  console.log();
  console.log('Next step: Run load-to-supabase.mjs to insert data into database');
  console.log('='.repeat(80));
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
