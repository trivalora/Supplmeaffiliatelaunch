import Link from 'next/link';
import { Search } from 'lucide-react';
import { GLOSSARY_ROUTES } from '@/routes.config';

export function GlossaryIndexServer() {
  // Get all visible glossary terms sorted alphabetically
  const visibleTerms = GLOSSARY_ROUTES
    .filter((route) => route.showInNav)
    .sort((a, b) => a.title.localeCompare(b.title));

  // Generate alphabet array
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Get count of terms per letter
  const letterCounts = alphabet.reduce((acc, letter) => {
    acc[letter] = visibleTerms.filter((route) =>
      route.title.toUpperCase().startsWith(letter)
    ).length;
    return acc;
  }, {} as Record<string, number>);

  // Group terms by first letter
  const termsByLetter = visibleTerms.reduce((acc, route) => {
    const firstLetter = route.title[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(route);
    return acc;
  }, {} as Record<string, typeof visibleTerms>);

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      data-layout-page
      data-page-content
    >
      {/* Anchor for "top" navigation */}
      <div id="top" className="absolute" style={{ top: '78px' }}></div>

      <main className="flex-1" id="hero">
        {/* Hero Section */}
        <section className="bg-primary py-12 md:py-24">
          <div data-layout-container className="px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-primary-foreground mb-4">
                Research Glossary
              </h1>
              <p className="text-secondary text-lg md:text-xl mb-8">
                Understanding key terms and concepts in supplement research
              </p>
              <p className="text-secondary-foreground text-sm">
                {visibleTerms.length} terms • Click a letter to jump to that section
              </p>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="sticky top-[78px] bg-background/95 backdrop-blur-sm border-b border-border z-40">
          <div data-layout-container className="px-6 md:px-12 py-4">
            <div className="flex flex-wrap justify-center gap-2">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                    letterCounts[letter] > 0
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  aria-disabled={letterCounts[letter] === 0}
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Terms List */}
        <section className="py-12">
          <div data-layout-container className="px-6 md:px-12">
            <div className="max-w-5xl mx-auto space-y-12">
              {alphabet.map((letter) => {
                const termsForLetter = termsByLetter[letter] || [];
                if (termsForLetter.length === 0) return null;

                return (
                  <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary/20">
                      {letter}
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {termsForLetter.map((route) => (
                        <Link
                          key={route.key}
                          href={`/glossary/${route.key}`}
                          className="group block p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors mb-1">
                                {route.title}
                                {route.abbreviation && (
                                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                                    ({route.abbreviation})
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {route.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center pb-12">
          <a
            href="#top"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Top
          </a>
        </div>
      </main>
    </div>
  );
}
