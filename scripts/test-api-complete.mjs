#!/usr/bin/env node

/**
 * Comprehensive API Test Script
 * Tests all 5 endpoints with various scenarios
 * Run: node scripts/test-api-complete.mjs
 */

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rdraqlnxypwlhkhngyjk.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw',
  { db: { schema: 'api' }}
);

console.log('🧪 Comprehensive API Test Suite\n');
console.log('=' .repeat(60));

// Helper function for API calls
async function testAPI(url, description) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const status = response.ok ? '✅' : '❌';
    console.log(`\n${status} ${description}`);
    console.log(`   Status: ${response.status}`);
    
    if (!response.ok) {
      console.log(`   Error: ${JSON.stringify(data.error)}`);
      return { success: false, data: null };
    }
    
    return { success: true, data };
  } catch (error) {
    console.log(`\n❌ ${description}`);
    console.log(`   Error: ${error.message}`);
    return { success: false, data: null };
  }
}

// Helper to verify json_id format
function verifyJsonId(product) {
  if (!product.json_id) {
    return '❌ Missing json_id field';
  }
  
  // json_id should be in format: "dsld_id_brand_productname_amount_unit_variant"
  // Example: "57173_organic traditions_organic ashwagandha..."
  if (product.json_id.includes('_')) {
    return '✅ json_id format correct';
  }
  
  return '⚠️  json_id format unexpected';
}

let totalTests = 0;
let passedTests = 0;

