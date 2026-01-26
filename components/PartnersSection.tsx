'use client';

import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    { name: 'EigenCloud', logo: 'https://www.eigencloud.xyz/images/Eigen_Cloud_Logo.png' },
    { name: 'Aligned Layer', logo: '/assets/aligned_layer_logo.png' },
    { name: 'Ensemble', logo: '/assets/ensemble_logo.png' },
    { name: 'Vistara', logo: '/assets/Vistaara.jpeg' }
  ];
  const proofPoints = [
    {
      title: 'Open-source core',
      description: 'Contracts and SDKs are public on GitHub',
    },
    {
      title: 'Holesky live',
      description: 'Core4Mica contracts deployed for public testing',
    },
    {
      title: 'Non-custodial design',
      description: 'Collateral stays on-chain until settlement or claim',
    },
  ];

  return (
    <section className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF] mb-4">Powering</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-4">
            Our early partners
          </h2>
          <p className="text-lg text-[#C8D7F2] max-w-2xl mx-auto">
            Collaborators integrating payment tabs and credit-backed UX
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="glass-panel rounded-lg p-3 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#7BCBFF]/40"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={64}
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {proofPoints.map((point) => (
            <div key={point.title} className="glass-panel rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#E7F1FF]">{point.title}</h3>
              <p className="mt-3 text-sm text-[#C8D7F2] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            className="bg-[#1E4DD8] hover:bg-[#3CAEF5] text-[#F0F4FF] px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            onClick={() => {
              window.location.href = "mailto:mairon@4mica.xyz";
            }}
          >
            Build with us
          </button>
        </div>
      </div>
    </section>
  );
}
