'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const FOSPage: React.FC = () => {
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
            <h1 className="mb-4">FOS (Fructooligosaccharides)</h1>
            <p className="text-muted" data-text-style="lead">
              Prebiotic fibers that selectively feed beneficial gut bacteria
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Fructooligosaccharides (FOS)</strong>, also called oligofructose, are short-chain carbohydrates composed of fructose molecules linked together. They are a type of prebiotic fiber that resists digestion in the upper gastrointestinal tract and selectively stimulates the growth and activity of beneficial gut bacteria, particularly Bifidobacteria.
              </p>
            </div>
            <p className="mb-4">
              FOS are naturally present in many plants including onions, garlic, asparagus, bananas, and chicory root. They are also commercially produced and added to foods and supplements as a prebiotic ingredient.
            </p>
          </section>

          {/* Chemical Structure */}
          <section className="mb-8">
            <h2 className="mb-4">Chemical Structure and Classification</h2>
            <p className="mb-4">
              FOS are classified based on their chain length:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Short-chain FOS:</strong> Typically contain 2-4 fructose units (also called oligofructose)</li>
              <li><strong>Degree of polymerization (DP):</strong> Usually 2-10 fructose units linked by β(2→1) glycosidic bonds</li>
              <li><strong>Terminal glucose:</strong> Most FOS chains have a terminal glucose molecule attached</li>
              <li><strong>Relationship to inulin:</strong> FOS are essentially shorter versions of inulin; inulin can be enzymatically broken down to produce FOS</li>
            </ul>
            <p className="mb-4">
              The short chain length of FOS (compared to long-chain inulin) affects their fermentation characteristics, with FOS being fermented more rapidly in the proximal colon.
            </p>
          </section>

          {/* Natural Sources */}
          <section className="mb-8">
            <h2 className="mb-4">Natural Food Sources</h2>
            <p className="mb-4">
              FOS occur naturally in numerous plant foods:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Chicory root:</strong> One of the richest sources (15-20% by weight)</li>
              <li><strong>Jerusalem artichoke:</strong> 16-20% FOS content</li>
              <li><strong>Onions:</strong> 2-6% FOS</li>
              <li><strong>Garlic:</strong> 9-16% FOS</li>
              <li><strong>Leeks:</strong> 3-10% FOS</li>
              <li><strong>Asparagus:</strong> 2-3% FOS</li>
              <li><strong>Bananas:</strong> 0.3-0.7% FOS (higher in unripe bananas)</li>
              <li><strong>Wheat:</strong> 1-4% FOS</li>
              <li><strong>Barley:</strong> 0.5-1.5% FOS</li>
            </ul>
          </section>

          {/* Mechanism of Action */}
          <section className="mb-8">
            <h2 className="mb-4">How FOS Works as a Prebiotic</h2>
            <p className="mb-4">
              FOS exert their prebiotic effects through specific mechanisms:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong>Resistance to digestion:</strong> Human digestive enzymes cannot break down the β(2→1) glycosidic bonds in FOS, so they pass intact to the colon</li>
              <li><strong>Selective fermentation:</strong> Beneficial bacteria (especially Bifidobacteria) possess enzymes to ferment FOS, while many harmful bacteria do not</li>
              <li><strong>SCFA production:</strong> Bacterial fermentation of FOS produces short-chain fatty acids (acetate, propionate, butyrate)</li>
              <li><strong>pH reduction:</strong> SCFA production lowers colonic pH, creating an inhospitable environment for pathogenic bacteria</li>
              <li><strong>Bacterial proliferation:</strong> Bifidobacteria and Lactobacilli populations increase, potentially crowding out harmful species</li>
            </ol>
          </section>

          {/* Health Benefits */}
          <section className="mb-8">
            <h2 className="mb-4">Evidence-Based Health Benefits</h2>
            <p className="mb-4">
              Research supports several benefits of FOS supplementation:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Increased beneficial bacteria:</strong> Consistent increases in Bifidobacteria populations (50-300% increases common)</li>
              <li><strong>Improved bowel function:</strong> May help with constipation by increasing stool frequency and softness</li>
              <li><strong>Calcium absorption:</strong> Some evidence suggests FOS may enhance calcium and magnesium absorption</li>
              <li><strong>Blood sugar regulation:</strong> May help reduce postprandial glucose spikes</li>
              <li><strong>Lipid metabolism:</strong> Limited evidence for modest reductions in triglycerides and LDL cholesterol</li>
              <li><strong>Immune function:</strong> May support immune health through gut microbiome modulation</li>
              <li><strong>Satiety:</strong> May increase feelings of fullness and reduce calorie intake</li>
            </ul>
          </section>

          {/* Dosage */}
          <section className="mb-8">
            <h2 className="mb-4">Typical Dosages</h2>
            <p className="mb-4">
              Effective and well-tolerated FOS doses include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>General prebiotic effect:</strong> 2.5-5 grams per day</li>
              <li><strong>Moderate prebiotic effect:</strong> 5-10 grams per day</li>
              <li><strong>Strong prebiotic effect:</strong> 10-15 grams per day</li>
              <li><strong>Tolerance threshold:</strong> Most people tolerate up to 15-20 grams daily when gradually introduced</li>
              <li><strong>Digestive sensitivity:</strong> Those with IBS or FODMAP sensitivity may need to start with 1-2 grams daily</li>
            </ul>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Important:</strong> Start with low doses (2-3 grams daily) and gradually increase over 1-2 weeks to minimize digestive discomfort. Taking FOS with meals may improve tolerance.
              </p>
            </div>
          </section>

          {/* Side Effects and FODMAP */}
          <section className="mb-8">
            <h2 className="mb-4">Side Effects and FODMAP Considerations</h2>
            <p className="mb-4">
              FOS are generally safe but can cause digestive symptoms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Gas and bloating:</strong> Most common side effects, especially at higher doses or rapid introduction</li>
              <li><strong>Abdominal discomfort:</strong> May occur during adaptation period</li>
              <li><strong>Loose stools or diarrhea:</strong> Possible at high doses</li>
              <li><strong>FODMAP content:</strong> FOS are classified as high-FODMAP fibers and should be avoided during elimination phase of low-FODMAP diet</li>
              <li><strong>IBS sensitivity:</strong> Individuals with IBS may be particularly sensitive and should introduce slowly if at all</li>
              <li><strong>SIBO concerns:</strong> Some practitioners avoid FOS in SIBO due to potential bacterial fermentation in small intestine</li>
            </ul>
            <div className="p-4 bg-accent/30 rounded-lg border border-accent mb-4">
              <p className="text-sm">
                <strong>For IBS or FODMAP-sensitive individuals:</strong> FOS should be avoided during strict low-FODMAP elimination phases. After symptom resolution, FOS can be carefully reintroduced in small amounts (1-2 grams) to assess individual tolerance.
              </p>
            </div>
          </section>

          {/* FOS vs. Other Prebiotics */}
          <section className="mb-8">
            <h2 className="mb-4">FOS vs. Other Prebiotics</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Prebiotic</th>
                    <th className="border border-border p-3 text-left">Chain Length</th>
                    <th className="border border-border p-3 text-left">Fermentation Site</th>
                    <th className="border border-border p-3 text-left">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">FOS</td>
                    <td className="border border-border p-3">Short (2-10 units)</td>
                    <td className="border border-border p-3">Proximal colon (rapid)</td>
                    <td className="border border-border p-3">Moderate</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Inulin</td>
                    <td className="border border-border p-3">Long (10-60 units)</td>
                    <td className="border border-border p-3">Throughout colon (slower)</td>
                    <td className="border border-border p-3">Generally better</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">GOS</td>
                    <td className="border border-border p-3">Short (2-10 units)</td>
                    <td className="border border-border p-3">Proximal colon</td>
                    <td className="border border-border p-3">Variable</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">Resistant Starch</td>
                    <td className="border border-border p-3">Variable</td>
                    <td className="border border-border p-3">Distal colon</td>
                    <td className="border border-border p-3">Generally good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Commercial Sources */}
          <section className="mb-8">
            <h2 className="mb-4">Commercial Sources and Supplements</h2>
            <p className="mb-4">
              FOS are available from several commercial sources:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Pure FOS powder:</strong> Typically extracted from chicory root or synthesized from sucrose</li>
              <li><strong>Prebiotic supplements:</strong> Often combined with other prebiotics (inulin, GOS) or probiotics (forming synbiotics)</li>
              <li><strong>Fortified foods:</strong> Added to yogurt, protein bars, beverages, and other functional foods</li>
              <li><strong>Chicory root fiber:</strong> Natural source containing both FOS and inulin</li>
              <li><strong>Oligofructose-enriched inulin (OEI):</strong> Combination product with balanced fermentation properties</li>
            </ul>
          </section>

          {/* Related Terms */}
          <section className="mb-8">
            <h2 className="mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/glossary/inulin-type-fructans">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Inulin-Type Fructans
                </span>
              </Link>
              <Link href="/glossary/gos">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  GOS
                </span>
              </Link>
              <Link href="/glossary/scfa">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  SCFA
                </span>
              </Link>
              <Link href="/glossary/bifidobacterium">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Bifidobacterium
                </span>
              </Link>
              <Link href="/glossary/fodmap">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  FODMAP
                </span>
              </Link>
              <Link href="/glossary/gut-microbiome">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Gut Microbiome
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
                  Gibson GR, et al. Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics. <em>Nat Rev Gastroenterol Hepatol.</em>2017;14(8):491-502.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Roberfroid M, et al. Prebiotic effects: metabolic and health benefits. <em>Br J Nutr.</em>2010;104 Suppl 2:S1-63.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Kolida S, Gibson GR. Prebiotic capacity of inulin-type fructans. <em>J Nutr.</em>2007;137(11 Suppl):2503S-2506S.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5622781/"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NCBI PMC - ISAPP Consensus on Prebiotics</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default FOSPage;
