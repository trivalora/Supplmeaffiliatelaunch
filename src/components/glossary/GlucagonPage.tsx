import { GlossaryTemplate } from '../GlossaryTemplate';

export function GlucagonPage() {
  return (
      <GlossaryTemplate
        term="Glucagon"
        definition="A peptide hormone produced by alpha cells in the pancreas that raises blood glucose levels by promoting glucose release from the liver. It acts as insulin's counter-regulatory hormone, preventing hypoglycemia during fasting."
        content={
          <>
            <p className="content-text">
              Glucagon is a critical hormone for maintaining blood glucose within normal ranges, particularly between meals and during fasting. While insulin signals energy abundance and promotes storage, glucagon signals energy scarcity and promotes mobilization of stored energy. Together, these two pancreatic hormones maintain glucose homeostasis.
            </p>
            
            <h2 className="content-heading">Production and Secretion</h2>
            <ul className="glossary-list">
              <li><strong>Source</strong> — Produced by pancreatic alpha cells in the islets of Langerhans (same clusters that contain insulin-producing beta cells)</li>
              <li><strong>Triggers for secretion</strong> — Low blood glucose (hypoglycemia), fasting, exercise, protein consumption, stress</li>
              <li><strong>Suppressed by</strong> — Elevated blood glucose, insulin, somatostatin, GLP-1</li>
              <li><strong>Half-life</strong> — Very short (~5-10 minutes), requiring continuous secretion to maintain levels</li>
            </ul>
            
            <h2 className="content-heading">Primary Functions</h2>
            <ul className="glossary-list">
              <li><strong>Glycogenolysis</strong> — Breaks down liver glycogen stores to release glucose into blood</li>
              <li><strong>Gluconeogenesis</strong> — Stimulates liver to produce new glucose from non-carbohydrate sources (amino acids, lactate, glycerol)</li>
              <li><strong>Lipolysis</strong> — Promotes breakdown of stored fat to release fatty acids and glycerol</li>
              <li><strong>Ketogenesis</strong> — Promotes production of ketone bodies from fatty acids during prolonged fasting</li>
              <li><strong>Blood glucose defense</strong> — Primary hormone preventing dangerously low blood glucose</li>
            </ul>
            
            <h2 className="content-heading">Glucagon's Metabolic Effects</h2>
            <p className="content-text">
              <strong>In the liver (primary target organ):</strong>
            </p>
            <ul className="glossary-list">
              <li>Increases glycogenolysis (glycogen → glucose)</li>
              <li>Increases gluconeogenesis (amino acids/lactate/glycerol → glucose)</li>
              <li>Decreases glycogen synthesis</li>
              <li>Promotes fatty acid oxidation and ketone production</li>
              <li>Increases urea production from amino acid metabolism</li>
            </ul>
            
            <p className="content-text">
              <strong>In adipose tissue:</strong>
            </p>
            <ul className="glossary-list">
              <li>Activates hormone-sensitive lipase</li>
              <li>Increases lipolysis (triglycerides → fatty acids + glycerol)</li>
              <li>Mobilizes fat stores for energy</li>
            </ul>
            
            <h2 className="content-heading">Insulin-Glucagon Balance</h2>
            <p className="content-text">
              These two hormones work in opposition to maintain glucose homeostasis:
            </p>
            <ul className="glossary-list">
              <li><strong>Fed state (high glucose)</strong> — High insulin, low glucagon → promotes storage (glycogen, fat, protein)</li>
              <li><strong>Fasted state (low glucose)</strong> — Low insulin, high glucagon → promotes mobilization (glycogenolysis, gluconeogenesis, lipolysis)</li>
              <li><strong>Insulin/glucagon ratio</strong> — More important than absolute levels of either hormone</li>
              <li><strong>Reciprocal regulation</strong> — Insulin inhibits glucagon secretion; low glucose and amino acids stimulate glucagon</li>
            </ul>
            
            <h2 className="content-heading">Response to Different Nutrients</h2>
            <ul className="glossary-list">
              <li><strong>Carbohydrates</strong> — Raise blood glucose → suppress glucagon, increase insulin</li>
              <li><strong>Protein/amino acids</strong> — Stimulate BOTH insulin and glucagon; this prevents hypoglycemia from insulin's glucose-lowering effect</li>
              <li><strong>Fats</strong> — Minimal direct effect on either insulin or glucagon</li>
              <li><strong>Mixed meals</strong> — Protein + carbohydrate: insulin response dominates, but glucagon prevents excessive glucose lowering</li>
            </ul>
            
            <h2 className="content-heading">Glucagon During Exercise</h2>
            <p className="content-text">
              Exercise significantly affects glucagon secretion:
            </p>
            <ul className="glossary-list">
              <li><strong>Increased secretion</strong> — Exercise stimulates glucagon release to maintain blood glucose during energy expenditure</li>
              <li><strong>Glucose production</strong> — Glucagon ensures liver glucose output matches muscle glucose uptake</li>
              <li><strong>Fat mobilization</strong> — During prolonged exercise, glucagon promotes fat breakdown for fuel</li>
              <li><strong>Intensity matters</strong> — Higher intensity exercise produces greater glucagon response</li>
            </ul>
            
            <h2 className="content-heading">Glucagon in Disease States</h2>
            <p className="content-text">
              <strong>Type 1 Diabetes:</strong>
            </p>
            <ul className="glossary-list">
              <li>Glucagon secretion is often impaired or inappropriately regulated</li>
              <li>Loss of insulin's suppressive effect on glucagon</li>
              <li>Excessive glucagon contributes to hyperglycemia</li>
              <li>Impaired glucagon response to hypoglycemia increases risk of severe low blood sugar</li>
            </ul>
            
            <p className="content-text">
              <strong>Type 2 Diabetes:</strong>
            </p>
            <ul className="glossary-list">
              <li>Inappropriately elevated glucagon despite high blood glucose</li>
              <li>Insulin resistance reduces insulin's ability to suppress glucagon</li>
              <li>Excessive hepatic glucose production (via glucagon) contributes to fasting hyperglycemia</li>
              <li>Alpha cell dysfunction is an underappreciated component of type 2 diabetes</li>
            </ul>
            
            <h2 className="content-heading">Glucagon and GLP-1</h2>
            <p className="content-text">
              GLP-1 (an incretin hormone) has important effects on glucagon:
            </p>
            <ul className="glossary-list">
              <li><strong>Glucose-dependent suppression</strong> — GLP-1 suppresses glucagon when blood glucose is elevated</li>
              <li><strong>Preservation when needed</strong> — Doesn't suppress glucagon during hypoglycemia (glucagon defense preserved)</li>
              <li><strong>GLP-1 agonists</strong> — Medications like semaglutide (Ozempic, Wegovy) work partly by suppressing inappropriate glucagon secretion</li>
              <li><strong>Dual benefit</strong> — GLP-1 drugs increase insulin (when glucose is high) and decrease glucagon (when glucose is high)</li>
            </ul>
            
            <h2 className="content-heading">Medical Uses of Glucagon</h2>
            <ul className="glossary-list">
              <li><strong>Severe hypoglycemia</strong> — Injectable or nasal glucagon rapidly raises blood glucose in emergencies (diabetics unable to consume oral glucose)</li>
              <li><strong>Diagnostic imaging</strong> — Glucagon relaxes gastrointestinal smooth muscle, used in certain imaging procedures</li>
              <li><strong>Beta-blocker overdose</strong> — Can be used to counteract certain effects of beta-blocker toxicity</li>
            </ul>
            
            <h2 className="content-heading">Factors Affecting Glucagon Secretion</h2>
            <p className="content-text">
              <strong>Stimulators:</strong>
            </p>
            <ul className="glossary-list">
              <li>Low blood glucose (hypoglycemia)</li>
              <li>Amino acids (especially alanine, arginine)</li>
              <li>Exercise</li>
              <li>Stress and catecholamines (epinephrine, norepinephrine)</li>
              <li>Fasting</li>
            </ul>
            
            <p className="content-text">
              <strong>Inhibitors:</strong>
            </p>
            <ul className="glossary-list">
              <li>High blood glucose</li>
              <li>Insulin (paracrine effect from nearby beta cells)</li>
              <li>GLP-1 (glucose-dependently)</li>
              <li>Somatostatin</li>
              <li>Free fatty acids</li>
            </ul>
            
            <h2 className="content-heading">Glucagon-Like Peptides (Not the Same!)</h2>
            <p className="content-text">
              Important distinction:
            </p>
            <ul className="glossary-list">
              <li><strong>Glucagon</strong> — Pancreatic hormone that raises blood glucose</li>
              <li><strong>GLP-1 (Glucagon-Like Peptide-1)</strong> — Incretin hormone from intestine that LOWERS blood glucose; named for structural similarity to glucagon but has opposite effects</li>
              <li><strong>GLP-2</strong> — Intestinal hormone involved in gut health and nutrient absorption</li>
            </ul>
            
            <h2 className="content-heading">Clinical Significance</h2>
            <p className="content-text">
              Understanding glucagon is important for:
            </p>
            <ul className="glossary-list">
              <li>Diabetes management (both type 1 and type 2)</li>
              <li>Understanding glucose regulation during fasting and exercise</li>
              <li>Explaining how protein stimulates both insulin and glucagon</li>
              <li>Appreciating how GLP-1 agonist medications work</li>
              <li>Managing hypoglycemia in diabetics</li>
              <li>Understanding metabolic adaptation to different nutritional states</li>
            </ul>
            
            <p className="content-text">
              Glucagon is essential for survival, preventing dangerous hypoglycemia and ensuring continuous glucose supply to the brain and other glucose-dependent tissues. The delicate balance between insulin and glucagon represents one of the body's most critical homeostatic systems.
            </p>
          </>
        }
      />
  );
}