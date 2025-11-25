'use client';

import { useState, useEffect, useRef } from 'react';

let activeTooltip: ((x: number, y: number) => void) | null = null;
let hideTooltip: (() => void) | null = null;

export function useAffiliateTooltip() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      if (activeTooltip) {
        activeTooltip(x, y);
      }
    },
    onMouseLeave: () => {
      if (hideTooltip) {
        hideTooltip();
      }
    }
  };
}

export function AffiliateTooltip() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    activeTooltip = (x: number, y: number) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setPosition({ x, y });
      setIsVisible(true);
    };

    hideTooltip = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    };

    return () => {
      activeTooltip = null;
      hideTooltip = null;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isVisible || !position) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y - 48,
        transform: 'translateX(-50%)',
        zIndex: 10000,
        pointerEvents: 'none'
      }}
    >
      <div 
        className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-xs whitespace-nowrap shadow-lg"
      >
        Affiliate link. We may earn a commission at no additional cost to you.
      </div>
    </div>
  );
}
