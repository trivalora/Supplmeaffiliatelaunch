#!/usr/bin/env node
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

async function checkPricesInStock() {
  console.log('📊 Checking in_stock field in prices table...\n');
  
  const { count: total } = await supabase.from('prices').select('*', { count: 'exact', head: true });
  const { count: inStock } = await supabase.from('prices').select('*', { count: 'exact', head: true }).eq('in_stock', true);
  const { count: notInStock } = await supabase.from('prices').select('*', { count: 'exact', head: true }).eq('in_stock', false);
  const { count: nullStock } = await supabase.from('prices').select('*', { count: 'exact', head: true }).is('in_stock', null);
  
  console.log(`Total prices: ${total}`);
  console.log(`In stock (true): ${inStock}`);
  console.log(`Not in stock (false): ${notInStock}`);
  console.log(`NULL in_stock: ${nullStock}`);
  
  if (nullStock > 0 || notInStock === total) {
    console.log('\n⚠️  PROBLEM: Most/all prices have in_stock=false or NULL');
    console.log('   This is why products are not showing on the site!');
    console.log('\n🔧 FIX: Set all prices to in_stock=true');
    console.log('   Run: node scripts/migration/fix-prices-in-stock.mjs');
  } else {
    console.log('\n✅ in_stock field looks good!');
  }
}

checkPricesInStock();
