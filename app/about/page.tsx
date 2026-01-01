'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Shield, Users, Wrench, Clock, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{color: '#395674'}}>
              About SSWindTech
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Your trusted partner in professional wind mill services, maintenance, and optimization solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#395674'}}>
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to support the growing wind energy industry, SSWindTech has become a leading service provider specializing in wind mill maintenance, repair, and optimization. We understand that the success of wind energy projects depends on reliable, professional service.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of certified technicians and engineers brings decades of combined experience in wind turbine technology, ensuring that your wind energy systems operate at peak efficiency and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're not just service providers – we're partners in your renewable energy journey, committed to maximizing the performance and longevity of your wind energy investments.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2" style={{color: '#395674'}}>10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#395674'}}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Safety First</h3>
              <p className="text-gray-600">We prioritize the safety of our team, clients, and equipment in every service we provide.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Customer Focus</h3>
              <p className="text-gray-600">Your success is our success. We're committed to delivering exceptional service and support.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Wrench className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Expertise</h3>
              <p className="text-gray-600">Our certified technicians bring specialized knowledge and experience to every project.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Reliability</h3>
              <p className="text-gray-600">We deliver consistent, dependable service that you can count on 24/7.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Award className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Quality</h3>
              <p className="text-gray-600">We maintain the highest standards in every aspect of our service delivery.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TrendingUp className="w-12 h-12 mb-4" style={{color: '#395674'}} />
              <h3 className="text-xl font-semibold mb-3" style={{color: '#395674'}}>Innovation</h3>
              <p className="text-gray-600">We continuously improve our methods and adopt new technologies to better serve you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{color: '#395674'}}>500+</div>
              <div className="text-gray-600">Wind Mills Serviced</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{color: '#395674'}}>98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{color: '#395674'}}>24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{color: '#395674'}}>50+</div>
              <div className="text-gray-600">Certified Technicians</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
