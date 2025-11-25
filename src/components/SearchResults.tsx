'use client';

import { getSearchableRoutes, PageKey, RouteConfig } from '../routes.config';
import { useEffect, useRef, useState } from 'react';
import { trackSearch, trackSearchResultClick } from '@/lib/analytics';
import { getSupplementThumbnail } from '@/lib/supplementImages';
import Image from 'next/image';

interface SearchResultsProps {
  query: string;
  onNavigate: (page: PageKey) => void;
  context?: 'header' | 'landing';
}

// Available supplements for product comparison (IDs match our route keys)
const AVAILABLE_SUPPLEMENTS = [
  { id: 'ashwagandha-comparison', name: 'Ashwagandha', keywords: ['ashwagandha', 'withania'] },
  { id: 'bcaa-comparison', name: 'BCAAs', keywords: ['bcaa', 'bcaas', 'branched chain', 'amino acid'] },
  { id: 'calcium-comparison', name: 'Calcium', keywords: ['calcium'] },
  { id: 'casein-protein-comparison', name: 'Casein Protein', keywords: ['casein', 'casein protein'] },
  { id: 'collagen-comparison', name: 'Collagen', keywords: ['collagen', 'collagen peptides', 'peptides'] },
  { id: 'creatine-comparison', name: 'Creatine', keywords: ['creatine', 'creatine monohydrate'] },
  { id: 'curcumin-comparison', name: 'Curcumin', keywords: ['curcumin', 'turmeric'] },
  { id: 'iron-comparison', name: 'Iron', keywords: ['iron', 'ferrous'] },
  { id: 'magnesium-comparison', name: 'Magnesium', keywords: ['magnesium', 'mag'] },
  { id: 'multivitamin-comparison', name: 'Multivitamin', keywords: ['multivitamin', 'multi vitamin', 'multi-vitamin'] },
  { id: 'omega-3-comparison', name: 'Omega-3', keywords: ['omega', 'omega 3', 'omega-3', 'fish oil', 'epa', 'dha'] },
  { id: 'prebiotics-comparison', name: 'Prebiotics', keywords: ['prebiotic', 'prebiotics'] },
  // { id: 'probiotics-comparison', name: 'Probiotics', keywords: ['probiotic', 'probiotics'] }, // Temporarily disabled - no pricing data
  { id: 'vitamin-c-comparison', name: 'Vitamin C', keywords: ['vitamin c', 'ascorbic', 'vit c'] },
  { id: 'vitamin-d-comparison', name: 'Vitamin D', keywords: ['vitamin d', 'vit d', 'd3', 'cholecalciferol'] },
  { id: 'whey-protein-comparison', name: 'Whey Protein', keywords: ['whey', 'whey protein'] },
  { id: 'zinc-comparison', name: 'Zinc', keywords: ['zinc'] },
];

// Map comparison slugs to image keys (handles special cases)
function getImageKeyFromSlug(slug: string): string {
  const mapping: Record<string, string> = {
    'ashwagandha': 'ashwagandhav2',
    'bcaa': 'bcaasv2',
    'calcium': 'calciumv2',
    'casein-protein': 'caseinproteinv2',
    'collagen': 'collagenpeptidesv2',
    'creatine': 'creatinev2',
    'curcumin': 'curcuminv2',
    'iron': 'ironv2',
    'magnesium': 'magnesiumv2',
    'multivitamin': 'multivitaminv2',
    'omega-3': 'omega3v2',
    'prebiotics': 'prebioticsv2',
    'probiotics': 'probioticsv2',
    'vitamin-c': 'vitamincv2',
    'vitamin-d': 'vitamindv2',
    'whey-protein': 'wheyproteinv2',
    // Note: zinc image doesn't exist in SUPPLEMENT_IMAGES yet
  };
  return mapping[slug] || `${slug}v2`;
}

// Knowledgebase result item with image and blackish background
function KnowledgebaseResultItem({ result, onClick }: { result: RouteConfig; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = getSupplementThumbnail(result.key);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
      style={{
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)'
      }}
    >
      <div className="flex items-center gap-3">
        {/* Supplement thumbnail */}
        {imageUrl && (
          <div className="dropdown-thumbnail">
            <Image
              src={imageUrl}
              alt={result.title}
              width={40}
              height={40}
            />
          </div>
        )}
        
        {/* Text content - left aligned */}
        <div className="flex-1 text-left">
          <div className="font-medium text-foreground mb-1 transition-opacity duration-200 group-hover:opacity-80">
            {result.title}
            {result.abbreviation && (
              <span className="text-sm text-secondary ml-2">({result.abbreviation})</span>
            )}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-2">
            {result.description}
          </div>
        </div>
      </div>
    </div>
  );
}

