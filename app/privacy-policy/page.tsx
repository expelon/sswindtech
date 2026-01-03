 'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { useI18n } from '@/lib/i18n';

export default function PrivacyPolicy() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-8" style={{color: '#395674'}}>
                {t('privacy.title')}
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.introductionTitle')}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('privacy.introductionBody')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.collectTitle')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>{t('privacy.collect.items.0.label')}</strong> {t('privacy.collect.items.0.value')}
                  </p>
                  <p>
                    <strong>{t('privacy.collect.items.1.label')}</strong> {t('privacy.collect.items.1.value')}
                  </p>
                  <p>
                    <strong>{t('privacy.collect.items.2.label')}</strong> {t('privacy.collect.items.2.value')}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.useTitle')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• {t('privacy.use.bullets.0')}</p>
                  <p>• {t('privacy.use.bullets.1')}</p>
                  <p>• {t('privacy.use.bullets.2')}</p>
                  <p>• {t('privacy.use.bullets.3')}</p>
                  <p>• {t('privacy.use.bullets.4')}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.protectionTitle')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('privacy.protectionBody')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.thirdPartyTitle')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('privacy.thirdPartyBody')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>{t('privacy.contactTitle')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('privacy.contactBody')}
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong>{t('privacy.contactDetails.emailLabel')}</strong> sswindtechindia@gmail.com</p>
                  <p><strong>{t('privacy.contactDetails.phoneLabel')}</strong> +91 97507 24822, +91 80984 95864</p>
                  <p><strong>{t('privacy.contactDetails.whatsappLabel')}</strong> +91 80984 95874</p>
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
