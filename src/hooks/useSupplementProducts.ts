/**
 * React Hook: useSupplementProducts
 * Fetches products for a supplement with filtering and pagination
 */

import { useState, useEffect, useCallback } from 'react';

interface Price {
  price: number;
  price_per_unit: number;
  product_url: string;
  affiliate_url: string;
  in_stock: boolean;
  retailer: string;
  retailer_slug: string;
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
  retailer_prices?: Price[]; // Alias for compatibility with ProductComparisonClient
  best_total_price: number | null;
  best_price_per_unit: number | null;
  supplement_slug: string;
  // Metadata fields from enrichment
  unit: string | null;
  amount_per_serving: number | null;
  net_contents: string | null;
  filters: string[];
  product_image_url: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ProductFilters {
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

interface UseSupplementProductsReturn {
  products: Product[];
  pagination: Pagination | null;
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  refetch: () => void;
}

export function useSupplementProducts(
  slug: string,
  initialFilters: ProductFilters = {}
): UseSupplementProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilters>({
    page: 1,
    limit: 20,
    in_stock: true,
    ...initialFilters,
  });

  const fetchProducts = useCallback(async () => {
    if (!slug) {
      setError('Supplement slug is required');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Build query string
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value));
        }
      });

      const response = await fetch(`/api/supplements/${slug}/products?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Supplement not found');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Map prices to retailer_prices for compatibility with ProductComparisonClient
      const productsWithRetailerPrices = (data.products || []).map((p: Product) => ({
        ...p,
        retailer_prices: p.prices
      }));
      
      setProducts(productsWithRetailerPrices);
      setPagination(data.pagination || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.error('Error fetching products:', err);
      setProducts([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, [slug, filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    pagination,
    loading,
    error,
    filters,
    setFilters,
    refetch: fetchProducts,
  };
}
