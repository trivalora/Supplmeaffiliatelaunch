'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Bone, TrendingDown, Activity } from 'lucide-react';

export function OsteoporosisPage() {
  return (
    <GlossaryTemplate
      term="Osteoporosis"
      pronunciation="os-tee-oh-puh-roh-sis"
      definition="Osteoporosis is a systemic skeletal disease characterized by low bone mass and deterioration of bone tissue, leading to increased bone fragility and susceptibility to fractures. The term literally means 'porous bones.'"
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Osteoporosis is often called a "silent disease" because bone loss occurs without symptoms until a fracture happens. It affects over 200 million people worldwide, primarily postmenopausal women and older adults. Fractures from osteoporosis, particularly hip fractures, can lead to significant disability, loss of independence, and increased mortality.
          </p>
          <p className="mb-4">
            <strong>Diagnosis and classification:</strong>
          </p>
          <p className="mb-4">
            Osteoporosis is diagnosed using bone mineral density (BMD) testing, typically via dual-energy X-ray absorptiometry (DXA scan). Results are reported as T-scores:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Normal:</strong> T-score ≥ -1.0 (BMD within 1 standard deviation of young adult mean)</li>
            <li><strong>Osteopenia (low bone mass):</strong> T-score between -1.0 and -2.5 (increased fracture risk but less severe than osteoporosis)</li>
            <li><strong>Osteoporosis:</strong> T-score ≤ -2.5 (significantly increased fracture risk)</li>
            <li><strong>Severe osteoporosis:</strong> T-score ≤ -2.5 with one or more fragility fractures</li>
          </ul>
          <p className="mb-4">
            <strong>Pathophysiology:</strong>
          </p>
          <p className="mb-4">
            Bone is constantly being remodeled through two processes: bone resorption (breakdown by osteoclasts) and bone formation (building by osteoblasts). In osteoporosis, bone resorption exceeds bone formation, resulting in net bone loss. Peak bone mass is typically achieved by age 30, after which bone loss gradually occurs. In women, bone loss accelerates dramatically during the first 5-10 years after menopause due to declining estrogen levels.
          </p>
          <p className="mb-4">
            <strong>Risk factors:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Non-modifiable:</strong> Female sex, advanced age, small/thin body frame, family history, Caucasian or Asian ethnicity, early menopause ({'<'}45 years)</li>
            <li><strong>Modifiable:</strong> Low calcium and vitamin D intake, physical inactivity, smoking, excessive alcohol consumption (≥3 drinks/day), low body weight (BMI {'<'}19)</li>
            <li><strong>Medical conditions:</strong> Hyperthyroidism, hyperparathyroidism, celiac disease, inflammatory bowel disease, rheumatoid arthritis, chronic kidney disease</li>
            <li><strong>Medications:</strong> Long-term corticosteroid use (≥3 months at ≥5 mg/day prednisone), some anticonvulsants, proton pump inhibitors (long-term high-dose use), certain cancer treatments</li>
          </ul>
          <p className="mb-4">
            <strong>Common fracture sites:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Hip:</strong> Most serious, often requiring surgery and associated with high morbidity and mortality</li>
            <li><strong>Spine (vertebral):</strong> Can occur spontaneously or with minimal trauma, causing height loss, back pain, and kyphosis (hunched posture)</li>
            <li><strong>Wrist (distal radius):</strong> Common from falling on outstretched hand</li>
            <li><strong>Other sites:</strong> Humerus (upper arm), ribs, pelvis</li>
          </ul>
          <p className="mb-4">
            <strong>Prevention and treatment:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Nutrition:</strong> Adequate calcium (1,000-1,200 mg/day) and vitamin D (800-1,000 IU/day or more to achieve optimal serum levels), adequate protein intake</li>
            <li><strong>Exercise:</strong> Weight-bearing exercises (walking, jogging, dancing), resistance training, balance exercises to prevent falls</li>
            <li><strong>Lifestyle:</strong> Avoid smoking and excessive alcohol, maintain healthy body weight</li>
            <li><strong>Medications:</strong> Bisphosphonates (alendronate, risedronate, zoledronic acid), denosumab, selective estrogen receptor modulators (raloxifene), teriparatide (anabolic agent), romosozumab</li>
            <li><strong>Fall prevention:</strong> Home safety modifications, vision correction, medication review, appropriate footwear</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Bone, 
          title: "Progressive Bone Loss", 
          description: "Osteoporosis occurs when bone resorption exceeds bone formation, leading to decreased bone density and structural deterioration. Diagnosed via DXA scan with T-score ≤ -2.5, indicating significantly increased fracture risk." 
        },
        { 
          icon: TrendingDown, 
          title: "Silent Until Fracture Occurs", 
          description: "Often asymptomatic until a fragility fracture happens, commonly affecting hip, spine, or wrist. Hip fractures are especially serious, frequently requiring surgery and associated with disability and mortality." 
        },
        { 
          icon: Activity, 
          title: "Prevention Is Key", 
          description: "Adequate calcium and vitamin D, weight-bearing exercise, avoiding smoking/excessive alcohol, and fall prevention are essential. Medications like bisphosphonates can help when lifestyle measures are insufficient." 
        }
      ]}
      
      currentPage="osteoporosis"

      
      relatedTerms={['bonedensity', 'mineral', 'macromineral', 'biomarker']}
    />
  );
}
