
'use client';

export default function HeroSection() {
  const handleGetStarted = () => {
    const docsSection = document.querySelector('#docs');
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinCommunity = () => {
    const communitySection = document.querySelector('#community');
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      title: 'Non-custodial collateral',
      description: 'Funds stay on-chain with the user until settlement.',
    },
    {
      title: 'BLS-backed guarantees',
      description: 'Cryptographic proofs for each spend request.',
    },
    {
      title: 'Settle after 7 days',
      description: 'Users pay later without prefunding balances.',
    },
    {
      title: 'ETH, USDC, USDT',
      description: 'Default assets with versioned guarantees.',
    },
  ];

  const heroContent = (
    <div className="relative z-10 w-full">
      <div className="container mx-auto px-6 pt-24 pb-24 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-1">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-[#F2F4F8] leading-tight tracking-tight">
              Instant credit tabs on any chain
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#D7E4FF]/80 max-w-2xl leading-relaxed">
              Open a tab, let users spend now, then settle after 7 days with non-custodial, collateral-backed guarantees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Start Building
              </button>
              <button
                onClick={handleJoinCommunity}
                className="border-2 border-[#48C9B0] text-[#48C9B0] hover:bg-[#48C9B0]/10 hover:border-[#A3FFD6] hover:text-[#A3FFD6] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm"
              >
                Join Community
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="glass-panel rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#E7F1FF]">{highlight.title}</p>
                  <p className="mt-2 text-xs text-[#9CB7E8] leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const scrollIndicator = (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F2F4F8]/60">
      <span className="text-sm mb-2 font-medium">Explore the platform</span>
      <div className="w-6 h-10 border-2 border-[#48C9B0]/60 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-[#48C9B0] rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen section-gloss">
      {heroContent}
      {scrollIndicator}
    </section>
  );
}
