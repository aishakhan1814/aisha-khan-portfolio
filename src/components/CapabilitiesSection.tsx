import React, { useState } from 'react';
import {
  LucideIcon,
  Cpu,
  Server,
  Cloud,
  Database,
  Terminal,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  Code2,
  Workflow,
} from 'lucide-react';

export interface CapabilityItem {
  name: string;
  role: string;
  project?: 'SENTRIQ' | 'RakshAI' | 'Cybersecurity Breach Ontology' | 'SigmaGPT';
  projectContext?: string;
  projectAnchor?: string;
}

export interface DomainCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  evidenceProject: string;
  evidenceHeadline: string;
  evidenceDetails: string;
  evidenceAnchor: string;
  icon: LucideIcon;
  items: CapabilityItem[];
}

export const domainCategories: DomainCategory[] = [
  {
    id: 'ai-ml',
    number: '01',
    title: 'Intelligent Systems & Applied ML',
    subtitle: 'HIGH-DIMENSIONAL DATA & RETRIEVAL ARCHITECTURES',
    description:
      'Designing and orchestrating machine learning pipelines from high-dimensional statistical transformations to dense vector indexing, semantic embeddings, and LLM-grounded retrieval workflows.',
    evidenceProject: 'RakshAI & SigmaGPT',
    evidenceHeadline: 'PCA Feature Transformation & Multi-Source RAG',
    evidenceDetails:
      'Engineered PCA feature reduction over ~7,000 BloodWarriors records and built multi-source RAG pipelines utilizing Pinecone vector indices to reduce clinical triage turnaround from ~24h to under 4h. Integrated OpenAI API for SigmaGPT conversational reasoning.',
    evidenceAnchor: '#project-rakshai',
    icon: Cpu,
    items: [
      {
        name: 'TensorFlow & Keras',
        role: 'Deep neural network architecture design, layer definition & training pipelines.',
      },
      {
        name: 'Scikit-learn',
        role: 'Statistical modeling, classification, clustering & validation metrics.',
        project: 'RakshAI',
        projectContext: 'Preprocessing & baseline model evaluation on medical dataset',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'NumPy & Pandas',
        role: 'High-dimensional array manipulation, tabular normalization & data wrangling.',
        project: 'RakshAI',
        projectContext: 'Data cleaning & feature matrix preparation on ~7,000 rows',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'PCA (Principal Component Analysis)',
        role: 'Dimensionality reduction preserving maximal variance in high-dimensional feature spaces.',
        project: 'RakshAI',
        projectContext: 'Dimensional reduction across multi-parameter donor records',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'Feature Engineering',
        role: 'Domain-specific feature extraction, variance scaling & categorical encoding.',
        project: 'RakshAI',
        projectContext: 'Donor-patient compatibility encoding for fast matching',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'Machine Learning Pipelines',
        role: 'End-to-end reproducible training, feature transformation & automated validation checks.',
        project: 'RakshAI',
        projectContext: 'Validated through 3-4 structured algorithmic verification checks',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        role: 'Contextual retrieval pipelines pairing semantic similarity with grounded generative reasoning.',
        project: 'RakshAI',
        projectContext: 'Querying medical protocols & donor registries via vector context',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'Large Language Model Integration',
        role: 'Prompt structuring, guardrails, context window management & deterministic structured output.',
        project: 'SigmaGPT',
        projectContext: 'Multi-turn conversation management with OpenAI API',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'LangChain',
        role: 'Framework for chaining prompt templates, retrieval components, and language model integrations.',
      },
      {
        name: 'Pinecone',
        role: 'Managed vector database for Approximate Nearest Neighbor (ANN) search and dense embeddings.',
        project: 'RakshAI',
        projectContext: 'Semantic vector indexing of donor and registry records',
        projectAnchor: '#project-rakshai',
      },
    ],
  },
  {
    id: 'backend-api',
    number: '02',
    title: 'Backend Architecture & API Systems',
    subtitle: 'ASYNCHRONOUS SERVICES & HTTP CONTRACTS',
    description:
      'Building resilient HTTP services, asynchronous task runners, and API interfaces engineered for predictable throughput and clear service contracts.',
    evidenceProject: 'SENTRIQ & SigmaGPT',
    evidenceHeadline: 'FastAPI Repository Scanning & Express API Routing',
    evidenceDetails:
      'Engineered FastAPI backend service for SENTRIQ to coordinate AST repository scans (35–45s typical). Built Node.js and Express API middleware for conversation handling and OpenAI API integration in SigmaGPT.',
    evidenceAnchor: '#project-sentriq',
    icon: Server,
    items: [
      {
        name: 'FastAPI',
        role: 'Modern Python framework for building REST APIs with automatic schema documentation and type hints.',
        project: 'SENTRIQ',
        projectContext: 'Backend service coordinating repository scans and CBOM export',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'Node.js',
        role: 'Event-driven JavaScript runtime powering non-blocking server applications and worker pipelines.',
        project: 'SigmaGPT',
        projectContext: 'API gateway handling concurrent conversation streams',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'Express',
        role: 'Minimalist web framework for routing middleware, session management & API dispatch.',
        project: 'SigmaGPT',
        projectContext: 'Session endpoints and message routing middleware',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'REST API Development',
        role: 'Standard RESTful endpoint design, HTTP request handling, and structured response formats.',
        project: 'SENTRIQ',
        projectContext: 'API endpoints for scan management, CBOM retrieval, and risk reporting',
        projectAnchor: '#project-sentriq',
      },
    ],
  },
  {
    id: 'systems-languages',
    number: '03',
    title: 'Systems & Core Languages',
    subtitle: 'COMPUTATIONAL LOGIC & TYPE-SAFE FOUNDATIONS',
    description:
      'Multi-paradigm programming foundations balancing low-level memory awareness, compile-time type verification, mathematical optimization, and robust cross-platform execution.',
    evidenceProject: 'SENTRIQ & Cybersecurity Ontology',
    evidenceHeadline: 'Static AST Inspection & Structured Relational Models',
    evidenceDetails:
      'Leveraged Python’s native Abstract Syntax Tree (ast) parsing library to inspect cryptographic API calls across 10 repositories in SENTRIQ. Collaborated on Python data extraction scripts and structured SQL queries.',
    evidenceAnchor: '#project-sentriq',
    icon: Terminal,
    items: [
      {
        name: 'Python',
        role: 'Primary language for AST code analysis, ML feature engineering, and high-concurrency backends.',
        project: 'SENTRIQ',
        projectContext: 'AST parsing engine, Mosca analysis & QUANTS scoring logic',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'Java',
        role: 'Object-oriented systems architecture, strong typing, concurrent programming & enterprise patterns.',
      },
      {
        name: 'C++',
        role: 'Low-level systems programming, memory layout awareness, pointers & algorithmic optimization.',
      },
      {
        name: 'JavaScript (ESNext)',
        role: 'Modern asynchronous runtime development, closures, event queues & cross-environment tooling.',
        project: 'SigmaGPT',
        projectContext: 'Full-stack client state management & Node.js backend services',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'SQL',
        role: 'Declarative querying, relational schema modeling, and structured data retrieval.',
        project: 'SENTRIQ',
        projectContext: 'Relational queries for scan records and detected vulnerabilities',
        projectAnchor: '#project-sentriq',
      },
    ],
  },
  {
    id: 'cloud-infra',
    number: '04',
    title: 'Cloud Orchestration & Infrastructure',
    subtitle: 'SERVERLESS WORKFLOWS & CONTAINERIZATION',
    description:
      'Deploying decoupled serverless workflows, cloud-native inference endpoints, isolated container execution, and automated deployment verification pipelines.',
    evidenceProject: 'RakshAI & SENTRIQ',
    evidenceHeadline: 'AWS Workflow Orchestration & Containerized Scans',
    evidenceDetails:
      'Orchestrated asynchronous AWS Step Functions workflows coordinating Amazon Bedrock, SageMaker inference endpoints, and SNS alerts for blood requests in RakshAI. Containerized SENTRIQ scanning environment using Docker with GitHub Actions CI/CD.',
    evidenceAnchor: '#project-rakshai',
    icon: Cloud,
    items: [
      {
        name: 'AWS Step Functions',
        role: 'Serverless state machine orchestration for managing asynchronous coordination and automated failure retries.',
        project: 'RakshAI',
        projectContext: 'State machine coordination connecting data triage, model inference & alerts',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'AWS Bedrock',
        role: 'Managed foundation model API invocation with privacy boundaries and system guardrails.',
        project: 'RakshAI',
        projectContext: 'Clinical document summarization & triage recommendation synthesis',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'AWS SageMaker',
        role: 'Managed ML model deployment, hosting inference endpoints, and feature store integration.',
        project: 'RakshAI',
        projectContext: 'Hosting PCA feature models & compatibility scoring endpoint',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'AWS SNS',
        role: 'High-throughput publish/subscribe messaging service for multi-channel emergency alert distribution.',
        project: 'RakshAI',
        projectContext: 'Pushing urgent notifications to registered donors & hospitals',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'Docker',
        role: 'Containerization platform for creating consistent and reproducible application environments.',
        project: 'SENTRIQ',
        projectContext: 'Containerized execution environment for repository scanning',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'CI/CD Pipelines',
        role: 'Automated continuous integration checks, static analysis linting, and build verification gates.',
        project: 'SENTRIQ',
        projectContext: 'GitHub Actions workflow running unit tests & build validation on PRs',
        projectAnchor: '#project-sentriq',
      },
    ],
  },
  {
    id: 'databases',
    number: '05',
    title: 'Data Systems & Polyglot Persistence',
    subtitle: 'RELATIONAL INTEGRITY & VECTOR STORAGE',
    description:
      'Data architectures balancing relational data storage for structured records with vector indexing for semantic similarity queries.',
    evidenceProject: 'SENTRIQ & RakshAI',
    evidenceHeadline: 'Relational Findings Catalog & Vector Indices',
    evidenceDetails:
      'Designed relational schemas in PostgreSQL to store cryptographic vulnerability catalogs and scan histories in SENTRIQ. Persisted records in MongoDB paired with Pinecone vector indices in RakshAI.',
    evidenceAnchor: '#project-sentriq',
    icon: Database,
    items: [
      {
        name: 'PostgreSQL',
        role: 'Open-source relational database management system for structured data storage and queries.',
        project: 'SENTRIQ',
        projectContext: 'Relational storage for repository scan records and cryptographic findings',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'MongoDB',
        role: 'Document-oriented database for flexible schema evolution and nested unstructured data.',
        project: 'RakshAI',
        projectContext: 'Storing patient records & audit logs from BloodWarriors dataset',
        projectAnchor: '#project-rakshai',
      },
      {
        name: 'MySQL',
        role: 'Relational database engine for structured transactional data with indexing optimization.',
      },
      {
        name: 'Pinecone',
        role: 'Vector database for dense vector storage and cosine similarity queries.',
        project: 'RakshAI',
        projectContext: 'Vector index supporting donor-recipient compatibility retrieval',
        projectAnchor: '#project-rakshai',
      },
    ],
  },
  {
    id: 'frontend-app',
    number: '06',
    title: 'Frontend Architecture & Application UI',
    subtitle: 'RESPONSIVE COMPONENT SYSTEMS & STATE DESIGN',
    description:
      'Modern web application engineering emphasizing declarative component architecture, fluid responsive viewports, accessible design patterns, and client state synchronization.',
    evidenceProject: 'SigmaGPT & SENTRIQ',
    evidenceHeadline: 'Conversational Application Interface & Findings Dashboard',
    evidenceDetails:
      'Built a conversational interface for SigmaGPT with persistent conversation drawers. Developed the SENTRIQ frontend dashboard for interactive CBOM inspection and quantum risk metrics.',
    evidenceAnchor: '#project-sigmagpt',
    icon: Layers,
    items: [
      {
        name: 'React',
        role: 'Declarative component architecture, custom hook composition, and reactive state management.',
        project: 'SigmaGPT',
        projectContext: 'Interactive chat interface, conversation history & session management',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'JavaScript (ESNext / DOM)',
        role: 'Client-side event modeling, asynchronous state coordination, and DOM lifecycle optimization.',
        project: 'SigmaGPT',
        projectContext: 'Client-side event handling, drawer scrolling & session state retention',
        projectAnchor: '#project-sigmagpt',
      },
      {
        name: 'Responsive UI Development',
        role: 'Mobile-first viewport engineering, flexible grid systems, typography clamping & touch ergonomics.',
        project: 'SENTRIQ',
        projectContext: 'Responsive dual-column audit views scaling from 360px to 1440px',
        projectAnchor: '#project-sentriq',
      },
    ],
  },
  {
    id: 'workflow-analysis',
    number: '07',
    title: 'Engineering Workflow & Security Analysis',
    subtitle: 'STATIC CODE INSPECTION & FORMAL SPECIFICATION',
    description:
      'Software supply chain verification, deep static syntax tree analysis, semantic knowledge graph modeling, and disciplined version control engineering workflows.',
    evidenceProject: 'SENTRIQ & Cybersecurity Ontology',
    evidenceHeadline: 'AST-Based CBOM Generation & Ontology Modeling',
    evidenceDetails:
      'Engineered an AST pattern detector in SENTRIQ to extract cryptographic algorithms into CycloneDX 1.6 CBOM format. Co-authored breach ontology modeling 13 entity types, 15 relationships, and 38 properties in OWL/RDF using Protégé during the Microsoft Ontology Hackathon.',
    evidenceAnchor: '#project-sentriq',
    icon: ShieldCheck,
    items: [
      {
        name: 'AST-Based Code Analysis',
        role: 'Deep semantic syntax tree inspection for cryptographic algorithm and API pattern detection.',
        project: 'SENTRIQ',
        projectContext: 'Parsing Python syntax trees to flag vulnerable cryptographic primitives',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'CycloneDX 1.6 CBOM',
        role: 'Software Bill of Materials standard for Cryptographic Assets mapped to NIST PQC guidelines.',
        project: 'SENTRIQ',
        projectContext: 'Generating machine-readable CBOM JSON exports from static scans',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'Knowledge Representation (OWL / RDF)',
        role: 'Semantic knowledge modeling, class hierarchies, relationships and axioms using OWL, RDF and Protégé.',
        project: 'Cybersecurity Breach Ontology',
        projectContext: 'Modeled 13 entity types, 15 relationships, 38 properties across 2 attack scenarios',
        projectAnchor: '#project-ontology',
      },
      {
        name: 'Git & GitHub',
        role: 'Distributed version control, branch protection hygiene, pull request reviews & commit history.',
      },
      {
        name: 'GitHub Actions',
        role: 'Declarative CI workflow definition running automated test matrices and build verifications.',
        project: 'SENTRIQ',
        projectContext: 'Automating multi-repo scan regression suites on code change',
        projectAnchor: '#project-sentriq',
      },
      {
        name: 'Debugging & Profiling Workflows',
        role: 'Root-cause analysis, asynchronous trace debugging, latency profiling & memory inspection.',
      },
    ],
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'domain' | 'matrix'>('domain');

  const activeDomain = domainCategories[activeDomainIndex];
  const ActiveDomainIcon = activeDomain.icon;

  const projectFilters = [
    { label: 'All Capabilities', value: 'ALL' },
    { label: 'SENTRIQ', value: 'SENTRIQ' },
    { label: 'RakshAI', value: 'RakshAI' },
    { label: 'Cyber Ontology', value: 'Cybersecurity Breach Ontology' },
    { label: 'SigmaGPT', value: 'SigmaGPT' },
  ];

  return (
    <section
      id="technical-capabilities"
      className="relative z-20 py-28 md:py-40 bg-[#080B12] text-[#EEEEF2] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Anchor compatibility alias */}
      <span id="phase04-bridge" className="sr-only" aria-hidden="true" />

      {/* Background Lighting & Atmospheric Vignette */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#7C9EFF]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 rounded-full bg-[#3B82F6]/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* =========================================================================
            1. SECTION HEADER: EDITORIAL OVERVIEW
            ========================================================================= */}
        <div id="capabilities-header" className="mb-16 md:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#7C9EFF]" />
            <span className="mono-label text-xs sm:text-sm text-[#7C9EFF] font-semibold tracking-widest">
              03 / TECHNICAL CAPABILITIES
            </span>
            <span className="mono-label text-[10px] text-[#64748B] hidden sm:inline ml-4 pl-4 border-l border-white/10">
              VERIFIED ENGINEERING INVENTORY
            </span>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tightest leading-[0.98] text-[#EEEEF2]">
              <span className="block">THE TOOLS BEHIND</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EEEEF2] via-[#EEEEF2] to-[#7C9EFF]/80">
                THE THINKING.
              </span>
            </h2>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-12">
            <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-light max-w-2xl leading-relaxed">
              A practical engineering toolkit spanning software development, intelligent systems, backend architecture and the infrastructure that brings products to life.
            </p>

            {/* Architectural Telemetry Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Domains</span>
                <span className="text-xl sm:text-2xl font-bold text-[#7C9EFF]">07</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Tools</span>
                <span className="text-xl sm:text-2xl font-bold text-[#EEEEF2]">30+</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Systems</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">04</span>
              </div>
              <div className="p-3 rounded-lg border border-white/[0.06] bg-[#0D121F]/40 backdrop-blur-sm">
                <span className="block text-[10px] text-[#64748B] uppercase tracking-wider">Metrics</span>
                <span className="text-[11px] font-semibold text-[#94A3B8] mt-1.5 block">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. INTERACTIVE CONTROLS: VIEW TOGGLE & PROJECT FILTER
            ========================================================================= */}
        <div id="capabilities-controls" className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Project Cross-Reference Filters */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter capabilities by project evidence">
            <span className="text-xs font-mono text-[#64748B] mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#7C9EFF]" />
              EVIDENCE:
            </span>
            {projectFilters.map((filter) => {
              const isActive = selectedProjectFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setSelectedProjectFilter(filter.value)}
                  data-magnetic
                  data-magnetic-strength="0.15"
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#7C9EFF] text-[#080B12] font-semibold shadow-[0_0_15px_rgba(124,158,255,0.4)]'
                      : 'bg-white/[0.03] text-[#94A3B8] hover:text-[#EEEEF2] hover:bg-white/[0.06] border border-white/5'
                  }`}
                >
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Interactive Explorer vs. Full Matrix */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white/[0.03] p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setViewMode('domain')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                viewMode === 'domain'
                  ? 'bg-[#0D121F] text-[#7C9EFF] border border-[#7C9EFF]/30 shadow-sm'
                  : 'text-[#64748B] hover:text-[#94A3B8]'
              }`}
            >
              DOMAIN EXPLORER
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                viewMode === 'matrix'
                  ? 'bg-[#0D121F] text-[#7C9EFF] border border-[#7C9EFF]/30 shadow-sm'
                  : 'text-[#64748B] hover:text-[#94A3B8]'
              }`}
            >
              FULL MATRIX
            </button>
          </div>
        </div>

        {/* =========================================================================
            3A. VIEW MODE 1: INTERACTIVE DOMAIN EXPLORER
            ========================================================================= */}
        {viewMode === 'domain' && (
          <div id="capabilities-workbench" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Domain Selector Tabs (Accessible TabList) */}
            <div className="lg:col-span-4 flex flex-col space-y-2" role="tablist" aria-label="Engineering domain categories">
              {domainCategories.map((domain, idx) => {
                const isActive = activeDomainIndex === idx;
                const DomainIcon = domain.icon;
                const matchesFilter =
                  selectedProjectFilter === 'ALL' ||
                  domain.items.some((item) => item.project === selectedProjectFilter);

                return (
                  <button
                    key={domain.id}
                    id={`tab-${domain.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${domain.id}`}
                    onClick={() => setActiveDomainIndex(idx)}
                    className={`group w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-4 relative overflow-hidden ${
                      isActive
                        ? 'bg-[#0D121F] border-[#7C9EFF]/40 shadow-[0_0_25px_rgba(124,158,255,0.08)]'
                        : 'bg-white/[0.015] border-white/[0.05] hover:bg-white/[0.035] hover:border-white/10'
                    } ${!matchesFilter ? 'opacity-40' : 'opacity-100'}`}
                  >
                    {/* Active Accent Pillar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7C9EFF] shadow-[0_0_8px_#7C9EFF]" />
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <DomainIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#7C9EFF]' : 'text-[#64748B]'}`} />
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#7C9EFF]' : 'text-[#64748B]'}`}>
                          {domain.number}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider truncate">
                          {domain.items.length} TECHNOLOGIES
                        </span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight truncate ${isActive ? 'text-[#EEEEF2]' : 'text-[#94A3B8] group-hover:text-[#EEEEF2]'}`}>
                        {domain.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#64748B] line-clamp-1 font-light">
                        {domain.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? 'text-[#7C9EFF] translate-x-0.5 -translate-y-0.5' : 'text-[#64748B] group-hover:text-[#94A3B8]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Domain Deep-Dive Workspace Panel */}
            <div
              id={`tabpanel-${activeDomain.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeDomain.id}`}
              className="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Domain Watermark */}
              <div className="absolute right-4 bottom-4 font-mono text-8xl md:text-9xl font-bold text-white/[0.015] select-none pointer-events-none">
                {activeDomain.number}
              </div>

              <div>
                {/* Domain Header Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-md bg-[#7C9EFF]/10 border border-[#7C9EFF]/20 text-[#7C9EFF]">
                      <ActiveDomainIcon className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-[#7C9EFF]">
                      DOMAIN {activeDomain.number}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider hidden sm:inline">
                      {activeDomain.subtitle}
                    </span>
                  </div>

                  <a
                    href={activeDomain.evidenceAnchor}
                    className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#7C9EFF] hover:underline"
                  >
                    <span>View In Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#EEEEF2]">
                  {activeDomain.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                  {activeDomain.description}
                </p>

                {/* Evidence Callout Blueprint */}
                <div className="mt-8 p-5 rounded-xl border border-[#7C9EFF]/20 bg-[#080B12]/80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#7C9EFF]/10 border-b border-l border-[#7C9EFF]/20 font-mono text-[9px] text-[#7C9EFF] tracking-widest uppercase">
                    SYSTEM EVIDENCE
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#7C9EFF]/10 border border-[#7C9EFF]/30 text-[#7C9EFF] shrink-0 mt-0.5">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#7C9EFF] uppercase tracking-wider">
                        {activeDomain.evidenceProject} — {activeDomain.evidenceHeadline}
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-[#EEEEF2] font-light leading-relaxed">
                        {activeDomain.evidenceDetails}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Capability Inventory */}
                <div className="mt-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#64748B] mb-4 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#7C9EFF]" />
                    TECHNICAL INVENTORY &amp; VERIFIED ROLES
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeDomain.items.map((item) => {
                      const isHighlighted =
                        selectedProjectFilter !== 'ALL' && item.project === selectedProjectFilter;
                      const isDimmed =
                        selectedProjectFilter !== 'ALL' && item.project !== selectedProjectFilter;

                      return (
                        <div
                          key={item.name}
                          className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                            isHighlighted
                              ? 'bg-[#7C9EFF]/10 border-[#7C9EFF]/50 shadow-[0_0_15px_rgba(124,158,255,0.15)]'
                              : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                          } ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="font-semibold text-sm text-[#EEEEF2]">
                                {item.name}
                              </span>
                              {item.project && (
                                <a
                                  href={item.projectAnchor || '#selected-works'}
                                  className="px-2 py-0.5 rounded text-[9px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-400 transition-colors"
                                >
                                  {item.project}
                                </a>
                              )}
                            </div>
                            <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                              {item.role}
                            </p>
                          </div>

                          {item.projectContext && (
                            <div className="mt-3 pt-2.5 border-t border-white/[0.04] font-mono text-[10px] text-[#7C9EFF]/80 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-[#7C9EFF]" />
                              <span className="truncate">{item.projectContext}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Navigation between domains */}
              <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B]">
                  DOMAIN {activeDomainIndex + 1} OF {domainCategories.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    disabled={activeDomainIndex === 0}
                    onClick={() => setActiveDomainIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-[#94A3B8] hover:text-[#EEEEF2] hover:border-white/30 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    PREV
                  </button>
                  <button
                    disabled={activeDomainIndex === domainCategories.length - 1}
                    onClick={() =>
                      setActiveDomainIndex((prev) => Math.min(domainCategories.length - 1, prev + 1))
                    }
                    className="px-3 py-1.5 rounded-lg border border-[#7C9EFF]/30 bg-[#7C9EFF]/10 text-xs font-mono text-[#7C9EFF] hover:bg-[#7C9EFF] hover:text-[#080B12] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                  >
                    NEXT DOMAIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3B. VIEW MODE 2: FULL SYSTEM ARCHITECTURE MATRIX
            ========================================================================= */}
        {viewMode === 'matrix' && (
          <div id="capabilities-matrix" className="space-y-8">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#0D121F]/30 text-xs font-mono text-[#94A3B8] flex items-center justify-between">
              <span>EXPANDED ARCHITECTURAL MATRIX — ALL VERIFIED CAPABILITIES ACROSS 7 DOMAINS</span>
              <span className="text-[#7C9EFF] hidden sm:inline">SORTED BY ENGINEERING DISCIPLINE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domainCategories.map((domain) => {
                const MatrixDomainIcon = domain.icon;
                const matchesFilter =
                  selectedProjectFilter === 'ALL' ||
                  domain.items.some((item) => item.project === selectedProjectFilter);

                return (
                  <div
                    key={domain.id}
                    className={`p-6 rounded-2xl border border-white/[0.08] bg-[#0D121F]/40 backdrop-blur-md flex flex-col justify-between transition-opacity duration-300 ${
                      !matchesFilter ? 'opacity-30' : 'opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <MatrixDomainIcon className="w-4 h-4 text-[#7C9EFF]" />
                          <span className="font-mono text-xs text-[#7C9EFF] font-bold">
                            {domain.number}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[#64748B]">
                          {domain.items.length} SKILLS
                        </span>
                      </div>

                      <h4 className="text-xl font-bold tracking-tight text-[#EEEEF2]">
                        {domain.title}
                      </h4>
                      <p className="mt-1 text-xs font-mono text-[#7C9EFF] uppercase tracking-wider">
                        {domain.subtitle}
                      </p>

                      <p className="mt-3 text-xs text-[#94A3B8] font-light leading-relaxed">
                        {domain.description}
                      </p>

                      {/* Stack List */}
                      <div className="mt-6 space-y-2">
                        {domain.items.map((item) => {
                          const isHighlighted =
                            selectedProjectFilter !== 'ALL' && item.project === selectedProjectFilter;

                          return (
                            <div
                              key={item.name}
                              className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 transition-all duration-200 ${
                                isHighlighted
                                  ? 'bg-[#7C9EFF]/20 border-[#7C9EFF]/50 text-white font-medium'
                                  : 'bg-white/[0.02] border-white/[0.04] text-[#94A3B8] hover:text-[#EEEEF2]'
                              }`}
                            >
                              <span className="font-mono">{item.name}</span>
                              {item.project && (
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                  {item.project}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06]">
                      <a
                        href={domain.evidenceAnchor}
                        className="text-xs font-mono text-[#7C9EFF] hover:underline flex items-center justify-between"
                      >
                        <span>Evidence: {domain.evidenceProject}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
