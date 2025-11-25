'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CalciumCitratePage() {
  return (
    <GlossaryTemplate
      term="Calcium Citrate"
      definition="A calcium salt of citric acid that contains approximately 21% elemental calcium by weight. It is a well-absorbed form of calcium that doesn't require stomach acid for absorption, making it suitable for a wider range of individuals compared to calcium carbonate."
      detailedExplanation="Calcium citrate is often recommended for older adults, people taking acid-reducing medications, and those with digestive issues. While it contains less elemental calcium per gram than calcium carbonate, its superior absorption under various conditions often makes it the preferred choice for many healthcare practitioners."
      expandedExplanation={
        <>
          <h2 className="text-2xl font-serif text-primary mb-4">Absorption and Bioavailability</h2>
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
          <div className="p-4 bg-secondary/20 border-l-4 border-secondary rounded-r mb-6">
            <p className="text-sm">
              <strong>Clinical advantage:</strong> For individuals with low stomach acid (common in older adults and those on acid-reducing medications), calcium citrate may be absorbed 2-3 times better than calcium carbonate.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Who Benefits Most from Calcium Citrate</h2>
          <p className="mb-4">
            Calcium citrate is particularly beneficial for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Older adults (50+):</strong> Stomach acid production decreases with age, making acid-independent absorption valuable</li>
            <li><strong>People taking acid-reducing drugs:</strong> Proton pump inhibitors (PPIs) like omeprazole, H2-receptor antagonists like ranitidine</li>
            <li><strong>Those with digestive conditions:</strong> Achlorhydria (low stomach acid), atrophic gastritis, inflammatory bowel disease</li>
            <li><strong>Gastric bypass patients:</strong> Altered anatomy and acid production affects calcium absorption</li>
            <li><strong>People prone to constipation:</strong> Calcium citrate is gentler on digestion</li>
            <li><strong>Those who prefer flexible dosing:</strong> Can be taken any time of day, not just with meals</li>
            <li><strong>Individuals with kidney stones:</strong> Citrate may help prevent certain types of kidney stones</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Calcium Citrate vs. Calcium Carbonate</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-gray-300 p-3 text-left">Characteristic</th>
                  <th className="border border-gray-300 p-3 text-left">Calcium Citrate</th>
                  <th className="border border-gray-300 p-3 text-left">Calcium Carbonate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Elemental calcium</td>
                  <td className="border border-gray-300 p-3">21%</td>
                  <td className="border border-gray-300 p-3">40%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Stomach acid needed</td>
                  <td className="border border-gray-300 p-3">No, acid-independent</td>
                  <td className="border border-gray-300 p-3">Yes, requires acid</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Timing</td>
                  <td className="border border-gray-300 p-3">Anytime (with or without food)</td>
                  <td className="border border-gray-300 p-3">Must take with meals</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Absorption in older adults</td>
                  <td className="border border-gray-300 p-3">Maintained</td>
                  <td className="border border-gray-300 p-3">Often reduced</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Pill size</td>
                  <td className="border border-gray-300 p-3">Larger for same calcium amount</td>
                  <td className="border border-gray-300 p-3">Smaller</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Cost</td>
                  <td className="border border-gray-300 p-3">Higher</td>
                  <td className="border border-gray-300 p-3">Lower</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Constipation</td>
                  <td className="border border-gray-300 p-3">Less likely</td>
                  <td className="border border-gray-300 p-3">More common</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Kidney stone benefit</td>
                  <td className="border border-gray-300 p-3">Citrate may help prevent stones</td>
                  <td className="border border-gray-300 p-3">No additional benefit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Additional Benefit: Kidney Stone Prevention</h2>
          <p className="mb-4">
            The citrate component of calcium citrate provides an additional potential benefit:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Urinary citrate:</strong> Citrate in urine binds to calcium and helps prevent calcium oxalate and calcium phosphate crystal formation</li>
            <li><strong>Alkalinizes urine:</strong> Increases urine pH, which can help prevent certain types of kidney stones</li>
            <li><strong>Dual benefit:</strong> Provides needed calcium while potentially reducing stone risk (though dietary calcium intake generally doesn't increase stone risk and may actually reduce it)</li>
            <li><strong>Medical use:</strong> Potassium citrate is specifically prescribed for kidney stone prevention; calcium citrate provides a similar but milder effect</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mb-4">Dosing and Timing</h2>
          <p className="mb-4">
            Optimal use of calcium citrate:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Flexible timing:</strong> Can be taken any time of day, with or without food</li>
            <li><strong>Divide doses:</strong> For best absorption, divide daily calcium into doses of 500 mg or less of elemental calcium</li>
            <li><strong>Space from medications:</strong> Take 2-4 hours apart from thyroid medications, certain antibiotics, and bisphosphonates</li>
            <li><strong>Consider magnesium:</strong> Some formulations combine calcium citrate with magnesium for balanced mineral intake</li>
          </ul>
          <p className="mb-6">
            <strong>Example:</strong> To get 1,000 mg of elemental calcium from calcium citrate, you would need approximately 4,750 mg of calcium citrate, typically taken as multiple pills divided throughout the day.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">Recommended Calcium Intake</h2>
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
          <p className="mb-6">
            The tolerable upper intake level (UL) is 2,500 mg/day for adults up to age 50, and 2,000 mg/day for those 51 and older. Most experts recommend getting calcium primarily from food sources when possible.
          </p>

          <h2 className="text-2xl font-serif text-primary mb-4">Side Effects and Considerations</h2>
          <p className="mb-4">
            Calcium citrate is generally well-tolerated:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Minimal side effects:</strong> Better tolerated than calcium carbonate for most people</li>
            <li><strong>Less constipation:</strong> Lower incidence compared to calcium carbonate</li>
            <li><strong>Possible gas/bloating:</strong> Can occur but less common than with carbonate</li>
            <li><strong>Larger pills:</strong> Due to lower elemental calcium content, more pills needed to achieve same dose</li>
            <li><strong>Drug interactions:</strong> Similar to calcium carbonate, can interfere with absorption of certain medications</li>
            <li><strong>Hypercalcemia risk:</strong> Though rare, excessive supplementation can lead to elevated blood calcium levels</li>
          </ul>
        </>
      }
      relatedTerms={[
        { term: 'Absorption', path: '/glossary/absorption' },
        { term: 'Bioavailability', path: '/glossary/bioavailability' },
        { term: 'Calcium Carbonate', path: '/glossary/calciumcarbonate' },
        { term: 'Macromineral', path: '/glossary/macromineral' },
      ]}
      currentPage="calciumcitrate"
    />
  );
}
