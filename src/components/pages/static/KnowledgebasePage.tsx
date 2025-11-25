import { Search } from 'lucide-react';
import { useState } from 'react';
import { KNOWLEDGEBASE_ROUTES, SubcategoryType } from '@/routes.config';
import { SEOHead } from '@/components/SEOHead';

interface KnowledgebasePageProps {
  onNavigate: (key: string) => void;
}

export function KnowledgebasePage({ onNavigate }: KnowledgebasePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter routes to only show those marked as showInNav
  const visibleRoutes = KNOWLEDGEBASE_ROUTES
    .filter(route => route.showInNav);
  
  // Group routes by subcategory
  const routesBySubcategory = visibleRoutes.reduce((acc, route) => {
    const subcategory = route.subcategory || 'Others';
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(route);
    return acc;
  }, {} as Record<SubcategoryType, typeof visibleRoutes>);

  // Sort routes within each subcategory alphabetically
  Object.keys(routesBySubcategory).forEach(key => {
    routesBySubcategory[key as SubcategoryType].sort((a, b) => a.title.localeCompare(b.title));
  });

  // Define subcategory order
  const subcategoryOrder: SubcategoryType[] = [
    'Protein Supplements',
    'Vitamins',
    'Minerals',
    'Amino Acids',
    'Probiotics',
    'Omega-3 Fatty Acids',
    'Enzymes',
    'Others'
  ];

  const sortedSubcategories = subcategoryOrder.filter(cat => routesBySubcategory[cat]);
  
  // Filter for search
  const filteredItems = visibleRoutes.filter(route =>
    route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If searching, show search results instead of categorized view
  const showSearchResults = searchQuery.trim() !== '';

  return (
    <>
      <SEOHead 
        title="Supplement Knowledgebase - Evidence-Based Reviews"
        description="Browse our comprehensive supplement knowledgebase with evidence-based reviews, research grades, and clinical study summaries. Find detailed information on vitamins, minerals, proteins, and more."
        keywords="supplement knowledgebase, evidence-based supplements, supplement reviews, clinical research, supplement guide"
      />
      <div className="min-h-screen bg-background flex flex-col" data-layout-page>
        {/* Anchor for "top" navigation */}
        <div id="top" className="absolute" style={{ top: 'var(--header-height)' }}></div>
        
        <main className="flex-1" data-page-content id="hero">
          {/* Hero Section */}
          <section className="bg-primary" data-section style={{ paddingBlock: 'clamp(3rem, 8vh, 6rem)' }}>
            <div data-layout-container>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-primary-foreground mb-4">Supplement Knowledgebase</h1>
                <p className="text-secondary text-lg md:text-xl mb-8">
                  Evidence-based information on supplements, backed by scientific research
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search supplements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-card border-2 border-secondary rounded-xl text-foreground text-base focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Knowledgebase Content */}
          <section data-layout-section>
            <div data-layout-container>
              {showSearchResults ? (
                // Search Results View
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((route) => (
                      <div
                        key={route.key}
                        onClick={() => onNavigate(route.key)}
                        className="bg-card border border-secondary rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] group"
                        data-knowledgebase-card
                      >
                        <h3 className="text-primary group-hover:text-primary/80 transition-colors mb-2">
                          {route.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {route.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground text-lg">
                        No supplements found matching "{searchQuery}"
                      </p>
                    </div>
                  )}
                </>
              ) : (
                // Categorized View
                <div className="space-y-12">
                  {sortedSubcategories.map(subcategory => {
                    const routes = routesBySubcategory[subcategory];
                    return (
                      <div key={subcategory}>
                        <h2 className="text-primary mb-6">{subcategory}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {routes.map((route) => (
                            <div
                              key={route.key}
                              onClick={() => onNavigate(route.key)}
                              className="bg-card border border-secondary rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] group"
                              data-knowledgebase-card
                            >
                              <h3 className="text-primary group-hover:text-primary/80 transition-colors mb-2">
                                {route.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {route.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}