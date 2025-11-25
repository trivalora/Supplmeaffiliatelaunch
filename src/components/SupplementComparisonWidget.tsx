/**
 * Supplement Product Comparison Widget
 * 
 * Embeddable React component that displays supplement products
 * sorted by price per unit with filtering and search capabilities.
 * 
 * Usage:
 *   <SupplementComparisonWidget supplement="vitamin-d" />
 *   <SupplementComparisonWidget /> // User selects supplement
 */

import React, { useState, useEffect, useMemo } from 'react';
import './SupplementComparisonWidget.css';

// Type definitions
interface Product {
  id: string;
  dsld_id: string;
  supplement_category: string;
  product_name: string;
  brand: string;
  retailer: string;
  product_url: string;
  dsld_product_name: string;
  dsld_brand: string;
  price: number;
  price_per_unit: number;
  unit: string;
  primary_ingredient: string;
  amount_per_serving: number;
  filters: string[];
  rating?: number;
  reviews?: number;
  match_score: number;
}

interface SupplementMetadata {
  name: string;
  slug: string;
  product_count: number;
  price_range: {
    min: number;
    max: number;
    avg: number;
  };
  price_per_unit_range: {
    min: number;
    max: number;
    avg: number;
  };
  retailers: string[];
  brands: string[];
}

interface Filter {
  count: number;
  dsld_ids: string[];
  display_name: string;
}

interface SupplementData {
  supplement: string;
  metadata: SupplementMetadata;
  filters: Record<string, Filter>;
  products: Product[];
}

interface WidgetProps {
  supplement?: string;
  apiEndpoint?: string;
  defaultLimit?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  compact?: boolean;
}

const API_BASE = '/api/products';

const FILTER_CATEGORIES = {
  dietary: [
    'vegan', 'vegetarian', 'gluten_free', 'dairy_free',
    'organic', 'kosher', 'non_gmo'
  ],
  formulation: [
    'micronized', 'buffered', 'chelated', 'liposomal',
    'sustained_release', 'hydrolyzed', 'isolate'
  ],
  free_from: [
    'soy_free', 'wheat_free', 'sugar_free', 'alcohol_free'
  ]
};

const SUPPLEMENT_OPTIONS = [
  { value: 'vitamin-d', label: 'Vitamin D' },
  { value: 'vitamin-c', label: 'Vitamin C' },
  { value: 'magnesium', label: 'Magnesium' },
  { value: 'omega-3', label: 'Omega-3' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'calcium', label: 'Calcium' },
  { value: 'vitamin-b12', label: 'Vitamin B12' },
  { value: 'iron', label: 'Iron' },
  { value: 'probiotics', label: 'Probiotics' },
  { value: 'collagen', label: 'Collagen' },
  { value: 'creatine', label: 'Creatine' },
  { value: 'ashwagandha', label: 'Ashwagandha' },
  { value: 'turmeric', label: 'Turmeric' },
  { value: 'multivitamin', label: 'Multivitamin' },
  { value: 'protein-powder', label: 'Protein Powder' },
  { value: 'melatonin', label: 'Melatonin' },
  { value: 'coq10', label: 'CoQ10' }
];

