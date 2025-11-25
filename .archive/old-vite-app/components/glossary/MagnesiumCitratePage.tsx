'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const MagnesiumCitratePage: React.FC = () => {
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
            <h1 className="mb-4">Magnesium Citrate</h1>
            <p className="text-muted" data-text-style="lead">
              A highly bioavailable form of magnesium commonly used in supplements
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Magnesium citrate</strong> is a magnesium salt of citric acid that combines elemental magnesium with citrate molecules. It is one of the most commonly used and well-absorbed forms of magnesium in dietary supplements.
              </p>
            </div>
            <p className="mb-4">
              The citrate form offers several advantages over other magnesium compounds, particularly in terms of absorption and tolerability. The citrate component itself may also provide additional benefits for certain health applications.
            </p>
          </section>

          {/* Absorption & Bioavailability */}
          <section className="mb-8">
            <h2 className="mb-4">Absorption and Bioavailability</h2>
            <p className="mb-4">
              Magnesium citrate demonstrates superior bioavailability compared to many other magnesium forms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>High absorption:</strong> Absorbed significantly better than magnesium oxide, one of the most common but poorly absorbed forms</li>
              <li><strong>Gentle on digestion:</strong> Less likely to cause digestive upset at moderate doses compared to some other forms</li>
              <li><strong>Dose-dependent effects:</strong> Higher doses may have a mild laxative effect, which can be beneficial or undesirable depending on the situation</li>
              <li><strong>Water soluble:</strong> Dissolves readily in water, which may enhance absorption in the digestive tract</li>
            </ul>
            <p className="mb-4">
              The elemental magnesium content in magnesium citrate is approximately 16%, meaning 100 mg of magnesium citrate provides about 16 mg of elemental magnesium. This is an important consideration when comparing dosages across different supplement forms.
            </p>
          </section>

          {/* Common Uses */}
          <section className="mb-8">
            <h2 className="mb-4">Common Uses</h2>
            <p className="mb-4">
              Magnesium citrate is used for various health purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Magnesium supplementation:</strong> To correct deficiency or maintain adequate magnesium status</li>
              <li><strong>Constipation relief:</strong> At higher doses (typically 200-400 mg elemental magnesium), can promote bowel movements</li>
              <li><strong>Muscle and nerve function:</strong> Supporting normal neuromuscular function</li>
              <li><strong>Bone health:</strong> As part of comprehensive bone support alongside calcium and vitamin D</li>
              <li><strong>Cardiovascular support:</strong> May help maintain healthy blood pressure in some individuals</li>
              <li><strong>Sleep support:</strong> Some people use magnesium citrate to support relaxation and sleep quality</li>
            </ul>
          </section>

          {/* Dosage Considerations */}
          <section className="mb-8">
            <h2 className="mb-4">Dosage Considerations</h2>
            <p className="mb-4">
              Typical supplemental doses of magnesium citrate range from 100-400 mg of elemental magnesium per day, often divided into two doses. The recommended dietary allowance (RDA) for magnesium in adults is 310-420 mg per day depending on age and sex.
            </p>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Always check supplement labels for elemental magnesium content rather than total magnesium citrate weight. The laxative effect typically begins at doses above 300-400 mg elemental magnesium, though individual tolerance varies.
              </p>
            </div>
          </section>

          {/* Comparison to Other Forms */}
          <section className="mb-8">
            <h2 className="mb-4">Comparison to Other Magnesium Forms</h2>
            <p className="mb-4">
              Different magnesium forms have distinct characteristics:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Magnesium citrate vs. magnesium oxide:</strong> Citrate is absorbed significantly better than oxide; oxide has higher elemental magnesium content (~60%) but much lower bioavailability</li>
              <li><strong>Magnesium citrate vs. magnesium glycinate:</strong> Glycinate may be gentler on digestion and less likely to cause laxative effects, making it preferred by some for higher-dose supplementation</li>
              <li><strong>Magnesium citrate vs. magnesium chloride:</strong> Both are well absorbed, but chloride has a very bitter taste and is less commonly used orally</li>
              <li><strong>Magnesium citrate vs. magnesium threonate:</strong> Threonate may have superior brain penetration for cognitive support, but citrate is more cost-effective for general magnesium supplementation</li>
            </ul>
          </section>

          {/* Safety & Side Effects */}
          <section className="mb-8">
            <h2 className="mb-4">Safety and Side Effects</h2>
            <p className="mb-4">
              Magnesium citrate is generally well-tolerated, but some considerations include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Laxative effect:</strong> Higher doses may cause loose stools or diarrhea</li>
              <li><strong>Drug interactions:</strong> May interfere with absorption of certain antibiotics (tetracyclines, fluoroquinolones) and bisphosphonates</li>
              <li><strong>Kidney function:</strong> Individuals with impaired kidney function should use caution and consult healthcare providers, as magnesium is primarily excreted by the kidneys</li>
              <li><strong>Timing:</strong> Taking with food may reduce laxative effects and improve tolerability</li>
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
                  Walker AF, et al. Mg citrate found more bioavailable than other Mg preparations in a randomised, double-blind study. <em>Magnes Res.</em>2003;16(3):183-91.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Lindberg JS, et al. Magnesium bioavailability from magnesium citrate and magnesium oxide. <em>J Am Coll Nutr.</em>1990;9(1):48-55.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Institute of Medicine (US) Standing Committee on the Scientific Evaluation of Dietary Reference Intakes. <em>Dietary Reference Intakes for Calcium, Phosphorus, Magnesium, Vitamin D, and Fluoride.</em> Washington (DC): National Academies Press (US); 1997.
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
                rel="nofollow noreferrer"
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

export default MagnesiumCitratePage;
