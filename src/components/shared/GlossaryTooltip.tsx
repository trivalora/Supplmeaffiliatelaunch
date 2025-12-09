"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface GlossaryTooltipProps {
  href: string;
  title: string;
  abbreviation?: string;
  summary: string;
  children: React.ReactNode;
}

export function GlossaryTooltip({
  href,
  title,
  abbreviation,
  summary,
  children,
}: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverCard openDelay={200} open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <Link
          href={href}
          className="glossary-link text-primary underline decoration-1 underline-offset-2 hover:text-primary/80 transition-colors cursor-help"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {children}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-96 max-w-[90vw] bg-card border border-border p-4"
        side="top"
        align="start"
        onPointerDownOutside={() => setIsOpen(false)}
        onEscapeKeyDown={() => setIsOpen(false)}
      >
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            {title}
            {abbreviation && (
              <span className="text-muted-foreground"> ({abbreviation})</span>
            )}
          </p>
          <p className="text-sm text-foreground">{summary}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
