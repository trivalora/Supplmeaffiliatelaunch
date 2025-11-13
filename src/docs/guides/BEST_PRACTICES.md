# Best Practices - suppl.me Codebase

**Last Updated:** October 29, 2025

This document outlines the best practices, coding standards, and conventions used throughout the suppl.me codebase.

---

## 🎯 **Core Principles**

### **1. CSS Variables Over Hardcoded Colors**

❌ **BAD:**
```tsx
<div className="bg-[#162F1C] text-[#E0CBA8] border-[#7F8468]">
```

✅ **GOOD:**
```tsx
<div className="bg-primary text-secondary border-fourth">
```

**Rationale:**
- Centralized color management
- Automatic dark mode support
- Easy theme updates
- Better maintainability

---

### **2. Data Attributes Over Utility Classes**

❌ **BAD:**
```tsx
<div className="flex flex-col gap-4 bg-white rounded-lg border border-gray-200 p-8">
```

✅ **GOOD:**
```tsx
<div data-knowledgebase-card-info>
  <div data-knowledgebase-card-content>
```

**Rationale:**
- Semantic meaning
- Reduced code repetition
- CSS handles styling
- Easier refactoring

---

### **3. Component Templates Over Duplication**

❌ **BAD:**
```tsx
// Separate file for each supplement with 500+ lines of duplicated code
export function CalciumPage() {
  return (
    <div>
      {/* 500 lines of hardcoded HTML */}
    </div>
  );
}
```

✅ **GOOD:**
```tsx
// Reusable template with data-driven approach
const pageProps: KnowledgebasePageProps = {
  supplementName: "Calcium",
  benefits: [...],
  // ... data only
};

export function CalciumPageNew() {
  return <KnowledgebaseTemplate {...pageProps} />;
}
```

