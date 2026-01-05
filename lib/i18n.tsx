'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'ta' | 'kn' | 'dz' | 'te' | 'hi' | 'ml';

type Messages = Record<string, any>;

const STORAGE_KEY = 'sswindtech_locale';

const messages: Record<Locale, Messages> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      getStarted: 'Get Started',
      language: 'Language',
    },
    hero: {
      title: 'Wind-Powered Future',
      description:
        'Providing expert wind mill services and maintenance solutions to ensure optimal performance and longevity of your wind energy systems. Partner with us for reliable, professional service that keeps your turbines running efficiently.',
      exploreMore: 'Explore More',
      trustedTitle: 'Trusted by businesses and communities who want clean, reliable energy.',
      trustedBody:
        'From small homes to large industries, our customers choose us for affordable and sustainable wind-powered solutions.',
    },
    aboutSection: {
      badge: 'About Us',
      titleLine1: '32+ Years of Windmill Experience',
      titleLine2: 'Service Excellence',
      titleLine3: '& Innovation',
      description:
        'SS Wind Tech has established itself as a leading windmill service provider with over 32+ years of industry experience, delivering reliable and technically advanced solutions across the renewable energy sector. The company offers a comprehensive range of services including erection and installation, repowering, make change, decommissioning, life extension studies of Wind Turbine Generators (WTGs), operation and maintenance, crane-assisted services, and repair works of windmill components supported by fully equipped workshops, electronics laboratories, and hydraulic facilities, along with other windmill-related activities.',
      exploreMore: 'Explore More',
    },
    footer: {
      companyTagline:
        'Leading wind mill service provider with expert maintenance, installation, and repair solutions for optimal renewable energy system performance.',
      quickLinks: 'Quick Links',
      ourServices: 'Services',
      contactUs: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      allRightsReserved: 'All rights reserved.',
      services: {
        sitePrep: 'Site Preparation & Ground Works',
        mechElec: 'Mechanical & Electrical Installation',
        annual: 'Annual Servicing & Maintenance',
        wtg: 'WTG Operation & HT Line O&M',
      },
    },
    aboutPage: {
      heroTitle: 'About SS Wind Tech',
      heroSubtitle: 'Your trusted partner in professional wind mill services, maintenance, and optimization solutions.',
      storyTitle: 'Our Story',
      story: {
        p1:
          'SS Wind Tech has established itself as a leading windmill service provider with over 32+ years of industry experience, delivering reliable and technically advanced solutions across the renewable energy sector. The company offers a comprehensive range of services including erection and installation, repowering, make change, decommissioning, life extension studies of Wind Turbine Generators (WTGs), operation and maintenance, crane-assisted services, and repair works of windmill components supported by fully equipped workshops, electronics laboratories, and hydraulic facilities.',
        p2:
          "SS Wind Tech provides integrated end-to-end solutions and a diverse portfolio of services for both the wind farm and solar power industries. Currently, the company's operations span across the country, with a strong presence in Tamil Nadu and extended service coverage in states such as Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh, and other regions. The company serves a wide and impressive client base, built on trust, consistent performance, and quality service delivery.",
        p3:
          "The foundation of SS Wind Tech's success lies in its unwavering commitment to sustainable business practices, environmental best practices, and social responsibility. The company continually focuses on enhancing its technical capabilities, strengthening operational excellence, and achieving higher benchmarks in performance delivery while maintaining its competitive edge in the market. Leveraging its expertise in renewable energy, SS Wind Tech has also expanded its capabilities to undertake solar power projects, reinforcing its vision for a sustainable and energy-efficient future.",
      },
      vmgTitle: 'Our Vision, Mission & Goals',
      visionTitle: 'Our Vision',
      visionBody: 'To be a global renewable energy leader in customer satisfaction through service and sustainability.',
      missionTitle: 'Our Mission',
      missionBody: 'Highest priority to Safety, Quality of Product, External & Internal Customer Satisfaction.',
      goalsTitle: 'Our Goals',
      goals: {
        items: {
          0: 'Increase profit through quality as well as risk management',
          1: 'Maintain minimum manpower to control site activity',
          2: 'Ensure Zero-Deviation-Strategy in all processes',
          3: 'Ensure open-minded and honest communication based on facts internally and externally',
          4: 'Ensure continuous improvements (CIMS)',
        },
      },
      expertiseTitle: 'Our Expertise',
      expertiseSubtitle: 'Comprehensive wind energy solutions backed by decades of experience',
      expertiseStats: {
        years: 'Years Experience',
        capacity: 'to 2.5MW Capacity',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'Customer Satisfaction',
      },
      directorsTitle: 'Meet our Directors',
      directorsSubtitle: 'Leadership team with decades of experience in wind energy solutions',
      directors: {
        sundar: {
          name: 'Mr. Sundar Murthy',
          role: 'Managing Director',
          bio: {
            p1:
              "Mr. Sundar Murthy, Managing Director, is the guiding force behind the company's vision and direction. He provides strong leadership that keeps the organization steady during both growth phases and challenging times. With clear strategic thinking, he ensures the company remains stable in a dynamic and competitive environment.",
            p2:
              "His ability to make timely and well-informed decisions strengthens the company's foundation. He carefully balances risk and opportunity to protect long-term business interests. Through disciplined management, he maintains operational efficiency across all departments.",
            p3:
              'Mr. Sundar Murthy strongly believes that teamwork is the backbone of organizational success. He actively guides, mentors, and motivates employees at all levels. His leadership style encourages transparency, trust, and mutual respect.',
            p4:
              'He empowers teams to take responsibility and deliver their best performance. By aligning individual goals with company objectives, he builds a unified workforce. His vision and commitment continue to play a vital role in the company\'s long-term success.',
          },
        },
        sivakumar: {
          name: 'Mr. Sivakumar',
          role: 'Technical Director',
          bio: {
            p1:
              'As a highly accomplished engineer, Mr. Sivakumar demonstrates an exceptional drive for solving complex mechanical challenges. With over 30 years of extensive experience in wind turbine servicing, he brings deep technical expertise in WTG blades, WTG gearboxes, and winch systems—making him a significant asset to the organization.',
            p2:
              'His additional hands-on experience with hydraulic cranes further strengthens his technical leadership. Mr. Sivakumar has also successfully led and executed multiple wind turbine installations overseas, earning recognition for his international project excellence and engineering competence.',
            p3:
              'He is an active member of an energetic team of engineers and technicians, collectively possessing hardcore hands-on experience.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'Our Services',
      heroSubtitle:
        "Comprehensive wind mill service solutions with technology-neutral expertise and complete 'cradle to grave' support",
      approachTitle: 'Our Service Approach',
      approach: {
        p1:
          "SS Wind Tech is focused entirely on the service side of wind development. We do not sell wind turbines and instead offer a 'cradle to grave' support packages to all our customers depending on their individual needs and on-site requirements.",
        p2:
          'We pride ourselves on being technology neutral and impartial, meaning we can work on a variety of different makes of wind turbines. We work with turbine manufacturers rather than competing against them and often find ourselves doing work directly for them.',
        p3:
          'Naturally, when working with various wind turbine manufacturers and customers, confidentiality is paramount to the way we operate.',
      },
      disciplinesTitle: 'Our 4 Key Disciplines',
      disciplinesSubtitle: 'Specialized teams of engineers dedicated to each activity',
      disciplines: {
        cards: {
          site: {
            title: 'Site Preparation and Ground Works',
            desc:
              'Comprehensive site preparation services including ground works, foundation preparation, and infrastructure setup for wind turbine installations.',
            bullets: {
              0: 'Site assessment and planning',
              1: 'Ground preparation and excavation',
              2: 'Infrastructure development',
              3: 'Access roads and site logistics',
            },
          },
          install: {
            title: 'Mechanical and Electrical Installation',
            desc:
              'Professional installation services including mechanical and electrical work, complete with commissioning of wind turbines.',
            bullets: {
              0: 'Mechanical turbine installation',
              1: 'Electrical systems integration',
              2: 'Turbine commissioning',
              3: 'Grid connection setup',
            },
          },
          maint: {
            title: 'Annual Servicing and Maintenance',
            desc:
              'Comprehensive annual servicing and maintenance programs to ensure optimal performance and longevity of wind turbine systems.',
            bullets: {
              0: 'Scheduled maintenance programs',
              1: 'Component inspection and testing',
              2: 'Preventive maintenance',
              3: 'Performance optimization',
            },
          },
          ops: {
            title: 'WTG Operation and HT Line O&M',
            desc:
              'Complete wind turbine generator operation and high-tension line operation and maintenance services for continuous energy production.',
            bullets: {
              0: 'WTG operation management',
              1: 'High-tension line maintenance',
              2: '24/7 monitoring and support',
              3: 'Emergency response services',
            },
          },
        },
      },
      getQuote: 'Get Quote',
      ctaTitle: 'Ready to Discuss Your Wind Energy Project?',
      ctaParagraph:
        "Please feel free to browse through the different categories where further information is available as well as photos from projects we have been involved with in the past. If you can't find what you're looking for, please call or email SS Wind Tech and we will be delighted to help with your project.",
      ctaButton: 'Contact Us Today',
    },
    servicesSection: {
      title: 'Comprehensive Wind Energy Services',
      subtitle:
        'From 250KW to 2.1MW turbines, we deliver end-to-end solutions with technical excellence and rapid execution across wind and solar energy sectors.',
      contracts: {
        title: 'Service Contracts',
        subtitle: 'Flexible maintenance solutions tailored to your needs',
        trustedByLabel: 'Trusted by:',
        cards: {
          onCall: {
            title: 'On Call Service',
            desc:
              'Dedicated mobile teams of skilled technicians available 24x7 for troubleshooting, breakdowns, and wind turbine emergencies.',
          },
          annual: {
            title: 'Annual Maintenance',
            desc: 'Qualified technicians for periodic preventive maintenance and breakdown attendance of WTGs.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              'Comprehensive O&M with 24x7 coverage, spares supply, major component repair/replacement, and guaranteed machine availability.',
          },
          scada: {
            title: 'SCADA System',
            desc:
              'Remote monitoring and real-time data analysis to verify turbine performance against OEM power curves.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'Expert handling of major wind turbine components',
        component: {
          title: 'Component Services',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles and Tower Sections',
            2: 'Safe transportation to repair facilities',
            3: 'Reinstallation per safety standards',
          },
        },
        training: {
          title: 'Training & Safety',
          bullets: {
            0: 'Continuous technical training programs',
            1: 'Stringent safety practices adherence',
            2: 'Safe working at heights expertise',
            3: 'Nacelle hub operations training',
          },
        },
      },
      onSite: {
        title: 'On Site Work',
        subtitle: 'Comprehensive on-tower repair and retrofit services',
        topTower: {
          title: 'Top Tower Work',
          bullets: {
            0: 'High speed pinion & bearing replacement',
            1: 'Gear oil replacement (ground pumping)',
            2: 'Generator bearing replacement',
            3: 'Gearbox suspension replacement',
            4: 'Yaw gear unit & brake servicing',
          },
        },
        bottomTower: {
          title: 'Bottom Tower Work',
          bullets: {
            0: 'Main bearing replacement',
            1: 'Broken blade patch work',
            2: 'Blade pinion replacement',
            3: 'Blade cylinder replacement',
            4: 'UT test of main shaft',
          },
        },
      },
      solar: {
        title: 'Solar Power Solutions',
        subtitle: 'Turnkey solar projects leveraging renewable energy expertise',
        capabilities: {
          title: 'Project Capabilities',
          bullets: {
            0: 'MW-scale solar power plants',
            1: 'Rooftop solar power systems',
            2: 'Civil construction & structure mounting',
            3: 'Cabling and electrical works',
          },
        },
        presence: {
          title: 'Regional Presence',
          bullets: {
            0: 'Active projects across Tamil Nadu',
            1: 'Successful installations in Andhra Pradesh',
            2: 'Power evacuation systems expertise',
            3: 'Transmission line & substation facilities',
          },
        },
      },
      crane: {
        title: 'Crane Services',
        subtitle: 'Heavy-duty crane solutions with rapid mobilization',
        features: {
          title: 'Service Features',
          bullets: {
            0: 'Rapid mobilization to project sites',
            1: 'Cost-effective hiring solutions',
            2: 'Strict timeline adherence',
            3: 'Experienced operators and crew',
          },
        },
        expertise: {
          title: 'Windmill Expertise',
          bullets: {
            0: 'Turbines up to 2.1MW capacity',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'Two fully equipped crane sets',
          },
        },
      },
      safety: {
        title: 'Safety Commitment',
        bullets: {
          0: 'Rigorous classroom and hands-on training',
          1: '24x7 safety monitoring and review',
          2: 'Dedicated safety team oversight',
          3: 'Continuous improvement practices',
        },
      },
      green: {
        title: 'Green Practices',
        bullets: {
          0: 'Environmental responsibility focus',
          1: 'Proper hazardous waste disposal',
          2: 'Tree plantation drives',
          3: 'Solar energy & rainwater harvesting',
        },
      },
      ctaButton: 'Get a Service Quote',
    },
    privacy: {
      title: 'Privacy Policy',
      introductionTitle: 'Introduction',
      introductionBody:
        'At SS Wind Tech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.',
      collectTitle: 'Information We Collect',
      collect: {
        items: {
          0: {
            label: 'Personal Information:',
            value: 'Name, email address, phone number, company details when you contact us or request services.',
          },
          1: {
            label: 'Technical Information:',
            value: 'IP address, browser type, device information, and usage data for analytics purposes.',
          },
          2: {
            label: 'Business Information:',
            value: 'Company details, project requirements, and service preferences.',
          },
        },
      },
      useTitle: 'How We Use Your Information',
      use: {
        bullets: {
          0: 'To provide wind energy services and technical support',
          1: 'To respond to inquiries and service requests',
          2: 'To improve our website and services',
          3: 'To send important updates and service information',
          4: 'For analytics and website optimization',
        },
      },
      protectionTitle: 'Data Protection',
      protectionBody:
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure servers and accessed only by authorized personnel.',
      thirdPartyTitle: 'Third-Party Sharing',
      thirdPartyBody:
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or necessary to provide our services. We may share information with trusted partners only when essential for service delivery.',
      contactTitle: 'Contact Us',
      contactBody:
        'If you have questions about this Privacy Policy or how we handle your data, please contact us:',
      contactDetails: {
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        whatsappLabel: 'WhatsApp:',
      },
    },
    cookie: {
      title: 'Cookie Policy',
      whatTitle: 'What Are Cookies',
      howTitle: 'How We Use Cookies',
      typesTitle: 'Types of Cookies We Use',
      sessionTitle: 'Session Cookies',
      persistentTitle: 'Persistent Cookies',
      thirdPartyCookiesTitle: 'Third-Party Cookies',
      manageTitle: 'Managing Your Cookies',
      consentTitle: 'Cookie Consent',
      thirdPartyServicesTitle: 'Third-Party Services',
      rightsTitle: 'Your Rights',
      updatesTitle: 'Updates to This Policy',
      contactTitle: 'Contact Us',
    },
    contactPage: {
      heroTitle: 'Get in Touch',
      heroSubtitle: "Let's discuss how we can help with your wind mill service needs",
      successTitle: 'Message Sent Successfully!',
      successSubtitle: "Thank you for contacting us. We'll respond to your inquiry soon.",
      formTitle: 'Send us a Message',
      infoTitle: 'Contact Information',
      infoSubtitle: 'Reach out to us directly',
      infoCards: {
        whatsapp: {
          title: 'WhatsApp',
        },
        phone: {
          title: 'Phone',
        },
        email: {
          title: 'Email',
        },
        office: {
          title: 'Office',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service',
        message: 'Message',
        submit: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '(555) 123-4567',
        messagePlaceholder: 'Tell us about your project...',
        serviceSelect: 'Select service',
        serviceOptions: {
          maintenance: 'Maintenance',
          installation: 'Installation',
          consulting: 'Consulting',
          repair: 'Repair',
          other: 'Other',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'Why Choosing Us Means Choosing a Cleaner, Smarter Tomorrow',
        subtitle:
          'Leading the windmill revolution with advanced turbine technology and sustainable energy solutions for generations to come.',
        leftCard:
          'Our windmill specialists provide expert installation and maintenance services, ensuring optimal turbine performance in all wind conditions.',
        rightCard:
          'Our advanced windmill systems reduce energy costs by up to 70% and provide clean, renewable power for homes, farms, and businesses.',
        bottomCard:
          'Our windmill expertise extends beyond installation. We provide comprehensive maintenance, blade inspection, and performance optimization services, ensuring your wind energy systems operate at peak efficiency 24/7, regardless of weather conditions.',
        stats: {
          installations: 'Windmill installations nationwide',
          capacity: 'Clean energy capacity installed',
          reduction: 'Average energy cost reduction',
          expertise: 'Years of windmill expertise',
        },
      },
            faq: {
        title: 'Frequently Asked Questions',
        items: {
          0: {
            q: 'How much does a windmill installation cost?',
            a: 'The cost varies depending on the size and type of windmill system. Residential installations typically range from $15,000-$50,000, while commercial systems can cost $100,000+. We offer flexible financing options to make wind energy accessible.',
          },
          1: {
            q: 'How long does installation take?',
            a: 'Most residential installations take 2-4 weeks from site assessment to completion. Commercial projects may take 6-12 weeks depending on complexity. We work efficiently to minimize disruption to your daily operations.',
          },
          2: {
            q: 'What maintenance is required?',
            a: 'Windmills require minimal maintenance. We recommend annual inspections and basic servicing. Our maintenance plans include regular check-ups, blade inspections, and performance optimization to ensure maximum efficiency.',
          },
          3: {
            q: 'How much can I save on energy costs?',
            a: 'Most customers see 60-80% reduction in electricity bills. The exact savings depend on your location, wind conditions, and energy consumption. Many systems pay for themselves within 5-7 years.',
          },
          4: {
            q: 'Do windmills work in all weather conditions?',
            a: 'Modern windmills are designed to operate in various weather conditions. They automatically shut down in extreme winds to prevent damage and can generate power in light winds. Our systems are built to withstand harsh weather.',
          },
          5: {
            q: 'What permits do I need?',
            a: 'Requirements vary by location. We handle all permitting processes including zoning approvals, electrical permits, and environmental assessments. Our team ensures full compliance with local regulations.',
          },
        },
      },
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      services: 'சேவைகள்',
      contact: 'தொடர்பு',
      getStarted: 'தொடங்குங்கள்',
      language: 'மொழி',
    },
    hero: {
      title: 'காற்றாலை சக்தி எதிர்காலம்',
      description:
        'உங்கள் காற்றாலை அமைப்புகள் சிறந்த செயல்திறனுடன் நீடித்து இயங்க நிபுணத்துவ காற்றாலை சேவைகள் மற்றும் பராமரிப்பு தீர்வுகளை வழங்குகிறோம். நம்பகமான, தொழில்முறை சேவைக்கு எங்களை தேர்வு செய்யுங்கள்.',
      exploreMore: 'மேலும் அறிய',
      trustedTitle: 'சுத்தமான, நம்பகமான ஆற்றலை விரும்பும் நிறுவனங்களும் சமூகங்களும் எங்களை நம்புகின்றன.',
      trustedBody:
        'சிறிய வீடுகளிலிருந்து பெரிய தொழில்கள் வரை, மலிவான மற்றும் நிலையான காற்றாலை தீர்வுகளுக்காக எங்கள் வாடிக்கையாளர்கள் எங்களை தேர்வு செய்கிறார்கள்.',
    },
    aboutSection: {
      badge: 'எங்களை பற்றி',
      titleLine1: '32+ ஆண்டுகள் காற்றாலை',
      titleLine2: 'சேவை சிறப்பு',
      titleLine3: 'மற்றும் புதுமை',
      description:
        'SS Wind Tech நிறுவனம் 32+ ஆண்டுகளுக்கு மேற்பட்ட அனுபவத்துடன் நம்பகமான மற்றும் தொழில்நுட்ப முன்னேற்றமான காற்றாலை சேவைகளை வழங்குகிறது. நிறுவுதல், erecting, repowering, decommissioning, WTG life extension, O&M, crane-assisted சேவைகள் மற்றும் கூறுகள் பழுது பார்ப்பு உள்ளிட்ட பல்வேறு சேவைகளை வழங்குகிறோம்.',
      exploreMore: 'மேலும் அறிய',
    },
    footer: {
      companyTagline:
        'சிறந்த பராமரிப்பு, நிறுவுதல் மற்றும் பழுது பார்ப்பு தீர்வுகளுடன் முன்னணி காற்றாலை சேவை வழங்குநர்.',
      quickLinks: 'விரைவு இணைப்புகள்',
      ourServices: 'சேவைகள்',
      contactUs: 'தொடர்பு கொள்ள',
      privacyPolicy: 'தனியுரிமை கொள்கை',
      cookiePolicy: 'குக்கீ கொள்கை',
      allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      services: {
        sitePrep: 'தள தயாரிப்பு & நில பணிகள்',
        mechElec: 'இயந்திர & மின்சார நிறுவுதல்',
        annual: 'ஆண்டு பராமரிப்பு & சேவை',
        wtg: 'WTG இயக்கம் & HT லைன் O&M',
      },
    },
    aboutPage: {
      heroTitle: 'SS Wind Tech பற்றி',
      heroSubtitle: 'காற்றாலை சேவை, பராமரிப்பு மற்றும் மேம்பாட்டு தீர்வுகளுக்கான உங்கள் நம்பகமான துணை.',
      storyTitle: 'எங்கள் கதை',
      story: {
        p1:
          'SS Wind Tech நிறுவனம் 32+ ஆண்டுகளுக்கு மேற்பட்ட அனுபவத்துடன் முன்னணி காற்றாலை சேவை வழங்குநராக உருவெடுத்துள்ளது. புதுப்பிக்கத்தக்க ஆற்றல் துறையில் நம்பகமான மற்றும் தொழில்நுட்ப முன்னேற்றமான தீர்வுகளை வழங்குகிறது. நிறுவுதல்/நிறுவல், repowering, make change, decommissioning, WTG life extension ஆய்வுகள், O&M, கிரேன் உதவி சேவைகள் மற்றும் கூறுகள் பழுது பார்ப்பு உள்ளிட்ட முழுமையான சேவைகளை, முழுமையாக உபகரணங்கள் கொண்ட பணிமனைகள், எலக்ட்ரானிக்ஸ் ஆய்வகம் மற்றும் ஹைட்ராலிக் வசதிகளுடன் ஆதரிக்கிறது.',
        p2:
          'காற்றாலை மற்றும் சூரிய ஆற்றல் துறைகளுக்காக SS Wind Tech ஒருங்கிணைந்த தொடக்கம் முதல் முடிவு வரை தீர்வுகளை வழங்குகிறது. தற்போது இந்தியா முழுவதும் செயல்பாடுகள் பரந்து, தமிழ்நாட்டில் வலுவான இருப்புடன், கர்நாடகா, ஆந்திரப் பிரதேசம், மகாராஷ்டிரா, ராஜஸ்தான், குஜராத், மத்தியப் பிரதேசம் உள்ளிட்ட பகுதிகளிலும் சேவை வழங்குகிறது. நம்பிக்கை, தொடர்ச்சியான செயல்திறன் மற்றும் தரமான சேவை வழங்குதலின் அடிப்படையில் பெரிய வாடிக்கையாளர் வட்டத்தை நிறுவியுள்ளது.',
        p3:
          'நிலையான வணிக நடைமுறைகள், சுற்றுச்சூழல் சிறந்த நடைமுறைகள், சமூக பொறுப்புணர்வு ஆகியவற்றில் SS Wind Tech வைத்துள்ள உறுதியான அர்ப்பணிப்பே வெற்றியின் அடித்தளம். தொழில்நுட்ப திறன்களை மேம்படுத்தி, செயல்பாட்டு சிறப்பை வலுப்படுத்தி, உயர்ந்த செயல்திறன் அளவுகோள்களை அடைய தொடர்ந்து கவனம் செலுத்துகிறது. புதுப்பிக்கத்தக்க ஆற்றல் நிபுணத்துவத்தை பயன்படுத்தி சூரிய மின்திட்டங்களையும் மேற்கொள்ளும் திறனை விரிவுபடுத்தி, நிலையான மற்றும் ஆற்றல் திறன் கொண்ட எதிர்கால பார்வையை வலுப்படுத்துகிறது.',
      },
      vmgTitle: 'எங்கள் பார்வை, பணிமுனை & இலக்குகள்',
      visionTitle: 'எங்கள் பார்வை',
      visionBody: 'சேவையும் நிலைத்தன்மையும் மூலம் வாடிக்கையாளர் திருப்தியில் உலகளாவிய புதுப்பிக்கத்தக்க ஆற்றல் தலைவராக இருப்பது.',
      missionTitle: 'எங்கள் பணிமுனை',
      missionBody: 'பாதுகாப்பு, தயாரிப்பு தரம், வெளி மற்றும் உள் வாடிக்கையாளர் திருப்திக்கு மிக உயர்ந்த முன்னுரிமை.',
      goalsTitle: 'எங்கள் இலக்குகள்',
      goals: {
        items: {
          0: 'தரமும் ஆபத்து மேலாண்மையும் மூலம் லாபத்தை உயர்த்துதல்',
          1: 'தள பணிகளை கட்டுப்படுத்த குறைந்தபட்ச மனிதவளத்தை பராமரித்தல்',
          2: 'அனைத்து செயல்முறைகளிலும் சுழல்-விலகல் இல்லா (Zero-Deviation) தந்திரத்தை உறுதி செய்தல்',
          3: 'உள்/வெளியில் உண்மைகளை அடிப்படையாக கொண்ட திறந்த மற்றும் நேர்மையான தொடர்பை உறுதி செய்தல்',
          4: 'தொடர்ச்சியான மேம்பாடுகள் (CIMS) உறுதி செய்தல்',
        },
      },
      expertiseTitle: 'எங்கள் திறமை',
      expertiseSubtitle: 'பல ஆண்டுகளின் அனுபவத்துடன் முழுமையான காற்றாலை தீர்வுகள்',
      expertiseStats: {
        years: 'அனுபவ ஆண்டுகள்',
        capacity: '2.5MW வரை திறன்',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'வாடிக்கையாளர் திருப்தி',
      },
      directorsTitle: 'எங்கள் இயக்குநர்கள்',
      directorsSubtitle: 'காற்றாலை துறையில் நீண்ட அனுபவம் கொண்ட தலைமை குழு',
      directors: {
        sundar: {
          name: 'திரு. சுந்தர் மூர்த்தி',
          role: 'மேலாண்மை இயக்குநர்',
          bio: {
            p1:
              'மேலாண்மை இயக்குநரான திரு. சுந்தர் மூர்த்தி, நிறுவனத்தின் பார்வை மற்றும் திசைக்கு வழிகாட்டும் முக்கிய சக்தியாக உள்ளார். வளர்ச்சி கட்டங்களிலும் சவாலான காலங்களிலும் நிறுவனத்தை நிலையாக முன்னெடுத்து வலுவான தலைமை வழங்குகிறார்.',
            p2:
              'சரியான நேரத்தில், நன்கு தகவலறிந்து முடிவெடுக்கும் திறன் நிறுவனத்தின் அடித்தளத்தை வலுப்படுத்துகிறது. ஆபத்தும் வாய்ப்பும் சமநிலைப்படுத்தி நீண்டகால வணிக நலன்களை பாதுகாக்கிறார்.',
            p3:
              'குழுப்பணி தான் நிறுவன வெற்றியின் முதுகெலும்பு என்ற நம்பிக்கையுடன், அனைத்து நிலைகளிலும் ஊழியர்களை வழிநடத்தி, ஊக்குவிக்கிறார். வெளிப்படைத்தன்மை, நம்பிக்கை, பரஸ்பர மரியாதை ஆகியவற்றை அவரது தலைமை பாணி ஊக்குவிக்கிறது.',
            p4:
              'குழுக்களை பொறுப்பேற்று சிறப்பாக செயல்பட அதிகாரமளித்து, தனிநபர் இலக்குகளை நிறுவன இலக்குகளுடன் இணைத்து ஒருமைப்பாட்டை உருவாக்குகிறார். அவரது பார்வை மற்றும் அர்ப்பணிப்பு நிறுவனத்தின் நீண்டகால வெற்றிக்கு முக்கிய பங்கு வகிக்கிறது.',
          },
        },
        sivakumar: {
          name: 'திரு. சிவக்குமார்',
          role: 'தொழில்நுட்ப இயக்குநர்',
          bio: {
            p1:
              'மிக உயர்ந்த திறமை கொண்ட பொறியாளராக, திரு. சிவக்குமார் சிக்கலான இயந்திர சவால்களை தீர்ப்பதில் சிறந்த ஆர்வம் காட்டுகிறார். காற்றாலை டர்பைன் சேவைகளில் 30+ ஆண்டுகள் அனுபவத்துடன் WTG பிளேடுகள், கியர்பாக்ஸ், விண்ச் அமைப்புகள் உள்ளிட்ட துறைகளில் ஆழமான நிபுணத்துவம் கொண்டவர்.',
            p2:
              'ஹைட்ராலிக் கிரேன்களுடன் உள்ள கள அனுபவம் அவரது தொழில்நுட்ப தலைமைத்துவத்தை மேலும் வலுப்படுத்துகிறது. வெளிநாடுகளில் பல காற்றாலை நிறுவல்களை வெற்றிகரமாக வழிநடத்தி செயல்படுத்தியதன் மூலம் சர்வதேச திட்ட அனுபவத்திற்கு பாராட்டுகளை பெற்றுள்ளார்.',
            p3:
              'கடினமான கள அனுபவம் கொண்ட பொறியாளர்கள் மற்றும் தொழில்நுட்பர்களின் ஆற்றல் மிக்க குழுவின் செயலில் ஈடுபடும் உறுப்பினராக உள்ளார்.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'எங்கள் சேவைகள்',
      heroSubtitle: 'தொழில்நுட்ப நடுநிலையுடன் முழுமையான காற்றாலை சேவை தீர்வுகள்',
      approachTitle: 'எங்கள் சேவை அணுகுமுறை',
      approach: {
        p1:
          "SS Wind Tech காற்றாலை மேம்பாட்டின் சேவை பக்கத்தையே முழுமையாக கவனம் செலுத்துகிறது. நாங்கள் காற்றாலை டர்பைன்களை விற்கவில்லை; உங்கள் தேவைகள் மற்றும் தள தேவைகளுக்கு ஏற்ப 'cradle to grave' ஆதரவு தொகுப்புகளை வழங்குகிறோம்.",
        p2:
          'நாங்கள் தொழில்நுட்ப நடுநிலையுடன் பல்வேறு தயாரிப்பாளர்களின் டர்பைன்களில் வேலை செய்ய முடியும். தயாரிப்பாளர்களுடன் போட்டியிடாமல் இணைந்து செயல்படுகிறோம்; பல நேரங்களில் அவர்களுக்காக நேரடியாகவே பணியாற்றுகிறோம்.',
        p3:
          'பல தயாரிப்பாளர்கள் மற்றும் வாடிக்கையாளர்களுடன் பணிபுரியும் போது, ரகசியத்தன்மை எங்கள் செயல்முறையில் மிக முக்கியமானது.',
      },
      disciplinesTitle: 'எங்கள் 4 முக்கிய துறைகள்',
      disciplinesSubtitle: 'ஒவ்வொரு பணிக்கும் சிறப்பு பொறியாளர் குழுக்கள்',
      disciplines: {
        cards: {
          site: {
            title: 'தள தயாரிப்பு & நில பணிகள்',
            desc:
              'காற்றாலை நிறுவல்களுக்கு நில பணிகள், அடித்தளம் தயாரிப்பு மற்றும் கட்டமைப்பு அமைப்பு உள்ளிட்ட முழுமையான தள தயாரிப்பு சேவைகள்.',
            bullets: {
              0: 'தள மதிப்பீடு மற்றும் திட்டமிடல்',
              1: 'நிலம் தயாரிப்பு மற்றும் தோண்டுதல்',
              2: 'கட்டமைப்பு மேம்பாடு',
              3: 'அணுகல் சாலை மற்றும் தள லாஜிஸ்டிக்ஸ்',
            },
          },
          install: {
            title: 'இயந்திர & மின்சார நிறுவுதல்',
            desc:
              'இயந்திர மற்றும் மின்சார பணிகளுடன், டர்பைன் கமிஷனிங் உட்பட தொழில்முறை நிறுவல் சேவைகள்.',
            bullets: {
              0: 'இயந்திர டர்பைன் நிறுவுதல்',
              1: 'மின்சார அமைப்புகள் ஒருங்கிணைப்பு',
              2: 'டர்பைன் கமிஷனிங்',
              3: 'கிரிட் இணைப்பு அமைப்பு',
            },
          },
          maint: {
            title: 'ஆண்டு பராமரிப்பு & சேவை',
            desc:
              'டர்பைன்களின் சிறந்த செயல்திறன் மற்றும் நீடித்த பயன்பாட்டிற்கான முழுமையான ஆண்டு பராமரிப்பு திட்டங்கள்.',
            bullets: {
              0: 'அட்டவணைப்படுத்தப்பட்ட பராமரிப்பு திட்டங்கள்',
              1: 'கூறு ஆய்வு மற்றும் சோதனை',
              2: 'முன்கூட்டிய பராமரிப்பு',
              3: 'செயல்திறன் மேம்பாடு',
            },
          },
          ops: {
            title: 'WTG இயக்கம் & HT லைன் O&M',
            desc:
              'தொடர்ச்சியான ஆற்றல் உற்பத்திக்காக WTG இயக்கம் மற்றும் உயர் மின்னழுத்த (HT) லைன் O&M சேவைகள்.',
            bullets: {
              0: 'WTG இயக்க மேலாண்மை',
              1: 'HT லைன் பராமரிப்பு',
              2: '24/7 கண்காணிப்பு மற்றும் ஆதரவு',
              3: 'அவசர பதில் சேவைகள்',
            },
          },
        },
      },
      getQuote: 'மேற்கோள் பெற',
      ctaTitle: 'உங்கள் காற்றாலை திட்டத்தை பற்றி பேச தயாரா?',
      ctaParagraph:
        'மேலும் தகவல்களும், கடந்த திட்டங்களின் புகைப்படங்களும் உள்ள பிரிவுகளை பார்வையிட தயங்க வேண்டாம். தேடும் தகவல் கிடைக்கவில்லை என்றால் SS Wind Tech-க்கு அழையுங்கள் அல்லது மின்னஞ்சல் செய்யுங்கள்; உங்கள் திட்டத்திற்கு உதவ மகிழ்ச்சியடைவோம்.',
      ctaButton: 'இன்றே தொடர்புகொள்ள',
    },
    servicesSection: {
      title: 'முழுமையான காற்றாலை சேவைகள்',
      subtitle:
        '250KW முதல் 2.1MW வரை, தொழில்நுட்ப சிறப்பும் விரைவு செயல்படுத்தலும் கொண்ட end-to-end தீர்வுகளை காற்றாலை மற்றும் சூரிய ஆற்றல் துறைகளில் வழங்குகிறோம்.',
      contracts: {
        title: 'சேவை ஒப்பந்தங்கள்',
        subtitle: 'உங்கள் தேவைக்கு ஏற்ப நெகிழ்வான பராமரிப்பு தீர்வுகள்',
        trustedByLabel: 'நம்பிக்கை வைத்தவர்கள்:',
        cards: {
          onCall: {
            title: 'ஆன்-கால் சேவை',
            desc:
              '24x7 கிடைக்கும் திறமையான தொழில்நுட்பர்களின் மொபைல் குழுக்கள்—troubleshooting, breakdown மற்றும் அவசர நிலைகளுக்கு.',
          },
          annual: {
            title: 'ஆண்டு பராமரிப்பு',
            desc: 'WTG களுக்கான காலமுறை முன்தடுப்பு பராமரிப்பு மற்றும் breakdown attendance.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              '24x7 கவரேஜ், spare supply, முக்கிய கூறு repair/replacement மற்றும் machine availability உத்தரவாதத்துடன் முழுமையான O&M.',
          },
          scada: {
            title: 'SCADA அமைப்பு',
            desc:
              'Remote monitoring மற்றும் real-time data analysis மூலம் OEM power curves-க்கு எதிராக செயல்திறன் சரிபார்ப்பு.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'முக்கிய டர்பைன் கூறுகளை நிபுணத்துவமாக கையாளுதல்',
        component: {
          title: 'கூறு சேவைகள்',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles மற்றும் Tower பகுதிகள்',
            2: 'பழுது வசதிக்கு பாதுகாப்பான போக்குவரத்து',
            3: 'பாதுகாப்பு விதிமுறைகளுக்கு ஏற்ப மறுநிறுவல்',
          },
        },
        training: {
          title: 'பயிற்சி & பாதுகாப்பு',
          bullets: {
            0: 'தொடர்ச்சியான தொழில்நுட்ப பயிற்சி திட்டங்கள்',
            1: 'கடுமையான பாதுகாப்பு நடைமுறைகள் பின்பற்றுதல்',
            2: 'உயரத்தில் பாதுகாப்பாக வேலை செய்யும் நிபுணத்துவம்',
            3: 'Nacelle hub operations பயிற்சி',
          },
        },
      },
      onSite: {
        title: 'தள வேலைகள்',
        subtitle: 'டவர் மேல் பழுது மற்றும் retrofit சேவைகள்',
        topTower: {
          title: 'மேல் டவர் வேலை',
          bullets: {
            0: 'அதிவேக பினியன் மற்றும் பேரிங் மாற்றம்',
            1: 'கியர் எண்ணெய் மாற்றம் (தரையிலிருந்து பம்பிங்)',
            2: 'ஜெனரேட்டர் பேரிங் மாற்றம்',
            3: 'கியர்பாக்ஸ் சஸ்பென்ஷன் மாற்றம்',
            4: 'யா கியர் யூனிட் மற்றும் பிரேக் பராமரிப்பு',
          },
        },
        bottomTower: {
          title: 'கீழ் டவர் வேலை',
          bullets: {
            0: 'முதன்மை பேரிங் மாற்றம்',
            1: 'உடைந்த பிளேட் பழுது சரிசெய்தல்',
            2: 'பிளேட் பினியன் மாற்றம்',
            3: 'பிளேட் சிலிண்டர் மாற்றம்',
            4: 'மெயின் ஷாஃப்ட் UT பரிசோதனை',
          },
        },
      },
      solar: {
        title: 'சூரிய ஆற்றல் தீர்வுகள்',
        subtitle: 'புதுப்பிக்கத்தக்க ஆற்றல் நிபுணத்துவத்துடன் turnkey solar திட்டங்கள்',
        capabilities: {
          title: 'திட்ட திறன்கள்',
          bullets: {
            0: 'MW அளவிலான சூரிய மின் நிலையங்கள்',
            1: 'மேல் கூரையிலான சூரிய மின் அமைப்புகள்',
            2: 'சிவில் கட்டுமானம் மற்றும் கட்டமைப்பு அமைத்தல்',
            3: 'கேபிளிங் மற்றும் மின்சார பணிகள்',
          },
        },
        presence: {
          title: 'பிராந்திய இருப்பு',
          bullets: {
            0: 'தமிழ்நாடு முழுவதும் செயலில் உள்ள திட்டங்கள்',
            1: 'ஆந்திரப் பிரதேசத்தில் வெற்றிகரமான நிறுவல்கள்',
            2: 'Power evacuation systems நிபுணத்துவம்',
            3: 'Transmission line & substation வசதிகள்',
          },
        },
      },
      crane: {
        title: 'கிரேன் சேவைகள்',
        subtitle: 'விரைவு mobilization உடன் heavy-duty crane தீர்வுகள்',
        features: {
          title: 'சேவை அம்சங்கள்',
          bullets: {
            0: 'திட்ட தளங்களுக்கு விரைவு mobilization',
            1: 'செலவுக் குறைவான hiring தீர்வுகள்',
            2: 'கடுமையான timeline பின்பற்றுதல்',
            3: 'அனுபவமிக்க operators மற்றும் crew',
          },
        },
        expertise: {
          title: 'காற்றாலை நிபுணத்துவம்',
          bullets: {
            0: '2.1MW வரை டர்பைன்கள்',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'முழுமையாக உபகரணங்கள் கொண்ட 2 crane sets',
          },
        },
      },
      safety: {
        title: 'பாதுகாப்பு உறுதி',
        bullets: {
          0: 'வகுப்பறை மற்றும் களப் பயிற்சி',
          1: '24x7 பாதுகாப்பு கண்காணிப்பு மற்றும் மதிப்பாய்வு',
          2: 'சிறப்பு பாதுகாப்பு குழு கண்காணிப்பு',
          3: 'தொடர்ச்சியான மேம்பாட்டு நடைமுறைகள்',
        },
      },
      green: {
        title: 'பசுமை நடைமுறைகள்',
        bullets: {
          0: 'சுற்றுச்சூழல் பொறுப்புணர்வு கவனம்',
          1: 'அபாயகர கழிவு சரியான அகற்றல்',
          2: 'மர நடவு இயக்கங்கள்',
          3: 'சூரிய ஆற்றல் & மழைநீர் சேமிப்பு',
        },
      },
      ctaButton: 'சேவை மேற்கோள் பெற',
    },
    privacy: {
      title: 'தனியுரிமை கொள்கை',
      introductionTitle: 'அறிமுகம்',
      introductionBody:
        'SS Wind Tech இல், உங்கள் தனியுரிமையை பாதுகாப்பதற்கும் உங்கள் தனிப்பட்ட தகவல்களின் பாதுகாப்பை உறுதி செய்வதற்கும் நாங்கள் உறுதிபூண்டுள்ளோம். நீங்கள் எங்கள் இணையதளத்தைப் பார்வையிடும் போது அல்லது எங்கள் சேவைகளைப் பயன்படுத்தும் போது நாங்கள் எவ்வாறு தகவலை சேகரித்து, பயன்படுத்தி, பாதுகாப்பது என்பதை இந்த தனியுரிமை கொள்கை விளக்குகிறது.',
      collectTitle: 'நாங்கள் சேகரிக்கும் தகவல்கள்',
      collect: {
        items: {
          0: {
            label: 'தனிப்பட்ட தகவல்கள்:',
            value: 'நீங்கள் எங்களை தொடர்புகொள்ளும் போது அல்லது சேவை கோரும் போது பெயர், மின்னஞ்சல், தொலைபேசி எண், நிறுவனம் விவரங்கள்.',
          },
          1: {
            label: 'தொழில்நுட்ப தகவல்கள்:',
            value: 'IP முகவரி, உலாவி வகை, சாதன தகவல், மற்றும் பகுப்பாய்வுக்கான பயன்பாட்டு தரவு.',
          },
          2: {
            label: 'வணிக தகவல்கள்:',
            value: 'நிறுவனம் விவரங்கள், திட்ட தேவைகள், மற்றும் சேவை முன்னுரிமைகள்.',
          },
        },
      },
      useTitle: 'உங்கள் தகவலை எவ்வாறு பயன்படுத்துகிறோம்',
      use: {
        bullets: {
          0: 'காற்றாலை சேவைகள் மற்றும் தொழில்நுட்ப ஆதரவு வழங்க',
          1: 'விசாரணைகள் மற்றும் சேவை கோரிக்கைகளுக்கு பதிலளிக்க',
          2: 'எங்கள் இணையதளம் மற்றும் சேவைகளை மேம்படுத்த',
          3: 'முக்கிய புதுப்பிப்புகள் மற்றும் சேவை தகவலை அனுப்ப',
          4: 'பகுப்பாய்வு மற்றும் இணையதள மேம்படுத்தலுக்கு',
        },
      },
      protectionTitle: 'தரவு பாதுகாப்பு',
      protectionBody:
        'அனுமதியற்ற அணுகல், மாற்றம், வெளிப்படுத்தல் அல்லது அழித்தல் ஆகியவற்றிலிருந்து உங்கள் தனிப்பட்ட தகவல்களை பாதுகாக்க பொருத்தமான பாதுகாப்பு நடவடிக்கைகளை நாங்கள் நடைமுறைப்படுத்துகிறோம். உங்கள் தரவு பாதுகாப்பான சேவர்களில் சேமிக்கப்பட்டு, அனுமதியுள்ள பணியாளர்களால் மட்டுமே அணுகப்படும்.',
      thirdPartyTitle: 'மூன்றாம் தரப்பு பகிர்வு',
      thirdPartyBody:
        'உங்கள் சம்மதமின்றி உங்கள் தனிப்பட்ட தகவலை மூன்றாம் தரப்புக்கு விற்கவோ, பரிமாறவோ, மாற்றவோ மாட்டோம்; சட்டப்படி தேவைப்படும் அல்லது எங்கள் சேவைகளை வழங்க அவசியமான சந்தர்ப்பங்களைத் தவிர. சேவை வழங்க அவசியமான போது மட்டுமே நம்பகமான கூட்டாளர்களுடன் பகிரலாம்.',
      contactTitle: 'தொடர்பு கொள்ள',
      contactBody:
        'இந்த தனியுரிமை கொள்கை அல்லது உங்கள் தரவை எவ்வாறு கையாளுகிறோம் என்பது குறித்து கேள்விகள் இருந்தால், தயவுசெய்து எங்களை தொடர்புகொள்ளுங்கள்:',
      contactDetails: {
        emailLabel: 'மின்னஞ்சல்:',
        phoneLabel: 'தொலைபேசி:',
        whatsappLabel: 'WhatsApp:',
      },
    },
    cookie: {
      title: 'குக்கீ கொள்கை',
      whatTitle: 'குக்கீ என்றால் என்ன',
      howTitle: 'குக்கீயை எப்படி பயன்படுத்துகிறோம்',
      typesTitle: 'நாங்கள் பயன்படுத்தும் குக்கீ வகைகள்',
      sessionTitle: 'செஷன் குக்கீகள்',
      persistentTitle: 'நிலையான குக்கீகள்',
      thirdPartyCookiesTitle: 'மூன்றாம் தரப்பு குக்கீகள்',
      manageTitle: 'குக்கீ மேலாண்மை',
      consentTitle: 'குக்கீ ஒப்புதல்',
      thirdPartyServicesTitle: 'மூன்றாம் தரப்பு சேவைகள்',
      rightsTitle: 'உங்கள் உரிமைகள்',
      updatesTitle: 'இந்த கொள்கை புதுப்பிப்புகள்',
      contactTitle: 'தொடர்பு கொள்ள',
    },
    contactPage: {
      heroTitle: 'தொடர்பு கொள்ளுங்கள்',
      heroSubtitle: 'உங்கள் காற்றாலை சேவை தேவைகள் பற்றி பேசலாம்',
      successTitle: 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!',
      successSubtitle: 'தொடர்பு கொண்டதற்கு நன்றி. விரைவில் பதிலளிக்கிறோம்.',
      formTitle: 'செய்தி அனுப்புங்கள்',
      infoTitle: 'தொடர்பு தகவல்',
      infoSubtitle: 'நேரடியாக எங்களை தொடர்புகொள்ளுங்கள்',
      infoCards: {
        whatsapp: {
          title: 'வாட்ஸ்அப்',
        },
        phone: {
          title: 'தொலைபேசி',
        },
        email: {
          title: 'மின்னஞ்சல்',
        },
        office: {
          title: 'அலுவலகம்',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'பெயர்',
        email: 'மின்னஞ்சல்',
        phone: 'தொலைபேசி',
        service: 'சேவை',
        message: 'செய்தி',
        submit: 'செய்தி அனுப்பு',
        namePlaceholder: 'உங்கள் பெயர்',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'தொலைபேசி எண்',
        messagePlaceholder: 'உங்கள் திட்டம் பற்றி எழுதுங்கள்...',
        serviceSelect: 'சேவையை தேர்ந்தெடுக்கவும்',
        serviceOptions: {
          maintenance: 'பராமரிப்பு',
          installation: 'நிறுவல்',
          consulting: 'ஆலோசனை',
          repair: 'பழுது',
          other: 'மற்றவை',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'எங்களை தேர்வு செய்வது என்பது சுத்தமான, புத்திசாலியான நாளையைக் தேர்வு செய்வது',
        subtitle:
          'மேம்பட்ட டர்பைன் தொழில்நுட்பம் மற்றும் நிலையான ஆற்றல் தீர்வுகளுடன் காற்றாலை புரட்சியை முன்னெடுக்கிறோம்.',
        leftCard:
          'எங்கள் நிபுணர் குழு நிறுவுதல் மற்றும் பராமரிப்பு சேவைகளை வழங்கி, அனைத்து காற்று நிலைகளிலும் டர்பைனின் சிறந்த செயல்திறனை உறுதி செய்கிறது.',
        rightCard:
          'எங்கள் முன்னேற்றமான காற்றாலை அமைப்புகள் மின்சார செலவுகளை 70% வரை குறைத்து, வீடுகள், பண்ணைகள் மற்றும் தொழில்களுக்கு சுத்தமான ஆற்றலை வழங்குகின்றன.',
        bottomCard:
          'நிறுவுதலுக்கு அப்பாற்பட்டு முழுமையான பராமரிப்பு, பிளேடு ஆய்வு, மற்றும் செயல்திறன் மேம்பாட்டு சேவைகளை வழங்குகிறோம். எந்த வானிலையிலும் 24/7 சிறந்த செயல்திறன் உறுதி செய்யப்படுகிறது.',
        stats: {
          installations: 'இந்தியா முழுவதும் காற்றாலை நிறுவல்கள்',
          capacity: 'நிறுவப்பட்ட சுத்த ஆற்றல் திறன்',
          reduction: 'சராசரி மின்சார செலவு குறைப்பு',
          expertise: 'காற்றாலை அனுபவ ஆண்டுகள்',
        },
      },
            faq: {
        title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        items: {
          0: {
            q: 'காற்றாலை நிறுவல் செலவு எவ்வளவு?',
            a: 'செலவு அமைப்பு அளவு மற்றும் வகையைப் பொறுத்தது. வீட்டு நிறுவல்கள் பொதுவாக $15,000-$50,000; வணிக அமைப்புகள் $100,000+ ஆகலாம். நிதி விருப்பங்களும் கிடைக்கும்.',
          },
          1: {
            q: 'நிறுவல் எவ்வளவு நேரம் எடுக்கும்?',
            a: 'வீட்டு நிறுவல்கள் தள ஆய்வு முதல் முடிவு வரை 2-4 வாரங்கள். வணிக திட்டங்கள் 6-12 வாரங்கள் வரை ஆகலாம். குறைந்த இடையூறு வகையில் விரைவாக செய்கிறோம்.',
          },
          2: {
            q: 'எந்த வகை பராமரிப்பு தேவை?',
            a: 'காற்றாலைக்கு குறைந்த பராமரிப்பே போதும். ஆண்டு ஆய்வு பரிந்துரைக்கப்படுகிறது. எங்கள் திட்டங்களில் வழக்கமான சோதனைகள், பிளேடு ஆய்வு, செயல்திறன் மேம்பாடு அடங்கும்.',
          },
          3: {
            q: 'மின்சார செலவில் எவ்வளவு சேமிப்பு கிடைக்கும்?',
            a: 'பொதுவாக 60-80% வரை குறைப்பு கிடைக்கும். இடம், காற்று நிலை, பயன்பாடு ஆகியவை பாதிக்கும். பல அமைப்புகள் 5-7 ஆண்டுகளில் செலவை மீட்டெடுக்கும்.',
          },
          4: {
            q: 'எல்லா வானிலையிலும் காற்றாலைகள் இயங்குமா?',
            a: 'நவீன காற்றாலைகள் பல்வேறு வானிலை நிலைகளுக்கு வடிவமைக்கப்பட்டவை. மிக அதிக காற்றில் தானாக நிறுத்தப்படும்; குறைந்த காற்றிலும் மின்சாரம் உருவாக்கும். கடுமையான வானிலையையும் தாங்கும்.',
          },
          5: {
            q: 'எந்த அனுமதிகள் தேவை?',
            a: 'இடத்தைக் பொறுத்து மாறும். ஜோனிங் அனுமதி, மின்சார அனுமதி, சுற்றுச்சூழல் மதிப்பீடு உள்ளிட்ட அனைத்தையும் நாங்கள் கையாளுகிறோம்.',
          },
        },
      },
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      services: 'ಸೇವೆಗಳು',
      contact: 'ಸಂಪರ್ಕ',
      getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
      language: 'ಭಾಷೆ',
    },
    hero: {
      title: 'ಗಾಳಿ ಶಕ್ತಿಯ ಭವಿಷ್ಯ',
      description:
        'ನಿಮ್ಮ ಗಾಳಿ ಶಕ್ತಿ ವ್ಯವಸ್ಥೆಗಳು ಉತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆಯಿಂದ ಮತ್ತು ಹೆಚ್ಚು ಕಾಲ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ತಜ್ಞ ವಿಂಡ್ ಮಿಲ್ ಸೇವೆಗಳು ಮತ್ತು ನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ವೃತ್ತಿಪರ ಸೇವೆಗಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ.',
      exploreMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      trustedTitle: 'ಸ್ವಚ್ಛ, ವಿಶ್ವಾಸಾರ್ಹ ಶಕ್ತಿಯನ್ನು ಬಯಸುವ ವ್ಯಾಪಾರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು ನಮ್ಮನ್ನು ನಂಬುತ್ತವೆ.',
      trustedBody:
        'ಸಣ್ಣ ಮನೆಗಳಿಂದ ದೊಡ್ಡ ಕೈಗಾರಿಕೆಗಳವರೆಗೆ, ಕೈಗೆಟುಕುವ ಮತ್ತು ದೀರ್ಘಕಾಲಿಕ ಗಾಳಿ ಶಕ್ತಿ ಪರಿಹಾರಗಳಿಗಾಗಿ ಗ್ರಾಹಕರು ನಮ್ಮನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ.',
    },
    aboutSection: {
      badge: 'ನಮ್ಮ ಬಗ್ಗೆ',
      titleLine1: '32+ ವರ್ಷಗಳ ವಿಂಡ್ ಮಿಲ್',
      titleLine2: 'ಸೇವಾ ಶ್ರೇಷ್ಠತೆ',
      titleLine3: 'ಮತ್ತು ನವೀನತೆ',
      description:
        'SS Wind Tech 32+ ವರ್ಷಗಳ ಅನುಭವದೊಂದಿಗೆ ನಂಬಿಕಾರ್ಹ ಮತ್ತು ತಾಂತ್ರಿಕವಾಗಿ ಮುಂದುವರಿದ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುವ ಪ್ರಮುಖ ವಿಂಡ್ ಮಿಲ್ ಸೇವಾ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಸ್ಥಾಪನೆ, repowering, decommissioning, WTG life extension, O&M, crane-assisted ಸೇವೆಗಳು ಹಾಗೂ ಘಟಕಗಳ ದುರಸ್ತಿ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.',
      exploreMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    },
    footer: {
      companyTagline:
        'ಉತ್ತಮ ನಿರ್ವಹಣೆ, ಸ್ಥಾಪನೆ ಮತ್ತು ದುರಸ್ತಿ ಪರಿಹಾರಗಳನ್ನು ನೀಡುವ ಪ್ರಮುಖ ವಿಂಡ್ ಮಿಲ್ ಸೇವಾ ಸಂಸ್ಥೆ.',
      quickLinks: 'ತ್ವರಿತ ಕೊಂಡಿಗಳು',
      ourServices: 'ಸೇವೆಗಳು',
      contactUs: 'ಸಂಪರ್ಕಿಸಿ',
      privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      cookiePolicy: 'ಕುಕೀ ನೀತಿ',
      allRightsReserved: 'ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      services: {
        sitePrep: 'ಸೈಟ್ ತಯಾರಿ & ನೆಲ ಕೆಲಸಗಳು',
        mechElec: 'ಯಾಂತ್ರಿಕ & ವಿದ್ಯುತ್ ಸ್ಥಾಪನೆ',
        annual: 'ವಾರ್ಷಿಕ ಸೇವೆ & ನಿರ್ವಹಣೆ',
        wtg: 'WTG ಕಾರ್ಯಾಚರಣೆ & HT ಲೈನ್ O&M',
      },
    },
    aboutPage: {
      heroTitle: 'SS Wind Tech ಬಗ್ಗೆ',
      heroSubtitle: 'ವಿಂಡ್ ಮಿಲ್ ಸೇವೆಗಳು, ನಿರ್ವಹಣೆ ಮತ್ತು ಆಪ್ಟಿಮೈಜೆಷನ್ ಪರಿಹಾರಗಳಿಗೆ ನಿಮ್ಮ ನಂಬಿಕೆಯ ಪಾಲುದಾರ.',
      storyTitle: 'ನಮ್ಮ ಕಥೆ',
      story: {
        p1:
          'SS Wind Tech 32+ ವರ್ಷಗಳ ಉದ್ಯಮ ಅನುಭವದೊಂದಿಗೆ ಪ್ರಮುಖ ವಿಂಡ್ ಮಿಲ್ ಸೇವಾ ಸಂಸ್ಥೆಯಾಗಿ ಗುರುತಿಸಿಕೊಂಡಿದೆ. ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ತಾಂತ್ರಿಕವಾಗಿ ಮುಂದುವರಿದ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸ್ಥಾಪನೆ/ಇನ್‌ಸ್ಟಾಲೇಶನ್, repowering, make change, decommissioning, WTG life extension ಅಧ್ಯಯನಗಳು, O&M, ಕ್ರೇನ್ ಸಹಾಯ ಸೇವೆಗಳು ಮತ್ತು ಘಟಕಗಳ ದುರಸ್ತಿ ಕಾರ್ಯಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಸಜ್ಜುಗೊಂಡ ವರ್ಕ್‌ಶಾಪ್‌ಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಲ್ಯಾಬ್ ಮತ್ತು ಹೈಡ್ರಾಲಿಕ್ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಬೆಂಬಲಿಸುತ್ತದೆ.',
        p2:
          'ವಿಂಡ್ ಫಾರ್ಮ್ ಮತ್ತು ಸೌರ ವಿದ್ಯುತ್ ಕ್ಷೇತ್ರಗಳಿಗೆ SS Wind Tech ಏಕೀಕೃತ end-to-end ಪರಿಹಾರಗಳನ್ನು ಹಾಗೂ ವೈವಿಧ್ಯಮಯ ಸೇವಾ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಒದಗಿಸುತ್ತದೆ. ಇಂದು ಕಂಪನಿಯ ಕಾರ್ಯಾಚರಣೆಗಳು ದೇಶಾದ್ಯಂತ ವಿಸ್ತರಿಸಿ, ತಮಿಳುನಾಡಿನಲ್ಲಿ ಬಲವಾದ ಹಾಜರಾತಿಯೊಂದಿಗೆ ಕರ್ನಾಟಕ, ಆಂಧ್ರಪ್ರದೇಶ, ಮಹಾರಾಷ್ಟ್ರ, ರಾಜಸ್ಥಾನ, ಗುಜರಾತ್, ಮಧ್ಯಪ್ರದೇಶ ಮುಂತಾದ ರಾಜ್ಯಗಳಲ್ಲೂ ಸೇವಾ ವ್ಯಾಪ್ತಿಯಿದೆ. ನಂಬಿಕೆ, ಸತತ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಸೇವೆ ಆಧಾರವಾಗಿ ದೊಡ್ಡ ಗ್ರಾಹಕ ವಲಯವನ್ನು ನಿರ್ಮಿಸಿದೆ.',
        p3:
          'ಸ್ಥಿರ ವ್ಯವಹಾರ ಕ್ರಮಗಳು, ಪರಿಸರ ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಯ ಮೇಲಿನ SS Wind Tech ನ ಅಚಲ ಬದ್ಧತೆಯೇ ಯಶಸ್ಸಿನ ಅಡಿಪಾಯ. ತಾಂತ್ರಿಕ ಸಾಮರ್ಥ್ಯ ವೃದ್ಧಿ, ಕಾರ್ಯಾಚರಣಾ ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತಾ ಮಾನದಂಡಗಳನ್ನು ಸಾಧಿಸಲು ನಿರಂತರವಾಗಿ ಗಮನ ಕೊಡುತ್ತದೆ. ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ ಪರಿಣಿತಿಯನ್ನು ಬಳಸಿ ಸೌರ ವಿದ್ಯುತ್ ಯೋಜನೆಗಳನ್ನೂ ಕೈಗೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯವನ್ನು ವಿಸ್ತರಿಸಿ, ಸ್ಥಿರ ಮತ್ತು ಶಕ್ತಿದಕ್ಷ ಭವಿಷ್ಯದ ದೃಷ್ಟಿಯನ್ನು ಮತ್ತಷ್ಟು ಬಲಪಡಿಸಿದೆ.',
      },
      vmgTitle: 'ನಮ್ಮ ದೃಷ್ಟಿ, ಮಿಷನ್ & ಗುರಿಗಳು',
      visionTitle: 'ನಮ್ಮ ದೃಷ್ಟಿ',
      visionBody: 'ಸೇವೆ ಮತ್ತು ಸ್ಥಿರತೆಯ ಮೂಲಕ ಗ್ರಾಹಕ ತೃಪ್ತಿಯಲ್ಲಿ ಜಾಗತಿಕ ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ ನಾಯಕನಾಗುವುದು.',
      missionTitle: 'ನಮ್ಮ ಮಿಷನ್',
      missionBody: 'ಸುರಕ್ಷತೆ, ಉತ್ಪನ್ನ ಗುಣಮಟ್ಟ ಮತ್ತು ಹೊರ/ಒಳ ಗ್ರಾಹಕ ತೃಪ್ತಿಗೆ ಅತ್ಯಂತ ಆದ್ಯತೆ.',
      goalsTitle: 'ನಮ್ಮ ಗುರಿಗಳು',
      goals: {
        items: {
          0: 'ಗುಣಮಟ್ಟ ಹಾಗೂ ಅಪಾಯ ನಿರ್ವಹಣೆಯ ಮೂಲಕ ಲಾಭವನ್ನು ಹೆಚ್ಚಿಸುವುದು',
          1: 'ಸೈಟ್ ಚಟುವಟಿಕೆ ನಿಯಂತ್ರಣಕ್ಕೆ ಕನಿಷ್ಠ ಮಾನವಶಕ್ತಿಯನ್ನು ಕಾಯ್ದಿರಿಸುವುದು',
          2: 'ಎಲ್ಲಾ ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲೂ ಶೂನ್ಯ-ವ್ಯತ್ಯಾಸ (Zero-Deviation) ತಂತ್ರವನ್ನು ಖಚಿತಪಡಿಸುವುದು',
          3: 'ವಾಸ್ತವಾಂಶಗಳ ಆಧಾರದಲ್ಲಿ ಒಳಗೂ ಹೊರಗೂ ಮುಕ್ತ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ಸಂವಹನವನ್ನು ಖಚಿತಪಡಿಸುವುದು',
          4: 'ನಿರಂತರ ಸುಧಾರಣೆಗಳು (CIMS) ಖಚಿತಪಡಿಸುವುದು',
        },
      },
      expertiseTitle: 'ನಮ್ಮ ಪರಿಣಿತಿ',
      expertiseSubtitle: 'ದಶಕಗಳ ಅನುಭವದಿಂದ ಬೆಂಬಲಿತ ಸಮಗ್ರ ಗಾಳಿ ಶಕ್ತಿ ಪರಿಹಾರಗಳು',
      expertiseStats: {
        years: 'ಅನುಭವ ವರ್ಷಗಳು',
        capacity: '2.5MW ವರೆಗೆ ಸಾಮರ್ಥ್ಯ',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'ಗ್ರಾಹಕ ತೃಪ್ತಿ',
      },
      directorsTitle: 'ನಮ್ಮ ನಿರ್ದೇಶಕರು',
      directorsSubtitle: 'ಗಾಳಿ ಶಕ್ತಿ ಪರಿಹಾರಗಳಲ್ಲಿ ದಶಕಗಳ ಅನುಭವ ಹೊಂದಿದ ನಾಯಕತ್ವ ತಂಡ',
      directors: {
        sundar: {
          name: 'ಶ್ರೀ. ಸುಂದರ್ ಮೂರ್ತಿ',
          role: 'ಮ್ಯಾನೇಜಿಂಗ್ ಡೈರೆಕ್ಟರ್',
          bio: {
            p1:
              'ಮ್ಯಾನೇಜಿಂಗ್ ಡೈರೆಕ್ಟರ್ ಶ್ರೀ. ಸುಂದರ್ ಮೂರ್ತಿ ಸಂಸ್ಥೆಯ ದೃಷ್ಟಿ ಮತ್ತು ದಿಕ್ಕಿಗೆ ಮಾರ್ಗದರ್ಶಕ ಶಕ್ತಿ. ಬೆಳವಣಿಗೆ ಹಂತಗಳಲ್ಲೂ ಸವಾಲಿನ ಕಾಲಗಳಲ್ಲೂ ಸಂಸ್ಥೆಯನ್ನು ಸ್ಥಿರವಾಗಿರಿಸಲು ಬಲವಾದ ನಾಯಕತ್ವ ನೀಡುತ್ತಾರೆ.',
            p2:
              'ಸಮಯೋಚಿತ ಮತ್ತು ತಿಳುವಳಿಕೆಯ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಶಕ್ತಿ ಸಂಸ್ಥೆಯ ಅಡಿಪಾಯವನ್ನು ಬಲಪಡಿಸುತ್ತದೆ. ಅಪಾಯ ಮತ್ತು ಅವಕಾಶವನ್ನು ಸಮತೋಲನಗೊಳಿಸಿ ದೀರ್ಘಕಾಲಿಕ ವ್ಯವಹಾರ ಹಿತಾಸಕ್ತಿಗಳನ್ನು ರಕ್ಷಿಸುತ್ತಾರೆ.',
            p3:
              'ತಂಡಕಾರ್ಯವೇ ಸಂಸ್ಥೆಯ ಯಶಸ್ಸಿನ ಬೆನ್ನೆಲುಬು ಎನ್ನುವ ನಂಬಿಕೆಯಿಂದ ಎಲ್ಲ ಮಟ್ಟದ ಸಿಬ್ಬಂದಿಗೆ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪ್ರೇರಣೆ ನೀಡುತ್ತಾರೆ. ಪಾರದರ್ಶಕತೆ, ನಂಬಿಕೆ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವವನ್ನು ಉತ್ತೇಜಿಸುತ್ತಾರೆ.',
            p4:
              'ಜವಾಬ್ದಾರಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ತಂಡಗಳನ್ನು ಸಬಲೀಕರಿಸಿ ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನಕ್ಕೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತಾರೆ. ವೈಯಕ್ತಿಕ ಗುರಿಗಳನ್ನು ಸಂಸ್ಥೆಯ ಗುರಿಗಳೊಂದಿಗೆ ಹೊಂದಿಸಿ ಏಕತೆ ನಿರ್ಮಿಸುತ್ತಾರೆ.',
          },
        },
        sivakumar: {
          name: 'ಶ್ರೀ. ಶಿವಕುಮಾರ್',
          role: 'ಟೆಕ್ನಿಕಲ್ ಡೈರೆಕ್ಟರ್',
          bio: {
            p1:
              'ಅತ್ಯಂತ ಸಾಧಿತ ಇಂಜಿನಿಯರ್ ಆಗಿರುವ ಶ್ರೀ. ಶಿವಕುಮಾರ್ ಸಂಕೀರ್ಣ ಯಾಂತ್ರಿಕ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸುವಲ್ಲಿ ವಿಶೇಷ ಪ್ರೇರಣೆಯುಳ್ಳವರು. ವಿಂಡ್ ಟರ್ಬೈನ್ ಸೇವೆಯಲ್ಲಿ 30+ ವರ್ಷಗಳ ಅನುಭವದಿಂದ WTG ಬ್ಲೇಡ್ಸ್, ಗಿಯರ್‌ಬಾಕ್ಸ್ ಮತ್ತು ವಿಂಚ್ ಸಿಸ್ಟಮ್‌ಗಳಲ್ಲಿ ಆಳವಾದ ಪರಿಣಿತಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ.',
            p2:
              'ಹೈಡ್ರಾಲಿಕ್ ಕ್ರೇನ್‌ಗಳ ಕೈಚಳಕ ಅನುಭವವು ಅವರ ತಾಂತ್ರಿಕ ನಾಯಕತ್ವವನ್ನು ಮತ್ತಷ್ಟು ಬಲಪಡಿಸುತ್ತದೆ. ವಿದೇಶಗಳಲ್ಲಿ ಅನೇಕ ವಿಂಡ್ ಟರ್ಬೈನ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುನ್ನಡೆಸಿ ಅನುಷ್ಠಾನಗೊಳಿಸಿದ್ದಾರೆ.',
            p3:
              'ಹಾರ್ಡ್‌ಕೋರ್ ಕೈಚಳಕ ಅನುಭವ ಹೊಂದಿರುವ ಇಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞರ ಶಕ್ತಿಶಾಲಿ ತಂಡದ ಸಕ್ರಿಯ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'ನಮ್ಮ ಸೇವೆಗಳು',
      heroSubtitle: "ತಂತ್ರಜ್ಞಾನ-ನ್ಯೂಟ್ರಲ್ ಪರಿಣಿತಿಯೊಂದಿಗೆ ಸಮಗ್ರ ವಿಂಡ್ ಮಿಲ್ ಸೇವಾ ಪರಿಹಾರಗಳು ಮತ್ತು ಸಂಪೂರ್ಣ 'cradle to grave' ಬೆಂಬಲ",
      approachTitle: 'ನಮ್ಮ ಸೇವಾ ವಿಧಾನ',
      approach: {
        p1:
          "SS Wind Tech ವಿಂಡ್ ಅಭಿವೃದ್ಧಿಯ ಸೇವಾ ಭಾಗದ ಮೇಲೆ ಸಂಪೂರ್ಣ ಗಮನಹರಿಸಿದೆ. ನಾವು ಟರ್ಬೈನ್‌ಗಳನ್ನು ಮಾರುವುದಿಲ್ಲ; ನಿಮ್ಮ ಅಗತ್ಯಗಳು ಮತ್ತು ಸೈಟ್ ಅವಶ್ಯಕತೆಗಳಿಗೆ ಅನುಗುಣವಾಗಿ 'cradle to grave' ಬೆಂಬಲ ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
        p2:
          'ತಂತ್ರಜ್ಞಾನ-ನ್ಯೂಟ್ರಲ್ ಆಗಿರುವುದರಿಂದ ವಿವಿಧ ತಯಾರಕರ ಟರ್ಬೈನ್‌ಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಬಹುದು. ನಾವು ತಯಾರಕರೊಂದಿಗೆ ಸ್ಪರ್ಧಿಸದೇ, ಅವರೊಂದಿಗೆ ಸಹಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಕೆಲವೊಮ್ಮೆ ಅವರಿಗಾಗಿ ನೇರವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.',
        p3:
          'ವಿವಿಧ ತಯಾರಕರು ಮತ್ತು ಗ್ರಾಹಕರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವಾಗ, ರಹಸ್ಯತೆ ನಮ್ಮ ಕಾರ್ಯವಿಧಾನದಲ್ಲಿ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿದೆ.',
      },
      disciplinesTitle: 'ನಮ್ಮ 4 ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು',
      disciplinesSubtitle: 'ಪ್ರತಿ ಚಟುವಟಿಕೆಗೆ ಸಮರ್ಪಿತ ವಿಶೇಷ ಇಂಜಿನಿಯರ್ ತಂಡಗಳು',
      disciplines: {
        cards: {
          site: {
            title: 'ಸೈಟ್ ತಯಾರಿ & ನೆಲ ಕೆಲಸಗಳು',
            desc:
              'ನೆಲ ಕೆಲಸಗಳು, ಫೌಂಡೇಶನ್ ತಯಾರಿ ಮತ್ತು ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಸೆಟ್‌ಅಪ್ ಸೇರಿದಂತೆ ಸಮಗ್ರ ಸೈಟ್ ತಯಾರಿ ಸೇವೆಗಳು.',
            bullets: {
              0: 'ಸೈಟ್ ಅಸೆಸ್ಮೆಂಟ್ ಮತ್ತು ಪ್ಲ್ಯಾನಿಂಗ್',
              1: 'ನೆಲ ತಯಾರಿ ಮತ್ತು ತೊಳೆಯುವ ಕೆಲಸ',
              2: 'ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಅಭಿವೃದ್ಧಿ',
              3: 'ಆಕ್ಸೆಸ್ ರಸ್ತೆಗಳು ಮತ್ತು ಸೈಟ್ ಲಾಜಿಸ್ಟಿಕ್ಸ್',
            },
          },
          install: {
            title: 'ಯಾಂತ್ರಿಕ & ವಿದ್ಯುತ್ ಸ್ಥಾಪನೆ',
            desc:
              'ಯಾಂತ್ರಿಕ ಮತ್ತು ವಿದ್ಯುತ್ ಕೆಲಸಗಳೊಂದಿಗೆ, ಟರ್ಬೈನ್ ಕಮಿಷನಿಂಗ್ ಸೇರಿದಂತೆ ವೃತ್ತಿಪರ ಸ್ಥಾಪನಾ ಸೇವೆಗಳು.',
            bullets: {
              0: 'ಯಾಂತ್ರಿಕ ಟರ್ಬೈನ್ ಸ್ಥಾಪನೆ',
              1: 'ವಿದ್ಯುತ್ ವ್ಯವಸ್ಥೆಗಳ ಇಂಟಿಗ್ರೇಶನ್',
              2: 'ಟರ್ಬೈನ್ ಕಮಿಷನಿಂಗ್',
              3: 'ಗ್ರಿಡ್ ಕನೆಕ್ಷನ್ ಸೆಟ್‌ಅಪ್',
            },
          },
          maint: {
            title: 'ವಾರ್ಷಿಕ ಸೇವೆ & ನಿರ್ವಹಣೆ',
            desc:
              'ಟರ್ಬೈನ್‌ಗಳ ಉತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯಕ್ಕಾಗಿ ಸಮಗ್ರ ವಾರ್ಷಿಕ ನಿರ್ವಹಣಾ ಕಾರ್ಯಕ್ರಮಗಳು.',
            bullets: {
              0: 'ಶೆಡ್ಯೂಲ್ ಮಾಡಿದ ನಿರ್ವಹಣಾ ಕಾರ್ಯಕ್ರಮಗಳು',
              1: 'ಘಟಕ ಪರಿಶೀಲನೆ ಮತ್ತು ಟೆಸ್ಟಿಂಗ್',
              2: 'ಪ್ರಿವೆಂಟಿವ್ ಮೆಂಟೆನನ್ಸ್',
              3: 'ಕಾರ್ಯಕ್ಷಮತಾ ಆಪ್ಟಿಮೈಜೆಷನ್',
            },
          },
          ops: {
            title: 'WTG ಕಾರ್ಯಾಚರಣೆ & HT ಲೈನ್ O&M',
            desc:
              'ನಿರಂತರ ಶಕ್ತಿ ಉತ್ಪಾದನೆಗಾಗಿ WTG ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು HT ಲೈನ್ O&M ಸೇವೆಗಳು.',
            bullets: {
              0: 'WTG ಆಪರೇಶನ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್',
              1: 'HT ಲೈನ್ ನಿರ್ವಹಣೆ',
              2: '24/7 ಮಾನಿಟರಿಂಗ್ ಮತ್ತು ಸಪೋರ್ಟ್',
              3: 'ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ ಸೇವೆಗಳು',
            },
          },
        },
      },
      getQuote: 'Quote ಪಡೆಯಿರಿ',
      ctaTitle: 'ನಿಮ್ಮ ಗಾಳಿ ಶಕ್ತಿ ಯೋಜನೆ ಕುರಿತು ಚರ್ಚಿಸಲು ಸಿದ್ಧವೇ?',
      ctaParagraph:
        'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಮತ್ತು ನಾವು ಹಿಂದೆ ಮಾಡಿರುವ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳ ಫೋಟೋಗಳಿಗಾಗಿ ವಿವಿಧ ವಿಭಾಗಗಳನ್ನು ನೋಡಬಹುದು. ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ಕಂಡುಕೊಳ್ಳದಿದ್ದರೆ, ದಯವಿಟ್ಟು SS Wind Tech ಗೆ ಕರೆ ಅಥವಾ ಇಮೇಲ್ ಮಾಡಿ; ನಿಮ್ಮ ಯೋಜನೆಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ.',
      ctaButton: 'ಇಂದೇ ಸಂಪರ್ಕಿಸಿ',
    },
    servicesSection: {
      title: 'ಸಮಗ್ರ ವಿಂಡ್ ಎನರ್ಜಿ ಸೇವೆಗಳು',
      subtitle:
        '250KW ರಿಂದ 2.1MW ಟರ್ಬೈನ್‌ಗಳವರೆಗೆ, ತಾಂತ್ರಿಕ ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ವೇಗವಾದ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯೊಂದಿಗೆ end-to-end ಪರಿಹಾರಗಳನ್ನು ವಿಂಡ್ ಮತ್ತು ಸೋಲಾರ್ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒದಗಿಸುತ್ತೇವೆ.',
      contracts: {
        title: 'ಸೇವಾ ಒಪ್ಪಂದಗಳು',
        subtitle: 'ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಹೊಂದುವ ಲವಚಿಕ ನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳು',
        trustedByLabel: 'ನಂಬಿಕೆಯಿರುವವರು:',
        cards: {
          onCall: {
            title: 'ಆನ್-ಕಾಲ್ ಸೇವೆ',
            desc:
              '24x7 ಲಭ್ಯವಿರುವ ನಿಪುಣ ತಂತ್ರಜ್ಞರ ಮೊಬೈಲ್ ತಂಡಗಳು—troubleshooting, breakdown ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗಾಗಿ.',
          },
          annual: {
            title: 'ವಾರ್ಷಿಕ ನಿರ್ವಹಣೆ',
            desc: 'WTG ಗಳ ನಿಯಮಿತ preventive maintenance ಮತ್ತು breakdown attendance ಗಾಗಿ ಅರ್ಹ ತಂತ್ರಜ್ಞರು.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              '24x7 ಕವರೆಜ್, ಸ್ಪೇರ್ಸ್ ಸಪ್ಲೈ, ಮುಖ್ಯ ಘಟಕ repair/replacement ಮತ್ತು machine availability ಗ್ಯಾರಂಟಿಯೊಂದಿಗೆ ಸಮಗ್ರ O&M.',
          },
          scada: {
            title: 'SCADA ಸಿಸ್ಟಮ್',
            desc:
              'Remote monitoring ಮತ್ತು real-time data analysis ಮೂಲಕ OEM power curves ಗೆ ವಿರುದ್ಧವಾಗಿ ಕಾರ್ಯಕ್ಷಮತಾ ಪರಿಶೀಲನೆ.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'ಮುಖ್ಯ ವಿಂಡ್ ಟರ್ಬೈನ್ ಘಟಕಗಳ ತಜ್ಞ ನಿರ್ವಹಣೆ',
        component: {
          title: 'ಘಟಕ ಸೇವೆಗಳು',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles ಮತ್ತು Tower Sections',
            2: 'ರಿಪೇರಿ ಸೌಲಭ್ಯಗಳಿಗೆ ಸುರಕ್ಷಿತ ಸಾಗಣೆ',
            3: 'ಸುರಕ್ಷತಾ ಮಾನದಂಡಗಳ ಪ್ರಕಾರ ಮರುಸ್ಥಾಪನೆ',
          },
        },
        training: {
          title: 'ತರಬೇತಿ & ಸುರಕ್ಷತೆ',
          bullets: {
            0: 'ನಿರಂತರ ತಾಂತ್ರಿಕ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು',
            1: 'ಕಠಿಣ ಸುರಕ್ಷತಾ ಅಭ್ಯಾಸಗಳ ಪಾಲನೆ',
            2: 'ಎತ್ತರದಲ್ಲಿ ಸುರಕ್ಷಿತ ಕೆಲಸ ಮಾಡುವ ಪರಿಣಿತಿ',
            3: 'Nacelle hub operations ತರಬೇತಿ',
          },
        },
      },
      onSite: {
        title: 'ಸೈಟ್ ಕೆಲಸ',
        subtitle: 'ಟವರ್ ಮೇಲೆ ರಿಪೇರಿ ಮತ್ತು ರಿಟ್ರೋಫಿಟ್ ಸೇವೆಗಳು',
        topTower: {
          title: 'ಟಾಪ್ ಟವರ್ ಕೆಲಸ',
          bullets: {
            0: 'ಅತಿ ವೇಗದ ಪಿನಿಯನ್ ಮತ್ತು ಬೆರಿಂಗ್ ಬದಲಾವಣೆ',
            1: 'ಗಿಯರ್ ಎಣ್ಣೆ ಬದಲಾವಣೆ (ನೆಲದಿಂದ ಪಂಪ್)',
            2: 'ಜನರೇಟರ್ ಬೆರಿಂಗ್ ಬದಲಾವಣೆ',
            3: 'ಗಿಯರ್‌ಬಾಕ್ಸ್ ಸಸ್ಪೆನ್ಷನ್ ಬದಲಾವಣೆ',
            4: 'ಯಾ ಗಿಯರ್ ಘಟಕ ಮತ್ತು ಬ್ರೇಕ್ ಸೇವೆ',
          },
        },
        bottomTower: {
          title: 'ಬಾಟಮ್ ಟವರ್ ಕೆಲಸ',
          bullets: {
            0: 'ಮುಖ್ಯ ಬೆರಿಂಗ್ ಬದಲಾವಣೆ',
            1: 'ಮುರಿದ ಬ್ಲೇಡ್ ಪ್ಯಾಚ್ ಕೆಲಸ',
            2: 'ಬ್ಲೇಡ್ ಪಿನಿಯನ್ ಬದಲಾವಣೆ',
            3: 'ಬ್ಲೇಡ್ ಸಿಲಿಂಡರ್ ಬದಲಾವಣೆ',
            4: 'ಮೇನ್ ಷಾಫ್ಟ್ UT ಪರೀಕ್ಷೆ',
          },
        },
      },
      solar: {
        title: 'ಸೌರ ವಿದ್ಯುತ್ ಪರಿಹಾರಗಳು',
        subtitle: 'ಪುನರ್ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿ ಪರಿಣಿತಿಯನ್ನು ಬಳಸಿಕೊಂಡ turnkey solar ಯೋಜನೆಗಳು',
        capabilities: {
          title: 'ಪ್ರಾಜೆಕ್ಟ್ ಸಾಮರ್ಥ್ಯಗಳು',
          bullets: {
            0: 'MW ಮಟ್ಟದ ಸೌರ ವಿದ್ಯುತ್ ಘಟಕಗಳು',
            1: 'ಛಾವಣಿಯ ಮೇಲಿನ ಸೌರ ವಿದ್ಯುತ್ ವ್ಯವಸ್ಥೆಗಳು',
            2: 'ಸಿವಿಲ್ ನಿರ್ಮಾಣ ಮತ್ತು ರಚನಾ ಅಳವಡಿಕೆ',
            3: 'ಕೇಬಲಿಂಗ್ ಮತ್ತು ವಿದ್ಯುತ್ ಕಾರ್ಯಗಳು',
          },
        },
        presence: {
          title: 'ಪ್ರಾದೇಶಿಕ ಹಾಜರಾತಿ',
          bullets: {
            0: 'ತಮಿಳುನಾಡಿನಾದ್ಯಂತ ಸಕ್ರಿಯ ಯೋಜನೆಗಳು',
            1: 'ಆಂಧ್ರಪ್ರದೇಶದಲ್ಲಿ ಯಶಸ್ವಿ ಸ್ಥಾಪನೆಗಳು',
            2: 'ಪವರ್ ಈವಾಕ್ಯುಯೇಶನ್ ವ್ಯವಸ್ಥೆಗಳ ಪರಿಣಿತಿ',
            3: 'ಪ್ರಸರಣ ರೇಖೆ ಮತ್ತು ಉಪಕೇಂದ್ರ ಸೌಲಭ್ಯಗಳು',
          },
        },
      },
      crane: {
        title: 'ಕ್ರೇನ್ ಸೇವೆಗಳು',
        subtitle: 'ವೇಗವಾದ mobilization ಹೊಂದಿದ heavy-duty ಕ್ರೇನ್ ಪರಿಹಾರಗಳು',
        features: {
          title: 'ಸೇವೆ ವೈಶಿಷ್ಟ್ಯಗಳು',
          bullets: {
            0: 'ಪ್ರಾಜೆಕ್ಟ್ ಸೈಟ್‌ಗೆ ವೇಗವಾದ mobilization',
            1: 'ವೆಚ್ಚ ಪರಿಣಾಮಕಾರಿ hiring ಪರಿಹಾರಗಳು',
            2: 'ಕಟ್ಟುನಿಟ್ಟಾದ timeline ಪಾಲನೆ',
            3: 'ಅನುಭವ ಹೊಂದಿದ operators ಮತ್ತು crew',
          },
        },
        expertise: {
          title: 'ವಿಂಡ್ ಮಿಲ್ ಪರಿಣಿತಿ',
          bullets: {
            0: '2.1MW ವರೆಗೆ ಟರ್ಬೈನ್‌ಗಳು',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'ಪೂರ್ಣವಾಗಿ ಸಜ್ಜುಗೊಂಡ 2 crane sets',
          },
        },
      },
      safety: {
        title: 'ಸುರಕ್ಷತಾ ಬದ್ಧತೆ',
        bullets: {
          0: 'ಕಠಿಣ ಕ್ಲಾಸ್‌ರೂಮ್ ಮತ್ತು ಹ್ಯಾಂಡ್ಸ್-ಆನ್ ತರಬೇತಿ',
          1: '24x7 ಸುರಕ್ಷತಾ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು ರಿವ್ಯೂ',
          2: 'ಸಮರ್ಪಿತ ಸುರಕ್ಷತಾ ತಂಡ ಮೇಲ್ವಿಚಾರಣೆ',
          3: 'ನಿರಂತರ ಸುಧಾರಣೆ ಅಭ್ಯಾಸಗಳು',
        },
      },
      green: {
        title: 'ಪಸಿರು ಅಭ್ಯಾಸಗಳು',
        bullets: {
          0: 'ಪರಿಸರ ಜವಾಬ್ದಾರಿಯ ಮೇಲೆ ಗಮನ',
          1: 'ಅಪಾಯಕಾರಿ ತ್ಯಾಜ್ಯ ಸರಿಯಾದ ವಿಲೇವಾರಿ',
          2: 'ಮರ ನೆಡುವ ಅಭಿಯಾನಗಳು',
          3: 'ಸೌರ ಶಕ್ತಿ & ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ',
        },
      },
      ctaButton: 'ಸೇವೆಗೆ Quote ಪಡೆಯಿರಿ',
    },
    privacy: {
      title: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      introductionTitle: 'ಪರಿಚಯ',
      introductionBody:
        'SS Wind Tech ನಲ್ಲಿ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸುವುದು ಮತ್ತು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯ ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸುವುದು ನಮ್ಮ ಬದ್ಧತೆ. ನೀವು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿದಾಗ ಅಥವಾ ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಬಳಸದಾಗ ನಾವು ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಬಳಸುತ್ತೇವೆ ಮತ್ತು ರಕ್ಷಿಸುತ್ತೇವೆ ಎಂಬುದನ್ನು ಈ ಗೌಪ್ಯತಾ ನೀತಿ ವಿವರಿಸುತ್ತದೆ.',
      collectTitle: 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ',
      collect: {
        items: {
          0: {
            label: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ:',
            value: 'ನೀವು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವಾಗ ಅಥವಾ ಸೇವೆಗಳನ್ನು ಕೇಳುವಾಗ ಹೆಸರು, ಇಮೇಲ್, ಫೋನ್ ಸಂಖ್ಯೆ, ಕಂಪನಿ ವಿವರಗಳು.',
          },
          1: {
            label: 'ತಾಂತ್ರಿಕ ಮಾಹಿತಿ:',
            value: 'IP ವಿಳಾಸ, ಬ್ರೌಸರ್ ಪ್ರಕಾರ, ಸಾಧನ ಮಾಹಿತಿ, ಹಾಗೂ ಅನಾಲಿಟಿಕ್ಸ್‌ಗಾಗಿ ಬಳಕೆ ಡೇಟಾ.',
          },
          2: {
            label: 'ವ್ಯವಹಾರ ಮಾಹಿತಿ:',
            value: 'ಕಂಪನಿ ವಿವರಗಳು, ಪ್ರಾಜೆಕ್ಟ್ ಅಗತ್ಯಗಳು, ಹಾಗೂ ಸೇವಾ ಆದ್ಯತೆಗಳು.',
          },
        },
      },
      useTitle: 'ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ',
      use: {
        bullets: {
          0: 'ವಿಂಡ್ ಎನರ್ಜಿ ಸೇವೆಗಳು ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲ ಒದಗಿಸಲು',
          1: 'ವಿಚಾರಣೆಗಳು ಮತ್ತು ಸೇವಾ ಮನವಿಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲು',
          2: 'ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಸೇವೆಗಳನ್ನು ಸುಧಾರಿಸಲು',
          3: 'ಮುಖ್ಯ ಅಪ್ಡೇಟ್‌ಗಳು ಮತ್ತು ಸೇವಾ ಮಾಹಿತಿಯನ್ನು ಕಳುಹಿಸಲು',
          4: 'ಅನಾಲಿಟಿಕ್ಸ್ ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ಆಪ್ಟಿಮೈಜೇಶನ್‌ಗಾಗಿ',
        },
      },
      protectionTitle: 'ದತ್ತಾಂಶ ರಕ್ಷಣೆ',
      protectionBody:
        'ಅನಧಿಕೃತ ಪ್ರವೇಶ, ಬದಲಾವಣೆ, ಬಹಿರಂಗಪಡಿಕೆ ಅಥವಾ ನಾಶದಿಂದ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ರಕ್ಷಿಸಲು ಸೂಕ್ತ ಸುರಕ್ಷತಾ ಕ್ರಮಗಳನ್ನು ನಾವು ಅನುಷ್ಠಾನಗೊಳಿಸುತ್ತೇವೆ. ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತ ಸರ್ವರ್‌ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಅನುಮೋದಿತ ಸಿಬ್ಬಂದಿಯಿಂದ ಮಾತ್ರ ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ.',
      thirdPartyTitle: 'ಮೂರನೇ ಪಕ್ಷ ಹಂಚಿಕೆ',
      thirdPartyBody:
        'ನಿಮ್ಮ ಸಮಮ್ಮತಿಯಿಲ್ಲದೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಮೂರನೇ ಪಕ್ಷಗಳಿಗೆ ಮಾರಾಟ, ವಿನಿಮಯ ಅಥವಾ ವರ್ಗಾವಣೆ ಮಾಡುವುದಿಲ್ಲ; ಕಾನೂನಿನ ಪ್ರಕಾರ ಅಗತ್ಯವಿದ್ದರೆ ಅಥವಾ ಸೇವೆ ಒದಗಿಸಲು ಅವಶ್ಯಕವಿದ್ದರೆ ಮಾತ್ರ. ಸೇವಾ ವಿತರಣೆಗೆ ಅಗತ್ಯವಿರುವಾಗ ಮಾತ್ರ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಬಹುದು.',
      contactTitle: 'ಸಂಪರ್ಕಿಸಿ',
      contactBody:
        'ಈ ಗೌಪ್ಯತಾ ನೀತಿ ಅಥವಾ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ನಾವು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತೇವೆ ಎಂಬುದರ ಕುರಿತು ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, ದಯವಿಟ್ಟು ಸಂಪರ್ಕಿಸಿ:',
      contactDetails: {
        emailLabel: 'ಇಮೇಲ್:',
        phoneLabel: 'ಫೋನ್:',
        whatsappLabel: 'WhatsApp:',
      },
    },
    cookie: {
      title: 'ಕುಕೀ ನೀತಿ',
      whatTitle: 'ಕುಕೀಸ್ ಎಂದರೇನು',
      howTitle: 'ನಾವು ಕುಕೀಸ್ ಅನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ',
      typesTitle: 'ನಾವು ಬಳಸುವ ಕುಕೀಗಳ ವಿಧಗಳು',
      sessionTitle: 'ಸೆಷನ್ ಕುಕೀಸ್',
      persistentTitle: 'ಪರ್ಸಿಸ್ಟೆಂಟ್ ಕುಕೀಸ್',
      thirdPartyCookiesTitle: 'ಮೂರನೇ ಪಕ್ಷ ಕುಕೀಸ್',
      manageTitle: 'ಕುಕೀಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು',
      consentTitle: 'ಕುಕೀ ಅನುಮತಿ',
      thirdPartyServicesTitle: 'ಮೂರನೇ ಪಕ್ಷ ಸೇವೆಗಳು',
      rightsTitle: 'ನಿಮ್ಮ ಹಕ್ಕುಗಳು',
      updatesTitle: 'ಈ ನೀತಿಯ ನವೀಕರಣಗಳು',
      contactTitle: 'ಸಂಪರ್ಕಿಸಿ',
    },
    contactPage: {
      heroTitle: 'ಸಂಪರ್ಕಿಸಿ',
      heroSubtitle: 'ನಿಮ್ಮ ವಿಂಡ್ ಮಿಲ್ ಸೇವಾ ಅಗತ್ಯಗಳ ಬಗ್ಗೆ ಚರ್ಚಿಸೋಣ',
      successTitle: 'ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ!',
      successSubtitle: 'ಸಂಪರ್ಕಿಸಿದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ.',
      formTitle: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      infoTitle: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      infoSubtitle: 'ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ',
      infoCards: {
        whatsapp: {
          title: 'ವಾಟ್ಸಾಪ್',
        },
        phone: {
          title: 'ಫೋನ್',
        },
        email: {
          title: 'ಇಮೇಲ್',
        },
        office: {
          title: 'ಕಚೇರಿ',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'ಹೆಸರು',
        email: 'ಇಮೇಲ್',
        phone: 'ಫೋನ್',
        service: 'ಸೇವೆ',
        message: 'ಸಂದೇಶ',
        submit: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
        namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'ಫೋನ್ ಸಂಖ್ಯೆ',
        messagePlaceholder: 'ನಿಮ್ಮ ಯೋಜನೆ ಬಗ್ಗೆ ತಿಳಿಸಿ...',
        serviceSelect: 'ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        serviceOptions: {
          maintenance: 'ನಿರ್ವಹಣೆ',
          installation: 'ಸ್ಥಾಪನೆ',
          consulting: 'ಸಲಹೆ',
          repair: 'ದುರಸ್ತಿ',
          other: 'ಇತರೆ',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'ನಮ್ಮನ್ನು ಆಯ್ಕೆಮಾಡುವುದು ಎಂದರೆ ಇನ್ನಷ್ಟು ಸ್ವಚ್ಛ ಮತ್ತು ಚತುರ ನಾಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡುವುದು',
        subtitle:
          'ಮುನ್ನಡೆದ ಟರ್ಬೈನ್ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸ್ಥಿರ ಶಕ್ತಿ ಪರಿಹಾರಗಳೊಂದಿಗೆ ವಿಂಡ್ ಮಿಲ್ ಕ್ರಾಂತಿಯನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದ್ದೇವೆ.',
        leftCard:
          'ನಮ್ಮ ವಿಂಡ್ ಮಿಲ್ ತಜ್ಞರು ಸ್ಥಾಪನೆ ಮತ್ತು ನಿರ್ವಹಣಾ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತಾ, ಎಲ್ಲ ಗಾಳಿ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲೂ ಟರ್ಬೈನ್ ಉತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತಾರೆ.',
        rightCard:
          'ನಮ್ಮ ಆಧುನಿಕ ವಿಂಡ್ ಮಿಲ್ ವ್ಯವಸ್ಥೆಗಳು ಶಕ್ತಿ ವೆಚ್ಚವನ್ನು 70% ವರೆಗೆ ಕಡಿಮೆ ಮಾಡಿ, ಮನೆಗಳು, ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಗಳಿಗೆ ಸ್ವಚ್ಛ ಪುನರ್ನವೀಕರಿಸಬಹುದಾದ ಶಕ್ತಿಯನ್ನು ಒದಗಿಸುತ್ತವೆ.',
        bottomCard:
          'ಸ್ಥಾಪನೆಯಿಂದ ಮೀರಿಸಿ, ನಾವು ಸಮಗ್ರ ನಿರ್ವಹಣೆ, ಬ್ಲೇಡ್ ಪರಿಶೀಲನೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತಾ ಆಪ್ಟಿಮೈಜೆಷನ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ಯಾವ ಹವಾಮಾನದಲ್ಲೂ 24/7 ಗರಿಷ್ಠ ದಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತೇವೆ.',
        stats: {
          installations: 'ದೇಶವ್ಯಾಪಿ ವಿಂಡ್ ಮಿಲ್ ಸ್ಥಾಪನೆಗಳು',
          capacity: 'ಸ್ಥಾಪಿತ ಸ್ವಚ್ಛ ಶಕ್ತಿ ಸಾಮರ್ಥ್ಯ',
          reduction: 'ಸರಾಸರಿ ಶಕ್ತಿ ವೆಚ್ಚ ಕಡಿತ',
          expertise: 'ವಿಂಡ್ ಮಿಲ್ ಪರಿಣಿತಿ ವರ್ಷಗಳು',
        },
      },
      faq: {
        title: 'ಪದೇಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
        items: {
          0: {
            q: 'ವಿಂಡ್ ಮಿಲ್ ಸ್ಥಾಪನೆಗೆ ಎಷ್ಟು ವೆಚ್ಚ?',
            a: 'ವೆಚ್ಚವು ವ್ಯವಸ್ಥೆಯ ಗಾತ್ರ ಮತ್ತು ಪ್ರಕಾರದ ಮೇಲೆ ಅವಲಂಬಿತ. ಮನೆ ಸ್ಥಾಪನೆ ಸಾಮಾನ್ಯವಾಗಿ $15,000-$50,000; ವಾಣಿಜ್ಯ ವ್ಯವಸ್ಥೆಗಳು $100,000+ ಆಗಬಹುದು. ಹಣಕಾಸು ಆಯ್ಕೆಗಳೂ ಲಭ್ಯ.',
          },
          1: {
            q: 'ಸ್ಥಾಪನೆಗೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು?',
            a: 'ಮನೆ ಸ್ಥಾಪನೆ ಸಾಮಾನ್ಯವಾಗಿ 2-4 ವಾರಗಳು. ವಾಣಿಜ್ಯ ಯೋಜನೆಗಳು 6-12 ವಾರಗಳು ಆಗಬಹುದು. ಕಡಿಮೆ ಅಡಚಣೆಯೊಂದಿಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತೇವೆ.',
          },
          2: {
            q: 'ಯಾವ ನಿರ್ವಹಣೆ ಬೇಕು?',
            a: 'ವಿಂಡ್ ಮಿಲ್‌ಗಳಿಗೆ ಕಡಿಮೆ ನಿರ್ವಹಣೆ ಸಾಕು. ವಾರ್ಷಿಕ ಪರಿಶೀಲನೆ ಶಿಫಾರಸು. ನಮ್ಮ ಯೋಜನೆಗಳಲ್ಲಿ ನಿಯಮಿತ ಪರಿಶೀಲನೆ, ಬ್ಲೇಡ್ ಇನ್ಸ್ಪೆಕ್ಷನ್ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತಾ ಆಪ್ಟಿಮೈಜೆಷನ್ ಸೇರಿವೆ.',
          },
          3: {
            q: 'ಶಕ್ತಿ ವೆಚ್ಚದಲ್ಲಿ ಎಷ್ಟು ಉಳಿತಾಯ?',
            a: 'ಬಹುತೇಕ ಗ್ರಾಹಕರು 60-80% ವಿದ್ಯುತ್ ಬಿಲ್ ಕಡಿತವನ್ನು ನೋಡುತ್ತಾರೆ. ಸ್ಥಳ, ಗಾಳಿ ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಬಳಕೆ ಮೇಲೆ ಅವಲಂಬಿತ. ಅನೇಕ ವ್ಯವಸ್ಥೆಗಳು 5-7 ವರ್ಷಗಳಲ್ಲಿ ವೆಚ್ಚವನ್ನು ಮರುಪಡೆಯುತ್ತವೆ.',
          },
          4: {
            q: 'ಎಲ್ಲ ಹವಾಮಾನದಲ್ಲೂ ವಿಂಡ್ ಮಿಲ್ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೆ?',
            a: 'ಆಧುನಿಕ ವಿಂಡ್ ಮಿಲ್‌ಗಳು ವಿವಿಧ ಹವಾಮಾನಕ್ಕೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಅತಿಯಾದ ಗಾಳಿಯಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಸಣ್ಣ ಗಾಳಿಯಲ್ಲೂ ವಿದ್ಯುತ್ ಉತ್ಪಾದಿಸುತ್ತದೆ. ಕಠಿಣ ಹವಾಮಾನವನ್ನು ತಡೆಯುವಂತೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
          },
          5: {
            q: 'ಯಾವ ಪರವಾನಗಿಗಳು ಬೇಕು?',
            a: 'ಸ್ಥಳದ ನಿಯಮಗಳ ಮೇಲೆ ಅವಲಂಬಿತ. ಜೋನಿಂಗ್ ಅನುಮತಿಗಳು, ವಿದ್ಯುತ್ ಪರವಾನಗಿಗಳು ಮತ್ತು ಪರಿಸರ ಮೌಲ್ಯಮಾಪನ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.',
          },
        },
      },
    },
  },
  dz: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      getStarted: 'Get Started',
      language: 'Language',
    },
    hero: {
      title: 'Wind-Powered Future',
      description:
        'Providing expert wind mill services and maintenance solutions to ensure optimal performance and longevity of your wind energy systems. Partner with us for reliable, professional service that keeps your turbines running efficiently.',
      exploreMore: 'Explore More',
      trustedTitle: 'Trusted by businesses and communities who want clean, reliable energy.',
      trustedBody:
        'From small homes to large industries, our customers choose us for affordable and sustainable wind-powered solutions.',
    },
    aboutSection: {
      badge: 'About Us',
      titleLine1: '32+ Years of Windmill Experience',
      titleLine2: 'Service Excellence',
      titleLine3: '& Innovation',
      description:
        'SS Wind Tech has established itself as a leading windmill service provider with over 32+ years of industry experience, delivering reliable and technically advanced solutions across the renewable energy sector.',
      exploreMore: 'Explore More',
    },
    aboutPage: {
      heroTitle: 'About SS Wind Tech',
      heroSubtitle: 'Your trusted partner in professional wind mill services, maintenance, and optimization solutions.',
      storyTitle: 'Our Story',
      story: {
        p1:
          'SS Wind Tech has established itself as a leading windmill service provider with over 32+ years of industry experience, delivering reliable and technically advanced solutions across the renewable energy sector. The company offers a comprehensive range of services including erection and installation, repowering, make change, decommissioning, life extension studies of Wind Turbine Generators (WTGs), operation and maintenance, crane-assisted services, and repair works of windmill components supported by fully equipped workshops, electronics laboratories, and hydraulic facilities.',
        p2:
          "SS Wind Tech provides integrated end-to-end solutions and a diverse portfolio of services for both the wind farm and solar power industries. Currently, the company's operations span across the country, with a strong presence in Tamil Nadu and extended service coverage in states such as Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Gujarat, Madhya Pradesh, and other regions. The company serves a wide and impressive client base, built on trust, consistent performance, and quality service delivery.",
        p3:
          "The foundation of SS Wind Tech's success lies in its unwavering commitment to sustainable business practices, environmental best practices, and social responsibility. The company continually focuses on enhancing its technical capabilities, strengthening operational excellence, and achieving higher benchmarks in performance delivery while maintaining its competitive edge in the market. Leveraging its expertise in renewable energy, SS Wind Tech has also expanded its capabilities to undertake solar power projects, reinforcing its vision for a sustainable and energy-efficient future.",
      },
      vmgTitle: 'Our Vision, Mission & Goals',
      visionTitle: 'Our Vision',
      visionBody: 'To be a global renewable energy leader in customer satisfaction through service and sustainability.',
      missionTitle: 'Our Mission',
      missionBody: 'Highest priority to Safety, Quality of Product, External & Internal Customer Satisfaction.',
      goalsTitle: 'Our Goals',
      goals: {
        items: {
          0: 'Increase profit through quality as well as risk management',
          1: 'Maintain minimum manpower to control site activity',
          2: 'Ensure Zero-Deviation-Strategy in all processes',
          3: 'Ensure open-minded and honest communication based on facts internally and externally',
          4: 'Ensure continuous improvements (CIMS)',
        },
      },
      expertiseTitle: 'Our Expertise',
      expertiseSubtitle: 'Comprehensive wind energy solutions backed by decades of experience',
      expertiseStats: {
        years: 'Years Experience',
        capacity: 'to 2.5MW Capacity',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'Customer Satisfaction',
      },
      directorsTitle: 'Meet our Directors',
      directorsSubtitle: 'Leadership team with decades of experience in wind energy solutions',
      directors: {
        sundar: {
          name: 'Mr. Sundar Murthy',
          role: 'Managing Director',
          bio: {
            p1:
              "Mr. Sundar Murthy, Managing Director, is the guiding force behind the company's vision and direction. He provides strong leadership that keeps the organization steady during both growth phases and challenging times.",
            p2:
              "His ability to make timely and well-informed decisions strengthens the company's foundation. He carefully balances risk and opportunity to protect long-term business interests.",
            p3:
              'Mr. Sundar Murthy strongly believes that teamwork is the backbone of organizational success. He actively guides, mentors, and motivates employees at all levels.',
            p4:
              'He empowers teams to take responsibility and deliver their best performance. His vision and commitment continue to play a vital role in the company\'s long-term success.',
          },
        },
        sivakumar: {
          name: 'Mr. Sivakumar',
          role: 'Technical Director',
          bio: {
            p1:
              'As a highly accomplished engineer, Mr. Sivakumar demonstrates an exceptional drive for solving complex mechanical challenges. With over 30 years of extensive experience in wind turbine servicing, he brings deep technical expertise in WTG blades, WTG gearboxes, and winch systems.',
            p2:
              'His hands-on experience with hydraulic cranes strengthens his technical leadership. He has successfully led and executed multiple wind turbine installations overseas.',
            p3:
              'He is an active member of a strong team of engineers and technicians with deep hands-on experience.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'Our Services',
      heroSubtitle:
        "Comprehensive wind mill service solutions with technology-neutral expertise and complete 'cradle to grave' support",
      approachTitle: 'Our Service Approach',
      approach: {
        p1:
          "SS Wind Tech is focused entirely on the service side of wind development. We do not sell wind turbines and instead offer a 'cradle to grave' support packages to all our customers depending on their individual needs and on-site requirements.",
        p2:
          'We pride ourselves on being technology neutral and impartial, meaning we can work on a variety of different makes of wind turbines. We work with turbine manufacturers rather than competing against them and often find ourselves doing work directly for them.',
        p3:
          'Naturally, when working with various wind turbine manufacturers and customers, confidentiality is paramount to the way we operate.',
      },
      disciplinesTitle: 'Our 4 Key Disciplines',
      disciplinesSubtitle: 'Specialized teams of engineers dedicated to each activity',
      disciplines: {
        cards: {
          site: {
            title: 'Site Preparation and Ground Works',
            desc:
              'Comprehensive site preparation services including ground works, foundation preparation, and infrastructure setup for wind turbine installations.',
            bullets: {
              0: 'Site assessment and planning',
              1: 'Ground preparation and excavation',
              2: 'Infrastructure development',
              3: 'Access roads and site logistics',
            },
          },
          install: {
            title: 'Mechanical and Electrical Installation',
            desc:
              'Professional installation services including mechanical and electrical work, complete with commissioning of wind turbines.',
            bullets: {
              0: 'Mechanical turbine installation',
              1: 'Electrical systems integration',
              2: 'Turbine commissioning',
              3: 'Grid connection setup',
            },
          },
          maint: {
            title: 'Annual Servicing and Maintenance',
            desc:
              'Comprehensive annual servicing and maintenance programs to ensure optimal performance and longevity of wind turbine systems.',
            bullets: {
              0: 'Scheduled maintenance programs',
              1: 'Component inspection and testing',
              2: 'Preventive maintenance',
              3: 'Performance optimization',
            },
          },
          ops: {
            title: 'WTG Operation and HT Line O&M',
            desc:
              'Complete wind turbine generator operation and high-tension line operation and maintenance services for continuous energy production.',
            bullets: {
              0: 'WTG operation management',
              1: 'High-tension line maintenance',
              2: '24/7 monitoring and support',
              3: 'Emergency response services',
            },
          },
        },
      },
      getQuote: 'Get Quote',
      ctaTitle: 'Ready to Discuss Your Wind Energy Project?',
      ctaParagraph:
        "Please feel free to browse through the different categories where further information is available as well as photos from projects we have been involved with in the past. If you can't find what you're looking for, please call or email SS Wind Tech and we will be delighted to help with your project.",
      ctaButton: 'Contact Us Today',
    },
    servicesSection: {
      title: 'Comprehensive Wind Energy Services',
      subtitle:
        'From 250KW to 2.1MW turbines, we deliver end-to-end solutions with technical excellence and rapid execution across wind and solar energy sectors.',
      contracts: {
        title: 'Service Contracts',
        subtitle: 'Flexible maintenance solutions tailored to your needs',
        trustedByLabel: 'Trusted by:',
        cards: {
          onCall: {
            title: 'On Call Service',
            desc:
              'Dedicated mobile teams of skilled technicians available 24x7 for troubleshooting, breakdowns, and wind turbine emergencies.',
          },
          annual: {
            title: 'Annual Maintenance',
            desc: 'Qualified technicians for periodic preventive maintenance and breakdown attendance of WTGs.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              'Comprehensive O&M with 24x7 coverage, spares supply, major component repair/replacement, and guaranteed machine availability.',
          },
          scada: {
            title: 'SCADA System',
            desc:
              'Remote monitoring and real-time data analysis to verify turbine performance against OEM power curves.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'Expert handling of major wind turbine components',
        component: {
          title: 'Component Services',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles and Tower Sections',
            2: 'Safe transportation to repair facilities',
            3: 'Reinstallation per safety standards',
          },
        },
        training: {
          title: 'Training & Safety',
          bullets: {
            0: 'Continuous technical training programs',
            1: 'Stringent safety practices adherence',
            2: 'Safe working at heights expertise',
            3: 'Nacelle hub operations training',
          },
        },
      },
      onSite: {
        title: 'On Site Work',
        subtitle: 'Comprehensive on-tower repair and retrofit services',
        topTower: {
          title: 'Top Tower Work',
          bullets: {
            0: 'High speed pinion & bearing replacement',
            1: 'Gear oil replacement (ground pumping)',
            2: 'Generator bearing replacement',
            3: 'Gearbox suspension replacement',
            4: 'Yaw gear unit & brake servicing',
          },
        },
        bottomTower: {
          title: 'Bottom Tower Work',
          bullets: {
            0: 'Main bearing replacement',
            1: 'Broken blade patch work',
            2: 'Blade pinion replacement',
            3: 'Blade cylinder replacement',
            4: 'UT test of main shaft',
          },
        },
      },
      solar: {
        title: 'Solar Power Solutions',
        subtitle: 'Turnkey solar projects leveraging renewable energy expertise',
        capabilities: {
          title: 'Project Capabilities',
          bullets: {
            0: 'MW-scale solar power plants',
            1: 'Rooftop solar power systems',
            2: 'Civil construction & structure mounting',
            3: 'Cabling and electrical works',
          },
        },
        presence: {
          title: 'Regional Presence',
          bullets: {
            0: 'Active projects across Tamil Nadu',
            1: 'Successful installations in Andhra Pradesh',
            2: 'Power evacuation systems expertise',
            3: 'Transmission line & substation facilities',
          },
        },
      },
      crane: {
        title: 'Crane Services',
        subtitle: 'Heavy-duty crane solutions with rapid mobilization',
        features: {
          title: 'Service Features',
          bullets: {
            0: 'Rapid mobilization to project sites',
            1: 'Cost-effective hiring solutions',
            2: 'Strict timeline adherence',
            3: 'Experienced operators and crew',
          },
        },
        expertise: {
          title: 'Windmill Expertise',
          bullets: {
            0: 'Turbines up to 2.1MW capacity',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'Two fully equipped crane sets',
          },
        },
      },
      safety: {
        title: 'Safety Commitment',
        bullets: {
          0: 'Rigorous classroom and hands-on training',
          1: '24x7 safety monitoring and review',
          2: 'Dedicated safety team oversight',
          3: 'Continuous improvement practices',
        },
      },
      green: {
        title: 'Green Practices',
        bullets: {
          0: 'Environmental responsibility focus',
          1: 'Proper hazardous waste disposal',
          2: 'Tree plantation drives',
          3: 'Solar energy & rainwater harvesting',
        },
      },
      ctaButton: 'Get a Service Quote',
    },
    privacy: {
      title: 'གསང་བའི་སྲུང་སྐྱོབ་ལམ་ལུགས།',
      introductionTitle: 'ངོ་སྤྲོད།',
      introductionBody:
        'SS Wind Tech ནང་ ཁྱེད་ཀྱི་གསང་བ་དང་ ཁྱེད་ཀྱི་མི་སྒེར་གནས་ཚུལ་གྱི་སྲུང་སྐྱོབ་ལུ་ ང་ཚོས་སྒྲིག་སྲོལ་འཐུས་ཤོར་མེད་པར་འབད་དོ། ཁྱེད་ཀྱིས་ང་ཚོའི་ཝེབ་ས་ཁོངས་ལ་བལྟ་བའམ་ ང་ཚོའི་ཞབས་ཏོག་སྤྱོད་པའི་སྐབས་ ང་ཚོས་གནས་ཚུལ་ག་དེ་སྦེ་བསྡུ་ལེན་ སྤྱོད་ དང་སྲུང་སྐྱོབ་འབད་ནི་ཨིན་ན་འདི་གསལ་བཤད་འབདཝ་ཨིན།',
      collectTitle: 'ང་ཚོས་བསྡུ་ལེན་པའི་གནས་ཚུལ།',
      collect: {
        items: {
          0: {
            label: 'མི་སྒེར་གནས་ཚུལ།',
            value: 'ཁྱེད་ཀྱིས་ང་ཚོ་དང་འབྲེལ་བ་འཐབ་པའམ་ ཞབས་ཏོག་ཞུ་བའི་སྐབས་ མིང་ ཨིམེལ་ ཕོན་ཨང་ དང་ ཀམ་པ་ནིའི་ཞིབ་ཕྲ།',
          },
          1: {
            label: 'ཐབས་རིག་གནས་ཚུལ།',
            value: 'IP ཁ་བྱང་ བརྡ་འཚོལ་མཁན་གྱི་རིགས་ འཕྲུལ་ཆས་གནས་ཚུལ་ དང་ དཔྱད་ཞིབ་དོན་ལུ་སྤྱོད་པའི་གནས་ཚུལ།',
          },
          2: {
            label: 'ཚོང་ལས་གནས་ཚུལ།',
            value: 'ཀམ་པ་ནིའི་ཞིབ་ཕྲ་ ལས་འཆར་དགོས་མཁོ་ དང་ ཞབས་ཏོག་གི་གདམ་ཁ།',
          },
        },
      },
      useTitle: 'ཁྱེད་ཀྱི་གནས་ཚུལ་ང་ཚོས་ག་དེ་སྦེ་སྤྱོད་ནི།',
      use: {
        bullets: {
          0: 'རླུང་ནུས་ཞབས་ཏོག་དང་ཐབས་རིག་རོགས་རམ་སྤྲོད་ནི',
          1: 'འདྲི་དཔྱད་དང་ཞབས་ཏོག་ཞུ་བ་ལུ་ལན་གསལ་འབད་ནི',
          2: 'ང་ཚོའི་ཝེབ་ས་ཁོངས་དང་ཞབས་ཏོག་ལེགས་བཟོ་འབད་ནི',
          3: 'གནད་དོན་ཅན་གྱི་བསྐྱར་བཅོས་དང་ཞབས་ཏོག་གནས་ཚུལ་གཏང་ནི',
          4: 'དཔྱད་ཞིབ་དང་ཝེབ་ས་ཁོངས་ལེགས་བཟོ་དོན་ལུ',
        },
      },
      protectionTitle: 'གནས་ཚུལ་སྲུང་སྐྱོབ།',
      protectionBody:
        'མི་སྒེར་གནས་ཚུལ་ལུ་ མ་ཆོག་པའི་འཛུལ་ཞུགས་ བཟོ་བཅོས་ ཕྱིར་འདྲེན་ ཡང་ན་ རྩ་མེད་བཟོ་བའི་འགོ་ལས་ སྲུང་སྐྱོབ་འབད་ནི་དོན་ལུ་ ང་ཚོས་བདེ་འཇགས་ཐབས་ཤེས་འོས་འཚམས་བཟོ་སྤྱོད་འབད་དོ། གནས་ཚུལ་འདི་བདེ་འཇགས་སར་བར་གུ་བཞག་ནི་དང་ དབང་སྤྲོད་བྱས་པའི་ལས་གནས་ཀྱིས་མ་གཏོགས་མ་འཛུལ་བཞག་མི་འབད།',
      thirdPartyTitle: 'གསུམ་པའི་ཕྱོགས་ལ་བརྒྱུད་སྤྲོད།',
      thirdPartyBody:
        'ཁྱེད་ཀྱི་མོས་མཐུན་མེད་པར་ ང་ཚོས་ཁྱེད་ཀྱི་མི་སྒེར་གནས་ཚུལ་གསུམ་པའི་ཕྱོགས་ལ་ཚོང་འབྲེལ་ བརྗེ་སྤོར་ ཡང་ན་ བརྒྱུད་སྤྲོད་མི་འབད། ཁྲིམས་ཀྱི་དགོས་མཁོ་ཡང་ན་ ཞབས་ཏོག་སྤྲོད་ནི་དོན་ལུ་དགོས་པ་ཡོད་པའི་སྐབས་ལས་བརྒྱུད་སྤྲོད་འབད་འོང་། ཞབས་ཏོག་སྤྲོད་ནི་ལུ་དགོས་པའི་སྐབས་ལས་མ་གཏོགས་ ང་ཚོས་ཡིད་ཆེས་ཅན་གྱི་མཐུན་འབྲེལ་པ་དང་གཅིག་ཁར་མི་བརྒྱུད།',
      contactTitle: 'འབྲེལ་བ་འཐབ།',
      contactBody:
        'གསང་བའི་སྲུང་སྐྱོབ་ལམ་ལུགས་འདི་དང་ ང་ཚོས་ཁྱེད་ཀྱི་གནས་ཚུལ་ག་དེ་སྦེ་བཀོལ་སྤྱོད་འབད་ནི་ཨིན་ན་གི་སྐོར་ལས་འདྲི་བ་ཡོད་པ་ཅིན་ ང་ཚོ་དང་འབྲེལ་བ་འཐབ་གནང་།',
      contactDetails: {
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        whatsappLabel: 'WhatsApp:',
      },
    },
    contactPage: {
      heroTitle: 'འབྲེལ་བ་འཐབ།',
      heroSubtitle: 'ཁྱེད་ཀྱི་རླུང་འཁོར་ཞབས་ཏོག་དགོས་མཁོ་སྐོར་ལས་གྲོས་བསྡུར་འབད་བཏུབ།',
      successTitle: 'འཕྲིན་དོན་བདེ་ལེགས་སྦེ་གཏང་ཡོད།',
      successSubtitle: 'ང་ཚོ་དང་འབྲེལ་བ་འཐབ་པའི་ཐུགས་རྗེ་ཆེ། མགྱོགས་པར་ལན་གསལ་འབད་འོང་།',
      formTitle: 'འཕྲིན་དོན་གཏང་གནང་།',
      infoTitle: 'འབྲེལ་བའི་གནས་ཚུལ།',
      infoSubtitle: 'ང་ཚོ་ལུ་ཐད་ཀར་འབྲེལ་བ་འཐབ།',
      infoCards: {
        whatsapp: {
          title: 'ཝཊ་ཨཔ།',
        },
        phone: {
          title: 'ཕོན།',
        },
        email: {
          title: 'ཨིམེལ།',
        },
        office: {
          title: 'ཡིག་ཚང་།',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'མིང་།',
        email: 'ཨིམེལ།',
        phone: 'ཕོན།',
        service: 'ཞབས་ཏོག།',
        message: 'འཕྲིན་དོན།',
        submit: 'འཕྲིན་དོན་གཏང་།',
        namePlaceholder: 'ཁྱེད་ཀྱི་མིང་།',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'ཕོན་ཨང་།',
        messagePlaceholder: 'ཁྱེད་ཀྱི་ལས་འཆར་སྐོར་ལས་བཤད་གནང་།',
        serviceSelect: 'ཞབས་ཏོག་གདམ་ཁ་འབད།',
        serviceOptions: {
          maintenance: 'སྐྱོང་བདག',
          installation: 'བཙུགས་སྒྲིག',
          consulting: 'བསླབ་བརྗོད',
          repair: 'ཉམས་བཅོས',
          other: 'གཞན',
        },
      },
    },
    footer: {
      companyTagline:
        'Leading wind mill service provider with expert maintenance, installation, and repair solutions for optimal renewable energy system performance.',
      quickLinks: 'Quick Links',
      ourServices: 'Services',
      contactUs: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      allRightsReserved: 'All rights reserved.',
      services: {
        sitePrep: 'Site Preparation & Ground Works',
        mechElec: 'Mechanical & Electrical Installation',
        annual: 'Annual Servicing & Maintenance',
        wtg: 'WTG Operation & HT Line O&M',
      },
    },
    home: {
      whyChooseUs: {
        title: 'Why Choosing Us Means Choosing a Cleaner, Smarter Tomorrow',
        subtitle:
          'Leading the windmill revolution with advanced turbine technology and sustainable energy solutions for generations to come.',
        leftCard:
          'Our windmill specialists provide expert installation and maintenance services, ensuring optimal turbine performance in all wind conditions.',
        rightCard:
          'Our advanced windmill systems reduce energy costs by up to 70% and provide clean, renewable power for homes, farms, and businesses.',
        bottomCard:
          'Our windmill expertise extends beyond installation. We provide comprehensive maintenance, blade inspection, and performance optimization services, ensuring your wind energy systems operate at peak efficiency 24/7, regardless of weather conditions.',
        stats: {
          installations: 'Windmill installations nationwide',
          capacity: 'Clean energy capacity installed',
          reduction: 'Average energy cost reduction',
          expertise: 'Years of windmill expertise',
        },
      },
            faq: {
        title: 'Frequently Asked Questions',
        items: {
          0: {
            q: 'How much does a windmill installation cost?',
            a: 'The cost varies depending on the size and type of windmill system. Residential installations typically range from $15,000-$50,000, while commercial systems can cost $100,000+. We offer flexible financing options to make wind energy accessible.',
          },
          1: {
            q: 'How long does installation take?',
            a: 'Most residential installations take 2-4 weeks from site assessment to completion. Commercial projects may take 6-12 weeks depending on complexity. We work efficiently to minimize disruption to your daily operations.',
          },
          2: {
            q: 'What maintenance is required?',
            a: 'Windmills require minimal maintenance. We recommend annual inspections and basic servicing. Our maintenance plans include regular check-ups, blade inspections, and performance optimization to ensure maximum efficiency.',
          },
          3: {
            q: 'How much can I save on energy costs?',
            a: 'Most customers see 60-80% reduction in electricity bills. The exact savings depend on your location, wind conditions, and energy consumption. Many systems pay for themselves within 5-7 years.',
          },
          4: {
            q: 'Do windmills work in all weather conditions?',
            a: 'Modern windmills are designed to operate in various weather conditions. They automatically shut down in extreme winds to prevent damage and can generate power in light winds. Our systems are built to withstand harsh weather.',
          },
          5: {
            q: 'What permits do I need?',
            a: 'Requirements vary by location. We handle all permitting processes including zoning approvals, electrical permits, and environmental assessments. Our team ensures full compliance with local regulations.',
          },
        },
      },
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      contact: 'సంప్రదించండి',
      getStarted: 'ప్రారంభించండి',
      language: 'భాష',
    },
    hero: {
      title: 'గాలి శక్తి భవిష్యత్',
      description:
        'మీ గాలి శక్తి వ్యవస్థలు ఉత్తమ పనితీరు మరియు దీర్ఘాయుష్షు కోసం నిపుణుల విండ్ మిల్ సేవలు మరియు నిర్వహణ పరిష్కారాలను అందిస్తున్నాం. నమ్మకమైన, ప్రొఫెషనల్ సేవ కోసం మాతో భాగస్వామ్యం చేయండి.',
      exploreMore: 'మరింత తెలుసుకోండి',
      trustedTitle: 'శుభ్రమైన, నమ్మకమైన శక్తి కోరే వ్యాపారాలు మరియు సమాజాలు మమ్మల్ని నమ్ముతాయి.',
      trustedBody:
        'చిన్న ఇళ్ల నుండి పెద్ద పరిశ్రమల వరకు, అందుబాటు ధరలతో స్థిరమైన గాలి శక్తి పరిష్కారాల కోసం మా కస్టమర్లు మమ్మల్ని ఎంచుకుంటారు.',
    },
    aboutSection: {
      badge: 'మా గురించి',
      titleLine1: '32+ సంవత్సరాల విండ్ మిల్',
      titleLine2: 'సేవా విశిష్టత',
      titleLine3: 'మరియు నవీకరణ',
      description:
        'SS Wind Tech 32+ సంవత్సరాల అనుభవంతో పునరుత్పాదక శక్తి రంగంలో విశ్వసనీయమైన మరియు సాంకేతికంగా ఆధునిక పరిష్కారాలను అందిస్తోంది.',
      exploreMore: 'మరింత తెలుసుకోండి',
    },
    footer: {
      companyTagline:
        'ఉత్తమ నిర్వహణ, ఇన్‌స్టాలేషన్ మరియు రిపేర్ పరిష్కారాలతో ప్రముఖ విండ్ మిల్ సేవల ప్రదాత.',
      quickLinks: 'త్వరిత లింకులు',
      ourServices: 'సేవలు',
      contactUs: 'సంప్రదించండి',
      privacyPolicy: 'గోప్యతా విధానం',
      cookiePolicy: 'కుకీ విధానం',
      allRightsReserved: 'అన్ని హక్కులు కలవి.',
      services: {
        sitePrep: 'సైట్ ప్రిపరేషన్ & గ్రౌండ్ వర్క్స్',
        mechElec: 'మెకానికల్ & ఎలక్ట్రికల్ ఇన్‌స్టాలేషన్',
        annual: 'వార్షిక సేవ & నిర్వహణ',
        wtg: 'WTG ఆపరేషన్ & HT లైన్ O&M',
      },
    },
    aboutPage: {
      heroTitle: 'SS Wind Tech గురించి',
      heroSubtitle: 'విండ్ మిల్ సేవలు, నిర్వహణ మరియు ఆప్టిమైజేషన్ పరిష్కారాల్లో మీ నమ్మకమైన భాగస్వామి.',
      storyTitle: 'మా కథ',
      story: {
        p1:
          'SS Wind Tech 32+ సంవత్సరాల పరిశ్రమ అనుభవంతో ప్రముఖ విండ్‌మిల్ సేవా సంస్థగా నిలిచింది. పునరుత్పాదక శక్తి రంగంలో నమ్మకమైన, సాంకేతికంగా అభివృద్ధి చెందిన పరిష్కారాలను అందిస్తుంది. ఇరిక్షన్/ఇన్‌స్టాలేషన్, రీపవరిం, మేక్ చేంజ్, డీకమిషనింగ్, WTG లైఫ్ ఎక్స్‌టెన్షన్ స్టడీస్, ఆపరేషన్ & మెయింటెనెన్స్, క్రేన్-అసిస్టెడ్ సేవలు, అలాగే పూర్తిస్థాయి వర్క్‌షాపులు, ఎలక్ట్రానిక్స్ ల్యాబ్స్, హైడ్రాలిక్ సదుపాయాలతో భాగాల రిపేర్ వర్క్స్‌ను అందిస్తుంది.',
        p2:
          'విండ్ ఫారమ్ మరియు సోలార్ పవర్ పరిశ్రమలకు SS Wind Tech ఎండ్-టు-ఎండ్ పరిష్కారాలను అందిస్తుంది. ప్రస్తుతం, తమిళనాడులో బలమైన ఉనికితో పాటు కర్ణాటక, ఆంధ్రప్రదేశ్, మహారాష్ట్ర, రాజస్థాన్, గుజరాత్, మధ్యప్రదేశ్ తదితర రాష్ట్రాల్లో సేవల విస్తరణ ఉంది. నమ్మకం, స్థిరమైన పనితీరు మరియు నాణ్యమైన సేవల ఆధారంగా విస్తృత క్లయింట్ బేస్‌ను నిర్మించింది.',
        p3:
          'స్థిరమైన వ్యాపార పద్ధతులు, పర్యావరణ ఉత్తమ ప్రాక్టీసులు మరియు సామాజిక బాధ్యత పట్ల SS Wind Tech యొక్క నిబద్ధతే విజయానికి పునాది. సాంకేతిక సామర్థ్యాన్ని పెంపొందించడం, ఆపరేషనల్ ఎక్సలెన్స్‌ను బలపరచడం, మరియు అధిక పనితీరు ప్రమాణాలను సాధించడంపై నిరంతరం దృష్టి పెడుతుంది. పునరుత్పాదక శక్తిలోని అనుభవంతో సోలార్ పవర్ ప్రాజెక్టులను కూడా చేపట్టి, స్థిరమైన మరియు శక్తి-దక్ష భవిష్యత్తు దృష్టిని బలపరుస్తోంది.',
      },
      vmgTitle: 'మా విజన్, మిషన్ & లక్ష్యాలు',
      visionTitle: 'మా విజన్',
      visionBody: 'సేవ మరియు స్థిరత్వం ద్వారా కస్టమర్ సంతృప్తిలో గ్లోబల్ రిన్యూవబుల్ ఎనర్జీ లీడర్‌గా నిలవడం.',
      missionTitle: 'మా మిషన్',
      missionBody: 'సేఫ్టీ, ప్రోడక్ట్ క్వాలిటీ, బాహ్య & అంతర్గత కస్టమర్ సంతృప్తికి అత్యధిక ప్రాధాన్యం.',
      goalsTitle: 'మా లక్ష్యాలు',
      goals: {
        items: {
          0: 'నాణ్యత మరియు రిస్క్ మేనేజ్‌మెంట్ ద్వారా లాభాన్ని పెంచడం',
          1: 'సైట్ కార్యకలాపాలను నియంత్రించేందుకు కనీస మానవ వనరులను కొనసాగించడం',
          2: 'అన్ని ప్రక్రియలలో Zero-Deviation వ్యూహాన్ని నిర్ధారించడం',
          3: 'అంతర్గతంగా మరియు బాహ్యంగా వాస్తవాల ఆధారంగా ఓపెన్ మరియు నిజాయితీ కమ్యూనికేషన్‌ను నిర్ధారించడం',
          4: 'నిరంతర మెరుగుదలలు (CIMS) నిర్ధారించడం',
        },
      },
      expertiseTitle: 'మా నైపుణ్యం',
      expertiseSubtitle: 'దశాబ్దాల అనుభవంతో మద్దతున్న సమగ్ర విండ్ ఎనర్జీ పరిష్కారాలు',
      expertiseStats: {
        years: 'అనుభవ సంవత్సరాలు',
        capacity: '2.5MW వరకు సామర్థ్యం',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'కస్టమర్ సంతృప్తి',
      },
      directorsTitle: 'మా డైరెక్టర్లు',
      directorsSubtitle: 'విండ్ ఎనర్జీ పరిష్కారాలలో దశాబ్దాల అనుభవం ఉన్న నాయకత్వ బృందం',
      directors: {
        sundar: {
          name: 'శ్రీ సుందర్ మూర్తి',
          role: 'మేనేజింగ్ డైరెక్టర్',
          bio: {
            p1:
              'మేనేజింగ్ డైరెక్టర్ శ్రీ సుందర్ మూర్తి కంపెనీ విజన్ మరియు దిశకు మార్గదర్శక శక్తి. వృద్ధి దశలలోనూ సవాళ్ల సమయంలోనూ సంస్థను స్థిరంగా నడిపించే నాయకత్వాన్ని అందిస్తారు.',
            p2:
              'సరైన సమయంలో సరైన నిర్ణయాలు తీసుకోవడం ద్వారా కంపెనీ పునాదిని బలపరుస్తారు. రిస్క్ మరియు అవకాశాన్ని సమతుల్యం చేస్తూ దీర్ఘకాల వ్యాపార ప్రయోజనాలను కాపాడుతారు.',
            p3:
              'టీమ్వర్క్ సంస్థ విజయానికి పునాదని నమ్ముతూ అన్ని స్థాయిల్లో ఉద్యోగులను మార్గనిర్దేశం చేసి ప్రోత్సహిస్తారు. పారదర్శకత, నమ్మకం, పరస్పర గౌరవాన్ని ప్రోత్సహిస్తారు.',
            p4:
              'బృందాలు బాధ్యత తీసుకుని ఉత్తమ ఫలితాలు అందించేలా శక్తినిస్తారు. వ్యక్తిగత లక్ష్యాలను కంపెనీ లక్ష్యాలతో అనుసంధానం చేసి ఐక్యతను నిర్మిస్తారు.',
          },
        },
        sivakumar: {
          name: 'శ్రీ శివకుమార్',
          role: 'టెక్నికల్ డైరెక్టర్',
          bio: {
            p1:
              'అత్యంత ప్రతిభావంతుడైన ఇంజినీర్‌గా శ్రీ శివకుమార్ క్లిష్టమైన మెకానికల్ సమస్యలను పరిష్కరించడంలో ప్రత్యేక ఆసక్తి చూపుతారు. విండ్ టర్బైన్ సర్వీసింగ్‌లో 30+ సంవత్సరాల అనుభవంతో WTG బ్లేడ్స్, గేర్‌బాక్స్‌లు, వించ్ సిస్టమ్స్‌లో లోతైన నైపుణ్యం కలిగి ఉన్నారు.',
            p2:
              'హైడ్రాలిక్ క్రేన్‌లపై హ్యాండ్స్-ఆన్ అనుభవం ఆయన టెక్నికల్ నాయకత్వాన్ని మరింత బలపరుస్తుంది. విదేశాల్లో అనేక విండ్ టర్బైన్ ఇన్‌స్టాలేషన్లను విజయవంతంగా నడిపించి అమలు చేశారు.',
            p3:
              'అధిక హ్యాండ్స్-ఆన్ అనుభవం ఉన్న ఇంజినీర్లు మరియు టెక్నీషియన్ల శక్తివంతమైన బృందంలో చురుకైన సభ్యుడు.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'మా సేవలు',
      heroSubtitle:
        "టెక్నాలజీ-న్యూట్రల్ నైపుణ్యంతో మరియు పూర్తి 'cradle to grave' సపోర్ట్‌తో సమగ్ర విండ్ మిల్ సేవా పరిష్కారాలు",
      approachTitle: 'మా సేవా విధానం',
      approach: {
        p1:
          "SS Wind Tech విండ్ డెవలప్‌మెంట్‌లో సేవా విభాగంపై పూర్తిగా దృష్టి పెడుతుంది. మేము విండ్ టర్బైన్‌లను అమ్మము; కస్టమర్ అవసరాలు మరియు సైట్ అవసరాలపై ఆధారపడి 'cradle to grave' సపోర్ట్ ప్యాకేజీలను అందిస్తాము.",
        p2:
          'టెక్నాలజీ-న్యూట్రల్‌గా ఉండటం వల్ల వివిధ తయారీదారుల టర్బైన్‌లపై పని చేయగలం. తయారీదారులతో పోటీ పడకుండా కలిసి పనిచేస్తాం; తరచుగా వారి కోసం నేరుగా పనులు చేస్తాం.',
        p3:
          'వివిధ తయారీదారులు మరియు కస్టమర్లతో పని చేసే సమయంలో గోప్యత మా పని విధానంలో అత్యంత కీలకం.',
      },
      disciplinesTitle: 'మా 4 ముఖ్య విభాగాలు',
      disciplinesSubtitle: 'ప్రతి కార్యాచరణకు ప్రత్యేక ఇంజినీర్ బృందాలు',
      disciplines: {
        cards: {
          site: {
            title: 'సైట్ ప్రిపరేషన్ & గ్రౌండ్ వర్క్స్',
            desc:
              'విండ్ టర్బైన్ ఇన్‌స్టాలేషన్ల కోసం గ్రౌండ్ వర్క్స్, ఫౌండేషన్ తయారీ, మరియు మౌలిక సదుపాయాల సెటప్‌తో కూడిన సమగ్ర సైట్ ప్రిపరేషన్ సేవలు.',
            bullets: {
              0: 'సైట్ అసెస్‌మెంట్ మరియు ప్లానింగ్',
              1: 'గ్రౌండ్ ప్రిపరేషన్ మరియు ఎక్స్కవేషన్',
              2: 'ఇన్‌ఫ్రాస్ట్రక్చర్ డెవలప్‌మెంట్',
              3: 'అక్సెస్ రోడ్లు మరియు సైట్ లాజిస్టిక్స్',
            },
          },
          install: {
            title: 'మెకానికల్ & ఎలక్ట్రికల్ ఇన్‌స్టాలేషన్',
            desc:
              'మెకానికల్ మరియు ఎలక్ట్రికల్ పనులతో పాటు, విండ్ టర్బైన్ కమిషనింగ్‌ను కలుపుకొని ప్రొఫెషనల్ ఇన్‌స్టాలేషన్ సేవలు.',
            bullets: {
              0: 'మెకానికల్ టర్బైన్ ఇన్‌స్టాలేషన్',
              1: 'ఎలక్ట్రికల్ సిస్టమ్‌ల ఇన్‌టీగ్రేషన్',
              2: 'టర్బైన్ కమిషనింగ్',
              3: 'గ్రిడ్ కనెక్షన్ సెటప్',
            },
          },
          maint: {
            title: 'వార్షిక సేవ & నిర్వహణ',
            desc:
              'విండ్ టర్బైన్ వ్యవస్థల ఉత్తమ పనితీరు మరియు దీర్ఘాయుష్షు కోసం సమగ్ర వార్షిక సర్వీసింగ్ మరియు నిర్వహణ ప్రోగ్రామ్‌లు.',
            bullets: {
              0: 'షెడ్యూల్డ్ మెయింటెనెన్స్ ప్రోగ్రామ్‌లు',
              1: 'కాంపోనెంట్ ఇన్‌స్పెక్షన్ మరియు టెస్టింగ్',
              2: 'ప్రీవెంటివ్ మెయింటెనెన్స్',
              3: 'పనితీరు ఆప్టిమైజేషన్',
            },
          },
          ops: {
            title: 'WTG ఆపరేషన్ & HT లైన్ O&M',
            desc:
              'నిరంతర శక్తి ఉత్పత్తికి WTG ఆపరేషన్ మరియు హై-టెన్షన్ (HT) లైన్ ఆపరేషన్ & మెయింటెనెన్స్ సేవలు.',
            bullets: {
              0: 'WTG ఆపరేషన్ మేనేజ్మెంట్',
              1: 'హై-టెన్షన్ లైన్ మెయింటెనెన్స్',
              2: '24/7 మానిటరింగ్ మరియు సపోర్ట్',
              3: 'ఎమర్జెన్సీ రెస్పాన్స్ సేవలు',
            },
          },
        },
      },
      getQuote: 'కోట్ పొందండి',
      ctaTitle: 'మీ విండ్ ఎనర్జీ ప్రాజెక్ట్ గురించి చర్చించడానికి సిద్ధంగా ఉన్నారా?',
      ctaParagraph:
        'మరింత సమాచారం అందుబాటులో ఉన్న విభాగాలు మరియు గత ప్రాజెక్టుల ఫోటోలను చూడండి. మీరు కోరుతున్నది కనిపించకపోతే, SS Wind Techకి కాల్ చేయండి లేదా ఇమెయిల్ చేయండి—మీ ప్రాజెక్ట్‌కు సహాయం చేయడానికి మేము సంతోషిస్తాము.',
      ctaButton: 'ఈరోజే సంప్రదించండి',
    },
    servicesSection: {
      title: 'సమగ్ర విండ్ ఎనర్జీ సేవలు',
      subtitle:
        '250KW నుంచి 2.1MW టర్బైన్‌ల వరకు, విండ్ మరియు సోలార్ రంగాల్లో సాంకేతిక నైపుణ్యం మరియు వేగమైన అమలుతో end-to-end పరిష్కారాలను అందిస్తున్నాం.',
      contracts: {
        title: 'సేవా ఒప్పందాలు',
        subtitle: 'మీ అవసరాలకు అనుగుణమైన ఫ్లెక్సిబుల్ మెయింటెనెన్స్ పరిష్కారాలు',
        trustedByLabel: 'మమ్మల్ని నమ్మిన వారు:',
        cards: {
          onCall: {
            title: 'ఆన్-కాల్ సేవ',
            desc:
              '24x7 అందుబాటులో ఉండే నైపుణ్య టెక్నీషియన్ల మొబైల్ టీమ్‌లు—troubleshooting, breakdowns మరియు ఎమర్జెన్సీల కోసం.',
          },
          annual: {
            title: 'వార్షిక మెయింటెనెన్స్',
            desc: 'WTGల కోసం పీరియాడిక్ ప్రీవెంటివ్ మెయింటెనెన్స్ మరియు breakdown attendance కోసం అర్హ టెక్నీషియన్లు.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              '24x7 కవరేజ్, స్పేర్స్ సప్లై, ముఖ్య భాగాల repair/replacement మరియు machine availability హామీతో సమగ్ర O&M.',
          },
          scada: {
            title: 'SCADA సిస్టమ్',
            desc:
              'Remote monitoring మరియు real-time data analysis ద్వారా OEM power curves‌కు ఎదురుగా పనితీరు ధృవీకరణ.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'ప్రధాన విండ్ టర్బైన్ భాగాలను నిపుణుల చేత నిర్వహణ',
        component: {
          title: 'కాంపోనెంట్ సేవలు',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles మరియు Tower Sections',
            2: 'రిపేర్ సదుపాయాలకు సురక్షిత రవాణా',
            3: 'సేఫ్టీ స్టాండర్డ్స్ ప్రకారం మళ్లీ ఇన్‌స్టాల్',
          },
        },
        training: {
          title: 'ట్రైనింగ్ & సేఫ్టీ',
          bullets: {
            0: 'నిరంతర సాంకేతిక ట్రైనింగ్ ప్రోగ్రామ్‌లు',
            1: 'కఠినమైన సేఫ్టీ ప్రాక్టీసుల పాటింపు',
            2: 'ఎత్తుల్లో సురక్షిత పని నైపుణ్యం',
            3: 'Nacelle hub operations ట్రైనింగ్',
          },
        },
      },
      onSite: {
        title: 'ఆన్-సైట్ వర్క్',
        subtitle: 'టవర్‌పై రిపేర్ మరియు రిట్రోఫిట్ సేవలు',
        topTower: {
          title: 'టాప్ టవర్ వర్క్',
          bullets: {
            0: 'అధిక వేగ పినియన్ మరియు బేరింగ్ మార్పిడి',
            1: 'గియర్ ఆయిల్ మార్పిడి (గ్రౌండ్ పంబింగ్)',
            2: 'జెనరేటర్ బేరింగ్ మార్పిడి',
            3: 'గియర్‌బాక్స్ సస్పెన్షన్ మార్పిడి',
            4: 'యా గియర్ యూనిట్ మరియు బ్రేక్ సర్వీసింగ్',
          },
        },
        bottomTower: {
          title: 'బాటమ్ టవర్ వర్క్',
          bullets: {
            0: 'ప్రధాన బేరింగ్ మార్పిడి',
            1: 'పగిలిన బ్లేడ్ పాచ్ పని',
            2: 'బ్లేడ్ పినియన్ మార్పిడి',
            3: 'బ్లేడ్ సిలిండర్ మార్పిడి',
            4: 'ముఖ్య షాఫ్ట్ UT పరీక్ష',
          },
        },
      },
      solar: {
        title: 'సోలార్ పవర్ సొల్యూషన్స్',
        subtitle: 'రిన్యూవబుల్ ఎనర్జీ నైపుణ్యాన్ని ఉపయోగించే టర్న్‌కీ సోలార్ ప్రాజెక్టులు',
        capabilities: {
          title: 'ప్రాజెక్ట్ సామర్థ్యాలు',
          bullets: {
            0: 'మెగావాట్ స్థాయి సోలార్ పవర్ ప్లాంట్లు',
            1: 'రూఫ్‌టాప్ సోలార్ పవర్ సిస్టమ్‌లు',
            2: 'సివిల్ నిర్మాణం మరియు నిర్మాణ మౌంటింగ్',
            3: 'కేబ్లింగ్ మరియు ఎలక్ట్రికల్ పనులు',
          },
        },
        presence: {
          title: 'ప్రాంతీయ ఉనికి',
          bullets: {
            0: 'తమిళనాడు అంతటా సక్రియ ప్రాజెక్టులు',
            1: 'ఆంధ్రప్రదేశ్‌లో విజయవంతమైన ఇన్‌స్టాలేషన్లు',
            2: 'పవర్ ఈవాక్యుయేషన్ సిస్టమ్స్ నైపుణ్యం',
            3: 'ట్రాన్స్‌మిషన్ లైన్ & సబ్‌స్టేషన్ సదుపాయాలు',
          },
        },
      },
      crane: {
        title: 'క్రేన్ సేవలు',
        subtitle: 'వేగమైన mobilization‌తో heavy-duty క్రేన్ పరిష్కారాలు',
        features: {
          title: 'సేవా లక్షణాలు',
          bullets: {
            0: 'ప్రాజెక్ట్ సైట్లకు వేగంగా mobilization',
            1: 'ఖర్చు తగ్గించే hiring పరిష్కారాలు',
            2: 'కఠినమైన టైమ్‌లైన్ పాటింపు',
            3: 'అనుభవమున్న operators మరియు crew',
          },
        },
        expertise: {
          title: 'విండ్‌మిల్ నైపుణ్యం',
          bullets: {
            0: '2.1MW వరకు టర్బైన్‌లు',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'పూర్తిగా సజ్జమైన 2 crane sets',
          },
        },
      },
      safety: {
        title: 'సేఫ్టీ కమిట్‌మెంట్',
        bullets: {
          0: 'కఠినమైన క్లాస్‌రూమ్ మరియు హ్యాండ్స్-ఆన్ ట్రైనింగ్',
          1: '24x7 సేఫ్టీ మానిటరింగ్ మరియు రివ్యూ',
          2: 'సమర్పిత సేఫ్టీ టీమ్ ఓవర్‌సైట్',
          3: 'నిరంతర మెరుగుదల ప్రాక్టీసులు',
        },
      },
      green: {
        title: 'గ్రీన్ ప్రాక్టీసులు',
        bullets: {
          0: 'పర్యావరణ బాధ్యతపై దృష్టి',
          1: 'హానికర వ్యర్థాల సరైన నిర్వాహణ',
          2: 'మర నాటే కార్యక్రమాలు',
          3: 'సోలార్ ఎనర్జీ & rainwater harvesting',
        },
      },
      ctaButton: 'సేవా కోట్ పొందండి',
    },
    privacy: {
      title: 'గోప్యతా విధానం',
      introductionTitle: 'పరిచయం',
      introductionBody:
        'SS Wind Tech లో, మీ గోప్యతను కాపాడటం మరియు మీ వ్యక్తిగత సమాచార భద్రతను నిర్ధారించడం మా బాధ్యత. మీరు మా వెబ్‌సైట్‌ను సందర్శించినప్పుడు లేదా మా సేవలను ఉపయోగించినప్పుడు మేము మీ సమాచారాన్ని ఎలా సేకరిస్తాము, ఉపయోగిస్తాము, రక్షిస్తాము అనే విషయాన్ని ఈ గోప్యతా విధానం వివరిస్తుంది.',
      collectTitle: 'మేము సేకరించే సమాచారం',
      collect: {
        items: {
          0: {
            label: 'వ్యక్తిగత సమాచారం:',
            value: 'మీరు మమ్మల్ని సంప్రదించినప్పుడు లేదా సేవలను కోరినప్పుడు పేరు, ఇమెయిల్ చిరునామా, ఫోన్ నంబర్, కంపెనీ వివరాలు.',
          },
          1: {
            label: 'సాంకేతిక సమాచారం:',
            value: 'IP అడ్రస్, బ్రౌజర్ రకం, డివైస్ సమాచారం, మరియు అనలిటిక్స్ కోసం వినియోగ డేటా.',
          },
          2: {
            label: 'వ్యాపార సమాచారం:',
            value: 'కంపెనీ వివరాలు, ప్రాజెక్ట్ అవసరాలు, మరియు సేవా ప్రాధాన్యతలు.',
          },
        },
      },
      useTitle: 'మీ సమాచారాన్ని మేము ఎలా ఉపయోగిస్తాము',
      use: {
        bullets: {
          0: 'విండ్ ఎనర్జీ సేవలు మరియు సాంకేతిక సహాయం అందించడానికి',
          1: 'విచారణలు మరియు సేవా అభ్యర్థనలకు స్పందించడానికి',
          2: 'మా వెబ్‌సైట్ మరియు సేవలను మెరుగుపరచడానికి',
          3: 'ముఖ్యమైన అప్‌డేట్లు మరియు సేవా సమాచారాన్ని పంపడానికి',
          4: 'అనలిటిక్స్ మరియు వెబ్‌సైట్ ఆప్టిమైజేషన్ కోసం',
        },
      },
      protectionTitle: 'డేటా రక్షణ',
      protectionBody:
        'అనధికార ప్రాప్తి, మార్పు, బహిర్గతం లేదా ధ్వంసం నుండి మీ వ్యక్తిగత సమాచారాన్ని రక్షించేందుకు తగిన భద్రతా చర్యలను మేము అమలు చేస్తాము. మీ డేటా సురక్షిత సర్వర్లలో నిల్వ చేయబడుతుంది మరియు అనుమతించబడిన సిబ్బంది మాత్రమే ప్రాప్తి చేస్తారు.',
      thirdPartyTitle: 'మూడో పక్షంతో పంచుకోవడం',
      thirdPartyBody:
        'మీ సమ్మతి లేకుండా మీ వ్యక్తిగత సమాచారాన్ని మూడో పక్షాలకు విక్రయించము, మార్పిడిచేయము లేదా బదిలీ చేయము; చట్టం ప్రకారం అవసరమైనప్పుడు లేదా మా సేవలను అందించడానికి అవసరమైనప్పుడు మాత్రమే. సేవా డెలివరీకి అవసరమైనప్పుడు మాత్రమే విశ్వసనీయ భాగస్వాములతో పంచుకోవచ్చు.',
      contactTitle: 'సంప్రదించండి',
      contactBody:
        'ఈ గోప్యతా విధానం లేదా మీ డేటాను మేము ఎలా నిర్వహిస్తాము అనే విషయంపై ప్రశ్నలు ఉంటే, దయచేసి మమ్మల్ని సంప్రదించండి:',
      contactDetails: {
        emailLabel: 'ఇమెయిల్:',
        phoneLabel: 'ఫోన్:',
        whatsappLabel: 'వాట్సాప్:',
      },
    },
    contactPage: {
      heroTitle: 'సంప్రదించండి',
      heroSubtitle: 'మీ విండ్ మిల్ సేవా అవసరాల గురించి చర్చిద్దాం',
      successTitle: 'సందేశం విజయవంతంగా పంపబడింది!',
      successSubtitle: 'సంప్రదించినందుకు ధన్యవాదాలు. త్వరలోనే మీకు స్పందిస్తాము.',
      formTitle: 'మాకు సందేశం పంపండి',
      infoTitle: 'సంప్రదింపు సమాచారం',
      infoSubtitle: 'నేరుగా మమ్మల్ని సంప్రదించండి',
      infoCards: {
        whatsapp: {
          title: 'వాట్సాప్',
        },
        phone: {
          title: 'ఫోన్',
        },
        email: {
          title: 'ఇమెయిల్',
        },
        office: {
          title: 'ఆఫీస్',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'పేరు',
        email: 'ఇమెయిల్',
        phone: 'ఫోన్',
        service: 'సేవ',
        message: 'సందేశం',
        submit: 'సందేశం పంపండి',
        namePlaceholder: 'మీ పేరు',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'ఫోన్ నంబర్',
        messagePlaceholder: 'మీ ప్రాజెక్ట్ గురించి చెప్పండి...',
        serviceSelect: 'సేవను ఎంచుకోండి',
        serviceOptions: {
          maintenance: 'మెయింటెనెన్స్',
          installation: 'ఇన్‌స్టాలేషన్',
          consulting: 'కన్సల్టింగ్',
          repair: 'రిపేర్',
          other: 'ఇతర',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'మమ్మల్ని ఎంచుకోవడం అంటే మరింత శుభ్రమైన, తెలివైన రేపటిని ఎంచుకోవడం',
        subtitle:
          'ఆధునిక టర్బైన్ టెక్నాలజీ మరియు స్థిరమైన శక్తి పరిష్కారాలతో విండ్‌మిల్ విప్లవాన్ని ముందుకు నడిపిస్తున్నాం.',
        leftCard:
          'మా విండ్‌మిల్ నిపుణులు ఇన్‌స్టాలేషన్ మరియు మెయింటెనెన్స్ సేవలను అందించి, అన్ని గాలి పరిస్థితుల్లో టర్బైన్ ఉత్తమ పనితీరును నిర్ధారిస్తారు.',
        rightCard:
          'మా అధునాతన విండ్‌మిల్ వ్యవస్థలు విద్యుత్ ఖర్చులను 70% వరకు తగ్గించి, ఇళ్లు, ఫారాలు మరియు వ్యాపారాలకు శుభ్రమైన పునరుత్పాదక శక్తిని అందిస్తాయి.',
        bottomCard:
          'ఇన్‌స్టాలేషన్‌తోనే ఆగదు—మేము సమగ్ర మెయింటెనెన్స్, బ్లేడ్ ఇన్‌స్పెక్షన్ మరియు పనితీరు ఆప్టిమైజేషన్ సేవలను అందించి, ఏ వాతావరణంలోనైనా 24/7 గరిష్ట సమర్థతను నిర్ధారిస్తాము.',
        stats: {
          installations: 'దేశవ్యాప్తంగా విండ్‌మిల్ ఇన్‌స్టాలేషన్లు',
          capacity: 'ఇన్‌స్టాల్ చేసిన శుభ్ర శక్తి సామర్థ్యం',
          reduction: 'సగటు శక్తి ఖర్చు తగ్గింపు',
          expertise: 'విండ్‌మిల్ నైపుణ్య సంవత్సరాలు',
        },
      },
            faq: {
        title: 'తరచుగా అడిగే ప్రశ్నలు',
        items: {
          0: {
            q: 'విండ్‌మిల్ ఇన్‌స్టాలేషన్ ఖర్చు ఎంత?',
            a: 'ఖర్చు వ్యవస్థ పరిమాణం మరియు రకాన్ని బట్టి మారుతుంది. నివాస ఇన్‌స్టాలేషన్లు సాధారణంగా $15,000-$50,000; వాణిజ్య వ్యవస్థలు $100,000+ కావచ్చు. విండ్ ఎనర్జీ అందుబాటులో ఉండేందుకు మేము ఫైనాన్సింగ్ ఎంపికలను అందిస్తున్నాం.',
          },
          1: {
            q: 'ఇన్‌స్టాలేషన్ ఎంత సమయం పడుతుంది?',
            a: 'చాలా నివాస ఇన్‌స్టాలేషన్లు సైట్ అసెస్‌మెంట్ నుండి పూర్తి వరకు 2-4 వారాలు పడతాయి. వాణిజ్య ప్రాజెక్టులు క్లిష్టతను బట్టి 6-12 వారాలు పడవచ్చు. మీ కార్యకలాపాలకు అంతరాయం తక్కువగా ఉండేలా సమర్థవంతంగా పని చేస్తాము.',
          },
          2: {
            q: 'ఏ మెయింటెనెన్స్ అవసరం?',
            a: 'విండ్‌మిల్లులకు తక్కువ మెయింటెనెన్స్ సరిపోతుంది. ఏటా ఇన్‌స్పెక్షన్ మరియు ప్రాథమిక సర్వీసింగ్‌ను సిఫార్సు చేస్తాము. మా ప్లాన్‌లలో రెగ్యులర్ చెక్‌లు, బ్లేడ్ ఇన్‌స్పెక్షన్ మరియు పనితీరు ఆప్టిమైజేషన్ ఉంటాయి.',
          },
          3: {
            q: 'ఎనర్జీ ఖర్చుల్లో ఎంత ఆదా అవుతుంది?',
            a: 'చాలా మంది కస్టమర్లు 60-80% వరకు విద్యుత్ బిల్లుల తగ్గింపును చూస్తారు. ఖచ్చితమైన ఆదా మీ ప్రాంతం, గాలి పరిస్థితులు, వినియోగం పై ఆధారపడి ఉంటుంది. చాలా వ్యవస్థలు 5-7 సంవత్సరాల్లో తమ ఖర్చును తిరిగి పొందుతాయి.',
          },
          4: {
            q: 'అన్ని వాతావరణాల్లో విండ్‌మిల్లులు పని చేస్తాయా?',
            a: 'ఆధునిక విండ్‌మిల్లులు వివిధ వాతావరణ పరిస్థితుల్లో పనిచేసేలా రూపొందించబడ్డాయి. తీవ్రమైన గాలుల్లో నష్టం నివారించేందుకు ఆటోమేటిక్‌గా ఆగుతాయి మరియు తక్కువ గాలుల్లోనూ పవర్ ఉత్పత్తి చేస్తాయి. మా సిస్టమ్స్ కఠిన వాతావరణాన్ని తట్టుకునేలా నిర్మించబడ్డాయి.',
          },
          5: {
            q: 'ఏ అనుమతులు అవసరం?',
            a: 'అవసరాలు ప్రాంతాన్ని బట్టి మారుతాయి. జోనింగ్ అప్రూవల్స్, ఎలక్ట్రికల్ పర్మిట్స్, పర్యావరణ అంచనా వంటి అన్ని పర్మిటింగ్ ప్రక్రియలను మేమే నిర్వహిస్తాము.',
          },
        },
      },
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      contact: 'संपर्क',
      getStarted: 'शुरू करें',
      language: 'भाषा',
    },
    hero: {
      title: 'पवन-शक्ति वाला भविष्य',
      description:
        'आपकी पवन ऊर्जा प्रणालियों के सर्वोत्तम प्रदर्शन और लंबे जीवन के लिए हम विशेषज्ञ विंड मिल सेवाएँ और मेंटेनेंस समाधान प्रदान करते हैं। भरोसेमंद और प्रोफेशनल सेवा के लिए हमारे साथ जुड़ें।',
      exploreMore: 'और जानें',
      trustedTitle: 'स्वच्छ और विश्वसनीय ऊर्जा चाहने वाले व्यवसाय और समुदाय हम पर भरोसा करते हैं।',
      trustedBody:
        'छोटे घरों से लेकर बड़े उद्योगों तक, किफायती और टिकाऊ पवन-शक्ति समाधानों के लिए ग्राहक हमें चुनते हैं।',
    },
    aboutSection: {
      badge: 'हमारे बारे में',
      titleLine1: '32+ वर्षों का विंड मिल',
      titleLine2: 'सेवा उत्कृष्टता',
      titleLine3: 'और नवाचार',
      description:
        'SS Wind Tech 32+ वर्षों के अनुभव के साथ नवीकरणीय ऊर्जा क्षेत्र में भरोसेमंद और तकनीकी रूप से उन्नत समाधान प्रदान करता है।',
      exploreMore: 'और जानें',
    },
    footer: {
      companyTagline:
        'उत्कृष्ट मेंटेनेंस, इंस्टॉलेशन और रिपेयर समाधानों के साथ अग्रणी विंड मिल सेवा प्रदाता।',
      quickLinks: 'त्वरित लिंक',
      ourServices: 'सेवाएं',
      contactUs: 'संपर्क करें',
      privacyPolicy: 'गोपनीयता नीति',
      cookiePolicy: 'कुकी नीति',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      services: {
        sitePrep: 'साइट तैयारी और ग्राउंड वर्क्स',
        mechElec: 'मैकेनिकल और इलेक्ट्रिकल इंस्टॉलेशन',
        annual: 'वार्षिक सर्विसिंग और मेंटेनेंस',
        wtg: 'WTG ऑपरेशन और HT लाइन O&M',
      },
    },
    aboutPage: {
      heroTitle: 'SS Wind Tech के बारे में',
      heroSubtitle: 'विंड मिल सेवाओं, मेंटेनेंस और ऑप्टिमाइज़ेशन समाधानों में आपका भरोसेमंद साथी।',
      storyTitle: 'हमारी कहानी',
      story: {
        p1:
          'SS Wind Tech 32+ वर्षों के उद्योग अनुभव के साथ एक अग्रणी विंडमिल सेवा प्रदाता के रूप में स्थापित है। यह नवीकरणीय ऊर्जा क्षेत्र में भरोसेमंद और तकनीकी रूप से उन्नत समाधान प्रदान करता है। कंपनी इरेक्शन और इंस्टॉलेशन, रिपावरिंग, मेक चेंज, डी-कमीशनिंग, WTG लाइफ एक्सटेंशन स्टडीज़, ऑपरेशन एवं मेंटेनेंस, क्रेन-असिस्टेड सेवाएँ और विंडमिल कंपोनेंट्स की रिपेयर वर्क्स जैसी सेवाएँ प्रदान करती है, जिन्हें पूर्ण सुसज्जित वर्कशॉप, इलेक्ट्रॉनिक्स लैब और हाइड्रोलिक सुविधाओं का समर्थन मिलता है।',
        p2:
          'SS Wind Tech विंड फार्म और सोलर पावर उद्योगों के लिए एंड-टू-एंड समाधान और विविध सेवाएँ प्रदान करता है। वर्तमान में, कंपनी की गतिविधियाँ पूरे देश में फैली हैं—तमिलनाडु में मजबूत उपस्थिति के साथ-साथ कर्नाटक, आंध्र प्रदेश, महाराष्ट्र, राजस्थान, गुजरात, मध्य प्रदेश आदि राज्यों में भी सेवा कवरेज है। भरोसा, निरंतर प्रदर्शन और गुणवत्ता सेवा के आधार पर कंपनी ने व्यापक क्लाइंट बेस बनाया है।',
        p3:
          'SS Wind Tech की सफलता का आधार स्थायी व्यावसायिक प्रथाओं, पर्यावरणीय सर्वोत्तम प्रथाओं और सामाजिक जिम्मेदारी के प्रति उसकी अटूट प्रतिबद्धता है। कंपनी तकनीकी क्षमताओं को बढ़ाने, ऑपरेशनल एक्सीलेंस को मजबूत करने और प्रदर्शन मानकों को ऊपर उठाने पर लगातार ध्यान देती है। नवीकरणीय ऊर्जा में अपनी विशेषज्ञता का लाभ उठाते हुए, कंपनी ने सोलर पावर प्रोजेक्ट्स को भी संभालने की क्षमता बढ़ाई है, जिससे एक स्थायी और ऊर्जा-दक्ष भविष्य की उसकी दृष्टि मजबूत होती है।',
      },
      vmgTitle: 'हमारा विज़न, मिशन और लक्ष्य',
      visionTitle: 'हमारा विज़न',
      visionBody: 'सेवा और स्थिरता के माध्यम से ग्राहक संतुष्टि में वैश्विक नवीकरणीय ऊर्जा नेता बनना।',
      missionTitle: 'हमारा मिशन',
      missionBody: 'सुरक्षा, उत्पाद गुणवत्ता, बाहरी एवं आंतरिक ग्राहक संतुष्टि को सर्वोच्च प्राथमिकता।',
      goalsTitle: 'हमारे लक्ष्य',
      goals: {
        items: {
          0: 'गुणवत्ता तथा जोखिम प्रबंधन के माध्यम से लाभ बढ़ाना',
          1: 'साइट गतिविधि को नियंत्रित करने के लिए न्यूनतम मैनपावर बनाए रखना',
          2: 'सभी प्रक्रियाओं में Zero-Deviation रणनीति सुनिश्चित करना',
          3: 'आंतरिक व बाहरी रूप से तथ्यों के आधार पर खुला और ईमानदार संवाद सुनिश्चित करना',
          4: 'निरंतर सुधार (CIMS) सुनिश्चित करना',
        },
      },
      expertiseTitle: 'हमारी विशेषज्ञता',
      expertiseSubtitle: 'दशकों के अनुभव से समर्थित व्यापक पवन ऊर्जा समाधान',
      expertiseStats: {
        years: 'अनुभव के वर्ष',
        capacity: '2.5MW तक क्षमता',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'ग्राहक संतुष्टि',
      },
      directorsTitle: 'हमारे निदेशक',
      directorsSubtitle: 'पवन ऊर्जा समाधानों में दशकों के अनुभव वाली नेतृत्व टीम',
      directors: {
        sundar: {
          name: 'श्री सुन्दर मूर्ति',
          role: 'मैनेजिंग डायरेक्टर',
          bio: {
            p1:
              'मैनेजिंग डायरेक्टर श्री सुन्दर मूर्ति कंपनी के विज़न और दिशा के मार्गदर्शक हैं। वे वृद्धि के चरणों और चुनौतीपूर्ण समय—दोनों में संगठन को स्थिर रखने वाला मजबूत नेतृत्व प्रदान करते हैं।',
            p2:
              'समय पर और सूचित निर्णय लेने की उनकी क्षमता कंपनी की नींव को मजबूत करती है। वे दीर्घकालिक हितों की रक्षा के लिए जोखिम और अवसर का संतुलन करते हैं।',
            p3:
              'वे मानते हैं कि टीमवर्क संगठनात्मक सफलता की रीढ़ है। वे सभी स्तरों पर कर्मचारियों का मार्गदर्शन, मेंटरिंग और प्रेरणा करते हैं।',
            p4:
              'वे टीमों को जिम्मेदारी लेने और सर्वश्रेष्ठ प्रदर्शन देने के लिए सक्षम बनाते हैं। व्यक्तिगत लक्ष्यों को कंपनी के उद्देश्यों के साथ जोड़कर वे एकजुट कार्यबल बनाते हैं।',
          },
        },
        sivakumar: {
          name: 'श्री शिवकुमार',
          role: 'टेक्निकल डायरेक्टर',
          bio: {
            p1:
              'एक अत्यंत कुशल इंजीनियर के रूप में, श्री शिवकुमार जटिल मैकेनिकल चुनौतियों को हल करने में उत्कृष्ट हैं। विंड टर्बाइन सर्विसिंग में 30+ वर्षों के अनुभव के साथ उन्हें WTG ब्लेड्स, गियरबॉक्स और विंच सिस्टम्स में गहरी तकनीकी विशेषज्ञता है।',
            p2:
              'हाइड्रोलिक क्रेनों के साथ उनका व्यावहारिक अनुभव उनके तकनीकी नेतृत्व को और मजबूत करता है। उन्होंने विदेशों में कई विंड टर्बाइन इंस्टॉलेशन सफलतापूर्वक नेतृत्व और निष्पादित किए हैं।',
            p3:
              'वे अनुभवी इंजीनियरों और तकनीशियनों की एक ऊर्जावान टीम के सक्रिय सदस्य हैं।',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'हमारी सेवाएं',
      heroSubtitle:
        "टेक्नोलॉजी-न्यूट्रल विशेषज्ञता और पूरी 'cradle to grave' सहायता के साथ व्यापक विंड मिल सेवा समाधान",
      approachTitle: 'हमारा सेवा दृष्टिकोण',
      approach: {
        p1:
          "SS Wind Tech पवन विकास के सेवा पक्ष पर पूरी तरह केंद्रित है। हम विंड टर्बाइन नहीं बेचते; हम ग्राहकों की जरूरतों और साइट आवश्यकताओं के अनुसार 'cradle to grave' सपोर्ट पैकेज प्रदान करते हैं।",
        p2:
          'हम टेक्नोलॉजी-न्यूट्रल और निष्पक्ष हैं—जिससे हम विभिन्न निर्माताओं के टर्बाइनों पर काम कर सकते हैं। हम निर्माताओं के साथ प्रतिस्पर्धा नहीं करते; उनके साथ मिलकर काम करते हैं और कई बार उनके लिए सीधे कार्य करते हैं।',
        p3:
          'विभिन्न टर्बाइन निर्माताओं और ग्राहकों के साथ काम करते समय गोपनीयता हमारे संचालन का महत्वपूर्ण हिस्सा है।',
      },
      disciplinesTitle: 'हमारे 4 प्रमुख क्षेत्र',
      disciplinesSubtitle: 'हर गतिविधि के लिए समर्पित विशेषज्ञ इंजीनियर टीम',
      disciplines: {
        cards: {
          site: {
            title: 'साइट तैयारी और ग्राउंड वर्क्स',
            desc:
              'ग्राउंड वर्क्स, फाउंडेशन तैयारी और इंफ्रास्ट्रक्चर सेटअप सहित विंड टर्बाइन इंस्टॉलेशन के लिए व्यापक साइट तैयारी सेवाएं।',
            bullets: {
              0: 'साइट आकलन और योजना',
              1: 'ग्राउंड तैयारी और खुदाई',
              2: 'इंफ्रास्ट्रक्चर विकास',
              3: 'एक्सेस रोड्स और साइट लॉजिस्टिक्स',
            },
          },
          install: {
            title: 'मैकेनिकल और इलेक्ट्रिकल इंस्टॉलेशन',
            desc:
              'मैकेनिकल और इलेक्ट्रिकल कार्य के साथ, विंड टर्बाइन की कमिशनिंग सहित प्रोफेशनल इंस्टॉलेशन सेवाएं।',
            bullets: {
              0: 'मैकेनिकल टर्बाइन इंस्टॉलेशन',
              1: 'इलेक्ट्रिकल सिस्टम इंटीग्रेशन',
              2: 'टर्बाइन कमिशनिंग',
              3: 'ग्रिड कनेक्शन सेटअप',
            },
          },
          maint: {
            title: 'वार्षिक सर्विसिंग और मेंटेनेंस',
            desc:
              'विंड टर्बाइन सिस्टम के सर्वोत्तम प्रदर्शन और लंबे जीवन के लिए व्यापक वार्षिक सर्विसिंग और मेंटेनेंस प्रोग्राम।',
            bullets: {
              0: 'शेड्यूल्ड मेंटेनेंस प्रोग्राम',
              1: 'कंपोनेंट निरीक्षण और टेस्टिंग',
              2: 'प्रिवेंटिव मेंटेनेंस',
              3: 'परफॉर्मेंस ऑप्टिमाइज़ेशन',
            },
          },
          ops: {
            title: 'WTG ऑपरेशन और HT लाइन O&M',
            desc:
              'निरंतर ऊर्जा उत्पादन के लिए WTG ऑपरेशन और हाई-टेंशन (HT) लाइन ऑपरेशन एवं मेंटेनेंस सेवाएं।',
            bullets: {
              0: 'WTG ऑपरेशन मैनेजमेंट',
              1: 'हाई-टेंशन लाइन मेंटेनेंस',
              2: '24/7 मॉनिटरिंग और सपोर्ट',
              3: 'इमरजेंसी रेस्पॉन्स सेवाएं',
            },
          },
        },
      },
      getQuote: 'कोट प्राप्त करें',
      ctaTitle: 'अपने पवन ऊर्जा प्रोजेक्ट पर चर्चा के लिए तैयार हैं?',
      ctaParagraph:
        'कृपया विभिन्न श्रेणियों को देखें जहाँ अधिक जानकारी और हमारे पिछले प्रोजेक्ट्स की तस्वीरें उपलब्ध हैं। अगर आपको वह नहीं मिल रहा जो आप ढूंढ रहे हैं, तो SS Wind Tech को कॉल या ईमेल करें—हम आपके प्रोजेक्ट में मदद करके प्रसन्न होंगे।',
      ctaButton: 'आज ही संपर्क करें',
    },
    servicesSection: {
      title: 'समग्र पवन ऊर्जा सेवाएं',
      subtitle:
        '250KW से 2.1MW टर्बाइनों तक, हम तकनीकी उत्कृष्टता और तेज़ निष्पादन के साथ विंड और सोलर क्षेत्रों में end-to-end समाधान प्रदान करते हैं।',
      contracts: {
        title: 'सेवा अनुबंध',
        subtitle: 'आपकी जरूरतों के अनुसार लचीले मेंटेनेंस समाधान',
        trustedByLabel: 'विश्वास करने वाले:',
        cards: {
          onCall: {
            title: 'ऑन-कॉल सेवा',
            desc:
              '24x7 उपलब्ध कुशल तकनीशियनों की मोबाइल टीमें—troubleshooting, breakdowns और इमरजेंसी के लिए।',
          },
          annual: {
            title: 'वार्षिक मेंटेनेंस',
            desc: 'WTG के लिए नियमित प्रिवेंटिव मेंटेनेंस और breakdown attendance हेतु योग्य तकनीशियन।',
          },
          coamc: {
            title: 'COAMC',
            desc:
              '24x7 कवरेज, स्पेयर सप्लाई, बड़े कंपोनेंट repair/replacement और मशीन उपलब्धता की गारंटी के साथ समग्र O&M।',
          },
          scada: {
            title: 'SCADA सिस्टम',
            desc:
              'Remote monitoring और real-time data analysis द्वारा OEM power curves के विरुद्ध प्रदर्शन सत्यापन।',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'प्रमुख विंड टर्बाइन कंपोनेंट्स का विशेषज्ञ संचालन',
        component: {
          title: 'कंपोनेंट सेवाएं',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles और Tower Sections',
            2: 'रिपेयर सुविधा तक सुरक्षित परिवहन',
            3: 'सुरक्षा मानकों के अनुसार पुनः इंस्टॉलेशन',
          },
        },
        training: {
          title: 'ट्रेनिंग और सुरक्षा',
          bullets: {
            0: 'निरंतर तकनीकी प्रशिक्षण कार्यक्रम',
            1: 'कठोर सुरक्षा प्रथाओं का पालन',
            2: 'ऊंचाई पर सुरक्षित कार्य की विशेषज्ञता',
            3: 'Nacelle hub operations ट्रेनिंग',
          },
        },
      },
      onSite: {
        title: 'ऑन-साइट कार्य',
        subtitle: 'टॉवर पर रिपेयर और रेट्रोफिट सेवाएं',
        topTower: {
          title: 'टॉप टॉवर वर्क',
          bullets: {
            0: 'High speed pinion & bearing replacement',
            1: 'Gear oil replacement (ground pumping)',
            2: 'Generator bearing replacement',
            3: 'Gearbox suspension replacement',
            4: 'Yaw gear unit & brake servicing',
          },
        },
        bottomTower: {
          title: 'बॉटम टॉवर वर्क',
          bullets: {
            0: 'Main bearing replacement',
            1: 'Broken blade patch work',
            2: 'Blade pinion replacement',
            3: 'Blade cylinder replacement',
            4: 'UT test of main shaft',
          },
        },
      },
      solar: {
        title: 'सोलर पावर समाधान',
        subtitle: 'नवीकरणीय ऊर्जा विशेषज्ञता के साथ टर्नकी सोलर प्रोजेक्ट्स',
        capabilities: {
          title: 'प्रोजेक्ट क्षमताएं',
          bullets: {
            0: 'MW-scale solar power plants',
            1: 'Rooftop solar power systems',
            2: 'Civil construction & structure mounting',
            3: 'Cabling and electrical works',
          },
        },
        presence: {
          title: 'क्षेत्रीय उपस्थिति',
          bullets: {
            0: 'तमिलनाडु में सक्रिय प्रोजेक्ट्स',
            1: 'आंध्र प्रदेश में सफल इंस्टॉलेशन',
            2: 'Power evacuation systems विशेषज्ञता',
            3: 'Transmission line & substation सुविधाएं',
          },
        },
      },
      crane: {
        title: 'क्रेन सेवाएं',
        subtitle: 'तेज़ mobilization के साथ heavy-duty क्रेन समाधान',
        features: {
          title: 'सेवा विशेषताएं',
          bullets: {
            0: 'प्रोजेक्ट साइट्स पर तेज़ mobilization',
            1: 'लागत-प्रभावी hiring समाधान',
            2: 'कठोर टाइमलाइन पालन',
            3: 'अनुभवी operators और crew',
          },
        },
        expertise: {
          title: 'विंडमिल विशेषज्ञता',
          bullets: {
            0: '2.1MW तक टर्बाइंस',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'दो पूरी तरह सुसज्जित crane sets',
          },
        },
      },
      safety: {
        title: 'सुरक्षा प्रतिबद्धता',
        bullets: {
          0: 'कठोर क्लासरूम और hands-on ट्रेनिंग',
          1: '24x7 सुरक्षा मॉनिटरिंग और रिव्यू',
          2: 'समर्पित सुरक्षा टीम oversight',
          3: 'निरंतर सुधार प्रथाएं',
        },
      },
      green: {
        title: 'ग्रीन प्रथाएं',
        bullets: {
          0: 'पर्यावरणीय जिम्मेदारी पर फोकस',
          1: 'खतरनाक कचरे का उचित निपटान',
          2: 'वृक्षारोपण अभियान',
          3: 'सोलर ऊर्जा & rainwater harvesting',
        },
      },
      ctaButton: 'सेवा कोट प्राप्त करें',
    },
    privacy: {
      title: 'गोपनीयता नीति',
      introductionTitle: 'परिचय',
      introductionBody:
        'SS Wind Tech में, हम आपकी गोपनीयता की सुरक्षा और आपकी व्यक्तिगत जानकारी की सुरक्षा सुनिश्चित करने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं या हमारी सेवाओं का उपयोग करते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
      collectTitle: 'हम कौन-सी जानकारी एकत्र करते हैं',
      collect: {
        items: {
          0: {
            label: 'व्यक्तिगत जानकारी:',
            value: 'जब आप हमसे संपर्क करते हैं या सेवाएँ अनुरोध करते हैं, तब नाम, ईमेल पता, फोन नंबर, कंपनी विवरण।',
          },
          1: {
            label: 'तकनीकी जानकारी:',
            value: 'IP पता, ब्राउज़र प्रकार, डिवाइस जानकारी, और एनालिटिक्स के लिए उपयोग डेटा।',
          },
          2: {
            label: 'व्यावसायिक जानकारी:',
            value: 'कंपनी विवरण, परियोजना आवश्यकताएँ, और सेवा प्राथमिकताएँ।',
          },
        },
      },
      useTitle: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
      use: {
        bullets: {
          0: 'पवन ऊर्जा सेवाएँ और तकनीकी सहायता प्रदान करने के लिए',
          1: 'पूछताछ और सेवा अनुरोधों का जवाब देने के लिए',
          2: 'हमारी वेबसाइट और सेवाओं को बेहतर बनाने के लिए',
          3: 'महत्वपूर्ण अपडेट और सेवा जानकारी भेजने के लिए',
          4: 'एनालिटिक्स और वेबसाइट ऑप्टिमाइज़ेशन के लिए',
        },
      },
      protectionTitle: 'डेटा संरक्षण',
      protectionBody:
        'हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुँच, परिवर्तन, खुलासा या नष्ट होने से बचाने के लिए उपयुक्त सुरक्षा उपाय लागू करते हैं। आपका डेटा सुरक्षित सर्वरों पर संग्रहीत होता है और केवल अधिकृत कर्मचारियों द्वारा ही एक्सेस किया जाता है।',
      thirdPartyTitle: 'तीसरे पक्ष के साथ साझा करना',
      thirdPartyBody:
        'हम आपकी सहमति के बिना आपकी व्यक्तिगत जानकारी को तीसरे पक्ष को बेचते, ट्रेड करते या ट्रांसफर नहीं करते; सिवाय इसके कि कानून के तहत आवश्यक हो या हमारी सेवाएँ प्रदान करने के लिए जरूरी हो। सेवा डिलीवरी के लिए आवश्यक होने पर ही विश्वसनीय भागीदारों के साथ जानकारी साझा की जा सकती है।',
      contactTitle: 'संपर्क करें',
      contactBody:
        'यदि आपके पास इस गोपनीयता नीति या हम आपके डेटा को कैसे संभालते हैं इस बारे में प्रश्न हैं, तो कृपया हमसे संपर्क करें:',
      contactDetails: {
        emailLabel: 'ईमेल:',
        phoneLabel: 'फोन:',
        whatsappLabel: 'व्हाट्सऐप:',
      },
    },
    contactPage: {
      heroTitle: 'संपर्क करें',
      heroSubtitle: 'आइए आपकी विंड मिल सेवा जरूरतों पर चर्चा करें',
      successTitle: 'संदेश सफलतापूर्वक भेज दिया गया!',
      successSubtitle: 'संपर्क करने के लिए धन्यवाद। हम जल्द ही आपको जवाब देंगे।',
      formTitle: 'हमें संदेश भेजें',
      infoTitle: 'संपर्क जानकारी',
      infoSubtitle: 'सीधे हमसे संपर्क करें',
      infoCards: {
        whatsapp: {
          title: 'व्हाट्सऐप',
        },
        phone: {
          title: 'फोन',
        },
        email: {
          title: 'ईमेल',
        },
        office: {
          title: 'कार्यालय',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'नाम',
        email: 'ईमेल',
        phone: 'फोन',
        service: 'सेवा',
        message: 'संदेश',
        submit: 'संदेश भेजें',
        namePlaceholder: 'आपका नाम',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'फोन नंबर',
        messagePlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं...',
        serviceSelect: 'सेवा चुनें',
        serviceOptions: {
          maintenance: 'मेंटेनेंस',
          installation: 'इंस्टॉलेशन',
          consulting: 'कंसल्टिंग',
          repair: 'रिपेयर',
          other: 'अन्य',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'हमें चुनना मतलब एक अधिक स्वच्छ, अधिक स्मार्ट कल चुनना',
        subtitle:
          'उन्नत टर्बाइन तकनीक और टिकाऊ ऊर्जा समाधानों के साथ हम विंडमिल क्रांति का नेतृत्व कर रहे हैं।',
        leftCard:
          'हमारे विंडमिल विशेषज्ञ इंस्टॉलेशन और मेंटेनेंस सेवाएं प्रदान करते हैं, जिससे हर प्रकार की हवा में टर्बाइन का सर्वोत्तम प्रदर्शन सुनिश्चित होता है।',
        rightCard:
          'हमारी उन्नत विंडमिल प्रणालियाँ ऊर्जा लागत को 70% तक कम करती हैं और घरों, खेतों व व्यवसायों के लिए स्वच्छ, नवीकरणीय बिजली प्रदान करती हैं।',
        bottomCard:
          'हमारी विशेषज्ञता इंस्टॉलेशन से आगे बढ़ती है। हम व्यापक मेंटेनेंस, ब्लेड निरीक्षण और प्रदर्शन अनुकूलन सेवाएं प्रदान करते हैं, ताकि मौसम की परवाह किए बिना आपकी पवन ऊर्जा प्रणाली 24/7 सर्वोच्च दक्षता पर काम करे।',
        stats: {
          installations: 'देशभर में विंडमिल इंस्टॉलेशन',
          capacity: 'स्थापित स्वच्छ ऊर्जा क्षमता',
          reduction: 'औसत ऊर्जा लागत में कमी',
          expertise: 'विंडमिल विशेषज्ञता के वर्ष',
        },
      },
            faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: {
          0: {
            q: 'विंडमिल इंस्टॉलेशन की लागत कितनी होती है?',
            a: 'लागत सिस्टम के आकार और प्रकार पर निर्भर करती है। आवासीय इंस्टॉलेशन आम तौर पर $15,000-$50,000 तक होते हैं, जबकि वाणिज्यिक सिस्टम $100,000+ हो सकते हैं। पवन ऊर्जा को सुलभ बनाने के लिए हम फाइनेंसिंग विकल्प भी देते हैं।',
          },
          1: {
            q: 'इंस्टॉलेशन में कितना समय लगता है?',
            a: 'अधिकांश आवासीय इंस्टॉलेशन साइट आकलन से लेकर पूरा होने तक 2-4 सप्ताह लेते हैं। वाणिज्यिक प्रोजेक्ट जटिलता के अनुसार 6-12 सप्ताह ले सकते हैं। हम आपके संचालन में कम से कम बाधा के साथ काम करते हैं।',
          },
          2: {
            q: 'कौन-सा मेंटेनेंस आवश्यक है?',
            a: 'विंडमिल को कम मेंटेनेंस की जरूरत होती है। हम वार्षिक निरीक्षण और बेसिक सर्विसिंग की सलाह देते हैं। हमारी योजनाओं में नियमित जांच, ब्लेड निरीक्षण और प्रदर्शन अनुकूलन शामिल हैं।',
          },
          3: {
            q: 'ऊर्जा लागत में कितनी बचत हो सकती है?',
            a: 'अधिकांश ग्राहक बिजली बिल में 60-80% तक कमी देखते हैं। वास्तविक बचत स्थान, हवा की स्थिति और ऊर्जा खपत पर निर्भर करती है। कई सिस्टम 5-7 वर्षों में अपनी लागत वसूल कर लेते हैं।',
          },
          4: {
            q: 'क्या विंडमिल सभी मौसम में काम करती है?',
            a: 'आधुनिक विंडमिल विभिन्न मौसम स्थितियों में काम करने के लिए डिज़ाइन की जाती हैं। बहुत तेज़ हवा में वे नुकसान से बचने के लिए अपने आप बंद हो जाती हैं और हल्की हवा में भी बिजली उत्पन्न कर सकती हैं। हमारे सिस्टम कठोर मौसम सहन करने के लिए बने हैं।',
          },
          5: {
            q: 'कौन-से परमिट चाहिए?',
            a: 'आवश्यकताएँ स्थान के अनुसार बदलती हैं। हम ज़ोनिंग अनुमोदन, इलेक्ट्रिकल परमिट और पर्यावरण आकलन सहित सभी परमिटिंग प्रक्रियाएँ संभालते हैं।',
          },
        },
      },
    },
  },
  ml: {
    nav: {
      home: 'ഹോം',
      about: 'ഞങ്ങളേക്കുറിച്ച്',
      services: 'സേവനങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      getStarted: 'തുടങ്ങാം',
      language: 'ഭാഷ',
    },
    hero: {
      title: 'കാറ്റുശക്തിയുള്ള ഭാവി',
      description:
        'നിങ്ങളുടെ കാറ്റുഊർജ്ജ സംവിധാനങ്ങൾക്ക് മികച്ച പ്രവർത്തനക്ഷമതയും ദീർഘായുസും ഉറപ്പാക്കാൻ വിദഗ്ധ വിൻഡ് മിൽ സേവനങ്ങളും പരിപാലന പരിഹാരങ്ങളും നൽകുന്നു. വിശ്വസനീയവും പ്രൊഫഷണലുമായ സേവനത്തിനായി ഞങ്ങളുമായി പങ്കാളിയാകൂ.',
      exploreMore: 'കൂടുതൽ അറിയുക',
      trustedTitle: 'ശുദ്ധവും വിശ്വസനീയവുമായ ഊർജ്ജം ആഗ്രഹിക്കുന്ന ബിസിനസുകളും സമൂഹങ്ങളും ഞങ്ങളെ വിശ്വസിക്കുന്നു.',
      trustedBody:
        'ചെറിയ വീടുകളിൽ നിന്ന് വലിയ വ്യവസായങ്ങളിലേക്ക്, വിലകുറഞ്ഞതും സ്ഥിരതയുള്ളതുമായ കാറ്റുശക്തി പരിഹാരങ്ങൾക്ക് ഉപഭോക്താക്കൾ ഞങ്ങളെ തിരഞ്ഞെടുക്കുന്നു.',
    },
    aboutSection: {
      badge: 'ഞങ്ങളേക്കുറിച്ച്',
      titleLine1: '32+ വർഷത്തെ വിൻഡ് മിൽ',
      titleLine2: 'സേവന മികവ്',
      titleLine3: 'മറ്റും നവീകരണം',
      description:
        'SS Wind Tech 32+ വർഷത്തെ അനുഭവത്തോടെ പുനർനവീകരണ ഊർജ്ജ മേഖലയിൽ വിശ്വസനീയവും സാങ്കേതികമായി മുന്നിട്ടിരിക്കുന്ന പരിഹാരങ്ങളും നൽകുന്നു.',
      exploreMore: 'കൂടുതൽ അറിയുക',
    },
    footer: {
      companyTagline:
        'മികച്ച പരിപാലനം, ഇൻസ്റ്റലേഷൻ, റിപ്പയർ പരിഹാരങ്ങൾ നൽകുന്ന പ്രമുഖ വിൻഡ് മിൽ സേവന ദാതാവ്.',
      quickLinks: 'വേഗ ലിങ്കുകൾ',
      ourServices: 'സേവനങ്ങൾ',
      contactUs: 'ബന്ധപ്പെടുക',
      privacyPolicy: 'സ്വകാര്യതാ നയം',
      cookiePolicy: 'കുക്കി നയം',
      allRightsReserved: 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്.',
      services: {
        sitePrep: 'സൈറ്റ് തയ്യാറാക്കൽ & ഗ്രൗണ്ട് വർക്സ്',
        mechElec: 'മെക്കാനിക്കൽ & ഇലക്ട്രിക്കൽ ഇൻസ്റ്റലേഷൻ',
        annual: 'വാർഷിക സർവീസിംഗ് & പരിപാലനം',
        wtg: 'WTG ഓപ്പറേഷൻ & HT ലൈൻ O&M',
      },
    },
    aboutPage: {
      heroTitle: 'SS Wind Techയെ കുറിച്ച്',
      heroSubtitle: 'വിൻഡ് മിൽ സേവനങ്ങൾ, പരിപാലനം, ഓപ്റ്റിമൈസേഷൻ പരിഹാരങ്ങൾ എന്നിവയിൽ നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി.',
      storyTitle: 'ഞങ്ങളുടെ കഥ',
      story: {
        p1:
          'SS Wind Tech 32+ വർഷത്തെ വ്യവസായ അനുഭവത്തോടെ പ്രമുഖ വിൻഡ് മിൽ സേവന ദാതാവായി സ്ഥാപിതമാണ്. പുനർനവീകരണ ഊർജ മേഖലയിൽ വിശ്വസനീയവും സാങ്കേതികമായി മുന്നിട്ടിരിക്കുന്ന പരിഹാരങ്ങളും നൽകുന്നു. ഇറെക്ഷൻ & ഇൻസ്റ്റലേഷൻ, റീപവറിംഗ്, മേക്ക് ചേഞ്ച്, ഡി-കമ്മീഷനിംഗ്, WTG ലൈഫ് എക്സ്റ്റൻഷൻ സ്റ്റഡീസ്, ഓപ്പറേഷൻ & പരിപാലനം, ക്രെയിൻ-അസിസ്റ്റഡ് സേവനങ്ങൾ, കൂടാതെ പൂർണ്ണമായും സജ്ജീകരിച്ച വർക്ക്‌ഷോപ്പുകൾ, ഇലക്ട്രോണിക്സ് ലാബുകൾ, ഹൈഡ്രോളിക് സൗകര്യങ്ങൾ എന്നിവയുടെ പിന്തുണയോടെ ഘടക റിപയർ വർക്കുകൾ എന്നിവ ഉൾപ്പെടുന്ന സമഗ്ര സേവനങ്ങൾ കമ്പനി നൽകുന്നു.',
        p2:
          'വിൻഡ് ഫാം, സോളാർ പവർ മേഖലകൾക്കായി SS Wind Tech എണ്ട്-ടു-എൻഡ് പരിഹാരങ്ങളും വൈവിധ്യമാർന്ന സേവനങ്ങളും നൽകുന്നു. നിലവിൽ, തമിഴ്നാട്ടിൽ ശക്തമായ സാന്നിധ്യത്തോടൊപ്പം കർണാടക, ആന്ധ്രപ്രദേശ്, മഹാരാഷ്ട്ര, രാജസ്ഥാൻ, ഗുജറാത്ത്, മധ്യപ്രദേശ് തുടങ്ങിയ സംസ്ഥാനങ്ങളിലേക്കും സേവനം വ്യാപിപ്പിച്ചിട്ടുണ്ട്. വിശ്വാസം, സ്ഥിരതയുള്ള പ്രകടനം, ഗുണമേന്മയുള്ള സേവനം എന്നിവയുടെ അടിസ്ഥാനം കൊണ്ടാണ് വലിയ ക്ലയന്റ് ബേസ് രൂപപ്പെടുത്തിയത്.',
        p3:
          'സ്ഥിരതയുള്ള ബിസിനസ് രീതികൾ, പരിസ്ഥിതി മികച്ച പ്രാക്ടീസുകൾ, സാമൂഹിക ഉത്തരവാദിത്വം എന്നിവയിലേക്കുള്ള SS Wind Techയുടെ അചഞ്ചലമായ പ്രതിബദ്ധതയാണ് വിജയത്തിന്റെ അടിത്തറ. സാങ്കേതിക ശേഷി വർധിപ്പിക്കൽ, ഓപ്പറേഷണൽ എക്സലൻസ് ശക്തിപ്പെടുത്തൽ, പ്രകടന മാനദണ്ഡങ്ങൾ ഉയർത്തൽ എന്നിവയിൽ തുടർച്ചയായി ശ്രദ്ധ ചെലുത്തുന്നു. പുനർനവീകരണ ഊർജ മേഖലയിലെ പരിചയം ഉപയോഗിച്ച് സോളാർ പവർ പ്രോജക്റ്റുകൾ കൈകാര്യം ചെയ്യാനുള്ള കഴിവും വർധിപ്പിച്ച്, സ്ഥിരതയുള്ള ഊർജ-ദക്ഷ ഭാവിക്കുള്ള ദർശനം കൂടുതൽ ശക്തമാക്കുന്നു.',
      },
      vmgTitle: 'ഞങ്ങളുടെ ദർശനം, മിഷൻ & ലക്ഷ്യങ്ങൾ',
      visionTitle: 'ഞങ്ങളുടെ ദർശനം',
      visionBody: 'സേവനവും സ്ഥിരതയും വഴി ഉപഭോക്തൃ സംതൃപ്തിയിൽ ആഗോള പുനർനവീകരണ ഊർജ നേതാവാകുക.',
      missionTitle: 'ഞങ്ങളുടെ മിഷൻ',
      missionBody: 'സേഫ്റ്റി, ഉൽപ്പന്ന ഗുണമേന്മ, ബാഹ്യ & ആഭ്യന്തര ഉപഭോക്തൃ സംതൃപ്തി എന്നിവയ്ക്ക് ഏറ്റവും ഉയർന്ന മുൻഗണന.',
      goalsTitle: 'ഞങ്ങളുടെ ലക്ഷ്യങ്ങൾ',
      goals: {
        items: {
          0: 'ഗുണമേന്മയും റിസ്ക് മാനേജ്മെന്റും വഴി ലാഭം വർധിപ്പിക്കുക',
          1: 'സൈറ്റ് പ്രവർത്തനങ്ങൾ നിയന്ത്രിക്കാൻ കുറഞ്ഞ മാൻപവർ നിലനിർത്തുക',
          2: 'എല്ലാ പ്രോസസുകളിലും Zero-Deviation തന്ത്രം ഉറപ്പാക്കുക',
          3: 'അകത്തും പുറത്തും വസ്തുതകളുടെ അടിസ്ഥാനത്തിൽ തുറന്നും സത്യസന്ധവുമായ ആശയവിനിമയം ഉറപ്പാക്കുക',
          4: 'തുടർച്ചയായ മെച്ചപ്പെടുത്തലുകൾ (CIMS) ഉറപ്പാക്കുക',
        },
      },
      expertiseTitle: 'ഞങ്ങളുടെ വൈദഗ്ധ്യം',
      expertiseSubtitle: 'ദശകങ്ങളിലെ അനുഭവം പിന്തുണയുള്ള സമഗ്ര വിൻഡ് എനർജി പരിഹാരങ്ങൾ',
      expertiseStats: {
        years: 'അനുഭവ വർഷങ്ങൾ',
        capacity: '2.5MW വരെ ശേഷി',
        iso: '9001:2015 & 14001:2015',
        satisfaction: 'ഉപഭോക്തൃ സംതൃപ്തി',
      },
      directorsTitle: 'ഞങ്ങളുടെ ഡയറക്ടർമാർ',
      directorsSubtitle: 'വിൻഡ് എനർജി പരിഹാരങ്ങളിൽ ദശകങ്ങളിലെ അനുഭവമുള്ള നേതൃത്ത്വ സംഘം',
      directors: {
        sundar: {
          name: 'ശ്രീ സുന്ദർ മൂർത്തി',
          role: 'മാനേജിംഗ് ഡയറക്ടർ',
          bio: {
            p1:
              'മാനേജിംഗ് ഡയറക്ടർ ശ്രീ സുന്ദർ മൂർത്തി കമ്പനിയുടെ ദർശനത്തിനും ദിശയ്ക്കും വഴികാട്ടിയാണ്. വളർച്ചാ ഘട്ടങ്ങളിലും വെല്ലുവിളികളിലും സംഘടനയെ സ്ഥിരതയോടെ നയിക്കുന്ന ശക്തമായ നേത്യത്വം നൽകുന്നു.',
            p2:
              'സമയബന്ധിതവും വിവരസമ്പന്നവുമായ തീരുമാനങ്ങൾ എടുത്ത് കമ്പനിയുടെ അടിത്തറ ശക്തിപ്പെടുത്തുന്നു. ദീർഘകാല ബിസിനസ് താൽപര്യങ്ങൾ സംരക്ഷിക്കാൻ റിസ്കും അവസരവും സമതുലിതമാക്കുന്നു.',
            p3:
              'ടീംവർക്ക് സംഘടനാ വിജയത്തിന്റെ അടിസ്ഥാനം എന്ന് വിശ്വസിച്ച് എല്ലാ തലങ്ങളിലും ജീവനക്കാരെ വഴിനടത്തുകയും പ്രേരിപ്പിക്കുകയും ചെയ്യുന്നു.',
            p4:
              'ടീമുകൾ ഉത്തരവാദിത്വം ഏറ്റെടുക്കാനും മികച്ച പ്രകടനം നൽകാനും പ്രാപ്തരാക്കുന്നു. വ്യക്തിഗത ലക്ഷ്യങ്ങളെ കമ്പനിയുടെ ലക്ഷ്യങ്ങളോട് ചേർത്തിണക്കി ഏകീകൃത തൊഴിലാളി ശക്തി രൂപപ്പെടുത്തുന്നു.',
          },
        },
        sivakumar: {
          name: 'ശ്രീ ശിവകുമാർ',
          role: 'ടെക്നിക്കൽ ഡയറക്ടർ',
          bio: {
            p1:
              'അത്യന്തം കഴിവുള്ള എഞ്ചിനീയറായി ശ്രീ ശിവകുമാർ സങ്കീർണ്ണമായ മെക്കാനിക്കൽ വെല്ലുവിളികൾ പരിഹരിക്കാൻ പ്രത്യേക കഴിവുള്ളവരാണ്. വിൻഡ് ടർബൈൻ സർവീസിംഗിൽ 30+ വർഷത്തെ അനുഭവത്തോടെ WTG ബ്ലേഡുകൾ, ഗിയർബോക്സുകൾ, വിഞ്ച് സിസ്റ്റങ്ങൾ എന്നിവയിൽ ആഴത്തിലുള്ള സാങ്കേതിക വൈദഗ്ധ്യം ഉള്ളത് സംഘടനയ്ക്ക് വലിയ ആസ്തിയാണ്.',
            p2:
              'ഹൈഡ്രോളിക് ക്രെയിനുകളിലെ ഹാൻഡ്സ്-ഓൺ അനുഭവം അദ്ദേഹത്തിന്റെ സാങ്കേതിക നേത്യത്വം കൂടുതൽ ശക്തമാക്കുന്നു. വിദേശങ്ങളിൽ നിരവധി വിൻഡ് ടർബൈൻ ഇൻസ്റ്റലേഷനുകൾ വിജയകരമായി നയിക്കുകയും നടപ്പാക്കുകയും ചെയ്തിട്ടുണ്ട്.',
            p3:
              'അനുഭവ സമ്പന്നരായ എഞ്ചിനീയർമാരുടെയും ടെക്നീഷ്യന്മാരുടെയും ഊർജസ്വലമായ ഒരു സംഘത്തിലെ സജീവ അംഗമാണ്.',
          },
        },
      },
    },
    servicesPage: {
      heroTitle: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
      heroSubtitle:
        "ടെക്‌നോളജി-ന്യൂട്രൽ വൈദഗ്ധ്യവും പൂർണ്ണമായ 'cradle to grave' പിന്തുണയും ഉൾപ്പെട്ട സമഗ്ര വിൻഡ് മിൽ സേവന പരിഹാരങ്ങൾ",
      approachTitle: 'ഞങ്ങളുടെ സേവന സമീപനം',
      approach: {
        p1:
          "SS Wind Tech കാറ്റുഊർജ വികസനത്തിന്റെ സേവന വശത്തെയാണ് പൂർണ്ണമായി ശ്രദ്ധിക്കുന്നത്. ഞങ്ങൾ ടർബൈനുകൾ വിൽക്കുന്നില്ല; ഉപഭോക്താക്കളുടെ ആവശ്യങ്ങളും സൈറ്റ് ആവശ്യങ്ങളും അനുസരിച്ച് 'cradle to grave' സപ്പോർട്ട് പാക്കേജുകൾ നൽകുന്നു.",
        p2:
          'ടെക്‌നോളജി-ന്യൂട്രൽ ആയതിനാൽ വിവിധ നിർമ്മാതാക്കളിലെ ടർബൈനുകളിൽ പ്രവർത്തിക്കാം. നിർമ്മാതാക്കളുമായി മത്സരിക്കാതെ സഹകരിച്ചാണ് പ്രവർത്തിക്കുന്നത്; പലപ്പോഴും അവർക്കായി നേരിട്ട് ജോലികളും ചെയ്യുന്നു.',
        p3:
          'വിവിധ നിർമ്മാതാക്കളും ഉപഭോക്താക്കളും ഉൾപ്പെട്ട് പ്രവർത്തിക്കുമ്പോൾ രഹസ്യത്വം നമ്മുടെ പ്രവർത്തനത്തിലെ ഏറ്റവും പ്രധാനപ്പെട്ട ഘടകമാണ്.',
      },
      disciplinesTitle: 'ഞങ്ങളുടെ 4 പ്രധാന മേഖലകൾ',
      disciplinesSubtitle: 'ഓരോ പ്രവർത്തനത്തിനും പ്രത്യേകം എഞ്ചിനീയർ ടീമുകൾ',
      disciplines: {
        cards: {
          site: {
            title: 'സൈറ്റ് തയ്യാറാക്കൽ & ഗ്രൗണ്ട് വർക്സ്',
            desc:
              'ഗ്രൗണ്ട് വർക്സ്, ഫൗണ്ടേഷൻ തയ്യാറാക്കൽ, ഇൻഫ്രാസ്ട്രക്ചർ സെറ്റപ്പ് എന്നിവ ഉൾപ്പെടുന്ന സമഗ്ര സൈറ്റ് തയ്യാറാക്കൽ സേവനങ്ങൾ.',
            bullets: {
              0: 'സൈറ്റ് അസെസ്‌മെന്റ് & പ്ലാനിംഗ്',
              1: 'ഗ്രൗണ്ട് പ്രിപറേഷൻ & എക്സ്കവേഷൻ',
              2: 'ഇൻഫ്രാസ്ട്രക്ചർ വികസനം',
              3: 'അക്‌സസ് റോഡുകളും സൈറ്റ് ലജിസ്റ്റിക്സും',
            },
          },
          install: {
            title: 'മെക്കാനിക്കൽ & ഇലക്ട്രിക്കൽ ഇൻസ്റ്റലേഷൻ',
            desc:
              'മെക്കാനിക്കൽ, ഇലക്ട്രിക്കൽ ജോലികൾക്കും കൂടെ ടർബൈൻ കമ്മീഷനിംഗും ഉൾപ്പെടുത്തി പ്രൊഫഷണൽ ഇൻസ്റ്റലേഷൻ സേവനങ്ങൾ.',
            bullets: {
              0: 'മെക്കാനിക്കൽ ടർബൈൻ ഇൻസ്റ്റലേഷൻ',
              1: 'ഇലക്ട്രിക്കൽ സിസ്റ്റം ഇന്റഗ്രേഷൻ',
              2: 'ടർബൈൻ കമ്മീഷനിംഗ്',
              3: 'ഗ്രിഡ് കണക്ഷൻ സെറ്റപ്പ്',
            },
          },
          maint: {
            title: 'വാർഷിക സർവീസിംഗ് & പരിപാലനം',
            desc:
              'വിൻഡ് ടർബൈൻ സിസ്റ്റങ്ങളുടെ മികച്ച പ്രകടനവും ദീർഘായുസും ഉറപ്പാക്കാൻ സമഗ്ര വാർഷിക സർവീസിംഗ് & പരിപാലന പ്രോഗ്രാമുകൾ.',
            bullets: {
              0: 'ഷെഡ്യൂൾ ചെയ്ത മെന്റനൻസ് പ്രോഗ്രാമുകൾ',
              1: 'കമ്പോണന്റ് ഇൻസ്‌പെക്ഷൻ & ടെസ്റ്റിംഗ്',
              2: 'പ്രിവന്റീവ് മെന്റനൻസ്',
              3: 'പ്രകടന ഓപ്റ്റിമൈസേഷൻ',
            },
          },
          ops: {
            title: 'WTG ഓപ്പറേഷൻ & HT ലൈൻ O&M',
            desc:
              'തുടർച്ചയായ ഊർജ ഉൽപ്പാദനത്തിനായി WTG ഓപ്പറേഷനും ഹൈ-ടെൻഷൻ (HT) ലൈൻ ഓപ്പറേഷൻ & പരിപാലന സേവനങ്ങളും.',
            bullets: {
              0: 'WTG ഓപ്പറേഷൻ മാനേജ്മെന്റ്',
              1: 'ഹൈ-ടെൻഷൻ ലൈൻ മെന്റനൻസ്',
              2: '24/7 മോണിറ്ററിംഗ് & സപ്പോർട്ട്',
              3: 'എമർജൻസി റെസ്പോൺസ് സേവനങ്ങൾ',
            },
          },
        },
      },
      getQuote: 'ക്വോട്ട് നേടുക',
      ctaTitle: 'നിങ്ങളുടെ വിൻഡ് എനർജി പ്രോജക്റ്റ് ചർച്ച ചെയ്യാൻ തയ്യാറാണോ?',
      ctaParagraph:
        'കൂടുതൽ വിവരങ്ങളും, മുമ്പ് ചെയ്ത പ്രോജക്റ്റുകളുടെ ഫോട്ടോകളും ലഭ്യമായ വിവിധ വിഭാഗങ്ങൾ കാണാം. നിങ്ങൾ അന്വേഷിക്കുന്നത് ലഭിക്കാത്ത പക്ഷം, SS Wind Tech-നെ വിളിക്കുകയോ ഇമെയിൽ ചെയ്യുകയോ ചെയ്യുക—നിങ്ങളുടെ പ്രോജക്റ്റിന് സഹായിക്കാൻ ഞങ്ങൾ സന്തോഷിക്കും.',
      ctaButton: 'ഇന്ന് തന്നെ ബന്ധപ്പെടുക',
    },
    servicesSection: {
      title: 'സമഗ്ര വിൻഡ് എനർജി സേവനങ്ങൾ',
      subtitle:
        '250KW മുതൽ 2.1MW വരെ ടർബൈൻകൾക്കായി, വിൻഡ്/സോളാർ മേഖലകളിൽ സാങ്കേതിക മികവും വേഗത്തിലുള്ള നിർവഹണവും കൊണ്ട് end-to-end പരിഹാരങ്ങൾ നൽകുന്നു.',
      contracts: {
        title: 'സേവന കരാറുകൾ',
        subtitle: 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുസരിച്ച ഫ്ലെക്സിബിൾ മെന്റനൻസ് പരിഹാരങ്ങൾ',
        trustedByLabel: 'വിശ്വസിക്കുന്നവർ:',
        cards: {
          onCall: {
            title: 'ഓൺ-കാൾ സേവനം',
            desc:
              '24x7 ലഭ്യമായ പ്രാവീണ്യമുള്ള ടെക്നീഷ്യന്മാരുടെ മൊബൈൽ ടീമുകൾ—troubleshooting, breakdowns, എമർജൻസികൾക്കായി.',
          },
          annual: {
            title: 'വാർഷിക മെന്റനൻസ്',
            desc: 'WTGകൾക്കായി പീരിയഡിക് പ്രിവന്റീവ് മെന്റനൻസ്, breakdown attendance എന്നിവയ്ക്ക് യോഗ്യമായ ടെക്നീഷ്യന്മാർ.',
          },
          coamc: {
            title: 'COAMC',
            desc:
              '24x7 കവർേജ്, സ്പെയർ സപ്ലൈ, പ്രധാന ഘടക repair/replacement, മെഷീൻ availability ഗ്യാരന്റി എന്നിവയോടെ സമഗ്ര O&M.',
          },
          scada: {
            title: 'SCADA സിസ്റ്റം',
            desc:
              'Remote monitoring, real-time data analysis എന്നിവ വഴി OEM power curves-നോട് താരതമ്യപ്പെടുത്തി പ്രകടനം സ്ഥിരീകരിക്കൽ.',
          },
        },
      },
      erection: {
        title: 'Erection & De-erection',
        subtitle: 'പ്രധാന വിൻഡ് ടർബൈൻ ഘടകങ്ങൾ വിദഗ്ധമായി കൈകാര്യം ചെയ്യൽ',
        component: {
          title: 'ഘടക സേവനങ്ങൾ',
          bullets: {
            0: 'Gearboxes, Generators, Blades, Rotors',
            1: 'Nacelles & Tower Sections',
            2: 'റിപ്പയർ സൗകര്യങ്ങളിലേക്ക് സുരക്ഷിത ഗതാഗതം',
            3: 'സേഫ്റ്റി സ്റ്റാൻഡേർഡ്സ് പ്രകാരം പുനഃ ഇൻസ്റ്റലേഷൻ',
          },
        },
        training: {
          title: 'ട്രെയിനിംഗ് & സേഫ്റ്റി',
          bullets: {
            0: 'തുടർച്ചയായ സാങ്കേതിക പരിശീലന പരിപാടികൾ',
            1: 'കഠിനമായ സുരക്ഷാ പ്രാക്ടീസുകളുടെ പാലനം',
            2: 'ഉയരങ്ങളിൽ സുരക്ഷിതമായി പ്രവർത്തിക്കുന്ന വൈദഗ്ധ്യം',
            3: 'Nacelle hub operations പരിശീലനം',
          },
        },
      },
      onSite: {
        title: 'ഓൺ-സൈറ്റ് വർക്ക്',
        subtitle: 'ടവറിലെ റിപെയർ & റിട്രോഫിറ്റ് സേവനങ്ങൾ',
        topTower: {
          title: 'ടോപ്പ് ടവർ വർക്ക്',
          bullets: {
            0: 'ഹൈ സ്പീഡ് പിനിയൻ, ബിയറിംഗ് മാറ്റിസ്ഥാപിക്കൽ',
            1: 'ഗിയർ ഓയിൽ മാറ്റം (ഭൂഗർഭ പമ്പിംഗ്)',
            2: 'ജനറേറ്റർ ബിയറിംഗ് മാറ്റം',
            3: 'ഗിയർബോക്സ് സസ്പെൻഷൻ മാറ്റം',
            4: 'യാ ഗിയർ യൂണിറ്റ് & ബ്രേക്ക് സർവീസിംഗ്',
          },
        },
        bottomTower: {
          title: 'ബോട്ടം ടവർ വർക്ക്',
          bullets: {
            0: 'മെയിൻ ബിയറിംഗ് മാറ്റം',
            1: 'പൊട്ടിയ ബ്ലേഡ് പാച്ച് വർക്ക്',
            2: 'ബ്ലേഡ് പിനിയൻ മാറ്റം',
            3: 'ബ്ലേഡ് സിലിണ്ടർ മാറ്റം',
            4: 'മെയിൻ ഷാഫ്റ്റിന്റെ UT പരിശോധന',
          },
        },
      },
      solar: {
        title: 'സോളാർ പവർ പരിഹാരങ്ങൾ',
        subtitle: 'റിന്യൂവബിൾ എനർജി വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന ടേൺകീ സോളാർ പ്രോജക്റ്റുകൾ',
        capabilities: {
          title: 'പ്രോജക്റ്റ് കഴിവുകൾ',
          bullets: {
            0: 'മെഗാവാട്ട് തോതിലുള്ള സോളാർ പവർ പ്ലാന്റുകൾ',
            1: 'റൂഫ്‌ടോപ്പ് സോളാർ പവർ സിസ്റ്റങ്ങൾ',
            2: 'സിവിൽ നിർമാണം & ഘടനാ സ്ഥാപനം',
            3: 'കേബ്ലിംഗ്, ഇലക്ട്രിക്കൽ പ്രവർത്തനങ്ങൾ',
          },
        },
        presence: {
          title: 'പ്രാദേശിക സാന്നിധ്യം',
          bullets: {
            0: 'തമിഴ്നാട്ടിലുടനീളം സജീവമായ പദ്ധതികൾ',
            1: 'ആന്ധ്രപ്രദേശിലെ വിജയകരമായ ഇൻസ്റ്റലേഷനുകൾ',
            2: 'പവർ ഇവാക്യുവേഷൻ സംവിധാനങ്ങളിലെ വൈദഗ്ധ്യം',
            3: 'ട്രാൻസ്മിഷൻ ലൈൻ & സബ്‌സ്റ്റേഷൻ സൗകര്യങ്ങൾ',
          },
        },
      },
      crane: {
        title: 'ക്രെയിൻ സേവനങ്ങൾ',
        subtitle: 'വേഗമുള്ള mobilization ഉള്ള heavy-duty ക്രെയിൻ പരിഹാരങ്ങൾ',
        features: {
          title: 'സേവന സവിശേഷതകൾ',
          bullets: {
            0: 'പ്രോജക്റ്റ് സൈറ്റുകളിലേക്ക് വേഗത്തിൽ mobilization',
            1: 'ചെലവ് കുറഞ്ഞ hiring പരിഹാരങ്ങൾ',
            2: 'കർശനമായ ടൈംലൈൻ പാലനം',
            3: 'അനുഭവമുള്ള operators & crew',
          },
        },
        expertise: {
          title: 'വിൻഡ്‌മിൽ വൈദഗ്ധ്യം',
          bullets: {
            0: '2.1MW വരെ ടർബൈൻകൾ',
            1: 'Precision blade works',
            2: 'Advanced gearbox replacement',
            3: 'പൂർണ്ണമായി സജ്ജമായ 2 crane sets',
          },
        },
      },
      safety: {
        title: 'സേഫ്റ്റി കമ്മിറ്റ്‌മെന്റ്',
        bullets: {
          0: 'കർശനമായ ക്ലാസ്‌റൂം & hands-on പരിശീലനം',
          1: '24x7 സേഫ്റ്റി മോണിറ്ററിംഗ് & റിവ്യൂ',
          2: 'സമർപ്പിത സേഫ്റ്റി ടീം oversight',
          3: 'തുടർച്ചയായ മെച്ചപ്പെടുത്തൽ പ്രാക്ടീസുകൾ',
        },
      },
      green: {
        title: 'ഗ്രീൻ പ്രാക്ടീസുകൾ',
        bullets: {
          0: 'പരിസ്ഥിതി ഉത്തരവാദിത്വം മുൻനിർത്തൽ',
          1: 'ഹസാർഡസ് വേസ്റ്റ് ശരിയായ നിർമാർജനം',
          2: 'വൃക്ഷാരോപണ ക്യാമ്പയിൻ',
          3: 'സോളാർ എനർജി & rainwater harvesting',
        },
      },
      ctaButton: 'സേവന ക്വോട്ട് നേടുക',
    },
    privacy: {
      title: 'സ്വകാര്യതാ നയം',
      introductionTitle: 'പരിചയം',
      introductionBody:
        'SS Wind Tech-ൽ, നിങ്ങളുടെ സ്വകാര്യത സംരക്ഷിക്കുകയും നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങളുടെ സുരക്ഷ ഉറപ്പാക്കുകയും ചെയ്യുന്നതിൽ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്. നിങ്ങൾ ഞങ്ങളുടെ വെബ്സൈറ്റ് സന്ദർശിക്കുമ്പോൾ അല്ലെങ്കിൽ സേവനങ്ങൾ ഉപയോഗിക്കുമ്പോൾ നിങ്ങളുടെ വിവരങ്ങൾ എങ്ങനെ ശേഖരിക്കുകയും ഉപയോഗിക്കുകയും സംരക്ഷിക്കുകയും ചെയ്യുന്നതെന്ന് ഈ സ്വകാര്യതാ നയം വിശദീകരിക്കുന്നു.',
      collectTitle: 'ഞങ്ങൾ ശേഖരിക്കുന്ന വിവരം',
      collect: {
        items: {
          0: {
            label: 'വ്യക്തിഗത വിവരം:',
            value: 'നിങ്ങൾ ഞങ്ങളെ ബന്ധപ്പെടുമ്പോൾ അല്ലെങ്കിൽ സേവനം അഭ്യർത്ഥിക്കുമ്പോൾ പേര്, ഇമെയിൽ വിലാസം, ഫോൺ നമ്പർ, കമ്പനി വിവരങ്ങൾ.',
          },
          1: {
            label: 'സാങ്കേതിക വിവരം:',
            value: 'IP വിലാസം, ബ്രൗസർ തരം, ഡിവൈസ് വിവരം, അനലിറ്റിക്സിനുള്ള ഉപയോഗ ഡാറ്റ.',
          },
          2: {
            label: 'ബിസിനസ് വിവരം:',
            value: 'കമ്പനി വിശദാംശങ്ങൾ, പ്രോജക്റ്റ് ആവശ്യങ്ങൾ, സേവന മുൻഗണനകൾ.',
          },
        },
      },
      useTitle: 'നിങ്ങളുടെ വിവരം ഞങ്ങൾ എങ്ങനെ ഉപയോഗിക്കുന്നു',
      use: {
        bullets: {
          0: 'വിൻഡ് എനർജി സേവനങ്ങളും സാങ്കേതിക സഹായവും നൽകാൻ',
          1: 'ചോദ്യം/അഭ്യർത്ഥനകൾക്ക് മറുപടി നൽകാൻ',
          2: 'ഞങ്ങളുടെ വെബ്സൈറ്റ്, സേവനങ്ങൾ മെച്ചപ്പെടുത്താൻ',
          3: 'പ്രധാന അപ്‌ഡേറ്റുകളും സേവന വിവരങ്ങളും അയയ്ക്കാൻ',
          4: 'അനലിറ്റിക്സിനും വെബ്സൈറ്റ് ഓപ്റ്റിമൈസേഷനും വേണ്ടി',
        },
      },
      protectionTitle: 'ഡാറ്റ സംരക്ഷണം',
      protectionBody:
        'അനധികൃത പ്രവേശനം, മാറ്റം, വെളിപ്പെടുത്തൽ, അല്ലെങ്കിൽ നശീകരണം എന്നിവയിൽ നിന്ന് നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ സംരക്ഷിക്കാൻ ഞങ്ങൾ അനുയോജ്യമായ സുരക്ഷാ നടപടികൾ നടപ്പിലാക്കുന്നു. നിങ്ങളുടെ ഡാറ്റ സുരക്ഷിത സർവറുകളിൽ സംഭരിക്കപ്പെടുകയും അധികാരമുള്ള ജീവനക്കാർ മാത്രം ആക്‌സസ് ചെയ്യുകയും ചെയ്യും.',
      thirdPartyTitle: 'മൂന്നാം കക്ഷിയുമായി പങ്കിടൽ',
      thirdPartyBody:
        'നിങ്ങളുടെ സമ്മതമില്ലാതെ നിങ്ങളുടെ വ്യക്തിഗത വിവരം മൂന്നാം കക്ഷികൾക്ക് വിൽക്കുകയോ കൈമാറ്റം ചെയ്യുകയോ ട്രാൻസ്ഫർ ചെയ്യുകയോ ചെയ്യില്ല; നിയമപരമായി ആവശ്യമായപ്പോൾ അല്ലെങ്കിൽ ഞങ്ങളുടെ സേവനങ്ങൾ നൽകാൻ ആവശ്യമായപ്പോൾ മാത്രമേ. സേവന വിതരണം ആവശ്യമായപ്പോൾ മാത്രമേ വിശ്വസനീയ പങ്കാളികളുമായി പങ്കിടൂ.',
      contactTitle: 'ബന്ധപ്പെടുക',
      contactBody:
        'ഈ സ്വകാര്യതാ നയത്തെക്കുറിച്ചോ ഞങ്ങൾ നിങ്ങളുടെ ഡാറ്റ എങ്ങനെ കൈകാര്യം ചെയ്യുന്നു എന്നതിനെക്കുറിച്ചോ ചോദ്യം ഉണ്ടെങ്കിൽ, ദയവായി ഞങ്ങളെ ബന്ധപ്പെടുക:',
      contactDetails: {
        emailLabel: 'ഇമെയിൽ:',
        phoneLabel: 'ഫോൺ:',
        whatsappLabel: 'WhatsApp:',
      },
    },
    contactPage: {
      heroTitle: 'ബന്ധപ്പെടുക',
      heroSubtitle: 'നിങ്ങളുടെ വിൻഡ് മിൽ സേവന ആവശ്യങ്ങളെക്കുറിച്ച് സംസാരിക്കാം',
      successTitle: 'സന്ദേശം വിജയകരമായി അയച്ചു!',
      successSubtitle: 'ബന്ധപ്പെട്ടതിന് നന്ദി. ഞങ്ങൾ ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.',
      formTitle: 'ഞങ്ങൾക്ക് ഒരു സന്ദേശം അയയ്ക്കുക',
      infoTitle: 'ബന്ധപ്പെടാനുള്ള വിവരം',
      infoSubtitle: 'നേരിട്ട് ഞങ്ങളെ ബന്ധപ്പെടുക',
      infoCards: {
        whatsapp: {
          title: 'വാട്ട്‌സ്‌ആപ്പ്',
        },
        phone: {
          title: 'ഫോൺ',
        },
        email: {
          title: 'ഇമെയിൽ',
        },
        office: {
          title: 'ഓഫീസ്',
          addressLines: {
            0: '3/437 B Nallipoombugar Nagar',
            1: 'Near RKR School, Tiruppur Rd',
            2: 'Udumalpet - 642 126',
            3: 'Tiruppur Dt, Tamil Nadu',
          },
        },
      },
      form: {
        name: 'പേര്',
        email: 'ഇമെയിൽ',
        phone: 'ഫോൺ',
        service: 'സേവനം',
        message: 'സന്ദേശം',
        submit: 'സന്ദേശം അയയ്ക്കുക',
        namePlaceholder: 'നിങ്ങളുടെ പേര്',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: 'ഫോൺ നമ്പർ',
        messagePlaceholder: 'നിങ്ങളുടെ പ്രോജക്റ്റിനെക്കുറിച്ച് പറയൂ...',
        serviceSelect: 'സേവനം തിരഞ്ഞെടുക്കുക',
        serviceOptions: {
          maintenance: 'പരിപാലനം',
          installation: 'ഇൻസ്റ്റലേഷൻ',
          consulting: 'കൺസൾട്ടിംഗ്',
          repair: 'റിപ്പയർ',
          other: 'മറ്റ്',
        },
      },
    },
    home: {
      whyChooseUs: {
        title: 'ഞങ്ങളെ തിരഞ്ഞെടുക്കുന്നത് കൂടുതൽ ശുദ്ധവും സ്മാർട്ടുമായ നാളെയെ തിരഞ്ഞെടുക്കുന്നതാണ്',
        subtitle:
          'ആധുനിക ടർബൈൻ സാങ്കേതികവിദ്യയും സ്ഥിരതയുള്ള ഊർജ പരിഹാരങ്ങളും ഉപയോഗിച്ച് വിൻഡ്‌മിൽ വിപ്ലവത്തിന് നേതൃത്വം നൽകുന്നു.',
        leftCard:
          'ഞങ്ങളുടെ വിൻഡ്‌മിൽ വിദഗ്ധർ ഇൻസ്റ്റലേഷൻ, പരിപാലന സേവനങ്ങൾ നൽകി എല്ലാ കാറ്റ് സാഹചര്യങ്ങളിലും ടർബൈൻ മികച്ച പ്രകടനം ഉറപ്പാക്കുന്നു.',
        rightCard:
          'ഞങ്ങളുടെ അധുനാതന വിൻഡ്‌മിൽ സിസ്റ്റങ്ങൾ ഊർജ ചെലവ് 70% വരെ കുറച്ച് വീടുകൾക്കും ഫാമുകൾക്കും ബിസിനസുകൾക്കും ശുദ്ധമായ പുനർനവീകരണ വൈദ്യുതി നൽകുന്നു.',
        bottomCard:
          'ഇൻസ്റ്റലേഷനിൽ മാത്രം നിൽക്കാതെ, സമഗ്ര പരിപാലനം, ബ്ലേഡ് ഇൻസ്‌പെക്ഷൻ, പ്രകടന ഓപ്റ്റിമൈസേഷൻ സേവനങ്ങൾ നൽകുന്നു. കാലാവസ്ഥ ഏതായാലും 24/7 പരമാവധി കാര്യക്ഷമത ഉറപ്പാക്കുന്നു.',
        stats: {
          installations: 'രാജ്യമെമ്പാടുമുള്ള വിൻഡ്‌മിൽ ഇൻസ്റ്റലേഷനുകൾ',
          capacity: 'ഇൻസ്റ്റാൾ ചെയ്ത ശുദ്ധ ഊർജ ശേഷി',
          reduction: 'ശരാശരി ഊർജ ചെലവ് കുറവ്',
          expertise: 'വിൻഡ്‌മിൽ പരിചയ വർഷങ്ങൾ',
        },
      },
            faq: {
        title: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
        items: {
          0: {
            q: 'വിൻഡ്‌മിൽ ഇൻസ്റ്റലേഷൻ ചെലവ് എത്ര?',
            a: 'സിസ്റ്റത്തിന്റെ വലിപ്പവും തരവും അനുസരിച്ച് ചെലവ് മാറും. വീടുകളിലെ ഇൻസ്റ്റലേഷൻ സാധാരണയായി $15,000-$50,000; വാണിജ്യ സിസ്റ്റങ്ങൾ $100,000+ വരെ ആകാം. കാറ്റുഊർജം കൂടുതൽ ലഭ്യമാക്കാൻ ഫൈനാൻസിംഗ് ഓപ്ഷനുകളും നൽകുന്നു.',
          },
          1: {
            q: 'ഇൻസ്റ്റലേഷൻക്ക് എത്ര സമയം എടുക്കും?',
            a: 'വീടുകളിലെ ഇൻസ്റ്റലേഷൻ സാധാരണയായി 2-4 ആഴ്ചകൾ എടുക്കും. വാണിജ്യ പ്രോജക്റ്റുകൾ 6-12 ആഴ്ചകൾ വരെ എടുക്കാം. നിങ്ങളുടെ പ്രവർത്തനങ്ങൾക്ക് കുറഞ്ഞ തടസ്സം ഉണ്ടാകുന്ന വിധം കാര്യക്ഷമമായി പ്രവർത്തിക്കുന്നു.',
          },
          2: {
            q: 'എന്ത് പരിപാലനം ആവശ്യമാണ്?',
            a: 'വിൻഡ്‌മില്ലുകൾക്ക് കുറഞ്ഞ പരിപാലനം മതി. വർഷത്തിലൊരിക്കൽ ഇൻസ്‌പെക്ഷനും അടിസ്ഥാന സർവീസിംഗും ശുപാർശ ചെയ്യുന്നു. ഞങ്ങളുടെ പ്ലാനുകളിൽ റെഗുലർ ചെക്ക്-അപ്പുകൾ, ബ്ലേഡ് ഇൻസ്‌പെക്ഷൻ, പ്രകടന ഓപ്റ്റിമൈസേഷൻ എന്നിവ ഉൾപ്പെടുന്നു.',
          },
          3: {
            q: 'ഊർജ ചെലവിൽ എത്ര ലാഭം ലഭിക്കും?',
            a: 'മിക്ക ഉപഭോക്താക്കളും വൈദ്യുതി ബില്ലിൽ 60-80% വരെ കുറവ് കാണുന്നു. ലാഭം സ്ഥലം, കാറ്റ് സാഹചര്യം, ഉപഭോഗം എന്നിവയിൽ ആശ്രയിക്കുന്നു. പല സിസ്റ്റങ്ങളും 5-7 വർഷത്തിനുള്ളിൽ ചെലവ് തിരിച്ചുപിടിക്കുന്നു.',
          },
          4: {
            q: 'എല്ലാ കാലാവസ്ഥയിലും വിൻഡ്‌മില്ലുകൾ പ്രവർത്തിക്കുമോ?',
            a: 'ആധുനിക വിൻഡ്‌മില്ലുകൾ വിവിധ കാലാവസ്ഥകളിൽ പ്രവർത്തിക്കാൻ രൂപകൽപ്പന ചെയ്തതാണ്. അതിയായി കാറ്റുള്ളപ്പോൾ നാശം ഒഴിവാക്കാൻ സ്വയം ഓഫ് ചെയ്യും; ലഘു കാറ്റിലും വൈദ്യുതി ഉൽപ്പാദിപ്പിക്കും. ഞങ്ങളുടെ സിസ്റ്റങ്ങൾ കടുത്ത കാലാവസ്ഥ താങ്ങാൻ നിർമ്മിച്ചതാണ്.',
          },
          5: {
            q: 'ഏത് പെർമിറ്റുകൾ വേണം?',
            a: 'ആവശ്യങ്ങൾ സ്ഥലത്തെ ആശ്രയിച്ചിരിക്കും. സോണിംഗ് അനുമതികൾ, ഇലക്ട്രിക്കൽ പെർമിറ്റുകൾ, പരിസ്ഥിതി വിലയിരുത്തൽ എന്നിവ ഉൾപ്പെടെ എല്ലാ പെർമിറ്റ് നടപടികളും ഞങ്ങൾ കൈകാര്യം ചെയ്യുന്നു.',
          },
        },
      },
    },
  },
};

const localeNames: Record<Locale, string> = {
  en: 'English',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ',
  dz: 'རྫོང་ཁ',
  te: 'తెలుగు',
  hi: 'हिन्दी',
  ml: 'മലയാളം',
};

function getByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export type I18nContextValue = {
  locale: Locale;
  localeName: string;
  localeNames: Record<Locale, string>;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && saved in messages) {
        setLocaleState(saved);
      }
    } catch {
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  };

  const value = useMemo<I18nContextValue>(() => {
    const active = messages[locale] ?? messages.en;
    const t = (key: string) => {
      const v = getByPath(active, key);
      if (typeof v === 'string') return v;
      const fallback = getByPath(messages.en, key);
      return typeof fallback === 'string' ? fallback : key;
    };

    return {
      locale,
      localeName: localeNames[locale],
      localeNames,
      setLocale,
      t,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return ctx;
}
