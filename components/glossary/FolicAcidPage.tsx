import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export const FolicAcidPage: React.FC = () => {
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
            <h1 className="mb-4">Folic Acid</h1>
            <p className="text-muted" data-text-style="lead">
              The synthetic form of folate (vitamin B9) used in supplements and food fortification
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Folic acid</strong> is the synthetic, oxidized form of folate (vitamin B9) used in dietary supplements and food fortification programs. Unlike naturally occurring folate found in foods, folic acid is a manufactured compound that must be converted through multiple enzymatic steps before the body can use it.
              </p>
            </div>
            <p className="mb-4">
              While folic acid has been highly successful in reducing neural tube defects through mandatory food fortification programs in many countries, there is growing recognition that it may not be the optimal form of folate supplementation for everyone, particularly those with certain genetic variants.
            </p>
          </section>

          {/* Historical Context */}
          <section className="mb-8">
            <h2 className="mb-4">Historical Context and Public Health Success</h2>
            <p className="mb-4">
              Folic acid fortification represents one of the most successful public health interventions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Neural tube defect prevention:</strong> Mandatory folic acid fortification of grain products in the US (since 1998) and other countries has reduced neural tube defect rates by 25-50%</li>
              <li><strong>Widespread implementation:</strong> Over 80 countries have mandatory folic acid fortification programs</li>
              <li><strong>Cost-effectiveness:</strong> Folic acid is inexpensive to produce and very stable, making it practical for large-scale fortification</li>
              <li><strong>Proven efficacy:</strong> Periconceptional folic acid supplementation (400-800 mcg daily) effectively prevents neural tube defects in most women</li>
            </ul>
          </section>

          {/* Metabolism & Conversion */}
          <section className="mb-8">
            <h2 className="mb-4">Metabolism and Conversion</h2>
            <p className="mb-4">
              Folic acid requires a multi-step conversion process before it becomes biologically active:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong>Absorption:</strong> Folic acid is absorbed in the small intestine</li>
              <li><strong>Reduction:</strong> Converted to dihydrofolate (DHF) by dihydrofolate reductase (DHFR)</li>
              <li><strong>Further reduction:</strong> DHF is reduced to tetrahydrofolate (THF)</li>
              <li><strong>Methylation:</strong> THF is converted through several steps to 5-methyltetrahydrofolate (5-MTHF, or methylfolate), the active form</li>
            </ol>
            <p className="mb-4">
              The final conversion step from 5,10-methylenetetrahydrofolate to 5-MTHF is catalyzed by the MTHFR enzyme. Genetic variants in the MTHFR gene can significantly reduce the efficiency of this conversion, affecting approximately 40-60% of the population.
            </p>
          </section>

          {/* MTHFR Gene Variants */}
          <section className="mb-8">
            <h2 className="mb-4">MTHFR Gene Variants and Folic Acid</h2>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Important limitation:</strong> Individuals with MTHFR gene variants (C677T and A1298C) may have reduced ability to convert folic acid to its active form, potentially making methylfolate supplementation more effective for these individuals.
              </p>
            </div>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>C677T homozygotes:</strong> Approximately 10-12% of the population has two copies of this variant, resulting in ~70% reduced MTHFR enzyme activity</li>
              <li><strong>Heterozygotes and compound variants:</strong> Many more individuals have partial reductions in enzyme activity</li>
              <li><strong>Clinical implications:</strong> Reduced conversion efficiency may lead to lower levels of active folate despite adequate folic acid intake</li>
            </ul>
          </section>

          {/* Unmetabolized Folic Acid (UMFA) */}
          <section className="mb-8">
            <h2 className="mb-4">Unmetabolized Folic Acid (UMFA)</h2>
            <p className="mb-4">
              A unique concern with folic acid supplementation is the potential accumulation of unmetabolized folic acid in the blood:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Limited conversion capacity:</strong> The liver's ability to convert folic acid is limited, particularly at higher doses</li>
              <li><strong>Detectability:</strong> UMFA can be detected in the blood of many people in countries with fortification programs, especially after consuming supplements</li>
              <li><strong>Potential concerns:</strong> Some research suggests UMFA may interfere with folate metabolism and possibly immune function, though evidence is still emerging</li>
              <li><strong>Dose relationship:</strong> UMFA levels increase with higher folic acid doses, particularly above 400 mcg per dose</li>
            </ul>
            <div className="p-4 bg-accent/30 rounded-lg border border-accent mb-4">
              <p className="text-sm">
                <strong>Research status:</strong> The clinical significance of UMFA remains debated. While some studies suggest potential concerns, the overall evidence still supports the safety and efficacy of folic acid fortification for the general population.
              </p>
            </div>
          </section>

          {/* Comparison to Natural Folate */}
          <section className="mb-8">
            <h2 className="mb-4">Folic Acid vs. Natural Folate</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Characteristic</th>
                    <th className="border border-border p-3 text-left">Folic Acid</th>
                    <th className="border border-border p-3 text-left">Natural Folate (from food)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Source</td>
                    <td className="border border-border p-3">Synthetic</td>
                    <td className="border border-border p-3">Natural, from foods</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Stability</td>
                    <td className="border border-border p-3">Very stable (heat, light)</td>
                    <td className="border border-border p-3">Unstable, easily destroyed by cooking</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Bioavailability</td>
                    <td className="border border-border p-3">~85% absorbed (higher than food folate)</td>
                    <td className="border border-border p-3">~50% absorbed from mixed diet</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Metabolism</td>
                    <td className="border border-border p-3">Requires multi-step conversion</td>
                    <td className="border border-border p-3">Already in various folate forms, closer to active state</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">UMFA risk</td>
                    <td className="border border-border p-3">Can accumulate if intake exceeds conversion capacity</td>
                    <td className="border border-border p-3">No UMFA accumulation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Current Recommendations */}
          <section className="mb-8">
            <h2 className="mb-4">Current Recommendations</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">For Women of Childbearing Age:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>400-800 mcg of folic acid or methylfolate daily, ideally starting before conception</li>
                <li>Essential for neural tube defect prevention</li>
                <li>Can be from fortified foods, supplements, or combination</li>
              </ul>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">For General Population:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>400 mcg dietary folate equivalents (DFE) daily from food and/or supplements</li>
                <li>Consider methylfolate for those with known MTHFR variants</li>
                <li>Food sources provide additional nutrients and fiber</li>
              </ul>
            </div>
          </section>

          {/* Good Food Sources */}
          <section className="mb-8">
            <h2 className="mb-4">Food Sources of Natural Folate</h2>
            <p className="mb-4">
              While folic acid is the supplemental form, natural folate is found in many foods:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Leafy greens:</strong> Spinach, kale, romaine lettuce</li>
              <li><strong>Legumes:</strong> Lentils, chickpeas, black beans</li>
              <li><strong>Asparagus:</strong> One of the richest natural sources</li>
              <li><strong>Citrus fruits:</strong> Oranges, grapefruit</li>
              <li><strong>Avocado:</strong> Good source of natural folate</li>
              <li><strong>Fortified foods:</strong> Bread, pasta, cereal, rice (contain added folic acid)</li>
            </ul>
          </section>

          {/* Safety */}
          <section className="mb-8">
            <h2 className="mb-4">Safety Considerations</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Generally safe:</strong> Folic acid is water-soluble with few direct adverse effects at recommended doses</li>
              <li><strong>Upper limit:</strong> 1,000 mcg (1 mg) per day from supplements and fortified foods for adults</li>
              <li><strong>B12 deficiency masking:</strong> High folic acid intake can mask the blood abnormalities of vitamin B12 deficiency while allowing neurological damage to progress</li>
              <li><strong>Medication interactions:</strong> Can interact with methotrexate, certain anti-seizure medications, and other drugs</li>
              <li><strong>Individual variation:</strong> Effects may vary based on MTHFR genotype and other factors</li>
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
              <Link href="/glossary/metabolism">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Metabolism
                </span>
              </Link>
              <Link href="/glossary/homocysteine">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Homocysteine
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
                  Institute of Medicine (US) Standing Committee on the Scientific Evaluation of Dietary Reference Intakes. <em>Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate, Vitamin B12, Pantothenic Acid, Biotin, and Choline.</em> Washington (DC): National Academies Press (US); 1998.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Pfeiffer CM, et al. Unmetabolized folic acid is detected in nearly all serum samples from US children, adolescents, and adults. <em>J Nutr.</em> 2015;145(3):520-31.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Bailey RL, et al. Why US children use dietary supplements. <em>Pediatr Res.</em> 2013;74(6):737-41.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NIH Office of Dietary Supplements - Folate Fact Sheet</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default FolicAcidPage;