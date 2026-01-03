'use client';

import Image from 'next/image';
import { ArrowRight, Wrench, Cpu, Shield, Zap, Truck, TreePine, HardHat } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#395674' }}>
            Comprehensive Wind Energy Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From 250KW to 2.1MW turbines, we deliver end-to-end solutions with technical excellence and rapid execution across wind and solar energy sectors.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          
          {/* Service Contracts */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>Service Contracts</h3>
                <p className="text-gray-600 mt-2">Flexible maintenance solutions tailored to your needs</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>On Call Service</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated mobile teams of skilled technicians available 24x7 for troubleshooting, breakdowns, and wind turbine emergencies.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>Annual Maintenance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Qualified technicians for periodic preventive maintenance and breakdown attendance of WTGs.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>COAMC</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive O&M with 24x7 coverage, spares supply, major component repair/replacement, and guaranteed machine availability.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3" style={{ color: '#395674' }}>SCADA System</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Remote monitoring and real-time data analysis to verify turbine performance against OEM power curves.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong>Trusted by:</strong> Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears
              </p>
            </div>
          </div>

          {/* Erection & De-erection */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>Erection & De-erection</h3>
                    <p className="text-gray-600 mt-1">Expert handling of major wind turbine components</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#395674' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                      Component Services
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Gearboxes, Generators, Blades, Rotors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Nacelles and Tower Sections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Safe transportation to repair facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Reinstallation per safety standards</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#395674' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      Training & Safety
                    </h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Continuous technical training programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Stringent safety practices adherence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Safe working at heights expertise</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Nacelle hub operations training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/s1.webp" 
                  alt="Erection & De-erection Services" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* On Site Work */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                <Image 
                  src="/s5.jpeg" 
                  alt="On Site Work" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <HardHat className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>On Site Work</h3>
                    <p className="text-gray-600 mt-1">Comprehensive on-tower repair and retrofit services</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Top Tower Work</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>High speed pinion & bearing replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Gear oil replacement (ground pumping)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Generator bearing replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Gearbox suspension replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Yaw gear unit & brake servicing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Bottom Tower Work</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Main bearing replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Broken blade patch work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Blade pinion replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Blade cylinder replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>UT test of main shaft</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solar Services */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>Solar Power Solutions</h3>
                    <p className="text-gray-600 mt-1">Turnkey solar projects leveraging renewable energy expertise</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Project Capabilities</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>MW-scale solar power plants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Rooftop solar power systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Civil construction & structure mounting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Cabling and electrical works</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Regional Presence</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Active projects across Tamil Nadu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Successful installations in Andhra Pradesh</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Power evacuation systems expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Transmission line & substation facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/home2.webp" 
                  alt="Solar Power Solutions" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Crane Services */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src="/s4.webp" 
                  alt="Crane Services" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#395674' }}>Crane Services</h3>
                    <p className="text-gray-600 mt-1">Heavy-duty crane solutions with rapid mobilization</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Service Features</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Rapid mobilization to project sites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Cost-effective hiring solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Strict timeline adherence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Experienced operators and crew</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-base mb-3" style={{ color: '#395674' }}>Windmill Expertise</h4>
                    <ul className="space-y-2 text-gray-600 text-xs">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Turbines up to 2.1MW capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Precision blade works</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Advanced gearbox replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#395674' }}></div>
                        <span>Two fully equipped crane sets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Green Practices */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#395674' }}>Safety Commitment</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Rigorous classroom and hands-on training</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>24x7 safety monitoring and review</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Dedicated safety team oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Continuous improvement practices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#395674' }}>Green Practices</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Environmental responsibility focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Proper hazardous waste disposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Tree plantation drives</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#395674' }}></div>
                  <span>Solar energy & rainwater harvesting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg items-center gap-3 border-2 hover:shadow-xl transition-shadow text-lg" style={{ borderColor: '#395674' }}>
            Get a Service Quote
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#395674' }}>
              <ArrowRight className="w-5 h-5 rotate-[-45deg]" style={{ color: 'white' }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
