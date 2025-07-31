'use client';

export default function PartnersSection() {
  const partners = [
    { name: 'TechCorp', logo: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20technology%20company%20logo%20design%20with%20geometric%20shapes%20and%20blue%20color%20scheme%2C%20clean%20corporate%20branding%2C%20vector%20style%20illustration%20on%20white%20background&width=200&height=100&seq=partner-logo-1&orientation=landscape' },
    { name: 'AI Dynamics', logo: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20company%20logo%20with%20neural%20network%20inspired%20design%2C%20blue%20and%20white%20color%20palette%2C%20professional%20corporate%20identity%2C%20minimalist%20vector%20illustration&width=200&height=100&seq=partner-logo-2&orientation=landscape' },
    { name: 'BlockChain Solutions', logo: 'https://readdy.ai/api/search-image?query=Blockchain%20technology%20company%20logo%20featuring%20interconnected%20nodes%20and%20blocks%2C%20modern%20blue%20gradient%20design%2C%20clean%20professional%20branding%20on%20white%20background&width=200&height=100&seq=partner-logo-3&orientation=landscape' },
    { name: 'CryptoVentures', logo: 'https://readdy.ai/api/search-image?query=Cryptocurrency%20and%20venture%20capital%20firm%20logo%20with%20diamond%20or%20gem%20motif%2C%20sophisticated%20blue%20and%20silver%20color%20scheme%2C%20premium%20corporate%20design&width=200&height=100&seq=partner-logo-4&orientation=landscape' },
    { name: 'Web3 Innovations', logo: 'https://readdy.ai/api/search-image?query=Web3%20and%20decentralized%20technology%20company%20logo%20with%20interconnected%20circles%20and%20modern%20typography%2C%20blue%20accent%20colors%2C%20clean%20minimalist%20design&width=200&height=100&seq=partner-logo-5&orientation=landscape' },
    { name: 'Smart Agents Inc', logo: 'https://readdy.ai/api/search-image?query=Smart%20AI%20agent%20technology%20company%20logo%20with%20robotic%20or%20digital%20assistant%20theme%2C%20blue%20and%20white%20professional%20design%2C%20modern%20corporate%20branding&width=200&height=100&seq=partner-logo-6&orientation=landscape' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Our Partners and Collabolators
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-[#F5F9FF] rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-[#5C7CFA]/30"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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