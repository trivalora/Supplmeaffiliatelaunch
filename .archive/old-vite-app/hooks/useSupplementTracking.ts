'use client';

import { useEffect } from 'react';
import { trackSupplementView } from '@/lib/analytics';

/**
 * Custom hook to automatically track supplement page views
 * Use this in supplement page components to track when users view a supplement
 * 
 * @param supplementName - Name of the supplement (e.g., "Vitamin D", "Omega-3")
 * 
 * @example
 * function VitaminDPage() {
 *   useSupplementTracking('Vitamin D');
 *   return <div>...</div>;
 * }
 */
export function useSupplementTracking(supplementName: string) {
  useEffect(() => {
    if (supplementName) {
      trackSupplementView(supplementName);
    }
  }, [supplementName]);
}
