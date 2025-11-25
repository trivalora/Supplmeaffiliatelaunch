#!/bin/bash

# Tailwind CSS Warning Fix Script
# This script batch-replaces verbose Tailwind classes with their shorthand equivalents

echo "🔧 Fixing Tailwind CSS warnings..."

# Find all TSX files and apply replacements
find src app -name "*.tsx" -type f -print0 | while IFS= read -r -d '' file; do
  # Common height replacements
  sed -i '' 's/min-h-\[44px\]/min-h-11/g' "$file"
  sed -i '' 's/min-h-\[36px\]/min-h-9/g' "$file"
  sed -i '' 's/min-h-\[32px\]/min-h-8/g' "$file"
  sed -i '' 's/min-h-\[80px\]/min-h-20/g' "$file"
  sed -i '' 's/min-h-\[96px\]/min-h-24/g' "$file"
  sed -i '' 's/sm:min-h-\[96px\]/sm:min-h-24/g' "$file"
  
  # Padding replacements
  sed -i '' 's/pb-\[2px\]/pb-0.5/g' "$file"
  
  # Leading (line-height) replacements
  sed -i '' 's/leading-\[48px\]/leading-12/g' "$file"
  sed -i '' 's/leading-\[40px\]/leading-10/g' "$file"
  sed -i '' 's/leading-\[28px\]/leading-7/g' "$file"
  sed -i '' 's/leading-\[24px\]/leading-6/g' "$file"
  sed -i '' 's/leading-\[20px\]/leading-5/g' "$file"
  
  # Width replacements
  sed -i '' 's/lg:w-\[240px\]/lg:w-60/g' "$file"
  sed -i '' 's/max-w-\[1280px\]/max-w-7xl/g' "$file"
  
  # Font family replacements (remove extra underscore/spaces)
  sed -i '' "s/font-\[\'Lora\',_serif\]/font-\[\'Lora\',serif\]/g" "$file"
  sed -i '' "s/font-\[\'Lato\',_sans-serif\]/font-\[\'Lato\',sans-serif\]/g" "$file"
  
  # CSS variable replacements (use new syntax)
  sed -i '' 's/px-\[var(--page-padding-inline)\]/px-(--page-padding-inline)/g' "$file"
  sed -i '' 's/md:left-\[var(--page-padding-inline)\]/md:left-(--page-padding-inline)/g' "$file"
  sed -i '' 's/gap-\[var(--space-2xs)\]/gap-(--space-2xs)/g' "$file"
  sed -i '' 's/gap-\[var(--space-md)\]/gap-(--space-md)/g' "$file"
  
  # Important modifier replacements (new syntax)
  sed -i '' 's/md:!opacity-100/md:opacity-100!/g' "$file"
  sed -i '' 's/md:!pointer-events-auto/md:pointer-events-auto!/g' "$file"
  
  # Break words replacement
  sed -i '' 's/break-words/wrap-break-word/g' "$file"
done

echo "✅ Tailwind CSS warnings fixed!"
echo "Run 'npm run build' to verify 0 warnings"
