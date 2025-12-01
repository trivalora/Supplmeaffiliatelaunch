"use client";

import { GlossaryTemplate } from "@/components/templates/GlossaryTemplate";
import { parseMarkdownToReact } from "../../../lib/markdown";
import { PageViewTracker } from "../../components/PageViewTracker";

/**
 * Database glossary term structure
 */
export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  abbreviation?: string | null;
  pronunciation?: string | null;
  definition: string;
  expanded_explanation?: string | null;
  why_it_matters?: string | null;
  simple_explanation?: string | null;
  technical_explanation?: string | null;
  real_world_context?: string | null;
  examples?: string[] | null;
  key_points?: string | null;
  common_misconceptions?: string[] | null;
  related_terms?: string[] | null; // Array of UUIDs
  meta_title?: string | null;
  meta_description?: string | null;
  created_at?: string;
  updated_at?: string;
}

interface GlossaryPageContentProps {
  term: GlossaryTerm;
}

/**
 * Client component that renders glossary content from database
 * Converts markdown/HTML to formatted React components
 */
export function GlossaryPageContent({ term }: GlossaryPageContentProps) {
  // Parse definition (which may contain HTML links) to React
  const definitionContent = term.definition
    ? parseMarkdownToReact(term.definition)
    : term.definition;

  // Convert markdown/HTML content to React components
  const expandedExplanation = term.expanded_explanation
    ? parseMarkdownToReact(term.expanded_explanation)
    : undefined;

  const technicalExplanation = term.technical_explanation
    ? parseMarkdownToReact(term.technical_explanation)
    : undefined;

  const realWorldContext = term.real_world_context
    ? parseMarkdownToReact(term.real_world_context)
    : undefined;

  const commonMisconceptions =
    term.common_misconceptions && term.common_misconceptions.length > 0
      ? parseMarkdownToReact(
          term.common_misconceptions
            // Convert single newlines within items to double newlines for proper paragraph breaks
            .map((item) => item.replace(/\n/g, "\n\n"))
            .join("\n\n")
            // Color code Myth/Fact labels
            .replace(
              /\*\*Myth:\*\*/g,
              '<strong class="text-red-600">Myth:</strong>'
            )
            .replace(
              /\*\*Fact:\*\*/g,
              '<strong class="text-primary">Fact:</strong>'
            )
        )
      : undefined;

  // Key points: If stored as markdown string, parse it
  // If stored as structured data, would need different handling
  const keyPointsContent = term.key_points
    ? parseMarkdownToReact(term.key_points)
    : undefined;

  // Related terms: For now, just pass empty array
  // TODO: Fetch related terms by UUIDs from API
  const relatedTerms: Array<{ term: string; key: string }> = [];

  return (
    <>
      <PageViewTracker pageName={term.term} pageCategory="glossary" />
      <GlossaryTemplate
        term={term.term}
        abbreviation={term.abbreviation || undefined}
        pronunciation={term.pronunciation || undefined}
        definition={term.definition}
        expandedExplanation={expandedExplanation}
        whyItMatters={term.why_it_matters || undefined}
        simpleExplanation={term.simple_explanation || undefined}
        technicalExplanation={technicalExplanation}
        realWorldContext={realWorldContext}
        examples={term.examples || undefined}
        keyPointsContent={keyPointsContent}
        commonMisconceptions={commonMisconceptions}
        relatedTerms={relatedTerms}
        currentPage={term.slug}
      />
    </>
  );
}
