# README_EDUGAME_PHASE_9_0_2_FORENSIC_UAT

## 1. Test Environment
- **Date**: 2026-09-03
- **Tool**: Node.js Puppeteer testing script run against `http://localhost:3000` (Vite dev server)
- **Viewport**: Desktop (1280x800) and Mobile (390x844) simulated via Puppeteer.
- **Goal**: Read-only validation of Phase 9.0.1 fixes.

## 2. Runtime Reproduction
The application was started via `npm run dev -- --host 0.0.0.0 --port 3000`. The test script loaded each URL, waited for network idle, and extracted DOM and Console data.

## 3. ReferenceError Verification
- **Status**: The original `Uncaught ReferenceError: locale is not defined` from `MenuCard.tsx` has been **successfully resolved**.
- **Evidence**: `EN_Game` (`/en/game/nusaboard`) and `ID_Game` (`/game/nusaboard`) both render `MenuCard` instances (in the recommended games section) without throwing any ReferenceErrors. 

## 4. MenuCard Verification
- **Indonesian Context**: Renders correctly on ID Game Detail pages.
- **English Context**: Renders correctly on EN Game Detail pages, utilizing English configurations where applicable. No runtime crashes.

## 5. Popstate Verification
- **Status**: **FAILED**. 
- **Observed Behavior**: Navigating to `EN_Hub` via Popstate throws `ReferenceError: HubIfp is not defined`. Because the Hub page crashes, there are no cards to click to continue the Popstate sequence to `EN_Game` and `EN_Guide`.

## 6. Indonesian Routes
- `/` (Home): Renders correctly. No errors.
- `/game/nusaboard` (Game): Renders correctly. No errors. Correct ID metadata.
- `/panduan/penggunaan-ifp-papan-interaktif-digital` (Guide): Renders correctly. No errors. Correct ID metadata.
- `/game-edukasi-ifp` (Hub): **CRASHES**. 
  - **Error**: `ReferenceError: HubIfp is not defined`

## 7. English Routes
- `/en/game/nusaboard` (Game): Renders correctly. `lang="en"`. No errors. English content present.
- `/en/guides/using-educational-games-on-interactive-flat-panels` (Guide): **FAILED**.
  - **Behavior**: Renders completely in Indonesian (`lang="id"`). 
  - **Root Cause**: `App.tsx` does not pass the `locale` prop to `<GuideIFP />`.
- `/en/educational-games-for-interactive-flat-panels` (Hub): **CRASHES**.
  - **Error**: `ReferenceError: HubIfp is not defined`.

## 8. Refresh Test
Refreshing `EN_Game` successfully loads the English Game Detail page without redirecting to the Indonesian homepage and without errors. Refreshing `EN_Guide` loads the Guide, but in Indonesian. Refreshing `EN_Hub` crashes.

## 9. Back/Forward Test
Failed due to the Hub page crash interrupting the navigation sequence.

## 10. Unknown English Route
- **URL**: `/en/this-route-does-not-exist`
- **Observed Behavior**: Safely falls back to the Indonesian Homepage. `lang="id"`. This successfully prevents exposing raw Indonesian content on a broken `/en/` path.

## 11. Canonical Audit
- `/game/nusaboard`: `http://localhost:3000/game/nusaboard` (Self)
- `/en/game/nusaboard`: `http://localhost:3000/en/game/nusaboard` (Self)

## 12. Hreflang Audit
- `/game/nusaboard` & `/en/game/nusaboard`:
  - `id`: `http://localhost:3000/game/nusaboard`
  - `en`: `http://localhost:3000/en/game/nusaboard`
  - `x-default`: `http://localhost:3000/game/nusaboard`
- Status: Correct bidirectional relationship.

## 13. Metadata Audit
- **EN Game**: Title is `NusaBoard | Interactive Educational Games | Papan Interaktif`.
- **ID Game**: Title is `NusaBoard | Game Edukasi Interaktif | Papan Interaktif`.

## 14. HTML Lang Audit
- `/en/game/nusaboard`: `<html lang="en">` (Pass)
- `/en/guides/using-educational-games-on-interactive-flat-panels`: `<html lang="id">` (Fail - defaults to ID)

## 15. JSON-LD Audit
- Both Game Detail pages emit exactly 2 JSON-LD schemas (Organization & VideoGame/EducationalApplication). 

## 16. Sitemap Audit
`public/sitemap.xml` was manually inspected. 
- Contains both `id` and `en` links.
- Uses `<xhtml:link rel="alternate">` perfectly.
- Excludes hypothetical or non-pilot routes.

