"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import { SearchResults } from "@/components/shared/content/SearchResults";
import { PageKey } from "@/routes.config";

interface MobileSearchSheetProps {
  /** Whether the sheet is open */
  isOpen: boolean;
  /** Callback when sheet should close */
  onClose: () => void;
  /** Callback when a result is selected */
  onNavigate: (key: PageKey) => void;
  /** Placeholder text for search input */
  placeholder?: string;
  /** Initial search query (optional) */
  initialQuery?: string;
  /** Context for SearchResults styling */
  context?: "header" | "landing";
}

/**
 * Mobile-optimized bottom sheet search component
 * Provides a full-screen search experience on mobile devices
 */
export function MobileSearchSheet({
  isOpen,
  onClose,
  onNavigate,
  placeholder = "Search supplements...",
  initialQuery = "",
  context = "header",
}: MobileSearchSheetProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when sheet opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure animation has started
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Sync initialQuery when it changes externally
  useEffect(() => {
    if (initialQuery !== searchQuery && isOpen) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const handleClear = useCallback(() => {
    setSearchQuery("");
    inputRef.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    setSearchQuery("");
    onClose();
  }, [onClose]);

  const handleNavigate = useCallback(
    (key: PageKey) => {
      onNavigate(key);
      handleClose();
    },
    [onNavigate, handleClose]
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[90]"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8,
            }}
            className="mobile-search-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            {/* Header with drag handle and close button */}
            <div className="mobile-search-sheet-header">
              <div className="mobile-search-sheet-handle-bar" />
              <button
                onClick={handleClose}
                className="mobile-search-sheet-close-top"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results (above input) */}
            <div className="mobile-search-sheet-results">
              {searchQuery.trim() ? (
                <SearchResults
                  query={searchQuery}
                  onNavigate={handleNavigate}
                  context={context}
                />
              ) : (
                <div className="mobile-search-sheet-empty">
                  <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground text-center">
                    Search for supplements, glossary terms, or product
                    comparisons
                  </p>
                </div>
              )}
            </div>

            {/* Search Input Footer (at bottom) */}
            <div className="mobile-search-sheet-footer">
              <div className="mobile-search-sheet-input-wrapper">
                <Search className="mobile-search-sheet-icon" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder={placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mobile-search-sheet-input"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  enterKeyHint="search"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={handleClear}
                    className="mobile-search-sheet-clear"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Hook to manage MobileSearchSheet state
 */
export function useMobileSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
