# Layout Patterns Guide

This document outlines the **semantic data attribute patterns** that replace Tailwind utility classes in our design system. All patterns are defined in `styles/globals.css` and handle spacing, layout, and common UI patterns through CSS inheritance.

---

## Philosophy

**Replace this:**
```tsx
<div className="flex flex-col space-y-4">
  <div className="flex items-start gap-3">
    ...
  </div>
</div>
```

**With this:**
```tsx
<div data-stack="sm">
  <div data-knowledgebase-icon-list-item>
    ...
  </div>
</div>
```

---

## Stack Layouts (Vertical Spacing)

**Use instead of:** `space-y-*` utilities

### Available Variants

| Data Attribute | Spacing | Use Case |
|---------------|---------|----------|
| `data-stack="xs"` | 12-16px | Tight lists, form groups |
| `data-stack="sm"` | 16-24px | Icon lists, benefit items |
| `data-stack="md"` or `data-stack` | 24-32px | **Default** - Most content sections |
| `data-stack="lg"` | 32-48px | Major section dividers |
| `data-stack="xl"` | 48-64px | Page-level spacing |

### Examples

```tsx
// Icon list with small spacing
<div data-stack="sm">
  <div data-knowledgebase-icon-list-item>
    <Icon />
    <p>Benefit 1</p>
  </div>
  <div data-knowledgebase-icon-list-item>
    <Icon />
    <p>Benefit 2</p>
  </div>
</div>

// Content sections with medium spacing
<div data-stack="md">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>

// Page sections with large spacing
<div data-stack="lg">
  <section>Overview</section>
  <section>Benefits</section>
  <section>Research</section>
</div>
```

---

## Grid Layouts

**Use instead of:** `grid grid-cols-*` utilities

### Available Variants

| Data Attribute | Columns | Breakpoints |
|---------------|---------|-------------|
| `data-grid="2col"` | 1 → 2 | Mobile: 1, Tablet+: 2 |
| `data-grid="3col"` | 1 → 2 → 3 | Mobile: 1, Tablet: 2, Desktop: 3 |
| `data-grid="4col"` | 1 → 2 → 4 | Mobile: 1, Tablet: 2, Desktop: 4 |
| `data-grid="auto"` | Auto-fit | Automatically fits based on 280px min |

### Examples

```tsx
// Benefits/drawbacks side-by-side
<div data-grid="2col">
  <div data-knowledgebase-card-benefits>Benefits</div>
  <div data-knowledgebase-card-drawbacks>Drawbacks</div>
</div>

// Stat cards (auto-responsive)
<div data-grid="auto">
  <div data-knowledgebase-card-stat>Stat 1</div>
  <div data-knowledgebase-card-stat>Stat 2</div>
  <div data-knowledgebase-card-stat>Stat 3</div>
</div>
```

---

## Flex Layouts

**Use instead of:** `flex justify-* items-*` utilities

### Available Variants

| Data Attribute | Behavior |
|---------------|----------|
| `data-flex="row"` | Horizontal row, centered vertically |
| `data-flex="between"` | Space between items |
| `data-flex="center"` | Centered both ways |
| `data-flex="wrap"` | Wrapping flex layout |

### Examples

```tsx
// Header navigation
<div data-flex="between">
  <Logo />
  <Navigation />
</div>

// Icon with text (horizontally aligned)
<div data-flex="row">
  <Icon />
  <span>Label</span>
</div>
```

---

## Common Section Patterns

**Pre-built patterns for repeated UI components**

### Icon Grid
**Use for:** Benefits, features, use cases (grid layout)

```tsx
<div data-pattern="icon-grid">
  <div data-knowledgebase-icon-list-item>
    <Icon />
    <div>
      <h3>Benefit Title</h3>
      <p>Description</p>
    </div>
  </div>
  {/* More items... */}
</div>
```

### Icon List
**Use for:** Vertical list of benefits/features

```tsx
<div data-pattern="icon-list">
  <div data-knowledgebase-icon-list-item>
    <Icon />
    <p>Benefit 1</p>
  </div>
  {/* More items... */}
</div>
```

