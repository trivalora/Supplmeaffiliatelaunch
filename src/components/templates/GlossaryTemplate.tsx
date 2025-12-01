"use client";

import { useMemo } from "react";
import Link from "next/link";
import { autolinkGlossaryContent } from "@/lib/glossaryAutolink";
import {
  LucideIcon,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

interface GlossaryTemplateProps {
  term: string;
  abbreviation?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  definition: string | React.ReactNode;
  detailedExplanation?: string;
  expandedExplanation?: React.ReactNode;
  whyItMatters?: string;
  simpleExplanation?: string;
  technicalExplanation?: React.ReactNode;
  realWorldContext?: React.ReactNode;
  examples?: string[];
  exampleContext?: string;
  /** Structured key points with icons (legacy format) */
  keyPoints?: Array<{ icon: LucideIcon; title: string; description: string }>;
  /** Markdown/JSX key points content (new format from database) */
  keyPointsContent?: React.ReactNode;
  commonMisconceptions?: React.ReactNode;
  relatedTerms?:
    | Array<{ term: string; key?: string; link?: string }>
    | string[];
  currentPage?: string;
}

export function GlossaryTemplate({
  term,
  abbreviation,
  pronunciation,
  partOfSpeech,
  definition,
  detailedExplanation,
  expandedExplanation,
  whyItMatters,
  simpleExplanation,
  technicalExplanation,
  realWorldContext,
  examples = [],
  exampleContext,
  keyPoints,
  keyPointsContent,
  commonMisconceptions,
  relatedTerms = [],
  currentPage,
}: GlossaryTemplateProps) {
  // PERFORMANCE FIX: Memoized autolinked content (prevents re-processing on every render)
  const linkedWhyItMatters = useMemo(
    () => autolinkGlossaryContent(whyItMatters || "", currentPage),
    [whyItMatters, currentPage]
  );

  const linkedSimpleExplanation = useMemo(
    () => autolinkGlossaryContent(simpleExplanation || "", currentPage),
    [simpleExplanation, currentPage]
  );

  const linkedDetailedExplanation = useMemo(
    () => autolinkGlossaryContent(detailedExplanation || "", currentPage),
    [detailedExplanation, currentPage]
  );

  const linkedExampleContext = useMemo(
    () => autolinkGlossaryContent(exampleContext || "", currentPage),
    [exampleContext, currentPage]
  );

  // PERFORMANCE FIX: Memoize examples array processing - process all at once, not in a loop with hooks
  const linkedExamples = useMemo(
    () =>
      examples.map((example) => autolinkGlossaryContent(example, currentPage)),
    [examples, currentPage]
  );

  // Normalize relatedTerms to always be an array of objects
  const normalizedRelatedTerms = relatedTerms.map((term) => {
    if (typeof term === "string") {
      return {
        term,
        key: term
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/[^a-z0-9]/g, ""),
        link: undefined,
      };
    }
    return term;
  });

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      data-layout-page
      style={{ paddingTop: "78px" }}
    >
      {/* Anchor for "top" navigation */}
      <div id="top" className="absolute" style={{ top: "78px" }}></div>

      <main className="flex-1" id="hero">
        {/* Hero Section with Definition */}
        <section className="bg-primary glossary-hero" data-layout-section>
          <div data-layout-container>
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-lg mb-4">
                <span className="text-secondary text-sm uppercase tracking-wide">
                  Glossary Term
                </span>
              </div>
              <h1 className="text-primary-foreground mb-4">
                {term}
                {abbreviation && (
                  <span className="block text-2xl md:text-3xl text-secondary mt-2">
                    ({abbreviation})
                  </span>
                )}
              </h1>
              {pronunciation && (
                <p className="text-secondary/80 text-base md:text-lg mb-3 italic">
                  pronunciation: {pronunciation}
                </p>
              )}
              {partOfSpeech && (
                <p className="text-secondary/80 text-base md:text-lg mb-3">
                  {partOfSpeech}
                </p>
              )}
              {/* Definition directly in hero */}
              <div className="text-secondary text-lg md:text-xl leading-relaxed">
                {typeof definition === "string" ? (
                  <p>{definition}</p>
                ) : (
                  definition
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section data-layout-section>
          <div data-layout-container>
            <div className="max-w-4xl mx-auto">
              {/* 1. The Bottom Line (Why It Matters) */}
              {whyItMatters && (
                <div className="bg-linear-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-[14px] p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-secondary" />
                      </div>
                      <h2 className="text-primary">The Bottom Line</h2>
                    </div>
                    <div className="text-foreground leading-relaxed text-lg">
                      {linkedWhyItMatters}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. In Plain English (Simple Explanation) */}
              {simpleExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-primary">In Plain English</h2>
                  </div>
                  <div className="text-foreground leading-relaxed">
                    {linkedSimpleExplanation}
                  </div>
                </div>
              )}

              {/* 3. Quick Facts (Key Points) */}
              {(keyPointsContent || (keyPoints && keyPoints.length > 0)) && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-primary">Quick Facts</h2>
                  </div>

                  {/* Markdown/JSX key points from database */}
                  {keyPointsContent && (
                    <div className="key-points-content text-foreground leading-relaxed [&_h3]:hidden [&_ul]:space-y-3 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:m-0 [&_li]:pl-4 [&_li]:border-l-2 [&_li]:border-secondary/30 [&_li]:py-2 [&_strong]:text-primary [&_strong]:font-semibold [&_p]:mb-0">
                      {keyPointsContent}
                    </div>
                  )}

                  {/* Legacy structured key points with icons */}
                  {!keyPointsContent && keyPoints && keyPoints.length > 0 && (
                    <div className="space-y-6">
                      {keyPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                          <div key={index} className="flex gap-4">
                            <div className="shrink-0">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-primary mb-2">
                                {point.title}
                              </h3>
                              <p className="text-foreground leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* 4. Common Misconceptions */}
              {commonMisconceptions && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-primary">Common Misconceptions</h2>
                  </div>
                  <div className="misconceptions-content text-foreground leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-semibold">
                    {commonMisconceptions}
                  </div>
                </div>
              )}

              {/* 5. Examples */}
              {examples.length > 0 && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Examples</h2>
                  <ul className="space-y-3">
                    {examples.map((example, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-secondary shrink-0">•</span>
                        <span className="text-foreground leading-relaxed">
                          {linkedExamples[index]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Detailed Explanation */}
              {detailedExplanation && !expandedExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Detailed Explanation</h2>
                  <div className="text-foreground leading-relaxed">
                    {linkedDetailedExplanation}
                  </div>
                </div>
              )}

              {/* Expanded Explanation (JSX version) */}
              {expandedExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Detailed Explanation</h2>
                  <div className="text-foreground leading-relaxed prose prose-sm max-w-none [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_h4]:text-base [&_h4]:font-medium [&_h4]:text-primary [&_h4]:mt-4 [&_h4]:mb-2 [&_p]:mb-4 [&_ul]:space-y-2 [&_ol]:space-y-2 [&_strong]:text-primary">
                    {expandedExplanation}
                  </div>
                </div>
              )}

              {/* Technical Explanation (if separate from detailed) */}
              {technicalExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Technical Details</h2>
                  <div className="text-foreground leading-relaxed prose prose-sm max-w-none [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3">
                    {technicalExplanation}
                  </div>
                </div>
              )}

              {/* Real World Context */}
              {realWorldContext && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Real World Application</h2>
                  <div className="text-foreground leading-relaxed">
                    {realWorldContext}
                  </div>
                </div>
              )}

              {/* Example Context */}
              {exampleContext && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Example in Context</h2>
                  <div className="text-foreground leading-relaxed italic">
                    {linkedExampleContext}
                  </div>
                </div>
              )}

              {/* Related Terms */}
              {normalizedRelatedTerms.length > 0 && (
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Related Terms</h2>
                  <div className="flex flex-wrap gap-3">
                    {normalizedRelatedTerms.map((related, index) => (
                      <Link
                        key={related.key || index}
                        href={`/glossary/${related.key}`}
                        className="px-4 py-2 bg-tertiary border border-secondary rounded-lg text-foreground hover:bg-secondary/10 transition-colors cursor-pointer inline-block"
                      >
                        {related.term}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
