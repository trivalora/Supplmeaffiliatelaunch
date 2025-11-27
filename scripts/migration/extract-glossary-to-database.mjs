#!/usr/bin/env node

/**
 * Glossary Data Extraction Script
 * 
 * This script extracts glossary term data from React components and generates
 * a SQL migration file to populate the api.glossary_terms table.
 * 
 * Data sources:
 * 1. React components (src/components/pages/glossary/*.tsx) - Primary source
 * 2. Route config (src/routes.config.ts) - Metadata
 * 3. Tooltip data (src/lib/glossaryData.ts) - Additional info
 * 
 * Usage:
 *   node scripts/migration/extract-glossary-to-database.mjs
 * 
 * Output:
 *   supabase/migrations/20251127120000_seed_glossary_terms.sql
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const GLOSSARY_DIR = path.join(ROOT_DIR, 'src/components/pages/glossary');
const ROUTES_FILE = path.join(ROOT_DIR, 'src/routes.config.ts');
const DATA_FILE = path.join(ROOT_DIR, 'src/lib/glossaryData.ts');
const OUTPUT_FILE = path.join(ROOT_DIR, 'supabase/migrations/20251127120000_seed_glossary_terms.sql');

console.log('🚀 Glossary Data Extraction Starting...\n');

/**
 * Extract term name from component
 * Matches: term="Effect Size" OR term: "Effect Size"
 */
function extractTerm(content) {
  // Try direct prop pattern first
  let match = content.match(/term="([^"]+)"/);
  if (match) return match[1];
  
  // Try content object pattern
  match = content.match(/term:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/**
 * Extract slug from component or infer from filename
 * Matches: currentPage="effectsize"
 */
function extractSlug(content, filename) {
  const match = content.match(/currentPage="([^"]+)"/);
  if (match) return match[1];
  
  // Fallback: infer from filename (e.g., EffectSizePage.tsx → effectsize)
  if (filename) {
    const slug = filename
      .replace(/Page\.tsx$/, '')
      .replace(/([A-Z])/g, (match, p1, offset) => offset > 0 ? match.toLowerCase() : match.toLowerCase());
    return slug;
  }
  return null;
}

/**
 * Extract definition from component
 * Matches: definition="..." OR definition: "..."
 */
