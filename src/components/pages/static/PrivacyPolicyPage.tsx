import { Shield, Lock, Eye, Users, Database, Globe, FileText } from 'lucide-react';
import { LegalContactSection } from '@/components/LegalContactSection';
import { StaticPageTemplate, CardContent } from '@/components/templates/StaticPageTemplate';

export function PrivacyPolicyPage() {
  return (
    <StaticPageTemplate
      title="Privacy Policy - Data Protection & Security"
      description="Read our privacy policy to understand how we collect, use, and protect your personal information. Learn about your data rights and our commitment to privacy."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
      heroTitle="Privacy Policy"
      heroSubtitle="Last Updated: October 29, 2025"
      heroIcon={Shield}
      heroBackground="primary"
      showTopAnchor={true}
    >
      <div className="max-w-[800px] mx-auto">
        <div data-stack="xl">
                
                {/* Introduction */}
                <CardContent>
                  <h2 className="text-primary mb-4">Introduction</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Welcome to suppl.me ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </CardContent>

                {/* Information We Collect */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">Information We Collect</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-primary mb-3">Personal Information</h3>
                      <p className="text-foreground leading-relaxed mb-3">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                        <li>Contact us via email or contact form</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Participate in surveys or promotions</li>
                        <li>Create an account (if applicable)</li>
                      </ul>
                      <p className="text-muted-foreground text-sm mt-3">
                        This may include: name, email address, and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-3">Automatically Collected Information</h3>
                      <p className="text-foreground leading-relaxed mb-3">
                        When you visit our website, we may automatically collect certain information about your device, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages viewed and time spent on pages</li>
                        <li>Referring website addresses</li>
                        <li>Device identifiers</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-primary mb-3">Cookies and Tracking Technologies</h3>
                      <p className="text-foreground leading-relaxed">
                        We use cookies, web beacons, and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie settings through your browser preferences.
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* How We Use Your Information */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">How We Use Your Information</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    We may use the information we collect for various purposes, including to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you for customer service, updates, and marketing</li>
                    <li>Send you newsletters and promotional materials (with your consent)</li>
                    <li>Process affiliate transactions and commissions</li>
                    <li>Prevent fraud and ensure security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>

                {/* Information Sharing */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">Information Sharing and Disclosure</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Third-Party Service Providers</h3>
                      <p className="text-foreground leading-relaxed">
                        We may share your information with third-party service providers who perform services on our behalf, such as:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground ml-4 mt-2">
                        <li>Analytics providers (e.g., Google Analytics)</li>
                        <li>Email service providers</li>
                        <li>Hosting and infrastructure providers</li>
                        <li>Payment processors</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Affiliate Programs</h3>
                      <p className="text-foreground leading-relaxed">
                        We participate in affiliate marketing programs, including Amazon Associates and Walmart Affiliate Program. When you click on affiliate links, the respective merchants may collect information about your visit. Please review their privacy policies for details.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Legal Requirements</h3>
                      <p className="text-foreground leading-relaxed">
                        We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Data Security */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">Data Security</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                  </p>
                </CardContent>

                {/* Your Rights */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">Your Privacy Rights</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>The right to access your personal data</li>
                    <li>The right to correct inaccurate data</li>
                    <li>The right to request deletion of your data</li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to opt-out of marketing communications</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </CardContent>

                {/* International Data Transfers */}
                <CardContent>
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">International Data Transfers</h2>
                  </div>
                  
                  <p className="text-foreground leading-relaxed">
                    Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, we transfer your data to the United States and process it there.
                  </p>
                </CardContent>

                {/* Children's Privacy */}
                <CardContent>
                  <h2 className="text-primary mb-4">Children's Privacy</h2>
                  <p className="text-foreground leading-relaxed">
                    Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                  </p>
                </CardContent>

                {/* Changes to Privacy Policy */}
                <CardContent>
                  <h2 className="text-primary mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>

                {/* Contact Information */}
                <LegalContactSection />

        </div>
      </div>
    </StaticPageTemplate>
  );
}