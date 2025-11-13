import { GlossaryTemplate } from '../GlossaryTemplate';

export function CardiovascularPage({
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
      term="Cardiovascular"
      definition="Relating to the heart (cardio) and blood vessels (vascular)—the circulatory system responsible for transporting blood, oxygen, nutrients, hormones, and waste products throughout the body."
      
      detailedExplanation="The cardiovascular system consists of the heart (a muscular pump), arteries (vessels carrying oxygenated blood away from the heart), veins (vessels returning deoxygenated blood to the heart), and capillaries (tiny vessels where nutrient and gas exchange occurs). This system maintains blood pressure, delivers oxygen and nutrients to tissues, removes metabolic waste products, distributes heat, and transports immune cells and signaling molecules throughout the body.

Cardiovascular health is assessed through multiple biomarkers and measurements including blood pressure, lipid profile (total cholesterol, LDL 'bad' cholesterol, HDL 'good' cholesterol, triglycerides), inflammatory markers (CRP), homocysteine, blood glucose, and measures of arterial stiffness and function. Cardiovascular disease (CVD)—including coronary artery disease, heart attack, stroke, and peripheral vascular disease—remains the leading cause of death globally, driven by risk factors like high blood pressure, elevated cholesterol, diabetes, smoking, obesity, physical inactivity, and chronic inflammation.

Many supplements target cardiovascular health through various mechanisms: omega-3 fatty acids reduce triglycerides and inflammation; magnesium helps regulate blood pressure; vitamin D may support vascular function; coenzyme Q10 supports heart muscle energy production; and antioxidants may protect blood vessels from oxidative damage. Lifestyle factors—particularly diet quality, physical activity, stress management, sleep, and smoking cessation—remain the most powerful interventions for cardiovascular health, with supplements playing a supportive role."
      
      examples={[
        "Magnesium supplementation (at least 300 mg/day for 1+ month) reduces systolic blood pressure by ~2.0 mmHg and diastolic by ~1.78 mmHg in normotensive and hypertensive adults",
        "Omega-3 fatty acids (EPA and DHA) consistently reduce triglycerides by 15-30% in people with elevated levels, improving cardiovascular risk profile",
        "Some studies suggest very high supplemental calcium may be associated with increased cardiovascular risk, though evidence remains mixed"
      ]}
      
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" }
      ]}
      
      onNavigate={onNavigate}
      currentPage="cardiovascular"
      onContactClick={onContactClick}
      onLegalClick={onLegalClick}
    />
  );
}
