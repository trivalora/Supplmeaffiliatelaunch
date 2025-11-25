#!/bin/bash
cd "$(dirname "$0")/.."

supplements=(
  "Ashwagandha:ashwagandha"
  "BCAAs:bcaa"
  "Calcium:calcium"
  "CaseinProtein:casein-protein"
  "Collagen:collagen"
  "Creatine:creatine"
  "Curcumin:curcumin"
  "Iron:iron"
  "Magnesium:magnesium"
  "Multivitamin:multivitamin"
  "Omega3:omega-3"
  "Prebiotics:prebiotics"
  "Probiotics:probiotics"
  "Sulforaphane:sulforaphane"
  "VitaminC:vitamin-c"
  "VitaminD:vitamin-d"
  "WheyProtein:whey-protein"
)

for item in "${supplements[@]}"; do
  IFS=':' read -r component_name supplement_id <<< "$item"
  
  cat > "src/components/pages/comparisons/${component_name}Comparison.tsx" << 'INNEREOF'
'use client';
import { ProductComparisonWrapper } from '@/components/templates/ProductComparisonWrapper';

export function COMPONENT_NAMEComparison() {
  return (
    <ProductComparisonWrapper
      supplementId="SUPPLEMENT_ID"
    />
  );
}
INNEREOF

  # Replace placeholders
  sed -i '' "s/COMPONENT_NAME/${component_name}/g" "src/components/pages/comparisons/${component_name}Comparison.tsx"
  sed -i '' "s/SUPPLEMENT_ID/${supplement_id}/g" "src/components/pages/comparisons/${component_name}Comparison.tsx"
  echo "✅ Fixed ${component_name}Comparison.tsx"
done

echo ""
echo "🎉 All 17 comparison files fixed!"
