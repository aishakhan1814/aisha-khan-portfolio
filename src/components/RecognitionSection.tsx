import React from 'react';
import { Trophy, Users, Award } from 'lucide-react';

export const RecognitionSection: React.FC = () => {
  const hackathons = [
    {
      title: 'JPMorgan Chase & Co. — Code for Good 2026',
      role: 'Selected Participant (Hyderabad)',
      metric: 'Top 150 of 30,000+ applicants (~0.5% acceptance rate)',
      summary: 'Selected for in-person 24-hour social good engineering hackathon following technical and behavioral assessments.',
      highlight: true,
    },
    {
      title: 'Google Developer Groups (GDG) Hackathon',
      role: 'Top 10 Finalist',
      metric: 'Top 10 among 2,000+ participants',
      summary: 'Developed real-time accessible coordination tools evaluated by Google developer experts.',
      highlight: false,
    },
    {
      title: 'Microsoft Ontology Hackathon',
      role: 'Top 10 Finalist Team',
      metric: 'Top 10 among 300+ national teams',
      summary: 'Engineered an enterprise cybersecurity breach ontology with OWL/RDF semantic attack path deduction.',
      highlight: false,
    },
    {
      title: 'Vyoma National Hackathon',
      role: 'Runner-Up (2nd Place)',
      metric: 'Podium Finish',
      summary: 'Built smart EV charging station management and demand forecasting using embedded IoT and ML.',
      highlight: false,
    },
    {
      title: 'Hack Culture 2.0',
      role: 'Top 20 Finalist',
      metric: 'Top 20 of 500+ developers',
      summary: 'Engineered automated web workflow accessibility tools under 36-hour sprint constraints.',
      highlight: false,
    },
  ];

  const leadership = [
    {
      org: 'CBIT Open Source Club',
      role: 'Git & GitHub Session Lead',
      detail: 'Conducted hands-on workshops instructing 300+ engineering students in version control and OSS workflows.',
    },
    {
      org: 'Chaitanya Astra',
      role: 'Joint Secretary',
      detail: 'Managed student governance, technical event operations, and department coordination.',
    },
    {
      org: 'Entrepreneurship Development Cell (EDC)',
      role: 'Technical Coordinator & Podcast Producer',
      detail: 'Produced student founder mini-podcasts and coordinated digital infrastructure for entrepreneurship initiatives.',
    },
    {
      org: 'Adobe India',
      role: 'Student Insider Ambassador',
      detail: 'Campus advocate bridging creative digital tooling and technical students.',
    },
  ];

  const scholarshipsAndHonors = [
    {
      title: 'GHCI AIP Scholar',
      detail: 'Selected for the Advancing Inclusion Program (AIP) at Grace Hopper Celebration India.',
    },
    {
      title: 'SheFi Scholar (Cohort 15)',
      detail: 'Awarded educational scholarship exploring decentralized infrastructure and cryptographic primitives.',
    },
    {
      title: 'NPTEL Java Certification — Elite Gold',
      detail: 'Achieved Elite Gold classification, ranking in the 96th percentile (top 5% nationwide).',
    },
    {
      title: 'Oracle Cloud Infrastructure (OCI) 2025',
      detail: 'Certified AI Foundations Associate credential verifying cloud and ML fundamentals.',
    },
    {
      title: 'Algorithmic Problem Solving',
      detail: 'Solved 450+ data structure and algorithm problems across LeetCode and competitive platforms.',
    },
  ];

  return (
    <section
      id="recognition"
      className="relative w-full bg-[#06080F] text-[#EEEEF2] py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.08]"
      aria-label="Recognition & Leadership"
    >
      {/* Anchor compatibility alias */}
      <span id="impact-recognition" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div id="recognition-header" className="mb-14 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
              03 // Recognition &amp; Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Honors &amp; Initiatives
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            Quantified competitive hackathon finishes, student leadership, and academic recognitions.
          </p>
        </div>

        {/* 1. Competitive Honors & Hackathons */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-4 h-4 text-[#3B82F6]" />
            <h3 className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
              Hackathons &amp; Competitive Recognitions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hackathons.map((h) => (
              <div
                key={h.title}
                className={`p-5 rounded-xl border transition-colors ${
                  h.highlight
                    ? 'border-[#3B82F6]/40 bg-[#0B0F19]/90 md:col-span-2'
                    : 'border-white/[0.06] bg-[#0B0F19]/40'
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {h.title}
                  </h4>
                  <span className="font-mono text-xs text-[#60A5FA] font-semibold">
                    {h.metric}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#93C5FD] mb-2">{h.role}</div>
                <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                  {h.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Leadership & Scholarships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Leadership & Extracurriculars */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-4 h-4 text-[#3B82F6]" />
              <h3 className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                Leadership &amp; Community (Compressed)
              </h3>
            </div>

            <div className="space-y-3">
              {leadership.map((item) => (
                <div
                  key={item.org}
                  className="p-4 rounded-xl border border-white/[0.06] bg-[#0B0F19]/40"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white">{item.org}</span>
                    <span className="font-mono text-[11px] text-[#93C5FD]">{item.role}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarships & Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-[#3B82F6]" />
              <h3 className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                Scholarships &amp; Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {scholarshipsAndHonors.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-white/[0.06] bg-[#0B0F19]/40"
                >
                  <div className="text-xs font-bold text-white mb-1">{item.title}</div>
                  <p className="text-xs text-[#94A3B8] font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