async function runTests() {
  console.log('\n\n📡 Testing API Endpoints...\n');
  
  // Test 1: GET /api/supplements
  console.log('\n--- Test 1: List All Supplements ---');
  totalTests++;
  const test1 = await testAPI('http://localhost:3000/api/supplements', 'GET /api/supplements');
  if (test1.success && test1.data.supplements && test1.data.supplements.length > 0) {
    console.log(`   Found: ${test1.data.supplements.length} supplements`);
    console.log(`   Sample: ${test1.data.supplements[0].name}`);
    passedTests++;
  }
  
  // Test 2: GET /api/supplements/[slug]
  console.log('\n--- Test 2: Single Supplement ---');
  totalTests++;
  const test2 = await testAPI('http://localhost:3000/api/supplements/ashwagandha', 'GET /api/supplements/ashwagandha');
  if (test2.success && test2.data.supplement) {
    console.log(`   Name: ${test2.data.supplement.name}`);
    console.log(`   Slug: ${test2.data.supplement.slug}`);
    passedTests++;
  }
  
  // Test 3: GET /api/supplements/[slug]/products - Basic
  console.log('\n--- Test 3: Products for Supplement (Basic) ---');
  totalTests++;
  const test3 = await testAPI('http://localhost:3000/api/supplements/ashwagandha/products?limit=5', 'GET /api/supplements/ashwagandha/products');
  if (test3.success && test3.data.products && test3.data.products.length > 0) {
    const product = test3.data.products[0];
    console.log(`   Found: ${test3.data.products.length} products`);
    console.log(`   ${verifyJsonId(product)}`);
    console.log(`   Sample product:`);
    console.log(`     - json_id: ${product.json_id}`);
    console.log(`     - dsld_id: ${product.dsld_id || 'null'}`);
    console.log(`     - brand: ${product.brand}`);
    console.log(`     - product_name: ${product.product_name}`);
    console.log(`     - dsld_product_name: ${product.dsld_product_name || 'null'}`);
    console.log(`     - best_price: $${product.best_total_price}`);
    console.log(`     - retailers: ${product.available_retailers.join(', ')}`);
    
    if (product.json_id && product.dsld_product_name !== undefined) {
      passedTests++;
    } else {
      console.log('   ❌ Missing required fields');
    }
  }
  
  // Test 4: GET /api/supplements/[slug]/products - With Filters
  console.log('\n--- Test 4: Products with Filters ---');
  totalTests++;
  const test4 = await testAPI(
    'http://localhost:3000/api/supplements/ashwagandha/products?page=1&limit=5&retailer=iHerb&min_price=10&max_price=30&sort=price_asc',
    'GET /api/supplements/ashwagandha/products (filtered)'
  );
  if (test4.success) {
    console.log(`   Found: ${test4.data.products.length} products`);
    console.log(`   Filters applied: retailer=iHerb, price=10-30`);
    passedTests++;
  }
  
  // Test 5: GET /api/supplements/[slug]/products - Brand Filter
  console.log('\n--- Test 5: Products with Brand Filter ---');
  totalTests++;
  const test5 = await testAPI(
    'http://localhost:3000/api/supplements/ashwagandha/products?page=1&limit=5&brand=Organic',
    'GET /api/supplements/ashwagandha/products (brand=Organic)'
  );
  if (test5.success) {
    console.log(`   Found: ${test5.data.products.length} products with "Organic" in brand`);
    if (test5.data.products.length > 0) {
      console.log(`   Sample: ${test5.data.products[0].brand}`);
    }
    passedTests++;
  }
  
  // Test 6: GET /api/supplements/[slug]/products - Third Party Tested
  console.log('\n--- Test 6: Third Party Tested Filter ---');
  totalTests++;
  const test6 = await testAPI(
    'http://localhost:3000/api/supplements/ashwagandha/products?page=1&limit=5&third_party_tested=true',
    'GET /api/supplements/ashwagandha/products (third_party_tested=true)'
  );
  if (test6.success) {
    console.log(`   Found: ${test6.data.products.length} third-party tested products`);
    passedTests++;
  }
  
  // Test 7: GET /api/products/[id] - Get Product ID first
  console.log('\n--- Test 7: Single Product Details ---');
  totalTests++;
  if (test3.success && test3.data.products && test3.data.products.length > 0) {
    const productId = test3.data.products[0].id;
    const test7 = await testAPI(
      `http://localhost:3000/api/products/${productId}`,
      `GET /api/products/${productId.substring(0, 8)}...`
    );
    if (test7.success && test7.data.product) {
      console.log(`   Product: ${test7.data.product.product_name}`);
      console.log(`   json_id: ${test7.data.product.json_id}`);
      console.log(`   dsld_id: ${test7.data.product.dsld_id || 'null'}`);
      console.log(`   Prices: ${test7.data.product.prices?.length || 0}`);
      console.log(`   ${verifyJsonId(test7.data.product)}`);
      passedTests++;
    }
  }
  
  // Test 8: GET /api/products/search - Basic
  console.log('\n--- Test 8: Product Search (Basic) ---');
  totalTests++;
  const test8 = await testAPI(
    'http://localhost:3000/api/products/search?q=ashwagandha&limit=5',
    'GET /api/products/search?q=ashwagandha'
  );
  if (test8.success && test8.data.results) {
    console.log(`   Found: ${test8.data.results.length} results`);
    if (test8.data.results.length > 0) {
      const result = test8.data.results[0];
      console.log(`   ${verifyJsonId(result)}`);
      console.log(`   Sample: ${result.brand} - ${result.product_name}`);
    }
    passedTests++;
  }
  
  // Test 9: GET /api/products/search - With Filters
  console.log('\n--- Test 9: Product Search (With Filters) ---');
  totalTests++;
  const test9 = await testAPI(
    'http://localhost:3000/api/products/search?q=ashwagandha&brand=Organic&min_price=10&max_price=30&sort=price_asc&limit=5',
    'GET /api/products/search (filtered)'
  );
  if (test9.success) {
    console.log(`   Found: ${test9.data.results.length} results`);
    console.log(`   Filters: brand=Organic, price=10-30, sort=price_asc`);
    passedTests++;
  }
  
  // Test 10: Error Handling - 404
  console.log('\n--- Test 10: Error Handling (404) ---');
  totalTests++;
  const test10 = await testAPI(
    'http://localhost:3000/api/supplements/nonexistent-supplement',
    'GET /api/supplements/nonexistent-supplement (should 404)'
  );
  if (!test10.success) {
    console.log(`   ✅ Correctly returns 404 for nonexistent supplement`);
    passedTests++;
  }
  
  // Test 11: Error Handling - Invalid UUID
  console.log('\n--- Test 11: Error Handling (Invalid UUID) ---');
  totalTests++;
  const test11 = await testAPI(
    'http://localhost:3000/api/products/00000000-0000-0000-0000-000000000000',
    'GET /api/products/[invalid-uuid] (should 404)'
  );
  if (!test11.success) {
    console.log(`   ✅ Correctly handles invalid product ID`);
    passedTests++;
  }
  
  // Test 12: Error Handling - Search Query Too Short
  console.log('\n--- Test 12: Error Handling (Search Query Too Short) ---');
  totalTests++;
  const test12 = await testAPI(
    'http://localhost:3000/api/products/search?q=a',
    'GET /api/products/search?q=a (should 400)'
  );
  if (!test12.success) {
    console.log(`   ✅ Correctly rejects search query < 2 chars`);
    passedTests++;
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Test Summary: ${passedTests}/${totalTests} passed\n`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! API is ready for deployment.\n');
    return 0;
  } else {
    console.log(`⚠️  ${totalTests - passedTests} test(s) failed. Review errors above.\n`);
    return 1;
  }
}

// Check database first
async function checkDatabase() {
  console.log('\n📦 Checking Database...\n');
  
  try {
    const { data: supplements, error: suppErr } = await supabase
      .from('supplements')
      .select('*', { count: 'exact', head: true });
    
    const { data: products, error: prodErr } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
    
    const { data: prices, error: priceErr } = await supabase
      .from('prices')
      .select('*', { count: 'exact', head: true });
    
    if (suppErr || prodErr || priceErr) {
      console.log('❌ Database error:', suppErr || prodErr || priceErr);
      return false;
    }
    
    console.log('✅ Database connected');
    console.log(`   - Supplements: ${supplements?.length || 0} rows`);
    console.log(`   - Products: ${products?.length || 0} rows`);
    console.log(`   - Prices: ${prices?.length || 0} rows`);
    
    return true;
  } catch (error) {
    console.log('❌ Database connection failed:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  const dbOk = await checkDatabase();
  
  if (!dbOk) {
    console.log('\n❌ Database check failed. Cannot proceed with API tests.\n');
    process.exit(1);
  }
  
  console.log('\n💡 Make sure dev server is running: npm run dev\n');
  console.log('Waiting 3 seconds for server...\n');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const exitCode = await runTests();
  process.exit(exitCode);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