// Glossary result item with green overlay
function GlossaryResultItem({ result, onClick }: { result: RouteConfig; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
      style={{
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF'
      }}
    >
      {/* Text content - left aligned */}
      <div className="text-left">
        <div className="font-medium text-foreground mb-1 transition-opacity duration-200 group-hover:opacity-80">
          {result.title}
          {result.abbreviation && (
            <span className="text-sm text-secondary ml-2">({result.abbreviation})</span>
          )}
        </div>
        <div className="text-sm text-muted-foreground line-clamp-2">
          {result.description}
        </div>
      </div>
    </div>
  );
}

export function SearchResults({ query, onNavigate, context: _context = 'header' }: SearchResultsProps) {
  if (!query) return null;

  // Get all searchable routes (knowledgebase + glossary)
  const allSearchableRoutes = getSearchableRoutes();

  // Filter routes based on query
  const filteredResults = allSearchableRoutes.filter(route => {
    const searchLower = query.toLowerCase();
    return (
      route.title.toLowerCase().includes(searchLower) ||
      route.description.toLowerCase().includes(searchLower) ||
      (route.abbreviation && route.abbreviation.toLowerCase().includes(searchLower))
    );
  }).slice(0, 8); // Limit to 8 results

  // Check if query matches any supplement for product comparison
  const matchedSupplements = AVAILABLE_SUPPLEMENTS.filter(supp => 
    supp.keywords.some(keyword => keyword.includes(query.toLowerCase()))
  );

  // Calculate total results including product comparisons
  const totalResults = filteredResults.length + matchedSupplements.length;

  if (totalResults === 0) {
    return (
      <div
        className="bg-card border-2 border-secondary rounded-xl shadow-lg h-full flex flex-col"
        style={{
          zIndex: 10001,
        }}
      >
        <div className="overflow-y-auto flex-1">
          <div className="py-8 px-4 text-center text-muted-foreground">
            No results found for "{query}"
          </div>
        </div>
      </div>
    );
  }

  // Emit search event (debounced by effect on query)
  // Debounced search tracking
  const debounceRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    const q = query.trim();
    if (!q) return;
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      trackSearch(q, filteredResults.length);
    }, 300);
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [query, filteredResults.length]);

  // Group results by category
  const knowledgebaseResults = filteredResults.filter(r => r.category === 'knowledgebase' || !r.category);
  const glossaryResults = filteredResults.filter(r => r.category === 'glossary');

  return (
    <div className="search-results-card">
      <div className="search-results-content">
        <div className="py-2">
          <div className="px-4 py-2 text-sm text-muted-foreground border-b border-secondary/30">
            {totalResults} result{totalResults !== 1 ? 's' : ''} found
          </div>

          {/* Product Comparison Category - Show at top if supplements match */}
          {matchedSupplements.length > 0 && (
            <>
              <div className="comparison-category-header px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20">
                Product Comparison
              </div>
              {matchedSupplements.map((supp, idx) => {
                const supplementSlug = supp.id.replace('-comparison', '');
                // Use proper mapping to get correct image key
                const imageKey = getImageKeyFromSlug(supplementSlug);
                const imageUrl = getSupplementThumbnail(imageKey as any);
                
                return (
                  <div
                    key={`compare-${supp.id}`}
                    onClick={() => {
                      trackSearchResultClick(query, `Compare ${supp.name} prices`, idx + 1);
                      // Navigate to /comparison/[supplement-name]
                      window.location.href = `/comparison/${supplementSlug}`;
                    }}
                    className="comparison-item px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Supplement thumbnail */}
                      {imageUrl && (
                        <div className="dropdown-thumbnail">
                          <Image
                            src={imageUrl}
                            alt={supp.name}
                            width={40}
                            height={40}
                          />
                        </div>
                      )}
                      
                      {/* Text content - left aligned */}
                      <div className="flex-1 text-left">
                        <div className="font-medium text-foreground mb-1 transition-opacity duration-200 group-hover:opacity-80">
                          Compare {supp.name} prices
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          View normalized price-per-unit comparisons across retailers
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* Knowledgebase results */}
          {knowledgebaseResults.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20" style={{ color: 'var(--primary)', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                Knowledgebase
              </div>
              {knowledgebaseResults.map((result, idx) => (
                <KnowledgebaseResultItem
                  key={result.key}
                  result={result}
                  onClick={() => {
                    trackSearchResultClick(query, result.title, idx + 1);
                    onNavigate(result.key as PageKey);
                  }}
                />
              ))}
            </>
          )}

          {/* Glossary results */}
          {glossaryResults.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20" style={{ color: 'var(--primary)', backgroundColor: '#FFFFFF' }}>
                Glossary
              </div>
              {glossaryResults.map((result, idx) => (
                <GlossaryResultItem
                  key={result.key}
                  result={result}
                  onClick={() => {
                    trackSearchResultClick(query, result.title, idx + 1);
                    onNavigate(result.key as PageKey);
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
