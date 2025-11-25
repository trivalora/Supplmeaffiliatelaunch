import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function ProteinPage() {
  return (
    <GlossaryTemplate
      term="Protein"
      definition="A macronutrient composed of amino acids that serves as the primary building block for tissues, enzymes, hormones, antibodies, and numerous other biological molecules essential for life."
      detailedExplanation="Proteins are large, complex molecules made up of chains of amino acids linked by peptide bonds. There are 20 different amino acids, nine of which are essential (must be obtained from diet) and 11 non-essential (can be synthesized by the body). The sequence and arrangement of amino acids determine each protein's unique structure and function. Dietary protein is broken down into amino acids during digestion, which are then absorbed and used to build new proteins or converted to energy.

Protein serves numerous critical functions: building and repairing tissues (muscle, skin, organs), producing enzymes that catalyze biochemical reactions, creating hormones and signaling molecules, forming antibodies for immune defense, transporting molecules throughout the body (like hemoglobin carrying oxygen), maintaining fluid balance, and providing structure to cells and tissues. Adequate protein intake is essential for growth, development, tissue repair, immune function, and maintaining muscle mass.

Protein quality varies based on amino acid profile and digestibility. Complete proteins (containing all nine essential amino acids in adequate amounts) include animal sources like meat, fish, eggs, and dairy, as well as soy and quinoa. Most plant proteins are incomplete but can be combined to provide all essential amino acids. Recommended daily protein intake varies by age, activity level, and health status, typically ranging from 0.8 g/kg body weight for sedentary adults to 1.6-2.2 g/kg for athletes and older adults seeking to maintain muscle mass."
      examples={[
        "Consuming 20-40g of high-quality protein after resistance training maximizes muscle protein synthesis and supports muscle growth and recovery",
        "Older adults (65+) may need higher protein intake (1.2-1.5 g/kg daily) to prevent age-related muscle loss (sarcopenia)",
        "Distributing protein across meals (25-30g per meal) may optimize muscle protein synthesis better than consuming most protein in one meal"
      ]}
      relatedTerms={[
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" },
        { term: "Absorption", key: "absorption" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="protein"
    />
  );
}
