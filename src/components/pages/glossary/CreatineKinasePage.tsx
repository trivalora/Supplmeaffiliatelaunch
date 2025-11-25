'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Activity, Heart, AlertCircle } from 'lucide-react';

export function CreatineKinasePage() {
  return (
    <GlossaryTemplate
      term="Creatine Kinase"
      abbreviation="CK, CPK (Creatine Phosphokinase)"
      pronunciation="kree-uh-tin ky-nase"
      definition="An enzyme found primarily in muscle tissue (skeletal muscle, heart, and brain) that catalyzes the conversion of creatine to phosphocreatine, storing energy for rapid ATP regeneration. Blood creatine kinase levels are used as a biomarker of muscle damage or stress."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Creatine kinase (CK) is a critical enzyme in cellular energy metabolism, particularly in tissues with high energy demands like skeletal muscle, cardiac muscle, and the brain. CK catalyzes the reversible reaction that converts creatine and ATP into phosphocreatine and ADP. During intense exercise, phosphocreatine donates its phosphate group back to ADP to rapidly regenerate ATP, providing immediate energy for muscle contraction.
          </p>
          <p className="mb-4">
            <strong>How creatine kinase works:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Energy storage:</strong> CK + Creatine + ATP → Phosphocreatine + ADP (stores energy in the phosphocreatine molecule)</li>
            <li><strong>Energy release:</strong> CK + Phosphocreatine + ADP → Creatine + ATP (rapidly regenerates ATP for immediate energy use)</li>
            <li><strong>Location:</strong> CK exists in cytoplasm for rapid ATP regeneration and in mitochondria to shuttle energy between mitochondria and cytoplasm</li>
            <li><strong>Energy buffer:</strong> The phosphocreatine system powered by CK provides 10-15 seconds of maximal energy output during high-intensity activities like sprinting or heavy lifting</li>
          </ul>
          <p className="mb-4">
            <strong>CK as a biomarker of muscle damage:</strong>
          </p>
          <p className="mb-4">
            When muscle fibers are damaged—from intense exercise, trauma, disease, or other causes—creatine kinase leaks from muscle cells into the bloodstream. Measuring blood CK levels provides an indirect marker of muscle damage. Normal resting CK levels range from approximately 20-200 U/L (units per liter) but vary widely based on muscle mass, sex, ethnicity, and training status.
          </p>
          <p className="mb-4">
            <strong>CK elevation after exercise:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Timing:</strong> CK levels typically peak 24-72 hours after intense or unfamiliar exercise (eccentric/lengthening contractions cause the most damage)</li>
            <li><strong>Magnitude:</strong> Severe exercise can elevate CK to 1,000-20,000+ U/L, particularly after marathons, ultra-endurance events, or new training stimuli</li>
            <li><strong>Individual variation:</strong> Some individuals ("high responders") show much greater CK elevation than others after identical exercise</li>
            <li><strong>Training adaptation:</strong> Regular exercisers show smaller CK increases to the same workout over time as muscles adapt and become more resistant to damage</li>
          </ul>
          <p className="mb-4">
            <strong>CK isoenzymes (different forms):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>CK-MM:</strong> Found primarily in skeletal muscle; elevated CK-MM indicates skeletal muscle damage from exercise, injury, or muscle disease</li>
            <li><strong>CK-MB:</strong> Found primarily in cardiac (heart) muscle; elevated CK-MB may indicate heart attack or cardiac damage (though troponin is now the preferred cardiac marker)</li>
            <li><strong>CK-BB:</strong> Found primarily in brain tissue; rarely measured clinically; can be elevated in severe brain injury</li>
          </ul>
          <p className="mb-4">
            Measuring specific CK isoenzymes helps identify the source of CK elevation—skeletal muscle versus heart versus brain.
          </p>
          <p className="mb-4">
            <strong>CK in supplement research:</strong>
          </p>
          <p className="mb-4">
            Creatine kinase is frequently used as an outcome measure in exercise and supplement studies. Interventions that reduce post-exercise CK elevation suggest reduced muscle damage and potentially improved recovery. BCAA supplementation reduces creatine kinase levels with medium effect sizes (Hedges' g approximately −0.44), particularly when consumed around resistance training sessions. Omega-3 fatty acids, curcumin, and tart cherry extract have also shown modest CK-reducing effects in some studies, though results vary.
          </p>
          <p className="mb-4">
            <strong>Clinical significance of elevated CK:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Exercise-induced:</strong> CK elevation after exercise is normal and expected; not harmful unless extremely high (&gt;50,000 U/L risk of rhabdomyolysis)</li>
            <li><strong>Rhabdomyolysis:</strong> Severe muscle breakdown releasing massive amounts of CK, myoglobin, and other muscle contents; can cause kidney damage; requires medical attention</li>
            <li><strong>Muscle diseases:</strong> Chronically elevated CK may indicate muscular dystrophy, inflammatory myopathies, or other muscle disorders</li>
            <li><strong>Statin medications:</strong> Can cause muscle damage and CK elevation in some individuals; severe elevations warrant stopping the medication</li>
            <li><strong>Cardiac events:</strong> CK-MB elevation after chest pain may indicate heart attack (though troponin is now the standard cardiac marker)</li>
          </ul>
          <p className="mb-4">
            <strong>Factors affecting CK levels:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Muscle mass:</strong> More muscular individuals have higher baseline CK</li>
            <li><strong>Sex:</strong> Males typically have higher CK than females due to greater muscle mass</li>
            <li><strong>Ethnicity:</strong> African ancestry associated with higher baseline CK (genetic variation in CK expression)</li>
            <li><strong>Training status:</strong> Trained athletes may have elevated baseline CK and blunted responses to exercise</li>
            <li><strong>Recent exercise:</strong> Can elevate CK for 3-7+ days depending on intensity</li>
          </ul>
          <p className="mb-4">
            <strong>Interpreting CK in research:</strong>
          </p>
          <p className="mb-4">
            In supplement studies, CK is used as a marker of muscle damage and recovery. Lower post-exercise CK suggests less muscle damage, though the relationship between CK elevation and actual functional impairment (strength loss, soreness) is imperfect—some individuals have high CK with minimal symptoms and vice versa. CK should be interpreted alongside other markers like delayed onset muscle soreness (DOMS), strength testing, and functional performance measures.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Activity, 
          title: "Energy Metabolism Enzyme", 
          description: "Catalyzes the conversion between creatine and phosphocreatine, storing and releasing energy for rapid ATP regeneration. Critical for high-intensity muscle contractions lasting 10-15 seconds." 
        },
        { 
          icon: AlertCircle, 
          title: "Muscle Damage Marker", 
          description: "Blood CK levels peak 24-72 hours after intense exercise, indicating muscle fiber damage. Normal levels: 20-200 U/L; can rise to 1,000-20,000+ U/L after severe exercise. BCAA supplementation reduces post-exercise CK with medium effect sizes." 
        },
        { 
          icon: Heart, 
          title: "Cardiac Marker", 
          description: "CK-MB isoenzyme elevation may indicate heart muscle damage, though troponin is now the preferred cardiac biomarker. Different CK isoenzymes (MM, MB, BB) help identify damage source: skeletal muscle, heart, or brain." 
        }
      ]}
      
      examples={[
        "After an intense leg workout, an individual's CK rises from 100 U/L to 2,500 U/L at 48 hours, indicating muscle damage from the training stimulus",
        "BCAA supplementation (10g around workouts) reduces peak CK by approximately 100-200 U/L compared to placebo, suggesting reduced muscle damage",
        "A marathon runner with CK levels of 25,000 U/L three days after the race should monitor for signs of rhabdomyolysis (dark urine, severe weakness, confusion) and seek medical attention if present"
      ]}
      
      currentPage="creatinekinase"

      
      relatedTerms={[
        { term: "Phosphocreatine", key: "phosphocreatine" },
        { term: "ATP", key: "atp" },
        { term: "DOMS", key: "doms" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Leucine", key: "leucine" },
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" }
      ]}
    />
  );
}
