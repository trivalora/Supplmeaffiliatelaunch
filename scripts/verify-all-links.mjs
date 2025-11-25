#!/usr/bin/env node
/**
 * Comprehensive Link Verification Script
 * Checks all internal links across the site to ensure they resolve correctly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Import routes configuration
const routesConfigPath = path.join(projectRoot, 'src/routes.config.ts');

// Simple regex-based route extraction (since we can't directly import TS)
function extractRoutes() {
  const content = fs.readFileSync(routesConfigPath, 'utf-8');
  
  const routes = new Set();
  
  // Extract paths from knowledgebase and comparison routes
  const pathMatches = content.matchAll(/path:\s*'([^']+)'/g);
  for (const match of pathMatches) {
    routes.add(match[1]);
  }
  
  // Extract glossary routes - they use key as the path segment
  // Pattern: key: 'term' in GLOSSARY_ROUTES section
  const glossarySection = content.split('export const GLOSSARY_ROUTES')[1]?.split('export const')[0];
  if (glossarySection) {
    const glossaryKeys = glossarySection.matchAll(/key:\s*'([^']+)'/g);
    for (const match of glossaryKeys) {
      routes.add(`/glossary/${match[1]}`);
    }
  }
  
  // Extract comparison routes  
  const comparisonSection = content.split('// Comparison Pages')[1]?.split('export const')[0];
  if (comparisonSection) {
    const comparisonMatches = comparisonSection.matchAll(/key:\s*'([^']+)'/g);
    for (const match of comparisonMatches) {
      const key = match[1];
      if (key.endsWith('-comparison')) {
        const supplement = key.replace('-comparison', '');
        routes.add(`/comparison/${supplement}`);
      }
    }
  }
  
  return routes;
}

// Check all TypeScript/TSX files for Link href and navigation calls
function checkLinksInFile(filePath, validRoutes) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];
  
  // Pattern 1: Next.js Link href
  const linkMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of linkMatches) {
    const href = match[1];
    
    // Skip external links
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
      continue;
    }
    
    // Skip dynamic routes with parameters
    if (href.includes('${') || href.includes('[') || href.includes('{')) {
      continue;
    }
    
    // Check if route exists
    if (!validRoutes.has(href)) {
      issues.push({
        file: filePath,
        line: getLineNumber(content, match.index),
        issue: `Link to non-existent route: ${href}`
      });
    }
  }
  
  // Pattern 2: onNavigate calls
  const navMatches = content.matchAll(/onNavigate\(['"]([^'"]+)['"]\)/g);
  for (const match of navMatches) {
    const routeKey = match[1];
    // This would need route key validation - skipping for now as it's more complex
  }
  
  return issues;
}

function getLineNumber(content, index) {
  return content.substring(0, index).split('\n').length;
}

// Recursively find all .tsx and .ts files
function findFiles(dir, pattern = /\.(tsx?|jsx?)$/) {
  const files = [];
  
  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      // Skip node_modules, .next, .git
      if (entry.isDirectory()) {
        if (!['node_modules', '.next', '.git', 'public'].includes(entry.name)) {
          traverse(fullPath);
        }
      } else if (entry.isFile() && pattern.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('[link-verify] Starting comprehensive link verification...\n');

// Extract valid routes
console.log('[link-verify] Extracting valid routes from routes.config.ts...');
const validRoutes = extractRoutes();
console.log(`[link-verify] Found ${validRoutes.size} valid routes\n`);

// Add static routes
validRoutes.add('/');
validRoutes.add('/about');
validRoutes.add('/contact');
validRoutes.add('/methodology');
validRoutes.add('/partner');
validRoutes.add('/privacy-policy');
validRoutes.add('/terms-of-service');
validRoutes.add('/cookie-policy');
validRoutes.add('/legal-notice');
validRoutes.add('/glossary');

// Find all source files
console.log('[link-verify] Scanning source files...');
const sourceFiles = [
  ...findFiles(path.join(projectRoot, 'src')),
  ...findFiles(path.join(projectRoot, 'app'))
];
console.log(`[link-verify] Found ${sourceFiles.length} source files\n`);

// Check each file
console.log('[link-verify] Checking links...\n');
const allIssues = [];

for (const file of sourceFiles) {
  const issues = checkLinksInFile(file, validRoutes);
  allIssues.push(...issues);
}

// Report results
if (allIssues.length === 0) {
  console.log('✓ No broken links found!');
} else {
  console.log(`✗ Found ${allIssues.length} potential link issues:\n`);
  
  // Group by file
  const issuesByFile = {};
  for (const issue of allIssues) {
    const relativePath = path.relative(projectRoot, issue.file);
    if (!issuesByFile[relativePath]) {
      issuesByFile[relativePath] = [];
    }
    issuesByFile[relativePath].push(issue);
  }
  
  // Print grouped issues
  for (const [file, issues] of Object.entries(issuesByFile)) {
    console.log(`${file}:`);
    for (const issue of issues) {
      console.log(`  Line ${issue.line}: ${issue.issue}`);
    }
    console.log();
  }
}

console.log('\n[link-verify] Verification complete!');
console.log(`\nSummary:`);
console.log(`  Valid routes: ${validRoutes.size}`);
console.log(`  Files checked: ${sourceFiles.length}`);
console.log(`  Issues found: ${allIssues.length}`);
