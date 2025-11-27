#!/usr/bin/env node
import pg from 'pg';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not found in .env.local');
  process.exit(1);
}

console.log('Running migration...');

const client = new pg.Client({ connectionString: DATABASE_URL });

try {
  await client.connect();
  
  const sql = readFileSync('supabase/migrations/20241126_add_dsld_label_columns.sql', 'utf-8');
  await client.query(sql);
  
  console.log('✅ Migration applied successfully!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
} finally {
  await client.end();
}
