'use client';

export default function SecuritySection() {
  const items = [
    'Non-custodial collateral stays in Core4Mica until settlement or claim',
    'Guarantees are BLS-signed with domain separation and versioned configs',
    'AccessManaged roles, Pausable, and ReentrancyGuard protect critical flows',
  ];

  return (
    <section id="security" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center max-w-6xl mx-auto">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Security model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mt-4">
              Plain UX, hard guarantees
            </h2>
            <p className="mt-6 text-lg text-[#C8D7F2] leading-relaxed">
              Keep funds on-chain and verify every claim before collateral moves
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#C8D7F2]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#7BCBFF]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
