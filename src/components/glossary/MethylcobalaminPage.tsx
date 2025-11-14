import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export const MethylcobalaminPage: React.FC = () => {
  return (
    <div className="min-h-screen" data-color-scheme="green">
      {/* Header */}
      <header className="border-b" data-section="header">
        <div className="container-custom" data-spacing="comfortable">
          <Link href="/glossary">
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Glossary</span>
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom" data-spacing="comfortable">
        <article className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="mb-4">Methylcobalamin</h1>
            <p className="text-muted" data-text-style="lead">
              An active, bioavailable form of vitamin B12 used directly by the body
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Methylcobalamin</strong> is one of the two naturally occurring, biologically active forms of vitamin B12 (cobalamin). Unlike cyanocobalamin, the synthetic form commonly used in supplements, methylcobalamin is immediately usable by the body and doesn't require conversion.
              </p>
            </div>
            <p className="mb-4">
              Methylcobalamin is the primary form of vitamin B12 found in the cytoplasm of cells and is particularly important for the nervous system and methylation reactions in the body. It serves as a cofactor for the enzyme methionine synthase, which is crucial for DNA synthesis, amino acid metabolism, and homocysteine regulation.
            </p>
          </section>

          {/* Forms of B12 */}
          <section className="mb-8">
            <h2 className="mb-4">Forms of Vitamin B12</h2>
            <p className="mb-4">
              Vitamin B12 exists in several forms, each with different characteristics:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Methylcobalamin:</strong> Active form, used in methylation reactions and found in the cytoplasm</li>
              <li><strong>Adenosylcobalamin:</strong> Active form, used in mitochondrial energy metabolism</li>
              <li><strong>Hydroxocobalamin:</strong> Natural form found in foods, easily converted to active forms, longer-acting</li>
              <li><strong>Cyanocobalamin:</strong> Synthetic form most commonly used in supplements due to stability and low cost; requires conversion to active forms</li>
            </ul>
          </section>

          {/* Benefits of Methylcobalamin */}
          <section className="mb-8">
            <h2 className="mb-4">Advantages of Methylcobalamin</h2>
            <p className="mb-4">
              Methylcobalamin offers several potential advantages over cyanocobalamin:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>No conversion required:</strong> Ready to use immediately upon absorption, bypassing conversion steps</li>
              <li><strong>Better retention:</strong> Some studies suggest methylcobalamin may be better retained in tissues, particularly in the nervous system</li>
              <li><strong>Direct neurological support:</strong> The preferred form for supporting nerve function and regeneration</li>
              <li><strong>No cyanide:</strong> Unlike cyanocobalamin, methylcobalamin contains no cyanide molecule (though the cyanide in cyanocobalamin is in very small, safe amounts)</li>
              <li><strong>Supports methylation:</strong> Directly participates in methylation reactions, including homocysteine conversion to methionine</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Clinical context:</strong> While cyanocobalamin is effective for most people, methylcobalamin may be preferred for neurological conditions, individuals with certain genetic variants, or those who cannot efficiently convert cyanocobalamin to active forms.
              </p>
            </div>
          </section>

          {/* Comparison to Cyanocobalamin */}
          <section className="mb-8">
            <h2 className="mb-4">Methylcobalamin vs. Cyanocobalamin</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Characteristic</th>
                    <th className="border border-border p-3 text-left">Methylcobalamin</th>
                    <th className="border border-border p-3 text-left">Cyanocobalamin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Source</td>
                    <td className="border border-border p-3">Natural, active form</td>
                    <td className="border border-border p-3">Synthetic form</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Bioavailability</td>
                    <td className="border border-border p-3">Immediate, no conversion needed</td>
                    <td className="border border-border p-3">Requires conversion to active forms</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Stability</td>
                    <td className="border border-border p-3">Less stable, light-sensitive</td>
                    <td className="border border-border p-3">Very stable, long shelf life</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Cost</td>
                    <td className="border border-border p-3">Higher</td>
                    <td className="border border-border p-3">Lower</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Neurological support</td>
                    <td className="border border-border p-3">Directly supports nerve function</td>
                    <td className="border border-border p-3">Must be converted first</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Tissue retention</td>
                    <td className="border border-border p-3">May be better retained</td>
                    <td className="border border-border p-3">Standard retention</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Clinical research</td>
                    <td className="border border-border p-3">Growing evidence base</td>
                    <td className="border border-border p-3">Extensive research history</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Clinical Applications */}
          <section className="mb-8">
            <h2 className="mb-4">Clinical Applications</h2>
            <p className="mb-4">
              Methylcobalamin is particularly useful for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Neurological conditions:</strong> Peripheral neuropathy, diabetic neuropathy, nerve damage or regeneration</li>
              <li><strong>B12 deficiency:</strong> Correcting vitamin B12 deficiency, especially in individuals with absorption issues</li>
              <li><strong>Methylation support:</strong> Supporting optimal methylation processes, particularly in individuals with MTHFR or other genetic variants</li>
              <li><strong>Homocysteine reduction:</strong> Helping to convert homocysteine to methionine, potentially supporting cardiovascular health</li>
              <li><strong>Cognitive support:</strong> May support memory and cognitive function, particularly in older adults</li>
              <li><strong>Sleep regulation:</strong> Some evidence suggests methylcobalamin may help regulate sleep-wake cycles</li>
            </ul>
          </section>

          {/* Absorption Routes */}
          <section className="mb-8">
            <h2 className="mb-4">Absorption and Delivery Methods</h2>
            <p className="mb-4">
              Methylcobalamin is available in several forms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Oral tablets/capsules:</strong> Most common form; absorption depends on intrinsic factor for large doses, passive diffusion for small amounts</li>
              <li><strong>Sublingual tablets:</strong> Dissolve under the tongue for direct absorption into bloodstream, bypassing digestive system</li>
              <li><strong>Injectable:</strong> Intramuscular injections provide highest bioavailability, often used for severe deficiency or absorption issues</li>
              <li><strong>Lozenges:</strong> Similar to sublingual, designed to dissolve slowly in mouth</li>
              <li><strong>Nasal spray:</strong> Alternative delivery method that bypasses digestive system</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Absorption note:</strong> For doses above ~2-3 mcg, absorption requires intrinsic factor (a protein made in the stomach). Passive diffusion absorbs about 1-2% of larger doses, which is why high-dose oral supplements (1,000-5,000 mcg) can be effective despite limited active absorption.
              </p>
            </div>
          </section>

          {/* Dosage */}
          <section className="mb-8">
            <h2 className="mb-4">Dosage Considerations</h2>
            <p className="mb-4">
              Methylcobalamin dosages vary based on purpose:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>General supplementation:</strong> 500-1,000 mcg daily</li>
              <li><strong>Deficiency correction:</strong> 1,000-2,000 mcg daily orally, or 1,000 mcg intramuscularly weekly to monthly</li>
              <li><strong>Neurological support:</strong> 1,500-5,000 mcg daily, sometimes divided doses</li>
              <li><strong>Maintenance after deficiency:</strong> 1,000 mcg daily or 1,000 mcg intramuscularly monthly</li>
            </ul>
            <p className="mb-4">
              The RDA for vitamin B12 is 2.4 mcg for adults, but therapeutic and supplemental doses are typically much higher due to limited absorption efficiency. Vitamin B12 is water-soluble and excess is excreted in urine, so there is no established upper intake level.
            </p>
          </section>

          {/* Who May Benefit */}
          <section className="mb-8">
            <h2 className="mb-4">Who May Benefit Most</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Individuals with B12 deficiency:</strong> Especially those with pernicious anemia or absorption issues</li>
              <li><strong>Vegetarians and vegans:</strong> B12 is primarily found in animal products</li>
              <li><strong>Older adults:</strong> Stomach acid production decreases with age, reducing B12 absorption</li>
              <li><strong>People taking certain medications:</strong> Metformin, proton pump inhibitors, H2 blockers can reduce B12 absorption</li>
              <li><strong>Those with digestive disorders:</strong> Crohn's disease, celiac disease, or post-gastric surgery</li>
              <li><strong>Individuals with genetic variants:</strong> Certain genetic polymorphisms affect B12 metabolism</li>
              <li><strong>People with neurological symptoms:</strong> Tingling, numbness, balance issues potentially related to B12</li>
            </ul>
          </section>

          {/* Safety */}
          <section className="mb-8">
            <h2 className="mb-4">Safety and Side Effects</h2>
            <p className="mb-4">
              Methylcobalamin is generally very safe:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Excellent safety profile:</strong> No known toxicity from high doses; water-soluble vitamin</li>
              <li><strong>Minimal side effects:</strong> Rarely causes side effects; some people report mild headache or dizziness initially</li>
              <li><strong>Injection site reactions:</strong> For injectable forms, mild pain or redness at injection site possible</li>
              <li><strong>Interactions:</strong> May interact with certain antibiotics and medications; generally safe with other supplements</li>
              <li><strong>Masking deficiency:</strong> Like other B12 forms, high-dose folate can mask B12 deficiency symptoms</li>
            </ul>
          </section>

          {/* Related Terms */}
          <section className="mb-8">
            <h2 className="mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/glossary/bioavailability">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Bioavailability
                </span>
              </Link>
              <Link href="/glossary/homocysteine">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Homocysteine
                </span>
              </Link>
              <Link href="/glossary/metabolism">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Metabolism
                </span>
              </Link>
              <Link href="/glossary/deficiency">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Deficiency
                </span>
              </Link>
            </div>
          </section>

          {/* References */}
          <section className="mb-8">
            <h3 className="mb-4">Scientific References</h3>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Paul C, Brady DM. Comparative Bioavailability and Utilization of Particular Forms of B12 Supplements With Potential to Mitigate B12-related Genetic Polymorphisms. <em>Integr Med (Encinitas).</em> 2017;16(1):42-49.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Okada K, et al. The effect of cobalamin (vitamin B12) on the cognitive function in elderly people: A systematic review. <em>J Nutr Health Aging.</em> 2015;19(4):355-62.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Institute of Medicine (US) Standing Committee on the Scientific Evaluation of Dietary Reference Intakes. <em>Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate, Vitamin B12, Pantothenic Acid, Biotin, and Choline.</em> Washington (DC): National Academies Press (US); 1998.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NIH Office of Dietary Supplements - Vitamin B12 Fact Sheet</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MethylcobalaminPage;