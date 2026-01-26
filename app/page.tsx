'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import DocsCalloutSection from '../components/DocsCalloutSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import CodeSamplesSection from '../components/CodeSamplesSection';
import UseCasesSection from '../components/UseCasesSection';
import SecuritySection from '../components/SecuritySection';
import CommunitySection from '../components/CommunitySection';
import FaqSection from '../components/FaqSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <DocsCalloutSection />
      <CodeSamplesSection />
      <UseCasesSection />
      <PartnersSection />
      <SecuritySection />
      <CommunitySection />
      <AboutSection />
      <ResourcesSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
