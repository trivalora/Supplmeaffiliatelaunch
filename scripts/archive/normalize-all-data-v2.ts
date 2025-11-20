#!/usr/bin/env tsx
/**
 * UNIFIED DATA NORMALIZATION PIPELINE V2
 * 
 * Modular architecture with 3-tier brand matching and comprehensive review outputs
 * 
 * Features:
 * - Brand extraction with DSLD brand list + synonym normalization
 * - 3-tier matching strategy (exact brand, fuzzy brand, product-only)
 * - Multiple review formats (CSV, JSON, HTML, TXT)
 * - Detailed match scoring and quality flags
 */

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

// Import our modular components
import { extractBrand, buildDSLDBrandSet, buildBrandIndex } from './lib/brand-extractor.js';
import { match3Tier } from './lib/matcher.js';
import { generateCSV, generateStratifiedJSON, generateHTML, generateStatistics, generateStatsText } from './lib/review-outputs.js';
import { extractWeightFromNetContents } from './lib/dsld-enrichment.js';
import { filterRelevantProducts } from './lib/product-filter.js';
import type { NormalizedProduct } from './lib/types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load all DSLD products (cached)
 */
let dsldCache: any[] | null = null;

async function loadDSLDDatabase(db: Database): Promise<any[]> {
  if (dsldCache !== null) {
    return dsldCache;
  }
  
  console.log('  🔍 Loading DSLD database...');
  
  const query = `
    SELECT DISTINCT 
      po.dsld_id, 
      po.product_name, 
      po.brand_name, 
      po.net_contents, 
      po.serving_size AS overview_serving_size,
      dsf.ingredient, 
      dsf.amount_per_serving, 
      dsf.amount_per_serving_unit
    FROM product_overview po
    LEFT JOIN dietary_supplement_facts dsf ON dsf.dsld_id = po.dsld_id
  `;
  
  const results = await db.all(query);
  dsldCache = results;
  console.log(`  ✓ Loaded ${results.length} DSLD products\n`);
  
  return results;
}

/**
 * Process a single product through the normalization pipeline
 */
function normalizeProduct(
  rawProduct: any,
  retailer: string,
  dataSource: 'scraped' | 'existing',
  dsldBrands: Set<string>,
  brandIndex: Map<string, any[]>,
  allDsldProducts: any[]
): NormalizedProduct | null {
  const productName = rawProduct.name || rawProduct.title || rawProduct.productName || rawProduct.product_name || '';
  const price = rawProduct.price || rawProduct.Price || rawProduct.price_usd || null;
  const productUrl = rawProduct.url || rawProduct.URL || rawProduct.product_url || rawProduct.link || '';
  
  if (!productName) {
    return null; // Skip products without names
  }
  
  // Step 1: Extract and normalize brand
  const brandResult = extractBrand(productName, dsldBrands);
  const qualityFlags: string[] = [...brandResult.flags];
  
  // Step 2: Perform 3-tier matching
  const matchResult = match3Tier(
    productName,
    brandResult.brand,
    brandResult.normalized,
    brandIndex,
    allDsldProducts
  );
  
  qualityFlags.push(...matchResult.qualityFlags);
  
  // Step 3: Extract weight/package info from DSLD match
  const weightInfo = matchResult.dsldProduct 
    ? extractWeightFromNetContents(matchResult.dsldProduct.net_contents)
    : { weight_value: null, weight_unit: null, count: null };
  
  // Step 4: Determine match quality
  const getMatchQuality = (score: number | null): 'high' | 'medium' | 'low' | 'none' => {
    if (score === null || score < 40) return 'none';
    if (score >= 70) return 'high';
    if (score >= 55) return 'medium';
    return 'low';
  };
  
  // Step 5: Compile normalized product
  return {
    id: `${retailer}_${productName.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50)}_${Date.now()}`,
    data_source: dataSource,
    retailer: retailer,
    
    product_name: productName,
    product_url: productUrl,
    brand: brandResult.brand || '',
    brand_normalized_from: brandResult.brand,
    brand_normalized_to: brandResult.normalized,
    
    dsld_id: matchResult.dsldProduct?.dsld_id || null,
    dsld_product_name: matchResult.dsldProduct?.product_name || null,
    dsld_brand: matchResult.dsldProduct?.brand_name || null,
    dsld_ingredient: matchResult.dsldProduct?.ingredient || null,
    
    match_score: matchResult.score,
    match_tier: matchResult.tier,
    brand_score: matchResult.brandScore,
    product_score: matchResult.productScore,
    brand_match_method: matchResult.brandMatchMethod,
    match_quality: getMatchQuality(matchResult.score),
    
    amount_per_serving_mg: matchResult.dsldProduct?.amount_per_serving_mg || null,
    servings_per_container: matchResult.dsldProduct?.servings_per_container || null,
    total_active_ingredient_mg: null, // TODO: calculate if needed
    
    product_type: null,
    supplement_form: null,
    net_contents: matchResult.dsldProduct?.net_contents || null,
    weight_value: weightInfo.weight_value,
    weight_unit: weightInfo.weight_unit,
    package_count: weightInfo.count,
    suggested_use: null,
    
    price_usd: price ? parseFloat(String(price)) / 100 : null, // Prices are in cents, convert to dollars
    price_per_mg: null,
    price_per_unit: null,
    price_per_unit_label: null,
    price_per_serving: null,
    
    is_vegan: false,
    is_vegetarian: false,
    is_gluten_free: false,
    is_non_gmo: false,
    is_organic: false,
    is_kosher: false,
    is_dairy_free: false,
    is_soy_free: false,
    is_sugar_free: false,
    
    formulation_statements: [],
    seals_symbols: [],
    
    normalized_at: new Date().toISOString(),
    quality_flags: qualityFlags
  };
}


