#!/usr/bin/env tsx
/**
 * UNIFIED DATA NORMALIZATION PIPELINE
 * 
 * Processes ALL data sources through a single, standardized pipeline:
 * - Scraped retailer data (ashwagandha.json, bcaa.json, etc.)
 * - Existing product data (Vitacost.json, iHerb files)
 * 
 * Features:
 * - Consistent DSLD matching with tunable thresholds
 * - Full dietary flag enrichment
 * - Standardized price metrics ($/mg, $/g, $/serving)
 * - Multiple output formats (JSON, CSV, SQLite)
 * - Quality control and validation
 */

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { getDSLDEnrichment, extractWeightFromNetContents } from './lib/dsld-enrichment.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  minMatchScore: 40,  // Minimum match score to accept
  brandBonus: 15,      // Bonus points for brand match
  ingredientBonus: 15, // Bonus points for ingredient match
};

interface NormalizedProduct {
  // Identifiers
  id: string;
  data_source: 'scraped' | 'existing';
  retailer: string;
  
  // Product Info
  product_name: string;
  product_url: string;
  brand: string;
  
  // DSLD Match
  dsld_id: string | null;
  dsld_product_name: string | null;
  dsld_brand: string | null;
  dsld_ingredient: string | null;
  match_score: number | null;
  match_quality: 'high' | 'medium' | 'low' | 'none';
  
  // Supplement Details
  amount_per_serving_mg: number | null;
  servings_per_container: number | null;
  total_active_ingredient_mg: number | null;
  
  // Product Form & Package
  product_type: string | null;
  supplement_form: string | null;
  net_contents: string | null;
  weight_value: number | null;
  weight_unit: string | null;
  package_count: number | null;
  suggested_use: string | null;
  
  // Pricing
  price_usd: number | null;
  price_per_mg: number | null;
  price_per_unit: number | null;
  price_per_unit_label: string | null;
  price_per_serving: number | null;
  
  // Dietary Flags
  is_vegan: boolean;
  is_vegetarian: boolean;
  is_gluten_free: boolean;
  is_non_gmo: boolean;
  is_organic: boolean;
  is_kosher: boolean;
  is_dairy_free: boolean;
  is_soy_free: boolean;
  is_sugar_free: boolean;
  
  // Label Information
  formulation_statements: string[];
  seals_symbols: string[];
  
  // Metadata
  normalized_at: string;
  data_quality_flags: string[];
}

// Utility functions
function parseNumber(s: any): number | null {
  if (s == null) return null;
  const t = String(s).trim().replace(/[,\u00A0]/g, '');
  const n = Number(t);
  return isFinite(n) ? n : null;
}

function unitToMg(amount: number | null, unit: string | null): number | null {
  if (amount == null) return null;
  if (!unit) return amount;
  const u = unit.toLowerCase();
  if (u.startsWith('mg')) return amount;
  if (u.startsWith('g') && !u.startsWith('mcg') && !u.startsWith('µg')) return amount * 1000;
  if (u.startsWith('kg')) return amount * 1_000_000;
  if (u.startsWith('mcg') || u.startsWith('µg') || u.startsWith('ug')) return amount / 1000;
  return null;
}

function extractCountFromNetContents(s: string | null): number | null {
  if (!s) return null;
  const m = s.match(/(\d{1,4})\s*(?:ct|count|capsule|capsules|gummy|gummies|tablet|tablets|softgel|softgels|serving|servings|pkg|pack)/i);
  if (m) return Number(m[1]);
  const m2 = s.match(/^(\d{1,4})\b/);
  if (m2) return Number(m2[1]);
  return null;
}

