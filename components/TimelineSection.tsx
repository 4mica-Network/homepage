'use client';

export default function TimelineSection() {
  const milestones = [
    {
      quarter: 'Q3 2025',
      title: 'Alpha Launch',
      description: 'Initial platform release with core payment infrastructure for AI agent transactions'
    },
    {
      quarter: 'Q4 2025',
      title: 'Developer API',
      description: 'Comprehensive API suite for developers to integrate 4Mica into their AI agent marketplaces'
    },
    {
      quarter: 'Q1 2026',
      title: 'Smart Contract Deployment',
      description: 'Full smart contract implementation with multi-chain support and governance features'
    },
    {
      quarter: 'Q2 2026',
      title: 'Enterprise Integration',
      description: 'Enterprise-grade solutions with custom integrations for large-scale AI marketplaces'
    },
    {
      quarter: 'Q3 2026',
      title: 'Global Expansion',
      description: 'International rollout with compliance framework and regional partnership network'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F9FF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Product Roadmap
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-lg text-[#1B1F3B] max-w-2xl mx-auto">
            Our journey to revolutionize autonomous AI agent payments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1E4DD8] hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                  <div className={`bg-white rounded-lg p-6 shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <h3 className="text-2xl font-bold text-[#1B1F3B] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#1B1F3B] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#5C7CFA] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg hidden md:flex">
                  {index + 1}
                </div>
                
                <div className="md:w-1/2 md:px-8">
                  <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <span className="inline-block bg-[#1E4DD8] text-[#F0F4FF] px-4 py-2 rounded-full font-semibold">
                      {milestone.quarter}
                    </span>
                  </div>
                </div>
                
                <div className="md:hidden bg-[#5C7CFA] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mt-4">
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