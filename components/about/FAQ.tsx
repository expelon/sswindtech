'use client';

import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How much does a windmill installation cost?",
      answer: "The cost varies depending on the size and type of windmill system. Residential installations typically range from $15,000-$50,000, while commercial systems can cost $100,000+. We offer flexible financing options to make wind energy accessible."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations take 2-4 weeks from site assessment to completion. Commercial projects may take 6-12 weeks depending on complexity. We work efficiently to minimize disruption to your daily operations."
    },
    {
      question: "What maintenance is required?",
      answer: "Windmills require minimal maintenance. We recommend annual inspections and basic servicing. Our maintenance plans include regular check-ups, blade inspections, and performance optimization to ensure maximum efficiency."
    },
    {
      question: "How much can I save on energy costs?",
      answer: "Most customers see 60-80% reduction in electricity bills. The exact savings depend on your location, wind conditions, and energy consumption. Many systems pay for themselves within 5-7 years."
    },
    {
      question: "Do windmills work in all weather conditions?",
      answer: "Modern windmills are designed to operate in various weather conditions. They automatically shut down in extreme winds to prevent damage and can generate power in light winds. Our systems are built to withstand harsh weather."
    },
    {
      question: "What permits do I need?",
      answer: "Requirements vary by location. We handle all permitting processes including zoning approvals, electrical permits, and environmental assessments. Our team ensures full compliance with local regulations."
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
                Frequently Asked Questions
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
