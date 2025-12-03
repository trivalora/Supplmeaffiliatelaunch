# Generator Scripts

Scripts that generate code, configuration, or build artifacts.

## Contents (4 scripts)

### Code Generation
- `generate-component-map.mjs` - Generate COMPONENT_MAP for dynamic routing
- `generate-glossary-autolink.mjs` - Generate glossary term autolink configuration

### Build Artifacts
- `extract-critical-css.mjs` - Extract critical CSS for inline injection

### Route Generation
- `generate-routes.mjs` - Generate route configuration (if exists)

## Usage

Generators are typically run during development when structure changes:

```bash
node scripts/generators/[script-name].mjs
```

Some generators are run automatically during build process.

## Output Locations

- **Component Map**: Updates `app/[slug]/page.tsx`
- **Glossary Autolinks**: Updates `src/lib/glossaryAutolink.tsx`
- **Critical CSS**: Outputs to `app/critical.css` or similar

## When to Run

### generate-component-map.mjs
Run when adding new page components to ensure routing works.

### generate-glossary-autolink.mjs
Run when glossary terms are added/removed to update autolinking.

### extract-critical-css.mjs
Run when critical rendering CSS changes (rare).

## Dependencies

- Node.js 22+ with ES modules
- File system access to `src/` and `app/` directories
- May require Supabase connection for data-driven generation
