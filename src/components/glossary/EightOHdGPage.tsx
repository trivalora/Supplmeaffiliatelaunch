import { GlossaryTemplate } from '../GlossaryTemplate';

export function EightOHdGPage() {
  return (
    <GlossaryTemplate
      term="8-OHdG"
      abbreviation="8-hydroxy-2'-deoxyguanosine, 8-oxo-dG"
      definition="A modified DNA nucleoside formed when reactive oxygen species attack guanine bases in DNA, serving as one of the most widely used biomarkers for oxidative DNA damage and oxidative stress."
      detailedExplanation="8-hydroxy-2'-deoxyguanosine (8-OHdG), also known as 8-oxo-deoxyguanosine, is formed when hydroxyl radicals or other reactive oxygen species oxidize the guanine base in DNA. Among the four DNA bases (adenine, guanine, cytosine, thymine), guanine is most susceptible to oxidation due to its lowest redox potential. The formation and accumulation of 8-OHdG represents oxidative DNA damage that can lead to mutations if not properly repaired.

**Formation and significance:**

DNA is constantly exposed to oxidative stress from both endogenous sources (mitochondrial respiration, immune responses, metabolism) and exogenous sources (radiation, environmental toxins, cigarette smoke). When reactive oxygen species attack DNA, they can modify nucleotide bases, with 8-OHdG being one of the most abundant and well-characterized oxidative lesions. Approximately 10,000-100,000 oxidative DNA lesions occur per cell per day under normal physiological conditions, many of which are 8-OHdG.

**Repair mechanisms:**

Cells possess DNA repair systems to remove 8-OHdG and prevent its mutagenic effects. The base excision repair (BER) pathway, primarily involving 8-oxoguanine DNA glycosylase (OGG1), recognizes and removes 8-OHdG from DNA. The excised nucleoside is released into circulation and eventually excreted in urine. This urinary 8-OHdG reflects the balance between oxidative damage formation and repair capacity.

**Measurement and interpretation:**

**Urinary 8-OHdG:** The most common clinical measurement. Urinary levels reflect systemic oxidative DNA damage over the preceding hours and are often normalized to creatinine excretion (reported as ng 8-OHdG/mg creatinine). Normal levels typically range from 2-10 ng/mg creatinine, with higher values indicating increased oxidative stress.

**Serum/plasma 8-OHdG:** Reflects circulating 8-OHdG from damaged cells but is more variable and less standardized than urinary measurement.

**DNA 8-OHdG content:** Can be measured directly in cells or tissues using immunoassays or chromatographic methods, providing information about steady-state DNA damage levels.

**Clinical and research applications:**

8-OHdG has been extensively studied as a biomarker in numerous conditions:

**Cancer:** Elevated 8-OHdG has been observed in various cancers and is associated with increased cancer risk. The mutagenic potential of unrepaired 8-OHdG (it pairs with adenine instead of cytosine during replication, causing G→T transversions) contributes to carcinogenesis.

**Cardiovascular disease:** Higher 8-OHdG levels are associated with atherosclerosis, hypertension, and cardiovascular events, reflecting vascular oxidative stress.

**Metabolic disorders:** Diabetes, metabolic syndrome, and obesity show elevated 8-OHdG, correlating with glycemic control and insulin resistance.

**Neurodegenerative diseases:** Increased 8-OHdG has been found in Alzheimer's disease, Parkinson's disease, and other neurodegenerative conditions.

**Aging:** 8-OHdG levels tend to increase with age, supporting the oxidative stress theory of aging.

**Intervention responses:**

Multiple studies have used 8-OHdG to assess antioxidant interventions:
- Antioxidant supplementation (vitamins C and E, polyphenols, carotenoids) has shown variable effects on reducing 8-OHdG
- Exercise training paradoxically may transiently increase 8-OHdG acutely but reduce resting levels chronically
- Dietary patterns high in fruits, vegetables, and antioxidants are generally associated with lower 8-OHdG

**Limitations:**

While widely used, 8-OHdG has some limitations:
- Significant inter-individual variability
- Influenced by kidney function (affects urinary excretion)
- Collection and storage conditions affect stability
- Represents only one type of oxidative damage (other DNA lesions exist)
- Unclear whether reducing 8-OHdG translates to improved health outcomes"
      examples={[
        "Baseline urinary 8-OHdG in healthy adults typically ranges from 3-8 ng/mg creatinine, while smokers often show levels of 10-15 ng/mg creatinine, reflecting increased oxidative DNA damage.",
        "A study of antioxidant supplementation (vitamins C and E plus beta-carotene for 3 months) reduced urinary 8-OHdG from 12.3 to 8.7 ng/mg creatinine in individuals with metabolic syndrome.",
        "Individuals with poorly controlled type 2 diabetes (HbA1c &gt;8%) show urinary 8-OHdG levels approximately 40-60% higher than non-diabetic controls."
      ]}
      relatedTerms={[
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Free Radicals", key: "freeradicals" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "MDA", key: "mda" }
      ]}
    />
  );
}
