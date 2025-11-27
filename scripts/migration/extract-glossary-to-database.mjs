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
 * Extract expanded explanation JSX
 * Matches: expandedExplanation={<>...</>} OR expandedExplanation: (<>...</>)
 */
function extractExpandedExplanation(content) {
  // Try direct prop pattern: expandedExplanation={<>...</>}
  let match = content.match(/expandedExplanation=\{<>([\s\S]*?)<\/>\}/);
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
 * Convert JSX to plain HTML string
 * This is a simple regex-based conversion for common patterns
 */
function convertJSXToHTML(jsxString) {
  if (!jsxString) return null;
  
  let html = jsxString;
  
  // Convert className to class
  html = html.replace(/className=/g, 'class=');
  
  // Remove any React-specific attributes
  html = html.replace(/\s+key="[^"]*"/g, '');
  
  // Clean up excessive whitespace while preserving structure
  html = html.replace(/\n\s+\n/g, '\n\n');
  
  return html;
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
    
    const term = extractTerm(content);
    const slug = extractSlug(content, file);
    const definition = extractDefinition(content);
    const expandedExplanation = extractExpandedExplanation(content);
    const relatedTerms = extractRelatedTerms(content);
    
    if (!term || !slug || !definition) {
      console.log(`  ❌ ${file}: Missing required fields (term: ${!!term}, slug: ${!!slug}, def: ${!!definition})`);
      errorCount++;
      continue;
    }
    
    const htmlContent = convertJSXToHTML(expandedExplanation);
    
    terms.push({
      file,
      slug,
      term,
      definition,
      expanded_explanation: htmlContent,
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
    sql += `  definition,\n`;
    sql += `  expanded_explanation,\n`;
    sql += `  meta_title,\n`;
    sql += `  meta_description\n`;
    sql += `) VALUES (\n`;
    sql += `  '${escapeSql(term.slug)}',\n`;
    sql += `  '${escapeSql(term.term)}',\n`;
    sql += `  ${term.abbreviation ? `'${escapeSql(term.abbreviation)}'` : 'NULL'},\n`;
    sql += `  '${escapeSql(term.definition)}',\n`;
    sql += `  ${term.expanded_explanation ? `'${escapeSql(term.expanded_explanation)}'` : 'NULL'},\n`;
    sql += `  ${term.meta_title ? `'${escapeSql(term.meta_title)}'` : 'NULL'},\n`;
    sql += `  ${term.meta_description ? `'${escapeSql(term.meta_description)}'` : 'NULL'}\n`;
    sql += `);\n\n`;
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
  console.log(`Total terms extracted:        ${terms.length}`);
  console.log(`Terms with abbreviations:     ${terms.filter(t => t.abbreviation).length}`);
  console.log(`Terms with expanded content:  ${terms.filter(t => t.expanded_explanation).length}`);
  console.log(`Terms with related terms:     ${terms.filter(t => t.related_terms && t.related_terms.length > 0).length}`);
  console.log('═'.repeat(60));
  
  // Sample of first 5 terms
  console.log('\n📋 Sample terms (first 5):');
  terms.slice(0, 5).forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.term} (${t.slug})`);
    console.log(`     Definition: ${t.definition.substring(0, 60)}...`);
    if (t.abbreviation) console.log(`     Abbreviation: ${t.abbreviation}`);
    if (t.related_terms.length > 0) console.log(`     Related: ${t.related_terms.join(', ')}`);
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
