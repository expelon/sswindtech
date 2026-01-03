'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="relative bg-white">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        <div className="grid lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-[28rem] overflow-hidden rounded-3xl">
              <div className="relative h-96 sm:h-[28rem] lg:h-[34rem]">
                <Image src="/home2.webp" alt="About SS WindTech" fill className="object-cover" priority />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:-ml-2 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 mx-auto lg:mx-0">
              {t('aboutSection.badge')}
            </div>

            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold leading-snug lg:leading-tight tracking-normal lg:tracking-wide" style={{ color: '#395674' }}>
              {t('aboutSection.titleLine1')}
              <br />
              {t('aboutSection.titleLine2')}
              <br />
              {t('aboutSection.titleLine3')}
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 max-w-md sm:max-w-lg">
              {t('aboutSection.description')}
            </p>

            <div className="mt-6 mb-6 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link href="/about" className="px-4 py-2 bg-transparent text-gray-900 rounded-full font-semibold shadow-sm flex items-center gap-2 text-sm sm:text-base whitespace-nowrap mx-auto sm:mx-0" style={{ border: '2px solid #395674' }}>
                <span className="whitespace-nowrap">{t('aboutSection.exploreMore')}</span>
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-transparent" style={{ border: '2px solid #395674' }}>
                  <ArrowRight className="w-4 h-4 rotate-[-45deg]" style={{ color: '#395674' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
