# Tracking Quick Reference Card

## 🚀 Quick Start

1. **Import GTM Container**: Upload `/gtm-container-config.json` to GTM
2. **Add GA4 Measurement ID**: Update "GA4 Measurement ID" variable in GTM
3. **Test in Preview Mode**: Click "Preview" in GTM and test your site
4. **Publish**: Click "Submit" and publish your container

---

## 📊 All Tracking Events (25 Total)

| Event | Trigger | Key Data | Business Value |
|-------|---------|----------|----------------|
| `pageview` | Every page load | pageName, pageCategory | Traffic measurement |
| `session_start` | User arrives | sessionId, device info | Session tracking |
| `session_end` | User leaves | sessionDuration | Engagement metrics |
| `supplement_view` | Supplement page | supplementName | Content performance |
| `supplement_section_view` | Section scroll | section name | Content depth |
| `product_impressions` | Products shown | products[], count | Visibility metrics |
| `product_click` | Product clicked | productName, brand | Purchase intent |
| `affiliate_click` | ⭐ Amazon/iHerb click | platform, supplement | 💰 **CONVERSION** |
| `retailer_click` | Retailer button | retailer, location | Purchase funnel |
| `outbound_link_click` | External link | url, type, context | External engagement |
| `certification_click` | USP/ConsumerLab/NSF | certificationType | Trust indicators |
| `navigation_click` | Nav menu click | linkText, destination | Site navigation |
| `glossary_link_click` | Glossary term | glossaryTerm | Educational engagement |
| `scroll_depth` | 25/50/75/90/100% | depth, pageName | Content engagement |
| `time_on_page` | Every 30 seconds | timeSpent | Page engagement |
| `engagement_time` | Every 30 seconds | engagedTime | Active engagement |
| `exit_intent` | Mouse leaves | timeOnPage, scrollDepth | Retention opportunity |
| `search` | Search performed | searchQuery, results | User intent |
| `search_result_click` | Result clicked | query, supplement | Search quality |
| `accordion_interaction` | Accordion toggle | title, action | Content interaction |
| `tab_interaction` | Tab switch | tabName | UI engagement |
| `form_start` | Form interaction | formName | Conversion funnel |
| `form_submit` | Form sent | formName, success | 💰 **CONVERSION** |
| `dark_mode_toggle` | Theme switch | mode | UX preference |
| `error` / `404_error` | Errors occur | errorMessage | Quality monitoring |

---

## 🎯 Key Performance Indicators (KPIs)

### Primary Metrics
- **Affiliate Click Rate**: `affiliate_click` / `supplement_view` × 100
- **Product CTR**: `product_click` / `product_impressions` × 100
- **Avg Engagement Time**: Sum of `engagedTime` / sessions
- **Content Depth**: Avg `scroll_depth` by page

### Secondary Metrics
- **Glossary Engagement**: `glossary_link_click` / `pageview`
- **Research Clicks**: `certification_click` count
- **Search Success**: `search_result_click` / `search` × 100
- **Exit Rate**: `exit_intent` / total sessions × 100

---

## 🔍 Testing Checklist

### ✅ Basic Functionality
- [ ] Page loads → `pageview` fires
- [ ] Supplement page → `supplement_view` fires
- [ ] Amazon button → `affiliate_click` fires (platform: Amazon)
- [ ] iHerb button → `affiliate_click` fires (platform: iHerb)
- [ ] Product card → `product_click` fires
- [ ] USP link → `outbound_link_click` fires (linkType: certification)

### ✅ Automatic Tracking
- [ ] Scroll to 50% → `scroll_depth` fires (depth: 50)
- [ ] Wait 30 seconds → `time_on_page` fires
- [ ] Move mouse out → `exit_intent` fires (if > 0px from top)

### ✅ Navigation
- [ ] Header link → `navigation_click` fires (location: header)
- [ ] Footer link → `navigation_click` fires (location: footer)
- [ ] Glossary term → `glossary_link_click` fires

### ✅ Search
- [ ] Perform search → `search` fires (with query)
- [ ] Click result → `search_result_click` fires

---

## 🛠️ Debugging Commands

### Browser Console
```javascript
// View all events
window.dataLayer

// Filter affiliate clicks
window.dataLayer.filter(e => e.event === 'affiliate_click')

// Count scroll depth events
window.dataLayer.filter(e => e.event === 'scroll_depth').length

// Get last event
window.dataLayer[window.dataLayer.length - 1]

// View session ID
window._analyticsSessionData

// Clear dataLayer (for testing)
window.dataLayer = []
```

### GTM Preview Mode
1. Click "Preview" in GTM
2. Enter your website URL
3. Click "Connect"
4. Interact with site
5. View Tag Assistant panel

### GA4 DebugView
1. Keep GTM Preview mode active
2. Open GA4 → Configure → DebugView
3. See events in real-time
4. Verify parameters are correct

---

## 📁 File Locations

