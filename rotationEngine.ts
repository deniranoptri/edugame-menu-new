import { GameConfigWithTags } from './types';

export const WITA_OFFSET_MS = 8 * 60 * 60 * 1000; // UTC+08:00 (Asia/Makassar)

/**
 * Calculates the current WITA epoch day (days since 1970-01-01 in Asia/Makassar).
 * Timezone-independent: uses absolute UTC milliseconds + 8 hours.
 */
export function getWitaEpochDay(dateOrMs: number | Date = Date.now()): number {
  const ms = typeof dateOrMs === 'number' ? dateOrMs : dateOrMs.getTime();
  return Math.floor((ms + WITA_OFFSET_MS) / 86400000);
}

/**
 * Calculates milliseconds until the next 00:00:00 midnight in Asia/Makassar (WITA).
 */
export function getMsUntilNextWitaMidnight(dateOrMs: number | Date = Date.now()): number {
  const ms = typeof dateOrMs === 'number' ? dateOrMs : dateOrMs.getTime();
  const currentWitaDay = Math.floor((ms + WITA_OFFSET_MS) / 86400000);
  const nextMidnightUtcMs = (currentWitaDay + 1) * 86400000 - WITA_OFFSET_MS;
  return Math.max(0, nextMidnightUtcMs - ms);
}

function mulberry32(a: number): () => number {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generates a deterministic permutation of game IDs for a given cycle.
 * Guarantees:
 * 1. Every game ID appears exactly once per cycle.
 * 2. The first game of cycle N never matches the last game of cycle N-1.
 */
export function getCyclePermutation(
  gameIds: readonly string[],
  cycleNumber: number,
  baseSeed = 20261101
): string[] {
  const cycleSeed = (baseSeed + Math.imul(cycleNumber, 1013904223)) >>> 0;
  const rng = mulberry32(cycleSeed);
  const arr = [...gameIds];

  // Fisher-Yates Shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Prevent immediate duplicate between adjacent cycles
  if (cycleNumber > 0 && arr.length > 1) {
    const prevSeed = (baseSeed + Math.imul(cycleNumber - 1, 1013904223)) >>> 0;
    const prevRng = mulberry32(prevSeed);
    const prevArr = [...gameIds];
    for (let i = prevArr.length - 1; i > 0; i--) {
      const j = Math.floor(prevRng() * (i + 1));
      const temp = prevArr[i];
      prevArr[i] = prevArr[j];
      prevArr[j] = temp;
    }
    const lastGameOfPrev = prevArr[prevArr.length - 1];
    if (arr[0] === lastGameOfPrev) {
      const temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
  }

  return arr;
}

export interface RotationScheduleVersion {
  version: string;
  startWitaDay: number; // e.g. 20758 = 2026-11-01 WITA
  gameIds: readonly string[];
  seed: number;
}

/**
 * Explicit Versioned Rotation Schedules.
 * Version v1.0 covers the current verified catalog of 43 games starting 2026-11-01 WITA.
 * When new games are introduced in the future, add a new version entry starting at the next cycle boundary.
 */
export const ROTATION_SCHEDULES: readonly RotationScheduleVersion[] = [
  {
    version: 'v1.0',
    startWitaDay: 20758, // 2026-11-01 WITA
    seed: 20261101,
    gameIds: [
      'kata-gol',
      'ketapel-sakti',
      'numeriq-math',
      'porogapit-arena',
      'bee-english-arena',
      'math-domino-arena',
      'jejak-angka',
      'helirescue',
      'sciencelink',
      'banua-fruit-blast',
      'si-pemanah',
      'rimba-pedia',
      'celestial-weaver',
      'tanzib',
      'puzzle',
      'martabak-pecahan',
      'doodle',
      'si-taktik',
      'traditional',
      'space-war',
      'ai-basketball',
      'mancing-kata',
      'kancil',
      'nusaboard',
      'jagoan-kata',
      'geo-squad',
      'ruang-io',
      'color-link-junior',
      'basket-angka-junior',
      'adu-tarik-dino',
      'tatap-hap',
      'cocok-logi',
      'mesin-koleksi',
      'pendekar-balon',
      'detektif-cilik',
      'mewarnai',
      'belajar-angka',
      'Aksi Ambulans',
      'Gass Damkar',
      'Jalur Huruf',
      'Petualangan Satu Garis',
      'gabung-ceria',
      'dunia-hewan'
    ]
  }
];

/**
 * Pure selection function resolving the daily game ID for any given WITA epoch day.
 */
export function getDailyGameIdForWitaDay(witaDay: number): string {
  // Find applicable schedule version (latest whose startWitaDay <= witaDay)
  let sched = ROTATION_SCHEDULES[0];
  for (let i = ROTATION_SCHEDULES.length - 1; i >= 0; i--) {
    if (witaDay >= ROTATION_SCHEDULES[i].startWitaDay) {
      sched = ROTATION_SCHEDULES[i];
      break;
    }
  }

  const dayOffset = Math.max(0, witaDay - sched.startWitaDay);
  const cycleLength = sched.gameIds.length;
  const cycleNumber = Math.floor(dayOffset / cycleLength);
  const dayInCycle = dayOffset % cycleLength;

  const cyclePermutation = getCyclePermutation(sched.gameIds, cycleNumber, sched.seed);
  return cyclePermutation[dayInCycle];
}

/**
 * Resolves the active GameConfig for a specific WITA day (defaults to current WITA day).
 */
export function getDailyGame(
  allGames: readonly GameConfigWithTags[],
  witaDay: number = getWitaEpochDay()
): { game: GameConfigWithTags; witaDay: number; cycleDay: number } | null {
  if (!allGames || allGames.length === 0) return null;
  const gameId = getDailyGameIdForWitaDay(witaDay);
  
  const found = allGames.find(g => g.id === gameId);
  const sched = ROTATION_SCHEDULES[0];
  const cycleDay = Math.max(0, witaDay - sched.startWitaDay) % sched.gameIds.length;

  if (found) {
    return { game: found, witaDay, cycleDay };
  }
  
  // Fallback if game definition was not found in catalog
  return { game: allGames[0], witaDay, cycleDay: 0 };
}
