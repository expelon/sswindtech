'use client';

import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Let's discuss how we can help with your wind mill service needs
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
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight" style={{color: '#395674'}}>
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 text-lg">We'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select service</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="installation">Installation</option>
                        <option value="consulting">Consulting</option>
                        <option value="repair">Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project..."
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
                      Send Message
                    </span>
                  </button>
                </form>
              </div>

              {/* Contact Information - Premium Design */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight" style={{color: '#395674'}}>
                    Contact Information
                  </h2>
                  <p className="text-gray-600 text-lg">Reach out to us directly</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (234) 567-890</p>
                      <p className="text-gray-600">+1 (234) 567-891</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Email</h3>
                      <p className="text-gray-600">info@sswindtech.com</p>
                      <p className="text-gray-600">support@sswindtech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#395674'}}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        123 Energy Lane<br />
                        Green City, GC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
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
