import React from 'react';
import { GraduationCap } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-[#06080F] text-[#EEEEF2] py-16 md:py-24 px-6 md:px-10 border-t border-white/[0.08]"
      aria-label="Education & Academic Background"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div id="education-header" className="mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
              04 // Education
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Academic Foundation
          </h2>
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Undergraduate Degree Card */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-[#0B0F19]/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Chaitanya Bharathi Institute of Technology (CBIT)
                </h3>
                <span className="font-mono text-xs text-[#60A5FA] font-semibold">
                  Hyderabad, India
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#93C5FD] font-mono mb-4">
                Bachelor of Engineering in Computer Science &amp; Engineering
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/[0.08] text-xs font-mono mb-5">
                <span className="text-[#94A3B8]">Cumulative GPA:</span>
                <span className="text-white font-bold text-sm">9.43 / 10.0</span>
                <span className="text-[#64748B] pl-2 border-l border-white/10">Expected May 2028</span>
              </div>

              <div className="text-xs text-[#94A3B8] font-light leading-relaxed">
                <strong className="text-white font-medium">Core Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning Foundations.
              </div>
            </div>
          </div>

          {/* Secondary & Prior Academic Standing */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-[#0B0F19]/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                <GraduationCap className="w-4 h-4 text-[#3B82F6]" />
                <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                  Prior Academic Standing
                </h4>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex items-baseline justify-between font-mono mb-1">
                    <span className="text-white font-medium">Intermediate (Class XII)</span>
                    <span className="text-[#60A5FA] font-bold">98.1%</span>
                  </div>
                  <span className="text-[#64748B] block font-light">
                    Telangana State Board of Intermediate Education
                  </span>
                </div>

                <div className="pt-3 border-t border-white/[0.04]">
                  <div className="flex items-baseline justify-between font-mono mb-1">
                    <span className="text-white font-medium">Class X (SSC)</span>
                    <span className="text-[#60A5FA] font-bold">96.7%</span>
                  </div>
                  <span className="text-[#64748B] block font-light">
                    Secondary School Certificate
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
