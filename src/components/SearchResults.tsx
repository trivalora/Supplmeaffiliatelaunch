import { getSearchableRoutes, PageKey } from '../routes.config';
import { useEffect, useRef } from 'react';
import { trackSearch, trackSearchResultClick } from '../utils/analytics';

interface SearchResultsProps {
  query: string;
  onNavigate: (page: PageKey) => void;
  context?: 'header' | 'landing';
}

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

  if (filteredResults.length === 0) {
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
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
          </div>

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