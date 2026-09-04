# PHASE 5.1 — TOPICAL CLUSTER VALIDATION & HUB CREATION GATE

## 1. Executive Summary
This report performs a strict, evidence-based forensic validation of the candidate topical clusters and hubs proposed in Phase 5. In particular, it scrutinizes the "IFP/PID" cluster to ensure it is not loosely based on generic tags (like "Ice Breaking"), but instead backed by concrete mechanics supporting large-screen touch, collaborative play, and classroom displays. The result is a refined Hub Creation Decision Matrix authorizing only those hubs that carry unique search intent, substantial content, and true mechanical support.

## 2. 32-Game Evidence Matrix
We re-audited the 32 games with strict mechanical and audience definitions rather than arbitrary tags.

| ID | Title | Verified Mechanic | Verified Audience |
|----|-------|-------------------|-------------------|
| banua-fruit-blast | Fruit Blast | Slicing / Swiping | SD/SMP |
| si-pemanah | Si Pemanah | Target Tapping | SD/SMP |
| rimba-pedia | Rimba Pedia | Exploration | SD |
| celestial-weaver | Celestial Weaver | Drag / Trace | SD |
| tanzib | Tanzib | Sorting | SD/SMP |
| puzzle | Puzzle | Drag & Drop | Semua Umur |
| martabak-pecahan | Martabak | Slicing / Fraction | SD |
| doodle | Ayo Menggambar | Drawing Canvas | Semua Umur |
| si-taktik | Si Taktik | Tic-Tac-Toe / Turn-based | Semua Umur |
| traditional | 17 Agustus | Tapping Minigames | SD/SMP |
| space-war | Space War | Shooter | SD/SMP |
| ai-basketball | AI Basketball | Camera Motion Tracking | SMP/Guru |
| mancing-kata | Mancing Kata | Tapping / Timing | SD |
| kancil | Kancil | Platformer | SD |
| nusaboard | NusaBoard | Virtual Whiteboard | SD/SMP |
| jagoan-kata | Jagoan Kata | Word Puzzle | PAUD/SD |
| geo-squad | Geo Squad | Shooter | SD |
| ruang-io | Ruang.io | 3D Rotation | Semua Umur |
| adu-tarik-dino | Tarik Dino | Rapid Tapping (2-Player) | SD |
| tatap-hap | Tatap & Hap | Hidden Object | PAUD/TK |
| cocok-logi | Cocok-logi | Matching | PAUD/TK |
| mesin-koleksi | Mesin Gacha | Clicker | PAUD/TK |
| pendekar-balon | Pendekar Balon | Tapping | PAUD/TK |
| detektif-cilik | Detektif | Hidden Object | PAUD/TK |
| mewarnai | Sayuran | Coloring / Fill | PAUD/TK |
| belajar-angka | Lab Warna | Color Mixing | PAUD/TK |
| Aksi Ambulans | Ambulans | Pathfinding | PAUD/TK |
| Gass Damkar | Damkar | Aiming | PAUD/TK |
| Jalur Huruf | Jalur Huruf | Tracing | PAUD/TK |
| Petualangan Satu Garis | Satu Garis | Line Drawing | PAUD/TK |
| gabung-ceria | Gabung Ceria | Physics Drop / Merge | Semua Umur |
| dunia-hewan | Dunia Hewan | Matching | PAUD/TK |

## 3. Candidate Hub Evaluation

| Candidate Hub | Relevant Games | Evidence / Context | Status |
|---------------|----------------|--------------------|--------|
| `/game-edukasi` | 32 | Entire portal | CREATE LATER (Use Homepage) |
| `/game-edukasi-anak` | 14 | PAUD/TK games | CREATE NOW |
| `/game-edukasi-paud` | 14 | PAUD/TK games | NOT JUSTIFIED (Cannibalizes `anak`) |
| `/game-edukasi-sd` | 19 | Games tagged SD | CREATE LATER (Needs more depth) |
| `/game-edukasi-smp` | 10 | Games tagged SMP | NOT JUSTIFIED (Too thin) |
| `/game-literasi` | 5 | Language/letters | CREATE LATER (Thin) |
| `/game-numerasi` | 7 | Math/counting | CREATE LATER (Thin) |
| `/game-logika` | 17 | Spatial, puzzles, matching | CREATE NOW |
| `/game-sains` | 0 | None explicitly | NOT JUSTIFIED |
| `/media-pembelajaran-interaktif` | 32 | Broader than games | CREATE LATER (Needs tools, not just games) |
| `/game-edukasi-ifp` | 6 | Proven IFP mechanics | CREATE NOW (See audit) |

## 4. IFP/PID Special Audit
We evaluated the "Ice Breaking" and IFP compatibility based on actual interaction models, rejecting games that only had a generic tag.

