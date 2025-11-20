/**
 * Boundary Detection Script
 * 
 * Identifies sections in input files and matches each section to one of our 17 supplement types
 * based on collective analysis of product names in that section.
 */

import fs from 'fs';
import path from 'path';

// Our 17 supplement types
const SUPPLEMENT_TERMS = [
  'ashwagandha',
  'bcaa',
  'calcium',
  'collagen',
  'creatine',
  'curcumin',
  'iron',
  'magnesium',
  'multivitamin',
  'omega-3',
  'prebiotics',
  'probiotics',
  'protein powder',
  'vitamin c',
  'vitamin d',
  'whey protein',
  'zinc'
];

// Variations for matching (from product-filter.ts)
const TERM_VARIATIONS: Record<string, string[]> = {
  'collagen': ['collagen peptide', 'collagen protein', 'hydrolyzed collagen', 'marine collagen', 'bovine collagen', 'multi collagen'],
  'ashwagandha': ['ksm-66', 'withania', 'ashwaganda'],
  'omega-3': ['omega 3', 'fish oil', 'epa', 'dha', 'krill oil'],
  'bcaa': ['bcaas', 'branched chain', 'amino acid'],
  'creatine': ['creatine monohydrate', 'creatine hcl', 'micronized creatine'],
  'protein powder': ['whey', 'casein', 'plant protein', 'isolate', 'concentrate'],
  'whey protein': ['whey', 'whey isolate', 'whey concentrate'],
  'multivitamin': ['multi-vitamin', 'multi vitamin', 'daily vitamin'],
  'magnesium': ['magnesium citrate', 'magnesium oxide', 'magnesium glycinate'],
  'calcium': ['calcium citrate', 'calcium carbonate'],
  'vitamin d': ['vit d', 'd3', 'cholecalciferol'],
  'vitamin c': ['vit c', 'ascorbic acid'],
  'iron': ['ferrous', 'ferric'],
  'probiotics': ['probiotic', 'probiotic blend', 'cfu'],
  'prebiotics': ['prebiotic', 'prebiotic fiber'],
  'curcumin': ['turmeric', 'curcuma'],
  'zinc': ['zinc picolinate', 'zinc citrate', 'zinc gluconate']
};

interface Product {
  product_name: string;
  [key: string]: any;
}

/**
 * Score how well a product name matches a supplement term
 */
function scoreProductForTerm(productName: string, term: string): number {
  const nameLower = productName.toLowerCase();
  const termLower = term.toLowerCase();
  
  // Exact match
  if (nameLower.includes(termLower)) {
    return 100;
  }
  
  // Check variations
  const variations = TERM_VARIATIONS[term] || [];
  for (const variation of variations) {
    if (nameLower.includes(variation.toLowerCase())) {
      return 80;
    }
  }
  
  return 0;
}

/**
 * Analyze a section of products and determine best matching supplement
 */
function analyzeSectionForBestMatch(products: Product[]): { term: string; confidence: number; details: Record<string, number> } {
  const scores: Record<string, number> = {};
  
  // Initialize scores
  for (const term of SUPPLEMENT_TERMS) {
    scores[term] = 0;
  }
  
  // Score each product against each term
  for (const product of products) {
    for (const term of SUPPLEMENT_TERMS) {
      scores[term] += scoreProductForTerm(product.product_name, term);
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
  
  const confidence = bestScore / (products.length * 100);
  
  return {
    term: bestTerm,
    confidence,
    details: scores
  };
}

/**
 * Detect boundaries where products change significantly
 */
function detectBoundaries(products: Product[], windowSize: number = 10):number[] {
  const boundaries: number[] = [0]; // Always start at 0
  
  for (let i = windowSize; i < products.length - windowSize; i++) {
    // Analyze window before and after this point
    const before = products.slice(Math.max(0, i - windowSize), i);
    const after = products.slice(i, Math.min(products.length, i + windowSize));
    
    const beforeMatch = analyzeSectionForBestMatch(before);
    const afterMatch = analyzeSectionForBestMatch(after);
    
    // If the best match changes significantly, this is a boundary
    if (beforeMatch.term !== afterMatch.term && beforeMatch.confidence > 0.3 && afterMatch.confidence > 0.3) {
      boundaries.push(i);
    }
  }
  
  boundaries.push(products.length); // Always end at length
  
  return boundaries;
}

/**
 * Analyze a file and create section mappings
 */
function analyzeFile(filePath: string):{
  file: string;
  totalProducts: number;
  sections: Array<{
    startIndex: number;
    endIndex: number;
    count: number;
    supplement: string;
    confidence: number;
    sampleProducts: string[];
  }>;
} {
  console.log(`\n📊 Analyzing: ${path.basename(filePath)}`);
  
  const data: Product[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log(`   Total products: ${data.length}`);
  
  // Detect boundaries
  const boundaries = detectBoundaries(data, 15);
  console.log(`   Detected ${boundaries.length - 1} sections`);
  
  const sections = [];
  
  // Analyze each section
  for (let i = 0; i < boundaries.length - 1; i++) {
    const startIndex = boundaries[i];
    const endIndex = boundaries[i + 1];
    const sectionProducts = data.slice(startIndex, endIndex);
    
    const match = analyzeSectionForBestMatch(sectionProducts);
    
    // Get sample products
    const sampleProducts = sectionProducts
      .slice(0, 5)
      .map(p => p.product_name);
    
    sections.push({
      startIndex,
      endIndex,
      count: sectionProducts.length,
      supplement: match.term,
      confidence: match.confidence,
      sampleProducts
    });
    
    console.log(`\n   📌 Section ${i + 1}: Indices ${startIndex}-${endIndex - 1}`);
    console.log(`      Products: ${sectionProducts.length}`);
    console.log(`      Best match: ${match.term} (${(match.confidence * 100).toFixed(1)}% confidence)`);
    console.log(`      Samples:`);
    sampleProducts.forEach((name, idx) => {
      console.log(`        ${idx + 1}. ${name.substring(0, 80)}${name.length > 80 ? '...' : ''}`);
    });
  }
  
  return {
    file: path.basename(filePath),
    totalProducts: data.length,
    sections
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Supplement Boundary Detection and Section Analysis\n');
  console.log('This script identifies sections in files and matches them to supplement types\n');
  
  const inputDir = '/Users/roxyjune/Downloads/input/product_data';
  const files = [
    'iHerb_ashwaghanda_to_iron.json',
    'iHerb_Iron_to_zinc.json',
    'Vitacost.json'
  ];
  
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(inputDir, file);
    if (fs.existsSync(filePath)) {
      const result = analyzeFile(filePath);
      results.push(result);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  // Save results
  const outputPath = '/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/detected-boundaries.json';
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log(`\n\n✅ Analysis complete! Results saved to: ${outputPath}`);
  console.log('\n📋 Summary:');
  for (const result of results) {
    console.log(`\n${result.file}:`);
    console.log(`  Total products: ${result.totalProducts}`);
    console.log(`  Sections found: ${result.sections.length}`);
    result.sections.forEach((section, idx) => {
      console.log(`    ${idx + 1}. ${section.supplement}: ${section.count} products (indices ${section.startIndex}-${section.endIndex - 1})`);
    });
  }
}

main().catch(console.error);
