# Google Tag Manager Tracking Implementation Guide

## Overview

This guide outlines the comprehensive tracking implementation across the supplement/health information website. All events are pushed to `window.dataLayer` and can be captured by Google Tag Manager.

## Implemented Tracking Events

### 1. Session Tracking

**Event: `session_start`**
- Triggered: On page load
- Data Layer:
  ```javascript
  {
    event: 'session_start',
    sessionId: 'unique-session-id',
    timestamp: 'ISO-8601',
    userAgent: 'browser-info',
    screenResolution: '1920x1080',
    viewportSize: '1024x768',
    language: 'en-US',
    referrer: 'referring-url'
  }
  ```

**Event: `session_end`**
- Triggered: On page unload
- Data Layer:
  ```javascript
  {
    event: 'session_end',
    sessionId: 'unique-session-id',
    sessionDuration: 120, // seconds
    timeSinceLastActivity: 5, // seconds
    timestamp: 'ISO-8601'
  }
  ```

### 2. Page View Tracking

**Event: `pageview`**
- Triggered: On every page change
- Data Layer:
  ```javascript
  {
    event: 'pageview',
    pageName: 'Vitamin D',
    pageCategory: 'supplement',
    pageUrl: 'https://example.com/vitamind',
    pageTitle: 'Vitamin D - Benefits & Research',
    pagePathname: '/vitamind',
    pageSearch: '',
    pageHash: '',
    referrer: 'previous-page-url',
    timestamp: 'ISO-8601'
  }
  ```

### 3. Supplement Tracking