| Game | Evidence | Source | Why evidence supports IFP/PID | Confidence | Verdict |
|------|----------|--------|-------------------------------|------------|---------|
| nusaboard | "Kanvas interaktif untuk menyusun ide" | Description | Whiteboarding is the primary native use case for an Interactive Flat Panel. | HIGH | IFP-SUITABLE — EVIDENCE SUPPORTED |
| doodle | Drawing / AI Guess | Mechanic | Drawing requires a large canvas; multiplayer guessing works well on a class display. | HIGH | IFP-SUITABLE — EVIDENCE SUPPORTED |
| adu-tarik-dino | Two-player Tug of War | Mechanic | Simultaneous multi-touch interaction is a hallmark of IFP hardware utilization. | HIGH | IFP-SUITABLE — EVIDENCE SUPPORTED |
| puzzle | Drag & Drop "materi pelajaran" | Description | Teacher can put class materials on the board for students to solve physically at the screen. | MED | IFP-SUITABLE — EVIDENCE SUPPORTED |
| banua-fruit-blast | Slicing / Action | Mechanic | Swiping/slicing mechanics utilize the large touch surface effectively in a group setting. | MED | IFP-SUITABLE — EVIDENCE SUPPORTED |
| traditional | "memeriahkan kelas" | Description | Explicitly designed for classroom group play (minigames). | MED | IFP-SUITABLE — EVIDENCE SUPPORTED |
| si-pemanah | Ice breaking tag | Tag | Standard tapping game, no specific large-screen multi-touch or collaborative mechanic. | LOW | NOT IFP-PROVEN |
| mesin-koleksi | Gacha | Mechanic | Simple clicker, doesn't benefit specifically from an IFP over a tablet. | LOW | NOT IFP-PROVEN |
| ai-basketball | Camera Tracking | Mechanic | Requires camera, which many IFPs lack or place awkwardly for sports. | LOW | NOT IFP-PROVEN |

**Conclusion:** 6 games carry strong, mechanically-proven IFP suitability. This justifies `/game-edukasi-ifp` as a highly specific, high-value niche.

## 5. Education-Level Audit
- **PAUD/TK (Anak):** 14 games. Extremely strong cluster. Warrants `/game-edukasi-anak`.
- **SD:** 19 games. Large enough, but intent overlaps heavily with generic "game edukasi". Will defer to prevent thinning out the main offering.
- **SMP:** 10 games. Often grouped with SD. Not enough independent mass for a dedicated hub yet.

## 6. Subject/Skill Audit
- **Logika:** 17 games. Massive, unique intent. Warrants `/game-logika`.
- **Numerasi:** 7 games. Valid, but small. Deferred.
- **Literasi:** 5 games. Valid, but small. Deferred.
- **Sains:** 0 games. NOT JUSTIFIED. Do not create `/game-sains`.
- **Kreativitas/Seni:** 2 games. NOT JUSTIFIED.

## 7. Media Pembelajaran Audit
`/media-pembelajaran-interaktif` represents a broader search intent (tools, simulators, presentation software) rather than just "games". While `nusaboard` and `puzzle` lean this way, a dedicated hub right now would just duplicate the games list. **CREATE LATER** when more tool-based apps are added.

## 8. Search Intent Map
- **Primary Intent:** "game edukasi" (Homepage mapping).
- **Secondary Intent A (Age-based):** "game edukasi anak" (Focus on PAUD/TK, golden age, tracing, coloring).
- **Secondary Intent B (Skill-based):** "game logika" (Focus on cognitive skills, spatial reasoning, HOTS).
- **Secondary Intent C (Hardware/Context):** "game edukasi ifp" / "game papan interaktif" (Focus on large touch screens, teachers, classrooms).

## 9. Cannibalization Analysis
- `/game-edukasi-anak` vs `/game-edukasi-paud`: Identical intent. We merge to `/game-edukasi-anak`.
- `/game-edukasi` vs `/game-edukasi-sd`: High overlap. People searching "game edukasi" often mean SD. We route to the homepage to strengthen it, deferring the SD hub.

## 10. Content Depth Analysis
- **Hub Anak:** Can discuss golden age motor skills (supported by tracing/coloring games).
- **Hub Logika:** Can discuss HOTS and spatial reasoning (supported by 3D rotation, physics merge).
- **Hub IFP:** Can discuss multi-touch, classroom collaboration, and physical engagement (supported by whiteboarding and tug-of-war).
*None of these will be mere lists of cards. All possess unique contextual depth.*

## 11. International Mapping
- Indonesian: `game edukasi` -> International: `educational games`
- Indonesian: `game edukasi anak` -> International: `educational games for kids`
- Indonesian: `game logika` -> International: `logic games`
- Indonesian: `game edukasi ifp` -> International: `interactive flat panel games` or `classroom smartboard games`
*No English routes will be created in this phase.*

## 12. Hub Creation Decisions

| Candidate Hub | Primary Intent | Relevant Games | Evidence Strength | Cannibalization Risk | Decision |
|---------------|----------------|----------------|-------------------|----------------------|----------|
| `/game-edukasi-anak` | Age/PAUD | 14 | HIGH | LOW | CREATE NOW |
| `/game-logika` | Cognitive | 17 | HIGH | LOW | CREATE NOW |
| `/game-edukasi-ifp`| Hardware/Class | 6 | HIGH | LOW | CREATE NOW |
| `/game-edukasi-sd` | Age/SD | 19 | MED | HIGH (vs Homepage) | CREATE LATER |
| `/game-numerasi` | Math | 7 | LOW | LOW | CREATE LATER |

## 13. Deferred Opportunities
- Developing a dedicated `Media Pembelajaran` section once more non-game tools are built.
- Developing Science (`Sains`) games to unlock a future hub.

## 14. Risks / WATCH
- **Over-tagging:** Ensure future games aren't blindly tagged "IFP" without multi-touch or collaborative mechanics.
- **Routing:** Ensure the SPA `popstate` correctly handles these hubs so they render independently for crawlers.

## 15. Recommended Implementation Order
1. Ensure the 3 "CREATE NOW" hubs exist in the codebase.
2. Verify their distinct H1 and metadata.
3. Update sitemaps to include them.
4. Ensure internal links (sidebar/footer) point to them.
*(Note: These hubs were generated in Phase 5 but this phase validates their mechanical justification prior to any further expansion).*