/**
 * Process scraped data files
 */
async function processScrapedData(
  db: Database,
  scrapedDir: string,
  outputDir: string,
  dsldBrands: Set<string>,
  brandIndex: Map<string, any[]>,
  allDsldProducts: any[]
): Promise<NormalizedProduct[]> {
  const results: NormalizedProduct[] = [];
  
  try {
    const files = await fs.readdir(scrapedDir);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    for (const file of jsonFiles) {
      const supplementCategory = file.replace('.json', '');
      
      // Skip protein-powder - we only use whey-protein and casein-protein
      if (supplementCategory === 'protein-powder') {
        console.log(`  ⏭️  Skipping: ${file} (use whey-protein or casein-protein instead)`);
        continue;
      }
      
      const supplementProducts: NormalizedProduct[] = [];
      
      console.log(`  📦 Processing: ${file}`);
      
      const filePath = path.join(scrapedDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      
      // Handle nested retailers structure
      if (data.retailers && Array.isArray(data.retailers)) {
        for (const retailerData of data.retailers) {
          const retailer = retailerData.retailer || 'Unknown';
          let products = retailerData.products || [];
          
          console.log(`     🏪 ${retailer}: ${products.length} products (before filtering)`);
          
          // For Bodybuilding.com: Always use ashwagandha.json data (452 products) and filter by current supplement
          if (retailer.toLowerCase().includes('bodybuilding')) {
            // Load the 452 base products from ashwagandha.json
            const ashwagandhaPath = path.join(scrapedDir, 'ashwagandha.json');
            try {
              const ashwagandhaData = JSON.parse(await fs.readFile(ashwagandhaPath, 'utf-8'));
              const bodybuildingData = ashwagandhaData.retailers?.find((r: any) => 
                r.retailer?.toLowerCase().includes('bodybuilding')
              );
              
              if (bodybuildingData?.products) {
                console.log(`     📋 Using Bodybuilding.com base data: ${bodybuildingData.products.length} products`);
                products = bodybuildingData.products;
              }
            } catch (error) {
              console.log(`     ⚠️  Could not load ashwagandha base data, using current file data`);
            }
            
            // Now filter for the current supplement category
            products = filterRelevantProducts(products, supplementCategory);
          }
          
          for (const product of products) {
            const normalized = normalizeProduct(
              product,
              retailer,
              'scraped',
              dsldBrands,
              brandIndex,
              allDsldProducts
            );
            if (normalized) {
              supplementProducts.push(normalized);
              results.push(normalized);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('  ❌ Error processing scraped data:', error);
  }
  
  return results;
}

/**
 * Process existing data files (Vitacost, iHerb) - filter by supplement categories
 */
async function processExistingData(
  db: Database,
  existingDir: string,
  scrapedDir: string,
  dsldBrands: Set<string>,
  brandIndex: Map<string, any[]>,
  allDsldProducts: any[]
): Promise<NormalizedProduct[]> {
  const results: NormalizedProduct[] = [];
  
  // Get list of supplement categories from scraped data
  const scrapedFiles = await fs.readdir(scrapedDir);
  const supplementCategories = scrapedFiles
    .filter(f => f.endsWith('.json') && f !== 'SUMMARY.json' && f !== 'protein-powder.json')
    .map(f => f.replace('.json', ''));
  
  console.log(`  🏷️  Will filter for ${supplementCategories.length} supplement categories\n`);
  
  const filesToProcess = [
    { file: 'Vitacost.json', retailer: 'Vitacost' },
    { file: 'iHerb_ashwaghanda_to_iron.json', retailer: 'iHerb' },
    { file: 'iHerb_Iron_to_zinc.json', retailer: 'iHerb' },
  ];
  
  for (const { file, retailer } of filesToProcess) {
    try {
      console.log(`  📦 Processing: ${file}`);
      const filePath = path.join(existingDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      
      let products = Array.isArray(data) ? data : (data.products || []);
      console.log(`     📊 Total products in file: ${products.length}`);
      
      // Filter products using OR logic - keep if they match ANY supplement category
      const filteredProducts = products.filter((product: any) => {
        // Check if product matches ANY of our supplement categories
        for (const category of supplementCategories) {
          const matchResult = filterRelevantProducts([product], category);
          if (matchResult.length > 0) {
            return true; // Keep this product
          }
        }
        return false; // Doesn't match any category
      });
      
      console.log(`     🧹 After filtering for all supplements: ${filteredProducts.length} products`);
      
      for (const product of filteredProducts) {
        const normalized = normalizeProduct(
          product,
          retailer,
          'existing',
          dsldBrands,
          brandIndex,
          allDsldProducts
        );
        if (normalized) {
          results.push(normalized);
        }
      }
      
      console.log(`     ✓ Normalized ${results.length} products from ${file}\n`);
    } catch (error: any) {
      console.log(`     ⚠️  Skipping ${file}: ${error?.message || error}`);
    }
  }
  
  return results;
}

/**
 * Main execution
 */
async function main() {
  const root = path.resolve(__dirname, '..');
  const dbPath = process.env.DSLD_DB_PATH || path.join(root, '..', 'input', 'Supplement Databases (trivalora)', 'DSLD db', 'dsld.sqlite');
  const scrapedDir = path.join(root, 'scraper-results', 'all-supplements', 'latest');
  const existingDir = path.join(root, '..', 'input', 'product_data');
  const outputDir = path.join(root, 'normalized-results', 'v2');
  
  await fs.mkdir(outputDir, { recursive: true });
  
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║   UNIFIED NORMALIZATION PIPELINE V2 - MODULAR EDITION    ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
  console.log(`📁 DSLD Database: ${dbPath}`);
  console.log(`📁 Scraped Data: ${scrapedDir}`);
  console.log(`📁 Existing Data: ${existingDir}`);
  console.log(`📁 Output: ${outputDir}\n`);
  
  // Open database
  const db = await open({ filename: dbPath, driver: sqlite3.Database });
  
  // Load DSLD database
  console.log('═══════════════════════════════════════════════════════════');
  console.log('LOADING DSLD DATABASE');
  console.log('═══════════════════════════════════════════════════════════');
  const allDsldProducts = await loadDSLDDatabase(db);
  
  // Build indexes
  console.log('═══════════════════════════════════════════════════════════');
  console.log('BUILDING INDEXES');
  console.log('═══════════════════════════════════════════════════════════');
  const dsldBrands = buildDSLDBrandSet(allDsldProducts);
  const brandIndex = buildBrandIndex(allDsldProducts);
  console.log(`  ✓ Built brand indexes\n`);
  
  const allProducts: NormalizedProduct[] = [];
  
  // Process scraped data
  console.log('═══════════════════════════════════════════════════════════');
  console.log('PROCESSING SCRAPED DATA');
  console.log('═══════════════════════════════════════════════════════════');
  const scrapedProducts = await processScrapedData(db, scrapedDir, outputDir, dsldBrands, brandIndex, allDsldProducts);
  allProducts.push(...scrapedProducts);
  console.log(`✅ Scraped: ${scrapedProducts.length} products\n`);
  
  // Generate scraped data dashboard immediately
  console.log('  📊 Generating SCRAPED data dashboard...');
  const scrapedHTML = generateHTML(scrapedProducts);
  await fs.writeFile(path.join(outputDir, 'review-dashboard-SCRAPED.html'), scrapedHTML);
  console.log(`  ✅ Scraped dashboard ready: ${outputDir}/review-dashboard-SCRAPED.html\n`);
  
  // Process existing data
  console.log('═══════════════════════════════════════════════════════════');
  console.log('PROCESSING EXISTING DATA');
  console.log('═══════════════════════════════════════════════════════════');
  const existingProducts = await processExistingData(db, existingDir, scrapedDir, dsldBrands, brandIndex, allDsldProducts);
  allProducts.push(...existingProducts);
  console.log(`✅ Existing: ${existingProducts.length} products\n`);
  
  // Generate existing data dashboard
  console.log('  📊 Generating EXISTING data dashboard...');
  const existingHTML = generateHTML(existingProducts);
  await fs.writeFile(path.join(outputDir, 'review-dashboard-EXISTING.html'), existingHTML);
  console.log(`  ✅ Existing dashboard ready: ${outputDir}/review-dashboard-EXISTING.html\n`);
  
  // Generate Vitacost-specific dashboard
  console.log('  📊 Generating VITACOST-specific dashboard...');
  const vitacostHTML = generateHTML(allProducts, undefined, 'Vitacost');
  await fs.writeFile(path.join(outputDir, 'review-dashboard-VITACOST.html'), vitacostHTML);
  console.log(`  ✅ Vitacost dashboard ready: ${outputDir}/review-dashboard-VITACOST.html\n`);
  
  // Generate iHerb-specific dashboard
  console.log('  📊 Generating IHERB-specific dashboard...');
  const iherbHTML = generateHTML(allProducts, undefined, 'iHerb');
  await fs.writeFile(path.join(outputDir, 'review-dashboard-IHERB.html'), iherbHTML);
  console.log(`  ✅ iHerb dashboard ready: ${outputDir}/review-dashboard-IHERB.html\n`);
  
  await db.close();
  
  // Generate outputs
  console.log('═══════════════════════════════════════════════════════════');
  console.log('GENERATING REVIEW OUTPUTS');
  console.log('═══════════════════════════════════════════════════════════');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
  
  // 1. CSV for spreadsheet review
  console.log('  📊 Generating CSV...');
  const csv = generateCSV(allProducts);
  await fs.writeFile(path.join(outputDir, 'matches-for-review.csv'), csv);
  
  // 2. Stratified JSON
  console.log('  📊 Generating stratified JSON...');
  const stratifiedJSON = generateStratifiedJSON(allProducts);
  await fs.writeFile(path.join(outputDir, 'matches-stratified.json'), stratifiedJSON);
  
  // 3. Interactive HTML dashboard
  console.log('  📊 Generating HTML dashboard...');
  const html = generateHTML(allProducts);
  await fs.writeFile(path.join(outputDir, 'review-dashboard.html'), html);
  
  // 4. Statistics
  console.log('  📊 Generating statistics...');
  const stats = generateStatistics(allProducts);
  const statsText = generateStatsText(stats);
  await fs.writeFile(path.join(outputDir, 'match-statistics.txt'), statsText);
  await fs.writeFile(path.join(outputDir, 'match-statistics.json'), JSON.stringify(stats, null, 2));
  
  // 5. Full backup JSON
  console.log('  📊 Generating full JSON backup...');
  await fs.writeFile(
    path.join(outputDir, `all-products-${timestamp}.json`),
    JSON.stringify({ generated_at: new Date().toISOString(), statistics: stats, products: allProducts }, null, 2)
  );
  
  // Print summary
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('NORMALIZATION COMPLETE');
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log(statsText);
  console.log(`\n📁 Output Files:`);
  console.log(`   - ${outputDir}/matches-for-review.csv (Spreadsheet review)`);
  console.log(`   - ${outputDir}/matches-stratified.json (Filtered by confidence)`);
  console.log(`   - ${outputDir}/review-dashboard.html (ALL products - Interactive review)`);
  console.log(`   - ${outputDir}/review-dashboard-SCRAPED.html (Scraped data only)`);
  console.log(`   - ${outputDir}/review-dashboard-EXISTING.html (Existing data only)`);
  console.log(`   - ${outputDir}/review-dashboard-VITACOST.html (Vitacost only)`);
  console.log(`   - ${outputDir}/review-dashboard-IHERB.html (iHerb only)`);
  console.log(`   - ${outputDir}/match-statistics.txt (Summary report)`);
  console.log(`   - ${outputDir}/all-products-${timestamp}.json (Full backup)\n`);
  console.log(`✨ NOW YOU CAN REVIEW WHILE normalization runs! Open the retailer-specific HTML files.\n`);
}

main().catch((e) => { 
  console.error('\n❌ Fatal error:', e);
  process.exit(1);
});
