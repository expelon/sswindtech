'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import TrustSection from './TrustSection';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Navbar />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 pl-[0.5rem] pr-[0.5rem] lg:pl-[3rem] lg:pr-[3rem] flex flex-col justify-center min-h-[calc(100vh-6rem)] lg:min-h-0 lg:justify-start">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 items-center lg:items-start">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1 lg:transform lg:translate-y-24">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide">
                <span className="lg:hidden" style={{color: '#395674', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'}}>{t('hero.title')}</span>
                <span className="hidden lg:block" style={{color: '#395674'}}>{t('hero.title')}</span>
              </h1>

              <div className="lg:hidden">
                <p className="text-sm sm:text-base md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-normal" style={{color: '#395674', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)'}}>
                  {t('hero.description')}
                </p>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm sm:text-base md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-normal" style={{color: '#395674'}}>
                  {t('hero.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="hidden lg:inline-flex px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm items-center gap-2 border border-gray-200 text-base">
                  {t('nav.getStarted')}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#395674'}}>
                    <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: 'white'}} />
                  </div>
              </Link>

              <div className="lg:hidden flex gap-3">
                <button className="px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow-sm items-center gap-2 border border-gray-200 text-base">
                  <a href="/contact" className="flex items-center gap-2">
                    {t('nav.getStarted')}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#395674'}}>
                      <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: 'white'}} />
                    </div>
                  </a>
                </button>
                <Link href="/services" className="px-4 py-2 bg-transparent text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-2 text-base" style={{border: '2px solid #395674', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'}}>
                    {t('hero.exploreMore')}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-transparent" style={{border: '2px solid #395674'}}>
                      <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: '#395674'}} />
                    </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link href="/services" className="px-4 py-2 bg-transparent text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-2 text-base" style={{border: '2px solid #395674'}}>
                    {t('hero.exploreMore')}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-transparent" style={{border: '2px solid #395674'}}>
                      <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{color: '#395674'}} />
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6 mt-24 sm:mt-32 lg:mt-48">
          <div className="max-w-[18rem] w-full lg:w-auto">
            <TrustSection />
          </div>
          <div className="max-w-[16rem] w-full lg:w-auto text-center lg:text-left" style={{color: '#395674'}}>
            <h3 className="text-xs sm:text-sm md:text-base font-semibold leading-snug">
              {t('hero.trustedTitle')}
            </h3>
            <p className="mt-2 text-[11px] sm:text-xs leading-relaxed">
              {t('hero.trustedBody')}
            </p>
          </div>
        </div>
      </div>

      </div>
  );
}
