# Quick Start Guide

**For developers working on suppl.me**

---

## 🚀 **Getting Started**

### **Project Overview**
- React + TypeScript + Tailwind CSS v4
- Full CSS variable-based design system
- Dark mode support throughout
- Fluid/responsive design

---

## 📁 **Key Files**

### **Design System**
```
/styles/globals.css        # All CSS variables, utility classes, data attributes
```

### **Shared Components**
```
/components/Header.tsx              # Site header with nav + search
/components/Footer.tsx              # Site footer
/components/DarkModeToggle.tsx      # Theme switcher
/components/SearchResults.tsx       # Global search component
/components/KnowledgebaseTemplate.tsx  # Template for all KB pages
```

### **Pages**
```
/App.tsx                   # Main routing
/components/LandingPage.tsx
/components/AboutPage.tsx
/components/ContactPage.tsx
/components/*PageNew.tsx   # 13 knowledgebase pages
```

---

## 🎨 **Design System Quick Reference**

### **Colors (CSS Variables)**

```css
/* Use these Tailwind classes */
bg-primary          /* #162F1C - Dark green */
bg-secondary        /* #E0CBA8 - Golden tan */
bg-tertiary         /* #F7F7F3 - Light gray */
bg-card             /* #FFFFFF - White cards */
bg-background       /* #F5F8F6 - Page background */

text-primary        /* Dark green text */
text-foreground     /* #2D2D2D - Body text */
text-secondary      /* Golden tan text */
text-muted-foreground  /* #7F8468 - Muted text */

border-border       /* Standard border color */
border-secondary    /* Golden border */
```

### **Knowledgebase Specific**

```css
bg-benefit          /* #E8F5E9 - Green benefits section */
text-benefit-accent /* #2E7D32 - Green icons */

bg-warning          /* #FFF3E0 - Orange warning section */
text-warning-accent /* #F57C00 - Orange icons */
```

### **Spacing**

```css
/* Use data attributes for consistent spacing */
<div data-stack="md">    /* Vertical stack with medium gap */
<div data-grid="3col">   /* 3-column responsive grid */

/* Or use CSS variables directly */
gap: var(--space-md);
padding: var(--space-lg);
margin-block: var(--space-xl);
```

Options: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

### **Typography**

```html
<!-- Typography auto-scales with viewport -->
<h1>Large Heading</h1>       <!-- 32px → 64px -->
<h2>Section Heading</h2>     <!-- 24px → 40px -->
<h3>Subsection Heading</h3>  <!-- 18px → 28px -->
<p>Body text</p>             <!-- 14px → 18px -->
```

**No need to specify font sizes** - they're handled automatically!

---

## 🔧 **Common Tasks**

### **Add a New Knowledgebase Page**

1. **Copy template file:**
   ```bash
   cp components/CalciumPageNew.tsx components/YourSupplementPageNew.tsx
   ```

2. **Update the content:**
   ```tsx
   const pageProps: KnowledgebasePageProps = {
     supplementName: "Your Supplement",
     heroDescription: "Description here...",
     heroImageUrl: "https://...",
     // ... fill in the rest
   };
   ```

3. **Import in App.tsx:**
   ```tsx
   import { YourSupplementPageNew } from './components/YourSupplementPageNew';
   ```

4. **Add navigation state:**
   ```tsx
   const [currentPage, setCurrentPage] = useState<string>('landing');
   ```

5. **Add to render logic:**
   ```tsx
   {currentPage === 'yoursupplement' && (
     <YourSupplementPage 
       onContactClick={() => setCurrentPage('contact')}
       onLegalClick={() => setCurrentPage('legal')}
     />
   )}
   ```

**Time:** ~30 minutes

### **Update Site Colors**

1. Edit `/styles/globals.css`
2. Find the color you want to change:
   ```css
   :root {
     --primary: #162F1C;  /* Change this */
   }
   ```
3. Update both light and dark mode if needed
4. Save - changes apply everywhere automatically!

### **Add a New Section Type to Template**

1. Edit `KnowledgebaseTemplate.tsx`
2. Add new interface:
   ```tsx
   export interface NewSectionItem {
     icon: LucideIcon;
     title: string;
     description: string;
   }
   ```
3. Add to `KnowledgebasePageProps`:
   ```tsx
   newSection?: NewSectionItem[];
   ```
4. Create component:
   ```tsx
   function NewSection({ items }: { items?: NewSectionItem[] }) {
     if (!items) return null;
     // ... render logic
   }
   ```
5. Add to template render
6. Use in any KB page!

---

## 🌓 **Dark Mode**

### **How It Works**

- Automatic via CSS variables
- Toggle in Header (DarkModeToggle component)
- Class `.dark` added to `<html>` element
- All colors swap automatically

### **Hero Sections Exception**

