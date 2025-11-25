'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Star, CheckCircle, FileText } from 'lucide-react';

export function PEDroPage() {
  return (
    <GlossaryTemplate
      term="PEDro Scale"
      pronunciation="ped-roh"
      definition="The PEDro Scale (Physiotherapy Evidence Database Scale) is an 11-item quality assessment tool designed to rate the methodological quality and statistical reporting of randomized controlled trials (RCTs) in physiotherapy and rehabilitation research. Scores range from 0 to 10, with higher scores indicating better methodological quality."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            The PEDro Scale was developed by the Centre for Evidence-Based Physiotherapy at the University of Sydney and is widely used to assess the internal validity and statistical interpretability of clinical trials. It helps researchers and clinicians determine the trustworthiness of study findings and is commonly used in systematic reviews and evidence syntheses.
          </p>
          <p className="mb-4">
            <strong>The 11 PEDro criteria:</strong>
          </p>
          <p className="mb-4">
            Each item is scored as either "yes" (1 point) or "no" (0 points). The first item (eligibility criteria) is not included in the total score, so the maximum score is 10/10:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>1. Eligibility criteria specified (not scored):</strong> Study states the source and eligibility criteria for participants (improves external validity but not counted in score)</li>
            <li><strong>2. Random allocation:</strong> Participants were randomly allocated to groups</li>
            <li><strong>3. Concealed allocation:</strong> Allocation was concealed (person determining eligibility didn't know which group participants would be assigned to)</li>
            <li><strong>4. Baseline comparability:</strong> Groups were similar at baseline regarding most important prognostic indicators</li>
            <li><strong>5. Subject blinding:</strong> Participants were blinded to group allocation</li>
            <li><strong>6. Therapist blinding:</strong> Therapists/interventionists were blinded to group allocation</li>
            <li><strong>7. Assessor blinding:</strong> Outcome assessors were blinded to group allocation</li>
            <li><strong>8. Adequate follow-up:</strong> Outcomes were obtained for more than 85% of initially allocated participants</li>
            <li><strong>9. Intention-to-treat analysis:</strong> Data analyzed by intention-to-treat (all participants analyzed in the group they were allocated to)</li>
            <li><strong>10. Between-group statistical comparisons:</strong> Results of between-group statistical comparisons reported for at least one key outcome</li>
            <li><strong>11. Point estimates and variability:</strong> Point measures and measures of variability reported for at least one key outcome</li>
          </ul>
          <p className="mb-4">
            <strong>Score interpretation:</strong>
          </p>
          <p className="mb-4">
            While there's no universally agreed-upon cutoff, common interpretations include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>9-10:</strong> Excellent methodological quality</li>
            <li><strong>6-8:</strong> Good methodological quality</li>
            <li><strong>4-5:</strong> Fair/moderate methodological quality</li>
            <li><strong>{'<'}4:</strong> Poor methodological quality</li>
          </ul>
          <p className="mb-4">
            Some researchers consider scores ≥6 as "high quality" and {'<'}6 as "low quality," though this can vary by field and context.
          </p>
          <p className="mb-4">
            <strong>Key features and limitations:</strong>
          </p>
          <p className="mb-4"><em>Strengths:</em></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Good reliability (inter-rater reliability around 0.5-0.6)</li>
            <li>Simple to apply (yes/no format)</li>
            <li>Focus on internal validity (risk of bias)</li>
            <li>Widely used in physiotherapy and rehabilitation research</li>
            <li>Free database (PEDro database) with over 50,000 pre-rated trials</li>
            <li>Assesses both methodological quality and statistical reporting</li>
          </ul>
          <p className="mb-4"><em>Limitations:</em></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Items 5 and 6 (subject and therapist blinding) are often impossible in exercise/physiotherapy interventions, which can lower scores through no fault of the study</li>
            <li>Does not assess external validity or applicability to clinical practice</li>
            <li>Equal weighting of all items may not reflect their relative importance</li>
            <li>Does not assess selective outcome reporting or publication bias</li>
            <li>Primarily designed for RCTs of physical interventions, less applicable to other study designs</li>
          </ul>
          <p className="mb-4">
            <strong>Use in research and evidence synthesis:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Systematic reviews:</strong> Used to assess study quality and inform sensitivity analyses</li>
            <li><strong>Evidence grading:</strong> Lower PEDro scores may downgrade evidence quality in GRADE assessments</li>
            <li><strong>Study selection:</strong> Sometimes used as inclusion criteria (e.g., only including studies with PEDro ≥5)</li>
            <li><strong>Clinical interpretation:</strong> Helps clinicians judge the reliability of research findings</li>
          </ul>
          <p className="mb-4">
            The PEDro database (pedro.org.au) provides free access to abstracts and quality ratings of randomized trials, systematic reviews, and clinical practice guidelines in physiotherapy and related fields. Studies are rated by trained assessors using the PEDro Scale.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Star, 
          title: "11-Item Quality Rating Tool", 
          description: "The PEDro Scale rates RCT methodological quality using 11 criteria (though only 10 are scored). Assesses randomization, blinding, allocation concealment, follow-up, and statistical reporting. Scores range from 0-10." 
        },
        { 
          icon: CheckCircle, 
          title: "Focuses on Internal Validity", 
          description: "Evaluates risk of bias and statistical adequacy rather than clinical relevance. Scores ≥6 generally considered high quality, though blinding of participants/therapists is often impossible in exercise/physical therapy interventions." 
        },
        { 
          icon: FileText, 
          title: "Widely Used in Rehabilitation Research", 
          description: "Standard tool in physiotherapy systematic reviews and evidence synthesis. The PEDro database provides free access to 50,000+ pre-rated trials, making quality assessment accessible to researchers and clinicians." 
        }
      ]}
      
      currentPage="pedro"

      
      relatedTerms={['rct', 'doubleblinded', 'singleblinded', 'clinicalsignificance', 'statisticalsignificance', 'grade']}
    />
  );
}
