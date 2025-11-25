import Link from 'next/link';
import { HeaderClient } from './HeaderClient';
import { KNOWLEDGEBASE_ROUTES } from '@/routes.config';

// Server Component - no state, no interactivity
export function Header() {
  // Filter and sort routes on the server
  const navRoutes = KNOWLEDGEBASE_ROUTES
    .filter(route => route.showInNav && route.category === 'knowledgebase')
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      {/* Fixed header container */}
      <div
        className="fixed left-0 top-0 w-full z-50"
        style={{
          height: 'var(--header-height, 80px)',
          boxShadow: '0 2px 16px rgba(22, 47, 28, 0.08), 0 4px 32px rgba(22, 47, 28, 0.04), 0 1px 0 rgba(224, 203, 168, 0.1)',
          borderBottom: '1px solid rgba(224, 203, 168, 0.25)'
        }}
      >
        {/* Base background */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--header-bg, #162F1C)' }}
        />

        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(224, 203, 168, 0.03) 0%, rgba(224, 203, 168, 0) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '0.5px',
            backgroundColor: 'var(--header-secondary, #E0CBA8)',
            boxShadow: '0 1px 3px rgba(224, 203, 168, 0.05)'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex items-center px-4 md:px-8">
          {/* Logo - No hover effect, served in original size */}
          <Link
            href="/"
            className="flex items-center header-no-hover"
          >
            <img
              src="/images/logo.png"
              alt="suppl.me"
              width={120}
              height={53}
              style={{ height: '53px', width: 'auto' }}
            />
          </Link>

          {/* Centered search bar on desktop - center aligned */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center" style={{ height: '100%', marginTop: '18px' }}>
            <HeaderClient searchBar />
          </div>

          {/* Desktop Navigation - right aligned and center aligned */}
          <nav className="hidden md:flex items-center gap-6 ml-auto" style={{ marginTop: '18px' }}>
            {/* Knowledgebase dropdown - client component */}
            <HeaderClient routes={navRoutes} />
            
            <Link 
              href="/glossary" 
              className="text-nowrap header-no-hover"
              style={{ color: 'var(--header-text, #F7F7F3)' }}
            >
              Glossary
            </Link>

            <Link 
              href="/about" 
              className="text-nowrap header-no-hover"
              style={{ color: 'var(--header-text, #F7F7F3)' }}
            >
              About Us
            </Link>
            
            {/* Dark mode toggle */}
            <HeaderClient darkModeToggle />
          </nav>

          {/* Mobile menu and search - right aligned */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <HeaderClient searchBar />
            <HeaderClient routes={navRoutes} mobile />
          </div>
        </div>
      </div>
    </>
  );
}
