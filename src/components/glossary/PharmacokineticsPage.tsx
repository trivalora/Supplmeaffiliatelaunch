import { GlossaryTemplate } from '../GlossaryTemplate';

export function PharmacokineticsPage({
  onNavigate,
  onContactClick,
  onLegalClick
}: {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
}) {
  return (
    <GlossaryTemplate
      term="Pharmacokinetics"
      definition="The study of how the body affects a drug or supplement over time, including how it is absorbed, distributed, metabolized, and excreted. It essentially describes 'what the body does to the drug' as opposed to pharmacodynamics, which describes 'what the drug does to the body.'"
      
      detailedExplanation="The ADME Framework:

Pharmacokinetics is commonly described using the ADME framework:

Absorption:
The process by which a supplement enters the bloodstream from its administration site.
Key factors: Bioavailability, route of administration, food interactions

Distribution:
The dispersion of the supplement throughout the body's fluids and tissues.
Key factors: Blood flow, protein binding, tissue permeability

Metabolism:
The biochemical modification of the supplement by the body, primarily in the liver.
Key factors: Enzyme activity, first-pass metabolism, genetic variations

Excretion:
The removal of the supplement and its metabolites from the body.
Key factors: Renal function, biliary excretion, half-life

Key Pharmacokinetic Parameters:

Cmax (Maximum Concentration):
The highest concentration of supplement in the blood after a dose

Tmax (Time to Maximum Concentration):
The time it takes to reach Cmax after administration

AUC (Area Under the Curve):
Total exposure to the supplement over time; indicates overall absorption

Half-Life (t½):
Time required for the concentration to decrease by half

Clearance (CL):
The rate at which the body eliminates the supplement

Volume of Distribution (Vd):
Theoretical volume in which the supplement would need to be distributed to achieve the observed blood concentration

Importance in Supplement Research:

• Optimal Dosing: Helps determine how much and how often a supplement should be taken
• Formulation Comparison: Compares different forms of the same supplement (e.g., magnesium citrate vs. magnesium glycinate)
• Food Interactions: Identifies whether supplements should be taken with or without food
• Timing Strategies: Determines optimal timing for loading phases or pre-workout supplements
• Individual Variability: Explains why some people respond differently to the same dose"
      
      exampleContext="Pharmacokinetic analysis revealed that curcumin formulated with piperine had a 20-fold higher Cmax (1.35 µg/mL vs. 0.07 µg/mL) and significantly greater AUC compared to standard curcumin, suggesting enhanced bioavailability. The half-life remained similar at approximately 6-7 hours for both formulations."
      
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Absorption", key: "absorption" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      
      onNavigate={onNavigate}
      currentPage="pharmacokinetics"
      onContactClick={onContactClick}
      onLegalClick={onLegalClick}
    />
  );
}
