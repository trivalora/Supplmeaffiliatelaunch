# Z-Index Management - suppl.me

**Last Updated:** October 30, 2025

This document outlines the z-index management system used across the suppl.me website to ensure proper layering and prevent visual conflicts.

---

## 🎯 **Problem Solved**

**Issue:** Header dropdown menu was appearing behind the header itself due to conflicting z-index values.

**Solution:** Implemented a centralized z-index scale using CSS custom properties.

---

## 📐 **Z-Index Scale**

All z-index values are defined in `/styles/globals.css` using CSS custom properties:

```css
/* === Z-INDEX SCALE === */
--z-base: 1              /* Base elements */
--z-dropdown: 1000       /* Dropdowns, popovers */
--z-sticky: 100          /* Sticky positioned elements */
--z-fixed: 200           /* Fixed positioned elements (header) */
--z-modal-backdrop: 999  /* Modal backdrops */
--z-modal: 1000          /* Modal dialogs */
--z-popover: 1000        /* Popovers */
--z-tooltip: 1100        /* Tooltips (highest) */
```

---

## 📊 **Layering Hierarchy**

From lowest to highest:

1. **Base Elements** (`--z-base: 1`)
   - Regular page content
   - Default stacking context

2. **Sticky Elements** (`--z-sticky: 100`)
   - Sticky positioned elements
   - Sidebar elements

3. **Fixed Elements** (`--z-fixed: 200`)
   - Fixed header
   - Fixed navigation

4. **Modal Backdrops** (`--z-modal-backdrop: 999`)
   - Semi-transparent overlays
   - Modal backgrounds

5. **Interactive Overlays** (`--z-dropdown/modal/popover: 1000`)
   - Dropdown menus
   - Modal dialogs
   - Popovers
   - Context menus

6. **Tooltips** (`--z-tooltip: 1100`)
   - Highest layer
   - Always visible on top

---

## 🔧 **Implementation**

### **Header Component**

```tsx
// /components/Header.tsx
<div 
  className="h-[70px] w-full bg-[#162F1C] fixed top-0 left-0"
  style={{ zIndex: 'var(--z-fixed)' }}  // 200
>
```

### **Dropdown Menu**

```tsx
// /components/ui/dropdown-menu.tsx
<DropdownMenuPrimitive.Content
  className="..."
  style={{ zIndex: 'var(--z-dropdown)' }}  // 1000
/>
```

### **Search Bar**

```tsx
// /components/Header.tsx - SearchBar
<div 
  ref={searchRef}
  className="relative flex items-center justify-center"
  style={{ zIndex: 'var(--z-fixed)' }}  // Same as header
>
```

---

## ✅ **Best Practices**

### **DO:**

✅ **Always use CSS variables for z-index**
```tsx
style={{ zIndex: 'var(--z-dropdown)' }}
```

✅ **Choose the appropriate layer**
```tsx
// For dropdowns
style={{ zIndex: 'var(--z-dropdown)' }}

// For modals
style={{ zIndex: 'var(--z-modal)' }}

// For tooltips
style={{ zIndex: 'var(--z-tooltip)' }}
```

✅ **Document why a specific z-index is needed**
```tsx
// Dropdown must be above header (z-fixed: 200)
style={{ zIndex: 'var(--z-dropdown)' }}  // 1000
```

### **DON'T:**

❌ **Never use arbitrary z-index values**
```tsx
style={{ zIndex: 9999 }}  // BAD
style={{ zIndex: 50 }}    // BAD
```

❌ **Don't use inline numeric z-index**
```tsx
<div className="z-50">    // BAD
```

❌ **Don't create stacking conflicts**
```tsx
// Header at 1000, dropdown at 50 = dropdown hidden
```

---

## 🐛 **Debugging Z-Index Issues**

### **Checklist:**

1. **Check the element hierarchy**
   - Is the element rendered in the correct position in the DOM?
   - Is it using a portal (for modals/dropdowns)?

2. **Verify CSS variable usage**
   - Is the element using a CSS variable?
   - Is it the correct variable for its purpose?

3. **Check stacking contexts**
   - Parent elements with `position: relative` create new stacking contexts
   - `transform`, `opacity` < 1, `filter` also create stacking contexts

