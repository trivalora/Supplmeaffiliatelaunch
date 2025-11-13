// ========================================
// DATA LAYER & ANALYTICS UTILITIES
// ========================================

// Global data layer interface
export interface DataLayerEvent {
  event: string;
  [key: string]: any;
}

// Declare global dataLayer
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag?: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

// Initialize data layer
export const initializeDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};

// Push events to data layer
export const pushToDataLayer = (event: DataLayerEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
    console.log('DataLayer Event:', event); // For debugging
  }
};

// ========================================
// PAGE VIEW TRACKING
// ========================================

export const trackPageView = (pageName: string, pageCategory: string = 'general') => {
  pushToDataLayer({
    event: 'pageview',
    pageName,
    pageCategory,
    pageUrl: window.location.href,
    pageTitle: document.title,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// NAVIGATION TRACKING
// ========================================

export const trackNavigation = (linkText: string, destination: string, location: 'header' | 'footer' | 'body') => {
  pushToDataLayer({
    event: 'navigation_click',
    linkText,
    destination,
    location,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// SUPPLEMENT TRACKING
// ========================================

export const trackSupplementView = (supplementName: string) => {
  pushToDataLayer({
    event: 'supplement_view',
    supplementName,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
};

export const trackSupplementSection = (supplementName: string, section: string) => {
  pushToDataLayer({
    event: 'supplement_section_view',
    supplementName,
    section,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// RETAILER BUTTON TRACKING
// ========================================

export const trackRetailerClick = (
  retailerName: 'Amazon' | 'iHerb' | 'Compare All',
  supplementName: string,
  buttonLocation: 'hero' | 'bottom'
) => {
  pushToDataLayer({
    event: 'retailer_click',
    retailerName,
    supplementName,
    buttonLocation,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// SEARCH TRACKING
// ========================================

export const trackSearch = (searchQuery: string, resultsCount: number) => {
  pushToDataLayer({
    event: 'search',
    searchQuery,
    resultsCount,
    timestamp: new Date().toISOString(),
  });
};

export const trackSearchResultClick = (searchQuery: string, selectedSupplement: string, position: number) => {
  pushToDataLayer({
    event: 'search_result_click',
    searchQuery,
    selectedSupplement,
    position,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// CONTENT INTERACTION TRACKING
// ========================================

export const trackAccordionToggle = (supplementName: string, accordionTitle: string, action: 'open' | 'close') => {
  pushToDataLayer({
    event: 'accordion_interaction',
    supplementName,
    accordionTitle,
    action,
    timestamp: new Date().toISOString(),
  });
};

export const trackScrollDepth = (depth: number, pageName: string) => {
  pushToDataLayer({
    event: 'scroll_depth',
    depth,
    pageName,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// FORM TRACKING
// ========================================

export const trackFormStart = (formName: string) => {
  pushToDataLayer({
    event: 'form_start',
    formName,
    timestamp: new Date().toISOString(),
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  pushToDataLayer({
    event: 'form_submit',
    formName,
    success,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// DARK MODE TRACKING
// ========================================

export const trackDarkModeToggle = (newMode: 'light' | 'dark') => {
  pushToDataLayer({
    event: 'dark_mode_toggle',
    mode: newMode,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// ERROR TRACKING
// ========================================

export const trackError = (errorType: string, errorMessage: string, errorLocation: string) => {
  pushToDataLayer({
    event: 'error',
    errorType,
    errorMessage,
    errorLocation,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// USER ENGAGEMENT TRACKING
// ========================================

export const trackEngagement = (action: string, category: string, label?: string, value?: number) => {
  pushToDataLayer({
    event: 'engagement',
    action,
    category,
    label,
    value,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// AFFILIATE LINK TRACKING
// ========================================

export const trackAffiliateClick = (
  platform: string,
  supplementName: string,
  linkType: 'button' | 'text_link'
) => {
  pushToDataLayer({
    event: 'affiliate_click',
    platform,
    supplementName,
    linkType,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// SESSION TRACKING
// ========================================

export const trackSessionStart = () => {
  pushToDataLayer({
    event: 'session_start',
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
  });
};

// ========================================
// CUSTOM EVENT TRACKING
// ========================================

export const trackCustomEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
    timestamp: new Date().toISOString(),
  });
};
