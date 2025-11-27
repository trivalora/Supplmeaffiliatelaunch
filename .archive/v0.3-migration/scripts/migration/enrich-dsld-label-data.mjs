#!/usr/bin/env node
/**
 * DSLD Label Data Enrichment Script
 * 
 * This script adds full DSLD label information to products in the database
 * by reading from the original JSON files.
 * 
 * Usage: node scripts/migration/enrich-dsld-label-data.mjs
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
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  db: { schema: 'api' }
});

const JSON_DIR = join(__dirname, '../../public/api/products/supplements');

async function enrichDSLDData() {
  console.log('🚀 Starting DSLD label data enrichment...\n');
  
  const files = readdirSync(JSON_DIR).filter(f => 
    f.endsWith('.json') && f !== 'retailer-comparison-module.json'
  );
  
  let totalProcessed = 0;
  let totalUpdated = 0;
  let totalSkipped = 0;
  
  for (const file of files) {
    const supplementSlug = file.replace('.json', '');
    console.log(`\n📦 Processing ${supplementSlug}...`);
    
    try {
      const filePath = join(JSON_DIR, file);
      const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));
      const products = jsonData.products || [];
      
      for (const product of products) {
        const jsonId = product.id;
        totalProcessed++;
        
        if (!jsonId || !product.dsld_label_info) {
          totalSkipped++;
          continue;
        }
        
        // Update with DSLD label data
        const { error } = await supabase
          .from('products')
          .update({
            dsld_product_name: product.dsld_product_name || product.product_name,
            dsld_brand: product.dsld_brand || product.brand,
            dsld_content: product.dsld_content,
            dsld_label_info: product.dsld_label_info
          })
          .eq('json_id', jsonId);
        
        if (error) {
          console.error(`   ❌ Error updating ${jsonId}:`, error.message);
        } else {
          totalUpdated++;
          if (totalUpdated % 100 === 0) {
            console.log(`   ✓ Updated ${totalUpdated} products...`);
          }
        }
      }
      
      console.log(`   ✅ Completed ${supplementSlug}`);
      
    } catch (error) {
      console.error(`   ❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 DSLD ENRICHMENT SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total products processed: ${totalProcessed}`);
  console.log(`✅ Successfully updated:   ${totalUpdated}`);
  console.log(`⚠️  Skipped:               ${totalSkipped}`);
  console.log('='.repeat(60));
  
  console.log('\n✅ DSLD enrichment complete!\n');
}

enrichDSLDData().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
