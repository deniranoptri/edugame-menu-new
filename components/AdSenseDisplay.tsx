import React, { useEffect, useRef } from 'react';

export const AdSenseDisplay: React.FC = () => {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    let observer: ResizeObserver | null = null;
    let rafId: number | null = null;
    const insElement = adRef.current;

    const checkAndInitialize = () => {
      if (initialized.current || !insElement) return;

      // Ensure it is in the DOM
      if (!document.body.contains(insElement)) return;

      // Check computed styles
      const style = window.getComputedStyle(insElement);
      if (style.display === 'none' || style.visibility === 'hidden') return;

      // Check widths
      const rect = insElement.getBoundingClientRect();
      const parent = insElement.parentElement;
      const parentWidth = parent ? parent.getBoundingClientRect().width : 0;

      if (rect.width > 0 && insElement.offsetWidth > 0 && parentWidth > 0) {
        // Double check AdSense's own status
        if (insElement.getAttribute('data-adsbygoogle-status') === 'done') {
          initialized.current = true;
          cleanup();
          return;
        }

        initialized.current = true;
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (e) {
          console.error('AdSense display error:', e);
        }
        cleanup();
      }
    };

    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    if (window.ResizeObserver && insElement) {
      observer = new ResizeObserver(() => {
        if (!initialized.current) {
          if (rafId !== null) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(checkAndInitialize);
        }
      });
      observer.observe(insElement);
      if (insElement.parentElement) {
        observer.observe(insElement.parentElement);
      }
    }

    // Initial check
    rafId = requestAnimationFrame(checkAndInitialize);

    return () => {
      cleanup();
    };
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
