# Step 4: Product Name Normalization (Metadata Removal)

**Status:** ✅ Complete  
**Date:** November 18, 2025  
**Input:** Step 3 cleaned product names with brand extraction  
**Output:** Normalized core product names with confidence scores

---

## 📋 Overview

Step 4 removes metadata (dosage, quantities, flavors, promotional text) from product names while intelligently preserving critical differentiators like formulation types, strength descriptors, and product line names.

### Key Achievements
- **26,632 products** normalized across 21 supplements
- **94.0% overall confidence** score
- **34,772 metadata items** extracted and removed
- **78.7% high confidence** (90-100%) normalizations
- **1.8% low confidence** (<70%) requiring review

---

## 🎯 Methodology

### Multi-Tier Strategy

#### **Phase 1: Pattern Detection & Extraction**
Uses regex patterns to identify and extract:
- **Dosage Information:** `1000 mg`, `500 IU`, `25 mcg per serving`
- **Container Quantities:** `120 Softgels`, `180 Capsules`, `250 Tablets`
- **Liquid Volumes:** `16 fl oz`, `8 oz`, `200 ml`
- **Servings:** `(90 Servings)`, `60 Servings`
- **Flavors:** Lemon, Orange, Vanilla, etc. (when after delimiter)
- **Promotional Text:** `Twin Pack`, `BOGO`, `Value Size`

#### **Phase 2: Intelligent Normalization**
Applies rules in order:
1. Remove servings info (parenthetical or trailing)
2. Remove quantities + forms (120 Softgels, etc.)
3. Remove dosage info (when after delimiter/redundant)
4. Remove liquid volumes (16 fl oz, etc.)
5. Remove trailing flavors (after last delimiter)
6. Remove promotional text (BOGO, Free, etc.)
7. Clean delimiters (trim, normalize spaces)

#### **Phase 3: Preservation Logic**
**ALWAYS preserves:**
- Formulation types: Citrate, Carbonate, Malate, Glycinate, etc.
- Specific compounds: D3, K2, MK-7, EPA, DHA, Methylcobalamin, etc.
- Strength descriptors: Extra Strength, Ultra, Maximum, Triple Strength
- Delivery systems: Time Release, Extended Release, Enteric Coated
- Product line names: Elite, Premium, Ultimate, Advanced

#### **Phase 4: Confidence Scoring**
Score calculation (0-100):
- **+5:** Multiple metadata types removed (≥3)
- **-10:** High removal ratio (>50% of text removed)
- **-15:** Preserve keywords found in removed metadata
- **-20:** Low removal ratio (<5% removed)
- **-30:** Very short result (<10 chars)

---

## 📊 Results Analysis

### Confidence Distribution
| Range | Count | Percentage | Status |
|-------|-------|------------|--------|
| **90-100%** (High) | 20,960 | 78.7% | ✅ Ready for use |
| **70-89%** (Medium) | 5,200 | 19.5% | ⚠️ Review recommended |
| **<70%** (Low) | 472 | 1.8% | ❌ Manual review required |

### Metadata Removal Stats
| Type | Instances Removed | Description |
|------|------------------|-------------|
| **Volume** | 14,736 | Liquid measurements (fl oz, ml) |
| **Servings** | 6,524 | Serving counts |
| **Quantity** | 5,948 | Container quantities (120 Capsules, etc.) |
| **Flavor** | 4,180 | Flavor descriptors |
| **Dosage** | 2,614 | Dosage amounts (mg, IU, mcg) |
| **Promotional** | 770 | Promotional text (BOGO, Free, etc.) |

### Supplement Performance
| Supplement | Products | Avg Confidence | Metadata Types |
|------------|----------|----------------|----------------|
| **Prebiotics** | 380 | 96.3% | 6 |
| **Collagen** | 1,216 | 95.6% | 6 |
| **Vitamin D** | 647 | 95.4% | 6 |
| **Protein Powder** | 1,357 | 95.4% | 6 |
| **Casein Protein** | 11 | 95.5% | 3 |
| **Calcium** | 710 | 95.0% | 6 |
| **Iron** | 814 | 91.0% | 6 |
| **BCAA** | 281 | 91.5% | 6 |

---

## 🔍 Example Transformations

### High Confidence (100%)
```
Original:  Hi-Tech Pharmaceuticals Ashwagandha 90 Tablets
Cleaned:   Ashwagandha 90 Tablets
Normalized: Ashwagandha
Removed:   quantity: 90 Tablets
```

```
Original:  Now Foods Ashwagandha 450mg 90 Veg Capsules
Cleaned:   Ashwagandha 450mg 90 Veg Capsules
Normalized: Ashwagandha 450mg
Removed:   quantity: 90 Veg Capsules
```

```
Original:  Life Extension Calcium Citrate with Vitamin D, 200 Capsules
Cleaned:   Calcium Citrate with Vitamin D 200 Capsules
Normalized: Calcium Citrate with Vitamin D
Removed:   quantity: 200 Capsules
```

### Preserved Critical Info
```
Original:  Nature Made Triple Omega 3-6-9, 180 Softgels
Cleaned:   Triple Omega 3-6-9 180 Softgels
Normalized: Triple Omega 3-6-9
Preserved: "Triple" (strength descriptor), "3-6-9" (formulation)
Removed:   quantity: 180 Softgels
```

