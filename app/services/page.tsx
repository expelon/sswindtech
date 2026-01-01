'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Wrench, Users, Shield, Clock, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#395674'}}>
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Comprehensive wind mill service solutions to keep your renewable energy systems running at peak performance
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
                Expert Wind Mill Services
              </h2>
              <p className="text-lg text-gray-600">
                From installation to maintenance, we provide complete wind energy solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Installation Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Installation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional wind mill installation with minimal disruption. Our certified technicians ensure optimal placement and performance for maximum energy generation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site assessment and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Professional installation team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Safety compliance guaranteed</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Maintenance Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Maintenance
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Regular maintenance and support services to keep your wind energy systems running efficiently year-round with minimal downtime.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Scheduled maintenance plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">24/7 emergency support</span>
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

              {/* Repair Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Repair
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fast and reliable repair services for all types of wind mill systems. Our experts diagnose and fix issues quickly to minimize downtime.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Rapid response team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Genuine parts replacement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Warranty-backed repairs</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Consulting Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Consulting
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert consulting services to help you make informed decisions about wind energy investments and system optimization.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Feasibility studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">ROI analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">System design optimization</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Inspection Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Inspection
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive inspection services to assess the condition and performance of your wind energy systems with detailed reporting.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Thorough system analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Performance reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Compliance verification</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg" style={{backgroundColor: '#395674'}}>
                  Get Quote
                  <span className="transform rotate-45">→</span>
                </Link>
              </div>

              {/* Monitoring Service */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#395674'}}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>
                  Monitoring
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced monitoring solutions to track performance, predict maintenance needs, and optimize energy production in real-time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time performance tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Predictive maintenance alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom analytics dashboard</span>
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
              Ready to Optimize Your Wind Energy Systems?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our expert team today for a comprehensive consultation and customized service plan tailored to your needs.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5" style={{backgroundColor: '#395674'}}>
              Get Started Now
              <span className="transform rotate-45">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
