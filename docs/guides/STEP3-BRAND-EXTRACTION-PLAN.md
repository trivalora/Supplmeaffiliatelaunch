# Step 3: Brand Extraction & Product Name Cleaning - Comprehensive Plan

## Executive Summary

This document outlines a data science approach to extract brand names from supplement product names and clean the product names by removing brand information. The goal is to normalize product data across multiple retailers while preserving essential product information.

## 1. Problem Analysis

### Current State
Product names from different retailers have inconsistent formats:
- **With brand prefix**: "NOW Foods Calcium Citrate 250 Tablets"
- **With brand + newline**: "GNC\nCalcium Citrate 1000mg - 180 Caplets"
- **Brand only at start**: "Xtend Original BCAA"
- **Multi-word brands**: "Country Life Calcium-Magnesium Complex"
- **Generic/store brands**: "Vitacost Calcium Gummies"
- **Complex patterns**: "Nature's Way Calcium Mag & Zinc"

### Objectives
1. **Extract brand names** with high accuracy
2. **Clean product names** by removing brands cleanly
3. **Maintain data integrity** - don't remove essential product info
4. **Provide confidence scores** for validation
5. **Handle edge cases** gracefully

## 2. Brand Extraction Strategy

### 2.1 Multi-Tiered Approach

We'll use a **hybrid approach** combining multiple techniques:

#### Tier 1: Known Brand Dictionary (Highest Confidence)
- Build comprehensive list of **500+ known supplement brands**
- Include brand variations and common misspellings
- Sources:
  - Brands observed in current dataset
  - Major supplement manufacturers (Optimum Nutrition, NOW Foods, etc.)
  - Retailer private labels (GNC, Vitacost, etc.)
  - Niche/boutique brands (Xtend, Mutant, etc.)

#### Tier 2: Pattern Recognition (Medium Confidence)
- **Position-based**: Brands typically appear at START of product name
- **Possessive patterns**: "Nature's Way", "Doctor's Best", "L'il Critters"
- **Corporate suffixes**: "Nutrition", "Labs", "Naturals", "Pharma"
- **Registered symbols**: "®", "™" often follow brand names

#### Tier 3: Statistical Analysis (Lower Confidence)
- **Capitalization patterns**: Brands usually TitleCase or UPPERCASE
- **Frequency analysis**: Words appearing frequently across products
- **Token uniqueness**: Distinctive words unlikely to be generic descriptors

### 2.2 Brand Dictionary Categories

```typescript
interface BrandEntry {
  canonical: string;        // "NOW Foods"
  variations: string[];     // ["NOW", "Now Foods", "NOW FOODS"]
  aliases: string[];        // ["Nature's Way" -> "Natures Way"]
  type: 'major' | 'private' | 'niche' | 'generic';
}
```

**Major Brands** (100+ products):
- NOW Foods, Optimum Nutrition, Nature's Way, Solgar, Jarrow Formulas, etc.

**Private Labels** (retailer-specific):
- GNC Pro Performance, Vitacost, Bodybuilding.com Signature, etc.

**Niche Brands** (specialty/sports):
- Xtend, Mutant, Kaged, RYSE, Ghost, etc.

**Generic Descriptors** (NOT brands):
- "Organic", "Natural", "Premium", "Advanced", "Ultra"

### 2.3 Extraction Algorithm

```
For each product_name:
  1. Normalize (trim, collapse whitespace, remove newlines)
  2. Tokenize by word boundaries
  3. Check against brand dictionary (Tier 1)
     - Try multi-word matches first (e.g., "Nature's Way" before "Nature")
     - Use word boundaries to avoid partial matches
     - Score: 95-100 confidence
  4. If no match, apply pattern recognition (Tier 2)
     - Check first 1-3 tokens for brand patterns
     - Look for possessive, corporate suffixes
     - Score: 70-90 confidence
  5. If still no match, apply statistical heuristics (Tier 3)
     - Capital letters at start
     - Non-generic first word
     - Score: 50-70 confidence
  6. Return {brand, confidence, position}
```

## 3. Product Name Cleaning Strategy

### 3.1 Cleaning Principles

1. **Preserve essential information**:
   - Keep: dosages, forms, flavors, quantities
   - Remove: brand names, trademarked suffixes

2. **Clean removal**:
   - Use word boundaries (regex `\b`)
   - Remove dangling punctuation after removal
   - Normalize spacing

3. **Validation**:
   - Ensure cleaned name isn't empty
   - Verify no critical info was removed
   - Flag suspicious results

### 3.2 Cleaning Algorithm

