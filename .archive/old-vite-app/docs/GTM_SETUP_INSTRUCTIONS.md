# Google Tag Manager Setup Instructions

## Quick Start Guide

This guide will help you set up Google Tag Manager for your supplement website with comprehensive tracking.

---

## Step 1: Import GTM Container Configuration

### Option A: Import Existing Container (Recommended)

1. **Log in to Google Tag Manager**
   - Go to https://tagmanager.google.com
   - Select your account

2. **Navigate to Admin**
   - Click "Admin" in the top navigation
   - Under "Container", click "Import Container"

3. **Import the Configuration**
   - Click "Choose container file"
   - Select the `gtm-container-config.json` file
   - Choose workspace: "New" or "Existing"
   - Import option: "Merge" (recommended) or "Overwrite"
   - Click "Confirm"

### Option B: Manual Setup (If Import Fails)

If the import doesn't work, you can manually create the tags, triggers, and variables following the guide in `/docs/GTM_TRACKING_GUIDE.md`.

---

## Step 2: Configure Your GA4 Measurement ID

After importing, you need to update the GA4 Measurement ID:

1. **Find Your GA4 Measurement ID**
   - Go to Google Analytics 4
   - Navigate to Admin > Data Streams
   - Select your web data stream
   - Copy the "Measurement ID" (format: G-XXXXXXXXXX)

2. **Update GTM Variable**
   - In GTM, go to Variables
   - Find the variable named "GA4 Measurement ID"
   - Click to edit
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID
   - Save

---

## Step 3: Verify All Tags Are Configured

Go to **Tags** in GTM and verify you have the following tags:

### Core Tags
- ✅ GA4 - Page View
- ✅ GA4 - Supplement View
- ✅ GA4 - Affiliate Click
- ✅ GA4 - Product Click
- ✅ GA4 - Outbound Link Click
- ✅ GA4 - Scroll Depth
- ✅ GA4 - Time on Page
- ✅ GA4 - Navigation Click
- ✅ GA4 - Search
- ✅ GA4 - Glossary Link Click
- ✅ GA4 - Exit Intent

### All Tags Should Fire On Their Respective Triggers
Each tag should have a corresponding custom event trigger.

---

## Step 4: Enable Preview Mode & Test

1. **Start Preview Mode**
   - In GTM, click "Preview" in the top right
   - Enter your website URL
   - Click "Connect"

2. **Test Key Interactions**
   - Navigate to a supplement page → Should fire `supplement_view`
   - Click an Amazon button → Should fire `affiliate_click`
   - Click a glossary term → Should fire `glossary_link_click`
   - Scroll down the page → Should fire `scroll_depth` at 25%, 50%, 75%, 90%, 100%
   - Wait 30 seconds → Should fire `time_on_page`
   - Search for something → Should fire `search`
   - Click external link (USP/ConsumerLab/NSF) → Should fire `outbound_link_click`

3. **Check Tag Assistant**
   - Open the Tag Assistant panel (should open automatically)
   - Click through your site
   - Verify all events are firing correctly
   - Check that data layer variables are populated

---

## Step 5: Verify Data Layer Events

### Browser Console Method

1. Open your website
2. Open browser Developer Tools (F12)
3. Go to Console tab
4. Type: `window.dataLayer`
5. Press Enter

You should see an array of events. Verify that events include:
```javascript
[
  { event: 'session_start', sessionId: '...', ... },
  { event: 'pageview', pageName: 'Vitamin D', ... },
  { event: 'supplement_view', supplementName: 'Vitamin D', ... },
  // ... more events as you interact
]
```

### GTM Preview Mode Method

1. In GTM Preview Mode
2. Click on any event in the summary
3. Go to "Data Layer" tab
4. Verify all custom parameters are present

---

## Step 6: Publish Your Container

Once you've verified everything works:

1. Click "Submit" in the top right of GTM
2. Add a descriptive version name:
   - Example: "Initial setup - Complete tracking implementation"
3. Add a description (optional):
   - Example: "Implemented comprehensive tracking for all user interactions including affiliate clicks, product views, scroll depth, and time on page"
4. Click "Publish"

---

## Step 7: Verify in Google Analytics 4

After publishing, verify events are reaching GA4:

1. **Real-Time Report**
   - Go to Google Analytics 4
   - Navigate to Reports > Realtime
   - Open your website in another tab
   - Interact with the site
   - Verify events appear in real-time

2. **DebugView (Recommended)**
   - In GA4, go to Configure > DebugView
   - Keep GTM Preview mode active
   - Interact with your site
   - Watch events flow into DebugView in real-time

---

## Step 8: Create Custom Reports in GA4

### Recommended Custom Reports

#### 1. Supplement Performance Report
- **Dimension**: `supplement_name`
- **Metrics**: 
  - Event count (supplement_view)
  - Affiliate clicks
  - Average engagement time
  - Scroll depth

#### 2. Affiliate Revenue Report
- **Dimension**: `platform` (Amazon, iHerb)
- **Metrics**: 
  - Click count
  - Click-through rate
  - Supplement category

#### 3. Content Engagement Report
- **Dimension**: `page_name`
- **Metrics**: 
  - Average time on page
  - Average scroll depth
  - Glossary clicks
  - Navigation clicks

#### 4. Product Performance Report
- **Dimension**: `product_name`, `product_brand`
- **Metrics**: 
  - Product impressions
  - Product clicks
  - Click-through rate

---

## Step 9: Set Up Conversions in GA4

Mark key events as conversions:

1. Go to GA4 > Configure > Events
2. Find these events and mark as conversion:
   - `affiliate_click` - Primary conversion
   - `search` - Secondary conversion
   - `form_submit` - Secondary conversion (if applicable)

