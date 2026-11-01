import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  X, 
  Terminal, 
  Lock, 
  BarChart3
} from 'lucide-react';

interface CaseStudyData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  approach: string;
  architecture: string[];
  ownership: string[];
  evidence: string[];
  limitations: string[];
  stack: string[];
}

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<CaseStudyData | null>(null);

  // Close modal on Escape key press and coordinate background smooth scroll lifecycle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('lenis:stop'));
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('lenis:start'));
    }
    return () => {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('lenis:start'));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const projects: CaseStudyData[] = [
    {
      id: 'sentriq',
      num: '01',
      title: 'SENTRIQ',
      subtitle: 'Post-Quantum Cryptographic Inventory & Quantum-Risk Analysis Platform',
      category: 'POST-QUANTUM SECURITY / SOFTWARE ENGINEERING',
      stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'CycloneDX', 'GitHub Actions'],
      problem:
        'Organizations rely on legacy public-key algorithms (RSA, ECC) vulnerable to future quantum attacks (Shor’s algorithm). Most enterprise codebases lack visibility into where asymmetric keys and vulnerable libraries reside, making proactive post-quantum migration planning impossible.',
      approach:
        'Engineered an automated repository scanning engine that combines Abstract Syntax Tree (AST) inspection and pattern-based cryptographic detection. Generates CycloneDX 1.6 Cryptographic Bill of Materials (CBOM) and evaluates institutional quantum urgency using dual distinct risk models.',
      architecture: [
        'AST & Regex Cryptographic Detection Engine parsing repository codebases.',
        'CycloneDX 1.6 CBOM Generator producing machine-readable cryptographic inventories.',
        'Mosca Model Urgency Engine calculating theoretical threat overlap (X + Y > Z).',
        'QUANTS Risk Scoring Module calculating empirical vulnerability indices (0.0 to 10.0).',
        'NIST PQC Standards Mapping (ML-KEM, ML-DSA, SLH-DSA migration targets).',
        'Containerized FastAPI Backend & PostgreSQL inventory database with Docker and CI/CD pipelines.',
      ],
      ownership: [
        'Personally implemented the repository scanning pipeline for automated code parsing.',
        'Built the Mosca-model quantum-risk analysis module from mathematical formulation to implementation.',
        'Implemented the QUANTS quantum-adjusted risk scoring engine calculating algorithmic exposure.',
        'Contributed to the frontend dashboard implementation for cryptographic vulnerability visualization.',
      ],
      evidence: [
        'Tested across 10 distinct repositories, including core library implementations (OpenSSL-related) and representative applications from healthcare, military, and finance domains.',
        'Repository scan latency: typical execution takes approximately 35–45 seconds per repository, with a maximum observed time of approximately 60 seconds.',
        'Verified against known vulnerable cryptographic code patterns and benchmark repositories.',
        'Successfully generates valid CycloneDX 1.6 CBOM structures exportable for compliance auditing.',
      ],
      limitations: [
        'Detection is bounded to supported cryptographic algorithms, libraries, and common API call patterns. Does not claim universal cryptographic detection across proprietary or obfuscated ciphers.',
        'Novel, custom, or unsupported cipher implementations are flagged for manual human cryptographic review.',
        'Does not perform automated runtime dynamic binary analysis; focuses on static codebase and configuration inspection.',
      ],
    },
    {
      id: 'rakshai',
      num: '02',
      title: 'RakshAI',
      subtitle: 'AI-Powered Blood Intelligence & Life-Critical Care Coordination',
      category: 'AI / MACHINE LEARNING / CLOUD ENGINEERING',
      stack: ['Python', 'AWS Bedrock', 'AWS SageMaker', 'AWS SNS', 'AWS Step Functions', 'MongoDB', 'Pinecone'],
      problem:
        'Blood delivery coordination during medical emergencies often suffers from fragmented inventory visibility, manual phone-based communication, and severe logistics delays, leading to critical multi-hour response gaps in urgent care scenarios.',
      approach:
        'Developed an end-to-end cloud coordination and semantic retrieval system connecting emergency requirements with live institutional supply. Utilized vector embeddings to match clinical need with compatible donors and orchestrated alerting via automated cloud pipelines.',
      architecture: [
        'Hospital inventory and emergency demand store hosted on MongoDB.',
        'Data cleaning, imputation, and Principal Component Analysis (PCA) feature engineering pipeline.',
        'Semantic Retrieval-Augmented Generation (RAG) pipeline powered by Pinecone Vector Database.',
        'AWS Bedrock LLM reasoning engine evaluating priority and patient compatibility criteria.',
        'AWS Step Functions state machine orchestrating automated workflow transitions.',
        'AWS SNS multi-channel dispatch mechanism alerting regional donors and logistics coordinators.',
      ],
      ownership: [
        'Co-architected the backend system in a two-person engineering team.',
        'Implemented the semantic RAG pipeline using Pinecone vector embeddings.',
        'Contributed to the machine-learning pipeline for demand classification and donor matching.',
        'Configured AWS service orchestration across Step Functions, Bedrock, and SNS notifications.',
        'Executed data preparation, missing-value imputation, and PCA feature engineering.',
      ],
      evidence: [
        'Evaluated against the BloodWarriors dataset containing approximately 7,000 real-world coordination rows.',
        'Reported request-to-coordination turnaround improved from approximately 24 hours to under 4 hours.',
        'Verified across 3 to 4 formal evaluation checks measuring pipeline execution and delivery alerts.',
      ],
      limitations: [
        'Evaluated on historical and simulated emergency response datasets; not yet integrated into live municipal emergency networks.',
        'Physical road transit and traffic conditions were modeled empirically, not through real-time telemetry GPS hardware.',
      ],
    },
    {
      id: 'cyber-ontology',
      num: '03',
      title: 'Cybersecurity Breach Ontology',
      subtitle: 'Formal Knowledge Representation for Attack Paths & Remediation Reasoning',
      category: 'ONTOLOGY ENGINEERING / CYBERSECURITY / KNOWLEDGE REPRESENTATION',
      stack: ['OWL / RDF', 'Protégé', 'Knowledge Graph', 'Python', 'Security Reasoning'],
      problem:
        'AI-driven security operations centers frequently generate alert noise without providing transparent structural reasoning for why a particular incident represents an escalating lateral movement or persistent adversary presence.',
      approach:
        'Constructed a formal cybersecurity ontology linking adversary techniques, host artifacts, lateral pathways, and remediation actions into an explainable semantic knowledge graph.',
      architecture: [
        '13 Entity Types defining adversaries, attack patterns, vulnerabilities, credentials, and artifacts.',
        '15 Directed Relationships capturing infiltration, persistence, privilege escalation, and exfiltration.',
        '38 Domain Properties encoding timestamps, CVSS scores, privilege levels, and system metadata.',
        'Two complete end-to-end attack scenarios modeled to demonstrate attack path tracing.',
        'Semantic reasoning layer enabling AI agents to trace root-cause dependencies.',
      ],
      ownership: [
        'Substantial contribution to formal ontology modeling and semantic relationship definitions.',
        'Contributed to the technical development of the solution as part of a two-person engineering team.',
        'Co-authored demonstration attack scenarios mapping real MITRE ATT&CK techniques.',
        'Represented team at the Microsoft Ontology Hackathon (September 2026), achieving Top 10 finalist placement.',
      ],
      evidence: [
        'Top 10 finalist team at the Microsoft Ontology Hackathon, September 2026.',
        'Demonstrated verifiable automated path deduction across two multi-stage attack scenarios.',
        'Formally validated schema consistency and relationship axioms using ontology reasoning engines.',
      ],
      limitations: [
        'The two attack scenarios were modeled as synthetic hackathon demonstrations.',
        'The solution was not validated against live production telemetry or active breach incidents.',
        'Does not claim production-grade endpoint detection or real-time intrusion prevention.',
      ],
    },
    {
      id: 'sigmagpt',
      num: '04',
      title: 'SigmaGPT',
      subtitle: 'Full-Stack Conversational Intelligence with Multi-Thread Session Persistence',
      category: 'FULL-STACK DEVELOPMENT / GENERATIVE AI',
      stack: ['JavaScript', 'React', 'Node.js', 'Express', 'OpenAI API', 'REST API'],
      problem:
        'Developing commercial generative AI products requires addressing session state synchronization, rate limits, token window management, and graceful connection interruptions beyond simple single-turn API prompts.',
      approach:
        'Built a complete production-grade conversational application featuring persistent multi-thread management, streaming completions, and responsive client-side state handling.',
      architecture: [
        'React single-page application with responsive dark editorial design and conversation switcher.',
        'Node.js & Express REST API managing authentication, session payloads, and thread persistence.',
        'Server-Side Event (SSE) streaming transport for low-friction real-time token rendering.',
        'OpenAI API integration with sliding context-window management and system prompt tuning.',
        'Persistent storage preserving conversation history across client reloads.',
      ],
      ownership: [
        'Architected and implemented the entire full-stack application end to end.',
        'Engineered the client-side state management handling optimistic updates and streaming text chunks.',
        'Built the Node.js backend proxy enforcing payload validation and error boundaries.',
        'Deployed the live production application.',
      ],
      evidence: [
        'Fully deployed and functional web application.',
        'Supports multi-conversation thread isolation with reliable persistence across sessions.',
        'Handles stream interruptions gracefully with automatic client reconnection.',
      ],
      limitations: [
        'Relies on upstream foundation model APIs; subject to third-party token quota limits.',
        'Designed as an exploratory product architecture; does not incorporate custom fine-tuned weights.',
      ],
    },
  ];

  return (
    <section
      id="selected-works"
      className="relative w-full bg-[#080B12] text-[#EEEEF2] py-28 md:py-40 px-6 sm:px-8 md:px-12 border-t border-white/[0.08] z-20 overflow-hidden"
      aria-label="Selected Works & Case Studies"
    >
      {/* Background Lighting Accents */}
      <div
        id="projects-glow-1"
        className="absolute top-[8%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#7C9EFF]/[0.035] blur-[180px] pointer-events-none"
      />
      <div
        id="projects-glow-2"
        className="absolute top-[45%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/[0.045] blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div id="projects-header" className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#7C9EFF]/60" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-widest">
              02 / SELECTED WORKS
            </span>
            <span className="mono-label text-[10px] text-[#64748B] hidden sm:inline ml-4 pl-4 border-l border-white/10">
              PRODUCTION ARCHITECTURES &amp; SYSTEMS RESEARCH
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[0.95] text-[#EEEEF2] max-w-5xl">
            <span className="block opacity-90">ENGINEERED TO SOLVE.</span>
            <span className="block text-[#7C9EFF] text-electric-glow">BUILT TO WORK.</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-[#94A3B8] font-light max-w-3xl leading-relaxed">
            A selection of systems I've helped design, build and bring to life — from intelligent applications to security-focused engineering.
          </p>
        </div>

        {/* =========================================================================
            PROJECT 01: SENTRIQ (FEATURED FLAGSHIP EXPERIENTIAL SHOWCASE)
            ========================================================================= */}
        <article
          id="project-sentriq"
          className="project-feature-card mb-28 md:mb-40 p-8 sm:p-10 md:p-14 rounded-2xl border border-[#7C9EFF]/25 bg-[#0D121F]/60 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Top Edge Ambient Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7C9EFF]/60 to-transparent" />

          {/* Header Row: Number, Tag, Category */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl sm:text-4xl text-[#7C9EFF] font-bold">
                01
              </span>
              <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />
              <span className="mono-label text-xs text-[#A5BDFF] tracking-wider">
                FEATURED ARCHITECTURE // POST-QUANTUM CRYPTOGRAPHY
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C9EFF]/30 bg-[#7C9EFF]/10">
              <Lock className="w-3.5 h-3.5 text-[#7C9EFF]" />
              <span className="mono-label text-[10px] text-[#EEEEF2]">NIST PQC ALIGNED</span>
            </div>
          </div>

          {/* Title & Core Summary */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EEEEF2]">
                SENTRIQ
              </h3>
              <p className="mt-3 font-mono text-xs text-[#7C9EFF] tracking-wider uppercase">
                POST-QUANTUM SECURITY / SOFTWARE ENGINEERING
              </p>
              
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#94A3B8] font-light leading-relaxed">
                A cryptographic inventory and quantum-risk analysis platform designed to help organisations understand their cryptographic exposure and plan post-quantum migration.
              </p>

              {/* Personal Contributions Highlight */}
              <div className="mt-8 p-6 rounded-xl border border-white/[0.08] bg-[#080B12]/60 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF]" />
                  <span className="mono-label text-[11px] text-[#A5BDFF] font-medium">
                    MY PERSONAL CONTRIBUTIONS
                  </span>
                </div>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] space-y-2 font-light list-disc list-inside">
                  <li><strong className="text-white font-medium">Repository Scanning Pipeline:</strong> Built AST inspection and regex patterns for static cryptographic detection.</li>
                  <li><strong className="text-white font-medium">Mosca-Model Analysis Module:</strong> Implemented institutional risk equation comparing secrecy duration (X + Y &gt; Z).</li>
                  <li><strong className="text-white font-medium">QUANTS Risk Scoring Engine:</strong> Developed quantum-adjusted vulnerability scores (0.0 to 10.0 scale).</li>
                  <li><strong className="text-white font-medium">Frontend Dashboard:</strong> Contributed to the interactive React interface for exposure visualization.</li>
                </ul>
              </div>

              {/* Stack Badges */}
              <div className="mt-8 flex flex-wrap gap-2">
                {projects[0].stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/10 text-[#A5BDFF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Original Technical Schematic Visual (SVG & CSS) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Dual Mathematical Model Explainer Box */}
              <div className="p-6 rounded-xl border border-[#7C9EFF]/30 bg-[#080B12]/80 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-[#7C9EFF]" />
                  <span className="mono-label text-[10px] text-[#7C9EFF] tracking-widest">
                    DUAL RISK METRIC DISTINCTION
                  </span>
                </div>

                {/* Model 1: Mosca Model */}
                <div className="mb-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">1. MOSCA MODEL THEOREM</span>
                    <span className="font-mono text-[11px] text-[#7C9EFF] font-semibold">X + Y &gt; Z</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                    Evaluates temporal urgency: if data shelf life (<strong className="text-white">X</strong>) plus PQC migration time (<strong className="text-white">Y</strong>) exceeds time until quantum cryptanalysis (<strong className="text-white">Z</strong>), institutional risk is already critical.
                  </p>
                </div>

                {/* Model 2: QUANTS Score */}
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">2. QUANTS RISK SCORE</span>
                    <span className="font-mono text-[11px] text-[#A5BDFF] font-semibold">0.0 — 10.0 INDEX</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                    A quantum-adjusted numerical risk calculation indexing algorithm bit-strength, key exchange protocol, and NIST PQC migration difficulty.
                  </p>
                </div>
              </div>

              {/* Empirical Benchmarks Data Card */}
              <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D121F]/80">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4 text-[#7C9EFF]" />
                  <span className="mono-label text-[10px] text-[#A5BDFF] tracking-wider">
                    EMPIRICAL SCAN METRICS (10 REPOSITORIES)
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-center pt-2">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#EEEEF2]">35–45s</div>
                    <div className="mono-label text-[9px] text-[#64748B] mt-1">TYPICAL SCAN TIME</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#A5BDFF]">~60s</div>
                    <div className="mono-label text-[9px] text-[#64748B] mt-1">MAX OBSERVED TIME</div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-[#64748B] font-light leading-tight">
                  Evaluated across healthcare, military, finance domains, and OpenSSL libraries. Novel patterns flagged for human review.
                </div>
              </div>

              {/* Case Study Deep-Dive Button */}
              <button
                onClick={() => setActiveModalProject(projects[0])}
                data-magnetic
                data-magnetic-strength="0.3"
                className="w-full py-3.5 px-6 rounded-xl border border-[#7C9EFF]/40 bg-[#7C9EFF]/10 hover:bg-[#7C9EFF] hover:text-[#080B12] text-[#EEEEF2] font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(124,158,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
              >
                <span>Examine Architecture &amp; Methodology</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        </article>

        {/* =========================================================================
            PROJECT 02: RAKSHAI (AI & CLOUD LIFE-CRITICAL PIPELINE)
            ========================================================================= */}
        <article
          id="project-rakshai"
          className="project-feature-card mb-24 md:mb-32 p-8 sm:p-10 md:p-12 rounded-2xl border border-white/[0.08] bg-[#0A0E17]/60 backdrop-blur-md relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-2xl sm:text-3xl text-[#7C9EFF] font-bold">02</span>
                <span className="mono-label text-xs text-[#64748B]">STAGE // AI &amp; CLOUD</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EEEEF2]">
                RakshAI
              </h3>
              <p className="mt-2 font-mono text-xs text-[#7C9EFF] tracking-wider uppercase">
                AI / MACHINE LEARNING / CLOUD ENGINEERING
              </p>

              <p className="mt-5 text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
                An AI-powered blood intelligence and care coordination system designed to improve the process of connecting blood requirements with available resources.
              </p>

              {/* Contribution Checklist */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-2 text-xs sm:text-sm text-[#EEEEF2]">
                <div className="mono-label text-[10px] text-[#A5BDFF] mb-2 font-medium">
                  MY PERSONAL CONTRIBUTIONS (TWO-PERSON BACKEND ARCHITECTURE)
                </div>
                <div className="flex items-start gap-2 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                  <span>Implemented the semantic RAG pipeline using Pinecone vector database.</span>
                </div>
                <div className="flex items-start gap-2 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                  <span>Contributed to machine learning pipeline &amp; PCA feature engineering.</span>
                </div>
                <div className="flex items-start gap-2 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                  <span>Co-architected AWS orchestration across Step Functions, Bedrock, and SNS.</span>
                </div>
                <div className="flex items-start gap-2 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF] shrink-0 mt-0.5" />
                  <span>Executed hospital inventory data cleaning and missing-value imputation.</span>
                </div>
              </div>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[1].stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.02] border border-white/5 text-[#94A3B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical Diagram & Verified Outcomes */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Turnaround Evidence Card */}
              <div className="p-6 rounded-xl border border-[#7C9EFF]/20 bg-[#080B12]/90">
                <div className="mono-label text-[10px] text-[#7C9EFF] mb-2">VERIFIED EVALUATION METRICS</div>
                <div className="flex items-baseline justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-xs text-[#94A3B8]">EVALUATION DATASET</span>
                  <span className="font-mono text-xs text-white font-semibold">BloodWarriors (~7,000 rows)</span>
                </div>
                <div className="flex items-baseline justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-xs text-[#94A3B8]">REPORTED TURNAROUND</span>
                  <span className="font-mono text-sm text-[#7C9EFF] font-bold">~24 hrs → under 4 hrs</span>
                </div>
                <div className="flex items-baseline justify-between py-2">
                  <span className="text-xs text-[#94A3B8]">VERIFICATION BENCHMARKS</span>
                  <span className="font-mono text-xs text-[#A5BDFF]">3–4 formal checks</span>
                </div>
              </div>

              {/* Architecture Blueprint Card */}
              <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0D121F]/60 text-xs space-y-2">
                <span className="mono-label text-[10px] text-[#A5BDFF] block mb-1">DATA FLOW TOPOLOGY</span>
                <p className="text-[#94A3B8] font-light leading-relaxed">
                  Hospital Requests (MongoDB) → PCA Feature Imputation → Pinecone Vector Store → AWS Bedrock RAG Reasoning → AWS Step Functions Orchestration → AWS SNS Alert Dispatch.
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(projects[1])}
                data-magnetic
                data-magnetic-strength="0.25"
                className="w-full py-3 px-5 rounded-xl border border-white/10 hover:border-[#7C9EFF]/50 bg-white/[0.02] text-xs font-mono text-[#EEEEF2] hover:text-[#7C9EFF] flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <span>Read RakshAI Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </article>

        {/* =========================================================================
            PROJECT 03 & 04 (GRID EDITORIAL PAIRING: CYBER ONTOLOGY & SIGMAGPT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* PROJECT 03: CYBERSECURITY BREACH ONTOLOGY */}
          <article
            id="project-ontology"
            className="project-feature-card p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-2xl sm:text-3xl text-[#7C9EFF] font-bold">03</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#A5BDFF]">
                  MICROSOFT HACKATHON // TOP 10
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
                Cybersecurity Breach Ontology
              </h3>
              <p className="mt-1 font-mono text-[11px] text-[#7C9EFF] tracking-wider uppercase">
                ONTOLOGY ENGINEERING / CYBERSECURITY / KNOWLEDGE REPRESENTATION
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                A cybersecurity ontology designed to represent breach relationships, persistence artefacts and attack paths, helping connect AI-driven security decisions with remediation reasoning.
              </p>

              {/* Ontology Schema Specifications */}
              <div className="mt-6 p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/60 grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                  <div className="font-mono text-xl font-bold text-white">13</div>
                  <div className="mono-label text-[9px] text-[#64748B]">ENTITY TYPES</div>
                </div>
                <div className="p-2 border-x border-white/10">
                  <div className="font-mono text-xl font-bold text-[#7C9EFF]">15</div>
                  <div className="mono-label text-[9px] text-[#64748B]">RELATIONSHIPS</div>
                </div>
                <div className="p-2">
                  <div className="font-mono text-xl font-bold text-[#A5BDFF]">38</div>
                  <div className="mono-label text-[9px] text-[#64748B]">PROPERTIES</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-[#94A3B8] font-light space-y-1.5">
                <p>• <strong>Context:</strong> Microsoft Ontology Hackathon, September 2026 (Top 10 team, two-person team).</p>
                <p>• <strong>My Contribution:</strong> Substantial contribution to ontology modeling and technical development.</p>
                <p>• <strong>Scope Boundaries:</strong> Two attack scenarios modeled as demonstration proofs; not validated on live production incidents.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <button
                onClick={() => setActiveModalProject(projects[2])}
                data-magnetic
                data-magnetic-strength="0.25"
                className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-[#7C9EFF]/40 bg-white/[0.02] text-xs font-mono text-[#EEEEF2] hover:text-[#7C9EFF] flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <span>View Ontology Specifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* PROJECT 04: SIGMAGPT */}
          <article
            id="project-sigmagpt"
            className="project-feature-card p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-2xl sm:text-3xl text-[#7C9EFF] font-bold">04</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  DEPLOYED APP
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EEEEF2]">
                SigmaGPT
              </h3>
              <p className="mt-1 font-mono text-[11px] text-[#7C9EFF] tracking-wider uppercase">
                FULL-STACK DEVELOPMENT / GENERATIVE AI
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                A ChatGPT-style conversational application built to explore full-stack AI product development and persistent conversational experiences.
              </p>

              {/* Key Features List */}
              <div className="mt-6 p-4 rounded-xl border border-white/[0.06] bg-[#080B12]/60 space-y-2 text-xs text-[#EEEEF2] font-light">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  <span><strong>Persistent Conversation History:</strong> Multi-session state retention.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  <span><strong>Multiple Thread Switching:</strong> Dedicated concurrent conversation queues.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  <span><strong>REST API &amp; Stream Transport:</strong> Real-time token dispatch architecture.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  <span><strong>Deployed Architecture:</strong> Fully live and functional web deployment.</span>
                </div>
              </div>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[3].stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs font-mono bg-white/[0.02] border border-white/5 text-[#94A3B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <button
                onClick={() => setActiveModalProject(projects[3])}
                data-magnetic
                data-magnetic-strength="0.25"
                className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-[#7C9EFF]/40 bg-white/[0.02] text-xs font-mono text-[#EEEEF2] hover:text-[#7C9EFF] flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <span>View Full-Stack Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

        </div>

      </div>

      {/* =========================================================================
          DETAILED CASE STUDY MODAL EXPERIENCE
          ========================================================================= */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#080B12]/85 backdrop-blur-2xl overflow-y-auto animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-auto p-6 sm:p-8 md:p-12 rounded-2xl border border-[#7C9EFF]/30 bg-[#0D121F] shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white/30 text-[#94A3B8] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
              aria-label="Close case study details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/[0.08] pb-6 mb-8 pr-12">
              <div className="mono-label text-xs text-[#7C9EFF] mb-2">
                CASE STUDY // {activeModalProject.category}
              </div>
              <h3 id="case-study-title" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#94A3B8] font-light">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* 6 Structured Sections */}
            <div className="space-y-8 text-sm">
              
              {/* 1. Problem */}
              <div>
                <h4 className="font-mono text-xs text-[#7C9EFF] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  1. The Problem
                </h4>
                <p className="text-[#EEEEF2] font-light leading-relaxed pl-3.5 border-l border-white/10">
                  {activeModalProject.problem}
                </p>
              </div>

              {/* 2. Approach */}
              <div>
                <h4 className="font-mono text-xs text-[#7C9EFF] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  2. Technical Approach
                </h4>
                <p className="text-[#EEEEF2] font-light leading-relaxed pl-3.5 border-l border-white/10">
                  {activeModalProject.approach}
                </p>
              </div>

              {/* 3. Architecture */}
              <div>
                <h4 className="font-mono text-xs text-[#7C9EFF] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
                  3. System Architecture &amp; Data Flow
                </h4>
                <ul className="text-[#94A3B8] font-light space-y-2 pl-3.5 border-l border-white/10 list-disc list-inside">
                  {activeModalProject.architecture.map((item, idx) => (
                    <li key={idx} className="text-[#EEEEF2]">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 4. My Personal Ownership */}
              <div className="p-5 rounded-xl border border-[#7C9EFF]/20 bg-[#080B12]/60">
                <h4 className="font-mono text-xs text-[#A5BDFF] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7C9EFF]" />
                  4. Personal Ownership vs Team Execution
                </h4>
                <ul className="text-xs sm:text-sm text-[#EEEEF2] font-light space-y-1.5 list-disc list-inside">
                  {activeModalProject.ownership.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 5. Evidence & Metrics */}
              <div>
                <h4 className="font-mono text-xs text-[#7C9EFF] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#7C9EFF]" />
                  5. Evidence, Testing &amp; Benchmarks
                </h4>
                <ul className="text-[#94A3B8] font-light space-y-1.5 pl-3.5 border-l border-white/10 list-disc list-inside">
                  {activeModalProject.evidence.map((item, idx) => (
                    <li key={idx} className="text-[#EEEEF2]">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 6. Limitations */}
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.03]">
                <h4 className="font-mono text-xs text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  6. Technical Scope Boundaries &amp; Limitations
                </h4>
                <ul className="text-xs text-[#94A3B8] font-light space-y-1 list-disc list-inside">
                  {activeModalProject.limitations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 items-center">
                <span className="mono-label text-[10px] text-[#64748B] mr-2">TECH STACK:</span>
                {activeModalProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] border border-white/10 text-[#A5BDFF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
