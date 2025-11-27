#!/usr/bin/env node

/**
 * Migration Script 1: Extract Products to CSV
 * 
 * Purpose: Extract data from JSON files and write to CSV format
 * 
 * Input: 17 JSON files in public/api/products/supplements/
 * Output: 4 CSV files (supplements.csv, products.csv, prices.csv, glossary_terms.csv)
 * 
 * Data Flow:
 * 1. Read all JSON files from public/api/products/supplements/
 * 2. Extract supplement metadata
 * 3. Extract product details with DSLD data
 * 4. Extract retailer prices
 * 5. Write to CSV files for next stage (transform)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createObjectCsvWriter } from 'csv-writer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../../public/api/products/supplements'),
  outputDir: path.join(__dirname, '../../scripts/migration/data'),
  supplementFiles: [
    'ashwagandha.json',
    'bcaa.json',
    'calcium.json',
    'casein.json',
    'collagen.json',
    'creatine.json',
    'curcumin.json',
    'iron.json',
    'magnesium.json',
    'multivitamin.json',
    'omega-3.json',
    'prebiotics.json',
    'probiotics.json',
    'vitamin-c.json',
    'vitamin-d.json',
    'whey.json',
    'zinc.json'
  ]
};

// Statistics tracking
const stats = {
  supplements: 0,
  products: 0,
  prices: 0,
  errors: []
};

/**
 * Ensure output directory exists
 */
function ensureOutputDir() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    console.log(`✓ Created output directory: ${CONFIG.outputDir}`);
  }
}

/**
 * Read and parse JSON file
 */
function readJsonFile(filename) {
  const filepath = path.join(CONFIG.sourceDir, filename);
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    stats.errors.push(`Failed to read ${filename}: ${error.message}`);
    return null;
  }
}

/**
 * Extract supplement data from JSON
 */
function extractSupplements(data, filename) {
  const supplements = [];
  
  for (const filename of CONFIG.supplementFiles) {
    const jsonData = readJsonFile(filename);
    if (!jsonData) continue;

    const slug = jsonData.supplement || filename.replace('.json', '');
    const metadata = jsonData.metadata || {};
    
    supplements.push({
      slug: slug,
      name: metadata.name || slug.charAt(0).toUpperCase() + slug.slice(1),
      display_name: metadata.name || slug.charAt(0).toUpperCase() + slug.slice(1),
      subcategory: null,
      description: `${metadata.name || slug} supplement information`,
      hero_description: null,
      hero_image_url: null,
      show_in_nav: true,
      sort_order: 0,
      meta_title: `${metadata.name || slug} Supplements - Compare Prices & Products`,
      meta_description: `Find the best ${metadata.name || slug} supplements. Compare ${metadata.product_count || 0} products from top retailers.`,
      meta_keywords: `${slug},supplements,${metadata.name || slug}`
    });
    
    stats.supplements++;
  }
  
  return supplements;
}

/**
 * Extract products from JSON
 */
function extractProducts(allData) {
  const products = [];
  
  for (const { slug, jsonData } of allData) {
    if (!jsonData || !jsonData.products) continue;
    
    for (const product of jsonData.products) {
      // Extract serving size and unit
      const servingSize = product.amount_per_serving || null;
      const servingUnit = product.unit || 'mg';
      
      // Build product record - Store JSON ID in json_id field
      products.push({
        json_id: product.id, // Store the original JSON ID here (e.g., "57173_organic traditions_...")
        supplement_slug: slug,
        dsld_id: product.dsld_id || null,
        brand: product.brand || product.dsld_brand || 'Unknown',
        product_name: product.brand + ' ' + (product.dsld_product_name || 'Unknown Product'),
        display_name: null,
        dsld_product_name: product.dsld_product_name || null,
        dsld_brand: product.dsld_brand || null,
        serving_size: product.dsld_label_info?.serving_size || null,
        servings_per_container: null,
        net_quantity: product.net_contents || product.dsld_content || null,
        label_data: JSON.stringify(product.dsld_label_info?.label_statements || {}),
        ingredients: JSON.stringify(product.dsld_label_info?.ingredients || []),
        product_image_url: product.product_image_url || null,
        is_active: true,
        third_party_tested: false,
        certifications: ''
      });
      
      stats.products++;
    }
  }
  
  return products;
}

