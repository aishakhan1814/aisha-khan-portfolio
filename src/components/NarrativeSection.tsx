import React from 'react';
import { Cpu, GitCommit, Layers, Compass } from 'lucide-react';

export const NarrativeSection: React.FC = () => {
  const mindsetTenets = [
    {
      num: '01',
      tag: 'PROBLEM-FIRST RIGOR',
      statement: 'I care about understanding problems before choosing technologies.',
      elaboration:
        'Architecture should be shaped by real domain constraints, data flows, and failure modes — never by speculative novelty or tool-driven bias.',
      icon: Compass,
    },
    {
      num: '02',
      tag: 'END-TO-END OWNERSHIP',
      statement:
        'I enjoy taking ownership of systems, from architecture and implementation to testing and deployment.',
      elaboration:
        'Software engineering is not finished when code is written; it is proven when systems run reliably in production and can be maintained effortlessly.',
      icon: Layers,
    },
    {
      num: '03',
      tag: 'TRANSPARENT REASONING',
      statement: 'I value engineering decisions that are explainable, reliable and useful.',
      elaboration:
        'Clarity in design reduces cognitive overhead for teams and ensures every architectural tradeoff has an empirical justification.',
      icon: GitCommit,
    },
    {
      num: '04',
      tag: 'GROUNDED INTELLIGENCE',
      statement:
        'I see AI as a tool for solving meaningful problems, not as a substitute for sound engineering.',
      elaboration:
        'Intelligent models require deterministic foundations: reliable data pipelines, strict verification, and graceful fallbacks when uncertainty strikes.',
      icon: Cpu,
    },
  ];

  const workflowStages = [
    {
      step: '01',
      name: 'UNDERSTAND',
      detail:
        'Deconstructing domain requirements, isolating boundary constraints, and formulating crisp problem definitions before touching code.',
    },
    {
      step: '02',
      name: 'DESIGN',
      detail:
        'Architecting modular interface contracts, data schemas, state representations, and predictable component topologies.',
    },
    {
      step: '03',
      name: 'BUILD',
      detail:
        'Crafting resilient, clean implementations with strong type safety, structured concurrency, and maintainable abstractions.',
    },
    {
      step: '04',
      name: 'VALIDATE',
      detail:
        'Testing edge cases, measuring performance latencies, running integration proofs, and evaluating empirical correctness.',
    },
    {
      step: '05',
      name: 'IMPROVE',
      detail:
        'Profiling computational hotspots, refining interfaces, and executing targeted iterations for enduring long-term stability.',
    },
  ];

  return (
    <article
      id="approach-section"
      className="relative w-full bg-[#080B12] text-[#EEEEF2] z-20 overflow-hidden"
      aria-label="Personal Narrative & Engineering Identity"
    >
      {/* Background Atmospheric Lighting */}
      <div
        id="narrative-glow-1"
        className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#7C9EFF]/[0.035] blur-[160px] pointer-events-none"
      />
      <div
        id="narrative-glow-2"
        className="absolute top-[55%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#1E3A8A]/[0.05] blur-[170px] pointer-events-none"
      />

      {/* Top Transition Border from Hero */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7C9EFF]/25 to-transparent" />

      {/* =========================================================================
          PART 1: OPENING STATEMENT & CENTRAL POSITIONING
          ========================================================================= */}
      <section className="pt-28 md:pt-40 pb-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Section Identifier */}
        <div id="approach-label" className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-8 h-[1px] bg-[#7C9EFF]/60" />
          <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-widest">
            01 / THE APPROACH
          </span>
          <span className="mono-label text-[10px] text-[#64748B] hidden sm:inline ml-4 pl-4 border-l border-white/10">
            ENGINEERING PHILOSOPHY &amp; PERSPECTIVE
          </span>
        </div>

        {/* Headline */}
        <div id="approach-headline" className="max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[0.95] text-[#EEEEF2]">
            <span className="block opacity-90">GOOD SOFTWARE</span>
            <span className="block text-white/95">STARTS WITH</span>
            <span className="block text-[#7C9EFF] text-electric-glow">GOOD THINKING.</span>
          </h2>
        </div>

        {/* Supporting Thought */}
        <div id="approach-subtext" className="mt-8 md:mt-12 max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl text-[#94A3B8] font-light leading-relaxed">
            I enjoy working at the intersection of software engineering, artificial intelligence and problem-solving — where complex ideas become systems people can actually use.
          </p>
        </div>

        {/* Central Positioning Pull-Quote */}
        <div
          id="central-positioning-box"
          className="mt-14 md:mt-20 p-8 sm:p-10 md:p-12 rounded-2xl border border-[#7C9EFF]/20 bg-[#0D121F]/50 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#7C9EFF] to-[#7C9EFF]/20" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
            <span className="mono-label text-[10px] sm:text-xs text-[#A5BDFF] tracking-widest">
              CORE POSITIONING STATEMENT
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-[#EEEEF2] font-normal leading-snug tracking-tight">
            “I am a software engineer interested in building intelligent systems, engineering reliable software and turning complex technical ideas into useful products.”
          </p>
        </div>

      </section>

      {/* =========================================================================
          PART 2: PERSONAL INTRODUCTION (THE ENGINEER'S VOICE)
          ========================================================================= */}
      <section
        id="personal-intro-section"
        className="py-20 md:py-32 px-6 sm:px-8 md:px-12 border-t border-white/[0.06] max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Metadata & Technical Telemetry */}
          <div id="intro-sidebar" className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
              <span className="mono-label text-[10px] text-[#7C9EFF]">01.1 // BACKGROUND</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
              Computer Science &amp; Intelligent Applications.
            </h3>

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="flex items-baseline justify-between text-xs">
                <span className="mono-label text-[10px] text-[#64748B]">DISCIPLINE</span>
                <span className="text-[#A5BDFF] font-mono text-[11px]">CS &amp; Engineering</span>
              </div>
              <div className="flex items-baseline justify-between text-xs">
                <span className="mono-label text-[10px] text-[#64748B]">SPECIALIZATION</span>
                <span className="text-[#A5BDFF] font-mono text-[11px]">AI &amp; Machine Learning</span>
              </div>
              <div className="flex items-baseline justify-between text-xs">
                <span className="mono-label text-[10px] text-[#64748B]">CORE FOCUS</span>
                <span className="text-[#EEEEF2] font-mono text-[11px]">Systems, ML &amp; Backend</span>
              </div>
              <div className="flex items-baseline justify-between text-xs">
                <span className="mono-label text-[10px] text-[#64748B]">PARADIGM</span>
                <span className="text-[#EEEEF2] font-mono text-[11px]">End-to-End Reliability</span>
              </div>
            </div>
          </div>

          {/* Right Column: First-Person Editorial Prose */}
          <div id="intro-narrative" className="lg:col-span-8 space-y-8">
            <p className="intro-paragraph text-xl sm:text-2xl md:text-3xl text-[#EEEEF2] font-light leading-relaxed">
              I'm a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning. My interests span software engineering, backend systems, machine learning and intelligent applications.
            </p>

            <div className="w-12 h-[1px] bg-[#7C9EFF]/40 my-6" />

            <p className="intro-paragraph text-lg sm:text-xl md:text-2xl text-[#94A3B8] font-light leading-relaxed">
              I enjoy building things that require more than writing code — understanding the problem, making technical decisions, connecting components and seeing the system work end to end.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PART 3: THE ENGINEERING MINDSET (DISTINCTIVE EDITORIAL LEDGER)
          ========================================================================= */}
      <section
        id="engineering-mindset"
        className="py-24 md:py-36 px-6 sm:px-8 md:px-12 border-t border-white/[0.06] bg-[#0A0E17]/40 max-w-7xl mx-auto w-full"
      >
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C9EFF]/20 bg-[#7C9EFF]/[0.03] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
            <span className="mono-label text-[10px] text-[#A5BDFF]">01.2 // MINDSET &amp; VALUES</span>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EEEEF2]">
            Engineering Decisions That Matter.
          </h3>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light">
            Crafting durable software requires discipline at each layer. These tenets guide how I approach architectural tradeoffs and solve problems.
          </p>
        </div>

        {/* Distinctive Editorial Stack (No generic 4-card grid) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {mindsetTenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.num}
                id={`mindset-item-${idx}`}
                className="mindset-row group py-10 md:py-14 transition-all duration-300 hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                  
                  {/* Index Number & Icon */}
                  <div className="md:col-span-2 flex items-center justify-between md:block">
                    <span className="font-mono text-3xl md:text-4xl text-[#7C9EFF]/40 group-hover:text-[#7C9EFF] transition-colors duration-300">
                      {tenet.num}
                    </span>
                    <div className="md:mt-4 p-2 w-fit rounded-lg border border-white/5 bg-white/[0.02] text-[#7C9EFF] group-hover:border-[#7C9EFF]/30 transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Core Statement */}
                  <div className="md:col-span-6">
                    <span className="mono-label text-[10px] text-[#7C9EFF] block mb-2">
                      {tenet.tag}
                    </span>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#EEEEF2] group-hover:text-white transition-colors duration-300">
                      {tenet.statement}
                    </h4>
                  </div>

                  {/* Nuance & Elaboration */}
                  <div className="md:col-span-4">
                    <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                      {tenet.elaboration}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          PART 4: HOW I WORK (5-STAGE ENGINEERING LIFECYCLE)
          ========================================================================= */}
      <section
        id="process-section"
        className="py-24 md:py-36 px-6 sm:px-8 md:px-12 border-t border-white/[0.06] max-w-7xl mx-auto w-full"
      >
        <div className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] mb-4">
            <span className="mono-label text-[10px] text-[#7C9EFF]">01.3 // EXECUTION FLOW</span>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EEEEF2]">
            How I Work.
          </h3>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light">
            From initial ambiguity to production-grade implementation, every system follows an intentional five-stage engineering progression.
          </p>

          {/* Sequential Badge Flow */}
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#A5BDFF]">
            <span className="px-3 py-1 rounded bg-[#7C9EFF]/10 border border-[#7C9EFF]/20">UNDERSTAND</span>
            <span className="text-[#64748B]">→</span>
            <span className="px-3 py-1 rounded bg-[#7C9EFF]/10 border border-[#7C9EFF]/20">DESIGN</span>
            <span className="text-[#64748B]">→</span>
            <span className="px-3 py-1 rounded bg-[#7C9EFF]/10 border border-[#7C9EFF]/20">BUILD</span>
            <span className="text-[#64748B]">→</span>
            <span className="px-3 py-1 rounded bg-[#7C9EFF]/10 border border-[#7C9EFF]/20">VALIDATE</span>
            <span className="text-[#64748B]">→</span>
            <span className="px-3 py-1 rounded bg-[#7C9EFF]/10 border border-[#7C9EFF]/20">IMPROVE</span>
          </div>
        </div>

        {/* Process Circuit Layout (Technical unfolding lifecycle) */}
        <div className="relative">
          
          {/* Desktop Central Connecting Circuit Track */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] bg-white/[0.08]">
            <div
              id="process-progress-line"
              className="h-full bg-gradient-to-r from-[#7C9EFF] via-[#A5BDFF] to-[#7C9EFF] origin-left scale-x-0 transform-gpu"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 xl:gap-6 relative z-10">
            {workflowStages.map((stage, idx) => (
              <div
                key={stage.step}
                id={`process-stage-${idx}`}
                className="process-card group relative p-5 xl:p-7 rounded-xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm transition-all duration-300 hover:border-[#7C9EFF]/40 hover:bg-[#0D121F]/70"
              >
                {/* Node Milestone Pill */}
                <div className="flex items-center justify-between mb-5 xl:mb-6">
                  <div className="w-8 h-8 rounded-full border border-[#7C9EFF]/30 bg-[#080B12] flex items-center justify-center font-mono text-xs text-[#7C9EFF] group-hover:scale-110 group-hover:border-[#7C9EFF] transition-all duration-300 shadow-[0_0_10px_rgba(124,158,255,0.15)]">
                    {stage.step}
                  </div>
                  <span className="mono-label text-[9px] text-[#64748B] group-hover:text-[#A5BDFF] transition-colors duration-300">
                    STAGE // {stage.step}
                  </span>
                </div>

                {/* Stage Title */}
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[#EEEEF2] mb-2 xl:mb-3 group-hover:text-[#7C9EFF] transition-colors duration-300">
                  {stage.name}
                </h4>

                {/* Explanation */}
                <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                  {stage.detail}
                </p>

                {/* Bottom Active Glow Bar */}
                <div className="absolute bottom-0 left-5 right-5 xl:left-6 xl:right-6 h-[1.5px] bg-[#7C9EFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
};
