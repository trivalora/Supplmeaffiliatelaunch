'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { AlertCircle, TrendingUp, Shield } from 'lucide-react';

export function AdverseEffectsPage() {
  return (
    <GlossaryTemplate
      term="Adverse Effects"
      abbreviation="Side Effects, Adverse Reactions"
      definition="Unintended, harmful, or unpleasant responses to a supplement or medication that occur in addition to the desired therapeutic response, ranging from mild and temporary to severe and life-threatening."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            <strong>Adverse effects</strong> (also called side effects or adverse reactions) are unintended, harmful, or unpleasant responses to a supplement or medication. These effects occur in addition to the desired therapeutic response and can range from mild and temporary to severe and life-threatening.
          </p>
          <p className="mb-4">
            It's important to distinguish adverse effects from the intended effects of a supplement. For example, drowsiness is an adverse effect of an antihistamine but a desired effect of a sleep supplement.
          </p>

          <h3 className="mt-8 mb-4">Types of Adverse Effects</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
              <h4 className="mt-0 mb-3">Dose-Dependent Effects</h4>
              <p>
                These effects increase in likelihood or severity as dosage increases. They're predictable and related to the pharmacological action of the substance. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nausea from high-dose iron</li>
                <li>Diarrhea from excessive magnesium</li>
                <li>Stomach upset from NSAIDs</li>
              </ul>
            </div>

            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
              <h4 className="mt-0 mb-3">Idiosyncratic Effects</h4>
              <p>
                Unpredictable reactions that occur in susceptible individuals regardless of dose. These are often related to individual genetics or immune responses. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Allergic reactions to specific ingredients</li>
                <li>Paradoxical reactions (opposite of expected effect)</li>
                <li>Rare individual sensitivities</li>
              </ul>
            </div>

            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
              <h4 className="mt-0 mb-3">Time-Dependent Effects</h4>
              <p>
                Effects that may emerge or change with duration of use:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Immediate:</strong> Occurring within minutes to hours</li>
                <li><strong>Delayed:</strong> Appearing after days or weeks of use</li>
                <li><strong>Long-term:</strong> Developing only after months or years</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-8 mb-4">Severity Classification</h3>
          <p className="mb-3">
            Adverse effects are typically classified by severity:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Mild:</strong> Noticeable but not distressing; doesn't interfere with daily activities (e.g., mild headache, slight nausea)</li>
            <li><strong>Moderate:</strong> Uncomfortable and may interfere with normal activities but not dangerous (e.g., persistent diarrhea, moderate headache)</li>
            <li><strong>Severe:</strong> Significantly impacts daily function or poses health risk (e.g., severe allergic reaction, liver toxicity)</li>
            <li><strong>Life-threatening:</strong> Requires immediate medical intervention (e.g., anaphylaxis, severe bleeding)</li>
          </ul>

          <h3 className="mt-8 mb-4">Common Supplement Adverse Effects</h3>
          <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)] mb-4">
            <h4 className="mt-0 mb-3">Gastrointestinal Effects</h4>
            <p className="mb-2">The most common category of supplement adverse effects:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nausea and vomiting</li>
              <li>Diarrhea or constipation</li>
              <li>Stomach pain or cramping</li>
              <li>Bloating and gas</li>
              <li>Acid reflux</li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
            <h4 className="mt-0 mb-3">Other Common Effects</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Headaches:</strong> Often from high-dose B vitamins, herbs, or detox supplements</li>
              <li><strong>Skin reactions:</strong> Rashes, flushing (e.g., niacin flush), itching</li>
              <li><strong>Sleep disturbances:</strong> Insomnia or drowsiness</li>
              <li><strong>Mood changes:</strong> Anxiety, irritability, or mood swings</li>
              <li><strong>Interactions:</strong> With medications or other supplements</li>
            </ul>
          </div>

          <h3 className="mt-8 mb-4">Risk Factors for Adverse Effects</h3>
          <p className="mb-3">
            Certain factors increase the likelihood or severity of adverse effects:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>High doses:</strong> Exceeding recommended amounts or therapeutic doses</li>
            <li><strong>Multiple supplements:</strong> Taking many products simultaneously increases risk</li>
            <li><strong>Pre-existing conditions:</strong> Kidney, liver, or digestive diseases affect supplement processing</li>
            <li><strong>Medications:</strong> Drug interactions can increase adverse effect risk</li>
            <li><strong>Age:</strong> Children and elderly may be more vulnerable</li>
            <li><strong>Pregnancy/nursing:</strong> Increased sensitivity and fetal/infant concerns</li>
            <li><strong>Allergies:</strong> History of allergic reactions</li>
            <li><strong>Poor quality products:</strong> Contaminants or incorrect ingredient amounts</li>
          </ul>

          <h3 className="mt-8 mb-4">Serious Adverse Effects</h3>
          <p className="mb-3">
            While rare, some supplements can cause serious harm:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Liver toxicity:</strong> Associated with certain herbs (e.g., kava, green tea extract at high doses)</li>
            <li><strong>Kidney damage:</strong> From high protein intake or certain herbs</li>
            <li><strong>Bleeding:</strong> From blood-thinning supplements (garlic, ginkgo, high-dose omega-3s)</li>
            <li><strong>Cardiovascular effects:</strong> Irregular heartbeat, high blood pressure from stimulants</li>
            <li><strong>Hormonal disruption:</strong> From hormone-altering supplements</li>
            <li><strong>Toxicity:</strong> From excessive fat-soluble vitamins (A, D, E, K) or minerals</li>
          </ul>

          <h3 className="mt-8 mb-4">Monitoring and Reporting</h3>
          <p className="mb-3">
            <strong>In clinical trials:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Adverse effects are systematically tracked and reported</li>
            <li>Frequency of effects in treatment vs. placebo groups is compared</li>
            <li>Causality is assessed (was it definitely from the supplement?)</li>
          </ul>

          <p className="mb-3">
            <strong>For consumers:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Report serious adverse effects to health authorities (e.g., FDA MedWatch in the U.S.)</li>
            <li>Inform healthcare providers about all supplements taken</li>
            <li>Keep records of supplements, doses, and any reactions</li>
          </ul>

          <h3 className="mt-8 mb-4">Minimizing Risk</h3>
          <p className="mb-3">
            Strategies to reduce adverse effect risk:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Start low:</strong> Begin with lower doses and gradually increase</li>
            <li><strong>Take with food:</strong> Many supplements are better tolerated with meals</li>
            <li><strong>Read labels:</strong> Check for allergens and contraindications</li>
            <li><strong>Choose quality:</strong> Select third-party tested products</li>
            <li><strong>Consult professionals:</strong> Discuss supplements with healthcare providers</li>
            <li><strong>Monitor response:</strong> Pay attention to how you feel</li>
            <li><strong>Discontinue if needed:</strong> Stop taking supplements that cause problems</li>
            <li><strong>Avoid mega-dosing:</strong> More isn't always better and increases risk</li>
          </ul>

          <h3 className="mt-8 mb-4">When to Seek Medical Attention</h3>
          <p className="mb-3">
            Contact a healthcare provider immediately if you experience:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Difficulty breathing or swallowing</li>
            <li>Severe allergic reactions (swelling, hives, rapid heartbeat)</li>
            <li>Chest pain or severe headache</li>
            <li>Yellowing of skin or eyes (jaundice)</li>
            <li>Dark urine or pale stools</li>
            <li>Severe or persistent abdominal pain</li>
            <li>Unusual bleeding or bruising</li>
            <li>Severe or worsening symptoms</li>
          </ul>

          <h3 className="mt-8 mb-4">Important Distinctions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2">Adverse Effects vs. Therapeutic Effects</h4>
              <p>
                The same physiological change can be therapeutic in one context and adverse in another. For example, blood thinning is therapeutic for cardiovascular protection but adverse if it leads to excessive bleeding.
              </p>
            </div>

            <div>
              <h4 className="mb-2">Causation vs. Correlation</h4>
              <p>
                Just because a symptom appears while taking a supplement doesn't prove the supplement caused it. Careful assessment is needed to determine true causation.
              </p>
            </div>
          </div>
        </>
      }
      
      keyPoints={[
        { 
          icon: AlertCircle, 
          title: "Range from Mild to Severe", 
          description: "Adverse effects can be mild (slight nausea, headache), moderate (persistent diarrhea), severe (liver toxicity), or life-threatening (anaphylaxis). Severity determines appropriate response and medical intervention needs." 
        },
        { 
          icon: TrendingUp, 
          title: "Dose and Time Dependent", 
          description: "Many adverse effects are predictable and dose-dependent, increasing with higher doses. Others are idiosyncratic (individual-specific) or time-dependent, emerging with duration of use." 
        },
        { 
          icon: Shield, 
          title: "Risk Can Be Minimized", 
          description: "Start with lower doses, choose quality third-party tested products, avoid mega-dosing, take with food when appropriate, and consult healthcare providers to minimize adverse effect risk." 
        }
      ]}
      
      examples={[
        "High-dose iron (100mg+) commonly causes gastrointestinal adverse effects including nausea, constipation, and stomach upset—dose-dependent effects that increase with dosage",
        "Excessive magnesium (&gt;400mg) frequently causes diarrhea, a predictable dose-dependent adverse effect that resolves when dose is reduced",
        "Some individuals experience allergic reactions to specific supplement ingredients (e.g., shellfish-derived glucosamine)—an idiosyncratic adverse effect unrelated to dose"
      ]}
      
      currentPage="adverseeffects"

      
      relatedTerms={[
        { term: "Contraindications", key: "contraindications" },
        { term: "Drug Interactions", key: "druginteractions" },
        { term: "Therapeutic Dose", key: "therapeuticdose" },
        { term: "Third-Party Testing", key: "thirdpartytesting" },
        { term: "Placebo", key: "placebo" }
      ]}
    />
  );
}
