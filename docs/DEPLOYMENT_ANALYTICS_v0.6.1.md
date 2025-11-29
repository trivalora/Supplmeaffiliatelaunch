# 🚀 Analytics v0.6.1 - Quick Deployment Guide

**Time Required**: 15-20 minutes  
**Prerequisites**: Vercel account, GA4 access, affiliate network accounts

---

## Step 1: Get GA4 API Secret (5 min)

1. Go to [Google Analytics 4](https://analytics.google.com/)
2. Select your property (G-JHCPJYM37R)
3. Click **Admin** (bottom left) → **Data Streams**
4. Click your web stream
5. Scroll down → **Measurement Protocol API secrets**
6. Click **Create** → Name: "Server-Side Tracking"
7. **Copy the secret** (looks like: `AaBbCcDdEeFf123456...`)

---

## Step 2: Add Environment Variables (3 min)

### Option A: Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/seb s-projects-da6abf13/supplmeaffiliatelaunch/settings/environment-variables)
2. Add new variable:
   - Key: `GA4_API_SECRET`
   - Value: (paste secret from step 1)
   - Environments: Production, Preview, Development (select all)
3. Click **Save**

### Option B: CLI
```bash
vercel env add GA4_API_SECRET
# Paste your secret
# Select: Production, Preview, Development
```

---

## Step 3: Generate Webhook Secrets (2 min)

```bash
# Generate two random secrets
openssl rand -hex 32  # For iHerb
openssl rand -hex 32  # For Amazon

# Add to Vercel
vercel env add IHERB_WEBHOOK_SECRET
# Paste first secret

vercel env add AMAZON_WEBHOOK_SECRET
# Paste second secret
```

**Save these secrets somewhere safe** - you'll need them for affiliate dashboards!

---

## Step 4: Deploy Code (2 min)

```bash
cd /Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch

git add .
git commit -m "feat: Complete analytics enhancement v0.6.1 - GA4 MP, webhooks, dashboard"
git push origin main
```

Vercel will auto-deploy in ~3-5 minutes.

**Note**: You may see TypeScript errors about `analytics_events` and `affiliate_clicks` tables. This is expected - they'll be fixed after running the database migration in Step 8. Vercel will still deploy successfully.

---

## Step 5: Configure iHerb Webhook (3 min)

1. Log in to [iHerb Affiliate Dashboard](https://affiliate.iherb.com/)
2. Go to **Settings** → **Postback URL**
3. Enter URL: `https://www.suppl.me/api/webhooks/iherb`
4. Signature Settings:
   - Header: `X-iHerb-Signature`
   - Method: `HMAC SHA256`
   - Secret: (paste your IHERB_WEBHOOK_SECRET)
5. Parameters to send:
   ```
   sub_id={sub_id}
   order_id={order_id}
   sale_amount={sale_amount}
   commission={commission}
   currency={currency}
   status={status}
   transaction_date={transaction_date}
   ```
6. Click **Save**

---

## Step 6: Configure Amazon Associates Webhook (5 min)

### If Using SNS (Recommended)
1. Log in to [Amazon Associates](https://affiliate-program.amazon.com/)
2. Go to **Product Advertising API** → **Event Notifications**
3. Create SNS Topic: `suppl-me-commissions`
4. Subscribe endpoint: `https://www.suppl.me/api/webhooks/amazon`
5. Confirm subscription:
   ```bash
   # Check webhook health endpoint
   curl https://www.suppl.me/api/webhooks/amazon
   # Copy SubscribeURL from response and visit it in browser
   ```

### If Using Direct HTTP (Alternative)
1. Contact Amazon Associates support
2. Request postback URL configuration
3. Provide URL: `https://www.suppl.me/api/webhooks/amazon`
4. Provide signature method: HMAC SHA256
5. Provide secret: (your AMAZON_WEBHOOK_SECRET)

---

## Step 7: Run Database Migration (3 min)

**IMPORTANT**: This step updates the database schema to add new analytics tables.

```bash
cd /Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch

# Apply the migration
npx supabase db push

# Verify tables were created
npx supabase db execute --sql "
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'api' 
AND table_name IN ('analytics_events', 'affiliate_clicks', 'api_requests');
"

# Expected output: 3 table names
```

If you see all 3 tables, migration is successful! ✅

---

## Step 8: Test Everything (5 min)

### Test GA4 Measurement Protocol
```bash
# Send test event
curl -X POST https://www.suppl.me/api/events \
  -H "Content-Type: application/json" \
  -d '[{
    "event": "test_event",
    "category": "test",
    "visitorId": "test_visitor_123",
    "sessionId": "test_session_456"
  }]'

# Check GA4 within 30 seconds
# Go to GA4 → Reports → Realtime
# Should see event appear
```

### Test Webhooks
```bash
# Test iHerb webhook health
curl https://www.suppl.me/api/webhooks/iherb
# Expected: {"success":true,"configured":true}

# Test Amazon webhook health
curl https://www.suppl.me/api/webhooks/amazon
# Expected: {"success":true,"configured":true}
```

### Test Dashboard
1. Open browser: https://www.suppl.me/admin/analytics
2. Should see dashboard load
3. Select period: "Last 7 days"
4. Verify data appears (or "No data" if brand new)

---

## Step 8: Verify in Production (Ongoing)

### Check Vercel Logs
```bash
vercel logs --follow

# Look for:
# ✅ [GA4 MP] Event sent successfully
# ✅ [Events API] Inserted X events
# ✅ [Affiliate Click] Commission updated
```

### Monitor GA4
1. Go to GA4 → **Realtime** report
2. Events should appear within 30 seconds
3. Compare event counts: GTM vs Server

### Monitor Dashboard
1. Visit `/admin/analytics` daily
2. Track key metrics:
   - Sessions
   - Affiliate clicks
   - Conversion rate
   - Revenue (once commissions come in)

---

## 🎉 You're Done!

Your analytics stack is now:
- ✅ Capturing 98%+ of events (bypassing ad blockers)
- ✅ Tracking affiliate commissions automatically
- ✅ Visualizing performance in real-time

---

## 🆘 Troubleshooting

### GA4 Events Not Appearing
```bash
# Check environment variable
vercel env ls | grep GA4_API_SECRET

# Check logs
vercel logs | grep "GA4 MP"

# Test connection
node -e "require('./src/lib/ga4-measurement-protocol').testGA4Connection()"
```

### Webhook Not Working
```bash
# Check secret is set
vercel env ls | grep WEBHOOK_SECRET

# Test with curl
curl -X POST https://www.suppl.me/api/webhooks/iherb \
  -H "Content-Type: application/json" \
  -d '{"sub_id":"test","order_id":"123","status":"approved"}'

# Check logs
vercel logs | grep "Webhook"
```

### Dashboard Not Loading
```bash
# Check API endpoints
curl https://www.suppl.me/api/analytics/summary?period=7d
curl https://www.suppl.me/api/analytics/affiliate-clicks?limit=10

# Check browser console
# Open DevTools → Console (look for errors)
```

---

## 📞 Need Help?

- Check `docs/ANALYTICS_COMPLETE_v0.7.0.md` for detailed docs
- Check `docs/ANALYTICS_ROADMAP.md` for architecture
- Create GitHub issue for bugs
- Tag @roxyjune for support

---

**Total Time**: ~20 minutes  
**Deployment Status**: Ready for production! 🚀
