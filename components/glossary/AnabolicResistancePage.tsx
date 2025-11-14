import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export const AnabolicResistancePage: React.FC = () => {
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
            <h1 className="mb-4">Anabolic Resistance</h1>
            <p className="text-muted" data-text-style="lead">
              Age-related reduction in muscle's ability to respond to anabolic stimuli like protein and exercise
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Anabolic resistance</strong> is the reduced sensitivity of skeletal muscle to anabolic stimuli such as dietary protein (especially amino acids) and resistance exercise. This phenomenon is primarily associated with aging but can also occur in other conditions involving muscle loss, inflammation, or inactivity.
              </p>
            </div>
            <p className="mb-4">
              In younger individuals, consuming 20-25 grams of high-quality protein is typically sufficient to maximally stimulate muscle protein synthesis (MPS). However, older adults often require 35-40 grams or more of protein per meal to achieve the same anabolic response—a hallmark manifestation of anabolic resistance.
            </p>
          </section>

          {/* Mechanisms */}
          <section className="mb-8">
            <h2 className="mb-4">Mechanisms of Anabolic Resistance</h2>
            <p className="mb-4">
              Several factors contribute to anabolic resistance in aging muscle:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Reduced mTOR signaling:</strong> The mTOR pathway, which is critical for initiating muscle protein synthesis, becomes less responsive to amino acids and mechanical stimulation</li>
              <li><strong>Impaired amino acid delivery:</strong> Age-related changes in blood flow and capillary density reduce amino acid delivery to muscle tissue</li>
              <li><strong>Inflammation:</strong> Chronic low-grade inflammation (inflammaging) interferes with anabolic signaling pathways</li>
              <li><strong>Insulin resistance:</strong> Reduced insulin sensitivity impairs both amino acid uptake and anabolic signaling</li>
              <li><strong>Mitochondrial dysfunction:</strong> Declining mitochondrial quality and quantity affect muscle's energy-producing capacity</li>
              <li><strong>Splanchnic sequestration:</strong> Greater uptake of dietary amino acids by the gut and liver, leaving less available for muscle</li>
              <li><strong>Reduced satellite cell activity:</strong> Decreased muscle stem cell function impairs muscle repair and growth</li>
            </ul>
          </section>

          {/* Clinical Significance */}
          <section className="mb-8">
            <h2 className="mb-4">Clinical Significance</h2>
            <p className="mb-4">
              Anabolic resistance has important health implications:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Sarcopenia:</strong> Age-related muscle loss, affecting ~5-13% of people aged 60-70 and 11-50% of those over 80</li>
              <li><strong>Functional decline:</strong> Loss of muscle mass and strength reduces independence and quality of life</li>
              <li><strong>Increased fall risk:</strong> Muscle weakness contributes to balance problems and falls</li>
              <li><strong>Metabolic health:</strong> Muscle loss reduces metabolic rate and glucose disposal capacity</li>
              <li><strong>Hospitalization outcomes:</strong> Anabolic resistance can impair recovery from illness, surgery, or injury</li>
              <li><strong>Mortality risk:</strong> Sarcopenia is associated with increased all-cause mortality</li>
            </ul>
          </section>

          {/* Protein Requirements */}
          <section className="mb-8">
            <h2 className="mb-4">Protein Requirements to Overcome Anabolic Resistance</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Per-Meal Protein Targets:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Young adults (18-40 years):</strong> ~0.25-0.30 g protein per kg body weight per meal (typically 20-25g total)</li>
                <li><strong>Older adults (65+ years):</strong> ~0.40-0.60 g protein per kg body weight per meal (typically 35-40g total)</li>
                <li><strong>Post-exercise:</strong> May need even higher amounts in older adults to maximize MPS</li>
              </ul>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Daily Protein Targets:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Young adults:</strong> 1.2-1.6 g/kg/day for active individuals</li>
                <li><strong>Older adults:</strong> 1.2-2.0 g/kg/day to maintain muscle mass</li>
                <li><strong>During illness/recovery:</strong> May need up to 2.0-2.5 g/kg/day</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-4">
              <p className="text-sm">
                <strong>Example:</strong> A 70 kg (154 lb) older adult would need approximately 28-42 grams of protein per meal, spread across 3-4 meals daily, totaling 84-140 grams per day.
              </p>
            </div>
          </section>

          {/* Leucine and Protein Quality */}
          <section className="mb-8">
            <h2 className="mb-4">Role of Leucine and Protein Quality</h2>
            <p className="mb-4">
              The amino acid leucine plays a particularly important role in overcoming anabolic resistance:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Leucine threshold:</strong> ~2-3 grams of leucine per meal appears necessary to maximally stimulate MPS in older adults</li>
              <li><strong>High-quality proteins:</strong> Animal proteins (whey, meat, eggs, dairy) provide more leucine per gram than most plant proteins</li>
              <li><strong>Leucine-enriched foods:</strong> Whey protein (~11% leucine), dairy (~10%), eggs (~9%), meat (~8%)</li>
              <li><strong>Plant protein combinations:</strong> May need larger total amounts to achieve adequate leucine content</li>
              <li><strong>Free leucine supplementation:</strong> Adding 3-4 grams of leucine to lower-protein meals may enhance the anabolic response</li>
            </ul>
          </section>

          {/* Exercise Considerations */}
          <section className="mb-8">
            <h2 className="mb-4">Exercise and Anabolic Resistance</h2>
            <p className="mb-4">
              Resistance exercise remains one of the most powerful tools to combat anabolic resistance:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Sensitization effect:</strong> Resistance exercise temporarily restores muscle's sensitivity to protein feeding</li>
              <li><strong>Synergistic response:</strong> Combining exercise with protein intake produces greater MPS than either alone</li>
              <li><strong>Higher protein needs post-exercise:</strong> Older adults may need 40+ grams of protein post-workout for optimal recovery</li>
              <li><strong>Timing matters:</strong> Consuming protein within 2-3 hours post-exercise maximizes the anabolic window</li>
              <li><strong>Chronic adaptation:</strong> Regular resistance training over months can partially reverse anabolic resistance</li>
            </ul>
          </section>

          {/* Strategies to Counter Anabolic Resistance */}
          <section className="mb-8">
            <h2 className="mb-4">Strategies to Overcome Anabolic Resistance</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="mb-2">1. Optimize Protein Intake</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Increase per-meal protein to 35-40+ grams</li>
                  <li>Distribute protein evenly across 3-4 meals</li>
                  <li>Prioritize high-leucine protein sources</li>
                  <li>Consider protein supplementation between meals</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="mb-2">2. Resistance Training</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Engage in progressive resistance exercise 2-3 times weekly</li>
                  <li>Focus on major muscle groups</li>
                  <li>Maintain consistency over time</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="mb-2">3. Reduce Inflammation</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Anti-inflammatory diet rich in omega-3 fatty acids</li>
                  <li>Adequate sleep and stress management</li>
                  <li>Maintain healthy body weight</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="mb-2">4. Optimize Insulin Sensitivity</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Regular physical activity</li>
                  <li>Glycemic control</li>
                  <li>Maintain lean body mass</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="mb-2">5. Consider Supplementation</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Whey protein (high leucine content)</li>
                  <li>Creatine monohydrate (supports muscle function)</li>
                  <li>Vitamin D (if deficient, supports muscle function)</li>
                  <li>Omega-3 fatty acids (may reduce inflammation)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Beyond Aging */}
          <section className="mb-8">
            <h2 className="mb-4">Anabolic Resistance in Other Conditions</h2>
            <p className="mb-4">
              Anabolic resistance isn't limited to aging—it can occur in:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Immobilization:</strong> Bed rest or limb casting rapidly induces anabolic resistance</li>
              <li><strong>Critical illness:</strong> Hospitalized patients often show severe anabolic resistance</li>
              <li><strong>Obesity:</strong> May impair muscle protein synthesis responses</li>
              <li><strong>Type 2 diabetes:</strong> Insulin resistance contributes to anabolic resistance</li>
              <li><strong>Cancer cachexia:</strong> Tumor-induced muscle wasting involves severe anabolic resistance</li>
              <li><strong>Chronic kidney disease:</strong> Metabolic abnormalities impair muscle protein metabolism</li>
            </ul>
          </section>

          {/* Related Terms */}
          <section className="mb-8">
            <h2 className="mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/glossary/muscle-protein-synthesis">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Muscle Protein Synthesis
                </span>
              </Link>
              <Link href="/glossary/mtor">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  mTOR
                </span>
              </Link>
              <Link href="/glossary/leucine">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Leucine
                </span>
              </Link>
              <Link href="/glossary/protein">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Protein
                </span>
              </Link>
              <Link href="/glossary/essential-amino-acids">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Essential Amino Acids
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
                  Moore DR, et al. Protein ingestion to stimulate myofibrillar protein synthesis requires greater relative protein intakes in healthy older versus younger men. <em>J Gerontol A Biol Sci Med Sci.</em> 2015;70(1):57-62.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Burd NA, Gorissen SH, van Loon LJ. Anabolic resistance of muscle protein synthesis with aging. <em>Exerc Sport Sci Rev.</em> 2013;41(3):169-73.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Wall BT, Gorissen SH, Pennings B, et al. Aging is accompanied by a blunted muscle protein synthetic response to protein ingestion. <em>PLoS One.</em> 2015;10(11):e0140903.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NCBI PMC - Anabolic Resistance in Aging</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default AnabolicResistancePage;