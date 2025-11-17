// Script to import DSLD supplement data into project SQLite DB
// Usage: node scripts/import-dsld-to-sqlite.ts

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function main() {
  const db = await open({
    filename: process.env.DSLD_DB_PATH || '../input/Supplement Databases (trivalora)/DSLD db/dsld.sqlite',
    driver: sqlite3.Database,
  });

  // Example: create supplements table if not exists
  await db.exec(`CREATE TABLE IF NOT EXISTS supplements (
    id INTEGER PRIMARY KEY,
    name TEXT,
    brand TEXT,
    slug TEXT UNIQUE
  );`);

  // TODO: Import data from DSLD tables into supplements
  // You can use SELECT statements to read from DSLD and INSERT into supplements

  console.log('DSLD import complete');
  await db.close();
}

main().catch(console.error);
