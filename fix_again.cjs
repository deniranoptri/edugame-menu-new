const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const replacement = `import React, { useState, useEffect, Suspense, lazy } from 'react';
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

const generalGames: GameConfigWithTags[] = [`;

// Find everything from 'import React' up to 'const generalGames: GameConfigWithTags[] = [' and replace it.
content = content.replace(/import React, \{[\s\S]*?const generalGames: GameConfigWithTags\[\] = \[/, replacement);
fs.writeFileSync('App.tsx', content);
