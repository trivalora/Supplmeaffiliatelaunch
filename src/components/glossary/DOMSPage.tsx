import { Header } from '../Header';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Footer } from '../Footer';

export function DOMSPage() {
  return (
    <>
      <Header />
      <GlossaryTemplate
        term="DOMS (Delayed Onset Muscle Soreness)"
        definition="Muscle pain and stiffness that develops 12-24 hours after unaccustomed or intense exercise, typically peaking at 24-72 hours and gradually resolving over 5-7 days."
        content={
          <>
            <p className="content-text">
              Delayed onset muscle soreness (DOMS) is the muscle pain and tenderness that occurs after performing unfamiliar or strenuous exercise. Unlike acute muscle pain that occurs during or immediately after exercise, DOMS has a delayed onset and is particularly common after eccentric exercises (lengthening contractions like running downhill or lowering weights).
            </p>
            
            <h2 className="content-heading">Characteristics and Timeline</h2>
            <ul className="glossary-list">
              <li><strong>Onset</strong> — Pain typically begins 12-24 hours after exercise</li>
              <li><strong>Peak</strong> — Soreness and stiffness usually peak between 24-72 hours post-exercise</li>
              <li><strong>Resolution</strong> — Symptoms gradually decrease and typically resolve within 5-7 days</li>
              <li><strong>Associated symptoms</strong> — Muscle stiffness, reduced range of motion, swelling, temporary strength loss, tenderness to touch</li>
            </ul>
            
            <h2 className="content-heading">Mechanism and Causes</h2>
            <p className="content-text">
              DOMS results from microscopic muscle damage and the subsequent inflammatory response:
            </p>
            <ul className="glossary-list">
              <li><strong>Mechanical damage</strong> — Eccentric contractions create small tears in muscle fibers and connective tissue (Z-line disruption)</li>
              <li><strong>Inflammatory response</strong> — The body responds with inflammation, releasing cytokines and recruiting immune cells to repair damage</li>
              <li><strong>Swelling and pressure</strong> — Fluid accumulation increases pressure on nerve endings, contributing to pain perception</li>
              <li><strong>Metabolic factors</strong> — Accumulation of metabolic byproducts may contribute but is not the primary cause</li>
            </ul>
            
            <h2 className="content-heading">Triggers</h2>
            <p className="content-text">
              DOMS is most commonly triggered by:
            </p>
            <ul className="glossary-list">
              <li><strong>Eccentric exercise</strong> — Activities emphasizing muscle lengthening (downhill running, lowering weights, plyometrics)</li>
              <li><strong>New activities</strong> — Exercises the body is unaccustomed to, even if not particularly intense</li>
              <li><strong>Increased intensity or volume</strong> — Sudden increases in training load</li>
              <li><strong>Unfamiliar movement patterns</strong> — Novel exercises or sports</li>
            </ul>
            
            <h2 className="content-heading">Impact on Performance</h2>
            <p className="content-text">
              DOMS temporarily affects athletic performance:
            </p>
            <ul className="glossary-list">
              <li>Reduced muscle strength and power output (can decrease 5-30%)</li>
              <li>Decreased range of motion and flexibility</li>
              <li>Impaired proprioception and coordination</li>
              <li>Reduced shock absorption capacity</li>
              <li>Increased risk of injury if training continues at high intensity</li>
            </ul>
            
            <h2 className="content-heading">Prevention and Management Strategies</h2>
            <p className="content-text">
              <strong>Prevention:</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Progressive overload</strong> — Gradually increase exercise intensity and volume</li>
              <li><strong>Proper warm-up</strong> — Prepare muscles for exercise with dynamic stretching</li>
              <li><strong>Regular training</strong> — Consistent exercise provides a protective "repeated bout effect"</li>
              <li><strong>Proper technique</strong> — Good form reduces excessive muscle strain</li>
            </ul>
            
            <p className="content-text">
              <strong>Management (once DOMS occurs):</strong>
            </p>
            <ul className="glossary-list">
              <li><strong>Active recovery</strong> — Light exercise increases blood flow and may help recovery</li>
              <li><strong>Massage</strong> — May provide temporary symptom relief and psychological benefits</li>
              <li><strong>Cold/heat therapy</strong> — Ice may reduce pain and swelling; heat can improve blood flow</li>
              <li><strong>NSAIDs</strong> — May reduce pain but could potentially interfere with adaptation</li>
              <li><strong>Adequate rest</strong> — Allow muscles time to repair before next intense session</li>
            </ul>
            
            <h2 className="content-heading">Supplements for DOMS</h2>
            <p className="content-text">
              Several supplements show evidence for reducing DOMS:
            </p>
            <ul className="glossary-list">
              <li><strong>BCAAs</strong> — Meta-analyses show reduced muscle damage markers (creatine kinase) and decreased DOMS severity; may help preserve strength</li>
              <li><strong>Creatine</strong> — May reduce markers of muscle damage and inflammation following intense exercise</li>
              <li><strong>Omega-3 fatty acids</strong> — Anti-inflammatory effects may reduce muscle soreness</li>
              <li><strong>Tart cherry juice</strong> — Contains polyphenols with anti-inflammatory properties</li>
              <li><strong>Curcumin</strong> — May reduce exercise-induced inflammation and muscle damage</li>
              <li><strong>Protein supplementation</strong> — Adequate protein supports muscle repair and recovery</li>
            </ul>
            
            <h2 className="content-heading">Repeated Bout Effect</h2>
            <p className="content-text">
              An important protective adaptation:
            </p>
            <ul className="glossary-list">
              <li>After experiencing DOMS, muscles adapt to become more resistant to that specific exercise</li>
              <li>The same exercise causes less soreness and damage when repeated</li>
              <li>Protection develops quickly and can last weeks to months</li>
              <li>Mechanism involves structural adaptations in muscle fibers and improved force distribution</li>
            </ul>
            
            <h2 className="content-heading">DOMS vs. Injury</h2>
            <p className="content-text">
              It's important to distinguish DOMS from injury:
            </p>
            <ul className="glossary-list">
              <li><strong>DOMS</strong> — Bilateral (both sides), diffuse muscle soreness, delayed onset, improves with light activity</li>
              <li><strong>Injury</strong> — Often unilateral (one side), localized sharp pain, immediate or sudden onset, worsens with activity</li>
              <li>If pain is severe, sharp, persistent beyond 7 days, or accompanied by significant swelling, consult a healthcare provider</li>
            </ul>
            
            <p className="content-text">
              <strong>Note:</strong> DOMS is a normal physiological response to novel or intense exercise and does not indicate injury. However, severe or prolonged DOMS may suggest excessive training volume that should be moderated.
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}