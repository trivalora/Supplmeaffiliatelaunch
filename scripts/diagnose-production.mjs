#!/usr/bin/env node
/**
 * Production API Diagnostics
 * 
 * Tests production API endpoints to identify issues
 */

const PRODUCTION_URL = 'https://www.suppl.me';
const TEST_ENDPOINTS = [
  '/api/health',
  '/api/supplements',
  '/api/supplements/ashwagandha',
  '/api/supplements/ashwagandha/products?limit=5',
];

console.log('🔍 Production API Diagnostics\n');
console.log(`Testing: ${PRODUCTION_URL}\n`);
console.log('='.repeat(60));

async function testEndpoint(endpoint) {
  const url = `${PRODUCTION_URL}${endpoint}`;
  console.log(`\n📍 Testing: ${endpoint}`);
  console.log(`   URL: ${url}`);
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SupplMe-Diagnostics/1.0',
      },
    });
    
    console.log(`   Status: ${response.status} ${response.statusText}`);
    console.log(`   Content-Type: ${response.headers.get('content-type')}`);
    
    if (response.ok) {
      const data = await response.json();
      const preview = JSON.stringify(data, null, 2).slice(0, 200);
      console.log(`   ✅ SUCCESS`);
      console.log(`   Preview: ${preview}${preview.length >= 200 ? '...' : ''}`);
      return { success: true, status: response.status };
    } else {
      const text = await response.text();
      console.log(`   ❌ FAILED`);
      console.log(`   Response: ${text.slice(0, 200)}`);
      return { success: false, status: response.status, error: text };
    }
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Run tests
const results = [];
for (const endpoint of TEST_ENDPOINTS) {
  const result = await testEndpoint(endpoint);
  results.push({ endpoint, ...result });
}

console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:\n');

const passed = results.filter(r => r.success).length;
const failed = results.filter(r => !r.success).length;

console.log(`   ✅ Passed: ${passed}/${results.length}`);
console.log(`   ❌ Failed: ${failed}/${results.length}`);

if (failed > 0) {
  console.log('\n🚨 Issues Detected:\n');
  results.filter(r => !r.success).forEach(r => {
    console.log(`   - ${r.endpoint}: ${r.status || 'Network Error'}`);
  });
  
  console.log('\n💡 Possible Causes:\n');
  console.log('   1. Environment variables not set in Vercel');
  console.log('   2. Supabase project paused or inaccessible');
  console.log('   3. API routes not deployed (build issue)');
  console.log('   4. Database schema mismatch');
  
  console.log('\n🔧 Next Steps:\n');
  console.log('   1. Check Vercel Dashboard → Settings → Environment Variables');
  console.log('   2. Verify all 7 variables are set (see VERCEL_ENV_SETUP.md)');
  console.log('   3. Check Vercel Function Logs for errors');
  console.log('   4. Check Supabase Dashboard → Project is active');
  
  process.exit(1);
} else {
  console.log('\n✅ All tests passed! Production API is working correctly.\n');
  process.exit(0);
}
