/**
 * React Hook: useProduct
 * Fetches single product detail with all prices
 */

import { useState, useEffect } from 'react';

interface Price {
  retailer: string;
  retailer_slug: string;
  retailer_display_name: string;
  price: number;
  currency: string;
  product_url: string;
  affiliate_url: string | null;
  in_stock: boolean;
  logo_url: string | null;
  button_style: Record<string, string>;
  last_checked_at: string;
}

interface ProductDetail {
  id: string;
  dsld_id: string;
  brand: string;
  product_name: string;
  display_name: string | null;
  dsld_product_name: string | null;
  dsld_brand: string | null;
  serving_size: string | null;
  servings_per_container: string | null;
  net_quantity: string | null;
  label_data: Record<string, any>;
  ingredients: any[];
  product_image_url: string | null;
  third_party_tested: boolean;
  certifications: string[];
  supplement_slug: string;
  supplement_name: string;
  prices: Price[];
}

interface UseProductReturn {
  product: ProductDetail | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProduct(productId: string): UseProductReturn {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    if (!productId) {
      setError('Product ID is required');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/products/${productId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProduct(data.product);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
      console.error('Error fetching product:', err);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
}
