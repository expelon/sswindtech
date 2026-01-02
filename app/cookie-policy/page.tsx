import Navbar from '@/components/hero/Navbar';
import Footer from '@/components/about/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-8" style={{color: '#395674'}}>
                Cookie Policy
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>What Are Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide better functionality, analyze website traffic, and personalize your experience.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>How We Use Cookies</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Essential Cookies:</strong> Required for basic website functionality and security.</p>
                  <p><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</p>
                  <p><strong>Functional Cookies:</strong> Remember your preferences and settings.</p>
                  <p><strong>Analytics Cookies:</strong> Help us improve our website by collecting anonymous usage data.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Types of Cookies We Use</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-semibold mb-2">Session Cookies</h3>
                    <p>Temporary cookies that expire when you close your browser. Used for navigation and basic functionality.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                    <p>Remain on your device for a set period or until you delete them. Used for remembering preferences.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Third-Party Cookies</h3>
                    <p>Cookies set by external services we use, such as analytics tools or social media plugins.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Managing Your Cookies</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Browser Settings:</strong> You can control cookies through your browser settings.</p>
                  <p><strong>Accept/Reject:</strong> You can choose to accept or reject non-essential cookies.</p>
                  <p><strong>Deleting Cookies:</strong> You can delete existing cookies from your browser at any time.</p>
                  <p><strong>Impact:</strong> Disabling certain cookies may affect website functionality.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Cookie Consent</h2>
                <p className="text-gray-600 leading-relaxed">
                  When you first visit our website, we'll display a cookie banner where you can:
                </p>
                <div className="space-y-2 text-gray-600 mt-4">
                  <p>• Accept all cookies</p>
                  <p>• Reject non-essential cookies</p>
                  <p>• Customize your cookie preferences</p>
                  <p>• Learn more about each type of cookie</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use third-party services that place their own cookies, including:
                </p>
                <div className="space-y-2 text-gray-600 mt-4">
                  <p><strong>Google Analytics:</strong> For website traffic analysis and improvement.</p>
                  <p><strong>Social Media:</strong> For social sharing functionality (when used).</p>
                  <p><strong>Business Tools:</strong> For contact forms and customer service features.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Transparency:</strong> We provide clear information about cookies we use.</p>
                  <p><strong>Control:</strong> You have the right to accept or reject cookies.</p>
                  <p><strong>Access:</strong> You can request information about data collected via cookies.</p>
                  <p><strong>Portability:</strong> You can request your data in a usable format.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. 
                  We'll notify you of significant changes by updating the "Last updated" date and, if necessary, 
                  through other communication channels.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#395674'}}>Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about our use of cookies, please contact us:
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
