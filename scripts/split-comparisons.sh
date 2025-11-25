#!/bin/bash

# Split Comparison Components Script
# Creates 17 individual comparison files from ProductComparisonWrapper.tsx

# Comparison components to create
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

OUTPUT_DIR="src/components/pages/comparisons"

for item in "${supplements[@]}"; do
  IFS=':' read -r component_name supplement_id <<< "$item"
  
  cat > "${OUTPUT_DIR}/${component_name}Comparison.tsx" << EOF
'use client';
import { ProductComparisonWrapper } from '@/components/templates/ProductComparisonWrapper';
import { PageKey } from '@/routes.config';

interface ComparisonProps {
  onNavigate?: (page: PageKey) => void;
}

export function ${component_name}Comparison({ onNavigate }: ComparisonProps) {
  return (
    <ProductComparisonWrapper
      supplementId="${supplement_id}"
      onNavigate={onNavigate}
    />
  );
}
EOF
  
  echo "✅ Created ${component_name}Comparison.tsx"
done

echo ""
echo "🎉 All 17 comparison files created!"
