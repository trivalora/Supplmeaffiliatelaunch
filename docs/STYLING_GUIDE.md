# Suppl.me Styling Guide

**Version**: 1.0  
**Last Updated**: November 26, 2025  
**Status**: Official Standard  
**Applies To**: All components in src/components/ and app/components/

---

## Table of Contents

1. [Overview](#overview)
2. [Styling Priority Order](#styling-priority-order)
3. [CSS Variables Reference](#css-variables-reference)
4. [Tailwind CSS Usage](#tailwind-css-usage)
5. [Common Patterns](#common-patterns)
6. [Dark Mode Support](#dark-mode-support)
7. [Responsive Design](#responsive-design)
8. [Anti-Patterns (Never Use)](#anti-patterns-never-use)
9. [Migration Guide](#migration-guide)
10. [Examples](#examples)

---

## Overview

This guide establishes the official styling standards for the Suppl.me codebase. Following these guidelines ensures:

- ✅ **Consistency**: All pages look and feel cohesive
- ✅ **Maintainability**: Changes to design system cascade automatically
- ✅ **Dark Mode**: Proper theme support without manual overrides
- ✅ **Performance**: Optimized CSS output via Tailwind
- ✅ **Developer Experience**: Clear patterns reduce decision fatigue

**Core Principle**: Use the design system first, custom styles only when necessary.

---

## Styling Priority Order

When styling a component, follow this priority order (highest to lowest):

### 1️⃣ **Tailwind Utility Classes** (PREFERRED)

Use Tailwind classes for all standard styling needs.

```typescript
// ✅ PREFERRED
<div className="bg-primary text-white p-4 rounded-lg hover:opacity-90">
  <h1 className="text-2xl font-bold mb-2">Title</h1>
  <p className="text-tertiary">Description</p>
</div>
```

**Why Preferred:**
- Fastest to write and read
- Automatically responsive with breakpoints
- Tree-shakable (unused classes removed)
- Consistent with design system
- IntelliSense support in VS Code

**When to Use:**
- 95% of all styling needs
- Standard layouts, spacing, colors
- Typography, borders, shadows
- Hover/focus states
- Responsive breakpoints

---

### 2️⃣ **CSS Variables via Tailwind** (DYNAMIC VALUES)

Use CSS variables through Tailwind when you need dynamic values.

```typescript
// ✅ GOOD - Using CSS variables with Tailwind
<div className="p-[var(--space-md)] bg-primary/10">
  <h1 className="text-[var(--fluid-h1)]">Title</h1>
</div>
```

**When to Use:**
- Fluid typography (--fluid-h1, --fluid-h2, etc.)
- Dynamic spacing (--space-xs through --space-lg)
- Layout dimensions (--header-height, --page-padding-inline)
- Values that change based on viewport

---

### 3️⃣ **CSS Variables via Inline Styles** (CALCULATIONS)

Use inline styles with CSS variables when you need calculations.

```typescript
// ✅ ACCEPTABLE - Inline styles for complex calculations
<div style={{ 
  paddingTop: 'var(--header-height)',
  height: 'calc(100vh - var(--header-height))'
}}>
  Content
</div>
```

**When to Use:**
- Complex calc() expressions
- Values derived from multiple CSS variables
- Dynamic positioning that can't be done with Tailwind
- When Tailwind arbitrary values become too complex

---

### 4️⃣ **Inline Styles with Hardcoded Values** (LAST RESORT)

Only use hardcoded inline styles when absolutely necessary.

```typescript
// ⚠️ USE SPARINGLY - Last resort only
<div style={{ 
  transform: `translateX(${position}px)`,  // Dynamic JS value
  clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'  // Complex shape
}}>
  Content
</div>
```

**When to Use (Rare):**
- JavaScript-computed values (animations, gestures)
- Complex SVG/canvas positioning
- Third-party library requirements
- One-off visual effects

**⚠️ Important:** Always add a comment explaining why this is necessary!

---

## CSS Variables Reference

All available CSS variables from `src/styles/globals.css`:

### Brand Colors

```css
/* Primary Palette */
--primary: #162F1C           /* Dark forest green - main brand color */
--secondary: #E0CBA8         /* Warm gold/beige - accents */
--tertiary: #F7F7F3          /* Off-white - text on dark backgrounds */
--color-fourth: #7F8468      /* Sage green - subtle accents */

/* Extended Palette */
--background: #F7F7F3        /* Page background */
--foreground: #162F1C        /* Primary text color */
--color-benefit: #4a7c59     /* Benefit indicators (green) */
--color-drawback: #c45a45    /* Drawback indicators (red) */
--color-neutral: #7F8468     /* Neutral/mixed indicators */
```

**Usage:**
```typescript
// Via Tailwind
<div className="bg-primary text-tertiary">
<div className="border-secondary">

// Via CSS variable
<div style={{ backgroundColor: 'var(--primary)' }}>
```

---

### Fluid Typography

Responsive typography that scales smoothly across screen sizes.

```css
/* Headings */
--fluid-h1: clamp(2rem, 5vw + 1rem, 4rem)           /* 32px → 64px */
--fluid-h2: clamp(1.5rem, 3vw + 0.75rem, 2.5rem)    /* 24px → 40px */
--fluid-h3: clamp(1.25rem, 2.5vw + 0.625rem, 2rem)  /* 20px → 32px */
--fluid-h4: clamp(1.125rem, 2vw + 0.5rem, 1.5rem)   /* 18px → 24px */

/* Body Text */
--fluid-body: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)      /* 14px → 18px */
--fluid-body-small: clamp(0.75rem, 1vw + 0.375rem, 0.875rem) /* 12px → 14px */
--fluid-body-large: clamp(1rem, 2vw + 0.5rem, 1.25rem)       /* 16px → 20px */
```

**Usage:**
```typescript
<h1 className="text-[var(--fluid-h1)] font-bold">Heading</h1>
<p className="text-[var(--fluid-body)]">Body text</p>
```

---

### Fluid Spacing

Responsive spacing that adapts to screen size.

```css
/* Spacing Scale */
--space-xs: clamp(0.75rem, 1.5vw, 1rem)       /* 12px → 16px */
--space-sm: clamp(1rem, 2vw, 1.5rem)          /* 16px → 24px */
--space-md: clamp(1.5rem, 3vw, 2rem)          /* 24px → 32px */
--space-lg: clamp(2rem, 4vw, 3rem)            /* 32px → 48px */
--space-xl: clamp(3rem, 6vw, 5rem)            /* 48px → 80px */
--space-2xl: clamp(4rem, 8vw, 7rem)           /* 64px → 112px */
```

**Usage:**
```typescript
<div className="p-[var(--space-md)] gap-[var(--space-sm)]">
```

---

### Layout Dimensions

```css
/* Fixed Dimensions */
--header-height: 80px
--footer-height: 200px

/* Responsive Dimensions */
--page-padding-inline: clamp(1.5rem, 3vw, 6rem)     /* Horizontal page padding */
--page-max-width: 1440px                            /* Maximum content width */
--content-max-width: 1200px                         /* Maximum text content width */
```

**Usage:**
```typescript
<div style={{ paddingTop: 'var(--header-height)' }}>
<div className="px-[var(--page-padding-inline)]">
```

---

### Dark Mode Colors

Colors automatically invert in dark mode:

```css
.dark {
  --primary: #E0CBA8          /* Gold becomes primary in dark */
  --secondary: #7F8468        /* Sage for secondary */
  --tertiary: #162F1C         /* Dark green for text */
  --background: #0f1810       /* Very dark green background */
  --foreground: #F7F7F3       /* Off-white text */
}
```

**Key Point**: Use CSS variables instead of hardcoded colors to ensure dark mode compatibility!

---

## Tailwind CSS Usage

### Custom Colors in Tailwind

Our CSS variables are already mapped to Tailwind classes:

```typescript
// tailwind.config.js
colors: {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  fourth: 'var(--color-fourth)',
  benefit: 'var(--color-benefit)',
  drawback: 'var(--color-drawback)',
  neutral: 'var(--color-neutral)',
}
```

**Usage:**
```typescript
<div className="bg-primary text-tertiary border-secondary">
<div className="text-benefit">Positive outcome</div>
<div className="text-drawback">Negative outcome</div>
```

---

### Opacity Modifiers

Use Tailwind's opacity syntax for transparent colors:

```typescript
// ✅ CORRECT
<div className="bg-primary/10">        // 10% opacity
<div className="bg-secondary/50">      // 50% opacity
<div className="text-tertiary/80">     // 80% opacity

// ❌ WRONG
<div style={{ backgroundColor: 'rgba(22, 47, 28, 0.1)' }}>
```

---

### Responsive Breakpoints

Use Tailwind's responsive prefixes:

```typescript
// ✅ CORRECT - Mobile-first responsive design
<div className="
  p-4              // 16px padding on mobile
  md:p-6           // 24px padding on medium screens (768px+)
  lg:p-8           // 32px padding on large screens (1024px+)
  xl:p-12          // 48px padding on extra large (1280px+)
">
  <h1 className="
    text-2xl       // 24px on mobile
    md:text-3xl    // 30px on medium
    lg:text-4xl    // 36px on large
  ">
    Responsive Heading
  </h1>
</div>

// ❌ WRONG - Don't use inline styles for responsive design
<div style={{ 
  padding: window.innerWidth > 768 ? '24px' : '16px'  // Never do this!
}}>
```

**Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

---

## Common Patterns

### Hero Sections

```typescript
// ✅ STANDARD HERO PATTERN
<div 
  className="relative flex items-center justify-center"
  style={{
    minHeight: '600px',
    height: '75vh',
    maxHeight: '75vh',
    marginTop: 'var(--header-height)'
  }}
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <HeroImage src="/images/hero.webp" alt="Hero" />
  </div>
  
  {/* Overlay */}
  <div 
    className="absolute inset-0 z-[1]"
    style={{ backgroundColor: 'var(--primary)' }}
  />
  
  {/* Content */}
  <div className="relative z-10 w-full px-[var(--page-padding-inline)]">
    <h1 className="text-[var(--fluid-h1)] text-tertiary font-bold">
      Hero Title
    </h1>
  </div>
</div>
```

---

### Card Components

```typescript
// ✅ STANDARD CARD PATTERN
<div className="
  bg-white dark:bg-primary/10
  border border-secondary/30
  rounded-lg
  p-6
  shadow-md
  hover:shadow-lg
  transition-shadow
  duration-200
">
  <h3 className="text-xl font-semibold text-primary mb-2">
    Card Title
  </h3>
  <p className="text-foreground/80">
    Card content goes here.
  </p>
</div>
```

---

### Buttons

```typescript
// ✅ PRIMARY BUTTON
<button className="
  bg-primary
  text-tertiary
  px-6 py-3
  rounded-lg
  font-semibold
  hover:opacity-90
  active:scale-95
  transition-all
  duration-150
">
  Primary Action
</button>

// ✅ SECONDARY BUTTON
<button className="
  bg-transparent
  border-2 border-primary
  text-primary
  px-6 py-3
  rounded-lg
  font-semibold
  hover:bg-primary hover:text-tertiary
  transition-colors
  duration-200
">
  Secondary Action
</button>
```

---

### Form Inputs

```typescript
// ✅ STANDARD INPUT PATTERN
<input className="
  w-full
  px-4 py-2
  border border-secondary/50
  rounded-md
  bg-white dark:bg-primary/5
  text-foreground
  placeholder:text-foreground/50
  focus:outline-none
  focus:ring-2
  focus:ring-primary/50
  focus:border-primary
  transition-colors
" />
```

---

## Dark Mode Support

### Automatic Dark Mode Classes

Use Tailwind's `dark:` prefix for dark mode variants:

```typescript
// ✅ CORRECT - Automatic dark mode support
<div className="
  bg-white dark:bg-primary/10
  text-foreground dark:text-tertiary
  border-secondary/30 dark:border-secondary/20
">
  Content adapts automatically
</div>

// ❌ WRONG - Manual dark mode detection
{isDarkMode ? (
  <div style={{ backgroundColor: '#0f1810' }}>
) : (
  <div style={{ backgroundColor: '#F7F7F3' }}>
)}
```

---

### Images in Dark Mode

For images that need filtering in dark mode:

```typescript
<img 
  src="/images/diagram.png" 
  alt="Diagram"
  className="dark:brightness-90 dark:contrast-90"
/>
```

---

## Responsive Design

### Mobile-First Approach

Always style for mobile first, then add larger screen styles:

```typescript
// ✅ CORRECT - Mobile first
<div className="
  flex flex-col        // Stack on mobile
  md:flex-row         // Side-by-side on medium+
  gap-4               // 16px gap on mobile
  md:gap-6            // 24px gap on medium+
">

// ❌ WRONG - Desktop first
<div className="
  flex-row            // Breaks on mobile
  sm:flex-col         // Backwards approach
">
```

---

### Container Widths

```typescript
// ✅ STANDARD CONTAINER PATTERN
<div className="
  w-full
  max-w-[var(--page-max-width)]
  mx-auto
  px-[var(--page-padding-inline)]
">
  Centered content with responsive padding
</div>
```

---

## Anti-Patterns (Never Use)

### ❌ 1. Hardcoded Hex Colors

```typescript
// ❌ NEVER DO THIS
<div style={{ backgroundColor: '#162F1C' }}>
<div style={{ color: '#E0CBA8' }}>

// ✅ DO THIS INSTEAD
<div className="bg-primary">
<div className="text-secondary">
```

**Why:** Breaks dark mode, not maintainable, duplicates design system.

---

### ❌ 2. Hardcoded Pixel Values

```typescript
// ❌ NEVER DO THIS
<div style={{ padding: '24px', marginTop: '32px' }}>

// ✅ DO THIS INSTEAD
<div className="p-6 mt-8">
// OR with CSS variables for fluid sizing
<div className="p-[var(--space-md)] mt-[var(--space-lg)]">
```

**Why:** Not responsive, arbitrary values, hard to maintain.

---

### ❌ 3. Magic Numbers

```typescript
// ❌ NEVER DO THIS
<div style={{ width: '847px', height: '421px' }}>  // Where did these come from?

// ✅ DO THIS INSTEAD
<div className="w-full max-w-4xl aspect-video">   // Semantic, clear intent
```

**Why:** Unclear intent, breaks responsive design, unmaintainable.

---

### ❌ 4. Inline !important

```typescript
// ❌ NEVER DO THIS
<div style={{ color: 'red !important' }}>

// ✅ DO THIS INSTEAD
// Fix specificity issues in CSS, don't use !important in inline styles
<div className="text-drawback">
```

**Why:** Inline !important is impossible to override, indicates architecture problem.

---

### ❌ 5. Inconsistent Spacing

```typescript
// ❌ NEVER DO THIS - Random spacing values
<div className="mb-3 mt-5 px-7">

// ✅ DO THIS INSTEAD - Use design system spacing
<div className="mb-2 mt-4 px-6">  // Tailwind scale (8px, 16px, 24px)
// OR
<div className="mb-[var(--space-sm)] mt-[var(--space-md)]">  // Fluid spacing
```

**Why:** Inconsistent visual rhythm, doesn't scale properly.

---

## Migration Guide

### Replacing Hardcoded Colors

**Step 1: Identify hardcoded colors**
```bash
# Search for hex colors in your component
grep -n "#[0-9A-Fa-f]\{6\}" YourComponent.tsx
```

**Step 2: Map to CSS variables**
```typescript
// Common mappings:
'#162F1C' → 'var(--primary)'      or className="bg-primary"
'#E0CBA8' → 'var(--secondary)'    or className="text-secondary"
'#F7F7F3' → 'var(--tertiary)'     or className="bg-tertiary"
'#7F8468' → 'var(--color-fourth)' or className="text-fourth"
'#4a7c59' → 'var(--color-benefit)' or className="text-benefit"
```

**Step 3: Replace**
```typescript
// BEFORE
<div style={{ backgroundColor: '#162F1C', color: '#F7F7F3' }}>

// AFTER (Tailwind - preferred)
<div className="bg-primary text-tertiary">

// OR AFTER (CSS variables - if needed for other reasons)
<div style={{ backgroundColor: 'var(--primary)', color: 'var(--tertiary)' }}>
```

---

### Replacing Hardcoded Spacing

```typescript
// BEFORE
<div style={{ padding: '24px', margin: '16px 0' }}>

// AFTER
<div className="p-6 my-4">  // p-6 = 24px, my-4 = 16px margin-y
```

**Tailwind Spacing Scale:**
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `5` = 1.25rem (20px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `12` = 3rem (48px)
- `16` = 4rem (64px)

---

## Examples

### Complete Page Example

```typescript
'use client';

import { useState } from 'react';

export function ExamplePage() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          height: '75vh',
          marginTop: 'var(--header-height)'
        }}
      >
        <div className="relative z-10 w-full px-[var(--page-padding-inline)]">
          <h1 className="text-[var(--fluid-h1)] font-bold text-primary mb-4">
            Page Title
          </h1>
          <p className="text-[var(--fluid-body-large)] text-foreground/80 max-w-2xl">
            Subtitle or description goes here.
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full max-w-[var(--page-max-width)] mx-auto px-[var(--page-padding-inline)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Example */}
          <div className="
            bg-white dark:bg-primary/10
            border border-secondary/30
            rounded-lg
            p-6
            hover:shadow-lg
            transition-shadow
            duration-200
          ">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Card Title
            </h3>
            <p className="text-foreground/80 mb-4">
              Card content with proper contrast and spacing.
            </p>
            <button className="
              bg-primary
              text-tertiary
              px-4 py-2
              rounded
              hover:opacity-90
              transition-opacity
            ">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Checklist for New Components

Before committing a new component, verify:

- [ ] ✅ Used Tailwind classes for 95%+ of styling
- [ ] ✅ No hardcoded hex colors
- [ ] ✅ No hardcoded pixel values (except when absolutely necessary with comment)
- [ ] ✅ Used CSS variables for dynamic/fluid values
- [ ] ✅ Dark mode support via `dark:` classes or CSS variables
- [ ] ✅ Mobile-first responsive design
- [ ] ✅ Semantic spacing from design system
- [ ] ✅ Proper contrast ratios (text is readable)
- [ ] ✅ Hover/focus states for interactive elements
- [ ] ✅ Transitions for state changes
- [ ] ✅ IntelliSense works (no typos in class names)

---

## Getting Help

**Questions about styling?**

1. Check this guide first
2. Look at existing components for patterns:
   - `src/components/templates/KnowledgebaseTemplate.tsx`
   - `src/components/pages/static/LandingPage.tsx`
   - `src/components/shared/layout/HeaderClient.tsx`
3. Check `src/styles/globals.css` for available CSS variables
4. Ask in development Slack channel

**Proposing a new pattern?**

1. Document the use case
2. Show code example
3. Explain why existing patterns don't work
4. Submit PR with this guide updated

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Nov 26, 2025 | Initial styling guide created (Sprint 3) |

---

**Maintained by**: Development Team  
**Last Review**: November 26, 2025  
**Next Review**: January 1, 2026
