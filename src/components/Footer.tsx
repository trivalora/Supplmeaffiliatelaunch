// Footer logo image path
const imgFooterLogo = '/images/footer-logo.png';

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={imgFooterLogo} 
        alt="suppl.me" 
        className="h-[120px] md:h-[150px] w-auto"
        data-name="Logo"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

import { PageKey } from '../routes.config';

export function Footer({ 
  onNavigate
}: { 
  onNavigate: (page: PageKey) => void;
}) {
  const handleNavigation = (page: PageKey) => {
    console.log('[Footer] Navigating to:', page);
    console.log('[Footer] onNavigate is:', typeof onNavigate, onNavigate);
    if (typeof onNavigate === 'function') {
      onNavigate(page);
    } else {
      console.error('[Footer] onNavigate is not a function!', onNavigate);
    }
  };

  return (
    <div className="bg-primary w-full relative" data-layout-footer style={{ position: 'relative', zIndex: 10, borderTop: '1px solid rgba(224, 203, 168, 0.25)' }}>
      <div data-layout-container className="mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        {/* Disclaimer */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-secondary">
            The purchase links on this website are affiliate links and we earn a commission if you buy through our website. This is the only way we currently make money. Thank you.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
          <button 
            onClick={() => handleNavigation('partner')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Partner
          </button>
          <button 
            onClick={() => handleNavigation('contact')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Contact Us
          </button>
          <button 
            onClick={() => handleNavigation('legal')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Legal Notice
          </button>
          <button 
            onClick={() => handleNavigation('privacy')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => handleNavigation('cookies')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Cookie Policy
          </button>
          <button 
            onClick={() => handleNavigation('terms')}
            className="text-secondary hover:opacity-80 transition-opacity cursor-pointer"
          >
            Terms of Service
          </button>
        </div>

        {/* Separator Line */}
        <div className="flex justify-center mt-8">
          <div className="border-t border-secondary/25" style={{ width: '20vw' }}></div>
        </div>

        {/* Copyright */}
        <div className="text-center pb-4 pt-4">
          <p className="text-secondary text-xs">
            © 2025 - Trivalora, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}