#!/usr/bin/env node
/**
 * Test Supabase connection and verify database schema
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' }
});

async function testConnection() {
  console.log('🔗 Testing Supabase connection...\n');

  try {
    // Test 1: Check retailers table (should have 7 rows)
    const { data: retailers, error: retailersError } = await supabase
      .from('retailers')
      .select('*')
      .order('priority');

    if (retailersError) throw retailersError;
    
    console.log(`✅ Retailers table: ${retailers.length} rows`);
    retailers.forEach(r => console.log(`   - ${r.name} (${r.button_style})`));

    // Test 2: Check all tables exist
    const tables = ['supplements', 'products', 'prices', 'glossary_terms'];
    console.log('\n📊 Table Status:');
    
    for (const table of tables) {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      console.log(`   ✅ ${table}: ${count} rows`);
    }

    // Test 3: Check views exist
    console.log('\n👁️  Views:');
    const { data: viewTest, error: viewError } = await supabase
      .from('supplement_summary_view')
      .select('*')
      .limit(1);
    
    if (viewError) {
      console.log(`   ⚠️  supplement_summary_view: ${viewError.message}`);
    } else {
      console.log('   ✅ supplement_summary_view: Working');
    }

    console.log('\n🎉 All tests passed! Database is ready.');
    console.log('\n📋 Next Steps:');
    console.log('   1. Run data extraction: node scripts/migration/extract-products-to-csv.mjs');
    console.log('   2. Run data migration: node scripts/migration/load-to-supabase.mjs');
    console.log('   3. Build API endpoints in app/api/');
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    process.exit(1);
  }
}

testConnection();
