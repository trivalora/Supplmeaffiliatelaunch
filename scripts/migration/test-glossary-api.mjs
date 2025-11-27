#!/usr/bin/env node

/**
 * Glossary API Test Script
 * 
 * Tests the glossary API endpoints to ensure they work with the database.
 * 
 * Prerequisites:
 * - Database populated with glossary terms
 * - Dev server running (npm run dev)
 * 
 * Usage:
 *   node scripts/migration/test-glossary-api.mjs
 */

console.log('🧪 Testing Glossary API Endpoints\n');
console.log('═'.repeat(60));

async function testAPI() {
  const baseUrl = 'http://localhost:3000';
  
  try {
    console.log('\n1️⃣ Testing GET /api/glossary (list all)...');
    const listResponse = await fetch(`${baseUrl}/api/glossary?limit=5`);
    if (!listResponse.ok) {
      console.error(`   ❌ Failed: ${listResponse.status} ${listResponse.statusText}`);
      return false;
    }
    const listData = await listResponse.json();
    console.log(`   ✅ Success: ${listData.data.length} terms returned`);
    console.log(`   Total count: ${listData.total}`);
    console.log(`   Sample terms: ${listData.data.map(t => t.term).join(', ')}`);
    
    console.log('\n2️⃣ Testing GET /api/glossary/rct (single term)...');
    const singleResponse = await fetch(`${baseUrl}/api/glossary/rct`);
    if (!singleResponse.ok) {
      console.error(`   ❌ Failed: ${singleResponse.status} ${singleResponse.statusText}`);
      return false;
    }
    const singleData = await singleResponse.json();
    console.log(`   ✅ Success: ${singleData.data.term}`);
    console.log(`   Abbreviation: ${singleData.data.abbreviation || 'N/A'}`);
    console.log(`   Definition: ${singleData.data.definition.substring(0, 100)}...`);
    
    console.log('\n3️⃣ Testing GET /api/glossary?search=clinical (search)...');
    const searchResponse = await fetch(`${baseUrl}/api/glossary?search=clinical&limit=5`);
    if (!searchResponse.ok) {
      console.error(`   ❌ Failed: ${searchResponse.status} ${searchResponse.statusText}`);
      return false;
    }
    const searchData = await searchResponse.json();
    console.log(`   ✅ Success: ${searchData.data.length} results`);
    console.log(`   Found: ${searchData.data.map(t => t.term).join(', ')}`);
    
    console.log('\n4️⃣ Testing GET /api/glossary?search=bio (prefix search)...');
    const prefixResponse = await fetch(`${baseUrl}/api/glossary?search=bio&limit=5`);
    if (!prefixResponse.ok) {
      console.error(`   ❌ Failed: ${prefixResponse.status} ${prefixResponse.statusText}`);
      return false;
    }
    const prefixData = await prefixResponse.json();
    console.log(`   ✅ Success: ${prefixData.data.length} results`);
    console.log(`   Found: ${prefixData.data.map(t => t.term).join(', ')}`);
    
    console.log('\n5️⃣ Testing 404 (non-existent term)...');
    const notFoundResponse = await fetch(`${baseUrl}/api/glossary/nonexistentterm`);
    if (notFoundResponse.status === 404) {
      console.log('   ✅ Success: Returns 404 as expected');
    } else {
      console.error(`   ❌ Unexpected status: ${notFoundResponse.status}`);
      return false;
    }
    
    console.log('\n' + '═'.repeat(60));
    console.log('✅ All API Tests Passed!');
    console.log('═'.repeat(60));
    
    return true;
    
  } catch (error) {
    console.error('\n❌ Error testing API:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('\n💡 Hint: Make sure the dev server is running:');
      console.error('   npm run dev');
    }
    return false;
  }
}

// Run tests
const success = await testAPI();
process.exit(success ? 0 : 1);