### Core Tracking Files
- `/utils/analytics.ts` - Main tracking functions
- `/utils/timeTracker.ts` - Time tracking
- `/utils/scrollDepthTracker.ts` - Scroll tracking
- `/hooks/useAnalytics.ts` - React hooks
- `/components/TrackedLink.tsx` - Link tracking component
- `/components/AnalyticsProvider.tsx` - GTM loader

### Documentation
- `/docs/GTM_TRACKING_GUIDE.md` - Complete event reference
- `/docs/GTM_SETUP_INSTRUCTIONS.md` - Setup guide
- `/docs/TRACKING_ARCHITECTURE.md` - System architecture
- `/docs/TRACKING_QUICK_REFERENCE.md` - This file

### Configuration
- `/gtm-container-config.json` - GTM import file
- `/App.tsx` - AnalyticsProvider wrapper (GTM-NQWRNKFT)

---

## 🔧 Common Issues & Fixes

### Events Not Firing
**Problem**: No events in dataLayer  
**Solution**: Check console for errors, verify AnalyticsProvider is wrapping app

### GTM Not Loading
**Problem**: GTM script not in page source  
**Solution**: Verify GTM ID in `/components/AnalyticsProvider.tsx`

### Wrong Data in Events
**Problem**: Parameters are undefined  
**Solution**: Check component is passing correct props to tracking functions

### Duplicate Events
**Problem**: Same event fires multiple times  
**Solution**: Check for multiple AnalyticsProvider wrappers or duplicate hooks

---

## 📞 Support Resources

- **GTM Help**: https://support.google.com/tagmanager
- **GA4 Help**: https://support.google.com/analytics
- **React Analytics Patterns**: https://marmelab.com/blog/2017/03/14/react-front-end-analytics.html

---

## 🎨 Adding New Tracking

### Step 1: Add Tracking Function (if needed)
```typescript
// In /utils/analytics.ts
export const trackCustomAction = (param1: string, param2: number) => {
  pushToDataLayer({
    event: 'custom_action',
    param1,
    param2,
    timestamp: new Date().toISOString(),
  });
};
```

### Step 2: Use in Component
```typescript
import { trackCustomAction } from '../utils/analytics';

function MyComponent() {
  const handleClick = () => {
    trackCustomAction('value1', 42);
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
```

### Step 3: Add GTM Trigger
1. In GTM, create new trigger
2. Type: Custom Event
3. Event name: `custom_action`
4. Save

### Step 4: Add GTM Tag
1. Create new tag
2. Type: GA4 Event
3. Event name: `custom_action`
4. Add parameters from dataLayer
5. Fire on: `Event - custom_action` trigger
6. Save and publish

---

## 📈 Recommended GA4 Reports

### Create These Custom Reports

**1. Affiliate Performance**
- Dimensions: platform, supplementName
- Metrics: affiliate_click (event count)
- Visualization: Bar chart

**2. Content Engagement**
- Dimensions: pageName
- Metrics: avgScrollDepth, avgTimeOnPage
- Visualization: Table

**3. Product Performance**
- Dimensions: productName, productBrand
- Metrics: product_click, product_impressions
- Calculated: CTR (clicks / impressions)
- Visualization: Data table

**4. User Journey**
- Segments: By affiliate_click (Yes/No)
- Path analysis: Page sequence before conversion
- Visualization: Sankey diagram

---

## 🎯 Conversion Goals in GA4

Mark these events as conversions:

1. ✅ `affiliate_click` - **Primary conversion**
2. ✅ `form_submit` - Secondary conversion
3. ✅ `search` - Micro-conversion (if form exists)

### How to Mark as Conversion
1. GA4 → Configure → Events
2. Find event name
3. Toggle "Mark as conversion"
4. Done!

---

## 🔐 Privacy Checklist

- [ ] No PII collected (names, emails, etc.)
- [ ] IP anonymization enabled (GA4 default)
- [ ] Cookie consent implemented (if required by region)
- [ ] Data retention policy set (GA4 admin)
- [ ] Privacy policy updated
- [ ] Terms of service includes tracking disclosure

---

## 📊 Success Benchmarks

### Week 1
- All events firing: ✅
- Data in GA4 real-time: ✅
- No console errors: ✅

### Month 1
- Baseline affiliate CTR: ____%
- Average scroll depth: ____%
- Average time on page: ____s
- Top performing supplement: ____

### Quarter 1
- Improved affiliate CTR by: ____%
- Increased engagement time by: ____%
- Reduced exit rate by: ____%

---

## 💡 Pro Tips

1. **Use GTM Preview Mode** religiously before publishing
2. **Check GA4 DebugView** to verify parameters are correct
3. **Set up Google Analytics alerts** for tracking outages
4. **Review dataLayer in console** during development
5. **Document all custom tracking** you add
6. **Version your GTM containers** with descriptive names
7. **Test on multiple devices** (mobile, tablet, desktop)
8. **Monitor Core Web Vitals** to ensure tracking doesn't hurt performance

---

**Everything is tracked and ready to analyze! 📊✨**

You now have enterprise-level tracking for your supplement website.
