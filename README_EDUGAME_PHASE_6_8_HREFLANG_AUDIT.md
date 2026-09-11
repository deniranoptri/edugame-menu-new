# Hreflang Forensic Audit Report

## Audit Details
I have completed the read-only forensic audit of the hreflang implementation for Papan Interaktif as requested. Below is the evidence-based breakdown.

### A. RAW HTML HREFLANG: FAIL
*   **Result:** `FAIL`
*   **Evidence:** Executing `curl` (and matching via Node `https.get`) against the production raw HTML for both `https://papaninteraktif.com/` and `https://papaninteraktif.com/game-edukasi-ifp` returns exactly **0 matches** for `hreflang` inside the initial HTML payload before JavaScript executes. The initial server-delivered HTML is purely the static `index.html` structure.

### B. RUNTIME HREFLANG: WATCH
*   **Result:** `WATCH`
*   **Evidence:** Puppeteer runtime DOM inspection reveals:
    *   `https://papaninteraktif.com/`: **NONE FOUND** (No hreflang injected).
    *   `https://papaninteraktif.com/en/`: **NONE FOUND** (No hreflang injected).
    *   `https://papaninteraktif.com/game-edukasi-ifp`: **FOUND** (id, en, x-default).
    *   `https://papaninteraktif.com/en/educational-games-for-interactive-flat-panels`: **FOUND** (id, en, x-default).
*   **Root Cause:** The application relies on manual DOM manipulation inside component `useEffect` hooks (e.g., `HubIfp.tsx`) for deep links, but completely forgets to inject them for the root `/` and `/en/` homepage routes in `App.tsx` or the component responsible for the homepage view.

### C. SITEMAP HREFLANG: FAIL
*   **Result:** `FAIL`
*   **Evidence:** Inspection of `public/sitemap.xml` via `generate_sitemap.js` confirms valid `<xhtml:link rel="alternate" hreflang="...">` blocks exist for deep routes.
    *   *Example:* `/game-edukasi-ifp` correctly defines reciprocity to `/en/educational-games-for-interactive-flat-panels` and sets `x-default`.
    *   *However*, the `<loc>https://papaninteraktif.com/</loc>` block in the sitemap **DOES NOT** contain hreflang definitions for the English homepage. And `<loc>https://papaninteraktif.com/en/</loc>` is completely missing from the sitemap.

### D. RECIPROCITY: FAIL
*   **Result:** `FAIL`
*   **Evidence:** While deep links (like IFP) show reciprocal tags in the rendered DOM, the primary entry point (the homepage) is completely broken. If the homepage doesn't have reciprocal tags linking to `/en/` (in DOM and sitemap), the language architecture is structurally flawed at the root level.

### E. X-DEFAULT: FAIL
*   **Result:** `FAIL`
*   **Evidence:** Same as above. `x-default` is missing on the homepage in both raw HTML, runtime DOM, and the sitemap.

### F. CANONICAL CONSISTENCY: FAIL
*   **Result:** `FAIL`
*   **Evidence:** Puppeteer canonical tests reveal massive "Canonical Collapse":
    *   `/` → Canonical is `https://papaninteraktif.com/` (from static HTML).
    *   `/en/` → Canonical is **NONE FOUND** (in DOM check) / remains static `/`.
    *   `/game-edukasi-ifp` → Canonical is `https://papaninteraktif.com/game-edukasi-ifp`.
    *   `/en/educational-games-for-interactive-flat-panels` → Canonical is `https://papaninteraktif.com/game-edukasi-ifp`. (The English URL canonicalizes to the Indonesian URL, completely destroying English indexability).
*   **Root Cause:** The `HubIfp.tsx` hardcodes the canonical link to `window.location.origin + '/game-edukasi-ifp'` inside its `useEffect` cleanup/setup logic, regardless of whether it's rendering the `en` variant or the `id` variant.

### G. HTML LANG: FAIL
*   **Result:** `FAIL`
*   **Evidence:** The raw HTML always serves `<html lang="id">`. Puppeteer confirms that the runtime DOM for `/en/` and `/en/educational-games-for-interactive-flat-panels` successfully mutates the DOM to `<html lang="en">` (via client-side JS), but the initial payload is always `id`.

### H. LOCALIZELY DETECTION: FAIL
*   **Result:** `FAIL`
*   **Evidence:** The Localizely hreflang checker analyzes the **Raw HTML** response of a URL (like `curl` does). Because the raw HTML served by Vite/Netlify for this SPA contains zero `<link rel="alternate">` tags in the `<head>`, Localizely will report that no hreflang tags exist. It does not execute JavaScript to wait for the React router to mount.

### I. GOOGLE SIGNALS: FAIL
*   **Result:** `FAIL`
*   **Evidence:** Googlebot *does* execute JavaScript (WRS) and *will* process the sitemap. Therefore, Google will eventually see the hreflang tags for deep links via the sitemap and the rendered DOM. **However**, because the canonical tags for English pages are incorrectly forced to the Indonesian URLs (Canonical Collapse), Google will respect the canonical and **IGNORE** the hreflang tags for the English pages. Google will not index the English content.

---

### Final Verdict & Root Cause

1.  **Exact root cause of any failure:** 
    *   The application is a Client-Side Rendered (CSR) SPA relying on `index.html` for its initial payload, which lacks hreflang entirely.
    *   The components (`HubIfp.tsx`, `GameDetail.tsx`, etc.) manually inject canonicals and hreflangs via `document.head.appendChild()`.
    *   `HubIfp.tsx` hardcodes the canonical to the `/game-edukasi-ifp` path instead of respecting the current URL (`window.location.href`), causing the English `/en/...` route to point its canonical to the Indonesian route.
    *   The homepage (`App.tsx`) completely lacks the manual DOM injection logic for hreflangs.
    *   The sitemap generator script (`generate_sitemap.js`) misses the homepage hreflang block and the `/en/` entry entirely.
2.  **Exact file/function responsible:** `generate_sitemap.js`, `App.tsx` (missing logic), `components/HubIfp.tsx` (hardcoded canonical logic), `components/GameDetail.tsx`.
3.  **Evidence from actual tests:** Puppeteer and `curl` scripts confirm exact state. `HubIfp.tsx` source code confirms hardcoded canonical: `canonical.setAttribute('href', window.location.origin + '/game-edukasi-ifp');`.
4.  **Whether a fix is actually necessary:** **CRITICAL YES.** The English version of the site is currently un-indexable due to Canonical Collapse.
5.  **Recommended safest fix (WITHOUT implementing it):**
    *   Modify `generate_sitemap.js` to add the missing hreflang blocks to the homepage `<url>`.
    *   Modify `App.tsx` (or a global router wrapper) to dynamically set `hreflang` and `canonical` based on `window.location.href`, rather than hardcoding paths inside individual components like `HubIfp.tsx`.
    *   Alternatively, fix the `useEffect` hooks in `HubIfp.tsx`, `GameDetail.tsx`, and others to ensure `canonical` is set dynamically based on the current locale (e.g., `currentUrl` or `lang === 'en' ? ... : ...`).
