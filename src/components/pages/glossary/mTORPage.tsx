import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function mTORPage() {
  return (
    <GlossaryTemplate
      term="mTOR (Mechanistic Target of Rapamycin)"
      definition="A protein kinase that acts as a central regulator of cell growth, proliferation, metabolism, and protein synthesis in response to nutrients, growth factors, and cellular energy."
      category="Physiological Processes"
      currentPage="mtor"

      relatedTerms={['Protein Synthesis', 'Muscle Protein Synthesis', 'Leucine', 'Metabolism', 'Anabolic']}
    >
      <div className="space-y-6">
        <section>
          <h2>What Is mTOR?</h2>
          <p>
            The mechanistic target of rapamycin (mTOR, previously called "mammalian target of rapamycin") is a serine/threonine protein kinase that functions as the catalytic subunit of two distinct protein complexes: mTORC1 and mTORC2. mTOR serves as a master regulator of cell growth and metabolism, integrating signals from nutrients (especially amino acids), growth factors, cellular energy status, and stress to control anabolic and catabolic processes.
          </p>
          <p>
            The name comes from rapamycin, a drug that inhibits mTOR and was first discovered in soil samples from Easter Island (Rapa Nui).
          </p>
        </section>

        <section>
          <h2>Two mTOR Complexes</h2>
          
          <h3>mTORC1 (mTOR Complex 1)</h3>
          <ul>
            <li><strong>Primary Function:</strong> Promotes anabolic processes (protein synthesis, lipid synthesis, cell growth)</li>
            <li><strong>Sensitive to:</strong> Nutrients (especially amino acids), growth factors, energy status</li>
            <li><strong>Rapamycin-Sensitive:</strong> Acutely inhibited by rapamycin</li>
            <li><strong>Key Roles:</strong>
              <ul>
                <li>Muscle protein synthesis</li>
                <li>Ribosome biogenesis</li>
                <li>Lipid synthesis</li>
                <li>Inhibition of autophagy (cellular cleanup process)</li>
                <li>Mitochondrial function</li>
              </ul>
            </li>
          </ul>

          <h3>mTORC2 (mTOR Complex 2)</h3>
          <ul>
            <li><strong>Primary Function:</strong> Cell survival, metabolism, cytoskeletal organization</li>
            <li><strong>Less Well-Understood:</strong> Compared to mTORC1</li>
            <li><strong>Rapamycin:</strong> Resistant to acute inhibition (but inhibited by chronic exposure)</li>
            <li><strong>Key Roles:</strong>
              <ul>
                <li>Cell survival signaling</li>
                <li>Cytoskeleton organization</li>
                <li>Ion transport</li>
                <li>Glucose homeostasis</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Regulation of mTORC1</h2>
          
          <h3>Activators (Signals That Turn mTOR On)</h3>
          <ul>
            <li><strong>Amino Acids:</strong> Particularly leucine; strongest activator among amino acids</li>
            <li><strong>Insulin and Growth Factors:</strong> IGF-1, insulin activate mTOR through PI3K/Akt pathway</li>
            <li><strong>High Energy Status:</strong> Adequate ATP levels</li>
            <li><strong>Resistance Exercise:</strong> Mechanical stimulation activates mTOR signaling</li>
          </ul>

          <h3>Inhibitors (Signals That Turn mTOR Off)</h3>
          <ul>
            <li><strong>Nutrient Deprivation:</strong> Low amino acid availability</li>
            <li><strong>Energy Stress:</strong> Low ATP/AMP ratio activates AMPK, which inhibits mTOR</li>
            <li><strong>Hypoxia:</strong> Low oxygen conditions</li>
            <li><strong>Cellular Stress:</strong> DNA damage, oxidative stress</li>
            <li><strong>Rapamycin:</strong> Pharmacological inhibitor</li>
          </ul>
        </section>

        <section>
          <h2>mTOR and Protein Synthesis</h2>
          
          <h3>Mechanism</h3>
          <p>
            When activated, mTORC1 promotes protein synthesis through:
          </p>
          <ul>
            <li><strong>S6K1 Phosphorylation:</strong> Activates ribosomal protein S6 kinase, increasing translation</li>
            <li><strong>4E-BP1 Phosphorylation:</strong> Releases eIF4E to initiate protein translation</li>
            <li><strong>Ribosome Biogenesis:</strong> Increases production of ribosomes (protein-making machinery)</li>
          </ul>

          <h3>Leucine's Special Role</h3>
          <ul>
            <li><strong>Primary Trigger:</strong> Leucine is the most potent amino acid activator of mTOR</li>
            <li><strong>Threshold Effect:</strong> Requires approximately 2-3g leucine per meal to maximally stimulate muscle protein synthesis</li>
            <li><strong>Why Leucine?</strong> Acts as both a building block for protein and a signaling molecule</li>
            <li><strong>Practical Application:</strong> Protein sources high in leucine (whey, meat, eggs) effectively stimulate mTOR</li>
          </ul>
        </section>

        <section>
          <h2>mTOR in Muscle Growth</h2>
          <p>
            mTOR is central to muscle protein synthesis and hypertrophy:
          </p>
          <ul>
            <li><strong>Resistance Training:</strong> Activates mTOR signaling in muscle</li>
            <li><strong>Protein Intake:</strong> Dietary protein (especially leucine) further activates mTOR</li>
            <li><strong>Synergy:</strong> Combined resistance training + protein intake maximally stimulates mTOR</li>
            <li><strong>Anabolic Window:</strong> mTOR activation is one mechanism underlying post-workout nutrition benefits</li>
          </ul>
        </section>

        <section>
          <h2>mTOR and Aging</h2>
          
          <h3>The mTOR Paradox</h3>
          <p>
            mTOR presents a paradox in aging research:
          </p>
          <ul>
            <li><strong>Good for Muscle:</strong> mTOR activation promotes muscle protein synthesis and prevents sarcopenia (age-related muscle loss)</li>
            <li><strong>May Accelerate Aging:</strong> Chronic mTOR overactivation associated with shortened lifespan in animal models</li>
            <li><strong>Longevity Research:</strong> Rapamycin (mTOR inhibitor) extends lifespan in multiple organisms</li>
            <li><strong>Autophagy Trade-off:</strong> mTOR inhibits autophagy, a cellular cleanup process important for longevity</li>
          </ul>

          <h3>Balancing Act</h3>
          <p>
            The key may be cycling between mTOR activation and suppression:
          </p>
          <ul>
            <li><strong>Fed State + Exercise:</strong> mTOR activation for muscle growth and repair</li>
            <li><strong>Fasted State + Rest:</strong> mTOR suppression allowing autophagy and cellular maintenance</li>
            <li><strong>Caloric Restriction:</strong> Reduces mTOR activity, which may contribute to longevity benefits</li>
            <li><strong>Intermittent Fasting:</strong> Cycles between mTOR activation (feeding) and suppression (fasting)</li>
          </ul>
        </section>

        <section>
          <h2>mTOR in Disease</h2>
          
          <h3>Cancer</h3>
          <ul>
            <li><strong>Overactivation:</strong> mTOR is hyperactive in many cancers</li>
            <li><strong>Promotes Growth:</strong> Drives uncontrolled cell proliferation</li>
            <li><strong>Treatment Target:</strong> mTOR inhibitors (rapamycin analogs) used in some cancer therapies</li>
          </ul>

          <h3>Metabolic Diseases</h3>
          <ul>
            <li><strong>Diabetes:</strong> Chronic mTOR activation may contribute to insulin resistance</li>
            <li><strong>Obesity:</strong> Overnutrition leads to excessive mTOR activity</li>
            <li><strong>Therapeutic Target:</strong> mTOR modulation being explored for metabolic syndrome</li>
          </ul>

          <h3>Neurodegenerative Diseases</h3>
          <ul>
            <li><strong>Protein Aggregation:</strong> mTOR inhibition enhances autophagy, clearing toxic protein aggregates</li>
            <li><strong>Alzheimer's/Parkinson's:</strong> mTOR modulation under investigation</li>
          </ul>

          <h3>Aging-Related Conditions</h3>
          <ul>
            <li><strong>Sarcopenia:</strong> Reduced mTOR sensitivity contributes to muscle loss</li>
            <li><strong>Anabolic Resistance:</strong> Older adults may need more protein/leucine to activate mTOR effectively</li>
          </ul>
        </section>

        <section>
          <h2>Modulating mTOR Through Lifestyle</h2>
          
          <h3>To Activate mTOR (For Muscle Growth/Recovery)</h3>
          <ul>
            <li><strong>Protein Intake:</strong> 20-40g protein with 2-3g leucine per meal</li>
            <li><strong>Resistance Training:</strong> Progressive overload strength training</li>
            <li><strong>Post-Workout Nutrition:</strong> Protein + carbohydrates after exercise</li>
            <li><strong>Insulin Spikes:</strong> Carbohydrate intake (though amino acids are more important)</li>
          </ul>

          <h3>To Suppress mTOR (For Autophagy/Longevity)</h3>
          <ul>
            <li><strong>Fasting:</strong> Intermittent fasting or time-restricted eating</li>
            <li><strong>Caloric Restriction:</strong> Moderate reduction in calorie intake</li>
            <li><strong>Low-Protein Periods:</strong> Temporary protein restriction (not recommended long-term)</li>
            <li><strong>Certain Compounds:</strong> Resveratrol, curcumin, EGCG may modestly inhibit mTOR</li>
            <li><strong>Exercise (Endurance):</strong> Activates AMPK, which inhibits mTOR</li>
          </ul>
        </section>

        <section>
          <h2>mTOR Inhibitors (Pharmacological)</h2>
          
          <h3>Rapamycin and Analogs (Rapalogs)</h3>
          <ul>
            <li><strong>Rapamycin (Sirolimus):</strong> Original mTOR inhibitor; used as immunosuppressant</li>
            <li><strong>Everolimus, Temsirolimus:</strong> Rapamycin analogs used in cancer treatment</li>
            <li><strong>Longevity Research:</strong> Being investigated for anti-aging effects in humans</li>
            <li><strong>Side Effects:</strong> Immunosuppression, metabolic disturbances, mouth sores</li>
            <li><strong>Not for General Use:</strong> Prescription medications with significant side effects</li>
          </ul>
        </section>

        <section>
          <h2>Clinical Measurement</h2>
          <ul>
            <li><strong>Research Setting:</strong> mTOR activity measured through phosphorylation status of downstream targets (S6K1, 4E-BP1)</li>
            <li><strong>Tissue Biopsies:</strong> Muscle biopsies used in research to assess mTOR signaling</li>
            <li><strong>Not Routine:</strong> mTOR activity not routinely measured in clinical practice</li>
          </ul>
        </section>

        <section>
          <h2>Practical Implications</h2>
          
          <h3>For Muscle Building</h3>
          <ul>
            <li>Consume adequate protein (1.6-2.2 g/kg body weight daily)</li>
            <li>Include leucine-rich foods (whey protein, meat, eggs, dairy)</li>
            <li>Combine resistance training with protein intake</li>
            <li>Older adults may need higher protein intakes (30-40g per meal) to overcome anabolic resistance</li>
          </ul>

          <h3>For Health and Longevity</h3>
          <ul>
            <li>Cycle between periods of mTOR activation (fed, exercising) and suppression (fasted, resting)</li>
            <li>Consider intermittent fasting or time-restricted eating</li>
            <li>Avoid chronic overnutrition</li>
            <li>Balance protein intake (adequate but not excessive)</li>
            <li>Regular exercise (both resistance and endurance training)</li>
          </ul>
        </section>

        <section>
          <h2>Current Research Directions</h2>
          <ul>
            <li>Rapamycin for human longevity and healthspan extension</li>
            <li>Cycling mTOR activation/suppression for optimal health</li>
            <li>mTOR in age-related muscle loss and frailty</li>
            <li>mTOR-targeted cancer therapies</li>
            <li>Role in neurodegenerative disease prevention</li>
            <li>Nutrient sensing and metabolic health</li>
          </ul>
        </section>

        <section>
          <h2>Bottom Line</h2>
          <p>
            mTOR is a critical nutrient and energy sensor that regulates the balance between growth and longevity. For muscle building and recovery, activating mTOR through protein intake (especially leucine) and resistance training is beneficial. However, chronic mTOR overactivation may accelerate aging and contribute to disease. The optimal strategy likely involves cycling between periods of mTOR activation and suppression rather than constant activation or suppression.
          </p>
        </section>
      </div>
    </GlossaryTemplate>
  );
};

export default mTORPage;