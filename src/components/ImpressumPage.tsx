import { Building2, MapPin, Mail, FileText } from 'lucide-react';
import { LegalContactSection } from './LegalContactSection';
import { SEOHead } from './SEOHead';

export function ImpressumPage() {
  return (
    <>
      <SEOHead
        title="Impressum - Legal Information"
        description="Legal information and company details for Trivalora Inc. Find our contact information, business address, and regulatory details."
        keywords="impressum, legal information, company details, business address, regulatory information"
      />
      <div className="bg-background flex flex-col w-full min-h-screen" data-page-content>
        {/* Anchor for "top" navigation */}
        <div id="top" className="absolute" style={{ top: 'var(--header-height)' }}></div>

        {/* Hero Section */}
        <div id="hero">
          <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-24" style={{ backgroundColor: '#162F1C' }}>
            <div className="max-w-[800px] text-center">
              <div className="flex justify-center mb-6">
                <FileText className="w-16 h-16" style={{ color: '#E0CBA8' }} />
              </div>
              <h1 className="mb-6" style={{ color: '#F7F7F3' }}>
                Impressum
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[32px]" style={{ color: '#E0CBA8' }}>
                Legal Disclosure & Company Information
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div data-layout-section>
          <div data-layout-container>
            <div className="max-w-[800px] mx-auto">
              <div data-stack="xl">

                {/* Company Information */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Building2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h2 className="text-primary mb-4">Company Information</h2>
                      <div className="space-y-3 text-foreground">
                        <p><strong>Company Name:</strong> Trivalora Inc.</p>
                        <p><strong>Legal Form:</strong> Incorporated</p>
                        <p><strong>Website:</strong> <a href="https://suppl.me" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">suppl.me</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="bg-card border border-border rounded-[14px] p-8">
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
                </div>

                {/* Contact Information */}
                <div className="bg-card border border-border rounded-[14px] p-8">
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
                </div>

                {/* Responsible for Content */}
                <div className="bg-card border border-border rounded-[14px] p-8">
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
                </div>

                {/* Disclaimer */}
                <div className="bg-card border border-border rounded-[14px] p-8">
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
                </div>

                {/* Copyright */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Copyright</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    © {new Date().getFullYear()} Trivalora Inc. All rights reserved.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    The content and works on these pages created by the site operators are subject to copyright. The duplication, processing, distribution, or any form of commercialization of such material beyond the scope of copyright law shall require the prior written consent of the respective author or creator.
                  </p>
                </div>

                {/* Contact Information */}
                <LegalContactSection />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}