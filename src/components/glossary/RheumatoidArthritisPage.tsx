import { GlossaryTemplate } from '../GlossaryTemplate';

export function RheumatoidArthritisPage() {
  return (
    <GlossaryTemplate
      term="Rheumatoid Arthritis"
      abbreviation="RA"
      definition="An autoimmune disease causing chronic inflammation of the joints and other organs."
      expandedExplanation={`Rheumatoid arthritis (RA) is a chronic autoimmune inflammatory disorder that primarily affects joints but can also involve other organs. In RA, the immune system mistakenly attacks the synovium (the lining of the membranes that surround the joints), causing painful swelling that can eventually result in bone erosion and joint deformity.

Unlike osteoarthritis, which is caused by mechanical wear and tear, RA is an inflammatory disease driven by immune system dysfunction.

**Disease Mechanism**

RA develops through a complex interplay of genetic and environmental factors. The immune system produces autoantibodies (rheumatoid factor and anti-CCP antibodies) that target components of the joint lining. Immune cells infiltrate the synovium, releasing inflammatory cytokines including TNF-α, IL-6, and IL-1, creating chronic inflammation in the joint.

The inflamed synovium forms pannus—abnormal tissue that invades and destroys cartilage and bone, leading to progressive joint damage, erosion, and deformity.

**Symptoms**

Joint symptoms typically affect small joints symmetrically (both hands, both feet) and include pain, swelling, warmth, stiffness (especially morning stiffness lasting &gt;30-60 minutes), reduced range of motion, and eventual deformity with progression.

Systemic symptoms include fatigue, low-grade fever, weight loss, rheumatoid nodules (firm lumps under skin), and extra-articular manifestations affecting eyes, lungs, heart, blood vessels, and other organs.

**Treatment**

Modern treatment aims for early aggressive control to prevent joint damage. Disease-modifying antirheumatic drugs (DMARDs) like methotrexate are the cornerstone. Biologic DMARDs target specific inflammatory pathways (TNF-α inhibitors, IL-6 inhibitors, etc.). NSAIDs and corticosteroids provide symptom relief. Physical therapy and exercise maintain function. Surgery may be needed for severe joint damage.

**Supplement Research**

Some supplements studied for RA include omega-3 fatty acids (modest anti-inflammatory effects), vitamin D (many RA patients deficient), curcumin (anti-inflammatory properties), and probiotics (immune modulation). Supplements should complement, not replace, disease-modifying medications.`}
      examples={[
        "A patient with early RA may experience symmetric swelling and stiffness in both wrists and hands, improving with methotrexate treatment.",
        "Long-standing RA can lead to characteristic hand deformities like ulnar deviation and swan-neck deformities.",
        "RA patients often have elevated inflammatory markers (ESR, CRP) and positive anti-CCP antibodies."
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Cytokines", key: "cytokines" },
        { term: "TNF-α", key: "tnfalpha" },
        { term: "IL-6", key: "il6" },
        { term: "IL-1", key: "il1" },
        { term: "Joint Health", key: "jointhealth" },
        { term: "CRP", key: "crp" }
      ]}
    />
  );
}
