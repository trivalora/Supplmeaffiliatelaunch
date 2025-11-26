'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import { GLOSSARY_ROUTES } from '@/routes.config';
import { SEOHead } from '@/components/SEOHead';

interface GlossaryPageProps {
  onNavigate: (key: string) => void;
}

export function GlossaryPage({ onNavigate }: GlossaryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  
  // Generate alphabet array
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Filter and sort glossary terms
  const visibleTerms = GLOSSARY_ROUTES
    .filter(route => route.showInNav)
    .sort((a, b) => a.title.localeCompare(b.title));
  
  // Apply both search and letter filters
  const filteredTerms = visibleTerms.filter(route => {
    const matchesSearch = searchQuery === '' || 
      route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (route.abbreviation && route.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLetter = selectedLetter === null || 
      route.title.toUpperCase().startsWith(selectedLetter);
    
    return matchesSearch && matchesLetter;
  });
  
  // Get count of terms per letter
  const letterCounts = alphabet.reduce((acc, letter) => {
    acc[letter] = visibleTerms.filter(route => 
      route.title.toUpperCase().startsWith(letter)
    ).length;
    return acc;
  }, {} as Record<string, number>);
  
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter);
  };

  return (
    <>
      <SEOHead 
        title="Research Glossary - Supplement Terms & Definitions"
        description="Comprehensive glossary of supplement research terms and concepts. Understand key terminology used in clinical studies, research methodology, and evidence-based supplement information."
        keywords="supplement glossary, research terms, clinical study definitions, supplement terminology, evidence-based terms"
      />
      <div className="min-h-screen bg-background flex flex-col" data-layout-page data-page-content>
        {/* Anchor for "top" navigation */}
        <div id="top" className="absolute" style={{ top: '78px' }}></div>
        
        <main className="flex-1" id="hero">
          {/* Hero Section */}
          <section className="bg-primary py-12 md:py-24">
            <div data-layout-container className="px-6 md:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-primary-foreground mb-4">Research Glossary</h1>
                <p className="text-secondary text-lg md:text-xl mb-8">
                  Understanding key terms and concepts in supplement research
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-card border-2 border-secondary rounded-xl text-foreground text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Alphabet Filter */}
          <section className="border-b border-secondary bg-card">
            <div data-layout-container className="px-6 md:px-12">
              <div className="py-4">
                <div className="flex items-center gap-2 mb-3">
                  {selectedLetter && (
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="text-xs px-2 py-1 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Clear filter
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {alphabet.map(letter => {
                    const count = letterCounts[letter];
                    const isActive = selectedLetter === letter;
                    const hasTerms = count > 0;
                    
                    return (
                      <button
                        key={letter}
                        onClick={() => hasTerms && handleLetterClick(letter)}
                        disabled={!hasTerms}
                        className={`
                          w-9 h-9 rounded-lg text-sm transition-all flex items-center justify-center
                          ${isActive 
                            ? 'bg-primary text-primary-foreground shadow-md scale-110' 
                            : hasTerms
                              ? 'bg-tertiary text-primary hover:bg-secondary hover:scale-105 cursor-pointer'
                              : 'bg-tertiary/50 text-muted-foreground/30 cursor-not-allowed'
                          }
                        `}
                        title={hasTerms ? `${count} term${count !== 1 ? 's' : ''} starting with ${letter}` : `No terms starting with ${letter}`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Glossary Grid */}
          <section data-layout-section className="py-8 md:py-12">
            <div data-layout-container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTerms.map((route) => (
                  <div
                    key={route.key}
                    onClick={() => onNavigate(route.key)}
                    className="bg-card border border-secondary rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] group"
                    data-glossary-card
                  >
                    <h3 className="text-primary group-hover:text-primary/80 transition-colors mb-2">
                      {route.title}
                      {route.abbreviation && (
                        <span className="block text-sm text-secondary mt-1">({route.abbreviation})</span>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {filteredTerms.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    {searchQuery && selectedLetter 
                      ? `No terms found starting with "${selectedLetter}" matching "${searchQuery}"`
                      : selectedLetter
                      ? `No terms found starting with "${selectedLetter}"`
                      : `No terms found matching "${searchQuery}"`
                    }
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}