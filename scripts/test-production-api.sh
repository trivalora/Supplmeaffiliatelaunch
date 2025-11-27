#!/bin/bash

echo "========================================="
echo "Testing Production API Endpoints"
echo "========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Test function
test_endpoint() {
    local name=$1
    local url=$2
    local expected_type=$3
    
    echo "Testing: $name"
    echo "URL: $url"
    
    # Get status code and content type
    RESPONSE=$(curl -s -w "\n%{http_code}\n%{content_type}" "$url")
    STATUS=$(echo "$RESPONSE" | tail -2 | head -1)
    CONTENT_TYPE=$(echo "$RESPONSE" | tail -1)
    BODY=$(echo "$RESPONSE" | head -n -2)
    
    # Check status code
    if [ "$STATUS" == "200" ]; then
        echo -e "${GREEN}✅ Status: $STATUS${NC}"
    else
        echo -e "${RED}❌ Status: $STATUS (Expected: 200)${NC}"
    fi
    
    # Check content type
    if [[ "$CONTENT_TYPE" == *"$expected_type"* ]]; then
        echo -e "${GREEN}✅ Content-Type: $CONTENT_TYPE${NC}"
    else
        echo -e "${RED}❌ Content-Type: $CONTENT_TYPE (Expected: $expected_type)${NC}"
    fi
    
    # Show first 200 chars of response
    if [ "$STATUS" == "200" ]; then
        echo "Response preview:"
        echo "$BODY" | head -c 200
        echo "..."
    else
        echo "Error response:"
        echo "$BODY" | head -c 500
    fi
    
    echo ""
    echo "-----------------------------------------"
    echo ""
}

# Run tests
test_endpoint "1. Supplements List" \
    "https://www.suppl.me/api/supplements" \
    "application/json"

test_endpoint "2. Single Supplement" \
    "https://www.suppl.me/api/supplements/ashwagandha" \
    "application/json"

test_endpoint "3. Supplement Products" \
    "https://www.suppl.me/api/supplements/ashwagandha/products?limit=2" \
    "application/json"

test_endpoint "4. Product Search" \
    "https://www.suppl.me/api/products/search?q=ashwagandha&limit=2" \
    "application/json"

# Get a product ID from supplements endpoint
PRODUCT_ID=$(curl -s "https://www.suppl.me/api/supplements/ashwagandha/products?limit=1" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$PRODUCT_ID" ]; then
    test_endpoint "5. Single Product" \
        "https://www.suppl.me/api/products/$PRODUCT_ID" \
        "application/json"
else
    echo "⚠️  Could not get product ID for test 5"
fi

echo "========================================="
echo "All tests complete!"
echo "========================================="
