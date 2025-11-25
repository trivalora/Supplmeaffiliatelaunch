'use client';

import { useEffect, useRef } from 'react';
import { trackProductImpression } from '@/lib/analytics';

interface Product {
  name: string;
  brand: string;
  retailer: string;
  position: number;
}

/**
 * Custom hook to track product impressions using IntersectionObserver
 * Automatically tracks when products become visible in the viewport
 * 
 * @param products - Array of products to track
 * @param supplementName - Name of the supplement category
 * @param location - Where products are displayed ('hero', 'bottom', 'comparison')
 * 
 * @example
 * function ProductList({ products }) {
 *   const productRefs = useProductTracking(products, 'Vitamin D', 'comparison');
 *   
 *   return (
 *     <div>
 *       {products.map((product, i) => (
 *         <div ref={productRefs[i]} key={product.id}>
 *           {product.name}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
export function useProductTracking(
  products: Product[],
  supplementName: string,
  location: 'hero' | 'bottom' | 'comparison' = 'comparison'
) {
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trackedProducts = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!products.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = productRefs.current.indexOf(entry.target as HTMLDivElement);
            
            if (index !== -1 && !trackedProducts.current.has(index)) {
              // Mark as tracked
              trackedProducts.current.add(index);
              
              // Track the product impression
              const product = products[index];
              if (product) {
                trackProductImpression(
                  [product],
                  supplementName,
                  location
                );
              }
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '50px', // Start tracking slightly before entering viewport
      }
    );

    // Observe all product elements
    productRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
      trackedProducts.current.clear();
    };
  }, [products, supplementName, location]);

  return productRefs;
}
