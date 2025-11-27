/**
 * Test script for new API endpoints
 * 
 * Tests:
 * 1. Newsletter subscription (POST /api/subscribe)
 * 2. Partner lead submission (POST /api/partner-lead)  
 * 3. Glossary list (GET /api/glossary)
 * 4. Glossary create (POST /api/glossary)
 * 5. Glossary get single (GET /api/glossary/[slug])
 * 6. Glossary update (PUT /api/glossary/[slug])
 * 7. Glossary delete (DELETE /api/glossary/[slug])
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

console.log(`🧪 Testing API endpoints at ${BASE_URL}\n`);

async function testEndpoint(name, method, url, body = null) {
  console.log(`\n📋 Testing: ${name}`);
  console.log(`   ${method} ${url}`);
  
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
      console.log('   Body:', JSON.stringify(body, null, 2));
    }
    
    const response = await fetch(url, options);
    const data = await response.json();
    
    console.log(`   Status: ${response.status} ${response.ok ? '✅' : '❌'}`);
    console.log('   Response:', JSON.stringify(data, null, 2));
    
    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.log('   ❌ Error:', error.message);
    return { ok: false, error: error.message };
  }
}

async function runTests() {
  console.log('='.repeat(60));
  console.log('🚀 Backend Extension API Tests');
  console.log('='.repeat(60));
  
  // Test 1: Newsletter Subscription
  await testEndpoint(
    'Newsletter Subscription',
    'POST',
    `${BASE_URL}/api/subscribe`,
    {
      email: `test-${Date.now()}@example.com`,
      source: 'test_script'
    }
  );
  
  // Test 2: Duplicate Newsletter Subscription
  await testEndpoint(
    'Duplicate Newsletter Subscription (should handle gracefully)',
    'POST',
    `${BASE_URL}/api/subscribe`,
    {
      email: 'duplicate@example.com',
      source: 'test_script'
    }
  );
  
  // Test 3: Invalid Email
  await testEndpoint(
    'Invalid Email (should fail)',
    'POST',
    `${BASE_URL}/api/subscribe`,
    {
      email: 'not-an-email',
      source: 'test_script'
    }
  );
  
  // Test 4: Partner Lead Submission
  await testEndpoint(
    'Partner Lead Submission',
    'POST',
    `${BASE_URL}/api/partner-lead`,
    {
      name: 'Test Partner',
      email: `partner-${Date.now()}@example.com`,
      network: 'shareasale',
      category: 'Omega-3',
      message: 'This is a test submission from the API test script'
    }
  );
  
  // Test 5: Invalid Partner Lead (missing fields)
  await testEndpoint(
    'Invalid Partner Lead (missing fields, should fail)',
    'POST',
    `${BASE_URL}/api/partner-lead`,
    {
      name: 'Test Partner',
      email: 'test@example.com'
      // Missing network and category
    }
  );
  
  // Test 6: Glossary List (empty initially)
  await testEndpoint(
    'Glossary List (all terms)',
    'GET',
    `${BASE_URL}/api/glossary`
  );
  
  // Test 7: Create Glossary Term
  const testSlug = `test-term-${Date.now()}`;
  const createResult = await testEndpoint(
    'Create Glossary Term',
    'POST',
    `${BASE_URL}/api/glossary`,
    {
      slug: testSlug,
      term: 'Test Term',
      abbreviation: 'TT',
      definition: 'This is a test glossary term created by the API test script.',
      simple_explanation: 'A simple way to understand this term.',
      examples: ['Example 1', 'Example 2'],
      key_points: [
        { title: 'Key Point 1', description: 'Description of key point 1' },
        { title: 'Key Point 2', description: 'Description of key point 2' }
      ],
      meta_title: 'Test Term - Glossary',
      meta_description: 'Understanding the test term in supplement research.'
    }
  );
  
  // Test 8: Get Single Glossary Term
  if (createResult.ok) {
    await testEndpoint(
      'Get Single Glossary Term',
      'GET',
      `${BASE_URL}/api/glossary/${testSlug}`
    );
  }
  
  // Test 9: Update Glossary Term
  if (createResult.ok) {
    await testEndpoint(
      'Update Glossary Term',
      'PUT',
      `${BASE_URL}/api/glossary/${testSlug}`,
      {
        definition: 'This is an UPDATED test glossary term.',
        simple_explanation: 'An UPDATED simple explanation.'
      }
    );
  }
  
  // Test 10: Search Glossary
  await testEndpoint(
    'Search Glossary (search for "test")',
    'GET',
    `${BASE_URL}/api/glossary?search=test&limit=10`
  );
  
  // Test 11: Delete Glossary Term (cleanup)
  if (createResult.ok) {
    await testEndpoint(
      'Delete Glossary Term (cleanup)',
      'DELETE',
      `${BASE_URL}/api/glossary/${testSlug}`
    );
  }
  
  // Test 12: Verify Deletion
  if (createResult.ok) {
    await testEndpoint(
      'Verify Deletion (should return 404)',
      'GET',
      `${BASE_URL}/api/glossary/${testSlug}`
    );
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ All tests completed!');
  console.log('='.repeat(60));
}

// Run tests
runTests().catch(console.error);
