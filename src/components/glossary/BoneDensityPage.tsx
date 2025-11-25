import { GlossaryTemplate } from '../GlossaryTemplate';

export function BoneDensityPage() {
  return (
    <GlossaryTemplate
      term="Bone Density"
      abbreviation="BMD"
      definition="A measurement of the amount of minerals (primarily calcium and phosphorus) contained in a specific volume of bone, used to assess bone strength and fracture risk."
      detailedExplanation="Bone mineral density (BMD) is the primary biomarker used to diagnose osteoporosis and assess fracture risk. It's measured using dual-energy X-ray absorptiometry (DXA or DEXA) scans, typically at the hip and spine, and reported as a T-score comparing an individual's bone density to that of a healthy 30-year-old adult. A T-score of -1.0 or above is normal, -1.0 to -2.5 indicates osteopenia (low bone mass), and -2.5 or below indicates osteoporosis.

Bone is living tissue that constantly remodels through two processes: bone resorption (breakdown by osteoclasts) and bone formation (building by osteoblasts). Peak bone mass is typically reached in the late 20s to early 30s, after which bone density gradually declines. Factors affecting bone density include genetics, hormones (particularly estrogen), physical activity, nutrition (calcium, vitamin D, protein, magnesium), lifestyle factors (smoking, alcohol), and certain medications.

Low bone density significantly increases fracture risk, particularly hip, spine, and wrist fractures. Maintaining and improving bone density involves adequate calcium and vitamin D intake, regular weight-bearing exercise, resistance training, adequate protein, and for some individuals, medications that slow bone loss or promote bone formation. Supplements like calcium, vitamin D, magnesium, vitamin K2, and collagen peptides may support bone health."
      examples={[
        "Vitamin D supplementation combined with calcium improves bone mineral density and reduces fracture risk in older adults with deficiency",
        "Collagen peptides at 5-15g daily may improve bone mineral density by providing amino acids for bone matrix formation",
        "Weight-bearing exercise and resistance training stimulate bone formation and can increase or maintain bone density at any age"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Dose-Dependent", key: "dosedependent" }
      ]}
      currentPage="bonedensity"
    />
  );
}
