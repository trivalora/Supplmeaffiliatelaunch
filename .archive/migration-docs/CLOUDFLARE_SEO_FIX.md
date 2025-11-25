# Cloudflare Security Blocking SEO Crawlers - Fix Guide

## Problem
Site returns HTTP 403 with `cf-mitigated: challenge` header, blocking Googlebot and other crawlers.

## Solution - Update Cloudflare Settings

### 1. Disable Bot Fight Mode
**Dashboard → Security → Bots**
- Turn OFF "Bot Fight Mode" (this challenges all bots including search engines)
- Keep "Super Bot Fight Mode" OFF for free plans

### 2. Allow Search Engine Bots
**Dashboard → Security → Bots → Configure Super Bot Fight Mode**
- Verified Bots (Google, Bing, etc.): **Allow**
- NOT "Challenge" or "Block"

### 3. Update Firewall Rules
**Dashboard → Security → WAF → Firewall Rules**

Add BYPASS rule for search engines:
```
(http.user_agent contains "Googlebot") or 
(http.user_agent contains "Bingbot") or 
(http.user_agent contains "DuckDuckBot") or 
(http.user_agent contains "Baiduspider") or
(http.user_agent contains "YandexBot") or
(http.user_agent contains "facebookexternalhit") or
(http.user_agent contains "Twitterbot") or
(http.user_agent contains "LinkedInBot") or
(http.user_agent contains "Slackbot")
```
Action: **Allow**
Priority: 1 (highest)

### 4. Security Level
**Dashboard → Security → Settings**
- Security Level: **Medium** (not High/I'm Under Attack)
- Challenge Passage: 30 minutes

### 5. Page Rules for SEO Tools
**Dashboard → Rules → Page Rules**

Create rule for all pages:
- URL: `suppl.me/*`
- Settings:
  - Security Level: **Essentially Off** for verified bots
  - Cache Level: **Standard**
  - Browser Integrity Check: **Off**

### 6. Remove Overly Restrictive Headers

Check **Transform Rules → Modify Response Header**:
- Remove `cross-origin-embedder-policy: require-corp`
- Remove `cross-origin-opener-policy: same-origin` 
- These block legitimate crawlers

Change to:
- `cross-origin-embedder-policy: unsafe-none`
- OR remove entirely

### 7. Verify robots.txt Isn't Blocked
**Dashboard → Caching → Configuration**
- Ensure `/robots.txt` and `/sitemap.xml` bypass cache
- Add Page Rule: `suppl.me/robots.txt` → Cache Level: Bypass

## Test After Changes

```bash
# Test with Googlebot user agent
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" -I https://www.suppl.me

# Should return 200, not 403
```

## Expected Result
- Status Code: **200 OK**
- NO `cf-mitigated: challenge` header
- NO `statuscode: 403`

## Verification
1. Google Search Console → URL Inspection → Test Live URL
2. Should see "URL is available to Google"
3. Re-request indexing for all pages

---

**Important**: These changes take 2-5 minutes to propagate globally through Cloudflare's network.
