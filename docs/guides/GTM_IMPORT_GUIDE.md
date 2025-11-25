# GTM Container Import Guide

## Overview
This document explains how to import the complete GTM container configuration for Suppl.me into your Google Tag Manager account.

## Container Details
- **Container Name**: Suppl.me Complete
- **Container ID**: GTM-NQWRNKFT
- **GA4 Measurement ID**: G-JHCPJYM37R
- **File**: `src/gtm-container-complete.json`

## Import Instructions

### Step 1: Access Google Tag Manager
1. Go to https://tagmanager.google.com/
2. Sign in with your Google account
3. Select your GTM account or create a new one

### Step 2: Create or Select Container
- **If creating new container**:
  1. Click "Create Account"
  2. Enter account name: "Suppl.me"
  3. Enter container name: "Suppl.me Website"
  4. Select "Web" as the target platform
  5. Click "Create"

- **If using existing container**:
  1. Select your web container
  2. Make sure it's the correct container (check Container ID)

### Step 3: Import Container Configuration
1. In GTM, click "Admin" in the top navigation
2. Click "Import Container" in the Container column
3. Click "Choose container file"
4. Select `src/gtm-container-complete.json` from this project
5. Choose workspace:
   - Select "New" to create a new workspace
   - Or select "Existing" to merge with current workspace (use with caution)
6. Import option:
   - **Recommended**: "Merge" - Adds new tags without deleting existing ones
   - "Overwrite" - Replaces everything (use only for fresh containers)
7. Click "Confirm"

### Step 4: Review Imported Configuration
After import, you'll see:
- **36 Variables**: DataLayer variables for all tracked events
- **22 Triggers**: One for each event type
- **22 Tags**: GA4 event tags for all tracking
- **1 Configuration Tag**: GA4 Configuration with Measurement ID

### Step 5: Update GA4 Measurement ID (if needed)
1. Go to "Variables" tab
2. Find "GA4 Measurement ID" variable
3. Click to edit
4. Update value if you have a different GA4 property
5. Save

