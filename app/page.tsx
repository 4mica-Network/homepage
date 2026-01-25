'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import CodeSamplesSection from '../components/CodeSamplesSection';
import OpenSourceSection from '../components/OpenSourceSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CodeSamplesSection />
      <PartnersSection />
      <OpenSourceSection />
      <AboutSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
