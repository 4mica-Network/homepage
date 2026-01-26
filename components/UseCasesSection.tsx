'use client';

export default function UseCasesSection() {
  const useCases = [
    {
      title: 'API monetization',
      description: 'Meter requests in real time and settle after 7 days without prepaid balances.',
    },
    {
      title: 'Infra and AVS compute',
      description: 'Let builders run workloads now and pay later with verifiable guarantees.',
    },
    {
      title: 'Agentic commerce',
      description: 'Wallets and agents can transact instantly while collateral backs every spend.',
    },
  ];

  return (
    <section id="use-cases" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Use cases</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mt-4">
            Built for developer-first products
          </h2>
          <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
            Drop tabs into any flow where usage is real time and settlement can wait.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#E7F1FF]">{useCase.title}</h3>
              <p className="mt-3 text-sm text-[#C8D7F2] leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
