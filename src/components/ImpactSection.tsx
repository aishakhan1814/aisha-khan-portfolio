import React from 'react';
import {
  Trophy,
  Award,
  Users,
  Heart,
  GraduationCap,
  Code2,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Radio,
  CheckCircle2,
  Building2,
  Compass,
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section
      id="impact-recognition"
      className="relative z-20 py-28 md:py-40 bg-[#080B12] text-[#EEEEF2] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Anchor compatibility alias for prior bridge */}
      <span id="phase05-bridge" className="sr-only" aria-hidden="true" />

      {/* Atmospheric Radial Lighting Vignettes */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#7C9EFF]/[0.03] blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 -right-48 w-96 h-96 rounded-full bg-[#3B82F6]/[0.025] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[#6366F1]/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* =========================================================================
            SECTION MASTER HEADER: EDITORIAL DIRECTION
            ========================================================================= */}
        <div id="impact-header" className="mb-20 md:mb-28">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-widest">
              04 / IMPACT, LEADERSHIP &amp; RECOGNITION
            </span>
            <span className="mono-label text-[10px] text-[#64748B] hidden sm:inline ml-4 pl-4 border-l border-white/10">
              COMMUNITY, LEADERSHIP &amp; ACADEMICS
            </span>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tightest leading-[0.98] text-[#EEEEF2]">
              <span className="block">THE WORK. THE PEOPLE.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EEEEF2] via-[#EEEEF2] to-[#7C9EFF]/80">
                THE IMPACT.
              </span>
            </h2>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-12">
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-light max-w-2xl leading-relaxed">
              Engineering is not just about building systems. It is about solving problems with people, taking initiative, sharing knowledge, and creating impact beyond the code.
            </p>

            {/* Impact Metric Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Chapters</span>
                <span className="text-xl sm:text-2xl font-bold text-[#7C9EFF]">05</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Selectivity</span>
                <span className="text-xl sm:text-2xl font-bold text-[#EEEEF2]">150/30k+</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Problems</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">450+</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">CGPA</span>
                <span className="text-xl sm:text-2xl font-bold text-[#7C9EFF]">9.43</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 01 — RECOGNITION (HACKATHONS & COMPETITIVE ACHIEVEMENTS)
            ========================================================================= */}
        <div id="chapter-recognition" className="mb-24 md:mb-36">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-4 h-4 text-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
              CHAPTER 01 / RECOGNITION
            </span>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline ml-2">
              — HACKATHONS &amp; SELECTION-BASED HONORS
            </span>
          </div>

          {/* Asymmetric Showcase: Dominant J.P. Morgan Card + Grid */}
          <div className="space-y-6">
            {/* 1A. Flagship Spotlight Card: J.P. Morgan Chase Code for Good 2026 */}
            <div className="p-8 sm:p-10 md:p-12 rounded-2xl border border-[#7C9EFF]/30 bg-gradient-to-br from-[#0D121F]/90 via-[#0D121F]/50 to-[#080B12]/80 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#7C9EFF]/10 border-b border-l border-[#7C9EFF]/30 font-mono text-[10px] text-[#7C9EFF] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#7C9EFF]" />
                SELECTIVE PARTICIPATION
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      HYDERABAD
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      CODE FOR GOOD 2026
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2]">
                    J.P. Morgan Chase — Code for Good 2026
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed max-w-2xl">
                    Selected participant in Hyderabad, earning a place among 150 selected candidates chosen from an
                    applicant pool of over 30,000 applicants nationwide. Collaborated with interdisciplinary engineering
                    peers under tight timelines to build technological solutions addressing social and non-profit challenges.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#7C9EFF]/90">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      Selected Participant (150 of 30,000+)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      Social Impact Engineering
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end p-6 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">Acceptance Ratio</span>
                  <div className="text-4xl sm:text-5xl font-bold font-mono text-[#7C9EFF] tracking-tight mt-1">
                    150 <span className="text-lg text-[#94A3B8] font-light">/ 30,000+</span>
                  </div>
                  <span className="mt-2 text-xs text-[#94A3B8] font-light text-left lg:text-right">
                    Rigorous selection across national engineering candidate pool
                  </span>
                </div>
              </div>
            </div>

            {/* 1B. Staggered Grid for Remaining Hackathon Honors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Google Developer Group (GDG) Hackathon */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      TOP 10 TEAMS
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">2,000+ TEAMS</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                    Google Developer Group (GDG) Hackathon
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                    Evaluated in the top 10 teams among over 2,000 participating squads, developing full-stack solutions
                    evaluated on technical innovation, architectural execution, and real-world applicability.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#7C9EFF] flex items-center justify-between">
                  <span>Top 10 Finalist (2,000+ Teams)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                </div>
              </div>

              {/* Microsoft Ontology Hackathon — September 2026 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      TOP 10 TEAMS
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">300+ TEAMS</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                    Microsoft Ontology Hackathon
                  </h4>
                  <p className="text-[11px] font-mono text-[#7C9EFF] uppercase mt-0.5">
                    SEPTEMBER 2026 / TWO-PERSON TEAM
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                    Top 10 finish among 300+ teams. Co-authored the <strong>Cybersecurity Breach Ontology</strong>: formal
                    knowledge representation defining 13 entity types, 15 relationships, and 38 properties across 2 modelled
                    attack scenarios in Protégé/OWL.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href="#project-ontology"
                    className="text-xs font-mono text-[#7C9EFF] hover:underline flex items-center gap-1"
                  >
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hack Culture 2.0 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      TOP 20 TEAMS
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">500+ TEAMS</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                    Hack Culture 2.0
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                    Achieved top 20 placement among 500+ competing engineering teams, navigating high-speed sprint
                    deadlines to design and implement an end-to-end working software prototype.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#7C9EFF] flex items-center justify-between">
                  <span>Top 20 Finalist (500+ Teams)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                </div>
              </div>

              {/* Vyoma Hackathon — Runner-up */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      RUNNER-UP
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">300+ TEAMS</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                    Vyoma Hackathon
                  </h4>
                  <p className="text-[11px] font-mono text-[#7C9EFF] uppercase mt-0.5">
                    SUSTAINABLE DEVELOPMENT CATEGORY
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                    Awarded Runner-up among 300+ teams for an <strong>EV charging assistance solution</strong>. Designed to help
                    electric vehicle drivers locate nearby charging stations and immediately identify available alternative
                    charging points when a selected station is occupied, saving time.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-emerald-400 flex items-center justify-between">
                  <span>Runner-up Award (300+ Teams)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              {/* Smart India Hackathon (SIH) Internal Selection */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      INTERNAL SELECTION
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">500+ TEAMS EVALUATED</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                    Smart India Hackathon (SIH) — CBIT Selection
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                    Team selected through the competitive CBIT internal hackathon among over 500 candidate teams to represent
                    the institution's problem-solving submissions. Recognized for technical rigor and well-defined architecture.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#94A3B8] flex items-center justify-between">
                  <span>Institutional Internal Selection (500+ Teams)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 02 — LEADERSHIP (CONTRIBUTIONS & PEER MENTORSHIP)
            ========================================================================= */}
        <div id="chapter-leadership" className="mb-24 md:mb-36">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-4 h-4 text-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
              CHAPTER 02 / LEADERSHIP
            </span>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline ml-2">
              — COMMUNITY INITIATIVES &amp; STUDENT ORGANIZATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2A. CBIT Open Source Club */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                    SESSION LEAD
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">300+ STUDENTS</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  CBIT Open Source Club
                </h4>
                <p className="text-xs font-mono text-[#7C9EFF] uppercase mt-1">
                  GITHUB SESSION LEAD
                </p>
                <p className="mt-4 text-sm text-[#94A3B8] font-light leading-relaxed">
                  Conducted an interactive, comprehensive GitHub workshop for over 300 students. Guided peers through
                  foundational version control, Git CLI commands, branching strategies, collaborative pull request reviews,
                  and open-source workflow practices.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7C9EFF] flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Hands-on Technical Workshop &amp; Mentorship</span>
              </div>
            </div>

            {/* 2B. Chaitanya Astra */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">STUDENT BODY</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  Chaitanya Astra
                </h4>
                <p className="text-xs font-mono text-[#7C9EFF] uppercase mt-1">
                  JOINT SECRETARY
                </p>
                <p className="mt-4 text-sm text-[#94A3B8] font-light leading-relaxed">
                  Served as Joint Secretary, contributing to student governance, organizational management, and coordinating
                  institutional student initiatives. Collaborated across committees to maintain organized community execution.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7C9EFF] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Organizational Involvement &amp; Leadership</span>
              </div>
            </div>

            {/* 2C. Entrepreneurship Development Cell */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                    PODCAST &amp; DIALOGUE
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">INDUSTRY DIALOGUES</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  Entrepreneurship Development Cell
                </h4>
                <p className="text-xs font-mono text-[#7C9EFF] uppercase mt-1">
                  SPEAKER HOST &amp; INTERVIEWER
                </p>
                <p className="mt-4 text-sm text-[#94A3B8] font-light leading-relaxed">
                  Hosted multiple guest speakers, conducting interview-style interactions in a mini-podcast format. Moderated
                  conversations on product mindset, venture creation, engineering challenges, and practical problem-solving.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7C9EFF] flex items-center gap-2">
                <Radio className="w-4 h-4" />
                <span>Curated Interviews &amp; Mini-Podcast Host</span>
              </div>
            </div>

            {/* 2D. Adobe India Student Insider */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                    STUDENT AMBASSADORS
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">INDUSTRY PROGRAM</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  Adobe India Student Insider
                </h4>
                <p className="text-xs font-mono text-[#7C9EFF] uppercase mt-1">
                  STUDENT INSIDER EXPERIENCE
                </p>
                <p className="mt-4 text-sm text-[#94A3B8] font-light leading-relaxed">
                  Selected as an Adobe India Student Insider, connecting with creative software initiatives, student
                  communities, and developer-designer ecosystem discussions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7C9EFF] flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Industry Program Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 03 — COMMUNITY IMPACT (OUTREACH & VOLUNTEERING)
            ========================================================================= */}
        <div id="chapter-community" className="mb-24 md:mb-36">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-4 h-4 text-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
              CHAPTER 03 / COMMUNITY IMPACT
            </span>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline ml-2">
              — SOCIAL RESPONSIBILITY &amp; MEANINGFUL OUTREACH
            </span>
          </div>

          <div className="space-y-6">
            {/* 3A. Dedicated Storytelling Feature: Chaitanya Spondana */}
            <div className="p-8 sm:p-10 md:p-12 rounded-2xl border border-[#7C9EFF]/20 bg-[#0D121F]/60 backdrop-blur-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      GENDER EQUALITY CLUB
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      COMMUNITY OUTREACH
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#EEEEF2]">
                    Chaitanya Spondana — Gender Equality Outreach
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                    As an active member of Chaitanya Spondana, conducted women’s empowerment and gender equality sessions in
                    local and common schools. Encouraged young girls to pursue education, understand their legal and social
                    rights, and envision self-reliant futures.
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                    Facilitated interactive, inspirational dialogues discussing equal treatment of women and men, particularly
                    addressing cultural and educational barriers in rural communities.
                  </p>

                  <div className="mt-6 p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80 max-w-xl">
                    <p className="italic text-xs sm:text-sm text-[#EEEEF2] font-light leading-relaxed">
                      "Empowerment begins with awareness. Helping young girls recognize their right to education and equal
                      opportunity creates ripples far beyond the classroom."
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 rounded-xl border border-white/[0.06] bg-[#080B12]/80 space-y-4">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">
                    Core Focus Areas
                  </span>
                  <div className="space-y-2 text-xs font-mono text-[#EEEEF2]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      <span>Girls' Right to Education</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      <span>Rural Community Dialogue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      <span>Interactive School Sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                      <span>Equal Opportunity Awareness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3B. CosmoCon 2025 Logistics & Materials */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/10 bg-white/[0.03] text-[#94A3B8]">
                    EVENT LOGISTICS &amp; COORDINATION
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">COSMOCON 2025</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  CosmoCon 2025 — Coordination &amp; Operations
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                  Contributed to logistics and attendee coordination for CosmoCon 2025, an event hosting over 700 participants.
                  Managed participant materials and event merchandise including backpacks, hoodies, stationery, stickers, and gifts.
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80 text-left md:text-right">
                <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">Scale</span>
                <span className="text-3xl font-bold font-mono text-[#7C9EFF]">700+</span>
                <span className="text-xs text-[#94A3B8] font-light block">Participants Coordinated</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 04 — PROBLEM SOLVING (ALGORITHMIC PRACTICE)
            ========================================================================= */}
        <div id="chapter-problem-solving" className="mb-24 md:mb-36">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-4 h-4 text-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
              CHAPTER 04 / PROBLEM SOLVING
            </span>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline ml-2">
              — ALGORITHMIC PRACTICE &amp; DISCIPLINE
            </span>
          </div>

          <div className="p-8 sm:p-10 md:p-12 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Giant Numerical Display */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-1">
                  CONSISTENT PRACTICE METRIC
                </span>
                <div className="text-6xl sm:text-8xl md:text-9xl font-bold font-mono text-[#7C9EFF] tracking-tighter leading-none">
                  450<span className="text-[#EEEEF2]">+</span>
                </div>
                <span className="mt-3 text-base sm:text-lg font-mono text-[#EEEEF2] font-semibold tracking-wide">
                  LeetCode Problems Solved
                </span>
                <span className="text-xs text-[#64748B] font-mono mt-1">
                  Algorithmic Foundations &amp; Data Structures
                </span>
              </div>

              {/* Narrative & Practical Reflection */}
              <div className="lg:col-span-7">
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  Analytical Rigor Through Deliberate Repetition
                </h4>
                <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  Consistent problem-solving is not about contest vanity—it is about cultivating systematic decomposition,
                  algorithmic intuition, and time-space efficiency. Solving 450+ problems reflects a dedicated habit of
                  tackling computational challenges across foundational domains.
                </p>

                {/* Practical Skill Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Arrays & Hashing',
                    'Two Pointers',
                    'Sliding Window',
                    'Binary Search',
                    'Trees & Graphs',
                    'Dynamic Programming',
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded text-xs font-mono bg-white/[0.02] border border-white/5 text-[#94A3B8]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 05 — EDUCATION & RECOGNITION (ACADEMICS & SCHOLARSHIPS)
            ========================================================================= */}
        <div id="chapter-education" className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-4 h-4 text-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-wider">
              CHAPTER 05 / EDUCATION &amp; SCHOLARSHIPS
            </span>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline ml-2">
              — ACADEMIC RIGOR &amp; SELECTIVE SCHOLARSHIPS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Column 1: Academic Foundations */}
            <div className="lg:col-span-6 p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                    UNDERGRADUATE
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">2024 — MAY 2028</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                  Chaitanya Bharathi Institute of Technology (CBIT)
                </h3>
                <p className="mt-1 font-mono text-xs text-[#7C9EFF] tracking-wider uppercase">
                  B.TECH — COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)
                </p>

                <div className="mt-8 space-y-4">
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#64748B] block">Current CGPA</span>
                      <span className="text-sm font-semibold text-[#EEEEF2]">Undergraduate Standing</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-emerald-400">9.43 / 10</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#64748B] block">Intermediate Education</span>
                      <span className="text-sm font-semibold text-[#EEEEF2]">Class XII Board Examination</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#7C9EFF]">98.1%</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#64748B] block">Secondary Education</span>
                      <span className="text-sm font-semibold text-[#EEEEF2]">Class X Examination</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#EEEEF2]">96.7%</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-[#64748B]">
                Expected Graduation: May 2028 • Hyderabad, India
              </div>
            </div>

            {/* Column 2: Scholarships & Certifications */}
            <div className="lg:col-span-6 p-8 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    CREDENTIALS
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">SCHOLARSHIPS &amp; CERTS</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h3 className="text-2xl font-bold tracking-tight text-[#EEEEF2]">
                    Scholarships &amp; Certifications
                  </h3>
                </div>
                <p className="mt-1 font-mono text-xs text-[#94A3B8] tracking-wider uppercase">
                  MERIT-BASED SELECTIONS &amp; ASSESSMENTS
                </p>

                <div className="mt-8 space-y-4">
                  {/* GHCI AIP Scholarship */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-[#EEEEF2]">
                        GHCI — Grace Hopper Celebration India
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7C9EFF]/10 text-[#7C9EFF] border border-[#7C9EFF]/20">
                        SCHOLARSHIP
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#7C9EFF] font-mono">
                      Selected for the AIP Scholarship (Advancing Inclusion Program)
                    </p>
                    <p className="mt-1.5 text-xs text-[#94A3B8] font-light">
                      Selected for the Advancing Inclusion Program scholarship by GHCI, recognizing diversity and technical potential.
                    </p>
                  </div>

                  {/* SheFi Scholar */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-[#EEEEF2]">
                        SheFi Scholar
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        SCHOLAR
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-emerald-400 font-mono">
                      Web3 &amp; Decentralized Finance Education Initiative
                    </p>
                    <p className="mt-1.5 text-xs text-[#94A3B8] font-light">
                      Selected participant in the SheFi education initiative exploring decentralized systems and distributed technologies.
                    </p>
                  </div>

                  {/* NPTEL Java */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-[#EEEEF2]">
                        NPTEL — Java Programming
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        ELITE GOLD
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-amber-300 font-mono">
                      Elite Gold | 96th Percentile Score
                    </p>
                    <p className="mt-1.5 text-xs text-[#94A3B8] font-light">
                      Achieved Elite Gold status, scoring in the top 96th percentile nationally in comprehensive Java programming.
                    </p>
                  </div>

                  {/* Oracle Cloud Infrastructure */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-[#EEEEF2]">
                        Oracle Cloud Infrastructure (OCI)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#94A3B8] border border-white/5">
                        CERTIFIED
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#94A3B8] font-mono">
                      2025 AI Foundations
                    </p>
                    <p className="mt-1.5 text-xs text-[#94A3B8] font-light">
                      Certified in Oracle Cloud Infrastructure AI Foundations covering core machine learning and cloud principles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-[#64748B]">
                Academic &amp; Professional Qualifications
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
