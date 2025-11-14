import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('darkMode');
    
    let isDarkMode: boolean;
    if (stored !== null) {
      // User has explicitly set a preference
      isDarkMode = stored === 'true';
    } else {
      // Use system preference
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply if user hasn't set an explicit preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (dark: boolean, skipTransition = false) => {
    // Disable transitions temporarily to prevent layout shift
    if (skipTransition) {
      // Lock the current layout by storing critical dimensions
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      // Get viewport dimensions to lock them
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Disable all transitions and animations
      htmlElement.classList.add('disable-transitions');
      
      // Lock viewport dimensions to prevent any reflow
      const originalHtmlStyle = {
        minHeight: htmlElement.style.minHeight,
        width: htmlElement.style.width,
        overflow: htmlElement.style.overflow
      };
      
      htmlElement.style.minHeight = `${viewportHeight}px`;
      htmlElement.style.width = `${viewportWidth}px`;
      htmlElement.style.overflow = 'hidden';
      
      // Force a synchronous reflow to ensure styles are applied
      void htmlElement.offsetHeight;
      
      // Apply theme change
      if (dark) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
      
      // Force another reflow to apply dark mode changes
      void htmlElement.offsetHeight;
      
      // Restore scroll position if it shifted
      if (window.scrollY !== scrollY || window.scrollX !== scrollX) {
        window.scrollTo(scrollX, scrollY);
      }
      
      // Re-enable transitions and unlock dimensions after all repaints
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Restore original styles
            htmlElement.style.minHeight = originalHtmlStyle.minHeight;
            htmlElement.style.width = originalHtmlStyle.width;
            htmlElement.style.overflow = originalHtmlStyle.overflow;
            // Remove disable-transitions class
            htmlElement.classList.remove('disable-transitions');
          });
        });
      });
    } else {
      // Apply theme change without transition management
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark, true); // Skip transitions on manual toggle
    localStorage.setItem('darkMode', String(newIsDark));
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div style={{ width: '32px', height: '24px' }} aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center rounded-lg transition-all hover:bg-secondary/20 active:scale-95 pb-[2px]"
      style={{ height: '24px', width: '32px' }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      data-component="dark-mode-toggle"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[#E0CBA8] transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-[#F7F7F3] transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