**Rationale:**
- DRY principle (Don't Repeat Yourself)
- Single source of truth
- Easy updates to all pages
- 81% less code

---

### **4. Fluid Typography Over Fixed Sizes**

❌ **BAD:**
```css
h1 {
  font-size: 48px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
}
```

✅ **GOOD:**
```css
h1 {
  font-size: var(--fluid-h1);
  /* clamp(2rem, 5vw + 1rem, 4rem) */
}
```

**Rationale:**
- Continuous scaling (no jumps)
- Fewer media queries
- Better user experience
- Automatic responsiveness

---

### **5. TypeScript Type Safety**

❌ **BAD:**
```tsx
export function MyComponent(props: any) {
  // No type safety
}
```

✅ **GOOD:**
```tsx
interface MyComponentProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export function MyComponent({ title, description, onClick }: MyComponentProps) {
  // Type-safe
}
```

**Rationale:**
- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting code
- Easier refactoring

---

## 📁 **File Organization**

### **Naming Conventions**

**Components:**
- PascalCase: `KnowledgebasePage.tsx`
- Descriptive: `AshwagandhaPageNew.tsx` (not `Page1.tsx`)
- Suffix for variants: `VitaminDPageV2New.tsx`

**Files:**
- kebab-case for utilities: `use-mobile.ts`
- PascalCase for components: `DarkModeToggle.tsx`
- lowercase for imports: `svg-0sxi0wwcok.ts`

**CSS:**
- kebab-case: `globals.css`
- Data attributes: `data-knowledgebase-card-benefits`

---

### **Folder Structure**

```
/components
  ├── [Feature]/          # Group by feature
  │   ├── Component1.tsx
  │   └── Component2.tsx
  ├── shared/             # OR shared components
  │   ├── Header.tsx
  │   └── Footer.tsx
  └── ui/                 # UI library components
```

**Current Structure:**
```
/components
  ├── Main pages (LandingPage, AboutPage, ContactPage)
  ├── Legal pages (Privacy, Terms, Cookies, Legal)
  ├── KB pages (All *PageNew.tsx)
  ├── Shared (Header, Footer, Search, DarkMode)
  ├── Templates (KnowledgebaseTemplate, Layout)
  ├── figma/ (Protected system files)
  └── ui/ (ShadCN components)
```

---

## 🎨 **Styling Best Practices**

### **Color Usage**

**Always use CSS variables:**
```tsx
// ✅ GOOD - Uses CSS variables
<div className="bg-primary text-primary-foreground">

// ✅ GOOD - Hero sections (brand identity)
<div style={{ backgroundColor: '#162F1C', color: '#E0CBA8' }}>

// ❌ BAD - Hardcoded elsewhere
<div className="bg-[#162F1C]">
```

**Exception:** Hero sections can use hardcoded colors to maintain brand identity across light/dark modes.

---

### **Spacing**

**Use data attributes when possible:**
```tsx
// ✅ GOOD
<div data-stack="lg">  {/* Uses --space-lg */}
  <Section1 />
  <Section2 />
</div>

// ⚠️ ACCEPTABLE (when data attribute doesn't exist)
<div className="gap-4">
```

**Custom spacing hierarchy:**
- `data-stack` - Vertical spacing
- `data-grid` - Grid layouts
- `data-pattern` - Complex patterns

---

### **Responsive Design**

**Mobile-first approach:**
```css
/* ✅ GOOD - Mobile first */
.component {
  padding: 1rem;
}

@media (min-width: 768px) {
  .component {
    padding: 2rem;
  }
}

/* ❌ BAD - Desktop first */
.component {
  padding: 2rem;
}

@media (max-width: 768px) {
  .component {
    padding: 1rem;
  }
}
```

**Use fluid values:**
```css
/* ✅ GOOD */
padding: var(--space-lg);
gap: clamp(1rem, 2vw, 2rem);

/* ❌ BAD */
padding: 32px;
gap: 16px;
```

---

## ⚛️ **React Best Practices**

### **Component Structure**

```tsx
// ✅ GOOD - Props interface, clear structure
import { Icon } from 'lucide-react';

interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export function Component({ title, description, onAction }: ComponentProps) {
  return (
    <div data-component>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
}
```

---

### **State Management**

```tsx
// ✅ GOOD - Clear naming, proper typing
const [currentPage, setCurrentPage] = useState<PageType>('landing');
const [isOpen, setIsOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');

// ❌ BAD - Unclear, no types
const [page, setPage] = useState('landing');
const [open, setOpen] = useState(false);
const [query, setQuery] = useState('');
```

---

### **Event Handlers**

```tsx
// ✅ GOOD - Consistent naming
const handleClick = () => { /* ... */ };
const handleSubmit = (e: FormEvent) => { /* ... */ };
const handleChange = (value: string) => { /* ... */ };

// ❌ BAD - Inconsistent naming
const onClick = () => { /* ... */ };
const doSubmit = (e: FormEvent) => { /* ... */ };
const changed = (value: string) => { /* ... */ };
```

**Convention:** `handle[EventName]`

---

### **Conditional Rendering**

```tsx
// ✅ GOOD - Clear and safe
{isLoading && <Spinner />}
{error && <ErrorMessage message={error} />}
{items.length > 0 && <List items={items} />}

// ✅ GOOD - Complex conditions
{user ? (
  <UserProfile user={user} />
) : (
  <LoginPrompt />
)}

// ❌ BAD - Unclear
{show ? <Component /> : null}
{!hide && <Component />}
```

---

## 🌓 **Dark Mode Best Practices**

### **Implementation**

```tsx
// ✅ GOOD - Use CSS variables that change automatically
<div className="bg-background text-foreground">

// ✅ GOOD - Hero sections (maintain brand identity)
<div style={{ backgroundColor: '#162F1C' }}>

// ❌ BAD - Manual dark mode classes
<div className="bg-white dark:bg-gray-900">
```

---

### **Transitions**

```css
/* ✅ GOOD - Smooth transitions */
* {
  transition: background-color 300ms ease, 
              color 300ms ease, 
              border-color 300ms ease;
}

/* ❌ BAD - No transitions or too fast */
* {
  transition: all 100ms;
}
```

---

## 🔍 **Search Functionality**

### **Implementation Pattern**

```tsx
// ✅ GOOD - Clear state management
const [searchQuery, setSearchQuery] = useState('');
const [isSearching, setIsSearching] = useState(false);

const filteredResults = useMemo(() => {
  return items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [items, searchQuery]);
```

---

## 📝 **Documentation**

### **Component Documentation**

```tsx
/**
 * KnowledgebaseTemplate
 * 
 * Reusable template for all supplement knowledgebase pages.
 * Handles layout, sections, and consistent styling.
 * 
 * @param props - KnowledgebasePageProps with supplement data
 * @returns Fully rendered knowledgebase page
 * 
 * @example
 * ```tsx
 * const pageProps: KnowledgebasePageProps = {
 *   supplementName: "Calcium",
 *   benefits: [...],
 * };
 * 
 * return <KnowledgebaseTemplate {...pageProps} />;
 * ```
 */
export function KnowledgebaseTemplate(props: KnowledgebasePageProps) {
  // ...
}
```

---

### **Code Comments**

```tsx
// ✅ GOOD - Explain WHY, not WHAT
// Hero sections maintain brand identity in both light and dark modes
<div style={{ backgroundColor: '#162F1C' }}>

// Lock viewport dimensions during theme transition to prevent layout shift
document.documentElement.style.overflow = 'hidden';

// ❌ BAD - Obvious comments
// Set the background color to green
<div className="bg-green">

// Loop through items
items.map(item => ...)
```

---

## ⚡ **Performance Best Practices**

### **Memo & Callbacks**

```tsx
// ✅ GOOD - Memoize expensive computations
const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);

// ✅ GOOD - Stable callbacks
const handleClick = useCallback(() => {
  doSomething();
}, []);

// ⚠️ ONLY when needed - don't over-optimize
```

---

### **Image Optimization**

```tsx
// ✅ GOOD - Use ImageWithFallback component
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={imageUrl} 
  alt="Descriptive alt text"
  className="w-full h-auto"
/>

// ✅ GOOD - Figma imports
import imgProduct from "figma:asset/[hash].png";
<img src={imgProduct} alt="Product" />
```

---

## 🔐 **Security Best Practices**

### **Protected Files**

**Never modify:**
- `/components/figma/ImageWithFallback.tsx`
- System files in `/components/ui/`

**Always verify:**
- User inputs are sanitized
- External links use proper security attributes

---

### **External Links**

```tsx
// ✅ GOOD - Safe external links
<a 
  href="https://external-site.com" 
  target="_blank" 
  rel="nofollow noopener noreferrer"
>
  Visit Site
</a>
```

---

## 📐 **Layout Patterns**

### **Hero Sections**

```tsx
// ✅ GOOD - Consistent hero pattern
<div data-pattern="hero-split">
  <div data-pattern="hero-panel" className="bg-[#162F1C]">
    <div data-knowledgebase-hero-text>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
  <div data-pattern="hero-panel">
    <img src={heroImage} alt={title} />
  </div>
</div>
```

---

### **Card Layouts**

```tsx
// ✅ GOOD - Semantic card types
<div data-knowledgebase-card-benefits>    {/* Green background */}
<div data-knowledgebase-card-drawbacks>   {/* Orange background */}
<div data-knowledgebase-card-info>        {/* White background */}

// Each has:
<div data-knowledgebase-card-content>
  {/* Content here */}
</div>
```

---

### **Responsive Grids**

```tsx
// ✅ GOOD - Auto-responsive grids
<div data-grid="2col">  {/* 2 columns on desktop, 1 on mobile */}
<div data-grid="3col">  {/* 3 columns on desktop, 1 on mobile */}
<div data-grid="auto">  {/* Auto-fit based on content */}
```

---

## 🧪 **Testing Checklist**

### **Before Committing**

- [ ] TypeScript compiles without errors
- [ ] No console warnings or errors
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Responsive on mobile (< 768px)
- [ ] Responsive on tablet (768px - 1024px)
- [ ] Responsive on desktop (> 1024px)
- [ ] All links work
- [ ] All images load
- [ ] Search functionality works (if applicable)
- [ ] Navigation functional

---

### **Accessibility Checklist**

- [ ] Semantic HTML used (`<header>`, `<main>`, `<footer>`)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text on all images
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards
- [ ] ARIA labels where needed
- [ ] Focus states visible

---

## 📦 **Import Best Practices**

### **Import Order**

```tsx
// ✅ GOOD - Organized imports
// 1. React & external libraries
import { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';

// 2. Internal components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// 3. Assets
import imgHero from 'figma:asset/[hash].png';
import svgPaths from './imports/svg-[id].ts';

// 4. Types
import type { ComponentProps } from './types';

// 5. Styles (if needed)
import './styles.css';
```

---

### **Named vs Default Exports**

```tsx
// ✅ GOOD - Named exports for components
export function MyComponent() { }

// ✅ GOOD - Default export for pages
export default function App() { }

// ❌ BAD - Mixing patterns inconsistently
export default MyComponent;
export { MyComponent };
```

**Convention:**
- **Named exports** for components
- **Default export** for App.tsx and main entry points

---

## 🚫 **Common Mistakes to Avoid**

### **1. Hardcoding Colors**

```tsx
// ❌ BAD
<div className="bg-[#162F1C] text-[#E0CBA8]">

// ✅ GOOD
<div className="bg-primary text-secondary">
```

---

### **2. Duplicate Code**

```tsx
// ❌ BAD - Copying same structure across files
export function Page1() {
  return <div>{/* 500 lines */}</div>;
}

export function Page2() {
  return <div>{/* 500 lines - almost identical */}</div>;
}

// ✅ GOOD - Use template
export function Page1() {
  return <Template data={page1Data} />;
}

export function Page2() {
  return <Template data={page2Data} />;
}
```

---

### **3. Missing Types**

```tsx
// ❌ BAD
function MyComponent(props: any) { }

// ✅ GOOD
interface MyComponentProps {
  title: string;
}

function MyComponent({ title }: MyComponentProps) { }
```

---

### **4. Not Using CSS Variables**

```tsx
// ❌ BAD
<div style={{ color: '#162F1C' }}>

// ✅ GOOD
<div className="text-primary">
```

---

### **5. Fixed Typography**

```css
/* ❌ BAD */
h1 { font-size: 48px; }

/* ✅ GOOD */
h1 { font-size: var(--fluid-h1); }
```

---

## ✅ **Code Review Checklist**

When reviewing code, check for:

- [ ] **No hardcoded colors** (except hero sections)
- [ ] **CSS variables used** throughout
- [ ] **TypeScript types** defined
- [ ] **Component props** properly typed
- [ ] **Data attributes** used for layouts
- [ ] **Fluid typography** for text
- [ ] **Responsive design** tested
- [ ] **Dark mode** working
- [ ] **No duplicate code**
- [ ] **Semantic HTML**
- [ ] **Accessible** (ARIA, alt text, contrast)
- [ ] **Performance** considered (memo, callbacks)
- [ ] **Documentation** present
- [ ] **Naming conventions** followed
- [ ] **No console errors**

---

## 🎓 **Learning Resources**

### **Internal Documentation**
- `README.md` - Project overview
- `CURRENT_STATUS.md` - Current state
- `DESIGN_SYSTEM.md` - Design tokens
- `FLUID_TYPOGRAPHY_GUIDE.md` - Typography
- `RESPONSIVE_DESIGN_GUIDE.md` - Responsive patterns

### **Reference Examples**
- `KnowledgebaseTemplate.tsx` - Template pattern
- `CalciumPageNew.tsx` - Page implementation
- `Header.tsx` - Navigation & search
- `DarkModeToggle.tsx` - Dark mode implementation

---

## 🎯 **Summary**

### **Golden Rules**

1. **Always use CSS variables** for colors
2. **Always use data attributes** for layouts
3. **Always use TypeScript** types
4. **Always use templates** to avoid duplication
5. **Always test dark mode** and responsive
6. **Always write semantic HTML**
7. **Always document complex logic**
8. **Never hardcode colors** (except heroes)
9. **Never duplicate code**
10. **Never skip accessibility**

---

**Following these best practices ensures:**
- ✅ Consistent codebase
- ✅ Easy maintenance
- ✅ Scalable architecture
- ✅ Better performance
- ✅ Improved accessibility
- ✅ Faster development

---

**Last Updated:** October 29, 2025  
**Maintained By:** Trivalora Development Team
