import React from 'react';
import { 
  CheckCircle2, 
  Github, 
  Lock, 
  Activity, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { SentriqPipelineVisual } from './project-visuals/SentriqPipelineVisual';
import { RakshaiWorkflowVisual } from './project-visuals/RakshaiWorkflowVisual';
import { CyberOntologyVisual } from './project-visuals/CyberOntologyVisual';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="selected-works"
      className="relative w-full bg-[#07090E] text-[#EEEEF2] py-24 md:py-36 px-6 md:px-10 border-t border-white/[0.08]"
      aria-label="Selected Works — Flagship Engineering Projects"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div id="projects-header" className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#7C9EFF] tracking-widest uppercase">
              01 // Flagship Projects
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EEEEF2]">
            Engineering Architectures &amp; Technical Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            Three distinct systems engineered across post-quantum cryptographic risk analysis, life-critical healthcare coordination, and formal cybersecurity knowledge representation.
          </p>
        </div>

        {/* =========================================================================
            PROJECT 01: SENTRIQ
            ========================================================================= */}
        <article
          id="project-sentriq"
          className="mb-20 md:mb-32 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7C9EFF]/50 to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">01</span>
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                Post-Quantum Cryptography &amp; Discovery
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#7C9EFF]/30 bg-[#7C9EFF]/[0.06] text-[#A5BDFF] text-[11px] font-mono">
              <Lock className="w-3 h-3 text-[#7C9EFF]" />
              <span>NIST PQC Standards Aligned</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-6 mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#EEEEF2]">
              SENTRIQ
            </h3>
            <p className="mt-1.5 font-mono text-xs sm:text-sm text-[#7C9EFF]">
              Cryptographic Discovery, CycloneDX CBOM Generation &amp; Quantum Risk Assessment Platform
            </p>
          </div>

          {/* Main Grid: Architecture & Details vs Dedicated Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Problem & Contribution */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                  Legacy public-key algorithms (RSA, ECC) are vulnerable to future quantum attacks via Shor’s algorithm. Most enterprise codebases lack automated visibility into where asymmetric keys and vulnerable libraries reside, preventing proactive migration planning to post-quantum standards.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Static Ingestion Engine:</strong> Built AST inspection and regex patterns for static cryptographic discovery across repository source files.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Mosca-Model Implementation:</strong> Programmed institutional urgency calculations based on threat overlap equation <code className="text-[#A5BDFF] font-mono">X + Y &gt; Z</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>QUANTS Risk Scoring:</strong> Engineered an empirical index (0.0 to 10.0 scale) measuring algorithmic exposure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>CBOM Generator:</strong> Validated CycloneDX 1.6 Cryptographic Bill of Materials generation exportable for compliance auditing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Empirical Benchmarks:</strong> Evaluated across 10 Repos spanning defense and finance codebases, achieving typical discovery completion in 35–45s (max ~60s).</span>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'CycloneDX 1.6', 'AST Parsing', 'CI/CD'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-[#A5BDFF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dedicated Interactive Pipeline Visual */}
            <div className="lg:col-span-7">
              <SentriqPipelineVisual />
            </div>

          </div>
        </article>

        {/* =========================================================================
            PROJECT 02: RAKSHAI
            ========================================================================= */}
        <article
          id="project-rakshai"
          className="mb-20 md:mb-32 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#34D399]/50 to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#34D399]">02</span>
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                AI / Machine Learning &amp; Cloud Systems
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aishakhan1814/v0-raksha-ai-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#EEEEF2] transition-colors"
                aria-label="RakshAI GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Codebase</span>
                <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
              </a>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-400 text-[11px] font-mono">
                <Activity className="w-3 h-3" />
                <span>Emergency Triage Pipeline</span>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-6 mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#EEEEF2]">
              RakshAI
            </h3>
            <p className="mt-1.5 font-mono text-xs sm:text-sm text-[#34D399]">
              AI-Powered Blood Intelligence &amp; Care Coordination Pipeline
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Problem & Contribution */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                  Blood delivery coordination during acute trauma and maternal hemorrhages suffers from fragmented institutional visibility and manual dispatch calls, resulting in critical multi-hour response gaps in time-sensitive medical care.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span><strong>Semantic RAG Pipeline:</strong> Built a vector search triage engine using Pinecone embeddings to semantically match clinical demand with compatible donor availability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span><strong>PCA Feature Engineering:</strong> Performed missing-value imputation and dimensionality reduction over multi-parameter medical records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span><strong>Cloud Orchestration:</strong> Co-architected state transitions using AWS Step Functions, AWS Bedrock generative reasoning, and automated SNS multi-channel alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span><strong>Backend Architecture:</strong> Engineered inventory data cleaning, MongoDB schemas, and reliable webhook ingestion within a two-person team.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span><strong>Empirical Pipeline Impact:</strong> Processed BloodWarriors (~7k rows) records, accelerating volunteer dispatch turnaround from ~24h → under 4h.</span>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'AWS Bedrock', 'AWS SageMaker', 'AWS Step Functions', 'AWS SNS', 'Pinecone', 'MongoDB', 'PCA', 'RAG'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-[#A5BDFF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dedicated Interactive Workflow & Turnaround Visual */}
            <div className="lg:col-span-7">
              <RakshaiWorkflowVisual />
            </div>

          </div>
        </article>

        {/* =========================================================================
            PROJECT 03: CYBERSECURITY BREACH ONTOLOGY
            ========================================================================= */}
        <article
          id="project-ontology"
          className="p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A78BFA]/50 to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#A78BFA]">03</span>
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                Ontology Engineering &amp; Knowledge Representation
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#A78BFA]/30 bg-[#A78BFA]/[0.06] text-[#A78BFA] text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3 text-[#A78BFA]" />
              <span>Microsoft Hackathon Finalist (Top 10)</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-6 mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#EEEEF2]">
              Cybersecurity Breach Ontology
            </h3>
            <p className="mt-1.5 font-mono text-xs sm:text-sm text-[#A78BFA]">
              Semantic Knowledge Representation for Attack Path Tracing &amp; Explainable Remediation
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Problem & Contribution */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                  Security Operations Centers (SOCs) are overwhelmed with alert telemetry lacking semantic causality. Without transparent knowledge models connecting adversary techniques to specific host artifacts and privilege levels, automated remediation cannot explain its reasoning.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span><strong>Knowledge Schema Design:</strong> Substantially contributed to modeling 13 formal entity types, 15 directed relationships, and 38 domain properties in OWL / RDF.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span><strong>MITRE ATT&amp;CK Mapping:</strong> Co-authored two complete end-to-end incident scenarios modeling initial access, lateral privilege escalation, and exfiltration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span><strong>SPARQL Semantic Reasoning:</strong> Formulated reasoning queries enabling automated attack-path root cause deduction and containment verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span><strong>Hackathon Engineering:</strong> Developed and presented the solution within a two-person engineering team, securing Top 10 placement at the Microsoft Ontology Hackathon.</span>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['OWL / RDF', 'Protégé', 'SPARQL', 'Knowledge Graphs', 'Python', 'MITRE ATT&CK', 'Semantic Web'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-[#A5BDFF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dedicated Interactive Semantic Graph Visual */}
            <div className="lg:col-span-7">
              <CyberOntologyVisual />
            </div>

          </div>
        </article>

      </div>
    </section>
  );
};
