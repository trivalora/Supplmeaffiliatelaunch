/**
 * React Hook: useProductSearch
 * Full-text search across all products with filtering
 */

import { useState, useEffect, useCallback } from 'react';

interface Price {
  retailer: string;
  retailer_slug: string;
  retailer_display_name: string;
  price: number;
  currency: string;
  product_url: string;
  affiliate_url: string | null;
  in_stock: boolean;
}

interface Product {
  id: string;
  dsld_id: string;
  brand: string;
  product_name: string;
  display_name: string | null;
  serving_size: string | null;
  third_party_tested: boolean;
  certifications: string[];
  prices: Price[];
  best_total_price: number | null;
  supplement_slug: string;
  supplement_name: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface SearchFilters {
  brand?: string;
  retailer?: string;
  min_price?: number;
  max_price?: number;
  third_party_tested?: boolean;
  in_stock?: boolean;
  sort?: 'price_asc' | 'price_desc' | 'brand_asc' | 'brand_desc';
  page?: number;
  limit?: number;
}

interface UseProductSearchReturn {
  products: Product[];
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
  query: string;
  filters: SearchFilters;
  setQuery: (query: string) => void;
  setFilters: (filters: SearchFilters) => void;
  search: (searchQuery: string) => void;
  refetch: () => void;
}

export function useProductSearch(
  initialQuery: string = '',
  initialFilters: SearchFilters = {}
): UseProductSearchReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>({
    page: 1,
    limit: 20,
    in_stock: true,
    ...initialFilters,
  });

  const performSearch = useCallback(async () => {
    if (!query || query.length < 2) {
      setProducts([]);
      setPagination(null);
      setLoading(false);
      if (query.length > 0 && query.length < 2) {
        setError('Search query must be at least 2 characters');
      } else {
        setError(null);
      }
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Build query string
      const params = new URLSearchParams({ q: query });
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value));
        }
      });

      const response = await fetch(`/api/products/search?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Invalid search query');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProducts(data.products || []);
      setPagination(data.pagination || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      console.error('Error searching products:', err);
      setProducts([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, [query, filters]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch();
    }, 300); // Debounce 300ms

    return () => clearTimeout(timeoutId);
  }, [performSearch]);

  const search = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilters((prev) => ({ ...prev, page: 1 })); // Reset to page 1
  };

  return {
    products,
    pagination,
    loading,
    error,
    query,
    filters,
    setQuery,
    setFilters,
    search,
    refetch: performSearch,
  };
}
