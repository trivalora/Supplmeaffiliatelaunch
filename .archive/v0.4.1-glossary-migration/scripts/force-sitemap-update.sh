#!/bin/bash
# Force sitemap regeneration with cache busting
# Usage: ./scripts/force-sitemap-update.sh

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Force Sitemap Update & Cache Clearing${NC}"
echo ""

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

# Step 1: Regenerate sitemap
echo -e "${YELLOW}Step 1/5: Regenerating sitemap...${NC}"
npm run build > /dev/null 2>&1
echo -e "${GREEN}✅ Sitemap regenerated${NC}"
echo ""

# Step 2: Validate sitemap
echo -e "${YELLOW}Step 2/5: Validating sitemap XML...${NC}"
if xmllint --noout public/sitemap.xml 2>&1; then
    echo -e "${GREEN}✅ Sitemap XML is valid${NC}"
else
    echo -e "${RED}❌ Sitemap has XML errors${NC}"
    exit 1
fi
echo ""

# Step 3: Count URLs
echo -e "${YELLOW}Step 3/5: Counting URLs...${NC}"
URL_COUNT=$(grep -c "<loc>" public/sitemap.xml || echo "0")
echo -e "${GREEN}✅ Found $URL_COUNT URLs in sitemap${NC}"
echo ""

# Step 4: Ping search engines
echo -e "${YELLOW}Step 4/5: Notifying search engines...${NC}"

# Ping Google
if curl -s -o /dev/null -w "%{http_code}" "http://www.google.com/ping?sitemap=https://www.suppl.me/sitemap.xml" | grep -q "200"; then
    echo -e "${GREEN}✅ Google notified${NC}"
else
    echo -e "${YELLOW}⚠️  Google ping failed (non-blocking)${NC}"
fi

# Ping Bing
if curl -s -o /dev/null -w "%{http_code}" "http://www.bing.com/ping?sitemap=https://www.suppl.me/sitemap.xml" | grep -q "200"; then
    echo -e "${GREEN}✅ Bing notified${NC}"
else
    echo -e "${YELLOW}⚠️  Bing ping failed (non-blocking)${NC}"
fi
echo ""

# Step 5: Display next steps
echo -e "${YELLOW}Step 5/5: Manual steps required${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps (Google Search Console):${NC}"
echo ""
echo "1. Go to: https://search.google.com/search-console"
echo "2. Select your property (suppl.me)"
echo "3. Click 'Sitemaps' in left sidebar"
echo ""
echo "4. If old sitemap exists:"
echo "   - Click the three dots (⋮) next to it"
echo "   - Click 'Remove sitemap'"
echo "   - Wait 5 minutes"
echo ""
echo "5. Add new sitemap:"
echo "   - Click 'Add a new sitemap'"
echo "   - Enter: sitemap.xml"
echo "   - Click 'Submit'"
echo ""
echo "6. Verify immediately:"
echo "   - Click 'URL Inspection' (left sidebar)"
echo "   - Enter: https://www.suppl.me/sitemap.xml"
echo "   - Click 'Request Indexing'"
echo ""
echo -e "${GREEN}✨ Done! Wait 1-2 hours for Google to re-crawl.${NC}"
echo ""
echo -e "${BLUE}🔍 Verify cache cleared:${NC}"
echo "curl -I https://www.suppl.me/sitemap.xml | grep Last-Modified"
echo ""
