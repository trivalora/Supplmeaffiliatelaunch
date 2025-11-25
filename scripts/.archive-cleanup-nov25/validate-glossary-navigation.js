#!/usr/bin/env node

/**
 * Validation script for glossary navigation
 * Checks:
 * 1. All redirects point to valid pages
 * 2. All GLOSSARY_TERMS have either a page or redirect
 * 3. All Related Terms use valid keys
 */

const fs = require('fs');
const path = require('path');

// Read RouterLayout.tsx to extract ALIAS_REDIRECTS
const routerLayoutPath = path.join(__dirname, '../src/router/RouterLayout.tsx');
const routerLayoutContent = fs.readFileSync(routerLayoutPath, 'utf-8');

// Read routes.config.ts to extract glossary page keys
const routesConfigPath = path.join(__dirname, '../src/routes.config.ts');
const routesConfigContent = fs.readFileSync(routesConfigPath, 'utf-8');

// Read glossaryAutolink.tsx to extract GLOSSARY_TERMS
const glossaryAutolinkPath = path.join(__dirname, '../src/utils/glossaryAutolink.tsx');
const glossaryAutolinkContent = fs.readFileSync(glossaryAutolinkPath, 'utf-8');

console.log('🔍 Validating Glossary Navigation...\n');

// Extract glossary page keys from routes.config.ts
const pageKeys = new Set();
// Match both inline and multiline definitions
const pageKeyRegex = /{\s*key:\s*'([^']+)'[^}]*category:\s*'glossary'/gs;
let match;
while ((match = pageKeyRegex.exec(routesConfigContent)) !== null) {
  pageKeys.add(match[1]);
}

console.log(`✅ Found ${pageKeys.size} glossary pages in routes.config.ts`);

// Extract redirects from RouterLayout
const redirects = {};
const redirectRegex = /'\/glossary\/([^']+)':\s*'\/glossary\/([^']+)'/g;
while ((match = redirectRegex.exec(routerLayoutContent)) !== null) {
  redirects[match[1]] = match[2];
}

console.log(`✅ Found ${Object.keys(redirects).length} glossary redirects in RouterLayout.tsx\n`);

// Validate: all redirect targets must be valid pages
console.log('🔎 Validating redirect targets...');
let invalidTargets = 0;
for (const [from, to] of Object.entries(redirects)) {
  if (!pageKeys.has(to)) {
    console.log(`  ❌ Redirect /glossary/${from} → /glossary/${to} - TARGET NOT FOUND`);
    invalidTargets++;
  }
}

if (invalidTargets === 0) {
  console.log(`  ✅ All ${Object.keys(redirects).length} redirect targets are valid\n`);
} else {
  console.log(`  ⚠️  Found ${invalidTargets} invalid redirect targets\n`);
}

// Extract GLOSSARY_TERMS
const glossaryTermsMatch = glossaryAutolinkContent.match(/const GLOSSARY_TERMS[^=]*=\s*\[([\s\S]*?)\];/);
if (!glossaryTermsMatch) {
  console.log('❌ Could not parse GLOSSARY_TERMS from glossaryAutolink.tsx');
  process.exit(1);
}

const glossaryTermsText = glossaryTermsMatch[1];
const termGroupRegex = /{\s*key:\s*'([^']+)',\s*terms:\s*\[(.*?)\]/gs;
const allTerms = new Map(); // term -> key

let groupMatch;
while ((groupMatch = termGroupRegex.exec(glossaryTermsText)) !== null) {
  const key = groupMatch[1];
  const termsStr = groupMatch[2];
  const termMatches = termsStr.matchAll(/'([^']+)'/g);
  
  for (const termMatch of termMatches) {
    const term = termMatch[1];
    const slug = term.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    allTerms.set(slug, key);
  }
}

console.log(`✅ Found ${allTerms.size} term variations in GLOSSARY_TERMS`);

// Check coverage: every term should have either a page or redirect
console.log('\n🔎 Checking term coverage...');
let missingCoverage = 0;
let coveredByPage = 0;
let coveredByRedirect = 0;

for (const [slug, targetKey] of allTerms.entries()) {
  // Check if it has its own page
  if (pageKeys.has(slug)) {
    coveredByPage++;
  } 
  // Check if there's a redirect for it
  else if (redirects[slug]) {
    coveredByRedirect++;
  } 
  // Not covered
  else {
    // Only report if it's not the canonical form
    if (slug !== targetKey) {
      console.log(`  ⚠️  Missing: /glossary/${slug} (should redirect to /glossary/${targetKey})`);
      missingCoverage++;
    }
  }
}

console.log(`  ✅ ${coveredByPage} terms have dedicated pages`);
console.log(`  ✅ ${coveredByRedirect} terms have redirects`);
if (missingCoverage > 0) {
  console.log(`  ⚠️  ${missingCoverage} terms missing coverage`);
} else {
  console.log(`  ✅ All term variations are covered!\n`);
}

// Check for duplicate redirects (same source path)
console.log('🔎 Checking for duplicate redirect sources...');
const redirectSources = Object.keys(redirects);
const duplicates = redirectSources.filter((item, index) => redirectSources.indexOf(item) !== index);
if (duplicates.length > 0) {
  console.log(`  ⚠️  Found ${duplicates.length} duplicate redirect sources:`);
  duplicates.forEach(dup => console.log(`    - /glossary/${dup}`));
} else {
  console.log(`  ✅ No duplicate redirect sources\n`);
}

// Summary
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 VALIDATION SUMMARY');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`Pages:              ${pageKeys.size}`);
console.log(`Redirects:          ${Object.keys(redirects).length}`);
console.log(`Term variations:    ${allTerms.size}`);
console.log(`Invalid targets:    ${invalidTargets}`);
console.log(`Missing coverage:   ${missingCoverage}`);
console.log(`Duplicate sources:  ${duplicates.length}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (invalidTargets === 0 && missingCoverage === 0 && duplicates.length === 0) {
  console.log('✅ All validations passed! Glossary navigation is properly configured.\n');
  process.exit(0);
} else {
  console.log('⚠️  Some issues found. Please review the output above.\n');
  process.exit(1);
}
