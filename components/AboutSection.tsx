
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
            4Mica is a lightweight overlay that enables services to extend cryptographically backed lines of credit across any blockchain, from Bitcoin and Ethereum to Solana and beyond. Acting as a credit layer for instant, low-friction settlements and built on guaranteed fair exchange, 4Mica fixes Web3’s inefficient pre-funded model. In short, 4Mica makes programmable credit accessible to all.
          </p>
        </div>
      </div>
    </section>
  );
}
