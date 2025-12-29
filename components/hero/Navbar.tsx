'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Projects', href: '#projects' },
  { name: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-2 left-2 right-2 z-50 lg:top-8 lg:left-12 lg:right-12">
      <div className="bg-transparent lg:border lg:border-white/50 lg:shadow-lg lg:rounded-full">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-12 lg:h-14 px-3 lg:px-6">
            <span className="text-xl sm:text-2xl font-bold" style={{color: '#395674'}}>
              sswindtech
            </span>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#395674]/80 font-medium transition-colors duration-200 relative group" style={{color: '#395674'}}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: '#395674'}} />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="px-4 py-2.5 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-1.5 border border-gray-200 text-sm transition-all duration-300 hover:gap-2 group">
              Get Started
              <div className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45" style={{backgroundColor: '#395674'}}>
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: 'white'}} />
              </div>
            </button>
          </div>

          <button
            className="lg:hidden p-2 hover:text-[#395674]/80 transition-colors" style={{color: '#395674'}}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-2 right-2 bg-white/90 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl mt-2">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 hover:text-[#395674]/80 font-medium transition-colors duration-200" style={{color: '#395674'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 border border-gray-200">
              Get Started
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#395674'}}>
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" style={{color: 'white'}} />
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