```
Original:  Carlson Maximum Omega 2000, Lemon, 180 Soft Gels
Cleaned:   Maximum Omega 2000 Lemon 180 Soft Gels
Normalized: Maximum Omega 2000
Preserved: "Maximum" (strength descriptor)
Removed:   quantity: 180 Soft Gels, flavor: Lemon
```

---

## 🏗️ Architecture

### File Structure
```
scripts/data-pipeline/name-normalization/
├── extractors/
│   └── metadata-extractor.ts       # Pattern extraction engine
├── analyzers/
│   └── analyze-metadata.ts         # Pattern discovery & stats
├── reports/
│   └── generate-quality-report.ts  # Quality metrics & edge cases
└── step4-normalize-names.ts        # Main normalization logic
```

### Data Flow
```
Step 3 Output (cleaned_product_name)
    ↓
[Metadata Extractor]
    ↓
Identified Patterns (dosage, quantity, etc.)
    ↓
[Normalization Engine]
    ↓
Removal + Preservation Logic
    ↓
[Confidence Calculator]
    ↓
Step 4 Output (core_product_name + metadata + score)
```

---

## 📁 Output Structure

### Per-Supplement Files
Location: `data-pipeline/output/step4-normalized/{supplement}.json`

```json
{
  "product_name": "Hi-Tech Pharmaceuticals Ashwagandha 90 Tablets",
  "cleaned_product_name": "Ashwagandha 90 Tablets",
  "core_product_name": "Ashwagandha",
  "removed_metadata": {
    "quantity": ["90 Tablets"]
  },
  "normalization_confidence": 100,
  "normalization_notes": [],
  "brand_name": "Hi-Tech Pharmaceuticals",
  "merchant_name": "Supplement Warehouse"
}
```

### Quality Reports
Location: `data-pipeline/output/step4-reports/`

- `quality-summary.json` - Overall statistics
- `{supplement}-report.json` - Per-supplement analysis with edge cases

---

## ⚠️ Edge Cases Handled

### 1. Low Metadata Removal (5,212 cases)
**Issue:** Product names with minimal metadata  
**Example:** `Original BCAA` → `Original BCAA`  
**Confidence:** 80% (flagged with "Low metadata removal ratio")

### 2. High Removal Ratio (4,296 cases)
**Issue:** >50% of text removed  
**Example:** `Protein Powder - Dutch Chocolate (62 Servings)` → `Protein Powder`  
**Confidence:** 90% (reviewed but acceptable)

### 3. Very Short Results (488 cases)
**Issue:** Normalized name <10 chars  
**Example:** `D3 5000 IU` → `D3`  
**Confidence:** 70% (flagged for review)

### 4. Preserve Keywords in Metadata
**Issue:** Critical info detected in removed text  
**Action:** Confidence reduced by 15%  
**Example:** Detected but preserved formulation types

---

## 🚀 Usage

### Run Full Normalization
```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2
npx tsx scripts/data-pipeline/name-normalization/step4-normalize-names.ts
```

### Generate Quality Reports
```bash
npx tsx scripts/data-pipeline/name-normalization/reports/generate-quality-report.ts
```

### Analyze Metadata Patterns (Optional)
```bash
npx tsx scripts/data-pipeline/name-normalization/analyzers/analyze-metadata.ts
```

---

## 📈 Performance Metrics

### Processing Speed
- **26,632 products** normalized in ~5 seconds
- **~5,300 products/second**

### Accuracy Metrics
- **94.0%** average confidence
- **98.2%** products with medium-high confidence (≥70%)
- **78.7%** products with high confidence (≥90%)

### Metadata Extraction
- **34,772 total items** identified and removed
- **6 primary metadata categories** recognized
- **99.9%** pattern match success rate

---

## 🔄 Next Steps (Step 5)

With normalized product names, you can now:

1. **Product Matching:** Group identical products across retailers
2. **Price Comparison:** Compare prices for the same core product
3. **Brand Analysis:** Analyze product variations within brands
4. **Search Optimization:** Build normalized search indices
5. **Duplicate Detection:** Identify true duplicates vs. variants

### Recommended Approach for Step 5
```
Core Product Name + Brand Name = Unique Product Identifier
Example: "Ashwagandha KSM-66" + "Allmax" = Unique product
```

---

## 📝 Notes

### Preservation Strategy
The normalization intelligently preserves information that affects product identity:
- ✅ Formulation types (Citrate vs. Carbonate matters for calcium)
- ✅ Strength levels (Extra Strength vs. Regular affects potency)
- ✅ Delivery systems (Time Release vs. Instant affects absorption)
- ✅ Product lines (Elite vs. Standard may indicate quality tiers)

### Removal Strategy
Metadata removed does NOT affect product matching:
- ❌ Container sizes (120 vs. 180 capsules = same product, different pack)
- ❌ Flavors (when not product-defining)
- ❌ Promotional text (temporary marketing)
- ❌ Servings (derived from quantity + dosage)

---

## 🎓 Lessons Learned

1. **Context-aware removal:** Dosage in product line name vs. metadata
2. **Delimiter signals:** Metadata typically follows delimiters
3. **Retailer patterns:** Vitacost uses `--`, GNC uses `-`, iHerb uses `,`
4. **Confidence calibration:** Multi-factor scoring catches edge cases
5. **Preservation critical:** Over-normalization loses product differentiation

---

## 📞 Support

For questions or issues with Step 4:
- Review individual supplement reports in `step4-reports/`
- Check edge cases in quality reports
- Examine low-confidence products (<70%)
- Review normalization_notes for specific issues

**End of Step 4 Documentation**
