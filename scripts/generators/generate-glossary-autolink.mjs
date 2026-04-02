#!/usr/bin/env node
/**
 * Generate glossaryAutolink.tsx from database
 * Fetches all glossary terms and creates the GLOSSARY_TERMS array
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: 'api' } }
);

console.log('🔍 Fetching all glossary terms from database...\n');

const { data: terms, error } = await supabase
  .from('glossary_terms')
  .select('slug, term, abbreviation')
  .order('slug');

if (error) {
  console.error('❌ Error fetching terms:', error);
  process.exit(1);
}

console.log(`✅ Found ${terms.length} terms\n`);

// Generate GLOSSARY_TERMS array
const glossaryTerms = terms.map(({ slug, term, abbreviation }) => {
  const variations = [
    term, // Original term
    term.toLowerCase(), // Lowercase
    slug // Slug for URL matching
  ];

  // Add abbreviation variations if present
  if (abbreviation && abbreviation !== 'None') {
    // Parse abbreviations (may contain multiple comma-separated values)
    const abbrevs = abbreviation.split(',').map(a => a.trim());
    abbrevs.forEach(abbrev => {
      if (abbrev && abbrev !== 'None') {
        variations.push(abbrev);
        variations.push(abbrev.toLowerCase());
      }
    });
  }

  // Add hyphenated slug version
  const hyphenated = slug.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  if (hyphenated !== slug) {
    variations.push(hyphenated);
  }

  // Remove duplicates and filter out empty strings
  const uniqueVariations = [...new Set(variations)].filter(Boolean);

  return { key: slug, terms: uniqueVariations };
});

// Generate TypeScript file content
const timestamp = new Date().toISOString();
const fileContent = `// AUTO-GENERATED from database - ${timestamp}
// Run: node scripts/generate-glossary-autolink.mjs

import { ReactNode } from 'react';
import Link from 'next/link';
import { GLOSSARY_DATA } from './glossaryData';

/**
 * Glossary term definition for autolinking
 */
interface GlossaryTerm {
  key: string;
  terms: string[]; // All variations that should link to this page
}

/**
 * All glossary terms with their variations
 * Generated from database to ensure consistency
 */
const GLOSSARY_TERMS: GlossaryTerm[] = ${JSON.stringify(glossaryTerms, null, 2)};

/**
 * Autolink glossary terms in text content
 * Converts plain text or JSX into JSX with glossary term links
 * 
 * @param content - Text or JSX content to process
 * @param currentPage - Current glossary term slug to avoid self-linking
 * @returns JSX with autolinked glossary terms
 */
export function autolinkGlossaryContent(
  content: string | ReactNode,
  currentPage?: string
): ReactNode {
  // If content is already JSX/ReactNode, return as-is (can't safely parse)
  if (typeof content !== 'string') {
    return content;
  }

  // If empty string, return null
  if (!content || content.trim() === '') {
    return null;
  }

  // Build regex pattern from all term variations
  // Sort by length (longest first) to match longer terms before shorter ones
  const allTerms = GLOSSARY_TERMS.flatMap(({ key, terms }) =>
    terms.map(term => ({
      key,
      term,
      length: term.length
    }))
  ).sort((a, b) => b.length - a.length);

  // Create regex pattern that matches whole words only
  const pattern = allTerms
    .map(({ term }) => 
      // Escape special regex characters
      term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')
    )
    .join('|');

  const regex = new RegExp(\\\`\\\\b(\\\${pattern})\\\\b\\\`, 'gi');

  // Split content by matches
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let linkCount = 0;

  while ((match = regex.exec(content)) !== null) {
    const matchedText = match[0];
    const matchIndex = match.index;

    // Add text before match
    if (matchIndex > lastIndex) {
      parts.push(content.substring(lastIndex, matchIndex));
    }

    // Find which term this matched
    const termData = allTerms.find(
      ({ term }) => term.toLowerCase() === matchedText.toLowerCase()
    );

    if (termData && termData.key !== currentPage) {
      // Add linked term
      const glossaryInfo = GLOSSARY_DATA[termData.key];
      parts.push(
        <Link
          key={\\\`glossary-link-\\\${linkCount++}\\\`}
          href={\\\`/glossary/\\\${termData.key}\\\`}
          className="glossary-link"
        >
          {matchedText}
        </Link>
      );
    } else {
      // Don't link to current page or if no data found
      parts.push(matchedText);
    }

    lastIndex = matchIndex + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  // If no links were created, return original string
  if (parts.length === 1 && typeof parts[0] === 'string') {
    return parts[0];
  }

  return <>{parts}</>;
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use autolinkGlossaryContent instead
 */
export function autolinkGlossaryTerms(content: string | ReactNode, currentPage?: string): ReactNode {
  return autolinkGlossaryContent(content, currentPage);
}
`;

// Write to src/lib/glossaryAutolink.tsx
const outputPath = join(__dirname, '..', 'src', 'lib', 'glossaryAutolink.tsx');
writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`✅ Generated ${outputPath}`);
console.log(`📊 Total terms: ${glossaryTerms.length}`);
console.log(`📊 Total variations: ${glossaryTerms.reduce((sum, t) => sum + t.terms.length, 0)}`);
console.log('\n🎉 Done! The glossaryAutolink.tsx file is ready to use.');
