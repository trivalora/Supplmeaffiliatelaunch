// Inspect DSLD sqlite schema and pull serving/active-ingredient info for a product
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function main() {
  const dbPath = process.env.DSLD_DB_PATH || '../input/Supplement Databases (trivalora)/DSLD db/dsld.sqlite';
  const db = await open({ filename: dbPath, driver: sqlite3.Database });

  console.log('DB Path:', dbPath);

  // List tables
  const tables = await db.all("SELECT name, type FROM sqlite_master WHERE type IN ('table','view') ORDER BY name");
  console.log('Tables/views (sample):', tables.slice(0, 50));

  // Show schema for likely tables
  async function showSchema(table: string) {
    try {
      const cols = await db.all(`PRAGMA table_info(${table})`);
      console.log(`\nSchema for ${table}:`);
      console.table(cols.map((c: any) => ({ cid: c.cid, name: c.name, type: c.type, notnull: c.notnull, dflt_value: c.dflt_value })));
    } catch (e) {
      // ignore
    }
  }

  await showSchema('product_overview');
  await showSchema('dietary_supplement_facts');
  await showSchema('label_statements');

  // Query a few rows matching Ashwagandha
  // Note: product_overview columns use brand_name and net_contents; dietary_supplement_facts has ingredient and amount_per_serving
  const q2 = `SELECT po.dsld_id, po.product_name, po.brand_name, po.net_contents, po.serving_size AS overview_serving_size,
                      dsf.ingredient, dsf.amount_per_serving, dsf.amount_per_serving_unit
              FROM product_overview po
              LEFT JOIN dietary_supplement_facts dsf ON dsf.dsld_id = po.dsld_id
              WHERE LOWER(po.product_name) LIKE '%ashwagandha%' LIMIT 200`;
  try {
    const rows = await db.all(q2);
    console.log('\nSample rows for Ashwagandha (joined):', rows.length);
    rows.forEach((r: any, i: number) => console.log(i + 1, r));
  } catch (err) {
    console.error('Join query failed - trying simpler product_overview select');
    const rows2 = await db.all("SELECT dsld_id, product_name, brand, size, package_quantity FROM product_overview WHERE LOWER(product_name) LIKE '%ashwagandha%' LIMIT 50");
    console.log('product_overview matches:', rows2.length);
    rows2.forEach((r: any, i: number) => console.log(i + 1, r));
  }

  await db.close();
}

main().catch(err => { console.error(err); process.exit(1); });
