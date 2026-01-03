'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import Services from '@/components/about/Services';
import { Wrench, Users, Shield, Clock, Award, TrendingUp, CheckCircle, MapPin, Zap, Settings, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/service.webp" 
            alt="Services background" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#395674'}}>
              {t('servicesPage.heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t('servicesPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
                {t('servicesPage.approachTitle')}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('servicesPage.approach.p1')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('servicesPage.approach.p2')}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {t('servicesPage.approach.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Disciplines */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                {t('servicesPage.disciplinesTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('servicesPage.disciplinesSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Site Preparation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  {t('servicesPage.disciplines.cards.site.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('servicesPage.disciplines.cards.site.desc')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.site.bullets.0')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.site.bullets.1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.site.bullets.2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.site.bullets.3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  {t('servicesPage.getQuote')}
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Installation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  {t('servicesPage.disciplines.cards.install.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('servicesPage.disciplines.cards.install.desc')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.install.bullets.0')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.install.bullets.1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.install.bullets.2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.install.bullets.3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  {t('servicesPage.getQuote')}
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Maintenance */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  {t('servicesPage.disciplines.cards.maint.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('servicesPage.disciplines.cards.maint.desc')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.maint.bullets.0')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.maint.bullets.1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.maint.bullets.2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.maint.bullets.3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  {t('servicesPage.getQuote')}
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Operation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  {t('servicesPage.disciplines.cards.ops.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('servicesPage.disciplines.cards.ops.desc')}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.ops.bullets.0')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.ops.bullets.1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.ops.bullets.2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{t('servicesPage.disciplines.cards.ops.bullets.3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  {t('servicesPage.getQuote')}
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
              {t('servicesPage.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('servicesPage.ctaParagraph')}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5" style={{backgroundColor: '#395674'}}>
              {t('servicesPage.ctaButton')}
              <span className="transform rotate-45">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <Services />

      <Footer />
    </div>
  );
}