```
For each product with extracted brand:
  1. Create regex with word boundaries: `\b${escapedBrand}\b`
  2. Remove brand (case-insensitive)
  3. Clean up residual artifacts:
     - Leading/trailing punctuation: `^[-–—:\s]+` and `[-–—:\s]+$`
     - Multiple spaces: replace with single space
     - Newline characters
  4. Trim and validate:
     - Check length > 0
     - Ensure remaining text makes sense
  5. Return {cleaned_name, artifacts_removed}
```

### 3.3 Edge Cases

| Case | Example | Solution |
|------|---------|----------|
| Brand in middle | "Premium NOW Foods Calcium" | Only remove from detected position |
| Compound brands | "Nature's Way Alive!" | Remove both parts if matched |
| Overlapping words | "Calcium Calcium Citrate" | Keep word if it's also product term |
| Short names | "KAL Cal-Mag" | Verify sufficient text remains |
| Possessives | "Doctor's Best CoQ10" | Handle apostrophes correctly |

## 4. Data Structures

### 4.1 Input Schema (Step 2 Output)
```typescript
interface Step2Product {
  product_name: string;
  price_usd: number | null;
  url: string;
  retailer: string;
  search_term: string;
  image_url?: string;
  original_source: string;
  inference_score?: number;
  filter_match: string;
  filter_score: number;
}
```

### 4.2 Output Schema (Step 3)
```typescript
interface Step3Product {
  // Original fields
  product_name: string;
  price_usd: number | null;
  url: string;
  retailer: string;
  search_term: string;
  image_url?: string;
  original_source: string;
  inference_score?: number;
  filter_match: string;
  filter_score: number;
  
  // New fields
  brand_name: string | null;           // Extracted brand
  brand_confidence: number;             // 0-100 confidence score
  brand_extraction_method: string;      // 'dictionary' | 'pattern' | 'heuristic' | 'manual'
  cleaned_product_name: string;         // Product name with brand removed
  cleaning_artifacts: string[];         // What was removed during cleaning
  requires_manual_review: boolean;      // Flag low-confidence extractions
}
```

## 5. Implementation Components

### 5.1 Brand Dictionary Builder
**File**: `scripts/data-pipeline/brand-extraction/build-brand-dictionary.ts`

Purpose: Create and maintain the brand dictionary

Features:
- Extract unique brands from existing data
- Manual curation with validation
- Export as JSON for fast lookup
- Support for updates/additions

### 5.2 Brand Extractor
**File**: `scripts/data-pipeline/brand-extraction/extract-brand.ts`

Purpose: Core brand extraction logic

Key Functions:
```typescript
function extractBrand(productName: string, brandDict: BrandDictionary): BrandResult
function matchKnownBrand(tokens: string[], brandDict): BrandMatch | null
function detectBrandPattern(tokens: string[]): PatternResult | null
function scoreBrandConfidence(match, method, context): number
```

### 5.3 Product Name Cleaner
**File**: `scripts/data-pipeline/brand-extraction/clean-product-name.ts`

Purpose: Remove brand names cleanly

Key Functions:
```typescript
function cleanProductName(name: string, brand: BrandResult): CleanedResult
function removeBrandWithWordBoundaries(name, brand): string
function cleanArtifacts(name: string): string
function validateCleanedName(original, cleaned, brand): ValidationResult
```

### 5.4 Main Step 3 Script
**File**: `scripts/data-pipeline/brand-extraction/step3-extract-brands.ts`

Purpose: Orchestrate the brand extraction pipeline

Workflow:
1. Load brand dictionary
2. Read Step 2 filtered files
3. For each product:
   - Extract brand
   - Clean product name
   - Validate results
   - Add metadata
4. Write to Step 3 output directory
5. Generate quality report

## 6. Quality Assurance

### 6.1 Validation Checks

1. **Brand Extraction Validation**:
   - Confidence score distribution
   - Review low-confidence (<70) extractions
   - Check for common brands missed
   - Validate brand dictionary coverage

2. **Cleaning Validation**:
   - Ensure no empty product names
   - Check for over-cleaning (too short)
   - Verify essential info retained (dosage, form)
   - Flag unusual patterns

3. **Data Integrity**:
   - All original fields preserved
   - No data loss
   - Consistent formatting
   - URL integrity maintained

### 6.2 Quality Metrics

```typescript
interface QualityReport {
  total_products: number;
  brands_extracted: number;
  extraction_confidence_avg: number;
  confidence_distribution: {
    high: number;      // 90-100
    medium: number;    // 70-89
    low: number;       // <70
  };
  requires_review: number;
  empty_cleaned_names: number;
  top_brands: Array<{brand: string, count: number}>;
  cleaning_artifacts_summary: Map<string, number>;
}
```

