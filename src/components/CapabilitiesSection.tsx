import React from 'react';
import { 
  Code2, 
  Cpu, 
  Server, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilityGroups = [
    {
      title: 'Languages & Core Foundations',
      icon: Code2,
      skills: [
        { name: 'Python', context: 'SENTRIQ, RakshAI' },
        { name: 'Java', context: 'NPTEL Elite Gold Top 5%' },
        { name: 'C++', context: 'Core Algorithms' },
        { name: 'JavaScript & TypeScript', context: 'Frontend & APIs' },
        { name: 'SQL', context: 'Relational Schemas' },
        { name: 'Data Structures & Algorithms', context: '450+ LeetCode' },
      ],
    },
    {
      title: 'Applied AI & Machine Learning',
      icon: Cpu,
      skills: [
        { name: 'TensorFlow & Keras', context: 'Neural Networks' },
        { name: 'Scikit-learn', context: 'Statistical Classification' },
        { name: 'NumPy & Pandas', context: 'High-Dimensional Processing' },
        { name: 'PCA (Dimensionality Reduction)', context: 'RakshAI ~7k records' },
        { name: 'Retrieval-Augmented Generation (RAG)', context: 'Pinecone Vector DB' },
        { name: 'LLM Orchestration', context: 'AWS Bedrock Integration' },
      ],
    },
    {
      title: 'Backend, Cloud & Distributed Systems',
      icon: Server,
      skills: [
        { name: 'React', context: 'Responsive Interfaces' },
        { name: 'Node.js & Express', context: 'REST Architecture' },
        { name: 'FastAPI', context: 'High-Performance APIs' },
        { name: 'AWS Suite', context: 'Bedrock, Step Functions, SNS' },
        { name: 'PostgreSQL & MongoDB', context: 'Relational & Document DBs' },
        { name: 'Docker & CI/CD', context: 'Containerization & GitHub Actions' },
      ],
    },
    {
      title: 'Security, Knowledge & Cryptography',
      icon: ShieldCheck,
      skills: [
        { name: 'CycloneDX 1.6 CBOM', context: 'SENTRIQ Inventory' },
        { name: 'AST Cryptographic Inspection', context: 'Static Code Parsing' },
        { name: 'NIST PQC Standards', context: 'ML-KEM, ML-DSA, SLH-DSA' },
        { name: 'OWL / RDF & Protégé', context: 'Microsoft Hackathon Finalist' },
        { name: 'SPARQL Reasoning', context: 'Attack Path Deduction' },
        { name: 'Knowledge Graphs', context: 'Enterprise Cyber Ontology' },
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#06080F] text-[#EEEEF2] py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.08]"
      aria-label="Technical Capabilities"
    >
      {/* Anchor compatibility for previous link hashes */}
      <span id="technical-capabilities" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div id="capabilities-header" className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
              02 // Technical Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering Toolkit
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            A focused inventory of technologies, platforms, and methodologies applied across production systems, research projects, and competitive hackathons.
          </p>
        </div>

        {/* 4-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="spotlight-card p-6 rounded-xl border border-white/[0.08] bg-[#0B0F19]/60 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                    <Icon className="w-4 h-4 text-[#3B82F6]" />
                    <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex flex-col">
                        <span className="text-xs sm:text-sm text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#93C5FD]">
                          {skill.context}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy One-Liner */}
        <div className="mt-8 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-[#94A3B8]">Tools are evaluated by their reliability, auditability, and suitability for high-consequence workloads.</span>
          </div>
          <a
            href="#selected-works"
            className="text-[#3B82F6] hover:text-[#60A5FA] hover:underline inline-flex items-center gap-1"
          >
            <span>See applied evidence</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
