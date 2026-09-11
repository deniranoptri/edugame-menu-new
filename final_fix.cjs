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

type GameMode = 'general' | 'kids';

const SIDEBAR_IMAGE_URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYACaf1j7wDRqM1azWCF4O9aZEUDo_k7UPVv1qm4MQ9OPTqkX3S-9qmFBBCFVagHwJkWtpbU3LQrUmpLWUgT7qxYJJZr6XLpzH6u2Aiq0l72Vpc_Zdfj2ZgMvXu3n7UrWsoHK8W66ccg33oAEx5eQgDhHyzfoLakBj8lRFliltrXVwzBownSu9Ys_k7M/s1200/Barcode%20Edupid.png';

const GaleriAksi = lazy(() => import('./components/GaleriAksi'));

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@denipositif", icon: "https://img.icons8.com/fluency/96/tiktok.png" },
  { name: "Facebook", url: "https://web.facebook.com/demian.renovtri.3?rdid=NebkE1tEAlxKk8ZM&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1FwSzyNwVW%2F%3F_rdc%3D1%26_rdr", icon: "https://img.icons8.com/fluency/96/facebook-new.png" },
  { name: "YouTube", url: "https://www.youtube.com/@DeniRanoptri", icon: "https://img.icons8.com/fluency/96/youtube-play.png" }
];

const generalGames: GameConfigWithTags[] = [`;

let current = fs.readFileSync('App.tsx', 'utf8');
current = current.replace(/import React, \{[\s\S]*?const generalGames: GameConfigWithTags\[\] = \[/, missingTop);
fs.writeFileSync('App.tsx', current);
