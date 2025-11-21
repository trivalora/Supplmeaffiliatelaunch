#!/bin/bash

# Test critical glossary navigation paths
# Tests redirects and ensures pages load without errors

BASE_URL="http://localhost:3000"
PASSED=0
FAILED=0

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🧪 Testing Glossary Navigation Paths"
echo "===================================="
echo ""

# Function to test a URL
test_url() {
    local url=$1
    local description=$2
    local expected_redirect=$3
    
    # Use curl with follow redirects and check final status
    response=$(curl -s -L -w "\n%{http_code}\n%{url_effective}" -o /dev/null "$url" 2>&1)
    status_code=$(echo "$response" | tail -2 | head -1)
    final_url=$(echo "$response" | tail -1)
    
    if [ "$status_code" = "200" ]; then
        if [ -n "$expected_redirect" ]; then
            if [[ "$final_url" == *"$expected_redirect"* ]]; then
                echo -e "${GREEN}✅ PASS${NC}: $description"
                echo "   $url → $expected_redirect"
                ((PASSED++))
            else
                echo -e "${RED}❌ FAIL${NC}: $description"
                echo "   Expected redirect to: $expected_redirect"
                echo "   Actually redirected to: $final_url"
                ((FAILED++))
            fi
        else
            echo -e "${GREEN}✅ PASS${NC}: $description"
            echo "   $url"
            ((PASSED++))
        fi
    else
        echo -e "${RED}❌ FAIL${NC}: $description"
        echo "   $url returned status $status_code"
        ((FAILED++))
    fi
}

echo "Testing Redirect Paths (term variations → parent pages)"
echo "--------------------------------------------------------"

# Test user-reported issues
test_url "$BASE_URL/glossary/osteoarthritis" "Osteoarthritis redirect" "/glossary/jointhealth"
test_url "$BASE_URL/glossary/osteopenia" "Osteopenia redirect" "/glossary/bonedensity"
test_url "$BASE_URL/glossary/insomnia" "Insomnia redirect" "/glossary/sleepquality"
test_url "$BASE_URL/glossary/dopamine" "Dopamine redirect" "/glossary/neurotransmitter"
test_url "$BASE_URL/glossary/memory" "Memory redirect" "/glossary/cognitivefunction"
test_url "$BASE_URL/glossary/hypertension" "Hypertension redirect" "/glossary/bloodpressure"

echo ""
echo "Testing Canonical Hyphenated Forms"
echo "-----------------------------------"

test_url "$BASE_URL/glossary/joint-health" "Joint Health hyphenated" "/glossary/jointhealth"
test_url "$BASE_URL/glossary/bone-density" "Bone Density hyphenated" "/glossary/bonedensity"
test_url "$BASE_URL/glossary/blood-pressure" "Blood Pressure hyphenated" "/glossary/bloodpressure"
test_url "$BASE_URL/glossary/cognitive-function" "Cognitive Function hyphenated" "/glossary/cognitivefunction"

echo ""
echo "Testing Direct Page Access (should load without redirect)"
echo "---------------------------------------------------------"

test_url "$BASE_URL/glossary/jointhealth" "Joint Health page"
test_url "$BASE_URL/glossary/collagen" "Collagen page"
test_url "$BASE_URL/glossary/inflammation" "Inflammation page"
test_url "$BASE_URL/glossary/rct" "RCT page"

echo ""
echo "Testing Abbreviations"
echo "---------------------"

test_url "$BASE_URL/glossary/bmd" "BMD abbreviation" "/glossary/bonedensity"
test_url "$BASE_URL/glossary/hba1c" "HbA1c abbreviation"
test_url "$BASE_URL/glossary/hdl" "HDL abbreviation" "/glossary/hdlcholesterol"
test_url "$BASE_URL/glossary/ldl" "LDL abbreviation" "/glossary/ldlcholesterol"

echo ""
echo "========================================="
echo "Test Results"
echo "========================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Failed: $FAILED${NC}"
else
    echo -e "Failed: $FAILED"
fi
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed. Please review the output above.${NC}"
    exit 1
fi
