'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-2 left-2 right-2 z-50 lg:top-8 lg:left-12 lg:right-12">
      <div className="bg-transparent lg:border lg:border-white/50 lg:shadow-lg lg:rounded-full">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-12 lg:h-14 px-3 lg:px-6">
            <div className="flex items-center gap-0">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image 
                  src="/logo2.png" 
                  alt="SS Wind Tech Logo" 
                  fill 
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold" style={{color: '#395674'}}>
                SS Wind Tech
              </span>
            </div>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#395674]/80 font-medium transition-colors duration-200 relative group" 
                style={{
                  color: pathname === link.href ? '#395674' : '#395674',
                  fontWeight: pathname === link.href ? '600' : '500'
                }}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{backgroundColor: '#395674'}} 
                />
              </Link>
            ))}
          </div>

            <div className="hidden lg:block">
              <Link href="/contact" className="px-4 py-2.5 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-1.5 border border-gray-200 text-sm transition-all duration-300 hover:gap-2 group">
                Get Started
                <div className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45" style={{backgroundColor: '#395674'}}>
                  <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: 'white'}} />
                </div>
              </Link>
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-[#395674]/80 font-medium transition-colors duration-200"
                style={{
                  color: pathname === link.href ? '#395674' : '#395674',
                  fontWeight: pathname === link.href ? '600' : '500'
                }}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="ml-2 text-xs" style={{color: '#395674'}}>●</span>
                )}
              </Link>
            ))}
            <Link href="/contact" className="w-full px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 border border-gray-200">
              Get Started
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#395674'}}>
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" style={{color: 'white'}} />
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
