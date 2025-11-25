import { GlossaryTemplate } from '../GlossaryTemplate';

export function OsteomalachPage() {
  return (
    <GlossaryTemplate
      term="Osteomalacia"
      definition="Softening of the bones in adults due to defective bone mineralization, most commonly caused by severe vitamin D deficiency."
      expandedExplanation={`Osteomalacia is the adult equivalent of rickets, characterized by impaired bone mineralization resulting in soft, weak bones prone to deformity and fracture. Unlike osteoporosis (which involves loss of mineralized bone), osteomalacia involves accumulation of unmineralized bone matrix (osteoid).

**Causes**

**Vitamin D Deficiency (Most Common in Developed Countries):**
- Inadequate sun exposure
- Insufficient dietary vitamin D intake
- Malabsorption (celiac disease, Crohn's disease, gastric bypass, chronic pancreatitis)
- Liver disease (impairs conversion of vitamin D to 25(OH)D)
- Chronic kidney disease (impairs conversion of 25(OH)D to active 1,25(OH)₂D)
- Medications (anticonvulsants, rifampin) that increase vitamin D metabolism

**Phosphate Deficiency:**
- Hereditary hypophosphatemia
- Renal tubular disorders (Fanconi syndrome)
- Tumor-induced osteomalacia (rare tumors secreting FGF23, causing renal phosphate wasting)
- Antacid overuse (aluminum-containing antacids bind phosphate)

**Other Causes:**
- Hypophosphatasia (rare genetic disorder affecting alkaline phosphatase)
- Chronic acidosis
- Fluoride toxicity

**Pathophysiology**

When vitamin D, calcium, or phosphate levels are insufficient, new bone matrix (osteoid) cannot properly mineralize with calcium and phosphate to form strong, rigid hydroxyapatite crystals. This results in accumulation of unmineralized or poorly mineralized osteoid, making bones soft, weak, and prone to deformity under normal mechanical stress.

**Symptoms**

**Musculoskeletal:**
- Diffuse bone pain and tenderness (especially in spine, pelvis, ribs, legs)
- Muscle weakness (proximal muscles—difficulty climbing stairs, rising from chair)
- Waddling gait
- Bone deformities (vertebral compression, pelvic deformities)
- Increased fracture risk, including pseudofractures (Looser zones)

**Biochemical:**
- Symptoms of hypocalcemia (in severe cases): muscle cramps, paresthesias, tetany

Symptoms often develop gradually and may be attributed to other conditions (arthritis, fibromyalgia), delaying diagnosis.

**Diagnosis**

**Laboratory Tests:**
- Low 25(OH)D (&lt;20 ng/mL, often &lt;10 ng/mL)
- Low or low-normal serum calcium
- Low or low-normal serum phosphate
- Elevated alkaline phosphatase (indicates increased bone turnover)
- Elevated parathyroid hormone (secondary hyperparathyroidism)

**Imaging:**
- X-rays: Decreased bone density, Looser zones (pseudofractures—thin lucent lines perpendicular to cortex)
- DEXA scan: Low bone mineral density (can overlap with osteoporosis)
- Bone biopsy (rarely needed): Shows excess unmineralized osteoid; definitive diagnosis

**Treatment**

**Vitamin D Deficiency Osteomalacia:**
- High-dose vitamin D replacement (typically 50,000 IU weekly for 8-12 weeks, then maintenance dose 1,000-2,000 IU daily)
- Calcium supplementation (1,000-1,500 mg daily) if dietary intake inadequate
- Addressing underlying causes (treating malabsorption, adjusting medications)
- Adequate sun exposure when feasible

**Monitoring:**
- Serum 25(OH)D, calcium, phosphate, alkaline phosphatase, PTH
- Improvement typically seen within weeks to months
- Alkaline phosphatase normalizes as bone mineralizes

**Phosphate Deficiency Osteomalacia:**
- Oral phosphate supplementation (divided doses throughout day to improve absorption)
- Active vitamin D (calcitriol) to enhance calcium absorption
- Treatment of underlying renal disorders

**Outcomes**

With appropriate treatment, symptoms typically improve within weeks to months. Bone pain and muscle weakness often resolve first. Radiographic healing (disappearance of pseudofractures, improved mineralization) may take months. Long-standing deformities may be permanent.

**Prevention**

- Adequate vitamin D intake (800-1,000 IU daily for most adults, higher for at-risk individuals)
- Regular sun exposure (15-30 minutes several times weekly, depending on skin tone and latitude)
- Dietary sources (fortified foods, fatty fish)
- Screening high-risk populations (elderly, homebound, dark-skinned individuals in northern latitudes, those with malabsorption)
- Monitoring vitamin D levels in patients on medications affecting vitamin D metabolism

**Distinction from Osteoporosis**

Osteoporosis involves loss of normally mineralized bone (low bone mass), while osteomalacia involves defective mineralization of new bone. Both cause low bone density on DEXA, but osteomalacia has biochemical abnormalities (low vitamin D, elevated alkaline phosphatase, elevated PTH) and responds to vitamin D/mineral replacement, whereas osteoporosis does not.`}
      examples={[
        "A 65-year-old homebound woman with chronic diffuse bone pain and vitamin D level of 8 ng/mL likely has osteomalacia, which improves with high-dose vitamin D supplementation.",
        "A patient post-gastric bypass surgery develops osteomalacia due to vitamin D and calcium malabsorption, requiring lifelong supplementation.",
        "Looser zones (pseudofractures) visible on X-ray of the pelvis or femur are pathognomonic for osteomalacia."
      ]}
      relatedTerms={[
        { term: "Vitamin Deficiency", key: "vitamindeficiency" },
        { term: "Bone Density", key: "bonedensity" },
        { term: "Rickets", key: "rickets" },
        { term: "Osteoporosis", key: "osteoporosis" },
        { term: "Absorption", key: "absorption" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
      currentPage="osteomalach"
    />
  );
}
