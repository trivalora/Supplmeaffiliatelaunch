import { GlossaryTemplate } from '../GlossaryTemplate';

export function ESRPage() {
  return (
      <GlossaryTemplate
        term="ESR (Erythrocyte Sedimentation Rate)"
        definition="A blood test that measures how quickly red blood cells (erythrocytes) settle to the bottom of a test tube. An elevated ESR is a non-specific indicator of inflammation in the body."
        content={
          <>
            <p className="content-text">
              The erythrocyte sedimentation rate (ESR), also called sed rate, is one of the oldest laboratory tests still in common use. First described in the early 1900s, it measures the rate at which red blood cells descend in a vertical column of anticoagulated blood over one hour. While non-specific (doesn't identify the cause of inflammation), ESR is useful for detecting, monitoring, and assessing the severity of inflammatory conditions.
            </p>
            
            <h2 className="content-heading">How the Test Works</h2>
            <ul className="glossary-list">
              <li><strong>Method</strong> — Blood is drawn and placed in a tall, narrow tube and left undisturbed for one hour</li>
              <li><strong>Measurement</strong> — The distance (in millimeters) that red blood cells have fallen after one hour is recorded</li>
              <li><strong>Normal red blood cells</strong> — Settle slowly because they repel each other (negative surface charge)</li>
              <li><strong>In inflammation</strong> — Acute phase proteins (especially fibrinogen) cause red blood cells to stack together (rouleaux formation), making them fall faster</li>
            </ul>
            
            <h2 className="content-heading">Normal Values</h2>
            <p className="content-text">
              Reference ranges (Westergren method):
            </p>
            <ul className="glossary-list">
              <li><strong>Men</strong> — 0-15 mm/hour (some sources: 0-22 mm/hour)</li>
              <li><strong>Women</strong> — 0-20 mm/hour (some sources: 0-29 mm/hour)</li>
              <li><strong>Children</strong> — 0-10 mm/hour</li>
              <li><strong>Elderly</strong> — Values increase with age; some use formula: age/2 for men, (age+10)/2 for women</li>
              <li><strong>Pregnancy</strong> — ESR normally increases during pregnancy</li>
            </ul>
            
            <h2 className="content-heading">Interpretation</h2>
            <ul className="glossary-list">
              <li><strong>Normal (&lt;20 mm/hr)</strong> — Generally indicates absence of significant inflammation</li>
              <li><strong>Mildly elevated (20-40 mm/hr)</strong> — Mild inflammation or infection</li>
              <li><strong>Moderately elevated (40-70 mm/hr)</strong> — Moderate inflammation; seen in various conditions</li>
              <li><strong>Markedly elevated (&gt;70 mm/hr)</strong> — Severe inflammation; concerning for serious inflammatory disease, infection, or malignancy</li>
              <li><strong>Very high (&gt;100 mm/hr)</strong> — Highly suggestive of temporal arteritis, polymyalgia rheumatica, multiple myeloma, or severe infection</li>
            </ul>
            
            <h2 className="content-heading">Conditions Associated with Elevated ESR</h2>
            <p className="content-text">
              <strong>Inflammatory/Autoimmune diseases:</strong>
            </p>
            <ul className="glossary-list">
              <li>Rheumatoid arthritis</li>
              <li>Temporal arteritis (giant cell arteritis)</li>
              <li>Polymyalgia rheumatica</li>
              <li>Systemic lupus erythematosus (SLE)</li>
              <li>Inflammatory bowel disease (Crohn's, ulcerative colitis)</li>
              <li>Vasculitis</li>
            </ul>
            
            <p className="content-text">
              <strong>Infections:</strong>
            </p>
            <ul className="glossary-list">
              <li>Bacterial infections (particularly severe or chronic)</li>
              <li>Tuberculosis</li>
              <li>Endocarditis</li>
              <li>Osteomyelitis</li>
            </ul>
            
            <p className="content-text">
              <strong>Malignancies:</strong>
            </p>
            <ul className="glossary-list">
              <li>Multiple myeloma (often very high ESR)</li>
              <li>Lymphoma</li>
              <li>Various solid tumors</li>
            </ul>
            
            <p className="content-text">
              <strong>Other conditions:</strong>
            </p>
            <ul className="glossary-list">
              <li>Anemia</li>
              <li>Kidney disease</li>
              <li>Thyroid disorders</li>
              <li>Pregnancy</li>
              <li>Advanced age</li>
            </ul>
            
            <h2 className="content-heading">Factors Affecting ESR</h2>
            <p className="content-text">
              <strong>Factors that increase ESR:</strong>
            </p>
            <ul className="glossary-list">
              <li>Increased fibrinogen and other acute phase proteins</li>
              <li>Anemia (fewer red blood cells fall faster)</li>
              <li>Female sex and pregnancy</li>
              <li>Older age</li>
              <li>Obesity</li>
              <li>Macrocytosis (larger red blood cells)</li>
              <li>Kidney disease (decreased albumin)</li>
            </ul>
            
            <p className="content-text">
              <strong>Factors that decrease ESR:</strong>
            </p>
            <ul className="glossary-list">
              <li>Polycythemia (very high red blood cell count)</li>
              <li>Sickle cell disease (abnormal red blood cell shape)</li>
              <li>Congestive heart failure (reduced blood flow)</li>
              <li>Microcytosis (smaller red blood cells)</li>
              <li>High albumin levels</li>
            </ul>
            
            <h2 className="content-heading">ESR vs. CRP (C-Reactive Protein)</h2>
            <p className="content-text">
              Both measure inflammation but have different characteristics:
            </p>
            <table className="glossary-table">
              <tr>
                <td><strong>ESR</strong></td>
                <td><strong>CRP</strong></td>
              </tr>
              <tr>
                <td>Indirect measure (affected by proteins)</td>
                <td>Direct measure of inflammation</td>
              </tr>
              <tr>
                <td>Slower to rise and fall (days to weeks)</td>
                <td>Rises and falls quickly (hours to days)</td>
              </tr>
              <tr>
                <td>Affected by many non-inflammatory factors</td>
                <td>More specific for inflammation</td>
              </tr>
              <tr>
                <td>Inexpensive, simple test</td>
                <td>More expensive</td>
              </tr>
              <tr>
                <td>Better for monitoring chronic conditions</td>
                <td>Better for detecting acute inflammation</td>
              </tr>
            </table>
            
            <h2 className="content-heading">Clinical Uses</h2>
            <ul className="glossary-list">
              <li><strong>Screening</strong> — Detecting occult inflammation or infection</li>
              <li><strong>Diagnosis</strong> — Particularly useful for temporal arteritis, polymyalgia rheumatica</li>
              <li><strong>Monitoring disease activity</strong> — Tracking response to treatment in rheumatoid arthritis, inflammatory bowel disease</li>
              <li><strong>Prognosis</strong> — Elevated ESR may indicate more active disease or poorer prognosis</li>
              <li><strong>Not diagnostic alone</strong> — Must be interpreted with clinical context and other tests</li>
            </ul>
            
            <h2 className="content-heading">ESR in Supplement Research</h2>
            <p className="content-text">
              ESR is used as an outcome measure in anti-inflammatory supplement studies:
            </p>
            <ul className="glossary-list">
              <li><strong>Curcumin</strong> — Studies show ESR reduction in rheumatoid arthritis and ulcerative colitis (example: ESR WMD −55.96 mm/hr in meta-analysis)</li>
              <li><strong>Omega-3 fatty acids</strong> — May reduce ESR in inflammatory conditions</li>
              <li><strong>Vitamin D</strong> — Supplementation may decrease ESR in deficiency</li>
              <li><strong>Clinical interpretation</strong> — Reduction in ESR suggests anti-inflammatory effect</li>
            </ul>
            
            <h2 className="content-heading">Limitations</h2>
            <ul className="glossary-list">
              <li><strong>Non-specific</strong> — Cannot identify the source or cause of inflammation</li>
              <li><strong>Many confounders</strong> — Affected by age, sex, anemia, kidney disease, albumin levels</li>
              <li><strong>Slow to change</strong> — Not ideal for detecting acute inflammation</li>
              <li><strong>Normal doesn't exclude disease</strong> — Some inflammatory conditions have normal ESR</li>
              <li><strong>Cannot differentiate causes</strong> — Infection, autoimmune disease, and cancer can all elevate ESR</li>
            </ul>
            
            <h2 className="content-heading">When to Order ESR</h2>
            <p className="content-text">
              Common clinical scenarios:
            </p>
            <ul className="glossary-list">
              <li>Suspected temporal arteritis or polymyalgia rheumatica (ESR critical for diagnosis)</li>
              <li>Monitoring known inflammatory conditions (RA, IBD)</li>
              <li>Unexplained symptoms suggesting inflammatory disease</li>
              <li>Fever of unknown origin</li>
              <li>Often ordered alongside CRP for complementary information</li>
            </ul>
            
            <p className="content-text">
              While ESR is a simple and inexpensive test, it must be interpreted carefully in clinical context. Its non-specific nature means it should be used alongside other clinical information and tests. In supplement research, ESR reduction provides evidence of anti-inflammatory effects, particularly in chronic inflammatory conditions like rheumatoid arthritis and inflammatory bowel disease.
            </p>
          </>
        }
      currentPage="esr"

      />
  );
}