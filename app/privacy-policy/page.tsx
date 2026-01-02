import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-8" style={{color: '#395674'}}>
                Privacy Policy
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At SS Wind Tech, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Personal Information:</strong> Name, email address, phone number, company details when you contact us or request services.</p>
                  <p><strong>Technical Information:</strong> IP address, browser type, device information, and usage data for analytics purposes.</p>
                  <p><strong>Business Information:</strong> Company details, project requirements, and service preferences.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• To provide wind energy services and technical support</p>
                  <p>• To respond to inquiries and service requests</p>
                  <p>• To improve our website and services</p>
                  <p>• To send important updates and service information</p>
                  <p>• For analytics and website optimization</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. Your data is stored on secure servers and accessed only by authorized personnel.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Third-Party Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as required by law or necessary to provide our services. We may share information with trusted partners 
                  only when essential for service delivery.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong>Email:</strong> sswindtechindia@gmail.com</p>
                  <p><strong>Phone:</strong> +91 97507 24822, +91 80984 95864</p>
                  <p><strong>WhatsApp:</strong> +91 80984 95874</p>
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
