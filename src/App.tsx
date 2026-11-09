import React, { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { initHeroAnimations, HeroAnimationCleanup } from './animations/heroAnimation';
import { initProjectsAnimations, ProjectsAnimationCleanup } from './animations/projectsAnimation';
import { initCapabilitiesAnimations, CapabilitiesAnimationCleanup } from './animations/capabilitiesAnimation';
import { initImpactAnimations, ImpactAnimationCleanup } from './animations/impactAnimation';
import { initContactAnimations, ContactAnimationCleanup } from './animations/contactAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { RecognitionSection } from './components/RecognitionSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll engine
  useLenis();

  useEffect(() => {
    let heroAnimation: HeroAnimationCleanup | null = null;
    let projectsAnimation: ProjectsAnimationCleanup | null = null;
    let capabilitiesAnimation: CapabilitiesAnimationCleanup | null = null;
    let impactAnimation: ImpactAnimationCleanup | null = null;
    let contactAnimation: ContactAnimationCleanup | null = null;
    let isCancelled = false;

    // Small delay ensures DOM paint and fonts are ready
    const timer = setTimeout(() => {
      if (!isCancelled) {
        heroAnimation = initHeroAnimations();
        projectsAnimation = initProjectsAnimations();
        capabilitiesAnimation = initCapabilitiesAnimations();
        impactAnimation = initImpactAnimations();
        contactAnimation = initContactAnimations();
      }
    }, 60);

    // Dynamic mouse-following radial spotlight on cards
    const handlePointerMove = (e: PointerEvent) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (
          e.clientX >= rect.left - 60 &&
          e.clientX <= rect.right + 60 &&
          e.clientY >= rect.top - 60 &&
          e.clientY <= rect.bottom + 60
        ) {
          (card as HTMLElement).style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }
      });
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      window.removeEventListener('pointermove', handlePointerMove);
      if (heroAnimation) heroAnimation.revert();
      if (projectsAnimation) projectsAnimation.revert();
      if (capabilitiesAnimation) capabilitiesAnimation.revert();
      if (impactAnimation) impactAnimation.revert();
      if (contactAnimation) contactAnimation.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#EEEEF2] selection:bg-[#3B82F6]/30 selection:text-white">
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#selected-works"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[150] focus:px-4 focus:py-2 focus:bg-[#3B82F6] focus:text-white focus:font-bold focus:rounded-md focus:outline-none"
      >
        Skip to work
      </a>

      {/* Atmospheric Film Grain Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Subtle Ambient Cursor Follower (Desktop only) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Order: Hero -> Selected Work -> Capabilities -> Recognition -> Education -> Contact */}
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <CapabilitiesSection />
        <RecognitionSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