### Stat Grid
**Use for:** Floating statistics cards

```tsx
<div data-pattern="stat-grid">
  <div data-knowledgebase-card-stat>
    <span data-knowledgebase-stat-value>1000mg</span>
    <span data-knowledgebase-stat-label>Daily Value</span>
  </div>
  {/* More stats... */}
</div>
```

### Split Layout
**Use for:** Two-column content sections

```tsx
<div data-pattern="split">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

### Hero Split
**Use for:** Hero sections with image + text

```tsx
<div data-pattern="hero-split">
  <div data-pattern="hero-panel" className="bg-[#162F1C]">
    <div data-knowledgebase-hero-text>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  </div>
  <div data-pattern="hero-panel">
    <img src="..." alt="..." />
  </div>
</div>
```

---

## Card Types

All cards are predefined with colors, borders, and padding.

| Data Attribute | Theme | Use Case |
|---------------|-------|----------|
| `data-knowledgebase-card-info` | White/Beige border | Main content, overview |
| `data-knowledgebase-card-benefits` | Green | Benefits lists |
| `data-knowledgebase-card-drawbacks` | Orange | Drawbacks/warnings |
| `data-knowledgebase-card-stat` | Light beige | Floating statistics |
| `data-knowledgebase-card-highlight` | Light beige | Nested info boxes |
| `data-knowledgebase-card-warning` | Yellow | Important warnings |

### Card Content Wrapper

Always wrap card content in:
```tsx
<div data-knowledgebase-card-info>
  <div data-knowledgebase-card-content>
    {/* Content here */}
  </div>
</div>
```

---

## Content Helpers

### Text Content
**Auto-applies vertical spacing to text blocks**

```tsx
<div data-knowledgebase-content-text>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

### List Content
**For lists with consistent spacing**

```tsx
<div data-knowledgebase-content-list>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Migration Checklist

When migrating a page, replace:

- ✅ `space-y-4` → `data-stack="sm"`
- ✅ `space-y-6` → `data-stack="md"`
- ✅ `space-y-8` → `data-stack="lg"`
- ✅ `grid grid-cols-1 md:grid-cols-2` → `data-grid="2col"`
- ✅ `flex flex-col gap-4` → `data-stack="sm"`
- ✅ `flex justify-between items-center` → `data-flex="between"`
- ✅ Explicit font classes → **Remove** (handled by CSS)
- ✅ Explicit text colors in cards → **Remove** (handled by CSS)

---

## Z-Index Management

The design system uses a predefined z-index scale:

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

Use these instead of arbitrary z-index values.

---

## Best Practices

1. **Prefer semantic data attributes** over Tailwind utilities for spacing
2. **Never add explicit font styling** in TSX (handled by CSS)
3. **Use pattern attributes** for common layouts (icon-grid, stat-grid, etc.)
4. **Let CSS handle responsive behavior** - don't add `md:`, `lg:` breakpoints manually
5. **Nest content properly** - use card-content wrappers for consistent padding
6. **Use fluid spacing** - all spacing automatically scales with viewport

---

## Quick Reference

```tsx
// ✅ Good - Semantic, clean, CSS-driven
<div data-knowledgebase-section>
  <div data-knowledgebase-container>
    <div data-stack="lg">
      <div data-knowledgebase-card-info>
        <div data-knowledgebase-card-content>
          <h2>Section Title</h2>
          <div data-stack="sm">
            <p>Content here</p>
            <p>More content</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

// ❌ Bad - Explicit styling, Tailwind utilities, repetitive
<div className="px-6 md:px-16 py-12 md:py-16">
  <div className="max-w-7xl mx-auto space-y-8">
    <div className="bg-white rounded-lg border border-[#E0CBA8] p-8">
      <h2 className="font-['Lora',_serif] text-[32px] text-[#162F1C] mb-6">
        Section Title
      </h2>
      <div className="space-y-4">
        <p className="font-['Lato',_sans-serif] text-[16px] text-[#2D2D2D]">
          Content here
        </p>
      </div>
    </div>
  </div>
</div>
```
