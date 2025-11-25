'use client';

import { useState, useEffect, useRef, useMemo, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Menu, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RouteConfig, KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } from '@/routes.config';
import { getRouteByKey } from '../lib/route-adapter';
import { getSupplementThumbnail } from '@/lib/supplementImages';
import { DarkModeToggle } from '@/components/shared/ui-extensions/DarkModeToggle';
import { SearchResults } from '@/components/shared/content/SearchResults';
import { Input } from '@/components/ui/input';

interface HeaderClientProps {
  routes?: RouteConfig[];
  mobile?: boolean;
  darkModeToggle?: boolean;
  searchBar?: boolean;
}

// Memoized dropdown item component for performance
const DropdownItem = memo(({ route, onClick }: { route: RouteConfig; onClick: () => void }) => {
  const imageUrl = getSupplementThumbnail(route.key);
  const href = route.path || (route.key.endsWith('v2') 
    ? `/${route.key.replace('v2', '')}`
    : `/${route.key}`);

  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
      onClick={onClick}
      prefetch={true}
      style={{ opacity: 1 }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {imageUrl && (
        <div className="dropdown-thumbnail">
          <Image
            src={imageUrl}
            alt={route.title}
            width={40}
            height={40}
          />
        </div>
      )}
      <span className="text-sm font-medium" style={{ color: 'var(--header-text, #F7F7F3)', opacity: 1 }}>
        {route.title}
      </span>
    </Link>
  );
});

DropdownItem.displayName = 'DropdownItem';

// Desktop Knowledgebase Dropdown
function KnowledgebaseDropdown({ routes }: { routes: RouteConfig[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Preload top 6 supplement images as AVIF when component mounts
  useEffect(() => {
    const toPreload = routes.slice(0, 6);
    const cleanupIds: string[] = [];
    
    toPreload.forEach((route) => {
      const imageUrl = getSupplementThumbnail(route.key);
      if (!imageUrl) return;
      
      const id = `preload-nav-${route.key}`;
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
        cleanupIds.push(id);
      }
    });
    
    return () => {
      cleanupIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [routes]);

  // Close on click outside
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
      <button
        className="cursor-pointer flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-nowrap" style={{ color: 'var(--header-text, #F7F7F3)' }}>
          Knowledgebase
        </span>
        <ChevronDown className="h-4 w-4" style={{ color: 'var(--header-text, #F7F7F3)' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed"
            style={{ 
              top: 'calc(var(--header-height) + 1vh - 4vh)',
              right: '1vw',
              zIndex: 50,
              maxHeight: 'calc(75vh - var(--header-height) + 4vh)',
              padding: '4vh 0 4vh 2vw'
            }}
          >
            <div
              className="knowledgebase-dropdown rounded-2xl shadow-xl flex flex-col"
              style={{
                backgroundColor: '#162F1C',
                border: '0.5px solid #E0CBA8',
                width: '420px',
                maxHeight: 'calc(75vh - var(--header-height) + 4vh)',
                height: '100%'
              }}
            >
              <div className="overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-secondary/30 scrollbar-track-transparent">
                {routes.map((route) => (
                  <DropdownItem
                    key={route.key}
                    route={route}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// SearchBar Component with expansion animation
function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the search container AND the dropdown
      if (
        containerRef.current && 
        !containerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
        setSearchQuery('');
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsExpanded(false);
  };

  const handleNavigate = (key: string) => {
    // Use centralized route lookup that searches all route types
    const route = getRouteByKey(key);
    if (route && route.path) {
      router.push(route.path);
      handleClear();
    }
  };

  return (
    <>
      {/* Search Bar */}
      <motion.div
        ref={containerRef}
        className="relative flex items-center z-50"
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
            className="h-6 w-6 cursor-pointer"
            style={{ color: 'var(--header-text, #F7F7F3)' }}
            onClick={handleSearchClick}
          />
        ) : (
          <div className="relative flex items-center w-full h-6">
            <Search
              className="absolute left-3 h-4 w-4 pointer-events-none"
              style={{ color: 'var(--header-secondary, #E0CBA8)' }}
            />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search supplements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 h-6 border-0 focus-visible:ring-1 text-sm"
              style={{
                backgroundColor: 'var(--header-bg, #162F1C)',
                color: 'var(--header-text, #F7F7F3)',
                borderColor: 'var(--header-secondary, #E0CBA8)',
              }}
            />
            <X
              className="absolute right-3 h-4 w-4 cursor-pointer"
              style={{ color: 'var(--header-secondary, #E0CBA8)' }}
              onClick={handleClear}
            />
          </div>
        )}
      </motion.div>

      {/* Search Results Dropdown */}
      {isExpanded && searchQuery && (
        <div ref={dropdownRef} className="header-search-dropdown">
          <SearchResults query={searchQuery} onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}

// Mobile Menu
function MobileMenu({ routes }: { routes: RouteConfig[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" style={{ color: 'var(--header-text, #F7F7F3)' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 overflow-y-auto"
              style={{ backgroundColor: 'var(--header-bg, #162F1C)' }}
            >
              {/* Header */}
              <div 
                className="flex items-center justify-between p-4 border-b"
                style={{ 
                  borderColor: 'var(--header-secondary, #E0CBA8)',
                  color: 'var(--header-text, #F7F7F3)'
                }}
              >
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" style={{ color: 'var(--header-text, #F7F7F3)' }} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-4">
                <div 
                  className="border-b pb-4"
                  style={{ borderColor: 'var(--header-secondary, #E0CBA8)' }}
                >
                  <h3 
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'var(--header-secondary, #E0CBA8)' }}
                  >
                    Supplements
                  </h3>
                  {routes.map((route) => {
                    const href = route.path || (route.key.endsWith('v2') 
                      ? `/${route.key.replace('v2', '')}`
                      : `/${route.key}`);

                    return (
                      <Link
                        key={route.key}
                        href={href}
                        className="block py-2 hover:opacity-80 transition-opacity"
                        onClick={() => setIsOpen(false)}
                        style={{ color: 'var(--header-text, #F7F7F3)' }}
                      >
                        {route.title}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/glossary"
                  className="block py-2 text-lg hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                  style={{ color: 'var(--header-text, #F7F7F3)' }}
                >
                  Glossary
                </Link>

                <Link
                  href="/about"
                  className="block py-2 text-lg hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                  style={{ color: 'var(--header-text, #F7F7F3)' }}
                >
                  About Us
                </Link>

                <div 
                  className="border-t pt-4"
                  style={{ borderColor: 'var(--header-secondary, #E0CBA8)' }}
                >
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: 'var(--header-secondary, #E0CBA8)' }}
                    >
                      Dark Mode
                    </span>
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HeaderClient({ routes, mobile, darkModeToggle, searchBar }: HeaderClientProps) {
  // Dark mode toggle
  if (darkModeToggle) {
    return <DarkModeToggle />;
  }

  // Search bar
  if (searchBar) {
    return <SearchBar />;
  }

  // Mobile menu
  if (mobile) {
    return <MobileMenu routes={routes || []} />;
  }

  // Desktop knowledgebase dropdown
  return <KnowledgebaseDropdown routes={routes || []} />;
}
