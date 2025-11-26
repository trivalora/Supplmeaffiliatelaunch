import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rdraqlnxypwlhkhngyjk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw',
  { db: { schema: 'api' }}
);

const { data: product } = await supabase
  .from('products')
  .select('id, json_id, dsld_id, brand, product_name')
  .limit(1)
  .single();

console.log('Product columns:', Object.keys(product || {}).join(', '));
console.log('\nSample:', JSON.stringify(product, null, 2));
