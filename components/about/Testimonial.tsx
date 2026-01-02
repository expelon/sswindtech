'use client';

import Image from 'next/image';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      quote: "Switching my home to wind energy was one of the best decisions I've made. Now, my home runs efficiently on clean energy, and I feel proud knowing my electricity use supports a sustainable future.",
      author: "Priya Sharma",
      title: "Homeowner, Mumbai",
      profileImage: "/p1.webp",
      backgroundImage: "/wind1.webp",
    },
    {
      quote: "The team at SS WindTech is exceptional. They guided us through every step and the maintenance service is outstanding. Our wind turbine runs perfectly year-round.",
      author: "Rajesh Kumar",
      title: "Managing Director",
      profileImage: "/p2.webp",
      backgroundImage: "/wind4.webp",
    },
    {
      quote: "Installing a windmill from SS WindTech was the best decision for our manufacturing facility. Reliable power and significant cost savings. Excellent service!",
      author: "Anjali Patel",
      title: "Factory Manager",
      profileImage: "/p3.webp",
      backgroundImage: "/wind.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Testimonial Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 mb-4 sm:mb-6 shadow-sm">
              Testimonials
            </span>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed mb-4 sm:mb-6" style={{ color: '#395674' }}>
              {currentTestimonial.quote}
            </p>
            <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                <Image 
                  src={currentTestimonial.profileImage} 
                  alt={currentTestimonial.author} 
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{currentTestimonial.author}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{currentTestimonial.title}</p>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Right Side - Large Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image 
                src={currentTestimonial.backgroundImage} 
                alt={currentTestimonial.author} 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
