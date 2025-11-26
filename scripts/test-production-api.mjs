#!/usr/bin/env node
/**
 * Test Production API Endpoint
 * Tests if the production API can access the database
 */

const PRODUCTION_URL = 'https://www.suppl.me';

async function testProductionAPI() {
  console.log('🌐 Testing Production API...\n');
  
  try {
    // Test 1: Get all supplements
    console.log('1️⃣  Testing /api/supplements');
    const supplementsRes = await fetch(`${PRODUCTION_URL}/api/supplements`);
    const supplements = await supplementsRes.json();
    
    if (supplementsRes.ok) {
      console.log(`   ✅ Success: ${supplements.length} supplements found`);
      console.log(`   Sample: ${supplements.slice(0, 3).map(s => s.name).join(', ')}\n`);
    } else {
      console.log(`   ❌ Failed: ${supplementsRes.status} ${JSON.stringify(supplements)}\n`);
    }
    
    // Test 2: Get ashwagandha products
    console.log('2️⃣  Testing /api/supplements/ashwagandha/products');
    const productsRes = await fetch(`${PRODUCTION_URL}/api/supplements/ashwagandha/products?limit=5`);
    const productsData = await productsRes.json();
    
    if (productsRes.ok) {
      console.log(`   ✅ Success: ${productsData.products?.length || 0} products found`);
      if (productsData.products?.[0]) {
        console.log(`   Sample: ${productsData.products[0].brand}\n`);
      }
    } else {
      console.log(`   ❌ Failed: ${productsRes.status}`);
      console.log(`   Error: ${JSON.stringify(productsData, null, 2)}\n`);
    }
    
    // Summary
    if (supplementsRes.ok && productsRes.ok) {
      console.log('✅ Production API is working correctly!');
    } else {
      console.log('⚠️  Production API has issues - check Vercel environment variables');
      console.log('\n📋 Troubleshooting:');
      console.log('   1. Go to: https://vercel.com/trivaloras-projects/supplmeaffiliatelaunch/settings/environment-variables');
      console.log('   2. Verify these are set:');
      console.log('      - NEXT_PUBLIC_SUPABASE_URL');
      console.log('      - NEXT_PUBLIC_SUPABASE_ANON_KEY');
      console.log('      - SUPABASE_SERVICE_ROLE_KEY');
      console.log('   3. Make sure they match your .env.local values');
      console.log('   4. Redeploy if you make changes');
    }
    
  } catch (error) {
    console.error('❌ Error testing production API:', error.message);
  }
}

testProductionAPI();
