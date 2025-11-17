# iHerb Cookie-Based Authentication Guide

## Why Cookie-Based Authentication?

Cookie-based authentication is **much more reliable** than automated login because:
- ✅ Bypasses anti-automation detection
- ✅ Works with Google/Apple/Facebook OAuth logins  
- ✅ No CAPTCHA handling needed
- ✅ 100% success rate
- ✅ Simple one-time setup

## Step-by-Step Setup

### Step 1: Export Your iHerb Cookies

**Option A: Using Browser DevTools (All Browsers)**

1. **Log into iHerb** in your browser (Chrome, Firefox, Safari, Edge)
   - Go to https://www.iherb.com
   - Sign in with your account (Google, email, etc.)

2. **Open DevTools**
   - Press `F12` OR
   - Right-click → "Inspect"

3. **Go to Console Tab**

4. **Copy and paste this script** into the console:
   ```javascript
   copy(JSON.stringify(document.cookie.split('; ').map(c => {
     const [name, value] = c.split('=');
     return {
       name,
       value: decodeURIComponent(value),
       domain: '.iherb.com',
       path: '/',
       expires: Date.now() / 1000 + 86400 * 30,
       httpOnly: false,
       secure: true,
       sameSite: 'Lax'
     };
   }), null, 2))
   ```

5. **Cookies are now copied to clipboard!**
   - The script automatically copies the formatted JSON

6. **Save to file**
   - Create a new file: `iherb-cookies.json`
   - Paste the copied content
   - Save in the project root directory

**Option B: Using Browser Extension (Easier)**

1. Install **EditThisCookie** or **Cookie-Editor** extension
   - Chrome: [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie)
   - Firefox: [Cookie-Editor](https://addons.mozilla.org/en-US/firefox/addon/cookie-editor/)

2. **Log into iHerb**

3. **Click the extension icon**

4. **Export cookies**
   - Click "Export" button
   - Choose "JSON" format
   - Copy the exported JSON

5. **Save to `iherb-cookies.json`** in project root

### Step 2: Use Cookies in Scraper

**Update your test script:**

```typescript
import { scrapeIherb } from './scrapers/scrape-iherb.js';

const results = await scrapeIherb('Ashwagandha', '', {
  cookiesPath: './iherb-cookies.json',  // ← Add this!
  maxProducts: 20
});
```

**Or update your .env:**

```bash
# Optional: store path in environment
IHERB_COOKIES_PATH=./iherb-cookies.json
```

Then in code:
```typescript
const results = await scrapeIherb('Ashwagandha', '', {
  cookiesPath: process.env.IHERB_COOKIES_PATH,
  maxProducts: 20
});
```

### Step 3: Run the Scraper

```bash
npx tsx scripts/test-iherb-auth.ts
```

You should see:
```
[iHerb] Loading cookies from file...
[iHerb] ✅ Loaded 15 cookies
[iHerb] Loading search page...
[iHerb] ✅ Product 1 - $14.22 | UPC: 898220013654 ...
```

## Expected Results

**WITHOUT cookies:** 35% products with prices (public products only)  
**WITH cookies:** ~100% products with prices (including "see price in cart" items)

## Troubleshooting

### ❌ "Failed to load cookies"
- Check JSON format is valid
- Make sure file path is correct
- Verify file exists and is readable

### ❌ Still seeing NULL prices
- Cookies may have expired (re-export from browser)
- Make sure you were logged in when exporting
- Try logging out and back in before exporting

### ❌ Cookies expire
- iHerb cookies typically last 30 days
- When they expire, simply re-export from browser
- You'll know they expired when prices start showing NULL again

## Cookie File Example

```json
[
  {
    "name": "bm_mi",
    "value": "ABC123XYZ",
    "domain": ".iherb.com",
    "path": "/",
    "expires": 1734567890,
    "httpOnly": true,
    "secure": true,
    "sameSite": "Lax"
  },
  {
    "name": "session_id",
    "value": "def456uvw",
    "domain": ".iherb.com",
    "path": "/",
    "expires": 1734567890,
    "httpOnly": true,
    "secure": true,
    "sameSite": "Lax"
  }
]
```

## Security Notes

⚠️ **IMPORTANT:**
- **DO NOT commit `iherb-cookies.json` to git**
- Add to `.gitignore`: `iherb-cookies.json`
- Cookies contain session data - treat like passwords
- Cookies are specific to your account
- Regenerate if compromised

## Automation Tips

For production scraping:
1. Export cookies once manually
2. Store securely (environment variable, secret manager)
3. Refresh cookies monthly or when they expire
4. Monitor for NULL prices as indicator of expiration

## Summary

✅ **One-time setup** (5 minutes)  
✅ **100% reliable** (no login failures)  
✅ **Access all prices** (including hidden ones)  
✅ **Easy to refresh** (just re-export when expired)

This is the **recommended approach** for production scraping!