## 7. Brand Dictionary Compilation

### 7.1 Data Sources

1. **Current Dataset Analysis**:
   - Extract all unique first 1-3 tokens from product names
   - Frequency analysis to identify brands
   - Group by retailer to find private labels

2. **Industry Knowledge**:
   - Top 100 supplement brands (manually curated)
   - Sports nutrition brands
   - Vitamin/mineral specialists
   - Natural/organic brands

3. **Retailer Information**:
   - GNC brands: GNC Pro Performance, GNC milestones, etc.
   - Vitacost brands: Vitacost, Vitacost Synergy, ARO-Vitacost
   - Bodybuilding.com: Bodybuilding.com Signature
   - iHerb: California Gold Nutrition

### 7.2 Initial Brand List (200+ Brands)

**Major Manufacturers**:
NOW Foods, Nature's Way, Solgar, Jarrow Formulas, Garden of Life, Bluebonnet Nutrition, Life Extension, Source Naturals, Thorne, Pure Encapsulations, Solaray, KAL, Country Life, MegaFood, NaturesPlus, Rainbow Light, Nature Made, Nature's Bounty, 21st Century, Swanson, Doctor's Best, Carlson, Best Naturals, Mason Natural, Amazing Nutrition, Nutricost

**Sports Nutrition**:
Optimum Nutrition, MusclePharm, Evlution Nutrition, XTEND, Xtend, Kaged, KAGED, Mutant, GHOST, RYSE, Bucked Up, Pro Supps, ProSupps, ALLMAX, NutraBio, VMI Sports, Snap Supplements, SNAP, Axe & Sledge, Alpha Lion, Core Nutritionals, Gaspari Nutrition, Nutrex Research, MRM, Metabolic Nutrition, Primaforce, Gnarly Nutrition, Klean Athlete, Rule One, Dymatize, BSN, MuscleTech, Universal Nutrition, Animal Pak

**Private Labels**:
GNC, Vitacost, California Gold Nutrition, Bodybuilding.com Signature, Kirkman Labs, The Vitamin Shoppe, ARO-Vitacost

**Natural/Organic**:
Garden of Life, New Chapter, MegaFood, NaturesPlus, Organic, Ancient Nutrition, PlantFusion, Sunwarrior, NATURELO, Trace, Flora, Harmonic Innerprizes

**Specialty**:
Codeage, Zahler, Pure Essence, Eidon, Dynamic Health, Tropical Oasis, Liquid Health, Viactiv, Citracal, Caltrate, BodyBio, Seeking Health, XYMOGEN, Bariatric Advantage, Life Time, LifeTime, Floradix, Zhou, Cybergenics, Force Factor, Reebok, Swolverine, Nutricology, Allergy Research Group, Protocol For Life Balance, Vital Nutrients, Vibrant Health, Super Nutrition, NutriCology

**Kids/Specialty**:
ChildLife, L'il Critters, YumVs, Yum V's, Flintstones, NuBest, Kids Smart, MaryRuth's

## 8. Implementation Steps

### Phase 1: Setup & Dictionary (Week 1)
1. ✅ Analyze current data structure
2. Create initial brand dictionary (500+ brands)
3. Set up output directory structure
4. Define TypeScript interfaces

### Phase 2: Core Logic (Week 1-2)
1. Implement brand extractor with multi-tier logic
2. Implement product name cleaner
3. Add validation logic
4. Create comprehensive unit tests

### Phase 3: Processing (Week 2)
1. Process all Step 2 filtered files
2. Generate quality reports per category
3. Flag low-confidence results
4. Export to Step 3 output directory

### Phase 4: Validation & Refinement (Week 2-3)
1. Manual review of flagged items
2. Refine brand dictionary
3. Adjust confidence thresholds
4. Re-process if needed

## 9. Output Structure

```
data-pipeline/
  output/
    step3-branded/
      bcaa.json
      calcium.json
      [other-supplements].json
    step3-reports/
      quality-summary.json
      brand-frequency.json
      low-confidence-items.json
      cleaning-artifacts.json
```

## 10. Example Transformations

### Example 1: Simple Brand Removal
```
Input:  "NOW Foods Calcium Citrate 250 Tablets"
Brand:  "NOW Foods" (confidence: 100, method: dictionary)
Output: "Calcium Citrate 250 Tablets"
```

