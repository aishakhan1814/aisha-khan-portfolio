import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContactAnimationCleanup {
  revert: () => void;
}

export function initContactAnimations(): ContactAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(['#contact-header', '#contact'], { opacity: 1, y: 0 });
    return { revert: () => {} };
  }

  mm.add('(min-width: 1024px)', () => {
    gsap.fromTo(
      '#contact-header',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '#contact-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  });

  mm.add('(max-width: 1023px)', () => {
    gsap.fromTo(
      '#contact-header',
      { opacity: 0, y: 25 },
      {
        scrollTrigger: {
          trigger: '#contact-header',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
