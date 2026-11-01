import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#approach-section' },
    { name: 'Engineering', href: '#technical-capabilities' },
    { name: 'Work', href: '#selected-works' },
    { name: 'Impact', href: '#impact-recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="relative z-20 py-16 md:py-20 bg-[#080B12] text-[#EEEEF2] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Identity & Mission */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-xl tracking-tighter text-[#EEEEF2]">AK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF]" />
              <span className="text-xs font-mono text-[#64748B] pl-2 border-l border-white/10 uppercase tracking-widest">
                Aisha Khan
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
              Software Engineer building intelligent systems. Focused on high-performance distributed architectures, applied machine learning, and knowledge representation.
            </p>
          </div>

          {/* Navigation & Direct Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <nav className="flex flex-wrap items-center gap-5 sm:gap-6" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] hover:text-[#EEEEF2] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="mailto:alfalima920@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-[#7C9EFF] hover:border-[#7C9EFF]/30 hover:bg-[#7C9EFF]/5 transition-all duration-200"
              aria-label="Direct Email Link"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>alfalima920@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Base Bar: Copyright, Colophon, & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Aisha Khan. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Crafted with React, Tailwind CSS &amp; GSAP</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-magnetic
            data-magnetic-strength="0.3"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-[#0D121F]/60 text-[#94A3B8] hover:text-[#EEEEF2] hover:border-[#7C9EFF]/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#7C9EFF] group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
