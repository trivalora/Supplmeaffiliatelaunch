# Responsive Design System Guide

## Overview

This project follows React and CSS best practices with a **mobile-first responsive design** approach. The spacing system is **fully automated and centralized** in `/styles/globals.css` - styles automatically apply to all pages via data attributes. **No manual updates needed per page!**

## ⚡ Fluid Typography System (NEW!)

**All text automatically scales smoothly based on viewport size using CSS `clamp()`!**

### Automatic Font Scaling

| Element | Mobile Size | Desktop Size | CSS Variable |
|---------|------------|--------------|--------------|
| Hero H1 | 32px (2rem) | 64px (4rem) | `--fluid-h1` |
| Section H2 | 24px (1.5rem) | 40px (2.5rem) | `--fluid-h2` |
| Subheading H3 | 18px (1.125rem) | 28px (1.75rem) | `--fluid-h3` |
| Body Text (p, li, td) | 14px (0.875rem) | 18px (1.125rem) | `--fluid-body` |
| Lead Text (hero p) | 16px (1rem) | 24px (1.5rem) | `--fluid-lead` |
| Small Text | 12px (0.75rem) | 14px (0.875rem) | `--fluid-small` |

### How It Works

**Just use semantic HTML** - the system applies responsive font sizes automatically! No need for Tailwind font size classes.

```tsx
{/* ✅ DO THIS - Fluid typography applies automatically */}
<div data-kb-hero-text>
  <h1>Vitamin D</h1>  {/* Auto scales 32px → 64px */}
  <p>Evidence-based overview...</p>  {/* Auto scales 16px → 24px */}
</div>

<div data-kb-box>
  <h2>What is Vitamin D?</h2>  {/* Auto scales 24px → 40px */}
  <p>Body text here...</p>  {/* Auto scales 14px → 18px */}
</div>

{/* ❌ DON'T DO THIS - Avoid Tailwind font size classes */}
<h1 className="text-[48px] md:text-[56px]">
```

### Benefits

✅ **Perfectly Smooth Scaling**: Font size adapts to ANY viewport width, not just breakpoints  
✅ **Zero Maintenance**: No need to write responsive font size classes  
✅ **Better UX**: Text is always readable on all devices  
✅ **Automatic**: Works with data attributes - just use semantic HTML!

## Architecture

### Technology Stack
- **Framework**: React with TypeScript (.tsx)
- **Styling**: Tailwind CSS v4.0
- **Approach**: Mobile-first responsive design
- **Fonts**: Lora (headings) + Lato (body text)

### File Structure
```
/styles/globals.css          → Global styles & responsive utilities
/components/                 → React components (pages & reusable)
  /ui/                      → ShadCN UI components
  /figma/                   → Figma-specific components
  [PageName].tsx            → Individual page components
/App.tsx                    → Main application & routing
```

## Automatic Responsive Spacing System

**All responsive spacing is handled automatically via CSS in `/styles/globals.css`**. Simply use data attributes on your HTML elements and the styles apply automatically - no need to manually add classes to each page!

### Automatic Styling via Data Attributes

#### 1. `data-kb-section`
Automatically applies responsive section padding to any element.

**Just add the attribute - styles apply automatically!**

**Mobile (default)**:
- Horizontal: `2vw` (left/right)
- Vertical: `2vh` (top/bottom)

**Tablet (≥768px)**:
- Horizontal: `4rem`
- Vertical: `4rem`

**Desktop (≥1024px)**:
- Horizontal: `6rem`
- Vertical: `5rem`

**Usage** (styles apply automatically):
```tsx
<div data-kb-section data-kb-container>
  {/* Your content - padding applied automatically! */}
</div>
```

#### 2. `data-kb-box`
Automatically styles cards/boxes with minimal padding.

**Mobile (default)**:
- Horizontal: `2px` (left/right)
- Vertical: `1rem` (top/bottom)

**Desktop (≥768px)**:
- All sides: `2rem`

**Usage** (styles apply automatically):
```tsx
<div data-kb-box className="bg-white rounded-[14px] border border-[#E0CBA8]">
  <div data-kb-text>
    {/* Box content - padding applied automatically! */}
  </div>
</div>
```

#### 3. `data-kb-text`
Automatically applies inner text padding (inside boxes).

**Mobile (default)**:
- Horizontal: `2vw` (left/right)

**Desktop (≥768px)**:
- No padding (0)

**Usage** (automatically nested):
```tsx
<div data-kb-box className="bg-white rounded-[14px]">
  <div data-kb-text>
    <h2>Your heading</h2>
    <p>Your text - padding automatic!</p>
  </div>
</div>
```

#### 4. `data-kb-container`
Automatically centers content with max-width.

