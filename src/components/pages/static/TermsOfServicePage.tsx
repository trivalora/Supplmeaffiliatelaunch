import { FileText, Scale, AlertTriangle, CheckCircle2, XCircle, Shield } from 'lucide-react';
import { LegalContactSection } from '@/components/LegalContactSection';
import { StaticPageTemplate, CardContent } from '@/components/templates/StaticPageTemplate';

export function TermsOfServicePage() {
  return (
    <StaticPageTemplate
      title="Terms of Service - User Agreement"
      description="Review our terms of service for using the supplement guide platform. Learn about user responsibilities, service limitations, and legal agreements."
      keywords="terms of service, user agreement, terms and conditions, legal terms, service agreement"
      heroTitle="Terms of Service"
      heroSubtitle="Last Updated: October 29, 2025"
      heroIcon={Scale}
      heroBackground="primary"
      showTopAnchor={true}
    >
      <div className="max-w-[800px] mx-auto">
        <div data-stack="xl">
                
                {/* Acceptance of Terms */}
                <CardContent>
                  <h2 className="text-primary mb-4">1. Acceptance of Terms</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    By accessing and using suppl.me (the "Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use this Website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Your continued use of the Website following any changes constitutes acceptance of those changes.
                  </p>
                </CardContent>

                {/* Use of Website */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">2. Use of Website</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Permitted Use</h3>
                      <p className="text-foreground leading-relaxed mb-2">
                        You may use the Website for lawful purposes only. You agree to use the Website in accordance with all applicable laws and regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">License</h3>
                      <p className="text-foreground leading-relaxed">
                        We grant you a limited, non-exclusive, non-transferable license to access and use the Website for personal, non-commercial purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Prohibited Activities */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-6 h-6 text-warning-accent" />
                    <h2 className="text-primary">3. Prohibited Activities</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    You agree NOT to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Use the Website for any illegal purpose or in violation of any laws</li>
                    <li>Attempt to gain unauthorized access to any part of the Website</li>
                    <li>Interfere with or disrupt the Website or servers</li>
                    <li>Transmit any viruses, malware, or harmful code</li>
                    <li>Collect or harvest any information from the Website</li>
                    <li>Reproduce, duplicate, copy, or resell any part of the Website</li>
                    <li>Impersonate any person or entity</li>
                    <li>Post false, misleading, or defamatory content</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </CardContent>

                {/* Intellectual Property */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">4. Intellectual Property Rights</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by suppl.me, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the Website without our express written permission.
                  </p>
                </CardContent>

                {/* Affiliate Disclosure */}
                <div className="bg-warning border border-warning-accent rounded-[14px] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-warning-accent" />
                    <h2 className="text-primary">5. Affiliate Relationships & Disclaimers</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Affiliate Commissions</h3>
                      <p className="text-foreground leading-relaxed">
                        suppl.me participates in affiliate advertising programs, including the Amazon Services LLC Associates Program and Walmart Affiliate Program. We may earn commissions from qualifying purchases made through links on our Website at no additional cost to you.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Not Medical Advice</h3>
                      <p className="text-foreground leading-relaxed">
                        The information provided on this Website is for informational and educational purposes only. It is NOT intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before starting any supplement regimen or making changes to your health routine.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">No Guarantees</h3>
                      <p className="text-foreground leading-relaxed">
                        We make no guarantees regarding the effectiveness, safety, or suitability of any supplements discussed on the Website. Individual results may vary.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third-Party Links */}
                <CardContent>
                  <h2 className="text-primary mb-4">6. Third-Party Links</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    The Website may contain links to third-party websites (including affiliate merchant sites like Amazon and Walmart). These links are provided for your convenience only. We do not control and are not responsible for the content, privacy policies, or practices of third-party websites.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Your use of third-party websites is at your own risk and subject to the terms and conditions of those websites.
                  </p>
                </CardContent>

                {/* Disclaimer of Warranties */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">7. Disclaimer of Warranties</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>Accuracy, reliability, or completeness of information</li>
                    <li>Uninterrupted or error-free operation</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-4">
                    We do not warrant that the Website will meet your requirements or that any errors will be corrected.
                  </p>
                </CardContent>

                {/* Limitation of Liability */}
                <CardContent>
                  <h2 className="text-primary mb-4">8. Limitation of Liability</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, suppl.me SHALL NOT BE LIABLE FOR ANY:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Loss of profits, revenue, data, or use</li>
                    <li>Personal injury or property damage</li>
                    <li>Damages arising from your use or inability to use the Website</li>
                    <li>Damages arising from any third-party content or conduct</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-4">
                    This limitation applies even if we have been advised of the possibility of such damages.
                  </p>
                </CardContent>

                {/* Indemnification */}
                <CardContent>
                  <h2 className="text-primary mb-4">9. Indemnification</h2>
                  <p className="text-foreground leading-relaxed">
                    You agree to indemnify, defend, and hold harmless suppl.me and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to your use of the Website, violation of these Terms, or infringement of any rights of another.
                  </p>
                </CardContent>

                {/* Governing Law */}
                <CardContent>
                  <h2 className="text-primary mb-4">10. Governing Law and Jurisdiction</h2>
                  <p className="text-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Website shall be resolved in the courts of [Your Jurisdiction].
                  </p>
                </CardContent>

                {/* Severability */}
                <CardContent>
                  <h2 className="text-primary mb-4">11. Severability</h2>
                  <p className="text-foreground leading-relaxed">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </CardContent>

                {/* Entire Agreement */}
                <CardContent>
                  <h2 className="text-primary mb-4">12. Entire Agreement</h2>
                  <p className="text-foreground leading-relaxed">
                    These Terms of Service, together with our Privacy Policy and any other legal notices published on the Website, constitute the entire agreement between you and suppl.me regarding your use of the Website.
                  </p>
                </CardContent>

                {/* Contact Information */}
                <LegalContactSection />

        </div>
      </div>
    </StaticPageTemplate>
  );
}