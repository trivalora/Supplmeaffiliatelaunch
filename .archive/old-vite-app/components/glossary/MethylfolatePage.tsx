'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const MethylfolatePage: React.FC = () => {
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
            <h1 className="mb-4">Methylfolate</h1>
            <p className="text-muted" data-text-style="lead">
              The active, bioavailable form of folate (vitamin B9) that doesn't require conversion
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Methylfolate</strong> (also called 5-methyltetrahydrofolate, 5-MTHF, or L-methylfolate) is the naturally occurring, biologically active form of folate (vitamin B9). Unlike synthetic folic acid, methylfolate is immediately usable by the body and does not require enzymatic conversion.
              </p>
            </div>
            <p className="mb-4">
              Methylfolate is the predominant form of folate found naturally in foods and is the form that circulates in the blood. It plays crucial roles in DNA synthesis, cell division, amino acid metabolism, and the production of neurotransmitters.
            </p>
          </section>

          {/* Why It Matters */}
          <section className="mb-8">
            <h2 className="mb-4">Why Methylfolate Matters</h2>
            <p className="mb-4">
              The distinction between methylfolate and folic acid is particularly important for several reasons:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>MTHFR gene variants:</strong> Approximately 40-60% of the population carries genetic variants in the MTHFR enzyme that reduce their ability to convert folic acid to methylfolate. For these individuals, methylfolate supplementation bypasses this genetic limitation</li>
              <li><strong>Direct bioavailability:</strong> Methylfolate doesn't require the multi-step conversion process that folic acid does, making it immediately available for biological processes</li>
              <li><strong>No accumulation risk:</strong> Unlike folic acid, which can accumulate in the body as unmetabolized folic acid (UMFA), methylfolate is processed and cleared normally</li>
              <li><strong>Better for certain conditions:</strong> May be more effective for depression, pregnancy support, and cardiovascular health in individuals with MTHFR variants</li>
            </ul>
          </section>

          {/* MTHFR Gene Variants */}
          <section className="mb-8">
            <h2 className="mb-4">MTHFR Gene Variants</h2>
            <p className="mb-4">
              The MTHFR (methylenetetrahydrofolate reductase) enzyme is responsible for converting dietary folate and synthetic folic acid into the active methylfolate form. Genetic variants in the MTHFR gene are common:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>C677T variant:</strong> The most common variant; individuals homozygous (two copies) for this variant have approximately 70% reduced MTHFR enzyme activity</li>
              <li><strong>A1298C variant:</strong> Less severe reduction in enzyme activity, but still clinically significant in some individuals</li>
              <li><strong>Compound heterozygotes:</strong> People with one copy of each variant may also experience reduced folate metabolism</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Clinical relevance:</strong> For individuals with MTHFR variants, methylfolate supplementation may be preferable to folic acid for achieving optimal folate status and supporting health outcomes.
              </p>
            </div>
          </section>

          {/* Comparison to Folic Acid */}
          <section className="mb-8">
            <h2 className="mb-4">Methylfolate vs. Folic Acid</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Characteristic</th>
                    <th className="border border-border p-3 text-left">Methylfolate</th>
                    <th className="border border-border p-3 text-left">Folic Acid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Source</td>
                    <td className="border border-border p-3">Natural form, found in foods</td>
                    <td className="border border-border p-3">Synthetic, used in fortification & supplements</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Bioavailability</td>
                    <td className="border border-border p-3">Immediate, no conversion needed</td>
                    <td className="border border-border p-3">Requires 4-step enzymatic conversion</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">MTHFR variants</td>
                    <td className="border border-border p-3">Effective regardless of genotype</td>
                    <td className="border border-border p-3">Reduced efficacy with MTHFR variants</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Accumulation</td>
                    <td className="border border-border p-3">Minimal risk</td>
                    <td className="border border-border p-3">Can accumulate as unmetabolized folic acid</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Cost</td>
                    <td className="border border-border p-3">Higher</td>
                    <td className="border border-border p-3">Lower</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Stability</td>
                    <td className="border border-border p-3">Less stable than folic acid</td>
                    <td className="border border-border p-3">Very stable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Clinical Applications */}
          <section className="mb-8">
            <h2 className="mb-4">Clinical Applications</h2>
            <p className="mb-4">
              Methylfolate supplementation is used for various health purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Pregnancy:</strong> Supporting fetal development and reducing neural tube defect risk, particularly in women with MTHFR variants</li>
              <li><strong>Depression:</strong> Adjunctive treatment for major depressive disorder, especially in individuals with inadequate response to antidepressants or MTHFR variants</li>
              <li><strong>Cardiovascular health:</strong> Helping to reduce homocysteine levels, which may support heart health</li>
              <li><strong>Cognitive function:</strong> Supporting brain health and potentially reducing cognitive decline risk</li>
              <li><strong>General folate needs:</strong> As a superior alternative to folic acid in multivitamins and B-complex supplements</li>
            </ul>
          </section>

          {/* Dosage */}
          <section className="mb-8">
            <h2 className="mb-4">Dosage Considerations</h2>
            <p className="mb-4">
              Common methylfolate supplementation doses include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>General supplementation:</strong> 400-800 mcg (0.4-0.8 mg) daily, equivalent to typical multivitamin amounts</li>
              <li><strong>Pregnancy:</strong> 600-800 mcg daily, as recommended for all pregnant women</li>
              <li><strong>Therapeutic uses:</strong> 1-15 mg daily under medical supervision for conditions like depression or elevated homocysteine</li>
            </ul>
            <p className="mb-4">
              The recommended dietary allowance (RDA) for folate is 400 mcg of dietary folate equivalents (DFE) for adults, with 600 mcg DFE recommended during pregnancy.
            </p>
          </section>

          {/* Common Forms */}
          <section className="mb-8">
            <h2 className="mb-4">Common Supplement Forms</h2>
            <p className="mb-4">
              Methylfolate is available in supplements under several names:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>L-methylfolate calcium (Metafolin®):</strong> Calcium salt form, very stable and well-studied</li>
              <li><strong>L-5-MTHF:</strong> Generic name for the active isomer</li>
              <li><strong>Levomefolic acid:</strong> Another name for L-methylfolate</li>
              <li><strong>6(S)-5-methyltetrahydrofolate:</strong> Technical chemical name</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Quality consideration:</strong> Look for supplements containing the "L" or "6S" isomer, which is the naturally occurring and biologically active form, rather than mixed isomers.
              </p>
            </div>
          </section>

          {/* Safety */}
          <section className="mb-8">
            <h2 className="mb-4">Safety and Side Effects</h2>
            <p className="mb-4">
              Methylfolate is generally well-tolerated with minimal side effects:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Generally safe:</strong> Few reported side effects at recommended doses</li>
              <li><strong>Overmethylation concerns:</strong> Very high doses may theoretically cause overmethylation symptoms (anxiety, insomnia) in sensitive individuals, though this is rare</li>
              <li><strong>Interactions:</strong> May interact with certain medications including methotrexate and some anticonvulsants</li>
              <li><strong>Masking B12 deficiency:</strong> Like folic acid, high-dose folate can mask neurological symptoms of vitamin B12 deficiency</li>
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
            </div>
          </section>

          {/* References */}
          <section className="mb-8">
            <h3 className="mb-4">Scientific References</h3>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Scaglione F, Panzavolta G. Folate, folic acid and 5-methyltetrahydrofolate are not the same thing. <em>Xenobiotica.</em>2014;44(5):480-8.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Pietrzik K, Bailey L, Shane B. Folic acid and L-5-methyltetrahydrofolate: comparison of clinical pharmacokinetics and pharmacodynamics. <em>Clin Pharmacokinet.</em>2010;49(8):535-48.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Papakostas GI, et al. L-methylfolate as adjunctive therapy for SSRI-resistant major depression: results of two randomized, double-blind, parallel-sequential trials. <em>Am J Psychiatry.</em>2012;169(12):1267-74.
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
                rel="nofollow noreferrer"
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

export default MethylfolatePage;
