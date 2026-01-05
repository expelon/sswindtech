'use client';

import Image from 'next/image';
import { ArrowRight, Wind, Zap, Shield, Leaf } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useRouter } from 'next/navigation';

export default function WhyChooseUs() {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-0 text-left" style={{ color: '#395674' }}>
            {t('home.whyChooseUs.title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md text-left">
            {t('home.whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Left Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 order-1">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4" style={{ backgroundColor: '#395674' }}>
                <Wind className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              {t('home.whyChooseUs.leftCard')}
            </p>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image 
                src="/wind1.webp" 
                alt="Wind turbines at sunset" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Image */}
          <div className="order-2 lg:order-2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image 
                src="/wind.webp" 
                alt="Modern windmill turbines in operation" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 order-3">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4" style={{ backgroundColor: '#395674' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              {t('home.whyChooseUs.rightCard')}
            </p>
            <button 
              onClick={() => router.push('/services')}
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-2 border border-gray-200 text-sm sm:text-base hover:shadow-md transition-shadow"
            >
              {t('nav.getStarted')}
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{ color: 'white' }} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0" style={{ backgroundColor: '#395674' }}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                {t('home.whyChooseUs.bottomCard')}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#395674' }}>
              500+
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t('home.whyChooseUs.stats.installations')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#395674' }}>
              1.25MW
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t('home.whyChooseUs.stats.capacity')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#395674' }}>
              70%
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t('home.whyChooseUs.stats.reduction')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#395674' }}>
              25+
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {t('home.whyChooseUs.stats.expertise')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
