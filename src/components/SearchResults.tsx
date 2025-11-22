import { getSearchableRoutes, PageKey } from '../routes.config';
import { useEffect, useRef } from 'react';
import { trackSearch, trackSearchResultClick } from '../utils/analytics';

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
  { id: 'probiotics-comparison', name: 'Probiotics', keywords: ['probiotic', 'probiotics'] },
  { id: 'vitamin-c-comparison', name: 'Vitamin C', keywords: ['vitamin c', 'ascorbic', 'vit c'] },
  { id: 'vitamin-d-comparison', name: 'Vitamin D', keywords: ['vitamin d', 'vit d', 'd3', 'cholecalciferol'] },
  { id: 'whey-protein-comparison', name: 'Whey Protein', keywords: ['whey', 'whey protein'] },
  { id: 'zinc-comparison', name: 'Zinc', keywords: ['zinc'] },
];

export function SearchResults({ query, onNavigate, context: _context = 'header' }: SearchResultsProps) {
  if (!query) return null;

  // Get all searchable routes (knowledgebase + glossary), excluding archived v1 pages
  const allSearchableRoutes = getSearchableRoutes().filter(route => route.category !== 'v1');

  // Filter routes based on query
  const filteredResults = allSearchableRoutes.filter(route => {
    const searchLower = query.toLowerCase();
    return (
      route.title.toLowerCase().includes(searchLower) ||
      route.description.toLowerCase().includes(searchLower) ||
      (route.abbreviation && route.abbreviation.toLowerCase().includes(searchLower))
    );
  }).slice(0, 8); // Limit to 8 results

  // Ensure dropdown never exceeds viewport height minus a 5vh buffer, and allow scrolling within.
  const maxHeight = 'calc(95vh - 5vh)'; // effectively 90vh

  // Check if query matches any supplement for product comparison
  const matchedSupplements = AVAILABLE_SUPPLEMENTS.filter(supp => 
    supp.keywords.some(keyword => keyword.includes(query.toLowerCase()))
  );

  // Calculate total results including product comparisons
  const totalResults = filteredResults.length + matchedSupplements.length;

  if (totalResults === 0) {
    return (
      <div
        className="bg-card border-2 border-secondary rounded-xl shadow-lg overflow-hidden"
        style={{
          zIndex: 10001,
          minWidth: '280px',
          maxWidth: 'min(500px, calc(100vw - 2rem))',
          maxHeight: maxHeight
        }}
      >
        <div className="py-8 px-4 text-center text-muted-foreground">
          No results found for "{query}"
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
  const knowledgebaseResults = filteredResults.filter(r => r.category === 'v2' || !r.category);
  const glossaryResults = filteredResults.filter(r => r.category === 'glossary');

  return (
    <div
      className="bg-card border-2 border-secondary rounded-xl shadow-lg overflow-hidden"
      style={{
        zIndex: 10001,
        minWidth: '280px',
        maxWidth: 'min(500px, calc(100vw - 2rem))',
        maxHeight: maxHeight
      }}
    >
      <div className="overflow-y-auto" style={{ maxHeight }}>
        <div className="py-2">
          <div className="px-4 py-2 text-sm text-muted-foreground border-b border-secondary/30">
            {totalResults} result{totalResults !== 1 ? 's' : ''} found
          </div>

          {/* Product Comparison Category - Show at top if supplements match */}
          {matchedSupplements.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20" style={{ color: 'var(--header-secondary)' }}>
                Product Comparison
              </div>
              {matchedSupplements.map((supp, idx) => (
                <div
                  key={`compare-${supp.id}`}
                  onClick={() => {
                    trackSearchResultClick(query, `Compare ${supp.name} prices`, idx + 1);
                    // Use the route key directly (already ends in -comparison)
                    onNavigate(supp.id as any);
                  }}
                  className="px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(224, 203, 168, 0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <div className="font-medium text-foreground mb-1 transition-opacity duration-200 group-hover:opacity-80">
                    Compare {supp.name} prices
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-2">
                    View normalized price-per-unit comparisons across retailers
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Knowledgebase results */}
          {knowledgebaseResults.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20" style={{ color: 'var(--header-secondary)' }}>
                Knowledgebase
              </div>
              {knowledgebaseResults.map((result, idx) => (
                <div
                  key={result.key}
                  onClick={() => {
                    trackSearchResultClick(query, result.title, idx + 1);
                    onNavigate(result.key as PageKey);
                  }}
                  className="px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(224, 203, 168, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
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
              ))}
            </>
          )}

          {/* Glossary results */}
          {glossaryResults.length > 0 && (
            <>
              <div className="px-4 py-2 text-xs uppercase tracking-wide font-medium border-b border-secondary/20" style={{ color: 'var(--header-secondary)' }}>
                Glossary
              </div>
              {glossaryResults.map((result, idx) => (
                <div
                  key={result.key}
                  onClick={() => {
                    trackSearchResultClick(query, result.title, idx + 1);
                    onNavigate(result.key as PageKey);
                  }}
                  className="px-4 py-3 cursor-pointer transition-all duration-200 border-b border-secondary/10 last:border-b-0 group"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(224, 203, 168, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
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
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
