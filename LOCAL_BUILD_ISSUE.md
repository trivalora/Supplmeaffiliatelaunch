# Local Build Issue - @tailwindcss/postcss

**Issue Date:** November 30, 2025  
**Status:** Known issue - Does not affect production  
**Severity:** Low (local development only)

## Problem

Local builds fail with:
```
Error: Cannot find module '@tailwindcss/postcss'
```

Even though:
- ✅ Package is in `package.json` devDependencies
- ✅ Package is in `package-lock.json`
- ✅ `npm install` completes without errors
- ✅ `npm list @tailwindcss/postcss` shows (empty)

## Root Cause

This appears to be a Node.js v24.1.0 + npm v11.6.2 + Tailwind CSS v4 compatibility issue on macOS. The `@tailwindcss/postcss` package is defined but npm refuses to install it to `node_modules/@tailwindcss/` directory.

## Impact

**Local Development:**
- ❌ Cannot run `npm run build` locally
- ✅ Can still run `npm run dev` (dev server works)
- ✅ Can still edit code and test in dev mode

**Production (Vercel):**
- ✅ Builds successfully (fresh npm install)
- ✅ All 1,936 pages generate correctly
- ✅ No impact on deployed site

## Workarounds Attempted

1. ❌ `npm install @tailwindcss/postcss@4.1.17` → Says "up to date" but doesn't install
2. ❌ `rm -rf node_modules && npm install` → Same issue
3. ❌ `rm -rf node_modules package-lock.json && npm install` → Same issue
4. ❌ `npm install --legacy-peer-deps` → Removes other packages
5. ❌ `npm ci` → Same issue
6. ❌ Manual extraction via `npm pack` → npm removes it on next install
7. ❌ Changing postcss.config.mjs to use 'tailwindcss' → Requires separate package

## Solution

**For now:** Use Vercel for production builds. The issue is environment-specific and does not affect:
- Vercel builds ✅
- Production site ✅
- Git repository ✅
- Other developers (probably) ✅

**To test changes:**
1. Push to GitHub
2. Let Vercel build automatically
3. Check build logs
4. Verify deployment

## Future Investigation

Potential fixes to try:
1. Downgrade to Node.js v22.x (current LTS)
2. Use nvm to test different Node versions
3. Try yarn instead of npm
4. Wait for Tailwind CSS v4 stable release
5. Check if macOS Sequoia has compatibility issues

## Related Files

- `package.json` - Has `@tailwindcss/postcss@^4.1.17` in devDependencies
- `postcss.config.mjs` - Requires '@tailwindcss/postcss'
- `.npmrc` - Has `legacy-peer-deps=false`

## Commands for Future Reference

```bash
# If you need to test locally, try:
node --version  # Check if Node v24.1.0 is the issue
npm --version   # Check if npm v11.6.2 is the issue

# Alternative: Use Docker for consistent environment
docker run -v $(pwd):/app -w /app node:22-alpine npm install
docker run -v $(pwd):/app -w /app node:22-alpine npm run build

# Or use GitHub Actions for CI builds
```

## Last Updated

November 30, 2025 - Documented after baseline-browser-mapping update attempt
