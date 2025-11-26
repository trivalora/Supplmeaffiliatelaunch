# Content Reorganization Implementation Plan
**Date:** November 25, 2025  
**Project:** Suppl.me v0.3  
**Status:** Step-by-Step Implementation Guide  
**Estimated Time:** 4.5 hours (Option A) or 2.5 hours (Option B)

---

## Table of Contents

1. [Pre-Implementation Checklist](#1-pre-implementation-checklist)
2. [Phase 1: Create Branch & Backup](#phase-1-create-branch--backup)
3. [Phase 2: Create New Directory Structure](#phase-2-create-new-directory-structure)
4. [Phase 3: Move Supplement Pages](#phase-3-move-supplement-pages)
5. [Phase 4: Split Comparison Components](#phase-4-split-comparison-components)
6. [Phase 5: Move Templates](#phase-5-move-templates)
7. [Phase 6: Move Static Pages](#phase-6-move-static-pages)
8. [Phase 7: Reorganize Shared Components](#phase-7-reorganize-shared-components)
9. [Phase 8: Update routes.config.ts](#phase-8-update-routesconfigts)
10. [Phase 9: Update Dynamic Routes](#phase-9-update-dynamic-routes)
11. [Phase 10: Update Internal Imports](#phase-10-update-internal-imports)
12. [Phase 11: Testing & Validation](#phase-11-testing--validation)
13. [Phase 12: Deployment](#phase-12-deployment)
14. [Rollback Plan](#rollback-plan)

---

## 1. Pre-Implementation Checklist

### ✅ Before You Start

```bash
# 1. Ensure working directory is clean
git status

# 2. Verify build works
npm run build

# 3. Verify TypeScript has no errors
npx tsc --noEmit

# 4. Check current Node version (should be >=22.x)
node --version

# 5. Ensure no dev server running
pkill -f "next dev"
```

**Expected Results:**
- ✅ No uncommitted changes
- ✅ Build succeeds (1,936 pages)
- ✅ 0 TypeScript errors
- ✅ Node v22+ or v24+

### Tools You'll Need

- **VSCode** with "Find and Replace in Files" (Cmd+Shift+F)
- **Terminal** for git and npm commands
- **Browser** for testing after changes
- **Patience** - this will take 2-5 hours depending on option chosen

---

## Phase 1: Create Branch & Backup

**Time:** 5 minutes

### Step 1.1: Create Feature Branch

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Create and switch to new branch
git checkout -b content-reorganization-nov25

# Push branch to remote (creates backup)
git push -u origin content-reorganization-nov25
```

### Step 1.2: Create Local Backup (Optional but Recommended)

```bash
# Create backup outside git
cd /Users/roxyjune/Downloads
cp -r suppl.me_Affiliate_Launch_v0.3 suppl.me_Affiliate_Launch_v0.3_BACKUP_$(date +%Y%m%d_%H%M%S)
```

**Checkpoint:** You now have 2 backups (git branch + local copy).

---

## Phase 2: Create New Directory Structure

**Time:** 5 minutes

### Step 2.1: Create All New Directories

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Create pages structure
mkdir -p src/components/pages/supplements
mkdir -p src/components/pages/comparisons
mkdir -p src/components/pages/static

# Note: glossary already exists at src/components/glossary/
# We'll move it to pages/glossary in next step

# Create templates directory
mkdir -p src/components/templates

# Create sections structure
mkdir -p src/components/sections/knowledgebase
mkdir -p src/components/sections/product

# Create shared structure
mkdir -p src/components/shared/layout
mkdir -p src/components/shared/ui-extensions
mkdir -p src/components/shared/content

# Create providers directory
mkdir -p src/components/providers
```

### Step 2.2: Verify Directory Creation

```bash
# List new structure
tree src/components -L 2 -d
# Or if tree not installed:
find src/components -type d -maxdepth 2 | sort
```

**Expected Output:**
```
src/components/
├── pages/
│   ├── supplements/
│   ├── comparisons/
│   └── static/
├── templates/
├── sections/
│   ├── knowledgebase/
│   └── product/
├── shared/
│   ├── layout/
│   ├── ui-extensions/
│   └── content/
├── providers/
├── glossary/ (existing)
├── knowledgebase/ (existing)
└── ui/ (existing)
```

---

## Phase 3: Move Supplement Pages

**Time:** 15 minutes

### Step 3.1: Move All Supplement Page Files

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move supplement pages (17 files)
mv src/components/AshwagandhaKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/BcaaKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/CalciumKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/CaseinProteinKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/CollagenKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/CreatineKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/CurcuminKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/IronKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/MagnesiumKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/MultivitaminKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/Omega3KnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/PrebioticsKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/ProbioticsKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/SulforaphaneKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/VitaminCKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/VitaminDKnowledgebasePage.tsx src/components/pages/supplements/
mv src/components/WheyProteinKnowledgebasePage.tsx src/components/pages/supplements/
```

### Step 3.2: Update Template Imports in Moved Files

**Open VSCode Find and Replace:**
- **Find:** `from './KnowledgebaseTemplate'`
- **Replace:** `from '@/components/templates/KnowledgebaseTemplate'`
- **Files to include:** `src/components/pages/supplements/*.tsx`
- Click "Replace All"

**Alternative with sed (Terminal):**
```bash
cd src/components/pages/supplements

# Update KnowledgebaseTemplate imports
find . -name "*.tsx" -exec sed -i '' "s|from './KnowledgebaseTemplate'|from '@/components/templates/KnowledgebaseTemplate'|g" {} +

# Update relative imports for knowledgebase sections
find . -name "*.tsx" -exec sed -i '' "s|from './knowledgebase/|from '@/components/sections/knowledgebase/|g" {} +
```

### Step 3.3: Verify Moved Files

```bash
ls -1 src/components/pages/supplements/ | wc -l
# Should output: 17
```

**Checkpoint:** All 17 supplement pages moved and imports updated.

---

## Phase 4: Split Comparison Components

**Time:** 45 minutes (most complex phase)

### Step 4.1: Analyze Current ProductComparisonWrapper.tsx

```bash
# View current structure
cat src/components/ProductComparisonWrapper.tsx | head -50
```

**Current Pattern (17 components in one file):**
```typescript
export function AshwagandhaComparison({ onNavigate }: ComparisonProps) {
  return <ProductComparisonWrapper supplementId="ashwagandha" onNavigate={onNavigate} />;
}
export function CalciumComparison({ onNavigate }: ComparisonProps) {
  return <ProductComparisonWrapper supplementId="calcium" onNavigate={onNavigate} />;
}
// ... 15 more
```

### Step 4.2: Create Individual Comparison Files

**Script to Generate Files:**

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Create script
cat > scripts/split-comparisons.sh << 'SCRIPT'
#!/bin/bash

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
SCRIPT

# Make executable and run
chmod +x scripts/split-comparisons.sh
./scripts/split-comparisons.sh
```

### Step 4.3: Create Index File for Re-exports

```bash
cat > src/components/pages/comparisons/index.ts << 'EOF'
/**
 * Comparison Component Exports
 * 
 * Re-exports all comparison components for easy importing.
 * This maintains backward compatibility with existing imports.
 */

export { AshwagandhaComparison } from './AshwagandhaComparison';
export { BCAAsComparison } from './BCAAsComparison';
export { CalciumComparison } from './CalciumComparison';
export { CaseinProteinComparison } from './CaseinProteinComparison';
export { CollagenComparison } from './CollagenComparison';
export { CreatineComparison } from './CreatineComparison';
export { CurcuminComparison } from './CurcuminComparison';
export { IronComparison } from './IronComparison';
export { MagnesiumComparison } from './MagnesiumComparison';
export { MultivitaminComparison } from './MultivitaminComparison';
export { Omega3Comparison } from './Omega3Comparison';
export { PrebioticsComparison } from './PrebioticsComparison';
export { ProbioticsComparison } from './ProbioticsComparison';
export { SulforaphaneComparison } from './SulforaphaneComparison';
export { VitaminCComparison } from './VitaminCComparison';
export { VitaminDComparison } from './VitaminDComparison';
export { WheyProteinComparison } from './WheyProteinComparison';
EOF
```

### Step 4.4: Verify Comparison Files

```bash
ls -1 src/components/pages/comparisons/*.tsx | wc -l
# Should output: 17

# Check index file exists
ls -la src/components/pages/comparisons/index.ts
```

**Checkpoint:** 17 comparison components created as separate files + index file.

---

## Phase 5: Move Templates

**Time:** 10 minutes

### Step 5.1: Move Template Files

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move 3 template files
mv src/components/KnowledgebaseTemplate.tsx src/components/templates/
mv src/components/GlossaryTemplate.tsx src/components/templates/
mv src/components/ProductComparisonWrapper.tsx src/components/templates/
```

### Step 5.2: Update Imports in Template Files

**KnowledgebaseTemplate.tsx:**
```bash
# Update section imports
sed -i '' "s|from './knowledgebase/|from '@/components/sections/knowledgebase/|g" src/components/templates/KnowledgebaseTemplate.tsx

# Update shared component imports
sed -i '' "s|from './Footer'|from '@/components/shared/layout/Footer'|g" src/components/templates/KnowledgebaseTemplate.tsx
sed -i '' "s|from './figma/ImageWithFallback'|from '@/components/shared/ui-extensions/ImageWithFallback'|g" src/components/templates/KnowledgebaseTemplate.tsx
```

**GlossaryTemplate.tsx:**
```bash
# Update Footer import
sed -i '' "s|from './Footer'|from '@/components/shared/layout/Footer'|g" src/components/templates/GlossaryTemplate.tsx
```

**ProductComparisonWrapper.tsx:**
```bash
# Update ProductComparison import
sed -i '' "s|from './ProductComparison'|from '@/components/ProductComparison'|g" src/components/templates/ProductComparisonWrapper.tsx
```

### Step 5.3: Verify Template Moves

```bash
ls -1 src/components/templates/
# Should show:
# - KnowledgebaseTemplate.tsx
# - GlossaryTemplate.tsx
# - ProductComparisonWrapper.tsx
```

---

## Phase 6: Move Static Pages

**Time:** 15 minutes

### Step 6.1: Move Static Page Files

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move 12 static page files
mv src/components/AboutPage.tsx src/components/pages/static/
mv src/components/ContactPage.tsx src/components/pages/static/
mv src/components/CookiePolicyPage.tsx src/components/pages/static/
mv src/components/GlossaryPage.tsx src/components/pages/static/
mv src/components/ImpressumPage.tsx src/components/pages/static/
mv src/components/KnowledgebasePage.tsx src/components/pages/static/
mv src/components/LandingPage.tsx src/components/pages/static/
mv src/components/LegalDisclaimerPage.tsx src/components/pages/static/
mv src/components/MethodologyPage.tsx src/components/pages/static/
mv src/components/PartnerPage.tsx src/components/pages/static/
mv src/components/PrivacyPolicyPage.tsx src/components/pages/static/
mv src/components/TermsOfServicePage.tsx src/components/pages/static/
```

### Step 6.2: Update Imports in Static Pages

**Use Find and Replace in VSCode:**
- **Find:** `from './Footer'`
- **Replace:** `from '@/components/shared/layout/Footer'`
- **Files:** `src/components/pages/static/*.tsx`

**Additional replacements:**
- `from './Header'` → `from '@/components/shared/layout/Header'`
- `from './LegalContactSection'` → `from '@/components/LegalContactSection'` (if exists)
- `from './KnowledgebaseTemplate'` → `from '@/components/templates/KnowledgebaseTemplate'`

**Or use Terminal:**
```bash
cd src/components/pages/static

# Update Footer imports
find . -name "*.tsx" -exec sed -i '' "s|from './Footer'|from '@/components/shared/layout/Footer'|g" {} +

# Update Header imports
find . -name "*.tsx" -exec sed -i '' "s|from './Header'|from '@/components/shared/layout/Header'|g" {} +

# Update template imports
find . -name "*.tsx" -exec sed -i '' "s|from './KnowledgebaseTemplate'|from '@/components/templates/KnowledgebaseTemplate'|g" {} +
find . -name "*.tsx" -exec sed -i '' "s|from './GlossaryTemplate'|from '@/components/templates/GlossaryTemplate'|g" {} +
```

### Step 6.3: Verify Static Page Moves

```bash
ls -1 src/components/pages/static/ | wc -l
# Should output: 12
```

---

## Phase 7: Reorganize Shared Components

**Time:** 20 minutes

### Step 7.1: Move Glossary to pages/

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move entire glossary directory
mv src/components/glossary src/components/pages/
```

**Update glossary template imports:**
```bash
cd src/components/pages/glossary

# Update GlossaryTemplate imports
find . -name "*.tsx" -exec sed -i '' "s|from '../GlossaryTemplate'|from '@/components/templates/GlossaryTemplate'|g" {} +
find . -name "*.tsx" -exec sed -i '' "s|from './GlossaryTemplate'|from '@/components/templates/GlossaryTemplate'|g" {} +
```

### Step 7.2: Move Knowledgebase Sections

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move knowledgebase sections (keep in sections/knowledgebase)
# They're already in the right conceptual place, just need path updates
mv src/components/knowledgebase/* src/components/sections/knowledgebase/
rmdir src/components/knowledgebase
```

### Step 7.3: Move Shared Layout Components

```bash
# Move layout components
mv src/components/Footer.tsx src/components/shared/layout/
mv src/components/Header.tsx src/components/shared/layout/
mv src/components/ErrorBoundary.tsx src/components/shared/layout/
```

**Update imports in these files:**
```bash
cd src/components/shared/layout

# Update TrackedLink imports
sed -i '' "s|from './TrackedLink'|from '@/components/shared/ui-extensions/TrackedLink'|g" Footer.tsx
sed -i '' "s|from './TrackedLink'|from '@/components/shared/ui-extensions/TrackedLink'|g" Header.tsx
```

### Step 7.4: Move UI Extension Components

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Move UI extensions
mv src/components/AffiliateTooltip.tsx src/components/shared/ui-extensions/
mv src/components/DarkModeToggle.tsx src/components/shared/ui-extensions/
mv src/components/TrackedLink.tsx src/components/shared/ui-extensions/
mv src/components/figma/ImageWithFallback.tsx src/components/shared/ui-extensions/

# Remove empty figma directory
rmdir src/components/figma
```

### Step 7.5: Move Content Components

```bash
# Move content components
mv src/components/ResponsivePicture.tsx src/components/shared/content/
mv src/components/SmartImage.tsx src/components/shared/content/
mv src/components/SearchResults.tsx src/components/shared/content/
```

### Step 7.6: Move Providers

```bash
# Move provider
mv src/components/AnalyticsProvider.tsx src/components/providers/
```

### Step 7.7: Verify All Moves

```bash
# Check shared structure
find src/components/shared -type f -name "*.tsx" | wc -l
# Should output: 10 (3 layout + 4 ui-extensions + 3 content)

# Check providers
ls -1 src/components/providers/
# Should show: AnalyticsProvider.tsx

# Check sections
ls -1 src/components/sections/knowledgebase/ | wc -l
# Should output: 12
```

---

## Phase 8: Update routes.config.ts

**Time:** 30 minutes

### Step 8.1: Backup routes.config.ts

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Create backup
cp src/routes.config.ts src/routes.config.ts.backup
```

### Step 8.2: Update Component Paths - Knowledgebase Routes

**Open:** `src/routes.config.ts`

**Find and Replace (VSCode):**
- **Find:** `componentPath: './components/([A-Z][a-zA-Z]+)KnowledgebasePage'`
- **Replace:** `componentPath: './components/pages/supplements/$1KnowledgebasePage'`
- **Use Regex:** ✅ (Enable regex mode)

**Or Manual Update (17 routes):**
```typescript
// BEFORE:
componentPath: './components/AshwagandhaKnowledgebasePage',

// AFTER:
componentPath: './components/pages/supplements/AshwagandhaKnowledgebasePage',
```

**Supplements to update:**
1. AshwagandhaKnowledgebasePage
2. BcaaKnowledgebasePage
3. CalciumKnowledgebasePage
4. CaseinProteinKnowledgebasePage
5. CollagenKnowledgebasePage
6. CreatineKnowledgebasePage
7. CurcuminKnowledgebasePage
8. IronKnowledgebasePage
9. MagnesiumKnowledgebasePage
10. MultivitaminKnowledgebasePage
11. Omega3KnowledgebasePage
12. PrebioticsKnowledgebasePage
13. ProbioticsKnowledgebasePage
14. SulforaphaneKnowledgebasePage
15. VitaminCKnowledgebasePage
16. VitaminDKnowledgebasePage
17. WheyProteinKnowledgebasePage

### Step 8.3: Update Component Paths - Comparison Routes

**Find and Replace:**
```typescript
// BEFORE (all comparison routes):
componentPath: './components/ProductComparisonWrapper',

// AFTER:
componentPath: './components/pages/comparisons',
```

**Note:** We're pointing to the directory because we have an index.ts that re-exports all comparisons.

### Step 8.4: Update Component Paths - Glossary Routes

**Find and Replace:**
- **Find:** `componentPath: './components/glossary/`
- **Replace:** `componentPath: './components/pages/glossary/`

This will update all 198 glossary routes.

### Step 8.5: Update Component Paths - Static Routes

**Update STATIC_ROUTES array:**
```typescript
// BEFORE:
componentPath: './components/AboutPage',
// AFTER:
componentPath: './components/pages/static/AboutPage',
```

**Static routes to update (12 total):**
1. AboutPage
2. ContactPage
3. CookiePolicyPage
4. GlossaryPage
5. ImpressumPage
6. KnowledgebasePage
7. LandingPage
8. LegalDisclaimerPage
9. MethodologyPage
10. PartnerPage
11. PrivacyPolicyPage
12. TermsOfServicePage

### Step 8.6: Verify routes.config.ts

```bash
# Check for any remaining old paths
grep -n "componentPath: './components/[A-Z]" src/routes.config.ts
# Should return nothing

# Check TypeScript validity
npx tsc --noEmit src/routes.config.ts
# Should show no errors
```

---

## Phase 9: Update Dynamic Routes

**Time:** 30 minutes

### Step 9.1: Update app/[slug]/page.tsx

**File:** `app/[slug]/page.tsx`

**Step 9.1a: Update Supplement Imports**

**Find:**
```typescript
import { AshwagandhaKnowledgebasePage } from '@/components/AshwagandhaKnowledgebasePage';
```

**Replace with:**
```typescript
import { AshwagandhaKnowledgebasePage } from '@/components/pages/supplements/AshwagandhaKnowledgebasePage';
```

**All 17 imports to update:**
```typescript
// OLD IMPORTS (delete these)
import { AshwagandhaKnowledgebasePage } from '@/components/AshwagandhaKnowledgebasePage';
import { BcaaKnowledgebasePage } from '@/components/BcaaKnowledgebasePage';
import { CalciumKnowledgebasePage } from '@/components/CalciumKnowledgebasePage';
import { CaseinProteinKnowledgebasePage } from '@/components/CaseinProteinKnowledgebasePage';
import { CollagenKnowledgebasePage } from '@/components/CollagenKnowledgebasePage';
import { CreatineKnowledgebasePage } from '@/components/CreatineKnowledgebasePage';
import { CurcuminKnowledgebasePage } from '@/components/CurcuminKnowledgebasePage';
import { IronKnowledgebasePage } from '@/components/IronKnowledgebasePage';
import { MagnesiumKnowledgebasePage } from '@/components/MagnesiumKnowledgebasePage';
import { MultivitaminKnowledgebasePage } from '@/components/MultivitaminKnowledgebasePage';
import { Omega3KnowledgebasePage } from '@/components/Omega3KnowledgebasePage';
import { PrebioticsKnowledgebasePage } from '@/components/PrebioticsKnowledgebasePage';
import { ProbioticsKnowledgebasePage } from '@/components/ProbioticsKnowledgebasePage';
import { SulforaphaneKnowledgebasePage } from '@/components/SulforaphaneKnowledgebasePage';
import { VitaminCKnowledgebasePage } from '@/components/VitaminCKnowledgebasePage';
import { VitaminDKnowledgebasePage } from '@/components/VitaminDKnowledgebasePage';
import { WheyProteinKnowledgebasePage } from '@/components/WheyProteinKnowledgebasePage';

// NEW IMPORTS (add these)
import { AshwagandhaKnowledgebasePage } from '@/components/pages/supplements/AshwagandhaKnowledgebasePage';
import { BcaaKnowledgebasePage } from '@/components/pages/supplements/BcaaKnowledgebasePage';
import { CalciumKnowledgebasePage } from '@/components/pages/supplements/CalciumKnowledgebasePage';
import { CaseinProteinKnowledgebasePage } from '@/components/pages/supplements/CaseinProteinKnowledgebasePage';
import { CollagenKnowledgebasePage } from '@/components/pages/supplements/CollagenKnowledgebasePage';
import { CreatineKnowledgebasePage } from '@/components/pages/supplements/CreatineKnowledgebasePage';
import { CurcuminKnowledgebasePage } from '@/components/pages/supplements/CurcuminKnowledgebasePage';
import { IronKnowledgebasePage } from '@/components/pages/supplements/IronKnowledgebasePage';
import { MagnesiumKnowledgebasePage } from '@/components/pages/supplements/MagnesiumKnowledgebasePage';
import { MultivitaminKnowledgebasePage } from '@/components/pages/supplements/MultivitaminKnowledgebasePage';
import { Omega3KnowledgebasePage } from '@/components/pages/supplements/Omega3KnowledgebasePage';
import { PrebioticsKnowledgebasePage } from '@/components/pages/supplements/PrebioticsKnowledgebasePage';
import { ProbioticsKnowledgebasePage } from '@/components/pages/supplements/ProbioticsKnowledgebasePage';
import { SulforaphaneKnowledgebasePage } from '@/components/pages/supplements/SulforaphaneKnowledgebasePage';
import { VitaminCKnowledgebasePage } from '@/components/pages/supplements/VitaminCKnowledgebasePage';
import { VitaminDKnowledgebasePage } from '@/components/pages/supplements/VitaminDKnowledgebasePage';
import { WheyProteinKnowledgebasePage } from '@/components/pages/supplements/WheyProteinKnowledgebasePage';
```

**Step 9.1b: Update Comparison Imports**

**Find:**
```typescript
import {
  AshwagandhaComparison,
  CalciumComparison,
  // ... etc
} from '@/components/ProductComparisonWrapper';
```

**Replace with:**
```typescript
import {
  AshwagandhaComparison,
  BCAAsComparison,
  CalciumComparison,
  CaseinProteinComparison,
  CollagenComparison,
  CreatineComparison,
  CurcuminComparison,
  IronComparison,
  MagnesiumComparison,
  MultivitaminComparison,
  Omega3Comparison,
  PrebioticsComparison,
  ProbioticsComparison,
  SulforaphaneComparison,
  VitaminCComparison,
  VitaminDComparison,
  WheyProteinComparison,
  ZincComparison
} from '@/components/pages/comparisons';
```

**Note:** Import path changed from single file to directory (uses index.ts).

### Step 9.2: Update app/glossary/[term]/page.tsx

**File:** `app/glossary/[term]/page.tsx`

**No changes needed** - glossary pages use dynamic imports via getRouteByPath, which reads from routes.config.ts (already updated in Phase 8).

### Step 9.3: Update app/[slug]/product/[productId]/page.tsx

**File:** `app/[slug]/product/[productId]/page.tsx`

**Check for any direct component imports** - likely uses app/components/ which we haven't moved.

```bash
# Search for imports
grep "import.*from '@/components/" app/[slug]/product/[productId]/page.tsx
```

If any imports found, update them. Most likely this file only imports from `app/components/` which is fine.

### Step 9.4: Verify Dynamic Routes

```bash
# Check for old import paths
grep -r "from '@/components/[A-Z].*KnowledgebasePage'" app/
# Should find updated paths only

# TypeScript check
npx tsc --noEmit app/[slug]/page.tsx
# Should show no errors
```

---

## Phase 10: Update Internal Imports

**Time:** 30 minutes

### Step 10.1: Update app/components/ Files

**Files to check:**
- `app/components/HeaderClient.tsx`
- `app/components/ProductDetailClient.tsx`
- `app/components/PageViewTracker.tsx`

**Search for imports:**
```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Check all imports in app/components
grep -n "from '@/components/" app/components/*.tsx
```

**Common updates needed:**
- `@/components/Footer` → `@/components/shared/layout/Footer`
- `@/components/Header` → `@/components/shared/layout/Header`
- `@/components/TrackedLink` → `@/components/shared/ui-extensions/TrackedLink`
- `@/components/SearchResults` → `@/components/shared/content/SearchResults`

### Step 10.2: Update app/ Page Files

**Check static page imports:**
```bash
# Check about page
grep "import" app/about/page.tsx

# Check contact page
grep "import" app/contact/page.tsx

# Check all app/ pages
find app -name "page.tsx" -exec grep -l "from '@/components/" {} \;
```

**Update pattern:**
- `@/components/AboutPage` → `@/components/pages/static/AboutPage`
- `@/components/ContactPage` → `@/components/pages/static/ContactPage`
- etc.

### Step 10.3: Update Root Layout

**File:** `app/layout.tsx`

**Check imports:**
```bash
grep "from '@/components/" app/layout.tsx
```

**Common updates:**
- `@/components/AnalyticsProvider` → `@/components/providers/AnalyticsProvider`
- `@/components/Header` → `@/components/shared/layout/Header`
- `@/components/Footer` → `@/components/shared/layout/Footer`

### Step 10.4: Update Remaining Components

**Search all remaining files:**
```bash
# Find all .tsx files that might need updates
find src/components -name "*.tsx" -exec grep -l "from './[A-Z]" {} \;

# Find all absolute imports that might be outdated
find src/components -name "*.tsx" -exec grep -l "from '@/components/[A-Z]" {} \;
```

**For each file found, update imports based on new structure.**

### Step 10.5: Global Import Path Update

**Use VSCode Find and Replace Across All Files:**

**Pattern 1: Footer**
- **Find:** `from '@/components/Footer'`
- **Replace:** `from '@/components/shared/layout/Footer'`
- **Files:** `**/*.{ts,tsx}`

**Pattern 2: Header**
- **Find:** `from '@/components/Header'`
- **Replace:** `from '@/components/shared/layout/Header'`
- **Files:** `**/*.{ts,tsx}`

**Pattern 3: TrackedLink**
- **Find:** `from '@/components/TrackedLink'`
- **Replace:** `from '@/components/shared/ui-extensions/TrackedLink'`
- **Files:** `**/*.{ts,tsx}`

**Pattern 4: AffiliateTooltip**
- **Find:** `from '@/components/AffiliateTooltip'`
- **Replace:** `from '@/components/shared/ui-extensions/AffiliateTooltip'`
- **Files:** `**/*.{ts,tsx}`

**Pattern 5: SearchResults**
- **Find:** `from '@/components/SearchResults'`
- **Replace:** `from '@/components/shared/content/SearchResults'`
- **Files:** `**/*.{ts,tsx}`

**Continue for all moved components.**

---

## Phase 11: Testing & Validation

**Time:** 45 minutes

### Step 11.1: TypeScript Validation

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Full TypeScript check
npx tsc --noEmit

# Should output: 0 errors
```

**If errors found:**
1. Read error message carefully
2. Identify missing import path
3. Update based on new structure
4. Re-run `npx tsc --noEmit`

### Step 11.2: Build Test

```bash
# Clean previous build
rm -rf .next

# Run production build
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Static pages: 1,936
```

**If build fails:**
1. Read error message
2. Common issues:
   - Missing export in comparison index.ts
   - Import path typo
   - Circular dependency
3. Fix and rebuild

### Step 11.3: Dev Server Test

```bash
# Start dev server
npm run dev

# Server should start on port 3000 or 3001
```

**Open browser and test:**

1. **Homepage** → http://localhost:3000
   - ✅ Should load
   - ✅ Hero image visible
   - ✅ Navigation works

2. **Supplement Page** → http://localhost:3000/ashwagandha
   - ✅ Page loads
   - ✅ Benefits section shows
   - ✅ Research section shows
   - ✅ Comparison widget works

3. **Comparison Page** → http://localhost:3000/ashwagandha-comparison
   - ✅ Price table loads
   - ✅ Product cards show
   - ✅ Filters work

4. **Glossary Term** → http://localhost:3000/glossary/bioavailability
   - ✅ Page loads
   - ✅ Definition shows
   - ✅ Related terms link

5. **Product Detail** → http://localhost:3000/ashwagandha/product/[any-id]
   - ✅ Page loads
   - ✅ Product info shows
   - ✅ Retailer buttons work

6. **Static Pages**
   - http://localhost:3000/about → ✅
   - http://localhost:3000/contact → ✅
   - http://localhost:3000/methodology → ✅

### Step 11.4: Search Functionality Test

1. Open any page
2. Click search icon (top right)
3. Type "ashwa"
4. ✅ Should show results
5. Click a result
6. ✅ Should navigate

**Test all 3 search contexts:**
- Header search
- Hero search (homepage)
- Comparison page search

### Step 11.5: Navigation Test

1. Click "Supplements" dropdown
2. ✅ Should show all 17 supplements
3. Click one
4. ✅ Should navigate correctly
5. Test subcategory grouping
6. ✅ Vitamins, Minerals, etc. should group correctly

### Step 11.6: Analytics Test

**Open browser DevTools → Console:**
```javascript
// Check dataLayer exists
window.dataLayer

// Should show array with events

// Navigate to supplement page
// Check pageview event fired
window.dataLayer.filter(e => e.event === 'pageview')

// Should show recent pageview
```

### Step 11.7: Visual Regression Check

**Compare pages before and after:**
1. Take screenshots of key pages (or rely on memory)
2. Compare styling, layout, images
3. ✅ Everything should look identical

**Key pages to check:**
- Homepage
- Any supplement page
- Any comparison page
- Any glossary page
- About page

### Step 11.8: Mobile Responsive Test

1. Open DevTools
2. Toggle device toolbar (Cmd+Shift+M)
3. Test on iPhone 12 Pro size
4. ✅ Navigation works
5. ✅ Search works
6. ✅ Content readable
7. Test on iPad size
8. ✅ Layout adapts

### Step 11.9: Error Boundary Test

```bash
# Simulate error by breaking a page temporarily
# Add invalid code to a component
# Visit page
# ✅ Should show error boundary UI, not crash
# ✅ Analytics error event should fire
# Revert change
```

### Step 11.10: 404 Page Test

1. Visit non-existent URL: http://localhost:3000/does-not-exist
2. ✅ Should show 404 page
3. ✅ Analytics 404 event should fire

---

## Phase 12: Deployment

**Time:** 15 minutes

### Step 12.1: Final Checks

```bash
# Ensure all files staged
git status

# Check for untracked files
git ls-files --others --exclude-standard

# Should see new directory structure
```

### Step 12.2: Commit Changes

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Stage all changes
git add .

# Commit with detailed message
git commit -m "Reorganize content directory structure

BREAKING CHANGES:
- Moved 17 supplement pages to src/components/pages/supplements/
- Split 17 comparison components into separate files in src/components/pages/comparisons/
- Moved 3 templates to src/components/templates/
- Moved 12 static pages to src/components/pages/static/
- Moved glossary to src/components/pages/glossary/
- Reorganized shared components into src/components/shared/
- Moved knowledgebase sections to src/components/sections/knowledgebase/
- Updated all import paths across ~50 files
- Updated routes.config.ts componentPath values

TESTING:
- ✅ All 1,936 pages build successfully
- ✅ 0 TypeScript errors
- ✅ Dev server runs without errors
- ✅ All navigation works
- ✅ Search functionality works
- ✅ Analytics tracking confirmed
- ✅ Mobile responsive verified

FILES CHANGED: ~80
DIRECTORIES CREATED: 10
IMPORTS UPDATED: ~150
BUILD TIME: Similar (~2-3 min)
"
```

### Step 12.3: Push to Remote

```bash
# Push branch to remote
git push origin content-reorganization-nov25
```

### Step 12.4: Create Pull Request

**On GitHub:**
1. Go to repository
2. Click "Compare & pull request"
3. Title: "Content Directory Reorganization (Nov 25, 2025)"
4. Description:
   ```markdown
   ## Summary
   Reorganizes content directory structure for improved maintainability and scalability.
   
   ## Changes
   - ✅ Moved 17 supplement pages to pages/supplements/
   - ✅ Split 17 comparison components into separate files
   - ✅ Created templates/ directory for templates
   - ✅ Organized static pages in pages/static/
   - ✅ Reorganized shared components into shared/ subdirectories
   - ✅ Updated all import paths (150+ updates)
   - ✅ Updated routes.config.ts paths
   
   ## Testing
   - ✅ Build succeeds (1,936 pages)
   - ✅ 0 TypeScript errors
   - ✅ All pages load correctly
   - ✅ Navigation works
   - ✅ Search works
   - ✅ Analytics confirmed
   
   ## Risk Assessment
   - **Risk Level:** Medium
   - **Reversible:** Yes (via git revert)
   - **Breaking Changes:** Import paths (internal only)
   
   ## Deployment Plan
   1. Merge to main
   2. Auto-deploy to Vercel preview
   3. Test preview deployment
   4. Promote to production
   ```
5. Create pull request

### Step 12.5: Deploy Preview (Vercel Automatic)

**Vercel will automatically:**
1. Detect push to branch
2. Build preview deployment
3. Post preview URL in PR comments

**Test preview URL:**
```
https://supplme-affiliate-launch-v03-[branch-name]-[hash].vercel.app
```

**Test thoroughly on preview:**
- Visit 10-15 random pages
- Test search
- Test navigation
- Check analytics (DevTools)
- Test on mobile device

### Step 12.6: Merge to Main

**After preview testing passes:**
1. Click "Merge pull request"
2. Confirm merge
3. Delete branch (optional)

**Vercel will automatically:**
1. Detect push to main
2. Build production deployment
3. Deploy to production URL

### Step 12.7: Monitor Production

**Immediately after deployment:**
```bash
# Check production site
curl -I https://www.suppl.me

# Should return 200 OK

# Visit production site in browser
open https://www.suppl.me
```

**Monitor for 15 minutes:**
- ✅ Homepage loads
- ✅ Random supplement pages work
- ✅ Analytics events firing
- ✅ No error spikes in Vercel logs

**Check Vercel Dashboard:**
1. Go to vercel.com/dashboard
2. Select project
3. Check "Analytics" tab
4. ✅ No error spikes
5. ✅ Response times normal

---

## Rollback Plan

**If critical issue found after deployment:**

### Option 1: Quick Revert (5 minutes)

```bash
# On main branch
git revert HEAD

# Push revert commit
git push origin main

# Vercel auto-deploys reverted code
```

### Option 2: Rollback on Vercel (2 minutes)

1. Go to Vercel Dashboard
2. Select project
3. Click "Deployments"
4. Find last working deployment (before reorganization)
5. Click "..." → "Promote to Production"
6. Confirm

**Previous deployment instantly restored.**

### Option 3: Force Push Previous Commit (5 minutes)

```bash
# Find last good commit
git log --oneline

# Force reset to that commit
git reset --hard [commit-hash]

# Force push
git push --force origin main

# Vercel redeploys old code
```

---

## Troubleshooting Guide

### Issue 1: "Module not found" Error

**Symptom:** Build fails with "Module not found: Can't resolve '@/components/...'"

**Solution:**
1. Find the file causing error (shown in build log)
2. Check import statement
3. Verify file exists at new path
4. Update import to match new structure
5. Rebuild

### Issue 2: "Cannot find name" TypeScript Error

**Symptom:** TypeScript error "Cannot find name 'ComponentName'"

**Solution:**
1. Missing export in index.ts
2. Add export to `src/components/pages/comparisons/index.ts`
3. Rebuild

### Issue 3: Circular Dependency Warning

**Symptom:** "Circular dependency detected"

**Solution:**
1. Identify components causing cycle
2. Extract shared types to separate file
3. Import types only, not components
4. Use `import type { ... }` syntax

### Issue 4: Page Returns 404 in Production

**Symptom:** Page works locally but 404 in production

**Solution:**
1. Check routes.config.ts has correct path
2. Verify component exports correctly
3. Check COMPONENT_MAP in dynamic route
4. Rebuild and redeploy

### Issue 5: Styling Broken After Reorganization

**Symptom:** Components look different

**Solution:**
1. Check CSS imports still work
2. Verify Tailwind classes unchanged
3. Check CSS variable imports
4. Inspect browser DevTools for missing styles

### Issue 6: Analytics Not Working

**Symptom:** No events in dataLayer

**Solution:**
1. Check AnalyticsProvider import updated
2. Verify 'use client' directive present
3. Check GTM script loads
4. Test in incognito mode (no ad blockers)

---

## Post-Deployment Checklist

### Immediate (0-1 hour after deploy)

- [ ] Homepage loads successfully
- [ ] 5 random supplement pages tested
- [ ] 3 random glossary pages tested
- [ ] 2 comparison pages tested
- [ ] Search functionality works
- [ ] Navigation dropdown works
- [ ] Analytics events firing (check dataLayer)
- [ ] Mobile responsive confirmed
- [ ] No error spikes in Vercel logs
- [ ] Response times normal

### Short-Term (1-24 hours after deploy)

- [ ] Monitor Vercel analytics for errors
- [ ] Check Google Search Console for crawl errors
- [ ] Verify sitemap.xml updated correctly
- [ ] Test all static pages (about, contact, etc.)
- [ ] Verify affiliate links still work
- [ ] Check product comparison functionality
- [ ] Test product detail pages

### Long-Term (1-7 days after deploy)

- [ ] Monitor organic traffic levels (shouldn't drop)
- [ ] Check for any 404 errors in analytics
- [ ] Verify no broken internal links
- [ ] Test on various devices and browsers
- [ ] Gather user feedback (if any issues reported)
- [ ] Update documentation if needed

---

## Summary

**Total Time:** 4.5 hours (Option A) or 2.5 hours (Option B)

**Files Moved:** ~50 files
**Imports Updated:** ~150 import statements
**Directories Created:** 10 new directories
**Lines Changed:** ~300 lines

**Benefits Achieved:**
✅ Cleaner root directory
✅ Easier to find components
✅ Better scalability for growth
✅ Improved maintainability
✅ Follows Next.js best practices
✅ No performance impact
✅ All pages still work

**Risks Mitigated:**
✅ Backup created
✅ Feature branch used
✅ Comprehensive testing
✅ Rollback plan ready
✅ Preview deployment tested
✅ Zero downtime

---

## Next Steps After Completion

1. **Update Team Documentation**
   - Update README with new structure
   - Update onboarding docs
   - Update contribution guidelines

2. **Create Component Guide**
   - Document where to add new supplements
   - Document where to add new glossary terms
   - Document where to add new static pages

3. **Consider Future Improvements**
   - Extract data from components (see CODEBASE_AUDIT)
   - Implement dynamic component loading
   - Add automated component generation

4. **Monitor & Iterate**
   - Gather team feedback
   - Adjust structure if pain points emerge
   - Document lessons learned

---

**Implementation Plan Created:** November 25, 2025  
**Status:** Ready for Execution  
**Estimated Success Rate:** 95% (with careful testing)  

**Good luck! 🚀 You've got this!**
