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

async function checkColumns() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(1);
  
  if (error) {
    console.error('❌ Error:', error);
    return;
  }
  
  if (data && data[0]) {
    const columns = Object.keys(data[0]).sort();
    console.log('✅ Product columns:', columns.join(', '));
    
    const dslColumns = ['dsld_product_name', 'dsld_brand', 'dsld_content', 'dsld_label_info'];
    console.log('\n📋 DSLD columns check:');
    dslColumns.forEach(col => {
      const exists = col in data[0];
      console.log(`  ${exists ? '✅' : '❌'} ${col}: ${exists ? 'EXISTS' : 'MISSING'}`);
    });
    
    console.log('\n📊 Sample product:');
    console.log('  ID:', data[0].id);
    console.log('  Brand:', data[0].brand);
    console.log('  DSLD Product Name:', data[0].dsld_product_name || 'NULL');
  }
}

checkColumns();
