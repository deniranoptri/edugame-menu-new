import React, { useEffect, useRef } from 'react';

export const AdSenseInArticle: React.FC = () => {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (adRef.current && !initialized.current) {
      initialized.current = true;
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense in-article error', e);
      }
    }
  }, []);

  return (
    <div className="w-full my-8 min-h-[250px] flex items-center justify-center">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8570354149283385"
        data-ad-slot="3777546131"
      ></ins>
    </div>
  );
};
