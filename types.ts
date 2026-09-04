export interface LocalizedContent {
  title: string;
  subtitle: string;
  description: string;
  subject?: string;
  audience?: string;
  learningFocus?: string;
  howToPlay?: string[];
  educationalBenefits?: string[];
}

export interface GameConfig {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  image?: string | null;
  url?: string;
  variant?: 'default' | 'light';
  isNew?: boolean;
  requiresCamera?: boolean;
  isComingSoon?: boolean;
  description?: string;
  subject?: string;
  audience?: string;
  learningFocus?: string;
  howToPlay?: string[];
  educationalBenefits?: string[];
  ageRange?: string;
  
  // SEO & Future Localization Data Model
  category?: string;
  skills?: string[];
  educationLevel?: string;
  deviceCompatibility?: string[];
  language?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  categoryKeys?: string[];
  en?: LocalizedContent;
}

export interface ImageUploaderProps {
  currentImage: string | null;
  id: string;
}

export interface MenuCardProps {
  locale?: 'id' | 'en';
  config: GameConfig;
  onClick: (id: string) => void;
}

export type GameConfigWithTags = GameConfig & { tags?: string[] };
