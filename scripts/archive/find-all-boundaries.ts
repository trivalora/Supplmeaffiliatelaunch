/**
 * Find Section Boundaries for ALL Input Files
 * 
 * All files (Vitacost, iHerb) were scraped in the same sequential order.
 * This script finds exact boundaries for positional assignment.
 */

import fs from 'fs';
import path from 'path';

// Known scrape order (same for all files)
const SCRAPE_ORDER = [
  'ashwagandha',
  'calcium',
  'collagen',
  'creatine',
  'whey',
  'casein',
  'omega-3',
  'iron',
  'vitamin c',
  'vitamin d',
  'bcaa',
  'prebiotics',
  'probiotics',
  'sulforaphane',  // NOT in our 17 - will skip
  'multivitamin',
  'magnesium',
  'curcumin'
];

const TERM_KEYWORDS: Record<string, string[]> = {
  'ashwagandha': ['ashwagandha', 'ksm-66', 'withania'],
  'calcium': ['calcium'],
  'collagen': ['collagen'],
  'creatine': ['creatine'],
  'whey': ['whey'],
  'casein': ['casein'],
  'omega-3': ['omega', 'fish oil', 'epa', 'dha', 'krill'],
  'iron': ['iron', 'ferrous', 'ferric'],
  'vitamin c': ['vitamin c', 'ascorbic'],
  'vitamin d': ['vitamin d', 'd3', 'cholecalciferol'],
  'bcaa': ['bcaa', 'branched chain', 'amino acid'],
  'prebiotics': ['prebiotic', 'inulin', 'fos', 'gos'],
  'probiotics': ['probiotic', 'lactobacillus', 'bifidobacterium'],
  'sulforaphane': ['sulforaphane', 'broccoli'],
  'multivitamin': ['multivitamin', 'multi-vitamin', 'multi vitamin'],
  'magnesium': ['magnesium'],
  'curcumin': ['curcumin', 'turmeric']
};

function matchesTerm(productName: string, term: string): number {
  const nameLower = productName.toLowerCase();
  const keywords = TERM_KEYWORDS[term] || [term];
  
  for (const kw of keywords) {
    if (nameLower.includes(kw)) {
      return 10; // Strong match
    }
  }
  return 0;
}

function analyzeSectionBatch(products: any[], startIdx: number, batchSize: number = 100): { term: string; score: number } {
  const batch = products.slice(startIdx, startIdx + batchSize);
  const scores: Record<string, number> = {};
  
  for (const term of SCRAPE_ORDER) {
    scores[term] = 0;
    for (const product of batch) {
      scores[term] += matchesTerm(product.product_name, term);
    }
  }
  
  let bestTerm = '';
  let bestScore = 0;
  for (const [term, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestTerm = term;
    }
  }
  
  return { term: bestTerm, score: bestScore };
}

function findBoundaries(data: any[], fileName: string) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📊 Analyzing: ${fileName}`);
  console.log(`Total products: ${data.length}`);
  console.log(`${'='.repeat(70)}\n`);
  
  const boundaries: Array<{ term: string; startIndex: number; endIndex: number; products: number }> = [];
  let currentTerm = '';
  let currentStart = 0;
  
  for (let i = 0; i < data.length; i += 50) {
    const analysis = analyzeSectionBatch(data, i, 150);
    
    if (analysis.term !== currentTerm && analysis.score > 30) {
      if (currentTerm) {
        boundaries.push({
          term: currentTerm,
          startIndex: currentStart,
          endIndex: i,
          products: i - currentStart
        });
        console.log(`✓ ${currentTerm.padEnd(15)} | ${String(currentStart).padStart(5)}-${String(i - 1).padStart(5)} | ${i - currentStart} products`);
      }
      currentTerm = analysis.term;
      currentStart = i;
    }
  }
  
  // Add final section
  if (currentTerm) {
    boundaries.push({
      term: currentTerm,
      startIndex: currentStart,
      endIndex: data.length,
      products: data.length - currentStart
    });
    console.log(`✓ ${currentTerm.padEnd(15)} | ${String(currentStart).padStart(5)}-${String(data.length - 1).padStart(5)} | ${data.length - currentStart} products`);
  }
  
  return boundaries;
}

async function main() {
  console.log('\n🔍 Finding Complete Boundary Mappings for All Input Files\n');
  
  const inputDir = '/Users/roxyjune/Downloads/input/product_data';
  const files = {
    'Vitacost.json': 'vitacost',
    'iHerb_ashwaghanda_to_iron.json': 'iherb_ash_to_iron',
    'iHerb_Iron_to_zinc.json': 'iherb_iron_to_zinc'
  };
  
  const allMappings: Record<string, any[]> = {};
  
  for (const [fileName, key] of Object.entries(files)) {
    const filePath = path.join(inputDir, fileName);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${fileName}`);
      continue;
    }
    
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const boundaries = findBoundaries(data, fileName);
    allMappings[key] = boundaries;
  }
  
  // Save all mappings
  const outputPath = '/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/file-boundaries-mapping.json';
  fs.writeFileSync(outputPath, JSON.stringify(allMappings, null, 2));
  
  console.log(`\n✅ Saved complete mappings to: ${outputPath}\n`);
}

main().catch(console.error);
