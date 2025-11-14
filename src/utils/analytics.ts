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
    _analyticsSessionData?: {
      sessionId: string;
      startTime: number;
      pageStartTime: number;
      lastActivityTime: number;
    };
  }
}

// Initialize data layer
export const initializeDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    
    // Initialize session data
    if (!window._analyticsSessionData) {
      window._analyticsSessionData = {
        sessionId: generateSessionId(),
        startTime: Date.now(),
        pageStartTime: Date.now(),
        lastActivityTime: Date.now(),
      };
    }
  }
};

// Generate unique session ID
const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Push events to data layer
export const pushToDataLayer = (event: DataLayerEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
    
    // Update last activity time
    if (window._analyticsSessionData) {
      window._analyticsSessionData.lastActivityTime = Date.now();
    }
    
    console.log('DataLayer Event:', event); // For debugging
  }
};

// ========================================
// PAGE VIEW TRACKING
// ========================================

export const trackPageView = (pageName: string, pageCategory: string = 'general') => {
  // Reset page start time
  if (window._analyticsSessionData) {
    window._analyticsSessionData.pageStartTime = Date.now();
  }
  
  pushToDataLayer({
    event: 'pageview',
    pageName,
    pageCategory,
    pageUrl: window.location.href,
    pageTitle: document.title,
    pagePathname: window.location.pathname,
    pageSearch: window.location.search,
    pageHash: window.location.hash,
    referrer: document.referrer,
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
    currentPage: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// OUTBOUND LINK TRACKING
// ========================================

export const trackOutboundLink = (
  url: string,
  linkText: string,
  linkType: 'certification' | 'retailer' | 'external' | 'affiliate',
  context?: string
) => {
  pushToDataLayer({
    event: 'outbound_link_click',
    outboundUrl: url,
    linkText,
    linkType,
    context,
    currentPage: window.location.pathname,
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
// PRODUCT INTERACTION TRACKING
// ========================================

export const trackProductClick = (
  productName: string,
  brand: string,
  retailer: string,
  supplementName: string,
  position: number,
  location: 'hero' | 'bottom' | 'comparison'
) => {
  pushToDataLayer({
    event: 'product_click',
    productName,
    productBrand: brand,
    productRetailer: retailer,
    supplementName,
    productPosition: position,
    productLocation: location,
    timestamp: new Date().toISOString(),
  });
};

export const trackProductImpression = (
  products: Array<{
    name: string;
    brand: string;
    retailer: string;
    position: number;
  }>,
  supplementName: string,
  location: 'hero' | 'bottom' | 'comparison'
) => {
  pushToDataLayer({
    event: 'product_impressions',
    products,
    supplementName,
    impressionLocation: location,
    productCount: products.length,
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
    currentPage: window.location.pathname,
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
    currentPage: window.location.pathname,
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
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
};

export const trackTabInteraction = (supplementName: string, tabName: string) => {
  pushToDataLayer({
    event: 'tab_interaction',
    supplementName,
    tabName,
    timestamp: new Date().toISOString(),
  });
};

export const trackGlossaryLinkClick = (term: string, currentPage: string) => {
  pushToDataLayer({
    event: 'glossary_link_click',
    glossaryTerm: term,
    currentPage,
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

export const trackFormFieldInteraction = (formName: string, fieldName: string) => {
  pushToDataLayer({
    event: 'form_field_interaction',
    formName,
    fieldName,
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
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
};

export const track404 = (attemptedUrl: string) => {
  pushToDataLayer({
    event: '404_error',
    attemptedUrl,
    referrer: document.referrer,
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

export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  pushToDataLayer({
    event: 'time_on_page',
    pageName,
    timeSpent, // in seconds
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
};

export const trackEngagementTime = (pageName: string, engagedTime: number) => {
  pushToDataLayer({
    event: 'engagement_time',
    pageName,
    engagedTime, // in seconds (time actively engaged)
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
};

export const trackExitIntent = (pageName: string, timeOnPage: number) => {
  pushToDataLayer({
    event: 'exit_intent',
    pageName,
    timeOnPage,
    scrollDepth: Math.round((window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100),
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// AFFILIATE LINK TRACKING
// ========================================

export const trackAffiliateClick = (
  platform: string,
  supplementName: string,
  linkType: 'button' | 'text_link' | 'product_card'
) => {
  pushToDataLayer({
    event: 'affiliate_click',
    platform,
    supplementName,
    linkType,
    currentPage: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// CTA TRACKING
// ========================================

export const trackCTAClick = (
  ctaText: string,
  ctaLocation: string,
  ctaDestination: string,
  ctaType: 'button' | 'link' | 'banner'
) => {
  pushToDataLayer({
    event: 'cta_click',
    ctaText,
    ctaLocation,
    ctaDestination,
    ctaType,
    currentPage: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// CERTIFICATION LINK TRACKING
// ========================================

export const trackCertificationClick = (
  certificationType: 'USP' | 'ConsumerLab' | 'NSF' | 'Other',
  context: string
) => {
  pushToDataLayer({
    event: 'certification_click',
    certificationType,
    context,
    currentPage: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
};

// ========================================
// SESSION TRACKING
// ========================================

export const trackSessionStart = () => {
  pushToDataLayer({
    event: 'session_start',
    sessionId: window._analyticsSessionData?.sessionId,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language,
    referrer: document.referrer,
  });
};

export const trackSessionEnd = () => {
  const sessionData = window._analyticsSessionData;
  if (!sessionData) return;
  
  const sessionDuration = Math.round((Date.now() - sessionData.startTime) / 1000); // in seconds
  const timeSinceLastActivity = Math.round((Date.now() - sessionData.lastActivityTime) / 1000);
  
  pushToDataLayer({
    event: 'session_end',
    sessionId: sessionData.sessionId,
    sessionDuration,
    timeSinceLastActivity,
    timestamp: new Date().toISOString(),
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