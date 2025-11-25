import { GlossaryTemplate } from '../GlossaryTemplate';

export function WMDPage() {
  return (
    <GlossaryTemplate
      term="Weighted Mean Difference"
      abbreviation="WMD"
      definition="A statistical measure used in meta-analyses to pool results across studies that measured the same outcome using the same scale or units, with each study's contribution weighted by its precision."
      detailedExplanation="Weighted Mean Difference (WMD) combines results from multiple studies measuring an outcome in identical units (e.g., mg/dL for blood glucose, mmHg for blood pressure, or kg for body weight). Unlike Standardized Mean Difference (SMD) which standardizes results to a unitless scale, WMD preserves the original measurement units, making interpretation more intuitive and clinically meaningful.

The 'weighted' aspect means studies are not simply averaged together—instead, larger and more precise studies (those with smaller standard errors) receive more weight in the calculation. This approach gives more influence to higher-quality evidence while still incorporating data from smaller trials. Studies are typically weighted by the inverse of their variance: studies with less variability contribute more to the pooled estimate.

WMD is particularly valuable when all included studies use the same measurement tool or scale. For example, when pooling trials that measured fasting blood glucose in mg/dL, a WMD of -10 mg/dL means the intervention reduced blood glucose by an average of 10 mg/dL compared to control. This direct interpretation in familiar units makes WMD easier to understand than SMD for clinicians and patients.

When reading meta-analyses, WMD is often reported alongside a 95% confidence interval (CI). If the CI does not cross zero and p &lt;0.05, the difference is statistically significant. The width of the CI indicates precision—narrower intervals suggest more confidence in the estimate. Heterogeneity statistics (I², τ²) indicate whether results varied consistently across studies or showed substantial differences."
      examples={[
        "A meta-analysis showing magnesium supplementation reduced fasting plasma glucose with WMD = -4.64 mg/dL (95% CI -6.40 to -2.87) indicates an average reduction of about 4.6 mg/dL",
        "For blood pressure, WMD of -2.0 mmHg systolic (95% CI -3.5 to -0.5) suggests a modest but significant reduction in blood pressure",
        "When examining omega-3 effects on triglycerides, WMD = -18.3 mg/dL would indicate the average reduction in triglyceride levels across all pooled studies"
      ]}
      relatedTerms={[
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "SMD", key: "smd" },
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="wmd"
    />
  );
}
