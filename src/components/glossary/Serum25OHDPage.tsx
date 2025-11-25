import { GlossaryTemplate } from '../GlossaryTemplate';

export function Serum25OHDPage() {
  return (
      <GlossaryTemplate
        term="Serum 25-hydroxyvitamin D / 25(OH)D"
        definition="The major circulating form of vitamin D in the blood and the standard biomarker used to assess vitamin D status. It reflects both dietary intake and sunlight-induced production of vitamin D."
        content={
          <>
            <p className="content-text">
              Serum 25-hydroxyvitamin D, commonly abbreviated as 25(OH)D, is the best indicator of vitamin D status because it has a relatively long half-life (2-3 weeks) and reflects vitamin D from all sources: sun exposure, food, and supplements. Measuring 25(OH)D is the recommended way to determine whether someone has vitamin D deficiency, insufficiency, or adequate levels.
            </p>
            
            <h2 className="content-heading">Vitamin D Metabolism Overview</h2>
            <p className="content-text">
              Understanding 25(OH)D requires knowing vitamin D's metabolic pathway:
            </p>
            <ul className="glossary-list">
              <li><strong>Step 1: Vitamin D₃ production/intake</strong> — Skin produces cholecalciferol (D₃) from UV-B exposure, or obtained from diet/supplements (D₃ or D₂)</li>
              <li><strong>Step 2: First hydroxylation (liver)</strong> — Vitamin D is converted to 25-hydroxyvitamin D [25(OH)D] by 25-hydroxylase enzyme</li>
              <li><strong>Step 3: Second hydroxylation (kidneys)</strong> — 25(OH)D is converted to active form 1,25-dihydroxyvitamin D [1,25(OH)₂D / calcitriol] by 1α-hydroxylase</li>
              <li><strong>Active hormone</strong> — 1,25(OH)₂D binds to vitamin D receptors (VDR) to exert biological effects</li>
            </ul>
            
            <h2 className="content-heading">Why Measure 25(OH)D?</h2>
            <p className="content-text">
              25(OH)D is the preferred biomarker over the active form [1,25(OH)₂D] because:
            </p>
            <ul className="glossary-list">
              <li><strong>Long half-life</strong> — 2-3 weeks (vs. hours for active form), providing stable measurement of vitamin D status</li>
              <li><strong>Abundant in circulation</strong> — Concentrations 1000x higher than active form, easier to measure accurately</li>
              <li><strong>Reflects stores</strong> — Indicates total vitamin D availability from all sources</li>
              <li><strong>Precursor pool</strong> — The substrate for producing active vitamin D as needed</li>
              <li><strong>Not tightly regulated</strong> — Unlike 1,25(OH)₂D which is strictly regulated by parathyroid hormone and can appear normal even in deficiency</li>
            </ul>
            
            <h2 className="content-heading">Reference Ranges and Interpretation</h2>
            <p className="content-text">
              Measured in ng/mL (US) or nmol/L (international):
            </p>
            <p className="content-text">
              <strong>Conversion:</strong> 1 ng/mL = 2.5 nmol/L
            </p>
            <ul className="glossary-list">
              <li><strong>Deficiency</strong> — &lt;20 ng/mL (&lt;50 nmol/L)</li>
              <li><strong>Insufficiency</strong> — 20-29 ng/mL (50-74 nmol/L)</li>
              <li><strong>Sufficient</strong> — 30-100 ng/mL (75-250 nmol/L)</li>
              <li><strong>Optimal (debated)</strong> — Some experts recommend 40-60 ng/mL (100-150 nmol/L) for health benefits</li>
              <li><strong>Potentially excessive</strong> — &gt;100 ng/mL (&gt;250 nmol/L)</li>
              <li><strong>Toxic</strong> — &gt;150 ng/mL (&gt;375 nmol/L)</li>
            </ul>
            
            <p className="content-text">
              <strong>Note:</strong> Reference ranges remain somewhat controversial. The Institute of Medicine (IOM) considers ≥20 ng/mL sufficient for bone health, while the Endocrine Society recommends ≥30 ng/mL for optimal health.
            </p>
            
            <h2 className="content-heading">Health Implications by Level</h2>
            <p className="content-text">
              <strong>&lt;20 ng/mL (Deficiency):</strong>
            </p>
            <ul className="glossary-list">
              <li>Increased risk of rickets (children) or osteomalacia (adults)</li>
              <li>Impaired calcium absorption</li>
              <li>Secondary hyperparathyroidism</li>
              <li>Increased bone turnover and fracture risk</li>
              <li>Muscle weakness</li>
              <li>Possible increased infection risk</li>
            </ul>
            
            <p className="content-text">
              <strong>30-50 ng/mL (Generally considered adequate):</strong>
            </p>
            <ul className="glossary-list">
              <li>Optimal calcium absorption</li>
              <li>Normal parathyroid hormone levels</li>
              <li>Adequate bone health support</li>
              <li>Many experts consider this the target range</li>
            </ul>
            
            <h2 className="content-heading">Factors Affecting 25(OH)D Levels</h2>
            <p className="content-text">
              <strong>Factors that decrease levels:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Limited sun exposure</strong> — Indoor lifestyle, living at high latitudes, winter season</li>
              <li><strong>Skin pigmentation</strong> — Melanin reduces UV-B penetration; dark skin requires more sun exposure</li>
              <li><strong>Age</strong> — Elderly have reduced skin synthesis capacity</li>
              <li><strong>Obesity</strong> — Vitamin D sequestered in fat tissue, reducing bioavailability</li>
              <li><strong>Malabsorption</strong> — Celiac disease, Crohn's disease, cystic fibrosis impair absorption</li>
              <li><strong>Liver disease</strong> — Impaired 25-hydroxylation</li>
              <li><strong>Kidney disease</strong> — Reduced conversion to active form, but 25(OH)D may be normal or low</li>
              <li><strong>Certain medications</strong> — Anticonvulsants, glucocorticoids, antifungals increase metabolism</li>
            </ul>
            
            <p className="content-text">
              <strong>Factors that increase levels:</strong>
            </p>
            <ul className="glossary-list">
              <li>Regular sun exposure (15-30 minutes midday several times per week)</li>
              <li>Vitamin D supplementation</li>
              <li>Consumption of vitamin D-rich foods (fatty fish, fortified dairy)</li>
              <li>Weight loss (releases vitamin D from fat stores)</li>
            </ul>
            
            <h2 className="content-heading">Testing Recommendations</h2>
            <ul className="glossary-list">
              <li><strong>Who should be tested?</strong> — Those at risk for deficiency (limited sun exposure, dark skin, elderly, malabsorption, obesity), unexplained muscle weakness, bone disease</li>
              <li><strong>Test method</strong> — Immunoassay or liquid chromatography-mass spectrometry (LC-MS/MS; more accurate)</li>
              <li><strong>Fasting not required</strong> — Can be drawn any time</li>
              <li><strong>Frequency</strong> — Recheck 3-4 months after starting supplementation or changing dose</li>
              <li><strong>Seasonal variation</strong> — Levels typically higher in late summer/fall, lower in late winter/spring</li>
            </ul>
            
            <h2 className="content-heading">Supplementation Based on 25(OH)D Levels</h2>
            <p className="content-text">
              General guidelines for correcting deficiency:
            </p>
            <ul className="glossary-list">
              <li><strong>&lt;20 ng/mL</strong> — Often requires 2000-4000 IU/day or 50,000 IU weekly for 8-12 weeks, then maintenance</li>
              <li><strong>20-29 ng/mL</strong> — 1000-2000 IU/day typically raises to sufficient range</li>
              <li><strong>30-50 ng/mL</strong> — Maintenance dose 800-2000 IU/day depending on individual factors</li>
              <li><strong>Rule of thumb</strong> — 100 IU/day raises 25(OH)D by approximately 1 ng/mL (individual variation exists)</li>
              <li><strong>Obesity</strong> — Higher doses needed (2-3x) due to sequestration in fat tissue</li>
            </ul>
            
            <h2 className="content-heading">Vitamin D₂ vs. D₃</h2>
            <ul className="glossary-list">
              <li><strong>D₃ (cholecalciferol)</strong> — Animal source or skin synthesis; more effective at raising 25(OH)D</li>
              <li><strong>D₂ (ergocalciferol)</strong> — Plant/fungal source; shorter half-life, less potent</li>
              <li><strong>Recommendation</strong> — D₃ generally preferred for supplementation</li>
              <li><strong>Testing</strong> — Most assays measure total 25(OH)D (both D₂ and D₃ combined)</li>
            </ul>
            
            <h2 className="content-heading">Clinical Significance</h2>
            <p className="content-text">
              Measuring 25(OH)D is important for:
            </p>
            <ul className="glossary-list">
              <li>Diagnosing vitamin D deficiency or insufficiency</li>
              <li>Guiding supplementation dosing</li>
              <li>Monitoring treatment response</li>
              <li>Assessing fracture risk and bone health</li>
              <li>Investigating muscle weakness or bone pain</li>
              <li>Evaluating calcium metabolism disorders</li>
            </ul>
            
            <h2 className="content-heading">Research Applications</h2>
            <p className="content-text">
              In vitamin D supplementation studies:
            </p>
            <ul className="glossary-list">
              <li>Baseline 25(OH)D levels predict who benefits most (those with deficiency)</li>
              <li>Change in 25(OH)D confirms compliance and absorption</li>
              <li>Benefits often greatest when baseline &lt;20 ng/mL</li>
              <li>Achieving 30-40 ng/mL typically targets for intervention studies</li>
            </ul>
            
            <p className="content-text">
              Serum 25(OH)D measurement is the gold standard for assessing vitamin D status. Regular testing in at-risk populations enables targeted supplementation to optimize vitamin D levels for bone health, muscle function, and potentially broader health benefits. Maintaining levels above 30 ng/mL (75 nmol/L) is recommended by most major health organizations.
            </p>
          </>
        }
      currentPage="serum25ohd"

      />
  );
}