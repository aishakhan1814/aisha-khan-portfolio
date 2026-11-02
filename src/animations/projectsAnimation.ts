import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ProjectsAnimationCleanup {
  revert: () => void;
}

export function initProjectsAnimations(): ProjectsAnimationCleanup {
  const mm = gsap.matchMedia();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set(
      [
        '#projects-header',
        '#project-sentriq',
        '#project-rakshai',
        '#project-ontology',
      ],
      { opacity: 1, y: 0, x: 0, scale: 1 }
    );
    return { revert: () => {} };
  }

  // Desktop & Laptop Animation Architecture (min-width: 1024px)
  mm.add('(min-width: 1024px)', () => {
    // 1. Projects Section Header Reveal
    gsap.fromTo(
      '#projects-header',
      { opacity: 0, y: 35 },
      {
        scrollTrigger: {
          trigger: '#projects-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 2. Project 01: SENTRIQ
    gsap.fromTo(
      '#project-sentriq',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-sentriq',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 3. Project 02: RakshAI
    gsap.fromTo(
      '#project-rakshai',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-rakshai',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );

    // 4. Project 03: Ontology
    gsap.fromTo(
      '#project-ontology',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '#project-ontology',
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

  // Mobile & Tablet Breakpoints (max-width: 1023px)
  mm.add('(max-width: 1023px)', () => {
    ['#projects-header', '#project-sentriq', '#project-rakshai', '#project-ontology'].forEach((id) => {
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
