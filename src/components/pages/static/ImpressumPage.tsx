import { Building2, MapPin, Mail, FileText } from 'lucide-react';
import { LegalContactSection } from '@/components/LegalContactSection';
import { StaticPageTemplate, CardContent } from '@/components/templates/StaticPageTemplate';

export function ImpressumPage() {
  return (
    <StaticPageTemplate
      title="Impressum - Legal Information"
      description="Legal information and company details for Trivalora Inc. Find our contact information, business address, and regulatory details."
      keywords="impressum, legal information, company details, business address, regulatory information"
      heroTitle="Impressum"
      heroSubtitle="Legal Disclosure & Company Information"
      heroIcon={FileText}
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

                {/* Disclaimer */}
                <CardContent>
                  <h2 className="text-primary mb-4">Disclaimer</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information, products, services, or related graphics contained on the website.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    This website contains affiliate links. We may earn a commission if you make a purchase through our links. This helps support our platform and allows us to continue providing valuable content to our users.
                  </p>
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

                {/* Contact Information */}
                <LegalContactSection />

        </div>
      </div>
    </StaticPageTemplate>
  );
}