#!/usr/bin/env node
/**
 * Data Enrichment Script: Add Product Metadata to Supabase
 * 
 * This script reads the old JSON files and extracts metadata fields
 * (unit, amount_per_serving, net_contents, filters) to populate the
 * database with complete product information.
 * 
 * Usage: node scripts/migration/enrich-products-with-metadata.mjs
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
dotenv.config({ path: join(__dirname, '../../.env.local') });

// Supabase configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing Supabase credentials in environment variables');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', SUPABASE_URL ? '✓' : '✗');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_KEY ? '✓' : '✗');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  db: { schema: 'api' }
});

// Path to old JSON files
const JSON_DIR = join(__dirname, '../../public/api/products/supplements');

/**
 * Extract filters from DSLD label data
 */
function extractFilters(product) {
  const filters = new Set();
  
  // Check for various filter keywords in label statements
  const labelStatements = product.dsld_label_info?.label_statements || {};
  const allText = JSON.stringify(labelStatements).toLowerCase();
  
  // Dietary filters
  if (allText.includes('vegan')) filters.add('vegan');
  if (allText.includes('vegetarian')) filters.add('vegetarian');
  if (allText.includes('gluten free') || allText.includes('gluten-free')) filters.add('gluten_free');
  if (allText.includes('dairy free') || allText.includes('dairy-free')) filters.add('dairy_free');
  if (allText.includes('soy free') || allText.includes('soy-free')) filters.add('soy_free');
  if (allText.includes('sugar free') || allText.includes('sugar-free')) filters.add('sugar_free');
  if (allText.includes('non gmo') || allText.includes('non-gmo')) filters.add('non_gmo');
  if (allText.includes('organic') && allText.includes('usda')) filters.add('organic');
  if (allText.includes('kosher')) filters.add('kosher');
  if (allText.includes('halal')) filters.add('halal');
  
  // Formulation filters
  if (allText.includes('capsule')) filters.add('capsule');
  if (allText.includes('tablet')) filters.add('tablet');
  if (allText.includes('softgel')) filters.add('softgel');
  if (allText.includes('powder')) filters.add('powder');
  if (allText.includes('liquid')) filters.add('liquid');
  if (allText.includes('gummy') || allText.includes('gummies')) filters.add('gummy');
  
  // Quality filters
  if (allText.includes('third party test') || allText.includes('third-party test')) {
    filters.add('third_party_tested');
  }
  if (allText.includes('gmp') || allText.includes('good manufacturing')) {
    filters.add('gmp_certified');
  }
  
  return Array.from(filters);
}

/**
 * Enrich products with metadata from JSON files
 */
async function enrichProducts() {
  console.log('🚀 Starting product metadata enrichment...\n');
  
  // Get list of supplement JSON files
  const files = readdirSync(JSON_DIR).filter(f => 
    f.endsWith('.json') && f !== 'retailer-comparison-module.json'
  );
  
  console.log(`📁 Found ${files.length} supplement JSON files\n`);
  
  let totalProducts = 0;
  let updatedProducts = 0;
  let skippedProducts = 0;
  let errorProducts = 0;
  
  for (const file of files) {
    const supplementSlug = file.replace('.json', '');
    console.log(`\n📦 Processing ${supplementSlug}...`);
    
    try {
      // Read JSON file
      const filePath = join(JSON_DIR, file);
      const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
      const products = jsonData.products || [];
      
      console.log(`   Found ${products.length} products in JSON`);
      totalProducts += products.length;
      
      // Process each product
      for (const product of products) {
        const jsonId = product.id;
        
        if (!jsonId) {
          console.log(`   ⚠️  Skipping product without ID`);
          skippedProducts++;
          continue;
        }
        
        // Extract metadata
        const metadata = {
          unit: product.unit || null,
          amount_per_serving: product.amount_per_serving || null,
          net_contents: product.net_contents || product.dsld_content || null,
          filters: extractFilters(product)
        };
        
        // Update product in database
        const { data, error } = await supabase
          .from('products')
          .update(metadata)
          .eq('json_id', jsonId)
          .select('id');
        
        if (error) {
          console.error(`   ❌ Error updating ${jsonId}:`, error.message);
          errorProducts++;
        } else if (data && data.length > 0) {
          updatedProducts++;
          if (updatedProducts % 50 === 0) {
            console.log(`   ✓ Updated ${updatedProducts} products...`);
          }
        } else {
          // Product not found in database
          skippedProducts++;
        }
      }
      
      console.log(`   ✅ Completed ${supplementSlug}: ${updatedProducts} updated`);
      
    } catch (error) {
      console.error(`   ❌ Error processing ${file}:`, error.message);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 ENRICHMENT SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total products in JSON files: ${totalProducts}`);
  console.log(`✅ Successfully updated:       ${updatedProducts}`);
  console.log(`⚠️  Skipped (not in DB):       ${skippedProducts}`);
  console.log(`❌ Errors:                     ${errorProducts}`);
  console.log('='.repeat(60));
  
  // Validation query
  console.log('\n🔍 Running validation query...\n');
  
  const { data: stats, error: statsError } = await supabase
    .rpc('exec', {
      sql: `
        SELECT 
          COUNT(*) as total,
          COUNT(unit) as has_unit,
          COUNT(amount_per_serving) as has_amount,
          COUNT(net_contents) as has_contents,
          COUNT(CASE WHEN array_length(filters, 1) > 0 THEN 1 END) as has_filters
        FROM api.products
      `
    });
  
  if (!statsError && stats) {
    console.log('Database statistics:');
    console.log(`  Total products:     ${stats[0]?.total || 0}`);
    console.log(`  Has unit:           ${stats[0]?.has_unit || 0}`);
    console.log(`  Has amount:         ${stats[0]?.has_amount || 0}`);
    console.log(`  Has net_contents:   ${stats[0]?.has_contents || 0}`);
    console.log(`  Has filters:        ${stats[0]?.has_filters || 0}`);
  }
  
  // Show filter distribution
  console.log('\n📋 Filter Distribution:\n');
  
  const { data: filterStats } = await supabase
    .from('products')
    .select('filters');
  
  if (filterStats) {
    const filterCounts = {};
    filterStats.forEach(row => {
      (row.filters || []).forEach(filter => {
        filterCounts[filter] = (filterCounts[filter] || 0) + 1;
      });
    });
    
    const sortedFilters = Object.entries(filterCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
    
    sortedFilters.forEach(([filter, count]) => {
      console.log(`  ${filter.padEnd(20)} ${count}`);
    });
  }
  
  console.log('\n✅ Enrichment complete!\n');
}

// Run enrichment
enrichProducts().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
