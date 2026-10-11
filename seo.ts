/**
 * Centralized SEO Metadata Engine for PapanInteraktif Global SEO
 *
 * Provides a single deterministic API (applySEOMetadata) to set and reconcile
 * document title, language, canonical URL, hreflang alternate links,
 * OpenGraph, Twitter cards, robots tags, and JSON-LD structured data.
 */

export interface HreflangEntry {
  lang: string;
  href: string;
}

export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
  siteName?: string;
  locale?: string;
  [key: string]: string | undefined;
}

export interface TwitterMetadata {
  card?: string;
  title?: string;
  description?: string;
  image?: string;
  [key: string]: string | undefined;
}

export interface RobotsOptions {
  noindex?: boolean;
  nofollow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
}

export type RobotsMetadata = string | RobotsOptions;

export interface SEOMetadata {
  lang?: string;
  title?: string;
  description?: string;
  canonical?: string;
  hreflangs?: HreflangEntry[];
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  robots?: RobotsMetadata;
  jsonLd?: Record<string, any> | Array<Record<string, any>> | string;
}

const DEFAULT_LANG = 'id';

/**
 * Applies a full or partial SEOMetadata payload to the current document.
 * Purges and reconciles engine-managed tags to prevent tag leaks or stale metadata across SPA transitions.
 */