/**
 * Extract prices from JSON
 */
function extractPrices(allData) {
  const prices = [];
  
  for (const { slug, jsonData } of allData) {
    if (!jsonData || !jsonData.products) continue;
    
    for (const product of jsonData.products) {
      if (!product.retailer_prices || !Array.isArray(product.retailer_prices)) continue;
      for (const retailerPrice of product.retailer_prices) {
        prices.push({
          product_json_id: product.id, // Store JSON ID for matching later
          retailer_name: retailerPrice.retailer || 'Unknown',
          price: retailerPrice.price || null,
          currency: 'USD',
          product_url: retailerPrice.product_url || null,
          affiliate_url: retailerPrice.product_url || null,
          in_stock: true,
          last_checked_at: new Date().toISOString()
        });
        
        stats.prices++;
      }
    }
  }
  
  return prices;
}

/**
 * Write data to CSV
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
 * Main extraction process
 */
async function main() {
  console.log('='.repeat(80));
  console.log('EXTRACTION SCRIPT: JSON → CSV');
  console.log('='.repeat(80));
  console.log();
  
  // Step 1: Ensure output directory exists
  console.log('Step 1: Setting up output directory...');
  ensureOutputDir();
  console.log();
  
  // Step 2: Read all JSON files
  console.log('Step 2: Reading JSON files...');
  const allData = [];
  for (const filename of CONFIG.supplementFiles) {
    const jsonData = readJsonFile(filename);
    if (jsonData) {
      const slug = jsonData.supplement || filename.replace('.json', '');
      allData.push({ slug, jsonData });
      console.log(`  ✓ Loaded ${filename} (${jsonData.products?.length || 0} products)`);
    }
  }
  console.log();
  
  // Step 3: Extract supplements
  console.log('Step 3: Extracting supplement metadata...');
  const supplements = extractSupplements();
  console.log(`  ✓ Extracted ${supplements.length} supplements`);
  console.log();
  
  // Step 4: Extract products
  console.log('Step 4: Extracting product data...');
  const products = extractProducts(allData);
  console.log(`  ✓ Extracted ${products.length} products`);
  console.log();
  
  // Step 5: Extract prices
  console.log('Step 5: Extracting price data...');
  const prices = extractPrices(allData);
  console.log(`  ✓ Extracted ${prices.length} price records`);
  console.log();
  
  // Step 6: Write CSV files
  console.log('Step 6: Writing CSV files...');
  
  await writeCSV('supplements.csv', supplements, [
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
  
  await writeCSV('products.csv', products, [
    { id: 'json_id', title: 'json_id' },
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
  
  await writeCSV('prices.csv', prices, [
    { id: 'product_json_id', title: 'product_json_id' },
    { id: 'retailer_name', title: 'retailer_name' },
    { id: 'price', title: 'price' },
    { id: 'currency', title: 'currency' },
    { id: 'product_url', title: 'product_url' },
    { id: 'affiliate_url', title: 'affiliate_url' },
    { id: 'in_stock', title: 'in_stock' },
    { id: 'last_checked_at', title: 'last_checked_at' }
  ]);
  
  console.log();
  
  // Step 7: Summary
  console.log('='.repeat(80));
  console.log('EXTRACTION COMPLETE');
  console.log('='.repeat(80));
  console.log(`Supplements: ${stats.supplements}`);
  console.log(`Products:    ${stats.products}`);
  console.log(`Prices:      ${stats.prices}`);
  console.log();
  
  if (stats.errors.length > 0) {
    console.log('Errors encountered:');
    stats.errors.forEach(err => console.log(`  ✗ ${err}`));
    console.log();
  }
  
  console.log('Output files:');
  console.log(`  - ${path.join(CONFIG.outputDir, 'supplements.csv')}`);
  console.log(`  - ${path.join(CONFIG.outputDir, 'products.csv')}`);
  console.log(`  - ${path.join(CONFIG.outputDir, 'prices.csv')}`);
  console.log();
  console.log('Next step: Run transform-data.mjs to validate and clean the data');
  console.log('='.repeat(80));
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
