import { GlossaryTemplate } from '../GlossaryTemplate';

export function AntioxidantPage({
  onNavigate,
  onContactClick,
  onLegalClick
}: {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
}) {
  return (
    <GlossaryTemplate
      term="Antioxidant"
      definition="A molecule that inhibits oxidation reactions by neutralizing free radicals, thereby protecting cells from oxidative damage."
      
      detailedExplanation="Antioxidants work by donating an electron to unstable free radicals, stabilizing them and preventing chain reactions of cellular damage. The body produces endogenous antioxidants (made internally) such as glutathione, superoxide dismutase (SOD), catalase, and coenzyme Q10, while exogenous antioxidants must be obtained from diet and include vitamins C and E, carotenoids (beta-carotene, lycopene), polyphenols (curcumin, resveratrol), and minerals like selenium and zinc.

Antioxidants operate through different mechanisms: some directly neutralize free radicals (direct antioxidants like vitamin C), others chelate metal ions that catalyze oxidation reactions (like flavonoids), while antioxidant enzymes catalyze reactions that convert reactive oxygen species into harmless molecules. The antioxidant defense system works as a network where different antioxidants regenerate each other—for example, vitamin C regenerates oxidized vitamin E back to its active form.

While antioxidants are beneficial, balance is crucial. Moderate levels of free radicals are necessary for immune function, cell signaling, and exercise adaptations. Excessive antioxidant supplementation, particularly with isolated high-dose synthetic forms, may interfere with these beneficial processes and has shown mixed or even negative results in some clinical trials. Antioxidants from whole foods appear safer and more effective than high-dose isolated supplements."
      
      examples={[
        "Curcumin significantly increased antioxidant enzymes: superoxide dismutase (SOD) SMD 0.82, catalase 10.26, and glutathione peroxidase 8.90",
        "Vitamin C acts as a water-soluble antioxidant that neutralizes free radicals in blood and tissues, while vitamin E protects fat-soluble cell membranes",
        "Sulforaphane activates Nrf2, a master regulator that increases production of multiple endogenous antioxidant enzymes"
      ]}
      
      relatedTerms={[
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Biomarker", key: "biomarker" }
      ]}
      
      onNavigate={onNavigate}
      currentPage="antioxidant"
      onContactClick={onContactClick}
      onLegalClick={onLegalClick}
    />
  );
}
