import { useCallback, useMemo } from 'react';
import { autolinkGlossaryContent } from '../utils/glossaryAutolink';
import { LucideIcon } from 'lucide-react';

interface GlossaryTemplateProps {
  term: string;
  abbreviation?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  definition: string;
  detailedExplanation?: string;
  expandedExplanation?: React.ReactNode;
  whyItMatters?: string;
  simpleExplanation?: string;
  technicalExplanation?: React.ReactNode;
  realWorldContext?: React.ReactNode;
  examples?: string[];
  exampleContext?: string;
  keyPoints?: Array<{ icon: LucideIcon; title: string; description: string }>;
  commonMisconceptions?: React.ReactNode;
  relatedTerms?: Array<{ term: string; key?: string; link?: string }> | string[];
  onNavigate?: (key: string) => void;
  currentPage?: string;
  onContactClick?: () => void;
  onLegalClick?: () => void;
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
  commonMisconceptions,
  relatedTerms = [],
  onNavigate,
  currentPage
}: GlossaryTemplateProps) {
  const handleNavigate = useCallback((key: string) => {
    if (onNavigate) {
      onNavigate(key);
    }
  }, [onNavigate]);

  // PERFORMANCE FIX: Memoized autolinked content (prevents re-processing on every render)
  const linkedWhyItMatters = useMemo(() => 
    autolinkGlossaryContent(whyItMatters || '', onNavigate, currentPage),
    [whyItMatters, onNavigate, currentPage]
  );
  
  const linkedSimpleExplanation = useMemo(() => 
    autolinkGlossaryContent(simpleExplanation || '', onNavigate, currentPage),
    [simpleExplanation, onNavigate, currentPage]
  );
  
  const linkedDetailedExplanation = useMemo(() => 
    autolinkGlossaryContent(detailedExplanation || '', onNavigate, currentPage),
    [detailedExplanation, onNavigate, currentPage]
  );
  
  const linkedExampleContext = useMemo(() => 
    autolinkGlossaryContent(exampleContext || '', onNavigate, currentPage),
    [exampleContext, onNavigate, currentPage]
  );
  
  // PERFORMANCE FIX: Memoize examples array processing - process all at once, not in a loop with hooks
  const linkedExamples = useMemo(() => 
    examples.map(example => 
      autolinkGlossaryContent(example, onNavigate, currentPage)
    ),
    [examples, onNavigate, currentPage]
  );

  // Normalize relatedTerms to always be an array of objects
  const normalizedRelatedTerms = relatedTerms.map(term => {
    if (typeof term === 'string') {
      return { term, key: term.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, ''), link: undefined };
    }
    return term;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col" data-layout-page style={{ paddingTop: '78px' }}>
      {/* Anchor for "top" navigation */}
      <div id="top" className="absolute" style={{ top: '78px' }}></div>
      
      <main className="flex-1" id="hero">
        {/* Hero Section */}
        <section className="bg-primary glossary-hero" data-layout-section>
          <div data-layout-container>
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-lg mb-4">
                <span className="text-secondary text-sm uppercase tracking-wide">Glossary Term</span>
              </div>
              <h1 className="text-primary-foreground mb-4">
                {term}
                {abbreviation && (
                  <span className="block text-2xl md:text-3xl text-secondary mt-2">({abbreviation})</span>
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
              <p className="text-secondary text-lg md:text-xl">
                {definition}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section data-layout-section>
          <div data-layout-container>
            <div className="max-w-4xl mx-auto">
              {/* Why It Matters */}
              {whyItMatters && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Why It Matters</h2>
                  <div className="text-foreground leading-relaxed">
                    {onNavigate ? linkedWhyItMatters : whyItMatters}
                  </div>
                </div>
              )}

              {/* Simple Explanation */}
              {simpleExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Simple Explanation</h2>
                  <div className="text-foreground leading-relaxed">
                    {onNavigate ? linkedSimpleExplanation : simpleExplanation}
                  </div>
                </div>
              )}

              {/* Detailed Explanation (string version) */}
              {detailedExplanation && !expandedExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Detailed Explanation</h2>
                  <div className="text-foreground leading-relaxed">
                    {onNavigate ? linkedDetailedExplanation : detailedExplanation}
                  </div>
                </div>
              )}

              {/* Expanded Explanation (JSX version) */}
              {expandedExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Detailed Explanation</h2>
                  <div className="text-foreground leading-relaxed">
                    {expandedExplanation}
                  </div>
                </div>
              )}

              {/* Technical Explanation */}
              {technicalExplanation && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Technical Explanation</h2>
                  <div className="text-foreground leading-relaxed">
                    {technicalExplanation}
                  </div>
                </div>
              )}

              {/* Real World Context */}
              {realWorldContext && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Real World Context</h2>
                  <div className="text-foreground leading-relaxed">
                    {realWorldContext}
                  </div>
                </div>
              )}

              {/* Key Points */}
              {keyPoints && keyPoints.length > 0 && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Key Points</h2>
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
                            <h3 className="text-primary mb-2">{point.title}</h3>
                            <p className="text-foreground leading-relaxed">{point.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Examples */}
              {examples.length > 0 && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Examples</h2>
                  <ul className="space-y-3">
                    {examples.map((example, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-secondary shrink-0">•</span>
                        <span className="text-foreground leading-relaxed">
                          {onNavigate ? linkedExamples[index] : example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example Context */}
              {exampleContext && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Example in Context</h2>
                  <div className="text-foreground leading-relaxed italic">
                    {onNavigate ? linkedExampleContext : exampleContext}
                  </div>
                </div>
              )}

              {/* Common Misconceptions */}
              {commonMisconceptions && (
                <div className="bg-card border border-border rounded-[14px] p-8 mb-6">
                  <h2 className="text-primary mb-4">Common Misconceptions</h2>
                  <div className="text-foreground leading-relaxed">
                    {commonMisconceptions}
                  </div>
                </div>
              )}

              {/* Related Terms */}
              {normalizedRelatedTerms.length > 0 && (
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Related Terms</h2>
                  <div className="flex flex-wrap gap-3">
                    {normalizedRelatedTerms.map((related, index) => (
                      <button
                        key={related.key || index}
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate && related.key) {
                            onNavigate(related.key);
                          }
                        }}
                        className="px-4 py-2 bg-tertiary border border-secondary rounded-lg text-foreground hover:bg-secondary/10 transition-colors cursor-pointer"
                      >
                        {related.term}
                      </button>
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