function scoreMatch(itemTitle: string, dsldName: string, brand: string, ingredient: string): number {
  const it = (itemTitle || '').toLowerCase();
  const target = ((dsldName || '') + ' ' + (brand || '') + ' ' + (ingredient || '')).toLowerCase();
  
  const tokenize = (s: string) => Array.from(new Set(s.replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(Boolean)));
  const a = tokenize(it);
  const b = tokenize(target);
  
  if (a.length === 0 || b.length === 0) return 0;
  
  const setA = new Set(a);
  const setB = new Set(b);
  let inter = 0;
  for (const t of setA) if (setB.has(t)) inter++;
  const union = new Set([...setA, ...setB]).size;
  
  const jacc = inter / union;
  let score = Math.round(jacc * 70);
  
  // Bonuses for specific matches
  if (brand && it.includes(String(brand).toLowerCase())) {
    score += CONFIG.brandBonus;
  }
  if (ingredient && it.includes(String(ingredient).toLowerCase())) {
    score += CONFIG.ingredientBonus;
  }
  
  return Math.min(100, score);
}

function getMatchQuality(score: number | null): 'high' | 'medium' | 'low' | 'none' {
  if (score === null || score < CONFIG.minMatchScore) return 'none';
  if (score >= 70) return 'high';
  if (score >= 55) return 'medium';
  return 'low';
}

// FIX 1: Remove SQL injection vulnerability by querying ALL DSLD products
// Then filter in JavaScript instead of building SQL with string interpolation
let dsldCache: any[] | null = null;

async function queryDSLD(db: Database): Promise<any[]> {
  // Cache DSLD data to avoid repeated queries
  if (dsldCache) {
    return dsldCache;
  }
  
  console.log('  🔍 Loading DSLD database (one-time load)...');
  
  // Query ALL products from DSLD (no filtering in SQL = no SQL injection risk)
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
  
  dsldCache = await db.all(query);
  console.log(`  ✓ Loaded ${dsldCache.length} DSLD products into memory\n`);
  
  return dsldCache;
}

// OPTIMIZED: Brand extraction - try 1 word, then 2 words
function extractBrand(productName: string): string[] {
  if (!productName) return [];
  
  const tokens = productName.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];
  
  const candidates: string[] = [];
  
  // First word
  candidates.push(tokens[0]);
  
  // First two words (if available)
  if (tokens.length >= 2) {
    candidates.push(`${tokens[0]} ${tokens[1]}`);
  }
  
  return candidates;
}

// Build brand index for fast lookup
let dsldByBrand: Map<string, any[]> | null = null;

function buildBrandIndex(dsldProducts: any[]): Map<string, any[]> {
  const index = new Map<string, any[]>();
  
  for (const product of dsldProducts) {
    const brandName = product.brand_name?.toLowerCase().trim();
    if (!brandName) continue;
    
    if (!index.has(brandName)) {
      index.set(brandName, []);
    }
    index.get(brandName)!.push(product);
  }
  
  console.log(`  📑 Indexed ${index.size} unique brands from DSLD\n`);
  return index;
}

function extractContainerInfo(text: string): {count: number | null, unit: string | null} {
  const countMatch = text.match(/(\d+)\s*(capsule|tablet|softgel|gummy|ct|count|serving)/i);
  const sizeMatch = text.match(/(\d+)\s*(mg|g|oz|ml|kg)/i);
  
  return {
    count: countMatch ? parseInt(countMatch[1]) : null,
    unit: sizeMatch ? sizeMatch[2] : null
  };
}

