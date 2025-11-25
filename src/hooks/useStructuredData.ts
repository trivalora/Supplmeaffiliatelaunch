import { useState, useEffect } from 'react';

/**
 * Hook to load structured data JSON for a given page key
 * @param pageKey - The key to look up in /structured-data/ (e.g., 'probioticsv2', 'probiotics-comparison')
 * @returns The structured data array or null if not found/loaded
 */
export function useStructuredData(pageKey: string | null | undefined) {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    if (!pageKey) {
      setData(null);
      return;
    }
    
    // Fetch the structured data file
    fetch(`/structured-data/${pageKey}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(json => setData(json))
      .catch(() => setData(null));
  }, [pageKey]);
  
  return data;
}
