import AboutSection from '@/components/about/AboutSection';
import Hero from '@/components/hero/Hero';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Services from '@/components/about/Services';
import Testimonial from '@/components/about/Testimonial';
import FAQ from '@/components/about/FAQ';
import Footer from '@/components/about/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Services />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
