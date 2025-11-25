'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { SearchResults } from '@/components/shared/content/SearchResults';
import { useAffiliateTooltip, AffiliateTooltip } from '@/components/shared/ui-extensions/AffiliateTooltip';
import IHerbBadgeLogoRgb from '../imports/IHerbBadgeLogoRgb1-106-1526';
import { trackComparisonProductImpression, trackComparisonProductClick } from '@/lib/analytics';
import { DualRangeSlider } from './ui/dual-range-slider';

const imgAmazonButton = '/images/amazon-button.png';

interface ProductComparisonClientProps {
  supplementId: string;
}

// Map our 18 supplements to the API endpoints
const SUPPLEMENTS = [
  { id: 'ashwagandha', name: 'Ashwagandha', icon: '🌿' },
  { id: 'bcaa', name: 'BCAA', icon: '💪' },
  { id: 'calcium', name: 'Calcium', icon: '🦴' },
  { id: 'casein', name: 'Casein', icon: '🥛' },
  { id: 'collagen', name: 'Collagen', icon: '✨' },
  { id: 'creatine', name: 'Creatine', icon: '⚡' },
  { id: 'curcumin', name: 'Curcumin', icon: '🧡' },
  { id: 'iron', name: 'Iron', icon: '🔴' },
  { id: 'magnesium', name: 'Magnesium', icon: '⚪' },
  { id: 'multivitamin', name: 'Multivitamin', icon: '💊' },
  { id: 'omega-3', name: 'Omega-3', icon: '🐟' },
  { id: 'prebiotics', name: 'Prebiotics', icon: '🌱' },
  { id: 'probiotics', name: 'Probiotics', icon: '🦠' },
  { id: 'vitamin-c', name: 'Vitamin C', icon: '🍊' },
  { id: 'vitamin-d', name: 'Vitamin D', icon: '☀️' },
  { id: 'whey', name: 'Whey Protein', icon: '🏋️' },
  { id: 'zinc', name: 'Zinc', icon: '⚙️' },
];

interface ProductData {
  supplement: string;
  metadata: any;
  filters: Record<string, any>;
  products: any[];
}

