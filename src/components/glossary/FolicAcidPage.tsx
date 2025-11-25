'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function FolicAcidPage() {
  return (
    <GlossaryTemplate
      term="Folic Acid"
      definition="The synthetic, oxidized form of folate (vitamin B9) used in dietary supplements and food fortification programs. Unlike naturally occurring folate found in foods, folic acid is a manufactured compound that must be converted through multiple enzymatic steps before the body can use it."
      detailedExplanation="While folic acid has been highly successful in reducing neural tube defects through mandatory food fortification programs in many countries, there is growing recognition that it may not be the optimal form of folate supplementation for everyone, particularly those with certain genetic variants."
      expandedExplanation={
        <>
          <h2 className="text-2xl font-serif text-primary mb-4">Historical Context and Public Health Success</h2>
          <p className="mb-4">
            Folic acid fortification represents one of the most successful public health interventions:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Neural tube defect prevention:</strong> Mandatory folic acid fortification of grain products in the US (since 1998) and other countries has reduced neural tube defect rates by 25-50%</li>
            <li><strong>Widespread implementation:</strong> Over 80 countries have mandatory folic acid fortification programs</li>
            <li><strong>Cost-effectiveness:</strong> Folic acid is inexpensive to produce and very stable, making it practical for large-scale fortification</li>
            <li><strong>Proven efficacy:</strong> Periconceptional folic acid supplementation (400-800 mcg daily) effectively prevents neural tube defects in most women</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Metabolism and Conversion</h2>
          <p className="mb-4">
            Folic acid requires a multi-step conversion process before it becomes biologically active:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Absorption:</strong> Folic acid is absorbed in the small intestine</li>
            <li><strong>Reduction:</strong> Converted to dihydrofolate (DHF) by dihydrofolate reductase (DHFR)</li>
            <li><strong>Further reduction:</strong> DHF is reduced to tetrahydrofolate (THF)</li>
            <li><strong>Methylation:</strong> THF is converted through several steps to 5-methyltetrahydrofolate (5-MTHF, or methylfolate), the active form</li>
          </ol>
          <p className="mb-6">
            The final conversion step from 5,10-methylenetetrahydrofolate to 5-MTHF is catalyzed by the MTHFR enzyme. Genetic variants in the MTHFR gene can significantly reduce the efficiency of this conversion, affecting approximately 40-60% of the population.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">MTHFR Gene Variants and Folic Acid</h2>
          <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
            <p className="text-sm">
              <strong>Important limitation:</strong> Individuals with MTHFR gene variants (C677T and A1298C) may have reduced ability to convert folic acid to its active form, potentially making methylfolate supplementation more effective for these individuals.
            </p>
          </div>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>C677T homozygotes:</strong> Approximately 10-12% of the population has two copies of this variant, resulting in ~70% reduced MTHFR enzyme activity</li>
            <li><strong>Heterozygotes and compound variants:</strong> Many more individuals have partial reductions in enzyme activity</li>
            <li><strong>Clinical implications:</strong> Reduced conversion efficiency may lead to lower levels of active folate despite adequate folic acid intake</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Unmetabolized Folic Acid (UMFA)</h2>
          <p className="mb-4">
            A unique concern with folic acid supplementation is the potential accumulation of unmetabolized folic acid in the blood:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Limited conversion capacity:</strong> The liver's ability to convert folic acid is limited, particularly at higher doses</li>
            <li><strong>Detectability:</strong> UMFA can be detected in the blood of many people in countries with fortification programs, especially after consuming supplements</li>
            <li><strong>Potential concerns:</strong> Some research suggests UMFA may interfere with folate metabolism and possibly immune function, though evidence is still emerging</li>
            <li><strong>Dose relationship:</strong> UMFA levels increase with higher folic acid doses, particularly above 400 mcg per dose</li>
          </ul>
        </>
      }
      relatedTerms={[
        { term: 'Methylfolate', path: '/glossary/methylfolate' },
        { term: 'Bioavailability', path: '/glossary/bioavailability' },
        { term: 'MTHFR', path: '/glossary/mthfr' },
      ]}
      currentPage="folicacid"
    />
  );
}
