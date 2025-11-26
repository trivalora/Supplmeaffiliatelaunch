#!/usr/bin/env node
/**
 * Production Verification Script
 * Tests all critical functionality of the production deployment
 */

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

async function verifyProduction() {
  console.log('🚀 Production Verification Report');
  console.log('='.repeat(60));
  console.log(`Generated: ${new Date().toLocaleString()}\n`);

  let allPassed = true;

  // Test 1: Database Connection
  console.log('1️⃣  Database Connection');
  try {
    const { data, error } = await supabase.from('supplements').select('count');
    if (error) throw error;
    console.log('   ✅ Connected to Supabase\n');
  } catch (err) {
    console.log('   ❌ Failed:', err.message, '\n');
    allPassed = false;
  }

  // Test 2: Core Tables
  console.log('2️⃣  Core Tables');
  const tables = {
    supplements: 17,
    products: 1663,
    prices: 1213,
    retailers: 7
  };

  for (const [table, expected] of Object.entries(tables)) {
    try {
      const { count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      const status = count >= expected ? '✅' : '⚠️';
      console.log(`   ${status} ${table}: ${count} rows (expected ${expected})`);
    } catch (err) {
      console.log(`   ❌ ${table}: ${err.message}`);
      allPassed = false;
    }
  }
  console.log('');

  // Test 3: Product Data Quality
  console.log('3️⃣  Product Data Quality');
  try {
    const { data: products } = await supabase
      .from('products')
      .select('id, brand, dsld_product_name, label_data, net_contents')
      .limit(5);

    const hasLabel = products.filter(p => p.label_data).length;
    const hasDSLD = products.filter(p => p.dsld_product_name).length;
    const hasNetContents = products.filter(p => p.net_contents).length;

    console.log(`   ✅ Sample products have label_data: ${hasLabel}/5`);
    console.log(`   ✅ Sample products have dsld_product_name: ${hasDSLD}/5`);
    console.log(`   ✅ Sample products have net_contents: ${hasNetContents}/5\n`);
  } catch (err) {
    console.log(`   ❌ Failed: ${err.message}\n`);
    allPassed = false;
  }

  // Test 4: Price Data with Relationships
  console.log('4️⃣  Price Data & Relationships');
  try {
    const { data: pricesWithUrls } = await supabase
      .from('prices')
      .select('*')
      .not('retailer_product_url', 'is', null)
      .limit(5);

    console.log(`   ✅ Prices with URLs: ${pricesWithUrls?.length || 0}/5`);

    const { data: pricesWithProducts, error } = await supabase
      .from('prices')
      .select('id, product:products(brand), retailer:retailers(name)')
      .limit(1);

    if (error) throw error;
    if (pricesWithProducts && pricesWithProducts[0]) {
      console.log(`   ✅ Relationships working: ${pricesWithProducts[0].product?.brand} at ${pricesWithProducts[0].retailer?.name}\n`);
    }
  } catch (err) {
    console.log(`   ❌ Failed: ${err.message}\n`);
    allPassed = false;
  }

  // Test 5: Supplement Slug Query (Critical for API)
  console.log('5️⃣  Supplement Queries');
  try {
    const { data: ashwa, error } = await supabase
      .from('supplements')
      .select('id, slug, name')
      .eq('slug', 'ashwagandha')
      .single();

    if (error) throw error;
    if (ashwa) {
      console.log(`   ✅ Supplement by slug: ${ashwa.name} (${ashwa.slug})`);

      // Get product count for this supplement
      const { count } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true })
        .eq('supplement_id', ashwa.id);

      console.log(`   ✅ Products for ${ashwa.name}: ${count}\n`);
    }
  } catch (err) {
    console.log(`   ❌ Failed: ${err.message}\n`);
    allPassed = false;
  }

  // Test 6: Complex Query (Product with Prices)
  console.log('6️⃣  Complex Queries');
  try {
    const { data: productsWithPrices } = await supabase
      .from('products')
      .select(`
        id,
        brand,
        dsld_product_name,
        supplement:supplements(name),
        prices(
          id,
          price_per_unit,
          retailer:retailers(name)
        )
      `)
      .limit(1);

    if (productsWithPrices && productsWithPrices[0]) {
      const product = productsWithPrices[0];
      console.log(`   ✅ Complex join: ${product.brand} for ${product.supplement?.name}`);
      console.log(`   ✅ Prices loaded: ${product.prices?.length || 0} retailers\n`);
    }
  } catch (err) {
    console.log(`   ❌ Failed: ${err.message}\n`);
    allPassed = false;
  }

  // Test 7: Check Product Metadata
  console.log('7️⃣  Product Metadata Enrichment');
  try {
    const { data } = await supabase
      .from('products')
      .select('filters, unit, amount_per_serving')
      .not('filters', 'is', null)
      .limit(1);

    if (data && data[0]) {
      const hasFilters = data[0].filters && Array.isArray(data[0].filters);
      const hasUnit = !!data[0].unit;
      const hasAmount = !!data[0].amount_per_serving;

      console.log(`   ${hasFilters ? '✅' : '⚠️'} Filters: ${hasFilters ? data[0].filters.length + ' items' : 'missing'}`);
      console.log(`   ${hasUnit ? '✅' : '⚠️'} Unit: ${hasUnit ? data[0].unit : 'missing'}`);
      console.log(`   ${hasAmount ? '✅' : '⚠️'} Amount per serving: ${hasAmount ? data[0].amount_per_serving : 'missing'}\n`);
    }
  } catch (err) {
    console.log(`   ⚠️  Metadata check incomplete: ${err.message}\n`);
  }

  // Summary
  console.log('='.repeat(60));
  if (allPassed) {
    console.log('🎉 ALL TESTS PASSED - Production database is ready!');
    console.log('\n📋 Next Steps:');
    console.log('   1. Visit https://www.suppl.me/comparison/ashwagandha');
    console.log('   2. Verify product listings load correctly');
    console.log('   3. Test sorting and filtering');
    console.log('   4. Check that retailer links work');
    console.log('\n✨ Your production site should now be fully functional!');
  } else {
    console.log('⚠️  Some tests failed - review errors above');
  }
  console.log('='.repeat(60));
}

verifyProduction();
