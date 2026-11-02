import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { OrbitalVisual } from './OrbitalVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080B12]"
      aria-label="Introduction & Overview"
    >
      {/* Subtle Atmospheric Lighting */}
      <div
        id="hero-ambient-light-1"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#7C9EFF]/[0.04] blur-[140px] pointer-events-none"
      />
      <div
        id="hero-ambient-light-2"
        className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-[#1E3A8A]/[0.05] blur-[140px] pointer-events-none"
      />

      {/* Hero Visual Layer (Orbital Geometry) */}
      <div
        id="hero-visual-wrapper"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:right-[3%] xl:right-[6%] pointer-events-none z-10 opacity-70"
      >
        <OrbitalVisual />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center">
        
        {/* Eyebrow */}
        <div id="hero-eyebrow" className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#0D121F]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
            <span className="font-mono text-[11px] text-[#A5BDFF] tracking-wide">
              Aisha Khan · Portfolio
            </span>
          </div>
        </div>

        {/* Headline — Restrained, Sharp, Editorial */}
        <div id="hero-headline-wrapper" className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EEEEF2] leading-[1.05]">
            I build systems that{' '}
            <span className="text-[#7C9EFF]">perform under pressure</span>.
          </h1>
        </div>

        {/* Positioning Statement */}
        <div id="hero-description" className="mt-6 md:mt-8 max-w-xl">
          <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
            Software Engineer specializing in intelligent systems, machine learning pipelines, and cryptographic readiness. Focused on building deterministic software that solves real-world operational problems.
          </p>
        </div>

        {/* CTAs */}
        <div
          id="hero-cta"
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA — Direct Access to Selected Work */}
          <a
            href="#selected-works"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#7C9EFF] text-[#080B12] font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:bg-[#9cb6ff] hover:shadow-[0_0_24px_rgba(124,158,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
          >
            <span>Featured Projects</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/10 bg-white/[0.02] text-[#EEEEF2] hover:bg-white/[0.06] hover:border-white/20 text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60 pointer-events-none select-none"
      >
        <span className="font-mono text-[9px] tracking-widest text-[#64748B] uppercase">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#7C9EFF]" />
        </div>
      </div>

    </section>
  );
};
