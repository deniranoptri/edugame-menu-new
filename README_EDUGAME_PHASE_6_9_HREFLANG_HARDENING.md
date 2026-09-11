# Phase 6.9: Hreflang & Canonical Hardening Report
### A. Files Modified
1. `generate_sitemap.js` (Added missing homepage `/` and `/en/` hreflang blocks)
2. `App.tsx` (Added `HomeSEOManager`, unified `clearHreflangs` routing cleanup, and fixed `parseRoute` to enable the English homepage)
3. `src/components/HubIfp.tsx` (Removed hardcoded canonical that caused Canonical Collapse)

### B. Exact Changes
*   **Routing Logic:** Added `home` to the `isAllowedEn` array and adjusted `parseRoute` so the English homepage (`/en/`) maps successfully rather than defaulting to `notfound`.
*   **Homepage SEO Manager:** Implemented `<HomeSEOManager />` hooked into `App.tsx` which injects `hreflang` tags (id, en, x-default) and the proper self-referencing `canonical` tag dynamically based on the current locale for the homepage.
*   **Hreflang Stale-Tag Wiper:** Implemented `clearHreflangs()` inside `navigateTo` and `handlePopState`. This guarantees that if a user navigates from a bilingual page (like `game-edukasi-ifp`) to a monolingual page (like `game-edukasi-anak`), the stale English hreflang tags are instantly wiped from the DOM.
*   **Canonical Collapse Fix:** Removed the duplicate and hardcoded `canonical.setAttribute('href', window.location.origin + '/game-edukasi-ifp');` in `HubIfp.tsx` which was incorrectly forcing the English IFP page to canonicalize to the Indonesian page.

### C. Hreflang Architecture
*   Fully reciprocal implementation achieved via React `useEffect` DOM injection on mounting the relevant view components. 
*   `updateHreflang` logic ensures no duplicate tags are created, and `clearHreflangs` ensures no stale tags survive route transitions.
*   `x-default` is mapped exclusively to the Indonesian (`id`) version across all language pairs.

### D. Canonical Architecture
*   Strict self-referencing canonical links implemented.
*   The `en` locale components construct their canonical using the English path (e.g. `https://papaninteraktif.com/en/...`), breaking the previous "Canonical Collapse" where they surrendered indexing to the `id` pages.

### E. Homepage Result
*   PASS. The English `/en/` and Indonesian `/` homepages successfully cross-reference each other with valid `canonical`, `html lang`, and `hreflang` tags.

### F. Deep-route Result
*   PASS. Verified `HubIfp` and `GameDetail` (e.g., `nusaboard`) pairs. They inject correct tags and do not leak into monolingual pages like `HubKids` (`/game-edukasi-anak`).

### G. Raw HTML Result
*   **Limitation Documented:** Because this is a Vite-powered Client-Side Rendered (CSR) SPA, all routes share a single global `index.html`. We **cannot** hardcode homepage `hreflang` tags into the raw HTML, because those tags would also be served initially when accessing deep routes (causing contradictory signals until JS executes).
*   **Action:** Rely entirely on Google's Web Rendering Service (WRS) to process the runtime DOM and the sitemap. This is safe and fully supported by Google, though third-party raw parsers will fail.

### H. Runtime DOM Result
*   PASS. Verified via Puppeteer that `link[rel="alternate"][hreflang]` arrays are completely accurate after JavaScript execution on all tested routes.

### I. Sitemap Result
*   PASS. Generated updated `public/sitemap.xml`. The missing `<loc>https://papaninteraktif.com/</loc>` and `<loc>https://papaninteraktif.com/en/</loc>` records are now present with full `xhtml:link` reciprocal hreflangs.

### J. Localizely Result
*   **Status: FAIL (Expected)**
*   **Reason:** Localizely's checker does not execute JavaScript. It inspects the raw HTML response. Since we intentionally omitted static hreflangs from `index.html` to prevent route-bleeding in a CSR app, Localizely will not detect them. This is a false negative for Googlebot (which *does* render JS).

### K. HTML lang Result
*   PASS. `HomeSEOManager` and App routing successfully mutates `document.documentElement.lang` to match the current locale state.

### L. Build Result
*   PASS. `npm run build` completed successfully in ~2.8s. No TypeScript errors. No React helmet or external dependencies were introduced.

### M. Regression Result
*   PASS. 
    *   No changes to existing `<title>`, meta `description`, or `<H1>`. 
    *   No keyword stuffing or AdSense modifications. 
    *   Zero game logic was touched. 
    *   Phase 6.7 SEO wording is fully preserved.

### Final Verification Table

| URL | lang | canonical | hreflang id | hreflang en | x-default | status |
|---|---|---|---|---|---|---|
| https://papaninteraktif.com/ | id | https://papaninteraktif.com/ | https://papaninteraktif.com/ | https://papaninteraktif.com/en/ | https://papaninteraktif.com/ | PASS |
| https://papaninteraktif.com/en/ | en | https://papaninteraktif.com/en/ | https://papaninteraktif.com/ | https://papaninteraktif.com/en/ | https://papaninteraktif.com/ | PASS |
| https://papaninteraktif.com/game-edukasi-ifp | id | https://papaninteraktif.com/game-edukasi-ifp | https://papaninteraktif.com/game-edukasi-ifp | https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels | https://papaninteraktif.com/game-edukasi-ifp | PASS |
| https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels | en | https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels | https://papaninteraktif.com/game-edukasi-ifp | https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels | https://papaninteraktif.com/game-edukasi-ifp | PASS |
| https://papaninteraktif.com/game/nusaboard | id | https://papaninteraktif.com/game/nusaboard | https://papaninteraktif.com/game/nusaboard | https://papaninteraktif.com/en/game/nusaboard | https://papaninteraktif.com/game/nusaboard | PASS |
| https://papaninteraktif.com/en/game/nusaboard | en | https://papaninteraktif.com/en/game/nusaboard | https://papaninteraktif.com/game/nusaboard | https://papaninteraktif.com/en/game/nusaboard | https://papaninteraktif.com/game/nusaboard | PASS |
| https://papaninteraktif.com/game-edukasi-anak | id | https://papaninteraktif.com/game-edukasi-anak | MISSING (Clean) | MISSING (Clean) | MISSING (Clean) | PASS |
