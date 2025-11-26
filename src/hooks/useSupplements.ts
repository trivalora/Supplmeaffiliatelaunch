/**
 * React Hook: useSupplements
 * Fetches list of all supplements from API
 */

import { useState, useEffect } from 'react';

interface Supplement {
  id: string;
  slug: string;
  name: string;
  display_name: string;
  subcategory: string | null;
  description: string | null;
  product_count: number;
  min_price: number | null;
  max_price: number | null;
}

interface UseSupplementsReturn {
  supplements: Supplement[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useSupplements(): UseSupplementsReturn {
  const [supplements, setSupplements] = useState<Supplement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSupplements = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/supplements');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setSupplements(data.supplements || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch supplements');
      console.error('Error fetching supplements:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupplements();
  }, []);

  return {
    supplements,
    loading,
    error,
    refetch: fetchSupplements,
  };
}
