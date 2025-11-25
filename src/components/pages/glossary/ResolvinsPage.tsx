'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Shield, TrendingDown, Heart } from 'lucide-react';

export function ResolvinsPage() {
  return (
    <GlossaryTemplate
      term="Resolvins"
      abbreviation="RvE, RvD series (resolution-phase interaction products)"
      pronunciation="reh-zol-vinz"
      definition="Specialized pro-resolving mediators (SPMs) derived from omega-3 fatty acids EPA and DHA that actively resolve inflammation, reduce pain, promote tissue repair, and restore homeostasis rather than simply suppressing inflammatory responses."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Resolvins are a class of lipid mediators discovered in the early 2000s that fundamentally changed our understanding of inflammation resolution. Rather than inflammation simply "turning off" passively, resolvins actively orchestrate the resolution process—stopping neutrophil infiltration, promoting macrophage-mediated clearance of debris and dead cells, reducing pain signaling, and restoring normal tissue function. This active resolution is critical for preventing chronic inflammation and enabling proper healing.
          </p>
          <p className="mb-4">
            <strong>Types of resolvins:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>E-series resolvins (RvE1, RvE2, RvE3):</strong> Derived from EPA (eicosapentaenoic acid). RvE1 is the most studied, showing potent anti-inflammatory and pain-reducing effects.</li>
            <li><strong>D-series resolvins (RvD1, RvD2, RvD3, RvD4, RvD5, RvD6):</strong> Derived from DHA (docosahexaenoic acid). RvD1 and RvD2 are particularly well-characterized for inflammation resolution and tissue protection.</li>
          </ul>
          <p className="mb-4">
            <strong>How resolvins work—key mechanisms:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Stop neutrophil recruitment:</strong> Resolvins prevent additional neutrophils (inflammatory white blood cells) from entering inflamed tissue, limiting further tissue damage</li>
            <li><strong>Enhance macrophage function:</strong> Promote macrophages to engulf and remove dead cells, pathogens, and cellular debris (process called efferocytosis), essential for tissue clearance</li>
            <li><strong>Reduce pain signaling:</strong> Block pain receptors (TRPV1, TRPA1) and reduce inflammatory pain without affecting normal protective pain responses</li>
            <li><strong>Lower pro-inflammatory cytokines:</strong> Decrease production of IL-1β, IL-6, TNF-α, and other inflammatory mediators</li>
            <li><strong>Preserve tissue:</strong> Protect against organ damage in conditions like sepsis, acute lung injury, and kidney disease</li>
            <li><strong>Promote antimicrobial defense:</strong> Enhance bacterial clearance while limiting excessive inflammatory damage to host tissues</li>
          </ul>
          <p className="mb-4">
            <strong>Resolvins versus traditional anti-inflammatory approaches:</strong>
          </p>
          <p className="mb-4">
            Traditional anti-inflammatory drugs (NSAIDs, corticosteroids) work by blocking inflammatory pathways, which can impair healing, increase infection risk, and cause side effects. Resolvins take a fundamentally different approach—they don't suppress inflammation but actively resolve it, allowing the inflammatory response to complete its protective functions while ensuring timely termination. This preserves beneficial aspects of inflammation (pathogen clearance, initial healing) while preventing chronic inflammation.
          </p>
          <p className="mb-4">
            <strong>Biosynthesis—how resolvins are made:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>E-series (from EPA):</strong> EPA → 18-HEPE (via aspirin-modified COX-2 or CYP enzymes) → RvE1, RvE2, RvE3</li>
            <li><strong>D-series (from DHA):</strong> DHA → 17-HDHA (via lipoxygenase) → RvD1, RvD2, RvD3, RvD4, RvD5, RvD6</li>
            <li><strong>Aspirin effect:</strong> Low-dose aspirin modifies COX-2 enzyme to produce "aspirin-triggered" resolvins (AT-RvE1, AT-RvD1), enhancing omega-3's anti-inflammatory benefits</li>
          </ul>
          <p className="mb-4">
            <strong>Clinical implications and research:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Chronic inflammatory diseases:</strong> Deficient resolvin production may contribute to rheumatoid arthritis, inflammatory bowel disease, asthma, and atherosclerosis progression</li>
            <li><strong>Cardiovascular protection:</strong> Resolvins reduce atherosclerotic plaque inflammation, promote plaque stability, and may reduce cardiovascular events</li>
            <li><strong>Pain management:</strong> RvE1 and RvD1 reduce inflammatory pain in animal models; potential therapeutic targets for chronic pain conditions</li>
            <li><strong>Periodontal disease:</strong> Topical resolvin application shows promise for treating gum inflammation and bone loss</li>
            <li><strong>Acute lung injury/ARDS:</strong> Resolvins protect lungs from inflammatory damage in animal models of sepsis and acute respiratory distress</li>
          </ul>
          <p className="mb-4">
            <strong>Omega-3 supplementation and resolvin production:</strong>
          </p>
          <p className="mb-4">
            Fish oil supplementation providing EPA and DHA increases substrate availability for resolvin synthesis. Studies show omega-3 supplementation raises blood and tissue levels of resolvins and other specialized pro-resolving mediators. A meta-analysis of omega-3 supplementation in inflammatory conditions showed reductions in IL-6, TNF-α, and C-reactive protein, effects partially mediated by increased resolvin production.
          </p>
          <p className="mb-4">
            <strong>Measurement and therapeutic development:</strong>
          </p>
          <p className="mb-4">
            Resolvins can be measured in blood, tissue, and inflammatory exudates using liquid chromatography-mass spectrometry (LC-MS/MS). These measurements show that individuals with chronic inflammatory diseases often have lower resolvin levels or impaired resolvin production despite adequate omega-3 intake, suggesting defects in biosynthetic pathways. Synthetic resolvins are being developed as potential therapeutic agents for inflammatory diseases, offering resolution-promoting effects without immune suppression.
          </p>
          <p className="mb-4">
            <strong>Factors affecting resolvin production:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Omega-3 intake:</strong> Higher EPA and DHA levels provide more substrate for resolvin synthesis</li>
            <li><strong>Aspirin:</strong> Low-dose aspirin enhances resolvin production through COX-2 modification</li>
            <li><strong>Statins:</strong> May enhance resolvin biosynthesis through effects on enzymes involved in lipid metabolism</li>
            <li><strong>Age:</strong> Resolvin production may decline with aging, contributing to age-related chronic inflammation</li>
            <li><strong>Disease states:</strong> Some chronic diseases show impaired resolvin synthesis despite adequate omega-3 substrate</li>
          </ul>
          <p className="mb-4">
            <strong>The paradigm shift:</strong>
          </p>
          <p className="mb-4">
            The discovery of resolvins shifted the scientific understanding of inflammation from a passive "turning off" to an active, programmed resolution process. This explains why simply blocking inflammation (with NSAIDs or steroids) can be problematic long-term—it prevents both inflammation and its resolution. Supporting natural resolution mechanisms through omega-3 supplementation and other approaches may offer safer, more physiological anti-inflammatory strategies.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Shield, 
          title: "Active Inflammation Resolution", 
          description: "Unlike anti-inflammatory drugs that suppress inflammation, resolvins actively resolve it by stopping neutrophil infiltration, promoting debris clearance, and restoring tissue homeostasis without impairing healing or immune function." 
        },
        { 
          icon: TrendingDown, 
          title: "Pain Reduction", 
          description: "Resolvins block inflammatory pain receptors (TRPV1, TRPA1) and reduce pain signaling without affecting protective pain responses. RvE1 and RvD1 show potent pain-reducing effects in animal models." 
        },
        { 
          icon: Heart, 
          title: "Derived from Omega-3s", 
          description: "E-series resolvins come from EPA; D-series from DHA. Omega-3 supplementation increases resolvin production, partially explaining anti-inflammatory benefits. Aspirin enhances production of 'aspirin-triggered' resolvins." 
        }
      ]}
      
      examples={[
        "During tissue inflammation, omega-3-derived resolvins (RvD1, RvE1) actively signal immune cells to stop recruiting neutrophils and begin clearing debris, resolving inflammation within days rather than weeks",
        "Fish oil supplementation (2g EPA+DHA daily for 8 weeks) increases blood RvE1 and RvD1 levels by 40-60%, correlating with reduced inflammatory pain scores in arthritis patients",
        "An individual taking low-dose aspirin (81mg) along with omega-3s produces aspirin-triggered resolvins (AT-RvD1), enhancing anti-inflammatory and cardioprotective effects beyond either intervention alone"
      ]}
      
      currentPage="resolvins"

      
      relatedTerms={[
        { term: "EPA", key: "epa" },
        { term: "DHA", key: "dha" },
        { term: "Inflammation", key: "inflammation" },
        { term: "Eicosanoids", key: "eicosanoids" },
        { term: "Omega-3", key: "omega3" },
        { term: "Cytokines", key: "cytokines" }
      ]}
    />
  );
}
