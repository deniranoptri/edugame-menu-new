const fs = require('fs');

const missingTop = `import React, { useState, useEffect, Suspense, lazy } from 'react';
import { GameConfig, GameConfigWithTags } from './types';
import MenuCard from './components/MenuCard';
import ProfileModal from './components/ProfileModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import JurnalGuru from './components/JurnalGuru';
import GuideIFP from './components/GuideIFP';
import GuideKids from './components/GuideKids'; 
import GameDetail from './components/GameDetail';
import EduGameSEOContent from './components/EduGameSEOContent';
import StatistikDewa from './components/StatistikDewa';
import CommunityHub from './components/CommunityHub';
import { HubIfp } from './components/HubIfp';
import { HubKids } from './components/HubKids';
import { HubLogic } from './components/HubLogic';
import NotFound from './components/NotFound';
import { AdSenseDisplay } from './components/AdSenseDisplay';

const parseRoute = (path: string) => {
  if (path === '/' || path === '') return { locale: 'id', type: 'home' };
  if (path === '/en' || path === '/en/') return { locale: 'en', type: 'home' };

  const parts = path.split('/').filter(Boolean);
  const locale = parts[0] === 'en' ? 'en' : 'id';
  const basePath = locale === 'en' ? parts.slice(1) : parts;

  if (basePath.length === 0) return { locale, type: 'home' };

  if (basePath[0] === 'game' && basePath[1]) return { locale, type: 'gameDetail', slug: basePath[1] };
  if (basePath[0] === 'privacy-policy') return { locale, type: 'privacy' };
  if (basePath[0] === 'contact') return { locale, type: 'contact' };
  if (basePath[0] === 'about') return { locale, type: 'about' };
  if (basePath[0] === 'jurnal-guru') return { locale, type: 'blog' };
  if (basePath[0] === 'game-edukasi-anak') return { locale, type: 'hubKids' };
  if (basePath[0] === 'game-logika') return { locale, type: 'hubLogic' };
  if (basePath[0] === 'game-edukasi-ifp') return { locale, type: 'hubIfp' };
  if (basePath[0] === 'panduan-ifp') return { locale, type: 'guideIfp' };
  if (basePath[0] === 'panduan-anak') return { locale, type: 'guideKids' };

  return { locale, type: 'notfound' };
};

const playSound = (type: 'pop' | 'hover') => {
  try {
    const audio = new Audio(type === 'pop' ? '/pop.mp3' : '/hover.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  } catch (e) {
    console.warn("Audio playback failed", e);
  }
};

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@denipositif", icon: "https://img.icons8.com/fluency/96/tiktok.png" },
  { name: "Facebook", url: "https://web.facebook.com/demian.renovtri.3?rdid=NebkE1tEAlxKk8ZM&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1FwSzyNwVW%2F%3F_rdc%3D1%26_rdr", icon: "https://img.icons8.com/fluency/96/facebook-new.png" },
  { name: "YouTube", url: "https://www.youtube.com/@DeniRanoptri", icon: "https://img.icons8.com/fluency/96/youtube-play.png" }
];

const generalGames: GameConfigWithTags[] = [
`;

let current = fs.readFileSync('App.tsx', 'utf8');
current = current.replace("import React, {", missingTop);
fs.writeFileSync('App.tsx', current);
