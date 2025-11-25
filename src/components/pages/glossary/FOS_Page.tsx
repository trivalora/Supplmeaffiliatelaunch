'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function FOS_Page() {
  return (
    <GlossaryTemplate
      term="Fructooligosaccharides (FOS)"
      abbreviation="FOS"
      currentPage="fos"
      definition="Short-chain carbohydrates composed of fructose molecules that resist digestion in the upper gastrointestinal tract, serving as prebiotic substrates that selectively stimulate beneficial gut bacteria."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Structure and Sources</h3>
            <p className="mb-4">
              FOS are oligosaccharides consisting of 2-9 fructose units linked by β(2→1) glycosidic bonds, often with a terminal glucose molecule. This structure makes them resistant to human digestive enzymes but fermentable by colonic bacteria.
            </p>
            <p className="mb-4">
              Natural dietary sources of FOS include:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Chicory root</strong>: 15-20% FOS by weight (most concentrated source)</li>
              <li><strong>Jerusalem artichoke</strong>: 10-15% FOS</li>
              <li><strong>Onions and garlic</strong>: 2-6% FOS</li>
              <li><strong>Asparagus</strong>: 2-3% FOS</li>
              <li><strong>Bananas</strong>: 0.5-1% FOS (especially when slightly green)</li>
            </ul>
            <p className="mb-4">
              Commercial FOS supplements are typically extracted from chicory root or synthesized enzymatically from sucrose. They're often found in prebiotic supplements, functional foods, and infant formulas.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Prebiotic Mechanisms</h3>
            <p className="mb-4">
              When FOS reach the colon intact, they undergo bacterial fermentation. This process:
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <ul className="list-disc ml-6 space-y-2">
                <li>Selectively feeds beneficial bacteria, particularly Bifidobacteria and Lactobacilli</li>
                <li>Produces short-chain fatty acids (SCFAs) - primarily acetate, propionate, and butyrate</li>
                <li>Lowers colonic pH, inhibiting pathogenic bacteria growth</li>
                <li>Increases stool bulk and promotes regular bowel movements</li>
              </ul>
            </div>
            <p className="mb-4">
              Research shows FOS supplementation (typically 5-10g daily) can increase Bifidobacteria populations by 10-fold within 1-2 weeks. This selective enhancement of beneficial bacteria is the defining characteristic of prebiotics.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Health Benefits</h3>
            <p className="mb-4">
              Clinical studies support several benefits of FOS supplementation:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Digestive Health</strong>: Improves stool frequency and consistency, particularly in constipation (5-10g daily)</li>
              <li><strong>Calcium Absorption</strong>: May enhance calcium absorption by 20-30% through colonic acidification and increased solubility</li>
              <li><strong>Blood Sugar Management</strong>: Some evidence for improved glycemic control and insulin sensitivity</li>
              <li><strong>Immune Function</strong>: SCFA production supports gut barrier integrity and immune regulation</li>
              <li><strong>Cholesterol</strong>: Modest reductions (5-10%) in total and LDL cholesterol in some studies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Dosing and Tolerability</h3>
            <p className="mb-4">
              Effective prebiotic doses typically range from 5-20g daily, though benefits may occur with as little as 2.5-5g. However, FOS can cause digestive side effects in sensitive individuals:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Gas and bloating (most common)</li>
              <li>Abdominal discomfort or cramping</li>
              <li>Diarrhea at high doses (>20g/day)</li>
            </ul>
            <p className="mb-4">
              To minimize side effects, start with 2-3g daily and gradually increase over 1-2 weeks. Symptoms typically decrease as gut bacteria adapt. Individuals with IBS or FODMAP sensitivity may not tolerate FOS well, as they're high-FODMAP carbohydrates.
            </p>
            <p className="mb-4">
              FOS are often combined with probiotics (creating "synbiotics") to enhance bacterial colonization and efficacy. They're also frequently paired with inulin, a longer-chain fructan with similar prebiotic properties.
            </p>
          </section>
        </>
      }
      relatedTerms={['bioavailability', 'absorption', 'probiotics']}
    />
  );
}
