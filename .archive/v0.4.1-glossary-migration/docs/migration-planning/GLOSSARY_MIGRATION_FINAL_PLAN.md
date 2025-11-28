# Glossary Database Migration - Final Implementation Plan

**Date**: November 27, 2025  
**Status**: 🔄 In Progress  
**Goal**: Complete migration from React components to database-driven glossary pages

---

## Problem Analysis

### Current State
- ✅ **Database schema**: Complete (14 fields in `api.glossary_terms`)
- ✅ **API endpoints**: Operational (GET /api/glossary, GET /api/glossary/[slug])
- ⚠️ **Data migration**: Incomplete - only basic fields migrated
- ⚠️ **Frontend**: Hybrid system with fallback to React components
- ❌ **Content extraction**: Script cannot parse JSX content

### Root Cause
The extraction script (`scripts/migration/extract-glossary-to-database.mjs`) can only extract **string props** from React components, but most glossary pages use:
1. **JSX content** in `content` prop (e.g., AkkermansiaPage.tsx)
2. **JSX ReactNode** in `expandedExplanation` prop (e.g., HypertensivePage.tsx)
3. **String content** in `detailedExplanation` prop (e.g., ALAPage.tsx) ✅ This works!

### Data Patterns in Components (197 terms)
After analysis of the codebase:
- **Pattern A**: `content={<>JSX</>}` - ~60% of components
- **Pattern B**: `expandedExplanation={<>JSX</>}` - ~25% of components
- **Pattern C**: `detailedExplanation="string"` - ~10% of components
- **Pattern D**: Only `definition="string"` - ~5% of components

---

## Solution Strategy

### Option 1: Manual Content Migration (Recommended) ✅
**Approach**: Convert JSX content to markdown manually or semi-automatically

**Pros**:
- Clean, maintainable markdown in database
- Full control over content quality
- Can improve formatting during migration
- Consistent markdown rendering across all terms

**Cons**:
- Labor-intensive (197 terms)
- Time: ~2-4 hours with tooling

**Implementation**:
1. Create conversion script that:
   - Reads each React component
   - Identifies JSX patterns (content, expandedExplanation, etc.)
   - Converts JSX to markdown using regex/AST parsing
   - Handles: `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, etc.
   - Generates SQL UPDATE statements
2. Manual review of complex components
3. Run SQL updates in batches
4. Verify rendering with markdown parser

### Option 2: Automated JSX-to-Markdown Converter ⚡
**Approach**: Build intelligent parser to convert JSX → Markdown

**Pros**:
- Fast execution (minutes)
- Repeatable process
- Can handle future additions

**Cons**:
- Complex parsing logic
- May miss edge cases
- Needs validation

**Implementation**:
1. Use Babel parser to parse JSX AST
2. Traverse AST and convert nodes:
   - `<h2>` → `## `
   - `<p>` → paragraph
   - `<ul><li>` → `- `
   - `<strong>` → `**text**`
3. Handle className and inline styles
4. Generate SQL migration file
5. Human review and corrections

### Option 3: Keep Hybrid System (Not Recommended) ❌
**Why rejected**: Goal is full database usage, remove fallbacks

---

## Recommended Approach: Option 2 (Automated Converter)

### Phase 1: Build JSX-to-Markdown Converter (2-3 hours)

**Script**: `scripts/migration/convert-jsx-to-markdown.mjs`

**Features**:
- Parse React component files
- Extract JSX from `content`, `expandedExplanation`, `technicalExplanation`
- Convert JSX elements to markdown:
  ```
  <h2 className="content-heading">Title</h2> → ## Title
  <h3 className="mb-4">Subtitle</h3> → ### Subtitle
  <p className="content-text">Text</p> → Text\n\n
  <ul className="glossary-list"> → (newline)
  <li><strong>Bold:</strong> text</li> → - **Bold:** text
  ```
- Handle nested structures
- Preserve links, emphasis, code blocks
- Generate UPDATE SQL statements

**Pseudocode**:
```javascript
function convertJSXToMarkdown(component) {
  const ast = parse(component);
  const contentNode = findProp(ast, 'content') || findProp(ast, 'expandedExplanation');
  
  if (!contentNode) return null;
  
  const markdown = traverseAndConvert(contentNode, {
    h2: (node) => `## ${getTextContent(node)}\n\n`,
    h3: (node) => `### ${getTextContent(node)}\n\n`,
    p: (node) => `${convertInline(node)}\n\n`,
    ul: (node) => convertList(node),
    li: (node) => `- ${convertInline(node)}\n`,
    strong: (node) => `**${getTextContent(node)}**`,
    // ... etc
  });
  
  return markdown;
}
```

**Testing**:
- Run on 10-15 sample components
- Verify markdown output
- Check edge cases (nested JSX, inline code, etc.)

### Phase 2: Generate Migration SQL (30 min)

**Output**: `supabase/migrations/20251127140000_update_glossary_content.sql`

**Structure**:
```sql
-- Update expanded content for all glossary terms
-- Generated: 2025-11-27

UPDATE api.glossary_terms
SET 
  expanded_explanation = 'Markdown content here...',
  updated_at = CURRENT_TIMESTAMP
WHERE slug = 'akkermansia';

UPDATE api.glossary_terms
SET 
  expanded_explanation = 'Markdown content here...',
  updated_at = CURRENT_TIMESTAMP
WHERE slug = 'ala';