**Event: `supplement_view`**
- Triggered: When user views a supplement page
- Data Layer:
  ```javascript
  {
    event: 'supplement_view',
    supplementName: 'Vitamin D',
    pageUrl: 'https://example.com/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `supplement_section_view`**
- Triggered: When user scrolls to different sections
- Data Layer:
  ```javascript
  {
    event: 'supplement_section_view',
    supplementName: 'Vitamin D',
    section: 'benefits',
    timestamp: 'ISO-8601'
  }
  ```

### 4. Product Tracking

**Event: `product_impressions`**
- Triggered: When product cards are displayed
- Data Layer:
  ```javascript
  {
    event: 'product_impressions',
    products: [
      {
        name: 'NOW Foods Vitamin D-3',
        brand: 'NOW Foods',
        retailer: 'Multiple',
        position: 1
      },
      // ... more products
    ],
    supplementName: 'Vitamin D',
    impressionLocation: 'bottom',
    productCount: 3,
    timestamp: 'ISO-8601'
  }
  ```

**Event: `product_click`**
- Triggered: When user clicks on a product
- Data Layer:
  ```javascript
  {
    event: 'product_click',
    productName: 'NOW Foods Vitamin D-3',
    productBrand: 'NOW Foods',
    productRetailer: 'Amazon',
    supplementName: 'Vitamin D',
    productPosition: 1,
    productLocation: 'bottom',
    timestamp: 'ISO-8601'
  }
  ```

### 5. Affiliate & Retailer Tracking

**Event: `affiliate_click`**
- Triggered: When user clicks Amazon/iHerb buttons
- Data Layer:
  ```javascript
  {
    event: 'affiliate_click',
    platform: 'Amazon', // or 'iHerb'
    supplementName: 'Vitamin D',
    linkType: 'product_card', // or 'button', 'text_link'
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `retailer_click`**
- Triggered: When user clicks retailer buttons
- Data Layer:
  ```javascript
  {
    event: 'retailer_click',
    retailerName: 'Amazon', // or 'iHerb', 'Compare All'
    supplementName: 'Vitamin D',
    buttonLocation: 'hero', // or 'bottom'
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 6. Outbound Link Tracking

**Event: `outbound_link_click`**
- Triggered: When user clicks external links (including certification links)
- Data Layer:
  ```javascript
  {
    event: 'outbound_link_click',
    outboundUrl: 'https://www.usp.org/',
    linkText: 'USP',
    linkType: 'certification', // or 'retailer', 'external', 'affiliate'
    context: 'buying_guide',
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `certification_click`**
- Triggered: When user clicks USP/ConsumerLab/NSF links
- Data Layer:
  ```javascript
  {
    event: 'certification_click',
    certificationType: 'USP', // or 'ConsumerLab', 'NSF', 'Other'
    context: 'buying_guide',
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 7. Navigation Tracking

**Event: `navigation_click`**
- Triggered: When user clicks navigation links
- Data Layer:
  ```javascript
  {
    event: 'navigation_click',
    linkText: 'About',
    destination: '/about',
    location: 'header', // or 'footer', 'body'
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 8. Glossary Link Tracking

**Event: `glossary_link_click`**
- Triggered: When user clicks glossary terms
- Data Layer:
  ```javascript
  {
    event: 'glossary_link_click',
    glossaryTerm: 'bioavailability',
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 9. Search Tracking

**Event: `search`**
- Triggered: When user performs a search
- Data Layer:
  ```javascript
  {
    event: 'search',
    searchQuery: 'vitamin d benefits',
    resultsCount: 5,
    currentPage: '/search',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `search_result_click`**
- Triggered: When user clicks search result
- Data Layer:
  ```javascript
  {
    event: 'search_result_click',
    searchQuery: 'vitamin d',
    selectedSupplement: 'Vitamin D',
    position: 1,
    timestamp: 'ISO-8601'
  }
  ```

### 10. Content Interaction Tracking

**Event: `accordion_interaction`**
- Triggered: When user opens/closes accordions
- Data Layer:
  ```javascript
  {
    event: 'accordion_interaction',
    supplementName: 'Vitamin D',
    accordionTitle: 'Further Reading',
    action: 'open', // or 'close'
    timestamp: 'ISO-8601'
  }
  ```

**Event: `tab_interaction`**
- Triggered: When user switches tabs
- Data Layer:
  ```javascript
  {
    event: 'tab_interaction',
    supplementName: 'Vitamin D',
    tabName: 'Research',
    timestamp: 'ISO-8601'
  }
  ```

### 11. Scroll Depth Tracking

**Event: `scroll_depth`**
- Triggered: At 25%, 50%, 75%, 90%, and 100% scroll
- Data Layer:
  ```javascript
  {
    event: 'scroll_depth',
    depth: 50, // percentage
    pageName: 'Vitamin D',
    pageUrl: 'https://example.com/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 12. Time on Page Tracking

**Event: `time_on_page`**
- Triggered: Every 30 seconds
- Data Layer:
  ```javascript
  {
    event: 'time_on_page',
    pageName: 'Vitamin D',
    timeSpent: 60, // seconds
    pageUrl: 'https://example.com/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `engagement_time`**
- Triggered: Every 30 seconds (tracks active time)
- Data Layer:
  ```javascript
  {
    event: 'engagement_time',
    pageName: 'Vitamin D',
    engagedTime: 45, // seconds actively engaged
    pageUrl: 'https://example.com/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `exit_intent`**
- Triggered: When user moves mouse out of viewport
- Data Layer:
  ```javascript
  {
    event: 'exit_intent',
    pageName: 'Vitamin D',
    timeOnPage: 120, // seconds
    scrollDepth: 65, // percentage
    timestamp: 'ISO-8601'
  }
  ```

### 13. Form Tracking

**Event: `form_start`**
- Triggered: When user starts filling a form
- Data Layer:
  ```javascript
  {
    event: 'form_start',
    formName: 'contact',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `form_submit`**
- Triggered: When user submits a form
- Data Layer:
  ```javascript
  {
    event: 'form_submit',
    formName: 'contact',
    success: true,
    timestamp: 'ISO-8601'
  }
  ```

**Event: `form_field_interaction`**
- Triggered: When user interacts with form fields
- Data Layer:
  ```javascript
  {
    event: 'form_field_interaction',
    formName: 'contact',
    fieldName: 'email',
    timestamp: 'ISO-8601'
  }
  ```

### 14. CTA Tracking

**Event: `cta_click`**
- Triggered: When user clicks call-to-action elements
- Data Layer:
  ```javascript
  {
    event: 'cta_click',
    ctaText: 'Learn More',
    ctaLocation: 'hero',
    ctaDestination: '/about',
    ctaType: 'button', // or 'link', 'banner'
    currentPage: '/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

### 15. UI Interaction Tracking

**Event: `dark_mode_toggle`**
- Triggered: When user toggles dark mode
- Data Layer:
  ```javascript
  {
    event: 'dark_mode_toggle',
    mode: 'dark', // or 'light'
    timestamp: 'ISO-8601'
  }
  ```

### 16. Error Tracking

**Event: `error`**
- Triggered: When JavaScript errors occur
- Data Layer:
  ```javascript
  {
    event: 'error',
    errorType: 'runtime',
    errorMessage: 'TypeError: Cannot read property...',
    errorLocation: 'KnowledgebaseTemplate',
    pageUrl: 'https://example.com/vitamind',
    timestamp: 'ISO-8601'
  }
  ```

**Event: `404_error`**
- Triggered: When user lands on 404 page
- Data Layer:
  ```javascript
  {
    event: '404_error',
    attemptedUrl: '/nonexistent-page',
    referrer: 'https://google.com',
    timestamp: 'ISO-8601'
  }
  ```

## GTM Configuration

### Recommended GTM Tags

1. **Universal Analytics / GA4 Event Tag**
   - Trigger: All custom events
   - Event Category: {{event}}
   - Event Action: Dynamic based on event type
   - Event Label: Contextual information

2. **Enhanced E-commerce Tracking**
   - Product impressions
   - Product clicks
   - Add to cart (if applicable)

3. **Outbound Link Tracking**
   - Amazon clicks
   - iHerb clicks
   - Certification links
   - External resources

4. **Content Engagement**
   - Scroll depth
   - Time on page
   - Section views

5. **Conversion Tracking**
   - Affiliate clicks
   - Form submissions
   - CTA interactions

### Recommended GTM Variables

- {{event}} - Built-in event variable
- {{pageName}} - Custom JS variable: dataLayer.pageName
- {{supplementName}} - Custom JS variable: dataLayer.supplementName
- {{productName}} - Custom JS variable: dataLayer.productName
- {{retailerName}} - Custom JS variable: dataLayer.retailerName
- {{scrollDepth}} - Custom JS variable: dataLayer.depth
- {{timeOnPage}} - Custom JS variable: dataLayer.timeSpent

### Recommended GTM Triggers

1. **Custom Event Triggers**
   - pageview
   - supplement_view
   - affiliate_click
   - product_click
   - scroll_depth
   - time_on_page
   - exit_intent

2. **Element Click Triggers**
   - All external links
   - Amazon/iHerb buttons
   - CTA buttons

3. **Form Submission Triggers**
   - Contact forms
   - Newsletter signups

## Testing

Use browser console to view all tracking events:

```javascript
// View dataLayer
console.log(window.dataLayer);

// View last 10 events
console.log(window.dataLayer.slice(-10));

// Filter specific event type
console.log(window.dataLayer.filter(e => e.event === 'affiliate_click'));
```

## Implementation Status

✅ **Completed:**
- Session tracking
- Page view tracking
- Supplement tracking
- Product impressions & clicks
- Affiliate link tracking
- Certification link tracking
- Glossary link tracking
- Scroll depth tracking
- Time on page tracking
- Engagement time tracking
- Exit intent tracking
- Error tracking

🔄 **In Progress:**
- Header navigation tracking
- Footer navigation tracking
- Search functionality tracking

⏳ **Planned:**
- Video/media tracking (if applicable)
- Download tracking (if applicable)
- Newsletter signup tracking

## Notes

- All tracking is privacy-compliant (no PII collected)
- Session IDs are generated client-side
- Tracking respects do-not-track headers
- All external links have proper rel attributes (nofollow noreferrer)
- Affiliate disclosure is prominent
- Data retention policies should be configured in GTM/GA
