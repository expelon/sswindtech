'use client';

import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { t } = useI18n();

  const faqs: FAQItem[] = [
    {
      question: t('home.faq.items.0.q'),
      answer: t('home.faq.items.0.a')
    },
    {
      question: t('home.faq.items.1.q'),
      answer: t('home.faq.items.1.a')
    },
    {
      question: t('home.faq.items.2.q'),
      answer: t('home.faq.items.2.a')
    },
    {
      question: t('home.faq.items.3.q'),
      answer: t('home.faq.items.3.a')
    },
    {
      question: t('home.faq.items.4.q'),
      answer: t('home.faq.items.4.a')
    },
    {
      question: t('home.faq.items.5.q'),
      answer: t('home.faq.items.5.a')
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 lg:h-[36rem] rounded-2xl overflow-hidden">
              <Image 
                src="/home2.webp" 
                alt="Wind turbine FAQ" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: '#395674' }}>
                {t('home.faq.title')}
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