export const applySEOMetadata = (metadata: SEOMetadata): void => {
  if (typeof document === 'undefined') return;

  // 1. HTML Document Language
  setHtmlLang(metadata.lang || DEFAULT_LANG);

  // 2. Document Title
  if (metadata.title !== undefined) {
    document.title = metadata.title;
  }

  // 3. Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (metadata.description !== undefined && metadata.description !== null) {
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', metadata.description);
    descMeta.setAttribute('data-seo-engine', 'description');
  } else if (descMeta && descMeta.getAttribute('data-seo-engine') === 'description') {
    descMeta.remove();
  }

  // 4. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (metadata.canonical !== undefined && metadata.canonical !== null) {
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', metadata.canonical);
    canonicalLink.setAttribute('data-seo-engine', 'canonical');
  } else if (canonicalLink && canonicalLink.getAttribute('data-seo-engine') === 'canonical') {
    canonicalLink.remove();
  }

  // 5. Hreflang Alternate Links
  // Always clear ALL existing hreflang tags to prevent stale cross-route leaks
  clearHreflangs();
  if (Array.isArray(metadata.hreflangs) && metadata.hreflangs.length > 0) {
    metadata.hreflangs.forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      link.setAttribute('data-seo-engine', 'hreflang');
      document.head.appendChild(link);
    });
  }

  // 6. OpenGraph Meta Tags
  // Clean previously managed engine OG tags
  document.querySelectorAll('meta[data-seo-engine="og"]').forEach(el => el.remove());
  if (metadata.openGraph) {
    const ogMap: Record<string, string | undefined> = {
      'og:title': metadata.openGraph.title,
      'og:description': metadata.openGraph.description,
      'og:type': metadata.openGraph.type,
      'og:url': metadata.openGraph.url,
      'og:image': metadata.openGraph.image,
      'og:site_name': metadata.openGraph.siteName,
      'og:locale': metadata.openGraph.locale,
    };

    // Add any extra custom properties in openGraph
    Object.keys(metadata.openGraph).forEach(key => {
      if (['title', 'description', 'type', 'url', 'image', 'siteName', 'locale'].includes(key)) return;
      const propKey = key.startsWith('og:') ? key : `og:${key}`;
      ogMap[propKey] = metadata.openGraph![key];
    });

    Object.entries(ogMap).forEach(([prop, val]) => {
      if (val !== undefined && val !== null) {
        let ogMeta = document.querySelector(`meta[property="${prop}"]`);
        if (!ogMeta) {
          ogMeta = document.createElement('meta');
          ogMeta.setAttribute('property', prop);
          document.head.appendChild(ogMeta);
        }
        ogMeta.setAttribute('content', val);
        ogMeta.setAttribute('data-seo-engine', 'og');
      }
    });
  }

  // 7. Twitter Meta Tags
  // Clean previously managed engine Twitter tags
  document.querySelectorAll('meta[data-seo-engine="twitter"]').forEach(el => el.remove());
  if (metadata.twitter) {
    const twMap: Record<string, string | undefined> = {
      'twitter:card': metadata.twitter.card,
      'twitter:title': metadata.twitter.title,
      'twitter:description': metadata.twitter.description,
      'twitter:image': metadata.twitter.image,
    };

    // Add any extra custom properties in twitter
    Object.keys(metadata.twitter).forEach(key => {
      if (['card', 'title', 'description', 'image'].includes(key)) return;
      const nameKey = key.startsWith('twitter:') ? key : `twitter:${key}`;
      twMap[nameKey] = metadata.twitter![key];
    });

    Object.entries(twMap).forEach(([name, val]) => {
      if (val !== undefined && val !== null) {
        let twMeta = document.querySelector(`meta[name="${name}"]`);
        if (!twMeta) {
          twMeta = document.createElement('meta');
          twMeta.setAttribute('name', name);
          document.head.appendChild(twMeta);
        }
        twMeta.setAttribute('content', val);
        twMeta.setAttribute('data-seo-engine', 'twitter');
      }
    });
  }

  // 8. Robots Meta Tag
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (metadata.robots !== undefined && metadata.robots !== null) {
    let robotsStr = '';
    if (typeof metadata.robots === 'string') {
      robotsStr = metadata.robots;
    } else {
      const parts: string[] = [];
      if (metadata.robots.noindex) parts.push('noindex');
      else parts.push('index');
      if (metadata.robots.nofollow) parts.push('nofollow');
      else parts.push('follow');
      if (metadata.robots.noarchive) parts.push('noarchive');
      if (metadata.robots.nosnippet) parts.push('nosnippet');
      robotsStr = parts.join(', ');
    }

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsStr);
    robotsMeta.setAttribute('data-seo-engine', 'robots');
  } else if (robotsMeta && robotsMeta.getAttribute('data-seo-engine') === 'robots') {
    robotsMeta.remove();
  }

  // 9. JSON-LD Structured Data
  document.querySelectorAll('script[type="application/ld+json"][data-seo-engine="jsonld"]').forEach(el => el.remove());
  if (metadata.jsonLd !== undefined && metadata.jsonLd !== null) {
    const jsonLdScript = document.createElement('script');
    jsonLdScript.setAttribute('type', 'application/ld+json');
    jsonLdScript.setAttribute('data-seo-engine', 'jsonld');
    jsonLdScript.textContent = typeof metadata.jsonLd === 'string'
      ? metadata.jsonLd
      : JSON.stringify(metadata.jsonLd, null, 2);
    document.head.appendChild(jsonLdScript);
  }
};

/**
 * Removes all engine-managed SEO metadata tags from the document head
 * and resets html language to default.
 */
export const clearEngineSEOMetadata = (): void => {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('[data-seo-engine]').forEach(el => el.remove());
  clearHreflangs();
  setHtmlLang(DEFAULT_LANG);
};

// ==========================================
// LEGACY HELPER EXPORTS (FOR BACKWARD COMPATIBILITY)
// ==========================================

export const setMeta = (name: string, content: string, isProperty = false) => {
  if (typeof document === 'undefined') return;
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export const updateHreflang = (lang: string, url: string) => {
  if (typeof document === 'undefined') return;
  let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', lang);
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

export const setCanonical = (url: string) => {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

export const setHtmlLang = (lang: string) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
};

export const clearHreflangs = () => {
  if (typeof document === 'undefined') return;
  const links = document.querySelectorAll('link[rel="alternate"][hreflang]');
  links.forEach(link => link.remove());
};

export const clearCanonical = () => {
  // Retained for backward compatibility
};