async function normalizeProduct(
  db: Database,
  product: any,
  retailer: string,
  dataSource: 'scraped' | 'existing',
  supplementCategory?: string
): Promise<NormalizedProduct | null> {
  const productName = product.name || product.title || product.productName || product.product_name || '';
  const price = product.price || product.Price || product.price_usd || null;
  const productUrl = product.url || product.URL || product.product_url || product.link || '';
  let brand = product.brand || product.Brand || '';
  
  if (!productName) {
    return null; // Skip products without names
  }
  
  const qualityFlags: string[] = [];
  
  // Query DSLD and build brand index (cached)
  const allDsldProducts = await queryDSLD(db);
  
  if (!dsldByBrand) {
    dsldByBrand = buildBrandIndex(allDsldProducts);
  }
  
    // Build DSLD brand set for lookup
    const dsldBrands = Array.from(dsldByBrand.keys());

    // Try to extract brand from product name using DSLD brands
    const tokens = productName.trim().split(/\s+/).filter(Boolean);
    let extractedBrand = '';
    // Special handling for bodybuilding.com
    const lowerName = productName.toLowerCase();
    if (lowerName.startsWith('bodybuilding.com')) {
      extractedBrand = 'bodybuilding.com';
    } else {
      // First word
      if (tokens.length >= 1) {
        const firstWord = tokens[0].toLowerCase();
        extractedBrand = dsldBrands.find(b => firstWord === b) || '';
      }
      // First two words
      if (!extractedBrand && tokens.length >= 2) {
        const firstTwo = `${tokens[0]} ${tokens[1]}`.toLowerCase();
        extractedBrand = dsldBrands.find(b => firstTwo === b) || '';
      }
      // Any brand in product name
      if (!extractedBrand) {
        extractedBrand = dsldBrands.find(b => lowerName.includes(b)) || '';
      }
    }
    // If found, assign to brand field
    if (extractedBrand) {
      brand = extractedBrand;
      qualityFlags.push('brand_extracted_from_dsld');
    }

    // Now match by brand and fuzzy product name
    let dsldRows: any[] = [];
    if (brand && dsldByBrand.has(brand)) {
      dsldRows = dsldByBrand.get(brand)!;
    } else {
      dsldRows = allDsldProducts;
      qualityFlags.push('no_brand_match');
    }
    let bestMatch: any = null;
    let bestScore = 0;
    // Find best DSLD match within filtered candidates
    for (const r of dsldRows) {
      const amt = parseNumber(r.amount_per_serving);
      const amt_mg = unitToMg(amt, r.amount_per_serving_unit);
      const package_count = extractCountFromNetContents(r.net_contents);
      const servings_per_container = (() => {
        if (!r.overview_serving_size) return null;
        const m = String(r.overview_serving_size).match(/(\d{1,4})/);
        return m ? Number(m[1]) : null;
      })();
      const score = scoreMatch(productName, r.product_name, r.brand_name, r.ingredient);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = {
          dsld_id: r.dsld_id,
          product_name: r.product_name,
          brand_name: r.brand_name,
          net_contents: r.net_contents,
          package_count: package_count,
          overview_serving_size: r.overview_serving_size,
          servings_per_container: servings_per_container,
          ingredient: r.ingredient,
          amount_per_serving_raw: r.amount_per_serving,
          amount_per_serving_unit: r.amount_per_serving_unit,
          amount_per_serving_mg: amt_mg,
        };
      }
    }

    // Enrichment and output
    const weightInfo = bestMatch ? extractWeightFromNetContents(bestMatch.net_contents) : { weight_value: null, weight_unit: null, count: null };
    const matchQuality = getMatchQuality(bestScore);
    if (matchQuality === 'low' || matchQuality === 'medium') {
      qualityFlags.push(`match_quality_${matchQuality}`);
    }
    if (!bestMatch || bestScore < CONFIG.minMatchScore) {
      qualityFlags.push('below_threshold');
      return null;
    }

    // Compose output
    return {
      id: `${retailer}_${productName.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50)}_${Date.now()}`,
      data_source: dataSource,
      retailer: retailer,
      product_name: productName,
      product_url: productUrl,
      brand: brand,
      price_usd: price,
      dsld_id: bestMatch.dsld_id || null,
      dsld_product_name: bestMatch.product_name || null,
      dsld_brand: bestMatch.brand_name || null,
      dsld_ingredient: bestMatch.ingredient || null,
      dsld_amount_per_serving_mg: bestMatch.amount_per_serving_mg || null,
      dsld_servings_per_container: bestMatch.servings_per_container || null,
      net_contents: bestMatch.net_contents || null,
      package_count: bestMatch.package_count || null,
      overview_serving_size: bestMatch.overview_serving_size || null,
      price_per_mg: null, // TODO: add price metric calculation if needed
      price_per_unit: null,
      price_per_unit_label: null,
      price_per_serving: null,
      match_score: bestScore,
      match_quality: matchQuality,
      quality_flags: qualityFlags,
      weight_value: weightInfo.weight_value,
      weight_unit: weightInfo.weight_unit,
      weight_count: weightInfo.count,
      matched_at: new Date().toISOString()
    };






    // Product Form & Package
    

