'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Shield, Users, Wrench, Clock, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/wind1.webp" 
            alt="SS Wind Tech background" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#395674'}}>
              {t('aboutPage.heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {t('aboutPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
                {t('aboutPage.storyTitle')}
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('aboutPage.story.p1')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('aboutPage.story.p2')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('aboutPage.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                {t('aboutPage.vmgTitle')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#395674'}}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>{t('aboutPage.visionTitle')}</h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  {t('aboutPage.visionBody')}
                </p>
                <div className="mt-6 relative h-56 rounded-lg overflow-hidden">
                  <Image 
                    src="/wind.webp" 
                    alt="Vision illustration" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#395674'}}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>{t('aboutPage.missionTitle')}</h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  {t('aboutPage.missionBody')}
                </p>
                <div className="mt-6 relative h-56 rounded-lg overflow-hidden">
                  <Image 
                    src="/wind4.webp" 
                    alt="Mission illustration" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Goals */}
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#395674'}}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>{t('aboutPage.goalsTitle')}</h3>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('aboutPage.goals.items.0')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('aboutPage.goals.items.1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('aboutPage.goals.items.2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('aboutPage.goals.items.3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{t('aboutPage.goals.items.4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                {t('aboutPage.expertiseTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('aboutPage.expertiseSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>20+</div>
                <div className="text-gray-600">{t('aboutPage.expertiseStats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>55kW</div>
                <div className="text-gray-600">{t('aboutPage.expertiseStats.capacity')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>ISO</div>
                <div className="text-gray-600">{t('aboutPage.expertiseStats.iso')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>100%</div>
                <div className="text-gray-600">{t('aboutPage.expertiseStats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Directors */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                {t('aboutPage.directorsTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('aboutPage.directorsSubtitle')}
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Mr. Sundar Murthy */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto md:aspect-square overflow-hidden">
                    <Image 
                      src="/sundhar.jpeg" 
                      alt="Mr. Sundar Murthy" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#395674'}}>{t('aboutPage.directors.sundar.name')}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{t('aboutPage.directors.sundar.role')}</p>
                    <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                      <p className="mb-4">
                        {t('aboutPage.directors.sundar.bio.p1')}
                      </p>
                      <p className="mb-4">
                        {t('aboutPage.directors.sundar.bio.p2')}
                      </p>
                      <p className="mb-4">
                        {t('aboutPage.directors.sundar.bio.p3')}
                      </p>
                      <p>
                        {t('aboutPage.directors.sundar.bio.p4')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mr. Sivakumar */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#395674'}}>{t('aboutPage.directors.sivakumar.name')}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{t('aboutPage.directors.sivakumar.role')}</p>
                    <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                      <p className="mb-4">
                        {t('aboutPage.directors.sivakumar.bio.p1')}
                      </p>
                      <p className="mb-4">
                        {t('aboutPage.directors.sivakumar.bio.p2')}
                      </p>
                      <p>
                        {t('aboutPage.directors.sivakumar.bio.p3')}
                      </p>
                    </div>
                  </div>
                  <div className="relative h-80 md:h-auto md:aspect-square overflow-hidden order-1 md:order-2">
                    <Image 
                      src="/sivakumar.jpeg" 
                      alt="Mr. Sivakumar" 
                      fill 
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
