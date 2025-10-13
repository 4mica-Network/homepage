'use client';

import Image from 'next/image';

export default function PartnersSection() {
  const partners = [
    { name: 'EigenCloud', logo: 'https://www.eigencloud.xyz/images/Eigen_Cloud_Logo.png' },
    { name: 'Aligned Layer', logo: '/assets/aligned_layer_logo.png' },
    { name: 'Ensemble', logo: '/assets/ensemble_logo.png' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Partners and Technical Collaborators
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-[#F5F9FF] rounded-lg p-3 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-[#5C7CFA]/30"
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
        
        <div className="text-center">
          <button
            className="bg-[#1E4DD8] hover:bg-[#3CAEF5] text-[#F0F4FF] px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            onClick={() => {
              window.location.href = "mailto:akash@4mica.xyz";
            }}
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
