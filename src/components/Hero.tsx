import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { HeroSystemsVisual } from './HeroSystemsVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#06080F] pt-24 md:pt-28 pb-16 md:pb-24"
      aria-label="Aisha Khan — Software Engineer"
    >
      {/* Refined Ambient Lighting — Blue & Deep Navy Only */}
      <div
        id="hero-ambient-light-1"
        className="absolute top-1/4 right-[5%] w-[520px] h-[520px] rounded-full bg-[#2563EB]/[0.08] blur-[160px] pointer-events-none"
      />
      <div
        id="hero-ambient-light-2"
        className="absolute bottom-10 left-[-5%] w-[480px] h-[480px] rounded-full bg-[#1D4ED8]/[0.06] blur-[160px] pointer-events-none"
      />

      {/* Hero Systems Architecture Nexus (Right-Flank Interactive Visual) */}
      <div
        id="hero-visual-wrapper"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:right-[1%] xl:right-[4%] pointer-events-none z-10 opacity-90"
      >
        <HeroSystemsVisual />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col justify-center">
        
        {/* Eyebrow: Name & Professional Specialization */}
        <div id="hero-eyebrow" className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#0B0F19]/90 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="font-mono text-xs text-white font-semibold tracking-wide">
              Aisha Khan
            </span>
            <span className="text-[#64748B] hidden sm:inline">/</span>
            <span className="font-mono text-[11px] text-[#93C5FD] tracking-wider hidden sm:inline uppercase">
              Software Engineering · Intelligent Systems · Machine Learning
            </span>
          </div>
          {/* Mobile specialization label */}
          <div className="sm:hidden mt-2">
            <span className="font-mono text-[10px] text-[#93C5FD] tracking-wider block">
              Software Engineering · Intelligent Systems · Machine Learning
            </span>
          </div>
        </div>

        {/* Headline — High Contrast, Pure Blue & White */}
        <div id="hero-headline-wrapper" className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.12]">
            Engineering across{' '}
            <span className="text-[#60A5FA]">cryptographic risk</span>,{' '}
            <span className="text-white">intelligent care logistics</span>, and{' '}
            <span className="text-[#3B82F6]">security knowledge systems</span>.
          </h1>
        </div>

        {/* Narrative Subtext — Sharp High-Contrast Slate */}
        <div id="hero-description" className="mt-6 md:mt-8 max-w-2xl">
          <p className="text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed">
            I build deterministic software architectures and applied machine learning pipelines for high-consequence operational domains. Focus areas include post-quantum migration readiness, semantic triage, and graph-based threat deduction.
          </p>

          {/* Quick Pillars */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
              SENTRIQ (PQC &amp; CBOM)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-white">
              <Activity className="w-3.5 h-3.5 text-[#60A5FA]" />
              RakshAI (ML Triage)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-white">
              <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
              Cyber Ontology (OWL/RDF)
            </span>
          </div>
        </div>

        {/* Prominent, High-Contrast CTAs */}
        <div
          id="hero-cta"
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 relative z-30"
        >
          {/* Primary CTA */}
          <a
            href="#selected-works"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#2563EB] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:bg-[#3B82F6] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <span>Explore Flagship Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 text-white" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:border-white/40 text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#93C5FD]" />
          </a>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-80 pointer-events-none select-none"
      >
        <span className="font-mono text-[9px] tracking-widest text-[#94A3B8] uppercase">
          Scroll to examine architectures
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#3B82F6]" />
        </div>
      </div>

    </section>
  );
};