// FIX 2: Handle nested retailers structure in scraped data
async function processScrapedData(db: Database, scrapedDir: string): Promise<NormalizedProduct[]> {
  const results: NormalizedProduct[] = [];
  
  try {
    const files = await fs.readdir(scrapedDir);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    for (const file of jsonFiles) {
      const supplementCategory = file.replace('.json', '');
      console.log(`  📦 Processing scraped file: ${file} (category: ${supplementCategory})`);
      
      const filePath = path.join(scrapedDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      
      let totalProductsInFile = 0;
      
      // Handle nested retailers structure: { retailers: [{retailer: "...", products: [...]}] }
      if (data.retailers && Array.isArray(data.retailers)) {
        for (const retailerData of data.retailers) {
          const retailer = retailerData.retailer || 'Unknown';
          const products = retailerData.products || [];
          
          console.log(`     🏪 ${retailer}: ${products.length} products`);
          
          for (const product of products) {
            // Map scraped field names to normalized format
            const normalizedInput = {
              name: product.productName || product.name || product.title,
              price: product.price,
              url: product.url || product.link,
              brand: product.brand || '',
            };
            
            const normalized = await normalizeProduct(db, normalizedInput, retailer, 'scraped', supplementCategory);
            if (normalized) {
              results.push(normalized);
              totalProductsInFile++;
            }
          }
        }
      } else {
        // Fallback: old flat structure
        const products = data.products || data.results || (Array.isArray(data) ? data : []);
        
        for (const product of products) {
          const retailer = product.retailer || product.source || 'Unknown';
          const normalized = await normalizeProduct(db, product, retailer, 'scraped', supplementCategory);
          if (normalized) {
            results.push(normalized);
            totalProductsInFile++;
          }
        }
      }
      
      console.log(`     ✅ Total: ${totalProductsInFile} products\n`);
    }
  } catch (error) {
    console.error('  ❌ Error processing scraped data:', error);
  }
  
  return results;
}

async function processExistingData(db: Database, existingDir: string): Promise<NormalizedProduct[]> {
  const results: NormalizedProduct[] = [];
  
  const filesToProcess = [
    { file: 'Vitacost.json', retailer: 'Vitacost' },
    { file: 'iHerb_ashwaghanda_to_iron.json', retailer: 'iHerb' },
    { file: 'iHerb_Iron_to_zinc.json', retailer: 'iHerb' },
  ];
  
  for (const { file, retailer } of filesToProcess) {
    try {
      console.log(`  📦 Processing existing file: ${file}`);
      const filePath = path.join(existingDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      
      const products = Array.isArray(data) ? data : (data.products || []);
      
      for (const product of products) {
        const normalized = await normalizeProduct(db, product, retailer, 'existing');
        if (normalized) {
          results.push(normalized);
        }
      }
      
      console.log(`     ✓ Processed ${products.length} products`);
    } catch (error: any) {
      console.log(`     ⚠️  Skipping ${file}: ${error?.message || error}`);
    }
  }
  
  return results;
}

function generateCSV(products: NormalizedProduct[]): string {
  const headers = [
    'ID', 'DataSource', 'Retailer', 'ProductName', 'Brand', 'ProductURL',
    'DSLD_ID', 'MatchScore', 'MatchQuality',
    'Ingredient', 'AmountPerServing_mg', 'ServingsPerContainer', 'TotalActiveIngredient_mg',
    'SupplementForm', 'PackageCount',
    'PriceUSD', 'PricePerServing', 'PricePerMg', 'PricePerUnit', 'PricePerUnitLabel',
    'Vegan', 'Vegetarian', 'GlutenFree', 'NonGMO', 'Organic', 'Kosher', 'DairyFree', 'SoyFree', 'SugarFree',
    'QualityFlags'
  ];
  
  const rows = [headers.join(',')];
  
  for (const p of products) {
    const row = [
      p.id,
      p.data_source,
      p.retailer,
      `"${(p.product_name || '').replace(/"/g, '""')}"`,
      `"${(p.brand || '').replace(/"/g, '""')}"`,
      `"${(p.product_url || '').replace(/"/g, '""')}"`,
      p.dsld_id || '',
      p.match_score || '',
      p.match_quality,
      `"${(p.dsld_ingredient || '').replace(/"/g, '""')}"`,
      p.amount_per_serving_mg || '',
      p.servings_per_container || '',
      p.total_active_ingredient_mg || '',
      `"${(p.supplement_form || '').replace(/"/g, '""')}"`,
      p.package_count || '',
      p.price_usd?.toFixed(2) || '',
      p.price_per_serving?.toFixed(4) || '',
      p.price_per_mg?.toFixed(6) || '',
      p.price_per_unit?.toFixed(6) || '',
      p.price_per_unit_label || '',
      p.is_vegan ? 'Y' : 'N',
      p.is_vegetarian ? 'Y' : 'N',
      p.is_gluten_free ? 'Y' : 'N',
      p.is_non_gmo ? 'Y' : 'N',
      p.is_organic ? 'Y' : 'N',
      p.is_kosher ? 'Y' : 'N',
      p.is_dairy_free ? 'Y' : 'N',
      p.is_soy_free ? 'Y' : 'N',
      p.is_sugar_free ? 'Y' : 'N',
      `"${p.data_quality_flags.join(', ')}"`
    ];
    rows.push(row.join(','));
  }
  
  return rows.join('\n');
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const dbPath = process.env.DSLD_DB_PATH || path.join(root, '..', 'input', 'Supplement Databases (trivalora)', 'DSLD db', 'dsld.sqlite');
  const scrapedDir = path.join(root, 'scraper-results', 'all-supplements', 'latest');
  const existingDir = path.join(root, '..', 'input', 'product_data');
  const outputDir = path.join(root, 'normalized-results', 'unified');
  
  await fs.mkdir(outputDir, { recursive: true });
  
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║       UNIFIED DATA NORMALIZATION PIPELINE                ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
  console.log(`📁 DSLD Database: ${dbPath}`);
  console.log(`📁 Scraped Data: ${scrapedDir}`);
  console.log(`📁 Existing Data: ${existingDir}`);
  console.log(`📁 Output: ${outputDir}\n`);
  console.log(`⚙️  Configuration:`);
  console.log(`   - Min Match Score: ${CONFIG.minMatchScore}`);
  console.log(`   - Brand Bonus: ${CONFIG.brandBonus}`);
  console.log(`   - Ingredient Bonus: ${CONFIG.ingredientBonus}\n`);
  
  const db = await open({ filename: dbPath, driver: sqlite3.Database });
  
  const allProducts: NormalizedProduct[] = [];
  
  // Process scraped data
  console.log('═══════════════════════════════════════════════════════════');
  console.log('PROCESSING SCRAPED DATA');
  console.log('═══════════════════════════════════════════════════════════');
  const scrapedProducts = await processScrapedData(db, scrapedDir);
  allProducts.push(...scrapedProducts);
  console.log(`✅ Total scraped products: ${scrapedProducts.length}\n`);
  
  // Process existing data
  console.log('═══════════════════════════════════════════════════════════');
  console.log('PROCESSING EXISTING DATA');
  console.log('═══════════════════════════════════════════════════════════');
  const existingProducts = await processExistingData(db, existingDir);
  allProducts.push(...existingProducts);
  console.log(`✅ Total existing products: ${existingProducts.length}\n`);
  
  await db.close();

  // Generate statistics
  const stats: any = {
    total_products: allProducts.length,
    by_source: {
      scraped: scrapedProducts.length,
      existing: existingProducts.length,
    },
    by_retailer: {},
    by_match_quality: {
      high: 0,
      medium: 0,
      low: 0,
      none: 0,
    },
    with_dietary_flags: {
      vegan: 0,
      vegetarian: 0,
      gluten_free: 0,
      non_gmo: 0,
      organic: 0,
    },
    quality_issues: {},
  };

  for (const p of allProducts) {
    stats.by_retailer[p.retailer] = (stats.by_retailer[p.retailer] || 0) + 1;
    stats.by_match_quality[p.match_quality]++;

    if (p.is_vegan) stats.with_dietary_flags.vegan++;
    if (p.is_vegetarian) stats.with_dietary_flags.vegetarian++;
    if (p.is_gluten_free) stats.with_dietary_flags.gluten_free++;
    if (p.is_non_gmo) stats.with_dietary_flags.non_gmo++;
    if (p.is_organic) stats.with_dietary_flags.organic++;

    for (const flag of p.data_quality_flags) {
      stats.quality_issues[flag] = (stats.quality_issues[flag] || 0) + 1;
    }
  }
  
  // Save outputs
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
  
  // 1. Full JSON with all data
  await fs.writeFile(
    path.join(outputDir, `all-products-${timestamp}.json`),
    JSON.stringify({
      generated_at: new Date().toISOString(),
      config: CONFIG,
      statistics: stats,
      products: allProducts,
    }, null, 2)
  );
  
  // 2. Latest JSON (symlink-style naming)
  await fs.writeFile(
    path.join(outputDir, 'all-products-latest.json'),
    JSON.stringify({
      generated_at: new Date().toISOString(),
      config: CONFIG,
      statistics: stats,
      products: allProducts,
    }, null, 2)
  );
  
  // 3. CSV for spreadsheet analysis
  const csv = generateCSV(allProducts);
  await fs.writeFile(path.join(outputDir, `all-products-${timestamp}.csv`), csv);
  await fs.writeFile(path.join(outputDir, 'all-products-latest.csv'), csv);
  
  // 4. Statistics summary
  await fs.writeFile(
    path.join(outputDir, `statistics-${timestamp}.json`),
    JSON.stringify(stats, null, 2)
  );
  
  // Print summary
  console.log('═══════════════════════════════════════════════════════════');
  console.log('NORMALIZATION COMPLETE');
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log(`📊 Total Products: ${stats.total_products}`);
  console.log(`   - Scraped: ${stats.by_source.scraped}`);
  console.log(`   - Existing: ${stats.by_source.existing}\n`);
  
  console.log('By Retailer:');
  for (const [retailer, count] of Object.entries(stats.by_retailer)) {
    console.log(`   ${retailer}: ${count}`);
  }
  
  console.log('\nMatch Quality:');
  console.log(`   High (≥70): ${stats.by_match_quality.high}`);
  console.log(`   Medium (55-69): ${stats.by_match_quality.medium}`);
  console.log(`   Low (40-54): ${stats.by_match_quality.low}`);
  console.log(`   None (<40): ${stats.by_match_quality.none}`);
  
  console.log('\nDietary Flags:');
  console.log(`   Vegan: ${stats.with_dietary_flags.vegan}`);
  console.log(`   Vegetarian: ${stats.with_dietary_flags.vegetarian}`);
  console.log(`   Gluten-Free: ${stats.with_dietary_flags.gluten_free}`);
  console.log(`   Non-GMO: ${stats.with_dietary_flags.non_gmo}`);
  console.log(`   Organic: ${stats.with_dietary_flags.organic}`);
  
  if (Object.keys(stats.quality_issues).length > 0) {
    console.log('\n⚠️  Quality Issues:');
    for (const [issue, count] of Object.entries(stats.quality_issues)) {
      console.log(`   ${issue}: ${count}`);
    }
  }
  
  console.log(`\n📁 Output Files:`);
  console.log(`   - ${outputDir}/all-products-latest.json`);
  console.log(`   - ${outputDir}/all-products-latest.csv`);
  console.log(`   - ${outputDir}/statistics-${timestamp}.json\n`);
}

main().catch((e) => { 
  console.error('\n❌ Fatal error:', e);
  process.exit(1);
});

}
