import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export const MagnesiumOxidePage: React.FC = () => {
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
            <h1 className="mb-4">Magnesium Oxide</h1>
            <p className="text-muted" data-text-style="lead">
              A poorly absorbed but commonly used form of magnesium in supplements
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Magnesium oxide</strong> (MgO) is an inorganic compound consisting of magnesium and oxygen. Despite being one of the most commonly used forms of magnesium in dietary supplements due to its low cost and high elemental magnesium content, it has relatively poor bioavailability compared to other magnesium forms.
              </p>
            </div>
            <p className="mb-4">
              Magnesium oxide is frequently found in multivitamins and standalone magnesium supplements, often chosen by manufacturers because it contains approximately 60% elemental magnesium by weight—the highest percentage among common magnesium forms. However, this high elemental content does not translate to high absorption in the body.
            </p>
          </section>

          {/* Absorption & Bioavailability */}
          <section className="mb-8">
            <h2 className="mb-4">Absorption and Bioavailability</h2>
            <p className="mb-4">
              Magnesium oxide has significant limitations in terms of absorption:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Low bioavailability:</strong> Only about 4% of magnesium from magnesium oxide is absorbed by the body, compared to 30-40% for better-absorbed forms like magnesium citrate or glycinate</li>
              <li><strong>Rapid transit:</strong> Much of the magnesium oxide passes through the digestive tract without being absorbed</li>
              <li><strong>Laxative effect:</strong> The unabsorbed magnesium draws water into the intestines, creating an osmotic laxative effect</li>
              <li><strong>High elemental content doesn't equal efficacy:</strong> While 100 mg of magnesium oxide provides about 60 mg of elemental magnesium, only 2-3 mg may actually be absorbed</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Important:</strong> The poor absorption of magnesium oxide means that despite containing more elemental magnesium per gram, it may deliver less actual magnesium to the body than better-absorbed forms at equivalent or even lower doses.
              </p>
            </div>
          </section>

          {/* Common Uses */}
          <section className="mb-8">
            <h2 className="mb-4">Common Uses</h2>
            <p className="mb-4">
              Despite its poor bioavailability for magnesium supplementation, magnesium oxide has specific applications:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Constipation relief:</strong> The laxative effect makes it useful as a short-term treatment for constipation (typically 500-1000 mg doses)</li>
              <li><strong>Antacid use:</strong> Can neutralize stomach acid due to its alkaline properties (marketed as "milk of magnesia" when in liquid form)</li>
              <li><strong>Cost-effective filler:</strong> Used in multivitamins and supplements primarily due to low cost, though this practice is increasingly questioned</li>
              <li><strong>Bowel preparation:</strong> Sometimes used medically to cleanse the bowel before certain procedures</li>
            </ul>
            <p className="mb-4">
              For general magnesium supplementation to support health or correct deficiency, better-absorbed forms like magnesium citrate, glycinate, or malate are preferred by most healthcare practitioners.
            </p>
          </section>

          {/* Why It's Still Common */}
          <section className="mb-8">
            <h2 className="mb-4">Why It Remains Common in Supplements</h2>
            <p className="mb-4">
              Despite its poor bioavailability, magnesium oxide remains prevalent in supplements for several reasons:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Low cost:</strong> Significantly cheaper to manufacture than better-absorbed forms</li>
              <li><strong>Small pill size:</strong> High elemental magnesium content means smaller pills can claim higher magnesium amounts on labels</li>
              <li><strong>Marketing advantage:</strong> Labels can show high magnesium amounts, which may appeal to consumers comparing supplements</li>
              <li><strong>Regulatory compliance:</strong> Meets label claims for magnesium content, even if bioavailability is poor</li>
              <li><strong>Lack of consumer awareness:</strong> Many consumers don't understand the difference between elemental content and actual absorption</li>
            </ul>
          </section>

          {/* Comparison to Better Forms */}
          <section className="mb-8">
            <h2 className="mb-4">Comparison to Better-Absorbed Forms</h2>
            <p className="mb-4">
              Research has consistently shown superior absorption with other magnesium forms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Magnesium citrate:</strong> Approximately 25-30% absorption rate—about 6-7 times better absorbed than oxide</li>
              <li><strong>Magnesium glycinate:</strong> Similar or slightly better absorption than citrate, with minimal laxative effect</li>
              <li><strong>Magnesium malate:</strong> Well absorbed and may provide additional energy support</li>
              <li><strong>Magnesium threonate:</strong> Designed for brain penetration, though more expensive</li>
              <li><strong>Magnesium chloride:</strong> Good absorption but unpleasant taste limits oral use</li>
            </ul>
            <p className="mb-4">
              When comparing supplements, consider the <em>absorbable</em> magnesium rather than just the total elemental magnesium on the label. For example, 200 mg of magnesium citrate may deliver more usable magnesium than 400 mg of magnesium oxide.
            </p>
          </section>

          {/* Recommendations */}
          <section className="mb-8">
            <h2 className="mb-4">Recommendations</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">For General Magnesium Supplementation:</h3>
              <p className="mb-2">Choose better-absorbed forms like:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Magnesium citrate (good balance of cost and absorption)</li>
                <li>Magnesium glycinate (gentlest on digestion)</li>
                <li>Magnesium malate (may support energy)</li>
              </ul>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Magnesium Oxide May Be Appropriate For:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Short-term constipation relief</li>
                <li>Occasional use as an antacid</li>
                <li>Situations where laxative effect is desired</li>
              </ul>
            </div>
          </section>

          {/* Side Effects */}
          <section className="mb-8">
            <h2 className="mb-4">Side Effects and Considerations</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Diarrhea and loose stools:</strong> Very common due to osmotic laxative effect</li>
              <li><strong>Poor efficacy for deficiency:</strong> Not ideal for correcting true magnesium deficiency due to low absorption</li>
              <li><strong>Gastrointestinal discomfort:</strong> May cause cramping or urgency</li>
              <li><strong>Misleading dosing:</strong> High label amounts don't reflect actual magnesium delivered to the body</li>
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
              <Link href="/glossary/absorption">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Absorption
                </span>
              </Link>
              <Link href="/glossary/macromineral">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Macromineral
                </span>
              </Link>
              <Link href="/glossary/electrolytes">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Electrolytes
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
                  Lindberg JS, et al. Magnesium bioavailability from magnesium citrate and magnesium oxide. <em>J Am Coll Nutr.</em> 1990;9(1):48-55.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Firoz M, Graber M. Bioavailability of US commercial magnesium preparations. <em>Magnes Res.</em> 2001;14(4):257-62.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Walker AF, et al. Mg citrate found more bioavailable than other Mg preparations in a randomised, double-blind study. <em>Magnes Res.</em> 2003;16(3):183-91.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NIH Office of Dietary Supplements - Magnesium Fact Sheet</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MagnesiumOxidePage;