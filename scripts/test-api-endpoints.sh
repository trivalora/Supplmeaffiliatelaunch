#!/bin/bash

# API Endpoint Testing Script
# Tests all 5 core API endpoints with various filter combinations

BASE_URL="http://localhost:3000"

echo "🧪 Suppl.me API Testing Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to test endpoint
test_endpoint() {
    local name=$1
    local url=$2
    
    echo -e "${BLUE}Testing:${NC} $name"
    echo "URL: $url"
    
    response=$(curl -s -w "\n%{http_code}" "$url")
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" = "200" ]; then
        echo -e "${GREEN}✓ Success${NC} (HTTP $http_code)"
        echo "$body" | jq '.' 2>/dev/null || echo "$body"
    else
        echo -e "${RED}✗ Failed${NC} (HTTP $http_code)"
        echo "$body"
    fi
    
    echo ""
    echo "---"
    echo ""
}

# Test 1: List all supplements
test_endpoint "1. List All Supplements" \
    "$BASE_URL/api/supplements"

# Test 2: Get single supplement
test_endpoint "2. Get Single Supplement (Ashwagandha)" \
    "$BASE_URL/api/supplements/ashwagandha"

# Test 3: Get supplement products (basic)
test_endpoint "3a. Get Supplement Products (Basic)" \
    "$BASE_URL/api/supplements/ashwagandha/products?page=1&limit=5"

# Test 4: Get supplement products (with filters)
test_endpoint "3b. Get Supplement Products (With Filters)" \
    "$BASE_URL/api/supplements/ashwagandha/products?page=1&limit=5&retailer=iHerb&min_price=10&max_price=30&sort=price_asc"

# Test 5: Get supplement products (brand filter)
test_endpoint "3c. Get Supplement Products (Brand Filter)" \
    "$BASE_URL/api/supplements/ashwagandha/products?page=1&limit=5&brand=Organic"

# Test 6: Get supplement products (third party tested)
test_endpoint "3d. Get Supplement Products (Third Party Tested)" \
    "$BASE_URL/api/supplements/ashwagandha/products?page=1&limit=5&third_party_tested=true"

# Test 7: Search products (basic)
test_endpoint "4a. Search Products (Basic)" \
    "$BASE_URL/api/products/search?q=ashwagandha&limit=5"

# Test 8: Search products (with filters)
test_endpoint "4b. Search Products (With Filters)" \
    "$BASE_URL/api/products/search?q=ashwagandha&brand=Organic&min_price=10&max_price=30&sort=price_asc&limit=5"

# Test 9: Get first product ID for next test
echo -e "${BLUE}Getting sample product ID...${NC}"
PRODUCT_ID=$(curl -s "$BASE_URL/api/supplements/ashwagandha/products?limit=1" | jq -r '.products[0].id')

if [ "$PRODUCT_ID" != "null" ] && [ -n "$PRODUCT_ID" ]; then
    echo -e "${GREEN}Found product ID:${NC} $PRODUCT_ID"
    echo ""
    
    # Test 10: Get single product
    test_endpoint "5. Get Single Product Detail" \
        "$BASE_URL/api/products/$PRODUCT_ID"
else
    echo -e "${RED}✗ Could not find product ID${NC}"
    echo ""
fi

echo "================================"
echo "🏁 Testing Complete!"
echo ""
echo "Summary:"
echo "- 1 endpoint: List supplements"
echo "- 1 endpoint: Single supplement"
echo "- 4 tests: Supplement products with various filters"
echo "- 2 tests: Product search with filters"
echo "- 1 endpoint: Single product detail"
echo ""
echo "Total: 9 endpoint tests"
