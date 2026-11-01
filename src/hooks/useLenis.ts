import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Single Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // 1. Synchronize Lenis scroll updates with ScrollTrigger
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', handleScroll);

    // 2. Use GSAP ticker to drive Lenis RAF (convert seconds to milliseconds)
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);

    // 3. Disable lag smoothing to prevent jumps during intensive frames
    gsap.ticker.lagSmoothing(0);

    // Ensure ScrollTrigger refreshes after Lenis initializes
    ScrollTrigger.refresh();

    // Support smooth scrolling for in-page anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element as HTMLElement, {
            offset: -80,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Custom event handlers to coordinate modal/overlay states with smooth scrolling
    const handleLenisStop = () => {
      lenis.stop();
    };
    const handleLenisStart = () => {
      lenis.start();
    };
    window.addEventListener('lenis:stop', handleLenisStop);
    window.addEventListener('lenis:start', handleLenisStart);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('lenis:stop', handleLenisStop);
      window.removeEventListener('lenis:start', handleLenisStart);
      document.removeEventListener('click', handleAnchorClick);
      lenis.off('scroll', handleScroll);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
