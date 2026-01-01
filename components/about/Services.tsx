'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
        <div className="grid lg:grid-cols-8 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Large Image */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="relative h-64 sm:h-80 lg:h-[36rem] rounded-2xl overflow-hidden">
              <Image 
                src="/home2.webp" 
                alt="Wind turbine energy solutions" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4" style={{ color: '#395674' }}>
                Showcasing our expert wind-energy solutions.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From initial consultation to ongoing maintenance, we provide comprehensive wind energy services tailored to your specific needs.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Consultation Card */}
              <div className="bg-[#e0e0ff] bg-opacity-50 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col">
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2" style={{ color: '#395674' }}>
                    Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    Our expert team assesses your energy needs and site conditions to recommend the perfect wind energy solution for your property.
                  </p>
                </div>
                <Link href="/contact" className="px-3 sm:px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 border border-gray-200 text-xs sm:text-sm hover:shadow-md transition-shadow mt-auto w-full sm:w-auto">
                  Get Started
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-45deg]" style={{ color: 'white' }} />
                  </div>
                </Link>
              </div>

              {/* Installation Card */}
              <div className="bg-[#e0e0ff] bg-opacity-50 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col">
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2" style={{ color: '#395674' }}>
                    Installation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    Professional installation of windmill systems with minimal disruption, ensuring optimal performance and safety standards.
                  </p>
                </div>
                <Link href="/contact" className="px-3 sm:px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 border border-gray-200 text-xs sm:text-sm hover:shadow-md transition-shadow mt-auto w-full sm:w-auto">
                  Get Started
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-45deg]" style={{ color: 'white' }} />
                  </div>
                </Link>
              </div>

              {/* Maintenance Card */}
              <div className="bg-[#e0e0ff] bg-opacity-50 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col">
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2" style={{ color: '#395674' }}>
                    Maintenance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    Regular maintenance and support services to keep your wind energy systems running at peak efficiency year-round.
                  </p>
                </div>
                <Link href="/contact" className="px-3 sm:px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center justify-center gap-2 border border-gray-200 text-xs sm:text-sm hover:shadow-md transition-shadow mt-auto w-full sm:w-auto">
                  Get Started
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-45deg]" style={{ color: 'white' }} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
