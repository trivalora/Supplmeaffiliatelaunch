import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SEOHead } from './SEOHead';

export function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Contact Us - Get in Touch"
        description="Have questions about supplements or our platform? Contact us for expert guidance on evidence-based supplement recommendations, pricing, and product information."
        keywords="contact us, supplement questions, customer support, supplement guidance, contact information"
      />
      <div className="bg-tertiary flex flex-col w-full min-h-screen" data-page-content>
        {/* Contact Section */}
        <div id="hero" className="bg-tertiary">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
            <h1 className="font-['Lora',_serif] text-primary text-[36px] md:text-[48px] leading-tight mb-4">
              Contact Us
            </h1>
            <p className="font-['Lato',_sans-serif] text-foreground text-[18px] leading-relaxed mb-12 max-w-2xl">
              Have questions about supplements or our platform? We'd love to hear from you.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="flex flex-col justify-between space-y-8">
                <div>
                  <h2 className="font-['Lora',_serif] text-primary text-[24px] md:text-[28px] mb-8">
                    Write Us
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-['Lato',_sans-serif] font-bold text-foreground text-[16px] mb-2">
                          Mailing Address
                        </h3>
                        <p className="font-['Lato',_sans-serif] text-muted-foreground text-[14px] leading-relaxed">
                          Trivalora Inc.<br />
                          2261 Market Street STE 85938<br />
                          San Francisco, CA 94114<br />
                          United States
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-['Lato',_sans-serif] font-bold text-foreground text-[16px] mb-2">
                          Email Us
                        </h3>
                        <a 
                          href="mailto:hello@suppl.me" 
                          className="font-['Lato',_sans-serif] text-primary text-[14px] hover:underline"
                        >
                          hello@suppl.me
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-['Lato',_sans-serif] font-bold text-foreground text-[16px] mb-2">
                          Call Us
                        </h3>
                        <a 
                          href="tel:+14152895055" 
                          className="font-['Lato',_sans-serif] text-muted-foreground text-[14px]"
                        >
                          (415) 289-5055 / 800
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-[14px] border border-secondary p-8 shadow-lg">
                <h2 className="font-['Lora',_serif] text-primary text-[24px] mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-['Lato',_sans-serif] text-foreground text-[14px] mb-2 block">
                      Your Name
                    </Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="John Doe"
                      className="font-['Lato',_sans-serif]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-['Lato',_sans-serif] text-foreground text-[14px] mb-2 block">
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="font-['Lato',_sans-serif]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-['Lato',_sans-serif] text-foreground text-[14px] mb-2 block">
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="How can we help?"
                      className="font-['Lato',_sans-serif]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-['Lato',_sans-serif] text-foreground text-[14px] mb-2 block">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px] font-['Lato',_sans-serif]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-['Lato',_sans-serif] text-[16px] py-6 rounded-[14px]"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}