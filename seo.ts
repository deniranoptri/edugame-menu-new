export const setMeta = (name: string, content: string, isProperty = false) => {
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
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

export const setHtmlLang = (lang: string) => {
  document.documentElement.lang = lang;
};

export const clearHreflangs = () => {
  const links = document.querySelectorAll('link[rel="alternate"][hreflang]');
  links.forEach(link => link.remove());
};

export const clearCanonical = () => {
    // Usually we don't want to clear canonical, we just want to update it.
    // If a route doesn't specify one, we probably want to fall back to window.location.href or root.
    // But setting it explicitly everywhere is safer.
}
