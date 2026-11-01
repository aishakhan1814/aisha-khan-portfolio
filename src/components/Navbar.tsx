import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#approach-section' },
    { name: 'Engineering', href: '#technical-capabilities' },
    { name: 'Work', href: '#selected-works' },
    { name: 'Impact', href: '#impact-recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'py-4 bg-[#080B12]/85 backdrop-blur-xl border-b border-[#7C9EFF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 md:py-8 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Wordmark Logo */}
        <a
          href="#"
          data-magnetic
          data-magnetic-strength="0.25"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] rounded-sm p-1"
          aria-label="Aisha Khan Home"
        >
          <div className="relative font-bold text-xl md:text-2xl tracking-tighter text-[#EEEEF2] flex items-baseline">
            <span>AK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C9EFF] ml-0.5 inline-block group-hover:scale-150 group-hover:shadow-[0_0_8px_#7C9EFF] transition-all duration-300"></span>
          </div>
          <span className="hidden sm:inline-block mono-label text-[10px] text-[#64748B] pl-2 border-l border-white/10 group-hover:text-[#7C9EFF] transition-colors duration-300">
            SYS.DEV / 26
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-magnetic
              data-magnetic-strength="0.3"
              className="relative text-xs uppercase tracking-widest text-[#94A3B8] hover:text-[#EEEEF2] transition-colors duration-300 py-1 px-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12] rounded-sm"
            >
              <span>{link.name}</span>
              {/* Subtle hover underline pill with glow */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#7C9EFF] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#7C9EFF]" />
            </a>
          ))}
        </nav>

        {/* Right: Availability Indicator + Quick Status */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C9EFF]/20 bg-[#7C9EFF]/[0.04] backdrop-blur-sm select-none"
            aria-label="Status: Available for roles"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C9EFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C9EFF]"></span>
            </span>
            <span className="mono-label text-[10px] tracking-wider text-[#A5BDFF] font-medium hidden sm:inline">
              AVAILABLE FOR ROLES
            </span>
            <span className="mono-label text-[10px] tracking-wider text-[#A5BDFF] font-medium sm:hidden">
              AVAILABLE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#EEEEF2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9EFF] rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-6 bg-[#080B12]/95 backdrop-blur-2xl border-b border-[#7C9EFF]/20 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-[#94A3B8] hover:text-[#7C9EFF] py-2 border-b border-white/[0.04] focus:outline-none focus:text-[#7C9EFF]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