4. **Inspect computed z-index**
   - Use browser DevTools to check the actual computed z-index
   - Compare with the CSS variable value

### **Common Issues:**

**Issue:** Dropdown appears behind header

**Solution:**
```tsx
// Ensure dropdown z-index > header z-index
// Header: var(--z-fixed) = 200
// Dropdown: var(--z-dropdown) = 1000 ✅
```

**Issue:** Modal backdrop covers modal content

**Solution:**
```tsx
// Backdrop: var(--z-modal-backdrop) = 999
// Modal: var(--z-modal) = 1000 ✅
```

**Issue:** Tooltip hidden by dropdown

**Solution:**
```tsx
// Dropdown: var(--z-dropdown) = 1000
// Tooltip: var(--z-tooltip) = 1100 ✅
```

---

## 📝 **Files Updated**

### **October 30, 2025 - Z-Index Fix**

1. **`/styles/globals.css`**
   - Added z-index scale CSS variables

2. **`/components/Header.tsx`**
   - Updated header z-index from `100` to `var(--z-fixed)` (200)
   - Updated Container3 z-index from `50` to `var(--z-fixed)` (200)
   - Updated SearchBar z-index to `var(--z-fixed)` (200)

3. **`/components/ui/dropdown-menu.tsx`**
   - Updated DropdownMenuContent z-index from `50` to `var(--z-dropdown)` (1000)
   - Removed hardcoded `z-50` className
   - Added inline style with CSS variable

---

## 🎓 **Usage Examples**

### **Fixed Header**
```tsx
<header style={{ zIndex: 'var(--z-fixed)' }}>
  Navigation
</header>
```

### **Dropdown Menu**
```tsx
<DropdownMenuContent style={{ zIndex: 'var(--z-dropdown)' }}>
  Menu Items
</DropdownMenuContent>
```

### **Modal**
```tsx
{/* Backdrop */}
<div style={{ zIndex: 'var(--z-modal-backdrop)' }} />

{/* Modal Content */}
<div style={{ zIndex: 'var(--z-modal)' }}>
  Modal Content
</div>
```

### **Tooltip**
```tsx
<Tooltip style={{ zIndex: 'var(--z-tooltip)' }}>
  Tooltip Text
</Tooltip>
```

---

## 📊 **Before & After**

### **Before Fix:**
```tsx
// Header
style={{ zIndex: 100 }}

// Dropdown
className="z-50"  // 50 < 100 = Hidden behind header ❌
```

### **After Fix:**
```tsx
// Header
style={{ zIndex: 'var(--z-fixed)' }}  // 200

// Dropdown
style={{ zIndex: 'var(--z-dropdown)' }}  // 1000 > 200 = Visible ✅
```

---

## 🔍 **Visual Hierarchy**

```
┌─────────────────────────────────────┐
│  Tooltips (1100)                    │  ← Highest
├─────────────────────────────────────┤
│  Dropdowns/Modals/Popovers (1000)   │
├─────────────────────────────────────┤
│  Modal Backdrops (999)              │
├─────────────────────────────────────┤
│  Fixed Header (200)                 │
├─────────────────────────────────────┤
│  Sticky Elements (100)              │
├─────────────────────────────────────┤
│  Base Content (1)                   │  ← Lowest
└─────────────────────────────────────┘
```

---

## ✅ **Testing Checklist**

After updating z-index values:

- [ ] Header is always visible
- [ ] Dropdown menus appear above header
- [ ] Modal backdrops don't cover modal content
- [ ] Tooltips appear above everything else
- [ ] No visual layering conflicts
- [ ] Mobile menu (Sheet) works correctly
- [ ] Search results appear correctly
- [ ] Dark mode toggle visible
- [ ] All interactive elements clickable

---

## 📚 **Related Documentation**

- [BEST_PRACTICES.md](BEST_PRACTICES.md) - General coding standards
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) - Design system tokens
- [CURRENT_STATUS.md](CURRENT_STATUS.md) - Project status

---

**Document Created:** October 30, 2025  
**Issue Fixed:** Header dropdown z-index conflict  
**Status:** ✅ Resolved
