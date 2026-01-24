'use client';

export default function TimelineSection() {
  const milestones = [
    {
      quarter: 'Q2 2025',
      title: 'PoC Release',
      description: 'Initial proof of concept with basic transaction capabilities and single-chain support',
      done: true
    },
    {
      quarter: 'Q3 2025',
      title: 'Alpha Release',
      description: 'Alpha Release to Ethereum and Solana with credit capabilities for Agents and AVSs',
      done: true
    },
    {
      quarter: 'Q4 2025',
      title: 'Strategic Partnerships',
      description: 'Partnerships with AI platforms, AVSs, and DeFI companies to enhance ecosystem integration',
      done: true
    },
    {
      quarter: 'Q1 2026',
      title: 'Beta Release',
      description: 'Beta release to Ethereum and Solana and support for retail payments',
      done: false
    },
    {
      quarter: 'Q2 2026',
      title: 'Regularity Compliance',
      description: 'Achieving compliance with financial regulations and prepare for mainnet launch',
      done: false
    },
    {
      quarter: 'Q3 2026',
      title: 'Mainnet Launch',
      description: 'Full mainnet launch with multi-chain support, cross-chain credit, and off-ramping to fiat',
      done: false
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-6">
            Product Roadmap
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-lg text-[#C8D7F2] max-w-2xl mx-auto">
            Our journey to revolutionize web3 commerce
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#3CAEF5]/60 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                  <div className={`glass-panel rounded-lg p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <h3 className="text-2xl font-bold text-[#E7F1FF] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#C8D7F2] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm border-4 border-white/20 shadow-lg hidden md:flex ${
                    milestone.done ? 'bg-green-500' : 'bg-[#5C7CFA] text-white'
                  }`}
                >
                  {index + 1}
                </div>
                
                <div className="md:w-1/2 md:px-8">
                  <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <span className="inline-block bg-[#1E4DD8] text-[#F0F4FF] px-4 py-2 rounded-full font-semibold">
                      {milestone.quarter}
                    </span>
                  </div>
                </div>
                
                <div
                  className={`md:hidden rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mt-4 ${
                    milestone.done ? 'bg-green-500' : 'bg-[#5C7CFA] text-white'
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
