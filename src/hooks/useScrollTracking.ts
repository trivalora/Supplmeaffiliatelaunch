'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

/**
 * Custom hook to track scroll depth at 25%, 50%, 75%, and 100%
 * Automatically tracks when users scroll to each milestone
 * 
 * @param pageName - Name of the page for tracking
 * @param enabled - Whether tracking is enabled (default: true)
 * 
 * @example
 * function ArticlePage() {
 *   useScrollTracking('Vitamin D Article');
 *   return <article>...</article>;
 * }
 */
export function useScrollTracking(pageName: string, enabled: boolean = true) {
  const scrollMilestones = useRef<Set<number>>(new Set());
  const throttleTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      // Throttle scroll events to max once per 500ms
      if (throttleTimer.current) return;

      throttleTimer.current = setTimeout(() => {
        throttleTimer.current = null;
      }, 500);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track milestones at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackScrollDepth(milestone, pageName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
      scrollMilestones.current.clear();
    };
  }, [pageName, enabled]);
}
