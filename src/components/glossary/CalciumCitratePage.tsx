'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const CalciumCitratePage: React.FC = () => {
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
            <h1 className="mb-4">Calcium Citrate</h1>
            <p className="text-muted" data-text-style="lead">
              A highly absorbable form of calcium that can be taken with or without food
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Calcium citrate</strong> is a calcium salt of citric acid that contains approximately 21% elemental calcium by weight. It is a well-absorbed form of calcium that doesn't require stomach acid for absorption, making it suitable for a wider range of individuals compared to calcium carbonate.
              </p>
            </div>
            <p className="mb-4">
              Calcium citrate is often recommended for older adults, people taking acid-reducing medications, and those with digestive issues. While it contains less elemental calcium per gram than calcium carbonate, its superior absorption under various conditions often makes it the preferred choice for many healthcare practitioners.
            </p>
          </section>

          {/* Absorption Advantages */}
          <section className="mb-8">
            <h2 className="mb-4">Absorption and Bioavailability</h2>
            <p className="mb-4">
              Calcium citrate offers several absorption advantages:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Acid-independent absorption:</strong> Does not require stomach acid for dissolution and absorption, unlike calcium carbonate</li>
              <li><strong>Flexible timing:</strong> Can be taken with or without food, offering greater convenience</li>
              <li><strong>Consistent absorption:</strong> Absorption remains relatively stable across different conditions and populations</li>
              <li><strong>Well tolerated:</strong> Less likely to cause constipation compared to calcium carbonate</li>
              <li><strong>Good absorption rate:</strong> Approximately 20-35% of calcium is absorbed under most conditions</li>
              <li><strong>Elemental calcium content:</strong> 100 mg of calcium citrate provides 21 mg of elemental calcium</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Clinical advantage:</strong> For individuals with low stomach acid (common in older adults and those on acid-reducing medications), calcium citrate may be absorbed 2-3 times better than calcium carbonate.
              </p>
            </div>
          </section>

          {/* Who Benefits Most */}
          <section className="mb-8">
            <h2 className="mb-4">Who Benefits Most from Calcium Citrate</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Calcium Citrate is Particularly Beneficial For:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Older adults (50+):</strong> Stomach acid production decreases with age, making acid-independent absorption valuable</li>
                <li><strong>People taking acid-reducing drugs:</strong> Proton pump inhibitors (PPIs) like omeprazole, H2-receptor antagonists like ranitidine</li>
                <li><strong>Those with digestive conditions:</strong> Achlorhydria (low stomach acid), atrophic gastritis, inflammatory bowel disease</li>
                <li><strong>Gastric bypass patients:</strong> Altered anatomy and acid production affects calcium absorption</li>
                <li><strong>People prone to constipation:</strong> Calcium citrate is gentler on digestion</li>
                <li><strong>Those who prefer flexible dosing:</strong> Can be taken any time of day, not just with meals</li>
                <li><strong>Individuals with kidney stones:</strong> Citrate may help prevent certain types of kidney stones</li>
              </ul>
            </div>
          </section>

          {/* Comparison to Calcium Carbonate */}
          <section className="mb-8">
            <h2 className="mb-4">Calcium Citrate vs. Calcium Carbonate</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Characteristic</th>
                    <th className="border border-border p-3 text-left">Calcium Citrate</th>
                    <th className="border border-border p-3 text-left">Calcium Carbonate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Elemental calcium</td>
                    <td className="border border-border p-3">21%</td>
                    <td className="border border-border p-3">40%</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Stomach acid needed</td>
                    <td className="border border-border p-3">No, acid-independent</td>
                    <td className="border border-border p-3">Yes, requires acid</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Timing</td>
                    <td className="border border-border p-3">Anytime (with or without food)</td>
                    <td className="border border-border p-3">Must take with meals</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Absorption in older adults</td>
                    <td className="border border-border p-3">Maintained</td>
                    <td className="border border-border p-3">Often reduced</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Pill size</td>
                    <td className="border border-border p-3">Larger for same calcium amount</td>
                    <td className="border border-border p-3">Smaller</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Cost</td>
                    <td className="border border-border p-3">Higher</td>
                    <td className="border border-border p-3">Lower</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Constipation</td>
                    <td className="border border-border p-3">Less likely</td>
                    <td className="border border-border p-3">More common</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Kidney stone benefit</td>
                    <td className="border border-border p-3">Citrate may help prevent stones</td>
                    <td className="border border-border p-3">No additional benefit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Kidney Stone Prevention */}
          <section className="mb-8">
            <h2 className="mb-4">Additional Benefit: Kidney Stone Prevention</h2>
            <p className="mb-4">
              The citrate component of calcium citrate provides an additional potential benefit:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Urinary citrate:</strong> Citrate in urine binds to calcium and helps prevent calcium oxalate and calcium phosphate crystal formation</li>
              <li><strong>Alkalinizes urine:</strong> Increases urine pH, which can help prevent certain types of kidney stones</li>
              <li><strong>Dual benefit:</strong> Provides needed calcium while potentially reducing stone risk (though dietary calcium intake generally doesn't increase stone risk and may actually reduce it)</li>
              <li><strong>Medical use:</strong> Potassium citrate is specifically prescribed for kidney stone prevention; calcium citrate provides a similar but milder effect</li>
            </ul>
          </section>

          {/* Dosing and Timing */}
          <section className="mb-8">
            <h2 className="mb-4">Dosing and Timing</h2>
            <p className="mb-4">
              Optimal use of calcium citrate:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Flexible timing:</strong> Can be taken any time of day, with or without food</li>
              <li><strong>Divide doses:</strong> For best absorption, divide daily calcium into doses of 500 mg or less of elemental calcium</li>
              <li><strong>Space from medications:</strong> Take 2-4 hours apart from thyroid medications, certain antibiotics, and bisphosphonates</li>
              <li><strong>Consider magnesium:</strong> Some formulations combine calcium citrate with magnesium for balanced mineral intake</li>
            </ul>
            <p className="mb-4">
              <strong>Example:</strong> To get 1,000 mg of elemental calcium from calcium citrate, you would need approximately 4,750 mg of calcium citrate, typically taken as multiple pills divided throughout the day.
            </p>
          </section>

          {/* Recommended Intake */}
          <section className="mb-8">
            <h2 className="mb-4">Recommended Calcium Intake</h2>
            <p className="mb-4">
              Daily calcium recommendations (total from food and supplements):
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Adults 19-50:</strong> 1,000 mg/day</li>
              <li><strong>Women 51+:</strong> 1,200 mg/day</li>
              <li><strong>Men 51-70:</strong> 1,000 mg/day</li>
              <li><strong>Men 71+:</strong> 1,200 mg/day</li>
              <li><strong>Pregnant/Lactating:</strong> 1,000-1,300 mg/day (depending on age)</li>
            </ul>
            <p className="mb-4">
              The tolerable upper intake level (UL) is 2,500 mg/day for adults up to age 50, and 2,000 mg/day for those 51 and older. Most experts recommend getting calcium primarily from food sources when possible.
            </p>
          </section>

          {/* Side Effects */}
          <section className="mb-8">
            <h2 className="mb-4">Side Effects and Considerations</h2>
            <p className="mb-4">
              Calcium citrate is generally well-tolerated:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Minimal side effects:</strong> Better tolerated than calcium carbonate for most people</li>
              <li><strong>Less constipation:</strong> Lower incidence compared to calcium carbonate</li>
              <li><strong>Possible gas/bloating:</strong> Can occur but less common than with carbonate</li>
              <li><strong>Larger pills:</strong> Due to lower elemental calcium content, more pills needed to achieve same dose</li>
              <li><strong>Higher cost:</strong> Typically more expensive than calcium carbonate</li>
              <li><strong>Drug interactions:</strong> Can interfere with absorption of certain medications; proper spacing is important</li>
            </ul>
          </section>

          {/* Common Uses */}
          <section className="mb-8">
            <h2 className="mb-4">Common Clinical Uses</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Osteoporosis prevention/treatment:</strong> Especially in older adults or those with absorption issues</li>
              <li><strong>Calcium deficiency:</strong> Correcting inadequate dietary calcium intake</li>
              <li><strong>Post-menopausal bone support:</strong> Combined with vitamin D for bone health</li>
              <li><strong>Bariatric surgery patients:</strong> Supporting calcium needs after gastric bypass or sleeve gastrectomy</li>
              <li><strong>Kidney stone prevention:</strong> In individuals prone to calcium oxalate or uric acid stones</li>
            </ul>
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
                  Wright MJ, et al. Calcium citrate is better tolerated than calcium carbonate in older adults. <em>J Am Geriatr Soc.</em>2005;53(9):1576-7.
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

export default CalciumCitratePage;
