// ========================================
// ANALYTICS HOOK
// ========================================

import { useEffect, useCallback } from 'react';
import {
  trackPageView,
  trackNavigation,
  trackSupplementView,
  trackSupplementSection,
  trackRetailerClick,
  trackSearch,
  trackSearchResultClick,
  trackAccordionToggle,
  trackFormStart,
  trackFormSubmit,
  trackDarkModeToggle,
  trackError,
  trackEngagement,
  trackAffiliateClick,
  trackCustomEvent,
  trackOutboundLink,
  trackProductClick,
  trackProductImpression,
  trackCTAClick,
  trackCertificationClick,
  trackGlossaryLinkClick,
  trackTabInteraction,
  track404,
} from '@/lib/analytics';
import { scrollDepthTracker } from '@/lib/scrollDepthTracker';
import { timeTracker } from '@/lib/timeTracker';

export function useAnalytics() {
  return {
    trackPageView,
    trackNavigation,
    trackSupplementView,
    trackSupplementSection,
    trackRetailerClick,
    trackSearch,
    trackSearchResultClick,
    trackAccordionToggle,
    trackFormStart,
    trackFormSubmit,
    trackDarkModeToggle,
    trackError,
    trackEngagement,
    trackAffiliateClick,
    trackCustomEvent,
    trackOutboundLink,
    trackProductClick,
    trackProductImpression,
    trackCTAClick,
    trackCertificationClick,
    trackGlossaryLinkClick,
    trackTabInteraction,
    track404,
  };
}

// ========================================
// PAGE VIEW TRACKING HOOK
// ========================================

export function usePageViewTracking(pageName: string, pageCategory: string = 'general') {
  useEffect(() => {
    // Track page view
    trackPageView(pageName, pageCategory);

    // Initialize scroll depth tracking
    scrollDepthTracker.initialize(pageName);

    // Initialize time tracking
    timeTracker.initialize(pageName);

    // Cleanup on unmount
    return () => {
      scrollDepthTracker.reset();
      timeTracker.reset();
    };
  }, [pageName, pageCategory]);
}

// ========================================
// SUPPLEMENT PAGE TRACKING HOOK
// ========================================

export function useSupplementTracking(supplementName: string) {
  useEffect(() => {
    // Track supplement view
    trackSupplementView(supplementName);

    // Track page view
    trackPageView(supplementName, 'supplement');

    // Initialize scroll depth tracking
    scrollDepthTracker.initialize(supplementName);

    // Initialize time tracking
    timeTracker.initialize(supplementName);

    // Cleanup on unmount
    return () => {
      scrollDepthTracker.reset();
      timeTracker.reset();
    };
  }, [supplementName]);

  const trackSection = useCallback(
    (section: string) => {
      trackSupplementSection(supplementName, section);
    },
    [supplementName]
  );

  return { trackSection };
}

// ========================================
// RETAILER CLICK TRACKING HOOK
// ========================================

export function useRetailerTracking(supplementName: string) {
  const handleRetailerClick = useCallback(
    (retailerName: 'Amazon' | 'iHerb' | 'Compare All', buttonLocation: 'hero' | 'bottom') => {
      trackRetailerClick(retailerName, supplementName, buttonLocation);
    },
    [supplementName]
  );

  return { handleRetailerClick };
}

// ========================================
// PRODUCT TRACKING HOOK
// ========================================

export function useProductTracking(supplementName: string) {
  const handleProductClick = useCallback(
    (
      productName: string,
      brand: string,
      retailer: string,
      position: number,
      location: 'hero' | 'bottom' | 'comparison'
    ) => {
      trackProductClick(productName, brand, retailer, supplementName, position, location);
    },
    [supplementName]
  );

  const handleProductImpression = useCallback(
    (
      products: Array<{
        name: string;
        brand: string;
        retailer: string;
        position: number;
      }>,
      location: 'hero' | 'bottom' | 'comparison'
    ) => {
      trackProductImpression(products, supplementName, location);
    },
    [supplementName]
  );

  return { handleProductClick, handleProductImpression };
}

// ========================================
// SEARCH TRACKING HOOK
// ========================================

export function useSearchTracking() {
  const handleSearch = useCallback((searchQuery: string, resultsCount: number) => {
    trackSearch(searchQuery, resultsCount);
  }, []);

  const handleSearchResultClick = useCallback(
    (searchQuery: string, selectedSupplement: string, position: number) => {
      trackSearchResultClick(searchQuery, selectedSupplement, position);
    },
    []
  );

  return { handleSearch, handleSearchResultClick };
}

// ========================================
// FORM TRACKING HOOK
// ========================================

export function useFormTracking(formName: string) {
  const handleFormStart = useCallback(() => {
    trackFormStart(formName);
  }, [formName]);

  const handleFormSubmit = useCallback(
    (success: boolean) => {
      trackFormSubmit(formName, success);
    },
    [formName]
  );

  return { handleFormStart, handleFormSubmit };
}

// ========================================
// INTERACTION TRACKING HOOK
// ========================================

export function useInteractionTracking() {
  const trackClick = useCallback((elementName: string, location: string) => {
    trackEngagement('click', 'interaction', `${elementName} - ${location}`);
  }, []);

  const trackHover = useCallback((elementName: string) => {
    trackEngagement('hover', 'interaction', elementName);
  }, []);

  const trackFocus = useCallback((elementName: string) => {
    trackEngagement('focus', 'interaction', elementName);
  }, []);

  return { trackClick, trackHover, trackFocus };
}

// ========================================
// ERROR BOUNDARY TRACKING HOOK
// ========================================

export function useErrorTracking() {
  const handleError = useCallback((errorType: string, errorMessage: string, errorLocation: string) => {
    trackError(errorType, errorMessage, errorLocation);
  }, []);

  return { handleError };
}