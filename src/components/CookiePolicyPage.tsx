import { Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';
import { LegalContactSection } from './LegalContactSection';
import { SEOHead } from './SEOHead';

export function CookiePolicyPage() {
  return (
    <>
      <SEOHead 
        title="Cookie Policy - How We Use Cookies"
        description="Learn about our cookie usage, tracking technologies, and how they improve your browsing experience. Manage your cookie preferences and understand data collection practices."
        keywords="cookie policy, cookies, tracking, browser storage, cookie preferences"
      />
      <div className="bg-background flex flex-col w-full min-h-screen" data-page-content>
        {/* Anchor for "top" navigation */}
        <div id="top" className="absolute" style={{ top: 'var(--header-height)' }}></div>
        
        {/* Hero Section */}
        <div id="hero">
          <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-24" style={{ backgroundColor: '#162F1C' }}>
            <div className="max-w-[800px] text-center">
              <div className="flex justify-center mb-6">
                <Cookie className="w-16 h-16" style={{ color: '#E0CBA8' }} />
              </div>
              <h1 className="mb-6" style={{ color: '#F7F7F3' }}>
                Cookie Policy
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[32px]" style={{ color: '#E0CBA8' }}>
                Last Updated: October 29, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div data-layout-section>
          <div data-layout-container>
            <div className="max-w-[800px] mx-auto">
              <div data-stack="xl">
                
                {/* What Are Cookies */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">What Are Cookies?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    This Cookie Policy explains what cookies are, how we use them, what types of cookies we use, and how you can control or delete them.
                  </p>
                </div>

                {/* How We Use Cookies */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">How We Use Cookies</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Keep you signed in (if applicable)</li>
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our website's performance and functionality</li>
                    <li>Analyze traffic and user behavior</li>
                    <li>Deliver personalized content and advertisements</li>
                    <li>Track affiliate referrals and commissions</li>
                  </ul>
                </div>

                {/* Types of Cookies */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-6">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="bg-benefit border border-benefit-accent rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-5 h-5 text-benefit-accent" />
                        <h3 className="text-primary">1. Essential Cookies</h3>
                      </div>
                      <p className="text-foreground leading-relaxed mb-2">
                        These cookies are strictly necessary for the website to function and cannot be disabled in our systems.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Examples:</strong> Authentication, security, dark mode preference
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-tertiary border border-border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart className="w-5 h-5 text-primary" />
                        <h3 className="text-primary">2. Analytics Cookies</h3>
                      </div>
                      <p className="text-foreground leading-relaxed mb-2">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Examples:</strong> Google Analytics, page views, session duration
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Purpose:</strong> Improve website performance and user experience
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-tertiary border border-border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="w-5 h-5 text-primary" />
                        <h3 className="text-primary">3. Functional Cookies</h3>
                      </div>
                      <p className="text-foreground leading-relaxed mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Examples:</strong> Language preferences, region settings, saved searches
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Purpose:</strong> Provide a more personalized experience
                      </p>
                    </div>

                    {/* Targeting/Advertising Cookies */}
                    <div className="bg-tertiary border border-border rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="text-primary">4. Targeting/Advertising Cookies</h3>
                      </div>
                      <p className="text-foreground leading-relaxed mb-2">
                        These cookies are used to deliver advertisements that are relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong>Examples:</strong> Affiliate tracking cookies (Amazon, Walmart), retargeting pixels
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong>Purpose:</strong> Track affiliate commissions and show relevant ads
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Third-Party Cookies</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    In addition to our own cookies, we use various third-party cookies to report website usage statistics and deliver advertisements.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Google Analytics</h3>
                      <p className="text-foreground leading-relaxed text-sm">
                        We use Google Analytics to understand how visitors use our site. These cookies collect information anonymously and generate reports about website activity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Affiliate Networks</h3>
                      <p className="text-foreground leading-relaxed text-sm">
                        When you click on affiliate links (Amazon, Walmart), cookies are set by those merchants to track your purchases and attribute commissions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Social Media</h3>
                      <p className="text-foreground leading-relaxed text-sm">
                        If we embed social media content (e.g., YouTube videos, social sharing buttons), those platforms may set cookies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookie Duration */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Cookie Duration</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Session Cookies</h3>
                      <p className="text-foreground leading-relaxed">
                        Temporary cookies that are deleted when you close your browser. Used for essential website functions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Persistent Cookies</h3>
                      <p className="text-foreground leading-relaxed">
                        Remain on your device for a set period (ranging from days to years). Used for preferences and analytics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Managing Cookies */}
                <div className="bg-benefit border border-benefit-accent rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">How to Control and Delete Cookies</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-primary mb-2">Browser Settings</h3>
                      <p className="text-foreground leading-relaxed mb-3">
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete cookies when you close your browser</li>
                        <li>Review and delete individual cookies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Browser-Specific Instructions</h3>
                      <ul className="list-disc list-inside space-y-1 text-foreground ml-4 text-sm">
                        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-primary mb-2">Opt-Out Links</h3>
                      <p className="text-foreground leading-relaxed mb-2 text-sm">
                        You can opt out of specific tracking services:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground ml-4 text-sm">
                        <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="nofollow noopener noreferrer" className="text-primary underline">Google Analytics Opt-out</a></li>
                        <li><strong>Network Advertising:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary underline">NAI Opt-out</a></li>
                        <li><strong>Digital Advertising Alliance:</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary underline">DAA Opt-out</a></li>
                      </ul>
                    </div>

                    <div className="bg-warning border border-warning-accent rounded-lg p-4 mt-4">
                      <p className="text-foreground text-sm">
                        <strong>⚠️ Note:</strong> Disabling cookies may affect the functionality of our website and prevent you from accessing certain features.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Do Not Track */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Do Not Track Signals</h2>
                  <p className="text-foreground leading-relaxed">
                    Some browsers have a "Do Not Track" feature that signals websites you visit that you do not want to have your online activity tracked. Currently, our website does not respond to Do Not Track signals, but we respect your privacy choices made through browser cookie settings.
                  </p>
                </div>

                {/* Changes to Cookie Policy */}
                <div className="bg-card border border-border rounded-[14px] p-8">
                  <h2 className="text-primary mb-4">Changes to This Cookie Policy</h2>
                  <p className="text-foreground leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
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