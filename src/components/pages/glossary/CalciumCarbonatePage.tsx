'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CalciumCarbonatePage() {
  return (
    <GlossaryTemplate
      term="Calcium Carbonate"
      abbreviation="CaCO₃"
      definition="An inorganic salt containing approximately 40% elemental calcium by weight—the highest percentage among commonly available calcium supplements. It is the primary ingredient in limestone, chalk, and antacid tablets like Tums."
      detailedExplanation="Calcium carbonate is one of the most widely used forms of calcium in dietary supplements and fortified foods due to its low cost, high calcium content, and dual function as both a calcium source and antacid. However, its absorption is highly dependent on stomach acid, which affects its suitability for certain individuals."
      expandedExplanation={
        <>
          <h2 className="text-2xl font-serif text-primary mb-4">Absorption and Bioavailability</h2>
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
          <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-6">
            <p className="text-sm">
              <strong>Important:</strong> Individuals taking proton pump inhibitors (PPIs), H2-receptor antagonists, or who have conditions affecting stomach acid production (like atrophic gastritis) may absorb calcium carbonate poorly and should consider calcium citrate instead.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Optimal Timing</h2>
          <p className="mb-4">
            Timing recommendations for calcium carbonate supplementation:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>With meals:</strong> Take with food to maximize stomach acid production and improve dissolution</li>
            <li><strong>Split doses:</strong> Divide total daily dose into portions of 500 mg or less to optimize absorption</li>
            <li><strong>Avoid interaction times:</strong> Take separately from iron supplements, thyroid medications, certain antibiotics, and bisphosphonates (usually 2-4 hours apart)</li>
            <li><strong>Evening dose:</strong> May be beneficial for bone health as bone resorption is highest at night</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Common Uses</h2>
          <p className="mb-4">
            Calcium carbonate serves multiple purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Bone health:</strong> Prevention and treatment of osteoporosis, especially in postmenopausal women</li>
            <li><strong>Dietary supplementation:</strong> Meeting daily calcium requirements when dietary intake is insufficient</li>
            <li><strong>Antacid use:</strong> Relief of heartburn, acid indigestion, and sour stomach</li>
            <li><strong>Phosphate binding:</strong> In kidney disease patients to reduce phosphate absorption</li>
            <li><strong>Food fortification:</strong> Added to orange juice, cereals, and other fortified foods</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Calcium Carbonate vs. Calcium Citrate</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-gray-300 p-3 text-left">Characteristic</th>
                  <th className="border border-gray-300 p-3 text-left">Calcium Carbonate</th>
                  <th className="border border-gray-300 p-3 text-left">Calcium Citrate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Elemental calcium content</td>
                  <td className="border border-gray-300 p-3">40%</td>
                  <td className="border border-gray-300 p-3">21%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Requires stomach acid</td>
                  <td className="border border-gray-300 p-3">Yes</td>
                  <td className="border border-gray-300 p-3">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Best taken with food</td>
                  <td className="border border-gray-300 p-3">Yes (required)</td>
                  <td className="border border-gray-300 p-3">Optional</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Cost</td>
                  <td className="border border-gray-300 p-3">Lower</td>
                  <td className="border border-gray-300 p-3">Higher</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Tablet size</td>
                  <td className="border border-gray-300 p-3">Smaller (more compact)</td>
                  <td className="border border-gray-300 p-3">Larger (lower density)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">GI side effects</td>
                  <td className="border border-gray-300 p-3">More common (constipation, gas)</td>
                  <td className="border border-gray-300 p-3">Less common</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Best for</td>
                  <td className="border border-gray-300 p-3">Most people with normal stomach acid</td>
                  <td className="border border-gray-300 p-3">Older adults, those on acid reducers, IBS/IBD patients</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Potential Side Effects</h2>
          <p className="mb-4">
            Common side effects of calcium carbonate supplementation:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Constipation:</strong> Most common side effect, especially at higher doses</li>
            <li><strong>Gas and bloating:</strong> Due to carbon dioxide release when acid reacts with carbonate</li>
            <li><strong>Kidney stones:</strong> Rare, but risk may increase with excessive supplementation (above 2,000-2,500 mg/day)</li>
            <li><strong>Hypercalcemia:</strong> Elevated blood calcium levels with excessive intake, especially when combined with vitamin D</li>
            <li><strong>Drug interactions:</strong> May interfere with absorption of various medications</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Who Should Use It</h2>
          <p className="mb-4">
            Calcium carbonate is most appropriate for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Adults under 65 with normal stomach acid production</li>
            <li>Individuals seeking the most cost-effective calcium supplement</li>
            <li>Those who can take supplements with meals consistently</li>
            <li>People who prefer smaller tablets (due to higher calcium density)</li>
            <li>Those needing occasional antacid relief along with calcium supplementation</li>
          </ul>
          <p className="mb-6">
            <strong>Not recommended for:</strong> Individuals with low stomach acid, those taking PPIs or H2 blockers long-term, people with history of kidney stones, or anyone who cannot take supplements with meals.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">Recommended Dosages</h2>
          <p className="mb-4">
            Standard supplementation guidelines:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Optimal single dose:</strong> 500 mg of elemental calcium or less (approximately 1,250 mg of calcium carbonate)</li>
            <li><strong>Daily maximum:</strong> 2,000-2,500 mg elemental calcium from all sources (diet + supplements) for most adults</li>
            <li><strong>Typical supplementation:</strong> 500-1,000 mg elemental calcium daily in divided doses</li>
            <li><strong>With vitamin D:</strong> Often combined with 400-1,000 IU vitamin D3 for enhanced absorption and bone health</li>
          </ul>
          <div className="p-4 bg-tertiary/20 border-l-4 border-tertiary rounded-r mb-6">
            <p className="text-sm">
              <strong>Note:</strong> Total calcium intake (food + supplements) should not routinely exceed 2,000 mg daily unless directed by a healthcare provider, as excessive intake may increase cardiovascular and kidney stone risks.
            </p>
          </div>
        </>
      }
      relatedTerms={[
        { term: 'Absorption', path: '/glossary/absorption' },
        { term: 'Bioavailability', path: '/glossary/bioavailability' },
        { term: 'Bone Density', path: '/glossary/bonedensity' },
        { term: 'Macromineral', path: '/glossary/macromineral' },
      ]}
      currentPage="calciumcarbonate"
    />
  );
}
