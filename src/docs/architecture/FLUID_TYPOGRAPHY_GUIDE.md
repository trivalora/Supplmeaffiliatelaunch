# Fluid Typography System

## Overview

Your website now uses **modern fluid typography** that automatically scales text size based on viewport dimensions. This creates a superior responsive experience compared to traditional breakpoint-based sizing.

## What is Fluid Typography?

Instead of jumping between fixed sizes at breakpoints:
```css
/* ❌ OLD WAY - Text "jumps" at breakpoints */
font-size: 16px;  /* Mobile */
@media (min-width: 768px) {
  font-size: 18px;  /* Sudden jump at 768px */
}
```

Fluid typography smoothly scales:
```css
/* ✅ NEW WAY - Text scales smoothly at ANY viewport */
font-size: clamp(14px, 1.5vw + 0.5rem, 18px);
/* Always between 14-18px, scales with viewport width */
```

## How It Works

We use CSS `clamp()` with three values:
```css
clamp(minimum, preferred, maximum)
```

- **Minimum**: Smallest font size (mobile)
- **Preferred**: Viewport-based scaling formula (`vw` units)
- **Maximum**: Largest font size (desktop)

## Typography Scale

| Element | Mobile | Desktop | Where It Applies |
|---------|--------|---------|------------------|
| **Hero H1** | 32px | 64px | `[data-kb-hero]`, `[data-kb-hero-text]` |
| **Section H2** | 24px | 40px | `[data-kb-box]`, `[data-layout-content]` |
| **Subheading H3** | 18px | 28px | All content sections |
| **Body Text** | 14px | 18px | `<p>`, `<li>`, `<td>` |
| **Lead Text** | 16px | 24px | Hero descriptions |
| **Small Text** | 12px | 14px | `.text-sm`, `<small>` |

## Usage

### ✅ Recommended Approach

Just use semantic HTML with data attributes - fluid typography applies automatically:

```tsx
export function VitaminDPage() {
  return (
    <div className="bg-[#F7F7F3] min-h-screen">
      {/* Hero - H1 auto-scales 32px → 64px */}
      <div data-kb-hero>
        <div data-kb-hero-text>
          <h1>Vitamin D</h1>  {/* ✅ Auto-scales! */}
          <p>Evidence-based overview...</p>  {/* ✅ Auto-scales 16px → 24px */}
        </div>
      </div>

      {/* Content - All text auto-scales */}
      <div data-layout-content>
        <div data-kb-container>
          <div data-kb-box className="bg-white rounded-[14px]">
            <h2>What is Vitamin D?</h2>  {/* ✅ Auto-scales 24px → 40px */}
            <p>Vitamin D is...</p>  {/* ✅ Auto-scales 14px → 18px */}
            <h3>Benefits</h3>  {/* ✅ Auto-scales 18px → 28px */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### ❌ Avoid

Don't use Tailwind font size classes inside knowledge base sections:

```tsx
{/* ❌ DON'T - Overrides fluid typography */}
<h1 className="text-[48px] md:text-[56px]">

{/* ✅ DO - Let fluid typography work */}
<h1>Title</h1>
```

## Benefits

### 1. Perfect Scaling at ANY Width
Traditional breakpoints only trigger at specific widths (768px, 1024px). Fluid typography scales smoothly at **every single pixel width** from 320px to 2560px+.

### 2. Better Readability
Text is always the optimal size for the viewport - never too small on small tablets or too large on medium screens.

### 3. Zero Maintenance
No need to write responsive classes for every heading:
```tsx
{/* ❌ OLD - Tedious */}
<h1 className="text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px]">

{/* ✅ NEW - Automatic */}
<h1>Title</h1>
```

### 4. Consistent Design System
All pages automatically use the same typography scale. Update it once in `globals.css`, applies everywhere.

## Technical Implementation

The fluid typography is defined in `/styles/globals.css`:

```css
:root {
  /* Fluid typography variables */
  --fluid-h1: clamp(2rem, 5vw + 1rem, 4rem);
  --fluid-h2: clamp(1.5rem, 3vw + 0.75rem, 2.5rem);
  --fluid-body: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem);
  /* ... more variables ... */
}

/* Auto-applies to headings in KB sections */
[data-kb-box] h2,
[data-kb-text] h2 {
  font-size: var(--fluid-h2) !important;
  line-height: 1.3 !important;
}
```

## Customization

To adjust the scaling behavior, edit `/styles/globals.css`:

```css
:root {
  /* Make H1 larger on desktop */
  --fluid-h1: clamp(2rem, 5vw + 1rem, 5rem);  /* Changed from 4rem → 5rem */
  
  /* Make body text slightly larger */
  --fluid-body: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);  /* Changed from 0.875rem → 1rem */
}
```

Changes apply to **all pages** automatically!

## Browser Support

CSS `clamp()` is supported in all modern browsers:
- Chrome 79+
- Firefox 75+
- Safari 13.1+
- Edge 79+

Coverage: **~97% of users worldwide**

## Learn More

- [MDN: clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Modern Fluid Typography](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
- [Responsive Typography Best Practices](https://web.dev/responsive-typography/)
