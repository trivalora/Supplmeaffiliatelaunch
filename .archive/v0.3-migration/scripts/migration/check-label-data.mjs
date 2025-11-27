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

async function checkLabelData() {
  const { data } = await supabase
    .from('products')
    .select('id, brand, dsld_product_name, label_data, net_contents')
    .not('label_data', 'is', null)
    .limit(2);
  
  console.log('✅ Products with label_data:');
  data?.forEach(p => {
    console.log('\n---');
    console.log('Brand:', p.brand);
    console.log('DSLD Name:', p.dsld_product_name);
    console.log('Net Contents:', p.net_contents);
    console.log('Label Data type:', typeof p.label_data);
    console.log('Label Data keys:', p.label_data ? Object.keys(p.label_data).join(', ') : 'none');
  });
  
  const { count } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .not('label_data', 'is', null);
    
  console.log(`\n📊 Products with label_data: ${count} of 1663`);
}

checkLabelData();
