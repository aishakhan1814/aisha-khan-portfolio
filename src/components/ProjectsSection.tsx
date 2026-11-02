import React from 'react';
import { 
  CheckCircle2, 
  Github, 
  Lock, 
  Activity, 
  ShieldCheck 
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="selected-works"
      className="relative w-full bg-[#080B12] text-[#EEEEF2] py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.08]"
      aria-label="Selected Works — Flagship Engineering Projects"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div id="projects-header" className="mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#7C9EFF] tracking-widest uppercase">
              01 // Selected Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EEEEF2]">
            Featured Systems &amp; Engineering Work
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            Three production-grade architectures spanning post-quantum cryptography, AI-driven healthcare logistics, and formal knowledge representation.
          </p>
        </div>

        {/* Project 1: SENTRIQ */}
        <article
          id="project-sentriq"
          className="mb-16 md:mb-24 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7C9EFF]/40 to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">01</span>
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                Post-Quantum Cryptography &amp; Security Engineering
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#7C9EFF]/20 bg-[#7C9EFF]/[0.05] text-[#A5BDFF] text-[11px] font-mono">
              <Lock className="w-3 h-3 text-[#7C9EFF]" />
              <span>NIST PQC Aligned</span>
            </div>
          </div>

          {/* Title & One-Liner */}
          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
              SENTRIQ
            </h3>
            <p className="mt-1 font-mono text-xs text-[#7C9EFF]">
              Post-Quantum Cryptographic Discovery &amp; Algorithmic Urgency Analysis Platform
            </p>
          </div>

          {/* Main Grid: Problem & Contribution vs. Architecture & Metrics */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Problem & Personal Contribution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  Legacy public-key algorithms (RSA, ECC) are vulnerable to future quantum attacks via Shor’s algorithm. Most enterprise codebases lack visibility into where asymmetric keys and vulnerable libraries reside, preventing proactive migration planning to post-quantum standards.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Static Scanning Engine:</strong> Implemented AST inspection and pattern-based cryptographic detection parsing repository codebases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Mosca-Model Analysis:</strong> Programmed urgency calculations based on threat overlap equation <code className="text-[#A5BDFF] font-mono">X + Y &gt; Z</code> (data shelf life + migration duration vs. quantum horizon).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>QUANTS Risk Scoring:</strong> Engineered an empirical index (0.0 to 10.0 scale) measuring algorithmic exposure and migration complexity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>CBOM Generation:</strong> Exported validated CycloneDX 1.6 Cryptographic Bill of Materials for compliance auditing.</span>
                  </li>
                </ul>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  Key Technical Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#94A3B8]">
                  <div className="p-3 rounded-lg border border-white/[0.04] bg-[#080B12]/60">
                    <span className="font-mono text-[#EEEEF2] block mb-1">CycloneDX 1.6 Standard</span>
                    <span>Generates machine-readable CBOM inventories capturing algorithm, key length, and crypto provider.</span>
                  </div>
                  <div className="p-3 rounded-lg border border-white/[0.04] bg-[#080B12]/60">
                    <span className="font-mono text-[#EEEEF2] block mb-1">NIST Migration Targets</span>
                    <span>Maps vulnerable primitives to approved FIPS standards: ML-KEM, ML-DSA, and SLH-DSA.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Metrics & Stack */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                <span className="font-mono text-xs text-[#A5BDFF] uppercase tracking-wider block mb-3">
                  Verified Empirical Evidence
                </span>
                
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#EEEEF2]">10 Repos</div>
                    <div className="font-mono text-[10px] text-[#64748B] mt-1">TESTED CODEBASES</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">35–45s</div>
                    <div className="font-mono text-[10px] text-[#64748B] mt-1">TYPICAL SCAN TIME</div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-[#64748B] font-light leading-relaxed">
                  Evaluated across core OpenSSL implementations, healthcare, defense, and finance codebases. Max observed execution: ~60s. Non-standard ciphers cleanly isolated for manual review.
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technologies
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

          </div>
        </article>

        {/* Project 2: RakshAI */}
        <article
          id="project-rakshai"
          className="mb-16 md:mb-24 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">02</span>
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
                <span>GitHub</span>
              </a>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-emerald-500/20 bg-emerald-500/[0.05] text-emerald-400 text-[11px] font-mono">
                <Activity className="w-3 h-3" />
                <span>Emergency Orchestration</span>
              </div>
            </div>
          </div>

          {/* Title & One-Liner */}
          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
              RakshAI
            </h3>
            <p className="mt-1 font-mono text-xs text-[#7C9EFF]">
              AI-Powered Blood Intelligence &amp; Life-Critical Care Coordination Pipeline
            </p>
          </div>

          {/* Main Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Problem & Contribution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  Blood delivery coordination during acute trauma and maternal hemorrhages suffers from fragmented institutional inventory visibility and manual dispatch calls, resulting in critical multi-hour response gaps in time-sensitive medical care.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Semantic RAG Pipeline:</strong> Built a vector search triage engine using Pinecone embeddings to semantically match clinical demand with compatible donor availability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>PCA Feature Engineering:</strong> Performed missing-value imputation and dimensionality reduction over multi-parameter medical records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Cloud Orchestration:</strong> Co-architected state transitions using AWS Step Functions, AWS Bedrock generative reasoning, and automated SNS multi-channel alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Backend Architecture:</strong> Engineered inventory data cleaning, MongoDB schemas, and reliable webhook ingestion within a two-person team.</span>
                  </li>
                </ul>
              </div>

              {/* Technical Architecture Highlights */}
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  Technical Architecture
                </h4>
                <div className="p-3.5 rounded-lg border border-white/[0.04] bg-[#080B12]/60 font-mono text-xs text-[#94A3B8] space-y-1">
                  <div className="text-[#A5BDFF]">Data &amp; Workflow Topology:</div>
                  <div>MongoDB Ingestion → PCA Feature Processing → Pinecone Vector Index → AWS Bedrock Medical Reasoning → AWS Step Functions → AWS SNS Alert Dispatch.</div>
                </div>
              </div>
            </div>

            {/* Right Column: Outcomes & Tech */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                <span className="font-mono text-xs text-[#A5BDFF] uppercase tracking-wider block mb-3">
                  Verified Dataset Outcomes
                </span>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-baseline justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-[#64748B]">VALIDATION DATASET</span>
                    <span className="text-white font-semibold">BloodWarriors (~7k rows)</span>
                  </div>
                  <div className="flex items-baseline justify-between py-2 border-b border-white/[0.06]">
                    <span className="text-[#64748B]">REPORTED TURNAROUND</span>
                    <span className="text-[#7C9EFF] font-bold">~24h → under 4h</span>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <span className="text-[#64748B]">ALGORITHMIC CHECKS</span>
                    <span className="text-[#A5BDFF] font-semibold">3–4 verification suites</span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-[#64748B] font-light leading-relaxed">
                  Evaluated on real-world historical logistics datasets. Validated request-to-dispatch pipelines under simulated emergency surges.
                </div>
              </div>

              {/* Stack */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technologies
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

          </div>
        </article>

        {/* Project 3: Cybersecurity Breach Ontology */}
        <article
          id="project-ontology"
          className="p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#7C9EFF]">03</span>
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                Ontology Engineering &amp; Knowledge Representation
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#7C9EFF]/20 bg-[#7C9EFF]/[0.05] text-[#A5BDFF] text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3 text-[#7C9EFF]" />
              <span>Microsoft Hackathon Finalist (Top 10)</span>
            </div>
          </div>

          {/* Title & One-Liner */}
          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
              Cybersecurity Breach Ontology
            </h3>
            <p className="mt-1 font-mono text-xs text-[#7C9EFF]">
              Semantic Knowledge Representation for Attack Path Tracing &amp; Explainable Remediation
            </p>
          </div>

          {/* Main Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Problem & Contribution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  Security Operations Centers (SOCs) are overwhelmed with alert telemetry lacking semantic causality. Without transparent knowledge models connecting adversary techniques to specific host artifacts and privilege levels, automated remediation cannot explain its reasoning.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  What I Built &amp; Personal Ownership
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Knowledge Schema Design:</strong> Substantially contributed to modeling 13 formal entity types, 15 directed relationships, and 38 domain properties in OWL / RDF.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>MITRE ATT&amp;CK Mapping:</strong> Co-authored two complete end-to-end incident scenarios modeling initial access, lateral privilege escalation, and exfiltration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>SPARQL Semantic Reasoning:</strong> Formulated reasoning queries enabling automated attack-path root cause deduction and containment verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                    <span><strong>Hackathon Engineering:</strong> Developed and presented the solution within a two-person engineering team, securing Top 10 placement at the Microsoft Ontology Hackathon.</span>
                  </li>
                </ul>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="font-mono text-xs text-[#64748B] uppercase tracking-wider mb-2">
                  Knowledge Model Scope
                </h4>
                <div className="p-3.5 rounded-lg border border-white/[0.04] bg-[#080B12]/60 font-mono text-xs text-[#94A3B8]">
                  <span>Entities include ThreatActor, Vulnerability (CVE), Credential, HostArtifact, SecurityMitigation. Axioms verified with Protégé reasoners for logical consistency.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Metrics & Stack */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-xl border border-white/[0.06] bg-[#080B12]/80">
                <span className="font-mono text-xs text-[#A5BDFF] uppercase tracking-wider block mb-3">
                  Verified Modeling Specifications
                </span>

                <div className="grid grid-cols-3 gap-2 text-center py-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl font-bold text-white">13</div>
                    <div className="font-mono text-[9px] text-[#64748B] mt-0.5">ENTITIES</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl font-bold text-[#7C9EFF]">15</div>
                    <div className="font-mono text-[9px] text-[#64748B] mt-0.5">RELATIONS</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl font-bold text-[#A5BDFF]">38</div>
                    <div className="font-mono text-[9px] text-[#64748B] mt-0.5">PROPERTIES</div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-[#64748B] font-light leading-relaxed">
                  Competed at the Microsoft Ontology Hackathon (September 2026), placing Top 10 out of 300+ national teams. Validated through two synthetic attack path traces.
                </div>
              </div>

              {/* Stack */}
              <div>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block mb-2">
                  Technologies
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

          </div>
        </article>

      </div>
    </section>
  );
};
