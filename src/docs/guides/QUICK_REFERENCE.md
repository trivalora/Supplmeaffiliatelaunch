# Quick Reference Card

## 🎯 Most Common Patterns

### Stack (Vertical Spacing)
Replace `space-y-*` with:

```tsx
<div data-stack="xs">   {/* 12-16px - Tight */}
<div data-stack="sm">   {/* 16-24px - Lists */}
<div data-stack="md">   {/* 24-32px - Default */}
<div data-stack="lg">   {/* 32-48px - Sections */}
```

### Grid (Columns)
Replace `grid grid-cols-*` with:

```tsx
<div data-grid="2col">  {/* 1 → 2 columns */}
<div data-grid="3col">  {/* 1 → 2 → 3 columns */}
<div data-grid="auto">  {/* Auto-fit 280px+ */}
```

### Common Patterns

```tsx
<div data-pattern="hero-split">   {/* Hero with text + image */}
<div data-pattern="icon-list">    {/* Vertical icon list */}
<div data-pattern="icon-grid">    {/* Icon grid */}
<div data-pattern="stat-grid">    {/* Stat cards */}
<div data-pattern="split">        {/* 2-column layout */}
```

---

## 🎴 Card Types

```tsx
<div data-knowledgebase-card-info>       {/* White/beige - Main content */}
<div data-knowledgebase-card-benefits>   {/* Green - Benefits */}
<div data-knowledgebase-card-drawbacks>  {/* Orange - Drawbacks */}
<div data-knowledgebase-card-stat>       {/* Light - Statistics */}
<div data-knowledgebase-card-highlight>  {/* Light - Nested boxes */}
<div data-knowledgebase-card-warning>    {/* Yellow - Warnings */}
```

**Always wrap card content:**
```tsx
<div data-knowledgebase-card-info>
  <div data-knowledgebase-card-content>
    {/* Content here */}
  </div>
</div>
```

---

## 🏗️ Layout Structure

```tsx
// Page Layout
<div data-layout-section className="bg-[#F7F7F3]">
  <div data-knowledgebase-container>
    <div data-grid="3col">
      <div className="lg:col-span-2" data-stack="lg">
        {/* Main content */}
      </div>
      <div data-stack="lg">
        {/* Sidebar */}
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 Typography Rules

### ❌ NEVER Use These:

```tsx
className="font-['Lora',_serif]"      {/* CSS handles this */}
className="font-['Lato',_sans-serif]" {/* CSS handles this */}
className="text-[16px]"               {/* CSS handles this */}
className="text-[32px]"               {/* CSS handles this */}
className="text-[#162F1C]"            {/* CSS handles this (in cards) */}
className="leading-[28px]"            {/* CSS handles this */}
className="mb-6"                      {/* Use data-stack instead */}
```

### ✅ OK To Use:

```tsx
<span className="font-medium">Emphasis</span>  {/* Inline emphasis */}
<p className="text-sm">Helper text</p>         {/* Small text */}
<Icon className="w-5 h-5 text-[#162F1C]" />   {/* Icon styling */}
```

---

## 🎯 Hero Section

```tsx
<div data-pattern="hero-split">
  <div data-pattern="hero-panel" className="bg-[#162F1C]">
    <div data-knowledgebase-hero-text className="max-w-[600px]">
      <h1>Title</h1>
      <p>Description</p>
    </div>
  </div>
  <div data-pattern="hero-panel" className="relative">
    <img src="..." className="w-full h-full object-cover" />
  </div>
</div>
```

---

## 📋 Icon List

```tsx
<div data-pattern="icon-list">
  <div data-knowledgebase-icon-list-item>
    <Icon className="w-5 h-5 text-[#2E7D32]" />
    <p>Item text</p>
  </div>
  <div data-knowledgebase-icon-list-item>
    <Icon className="w-5 h-5 text-[#2E7D32]" />
    <p>Item text</p>
  </div>
</div>
```

---

## 📊 Stat Cards

```tsx
<div data-pattern="stat-grid">
  <div data-knowledgebase-card-stat>
    <span data-knowledgebase-stat-value>1000mg</span>
    <span data-knowledgebase-stat-label>Daily Value</span>
  </div>
  {/* More stats... */}
</div>
```

---

## 📊 Tables

```tsx
<div data-knowledgebase-table-wrapper>
  <table data-knowledgebase-table>
    <thead>
      <tr>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 🎖️ Grade Badges

```tsx
<span data-knowledgebase-grade-badge data-grade="A">A</span>
<span data-knowledgebase-grade-badge data-grade="B">B</span>
<span data-knowledgebase-grade-badge data-grade="C">C</span>
<span data-knowledgebase-grade-badge data-grade="D">D</span>
```

---

## 🔧 Complete Example

```tsx
function ExampleSection() {
  return (
    <div data-knowledgebase-card-benefits>
      <div data-knowledgebase-card-content>
        <h2>Main Benefits</h2>
        <div data-pattern="icon-list">
          <div data-knowledgebase-icon-list-item>
            <Heart className="w-5 h-5 text-[#2E7D32]" />
            <p>
              <span className="font-medium">Benefit 1:</span> Description
            </p>
          </div>
          <div data-knowledgebase-icon-list-item>
            <Shield className="w-5 h-5 text-[#2E7D32]" />
            <p>
              <span className="font-medium">Benefit 2:</span> Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 📖 Full Documentation

- **DESIGN_SYSTEM_SUMMARY.md** - Complete overview
- **LAYOUT_PATTERNS.md** - All patterns explained
- **MIGRATION_GUIDE.md** - Step-by-step migration
- **CLEAN_EXAMPLE.tsx** - Working example code

---

## 🎨 Color Reference

```css
--color-primary-dark: #162F1C  /* Dark green - Headers */
--color-secondary: #E0CBA8     /* Beige - Accents */
--color-tertiary: #F7F7F3      /* Off-white - Backgrounds */
--color-fourth: #7F8468        /* Sage - Muted text */
--color-text: #2D2D2D          /* Charcoal - Body text */
```

**Card Theme Colors:**
- Benefits: `#2E7D32` (Green)
- Drawbacks: `#F57C00` (Orange)
- Info: Default beige borders

---

## ⚡ Remember

1. **No font classes** - CSS handles all typography
2. **Use data-stack** - Replace space-y-*
3. **Use data-grid** - Replace grid classes
4. **Use data-pattern** - For common layouts
5. **Wrap card content** - Always use data-knowledgebase-card-content
6. **Icons keep colors** - text-[#color] is OK for icons
7. **Semantic first** - Describe what it IS, not how it LOOKS

---

**Print this page and keep it handy! 📌**
