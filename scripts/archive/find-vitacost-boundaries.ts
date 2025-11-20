/**
 * Find Vitacost Section Boundaries
 * 
 * Since we know Vitacost was scraped in a specific order, we can find where
 * each supplement section starts by looking for clear transitions.
 */

import fs from 'fs';

// Known scrape order for Vitacost
const SCRAPE_ORDER = [
  'ashwagandha',
  'calcium',
  'collagen',  // scraped as "collagen peptides"
  'creatine',
  'whey',      // scraped as "whey protein"
  'casein',    // scraped as "casein protein"
  'omega-3',
  'iron',
  'vitamin c',
  'vitamin d',
  'bcaa',      // scraped as "bcaas"
  'prebiotics',
  'probiotics',
  'sulforaphane',  // NOTE: Not in our 17 supplement list!
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
  'omega-3': ['omega', 'fish oil', 'epa', 'dha'],
  'iron': ['iron', 'ferrous', 'ferric'],
  'vitamin c': ['vitamin c', 'ascorbic'],
  'vitamin d': ['vitamin d', 'd3', 'cholecalciferol'],
  'bcaa': ['bcaa', 'branched chain'],
  'prebiotics': ['prebiotic', 'inulin', 'fos', 'gos'],
  'probiotics': ['probiotic', 'lactobacillus', 'bifidobacterium'],
  'sulforaphane': ['sulforaphane', 'broccoli'],
  'multivitamin': ['multivitamin', 'multi-vitamin', 'multi vitamin'],
  'magnesium': ['magnesium'],
  'curcumin': ['curcumin', 'turmeric']
};

function matchesTerm(productName: string, term: string): boolean {
  const nameLower = productName.toLowerCase();
  const keywords = TERM_KEYWORDS[term] || [term];
  return keywords.some(kw => nameLower.includes(kw));
}

function analyzeSection(products: any[], startIdx: number, windowSize: number = 50) {
  const window = products.slice(startIdx, startIdx + windowSize);
  const scores: Record<string, number> = {};
  
  for (const term of SCRAPE_ORDER) {
    scores[term] = 0;
    for (const product of window) {
      if (matchesTerm(product.product_name, term)) {
        scores[term]++;
      }
    }
  }
  
  // Find best match
  let bestTerm = '';
  let bestScore = 0;
  for (const [term, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestTerm = term;
    }
  }
  
  return { term: bestTerm, score: bestScore, total: window.length };
}

async function main() {
  console.log('🔍 Finding Vitacost Section Boundaries\n');
  
  const filePath = '/Users/roxyjune/Downloads/input/product_data/Vitacost.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  console.log(`Total products: ${data.length}\n`);
  
  // Search for boundaries using sliding window
  const boundaries: Array<{ term: string; startIndex: number; products: number }> = [];
  let currentTerm = '';
  let currentStart = 0;
  
  for (let i = 0; i < data.length; i += 50) {
    const analysis = analyzeSection(data, i, 100);
    
    if (analysis.term !== currentTerm && analysis.score > 10) {
      if (currentTerm) {
        // Save previous section
        boundaries.push({
          term: currentTerm,
          startIndex: currentStart,
          products: i - currentStart
        });
      }
      currentTerm = analysis.term;
      currentStart = i;
      
      console.log(`📍 Index ${i}: Detected ${analysis.term} (${analysis.score}/${analysis.total} matches)`);
      console.log(`   Sample: ${data[i].product_name.substring(0, 80)}`);
    }
  }
  
  // Add final section
  if (currentTerm) {
    boundaries.push({
      term: currentTerm,
      startIndex: currentStart,
      products: data.length - currentStart
    });
  }
  
  console.log(`\n\n📊 Summary of Detected Boundaries:\n`);
  console.log(`Total sections found: ${boundaries.length}\n`);
  
  let totalProducts = 0;
  for (const section of boundaries) {
    console.log(`${section.term.padEnd(15)} | Index ${String(section.startIndex).padStart(5)} | ${section.products} products`);
    totalProducts += section.products;
  }
  
  console.log(`\nTotal products accounted for: ${totalProducts}/${data.length}`);
  
  // Save boundaries
  const outputPath = '/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/vitacost-boundaries.json';
  fs.writeFileSync(outputPath, JSON.stringify(boundaries, null, 2));
  console.log(`\n✅ Saved boundaries to: ${outputPath}`);
}

main().catch(console.error);