function extractDefinition(content) {
  // Try direct prop pattern first (handles multi-line with escaped quotes)
  let match = content.match(/definition="([^"]*(?:\\"[^"]*)*[^"]*)"/);
  if (match) {
    return match[1].replace(/\\"/g, '"');
  }
  
  // Try content object pattern (simpler, usually single line)
  match = content.match(/definition:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

/**
 * Extract string content from props
 * Matches both direct props and content objects
 * Handles: propName="..." OR propName: "..."
 */
function extractStringProp(content, propName) {
  // Try direct prop pattern first: propName="..."
  // Use non-greedy match and handle escaped quotes
  let match = content.match(new RegExp(`${propName}="([^"]*(?:\\\\"[^"]*)*[^"]*)"`));
  if (match) {
    return match[1].replace(/\\"/g, '"').trim();
  }
  
  // Try content object pattern: propName: "..."
  match = content.match(new RegExp(`${propName}:\\s*"([^"]+)"`));
  if (match) {
    return match[1].trim();
  }
  
  return null;
}

/**
 * Extract expanded explanation JSX
 * Matches: expandedExplanation={<>...</>} OR expandedExplanation: (<>...</>)
 * Also matches: detailedExplanation="..." (string version)
 */
function extractExpandedExplanation(content) {
  // First, try detailedExplanation as a string (most common)
  let match = extractStringProp(content, 'detailedExplanation');
  if (match) return match;
  
  // Try expandedExplanation as JSX: expandedExplanation={<>...</>}
  match = content.match(/expandedExplanation=\{<>([\s\S]*?)<\/>\}/);
  if (match) {
    return match[1].trim();
  }
  
  // Try content object pattern: expandedExplanation: (<>...</>)
  match = content.match(/expandedExplanation:\s*\(\s*<>([\s\S]*?)<\/>\s*\)/);
  if (match) {
    return match[1].trim();
  }
  
  return null;
}

/**
 * Extract examples array
 * Matches: examples={["...", "..."]} OR examples: ["...", "..."]
 */
function extractExamples(content) {
  // Try direct prop pattern: examples={["...", "..."]}
  let match = content.match(/examples=\{(\[[^\]]*\])\}/);
  if (!match) {
    // Try content object pattern with multiline support
    match = content.match(/examples:\s*\[([\s\S]*?)\]/);
  }
  
  if (match) {
    try {
      const arrayStr = match[1] || match[0];
      // Clean up for JSON parsing
      let cleaned = arrayStr.trim();
      
      // Handle multiline arrays by removing line breaks and excess whitespace
      cleaned = cleaned.replace(/\s*\n\s*/g, ' ').trim();
      
      // Ensure it starts with [ and ends with ]
      if (!cleaned.startsWith('[')) cleaned = '[' + cleaned;
      if (!cleaned.endsWith(']')) cleaned = cleaned + ']';
      
      // Replace single quotes with double quotes for JSON
      // But preserve quotes inside strings
      cleaned = cleaned.replace(/'/g, '"');
      
      // Handle HTML entities like &gt;
      cleaned = cleaned.replace(/&gt;/g, '>').replace(/&lt;/g, '<');
      
      const parsed = JSON.parse(cleaned);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn(`    ⚠️  Failed to parse examples array: ${e.message}`);
    }
  }
  
  return [];
}

/**
 * Extract related terms array
 * Matches multiple patterns:
 * - relatedTerms={['term1', 'term2']}
 * - relatedTerms: ["term1", "term2"]
 * - relatedTerms: [{ term: "...", key: "..." }, ...]
 */
function extractRelatedTerms(content) {
  // Try direct prop pattern first
  let match = content.match(/relatedTerms=\{(\[[^\]]+\])\}/);
  if (!match) {
    // Try content object pattern (may be multiline with objects)
    match = content.match(/relatedTerms:\s*\[([\s\S]*?)\]/);
    if (match) {
      // Handle object format: extract 'key' or 'page' values
      const keyMatches = [...match[1].matchAll(/(?:key|page):\s*['"]([^'"]+)['"]/g)];
      if (keyMatches.length > 0) {
        return keyMatches.map(m => m[1]);
      }
    }
  }
  
  if (match) {
    try {
      // Parse simple array: ['term1', 'term2'] → ['term1', 'term2']
      const arrayStr = match[1] || match[0];
      // Clean up and try to parse
      const cleaned = arrayStr.trim().replace(/^[\[\{]/, '[').replace(/[\]\}]$/, ']').replace(/'/g, '"');
      if (cleaned.startsWith('[') && cleaned.endsWith(']') && !cleaned.includes('{')) {
        return JSON.parse(cleaned);
      }
    } catch (e) {
      // Silently skip - already extracted from object format above
    }
  }
  return [];
}

/**
 * Clean up content string
 * Remove excessive whitespace while preserving paragraph breaks
 */
function cleanContent(content) {
  if (!content) return null;
  
  return content
    .replace(/\n\s+\n/g, '\n\n')  // Normalize paragraph breaks
    .trim();
}

/**
 * Parse routes.config.ts to extract route metadata
 */
function parseRoutesConfig() {
  console.log('📖 Reading routes.config.ts...');
  const content = fs.readFileSync(ROUTES_FILE, 'utf-8');
  
  const routeData = {};
  
  // Extract GLOSSARY_ROUTES section
  const glossarySection = content.match(/export const GLOSSARY_ROUTES: RouteConfig\[\] = \[([\s\S]*?)\];/);
  if (!glossarySection) {
    console.warn('  ⚠️  Could not find GLOSSARY_ROUTES in routes.config.ts');
    return routeData;
  }
  
  // Parse each route entry
  const routeRegex = /\{\s*key:\s*'([^']+)',\s*title:\s*'([^']+)',(?:\s*abbreviation:\s*'([^']*)',)?\s*description:\s*'([^']+)',/g;
  let match;
  
  while ((match = routeRegex.exec(glossarySection[1])) !== null) {
    const [, key, title, abbreviation, description] = match;
    routeData[key] = {
      key,
      title,
      abbreviation: abbreviation || null,
      description
    };
  }
  
  console.log(`  ✅ Parsed ${Object.keys(routeData).length} routes from config`);
  return routeData;
}

/**
 * Parse glossaryData.ts to extract tooltip data
 */
function parseGlossaryData() {
  console.log('📖 Reading glossaryData.ts...');
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  
  const tooltipData = {};
  
  // Extract GLOSSARY_DATA section
  const dataSection = content.match(/export const GLOSSARY_DATA: Record<string, GlossaryTermData> = \{([\s\S]*?)\};/);
  if (!dataSection) {
    console.warn('  ⚠️  Could not find GLOSSARY_DATA in glossaryData.ts');
    return tooltipData;
  }
  
  // Parse each entry
  const entryRegex = /(\w+):\s*\{\s*key:\s*'([^']+)',\s*title:\s*'([^']+)',(?:\s*abbreviation:\s*'([^']*)',)?\s*summary:\s*'([^']+)'/g;
  let match;
  
  while ((match = entryRegex.exec(dataSection[1])) !== null) {
    const [, key, , title, abbreviation, summary] = match;
    tooltipData[key] = {
      key,
      title,
      abbreviation: abbreviation || null,
      summary
    };
  }
  
  console.log(`  ✅ Parsed ${Object.keys(tooltipData).length} tooltips from data file`);
  return tooltipData;
}

/**
 * Extract all glossary terms from React components
 */
function extractGlossaryTerms() {
  console.log('🔍 Extracting glossary terms from React components...\n');
  
  const terms = [];
  const files = fs.readdirSync(GLOSSARY_DIR).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
  
  console.log(`Found ${files.length} component files\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    const filePath = path.join(GLOSSARY_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract required fields
    const term = extractTerm(content);
    const slug = extractSlug(content, file);
    const definition = extractDefinition(content);
    
    if (!term || !slug || !definition) {
      console.log(`  ❌ ${file}: Missing required fields (term: ${!!term}, slug: ${!!slug}, def: ${!!definition})`);
      errorCount++;
      continue;
    }
    
    // Extract optional content fields
    const abbreviation = extractStringProp(content, 'abbreviation');
    const pronunciation = extractStringProp(content, 'pronunciation');
    const expandedExplanation = extractExpandedExplanation(content);
    const whyItMatters = extractStringProp(content, 'whyItMatters');
    const simpleExplanation = extractStringProp(content, 'simpleExplanation');
    const technicalExplanation = extractStringProp(content, 'technicalExplanation');
    const realWorldContext = extractStringProp(content, 'realWorldContext');
    const keyPoints = extractStringProp(content, 'keyPoints');
    const examples = extractExamples(content);
    const relatedTerms = extractRelatedTerms(content);
    
    terms.push({
      file,
      slug,
      term,
      abbreviation,
      pronunciation,
      definition,
      expanded_explanation: expandedExplanation,
      why_it_matters: whyItMatters,
      simple_explanation: simpleExplanation,
      technical_explanation: technicalExplanation,
      real_world_context: realWorldContext,
      examples,
      key_points: keyPoints,
      related_terms: relatedTerms
    });
    
    successCount++;
    if (successCount % 50 === 0) {
      console.log(`  ✅ Processed ${successCount} terms...`);
    }
  }
  
  console.log(`\n✅ Successfully extracted ${successCount} terms`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} files had errors\n`);
  }
  
  return terms;
}

/**
 * Enrich terms with metadata from route config and tooltip data
 */
function enrichTerms(terms, routeData, tooltipData) {
  console.log('\n📝 Enriching terms with metadata...');
  
  terms.forEach(term => {
    // Add route metadata
    const route = routeData[term.slug];
    if (route) {
      if (route.abbreviation && !term.abbreviation) {
        term.abbreviation = route.abbreviation;
      }
      term.meta_title = `${term.term} - Suppl.me Glossary`;
      term.meta_description = route.description || term.definition.substring(0, 155);
    }
    
    // Add tooltip metadata (fallback)
    const tooltip = tooltipData[term.slug];
    if (tooltip && !term.abbreviation) {
      term.abbreviation = tooltip.abbreviation;
    }
    
    // Ensure meta_description is not too long (160 chars max)
    if (term.meta_description && term.meta_description.length > 160) {
      term.meta_description = term.meta_description.substring(0, 157) + '...';
    }
  });
  
  console.log('  ✅ Enrichment complete');
}

/**
 * Escape SQL strings
 */
function escapeSql(str) {
  if (!str) return '';
  // Escape single quotes by doubling them
  return str.replace(/'/g, "''");
}

/**
 * Generate SQL INSERT statements
 */
function generateSQL(terms) {
  console.log('\n📝 Generating SQL migration file...');
  
  let sql = `-- Seed Glossary Terms
-- Generated: ${new Date().toISOString()}
-- This file inserts ${terms.length} glossary terms into the api.glossary_terms table

BEGIN;

-- Disable triggers for faster insertion
ALTER TABLE api.glossary_terms DISABLE TRIGGER ALL;

`;

  // Sort terms alphabetically by slug for consistency
  terms.sort((a, b) => a.slug.localeCompare(b.slug));
  
  terms.forEach((term, index) => {
    sql += `-- ${index + 1}. ${term.term}\n`;
    sql += `INSERT INTO api.glossary_terms (\n`;
    sql += `  slug,\n`;
    sql += `  term,\n`;
    sql += `  abbreviation,\n`;
    sql += `  pronunciation,\n`;
    sql += `  definition,\n`;
    sql += `  expanded_explanation,\n`;
    sql += `  why_it_matters,\n`;
    sql += `  simple_explanation,\n`;
    sql += `  technical_explanation,\n`;
    sql += `  real_world_context,\n`;
    sql += `  examples,\n`;
    sql += `  key_points,\n`;
    sql += `  meta_title,\n`;
    sql += `  meta_description\n`;
    sql += `) VALUES (\n`;
    sql += `  '${escapeSql(term.slug)}',\n`;
    sql += `  '${escapeSql(term.term)}',\n`;
    sql += `  ${term.abbreviation ? `'${escapeSql(term.abbreviation)}'` : 'NULL'},\n`;
    sql += `  ${term.pronunciation ? `'${escapeSql(term.pronunciation)}'` : 'NULL'},\n`;
    sql += `  '${escapeSql(term.definition)}',\n`;
    sql += `  ${term.expanded_explanation ? `'${escapeSql(term.expanded_explanation)}'` : 'NULL'},\n`;
    sql += `  ${term.why_it_matters ? `'${escapeSql(term.why_it_matters)}'` : 'NULL'},\n`;
    sql += `  ${term.simple_explanation ? `'${escapeSql(term.simple_explanation)}'` : 'NULL'},\n`;
    sql += `  ${term.technical_explanation ? `'${escapeSql(term.technical_explanation)}'` : 'NULL'},\n`;
    sql += `  ${term.real_world_context ? `'${escapeSql(term.real_world_context)}'` : 'NULL'},\n`;
    sql += `  ${term.examples && term.examples.length > 0 ? `ARRAY[${term.examples.map(ex => `'${escapeSql(ex)}'`).join(', ')}]` : 'ARRAY[]::text[]'},\n`;
    sql += `  ${term.key_points ? `'${escapeSql(term.key_points)}'` : 'NULL'},\n`;
    sql += `  ${term.meta_title ? `'${escapeSql(term.meta_title)}'` : 'NULL'},\n`;
    sql += `  ${term.meta_description ? `'${escapeSql(term.meta_description)}'` : 'NULL'}\n`;
    sql += `)\n`;
    sql += `ON CONFLICT (slug) DO UPDATE SET\n`;
    sql += `  term = EXCLUDED.term,\n`;
    sql += `  abbreviation = EXCLUDED.abbreviation,\n`;
    sql += `  pronunciation = EXCLUDED.pronunciation,\n`;
    sql += `  definition = EXCLUDED.definition,\n`;
    sql += `  expanded_explanation = EXCLUDED.expanded_explanation,\n`;
    sql += `  why_it_matters = EXCLUDED.why_it_matters,\n`;
    sql += `  simple_explanation = EXCLUDED.simple_explanation,\n`;
    sql += `  technical_explanation = EXCLUDED.technical_explanation,\n`;
    sql += `  real_world_context = EXCLUDED.real_world_context,\n`;
    sql += `  examples = EXCLUDED.examples,\n`;
    sql += `  key_points = EXCLUDED.key_points,\n`;
    sql += `  meta_title = EXCLUDED.meta_title,\n`;
    sql += `  meta_description = EXCLUDED.meta_description,\n`;
    sql += `  updated_at = CURRENT_TIMESTAMP;\n\n`;
  });
  
  // Generate related terms updates (second pass)
  sql += `-- Update related terms (links between glossary entries)\n`;
  sql += `-- Using a second pass to ensure all UUIDs exist\n\n`;
  
  const termsWithRelations = terms.filter(t => t.related_terms && t.related_terms.length > 0);
  
  if (termsWithRelations.length > 0) {
    termsWithRelations.forEach(term => {
      const relatedSlugs = term.related_terms.map(s => `'${escapeSql(s)}'`).join(', ');
      sql += `UPDATE api.glossary_terms\n`;
      sql += `SET related_terms = ARRAY(\n`;
      sql += `  SELECT id FROM api.glossary_terms WHERE slug IN (${relatedSlugs})\n`;
      sql += `)\n`;
      sql += `WHERE slug = '${escapeSql(term.slug)}';\n\n`;
    });
  } else {
    sql += `-- No related terms to update\n\n`;
  }
  
  sql += `-- Re-enable triggers
ALTER TABLE api.glossary_terms ENABLE TRIGGER ALL;

COMMIT;

-- Verify insertion
SELECT COUNT(*) as total_terms FROM api.glossary_terms;
`;

  return sql;
}

/**
 * Generate summary report
 */
function generateReport(terms) {
  console.log('\n📊 Extraction Summary Report\n');
  console.log('═'.repeat(60));
  console.log(`Total terms extracted:              ${terms.length}`);
  console.log(`Terms with abbreviations:           ${terms.filter(t => t.abbreviation).length} (${(terms.filter(t => t.abbreviation).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with pronunciation:           ${terms.filter(t => t.pronunciation).length} (${(terms.filter(t => t.pronunciation).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with expanded explanation:    ${terms.filter(t => t.expanded_explanation).length} (${(terms.filter(t => t.expanded_explanation).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with why it matters:          ${terms.filter(t => t.why_it_matters).length} (${(terms.filter(t => t.why_it_matters).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with simple explanation:      ${terms.filter(t => t.simple_explanation).length} (${(terms.filter(t => t.simple_explanation).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with examples:                ${terms.filter(t => t.examples && t.examples.length > 0).length} (${(terms.filter(t => t.examples && t.examples.length > 0).length / terms.length * 100).toFixed(1)}%)`);
  console.log(`Terms with related terms:           ${terms.filter(t => t.related_terms && t.related_terms.length > 0).length} (${(terms.filter(t => t.related_terms && t.related_terms.length > 0).length / terms.length * 100).toFixed(1)}%)`);
  console.log('═'.repeat(60));
  
  // Content completeness
  const completeTerms = terms.filter(t => 
    t.expanded_explanation || t.why_it_matters || (t.examples && t.examples.length > 0)
  );
  console.log(`\n✅ Complete terms (ready for database):  ${completeTerms.length} (${(completeTerms.length / terms.length * 100).toFixed(1)}%)`);
  console.log(`⚠️  Basic terms (definition only):       ${terms.length - completeTerms.length} (${((terms.length - completeTerms.length) / terms.length * 100).toFixed(1)}%)`);
  
  // Sample of first 5 terms
  console.log('\n📋 Sample terms (first 5):');
  terms.slice(0, 5).forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.term} (${t.slug})`);
    console.log(`     Definition: ${t.definition.substring(0, 60)}...`);
    if (t.abbreviation) console.log(`     Abbreviation: ${t.abbreviation}`);
    if (t.expanded_explanation) console.log(`     Content: ${t.expanded_explanation.substring(0, 60)}...`);
    if (t.examples && t.examples.length > 0) console.log(`     Examples: ${t.examples.length}`);
    if (t.related_terms && t.related_terms.length > 0) console.log(`     Related: ${t.related_terms.join(', ')}`);
    console.log();
  });
}

/**
 * Main execution
 */
async function main() {
  try {
    // Extract data from all sources
    const terms = extractGlossaryTerms();
    const routeData = parseRoutesConfig();
    const tooltipData = parseGlossaryData();
    
    // Enrich terms with metadata
    enrichTerms(terms, routeData, tooltipData);
    
    // Generate SQL
    const sql = generateSQL(terms);
    
    // Write to file
    fs.writeFileSync(OUTPUT_FILE, sql, 'utf-8');
    console.log(`\n✅ SQL migration file created: ${OUTPUT_FILE}`);
    console.log(`   File size: ${(sql.length / 1024).toFixed(2)} KB`);
    
    // Generate report
    generateReport(terms);
    
    console.log('\n🎉 Extraction complete!');
    console.log('\nNext steps:');
    console.log('  1. Review the SQL file: supabase/migrations/20251127120000_seed_glossary_terms.sql');
    console.log('  2. Apply migration via Supabase SQL Editor or CLI');
    console.log('  3. Run validation: node scripts/migration/validate-glossary-data.mjs');
    
  } catch (error) {
    console.error('\n❌ Error during extraction:', error);
    process.exit(1);
  }
}

main();
