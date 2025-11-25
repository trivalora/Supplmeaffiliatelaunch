'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function MethylfolatePage() {
  return (
    <GlossaryTemplate
      term="Methylfolate"
      abbreviation="5-MTHF"
      currentPage="methylfolate"
      definition="The active, bioavailable form of folate (5-methyltetrahydrofolate) that requires no metabolic conversion and can be used directly by cells for methylation and DNA synthesis."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Methylfolate Matters</h3>
            <p className="mb-4">
              Traditional folic acid supplements must undergo a multi-step conversion process to become biologically active 5-MTHF. This conversion depends on the MTHFR enzyme, which is less efficient in 40-60% of the population due to genetic variants. Methylfolate bypasses this limitation entirely, providing folate in its final, active form.
            </p>
            <p className="mb-4">
              For individuals with MTHFR gene variants (particularly C677T or A1298C), methylfolate may be significantly more effective than folic acid for maintaining healthy folate status and supporting methylation-dependent processes.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Comparison: Methylfolate vs. Folic Acid</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-secondary/30">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-secondary/30 p-3 text-left">Characteristic</th>
                    <th className="border border-secondary/30 p-3 text-left">Methylfolate (5-MTHF)</th>
                    <th className="border border-secondary/30 p-3 text-left">Folic Acid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-secondary/30 p-3 font-medium">Bioavailability</td>
                    <td className="border border-secondary/30 p-3">Immediately active, no conversion needed</td>
                    <td className="border border-secondary/30 p-3">Requires 4-step enzymatic conversion</td>
                  </tr>
                  <tr className="bg-secondary/5">
                    <td className="border border-secondary/30 p-3 font-medium">MTHFR Variants</td>
                    <td className="border border-secondary/30 p-3">Effective regardless of genetics</td>
                    <td className="border border-secondary/30 p-3">Reduced effectiveness with variants</td>
                  </tr>
                  <tr>
                    <td className="border border-secondary/30 p-3 font-medium">UMFA Risk</td>
                    <td className="border border-secondary/30 p-3">None - already active form</td>
                    <td className="border border-secondary/30 p-3">Possible with high doses or slow conversion</td>
                  </tr>
                  <tr className="bg-secondary/5">
                    <td className="border border-secondary/30 p-3 font-medium">Cost</td>
                    <td className="border border-secondary/30 p-3">Higher (specialized production)</td>
                    <td className="border border-secondary/30 p-3">Lower (synthetic, mass-produced)</td>
                  </tr>
                  <tr>
                    <td className="border border-secondary/30 p-3 font-medium">Stability</td>
                    <td className="border border-secondary/30 p-3">Less stable, sensitive to light/heat</td>
                    <td className="border border-secondary/30 p-3">Very stable in supplements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Clinical Applications</h3>
            <p className="mb-4">
              Research supports methylfolate use for several conditions where methylation and folate status are critical:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Depression</strong>: Studies show 15 mg daily may enhance antidepressant response, particularly in individuals with MTHFR variants</li>
              <li><strong>Cardiovascular Health</strong>: Helps convert homocysteine to methionine, supporting healthy cardiovascular function</li>
              <li><strong>Pregnancy</strong>: Ensures adequate active folate for neural tube development without relying on MTHFR enzyme function</li>
              <li><strong>Neurological Health</strong>: Supports neurotransmitter synthesis and myelin maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Dosing and Forms</h3>
            <p className="mb-4">
              Methylfolate supplements typically contain 400-15,000 mcg (0.4-15 mg), with therapeutic doses for mood support often at 7.5-15 mg daily. Common forms include:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Quatrefolic®</strong>: Glucosamine salt of 5-MTHF, highly stable</li>
              <li><strong>Metafolin®</strong>: Calcium salt of 5-MTHF, well-studied</li>
              <li><strong>Generic 5-MTHF</strong>: Various calcium or other salts</li>
            </ul>
            <p className="mb-4">
              For general health maintenance, 400-800 mcg is typically sufficient. Higher doses should be used under healthcare guidance, as excessive methylation may cause side effects in some individuals.
            </p>
          </section>
        </>
      }
      relatedTerms={['folicacid', 'bioavailability', 'mthfr', 'methylcobalamin']}
    />
  );
}
