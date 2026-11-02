import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ImpactAnimationCleanup {
  revert: () => void;
}

export function initImpactAnimations(): ImpactAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(['#recognition-header', '#education-header'], { opacity: 1, y: 0 });
    return { revert: () => {} };
  }

  mm.add('(min-width: 1024px)', () => {
    gsap.fromTo(
      '#recognition-header',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '#recognition-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      '#education-header',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '#education-header',
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
    ['#recognition-header', '#education-header'].forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: id,
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
  });

  return {
    revert: () => {
      mm.revert();
    },
  };
}
