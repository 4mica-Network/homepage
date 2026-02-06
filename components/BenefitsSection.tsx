'use client';

export default function BenefitsSection() {
  const benefits = [
    'Users spend now and settle after 7 days',
    'No prefunding or prepaid balances for customers',
    'Every charge is backed by on-chain collateral',
    'BLS-signed guarantees prevent replay and double spend',
    'Default assets: ETH, USDC, USDT with versioned guarantees',
  ];

  return (
    <section id="benefits" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center max-w-6xl mx-auto">
          <div>
            <p className="section-kicker">Benefits</p>
            <h2 className="section-title">
              Built for developers who ship fast
            </h2>
            <p className="section-lead">
              Start with plain UX. Add verifiable credit guarantees when you are ready.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink-body">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-teal" />
                  <span className="text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