-- ... repeat for all 197 terms
```

**Validation**:
- Check SQL syntax
- Verify escaping of quotes, apostrophes
- Test on dev database first

### Phase 3: Update Frontend to Remove Fallback (1 hour)

**Files to modify**:
1. `app/glossary/[term]/page.tsx` - Remove hybrid logic
2. `app/glossary/[term]/GlossaryPageContent.tsx` - Simplify
3. Remove or archive hardcoded components

**Changes**:
```typescript
// OLD (hybrid approach)
export default async function GlossaryTermPage({ params }) {
  const term = await getGlossaryTerm(slug);
  
  if (term && hasCompleteContent(term)) {
    return <GlossaryPageContent term={term} />;
  }
  
  // Fallback to hardcoded
  const HardcodedComponent = await getHardcodedGlossaryComponent(slug);
  return <HardcodedComponent />;
}

// NEW (database-only)
export default async function GlossaryTermPage({ params }) {
  const term = await getGlossaryTerm(slug);
  
  if (!term) {
    notFound();
  }
  
  return <GlossaryPageContent term={term} />;
}
```

### Phase 4: Testing & Validation (1 hour)

**Tests**:
1. ✅ All 197 terms render correctly
2. ✅ Markdown formatting works (headings, lists, bold, etc.)
3. ✅ No missing content
4. ✅ Related terms links work
5. ✅ Examples display correctly
6. ✅ SEO metadata present
7. ✅ No console errors
8. ✅ Build succeeds (1,936 static pages)

**Validation script**: `scripts/migration/validate-final-migration.mjs`
- Fetch all terms from API
- Check for NULL expanded_explanation
- Verify markdown rendering
- Report any issues

### Phase 5: Cleanup (30 min)

**Archive**:
- Move `src/components/pages/glossary/` → `.archive/v0.4-glossary-components/`
- Update documentation
- Remove unused imports

**Documentation**:
- Update `docs/GLOSSARY_BACKEND_COMPLETE.md`
- Create `docs/GLOSSARY_MIGRATION_COMPLETE.md`
- Update project README

---

## Implementation Checklist

### Pre-Migration
- [x] Analyze all 197 glossary components
- [x] Identify JSX content patterns
- [x] Document current state
- [ ] Backup production database

### Development
- [ ] Build JSX-to-Markdown converter script
- [ ] Test on 15 sample components
- [ ] Verify markdown output quality
- [ ] Generate full SQL migration
- [ ] Review SQL for errors

### Database
- [ ] Test migration on dev database
- [ ] Verify content renders correctly
- [ ] Apply to production database
- [ ] Confirm all 197 terms updated

### Frontend
- [ ] Remove `hasCompleteContent()` function
- [ ] Remove `getHardcodedGlossaryComponent()` function
- [ ] Simplify page.tsx to database-only
- [ ] Test local build
- [ ] Fix any errors

### Testing
- [ ] Spot-check 20 random terms
- [ ] Verify markdown rendering
- [ ] Test related terms links
- [ ] Check SEO metadata
- [ ] Run full build (1,936 pages)

### Deployment
- [ ] Commit migration script
- [ ] Commit SQL migration
- [ ] Commit frontend changes
- [ ] Push to GitHub
- [ ] Verify Vercel deployment
- [ ] Test production site

### Cleanup
- [ ] Archive React components
- [ ] Update documentation
- [ ] Remove fallback code
- [ ] Final verification

---

## File Inventory

### New Files
- `scripts/migration/convert-jsx-to-markdown.mjs` (converter)
- `scripts/migration/validate-final-migration.mjs` (validator)
- `supabase/migrations/20251127140000_update_glossary_content.sql` (migration)
- `docs/GLOSSARY_MIGRATION_COMPLETE.md` (documentation)
- `.archive/v0.4-glossary-components/` (archived React components)

### Modified Files
- `app/glossary/[term]/page.tsx` (remove fallback)
- `app/glossary/[term]/GlossaryPageContent.tsx` (simplify)
- `docs/GLOSSARY_BACKEND_COMPLETE.md` (update status)
- `README.md` (update project status)

---

## Risk Assessment

### Low Risk ✅
- Database schema already correct
- API endpoints working
- Markdown parser tested
- Fallback system exists during migration

### Medium Risk ⚠️
- JSX → Markdown conversion accuracy
- Edge cases in complex components
- Missing content after migration

### Mitigation
- Thorough testing on sample set
- Manual review of complex components
- Keep fallback system until fully validated
- Database backup before migration
- Staged rollout (dev → production)

---

## Timeline Estimate

**Total**: 5-7 hours

- **Phase 1**: Build converter (2-3 hours)
- **Phase 2**: Generate SQL (30 min)
- **Phase 3**: Update frontend (1 hour)
- **Phase 4**: Testing (1 hour)
- **Phase 5**: Cleanup (30 min)
- **Deployment**: (30 min)

**Start**: Today (Nov 27, 2025)  
**Expected Completion**: Today or tomorrow

---

## Success Criteria

- ✅ All 197 glossary terms in database with full content
- ✅ Zero NULL `expanded_explanation` fields
- ✅ Markdown renders correctly on all pages
- ✅ No React component fallbacks
- ✅ Build succeeds (1,936 pages)
- ✅ Production deployment successful
- ✅ Documentation updated
- ✅ React components archived

---

## Next Steps

1. **Approve this plan** or request modifications
2. **Begin Phase 1**: Build JSX-to-Markdown converter
3. **Test on samples**: Validate conversion accuracy
4. **Generate migration**: Create SQL file
5. **Execute**: Run migration and update frontend
6. **Verify**: Test and deploy

---

**Status**: Ready to proceed pending approval  
**Assigned**: GitHub Copilot  
**Reviewers**: User (roxyjune)
