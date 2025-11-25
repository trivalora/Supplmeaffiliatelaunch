'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const CalciumCarbonatePage: React.FC = () => {
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
            <h1 className="mb-4">Calcium Carbonate</h1>
            <p className="text-muted" data-text-style="lead">
              A common, cost-effective form of calcium that requires stomach acid for absorption
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Calcium carbonate</strong> (CaCO₃) is an inorganic salt containing approximately 40% elemental calcium by weight—the highest percentage among commonly available calcium supplements. It is the primary ingredient in limestone, chalk, and antacid tablets like Tums.
              </p>
            </div>
            <p className="mb-4">
              Calcium carbonate is one of the most widely used forms of calcium in dietary supplements and fortified foods due to its low cost, high calcium content, and dual function as both a calcium source and antacid. However, its absorption is highly dependent on stomach acid, which affects its suitability for certain individuals.
            </p>
          </section>

          {/* Absorption Characteristics */}
          <section className="mb-8">
            <h2 className="mb-4">Absorption and Bioavailability</h2>
            <p className="mb-4">
              Calcium carbonate has specific absorption requirements:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Stomach acid dependent:</strong> Requires adequate stomach acid (hydrochloric acid) to dissolve and release calcium for absorption</li>
              <li><strong>Food-dependent absorption:</strong> Should be taken with meals to maximize stomach acid production and improve absorption</li>
              <li><strong>Variable absorption rate:</strong> Approximately 20-40% of calcium is absorbed under optimal conditions, but absorption decreases with age and in people with low stomach acid</li>
              <li><strong>Dose-limited absorption:</strong> Absorption efficiency decreases as single doses increase; optimal absorption occurs with doses of 500 mg or less</li>
              <li><strong>High elemental content:</strong> 100 mg of calcium carbonate provides 40 mg of elemental calcium</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Important:</strong> Individuals taking proton pump inhibitors (PPIs), H2-receptor antagonists, or who have conditions affecting stomach acid production (like atrophic gastritis) may absorb calcium carbonate poorly and should consider calcium citrate instead.
              </p>
            </div>
          </section>

          {/* When to Take It */}
          <section className="mb-8">
            <h2 className="mb-4">Optimal Timing and Dosing</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Best Practices for Calcium Carbonate:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Take with meals:</strong> Food stimulates stomach acid production, enhancing calcium dissolution and absorption</li>
                <li><strong>Divide doses:</strong> Split daily calcium into doses of 500 mg or less for optimal absorption</li>
                <li><strong>Avoid high-fiber meals:</strong> Excessive fiber can bind calcium and reduce absorption</li>
                <li><strong>Don't take with iron supplements:</strong> Calcium can interfere with iron absorption</li>
                <li><strong>Space from certain medications:</strong> Can interfere with thyroid medications, antibiotics, and bisphosphonates</li>
              </ul>
            </div>
          </section>

          {/* Common Uses */}
          <section className="mb-8">
            <h2 className="mb-4">Common Uses</h2>
            <p className="mb-4">
              Calcium carbonate serves multiple purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Calcium supplementation:</strong> To meet daily calcium requirements or address deficiency</li>
              <li><strong>Antacid:</strong> Neutralizes stomach acid for heartburn and indigestion relief (brands like Tums, Rolaids)</li>
              <li><strong>Bone health:</strong> Supporting bone density and reducing osteoporosis risk when combined with vitamin D</li>
              <li><strong>Food fortification:</strong> Added to orange juice, plant milks, and cereals</li>
              <li><strong>Phosphate binder:</strong> Used in kidney disease to control phosphate levels</li>
            </ul>
          </section>

          {/* Comparison to Calcium Citrate */}
          <section className="mb-8">
            <h2 className="mb-4">Calcium Carbonate vs. Calcium Citrate</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Characteristic</th>
                    <th className="border border-border p-3 text-left">Calcium Carbonate</th>
                    <th className="border border-border p-3 text-left">Calcium Citrate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Elemental calcium</td>
                    <td className="border border-border p-3">40% (highest)</td>
                    <td className="border border-border p-3">21%</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Stomach acid needed</td>
                    <td className="border border-border p-3">Yes, requires acid</td>
                    <td className="border border-border p-3">No, acid-independent</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Take with food</td>
                    <td className="border border-border p-3">Yes, must take with meals</td>
                    <td className="border border-border p-3">Anytime (with or without food)</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Pill size</td>
                    <td className="border border-border p-3">Smaller for same calcium amount</td>
                    <td className="border border-border p-3">Larger pills needed</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Cost</td>
                    <td className="border border-border p-3">Lower</td>
                    <td className="border border-border p-3">Higher</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Constipation risk</td>
                    <td className="border border-border p-3">Higher</td>
                    <td className="border border-border p-3">Lower</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Best for</td>
                    <td className="border border-border p-3">People with normal stomach acid, budget-conscious</td>
                    <td className="border border-border p-3">Older adults, those on acid-reducing drugs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Side Effects */}
          <section className="mb-8">
            <h2 className="mb-4">Side Effects and Considerations</h2>
            <p className="mb-4">
              Common side effects and important considerations for calcium carbonate:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Constipation:</strong> Most common side effect, particularly at higher doses</li>
              <li><strong>Gas and bloating:</strong> The carbonate component can produce gas</li>
              <li><strong>Kidney stone risk:</strong> Very high doses may increase risk in susceptible individuals, though dietary calcium generally doesn't increase risk</li>
              <li><strong>Milk-alkali syndrome:</strong> Rare condition from excessive calcium carbonate intake with dairy products</li>
              <li><strong>Drug interactions:</strong> Can reduce absorption of thyroid hormones, certain antibiotics (tetracyclines, fluoroquinolones), and bisphosphonates</li>
              <li><strong>Reduced absorption with age:</strong> Older adults often have lower stomach acid and may not absorb calcium carbonate as effectively</li>
            </ul>
          </section>

          {/* Who Should Use It */}
          <section className="mb-8">
            <h2 className="mb-4">Who Should Use Calcium Carbonate</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Calcium Carbonate is a Good Choice For:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>People with normal stomach acid production</li>
                <li>Those who can take supplements with meals</li>
                <li>Budget-conscious individuals seeking cost-effective calcium</li>
                <li>People wanting smaller pill sizes</li>
                <li>Those also seeking antacid effects</li>
              </ul>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Consider Calcium Citrate Instead If:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>You're over 50 (reduced stomach acid common)</li>
                <li>You take acid-reducing medications (PPIs, H2 blockers)</li>
                <li>You have digestive issues affecting acid production</li>
                <li>You prefer flexibility in timing (any time of day)</li>
                <li>You experience constipation with calcium carbonate</li>
              </ul>
            </div>
          </section>

          {/* Dosage */}
          <section className="mb-8">
            <h2 className="mb-4">Recommended Dosages</h2>
            <p className="mb-4">
              Calcium needs vary by age and life stage:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Adults 19-50:</strong> 1,000 mg/day total calcium (diet + supplements)</li>
              <li><strong>Women 51+:</strong> 1,200 mg/day</li>
              <li><strong>Men 51-70:</strong> 1,000 mg/day</li>
              <li><strong>Men 71+:</strong> 1,200 mg/day</li>
              <li><strong>Pregnant/Lactating:</strong> 1,000-1,300 mg/day depending on age</li>
            </ul>
            <p className="mb-4">
              The tolerable upper intake level (UL) is 2,500 mg/day for adults up to age 50, and 2,000 mg/day for those 51 and older. Most people should aim to get calcium primarily from food sources, using supplements only as needed to meet requirements.
            </p>
          </section>

          {/* Related Terms */}
          <section className="mb-8">
            <h2 className="mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/glossary/absorption">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Absorption
                </span>
              </Link>
              <Link href="/glossary/bioavailability">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Bioavailability
                </span>
              </Link>
              <Link href="/glossary/bone-density">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Bone Density
                </span>
              </Link>
              <Link href="/glossary/macromineral">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Macromineral
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
                  Heaney RP, et al. Absorbability and cost effectiveness in calcium supplementation. <em>J Am Coll Nutr.</em>2001;20(3):239-46.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Straub DA. Calcium supplementation in clinical practice: a review of forms, doses, and indications. <em>Nutr Clin Pract.</em>2007;22(3):286-96.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Institute of Medicine (US) Committee to Review Dietary Reference Intakes for Vitamin D and Calcium. <em>Dietary Reference Intakes for Calcium and Vitamin D.</em> Washington (DC): National Academies Press (US); 2011.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NIH Office of Dietary Supplements - Calcium Fact Sheet</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default CalciumCarbonatePage;
