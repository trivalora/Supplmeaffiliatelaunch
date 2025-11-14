import { GlossaryTemplate } from '../GlossaryTemplate';

export function ThirdPartyTestingPage({
  onNavigate,
  onContactClick,
  onLegalClick
}: {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
}) {
  const expandedExplanation = (
    <div>
      <p>
        Unlike pharmaceuticals, dietary supplements in many countries (including the U.S.) don't require pre-market approval. While manufacturers are responsible for ensuring safety and accuracy of labeling, third-party testing provides independent verification.
      </p>

      <h3>Major Third-Party Testing Organizations</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="mt-0"><a href="https://www.usp.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">USP (United States Pharmacopeia)</a></h4>
          <p className="mb-0">
            Tests for ingredient accuracy, purity, potency, and manufacturing quality. Products with the USP Verified Mark have undergone rigorous testing and facility audits.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="mt-0"><a href="https://www.consumerlab.com" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">ConsumerLab</a></h4>
          <p className="mb-0">
            Independent testing service that purchases supplements off the shelf and tests them for quality. Publishes detailed reports comparing products and identifying those that pass or fail testing.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="mt-0"><a href="https://www.nsf.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">NSF International</a></h4>
          <p className="mb-0">
            Tests products and inspects manufacturing facilities. Products carrying NSF certification have been verified for contents, contaminant testing, and manufacturing standards.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="mt-0">Informed Choice/Informed Sport</h4>
          <p className="mb-0">
            Specializes in testing for banned substances, primarily used by athletes. Every batch is tested for substances prohibited in sport.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="mt-0">Labdoor</h4>
          <p className="mb-0">
            Purchases products, tests them, and ranks them based on quality, accuracy, and value. Results are published with detailed reports.
          </p>
        </div>
      </div>

      <h3>What Third-Party Testing Evaluates</h3>
      <p>Common testing parameters include:</p>
      <ul>
        <li><strong>Identity testing:</strong> Confirms the ingredient is what the label claims</li>
        <li><strong>Potency analysis:</strong> Measures actual amounts of active ingredients</li>
        <li><strong>Contaminant screening:</strong> Tests for heavy metals (lead, mercury, arsenic, cadmium)</li>
        <li><strong>Microbial testing:</strong> Screens for bacteria, mold, yeast</li>
        <li><strong>Banned substance testing:</strong> Checks for prohibited compounds (important for athletes)</li>
        <li><strong>Pesticide testing:</strong> Evaluates agricultural chemical residues</li>
        <li><strong>Dissolution testing:</strong> Ensures tablets/capsules break down properly for absorption</li>
      </ul>

      <h3>Benefits of Third-Party Testing</h3>
      <ul>
        <li><strong>Consumer protection:</strong> Provides assurance that products are safe and accurately labeled</li>
        <li><strong>Quality verification:</strong> Confirms manufacturer claims are accurate</li>
        <li><strong>Contaminant detection:</strong> Identifies harmful substances before they reach consumers</li>
        <li><strong>Brand accountability:</strong> Manufacturers must maintain quality to keep certifications</li>
        <li><strong>Informed choices:</strong> Consumers can compare products based on verified quality</li>
      </ul>

      <h3>Limitations of Third-Party Testing</h3>
      <ul>
        <li><strong>Not comprehensive:</strong> Testing focuses on specific parameters; not every aspect is evaluated</li>
        <li><strong>Snapshot in time:</strong> Tests represent one batch; subsequent batches may differ</li>
        <li><strong>Cost barrier:</strong> Testing and certification costs can make products more expensive</li>
        <li><strong>Voluntary:</strong> Not all manufacturers choose to pursue third-party testing</li>
        <li><strong>Different standards:</strong> Testing organizations may use different criteria and thresholds</li>
        <li><strong>No efficacy testing:</strong> Third-party testing verifies contents, not whether the supplement works</li>
      </ul>

      <h3>How to Verify Third-Party Testing</h3>
      <p>When looking for third-party tested supplements:</p>
      <ol>
        <li><strong>Look for certification seals:</strong> USP, NSF, Informed Sport, ConsumerLab logos on packaging</li>
        <li><strong>Check organization databases:</strong> Most testing organizations maintain searchable product databases online</li>
        <li><strong>Read labels carefully:</strong> Look for statements about third-party testing or quality certifications</li>
        <li><strong>Verify lot numbers:</strong> Some certifications allow you to look up specific batch testing results</li>
        <li><strong>Research the manufacturer:</strong> Check if they have a history of quality and transparency</li>
      </ol>

      <h3>Third-Party Testing vs. Internal Testing</h3>
      <ul>
        <li><strong>Internal testing:</strong> Conducted by the manufacturer or their contracted labs; potential conflict of interest</li>
        <li><strong>Third-party testing:</strong> Independent verification with no financial stake in the outcome</li>
        <li><strong>Both are valuable:</strong> Internal testing ensures batch-to-batch quality; third-party testing provides unbiased verification</li>
      </ul>

      <h3>Cost and Value Considerations</h3>
      <p>
        Third-party tested supplements typically cost more due to testing fees and certification costs. However, the added cost may be worthwhile for:
      </p>
      <ul>
        <li>Supplements you take long-term</li>
        <li>Products with known quality control issues in the industry</li>
        <li>Situations where purity is critical (athletic competition, health conditions)</li>
        <li>Premium or specialty supplements where accuracy matters most</li>
      </ul>

      <h3>Red Flags (Lack of Testing)</h3>
      <p>Be cautious of supplements that:</p>
      <ul>
        <li>Make no mention of quality testing or verification</li>
        <li>Have been flagged in ConsumerLab or other testing reports</li>
        <li>Come from manufacturers with quality control issues</li>
        <li>Make exaggerated claims without third-party verification</li>
        <li>Are significantly cheaper than third-party tested alternatives (may indicate lower quality)</li>
      </ul>
    </div>
  );

  return (
    <GlossaryTemplate
      term="Third-Party Testing"
      definition="Quality verification performed by an independent laboratory or certification organization that has no financial interest in the supplement manufacturer or product outcome. These unbiased organizations test supplements to verify their contents, purity, and quality claims."
      
      whyItMatters="Third-party testing provides independent verification that the product contains what the label claims, is free from harmful contaminants, active ingredients meet claimed concentrations, and manufacturing processes meet quality standards."
      
      expandedExplanation={expandedExplanation}
      
      relatedTerms={[
        { term: "Standardized Extract", key: "standardized-extract" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
      
      onNavigate={onNavigate}
      currentPage="third-party-testing"
      onContactClick={onContactClick}
      onLegalClick={onLegalClick}
    />
  );
}
