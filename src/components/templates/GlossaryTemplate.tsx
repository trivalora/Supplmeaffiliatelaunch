"use client";

import { useMemo } from "react";
import Link from "next/link";
import { autolinkGlossaryContent } from "@/lib/glossaryAutolink";
import { ComparePricesCTA } from "@/components/shared/content/ComparePricesCTA";
import {
  LucideIcon,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  BookOpenText,
  Beaker,
  FlaskConical,
  Globe,
  Quote,
  Link2,
  ArrowRight,
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
              <div className="inline-block px-4 py-2 bg-secondary/20 dark:bg-[#2A2622] rounded-lg mb-4">
                <span className="text-secondary text-sm uppercase tracking-wide">
                  Glossary Term
                </span>
              </div>
              <h1 className="text-primary-foreground mb-4">
                <span className="block text-xl md:text-2xl font-normal text-secondary/60 tracking-wide mb-6">
                  Definition & Explanation{" "}
                </span>
                <span className="block">{term}</span>
              </h1>
              {abbreviation && (
                <p className="text-2xl md:text-3xl text-secondary mt-2 mb-4">
                  ({abbreviation})
                </p>
              )}
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
                  <p>
                    <strong>Definition:</strong> {definition}
                  </p>
                ) : (
                  <div>
                    <strong>Definition:</strong> {definition}
                  </div>
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
                <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-6 relative overflow-hidden shadow-2xl shadow-secondary/10 hover:shadow-secondary/15 transition-all duration-500">
                  {/* Animated gradient orbs */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-40" />
                  {/* Inner glow border */}
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-secondary/10 via-transparent to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg shadow-secondary/20 shrink-0 mt-1">
                        <Lightbulb className="w-5 h-5 text-secondary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        The Bottom Line
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed text-lg">
                      {linkedWhyItMatters}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. In Plain English (Simple Explanation) */}
              {simpleExplanation && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        In Plain English
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed">
                      {linkedSimpleExplanation}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Quick Facts (Key Points) */}
              {(keyPointsContent || (keyPoints && keyPoints.length > 0)) && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Quick Facts
                      </h2>
                    </div>

                    {/* Markdown/JSX key points from database */}
                    {keyPointsContent && (
                      <div className="key-points-content text-foreground/90 leading-relaxed [&_h3]:hidden [&_ul]:space-y-4 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:m-0 [&_li]:pl-5 [&_li]:border-l-2 [&_li]:border-secondary/40 [&_li]:py-2.5 [&_li]:bg-white/[0.02] [&_li]:rounded-r-xl [&_li]:backdrop-blur-sm [&_strong]:text-primary [&_strong]:font-semibold [&_p]:mb-0">
                        {keyPointsContent}
                      </div>
                    )}

                    {/* Legacy structured key points with icons */}
                    {!keyPointsContent && keyPoints && keyPoints.length > 0 && (
                      <div className="space-y-5">
                        {keyPoints.map((point, index) => {
                          const Icon = point.icon;
                          return (
                            <div
                              key={index}
                              className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]"
                            >
                              <div className="shrink-0">
                                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-primary font-medium mb-1.5">
                                  {point.title}
                                </h3>
                                <p className="text-foreground/85 leading-relaxed">
                                  {point.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Common Misconceptions */}
              {commonMisconceptions && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-amber-500/15 rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
                  {/* Amber gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 backdrop-blur-xl flex items-center justify-center border border-amber-500/20 shadow-lg shadow-amber-500/10 shrink-0 mt-1">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Common Misconceptions
                      </h2>
                    </div>
                    <div className="misconceptions-content text-foreground/90 leading-relaxed [&_p]:mb-5 [&_p:last-child]:mb-0 [&_strong]:font-semibold">
                      {commonMisconceptions}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Examples */}
              {examples.length > 0 && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <Beaker className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Examples
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {examples.map((example, index) => (
                        <li
                          key={index}
                          className="flex gap-3 p-4 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]"
                        >
                          <span className="text-secondary shrink-0 mt-0.5">
                            •
                          </span>
                          <span className="text-foreground/90 leading-relaxed">
                            {linkedExamples[index]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 6. Detailed Explanation */}
              {detailedExplanation && !expandedExplanation && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <BookOpenText className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Detailed Explanation
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed">
                      {linkedDetailedExplanation}
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded Explanation (JSX version) */}
              {expandedExplanation && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <BookOpenText className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Detailed Explanation
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed prose prose-sm max-w-none [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3 [&_h4]:text-base [&_h4]:font-medium [&_h4]:text-primary [&_h4]:mt-4 [&_h4]:mb-2 [&_p]:mb-4 [&_ul]:space-y-2 [&_ol]:space-y-2 [&_strong]:text-primary">
                      {expandedExplanation}
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Explanation (if separate from detailed) */}
              {technicalExplanation && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <FlaskConical className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Technical Details
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed prose prose-sm max-w-none [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-3">
                      {technicalExplanation}
                    </div>
                  </div>
                </div>
              )}

              {/* Real World Context */}
              {realWorldContext && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Real World Application
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed">
                      {realWorldContext}
                    </div>
                  </div>
                </div>
              )}

              {/* Example Context */}
              {exampleContext && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 mb-6 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Example in Context
                      </h2>
                    </div>
                    <div className="text-foreground/90 leading-relaxed italic pl-6 border-l-2 border-secondary/40">
                      {linkedExampleContext}
                    </div>
                  </div>
                </div>
              )}

              {/* Related Terms */}
              {normalizedRelatedTerms.length > 0 && (
                <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 relative overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02] pointer-events-none rounded-3xl" />
                  {/* Top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative">
                    <div className="flex gap-3 mb-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/15 shadow-lg shrink-0 mt-1">
                        <Link2 className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-primary text-xl font-semibold leading-10">
                        Related Terms
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {normalizedRelatedTerms.map((related, index) => (
                        <Link
                          key={related.key || index}
                          href={`/glossary/${related.key}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-full text-primary font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                          <span>{related.term}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section - Compare All Prices */}
        <ComparePricesCTA />
      </main>
    </div>
  );
}
