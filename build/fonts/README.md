Self-hosted web fonts

Place your WOFF2 font files in this folder and ensure the filenames match the URLs defined in `src/fonts.css`.

Recommended files (WOFF2 only):
- lato-latin-400.woff2
- lato-latin-700.woff2
- lora-latin-400.woff2
- lora-latin-700.woff2

Notes:
- Keep to WOFF2 for the smallest, modern format; most target browsers support it. If you need wider support, you can add WOFF fallbacks and duplicate the `@font-face` rules.
- Fonts use `font-display: swap` to avoid FOIT and improve LCP/CLS. If you prefer `optional`, update the rules in `src/fonts.css`.
- If these files are missing at runtime, the site will fall back to system fonts without breaking.
