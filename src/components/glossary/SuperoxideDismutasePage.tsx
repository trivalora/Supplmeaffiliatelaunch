import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Shield, Zap, Activity, Pill, Heart, Brain } from 'lucide-react';

interface SuperoxideDismutasePageProps {
  onNavigate: (page: string) => void;
}

export const SuperoxideDismutasePage: React.FC<SuperoxideDismutasePageProps> = ({ onNavigate }) => {
  return (
    <GlossaryTemplate
      term="Superoxide Dismutase"
      abbreviation="SOD"
      pronunciation="soo-per-OK-side dis-MYOO-tase"
      onNavigate={onNavigate}
      currentPage="superoxidedismutase"
      definition="A family of metalloenzymes that catalyzes the dismutation of superoxide radicals (O₂•⁻) into oxygen (O₂) and hydrogen peroxide (H₂O₂), representing the first line of enzymatic defense against oxidative stress in cells."
      detailedExplanation="Superoxide dismutase (SOD) is one of the most important antioxidant enzymes in living organisms, present in nearly all aerobic organisms and most subcellular compartments. SOD enzymes protect cells from the damaging effects of superoxide radicals, which are continuously produced as byproducts of cellular metabolism, particularly during mitochondrial respiration.

**The catalytic reaction:**

SOD catalyzes the conversion of superoxide radicals through a two-step process:

1. M(n+1)⁺-SOD + O₂•⁻ → Mⁿ⁺-SOD + O₂
2. Mⁿ⁺-SOD + O₂•⁻ + 2H⁺ → M(n+1)⁺-SOD + H₂O₂

Where M represents the metal cofactor (copper, zinc, or manganese). The net result is:

2O₂•⁻ + 2H⁺ → H₂O₂ + O₂

This reaction is called 'dismutation' because the same substrate (superoxide) is both oxidized (to O₂) and reduced (to H₂O₂). SOD is extraordinarily efficient, with catalytic rates approaching diffusion-limited speeds (10⁹ M⁻¹s⁻¹), meaning nearly every encounter between SOD and superoxide results in catalysis.

**Types of SOD in humans:**

**1. SOD1 (Cu/Zn-SOD):**
- **Location:** Cytoplasm (cytosol), nucleus, lysosomes, peroxisomes, and mitochondrial intermembrane space
- **Structure:** Homodimer of 32 kDa containing copper and zinc ions
- **Function:** Primary SOD in cytoplasm; accounts for ~80% of total SOD activity in most cells
- **Genetic defects:** Mutations in SOD1 gene cause familial amyotrophic lateral sclerosis (ALS, Lou Gehrig's disease)
- **Expression:** Constitutively expressed; levels increase with oxidative stress

**2. SOD2 (Mn-SOD):**
- **Location:** Mitochondrial matrix
- **Structure:** Homotetramer of 96 kDa containing manganese ions
- **Function:** Critical for protecting mitochondria from superoxide generated during electron transport chain activity
- **Importance:** SOD2 knockout mice die within days of birth due to severe oxidative damage, demonstrating its essential role
- **Regulation:** Induced by oxidative stress, cytokines, and transcription factors (NF-κB, Nrf2)
- **Clinical significance:** Reduced SOD2 activity linked to various age-related diseases

**3. SOD3 (EC-SOD, extracellular SOD):**
- **Location:** Extracellular space (tissues and body fluids)
- **Structure:** Homotetramer of 135 kDa containing copper and zinc ions
- **Function:** Protects against extracellular oxidative stress, particularly in blood vessels and lungs
- **Distribution:** Highly expressed in blood vessels, lungs, kidneys, and uterus
- **Binding:** Contains heparin-binding domain allowing it to bind to cell surfaces and extracellular matrix
- **Cardiovascular role:** Protects endothelium and preserves nitric oxide bioavailability

**Physiological importance:**

**Superoxide as a reactive oxygen species:**

Superoxide radicals are continuously generated in cells through:
- **Mitochondrial electron transport chain:** 1-2% of oxygen consumed forms superoxide
- **NADPH oxidases:** Intentional superoxide production for immune function and cell signaling
- **Xanthine oxidase:** Produces superoxide during purine metabolism
- **Cytochrome P450 enzymes:** Generate superoxide during drug and toxin metabolism
- **Auto-oxidation reactions:** Various biomolecules spontaneously react with oxygen

While superoxide itself is moderately reactive, it can:
- Damage iron-sulfur clusters in enzymes
- React with nitric oxide (NO) to form peroxynitrite (ONOO⁻), a highly reactive oxidant
- Initiate lipid peroxidation chain reactions
- Contribute to DNA damage

**SOD as part of the antioxidant defense system:**

SOD works in concert with other antioxidant enzymes:
- **SOD:** Converts superoxide → hydrogen peroxide
- **Catalase:** Converts hydrogen peroxide → water + oxygen (primarily in peroxisomes)
- **Glutathione peroxidase:** Converts hydrogen peroxide → water (using glutathione as electron donor)

This enzymatic cascade neutralizes superoxide and its downstream products, preventing oxidative damage.

**Clinical significance and disease associations:**

**Reduced SOD activity or expression is associated with:**
- **Cardiovascular disease:** Endothelial dysfunction, atherosclerosis, hypertension
- **Neurodegenerative diseases:** ALS (SOD1 mutations), Parkinson's disease, Alzheimer's disease
- **Diabetes:** Reduced SOD2 activity contributes to diabetic complications
- **Cancer:** Altered SOD expression in various cancers; complex role as both tumor suppressor and promoter
- **Aging:** Progressive decline in SOD activity with age
- **Inflammatory conditions:** Rheumatoid arthritis, inflammatory bowel disease

**SOD polymorphisms and genetics:**

Genetic variations in SOD genes affect enzyme activity and disease risk:
- **SOD2 Ala16Val (rs4880):** Common polymorphism affecting mitochondrial targeting; associated with various disease risks
- **SOD1 mutations:** Over 100 mutations cause familial ALS through toxic gain-of-function
- **SOD3 Arg213Gly:** Affects heparin binding and vascular SOD availability

**Factors affecting SOD activity:**

**Upregulation:**
- Exercise (particularly SOD2 in muscles)
- Phytochemicals activating Nrf2 (sulforaphane, curcumin, resveratrol, EGCG)
- Oxidative stress (adaptive response)
- Caloric restriction

**Downregulation/impairment:**
- Aging
- Chronic inflammation
- Hyperglycemia (glycation of SOD reduces activity)
- Nutritional deficiencies (copper, zinc, manganese)
- Chronic alcohol consumption
- Smoking

**Nutritional support for SOD:**

**Cofactor minerals:**
- **Copper:** Required for SOD1 and SOD3 (RDA: 900 mcg/day)
- **Zinc:** Required for SOD1 and SOD3 (RDA: 8-11 mg/day)
- **Manganese:** Required for SOD2 (AI: 1.8-2.3 mg/day)

Deficiencies in these minerals can reduce SOD activity, though severe deficiency is rare in developed countries.

**Dietary compounds that upregulate SOD through Nrf2 activation:**
- **Sulforaphane** (broccoli sprouts, cruciferous vegetables)
- **Curcumin** (turmeric)
- **EGCG** (green tea)
- **Resveratrol** (grapes, red wine)
- **Quercetin** (onions, apples, berries)
- **Melatonin**

These compounds don't directly provide SOD but enhance endogenous SOD gene expression.

**SOD supplementation considerations:**

**Oral SOD supplements:**
- Poor bioavailability: SOD is a protein enzyme that is digested in the gastrointestinal tract
- Most oral SOD supplements are ineffective at raising systemic SOD levels
- **Exception:** Some formulations use enteric coating or combine SOD with gliadin (wheat protein) to improve absorption (GliSODin®)

**SOD mimetics:**
- Synthetic compounds that mimic SOD catalytic activity
- Include manganese-based complexes and other metal catalysts
- Primarily used in research and some therapeutic applications
- Not widely available as supplements

**Topical SOD:**
- Used in some cosmetic formulations for skin protection
- May provide localized antioxidant effects
- Limited absorption into deeper skin layers

**Indirect approaches (more effective):**
- Consuming minerals (copper, zinc, manganese) to support endogenous SOD
- Phytochemicals that upregulate SOD expression through Nrf2 (sulforaphane, curcumin, EGCG)
- Lifestyle interventions (exercise, caloric restriction)

**Measurement of SOD:**

SOD activity can be measured in:
- **Blood (erythrocytes, plasma):** Reflects systemic antioxidant capacity
- **Tissue biopsies:** Research setting
- **Indirect markers:** Measure downstream effects on oxidative stress markers (MDA, 8-OHdG)

Higher SOD activity generally correlates with better antioxidant defense, though very high levels may indicate compensatory upregulation in response to oxidative stress.

**Therapeutic potential:**

**Recombinant SOD therapies:**
- **Pegylated SOD:** Extended circulation time; studied for inflammatory conditions
- **SOD-containing liposomes:** Improved delivery to tissues
- **Limited clinical use:** Primarily experimental; challenges include production cost, delivery, and immunogenicity

**More practical approaches:**
- Enhancing endogenous SOD through nutrition and lifestyle
- Targeting Nrf2 pathway to upregulate multiple antioxidant enzymes including SOD
- Addressing underlying causes of oxidative stress (hyperglycemia, inflammation, smoking)"
      examples={[
        "Exercise training increases muscle SOD2 (Mn-SOD) activity by 20-60% depending on intensity and duration, enhancing mitochondrial antioxidant capacity",
        "Sulforaphane from broccoli sprouts activates Nrf2, increasing SOD1 and SOD2 expression by 40-100% in various tissues",
        "SOD1 mutations cause approximately 20% of familial ALS cases, demonstrating the critical importance of proper SOD function in neuron survival",
        "SOD catalyzes superoxide dismutation at near-diffusion-limited rates (10⁹ M⁻¹s⁻¹), making it one of the fastest enzymes known"
      ]}
      relatedTerms={[
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Catalase", key: "catalase" },
        { term: "Glutathione Peroxidase", key: "glutathioneperoxidase" },
        { term: "Free Radicals", key: "freeradicals" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Nrf2", key: "nrf2" }
      ]}
      quickFacts={[
        { 
          icon: Shield, 
          title: "First Line of Defense", 
          description: "SOD is the first enzymatic defense against oxidative stress, catalyzing the dismutation of superoxide radicals (O₂•⁻) into hydrogen peroxide and oxygen at near-diffusion-limited speeds." 
        },
        { 
          icon: Zap, 
          title: "Three Human Forms", 
          description: "SOD1 (Cu/Zn-SOD) in cytoplasm, SOD2 (Mn-SOD) in mitochondria, and SOD3 (EC-SOD) in extracellular space. SOD2 is essential for life—knockout mice die within days from mitochondrial damage." 
        },
        { 
          icon: Activity, 
          title: "Enzymatic Cascade", 
          description: "SOD works with catalase and glutathione peroxidase: SOD converts superoxide → H₂O₂, then catalase/GPx converts H₂O₂ → water, completing antioxidant defense." 
        },
        { 
          icon: Pill, 
          title: "Poor Supplement Bioavailability", 
          description: "Oral SOD supplements are largely ineffective as the protein enzyme is digested. More effective: consume cofactor minerals (copper, zinc, manganese) and Nrf2-activating phytochemicals." 
        },
        { 
          icon: Heart, 
          title: "Cardiovascular Protection", 
          description: "SOD3 in blood vessels protects endothelium and preserves nitric oxide bioavailability. Reduced SOD activity is associated with endothelial dysfunction, hypertension, and atherosclerosis." 
        },
        { 
          icon: Brain, 
          title: "Neurological Importance", 
          description: "SOD1 mutations cause ~20% of familial ALS (Lou Gehrig's disease). Reduced SOD activity is implicated in Parkinson's, Alzheimer's, and age-related cognitive decline." 
        }
      ]}
    />
  );
};
