'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function MagnesiumOxidePage() {
  return (
    <GlossaryTemplate
      term="Magnesium Oxide"
      abbreviation="MgO"
      definition="An inorganic compound consisting of magnesium and oxygen. Despite being one of the most commonly used forms of magnesium in dietary supplements due to its low cost and high elemental magnesium content, it has relatively poor bioavailability compared to other magnesium forms."
      detailedExplanation="Magnesium oxide is frequently found in multivitamins and standalone magnesium supplements, often chosen by manufacturers because it contains approximately 60% elemental magnesium by weight—the highest percentage among common magnesium forms. However, this high elemental content does not translate to high absorption in the body."
      expandedExplanation={
        <>
          <h2 className="text-2xl font-serif text-primary mb-4">Absorption and Bioavailability</h2>
          <p className="mb-4">
            Magnesium oxide has significant limitations in terms of absorption:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Low bioavailability:</strong> Only about 4% of magnesium from magnesium oxide is absorbed by the body, compared to 30-40% for better-absorbed forms like magnesium citrate or glycinate</li>
            <li><strong>Rapid transit:</strong> Much of the magnesium oxide passes through the digestive tract without being absorbed</li>
            <li><strong>Laxative effect:</strong> The unabsorbed magnesium draws water into the intestines, creating an osmotic laxative effect</li>
            <li><strong>High elemental content doesn't equal efficacy:</strong> While 100 mg of magnesium oxide provides about 60 mg of elemental magnesium, only 2-3 mg may actually be absorbed</li>
          </ul>
          <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-6">
            <p className="text-sm">
              <strong>Important:</strong> The poor absorption of magnesium oxide means that despite containing more elemental magnesium per gram, it may deliver less actual magnesium to the body than better-absorbed forms at equivalent or even lower doses.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Common Uses</h2>
          <p className="mb-4">
            Despite its poor bioavailability for magnesium supplementation, magnesium oxide has specific applications:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Constipation relief:</strong> The laxative effect makes it useful as a short-term treatment for constipation (typically 500-1000 mg doses)</li>
            <li><strong>Antacid use:</strong> Can neutralize stomach acid due to its alkaline properties (marketed as "milk of magnesia" when in liquid form)</li>
            <li><strong>Cost-effective filler:</strong> Used in multivitamins and supplements primarily due to low cost, though this practice is increasingly questioned</li>
            <li><strong>Bowel preparation:</strong> Sometimes used medically to cleanse the bowel before certain procedures</li>
          </ul>
          <p className="mb-6">
            For general magnesium supplementation to support health or correct deficiency, better-absorbed forms like magnesium citrate, glycinate, or malate are preferred by most healthcare practitioners.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">Why It Remains Common in Supplements</h2>
          <p className="mb-4">
            Despite its poor bioavailability, magnesium oxide remains prevalent in supplements for several reasons:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Low cost:</strong> Significantly cheaper to manufacture than better-absorbed forms</li>
            <li><strong>Small pill size:</strong> High elemental magnesium content means smaller pills can claim higher magnesium amounts on labels</li>
            <li><strong>Marketing advantage:</strong> Labels can show high magnesium amounts, which may appeal to consumers comparing supplements</li>
            <li><strong>Regulatory compliance:</strong> Meets label claims for magnesium content, even if bioavailability is poor</li>
            <li><strong>Lack of consumer awareness:</strong> Many consumers don't understand the difference between elemental content and actual absorption</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Comparison to Better-Absorbed Forms</h2>
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
          <p className="mb-6">
            When comparing supplements, consider the <em>absorbable</em> magnesium rather than just the total elemental magnesium on the label. For example, 200 mg of magnesium citrate may deliver more usable magnesium than 400 mg of magnesium oxide.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">Side Effects and Considerations</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Diarrhea and loose stools:</strong> Very common due to osmotic laxative effect</li>
            <li><strong>Poor efficacy for deficiency:</strong> Not ideal for correcting true magnesium deficiency due to low absorption</li>
            <li><strong>Gastrointestinal discomfort:</strong> May cause cramping or urgency</li>
            <li><strong>Misleading dosing:</strong> High label amounts don't reflect actual magnesium delivered to the body</li>
          </ul>
        </>
      }
      relatedTerms={[
        { term: 'Bioavailability', path: '/glossary/bioavailability' },
        { term: 'Absorption', path: '/glossary/absorption' },
        { term: 'Magnesium Citrate', path: '/glossary/magnesiumcitrate' },
        { term: 'Macromineral', path: '/glossary/macromineral' },
      ]}
      currentPage="magnesiumoxide"
    />
  );
}
