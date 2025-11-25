import { GlossaryTemplate } from '../GlossaryTemplate';

export function StandardizedExtractPage() {
  return (
    <GlossaryTemplate
      term="Standardized Extract"
      definition="A botanical or herbal extract that has been processed to contain a guaranteed minimum concentration of one or more specific active compounds or marker compounds. This ensures consistent potency and quality across different batches of the supplement."
      
      detailedExplanation="Why Standardization Matters:

Natural plant materials can vary significantly in their active compound content due to factors like:
• Growing conditions: Soil quality, climate, and rainfall affect plant chemistry
• Harvest timing: Active compound levels change throughout the plant's growth cycle
• Plant part used: Different parts (root, leaf, seed) contain different compound concentrations
• Storage and processing: Degradation can occur if materials aren't properly handled

Standardization addresses this variability by adjusting extract concentrations to meet specific targets.

How Standardization Works:

The standardization process typically involves:
1. Testing: Analytical testing measures the concentration of target compounds in raw material
2. Concentration or dilution: The extract is adjusted to reach the desired potency
3. Addition of excipients: Sometimes inert ingredients are added to achieve standardization
4. Quality control: Final product is tested to confirm it meets specifications

Common Examples:

• Curcumin extract: Standardized to 95% curcuminoids
• Ashwagandha: Standardized to 5% withanolides
• Ginkgo biloba: Standardized to 24% ginkgo flavone glycosides and 6% terpene lactones
• St. John's Wort: Standardized to 0.3% hypericin
• Milk thistle: Standardized to 80% silymarin

Reading Supplement Labels:

Standardized extracts on supplement labels typically show:
• Extract ratio: (e.g., 10:1) indicates 10 grams of herb produced 1 gram of extract
• Percentage standardization: (e.g., 'standardized to 5% active compound')
• Actual compound amount: Some labels list both the total extract amount and the standardized compound amount

Advantages of Standardized Extracts:

• Consistent dosing: Each batch contains the same amount of active compounds
• Research reproducibility: Studies using standardized extracts can be replicated
• Predictable effects: Consumers get consistent therapeutic effects
• Quality assurance: Indicates manufacturer attention to quality control
• Comparison possible: Easier to compare products when standardization is specified

Limitations:

While standardization improves consistency, it has some limitations:
• Marker vs. active compounds: Sometimes standardization targets marker compounds that may not be the actual therapeutic agents
• Missing synergy: Whole plant extracts may contain beneficial compounds not captured by standardization
• Not all compounds: Typically only 1-3 compounds are standardized; others may still vary
• Manufacturing variations: Different manufacturers may use different marker compounds or methods

Standardized Extract vs. Whole Herb:

Standardized Extract:
• Known concentration of active compounds
• More consistent effects
• Usually more concentrated
• May remove some plant compounds

Whole Herb (Non-Standardized):
• Variable active compound content
• Contains full spectrum of plant compounds
• Less predictable potency
• May preserve synergistic effects

Research Considerations:

When reading research on herbal supplements:
• Check if the study used a standardized extract
• Note what compound it was standardized to
• Be cautious applying research on standardized extracts to non-standardized products
• Different standardization levels may produce different effects

Choosing Quality Standardized Extracts:

Look for:
• Clear labeling of standardization (percentage and compound)
• Reputable manufacturers with quality control processes
• Third-party testing verification
• Research supporting the standardization level used
• Transparency about extraction methods"
      
      examples={[
        "A curcumin supplement labeled 'Turmeric Extract (95% curcuminoids)' guarantees that 95% of the extract consists of the active curcuminoid compounds",
        "Ashwagandha standardized to 5% withanolides ensures each dose contains a consistent amount of these key bioactive compounds",
        "Ginkgo biloba standardized to 24% flavone glycosides / 6% terpene lactones matches the concentration used in clinical research"
      ]}
      
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Third-Party Testing", key: "third-party-testing" },
        { term: "Therapeutic Dose", key: "therapeutic-dose" }
      ]}
      currentPage="standardizedextract"
    />
  );
}
