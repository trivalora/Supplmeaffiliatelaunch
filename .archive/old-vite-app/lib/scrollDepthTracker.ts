// ========================================
// SCROLL DEPTH TRACKER
// ========================================

import { trackScrollDepth } from './analytics';

type ScrollDepthThreshold = 25 | 50 | 75 | 90 | 100;

class ScrollDepthTracker {
  private trackedDepths: Set<ScrollDepthThreshold> = new Set();
  private pageName: string = '';
  private thresholds: ScrollDepthThreshold[] = [25, 50, 75, 90, 100];

  initialize(pageName: string) {
    this.pageName = pageName;
    this.trackedDepths.clear();
    this.attachScrollListener();
  }

  private attachScrollListener() {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / docHeight) * 100);

      this.thresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !this.trackedDepths.has(threshold)) {
          this.trackedDepths.add(threshold);
          trackScrollDepth(threshold, this.pageName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  reset() {
    this.trackedDepths.clear();
  }
}

export const scrollDepthTracker = new ScrollDepthTracker();
