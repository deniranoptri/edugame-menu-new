import React, { useEffect, useRef } from 'react';

export const AdSenseDisplay: React.FC = () => {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (adRef.current && !initialized.current) {
      initialized.current = true;
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense display error', e);
      }
    }
  }, []);

  return (
    <div className="w-full my-8 overflow-hidden flex justify-center items-center min-h-[100px]">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-8570354149283385"
        data-ad-slot="2621366810"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
