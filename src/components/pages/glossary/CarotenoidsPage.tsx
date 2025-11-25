'use client';
import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Sun, Eye, Shield, Carrot, Heart, Sparkles } from 'lucide-react';

export function CarotenoidsPage() {
  return (
    <GlossaryTemplate
      term="Carotenoids"
      definition="A family of fat-soluble pigments produced by plants and certain microorganisms that provide yellow, orange, and red colors to fruits and vegetables. Carotenoids function as antioxidants and some serve as precursors to vitamin A (provitamin A carotenoids)."
      detailedExplanation="Carotenoids are tetraterpenoid compounds containing 40 carbon atoms with an extensive conjugated double-bond system responsible for their characteristic colors and antioxidant properties. Over 600 carotenoids exist in nature, but only about 40-50 are consumed regularly in the human diet, and approximately 20 are found in human blood and tissues.

**Classification of carotenoids:**

Carotenoids are divided into two main classes based on their chemical structure:

**1. Carotenes (hydrocarbons with no oxygen):**
- **Alpha-carotene:** Found in carrots, pumpkin, winter squash
- **Beta-carotene:** Most abundant provitamin A carotenoid; found in carrots, sweet potatoes, spinach, kale, cantaloupe
- **Lycopene:** Red pigment with no vitamin A activity; found in tomatoes, watermelon, pink grapefruit, papaya
- **These contain only carbon and hydrogen atoms**

**2. Xanthophylls (oxygenated carotenoids):**
- **Lutein:** Found in dark leafy greens (spinach, kale), corn, egg yolks
- **Zeaxanthin:** Found in corn, orange peppers, egg yolks, goji berries
- **Beta-cryptoxanthin:** Provitamin A carotenoid found in oranges, tangerines, red peppers, pumpkin
- **Astaxanthin:** Found in salmon, shrimp, krill, algae (not converted to vitamin A)
- **These contain oxygen in addition to carbon and hydrogen**

**Provitamin A versus non-provitamin A carotenoids:**

**Provitamin A carotenoids** can be converted to retinol (vitamin A) in the body:
- Beta-carotene (most efficient conversion)
- Alpha-carotene (half the vitamin A activity of beta-carotene)
- Beta-cryptoxanthin (half the vitamin A activity of beta-carotene)

The conversion efficiency varies significantly based on genetic factors (BCO1 enzyme polymorphisms), nutritional status, dietary fat intake, and individual variation. Approximately 12 mcg of dietary beta-carotene equals 1 mcg of retinol (1 RAE - Retinol Activity Equivalent).

**Non-provitamin A carotenoids** cannot be converted to vitamin A but provide other health benefits:
- Lycopene
- Lutein
- Zeaxanthin
- Astaxanthin

**Mechanisms of action:**

**Antioxidant activity:** Carotenoids are exceptionally effective at quenching singlet oxygen (a reactive oxygen species) and scavenging peroxyl radicals, making them powerful antioxidants. The long chain of conjugated double bonds enables electron delocalization, stabilizing free radicals without becoming pro-oxidant themselves (unlike some antioxidants at high concentrations).

**Light filtering:** Lutein and zeaxanthin selectively accumulate in the macula of the retina where they filter blue light (wavelengths 400-500 nm), protecting photoreceptors from phototoxic damage and oxidative stress. These are the only carotenoids found in the retina and are collectively called 'macular pigment.'

**Cell signaling:** Carotenoids and their metabolites modulate gene expression through interactions with nuclear receptors (RAR, RXR), influence gap junction communication, and affect cell differentiation and proliferation.

**Immune modulation:** Carotenoids enhance immune function through various mechanisms including increased lymphocyte proliferation, natural killer cell activity, and cytokine production.

**Anti-inflammatory effects:** Some carotenoids reduce inflammatory markers by inhibiting NF-κB signaling and reducing pro-inflammatory cytokine production.

**Bioavailability and absorption:**

Carotenoid absorption is highly variable (5-65% depending on multiple factors) and requires dietary fat for optimal uptake since they are lipophilic. Factors affecting bioavailability:

**Food matrix:** 
- Raw versus cooked (cooking generally increases bioavailability by breaking down cell walls)
- Whole foods versus juiced (mechanical disruption increases availability)
- Particle size (smaller = better absorption)

**Dietary fat:** At least 3-5g of fat per meal significantly enhances carotenoid absorption. Fat-soluble vitamins compete for absorption, so balanced intake is important.

**Individual variation:**
- Genetic polymorphisms (especially in BCO1, SCARB1 genes)
- Gut health and bile acid production
- Existing carotenoid status (lower stores = more efficient absorption)

**Processing:** Heating, chopping, and adding small amounts of oil dramatically improves lycopene absorption from tomatoes. Conversely, some processing can degrade carotenoids.

**Health benefits from research:**

**Eye health:** 
- **Age-related macular degeneration (AMD):** The AREDS2 trial showed lutein (10 mg) + zeaxanthin (2 mg) reduced AMD progression by 10-25% in high-risk individuals
- **Cataracts:** Higher lutein and zeaxanthin intake associated with 20-30% reduced cataract risk
- **Visual performance:** Macular pigment density correlates with improved visual acuity, contrast sensitivity, and glare recovery

**Cardiovascular health:**
- Higher dietary carotenoid intake associated with 10-30% reduced cardiovascular disease risk in observational studies
- Lycopene shows particular promise for blood pressure reduction (systolic BP reduced by 4-5 mmHg with high intake/supplementation)
- Carotenoids reduce LDL oxidation, a critical step in atherosclerosis

**Cancer prevention:**
- **Lycopene:** Meta-analyses show 10-20% reduced prostate cancer risk with high dietary lycopene intake (primarily from cooked tomato products)
- **Beta-carotene:** Observational studies suggest protective associations, but supplementation trials in smokers showed increased lung cancer risk (see safety section)
- Evidence is strongest for dietary sources rather than supplements

**Skin health:**
- Carotenoids accumulate in skin, providing photoprotection against UV damage
- Beta-carotene supplementation (25-50 mg/day) reduces sunburn severity by approximately 20-40%
- Improves skin appearance (tone, elasticity)

**Cognitive function:**
- Higher lutein levels associated with better cognitive performance and reduced age-related cognitive decline
- Some evidence for protective effects against dementia

**Dietary intake and sources:**

No official RDA for non-provitamin A carotenoids, though observational studies suggest benefits at:
- Lutein + zeaxanthin: 6-10 mg/day combined
- Lycopene: 5-10 mg/day
- Beta-carotene: 3-6 mg/day from food sources

**Rich dietary sources:**
- **Beta-carotene:** Sweet potato (1 medium = 15 mg), carrot (1 medium = 5-10 mg), spinach (1 cup cooked = 11 mg)
- **Lycopene:** Tomato sauce (1/2 cup = 20-30 mg), watermelon (1 cup = 6-8 mg), pink grapefruit (1/2 = 2-3 mg)
- **Lutein:** Kale (1 cup cooked = 23 mg), spinach (1 cup cooked = 20 mg), egg yolks (1 yolk = 0.2-0.3 mg)
- **Zeaxanthin:** Corn (1/2 cup = 0.5 mg), orange peppers (1 medium = 1-2 mg), egg yolks (1 yolk = 0.2 mg)

**Supplement considerations:**

Carotenoid supplements are available as single compounds or mixtures. Important considerations:

- **Natural versus synthetic:** Natural beta-carotene is a mixture of cis- and trans-isomers; synthetic is primarily all-trans. Natural may be preferable.
- **Dosing:** Supplement doses often exceed dietary levels (10-25 mg beta-carotene, 10-20 mg lutein, 15-30 mg lycopene)
- **Third-party testing:** Verify content and purity through USP, ConsumerLab, or NSF certification
- **Taken with fat:** Consume with meals containing fat for optimal absorption

**Safety and cautions:**

**Carotenodermia:** Very high carotenoid intake (especially beta-carotene) causes harmless yellowing/oranging of skin, particularly palms and soles. Resolves when intake is reduced. Not harmful, but cosmetically noticeable.

**Beta-carotene and smoking:** Two major trials (ATBC, CARET) found high-dose beta-carotene supplementation (20-30 mg/day) increased lung cancer risk by 18-28% in smokers and asbestos-exposed individuals. Mechanism unclear but may involve pro-oxidant effects at high doses in oxidative environments. **Current and former heavy smokers should avoid high-dose beta-carotene supplements.**

**Food sources are safe:** No adverse effects from dietary carotenoid intake, regardless of amount.

**Drug interactions:** Carotenoids can interact with orlistat (fat absorption blocker) and cholestyramine (bile acid sequestrant), reducing absorption. Mineral oil laxatives also impair absorption."
      examples={[
        "The AREDS2 trial found that 10 mg lutein + 2 mg zeaxanthin daily reduced progression to advanced age-related macular degeneration by 10-25% over 5 years",
        "One medium sweet potato provides approximately 15 mg beta-carotene (about 1,250 mcg RAE of vitamin A), exceeding the daily adequate intake",
        "Meta-analyses show lycopene intake of 9-21 mg/day (from tomato products) reduces systolic blood pressure by 4-5 mmHg and is associated with 10-20% reduced prostate cancer risk",
        "Cooking tomatoes with a small amount of oil increases lycopene bioavailability by 2-4 fold compared to raw tomatoes due to cell wall breakdown and lipid presence"
      ]}
      relatedTerms={[
        { term: "Beta-Carotene", key: "betacarotene" },
        { term: "Lycopene", key: "lycopene" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Free Radicals", key: "freeradicals" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
      quickFacts={[
        { 
          icon: Sun, 
          title: "Plant Pigments", 
          description: "Over 600 carotenoids exist in nature, providing yellow, orange, and red colors to fruits and vegetables. Only about 40-50 are consumed regularly, with ~20 found in human blood and tissues." 
        },
        { 
          icon: Eye, 
          title: "Eye Health", 
          description: "Lutein and zeaxanthin selectively accumulate in the retina as 'macular pigment,' filtering blue light and protecting against age-related macular degeneration. AREDS2 trial showed 10-25% reduced AMD progression." 
        },
        { 
          icon: Shield, 
          title: "Powerful Antioxidants", 
          description: "Carotenoids are exceptionally effective at quenching singlet oxygen and scavenging free radicals through their long chain of conjugated double bonds without becoming pro-oxidant." 
        },
        { 
          icon: Carrot, 
          title: "Provitamin A Activity", 
          description: "Beta-carotene, alpha-carotene, and beta-cryptoxanthin can be converted to vitamin A. About 12 mcg dietary beta-carotene equals 1 mcg retinol, though conversion efficiency varies significantly." 
        },
        { 
          icon: Heart, 
          title: "Cardiovascular Protection", 
          description: "Higher dietary carotenoid intake associated with 10-30% reduced cardiovascular disease risk. Lycopene particularly benefits blood pressure, reducing systolic BP by 4-5 mmHg at high intake levels." 
        },
        { 
          icon: Sparkles, 
          title: "Fat Required for Absorption", 
          description: "Carotenoids are fat-soluble and require at least 3-5g dietary fat per meal for optimal absorption. Cooking and processing generally increase bioavailability by breaking down plant cell walls." 
        }
      ]}
      currentPage="carotenoids"
    />
  );
}
