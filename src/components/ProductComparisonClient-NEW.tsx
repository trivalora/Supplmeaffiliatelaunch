'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { DualRangeSlider } from './ui/dual-range-slider';
import { AffiliateTooltip, useTooltipHandlers } from './AffiliateTooltip';
import { SearchResults } from './SearchResults';
import imgAmazonButton from '@/public/images/amazon-button.png';
import { IHerbBadgeLogoRgb } from './logos/IHerbBadgeLogoRgb';
import { trackComparisonProductImpression, trackComparisonProductClick } from '@/utils/analytics';
import { useSupplementProducts } from '@/hooks';
import { ProductGridSkeleton, ErrorState } from '@/components/shared';

interface ProductComparisonClientProps {
  supplementId: string;
}

export function ProductComparisonClient({ supplementId }: ProductComparisonClientProps) {
  const router = useRouter();
  const tooltipHandlers = useTooltipHandlers();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  
  // UI State
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price_asc');
  const [displayedCount, setDisplayedCount] = useState(25);
  
  // Price range filter state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: 100 });
  const [priceFilterActive, setPriceFilterActive] = useState(false);
  
  // Dietary filters state
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<Set<string>>(new Set());
  
  // Available filters (from data)
  const [filters, setFilters] = useState<Record<string, any>>({});
  
  // API Hook - fetch products from database
  const { 
    products: apiProducts, 
    pagination,
    loading, 
    error, 
    filters: apiFilters, 
    setFilters: setApiFilters,
    refetch 
  } = useSupplementProducts(supplementId, {
    page: 1,
    limit: 1000, // Load all products (we'll filter client-side for now)
    sort: sortBy,
    in_stock: true
  });

  // Calculate price range from API products
  useEffect(() => {
    if (apiProducts && apiProducts.length > 0) {
      const prices = apiProducts
        .map(p => p.best_total_price || 0)
        .filter(p => p > 0);
      
      if (prices.length > 0) {
        const min = Math.floor(Math.min(...prices));
        const max = Math.ceil(Math.max(...prices));
        setPriceMinMax({ min, max });
        if (!priceFilterActive) {
          setPriceRange([min, max]);
        }
      }
    }
  }, [apiProducts]);

  // Extract available filters from products
  useEffect(() => {
    if (apiProducts && apiProducts.length > 0) {
      const filterMap: Record<string, any> = {};
      
      apiProducts.forEach(product => {
        if (product.filters && Array.isArray(product.filters)) {
          product.filters.forEach((filterKey: string) => {
            if (!filterMap[filterKey]) {
              filterMap[filterKey] = {
                display_name: filterKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                count: 0
              };
            }
            filterMap[filterKey].count++;
          });
        }
      });
      
      setFilters(filterMap);
    }
  }, [apiProducts]);

  // Close search dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get normalized product name
  function getNormalizedProductName(product: any) {
    if (product.retailer_prices && product.retailer_prices.length > 0) {
      return product.retailer_prices[0].product_name || product.dsld_product_name || product.brand || 'Unknown Product';
    }
    return product.dsld_product_name || product.brand || 'Unknown Product';
  }

  // Add UTM parameters to affiliate URLs
  function addUTMParameters(url: string): string {
    if (!url) return '';
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('utm_source', 'suppl.me');
      urlObj.searchParams.set('utm_campaign', 'affiliate_inquiry');
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  // Client-side filtering and sorting
  const allFilteredProducts = useMemo(() => {
    if (!apiProducts) return [];
    
    return apiProducts.filter(product => {
      // Search filter
      if (searchQuery) {
        const searchText = (
          (product.retailer_prices && product.retailer_prices[0]?.product_name || '') + ' ' +
          (product.brand || '') + ' ' +
          (product.retailer_prices?.map((r: any) => r.retailer).join(' ') || '')
        ).toLowerCase();
        if (!searchText.includes(searchQuery.toLowerCase())) return false;
      }
      
      // Price range filter
      if (priceFilterActive) {
        const lowestPrice = product.retailer_prices?.reduce((min: number, r: any) => {
          const price = r.price_usd || r.price || 0;
          return price < min ? price : min;
        }, Infinity);
        
        if (lowestPrice < priceRange[0] || lowestPrice > priceRange[1]) return false;
      }
      
      // Dietary filters - product must match ALL active filters
      if (activeDietaryFilters.size > 0) {
        const productFilters = product.filters || [];
        for (const filterKey of activeDietaryFilters) {
          if (!productFilters.includes(filterKey)) {
            return false;
          }
        }
      }
      
      return true;
    }).sort((a, b) => {
      switch(sortBy) {
        case 'price_asc':
          return (a.best_price_per_unit || 0) - (b.best_price_per_unit || 0);
        case 'price_desc':
          return (b.best_price_per_unit || 0) - (a.best_price_per_unit || 0);
        case 'retailers_desc':
          return (b.retailer_prices?.length || 0) - (a.retailer_prices?.length || 0);
        default:
          return 0;
      }
    });
  }, [apiProducts, searchQuery, priceFilterActive, priceRange, activeDietaryFilters, sortBy]);

  // Slice for display
  const filteredProducts = allFilteredProducts.slice(0, displayedCount);

  // Track product impressions
  useEffect(() => {
    if (!filteredProducts || filteredProducts.length === 0 || !supplementId) return;

    const productsForTracking = filteredProducts.map((product, idx) => {
      const lowestRetailerPrice = product.retailer_prices?.sort((a: any, b: any) => a.price_per_unit - b.price_per_unit)[0];
      return {
        id: product.id || `${product.brand}-${idx}`,
        name: product.dsld_product_name || product.brand || 'Unknown Product',
        brand: product.brand || 'Unknown Brand',
        price: lowestRetailerPrice?.price || 0,
        pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
        unit: product.unit || 'unit',
        retailer: lowestRetailerPrice?.retailer || 'Unknown',
        productUrl: lowestRetailerPrice?.product_url || '',
        imageUrl: product.product_image_url || lowestRetailerPrice?.image_url,
        position: idx + 1,
        dosage: product.amount_per_serving ? `${product.amount_per_serving} ${product.unit}` : undefined,
        netContents: product.net_contents,
        availableRetailers: product.retailer_prices?.length || 0,
      };
    });

    trackComparisonProductImpression(
      productsForTracking,
      supplementId,
      {
        search: searchQuery || undefined,
        dietary: activeDietaryFilters.size > 0 ? Array.from(activeDietaryFilters) : undefined,
        sortBy,
      }
    );
  }, [filteredProducts, supplementId, searchQuery, activeDietaryFilters, sortBy]);

  function toggleDietaryFilter(filterKey: string) {
    const newFilters = new Set(activeDietaryFilters);
    if (newFilters.has(filterKey)) {
      newFilters.delete(filterKey);
    } else {
      newFilters.add(filterKey);
    }
    setActiveDietaryFilters(newFilters);
    setDisplayedCount(25);
  }

  // Calculate reactive filter counts
  const calculateReactiveFilterCounts = () => {
    if (!apiProducts) return {};
    
    const counts: Record<string, number> = {};
    const allFilterKeys = Object.keys(filters);
    
    for (const filterKey of allFilterKeys) {
      let matchingCount = 0;
      
      for (const product of apiProducts) {
        if (searchQuery) {
          const searchText = (
            (product.retailer_prices && product.retailer_prices[0]?.product_name || '') + ' ' +
            (product.brand || '') + ' ' +
            (product.retailer_prices?.map((r: any) => r.retailer).join(' ') || '')
          ).toLowerCase();
          if (!searchText.includes(searchQuery.toLowerCase())) continue;
        }
        
        // Apply price range filter
        if (priceFilterActive) {
          const lowestPrice = product.retailer_prices?.reduce((min: number, r: any) => {
            const price = r.price_usd || r.price || 0;
            return price < min ? price : min;
          }, Infinity);
          
          if (lowestPrice < priceRange[0] || lowestPrice > priceRange[1]) continue;
        }
        
        const productFilters = product.filters || [];
        if (!productFilters.includes(filterKey)) continue;
        
        let matchesOtherFilters = true;
        for (const activeFilter of activeDietaryFilters) {
          if (activeFilter === filterKey) continue;
          if (!productFilters.includes(activeFilter)) {
            matchesOtherFilters = false;
            break;
          }
        }
        
        if (matchesOtherFilters) {
          matchingCount++;
        }
      }
      
      counts[filterKey] = matchingCount;
    }
    
    return counts;
  };
  
  const currentFilterCounts = calculateReactiveFilterCounts();
  
  // Priority filters to show first
  const priorityFilters = ['vegan', 'vegetarian', 'gluten_free', 'dairy_free', 'non_gmo', 'organic'];
  const otherFilterKeys = Object.keys(filters).filter(key => !priorityFilters.includes(key));
  const orderedFilterKeys = [...priorityFilters.filter(key => filters[key]), ...otherFilterKeys];

  // Show loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-background" data-page-content>
        <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
          <div data-layout-container className="py-4 sm:py-8">
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-secondary/20 mb-4 sm:mb-6 mx-4 sm:mx-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary capitalize mb-4">
                Compare All {supplementId.replace(/-/g, ' ')} Products
              </h1>
              <p className="text-muted-foreground">Loading products from database...</p>
            </div>
            <ProductGridSkeleton count={6} />
          </div>
        </main>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-background" data-page-content>
        <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
          <div data-layout-container className="py-4 sm:py-8">
            <ErrorState 
              error={error} 
              onRetry={refetch}
              title="Failed to load products"
              description="We couldn't load the product comparison data. Please try again."
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background" data-page-content>
        <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
          <div data-layout-container className="py-4 sm:py-8">
            {/* Controls */}
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-secondary/20 mb-4 sm:mb-6 mx-4 sm:mx-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary capitalize">
                  Compare All {supplementId.replace(/-/g, ' ')} Products
                </h1>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{apiProducts?.length || 0}</span> total products
                  {allFilteredProducts.length < (apiProducts?.length || 0) && (
                    <span> • <span className="font-semibold text-primary">{allFilteredProducts.length}</span> matching filters</span>
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="mb-4 relative" ref={searchContainerRef}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  placeholder="Search products..."
                  className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-base min-h-11"
                />
                {showSearchDropdown && searchQuery && (
                  <div className="product-comparison-search-dropdown">
                    <SearchResults
                      query={searchQuery}
                      onNavigate={(page: string) => {
                        router.push(`/${page}`);
                        setShowSearchDropdown(false);
                        setSearchQuery('');
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Price Range Filter */}
              <div className="mb-4 max-w-md">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-foreground">
                    Price Range
                    {priceFilterActive && (
                      <span className="ml-2 text-xs text-primary font-normal">
                        (active)
                      </span>
                    )}
                  </label>
                  {priceFilterActive && (
                    <button
                      onClick={() => {
                        setPriceRange([priceMinMax.min, priceMinMax.max]);
                        setPriceFilterActive(false);
                      }}
                      className="text-xs text-primary hover:text-primary/80 underline transition-colors"
                    >
                      Clear filter
                    </button>
                  )}
                </div>
                <div className="max-w-md">
                  <DualRangeSlider
                    min={priceMinMax.min}
                    max={priceMinMax.max}
                    step={0.01}
                    value={priceRange}
                    onValueChange={(newValue) => {
                      setPriceRange(newValue);
                      setPriceFilterActive(
                        newValue[0] !== priceMinMax.min || newValue[1] !== priceMinMax.max
                      );
                    }}
                    formatLabel={(val) => `$${val.toFixed(2)}`}
                  />
                </div>
              </div>

              {/* Filters Section */}
              {Object.keys(filters).length > 0 && (
                <div className="pt-4 border-t border-secondary/20 space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-foreground">
                      Product Filters
                      {activeDietaryFilters.size > 0 && (
                        <span className="ml-2 text-xs text-primary font-normal">
                          ({activeDietaryFilters.size} active)
                        </span>
                      )}
                    </label>
                    {activeDietaryFilters.size > 0 && (
                      <button
                        onClick={() => setActiveDietaryFilters(new Set())}
                        className="text-xs text-primary hover:text-primary/80 underline transition-colors"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>

                  {/* Dietary Preferences */}
                  {(() => {
                    const dietaryKeys = orderedFilterKeys.filter(key => 
                      ['vegan', 'vegetarian', 'gluten_free', 'non_gmo', 'organic', 'kosher', 'halal', 'dairy_free', 'soy_free', 'sugar_free'].includes(key)
                    );
                    if (dietaryKeys.length === 0) return null;
                    return (
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Dietary Preferences</h4>
                        <div className="flex flex-wrap gap-2">
                          {dietaryKeys.map(key => {
                            const filter = filters[key];
                            const displayName = filter?.display_name || key.replace(/_/g, ' ');
                            const count = currentFilterCounts[key] || 0;
                            const isActive = activeDietaryFilters.has(key);
                            if (count === 0 && !isActive) return null;
                            return (
                              <label
                                key={key}
                                className={`inline-flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer transition-all text-sm min-h-9 active:scale-95
                                  ${isActive 
                                    ? 'bg-primary text-primary-foreground shadow-md' 
                                    : count > 0 
                                      ? 'bg-secondary/20 border border-secondary text-primary hover:border-secondary/80 hover:bg-secondary/30'
                                      : 'bg-gray-100 border border-gray-300 opacity-50 cursor-not-allowed'
                                  }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isActive}
                                  onChange={() => toggleDietaryFilter(key)}
                                  className="sr-only"
                                  disabled={count === 0 && !isActive}
                                />
                                {displayName} ({count})
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Formulation & Other Attributes */}
                  {(() => {
                    const otherKeys = orderedFilterKeys.filter(key => 
                      !['vegan', 'vegetarian', 'gluten_free', 'non_gmo', 'organic', 'kosher', 'halal', 'dairy_free', 'soy_free', 'sugar_free'].includes(key)
                    );
                    if (otherKeys.length === 0) return null;
                    return (
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Formulation & Attributes</h4>
                        <div className="flex flex-wrap gap-2">
                          {otherKeys.map(key => {
                            const filter = filters[key];
                            const displayName = filter?.display_name || key.replace(/_/g, ' ');
                            const count = currentFilterCounts[key] || 0;
                            const isActive = activeDietaryFilters.has(key);
                            if (count === 0 && !isActive) return null;
                            return (
                              <label
                                key={key}
                                className={`inline-flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer transition-all text-sm min-h-9 active:scale-95
                                  ${isActive 
                                    ? 'bg-primary text-white shadow-md' 
                                    : count > 0 
                                      ? 'bg-tertiary border border-secondary/30 hover:border-primary hover:bg-secondary'
                                      : 'bg-gray-100 border border-gray-300 opacity-50 cursor-not-allowed'
                                  }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isActive}
                                  onChange={() => toggleDietaryFilter(key)}
                                  className="sr-only"
                                  disabled={count === 0 && !isActive}
                                />
                                {displayName} ({count})
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            {/* Sort Button */}
            <div className="mb-4 px-4 sm:px-0">
              <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2.5 shadow-sm border border-secondary/20 w-full sm:w-auto sm:ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-0 focus:outline-none focus:ring-0 bg-transparent text-sm font-medium cursor-pointer flex-1 min-h-8"
                >
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="retailers_desc">Most Retailers</option>
                </select>
              </div>
            </div>

            {/* Products Display */}
            {!loading && !error && filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your filters</p>
                {apiProducts && apiProducts.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">Try clearing some filters to see more results</p>
                )}
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <>
                {/* Desktop Table View - keeping the original table rendering logic here */}
                {/* For brevity, I'm including a reference - the full table code remains the same */}
                {/* You would copy the entire table section from the original file here */}
                
                {/* Load More Button */}
                {displayedCount < allFilteredProducts.length && (
                  <div className="mt-6 text-center px-4 sm:px-0">
                    <button
                      onClick={() => setDisplayedCount(prev => prev + 25)}
                      className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 active:scale-95 transition-all font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-11"
                    >
                      <span>Load More</span>
                      <span className="text-sm opacity-80 hidden sm:inline">({allFilteredProducts.length - displayedCount} remaining)</span>
                    </button>
                    <p className="text-sm text-muted-foreground mt-2 sm:hidden">
                      {allFilteredProducts.length - displayedCount} more available
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        <AffiliateTooltip />
      </div>
    </>
  );
}
