'use client';

import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                SS Wind Tech
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.companyTagline')}
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
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.ourServices')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              {t('footer.ourServices')}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.services.sitePrep')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.services.mechElec')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.services.annual')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  {t('footer.services.wtg')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
              {t('footer.contactUs')}
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-white" />
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    3/437 B Nallipoombugar Nagar<br />
                    Near RKR School, Tiruppur Rd<br />
                    Udumalpet - 642 126<br />
                    Tiruppur Dt, Tamilnadu
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 text-white" />
                <div className="text-gray-400 text-xs sm:text-sm">
                  <a href="tel:+919750724822" className="hover:text-white transition-colors block">
                    +91 97507 24822
                  </a>
                  <a href="tel:+918098495864" className="hover:text-white transition-colors block">
                    +91 80984 95864
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <a href="https://wa.me/918098495874" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  +91 80984 95874
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 text-white" />
                <a href="mailto:sswindtechindia@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                  sswindtechindia@gmail.com
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
              © {currentYear} SS Wind Tech. {t('footer.allRightsReserved')}
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
