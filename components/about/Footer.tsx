'use client';

import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                sswindtech
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading wind mill service provider with expert maintenance, installation, and repair solutions for optimal renewable energy system performance.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/services#installation" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Windmill Installation
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Energy Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#inspection" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  System Design
                </Link>
              </li>
              <li>
                <Link href="/services#monitoring" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  Performance Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-white" />
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    123 Energy Lane<br />
                    Green City, GC 12345<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 text-white" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 text-white" />
                <a href="mailto:info@sswindtech.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  info@sswindtech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 sswindtech. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
