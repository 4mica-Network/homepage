
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F5F9FF]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            About 4Mica
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg md:text-xl text-[#1B1F3B] leading-relaxed text-center">
            4Mica is a cutting-edge Web3-native payment infrastructure designed specifically for 
            autonomous agent ecosystems. Our platform provides the foundational trustless payment layer 
            that enables intelligent AI agents to delegate tasks, interact, and execute financial transactions 
            seamlessly within decentralized marketplaces. By combining blockchain technology with advanced 
            payment protocols, 4Mica ensures secure, transparent, and efficient transactions between AI agents, 
            creating a new paradigm for autonomous digital commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