```tsx
// Hero backgrounds DON'T change (intentional)
<div style={{ backgroundColor: '#162F1C' }}>
  <h1 style={{ color: '#F7F7F3' }}>Title</h1>
</div>
```

### **Everything Else**

```tsx
// Use CSS variables - auto dark mode
<div className="bg-card border border-border">
  <h2 className="text-primary">Title</h2>
  <p className="text-foreground">Content</p>
</div>
```

---

## 📱 **Responsive Design**

### **Breakpoints**

```css
/* Mobile-first approach */
.my-element {
  /* Mobile styles */
}

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}
```

### **Fluid Typography**

```css
/* Automatically scales - no media queries needed! */
h1 { font-size: var(--fluid-h1); }  /* 32px → 64px */
```

### **Data Attributes**

```html
<!-- Auto-responsive grid -->
<div data-grid="3col">
  <!-- 1 col mobile, 2 col tablet, 3 col desktop -->
</div>

<!-- Auto-responsive stack -->
<div data-stack="lg">
  <!-- Consistent vertical spacing -->
</div>
```

---

## 🎯 **Best Practices**

### **✅ DO**

```tsx
// ✅ Use CSS variables
<div className="bg-primary text-primary-foreground">

// ✅ Use data attributes for layout
<div data-stack="md">

// ✅ Use semantic HTML
<section data-layout-section>

// ✅ Import shared components
import { Header } from './components/Header';

// ✅ Use TypeScript types
const props: KnowledgebasePageProps = { ... };
```

### **❌ DON'T**

```tsx
// ❌ Don't use hardcoded colors
<div className="bg-[#162F1C]">

// ❌ Don't specify font sizes
<h2 className="text-[32px]">

// ❌ Don't duplicate code
// Use KnowledgebaseTemplate instead

// ❌ Don't skip dark mode testing
// Always test both modes!

// ❌ Don't use inline styles (except hero bg)
<div style={{ color: '#2D2D2D' }}>
```

---

## 🔍 **Debugging**

### **Colors Not Showing?**

1. Check you're using CSS variable class names
2. Verify `/styles/globals.css` is imported
3. Check dark mode isn't active (if testing light mode)

### **Layout Not Responsive?**

1. Use `data-grid` or `data-stack` attributes
2. Check mobile-first media queries
3. Test with browser dev tools at different widths

### **Dark Mode Issues?**

1. Verify color uses CSS variables, not hardcoded
2. Check both `:root` and `.dark` definitions in globals.css
3. Toggle dark mode and inspect element

### **Template Not Working?**

1. Check all required props are provided
2. Verify TypeScript types match
3. Look for console errors
4. Check example in `CalciumPageNew.tsx`

---

## 📚 **Documentation**

### **For More Details**

- `COMPREHENSIVE_SITE_AUDIT.md` - Complete site analysis
- `KNOWLEDGEBASE_MIGRATION_GUIDE.md` - KB page guide
- `DESIGN_SYSTEM.md` - Full design system reference
- `FLUID_TYPOGRAPHY_GUIDE.md` - Typography details
- `RESPONSIVE_DESIGN_GUIDE.md` - Responsive patterns

---

## 🆘 **Quick Help**

### **Need to...**

**Add new page?** → Copy CalciumPageNew.tsx  
**Change colors?** → Edit globals.css variables  
**Fix responsive?** → Use data-grid or data-stack  
**Support dark mode?** → Use CSS variable classes  
**Add new section?** → Edit KnowledgebaseTemplate.tsx  
**Update header?** → Edit Header.tsx (shared)  
**Update footer?** → Edit Footer.tsx (shared)  

---

## ⚡ **Pro Tips**

1. **Always test dark mode** - Toggle it in the header
2. **Use the template** - Don't create KB pages from scratch
3. **Check data attributes** - They handle responsive automatically
4. **Fluid variables** - Spacing and typography auto-scale
5. **Type safety** - Let TypeScript guide you
6. **DRY principle** - Reuse components, don't duplicate
7. **CSS variables** - Never hardcode colors
8. **Mobile first** - Design for mobile, enhance for desktop

---

## 🎓 **Learning Path**

**New to the project?** Read in this order:

1. This guide (you are here!)
2. `DESIGN_SYSTEM.md` - Understand the colors/spacing
3. `KNOWLEDGEBASE_MIGRATION_GUIDE.md` - See the template pattern
4. `CalciumPageNew.tsx` - Study the example
5. Try creating a new KB page!

---

## ✅ **Checklist for Every Change**

Before committing:

- [ ] No hardcoded colors (use CSS variables)
- [ ] No hardcoded font sizes (use fluid typography)
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Tested on mobile (< 768px)
- [ ] Tested on tablet (768px - 1024px)
- [ ] Tested on desktop (> 1024px)
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Follows existing patterns

---

**Happy coding! 🚀**

**Questions?** Check the comprehensive docs or review existing components for examples.
