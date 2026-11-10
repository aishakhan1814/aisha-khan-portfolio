import React, { useEffect, useRef, useState } from 'react';

const heroSculptureImg = '/assets/hero-sculpture.png';

interface HeroArtworkProps {
  className?: string;
}

export const HeroArtwork: React.FC<HeroArtworkProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let animId: number;

    const handlePointerMove = (e: MouseEvent) => {
      // Gentle parallax relative to viewport center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      // Restrained tilt angles (max +/- 4.5 degrees)
      targetRotY = normX * 4.5;
      targetRotX = -normY * 4.5;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const updateParallax = () => {
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      if (visualRef.current) {
        visualRef.current.style.transform = `perspective(1200px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }

      animId = requestAnimationFrame(updateParallax);
    };

    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-artwork-root"
      className={`relative w-full max-w-[620px] aspect-[16/11] flex items-center justify-center select-none pointer-events-none ${className}`}
      aria-label="Abstract Computational Systems Sculpture"
    >
      {/* Dynamic Ambient Backlight Aura — Cobalt & Laser Cyan */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-full bg-gradient-to-tr from-[#1D4ED8]/25 via-[#06B6D4]/20 to-transparent blur-[90px] pointer-events-none transform-gpu animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* Floating 3D Sculpture Stage */}
      <div
        ref={visualRef}
        id="hero-sculpture-3d-stage"
        className="relative z-10 w-full h-full flex items-center justify-center transform-gpu will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Continuous Sinusoidal Levitation Wrapper */}
        <div className="relative w-full h-full flex items-center justify-center hero-floating-drift">
          {/* Luminous Inner Glow Ring behind sculpture */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-radial from-[#38BDF8]/15 via-[#2563EB]/10 to-transparent blur-[50px] pointer-events-none" />

          {/* High-Fidelity 3D Sculpture Artwork */}
          <img
            src={heroSculptureImg}
            alt="Intelligent Systems Topological Sculpture — Flowing computation, security topologies and neural workflows"
            className={`w-full h-full object-contain relative z-10 transition-opacity duration-700 ease-out drop-shadow-[0_0_50px_rgba(6,182,212,0.3)] ${
              imageLoaded ? 'opacity-100' : 'opacity-90'
            }`}
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Subtle Dynamic Caustic Specular Flare */}
          <div
            className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#38BDF8]/20 blur-[40px] pointer-events-none mix-blend-screen"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export const HeroSystemsVisual = HeroArtwork;
