#!/usr/bin/env node
/**
 * Direct database validation script
 * Tests Supabase connection and data integrity
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' }
});

console.log('🔍 Database Validation\n' + '='.repeat(50) + '\n');

async function validate() {
  try {
    // Test 1: Count records
    console.log('📊 Record Counts:');
    const tables = ['supplements', 'products', 'prices', 'retailers'];
    for (const table of tables) {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      console.log(`  ${table.padEnd(15)} ${count} rows`);
    }
    
    console.log('\n📦 Sample Data:\n');
    
    // Test 2: Get sample supplements
    const { data: supplements, error: suppError } = await supabase
      .from('supplements')
      .select('name, slug, subcategory')
      .limit(3);
    
    if (suppError) throw suppError;
    console.log('  Supplements:');
    supplements.forEach(s => console.log(`    - ${s.name} (${s.slug}) - ${s.subcategory || 'N/A'}`));
    
    // Test 3: Get sample products with metadata
    const { data: products, error: prodError } = await supabase
      .from('products')
      .select('brand, product_name, unit, amount_per_serving, filters')
      .not('unit', 'is', null)
      .limit(3);
    
    if (prodError) throw prodError;
    console.log('\n  Products with Metadata:');
    products.forEach(p => {
      console.log(`    - ${p.brand} ${p.product_name}`);
      console.log(`      ${p.amount_per_serving} ${p.unit}, filters: ${p.filters?.join(', ') || 'none'}`);
    });
    
    // Test 4: Test product_comparison_view
    console.log('\n📈 Testing product_comparison_view:\n');
    const { data: comparison, error: compError } = await supabase
      .from('product_comparison_view')
      .select('supplement_slug, brand, product_name, best_price_per_unit, best_total_price, unit')
      .eq('supplement_slug', 'ashwagandha')
      .not('best_price_per_unit', 'is', null)
      .order('best_price_per_unit', { ascending: true })
      .limit(3);
    
    if (compError) throw compError;
    console.log('  Top 3 Ashwagandha by price/unit:');
    comparison.forEach(p => {
      console.log(`    - ${p.brand} - $${p.best_price_per_unit?.toFixed(4)}/${p.unit || 'unit'} (total: $${p.best_total_price})`);
    });
    
    // Test 5: Filter counts
    console.log('\n🏷️  Filter Distribution:\n');
    const { data: filterData, error: filterError } = await supabase
      .rpc('get_filter_counts');
    
    // If RPC doesn't exist, query products directly
    const { data: productsWithFilters } = await supabase
      .from('products')
      .select('filters')
      .not('filters', 'is', null);
    
    const filterCounts = {};
    productsWithFilters?.forEach(p => {
      p.filters?.forEach(f => {
        filterCounts[f] = (filterCounts[f] || 0) + 1;
      });
    });
    
    const sortedFilters = Object.entries(filterCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    sortedFilters.forEach(([filter, count]) => {
      console.log(`  ${filter.padEnd(20)} ${count}`);
    });
    
    console.log('\n' + '='.repeat(50));
    console.log('✅ Database validation complete!');
    console.log('\n📌 Next steps:');
    console.log('   1. Start dev server: npm run dev');
    console.log('   2. Test API: node scripts/test-api-endpoints.mjs');
    console.log('   3. Open browser: http://localhost:3000/ashwagandha');
    
  } catch (error) {
    console.error('\n❌ Validation failed:', error.message);
    process.exit(1);
  }
}

validate();