---

## Step 10: Create Audiences

### Recommended Audiences

#### High-Intent Visitors
- Conditions:
  - `affiliate_click` count >= 1
  - Session duration > 60 seconds

#### Product Researchers
- Conditions:
  - `product_click` count >= 2
  - `scroll_depth` >= 75

#### Engaged Readers
- Conditions:
  - `time_on_page` >= 120 seconds
  - `glossary_link_click` count >= 1

---

## Troubleshooting

### Events Not Firing

1. **Check Console for Errors**
   ```javascript
   // In browser console
   console.log(window.dataLayer);
   ```

2. **Verify GTM is Loaded**
   - View page source
   - Search for "GTM-" 
   - You should see GTM script in `<head>`

3. **Check GTM Container ID**
   - In your code: `/components/AnalyticsProvider.tsx`
   - Verify `GTM-NQWRNKFT` is correct
   - Update if needed

### Data Layer Not Populating

1. **Verify Analytics Provider is Wrapped**
   - Check `/App.tsx`
   - Ensure `<AnalyticsProvider>` wraps your app

2. **Check Network Tab**
   - Open DevTools > Network
   - Filter by "google-analytics" or "gtm"
   - Verify requests are being sent

### Tags Not Firing in GTM

1. **Check Trigger Configuration**
   - Ensure trigger event name matches data layer event
   - Example: Trigger should listen for `affiliate_click` not `Affiliate Click`

2. **Verify Variable Names**
   - Data Layer variables should match exactly
   - Case-sensitive: `supplementName` not `SupplementName`

---

## Advanced Configuration

### Custom Dimensions (GA4)

If you want to track custom dimensions in GA4:

1. Go to GA4 > Configure > Custom definitions
2. Create custom dimensions:
   - `supplement_name` (Event-scoped)
   - `platform` (Event-scoped)
   - `product_brand` (Event-scoped)
   - `link_type` (Event-scoped)

### Enhanced E-commerce (If Selling Products)

If you plan to sell supplements directly:

1. Implement GA4 e-commerce events:
   - `view_item`
   - `add_to_cart`
   - `begin_checkout`
   - `purchase`

2. Update tracking functions in `/utils/analytics.ts`

### Cross-Domain Tracking (If Multiple Domains)

If you have multiple domains:

1. In GTM, go to your GA4 Configuration tag
2. Add Field to Set:
   - Field Name: `linker`
   - Value: `{"domains":["domain1.com", "domain2.com"]}`

---

## Data Privacy & Compliance

### GDPR Compliance

1. **Cookie Consent**
   - Implement cookie consent banner
   - Only load GTM after consent
   - Example:
     ```javascript
     if (userHasConsented()) {
       initializeAnalytics();
     }
     ```

2. **IP Anonymization** (Already configured in GA4)

3. **Data Retention**
   - Go to GA4 > Data Settings > Data Retention
   - Set appropriate retention period (14 months recommended)

### CCPA Compliance

1. **Opt-Out Mechanism**
   - Provide "Do Not Sell My Information" link
   - Respect `navigator.doNotTrack`

---

## Monitoring & Alerts

### Set Up Alerts in GA4

1. **Tracking Outage Alert**
   - Condition: Events per user < 5 (daily)
   - Action: Email notification

2. **High Affiliate Click Rate**
   - Condition: Affiliate clicks > 100 (daily)
   - Action: Email notification

3. **Low Engagement Alert**
   - Condition: Average engagement time < 30 seconds (daily)
   - Action: Email notification

---

## Next Steps

1. ✅ Monitor real-time data for 24-48 hours
2. ✅ Set up custom reports in GA4
3. ✅ Create conversion goals
4. ✅ Set up audiences for remarketing
5. ✅ Configure alerts for anomalies
6. ✅ Document any custom tracking additions

---

## Support Resources

- **GTM Documentation**: https://support.google.com/tagmanager
- **GA4 Documentation**: https://support.google.com/analytics
- **Data Layer Spec**: https://developers.google.com/tag-platform/tag-manager/datalayer

---

## Quick Reference: All Tracked Events

| Event Name | When Fired | Key Parameters |
|------------|-----------|----------------|
| `pageview` | Every page load | pageName, pageCategory, pageUrl |
| `session_start` | Session begins | sessionId, userAgent |
| `supplement_view` | Supplement page view | supplementName |
| `affiliate_click` | Amazon/iHerb click | platform, supplementName, linkType |
| `product_click` | Product card click | productName, productBrand, retailer |
| `product_impressions` | Products displayed | products[], productCount |
| `outbound_link_click` | External link click | outboundUrl, linkType, context |
| `certification_click` | USP/ConsumerLab/NSF | certificationType, context |
| `navigation_click` | Menu/nav link click | linkText, destination, location |
| `glossary_link_click` | Glossary term click | glossaryTerm, currentPage |
| `scroll_depth` | User scrolls | depth (25/50/75/90/100) |
| `time_on_page` | Every 30 seconds | timeSpent (seconds) |
| `engagement_time` | Every 30 seconds | engagedTime (active seconds) |
| `exit_intent` | Mouse leaves viewport | timeOnPage, scrollDepth |
| `search` | Search performed | searchQuery, resultsCount |
| `search_result_click` | Search result clicked | searchQuery, selectedSupplement |
| `form_start` | Form interaction begins | formName |
| `form_submit` | Form submitted | formName, success |
| `dark_mode_toggle` | Dark mode switched | mode |
| `error` | JavaScript error | errorType, errorMessage |
| `404_error` | 404 page viewed | attemptedUrl |

---

**Your tracking is now fully configured! 🎉**

All user interactions are being tracked and sent to Google Analytics 4 through Google Tag Manager.
