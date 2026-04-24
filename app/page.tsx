import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import CoffeeExperience from '@/components/CoffeeExperience';
import StatsSection from '@/components/StatsSection';
import TrustedBySection from '@/components/TrustedBySection';
import AboutSection from '@/components/AboutSection';
import BottomNav from '@/components/BottomNav';

// Lazy-load heavy below-fold sections for faster initial page load
const SourcingMapSection = dynamic(() => import('@/components/SourcingMapSection'));
const CeremonySection = dynamic(() => import('@/components/CeremonySection'));
const HeritageSection = dynamic(() => import('@/components/HeritageSection'));
const SustainabilitySection = dynamic(() => import('@/components/SustainabilitySection'));
const ProductsSection = dynamic(() => import('@/components/ProductsSection'));

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer'));
const LeadToast = dynamic(() => import('@/components/LeadToast'));

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F4]">
      <Navbar />
      <CoffeeExperience />
      <TrustedBySection />
      <AboutSection />
      <SourcingMapSection />
      <CeremonySection />
      <HeritageSection />
      <LeadToast />
      <SustainabilitySection />
      <StatsSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <BottomNav />
    </main>
  );
}
