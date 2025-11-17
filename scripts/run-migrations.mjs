#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migDir = path.join(__dirname, '../migrations');
const files = fs.readdirSync(migDir).filter(f => /\.sql$/.test(f)).sort();

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, PGSSL } = process.env;
if (!PGHOST) {
  console.error('Missing PG env vars. Copy .env.example -> .env and fill values.');
  process.exit(1);
}

const pool = new Pool({
  host: PGHOST,
  port: PGPORT ? parseInt(PGPORT, 10) : 5432,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  ssl: PGSSL === 'true' ? { rejectUnauthorized: false } : false,
});

async function run() {
  for (const file of files) {
    const full = path.join(migDir, file);
    const sql = fs.readFileSync(full, 'utf8');
    console.log(`\n>> Running migration: ${file}`);
    await pool.query(sql);
  }
  console.log('\nAll migrations applied.');
  await pool.end();
}

run().catch(e => { console.error(e); process.exit(1); });