## 17. Internal Linking
- `EN_Game` successfully links to `EN_Hub`. 
- `EN_Guide` links back to `ID_Hub` (because it rendered in Indonesian mode).

## 18. Game Identity
| Game ID | ID URL | EN URL | Same Identity? | Status |
|---|---|---|---|---|
| `nusaboard` | `/game/nusaboard` | `/en/game/nusaboard` | YES (`https://nusa.papaninteraktif.com/`) | PASS |

## 19. Gameplay Language Boundary
The English Game Detail page correctly mounts the Indonesian game iframe (`https://nusa.papaninteraktif.com/`). The app does **not** falsely claim the game itself is in English, nor were any translation APIs introduced.

## 20. SCIENCELINK Protection
- **SCIENCELINK files modified**: NO. 
- Validation: Verified timestamps of all files in `/public`. Only `sitemap.xml` was modified recently.

## 21. File Change Audit
- **FILES MODIFIED IN 9.0.1**: `types.ts`, `components/MenuCard.tsx`, `App.tsx`.
- **FILES CREATED**: None.
- **FILES DELETED**: None.
- **FILES UNTOUCHED**: Everything else.

## 22. Console Audit
- `ID_Hub`: `ReferenceError: HubIfp is not defined` (NEW)
- `EN_Hub`: `ReferenceError: HubIfp is not defined` (NEW)
- `ID_Game`: NONE
- `EN_Game`: NONE

## 23. Network Audit
No unauthorized external API calls (e.g., translation services) were detected. Only standard assets were loaded.

## 24. Mobile
Mobile viewport tested via Puppeteer (`390x844`). Same runtime behavior and crashes observed.

## 25. Desktop
Desktop viewport tested via Puppeteer (`1280x800`). Same runtime behavior and crashes observed.

## 26. Build
- `npm run build` exits with `0` (Success). Vite/esbuild ignores missing imports by default.
- `npx tsc --noEmit` exits with `1` (Failure) throwing `Cannot find name 'HubKids'`, `Cannot find name 'HubLogic'`, and `Cannot find name 'HubIfp'` in `App.tsx`.

## 27. SEO Regression
Pre-existing Indonesian routes that load successfully (e.g., Homepage, Game Detail) maintained their SEO metadata perfectly.

## 28. UAT Matrix

| ROUTE | LOCALE | PAGE TYPE | RENDER | TITLE | LANG | CANONICAL | HREFLANG | JSON-LD | INTERNAL LINKS | CONSOLE | REFRESH | BACK/FORWARD | STATUS |
|-------|--------|-----------|--------|-------|------|-----------|----------|---------|----------------|---------|---------|--------------|--------|
| `/` | `id` | `home` | YES | Game Edukasi... | `id` | self | [] | 1 | works | NONE | works | works | PASS |
| `/game-edukasi-ifp` | `id` | `hubIfp` | NO | - | `id` | - | - | - | - | `ReferenceError` | NO | NO | FAIL |
| `/panduan/penggunaan-ifp-papan-interaktif-digital` | `id` | `guideIfp` | YES | Panduan... | `id` | self | ID/EN/x-default | 2 | works | NONE | works | works | PASS |
| `/game/nusaboard` | `id` | `gameDetail` | YES | NusaBoard... | `id` | self | ID/EN/x-default | 2 | works | NONE | works | works | PASS |
| `/en/educational-games-for-interactive-flat-panels` | `en` | `hubIfp` | NO | - | `id` | - | - | - | - | `ReferenceError` | NO | NO | FAIL |
| `/en/guides/using-educational-games-on-interactive-flat-panels` | `en` | `guideIfp` | YES | Panduan... (ID) | `id` | self (ID) | ID/EN/x-default | 2 | ID links | NONE | works | works | FAIL |
| `/en/game/nusaboard` | `en` | `gameDetail` | YES | NusaBoard... | `en` | self | ID/EN/x-default | 2 | EN links | NONE | works | works | PASS |

## 29. Remaining Watch Items
1. **Missing Imports in `App.tsx`**: `HubIfp`, `HubKids`, and `HubLogic` are missing imports, crashing their respective routes.
2. **Missing Locale Prop**: `GuideIFP` is invoked without the `locale={currentLocale}` prop in `App.tsx`, forcing it to render its Indonesian default.

## 30. Final Verdict

PHASE 9.0.2 — FAILED
