import { useState } from 'react';
import { ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import imgForestAerial from "figma:asset/4bdf2cba5e05e7d70b9f1402336825a64b04e236.png";
import { ResponsivePicture } from './ResponsivePicture';
import { SEOHead } from './SEOHead';

interface PartnerPageProps {
  onNavigate: (page: string) => void;
}

export function PartnerPage({ onNavigate }: PartnerPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    network: '',
    category: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Removed dedicated hero preload to avoid duplicate high-priority LCP contention (handled on landing page only)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name');
      return;
    }
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!formData.network.trim() || !formData.category.trim()) {
      setStatus('error');
      setErrorMessage('Please fill all required fields');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    try {
      const resp = await fetch('/api/partner-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || data?.ok === false) {
        throw new Error(data?.error || 'Submission failed');
      }
      setStatus('success');
      setFormData({ name: '', email: '', network: '', category: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <SEOHead
        title="Partner With Us - Affiliate & Retailer Opportunities"
        description="Join our supplement affiliate network. FTC/FDA compliant platform with evidence-based content, real-time pricing, and quality traffic. ShareASale, Amazon, and iHerb partnerships available."
        keywords="supplement affiliate program, retailer partnership, affiliate network, supplement marketing, price comparison partnership"
      />
      <div className="min-h-screen bg-tertiary">
        {/* Hero Section */}
        <div
          className="relative flex items-center justify-center overflow-visible"
          style={{
            minHeight: '500px',
            height: '60vh',
            maxHeight: '60vh'
          }}
        >
          {/* Background Image - optimized responsive */}
          <div className="absolute inset-0 w-full h-full">
            <ResponsivePicture
              file="4bdf2cba5e05e7d70b9f1402336825a64b04e236.png"
              alt=""
              fallbackSrc={imgForestAerial}
              sizes="100vw"
              imgProps={{ className: 'w-full h-full object-cover object-center', loading: 'eager', decoding: 'async' }}
              style={{ minWidth: '100%', minHeight: '100%' }}
            />
          </div>

          {/* Gradient Overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(42,38,34,0.65), rgba(58,54,50,0.6) 50%, rgba(58,54,50,0.7))'
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(42,38,34,0.3) 100%)'
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: '#162F1C',
              opacity: 0.35
            }}
          />

          <div data-layout-container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-[5vw] md:px-0">
              <h1 className="mb-4 text-white text-4xl md:text-5xl">
                We compare supplement prices with real-time accuracy for US shoppers. <span style={{ color: '#E0CBA8' }}>Partner-ready.</span>
              </h1>

              <p className="mb-8 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                We list only compliant retailers. FTC/FDA safe claims. Clean traffic. Fast integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="px-8 py-3 rounded-2xl transition-all shadow-xl bg-secondary text-foreground hover:bg-secondary/90 cursor-pointer"
                >
                  Apply to Partner
                </a>
                <a
                  href="#contact-form"
                  className="px-8 py-3 rounded-2xl transition-all shadow-xl bg-white/10 text-white hover:bg-white/20 cursor-pointer backdrop-blur-sm"
                >
                  Book a 10-min Review
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div data-layout-container className="py-16">

          {/* Section 1: What We Do */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-primary text-center">What We Do</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="mb-2" style={{ color: '#162F1C' }}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-primary">Product Catalog</h3>
                  <p className="text-foreground">
                    <strong>51 SKUs live</strong> across 17 supplement categories. Update cadence: <strong>2x/day</strong> (increased during Black Friday and major retail events).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="mb-2" style={{ color: '#162F1C' }}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-primary">Traffic Plan (0-90 Days)</h3>
                  <p className="text-foreground">
                    SEO articles: <strong>17+ guides</strong>, Review comparisons: <strong>51 product pages</strong>, Paid testing: <strong>$500/day</strong> budget for targeted campaigns.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="mb-2" style={{ color: '#162F1C' }}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-primary">Geographic Focus</h3>
                  <p className="text-foreground">
                    <strong>United States only</strong> (English). Optimized for US shoppers with region-specific pricing and retailer partnerships.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Compliance & Safety */}
          <section className="mb-16 bg-white py-12">
            <div data-layout-container>
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-8 text-primary text-center">Compliance & Safety</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: '#162F1C' }} />
                    <div>
                      <h4 className="mb-1" style={{ color: '#162F1C' }}>FTC Compliance</h4>
                      <p className="text-foreground">Affiliate disclosures on every product listing and comparison page.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: '#162F1C' }} />
                    <div>
                      <h4 className="mb-1" style={{ color: '#162F1C' }}>FDA Safe Claims</h4>
                      <p className="text-foreground">No disease claims; structure/function only. Medical disclaimer sitewide. <a href="https://www.fda.gov" target="_blank" rel="nofollow noreferrer" className="text-fourth underline">(fda.gov)</a></p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: '#162F1C' }} />
                    <div>
                      <h4 className="mb-1" style={{ color: '#162F1C' }}>Legal Pages Live</h4>
                      <p className="text-foreground">Privacy Policy, Terms of Service, Cookie Policy, and Contact page with business address.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: '#162F1C' }} />
                    <div>
                      <h4 className="mb-1" style={{ color: '#162F1C' }}>Network-Compliant</h4>
                      <p className="text-foreground">No coupons/incentives, no doorway pages, no paid search brand-bidding. <a href="https://www.cj.com" target="_blank" rel="nofollow noreferrer" className="text-fourth underline">(cj.com)</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Placement Options */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-4 text-primary text-center">Placement Options</h2>
              <p className="mb-8 text-foreground text-center max-w-2xl mx-auto">
                Visual proof beats claims. See how your brand can appear across our platform.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="mb-3" style={{ color: '#162F1C' }}>Price Comparison Tables</h4>
                  <p className="mb-3 text-foreground">Featured placement in side-by-side product comparisons with real-time pricing updates.</p>
                  <button
                    onClick={() => onNavigate('vitamin-d')}
                    className="text-fourth hover:underline inline-flex items-center gap-1"
                  >
                    View Live Example <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="mb-3" style={{ color: '#162F1C' }}>Retailer Badge Features</h4>
                  <p className="mb-3 text-foreground">Trusted retailer badges on knowledge base pages with prominent call-to-action placement.</p>
                  <button
                    onClick={() => onNavigate('omega-3')}
                    className="text-fourth hover:underline inline-flex items-center gap-1"
                  >
                    View Live Example <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="mb-3" style={{ color: '#162F1C' }}>Category Top Picks</h4>
                  <p className="mb-3 text-foreground">Featured "Best Price" and "Editor's Choice" slots in category roundup pages.</p>
                  <button
                    onClick={() => onNavigate('knowledgebase')}
                    className="text-fourth hover:underline inline-flex items-center gap-1"
                  >
                    View Live Example <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="mb-3" style={{ color: '#162F1C' }}>Newsletter Features</h4>
                  <p className="mb-3 text-foreground">Dedicated product spotlights in monthly email campaigns to engaged supplement buyers.</p>
                  <p className="text-foreground/60 italic">Coming Q2 2025</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Data & QA */}
          <section className="mb-16 bg-white py-12">
            <div data-layout-container>
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-8 text-primary text-center">Data Quality & QA</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2" style={{ color: '#162F1C' }}>12hr</div>
                    <p className="text-foreground">Price feed refresh cycle with automated mismatch alerts</p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl mb-2" style={{ color: '#162F1C' }}>Weekly</div>
                    <p className="text-foreground">Manual QA checklist: pricing accuracy, link validation, content review</p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl mb-2" style={{ color: '#162F1C' }}>2x/week</div>
                    <p className="text-foreground">Broken-link sweeps across all product pages and affiliate URLs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Tech & Tracking */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-primary text-center">Tech & Tracking</h2>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="mb-4 text-primary">Networks We Support First</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>Active Networks</h4>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                        ShareASale <span className="text-foreground/60">(Priority)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                        Amazon Associates <span className="text-foreground/60">(Live)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                        iHerb Affiliate <span className="text-foreground/60">(Live)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>Planned Q1 2025</h4>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: '#162F1C' }}></div>
                        Awin
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: '#162F1C' }}></div>
                        CJ Affiliate (Commission Junction)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: '#162F1C' }}></div>
                        Impact
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6" style={{ borderColor: '#E0CBA8' }}>
                  <h4 className="mb-3" style={{ color: '#162F1C' }}>Tracking Standards</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                      UTM parameter implementation for campaign tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                      SubID support for granular placement tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                      Suppression of paid search to protect brand terms
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#162F1C' }} />
                      Google Tag Manager for event tracking and conversion monitoring
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-tertiary rounded-lg">
                  <p className="text-foreground text-sm">
                    <strong>Note:</strong> ShareASale expects a live, content-rich site and a clear traffic plan. <a href="https://help.shareasale.com" target="_blank" rel="nofollow noreferrer" className="text-fourth underline">(help.shareasale.com)</a> We meet all requirements for network approval.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Contact Form */}
          <section id="contact-form" className="mb-16 bg-white py-12">
            <div data-layout-container>
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <Calendar className="w-12 h-12 mx-auto mb-4" style={{ color: '#162F1C' }} />
                  <h2 className="mb-3 text-primary">Let's Partner</h2>
                  <p className="text-foreground">
                    Ready to activate? Fill out this quick form and we'll schedule a 10-minute partner review.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-foreground">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Your full name"
                      autoComplete="name"
                      enterKeyHint="next"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-foreground">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                      autoComplete="email"
                      inputMode="email"
                      enterKeyHint="next"
                    />
                  </div>

                  <div>
                    <label htmlFor="network" className="block mb-2 text-foreground">Affiliate Network *</label>
                    <select
                      id="network"
                      required
                      value={formData.network}
                      onChange={(e) => setFormData({ ...formData, network: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      autoComplete="organization"
                    >
                      <option value="">Select network...</option>
                      <option value="shareasale">ShareASale</option>
                      <option value="amazon">Amazon Associates</option>
                      <option value="iherb">iHerb Affiliate</option>
                      <option value="awin">Awin</option>
                      <option value="cj">CJ Affiliate</option>
                      <option value="impact">Impact</option>
                      <option value="direct">Direct Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-2 text-foreground">Product Category *</label>
                    <input
                      type="text"
                      id="category"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="e.g., Omega-3, Probiotics, Protein"
                      autoComplete="off"
                      enterKeyHint="next"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-foreground">Additional Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="EPCs, special requirements, launch timeline, etc."
                      enterKeyHint="send"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-2xl transition-all shadow-xl bg-primary text-white hover:bg-primary/90 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={status === 'loading' || status === 'success'}
                  >
                    {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Submitted!' : 'Submit Partner Application'}
                  </button>
                </form>

                <div aria-live="polite" aria-atomic="true">
                  {status === 'error' && errorMessage && (
                    <p className="mt-4 text-center text-red-600 text-sm">{errorMessage}</p>
                  )}
                  {status === 'success' && (
                    <p className="mt-4 text-center text-green-700 text-sm">Thank you! We've received your application and will respond within 24-48 hours.</p>
                  )}
                </div>

                <p className="mt-6 text-center text-foreground/60 text-sm">
                  We typically respond within 24-48 hours. For urgent requests, email us directly at{' '}
                  <a href="mailto:partners@suppl.me" className="text-fourth underline">partners@suppl.me</a>
                </p>
              </div>
            </div>
          </section>

          {/* Why This Works Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-primary text-center">Why Partner With Us?</h2>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6 text-foreground">
                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>Third-Party Verification</h4>
                    <p>We don't just claim quality—we prove it. Every product recommendation is backed by research grades (A-D), peer-reviewed studies, and meta-analysis citations. Affiliate managers approve what's undeniable.</p>
                  </div>

                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>Specificity Over Vagueness</h4>
                    <p>Numbers beat adjectives. We provide exact SKU counts, update frequencies, traffic plans, and compliance documentation. This removes guesswork and accelerates approval decisions.</p>
                  </div>

                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>De-Risked Partnership</h4>
                    <p>Clear compliance standards, FTC/FDA-safe content, and transparent traffic sources mean you're partnering with a platform built for long-term, sustainable growth—not quick wins that risk your brand.</p>
                  </div>

                  <div>
                    <h4 className="mb-2" style={{ color: '#162F1C' }}>Quality Traffic Promise</h4>
                    <p>Our audience is actively researching supplements with purchase intent. They're comparing prices and reading evidence-based content—not browsing casually. This drives higher conversion rates and better EPCs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}