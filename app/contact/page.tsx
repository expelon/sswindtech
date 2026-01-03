'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clear the URL parameter
      window.history.replaceState({}, '', '/contact');
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formsubmit.co will handle the submission automatically
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/contact.webp" 
            alt="Contact background" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{color: '#395674'}}>
              {t('contactPage.heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              {t('contactPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Premium Design */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Contact Form - Premium Styling */}
              <div className="space-y-8">
                {showSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-green-800 font-semibold">{t('contactPage.successTitle')}</h3>
                      <p className="text-green-700 text-sm">{t('contactPage.successSubtitle')}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight" style={{color: '#395674'}}>
                    {t('contactPage.formTitle')}
                  </h2>
                </div>
                
                <form 
                  action="https://formsubmit.co/sswindtechindia@gmail.com" 
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission from SS Wind Tech Website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact?success=true`} />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        {t('contactPage.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('contactPage.form.namePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        {t('contactPage.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('contactPage.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        {t('contactPage.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('contactPage.form.phonePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                        {t('contactPage.form.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">{t('contactPage.form.serviceSelect')}</option>
                        <option value="maintenance">{t('contactPage.form.serviceOptions.maintenance')}</option>
                        <option value="installation">{t('contactPage.form.serviceOptions.installation')}</option>
                        <option value="consulting">{t('contactPage.form.serviceOptions.consulting')}</option>
                        <option value="repair">{t('contactPage.form.serviceOptions.repair')}</option>
                        <option value="other">{t('contactPage.form.serviceOptions.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                      {t('contactPage.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    style={{backgroundColor: '#395674'}}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d4358'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#395674'}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {t('contactPage.form.submit')}
                    </span>
                  </button>
                </form>
              </div>

              {/* Contact Information - Premium Design */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight" style={{color: '#395674'}}>
                    {t('contactPage.infoTitle')}
                  </h2>
                  <p className="text-gray-600 text-lg">{t('contactPage.infoSubtitle')}</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{t('contactPage.infoCards.whatsapp.title')}</h3>
                      <a href="https://wa.me/918098495874" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                        +91 80984 95874
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{t('contactPage.infoCards.phone.title')}</h3>
                      <p className="text-gray-600">+91 97507 24822</p>
                      <p className="text-gray-600">+91 80984 95864</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{t('contactPage.infoCards.email.title')}</h3>
                      <p className="text-gray-600">sswindtechindia@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{t('contactPage.infoCards.office.title')}</h3>
                      <p className="text-gray-600">
                        {t('contactPage.infoCards.office.addressLines.0')}<br />
                        {t('contactPage.infoCards.office.addressLines.1')}<br />
                        {t('contactPage.infoCards.office.addressLines.2')}<br />
                        {t('contactPage.infoCards.office.addressLines.3')}
                      </p>
                    </div>
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