export const SupplementComparisonWidget: React.FC<WidgetProps> = ({
  supplement: initialSupplement,
  apiEndpoint = API_BASE,
  defaultLimit = 20,
  showSearch = true,
  showFilters = true,
  compact = false
}) => {
  // State
  const [supplement, setSupplement] = useState(initialSupplement || '');
  const [data, setData] = useState<SupplementData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'price_per_unit' | 'price' | 'rating'>('price_per_unit');
  const [limit, setLimit] = useState(defaultLimit);
  
  // Load supplement data
  useEffect(() => {
    if (!supplement) return;
    
    setLoading(true);
    setError(null);
    
    fetch(`${apiEndpoint}/supplements/${supplement}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load supplement data');
        return res.json();
      })
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [supplement, apiEndpoint]);
  
  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!data) return [];
    
    let products = data.products;
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      products = products.filter(p =>
        p.product_name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.retailer.toLowerCase().includes(term)
      );
    }
    
    // Apply filters
    if (activeFilters.size > 0) {
      products = products.filter(p =>
        Array.from(activeFilters).every(filter =>
          p.filters.includes(filter)
        )
      );
    }
    
    // Sort
    products = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price_per_unit':
          return a.price_per_unit - b.price_per_unit;
        case 'price':
          return a.price - b.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });
    
    return products.slice(0, limit);
  }, [data, searchTerm, activeFilters, sortBy, limit]);
  
  // Toggle filter
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };
  
  // Render supplement selector
  if (!supplement) {
    return (
      <div className={`supp-widget ${compact ? 'compact' : ''}`}>
        <div className="supp-widget-header">
          <h2>Compare Supplement Prices</h2>
          <p>Select a supplement to find the best deals</p>
        </div>
        
        <div className="supp-selector">
          {SUPPLEMENT_OPTIONS.map(opt => (
            <button
              key={opt.value}
              className="supp-option"
              onClick={() => setSupplement(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  // Loading state
  if (loading) {
    return (
      <div className={`supp-widget ${compact ? 'compact' : ''}`}>
        <div className="supp-loading">Loading products...</div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className={`supp-widget ${compact ? 'compact' : ''}`}>
        <div className="supp-error">
          Error: {error}
          <button onClick={() => setSupplement('')}>Back</button>
        </div>
      </div>
    );
  }
  
  // No data
  if (!data) return null;
  
  // Main render
  return (
    <div className={`supp-widget ${compact ? 'compact' : ''}`}>
      {/* Header */}
      <div className="supp-widget-header">
        <div className="supp-header-top">
          <button 
            className="supp-back-btn" 
            onClick={() => setSupplement('')}
          >
            ← Back
          </button>
          <h2>{data.metadata.name}</h2>
        </div>
        
        <div className="supp-stats">
          <span>{data.metadata.product_count} products</span>
          <span>
            ${data.metadata.price_range.min.toFixed(2)} - 
            ${data.metadata.price_range.max.toFixed(2)}
          </span>
          <span>
            {data.metadata.retailers.length} retailers
          </span>
        </div>
      </div>
      
      {/* Search */}
      {showSearch && (
        <div className="supp-search">
          <input
            type="text"
            placeholder="Search products, brands, retailers..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      
      {/* Controls */}
      <div className="supp-controls">
        <div className="supp-sort">
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={e => setSortBy(e.target.value as any)}
          >
            <option value="price_per_unit">Price per Unit</option>
            <option value="price">Total Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        
        <div className="supp-limit">
          <label>Show:</label>
          <select 
            value={limit} 
            onChange={e => setLimit(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div className="supp-filters">
          {Object.entries(FILTER_CATEGORIES).map(([category, filters]) => {
            const availableFilters = filters.filter(f => 
              data.filters[f] && data.filters[f].count > 0
            );
            
            if (availableFilters.length === 0) return null;
            
            return (
              <div key={category} className="supp-filter-group">
                <h4>{category.replace('_', ' ')}</h4>
                <div className="supp-filter-buttons">
                  {availableFilters.map(filter => (
                    <button
                      key={filter}
                      className={`supp-filter-btn ${
                        activeFilters.has(filter) ? 'active' : ''
                      }`}
                      onClick={() => toggleFilter(filter)}
                    >
                      {data.filters[filter].display_name}
                      <span className="count">
                        {data.filters[filter].count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          
          {activeFilters.size > 0 && (
            <button 
              className="supp-clear-filters"
              onClick={() => setActiveFilters(new Set())}
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
      
      {/* Results */}
      <div className="supp-results">
        <div className="supp-results-header">
          <span>{filteredProducts.length} results</span>
        </div>
        
        <div className="supp-product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="supp-product-card">
              <div className="supp-product-main">
                <div className="supp-product-info">
                  <h3>{product.product_name}</h3>
                  <div className="supp-product-meta">
                    <span className="brand">{product.brand}</span>
                    <span className="retailer">{product.retailer}</span>
                  </div>
                  
                  {product.filters.length > 0 && (
                    <div className="supp-product-tags">
                      {product.filters.slice(0, 3).map(f => (
                        <span key={f} className="tag">
                          {data.filters[f]?.display_name || f}
                        </span>
                      ))}
                      {product.filters.length > 3 && (
                        <span className="tag more">
                          +{product.filters.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="supp-product-pricing">
                  <div className="price-per-unit">
                    <span className="label">Price per {product.unit}</span>
                    <span className="value">
                      ${product.price_per_unit.toFixed(4)}
                    </span>
                  </div>
                  
                  <div className="total-price">
                    <span className="label">Total</span>
                    <span className="value">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="amount">
                    {product.amount_per_serving} {product.unit} per serving
                  </div>
                </div>
              </div>
              
              <div className="supp-product-actions">
                <a 
                  href={product.product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="supp-buy-btn"
                >
                  View Product →
                </a>
                
                {product.rating && (
                  <div className="supp-rating">
                    ⭐ {product.rating.toFixed(1)}
                    {product.reviews && ` (${product.reviews})`}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="supp-no-results">
            No products match your filters. Try adjusting your selection.
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplementComparisonWidget;