**Mobile**: Full width (100%)
**Extra Large (≥1280px)**: Max-width `1280px` + centered

**Usage**:
```tsx
<div data-kb-container>
  {/* Content auto-centers on large screens - automatic! */}
</div>
```

#### 5. `data-kb-hero`
Automatically sets hero section height.

**Mobile**: `400px` height  
**Desktop (≥768px)**: `600px` height

#### 6. `data-kb-hero-text`
Automatically applies hero text padding.

**Mobile**: `2vw` padding  
**Tablet (≥768px)**: `4rem` horizontal  
**Desktop (≥1024px)**: `6rem` horizontal

---

## 🎯 The Best Practice Advantage

**One Edit, Universal Update**: Change spacing in `globals.css` → ALL pages update automatically!

```css
/* Edit once in globals.css */
[data-kb-section] {
  padding-left: 2vw;  /* Change this once */
  padding-right: 2vw; /* Updates EVERYWHERE */
}
```

**No manual page updates needed!** 🎉

## Mobile-First Approach

### Breakpoints
We use Tailwind's default breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### How It Works

1. **Base styles = Mobile styles** (no prefix)
2. **Desktop overrides** use `md:` or `lg:` prefixes

Example:
```tsx
{/* Mobile: column layout, Desktop: row layout */}
<div className="flex flex-col md:flex-row">
  
{/* Mobile: text-[14px], Desktop: text-[16px] */}
<p className="text-[14px] md:text-[16px]">

{/* Mobile: space-y-6, Desktop: space-y-8 */}
<div className="space-y-6 md:space-y-8">
```

## Component Structure Best Practices

### 1. Semantic Organization
Group related components together with clear section comments:

```tsx
/* ===================================
   HERO SECTION COMPONENTS
   =================================== */

function HeroSection() { ... }
function HeroLeftPanel() { ... }
function HeroRightPanel() { ... }

/* ===================================
   CONTENT SECTION COMPONENTS
   =================================== */

function OverviewSection() { ... }
function BenefitsSection() { ... }
```

### 2. Component Hierarchy
```
PageComponent
├── HeroSection
├── ContentGrid
│   ├── LeftColumn
│   │   ├── OverviewSection
│   │   ├── DosageSection
│   │   └── FAQSection
│   └── RightColumn
│       ├── BenefitsSection
│       └── SafetySection
├── CitationsSection
└── Footer
```

### 3. Proper Padding Nesting

**Correct Structure**:
```tsx
<div className="content-box bg-white rounded-[14px]">
  <div className="text-content">
    <h2>Heading</h2>
    <p>Text content...</p>
  </div>
</div>
```

This ensures:
- Box has 2px horizontal padding on mobile
- Text inside has additional 2vw padding on mobile
- On desktop, box has 2rem padding, text has no additional padding

## Hero Section Mobile Layout

### Image Above Text on Mobile
Use flexbox with order utilities:

```tsx
<div className="flex flex-col md:flex-row">
  {/* Text Panel - shows second on mobile, first on desktop */}
  <div className="order-2 md:order-1">
    <div className="hero-text-container">
      <h1>Title</h1>
      <p>Description</p>
    </div>
  </div>
  
  {/* Image Panel - shows first on mobile, second on desktop */}
  <div className="order-1 md:order-2">
    <img src="..." alt="..." />
  </div>
</div>
```

## Typography

### Font Sizes

**⚡ RECOMMENDED: Use fluid typography (automatic)!**

The system now uses fluid typography that scales smoothly. Just use semantic HTML:

```tsx
{/* ✅ RECOMMENDED - Fluid typography applies automatically */}
<div data-kb-box>
  <h2>Section Title</h2>  {/* Auto-scales 24px → 40px */}
  <p>Body content</p>      {/* Auto-scales 14px → 18px */}
</div>
```

**Legacy approach** (only if you need custom sizes):
```tsx
{/* ⚠️ Use only for special cases */}
<h1 className="text-[36px] md:text-[48px] lg:text-[56px]">
```

### Font Families
```tsx
{/* Headings */}
className="font-['Lora',_serif]"

{/* Body text */}
className="font-['Lato',_sans-serif]"
```

## Colors

Use consistent color variables:
- **Primary Dark**: `#162F1C`
- **Secondary**: `#E0CBA8`
- **Tertiary**: `#F7F7F3`
- **Fourth**: `#7F8468`
- **Text**: `#2D2D2D`

## Grid Layouts

Use Tailwind's grid system:

```tsx
{/* Mobile: 1 column, Desktop: 3 columns */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
  <div className="lg:col-span-2">
    {/* 2/3 width on desktop */}
  </div>
  <div>
    {/* 1/3 width on desktop */}
  </div>
</div>
```

