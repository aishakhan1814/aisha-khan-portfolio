import React, { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { initHeroAnimations, HeroAnimationCleanup } from './animations/heroAnimation';
import { initNarrativeAnimations, NarrativeAnimationCleanup } from './animations/narrativeAnimation';
import { initProjectsAnimations, ProjectsAnimationCleanup } from './animations/projectsAnimation';
import { initCapabilitiesAnimations, CapabilitiesAnimationCleanup } from './animations/capabilitiesAnimation';
import { initImpactAnimations, ImpactAnimationCleanup } from './animations/impactAnimation';
import { initContactAnimations, ContactAnimationCleanup } from './animations/contactAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NarrativeSection } from './components/NarrativeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ImpactSection } from './components/ImpactSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll engine & GSAP ticker synchronization
  useLenis();

  useEffect(() => {
    let heroAnimation: HeroAnimationCleanup | null = null;
    let narrativeAnimation: NarrativeAnimationCleanup | null = null;
    let projectsAnimation: ProjectsAnimationCleanup | null = null;
    let capabilitiesAnimation: CapabilitiesAnimationCleanup | null = null;
    let impactAnimation: ImpactAnimationCleanup | null = null;
    let contactAnimation: ContactAnimationCleanup | null = null;
    let isCancelled = false;

    // Small delay ensures DOM paint and fonts are ready before GSAP layout measurements
    const timer = setTimeout(() => {
      if (!isCancelled) {
        heroAnimation = initHeroAnimations();
        narrativeAnimation = initNarrativeAnimations();
        projectsAnimation = initProjectsAnimations();
        capabilitiesAnimation = initCapabilitiesAnimations();
        impactAnimation = initImpactAnimations();
        contactAnimation = initContactAnimations();
      }
    }, 60);

    // Guaranteed cleanup on unmount or hot-reload
    return () => {
      isCancelled = true;
      clearTimeout(timer);
      if (heroAnimation) {
        heroAnimation.revert();
      }
      if (narrativeAnimation) {
        narrativeAnimation.revert();
      }
      if (projectsAnimation) {
        projectsAnimation.revert();
      }
      if (capabilitiesAnimation) {
        capabilitiesAnimation.revert();
      }
      if (impactAnimation) {
        impactAnimation.revert();
      }
      if (contactAnimation) {
        contactAnimation.revert();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080B12] text-[#EEEEF2] selection:bg-[#7C9EFF]/30 selection:text-white">
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#hero-section"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[150] focus:px-4 focus:py-2 focus:bg-[#7C9EFF] focus:text-[#080B12] focus:font-bold focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Atmospheric Film Grain Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Interactive Magnetic Cursor (Desktop Fine Pointers) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Experience View */}
      <main id="main-content">
        <Hero />
        <NarrativeSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ImpactSection />
        <ContactSection />
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
