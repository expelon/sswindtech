'use client';

import Image from 'next/image';
import { ArrowRight, Wrench, Cpu, Shield, Zap, Truck, TreePine, HardHat } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-2 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#395674' }}>
            {t('servicesSection.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          
          {/* Service Contracts */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.contracts.title')}</h3>
                <p className="text-gray-600 mt-2">{t('servicesSection.contracts.subtitle')}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>{t('servicesSection.contracts.cards.onCall.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('servicesSection.contracts.cards.onCall.desc')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>{t('servicesSection.contracts.cards.annual.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('servicesSection.contracts.cards.annual.desc')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>{t('servicesSection.contracts.cards.coamc.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('servicesSection.contracts.cards.coamc.desc')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>{t('servicesSection.contracts.cards.scada.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('servicesSection.contracts.cards.scada.desc')}
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong>{t('servicesSection.contracts.trustedByLabel')}</strong> Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears
              </p>
            </div>
          </div>

          {/* Erection & De-erection */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.erection.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('servicesSection.erection.subtitle')}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#395674' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                      {t('servicesSection.erection.component.title')}
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.component.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.component.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.component.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.component.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#395674' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      {t('servicesSection.erection.training.title')}
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.training.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.training.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.training.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.erection.training.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/s1.webp" 
                  alt="Erection & De-erection Services" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* On Site Work */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                <Image 
                  src="/s5.jpeg" 
                  alt="On Site Work" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <HardHat className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.onSite.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('servicesSection.onSite.subtitle')}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.onSite.topTower.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.topTower.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.topTower.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.topTower.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.topTower.bullets.3')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.topTower.bullets.4')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.onSite.bottomTower.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.bottomTower.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.bottomTower.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.bottomTower.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.bottomTower.bullets.3')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.onSite.bottomTower.bullets.4')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solar Services */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.solar.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('servicesSection.solar.subtitle')}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.solar.capabilities.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.capabilities.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.capabilities.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.capabilities.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.capabilities.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.solar.presence.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.presence.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.presence.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.presence.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.solar.presence.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/home2.webp" 
                  alt="Solar Power Solutions" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Crane Services */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/s4.webp" 
                  alt="Crane Services" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.crane.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('servicesSection.crane.subtitle')}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.crane.features.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.features.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.features.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.features.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.features.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>{t('servicesSection.crane.expertise.title')}</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.expertise.bullets.0')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.expertise.bullets.1')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.expertise.bullets.2')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>{t('servicesSection.crane.expertise.bullets.3')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Green Practices */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.safety.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.safety.bullets.0')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.safety.bullets.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.safety.bullets.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.safety.bullets.3')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#395674' }}>{t('servicesSection.green.title')}</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.green.bullets.0')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.green.bullets.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.green.bullets.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>{t('servicesSection.green.bullets.3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg items-center gap-3 border-2 hover:shadow-xl transition-shadow text-lg" style={{ borderColor: '#395674' }}>
            {t('servicesSection.ctaButton')}
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
              <ArrowRight className="w-5 h-5 rotate-[-45deg]" style={{ color: 'white' }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