## Common Patterns

### Section Spacing
```tsx
<div className="section-container page-container">
  <div className="space-y-6 md:space-y-8">
    {/* Sections */}
  </div>
</div>
```

### Card/Box Pattern
```tsx
<div className="content-box bg-white rounded-[14px] border border-[#E0CBA8]">
  <div className="text-content">
    <h2 className="font-['Lora',_serif] text-[24px] md:text-[32px] text-[#162F1C] mb-4 md:mb-6">
      Title
    </h2>
    <p className="font-['Lato',_sans-serif] text-[14px] md:text-[16px] text-[#2D2D2D] leading-[1.75]">
      Content
    </p>
  </div>
</div>
```

### Tables (Horizontal Scroll on Mobile)
```tsx
<div className="overflow-x-auto -mx-2 md:mx-0">
  <table className="w-full border-collapse min-w-[600px]">
    {/* Table content */}
  </table>
</div>
```

## Quick Start: Using the Layout Components

**Option 1: Automatic Layout (Recommended)**

Use the pre-built layout components from `/components/KnowledgebaseLayout.tsx`:

```tsx
import { KnowledgebaseLayout, KBSection, KBBox, KBHeroSection } from './components/KnowledgebaseLayout';

export function MyPage() {
  return (
    <KnowledgebaseLayout>
      <KBHeroSection>
        {/* Hero content */}
      </KBHeroSection>
      
      <KBSection>
        <KBBox className="bg-white rounded-[14px]">
          {/* Content - all spacing automatic! */}
        </KBBox>
      </KBSection>
    </KnowledgebaseLayout>
  );
}
```

**Option 2: Manual Data Attributes**

Or just add data attributes directly:

```tsx
<div data-kb-section data-kb-container>
  <div data-kb-box className="bg-white rounded-[14px]">
    <div data-kb-text>
      {/* All spacing applied automatically! */}
    </div>
  </div>
</div>
```

**Both options get automatic responsive spacing from `globals.css`!**

## Benefits of This System

✅ **Fully Automatic**: Styles apply via data attributes - no manual updates!  
✅ **Centralized**: All spacing logic in ONE place (`globals.css`)  
✅ **Edit Once, Update Everywhere**: Change CSS once → all pages update  
✅ **Mobile-First**: Optimized for mobile, enhanced for desktop  
✅ **Consistent**: Same patterns automatically across all pages  
✅ **Maintainable**: Super easy to update spacing across entire site  
✅ **Performant**: CSS selectors are highly efficient  
✅ **Responsive**: Automatically adapts to screen size  
✅ **Clean Code**: Semantic data attributes, organized structure  

## Example: Making a Global Change

Want to change mobile padding from 2vw to 3vw for ALL pages?

```css
/* Edit ONCE in /styles/globals.css */
[data-kb-section] {
  padding-left: 3vw;  /* Changed from 2vw */
  padding-right: 3vw; /* Changed from 2vw */
}
```

**Done!** All knowledge base pages update automatically. No touching individual files! 🎉

## Complete Page Structure Example

```tsx
export function MyKnowledgeBasePage() {
  return (
    <div className="bg-[#F7F7F3] flex flex-col w-full min-h-screen">
      {/* Hero Section - no data-layout-content */}
      <div data-kb-hero className="w-full flex flex-col md:flex-row">
        <div className="flex-1 bg-[#162F1C]">
          <div data-kb-hero-text>
            <h1>Page Title</h1>
            <p>Description</p>
          </div>
        </div>
      </div>

      {/* Content Section - use data-layout-content */}
      <div className="bg-[#F7F7F3] w-full" data-layout-content>
        <div data-kb-container>
          {/* Content boxes with drop shadow auto-applied */}
          <div data-kb-box className="bg-white rounded-[14px] border border-[#E0CBA8]">
            <div data-kb-text>
              <h2>Section Title</h2>
              <p>Content here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - has data-layout-footer inside */}
      <Footer />
    </div>
  );
}
```

## Summary: Data Attribute Guide

| Element | Data Attribute | Purpose |
|---------|---------------|---------|
| Header | `data-layout-header` | Large padding, bottom border |
| Footer | `data-layout-footer` | Large padding |
| Content sections | `data-layout-content` | Smaller padding |
| Max-width container | `data-kb-container` | Centers content, max 1280px |
| Hero section | `data-kb-hero` | Auto height (400px mobile, 600px desktop) |
| Hero text | `data-kb-hero-text` | Hero text padding |
| Content box/card | `data-kb-box` | Box padding + drop shadow |
| Text within box | `data-kb-text` | Inner text padding |