### Example 2: Newline Handling
```
Input:  "GNC\nCalcium Citrate 1000mg - 180 Caplets (90 Servings)"
Brand:  "GNC" (confidence: 100, method: dictionary)
Output: "Calcium Citrate 1000mg - 180 Caplets (90 Servings)"
```

### Example 3: Multi-Word Brand
```
Input:  "Nature's Way Calcium Mag & Zinc Mineral Complex"
Brand:  "Nature's Way" (confidence: 100, method: dictionary)
Output: "Calcium Mag & Zinc Mineral Complex"
```

### Example 4: Complex Product Line
```
Input:  "Garden of Life Vitamin Code RAW Calcium"
Brand:  "Garden of Life" (confidence: 100, method: dictionary)
Output: "Vitamin Code RAW Calcium"
Note:   "Vitamin Code RAW" is a product line, kept intact
```

### Example 5: Possessive Pattern
```
Input:  "Nature's Bounty Calcium Plus Vitamin D3"
Brand:  "Nature's Bounty" (confidence: 100, method: dictionary)
Output: "Calcium Plus Vitamin D3"
```

## 11. Edge Cases & Solutions

### 11.1 Ambiguous Cases

**Case**: Brand name overlaps with product descriptor
```
Input:  "Calcium Calcium Citrate"
Issue:  "Calcium" might be brand or descriptor
Solution: Context-aware removal - only remove at expected position
```

**Case**: No clear brand
```
Input:  "Coral Calcium Complex"
Solution: Mark as null brand, use generic descriptor
Confidence: 0
```

**Case**: Multiple brands (co-branding)
```
Input:  "GHOST BCAA - Sour Patch Kids Blue Raspberry"
Solution: Extract primary brand (GHOST), note collaboration
Secondary: "Sour Patch Kids" (flavor/partnership)
```

### 11.2 Retailer-Specific Patterns

**GNC Products**:
- Format: "GNC\n[Product Line]\n[Description]"
- Solution: Handle newlines, preserve product line names

**Bodybuilding.com**:
- Format: "[Brand] [Product] [Brand] [Product]" (duplicated)
- Solution: Remove duplicate brand mentions

**Vitacost**:
- Private label variations: "Vitacost", "Vitacost Synergy", "ARO-Vitacost"
- Solution: Match longest brand variant first

## 12. Confidence Scoring System

### Scoring Matrix

| Method | Base Score | Modifiers |
|--------|-----------|-----------|
| Dictionary match (exact) | 100 | -5 if generic word |
| Dictionary match (variant) | 95 | -10 if ambiguous |
| Pattern: Possessive + suffix | 85 | +5 if in dictionary as similar |
| Pattern: Corporate suffix | 80 | +10 if confirmed by frequency |
| Heuristic: Position + caps | 65 | +15 if repeated across products |
| Statistical only | 50 | +20 if high frequency brand |

### Confidence Thresholds

- **90-100**: Auto-approve, high confidence
- **70-89**: Review sample (10%)
- **50-69**: Review all, flag for verification
- **<50**: Mark as uncertain, manual review required

## 13. Testing Strategy

### 13.1 Unit Tests

Test each function independently:
```typescript
describe('Brand Extraction', () => {
  test('extracts single-word brand', ...)
  test('extracts multi-word brand', ...)
  test('handles possessive brands', ...)
  test('returns null for no brand', ...)
  test('handles newlines', ...)
  test('scores confidence correctly', ...)
})

describe('Product Name Cleaning', () => {
  test('removes brand cleanly', ...)
  test('preserves dosage information', ...)
  test('handles punctuation', ...)
  test('validates output', ...)
})
```

### 13.2 Integration Tests

Test with real data samples:
- Process 100 products from each category
- Verify output schema
- Check confidence distribution
- Validate cleaning quality

### 13.3 Regression Tests

Ensure consistency:
- Same input produces same output
- Version upgrades don't break existing logic
- Brand dictionary updates don't cause regressions

## 14. Performance Considerations

### Optimization Strategies

1. **Brand Dictionary**: Use Trie or HashMap for O(1) lookups
2. **Caching**: Cache regex patterns for repeated brands
3. **Batch Processing**: Process files in parallel where possible
4. **Memory**: Stream large files rather than loading entirely

### Expected Performance

- **Processing speed**: 1000+ products/second
- **Memory**: <500MB for full dataset
- **Accuracy target**: >95% for dictionary brands, >80% overall

## 15. Monitoring & Reporting

### 15.1 Real-Time Monitoring

During processing, log:
- Products processed
- Brands extracted
- Confidence distribution
- Errors/warnings