### Step 6: Preview & Test
1. Click "Preview" button (top-right)
2. Enter your website URL (e.g., https://suppl.me or http://localhost:3000)
3. GTM Preview window opens
4. Navigate your site and verify events fire correctly
5. Check that all dataLayer events appear in the "Events" tab

### Step 7: Publish Container
1. Click "Submit" (top-right)
2. Add version name: "Initial Suppl.me Analytics Setup"
3. Add version description: "Imported complete tracking configuration with 22 events"
4. Click "Publish"

## Container Contents

### Variables (36 total)
All variables read from the `window.dataLayer`:

**Core Variables**:
- GA4 Measurement ID (constant)
- DL - supplementName
- DL - pageName
- DL - pageUrl
- DL - currentPage

**Product Variables**:
- DL - productName
- DL - productBrand
- DL - productRetailer
- DL - productPosition
- DL - productLocation
- DL - productCount

**Navigation Variables**:
- DL - destination
- DL - location
- DL - linkText
- DL - linkType
- DL - outboundUrl

**Interaction Variables**:
- DL - searchQuery
- DL - resultsCount
- DL - glossaryTerm
- DL - depth (scroll)
- DL - timeSpent
- DL - timeOnPage
- DL - scrollDepth
- DL - engagedTime

**Retailer Variables**:
- DL - retailerName
- DL - buttonLocation
- DL - platform

**Certification Variables**:
- DL - certificationType
- DL - context

**CTA Variables**:
- DL - ctaText
- DL - ctaLocation
- DL - ctaDestination
- DL - ctaType

**Session Variables**:
- DL - sessionDuration
- DL - section

### Triggers (22 total)
Each trigger fires on a specific custom event:

1. **All Pages** - Standard pageview trigger
2. **Event - pageview** - Custom pageview with dataLayer data
3. **Event - supplement_view** - Supplement page view
4. **Event - affiliate_click** - Affiliate link clicks
5. **Event - product_click** - Product card clicks
6. **Event - outbound_link_click** - External link clicks
7. **Event - scroll_depth** - Scroll milestones (25%, 50%, 75%, 100%)
8. **Event - time_on_page** - Time spent tracking
9. **Event - navigation_click** - Header/footer navigation
10. **Event - search** - Site search queries
11. **Event - glossary_link_click** - Glossary term clicks
12. **Event - exit_intent** - User exit behavior
13. **Event - product_impressions** - Product view tracking
14. **Event - retailer_click** - Retailer button clicks
15. **Event - certification_click** - Certification link clicks
16. **Event - engagement_time** - Active engagement tracking
17. **Event - session_start** - Session initialization
18. **Event - session_end** - Session completion
19. **Event - cta_click** - Call-to-action clicks
20. **Event - error** - JavaScript errors
21. **Event - 404_error** - Page not found errors
22. **Event - supplement_section_view** - Section scroll tracking

### Tags (22 total)
Each tag sends data to GA4:

1. **GA4 - Configuration** - Base configuration tag (fires on all pages)
2. **GA4 - Page View** - Enhanced pageview with custom dimensions
3. **GA4 - Supplement View** - Supplement page tracking
4. **GA4 - Affiliate Click** - Affiliate conversion tracking
5. **GA4 - Product Click** - Product interaction tracking
6. **GA4 - Outbound Link Click** - External link tracking
7. **GA4 - Scroll Depth** - Scroll engagement
8. **GA4 - Time on Page** - Page duration
9. **GA4 - Navigation Click** - Navigation patterns
10. **GA4 - Search** - Search behavior
11. **GA4 - Glossary Link Click** - Content engagement
12. **GA4 - Exit Intent** - Exit patterns
13. **GA4 - Product Impressions** - Product visibility
14. **GA4 - Retailer Click** - Retailer preference tracking
15. **GA4 - Certification Click** - Quality indicators
16. **GA4 - Engagement Time** - Active time tracking
17. **GA4 - Session Start** - Session initialization
18. **GA4 - Session End** - Session completion
19. **GA4 - CTA Click** - Conversion actions
20. **GA4 - Error** - Error monitoring
21. **GA4 - 404 Error** - Page not found tracking
22. **GA4 - Supplement Section View** - Content section tracking

## Event Parameters

### Standard Parameters (all events)
- `timestamp` - ISO 8601 timestamp
- `currentPage` - Current page pathname
- `pageUrl` - Full page URL

### Custom Dimensions by Event

**pageview**:
- `pageName` - Page title
- `pageCategory` - Page type (landing, supplement, product, comparison, glossary, static)
- `pageTitle` - Document title
- `referrer` - Referrer URL

**supplement_view**:
- `supplementName` - Supplement name (e.g., "Vitamin D")

**product_click**:
- `productName` - Product name
- `productBrand` - Brand name
- `productRetailer` - Retailer name
- `supplementName` - Supplement category
- `productPosition` - Position in list
- `productLocation` - Display location (hero, bottom, comparison)

**affiliate_click**:
- `platform` - Affiliate platform (Amazon, iHerb, etc.)
- `supplementName` - Supplement name
- `linkType` - Type of link (button, text_link, product_card)

**retailer_click**:
- `retailerName` - Retailer name (Amazon, iHerb, Compare All)
- `supplementName` - Supplement name
- `buttonLocation` - Button position (hero, bottom)

**scroll_depth**:
- `depth` - Scroll percentage (25, 50, 75, 100)
- `pageName` - Page name

**search**:
- `searchQuery` - Search term
- `resultsCount` - Number of results

**glossary_link_click**:
- `glossaryTerm` - Term name
- `currentPage` - Page where click occurred

**certification_click**:
- `certificationType` - Certification type (USP, ConsumerLab, NSF, Other)
- `context` - Context where clicked

**cta_click**:
- `ctaText` - Button/link text
- `ctaLocation` - Location on page
- `ctaDestination` - Target URL
- `ctaType` - Type (button, link, banner)

**error**:
- `errorType` - Error type
- `errorMessage` - Error message
- `errorLocation` - Where error occurred

## Testing Checklist

### After Import & Publish
- [ ] GTM container loads on all pages
- [ ] dataLayer initializes before GTM script
- [ ] GA4 Configuration tag fires on all pages
- [ ] Page views tracked correctly
- [ ] Custom events appear in GTM Preview
- [ ] Events visible in GA4 DebugView
- [ ] No console errors

### Event Testing
- [ ] Navigate between pages → pageview events
- [ ] Click supplement page → supplement_view
- [ ] Click product card → product_click
- [ ] Click retailer button → retailer_click
- [ ] Click external link → outbound_link_click
- [ ] Scroll page → scroll_depth (25%, 50%, 75%, 100%)
- [ ] Use search → search event
- [ ] Click glossary term → glossary_link_click
- [ ] Click certification badge → certification_click

### GA4 Verification
1. Go to GA4 property: https://analytics.google.com/
2. Click "Configure" → "DebugView"
3. Navigate your site
4. Verify events appear in real-time
5. Check event parameters are populated correctly

## Troubleshooting

### GTM Container Not Loading
- Check GTM ID in `.env`: `NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT`
- Verify GTM script in page source (`View Page Source` → search for "googletagmanager")
- Check browser console for errors
- Disable ad blockers (they block GTM)

### Events Not Firing
- Open browser console
- Type `window.dataLayer` to see all events
- Verify event names match trigger names exactly
- Check GTM Preview mode for errors

### GA4 Not Receiving Events
- Verify GA4 Measurement ID is correct: `G-JHCPJYM37R`
- Check GTM Preview shows tags firing
- Wait up to 30 minutes for events to appear in GA4 reports
- Use DebugView for real-time validation

### Duplicate Events
- Check if multiple GTM containers are installed
- Verify only one GTM script in page
- Check for multiple tracking implementations

## Best Practices

### For Development
1. Use GTM Preview mode for all testing
2. Never publish unverified changes to production
3. Create a separate GTM workspace for testing
4. Test all events before publishing

### For Production
1. Monitor event volume in GA4
2. Set up custom reports for key metrics
3. Create conversion goals for affiliate clicks
4. Review data quality weekly

### For Maintenance
1. Document all container changes
2. Use descriptive version names
3. Keep container in sync with code
4. Archive old workspaces regularly

## Next Steps

After successful import:
1. ✅ Verify all 22 events fire correctly
2. ✅ Set up GA4 custom reports
3. ✅ Configure conversion goals
4. ✅ Set up alerts for errors
5. ✅ Create dashboards for key metrics

## Support

If you encounter issues:
1. Check GTM Preview mode
2. Inspect dataLayer in browser console
3. Review GA4 DebugView
4. Check container configuration in GTM

## Container Version History

**Version 1.0** (Current)
- Initial release with 22 events
- Complete tracking infrastructure
- Product impressions and clicks
- Affiliate link tracking
- Session tracking
- Error monitoring

Future updates will be documented here.
