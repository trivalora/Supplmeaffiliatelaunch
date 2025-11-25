'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function MethylcobalaminPage() {
  return (
    <GlossaryTemplate
      term="Methylcobalamin"
      abbreviation="MeCbl"
      currentPage="methylcobalamin"
      definition="An active, coenzyme form of vitamin B12 that participates directly in biochemical reactions without requiring conversion, particularly important for neurological function and methylation."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Active vs. Inactive Forms</h3>
            <p className="mb-4">
              Unlike cyanocobalamin (the synthetic form commonly used in supplements and fortification), methylcobalamin is bioactive and ready for immediate use by cells. Cyanocobalamin must undergo conversion in the liver to methylcobalamin or adenosylcobalamin before the body can utilize it.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Conversion Requirements for Cyanocobalamin:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Removal of cyanide molecule (requires glutathione)</li>
                <li>Addition of methyl group (requires ATP and methylation cofactors)</li>
                <li>Transport into cells and mitochondria</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Neurological Advantages</h3>
            <p className="mb-4">
              Methylcobalamin has particular importance for nervous system health. It supports myelin synthesis, the protective coating around nerve fibers, and may cross the blood-brain barrier more effectively than cyanocobalamin. Clinical studies suggest methylcobalamin may be superior for addressing peripheral neuropathy and neurological B12 deficiency symptoms.
            </p>
            <p className="mb-4">
              Research indicates methylcobalamin may help regenerate injured nerves and improve nerve conduction velocity in conditions like diabetic neuropathy, with doses of 500-1000 mcg daily showing therapeutic effects.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Methylation Support</h3>
            <p className="mb-4">
              As a methyl donor, methylcobalamin directly supports the methylation cycle - a fundamental process for DNA synthesis, neurotransmitter production, and detoxification. It works alongside methylfolate (active folate) to convert homocysteine to methionine, helping maintain healthy homocysteine levels.
            </p>
            <p className="mb-4">
              This is particularly relevant for individuals with MTHFR gene variants or other methylation issues, as methylcobalamin provides the active form directly without requiring enzymatic conversion that may be impaired in these populations.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Considerations and Dosing</h3>
            <p className="mb-4">
              While methylcobalamin offers theoretical advantages, it's typically more expensive than cyanocobalamin and may be less stable in supplement form. Light exposure can degrade methylcobalamin, which is why it's often sold in dark or opaque bottles.
            </p>
            <p className="mb-4">
              Standard doses range from 500-5000 mcg daily, though B12 is water-soluble with very low toxicity risk. Sublingual forms bypass potential absorption issues from low stomach acid or intrinsic factor deficiency. For severe deficiency or neurological symptoms, healthcare providers may prescribe methylcobalamin injections at much higher doses.
            </p>
          </section>
        </>
      }
      relatedTerms={['bioavailability', 'methylfolate', 'absorption', 'mthfr']}
    />
  );
}
