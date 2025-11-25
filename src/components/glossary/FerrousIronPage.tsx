import { GlossaryTemplate } from '../GlossaryTemplate';

export function FerrousIronPage() {
  return (
    <GlossaryTemplate
      term="Ferrous Iron"
      pronunciation="FEHR-us EYE-urn"
      partOfSpeech="noun (chemical form)"
      
      definition="Ferrous iron is the reduced form of iron (Fe²⁺), also known as ferrous iron or iron(II), which is the bioavailable form that can be directly absorbed by intestinal cells and is found in meat, some iron supplements, and results from ferric iron reduction in the gut."
      
      laypersonExplanation={
        <>
          <p>
            Ferrous iron is the "good form" of iron for supplements—it's the version your body can absorb more easily. When you see iron supplement labels listing "ferrous sulfate," "ferrous gluconate," or "ferrous fumarate," these all contain ferrous iron.
          </p>
          <p>
            Iron exists in two main forms: ferrous (Fe²⁺) and ferric (Fe³⁺). Ferrous iron is absorbed 2-3 times better than ferric iron, which is why most iron supplements use ferrous forms.
          </p>
        </>
      }
      
      expandedExplanation={
        <>
          <p>
            <strong>Chemical Properties:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Oxidation state:</span> +2 (has lost two electrons)</li>
            <li><span className="font-medium">Solubility:</span> More soluble in water than ferric iron at physiological pH</li>
            <li><span className="font-medium">Absorption:</span> Can be directly absorbed by enterocytes in the small intestine</li>
            <li><span className="font-medium">Stability:</span> Can oxidize to ferric form when exposed to air or stomach acid</li>
          </ul>
          <p>
            <strong>Common Ferrous Iron Supplements:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Ferrous sulfate:</span>20% elemental iron, most common and least expensive</li>
            <li><span className="font-medium">Ferrous gluconate:</span>12% elemental iron, often gentler on the stomach</li>
            <li><span className="font-medium">Ferrous fumarate:</span>33% elemental iron, most concentrated form</li>
            <li><span className="font-medium">Ferrous bisglycinate (chelated):</span> ~20% elemental iron, best absorbed and tolerated</li>
          </ul>
          <p>
            <strong>Absorption Mechanism:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Direct uptake:</span> Ferrous iron can be transported directly across intestinal cells via DMT1 (divalent metal transporter 1)</li>
            <li><span className="font-medium">No reduction needed:</span> Unlike ferric iron, doesn't require enzymatic reduction before absorption</li>
            <li><span className="font-medium">Absorption rate:</span>10-30% of supplemental ferrous iron is absorbed (varies by individual iron status)</li>
            <li><span className="font-medium">Enhanced by vitamin C:</span> Ascorbic acid keeps iron in ferrous state and increases absorption</li>
          </ul>
          <p>
            <strong>Bioavailability Comparison:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Ferrous iron:</span>10-30% absorption</li>
            <li><span className="font-medium">Ferric iron:</span>5-12% absorption (must be reduced to ferrous first)</li>
            <li><span className="font-medium">Heme iron (from meat):</span>15-35% absorption (different absorption pathway)</li>
          </ul>
          <p>
            <strong>Factors Affecting Absorption:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Enhancers:</span> Vitamin C, citric acid, amino acids, stomach acid</li>
            <li><span className="font-medium">Inhibitors:</span> Calcium, phytates (grains/legumes), polyphenols (tea/coffee), antacids</li>
            <li><span className="font-medium">Iron status:</span> Iron-deficient individuals absorb more efficiently</li>
            <li><span className="font-medium">Timing:</span> Best absorbed on empty stomach, but may cause GI upset</li>
          </ul>
          <p>
            <strong>Side Effects:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Gastrointestinal:</span> Nausea, constipation, dark stools (common with ferrous sulfate)</li>
            <li><span className="font-medium">Oxidative stress:</span> Unabsorbed ferrous iron can generate free radicals in the gut</li>
            <li><span className="font-medium">Tolerance varies:</span> Chelated forms (ferrous bisglycinate) generally better tolerated</li>
          </ul>
          <p>
            <strong>Clinical Use:</strong>
          </p>
          <ul className="list-disc" style={{ marginLeft: '2rem' }}>
            <li><span className="font-medium">Iron deficiency anemia:</span> Standard treatment is ferrous iron 100-200 mg elemental iron daily</li>
            <li><span className="font-medium">Prevention:</span> Lower doses (20-60 mg) used for pregnancy or deficiency prevention</li>
            <li><span className="font-medium">Dosing strategy:</span> Often given every other day to maximize absorption and minimize side effects</li>
          </ul>
          <p>
            When choosing an iron supplement, ferrous forms are generally preferred over ferric forms due to superior absorption. Among ferrous forms, ferrous bisglycinate (chelated iron) often provides the best balance of absorption and tolerability, though it costs more than ferrous sulfate.
          </p>
        </>
      }
      
      exampleSentences={[
        "Ferrous iron absorbs better than ferric iron because it doesn't require enzymatic reduction before intestinal uptake.",
        "Taking ferrous sulfate with vitamin C increases iron absorption by keeping the iron in its more absorbable ferrous state.",
        "The supplement contained 65 mg of elemental iron as ferrous fumarate, providing approximately 33% iron by weight."
      ]}
      
      currentPage="ferrousiron"

      
      relatedTerms={[
        { term: 'Bioavailability', page: 'bioavailability' },
        { term: 'Absorption', page: 'absorption' },
        { term: 'Anemia', page: 'anemia' },
        { term: 'Mineral', page: 'mineral' },
        { term: 'Chelated Minerals', page: 'chelated' }
      ]}
    />
  );
}