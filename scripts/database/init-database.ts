/**
 * Initialize Prices Database
 * Creates the database and runs migrations
 */

import { initializeDatabase, getDatabaseStats } from './lib/db-helper';
import { mkdir } from 'fs/promises';
import { join } from 'path';

async function main() {
  console.log('🔧 Initializing prices database...\n');
  
  try {
    // Ensure data directory exists
    const dataDir = join(__dirname, '../data');
    await mkdir(dataDir, { recursive: true });
    console.log('✅ Data directory ready');
    
    // Initialize database
    initializeDatabase();
    
    // Show stats
    const stats = getDatabaseStats();
    console.log('\n📊 Database Statistics:');
    console.log(`   Retailers: ${stats.retailers}`);
    console.log(`   Products: ${stats.products}`);
    console.log(`   Prices: ${stats.prices}`);
    console.log(`   Latest scrape: ${stats.latestScrape || 'None yet'}`);
    
    console.log('\n✨ Database initialization complete!');
    console.log('\nReady to start scraping with:');
    console.log('  npx tsx scripts/test-vitacost-scraperapi.ts');
    
  } catch (error) {
    console.error('\n❌ Error initializing database:', error);
    process.exit(1);
  }
}

main();
