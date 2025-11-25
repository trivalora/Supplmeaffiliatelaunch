import { GlossaryTemplate } from '../GlossaryTemplate';

export function ThyroidFunctionPage() {
  return (
    <GlossaryTemplate
      term="Thyroid Function"
      definition="The activity of the thyroid gland in producing hormones that regulate metabolism, energy production, body temperature, heart rate, and numerous other bodily functions."
      detailedExplanation="The thyroid gland, located in the neck, produces two main hormones: thyroxine (T4) and triiodothyronine (T3). T4 is the inactive form that's converted to active T3 in peripheral tissues. These hormones regulate metabolic rate, protein synthesis, bone growth, brain development in children, and sensitivity to other hormones. The pituitary gland releases thyroid-stimulating hormone (TSH) to regulate thyroid hormone production through a feedback loop.

Hypothyroidism (underactive thyroid) causes fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, depression, and slow heart rate. It's commonly caused by autoimmune thyroiditis (Hashimoto's disease), iodine deficiency, or thyroid damage. Hyperthyroidism (overactive thyroid) causes weight loss, heat intolerance, rapid heartbeat, anxiety, tremors, and insomnia, often from Graves' disease or thyroid nodules.

Thyroid function is assessed through blood tests measuring TSH, free T4, and free T3. Normal TSH ranges from 0.4-4.0 mIU/L, though optimal ranges are debated. Iodine and selenium are essential for thyroid hormone synthesis and conversion. Iron, zinc, and vitamin D also support thyroid health. Supplementation should be approached cautiously and ideally under medical supervision, as excessive iodine can worsen some thyroid conditions."
      examples={[
        "Iodine supplementation corrects hypothyroidism caused by iodine deficiency, but excessive iodine can trigger or worsen autoimmune thyroid disease",
        "Selenium (100-200mcg daily) may benefit autoimmune thyroiditis by reducing thyroid antibodies and supporting T4 to T3 conversion",
        "Iron deficiency impairs thyroid hormone synthesis and can reduce the effectiveness of thyroid medication in hypothyroid patients"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Absorption", key: "absorption" }
      ]}
    />
  );
}
