#!/bin/bash

# Script to remove callback props from all glossary components
# This converts them from SPA-style components to Next.js-compatible components

GLOSSARY_DIR="/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/glossary"

echo "🔄 Removing callback props from glossary components..."

# Counter for tracking changes
count=0

# Process each .tsx file in the glossary directory
for file in "$GLOSSARY_DIR"/*.tsx; do
  if [ -f "$file" ]; then
    # Check if the file contains the old props pattern
    if grep -q "onNavigate\|onContactClick\|onLegalClick" "$file"; then
      # Replace the props destructuring with empty props
      # Pattern 1: Props with all three callbacks
      sed -i '' 's/export function \([A-Za-z0-9]*\)({[^}]*onNavigate[^}]*onContactClick[^}]*onLegalClick[^}]*}: {[^}]*}) {/export function \1() {/g' "$file"
      
      # Remove the props being passed to GlossaryTemplate
      sed -i '' '/onNavigate={onNavigate}/d' "$file"
      sed -i '' '/onContactClick={onContactClick}/d' "$file"
      sed -i '' '/onLegalClick={onLegalClick}/d' "$file"
      sed -i '' '/currentPage=/d' "$file"
      
      count=$((count + 1))
      echo "  ✓ Updated: $(basename "$file")"
    fi
  fi
done

echo ""
echo "✅ Updated $count glossary component files"
echo "🎯 All glossary components now have no props (Next.js compatible)"
