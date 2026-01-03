'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import Services from '@/components/about/Services';
import { Wrench, Users, Shield, Clock, Award, TrendingUp, CheckCircle, MapPin, Zap, Settings, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/service.webp" 
            alt="Services background" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#395674'}}>
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Comprehensive wind mill service solutions with technology-neutral expertise and complete 'cradle to grave' support
            </p>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
                Our Service Approach
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>SS Wind Tech</strong> is focused entirely on the service side of wind development. We do not sell wind turbines and instead offer a 'cradle to grave' support packages to all our customers depending on their individual needs and on-site requirements.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We pride ourselves on being technology neutral and impartial, meaning we can work on a variety of different makes of wind turbines. We work with turbine manufacturers rather than competing against them and often find ourselves doing work directly for them.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Naturally, when working with various wind turbine manufacturers and customers, confidentiality is paramount to the way we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Disciplines */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                Our 4 Key Disciplines
              </h2>
              <p className="text-lg text-gray-600">
                Specialized teams of engineers dedicated to each activity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Site Preparation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Site Preparation and Ground Works
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive site preparation services including ground works, foundation preparation, and infrastructure setup for wind turbine installations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site assessment and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ground preparation and excavation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Infrastructure development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Access roads and site logistics</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Installation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Mechanical and Electrical Installation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional installation services including mechanical and electrical work, complete with commissioning of wind turbines.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Mechanical turbine installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Electrical systems integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Turbine commissioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Grid connection setup</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Maintenance */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Annual Servicing and Maintenance
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive annual servicing and maintenance programs to ensure optimal performance and longevity of wind turbine systems.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Scheduled maintenance programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Component inspection and testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Preventive maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Performance optimization</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Operation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  WTG Operation and HT Line O&M
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete wind turbine generator operation and high-tension line operation and maintenance services for continuous energy production.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">WTG operation management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">High-tension line maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">24/7 monitoring and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Emergency response services</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
              Ready to Discuss Your Wind Energy Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Please feel free to browse through the different categories where further information is available as well as photos from projects we have been involved with in the past. If you can't find what you're looking for, please call or email SS Wind Tech and we will be delighted to help with your project.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5" style={{backgroundColor: '#395674'}}>
              Contact Us Today
              <span className="transform rotate-45">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <Services />

      <Footer />
    </div>
  );
}
