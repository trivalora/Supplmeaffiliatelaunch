import { GlossaryTemplate } from '../GlossaryTemplate';

export function InsulinPage() {
  return (
      <GlossaryTemplate
        term="Insulin"
        definition="A peptide hormone produced by beta cells in the pancreas that regulates blood glucose levels by promoting cellular uptake of glucose and inhibiting glucose production. It is central to carbohydrate, fat, and protein metabolism."
        content={
          <>
            <p className="content-text">
              Insulin is one of the most important metabolic hormones in the human body. Secreted in response to elevated blood glucose (particularly after meals), insulin acts as a key that unlocks cells to allow glucose entry, simultaneously signaling the body to store energy and switch from catabolic (breakdown) to anabolic (building) processes.
            </p>
            
            <h2 className="content-heading">Production and Secretion</h2>
            <ul className="glossary-list">
              <li><strong>Source</strong> — Produced by pancreatic beta cells located in the islets of Langerhans</li>
              <li><strong>Trigger</strong> — Blood glucose elevation (primarily), also stimulated by amino acids, incretin hormones (GLP-1, GIP), and parasympathetic nervous system</li>
              <li><strong>Biphasic release</strong> — First phase: rapid release of stored insulin (5-10 minutes); second phase: sustained release of newly synthesized insulin</li>
              <li><strong>Basal secretion</strong> — Low-level continuous insulin release maintains baseline glucose control between meals</li>
              <li><strong>Prandial surge</strong> — Large increase in insulin secretion following meals (postprandial insulin spike)</li>
            </ul>
            
            <h2 className="content-heading">Primary Functions</h2>
            <ul className="glossary-list">
              <li><strong>Glucose uptake</strong> — Stimulates GLUT4 transporter translocation to cell membranes in muscle and fat tissue, allowing glucose entry</li>
              <li><strong>Glycogen synthesis</strong> — Promotes glucose storage as glycogen in liver and muscle</li>
              <li><strong>Lipogenesis</strong> — Promotes fat synthesis and storage; inhibits lipolysis (fat breakdown)</li>
              <li><strong>Protein synthesis</strong> — Stimulates amino acid uptake and protein synthesis; inhibits protein breakdown</li>
              <li><strong>Gluconeogenesis inhibition</strong> — Suppresses liver glucose production</li>
            </ul>
            
            <h2 className="content-heading">Insulin's Metabolic Effects</h2>
            <p className="content-text">
              <strong>In the liver:</strong>
            </p>
            <ul className="glossary-list">
              <li>Increases glycogen synthesis (glucose storage)</li>
              <li>Decreases glycogenolysis (glycogen breakdown)</li>
              <li>Decreases gluconeogenesis (new glucose production from non-carbohydrate sources)</li>
              <li>Promotes fatty acid synthesis</li>
            </ul>
            
            <p className="content-text">
              <strong>In muscle tissue:</strong>
            </p>
            <ul className="glossary-list">
              <li>Increases glucose uptake via GLUT4</li>
              <li>Increases glycogen synthesis</li>
              <li>Increases amino acid uptake and protein synthesis</li>
              <li>Decreases protein breakdown</li>
            </ul>
            
            <p className="content-text">
              <strong>In adipose tissue:</strong>
            </p>
            <ul className="glossary-list">
              <li>Increases glucose uptake via GLUT4</li>
              <li>Increases lipogenesis (fat storage)</li>
              <li>Decreases lipolysis (fat breakdown)</li>
              <li>Promotes adipocyte differentiation</li>
            </ul>
            
            <h2 className="content-heading">Insulin Signaling Pathway</h2>
            <p className="content-text">
              How insulin exerts its effects at the cellular level:
            </p>
            <ul className="glossary-list">
              <li><strong>Insulin receptor binding</strong> — Insulin binds to tyrosine kinase receptors on cell surfaces</li>
              <li><strong>Receptor autophosphorylation</strong> — Activates intracellular signaling cascades</li>
              <li><strong>IRS proteins</strong> — Insulin receptor substrates (IRS-1, IRS-2) are phosphorylated</li>
              <li><strong>PI3K/Akt pathway</strong> — Primary pathway mediating metabolic effects (glucose uptake, glycogen synthesis, protein synthesis)</li>
              <li><strong>MAPK pathway</strong> — Mediates growth and mitogenic effects</li>
            </ul>
            
            <h2 className="content-heading">Insulin Resistance</h2>
            <p className="content-text">
              When cells don't respond normally to insulin:
            </p>
            <ul className="glossary-list">
              <li><strong>Definition</strong> — Reduced cellular response to normal insulin levels, requiring higher insulin to achieve the same glucose-lowering effect</li>
              <li><strong>Compensatory hyperinsulinemia</strong> — Pancreas secretes more insulin to overcome resistance</li>
              <li><strong>Causes</strong> — Obesity (especially visceral fat), physical inactivity, genetics, inflammation, certain medications</li>
              <li><strong>Consequences</strong> — Elevated blood glucose, prediabetes, type 2 diabetes, metabolic syndrome, cardiovascular disease risk</li>
              <li><strong>Measurement</strong> — HOMA-IR, fasting insulin levels, glucose tolerance test with insulin measurements</li>
            </ul>
            
            <h2 className="content-heading">Insulin and Diabetes</h2>
            <p className="content-text">
              <strong>Type 1 Diabetes:</strong>
            </p>
            <ul className="glossary-list">
              <li>Autoimmune destruction of pancreatic beta cells</li>
              <li>Absolute insulin deficiency</li>
              <li>Requires lifelong insulin replacement therapy</li>
            </ul>
            
            <p className="content-text">
              <strong>Type 2 Diabetes:</strong>
            </p>
            <ul className="glossary-list">
              <li>Progressive insulin resistance combined with eventual beta cell dysfunction</li>
              <li>Initially, elevated insulin (hyperinsulinemia) due to resistance</li>
              <li>Over time, beta cells cannot keep up; insulin production decreases</li>
              <li>May eventually require insulin therapy</li>
            </ul>
            
            <h2 className="content-heading">Factors Affecting Insulin Sensitivity</h2>
            <p className="content-text">
              <strong>Factors that improve insulin sensitivity:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Exercise</strong> — Both aerobic and resistance training increase insulin sensitivity</li>
              <li><strong>Weight loss</strong> — Particularly loss of visceral adipose tissue</li>
              <li><strong>Dietary fiber</strong> — Slows carbohydrate absorption, reducing postprandial insulin spikes</li>
              <li><strong>Omega-3 fatty acids</strong> — May improve insulin sensitivity through anti-inflammatory effects</li>
              <li><strong>Magnesium</strong> — Plays a role in insulin signaling; deficiency linked to insulin resistance</li>
              <li><strong>Sleep</strong> — Adequate quality sleep supports insulin sensitivity</li>
              <li><strong>Stress management</strong> — Chronic stress and cortisol impair insulin sensitivity</li>
            </ul>
            
            <p className="content-text">
              <strong>Factors that worsen insulin sensitivity:</strong>
            </p>
            <ul className="glossary-list">
              <li>Obesity, especially excess visceral fat</li>
              <li>Sedentary lifestyle</li>
              <li>Chronic inflammation</li>
              <li>Sleep deprivation</li>
              <li>Chronic stress</li>
              <li>Certain medications (corticosteroids, some antipsychotics)</li>
            </ul>
            
            <h2 className="content-heading">Insulin and Weight Regulation</h2>
            <p className="content-text">
              Insulin's effects on body composition:
            </p>
            <ul className="glossary-list">
              <li><strong>Anabolic hormone</strong> — Promotes storage (glycogen, fat, protein)</li>
              <li><strong>Lipogenic</strong> — Promotes fat synthesis and storage when energy is abundant</li>
              <li><strong>Anti-lipolytic</strong> — Inhibits fat breakdown, making fat loss difficult when insulin is chronically elevated</li>
              <li><strong>Appetite effects</strong> — Insulin acts on hypothalamus to reduce appetite (long-term), but insulin spikes and crashes can trigger hunger</li>
              <li><strong>Carbohydrate-insulin model</strong> — Theory that chronically high insulin from refined carbohydrates promotes fat storage and obesity (debated)</li>
            </ul>
            
            <h2 className="content-heading">Supplements and Insulin Sensitivity</h2>
            <p className="content-text">
              Evidence for supplements improving insulin sensitivity:
            </p>
            <ul className="glossary-list">
              <li><strong>Magnesium</strong> — Deficiency linked to insulin resistance; supplementation may improve HOMA-IR and fasting glucose</li>
              <li><strong>Omega-3 fatty acids</strong> — May improve insulin sensitivity, particularly in metabolic syndrome</li>
              <li><strong>Chromium</strong> — Some evidence for improved glucose control in diabetes</li>
              <li><strong>Berberine</strong> — Activates AMPK, improving insulin sensitivity (though not covered in this site)</li>
              <li><strong>Prebiotics</strong> — May improve insulin sensitivity through gut microbiome effects</li>
              <li><strong>Vitamin D</strong> — Deficiency associated with insulin resistance</li>
            </ul>
            
            <h2 className="content-heading">Clinical Measurements</h2>
            <ul className="glossary-list">
              <li><strong>Fasting insulin</strong> — Normal: 2-20 μU/mL; elevated levels suggest insulin resistance</li>
              <li><strong>HOMA-IR</strong> — Calculated from fasting glucose and insulin; estimates insulin resistance</li>
              <li><strong>HbA1c</strong> — Reflects average blood glucose over 2-3 months; indirect measure of insulin effectiveness</li>
              <li><strong>Oral glucose tolerance test</strong> — Measures glucose and insulin response to glucose load</li>
            </ul>
            
            <h2 className="content-heading">Importance in Health</h2>
            <p className="content-text">
              Insulin plays a central role in:
            </p>
            <ul className="glossary-list">
              <li>Glucose homeostasis and energy metabolism</li>
              <li>Cardiovascular disease risk (insulin resistance is a major risk factor)</li>
              <li>Weight management and body composition</li>
              <li>Metabolic syndrome development</li>
              <li>Aging and longevity (lower insulin associated with longevity in animal studies)</li>
            </ul>
            
            <p className="content-text">
              Maintaining insulin sensitivity through healthy lifestyle habits—regular exercise, balanced diet, adequate sleep, stress management, and maintaining healthy body weight—is one of the most important strategies for metabolic health and disease prevention.
            </p>
          </>
        }
      currentPage="insulin"

      />
  );
}