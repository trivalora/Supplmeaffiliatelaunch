'use client';

import { GlossaryTemplate } from '../GlossaryTemplate';

export function AnabolicResistancePage() {
  return (
    <GlossaryTemplate
      term="Anabolic Resistance"
      currentPage="anabolicresistance"
      definition="The age-related reduction in skeletal muscle's sensitivity to anabolic stimuli, particularly protein intake and resistance exercise, requiring greater protein doses to achieve the same muscle protein synthesis response seen in younger individuals."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">The Aging Muscle Problem</h3>
            <p className="mb-4">
              In young adults, consuming 20-25g of high-quality protein maximally stimulates muscle protein synthesis (MPS). However, older adults (typically 65+) require significantly more protein—approximately 35-40g per meal—to achieve the same anabolic response. This diminished sensitivity to protein's muscle-building effects is anabolic resistance.
            </p>
            <p className="mb-4">
              This phenomenon contributes to sarcopenia (age-related muscle loss), which affects 10-25% of adults under 70 and up to 50% of those over 80. Progressive muscle loss leads to reduced strength, increased fall risk, metabolic dysfunction, and loss of independence.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Mechanisms Behind Resistance</h3>
            <p className="mb-4">
              Multiple factors contribute to anabolic resistance in aging:
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>mTOR Signaling Impairment</strong>: Reduced activation of mTORC1, the master regulator of protein synthesis</li>
                <li><strong>Amino Acid Sensing</strong>: Blunted cellular response to leucine and other branched-chain amino acids</li>
                <li><strong>Protein Digestion</strong>: Slower gastric emptying and reduced amino acid absorption efficiency</li>
                <li><strong>Splanchnic Sequestration</strong>: Greater amino acid extraction by gut and liver, reducing availability to muscle</li>
                <li><strong>Inflammation</strong>: Chronic low-grade inflammation (inflammaging) interfering with anabolic signaling</li>
                <li><strong>Insulin Resistance</strong>: Reduced insulin sensitivity impairing amino acid transport into muscle cells</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Overcoming Anabolic Resistance</h3>
            <p className="mb-4">
              <strong>Higher Protein Doses:</strong> Research consistently shows older adults need 35-40g of protein per meal (vs. 20-25g for young adults) to maximally stimulate MPS. This translates to daily protein intakes of 1.2-1.6 g/kg body weight, higher than the general RDA of 0.8 g/kg.
            </p>
            <p className="mb-4">
              <strong>Leucine Optimization:</strong> Leucine is the primary amino acid triggering mTOR activation. Older adults may benefit from protein sources rich in leucine (whey protein, meat, eggs) or leucine supplementation (2.5-3g per meal). Some evidence suggests this can partially overcome the blunted response.
            </p>
            <p className="mb-4">
              <strong>Resistance Exercise:</strong> Resistance training enhances muscle's sensitivity to protein for 24-48 hours post-exercise. Combined with adequate protein, this creates a powerful stimulus overcoming anabolic resistance. Training frequency of 2-3x/week appears most beneficial for older adults.
            </p>
            <p className="mb-4">
              <strong>Protein Timing:</strong> Distributing protein evenly across meals (rather than skewing toward dinner) may optimize 24-hour MPS. Some research suggests protein before bed may also be beneficial for overnight muscle maintenance.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Practical Implications</h3>
            <p className="mb-4">
              For older adults seeking to maintain muscle mass and function:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Aim for 35-40g protein per meal, 3-4 times daily</li>
              <li>Prioritize high-quality, leucine-rich sources (whey, meat, eggs, dairy)</li>
              <li>Combine protein intake with resistance training 2-3x weekly</li>
              <li>Consider supplemental leucine (2.5-3g) or essential amino acids if appetite limits protein intake</li>
              <li>Distribute protein throughout the day rather than concentrating in one meal</li>
            </ul>
            <p className="mb-4">
              While anabolic resistance is a real challenge, it's not insurmountable. With appropriate nutrition and exercise strategies, older adults can maintain and even build muscle mass, preserving strength, metabolic health, and quality of life.
            </p>
          </section>
        </>
      }
      relatedTerms={['bioavailability', 'absorption', 'leucine']}
    />
  );
}
