import { useState, useEffect, useRef, useMemo, memo } from 'react';
import svgPaths from "../imports/svg-0sxi0wwcok";
import imgLogo from "figma:asset/7157caff66020adbe0e259d3e2f8312044fb4dd5.png";
import { Search, Menu, ChevronDown, X, ChevronRight } from 'lucide-react';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { DarkModeToggle } from './DarkModeToggle';
import { SearchResults } from './SearchResults';
import { KNOWLEDGEBASE_ROUTES, PageKey, SubcategoryType } from '../routes.config';
import { prefetchRoute } from '../analytics/prefetch';

function Container() {
  return (
    <div 
      className="absolute left-0 top-0 w-full" 
      data-name="Container" 
      style={{ 
        height: 'var(--header-height)',
        boxShadow: '0 2px 16px rgba(22, 47, 28, 0.08), 0 4px 32px rgba(22, 47, 28, 0.04), 0 1px 0 rgba(224, 203, 168, 0.1)',
        borderBottom: '1px solid rgba(224, 203, 168, 0.25)'
      }}
    >
      {/* Base background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--header-bg)' }}
      />
      
      {/* Subtle luxurious gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(180deg, rgba(224, 203, 168, 0.03) 0%, rgba(224, 203, 168, 0) 100%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Subtle bottom border glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(224, 203, 168, 0.15) 50%, transparent 100%)',
          boxShadow: '0 1px 3px rgba(224, 203, 168, 0.05)'
        }}
      />
    </div>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute left-4 md:left-[var(--page-padding-inline)] cursor-pointer flex items-end" 
      data-name="Logo"
      onClick={onClick}
      style={{
        bottom: '12px',
        zIndex: 100,
      }}
    >
      <img 
        src={imgLogo} 
        alt="suppl.me" 
        className="h-[53px] w-auto"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
    </div>
  );
}

function Link1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="cursor-pointer" 
      data-name="Link1"
      onClick={onClick}
    >
      <p className="text-nowrap hover:opacity-80 transition-opacity" style={{ color: 'var(--header-text)' }}>About Us</p>
    </div>
  );
}



// Import centralized supplement images
import { SUPPLEMENT_IMAGES } from '../utils/supplementImages';

// Memoized dropdown item component
const DropdownItem = memo(({ route, onClick }: { route: typeof KNOWLEDGEBASE_ROUTES[0]; onClick: () => void }) => {
  const imageUrl = SUPPLEMENT_IMAGES[route.key as PageKey];
  
  return (
    <div
      onClick={onClick}
      onPointerEnter={() => prefetchRoute(route.key as PageKey)}
      className="dropdown-item flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
    >
      {imageUrl && (
        <div 
          className="flex-shrink-0 rounded overflow-hidden"
          style={{
            width: '38px',
            height: '38px',
            backgroundColor: 'rgba(224, 203, 168, 0.1)',
            willChange: 'auto'
          }}
        >
          <img 
            src={imageUrl}
            alt={route.title}
            className="w-full h-full object-cover"
            style={{
              pointerEvents: 'none',
              userSelect: 'none'
            }}
            draggable={false}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      
      <p 
        className="text-sm"
        style={{ color: 'var(--header-text)' }}
      >
        {route.title}
      </p>
    </div>
  );
});

DropdownItem.displayName = 'DropdownItem';

function Link3({ onNavigate, onKnowledgebaseClick }: { onNavigate: (page: PageKey) => void; onKnowledgebaseClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Memoize sorted routes to prevent recalculation on every render
  const navRoutes = useMemo(() => 
    KNOWLEDGEBASE_ROUTES
      .filter(route => route.showInNav)
      .sort((a, b) => a.title.localeCompare(b.title)),
    []
  );
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="cursor-pointer flex items-center gap-1 group" 
        data-name="Link3"
        onClick={handleClick}
      >
        <p className="text-nowrap group-hover:opacity-80 transition-opacity" style={{ color: 'var(--header-text)' }}>Knowledgebase</p>
        <ChevronDown className="h-4 w-4 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--header-text)' }} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08, ease: 'linear' }}
            className="fixed"
            style={{ 
              top: 'calc(var(--header-height) + 1vh)',
              right: '1vw',
              zIndex: 10000,
              paddingLeft: '2vw',
              paddingTop: '3vh',
              paddingBottom: '3vh',
              marginLeft: '-2vw',
              marginTop: '-3vh',
              marginBottom: '-3vh'
            }}
          >
            <div 
              className="rounded-2xl relative"
              style={{ 
                backgroundColor: 'var(--header-bg)',
                borderColor: 'var(--header-secondary)',
                border: '1px solid',
                outline: '1px solid var(--header-secondary)',
                outlineOffset: '-1px',
                width: '420px',
                maxHeight: 'calc(80vh - 2vh)',
                overflow: 'hidden',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Scroll indicator at bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to top, var(--header-bg) 0%, transparent 100%)'
                }}
              />
              
              <div className="p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/30 scrollbar-track-transparent" style={{ maxHeight: 'calc(80vh - 2vh)' }}>
              <div className="flex flex-col gap-1 pb-4">
                {navRoutes.map(route => (
                  <DropdownItem
                    key={route.key}
                    route={route}
                    onClick={() => {
                      onNavigate(route.key as PageKey);
                      setIsOpen(false);
                    }}
                  />
                ))}
              </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchBar({ isExpanded, setIsExpanded, onNavigate }: { 
  isExpanded: boolean; 
  setIsExpanded: (expanded: boolean) => void;
  onNavigate: (page: PageKey) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsExpanded(false);
  };

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    handleClear();
  };

  return (
    <>
      {/* Search icon/input */}
      <motion.div
        className="relative flex items-center"
        initial={false}
        animate={{
          width: isExpanded ? '320px' : '24px',
        }}
        transition={{
          duration: 0.6,
          ease: [0.32, 0.72, 0, 1],
        }}
        style={{ height: '24px' }}
      >
        {!isExpanded ? (
          <Search
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: 'var(--header-text)' }}
            onClick={handleSearchClick}
          />
        ) : (
          <div className="relative flex items-center w-full h-6">
            <Search
              className="absolute left-3 h-4 w-4 pointer-events-none"
              style={{ color: 'var(--header-secondary)' }}
            />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search supplements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 h-6 border-0 focus-visible:ring-1 text-sm"
              style={{
                backgroundColor: 'var(--header-bg)',
                color: 'var(--header-text)',
                borderColor: 'var(--header-secondary)',
                '--tw-ring-color': 'var(--header-secondary)'
              } as React.CSSProperties}
            />
            <X
              className="absolute right-3 h-4 w-4 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: 'var(--header-secondary)' }}
              onClick={handleClear}
            />
          </div>
        )}
      </motion.div>

      {/* Search results dropdown */}
      {isExpanded && searchQuery && (
        <div 
          className="absolute top-full mt-2 w-[320px]"
          style={{ 
            right: 0,
            zIndex: 10001
          }}
        >
          <SearchResults query={searchQuery} onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (page: PageKey) => {
    onNavigate(page);
    setIsOpen(false);
  };

  // Memoize sorted routes to prevent recalculation on every render
  const navRoutes = useMemo(() => 
    KNOWLEDGEBASE_ROUTES
      .filter(route => route.showInNav)
      .sort((a, b) => a.title.localeCompare(b.title)),
    []
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu 
          className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity" 
          style={{ color: 'var(--header-text)' }}
        />
      </SheetTrigger>
      <SheetContent 
        side="right"
        className="w-[300px] sm:w-[400px] overflow-y-auto"
        style={{
          backgroundColor: 'var(--header-bg)',
          borderColor: 'var(--header-secondary)',
          zIndex: 10000
        }}
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Access knowledgebase articles and site navigation</SheetDescription>
        
        <div className="flex flex-col gap-6 mt-8 pb-8">
          {/* Knowledgebase Section */}
          <div className="flex flex-col gap-2">
            <h2 className="uppercase tracking-wide mb-2 pl-4" style={{ color: 'var(--header-secondary)' }}>Knowledgebase</h2>
            
            <div className="flex flex-col gap-1">
              {navRoutes.map(route => (
                <DropdownItem
                  key={route.key}
                  route={route}
                  onClick={() => handleMenuClick(route.key as PageKey)}
                />
              ))}
            </div>
          </div>

          {/* Other Pages */}
          <div onClick={() => handleMenuClick('glossary')} className="cursor-pointer">
            <h2 className="uppercase tracking-wide pl-4 hover:opacity-80 transition-opacity" style={{ color: 'var(--header-secondary)' }}>Glossary</h2>
          </div>
          
          <div onClick={() => handleMenuClick('about')} className="cursor-pointer">
            <h2 className="uppercase tracking-wide pl-4 hover:opacity-80 transition-opacity" style={{ color: 'var(--header-secondary)' }}>About us</h2>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Link2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="cursor-pointer" 
      data-name="Link2"
      onClick={onClick}
    >
      <p className="text-nowrap hover:opacity-80 transition-opacity" style={{ color: 'var(--header-text)' }}>Glossary</p>
    </div>
  );
}

function Navigation({ onNavigate, onKnowledgebaseClick }: { 
  onNavigate: (page: PageKey) => void;
  onKnowledgebaseClick?: () => void;
}) {
  return (
    <div data-name="Navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-end">
        <Link3 onNavigate={onNavigate} onKnowledgebaseClick={onKnowledgebaseClick} />
        <Link2 onClick={() => onNavigate('glossary')} />
        <Link1 onClick={() => onNavigate('about')} />
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileMenu onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function Container3({ onNavigate, onLandingClick, isSearchExpanded, setIsSearchExpanded }: { 
  onNavigate: (page: PageKey) => void;
  onLandingClick?: () => void;
  isSearchExpanded: boolean;
  setIsSearchExpanded: (expanded: boolean) => void;
}) {
  return (
    <div className="absolute left-0 top-0 w-full flex items-center" data-name="Container3" style={{ height: 'var(--header-height)', zIndex: 'var(--z-fixed)' }}>
      {/* Logo - hidden on mobile when search is expanded to make room */}
      <div className="md:block">
        <motion.div
          initial={false}
          animate={{
            opacity: isSearchExpanded ? 0 : 1,
            pointerEvents: isSearchExpanded ? 'none' : 'auto',
          }}
          transition={{
            duration: 0.3,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="md:!opacity-100 md:!pointer-events-auto"
        >
          <Logo onClick={onLandingClick} />
        </motion.div>
      </div>
      
      {/* Mobile: Right side container - expands leftward when search is active */}
      <div className="absolute md:hidden flex items-end gap-[var(--space-2xs)]" style={{ right: 'var(--page-padding-inline)', bottom: 'calc(var(--space-sm) - 0.5vh)' }}>
        {/* Burger menu - hidden when search expanded */}
        <motion.div
          initial={false}
          animate={{
            width: isSearchExpanded ? 0 : '1.5rem',
            opacity: isSearchExpanded ? 0 : 1,
            marginRight: isSearchExpanded ? 0 : 'var(--space-2xs)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="overflow-hidden flex-shrink-0"
          style={{ pointerEvents: isSearchExpanded ? 'none' : 'auto' }}
        >
          <Navigation onNavigate={onNavigate} />
        </motion.div>
        
        {/* Dark mode toggle - hidden when search expanded */}
        <motion.div
          initial={false}
          animate={{
            width: isSearchExpanded ? 0 : '2rem',
            opacity: isSearchExpanded ? 0 : 1,
            marginRight: isSearchExpanded ? 0 : 'var(--space-2xs)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="overflow-hidden flex-shrink-0 translate-y-[0.0625rem]"
          style={{ pointerEvents: isSearchExpanded ? 'none' : 'auto' }}
        >
          <DarkModeToggle />
        </motion.div>
        
        {/* Search bar - expands to fill available space */}
        <div className="relative flex-shrink-0 translate-y-[0.0625rem]">
          <SearchBar 
            isExpanded={isSearchExpanded} 
            setIsExpanded={setIsSearchExpanded}
            onNavigate={onNavigate}
          />
        </div>
      </div>
      
      {/* Desktop: Navigation on right, search in center */}
      <div className="hidden md:block">
        {/* Right-aligned container with navigation and dark mode toggle - bottom aligned */}
        <div 
          className="absolute flex items-end gap-[var(--space-md)]" 
          style={{ right: 'var(--page-padding-inline)', bottom: 'calc(12px + 0.5vh)' }}
        >
          <div className="flex items-end">
            <Navigation onNavigate={onNavigate} onKnowledgebaseClick={() => onNavigate('knowledgebase')} />
          </div>
          <DarkModeToggle />
        </div>
        
        {/* Search bar - centered and bottom aligned */}
        <div className="absolute flex items-end" style={{ left: '50%', transform: 'translateX(-50%)', bottom: 'calc(12px + 0.5vh)', zIndex: isSearchExpanded ? 50 : 1 }}>
          <SearchBar 
            isExpanded={isSearchExpanded} 
            setIsExpanded={setIsSearchExpanded}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export function Header({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  return (
    <>
      {/* Full-page overlay when search is expanded */}
      <AnimatePresence>
        {isSearchExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/30"
            style={{ zIndex: 'var(--z-sticky)' }}
            onClick={() => setIsSearchExpanded(false)}
          />
        )}
      </AnimatePresence>

      <div id="top" className="w-full bg-[#162F1C] fixed top-0 left-0" data-name="Header" data-layout-header style={{ height: 'var(--header-height)', boxSizing: 'border-box', zIndex: 'var(--z-fixed)' }}>
        <Container />
        <div className={`absolute inset-0 transition-all duration-300 ${isSearchExpanded ? 'backdrop-blur-sm bg-[#162F1C]/80' : ''}`} style={{ zIndex: isSearchExpanded ? 45 : -1 }} />
        {/* Golden stroke line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[0.25px] bg-[#E0CBA8]" style={{ zIndex: 'var(--z-fixed)' }}></div>
      <Container3 
        onNavigate={onNavigate}
        onLandingClick={() => onNavigate('landing')}
        isSearchExpanded={isSearchExpanded}
        setIsSearchExpanded={setIsSearchExpanded}
      />
      </div>
    </>
  );
}