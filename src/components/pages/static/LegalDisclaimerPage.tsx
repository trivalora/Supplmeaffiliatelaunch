import { Shield, Building2, MapPin, Mail } from 'lucide-react';
import { LegalContactSection } from '@/components/LegalContactSection';
import { StaticPageTemplate, CardContent } from '@/components/templates/StaticPageTemplate';

export function LegalDisclaimerPage() {
  return (
    <StaticPageTemplate
      title="Legal Disclaimer - Important Information"
      description="Read our legal disclaimer regarding supplement information, medical advice, and liability limitations. Understand the scope and limitations of our service."
      keywords="legal disclaimer, liability, medical disclaimer, supplement information, legal notice"
      heroTitle="Legal Disclaimer"
      heroSubtitle="Legal Disclaimer & Company Information"
      heroIcon={Shield}
      heroBackground="primary"
      showTopAnchor={true}
    >
      <div className="max-w-[800px] mx-auto">
        <div data-stack="xl">

                {/* Company Information */}
                <CardContent>
                  <div className="flex items-start gap-4 mb-6">
                    <Building2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h2 className="text-primary mb-4">Company Information</h2>
                      <div className="space-y-3 text-foreground">
                        <p><strong>Company Name:</strong> Trivalora Inc.</p>
                        <p><strong>Legal Form:</strong> Incorporated</p>
                        <p><strong>Website:</strong> <a href="https://www.suppl.me" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">www.suppl.me</a></p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Registered Address */}
                <CardContent>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h2 className="text-primary mb-4">Registered Address</h2>
                      <div className="text-foreground space-y-1">
                        <p>Trivalora Inc.</p>
                        <p>2261 Market Street STE 85938</p>
                        <p>San Francisco, CA 94114</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Contact Information */}
                <CardContent>
                  <div className="flex items-start gap-4 mb-6">
                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div className="w-full">
                      <h2 className="text-primary mb-4">Contact Information</h2>
                      <div className="space-y-4 text-foreground">
                        <div>
                          <p className="mb-1"><strong>Email:</strong></p>
                          <a href="mailto:hello@suppl.me" className="text-primary hover:underline">
                            hello@suppl.me
                          </a>
                        </div>
                        <div>
                          <p className="mb-1"><strong>Phone:</strong></p>
                          <a href="tel:+14152895055" className="text-foreground hover:text-primary">
                            (415) 289-5055 / 800
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Responsible for Content */}
                <CardContent>
                  <h2 className="text-primary mb-4">Responsible for Content</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    The content on this website is the responsibility of:
                  </p>
                  <div className="text-foreground space-y-1">
                    <p>Trivalora Inc.</p>
                    <p>2261 Market Street STE 85938</p>
                    <p>San Francisco, CA 94114</p>
                    <p>United States</p>
                  </div>
                </CardContent>

                {/* Copyright */}
                <CardContent>
                  <h2 className="text-primary mb-4">Copyright</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    © {new Date().getFullYear()} Trivalora Inc. All rights reserved.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    The content and works on these pages created by the site operators are subject to copyright. The duplication, processing, distribution, or any form of commercialization of such material beyond the scope of copyright law shall require the prior written consent of the respective author or creator.
                  </p>
                </CardContent>

                {/* Introduction */}
                <CardContent>
                  <h2 className="text-primary mb-4">
                    Introduction and Acceptance of Terms
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Welcome to suppl.me, a website operated by trivalora, Inc. The information, tools, and services available on this website are provided to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated herein. By accessing or using any part of this website, you agree to be bound by this Legal Disclaimer. If you do not agree to all the terms and conditions of this disclaimer, you must not access or use this website.
                  </p>
                </CardContent>

                {/* Section 1.1.1 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.1 General Information & Educational Purpose Clause
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    The content provided on suppl.me, including but not limited to text, graphics, images, data compilations, and other material, is for informational and educational purposes only. The website is designed to aggregate and present publicly available research and pricing information on nutritional supplements to serve as a self-help tool for your own use. The content is not intended to be, and should not be construed as, professional advice of any kind, including medical, financial, or legal advice.
                  </p>
                </CardContent>

                {/* Section 1.1.2 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.2 No Medical Advice & Professional Consultation Mandate
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    trivalora, Inc. and the operators of suppl.me are not medical professionals, and we are not holding ourselves out to be a doctor, physician, nurse, registered dietician, or any other medical or healthcare provider. This website does not provide medical advice, diagnosis, or treatment.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    The information provided through this website is not a substitute for professional medical care. You should not use the information on this site for diagnosing or treating a health problem or disease. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition, and before undertaking any new diet, exercise, or dietary supplement regimen. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    If you think you may have a medical emergency, call your doctor or emergency services (911) immediately. Use of this website does not create a physician-patient or any other professional-client relationship between you and trivalora, Inc.
                  </p>
                </CardContent>

                {/* Section 1.1.3 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.3 Nutritional Supplement & FDA Disclaimer
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    The statements made regarding dietary supplements on this website have not been evaluated by the United States Food and Drug Administration (FDA). The products linked to or discussed on this website are not intended to diagnose, treat, cure, or prevent any disease. The information provided is not meant to replace the advice of your physician or health care provider.
                  </p>
                </CardContent>

                {/* Section 1.1.4 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.4 Disclaimer of Warranties & Accuracy of Information
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    The information and services on this website are provided on an "as is" and "as available" basis without any representations or warranties, express or implied. While we make every effort to ensure that the information provided on this website is up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    We are not responsible for any errors or omissions, or for the results obtained from the use of this information. No guarantee is given that the information provided on this website is correct, complete, or up-to-date.
                  </p>
                </CardContent>

                {/* Section 1.1.5 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.5 Limitation of Liability & Assumption of Risk
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. You acknowledge that you are voluntarily using this website and that you are solely and personally responsible for your choices, actions, and results, now and in the future. You accept full responsibility for the consequences of your use, or non-use, of any information provided on or through this website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    In no event will trivalora, Inc., its directors, employees, or affiliates be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. You agree to release, discharge, indemnify, and hold harmless trivalora, Inc. and its officers, directors, employees, and agents from any and all claims, liabilities, damages, and expenses that may arise from your use of this website or reliance on its content.
                  </p>
                </CardContent>

                {/* Section 1.1.6 */}
                <CardContent>
                  <h3 className="text-primary mb-4">
                    1.1.6 External Links & Third-Party Content
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    This website contains links to external websites that are not provided or maintained by or in any way affiliated with trivalora, Inc. As a courtesy and for the convenience of our users, these links are provided. Please note that we do not endorse, control, or take responsibility for the content, accuracy, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that trivalora, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content. The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information, products, services, or related graphics contained on the website.
                  </p>
                </CardContent>

                {/* Section 1.2 */}
                <CardContent>
                  <h2 className="text-primary mb-6">
                    1.2 Affiliate Disclosure Policy
                  </h2>

                  {/* Section 1.2.1 */}
                  <div className="mb-6">
                    <h3 className="text-primary mb-4">
                      1.2.1 Clear and Conspicuous Disclosure Statement
                    </h3>
                    <div className="bg-muted rounded-[8px] p-6 mb-4">
                      <p className="text-foreground leading-relaxed">
                        <span className="font-medium">Disclosure:</span> In the spirit of full transparency, this site is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. This helps us continue our mission to provide unbiased, evidence-based information.
                      </p>
                    </div>
                  </div>

                  {/* Section 1.2.2 */}
                  <div className="mb-6">
                    <h3 className="text-primary mb-4">
                      1.2.2 Detailed Explanation of Affiliate Relationships
                    </h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      suppl.me is a participant in various affiliate marketing programs, which are designed to provide a means for sites to earn advertising fees by advertising and linking to retailer sites. This means that when you click on certain links on our website that lead to a product or service on a third-party retailer's site, we may receive a commission if you make a purchase. This is a "material connection" as defined by the Federal Trade Commission (FTC).
                    </p>
                    <p className="text-foreground leading-relaxed">
                      This compensation comes at no additional cost to you. The price you pay for a product is the same whether you purchase it through our affiliate link or go directly to the retailer's website. Our participation in these programs allows us to cover the costs associated with maintaining this website and to continue our work of providing high-quality, evidence-based content to our users.
                    </p>
                  </div>

                  {/* Section 1.2.3 */}
                  <div>
                    <h3 className="text-primary mb-4">
                      1.2.3 Commitment to Objectivity and the "Trust Moat"
                    </h3>
                    <p className="text-foreground leading-relaxed mb-4">
                      Our core mission at suppl.me, as defined by our parent company trivalora, Inc., is to build a "Trusted Bridge" for consumers in the health and wellness market. This mission is built on the principles of Unwavering Trust, Evidence-Based Efficacy, and Ethical Monetization.
                    </p>
                    <p className="text-foreground leading-relaxed mb-4">
                      Therefore, our affiliate relationships do not, under any circumstances, influence the information we provide. Our algorithms, evidence grades, product comparisons, and editorial content are driven solely by scientific data, user value, and our commitment to objectivity. We do not accept paid placements or engage in brand deals that could compromise the integrity of our information. The default sorting of all product comparisons is based on what provides the most value to the user, such as normalized price or a combination of price and evidence, not on the commission rate we receive.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      We are committed to radical transparency regarding our business model because we believe it is essential to earning and maintaining your trust and a prerequisite to making the internet a better place for us all.
                    </p>
                  </div>
                </CardContent>

                {/* Contact Information */}
                <LegalContactSection />

        </div>
      </div>
    </StaticPageTemplate>
  );
}