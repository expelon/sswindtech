"use client"

import { useState, useRef, useEffect } from "react"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface QuickReply {
  id: string
  text: string
  action: string
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "🌬️ Welcome to SS Wind Tech! I'm your virtual assistant for wind energy solutions. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [awaitingUserInput, setAwaitingUserInput] = useState(false)
  const [currentContext, setCurrentContext] = useState<string>('')
  const [suggestedQuestions, setSuggestedQuestions] = useState<QuickReply[]>([])
  const [showAllQuestions, setShowAllQuestions] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies: QuickReply[] = [
    { id: '1', text: 'What services do you offer?', action: 'services' },
    { id: '2', text: 'How can I contact you?', action: 'contact' },
    { id: '3', text: 'Tell me about your company', action: 'about' },
    { id: '4', text: 'Who leads the company?', action: 'leadership' }
  ]

  // Extended quick replies for common questions
  const commonQuestions: QuickReply[] = [
    { id: '5', text: 'Where do you provide services?', action: 'areas' },
    { id: '6', text: 'What is on call service?', action: 'oncall' },
    { id: '7', text: 'Do you provide emergency support?', action: 'emergency' },
    { id: '8', text: 'What are your service areas?', action: 'locations' },
    { id: '9', text: 'How can I find services on website?', action: 'findservices' },
    { id: '10', text: 'What is annual maintenance?', action: 'maintenance' },
    { id: '11', text: 'Do you work in my state?', action: 'state' },
    { id: '12', text: 'What are your contact details?', action: 'contactdetails' }
  ]

  const getSuggestedQuestions = (response: string, context: string): QuickReply[] => {
      const allQuestions = [...quickReplies, ...commonQuestions]
      const suggestions: QuickReply[] = []
      
      // Context-based suggestions
      if (context === 'state') {
        // After state response, suggest related location questions
        suggestions.push(
          allQuestions.find(q => q.action === 'areas') || allQuestions[4],
          allQuestions.find(q => q.action === 'contactdetails') || allQuestions[11]
        )
      }
      else if (response.includes('services') || response.includes('service')) {
        // After service response, suggest specific service questions
        suggestions.push(
          allQuestions.find(q => q.action === 'oncall') || allQuestions[5],
          allQuestions.find(q => q.action === 'maintenance') || allQuestions[9]
        )
      }
      else if (response.includes('contact') || response.includes('phone') || response.includes('email')) {
        // After contact response, suggest company and services
        suggestions.push(
          allQuestions.find(q => q.action === 'about') || allQuestions[2],
          allQuestions.find(q => q.action === 'services') || allQuestions[0]
        )
      }
      else if (response.includes('leadership') || response.includes('director')) {
        // After leadership response, suggest company and services
        suggestions.push(
          allQuestions.find(q => q.action === 'about') || allQuestions[2],
          allQuestions.find(q => q.action === 'services') || allQuestions[0]
        )
      }
      else if (response.includes('company') || response.includes('about')) {
        // After company response, suggest services and leadership
        suggestions.push(
          allQuestions.find(q => q.action === 'services') || allQuestions[0],
          allQuestions.find(q => q.action === 'leadership') || allQuestions[3]
        )
      }
      else {
        // Default suggestions for other responses
        suggestions.push(
          allQuestions.find(q => q.action === 'services') || allQuestions[0],
          allQuestions.find(q => q.action === 'contact') || allQuestions[1],
          allQuestions.find(q => q.action === 'areas') || allQuestions[4]
        )
      }
      
      // Return 2-3 unique suggestions
      return suggestions.filter((q, index, self) => 
        q && self.findIndex(s => s?.id === q?.id) === index
      ).slice(0, 3)
    }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Service Location Questions (Check first - highest priority)
    if (message.includes('where do you provide services') || message.includes('where do you provide') || message.includes('where you provide') || message.includes('which locations') || message.includes('which areas') || message.includes('where do you operate')) {
      return "Our Service Coverage Across India:\n\n🌟 Primary Base: Tamil Nadu (Headquarters)\n\n📍 Extended Operations: Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh\n\n🏢 Major Clients: Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears\n\n🔧 Services Available: All wind energy services including erection, installation, maintenance, repair, and solar solutions\n\n📞 Contact: +91 80984 95874 for immediate assistance\n\nWe provide end-to-end solutions across all these states!"
    }
    
    // Website Navigation Questions (Check first - highest priority)
    if (message.includes('where') && (message.includes('find') || message.includes('can i find'))) {
      if (message.includes('service') || message.includes('services') || message.includes('servieces') || message.includes('servic') || message.includes('servise')) {
        return "You can find our comprehensive services on the Services page:\n\n📍 Page: /services\n\n• Complete list of all 6 service categories\n• Detailed Service Contracts information\n• Erection & De-erection details\n• On Site Work specifications\n• Solar Power Solutions\n• Crane Services capabilities\n• Safety & Green Practices\n\nThe Services page includes our comprehensive 'Comprehensive Wind Energy Services' section with all detailed information!"
      }
      else if (message.includes('about') || message.includes('company') || message.includes('story')) {
        return "You can find detailed company information on the About page:\n\n📍 Page: /about\n\n• Our Story and company history\n• Vision, Mission & Goals\n• Leadership team profiles\n• Expertise and capabilities\n• Meet our Directors section\n• ISO certifications and achievements\n\nThe About page provides comprehensive information about SS Wind Tech's 32+ years of experience and operations!"
      }
      else if (message.includes('contact') || message.includes('reach') || message.includes('get in touch')) {
        return "You can reach us through the Contact page:\n\n📍 Page: /contact\n\n• Contact form for inquiries\n• Complete contact information\n• WhatsApp, phone, and email details\n• Office address and location\n• Service selection options\n\nYou can also call us directly at +91 80984 95874 for immediate assistance!"
      }
      else {
        return "Here's where to find information on our website:\n\n🏠 Home Page (/): Overview and quick navigation\n\n🔧 Services Page (/services): Complete service details\n\n📖 About Page (/about): Company information and leadership\n\n📞 Contact Page (/contact): Contact form and details\n\nEach page has comprehensive information. What specific information are you looking for?"
      }
    }
    
    // Leadership (Check before general company info)
    if (message.includes('leadership') || message.includes('directors') || message.includes('who leads') || message.includes('who lead') || message.includes('lead') || message.includes('who is the leader') || message.includes('who runs') || message.includes('who manages')) {
      return "Our leadership team:\n\n• Mr. Sundar Murthy - Managing Director\nProvides strategic leadership, ensures company stability, promotes teamwork and transparency.\n\n• Mr. Sivakumar - Technical Director\n30+ years in wind turbine servicing, expert in WTG blades, gearboxes, hydraulic cranes. Led multiple international installations.\n\nDecades of combined expertise in wind energy solutions!"
    }
    
    // Company Information (Check after leadership)
    if (message.includes('about') || message.includes('company')) {
      return "SS Wind Tech is a leading windmill service provider with 32+ years of industry experience. We deliver reliable solutions across renewable energy with comprehensive services including erection, installation, maintenance, crane services, and solar solutions. Our operations span India with strong presence in Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, and other states. We're ISO 9001:2015 & 14001:2015 certified."
    }
    
    // Services - Complete overhaul
    if (message.includes('services') || message.includes('service') || message.includes('servieces') || message.includes('servic') || message.includes('servise')) {
      // Check for specific service keywords first
      if (message.includes('on call') || message.includes('on-call') || message.includes('on call service')) {
        return "On Call Service provides 24x7 emergency support:\n\n• Dedicated mobile teams of skilled technicians\n\n• Available 24x7 for troubleshooting and breakdowns\n\n• Wind turbine emergency response\n\n• Rapid mobilization to project sites\n\n• Expert technical support for urgent issues\n\n• Immediate assistance for critical failures\n\nFor emergencies: Call +91 80984 95874 or +91 97507 24822"
      }
      else if (message.includes('annual') || message.includes('yearly') || message.includes('annual maintenance')) {
        return "Annual Maintenance Service:\n\n• Qualified technicians for periodic preventive maintenance\n\n• Breakdown attendance support for WTGs\n\n• Scheduled inspections and servicing\n\n• Performance optimization recommendations\n\n• Component wear and tear monitoring\n\n• Extended equipment lifespan\n\n• Cost-effective maintenance planning\n\n• Detailed service reports provided"
      }
      else if (message.includes('coamc') || message.includes('comprehensive o&m')) {
        return "COAMC (Comprehensive Operation & Maintenance Contract):\n\n• 24x7 coverage and monitoring\n\n• Complete spare parts supply included\n\n• Major component repair/replacement services\n\n• Guaranteed machine availability\n\n• Full operational management\n\n• Performance guarantee commitments\n\n• Risk-free maintenance solution\n\n• Complete peace of mind for clients"
      }
      else if (message.includes('scada') || message.includes('monitoring') || message.includes('remote monitoring')) {
        return "SCADA System Services:\n\n• Remote monitoring of wind turbine performance\n\n• Real-time data analysis and reporting\n\n• Performance verification against OEM power curves\n\n• Predictive maintenance capabilities\n\n• Operational efficiency tracking\n\n• Automated alert systems\n\n• Performance optimization insights\n\n• 24/7 system monitoring"
      }
      else if (message.includes('erection') || message.includes('installation') || message.includes('setup')) {
        return "Erection & De-erection Services:\n\n• Component handling: Gearboxes, generators, blades, rotors\n\n• Nacelles and tower sections management\n\n• Safe transportation to repair facilities\n\n• Reinstallation per safety standards\n\n• Fully equipped workshops available\n\n• Continuous technical training programs\n\n• Stringent safety practices adherence\n\n• Safe working at heights expertise"
      }
      else if (message.includes('on site') || message.includes('tower work') || message.includes('repair work')) {
        return "On Site Work Services:\n\n• Top Tower Work:\n  - High speed pinion & bearing replacement\n  - Gear oil replacement (ground pumping)\n  - Generator bearing replacement\n  - Gearbox suspension replacement\n  - Yaw gear unit & brake servicing\n\n• Bottom Tower Work:\n  - Main bearing replacement\n  - Broken blade patch work\n  - Blade pinion/cylinder replacement\n  - UT test of main shaft\n\nAll work performed by certified technicians with safety priority!"
      }
      else if (message.includes('solar') || message.includes('solar power') || message.includes('solar panel')) {
        return "Solar Power Solutions:\n\n• MW-scale solar power plants\n\n• Rooftop solar power systems\n\n• Civil construction & structure mounting\n\n• Cabling and electrical works\n\n• Power evacuation systems expertise\n\n• Transmission line & substation facilities\n\n• Active projects in Tamil Nadu and Andhra Pradesh\n\n• Turnkey solar project solutions"
      }
      else if (message.includes('crane') || message.includes('lifting') || message.includes('crane service')) {
        return "Crane Services:\n\n• Heavy-duty crane solutions for turbines up to 2.1MW\n\n• Rapid mobilization to project sites\n\n• Cost-effective hiring solutions\n\n• Strict timeline adherence\n\n• Experienced operators and crew\n\n• Precision blade works expertise\n\n• Advanced gearbox replacement\n\n• Two fully equipped crane sets available"
      }
      else if (message.includes('safety') || message.includes('green') || message.includes('environmental')) {
        return "Safety & Green Practices:\n\n• Rigorous classroom and hands-on training\n\n• 24x7 safety monitoring and review\n\n• Dedicated safety team oversight\n\n• Continuous improvement practices\n\n• Environmental responsibility focus\n\n• Proper hazardous waste disposal\n\n• Tree plantation drives\n\n• Solar energy & rainwater harvesting"
      }
      else {
        return "We offer comprehensive wind energy solutions:\n\n• Service Contracts: On Call Service (24x7), Annual Maintenance, COAMC, SCADA monitoring\n\n• Erection & De-erection: Component handling, transportation, installation\n\n• On Site Work: Tower repairs, bearing replacement, blade work, UT testing\n\n• Solar Solutions: MW-scale plants, rooftop systems, civil works\n\n• Crane Services: Heavy-duty up to 2.1MW, rapid mobilization\n\n• Safety & Green: Environmental responsibility, waste management\n\nWhich service interests you?"
      }
    }
    
    // Contact Information
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "Contact SS Wind Tech:\n\n• WhatsApp: +91 80984 95874\n\n• Phone: +91 97507 24822, +91 80984 95864\n\n• Email: sswindtechindia@gmail.com\n\n• Office: 3/437 B Nallipoombugar Nagar, Near RKR School, Tiruppur Rd, Udumalpet - 642 126, Tiruppur Dt, Tamilnadu\n\nWe respond within 24 hours!"
    }
    
    // Service Areas (Check before general services)
    if (message.includes('areas') || message.includes('location') || message.includes('service areas') || message.includes('locations') || message.includes('which locations') || message.includes('which areas') || message.includes('where do you give services') || message.includes('where do you operate') || message.includes('where do you provide services')) {
      return "Our Service Coverage Across India:\n\n🌟 **Primary Base**: Tamil Nadu (Headquarters)\n\n📍 **Extended Operations**: Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh\n\n🏢 **Major Industrial Clients**: Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears\n\n🔧 **Services Available**: All wind energy services including erection, installation, maintenance, repair, and solar solutions\n\n📞 **Contact**: +91 80984 95874 for immediate assistance\n\nWe provide end-to-end solutions across all these states!"
    }
    
    // State-specific service questions
    if (message.includes('tamil nadu') || message.includes('tamilnadu')) {
      return "Our Tamil Nadu Operations:\n\n📍 **Headquarters**: Located in Tamil Nadu\n\n• Main operational base and corporate office\n• Strong local presence and expertise\n• Comprehensive service coverage\n• Quick response time for local clients\n• Established relationships with major industries\n\n• Full range of services available\n\nOffice: 3/437 B Nallipoombugar Nagar, Near RKR School, Tiruppur Rd, Udumalpet - 642 126, Tiruppur Dt, Tamilnadu"
    }
    
    if (message.includes('karnataka') || message.includes('bangalore') || message.includes('bengaluru')) {
      return "Our Karnataka Operations:\n\n📍 **Service Coverage**: Extended operations in Karnataka\n\n• Wind turbine services across the state\n• Bangalore and surrounding areas covered\n• Technical team deployment available\n• Maintenance and repair services\n• Installation and erection projects\n• End-to-end solutions provided\n\nContact us for Karnataka-specific requirements!"
    }
    
    if (message.includes('andhra pradesh') || message.includes('andhra')) {
      return "Our Andhra Pradesh Operations:\n\n📍 **Service Coverage**: Extended operations in Andhra Pradesh\n\n• Active projects across the state\n• Wind turbine installation and maintenance\n• Technical team stationed locally\n• Rapid mobilization for emergencies\n• Complete O&M services available\n• Solar power projects undertaken\n\nWe have proven track record in Andhra Pradesh!"
    }
    
    if (message.includes('maharashtra') || message.includes('mumbai') || message.includes('pune')) {
      return "Our Maharashtra Operations:\n\n📍 **Service Coverage**: Extended operations in Maharashtra\n\n• Wind energy projects across major cities\n• Mumbai and Pune metropolitan areas\n• Industrial wind farm services\n• Technical expertise available locally\n• Installation and maintenance services\n• Emergency response capabilities\n\n• Large-scale project handling\n\nContact us for Maharashtra requirements!"
    }
    
    if (message.includes('rajasthan') || message.includes('jaipur')) {
      return "Our Rajasthan Operations:\n\n📍 **Service Coverage**: Extended operations in Rajasthan\n\n• Wind turbine services in Rajasthan\n• Jaipur and surrounding areas covered\n• Technical team deployment available\n• Maintenance and repair services\n• Installation projects undertaken\n• Solar and wind hybrid solutions\n• Remote monitoring capabilities\n\nWe serve both urban and industrial clients!"
    }
    
    if (message.includes('gujarat') || message.includes('ahmedabad') || message.includes('gandhinagar')) {
      return "Our Gujarat Operations:\n\n📍 **Service Coverage**: Extended operations in Gujarat\n\n• Wind energy services across Gujarat\n• Ahmedabad and industrial areas covered\n• Technical team stationed locally\n• Installation and maintenance services\n• Large wind farm projects\n• Solar power integration\n• Rapid emergency response\n\nWe serve major industrial clients in Gujarat!"
    }
    
    if (message.includes('madhya pradesh') || message.includes('mp') || message.includes('bhopal')) {
      return "Our Madhya Pradesh Operations:\n\n📍 **Service Coverage**: Extended operations in Madhya Pradesh\n\n• Wind turbine services across MP\n• Bhopal and industrial areas covered\n• Technical team deployment available\n• Installation and maintenance projects\n• Solar and wind energy solutions\n• Remote monitoring services\n• End-to-end project support\n\nWe provide comprehensive services across Madhya Pradesh!"
    }
    
    // Regional presence questions
    if (message.includes('which states') || message.includes('which locations') || message.includes('where do you operate') || message.includes('where do you provide services')) {
      return "Our Service Coverage Across India:\n\n🌟 **Primary Base**: Tamil Nadu (Headquarters)\n\n📍 **Extended Operations**: Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh\n\n🏢 **Major Industrial Clients**: Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears\n\n🔧 **Services Available**: All wind energy services including erection, installation, maintenance, repair, and solar solutions\n\n📞 **Contact**: +91 80984 95874 for immediate assistance\n\nWe provide end-to-end solutions across all these states!"
    }
    
    // Client-specific questions
    if (message.includes('dalmia cements') || message.includes('ramco cements') || message.includes('india cements')) {
      return "Our Cement Industry Clients:\n\n🏭 **Major Cement Companies We Serve**:\n\n• Dalmia Cements\n• Ramco Cements\n• India Cements\n• TVS Srichakra\n• GGPL\n• SSM Group\n• Govindaraja Mills\n• Shanthi Gears\n\n🔧 **Services Provided**: Complete wind turbine maintenance, installation, repair, and O&M services\n\n📊 **Experience**: 32+ years serving cement industry\n\n🏆 **Trust**: Long-term relationships with major cement manufacturers\n\nWe understand the critical nature of cement plant operations and provide reliable services!"
    }
    
    // Leadership
    if (message.includes('leadership') || message.includes('directors') || message.includes('who leads') || message.includes('who lead') || message.includes('lead') || message.includes('who is the leader') || message.includes('who runs') || message.includes('who manages')) {
      return "Our leadership team:\n\n• Mr. Sundar Murthy - Managing Director\nProvides strategic leadership, ensures company stability, promotes teamwork and transparency.\n\n• Mr. Sivakumar - Technical Director\n30+ years in wind turbine servicing, expert in WTG blades, gearboxes, hydraulic cranes. Led multiple international installations.\n\nDecades of combined expertise in wind energy solutions!"
    }
    
    // Technical Specifications
    if (message.includes('capacity') || message.includes('size') || message.includes('mw') || message.includes('kw')) {
      return "Turbine capacity range: 55kW to 2.5MW\n\n• Small: 55kW - 250KW\n\n• Medium: 250KW - 1MW\n\n• Large: 1MW - 2.5MW\n\nWe provide complete solutions for all turbine sizes with technology-neutral approach. What capacity range interests you?"
    }
    
    // Emergency Services
    if (message.includes('emergency') || message.includes('breakdown') || message.includes('urgent')) {
      return "24x7 Emergency Support Available!\n\n• On Call Service: Dedicated mobile teams\n\n• Troubleshooting: Expert technicians for breakdowns\n\n• Rapid Mobilization: Fast emergency response\n\n• Emergency Numbers: +91 80984 95874, +91 97507 24822\n\nCall immediately for wind turbine emergencies!"
    }
    
    // Solar Services
    if (message.includes('solar') || message.includes('solar power')) {
      return "Complete Solar Power Solutions:\n\n• Services: MW-scale plants, rooftop systems, civil construction, structure mounting, cabling, electrical works\n\n• Active Projects: Tamil Nadu, Andhra Pradesh\n\n• Expertise: Power evacuation systems, transmission lines, substations\n\n• Commitment: Sustainable energy solutions\n\nInterested in solar installation details?"
    }
    
    // Crane Services
    if (message.includes('crane') || message.includes('lifting')) {
      return "Professional Crane Services:\n\n• Capacity: Turbines up to 2.1MW\n\n• Features: Rapid mobilization, cost-effective hiring, experienced operators\n\n• Expertise: Precision blade works, advanced gearbox replacement\n\n• Equipment: Two fully equipped crane sets\n\nStrict timeline adherence guaranteed!"
    }
    
    // Maintenance Services
    if (message.includes('maintenance') || message.includes('repair') || message.includes('service contract')) {
      return "Flexible Maintenance Solutions:\n\n• On Call Service: 24x7 emergency support\n\n• Annual Maintenance: Preventive maintenance and breakdown support\n\n• COAMC: Comprehensive O&M with guaranteed availability\n\n• SCADA System: Remote monitoring and performance analysis\n\nTrusted by: Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, and more!"
    }
    
    // Erection Services
    if (message.includes('erection') || message.includes('installation') || message.includes('setup')) {
      return "Expert Erection & De-erection:\n\n• Components: Gearboxes, generators, blades, rotors, nacelles, towers\n\n• Services: Safe transportation, reinstallation per safety standards\n\n• Training: Continuous technical programs, stringent safety practices\n\n• Expertise: Safe working at heights, nacelle hub operations\n\nFully equipped workshops and facilities available!"
    }
    
    // On Site Work
    if (message.includes('on site') || message.includes('tower work') || message.includes('repair work')) {
      return "Comprehensive On Site Work:\n\n• Top Tower: High speed pinion & bearing replacement, gear oil replacement, generator bearing replacement, gearbox suspension replacement, yaw gear servicing\n\n• Bottom Tower: Main bearing replacement, blade patch work, blade pinion/cylinder replacement, UT testing\n\nAll work performed by certified technicians with safety priority!"
    }
    
    // Certifications
    if (message.includes('certification') || message.includes('iso') || message.includes('quality')) {
      return "Quality & Environmental Certifications:\n\n• ISO 9001:2015: Quality Management System\n\n• ISO 14001:2015: Environmental Management System\n\n• Goals: Quality through risk management, zero-deviation strategy, continuous improvements (CIMS)\n\n• Expertise: 20+ years experience, 100% customer satisfaction focus\n\nCertified excellence in wind energy services!"
    }
    
    // Vision & Mission
    if (message.includes('vision') || message.includes('mission') || message.includes('goals')) {
      return "Our Vision, Mission & Goals:\n\n• Vision: Global renewable energy leader in customer satisfaction through service and sustainability\n\n• Mission: Highest priority to Safety, Quality, Customer Satisfaction\n\n• Goals: Quality & risk management, minimum manpower, zero-deviation strategy, honest communication, continuous improvements\n\nCommitted to sustainable business practices!"
    }
    
    // Basic Greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Welcome to SS Wind Tech! How can I help you with wind energy solutions today?"
    }
    
    // Goodbye
    if (message.includes("bye") || message.includes("goodbye") || message.includes("see you")) {
      return "Thank you for choosing SS Wind Tech! Contact us anytime at +91 80984 95874. Have a great day!"
    }
    
    // Thank you
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! How else can I assist you with our wind energy services?"
    }
    
    // Help
    if (message.includes("help") || message.includes("what can you do")) {
      return "I can help you with:\n\n• Our comprehensive services\n\n• Company information\n\n• Contact details\n\n• Technical specifications\n\n• Emergency support\n\nAsk me anything or use quick replies!"
    }
    
    // Wind Energy General
    if (message.includes("wind") || message.includes("turbine") || message.includes("renewable")) {
      return "Wind energy is our specialty! We provide complete solutions from 55kW to 2.5MW turbines. Technology-neutral approach means we work with various manufacturers. ISO certified quality and environmental standards. Interested in specific services?"
    }
    
    // On Call Service specific
    if (message.includes('on call') || message.includes('on-call') || message.includes('on call service')) {
      return "On Call Service provides 24x7 emergency support:\n\n• Dedicated mobile teams of skilled technicians\n• Available 24x7 for troubleshooting and breakdowns\n• Wind turbine emergency response\n• Rapid mobilization to project sites\n• Expert technical support for urgent issues\n\n• Immediate assistance for critical failures\n\nFor emergencies: Call +91 80984 95874 or +91 97507 24822"
    }
    
    // Annual Maintenance specific
    if (message.includes('annual maintenance') || message.includes('yearly maintenance')) {
      return "Annual Maintenance Service:\n\n• Qualified technicians for periodic preventive maintenance\n• Breakdown attendance support for WTGs\n• Scheduled inspections and servicing\n• Performance optimization recommendations\n• Component wear and tear monitoring\n• Extended equipment lifespan\n• Cost-effective maintenance planning\n• Detailed service reports provided"
    }
    
    // COAMC specific
    if (message.includes('coamc') || message.includes('comprehensive o&m')) {
      return "COAMC (Comprehensive Operation & Maintenance Contract):\n\n• 24x7 coverage and monitoring\n• Complete spare parts supply included\n• Major component repair/replacement services\n• Guaranteed machine availability\n• Full operational management\n• Performance guarantee commitments\n• Risk-free maintenance solution\n• Complete peace of mind for clients"
    }
    
    // SCADA specific
    if (message.includes('scada') || message.includes('monitoring') || message.includes('remote monitoring')) {
      return "SCADA System Services:\n\n• Remote monitoring of wind turbine performance\n• Real-time data analysis and reporting\n• Performance verification against OEM power curves\n• Predictive maintenance capabilities\n• Operational efficiency tracking\n• Automated alert systems\n• Performance optimization insights\n• 24/7 system monitoring"
    }
    
    // Service Contracts general
    if (message.includes('service contract') || message.includes('maintenance contract') || message.includes('o&m contract')) {
      return "Our Service Contracts include:\n\n• On Call Service: 24x7 emergency support\n• Annual Maintenance: Preventive maintenance and breakdown support\n• COAMC: Comprehensive O&M with guaranteed availability\n• SCADA System: Remote monitoring and performance analysis\n\n• Flexible contracts tailored to your needs\n• Trusted by major industrial clients\n• Proven track record of reliability"
    }
    
    // Erection specific
    if (message.includes('erection') || message.includes('installation') || message.includes('setup')) {
      return "Erection & De-erection Services:\n\n• Component handling: Gearboxes, generators, blades, rotors\n• Nacelles and tower sections management\n• Safe transportation to repair facilities\n• Reinstallation per safety standards\n• Fully equipped workshops available\n• Continuous technical training programs\n• Stringent safety practices adherence\n• Safe working at heights expertise"
    }
    
    // On Site Work specific
    if (message.includes('on site work') || message.includes('tower work') || message.includes('repair work')) {
      return "On Site Work Services:\n\n• Top Tower Work:\n  - High speed pinion & bearing replacement\n  - Gear oil replacement (ground pumping)\n  - Generator bearing replacement\n  - Gearbox suspension replacement\n  - Yaw gear unit & brake servicing\n\n• Bottom Tower Work:\n  - Main bearing replacement\n  - Broken blade patch work\n  - Blade pinion/cylinder replacement\n  - UT test of main shaft\n\nAll work by certified technicians"
    }
    
    // Solar specific
    if (message.includes('solar') || message.includes('solar power') || message.includes('solar panel')) {
      return "Solar Power Solutions:\n\n• MW-scale solar power plants\n• Rooftop solar power systems\n• Civil construction & structure mounting\n• Cabling and electrical works\n• Power evacuation systems expertise\n• Transmission line & substation facilities\n• Active projects in Tamil Nadu and Andhra Pradesh\n• Turnkey solar project solutions"
    }
    
    // Crane specific
    if (message.includes('crane') || message.includes('lifting') || message.includes('crane service')) {
      return "Crane Services:\n\n• Heavy-duty crane solutions for turbines up to 2.1MW\n• Rapid mobilization to project sites\n• Cost-effective hiring solutions\n• Strict timeline adherence\n• Experienced operators and crew\n• Precision blade works expertise\n• Advanced gearbox replacement\n• Two fully equipped crane sets available"
    }
    
    // Safety specific
    if (message.includes('safety') || message.includes('green') || message.includes('environmental')) {
      return "Safety & Green Practices:\n\n• Rigorous classroom and hands-on training\n• 24x7 safety monitoring and review\n• Dedicated safety team oversight\n• Continuous improvement practices\n• Environmental responsibility focus\n• Proper hazardous waste disposal\n• Tree plantation drives\n• Solar energy & rainwater harvesting"
    }
    
    // Emergency specific
    if (message.includes('emergency') || message.includes('breakdown') || message.includes('urgent')) {
      return "Emergency Support Available 24x7:\n\n• Immediate response to wind turbine failures\n• On Call Service for troubleshooting\n• Rapid mobilization to site\n• Expert technicians for breakdowns\n• Critical component replacement\n• Emergency repair services\n• 24x7 hotline available\n\nCall now: +91 80984 95874 or +91 97507 24822"
    }
    
        
        
    // Smart Fallback with Quick Reply Suggestions
    const getClosestQuickReply = (userMessage: string): string | null => {
      const message = userMessage.toLowerCase()
      
      // Check for close matches with quick replies
      if (message.includes('service') || message.includes('servieces') || message.includes('servic') || message.includes('servise')) {
        return "services"
      }
      if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
        return "contact"
      }
      if (message.includes('about') || message.includes('company') || message.includes('who') || message.includes('what')) {
        return "about"
      }
      if (message.includes('leadership') || message.includes('director') || message.includes('lead') || message.includes('runs') || message.includes('manages')) {
        return "leadership"
      }
      return null
    }
    
    const getSuggestedQuestions = (response: string, context: string): QuickReply[] => {
      const allQuestions = [...quickReplies, ...commonQuestions]
      const suggestions: QuickReply[] = []
      
      // Context-based suggestions
      if (context === 'state') {
        // After state response, suggest related location questions
        suggestions.push(
          allQuestions.find(q => q.action === 'areas') || allQuestions[4],
          allQuestions.find(q => q.action === 'contactdetails') || allQuestions[11]
        )
      }
      else if (response.includes('services') || response.includes('service')) {
        // After service response, suggest specific service questions
        suggestions.push(
          allQuestions.find(q => q.action === 'oncall') || allQuestions[5],
          allQuestions.find(q => q.action === 'maintenance') || allQuestions[9]
        )
      }
      else if (response.includes('contact') || response.includes('phone') || response.includes('email')) {
        // After contact response, suggest company and services
        suggestions.push(
          allQuestions.find(q => q.action === 'about') || allQuestions[2],
          allQuestions.find(q => q.action === 'services') || allQuestions[0]
        )
      }
      else if (response.includes('leadership') || response.includes('director')) {
        // After leadership response, suggest company and services
        suggestions.push(
          allQuestions.find(q => q.action === 'about') || allQuestions[2],
          allQuestions.find(q => q.action === 'services') || allQuestions[0]
        )
      }
      else if (response.includes('company') || response.includes('about')) {
        // After company response, suggest services and leadership
        suggestions.push(
          allQuestions.find(q => q.action === 'services') || allQuestions[0],
          allQuestions.find(q => q.action === 'leadership') || allQuestions[3]
        )
      }
      else {
        // Default suggestions for other responses
        suggestions.push(
          allQuestions.find(q => q.action === 'services') || allQuestions[0],
          allQuestions.find(q => q.action === 'contact') || allQuestions[1],
          allQuestions.find(q => q.action === 'areas') || allQuestions[4]
        )
      }
      
      // Return 2-3 unique suggestions
      return suggestions.filter((q, index, self) => 
        q && self.findIndex(s => s?.id === q?.id) === index
      ).slice(0, 3)
    }
    
    // Handle new quick reply actions
    if (message.includes('where do you provide services') || message.includes('areas') || message.includes('where do you provide')) {
      return "Our Service Coverage Across India:\n\n🌟 **Primary Base**: Tamil Nadu (Headquarters)\n\n📍 **Extended Operations**: Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh\n\n🏢 **Major Clients**: Dalmia Cements, Ramco Cements, India Cements, TVS Srichakra, GGPL, SSM Group, Govindaraja Mills, Shanthi Gears\n\n🔧 **Services Available**: All wind energy services\n\n📞 **Contact**: +91 80984 95874 for immediate assistance"
    }
    
    if (message.includes('oncall') || message.includes('on call')) {
      return "On Call Service provides 24x7 emergency support:\n\n• Dedicated mobile teams of skilled technicians\n• Available 24x7 for troubleshooting and breakdowns\n• Wind turbine emergency response\n• Rapid mobilization to project sites\n• Expert technical support for urgent issues\n\nFor emergencies: Call +91 80984 95874 or +91 97507 24822"
    }
    
    if (message.includes('emergency') || message.includes('urgent')) {
      return "24x7 Emergency Support Available!\n\n• Immediate response to wind turbine failures\n• On Call Service for troubleshooting\n• Rapid mobilization to site\n• Expert technicians for breakdowns\n• Critical component replacement\n• Emergency repair services\n\nCall now: +91 80984 95874 or +91 97507 24822"
    }
    
    if (message.includes('locations') || message.includes('service areas')) {
      return "Our Service Locations:\n\n📍 **Tamil Nadu**: Headquarters with full operations\n\n📍 **Karnataka**: Bangalore and surrounding areas\n\n📍 **Andhra Pradesh**: Active projects across the state\n\n📍 **Maharashtra**: Mumbai and Pune metropolitan areas\n\n📍 **Rajasthan**: Jaipur and surrounding areas\n\n📍 **Gujarat**: Ahmedabad and industrial areas\n\n📍 **Madhya Pradesh**: Bhopal and industrial areas\n\nWe provide end-to-end solutions across all these states!"
    }
    
    if (message.includes('findservices') || message.includes('find services')) {
      return "You can find our comprehensive services on the Services page:\n\n📍 **Page**: /services\n\n• Complete list of all 6 service categories\n• Detailed Service Contracts information\n• Erection & De-erection details\n• On Site Work specifications\n• Solar Power Solutions\n• Crane Services capabilities\n• Safety & Green Practices\n\nThe Services page includes our comprehensive 'Comprehensive Wind Energy Services' section!"
    }
    
    if (message.includes('maintenance') || message.includes('annual')) {
      return "Annual Maintenance Service:\n\n• Qualified technicians for periodic preventive maintenance\n• Breakdown attendance support for WTGs\n• Scheduled inspections and servicing\n• Performance optimization recommendations\n• Component wear and tear monitoring\n• Extended equipment lifespan\n• Cost-effective maintenance planning\n• Detailed service reports provided"
    }
    
    if (message.includes('state') || message.includes('my state')) {
      return "INTERACTIVE_ASK_STATE"
    }
    
    if (message.includes('contactdetails') || message.includes('contact details')) {
      return "Complete Contact Information:\n\n📱 **WhatsApp**: +91 80984 95874\n\n📞 **Phone**: +91 97507 24822, +91 80984 95864\n\n📧 **Email**: sswindtechindia@gmail.com\n\n📍 **Office**: 3/437 B Nallipoombugar Nagar, Near RKR School, Tiruppur Rd, Udumalpet - 642 126, Tiruppur Dt, Tamilnadu\n\n⏰ **Response Time**: Within 24 hours\n\nWe're always ready to help with your wind energy needs!"
    }
    
    // Default Response with smart suggestions
    const closestReply = getClosestQuickReply(userMessage)
    if (closestReply) {
      const quickReply = quickReplies.find(reply => reply.action === closestReply)
      if (quickReply) {
        return `I notice you're asking about our ${quickReply.text.toLowerCase()}. Let me help with that:\n\n${getBotResponse(quickReply.text)}\n\nYou can also ask me about other topics like contact information or company details. How else can I assist you?`
      }
    }
    
    // Default Response for unknown questions
    return "I'd like to help you with that! Sometimes questions might have typos or different wording. Could you try rephrasing your question, or perhaps you meant one of these topics:\n\n• Our wind energy services and maintenance\n• Company information and leadership team\n• Service areas across India\n• Contact details and emergency support\n• Technical specifications and certifications\n\nYou can also type keywords like: services, contact, about, areas, or emergency\n\nOr choose from the suggested questions below. If you need specific technical details, our team is available at +91 80984 95874.\n\nWhat would you like to know about our wind energy solutions?"
  }

  const handleQuickReply = (action: string) => {
    const quickReply = [...quickReplies, ...commonQuestions].find(reply => reply.action === action)
    if (quickReply) {
      handleSendMessage(quickReply.text)
    }
  }

  const handleSendMessage = async (userMessage: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newUserMessage])
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      let response = getBotResponse(userMessage)
      
      // Handle interactive responses
      if (response === "INTERACTIVE_ASK_STATE") {
        setAwaitingUserInput(true)
        setCurrentContext('state')
        response = "I'd be happy to help you with that! 📍\n\nTo check if we provide services in your area, please tell me:\n\nWhich state are you located in?"
      }
      // Handle context-based responses
      else if (awaitingUserInput && currentContext === 'state') {
        const state = userMessage.toLowerCase()
        let stateResponse = ""
        
        if (state.includes('tamil nadu') || state.includes('tamilnadu')) {
          stateResponse = "✅ Yes! We provide services in Tamil Nadu\n\n📍 Headquarters: Located in Tamil Nadu with full operations\n\n• Main operational base and corporate office\n• Strong local presence and expertise\n• Comprehensive service coverage\n• Quick response time for local clients\n\nOffice: 3/437 B Nallipoombugar Nagar, Near RKR School, Tiruppur Rd, Udumalpet - 642 126, Tiruppur Dt, Tamilnadu"
        }
        else if (state.includes('karnataka') || state.includes('bangalore') || state.includes('bengaluru')) {
          stateResponse = "✅ Yes! We provide services in Karnataka\n\n📍 Service Coverage: Extended operations in Karnataka\n\n• Wind turbine services across the state\n• Bangalore and surrounding areas covered\n• Technical team deployment available\n• Maintenance and repair services\n• Installation and erection projects"
        }
        else if (state.includes('andhra pradesh') || state.includes('andhra')) {
          stateResponse = "✅ Yes! We provide services in Andhra Pradesh\n\n📍 Service Coverage: Extended operations in Andhra Pradesh\n\n• Active projects across the state\n• Wind turbine installation and maintenance\n• Technical team stationed locally\n• Rapid mobilization for emergencies"
        }
        else if (state.includes('maharashtra') || state.includes('mumbai') || state.includes('pune')) {
          stateResponse = "✅ Yes! We provide services in Maharashtra\n\n📍 Service Coverage: Extended operations in Maharashtra\n\n• Wind energy projects across major cities\n• Mumbai and Pune metropolitan areas\n• Industrial wind farm services\n• Technical expertise available locally"
        }
        else if (state.includes('rajasthan') || state.includes('jaipur')) {
          stateResponse = "✅ Yes! We provide services in Rajasthan\n\n📍 Service Coverage: Extended operations in Rajasthan\n\n• Wind turbine services in Rajasthan\n• Jaipur and surrounding areas covered\n• Technical team deployment available\n• Installation projects undertaken"
        }
        else if (state.includes('gujarat') || state.includes('ahmedabad')) {
          stateResponse = "✅ Yes! We provide services in Gujarat\n\n📍 Service Coverage: Extended operations in Gujarat\n\n• Wind energy services across Gujarat\n• Ahmedabad and industrial areas covered\n• Technical team stationed locally\n• Large wind farm projects"
        }
        else if (state.includes('madhya pradesh') || state.includes('mp') || state.includes('bhopal')) {
          stateResponse = "✅ Yes! We provide services in Madhya Pradesh\n\n📍 Service Coverage: Extended operations in Madhya Pradesh\n\n• Wind turbine services across MP\n• Bhopal and industrial areas covered\n• Technical team deployment available\n• Installation and maintenance projects"
        }
        else {
          stateResponse = "❌ Currently, we don't provide services in that state\n\n📍 States We Serve: Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh\n\n📞 Contact: +91 80984 95874 to discuss potential expansion or alternative solutions\n\nWe're always exploring opportunities to expand our service areas!"
        }
        
        setAwaitingUserInput(false)
        setCurrentContext('')
        response = stateResponse + "\n\nIs there anything else I can help you with regarding our services?"
      }
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
      
      // Generate suggested questions after each response (except when waiting for input)
      if (!awaitingUserInput) {
        const suggestions = getSuggestedQuestions(response, currentContext)
        setSuggestedQuestions(suggestions)
      }
    }, 1500)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg z-50 transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-t-lg" style={{ backgroundColor: '#395674' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <span className="font-medium text-white">Chat Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-white hover:bg-gray-700"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message, index) => (
          <div key={message.id}>
            <ChatMessage
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
            {/* Show quick replies after first bot message */}
            {index === 0 && !message.isUser && (
              <div className="mt-3 space-y-2">
                <p className="text-xs text-gray-500 font-medium mb-2">Common Questions:</p>
                {[...quickReplies, ...commonQuestions].map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply.action)}
                    disabled={isTyping}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
            {/* Show suggested questions after each bot response (except first) */}
            {index > 0 && !message.isUser && suggestedQuestions.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-xs text-gray-500 font-medium mb-2">Suggested Questions:</p>
                {!showAllQuestions ? (
                  <>
                    {suggestedQuestions.slice(0, 2).map((reply) => (
                      <button
                        key={reply.id}
                        onClick={() => handleQuickReply(reply.action)}
                        disabled={isTyping}
                        className="w-full px-3 py-2 text-xs bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
                      >
                        {reply.text}
                      </button>
                    ))}
                    <button
                      onClick={() => setShowAllQuestions(true)}
                      disabled={isTyping}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left font-medium"
                    >
                      View More Questions →
                    </button>
                  </>
                ) : (
                  <>
                    {[...suggestedQuestions, ...[...quickReplies, ...commonQuestions].filter(q => !suggestedQuestions.find(sq => sq.id === q.id))].slice(0, 5).map((reply) => (
                      <button
                        key={reply.id}
                        onClick={() => handleQuickReply(reply.action)}
                        disabled={isTyping}
                        className="w-full px-3 py-2 text-xs bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
                      >
                        {reply.text}
                      </button>
                    ))}
                    <button
                      onClick={() => setShowAllQuestions(false)}
                      disabled={isTyping}
                      className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left font-medium"
                    >
                      Show Less ←
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-2 max-w-[80%]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ backgroundColor: '#395674' }}>
              B
            </div>
            <div className="rounded-2xl px-4 py-2 rounded-bl-sm flex items-center justify-center" style={{ backgroundColor: '#e8eef2' }}>
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#395674', animationDuration: '0.8s' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: "0.2s", backgroundColor: '#395674', animationDuration: '0.8s' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: "0.4s", backgroundColor: '#395674', animationDuration: '0.8s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {!awaitingUserInput && <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />}
      {awaitingUserInput && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Waiting for your response...</span>
          </div>
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} placeholder="Type your state name..." />
        </div>
      )}
    </div>
  )
}
