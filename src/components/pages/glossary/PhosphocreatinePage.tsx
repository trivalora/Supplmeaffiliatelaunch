'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Zap, Battery, TrendingUp } from 'lucide-react';

export function PhosphocreatinePage() {
  return (
    <GlossaryTemplate
      term="Phosphocreatine"
      abbreviation="PCr, Creatine Phosphate"
      pronunciation="foss-fo-kree-uh-tin"
      definition="A high-energy phosphate compound stored in muscle cells that serves as a rapid reserve for ATP regeneration during the first few seconds of intense muscle activity. Phosphocreatine donates its phosphate group to ADP to quickly produce ATP without requiring oxygen."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Phosphocreatine (also called creatine phosphate) is the body's most immediate energy reserve for explosive, high-intensity muscle contractions. When muscles contract intensely—during a heavy lift, sprint, or jump—ATP is rapidly consumed and broken down to ADP. Phosphocreatine instantly donates its phosphate group to ADP, regenerating ATP in a fraction of a second through the enzyme creatine kinase. This phosphocreatine system provides energy faster than glycolysis or aerobic metabolism, making it critical for short, maximal efforts.
          </p>
          <p className="mb-4">
            <strong>The phosphocreatine-ATP system:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Energy storage:</strong> During rest or low-intensity activity, ATP donates a phosphate to creatine → creating phosphocreatine (energy stored)</li>
            <li><strong>Energy release:</strong> During intense activity, phosphocreatine donates phosphate to ADP → regenerating ATP (energy released)</li>
            <li><strong>Reaction:</strong> PCr + ADP + H+ ↔ Creatine + ATP (catalyzed by creatine kinase enzyme)</li>
            <li><strong>Speed:</strong> This reaction occurs in milliseconds, making it the fastest way to regenerate ATP</li>
            <li><strong>Capacity:</strong> Muscle phosphocreatine stores provide approximately 10-15 seconds of maximal energy output</li>
          </ul>
          <p className="mb-4">
            <strong>Why phosphocreatine stores are limited:</strong>
          </p>
          <p className="mb-4">
            Muscles store only about 3-4 times as much phosphocreatine as ATP. During maximal exercise, phosphocreatine levels can drop by 50-70% within 5-10 seconds. Once depleted, muscles must rely more heavily on glycolysis (anaerobic) and aerobic metabolism, which are slower ATP-producing pathways. This is why maximum power output cannot be sustained beyond about 10-15 seconds—the phosphocreatine system becomes exhausted.
          </p>
          <p className="mb-4">
            <strong>Recovery of phosphocreatine stores:</strong>
          </p>
          <p className="mb-4">
            After intense exercise, phosphocreatine stores recover relatively quickly using ATP from aerobic metabolism. Recovery follows a two-phase pattern: approximately 50% of stores recover within 30 seconds of rest, and full recovery takes 3-5 minutes. This is why short rest periods (30-60 seconds) between high-intensity intervals allow partial phosphocreatine replenishment, while longer rest (3-5 minutes) allows complete recovery for maximum power output in subsequent sets.
          </p>
          <p className="mb-4">
            <strong>Creatine supplementation and phosphocreatine stores:</strong>
          </p>
          <p className="mb-4">
            The primary mechanism by which creatine supplementation enhances exercise performance is by increasing muscle phosphocreatine stores. Supplementing with creatine monohydrate (3-5g daily) raises muscle phosphocreatine levels by approximately 10-40%, with greater increases in individuals who have lower baseline stores (often those with lower dietary creatine intake from eating less meat/fish).
          </p>
          <p className="mb-4">
            <strong>Effects of elevated phosphocreatine stores:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>More available energy:</strong> Higher phosphocreatine = more rapid ATP regeneration during intense exercise</li>
            <li><strong>Maintained power output:</strong> Ability to sustain maximal power for slightly longer before fatigue</li>
            <li><strong>Improved recovery between sets:</strong> Faster phosphocreatine resynthesis during rest intervals</li>
            <li><strong>Greater training volume:</strong> Ability to complete more repetitions or maintain higher intensity across multiple sets</li>
            <li><strong>Muscle growth stimulus:</strong> Greater training volume and intensity → enhanced muscle protein synthesis signaling and hypertrophy over time</li>
          </ul>
          <p className="mb-4">
            <strong>Activities that rely heavily on the phosphocreatine system:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Strength training:</strong> Heavy lifts lasting 1-10 seconds (squats, deadlifts, bench press)</li>
            <li><strong>Power activities:</strong> Jumping, throwing, Olympic lifts</li>
            <li><strong>Sprinting:</strong> 100m sprint (~10 seconds) relies almost entirely on phosphocreatine and stored ATP</li>
            <li><strong>Interval training:</strong> Repeated short bursts of maximal effort with rest periods</li>
            <li><strong>Team sports:</strong> Soccer, basketball, hockey—sports with intermittent sprints and high-intensity efforts</li>
          </ul>
          <p className="mb-4">
            <strong>Research evidence:</strong>
          </p>
          <p className="mb-4">
            Creatine supplementation's ergogenic (performance-enhancing) effects are among the most well-established in sports nutrition. Meta-analyses consistently show improvements in strength (1-3 rep max), power output, sprint performance, and resistance training volume. A large meta-analysis found creatine supplementation increased upper body strength with an effect size of approximately 0.26 (small to medium effect) and lower body strength with similar magnitude. These benefits are directly attributable to elevated muscle phosphocreatine stores enabling greater ATP availability during high-intensity work.
          </p>
          <p className="mb-4">
            <strong>Phosphocreatine in aerobic exercise:</strong>
          </p>
          <p className="mb-4">
            During steady-state aerobic exercise (jogging, cycling at moderate intensity), the phosphocreatine system is less important because ATP demand is lower and aerobic metabolism can keep pace. However, even in endurance events, phosphocreatine contributes to sudden accelerations, hills, or finishing sprints. This is why some endurance athletes supplement with creatine despite primarily relying on aerobic metabolism.
          </p>
          <p className="mb-4">
            <strong>Measurement of phosphocreatine:</strong>
          </p>
          <p className="mb-4">
            Muscle phosphocreatine levels can be measured using muscle biopsy (invasive) or magnetic resonance spectroscopy (MRS, non-invasive but expensive and requires specialized equipment). Most creatine supplementation studies use indirect measures like performance tests rather than directly measuring phosphocreatine stores, though muscle biopsies consistently confirm 10-40% increases with supplementation.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Zap, 
          title: "Immediate Energy Reserve", 
          description: "Provides the fastest ATP regeneration system in muscles, enabling maximal power output for 10-15 seconds. Donates phosphate to ADP in milliseconds, faster than glycolysis or aerobic metabolism." 
        },
        { 
          icon: Battery, 
          title: "Rapid Recovery", 
          description: "Phosphocreatine stores recover quickly after depletion: ~50% in 30 seconds, full recovery in 3-5 minutes of rest. This determines optimal rest intervals for power and strength training." 
        },
        { 
          icon: TrendingUp, 
          title: "Creatine Increases Stores", 
          description: "Creatine supplementation (3-5g daily) elevates muscle phosphocreatine by 10-40%, enabling more ATP regeneration during intense exercise. This drives strength, power, and muscle-building benefits with effect sizes of 0.2-0.3." 
        }
      ]}
      
      examples={[
        "During a heavy squat lasting 5 seconds, phosphocreatine rapidly donates phosphate to regenerate ATP, allowing maximal force production throughout the lift",
        "A 100m sprinter relies almost entirely on stored ATP and phosphocreatine for the ~10-second sprint; creatine supplementation increases phosphocreatine stores, improving sprint performance",
        "After 3 months of creatine supplementation (5g daily), an athlete's muscle phosphocreatine increases by 20%, allowing 1-2 additional reps per set at maximum intensity"
      ]}
      
      currentPage="phosphocreatine"

      
      relatedTerms={[
        { term: "ATP", key: "atp" },
        { term: "Creatine Kinase", key: "creatinekinase" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
    />
  );
}
