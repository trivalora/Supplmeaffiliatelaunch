import { ReactNode } from 'react';

interface KnowledgebaseLayoutProps {
  children: ReactNode;
}

/**
 * Knowledgebase Layout Component
 * 
 * This wrapper automatically applies responsive spacing to all knowledge base pages.
 * Simply wrap your page content with this component and all responsive styles
 * defined in globals.css will be automatically applied via data attributes.
 * 
 * No need to manually add classes to each page!
 */
export function KnowledgebaseLayout({ children }: KnowledgebaseLayoutProps) {
  return (
    <div className="bg-tertiary flex flex-col w-full min-h-screen" style={{ paddingTop: 'var(--header-height)' }}>
      {children}
    </div>
  );
}

/**
 * Hero Section Wrapper
 * Automatically applies hero section styles
 */
export function KBHeroSection({ children }: { children: ReactNode }) {
  return (
    <div data-kb-hero className="w-full flex flex-col md:flex-row">
      {children}
    </div>
  );
}

/**
 * Hero Text Container
 * Automatically applies hero text padding
 */
export function KBHeroText({ children }: { children: ReactNode }) {
  return (
    <div data-kb-hero-text className="w-full max-w-[600px]">
      {children}
    </div>
  );
}

/**
 * Content Section Wrapper
 * Automatically applies section padding (2vw/2vh mobile, larger desktop)
 */
export function KBSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div data-kb-section data-kb-container className={className}>
      {children}
    </div>
  );
}

/**
 * Content Box (Card)
 * Automatically applies box padding (2px horizontal mobile, 2rem desktop)
 */
export function KBBox({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div data-kb-box className={className}>
      <div data-kb-text>
        {children}
      </div>
    </div>
  );
}
