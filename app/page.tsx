'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import TimelineSection from '../components/TimelineSection';
import TeamSection from '../components/TeamSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <TimelineSection />
      <TeamSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}