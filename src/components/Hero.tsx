import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OrbitalVisual } from './OrbitalVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080B12]"
      aria-label="Introduction & Hero"
    >
      {/* Dynamic Background Atmospheric Lighting */}
      <div
        id="hero-ambient-light-1"
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-[#7C9EFF]/[0.07] blur-[140px] pointer-events-none transform-gpu"
      />
      <div
        id="hero-ambient-light-2"
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#1E3A8A]/[0.08] blur-[150px] pointer-events-none transform-gpu"
      />

      {/* Hero Visual Layer (Orbital Geometry in 3D Space) */}
      <div
        id="hero-visual-wrapper"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:right-[4%] xl:right-[8%] pointer-events-none z-10 opacity-0"
      >
        <OrbitalVisual />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-12 pt-28 pb-20 md:py-36 flex flex-col justify-center min-h-screen">
        
        {/* Eyebrow / Metadata */}
        <div id="hero-eyebrow" className="mb-6 md:mb-8 opacity-0">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#7C9EFF]/20 bg-[#080B12]/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF] animate-pulse" />
            <span className="mono-label text-[10px] md:text-xs text-[#A5BDFF] font-medium tracking-widest">
              HELLO, I'M AISHA KHAN
            </span>
            <span className="text-white/20 hidden sm:inline">/</span>
            <span className="mono-label text-[10px] md:text-xs text-[#64748B] hidden sm:inline tracking-wider">
              AI &amp; INTELLIGENT SYSTEMS
            </span>
          </div>
          <div className="sm:hidden mt-2 ml-1">
            <span className="mono-label text-[9px] text-[#64748B] tracking-wider">
              SOFTWARE ENGINEER / AI &amp; INTELLIGENT SYSTEMS
            </span>
          </div>
        </div>

        {/* Main Oversized Headline (Structured for line-by-line GSAP reveal) */}
        <div id="hero-headline-wrapper" className="max-w-4xl relative">
          <div id="hero-headline-inner">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tightest leading-[0.94] text-[#EEEEF2] select-none">
              
              {/* Line 1 */}
              <div className="headline-line-wrapper overflow-hidden py-1">
                <span className="headline-line block transform-gpu">
                  I BUILD
                </span>
              </div>

              {/* Line 2 with Electric Blue Highlight */}
              <div className="headline-line-wrapper overflow-hidden py-1">
                <span className="headline-line block text-[#7C9EFF] text-electric-glow transform-gpu">
                  INTELLIGENT
                </span>
              </div>

              {/* Line 3 */}
              <div className="headline-line-wrapper overflow-hidden py-1">
                <span className="headline-line block transform-gpu text-white/95">
                  SYSTEMS<span className="text-[#7C9EFF]">.</span>
                </span>
              </div>

            </h1>
          </div>
        </div>

        {/* Supporting Description */}
        <div id="hero-description" className="mt-8 md:mt-10 max-w-xl opacity-0">
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-light leading-relaxed">
            I engineer software, explore intelligent systems and turn complex ideas into products that work.
          </p>
        </div>

        {/* CTA Actions */}
        <div
          id="hero-cta"
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 opacity-0"
        >
          {/* Primary CTA - Smooth scrolls to Selected Works */}
          <a
            href="#selected-works"
            data-magnetic
            data-magnetic-strength="0.35"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#7C9EFF]/10 border border-[#7C9EFF]/40 text-[#EEEEF2] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#7C9EFF] hover:text-[#080B12] hover:shadow-[0_0_30px_rgba(124,158,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#7C9EFF] group-hover:text-[#080B12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            {/* Ambient internal sheen */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            data-magnetic
            data-magnetic-strength="0.35"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 bg-transparent text-[#94A3B8] hover:text-[#EEEEF2] hover:border-white/30 text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>Let's Connect</span>
          </a>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 opacity-0 pointer-events-none select-none"
      >
        <span className="mono-label text-[9px] tracking-widest text-[#64748B]">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border border-[#7C9EFF]/30 flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-[#7C9EFF] animate-bounce shadow-[0_0_8px_#7C9EFF]" />
        </div>
      </div>

    </section>
  );
};
