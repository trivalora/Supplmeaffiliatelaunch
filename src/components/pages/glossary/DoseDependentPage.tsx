import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function DoseDependentPage() {
  return (
    <GlossaryTemplate
      term="Dose-Dependent"
      definition="A relationship where the magnitude of a biological effect (either beneficial or adverse) changes systematically with the amount of substance administered. Also called dose-response relationship."
      
      expandedExplanation={
        <>
          <p>
            In a dose-dependent relationship, as the dose increases, the effect typically increases proportionally within a certain range, often following a characteristic curve. At very low doses, there may be no detectable effect (below the threshold). As the dose increases, effects become measurable and strengthen. Eventually, a plateau is reached where further dose increases produce no additional benefit (maximum effect), and at very high doses, toxic or adverse effects may emerge or predominate.
          </p>
          <p>
            Understanding dose-dependent relationships is crucial for establishing optimal dosing regimens. The therapeutic window represents the dose range between the minimum effective dose (producing desired benefits) and the toxic dose (causing harm). Narrow therapeutic windows require careful dosing, while wider windows allow more flexibility. Some effects show steep dose-response curves (small dose changes produce large effect changes), while others show gradual curves.
          </p>
          <p>
            Dose-dependent effects apply to both benefits and side effects. A supplement might show dose-dependent improvements in a biomarker up to a certain level, beyond which no additional benefit occurs. Simultaneously, side effects may increase in a dose-dependent manner—for example, gastrointestinal distress often increases with higher supplement doses. Meta-analyses examining dose-response relationships help identify optimal dosing strategies that maximize benefits while minimizing risks.
          </p>
        </>
      }
      
      examples={[
        "Magnesium's effect on blood pressure shows dose-dependency: at least 300 mg/day is needed for benefit, with median effective dose around 368 mg/day, but doses above this may not provide additional cardiovascular benefits",
        "Vitamin D supplementation shows dose-dependent increases in serum 25(OH)D levels, with each 100 IU of vitamin D3 raising serum levels by approximately 0.7-1.0 ng/mL",
        "Curcumin exhibits dose-dependent gastrointestinal side effects, with odds ratio approximately 3.0 versus placebo at high doses (approaching 4g/day)"
      ]}
      
      currentPage="dosedependent"

      
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
    />
  );
}
