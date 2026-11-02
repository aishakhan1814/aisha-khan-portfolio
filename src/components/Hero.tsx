import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { HeroSystemsVisual } from './HeroSystemsVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07090E]"
      aria-label="Aisha Khan — Software Engineer"
    >
      {/* Refined Ambient Lighting */}
      <div
        id="hero-ambient-light-1"
        className="absolute top-1/4 right-[5%] w-[480px] h-[480px] rounded-full bg-[#7C9EFF]/[0.05] blur-[150px] pointer-events-none"
      />
      <div
        id="hero-ambient-light-2"
        className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] rounded-full bg-[#34D399]/[0.035] blur-[150px] pointer-events-none"
      />

      {/* Hero Systems Architecture Nexus (Right-Flank Interactive Visual) */}
      <div
        id="hero-visual-wrapper"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:right-[2%] xl:right-[5%] pointer-events-none z-10 opacity-75"
      >
        <HeroSystemsVisual />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center">
        
        {/* Eyebrow: Name & Professional Specialization */}
        <div id="hero-eyebrow" className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#0D121F]/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#7C9EFF] animate-pulse" />
            <span className="font-mono text-xs text-[#EEEEF2] font-semibold tracking-wide">
              Aisha Khan
            </span>
            <span className="text-[#64748B] hidden sm:inline">/</span>
            <span className="font-mono text-[11px] text-[#A5BDFF] tracking-wider hidden sm:inline uppercase">
              Software Engineering · Intelligent Systems · Machine Learning
            </span>
          </div>
          {/* Mobile specialization label */}
          <div className="sm:hidden mt-2">
            <span className="font-mono text-[10px] text-[#A5BDFF] tracking-wider block">
              Software Engineering · Intelligent Systems · Machine Learning
            </span>
          </div>
        </div>

        {/* Headline — Authentic Original Positioning */}
        <div id="hero-headline-wrapper" className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EEEEF2] leading-[1.08]">
            Engineering across{' '}
            <span className="text-[#7C9EFF]">cryptographic risk</span>,{' '}
            <span className="text-[#34D399]">intelligent care logistics</span>, and{' '}
            <span className="text-[#A78BFA]">security knowledge systems</span>.
          </h1>
        </div>

        {/* Narrative Subtext */}
        <div id="hero-description" className="mt-6 md:mt-8 max-w-2xl">
          <p className="text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
            I build deterministic software architectures and applied machine learning pipelines for high-consequence operational domains. Focus areas include post-quantum migration readiness, semantic triage, and graph-based threat deduction.
          </p>

          {/* Quick Pillars */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5 text-[#A5BDFF]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7C9EFF]" />
              SENTRIQ (PQC &amp; CBOM)
            </span>
            <span className="text-white/10">•</span>
            <span className="flex items-center gap-1.5 text-[#A5BDFF]">
              <Activity className="w-3.5 h-3.5 text-[#34D399]" />
              RakshAI (ML Triage)
            </span>
            <span className="text-white/10">•</span>
            <span className="flex items-center gap-1.5 text-[#A5BDFF]">
              <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
              Cyber Ontology (OWL/RDF)
            </span>
          </div>
        </div>

        {/* Prominent CTAs */}
        <div
          id="hero-cta"
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#selected-works"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#7C9EFF] text-[#080B12] font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:bg-[#9cb6ff] hover:shadow-[0_0_28px_rgba(124,158,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
          >
            <span>Explore Flagship Projects</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-[#EEEEF2] hover:bg-white/[0.08] hover:border-white/20 text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
          </a>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60 pointer-events-none select-none"
      >
        <span className="font-mono text-[9px] tracking-widest text-[#64748B] uppercase">
          Scroll to examine architectures
        </span>
        <div className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#7C9EFF]" />
        </div>
      </div>

    </section>
  );
};
