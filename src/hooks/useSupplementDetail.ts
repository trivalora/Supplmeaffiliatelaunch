/**
 * React Hook: useSupplementDetail
 * Fetches single supplement details from API
 */

import { useState, useEffect } from 'react';

interface SupplementDetail {
  id: string;
  slug: string;
  name: string;
  display_name: string;
  subcategory: string | null;
  description: string | null;
  hero_description: string | null;
  hero_image_url: string | null;
  product_count: number;
  min_price: number | null;
  max_price: number | null;
  avg_price: number | null;
}

interface UseSupplementDetailReturn {
  supplement: SupplementDetail | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useSupplementDetail(slug: string): UseSupplementDetailReturn {
  const [supplement, setSupplement] = useState<SupplementDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSupplement = async () => {
    if (!slug) {
      setError('Supplement slug is required');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/supplements/${slug}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Supplement not found');
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setSupplement(data.supplement);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch supplement');
      console.error('Error fetching supplement:', err);
      setSupplement(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupplement();
  }, [slug]);

  return {
    supplement,
    loading,
    error,
    refetch: fetchSupplement,
  };
}
