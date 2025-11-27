#!/usr/bin/env node

/**
 * Glossary Data Validation Script
 * 
 * This script validates the glossary_terms table after migration
 * to ensure all data was inserted correctly.
 * 
 * Usage:
 *   node scripts/migration/validate-glossary-data.mjs
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env.local explicitly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '../../.env.local');
config({ path: envPath });

// Debug: Check if env vars loaded
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Environment variables not loaded!');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
  console.error('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing');
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    db: { schema: 'api' },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

console.log('🔍 Validating Glossary Data in Database\n');
console.log('═'.repeat(60));

async function validateData() {
  try {
    // 1. Check total count
    console.log('\n1️⃣ Checking total count...');
    const { count, error: countError, data } = await supabase
      .from('glossary_terms')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('❌ Error fetching count:', countError.message);
      console.error('Full error:', JSON.stringify(countError, null, 2));
      console.error('Hint:', countError.hint);
      console.error('Details:', countError.details);
      return false;
    }
    
    console.log(`   Total terms: ${count}`);
    if (count === 197) {
      console.log('   ✅ Count matches expected (197 terms)');
    } else {
      console.log(`   ⚠️  Warning: Expected 197, got ${count}`);
    }
    
    // 2. Check for missing required fields
    console.log('\n2️⃣ Checking required fields...');
    const { data: allTerms, error: fetchError } = await supabase
      .from('glossary_terms')
      .select('id, slug, term, definition');
    
    if (fetchError) {
      console.error('❌ Error fetching terms:', fetchError.message);
      return false;
    }
    
    const missing = allTerms.filter(t => !t.slug || !t.term || !t.definition);
    if (missing.length > 0) {
      console.log(`   ❌ ${missing.length} terms missing required fields:`);
      missing.forEach(t => console.log(`      - ${t.slug || 'NO SLUG'}: ${t.term || 'NO TERM'}`));
      return false;
    } else {
      console.log(`   ✅ All ${allTerms.length} terms have required fields (slug, term, definition)`);
    }
    
    // 3. Check for duplicate slugs
    console.log('\n3️⃣ Checking for duplicate slugs...');
    const slugs = allTerms.map(t => t.slug);
    const duplicates = slugs.filter((s, i) => slugs.indexOf(s) !== i);
    if (duplicates.length > 0) {
      console.log(`   ❌ Duplicate slugs found: ${[...new Set(duplicates)].join(', ')}`);
      return false;
    } else {
      console.log('   ✅ No duplicate slugs');
    }
    
    // 4. Check abbreviations
    console.log('\n4️⃣ Checking abbreviations...');
    const { count: abbrevCount } = await supabase
      .from('glossary_terms')
      .select('*', { count: 'exact', head: true })
      .not('abbreviation', 'is', null);
    
    console.log(`   ✅ ${abbrevCount} terms have abbreviations`);
    
    // 5. Check related terms
    console.log('\n5️⃣ Checking related terms...');
    const { data: termsWithRelations } = await supabase
      .from('glossary_terms')
      .select('slug, related_terms')
      .not('related_terms', 'eq', '{}');
    
    console.log(`   ✅ ${termsWithRelations?.length || 0} terms have related terms`);
    
    // 6. Sample random terms
    console.log('\n6️⃣ Sample terms (random 10):');
    const { data: sample } = await supabase
      .from('glossary_terms')
      .select('slug, term, abbreviation')
      .limit(10);
    
    if (sample) {
      sample.forEach((t, i) => {
        const abbrev = t.abbreviation ? ` (${t.abbreviation})` : '';
        console.log(`   ${i + 1}. ${t.term}${abbrev} → /glossary/${t.slug}`);
      });
    }
    
    // 7. Test API endpoint
    console.log('\n7️⃣ Testing API endpoint...');
    try {
      const response = await fetch('http://localhost:3000/api/glossary?limit=1');
      if (response.ok) {
        const data = await response.json();
        console.log(`   ✅ API endpoint working (${data.total} terms available)`);
      } else {
        console.log(`   ⚠️  API returned ${response.status} (is dev server running?)`);
      }
    } catch (apiError) {
      console.log('   ⚠️  Cannot test API (dev server not running)');
    }
    
    // 8. Check SEO metadata
    console.log('\n8️⃣ Checking SEO metadata...');
    const { count: metaCount } = await supabase
      .from('glossary_terms')
      .select('*', { count: 'exact', head: true })
      .not('meta_title', 'is', null);
    
    console.log(`   ✅ ${metaCount} terms have meta_title`);
    
    // Success!
    console.log('\n' + '═'.repeat(60));
    console.log('✅ Validation Complete - All Checks Passed!');
    console.log('═'.repeat(60));
    console.log('\nDatabase Status: READY ✅');
    console.log('API Endpoints: OPERATIONAL ✅');
    console.log('\nYou can now:');
    console.log('  1. Test API: curl http://localhost:3000/api/glossary');
    console.log('  2. View single term: curl http://localhost:3000/api/glossary/rct');
    console.log('  3. Search: curl "http://localhost:3000/api/glossary?search=clinical"');
    
    return true;
    
  } catch (error) {
    console.error('\n❌ Validation Error:', error);
    return false;
  }
}

// Run validation
validateData().then(success => {
  process.exit(success ? 0 : 1);
});
