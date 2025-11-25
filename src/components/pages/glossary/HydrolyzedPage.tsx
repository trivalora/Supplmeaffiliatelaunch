'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Droplet, TrendingUp, Zap } from 'lucide-react';

export function HydrolyzedPage() {
  return (
    <GlossaryTemplate
      term="Hydrolyzed"
      pronunciation="hy-druh-lyzd"
      definition="Hydrolyzed refers to proteins or other compounds that have been broken down into smaller fragments through hydrolysis—a chemical process that uses water to break chemical bonds. In supplements, hydrolyzed proteins are partially digested proteins broken into smaller peptides and amino acids."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Hydrolysis is a chemical reaction in which water molecules break the peptide bonds that link amino acids together in protein chains. This process can occur naturally during digestion or be performed industrially using enzymes, acids, or heat to create hydrolyzed protein ingredients.
          </p>
          <p className="mb-4">
            <strong>The hydrolysis process:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Enzymatic hydrolysis:</strong> Most common method using proteolytic enzymes (proteases) to selectively break peptide bonds. Offers good control over degree of hydrolysis and produces high-quality products.</li>
            <li><strong>Acid hydrolysis:</strong> Uses strong acids (like hydrochloric acid) to break proteins. Fast but can damage some amino acids and create bitter flavors.</li>
            <li><strong>Alkaline hydrolysis:</strong> Uses bases to break proteins. Less common for food/supplement applications.</li>
            <li><strong>Heat/pressure:</strong> Can accelerate hydrolysis reactions.</li>
          </ul>
          <p className="mb-4">
            <strong>Degree of hydrolysis (DH):</strong>
          </p>
          <p className="mb-4">
            The extent of protein breakdown is measured as degree of hydrolysis, expressed as a percentage:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Low DH (2-10%):</strong> Large peptides remain, maintains more protein structure</li>
            <li><strong>Medium DH (10-20%):</strong> Mixture of medium-sized peptides</li>
            <li><strong>High DH ({'>'}20%):</strong> Extensively broken down into small peptides and free amino acids</li>
          </ul>
          <p className="mb-4">
            Higher DH generally means faster absorption but can result in more bitter taste. The optimal DH depends on the intended use and desired properties.
          </p>
          <p className="mb-4">
            <strong>Common hydrolyzed protein supplements:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Hydrolyzed whey protein:</strong> Pre-digested whey that may be absorbed faster than intact whey. Popular for post-workout recovery.</li>
            <li><strong>Hydrolyzed collagen (collagen peptides):</strong> Collagen broken into small, easily absorbed peptides. Used for skin, joint, and bone health.</li>
            <li><strong>Hydrolyzed casein:</strong> Broken-down casein protein that digests faster than intact casein.</li>
            <li><strong>Hydrolyzed plant proteins:</strong> Pea, rice, or soy proteins that have been enzymatically broken down.</li>
            <li><strong>Hydrolyzed fish protein:</strong> Often used in medical nutrition products.</li>
          </ul>
          <p className="mb-4">
            <strong>Advantages of hydrolyzed proteins:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Faster absorption:</strong> Smaller peptides may be absorbed more rapidly than intact proteins</li>
            <li><strong>Reduced allergenicity:</strong> Breaking down proteins can reduce allergic reactions in some cases (though not always guaranteed)</li>
            <li><strong>Easier digestion:</strong> May be beneficial for people with digestive issues or impaired protein digestion</li>
            <li><strong>Higher solubility:</strong> Dissolves more easily in liquids</li>
            <li><strong>Potentially enhanced bioavailability:</strong> Some peptides may have better absorption than intact proteins</li>
          </ul>
          <p className="mb-4">
            <strong>Disadvantages:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Bitter taste:</strong> Hydrolysis often creates bitter flavors, especially at higher DH</li>
            <li><strong>Higher cost:</strong> Additional processing increases price</li>
            <li><strong>Questionable necessity:</strong> Healthy individuals typically digest intact proteins efficiently; the added benefits of hydrolyzed forms are often marginal for general populations</li>
          </ul>
          <p className="mb-4">
            For most people with normal digestion, standard (non-hydrolyzed) protein supplements are adequate and more cost-effective. Hydrolyzed proteins may be most beneficial for individuals with digestive impairments, certain medical conditions, or specific athletic contexts where rapid absorption is prioritized.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Droplet, 
          title: "Pre-Digested Protein", 
          description: "Hydrolyzed proteins have been broken down using water and enzymes/acids into smaller peptides and amino acids, essentially pre-digesting the protein before consumption. Degree of hydrolysis determines fragment size." 
        },
        { 
          icon: TrendingUp, 
          title: "Potentially Faster Absorption", 
          description: "Smaller peptides may be absorbed more quickly than intact proteins and may be easier to digest. Can also reduce allergenicity in some cases and improve solubility in liquids." 
        },
        { 
          icon: Zap, 
          title: "Common in Specialized Products", 
          description: "Found in hydrolyzed whey, collagen peptides, and medical nutrition products. Often more expensive and bitter-tasting than non-hydrolyzed forms. Benefits are most relevant for those with digestive issues." 
        }
      ]}
      
      currentPage="hydrolyzed"

      
      relatedTerms={['protein', 'absorption', 'bioavailability', 'collagen']}
    />
  );
}
