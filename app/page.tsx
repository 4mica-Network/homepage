'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DocsCalloutSection from '../components/DocsCalloutSection';
import PartnersSection from '../components/PartnersSection';
import CodeSamplesSection from '../components/CodeSamplesSection';
import SecuritySection from '../components/SecuritySection';
import FaqSection from '../components/FaqSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DocsCalloutSection />
      <PartnersSection />
      <CodeSamplesSection />
      <SecuritySection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
