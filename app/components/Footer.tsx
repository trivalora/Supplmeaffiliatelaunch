import Link from 'next/link';
import Image from 'next/image';

// Server Component - fully static
export function Footer() {
  return (
    <footer 
      className="bg-primary w-full relative" 
      style={{ 
        position: 'relative', 
        zIndex: 10, 
        borderTop: '1px solid rgba(224, 203, 168, 0.25)',
        backgroundColor: 'var(--primary, #162f1c)',
        color: 'var(--secondary, #e0cba8)'
      }}
    >
      <div className="mx-auto px-4 md:px-8 py-12 max-w-7xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/footer-logo.png"
            alt="suppl.me"
            width={150}
            height={150}
            style={{ height: '120px', width: 'auto' }}
            className="md:h-[150px]"
          />
        </div>

        {/* Disclaimer */}
        <div className="mb-8 text-center md:text-left max-w-4xl mx-auto">
          <p className="text-secondary text-sm md:text-base" style={{ color: 'var(--secondary, #e0cba8)' }}>
            The purchase links on this website are affiliate links and we earn a commission if you buy through our website. 
            This is the only way we currently make money. Thank you.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-8">
          <Link 
            href="/partner"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Partner
          </Link>
          <Link 
            href="/contact"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Contact Us
          </Link>
          <Link 
            href="/legal"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Legal Notice
          </Link>
          <Link 
            href="/privacy"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Privacy Policy
          </Link>
          <Link 
            href="/cookies"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Cookie Policy
          </Link>
          <Link 
            href="/terms"
            className="text-secondary hover:opacity-80 transition-opacity"
            style={{ color: 'var(--secondary, #e0cba8)' }}
          >
            Terms of Service
          </Link>
        </div>

        {/* Separator Line */}
        <div className="flex justify-center mb-4">
          <div 
            className="border-t w-64 md:w-80" 
            style={{ borderColor: 'rgba(224, 203, 168, 0.25)' }}
          />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-secondary text-xs" style={{ color: 'var(--secondary, #e0cba8)' }}>
            © 2025 - Trivalora, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
