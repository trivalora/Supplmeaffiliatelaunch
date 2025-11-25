import { GlossaryTemplate } from '../GlossaryTemplate';

export function ChelatedPage() {
  return (
    <GlossaryTemplate
      term="Chelated"
      pronunciation="key-LAY-shun"
      definition="A process where a mineral is bound to an organic molecule, such as an amino acid or organic acid. This binding creates a stable complex that may enhance the mineral's absorption and bioavailability in the body."
      
      detailedExplanation="The term comes from the Greek word 'chele,' meaning claw, referring to how the organic molecule 'grabs onto' the mineral like a crab's claw.

How Chelation Works:

In a chelated mineral supplement:
1. Binding: The mineral ion is bonded to an organic molecule (the chelating agent)
2. Protection: This complex protects the mineral from interacting with other compounds in the digestive tract that might inhibit absorption
3. Transport: The chelated complex may be absorbed more efficiently through the intestinal wall
4. Release: Once absorbed, the mineral is released from the chelating agent for use by the body

Common Chelating Agents:

• Amino acid chelates: Minerals bound to amino acids like glycine (e.g., magnesium glycinate, zinc glycinate)
• Picolinates: Minerals bound to picolinic acid (e.g., chromium picolinate)
• Citrates: Minerals bound to citric acid (e.g., calcium citrate, magnesium citrate)
• Malates: Minerals bound to malic acid (e.g., magnesium malate)
• Aspartates: Minerals bound to aspartic acid
• Orotates: Minerals bound to orotic acid (e.g., magnesium orotate)

Advantages of Chelated Minerals:

• Enhanced absorption: Chelation may improve bioavailability compared to inorganic mineral salts
• Reduced interactions: Chelation protects minerals from binding with phytates, oxalates, or other dietary factors that inhibit absorption
• Better tolerance: Some chelated forms cause less gastrointestinal discomfort than inorganic salts
• Stability: The chelate complex remains stable through the digestive process
• Lower doses needed: Higher bioavailability may allow for smaller doses

Common Chelated Mineral Supplements:

Magnesium Glycinate: Magnesium bound to glycine; known for high bioavailability and minimal laxative effect compared to other magnesium forms.

Zinc Picolinate: Zinc bound to picolinic acid; research suggests superior absorption compared to zinc oxide or zinc gluconate.

Iron Bisglycinate: Iron bound to two glycine molecules; associated with better absorption and fewer gastrointestinal side effects than ferrous sulfate.

Calcium Citrate: Calcium bound to citric acid; more easily absorbed than calcium carbonate, especially in individuals with low stomach acid.

Chelated vs. Non-Chelated Forms:

Non-chelated (inorganic) forms include:
• Oxides (e.g., magnesium oxide, zinc oxide)
• Sulfates (e.g., ferrous sulfate)
• Carbonates (e.g., calcium carbonate)

These forms are often less expensive but may have lower bioavailability and cause more digestive side effects. However, some inorganic forms (like magnesium oxide) can be therapeutic for specific purposes (e.g., as a laxative).

Research Evidence:

Scientific evidence for enhanced absorption of chelated minerals varies:
• Well-supported: Iron bisglycinate and zinc picolinate show consistent evidence of improved absorption
• Moderately supported: Magnesium glycinate and calcium citrate have some evidence of benefits
• Mixed evidence: Some chelated forms lack strong comparative research
• Individual variation: Bioavailability differences may be more pronounced in certain individuals (e.g., those with digestive issues)

Considerations:

• Cost: Chelated minerals typically cost more than inorganic forms
• Elemental content: Chelated forms may contain less elemental mineral per dose due to the weight of the chelating agent
• Quality matters: Not all 'chelated' products are created equal; manufacturing processes vary
• Context-dependent benefits: Bioavailability advantages may be more significant in certain populations or with certain minerals"
      
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Absorption", key: "absorption" },
        { term: "Amino Acids", key: "amino-acids" },
        { term: "Mineral", key: "mineral" },
        { term: "Phytates", key: "phytates" },
        { term: "Oxalates", key: "oxalates" },
        { term: "Glycine", key: "glycine" }
      ]}
    />
  );
}
