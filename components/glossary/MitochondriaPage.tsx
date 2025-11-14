import { GlossaryTemplate } from '../GlossaryTemplate';

interface MitochondriaPageProps {
  onNavigate?: (key: string) => void;
}

export function MitochondriaPage({ onNavigate }: MitochondriaPageProps) {
  return (
    <GlossaryTemplate
      term="Mitochondria"
      onNavigate={onNavigate}
      currentPage="mitochondria"
      definition="Specialized organelles within cells that generate most of the cell's energy (ATP) through oxidative phosphorylation, often called the 'powerhouses of the cell.'"
      detailedExplanation="Mitochondria convert nutrients (glucose, fatty acids, amino acids) into adenosine triphosphate (ATP), the universal energy currency of cells, through a process called oxidative phosphorylation occurring in the electron transport chain. A single cell can contain hundreds to thousands of mitochondria depending on its energy demands—muscle cells and neurons are particularly mitochondria-rich. Beyond energy production, mitochondria regulate calcium signaling, produce reactive oxygen species for signaling, participate in apoptosis (programmed cell death), and synthesize certain hormones and heme.

Mitochondrial dysfunction—reduced efficiency in ATP production—contributes to aging, fatigue, and numerous diseases including neurodegenerative disorders (Parkinson's, Alzheimer's), metabolic syndrome, diabetes, cardiovascular disease, and chronic fatigue syndrome. Mitochondria are unique in containing their own DNA (mtDNA), inherited exclusively from the mother, and are susceptible to damage from oxidative stress, toxins, and mutations that accumulate with age.

Supporting mitochondrial health involves regular exercise (particularly endurance and high-intensity interval training, which stimulates mitochondrial biogenesis), adequate sleep, stress management, and nutrition. Nutrients supporting mitochondrial function include B vitamins (cofactors in energy metabolism), coenzyme Q10 (CoQ10, electron transport chain component), alpha-lipoic acid (antioxidant and glucose metabolism), L-carnitine (fatty acid transport into mitochondria), magnesium (ATP production), and omega-3 fatty acids (mitochondrial membrane integrity)."
      examples={[
        "Coenzyme Q10 supplementation (100-300mg daily) may support mitochondrial function and energy production, particularly in older adults with lower endogenous levels",
        "High-intensity interval training and endurance exercise stimulate mitochondrial biogenesis, increasing mitochondrial number and efficiency",
        "Creatine supplementation enhances cellular energy availability by regenerating ATP, indirectly supporting mitochondrial function"
      ]}
      relatedTerms={[
        { term: "Metabolism", key: "metabolism" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
