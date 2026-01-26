'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Recipient opens a tab',
      description: 'Create a tab_id with asset and limits for a user',
    },
    {
      step: '02',
      title: 'User spends on credit',
      description: 'Users sign guarantees per request with no prefunding',
    },
    {
      step: '03',
      title: 'User settles after 7 days',
      description:
        'Settle later, or claim collateral after the on-chain grace period',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mt-4">
            Three steps to instant spend
          </h2>
          <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
            Plain flow first, cryptographic guarantees underneath
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="glass-panel rounded-2xl p-6">
              <div className="text-sm font-semibold text-[#7BCBFF]">{step.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#E7F1FF]">{step.title}</h3>
              <p className="mt-3 text-sm text-[#C8D7F2] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
