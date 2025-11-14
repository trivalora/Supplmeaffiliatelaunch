import { GlossaryTemplate } from '../GlossaryTemplate';
import { Activity, Heart, Shield } from 'lucide-react';

interface SCFAPageProps {
  onNavigate?: (key: string) => void;
}

export function SCFAPage({ onNavigate }: SCFAPageProps) {
  return (
    <GlossaryTemplate
      term="SCFA (Short-Chain Fatty Acids)"
      abbreviation="SCFA, SCFAs"
      pronunciation="short-chayn fa-tee as-ids"
      onNavigate={onNavigate}
      currentPage="scfa"
      definition="Fatty acids containing fewer than six carbon atoms (primarily acetate, propionate, and butyrate) that are produced by bacterial fermentation of dietary fiber in the colon, providing energy to colonocytes and exerting wide-ranging metabolic, anti-inflammatory, and immune-modulating effects throughout the body."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Short-chain fatty acids (SCFAs) are the primary metabolic products of gut bacteria fermenting dietary fibers (prebiotics) that resist digestion in the small intestine and reach the colon intact. The three main SCFAs—acetate, propionate, and butyrate—are produced in varying proportions depending on fiber type, gut bacterial composition, and individual factors. SCFAs serve as a critical link between the gut microbiome, gut health, and systemic metabolism, influencing everything from intestinal barrier function to glucose regulation, immune function, and inflammation.
          </p>
          <p className="mb-4">
            <strong>The three main SCFAs and their proportions:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Acetate (C2):</strong> The most abundant SCFA, typically comprising 50-60% of total SCFAs produced in the colon. Absorbed into the bloodstream and metabolized by peripheral tissues including muscle, liver, heart, and brain. Serves as an energy substrate and signaling molecule.
            </li>
            <li>
              <strong>Propionate (C3):</strong> Typically 20-25% of total SCFAs. Primarily metabolized by the liver where it may reduce cholesterol synthesis and gluconeogenesis (glucose production). May influence satiety signaling and metabolic regulation.
            </li>
            <li>
              <strong>Butyrate (C4):</strong> Typically 15-20% of total SCFAs, but disproportionately important for gut health. Primary energy source for colonocytes (cells lining the colon), critical for maintaining intestinal barrier integrity, has potent anti-inflammatory effects, and may protect against colon cancer.
            </li>
          </ul>
          <p className="mb-4">
            <strong>How SCFAs are produced:</strong>
          </p>
          <p className="mb-4">
            SCFAs result from bacterial fermentation of dietary fibers and resistant starches that escape digestion in the small intestine. Different bacterial species produce different SCFAs:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Butyrate producers:</strong> Faecalibacterium prausnitzii, Roseburia species, Eubacterium rectale, Anaerostipes species</li>
            <li><strong>Propionate producers:</strong> Bacteroides species, some Prevotella species</li>
            <li><strong>Acetate producers:</strong> Bifidobacterium species, Lactobacillus species, and many others (acetate is produced by most fermentative bacteria)</li>
          </ul>
          <p className="mb-4">
            Prebiotic fibers that effectively increase SCFA production include inulin, fructo-oligosaccharides (FOS), galacto-oligosaccharides (GOS), resistant starch, beta-glucan, and pectin.
          </p>
          <p className="mb-4">
            <strong>Functions and health effects of SCFAs:</strong>
          </p>
          <p className="mb-4">
            <strong>Gut health:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Colonocyte energy:</strong> Butyrate provides 60-70% of the energy needed by colonocytes, supporting their rapid turnover and function</li>
            <li><strong>Intestinal barrier integrity:</strong> SCFAs (especially butyrate) strengthen tight junctions between epithelial cells, reducing intestinal permeability ("leaky gut")</li>
            <li><strong>Mucus production:</strong> Stimulate mucus secretion, protecting the gut lining</li>
            <li><strong>Colonic pH:</strong> Lower colonic pH, inhibiting pathogenic bacteria growth and promoting beneficial bacteria</li>
          </ul>
          <p className="mb-4">
            <strong>Anti-inflammatory and immune effects:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Immune regulation:</strong> SCFAs modulate immune cell function, promoting regulatory T cells (Tregs) that dampen excessive inflammation</li>
            <li><strong>Anti-inflammatory signaling:</strong> Activate G-protein coupled receptors (GPR41, GPR43, GPR109A) that reduce inflammatory cytokine production</li>
            <li><strong>Histone deacetylase (HDAC) inhibition:</strong> Particularly butyrate, which modulates gene expression and reduces inflammation</li>
            <li><strong>Systemic anti-inflammatory effects:</strong> SCFAs absorbed into circulation can reduce inflammation throughout the body</li>
          </ul>
          <p className="mb-4">
            <strong>Metabolic effects:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Glucose homeostasis:</strong> Propionate may reduce hepatic glucose production; SCFAs improve insulin sensitivity in some studies</li>
            <li><strong>Lipid metabolism:</strong> Propionate may reduce cholesterol synthesis in the liver</li>
            <li><strong>Appetite regulation:</strong> SCFAs stimulate release of satiety hormones (GLP-1, PYY), potentially reducing food intake</li>
            <li><strong>Energy harvest:</strong> SCFAs contribute approximately 5-10% of human daily energy requirements</li>
          </ul>
          <p className="mb-4">
            <strong>Other potential benefits:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Colon cancer prevention:</strong> Butyrate has anti-proliferative effects on cancer cells and may protect against colorectal cancer</li>
            <li><strong>Bone health:</strong> May improve calcium absorption</li>
            <li><strong>Brain health:</strong> Emerging evidence suggests SCFAs may influence brain function via the gut-brain axis</li>
          </ul>
          <p className="mb-4">
            <strong>SCFAs in supplement research:</strong>
          </p>
          <p className="mb-4">
            Prebiotic fiber supplementation consistently increases fecal SCFA levels, particularly acetate and butyrate:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Inulin-type fructans:</strong> Increase Bifidobacterium populations and SCFA production, with documented increases in fecal acetate and butyrate</li>
            <li><strong>GOS (galacto-oligosaccharides):</strong> Meta-analyses show concurrent increases in Bifidobacteria populations and fecal acetate and butyrate (SCFA markers of healthy fermentation)</li>
            <li><strong>Resistant starch:</strong> Particularly effective at increasing butyrate production</li>
          </ul>
          <p className="mb-4">
            However, increases in fecal SCFA concentrations don't always translate to clinical benefits, as SCFAs are rapidly absorbed in the colon. The relationship between SCFA production and health outcomes is complex and context-dependent.
          </p>
          <p className="mb-4">
            <strong>Measuring SCFAs:</strong>
          </p>
          <p className="mb-4">
            SCFAs can be measured in fecal samples (representing production minus absorption) or in blood (representing absorbed SCFAs). Fecal measurements are more common in research. Normal total fecal SCFA concentrations range from 70-140 mmol/kg, with significant individual variation based on diet and microbiome composition.
          </p>
          <p className="mb-4">
            <strong>Limitations and considerations:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Individual SCFA production varies widely based on microbiome composition, diet, and transit time</li>
            <li>Very rapid increases in fiber intake can cause excessive gas and bloating as SCFA production increases; gradual increases recommended</li>
            <li>In individuals with SIBO or IBS, excessive SCFA production from fermentation in the small intestine can cause symptoms</li>
            <li>The specific health effects of each SCFA are still being elucidated through ongoing research</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Activity, 
          title: "Products of Fiber Fermentation", 
          description: "SCFAs (acetate, propionate, butyrate) are produced when gut bacteria ferment dietary fibers and resistant starches in the colon. Different bacterial species produce different SCFAs in varying proportions." 
        },
        { 
          icon: Shield, 
          title: "Colonocyte Energy & Gut Barrier", 
          description: "Butyrate provides 60-70% of energy for colonocytes, strengthens intestinal tight junctions reducing permeability, stimulates mucus production, and lowers colonic pH to inhibit pathogens." 
        },
        { 
          icon: Heart, 
          title: "Systemic Metabolic & Anti-inflammatory Effects", 
          description: "SCFAs regulate immune function, promote anti-inflammatory Tregs, improve insulin sensitivity, stimulate satiety hormones (GLP-1, PYY), and may reduce cholesterol synthesis. Effects extend throughout the body via circulation." 
        }
      ]}
      
      examples={[
        "Prebiotic fiber supplementation (inulin, GOS at 5-20g daily) increases beneficial Bifidobacterium populations and fecal SCFA production, improving gut health markers",
        "GOS supplementation consistently increases fecal acetate and butyrate in meta-analyses of randomized controlled trials, demonstrating successful colonic fermentation",
        "Individuals consuming 30-40g fiber daily from diverse sources (whole grains, legumes, vegetables, fruits) typically have higher fecal SCFA concentrations and healthier gut microbiomes compared to low-fiber diets"
      ]}
      
      relatedTerms={[
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "GOS", key: "gos" },
        { term: "Inulin-type Fructans", key: "inulintypefructans" },
        { term: "GLP-1", key: "glp1" },
        { term: "PYY", key: "pyy" }
      ]}
    />
  );
}
