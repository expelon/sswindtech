'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Shield, Users, Wrench, Clock, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
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
              About SS Wind Tech
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Your trusted partner in professional wind mill services, maintenance, and optimization solutions.
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
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>SS Wind Tech</strong> has established itself as a leading windmill service provider with over <strong>12 years of industry experience</strong>, delivering reliable and technically advanced solutions across the renewable energy sector. The company offers a comprehensive range of services including erection and installation, repowering, make change, decommissioning, life extension studies of Wind Turbine Generators (WTGs), operation and maintenance, crane-assisted services, and repair works of windmill components supported by fully equipped workshops, electronics laboratories, and hydraulic facilities.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                SS Wind Tech provides integrated end-to-end solutions and a diverse portfolio of services for both the wind farm and solar power industries. Currently, the company's operations span across the country, with a strong presence in <strong>Tamil Nadu</strong> and extended service coverage in states such as <strong>Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh</strong>, and other regions. The company serves a wide and impressive client base, built on trust, consistent performance, and quality service delivery.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                The foundation of SS Wind Tech's success lies in its <strong>unwavering commitment to sustainable business practices, environmental best practices, and social responsibility</strong>. The company continually focuses on enhancing its technical capabilities, strengthening operational excellence, and achieving higher benchmarks in performance delivery while maintaining its competitive edge in the market. Leveraging its expertise in renewable energy, SS Wind Tech has also expanded its capabilities to undertake solar power projects, reinforcing its vision for a sustainable and energy-efficient future.
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
                Our Vision, Mission & Goals
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#395674'}}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>Our Vision</h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  To be a global renewable energy leader in customer satisfaction through service and sustainability.
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
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>Our Mission</h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  Highest priority to Safety, Quality of Product, External & Internal Customer Satisfaction.
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
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#395674'}}>Our Goals</h3>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Increase profit through quality as well as risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain minimum manpower to control site activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ensure Zero-Deviation-Strategy in all processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ensure open-minded and honest communication based on facts internally and externally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ensure continuous improvements (CIMS)</span>
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
                Our Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive wind energy solutions backed by decades of experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>55kW</div>
                <div className="text-gray-600">to 2.5MW Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>ISO</div>
                <div className="text-gray-600">9001:2015 & 14001:2015</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: '#395674'}}>100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
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
                Meet our Directors
              </h2>
              <p className="text-lg text-gray-600">
                Leadership team with decades of experience in wind energy solutions
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
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#395674'}}>Mr. Sundar Murthy</h3>
                    <p className="text-gray-600 mb-4 font-medium">Managing Director</p>
                    <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                      <p className="mb-4">
                        Mr. Sundar Murthy, Managing Director, is guiding force behind company's vision and direction. He provides strong leadership that keeps organization steady during both growth phases and challenging times. With clear strategic thinking, he ensures company remains stable in a dynamic and competitive environment.
                      </p>
                      <p className="mb-4">
                        His ability to make timely and well-informed decisions strengthens the company's foundation. He carefully balances risk and opportunity to protect long-term business interests. Through disciplined management, he maintains operational efficiency across all departments.
                      </p>
                      <p className="mb-4">
                        Mr. Sundar Murthy strongly believes that teamwork is the backbone of organizational success. He actively guides, mentors, and motivates employees at all levels. His leadership style encourages transparency, trust, and mutual respect.
                      </p>
                      <p>
                        He empowers teams to take responsibility and deliver their best performance. By aligning individual goals with company objectives, he builds a unified workforce. His vision and commitment continue to play a vital role in company's long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mr. Sivakumar */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#395674'}}>Mr. Sivakumar</h3>
                    <p className="text-gray-600 mb-4 font-medium">Technical Director</p>
                    <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                      <p className="mb-4">
                        As a highly accomplished engineer, Mr. Sivakumar demonstrates an exceptional drive for solving complex mechanical challenges. With over <strong>30 years of extensive experience</strong> in wind turbine servicing, he brings deep technical expertise in WTG blades, WTG gearboxes, and winch systems—making him a significant asset to the organization.
                      </p>
                      <p className="mb-4">
                        His additional hands-on experience with hydraulic cranes further strengthens his technical leadership. Mr. Sivakumar has also successfully led and executed multiple wind turbine installations overseas, earning recognition for his international project excellence and engineering competence.
                      </p>
                      <p>
                        He is an active member of an energetic team of engineers and technicians, collectively possessing hardcore hands-on experience.
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