export function ProductComparisonClient({ supplementId }: ProductComparisonClientProps) {
  const router = useRouter();
  const [currentData, setCurrentData] = useState<any[] | null>(null);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price_asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [priceFilterActive, setPriceFilterActive] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(25);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const tooltipHandlers = useAffiliateTooltip();

  // Calculate min/max prices from current data
  const priceMinMax = useMemo(() => {
    if (!currentData || currentData.length === 0) {
      return { min: 0, max: 100 };
    }
    const prices = currentData
      .map(p => p.price_usd || p.price || 0)
      .filter(p => p > 0);
    
    if (prices.length === 0) return { min: 0, max: 100 };
    
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    
    return { min: Math.max(0, min), max: Math.max(min + 10, max) };
  }, [currentData]);

  // Initialize price range when data loads
  useEffect(() => {
    if (priceMinMax) {
      setPriceRange([priceMinMax.min, priceMinMax.max]);
      setPriceFilterActive(false);
    }
  }, [priceMinMax]);

  // Load supplement data on mount or when supplementId changes
  useEffect(() => {
    if (supplementId) {
      loadSupplement(supplementId);
    }
  }, [supplementId]);

  // Reset displayed count when search or sort changes
  useEffect(() => {
    setDisplayedCount(25);
  }, [searchQuery, sortBy, priceFilterActive]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };

    if (showSearchDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchDropdown]);

  async function loadSupplement(supplement: string) {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/products/supplements/${supplement}.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
      }
      
      const data: ProductData = await response.json();
      
      setCurrentData(data.products || []);
      setFilters(data.filters || {});
      setActiveDietaryFilters(new Set());
    } catch (err) {
      console.error('Error loading supplement:', err);
      setError(err instanceof Error ? err.message : 'Failed to load supplement data');
    } finally {
      setLoading(false);
    }
  }

  function getNormalizedProductName(product: any): string {
    const name = product.dsld_product_name || product.brand || '';
    return name
      .replace(/\b\d+\s*(mg|mcg|iu|g|ml|oz|capsules|tablets|softgels|servings|count)\b/gi, '')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s*,\s*\d+.*$/g, '')
      .trim();
  }

  function addUTMParameters(url: string): string {
    if (!url) return url;
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('utm_source', 'suppl.me');
      urlObj.searchParams.set('utm_campaign', 'affiliate_inquiry');
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  // Filter and sort products
  const allFilteredProducts = currentData ? currentData.filter(product => {
    // Search filter
    if (searchQuery) {
      const searchText = (
        (product.retailer_prices && product.retailer_prices[0]?.product_name || '') + ' ' +
        (product.brand || '') + ' ' +
        (product.retailer_prices?.map((r: any) => r.retailer).join(' ') || '')
      ).toLowerCase();
      if (!searchText.includes(searchQuery.toLowerCase())) return false;
    }
    
    // Price range filter (based on lowest price_usd) - only apply if filter is active
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
  }) : [];

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
    if (!currentData) return {};
    
    const counts: Record<string, number> = {};
    const allFilterKeys = Object.keys(filters);
    
    for (const filterKey of allFilterKeys) {
      let matchingCount = 0;
      
      for (const product of currentData) {
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
                  <span className="font-semibold text-foreground">{currentData?.length || 0}</span> total products
                  {allFilteredProducts.length < (currentData?.length || 0) && (
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

              {/* Filters Section - continuing in next file chunk */}
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
            {loading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {!loading && !error && filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your filters</p>
                {currentData && currentData.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">Try clearing some filters to see more results</p>
                )}
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <>
                {/* Desktop Table View */}
                <div className="hidden lg:block bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-tertiary border-b border-secondary/20">
                        <tr>
                          <th className="text-left p-4 font-medium text-sm w-24">Image</th>
                          <th className="text-left p-4 font-medium text-sm w-32">Best Price</th>
                          <th className="text-left p-4 font-medium text-sm">Product</th>
                          <th className="text-left p-4 font-medium text-sm w-40">Details</th>
                          <th className="text-left p-4 font-medium text-sm">All Retailers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((product, idx) => {
                          const lowestRetailerPrice = product.retailer_prices?.sort((a: any, b: any) => a.price_per_unit - b.price_per_unit)[0];
                          const imageUrl = product.product_image_url || lowestRetailerPrice?.image_url || product.retailer_prices?.find((r: any) => r.image_url)?.image_url;
                          const productId = product.id || `${product.brand?.toLowerCase().replace(/\s+/g, '-')}-${idx}`;
                          
                          return (
                            <tr 
                              key={idx} 
                              onClick={() => {
                                if (productId) {
                                  router.push(`/${supplementId}/product/${productId}`);
                                  trackComparisonProductClick(
                                    {
                                      id: productId,
                                      name: product.dsld_product_name || product.brand || 'Unknown Product',
                                      brand: product.brand || 'Unknown Brand',
                                      price: lowestRetailerPrice?.price || 0,
                                      pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
                                      unit: product.unit || 'unit',
                                      retailer: lowestRetailerPrice?.retailer || 'Unknown',
                                      productUrl: lowestRetailerPrice?.product_url || '',
                                      position: idx + 1,
                                    },
                                    supplementId,
                                    'view_details'
                                  );
                                }
                              }}
                              className={`border-b-2 border-secondary/30 hover:bg-tertiary/70 transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-background' : 'bg-tertiary/20'}`}
                            >
                              <td className="p-4">
                                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-2xl shrink-0 overflow-hidden">
                                  {imageUrl ? (
                                    <img 
                                      src={imageUrl}
                                      alt={product.dsld_product_name || 'Product'}
                                      className="w-full h-full object-cover"
                                      style={{ objectFit: 'cover' }}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  ) : (
                                    product.brand?.charAt(0) || '?'
                                  )}
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-xl font-bold text-primary mb-1">${lowestRetailerPrice?.price?.toFixed(2)}</div>
                                <div className="text-xs text-muted-foreground">
                                  ${lowestRetailerPrice?.price_per_unit?.toFixed(4)} per {product.unit}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">{lowestRetailerPrice?.retailer}</div>
                              </td>
                              <td className="p-4">
                                <div className="font-medium mb-1">{getNormalizedProductName(product)}</div>
                                <div className="text-sm text-muted-foreground">{product.brand}</div>
                              </td>
                              <td className="p-4">
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  {product.amount_per_serving && product.unit ? (
                                    <div><span className="font-medium text-foreground">Dosage:</span> {product.amount_per_serving} {product.unit}</div>
                                  ) : null}
                                  {product.net_contents ? (
                                    <div><span className="font-medium text-foreground">Contents:</span> {product.net_contents}</div>
                                  ) : null}
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="flex flex-wrap gap-3">
                                  {product.retailer_prices?.sort((a: any, b: any) => a.price_per_unit - b.price_per_unit).map((r: any, rIdx: number) => {
                                    const isLowestPrice = rIdx === 0;
                                    return (
                                      <div key={rIdx} className={`border rounded-lg p-3 min-w-[200px] ${isLowestPrice ? 'border-primary bg-secondary/10' : 'border-secondary/30'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                          <div className="font-medium text-sm">{r.retailer}</div>
                                        </div>
                                        <div className="text-lg font-bold text-primary mb-1">${r.price?.toFixed(2)}</div>
                                        <div className="text-xs text-muted-foreground mb-2">${r.price_per_unit?.toFixed(4)} per {product.unit}</div>
                                        {r.retailer.toLowerCase() === 'iherb' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <div className="h-5 w-5"><IHerbBadgeLogoRgb /></div>
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'gnc' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src="/logos/gnc.svg" alt="GNC" className="h-4 w-auto" />
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'walmart' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src="/logos/walmart.svg" alt="Walmart" className="h-4 w-auto" />
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'amazon' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-[#FF9900] hover:bg-[#FF9900]/90 transition-colors"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src={imgAmazonButton} alt="Amazon" className="h-4 w-auto invert" />
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'vitacost' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src="/logos/vitacost.svg" alt="Vitacost" className="h-4 w-auto" />
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'bodybuilding.com' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src="/logos/bodybuilding.png" alt="Bodybuilding.com" className="h-4 w-auto" />
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : r.retailer.toLowerCase() === 'supplement warehouse' ? (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            <img src="/logos/supplement-warehouse.png" alt="Supplement Warehouse" className="h-5 w-auto object-contain" />
                                            <span className="text-sm font-medium">Buy Now</span>
                                          </a>
                                        ) : (
                                          <a
                                            href={addUTMParameters(r.product_url)}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity text-sm font-medium"
                                            {...tooltipHandlers}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              trackComparisonProductClick(
                                                {
                                                  id: product.id || `${product.brand}-${idx}`,
                                                  name: product.dsld_product_name || product.brand || 'Unknown Product',
                                                  brand: product.brand || 'Unknown Brand',
                                                  price: r.price,
                                                  pricePerUnit: r.price_per_unit,
                                                  unit: product.unit || 'unit',
                                                  retailer: r.retailer,
                                                  productUrl: r.product_url,
                                                  position: idx + 1,
                                                },
                                                supplementId,
                                                'buy_now'
                                              );
                                            }}
                                          >
                                            Buy Now at {r.retailer}
                                          </a>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4">
                  {filteredProducts.map((product, idx) => {
                    const lowestRetailerPrice = product.retailer_prices?.sort((a: any, b: any) => a.price_per_unit - b.price_per_unit)[0];
                    const imageUrl = product.product_image_url || lowestRetailerPrice?.image_url || product.retailer_prices?.find((r: any) => r.image_url)?.image_url;
                    const productId = product.id || `${product.brand?.toLowerCase().replace(/\s+/g, '-')}-${idx}`;
                    
                    return (
                      <div 
                        key={idx} 
                        onClick={() => {
                          if (productId) {
                            router.push(`/${supplementId}/product/${productId}`);
                            trackComparisonProductClick(
                              {
                                id: productId,
                                name: product.dsld_product_name || product.brand || 'Unknown Product',
                                brand: product.brand || 'Unknown Brand',
                                price: lowestRetailerPrice?.price || 0,
                                pricePerUnit: lowestRetailerPrice?.price_per_unit || 0,
                                unit: product.unit || 'unit',
                                retailer: lowestRetailerPrice?.retailer || 'Unknown',
                                productUrl: lowestRetailerPrice?.product_url || '',
                                position: idx + 1,
                              },
                              supplementId,
                              'view_details'
                            );
                          }
                        }}
                        className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <div className="p-4 space-y-3">
                          <div className="flex gap-3">
                            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-2xl shrink-0 overflow-hidden">
                              {imageUrl ? (
                                <img 
                                  src={imageUrl}
                                  alt={product.dsld_product_name || 'Product'}
                                  className="w-full h-full object-cover"
                                  style={{ objectFit: 'cover' }}
                                  loading="lazy"
                                />
                              ) : (product.brand?.charAt(0) || '?')}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm mb-1 line-clamp-2">{getNormalizedProductName(product)}</h3>
                              <p className="text-xs text-muted-foreground mb-2">{product.brand}</p>
                              <div className="inline-flex flex-col gap-0.5 bg-secondary/10 border border-secondary rounded-lg px-2.5 py-1.5">
                                <div className="text-base font-bold text-primary">${lowestRetailerPrice?.price?.toFixed(2)}</div>
                                <div className="text-xs text-muted-foreground">${lowestRetailerPrice?.price_per_unit?.toFixed(4)}/{product.unit}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-secondary/20 p-3 bg-tertiary/10">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Available at {product.retailer_prices?.length || 0} retailer{(product.retailer_prices?.length || 0) !== 1 ? 's' : ''}</h4>
                          <div className="space-y-2">
                            {product.retailer_prices?.sort((a: any, b: any) => a.price_per_unit - b.price_per_unit).slice(0, 3).map((r: any, rIdx: number) => {
                              const isLowestPrice = rIdx === 0;
                              return (
                                <div key={rIdx} className={`border rounded-lg p-2.5 ${isLowestPrice ? 'border-primary bg-secondary/10' : 'border-secondary/30 bg-card'}`}>
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <div className="font-medium text-sm mb-0.5">{r.retailer}</div>
                                      <div className="text-base font-bold text-primary">${r.price?.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">(${r.price_per_unit?.toFixed(4)}/{product.unit})</span></div>
                                    </div>
                                  </div>
                                  {r.retailer.toLowerCase() === 'iherb' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <div className="h-4 w-4"><IHerbBadgeLogoRgb /></div><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : r.retailer.toLowerCase() === 'gnc' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <img src="/logos/gnc.svg" alt="GNC" className="h-3.5 w-auto" /><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : r.retailer.toLowerCase() === 'walmart' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <img src="/logos/walmart.svg" alt="Walmart" className="h-3.5 w-auto" /><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : r.retailer.toLowerCase() === 'amazon' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-[#FF9900] hover:bg-[#FF9900]/90 transition-colors" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                      >
                                        <img src={imgAmazonButton} alt="Amazon" className="h-3.5 w-auto invert" />
                                      </a>
                                  ) : r.retailer.toLowerCase() === 'vitacost' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <img src="/logos/vitacost.svg" alt="Vitacost" className="h-3.5 w-auto" /><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : r.retailer.toLowerCase() === 'bodybuilding.com' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-start gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <img src="/logos/bodybuilding.png" alt="Bodybuilding.com" className="h-3.5 w-auto" /><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : r.retailer.toLowerCase() === 'supplement warehouse' ? (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      <img src="/logos/supplement-warehouse.png" alt="Supplement Warehouse" className="h-4 w-auto object-contain" /><span className="text-sm font-medium">Buy Now</span>
                                    </a>
                                  ) : (
                                    <a 
                                      href={addUTMParameters(r.product_url)} 
                                      target="_blank" 
                                      rel="nofollow noreferrer" 
                                      className="flex items-center justify-center w-full px-3 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity text-sm font-medium" 
                                      {...tooltipHandlers}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        trackComparisonProductClick(
                                          {
                                            id: product.id || `${product.brand}-${idx}`,
                                            name: product.dsld_product_name || product.brand || 'Unknown Product',
                                            brand: product.brand || 'Unknown Brand',
                                            price: r.price,
                                            pricePerUnit: r.price_per_unit,
                                            unit: product.unit || 'unit',
                                            retailer: r.retailer,
                                            productUrl: r.product_url,
                                            position: idx + 1,
                                          },
                                          supplementId,
                                          'buy_now'
                                        );
                                      }}
                                    >
                                      Buy Now at {r.retailer}
                                    </a>
                                  )}
                                </div>
                              );
                            })}
                            {product.retailer_prices && product.retailer_prices.length > 3 && (
                              <div className="text-center text-xs text-muted-foreground pt-1">+ {product.retailer_prices.length - 3} more retailer{product.retailer_prices.length - 3 !== 1 ? 's' : ''}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

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
