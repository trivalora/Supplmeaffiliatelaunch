#!/usr/bin/env node

/**
 * API Endpoint Testing Script (Node.js version)
 * Tests all 5 core API endpoints with various filter combinations
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
};

// Test endpoint helper
async function testEndpoint(name, url, expectedStatus = 200) {
  console.log(`${colors.blue}Testing:${colors.reset} ${name}`);
  console.log(`URL: ${url}`);
  
  try {
    const response = await fetch(url);
    const status = response.status;
    
    let data;
    try {
      data = await response.json();
    } catch (e) {
      data = await response.text();
    }
    
    if (status === expectedStatus) {
      console.log(`${colors.green}✓ Success${colors.reset} (HTTP ${status})`);
      
      // Pretty print response
      if (typeof data === 'object') {
        // Show summary instead of full data
        if (data.supplements) {
          console.log(`  Found ${data.supplements.length} supplements`);
        } else if (data.supplement) {
          console.log(`  Supplement: ${data.supplement.name} (${data.supplement.product_count} products)`);
        } else if (data.products) {
          console.log(`  Found ${data.products.length} products`);
          if (data.pagination) {
            console.log(`  Page ${data.pagination.page}/${data.pagination.totalPages} (${data.pagination.total} total)`);
          }
          if (data.products.length > 0) {
            console.log(`  First product: ${data.products[0].brand} - ${data.products[0].product_name} ($${data.products[0].best_total_price})`);
          }
        } else if (data.product) {
          console.log(`  Product: ${data.product.brand} - ${data.product.product_name}`);
          console.log(`  Prices: ${data.product.prices?.length || 0} available`);
        }
      } else {
        console.log(data);
      }
    } else {
      console.log(`${colors.red}✗ Failed${colors.reset} (HTTP ${status}, expected ${expectedStatus})`);
      console.log(JSON.stringify(data, null, 2));
    }
    
    return { success: status === expectedStatus, status, data };
  } catch (error) {
    console.log(`${colors.red}✗ Error${colors.reset} ${error.message}`);
    return { success: false, error: error.message };
  }
  
  console.log('');
  console.log('---');
  console.log('');
}

// Main test runner
async function runTests() {
  console.log('🧪 Suppl.me API Testing Script');
  console.log('================================');
  console.log('');
  
  const results = [];
  
  // Test 1: List all supplements
  results.push(await testEndpoint(
    '1. List All Supplements',
    `${BASE_URL}/api/supplements`
  ));
  
  // Test 2: Get single supplement
  results.push(await testEndpoint(
    '2. Get Single Supplement (Ashwagandha)',
    `${BASE_URL}/api/supplements/ashwagandha`
  ));
  
  // Test 3: Get supplement products (basic)
  results.push(await testEndpoint(
    '3a. Get Supplement Products (Basic)',
    `${BASE_URL}/api/supplements/ashwagandha/products?page=1&limit=5`
  ));
  
  // Test 4: Get supplement products (with filters)
  results.push(await testEndpoint(
    '3b. Get Supplement Products (Price Range + Retailer)',
    `${BASE_URL}/api/supplements/ashwagandha/products?page=1&limit=5&retailer=iHerb&min_price=10&max_price=30&sort=price_asc`
  ));
  
  // Test 5: Get supplement products (brand filter)
  results.push(await testEndpoint(
    '3c. Get Supplement Products (Brand Filter)',
    `${BASE_URL}/api/supplements/ashwagandha/products?page=1&limit=5&brand=Organic`
  ));
  
  // Test 6: Get supplement products (third party tested)
  results.push(await testEndpoint(
    '3d. Get Supplement Products (Third Party Tested)',
    `${BASE_URL}/api/supplements/ashwagandha/products?page=1&limit=5&third_party_tested=true`
  ));
  
  // Test 7: Search products (basic)
  results.push(await testEndpoint(
    '4a. Search Products (Basic)',
    `${BASE_URL}/api/products/search?q=ashwagandha&limit=5`
  ));
  
  // Test 8: Search products (with filters)
  results.push(await testEndpoint(
    '4b. Search Products (All Filters)',
    `${BASE_URL}/api/products/search?q=ashwagandha&brand=Organic&min_price=10&max_price=30&sort=price_asc&limit=5`
  ));
  
  // Test 9: Get product ID for detail test
  console.log(`${colors.blue}Getting sample product ID...${colors.reset}`);
  try {
    const response = await fetch(`${BASE_URL}/api/supplements/ashwagandha/products?limit=1`);
    const data = await response.json();
    const productId = data.products?.[0]?.id;
    
    if (productId) {
      console.log(`${colors.green}Found product ID:${colors.reset} ${productId}`);
      console.log('');
      
      // Test 10: Get single product
      results.push(await testEndpoint(
        '5. Get Single Product Detail',
        `${BASE_URL}/api/products/${productId}`
      ));
    } else {
      console.log(`${colors.red}✗ Could not find product ID${colors.reset}`);
      console.log('');
    }
  } catch (error) {
    console.log(`${colors.red}✗ Error getting product ID: ${error.message}${colors.reset}`);
    console.log('');
  }
  
  // Test 11: 404 error handling
  results.push(await testEndpoint(
    '6. Error Handling (404)',
    `${BASE_URL}/api/supplements/nonexistent-supplement`,
    404
  ));
  
  // Summary
  console.log('================================');
  console.log('🏁 Testing Complete!');
  console.log('');
  
  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('Summary:');
  console.log(`${colors.green}✓ Passed: ${passed}${colors.reset}`);
  if (failed > 0) {
    console.log(`${colors.red}✗ Failed: ${failed}${colors.reset}`);
  }
  console.log('');
  console.log('Endpoints tested:');
  console.log('  - GET /api/supplements');
  console.log('  - GET /api/supplements/[slug]');
  console.log('  - GET /api/supplements/[slug]/products (4 filter combinations)');
  console.log('  - GET /api/products/[id]');
  console.log('  - GET /api/products/search (2 filter combinations)');
  console.log('  - Error handling (404)');
  console.log('');
  
  // Exit with error code if tests failed
  if (failed > 0) {
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
