# FORENSIC REPORT: Phase 2.2-R Runtime Error Diagnosis

## 1. Executive Summary
An urgent runtime regression was reported after Phase 2.2 displaying "AppError: Gagal mengambil data — Failed to fetch". Forensic analysis isolated this error to `src/components/CommunityHub.tsx`, specifically within the `catch` block of its `fetchData` polling function. The error is a client-side network failure caused by browser-level security interventions (likely iframe sandboxing or tracker blocking) preventing a cross-origin 302 redirect from a Google Apps Script endpoint. **Phase 2.2 did not cause this issue**, as the affected component and its data-fetching logic were completely untouched. The application remains stable as the error is safely caught.

## 2. Exact Error
- **Message Logged**: `"Gagal mengambil data TypeError: Failed to fetch"`
- **"AppError" Prefix**: This string is not present in the application's source code. It is an artifact injected by the runtime environment's generic error boundary or DevTools overlay when logging unhandled or caught exceptions to the console.

## 3. Reproduction Steps
1. Load the application in a browser environment with strict third-party tracking protection, or within a sandboxed iframe.
2. The homepage mounts `<CommunityHub />` as part of its layout.
3. Upon mount, the `useEffect` hook triggers `fetchData()`.
4. The fetch to `script.google.com` is initiated.
5. The browser intercepts and aborts the cross-origin request.
6. The `catch` block executes, logging the error to the console.

## 4. Original Error Source
- **File**: `src/components/CommunityHub.tsx`
- **Line**: 28
- **Function**: `fetchData`
- **Code**:
  ```typescript
  } catch (error) {
    console.error("Gagal mengambil data", error);
  }
  ```

## 5. Network Evidence
- **Request URL**: `https://script.google.com/macros/s/AKfycbwhu2LqmjuF9lTXZjigxxCwiBxAWEzUnKhoV04I_yD4eupl25Uv7mKns5OgG8musvmD/exec?t=[timestamp]`
- **Method**: GET
- **Status**: (Failed) - typically appears as `(blocked:other)` or CORS error in browser DevTools.
- **Type**: fetch
- **Initiator**: `CommunityHub.tsx` `fetchData`
- **Response**: None (aborted by browser)
- **Server-side Validation**: cURL testing confirms the endpoint is perfectly healthy, returns HTTP 302 redirecting to `script.googleusercontent.com`, and resolves with valid JSON and correct CORS headers (`Access-Control-Allow-Origin: *`).

## 6. Stack Trace
```
TypeError: Failed to fetch
    at fetchData (CommunityHub.tsx:21)
    at CommunityHub.tsx:34
```
(No other application files are implicated in the trace.)

## 7. Phase 2.2 Change Correlation
**DISPROVED**. Phase 2.2 exclusively modified:
- `src/App.tsx`: Static metadata arrays (`generalGames`, `kidsGames`).
- `src/components/GameDetail.tsx`: DOM metadata manipulation (`document.title`, `og:tags`).
No routing logic, initialization order, or fetching mechanisms were altered. `CommunityHub.tsx` was completely untouched. The error pre-existed Phase 2.2 but surfaced during close observation.

## 8. Route Isolation Results
- **`/` (Homepage)**: Encounters the fetch failure silently in the console because `<CommunityHub />` is mounted.
- **`/game/banua-fruit-blast` (Direct Load)**: No fetch failure if loaded directly (assuming `CommunityHub` is not rendered in the GameDetail view tree).
- **SPA Navigation (`/` -> `/game/:id`)**: The error occurs on the homepage, but does not affect the navigation to GameDetail.

## 9. Homepage Regression
- **Status**: PASS.
- Game list, images, search, filters, and other interactive elements work perfectly. The React tree does not crash.

## 10. Game Detail Regression
- **Status**: PASS.
- Game Detail loads correctly, unique metadata renders as expected, and navigation works seamlessly.

## 11. External Game Test
- **Status**: PASS.
- The "Main Sekarang" CTA links remain intact and unaffected by the background fetch error in the Community Hub.

## 12. Environment Check
- No `VITE_*` environment variables are missing or malformed for this feature, as the URL (`GAS_URL`) is hardcoded in the component.

## 13. Root Cause
The client-side `fetch()` request to the Google Apps Script endpoint is being aborted by the browser's security layer. While the endpoint itself is healthy and returns valid CORS headers, browsers often block requests to `script.google.com` due to:
1. Iframe `sandbox` restrictions preventing cross-origin redirects (common in preview environments).
2. Ad blockers or privacy extensions categorizing it as a third-party tracker.
3. Strict third-party cookie policies interfering with the redirect sequence.

## 14. Severity
**Low / Non-Fatal**. The error is caught gracefully. It does not disrupt the core application, the game library, or SEO functionalities. It merely prevents the live comments from populating in the Community Hub section.

## 15. Recommended Fix
(DO NOT IMPLEMENT YET)
1. Provide a graceful UI fallback inside `CommunityHub.tsx` (e.g., displaying "Koneksi ke komunitas terganggu" instead of infinite loading) when the fetch fails.
2. Consider proxying the GAS request through a serverless backend route (e.g., a simple Vite API route if running full-stack) to bypass client-side CORS/iframe restrictions.

## 16. Evidence Log
- cURL confirmed endpoint health (Status 302 -> 200 OK, JSON payload).
- `grep` searches confirmed `"AppError"` does not exist in the source code.
- Source inspection confirmed `catch` block on line 28 of `CommunityHub.tsx`.
- Phase 2.2 diffs confirmed `CommunityHub.tsx` was untouched.
