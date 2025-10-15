
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
            4Mica is a lightweight overlay service that enables any service to extend cryptographically-backed lines-of-credit across any 
            blockchain; Bitcoin, Ethereum, Solana, and beyond. 4Mica is designed to fix web3's inefficient pre-funded model, acting as a credit layer for instant and inexpensive settlements, backed by guaranteed fair-exchange. 
            4Mica makes programmable credit accessible to everyone. 
          </p>
        </div>
      </div>
    </section>
  );
}