### 15.2 Post-Processing Reports

Generate comprehensive reports:

**Quality Summary**:
```json
{
  "total_products": 5000,
  "brands_extracted": 4750,
  "avg_confidence": 92.3,
  "high_confidence": 4500,
  "medium_confidence": 200,
  "low_confidence": 50,
  "manual_review_needed": 250
}
```

**Brand Frequency**:
```json
{
  "NOW Foods": 450,
  "Nature's Way": 320,
  "Solgar": 280,
  ...
}
```

**Flagged Items** (for manual review):
- Low confidence (<70)
- Empty cleaned names
- Suspicious patterns

## 16. Manual Review Process

### 16.1 Review Workflow

1. Export low-confidence items to CSV
2. Manual review by category expert
3. Update brand dictionary with corrections
4. Re-process affected products
5. Validate improvements

### 16.2 Continuous Improvement

- Track manual corrections
- Identify patterns in corrections
- Update algorithms based on patterns
- Expand brand dictionary iteratively

## 17. File Structure

```
scripts/data-pipeline/brand-extraction/
  ├── brands/
  │   ├── brand-dictionary.json          # Master brand list
  │   ├── brand-patterns.ts              # Pattern recognition rules
  │   └── build-brand-dictionary.ts      # Dictionary builder
  ├── extractors/
  │   ├── brand-extractor.ts             # Core extraction logic
  │   ├── pattern-matcher.ts             # Pattern recognition
  │   └── confidence-scorer.ts           # Scoring algorithms
  ├── cleaners/
  │   ├── product-name-cleaner.ts        # Cleaning logic
  │   ├── artifact-remover.ts            # Post-cleaning cleanup
  │   └── validator.ts                   # Output validation
  ├── utils/
  │   ├── text-normalizer.ts             # Text preprocessing
  │   ├── word-boundary.ts               # Boundary detection
  │   └── tokenizer.ts                   # Smart tokenization
  ├── step3-extract-brands.ts            # Main entry point
  └── __tests__/
      ├── brand-extractor.test.ts
      ├── product-name-cleaner.test.ts
      └── integration.test.ts
```

## 18. Success Criteria

### Quantitative Metrics
- ✅ 95%+ accuracy on known brands
- ✅ 80%+ overall extraction rate
- ✅ <5% require manual review
- ✅ 0 data loss
- ✅ Process entire dataset in <5 minutes

### Qualitative Metrics
- Clean, readable product names
- Consistent brand formatting
- Useful for user display
- Maintainable codebase
- Well-documented

## 19. Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missing brands in dictionary | Medium | Iterative updates, pattern fallback |
| Over-aggressive cleaning | High | Validation checks, whitelist protection |
| Performance issues | Low | Optimize algorithms, parallel processing |
| Data corruption | High | Preserve originals, extensive testing |
| Edge cases break logic | Medium | Comprehensive test coverage |

## 20. Future Enhancements

### Phase 2 Features (Post-Launch)
1. **ML-based brand detection** using NLP models
2. **Automatic brand discovery** from new products
3. **Brand normalization** (handle misspellings)
4. **Product line extraction** (e.g., "Vitamin Code")
5. **Multi-language support** for international brands
6. **API for real-time extraction** (future product imports)

## 21. Deliverables

### Code Deliverables
- ✅ Brand dictionary (JSON)
- ✅ Brand extraction module
- ✅ Product name cleaning module
- ✅ Main Step 3 script
- ✅ Comprehensive test suite
- ✅ Quality report generator

### Documentation Deliverables
- ✅ This implementation plan
- ✅ API documentation
- ✅ Brand dictionary documentation
- ✅ Testing guide
- ✅ Deployment guide

### Data Deliverables
- ✅ Processed Step 3 files (all categories)
- ✅ Quality reports
- ✅ Manual review queue
- ✅ Brand frequency analysis

## Conclusion

This comprehensive plan provides a robust, scalable approach to brand extraction and product name cleaning. By combining dictionary-based matching, pattern recognition, and statistical analysis, we achieve high accuracy while maintaining flexibility for edge cases. The multi-tiered confidence scoring ensures transparency and enables efficient manual review where needed.

The approach is:
- **Data-driven**: Based on actual product data patterns
- **Scalable**: Handles thousands of products efficiently  
- **Maintainable**: Clear code structure and documentation
- **Extensible**: Easy to add new brands and improve algorithms
- **Quality-focused**: Comprehensive validation and reporting

Next step: **Toggle to Act Mode** to begin implementation.
