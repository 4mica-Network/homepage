
'use client';

import Link from 'next/link';

export default function AboutSection() {
  const aboutCards = [
    {
      title: '4Mica Mission',
      description: 'Mission, product focus, and how 4Mica unlocks credit-backed payments',
      href: '/about',
    },
    {
      title: 'Team',
      description: 'Meet the founders building the payment layer for instant commerce',
      href: '/leadership',
    },
    {
      title: 'Roadmap',
      description: 'Track delivery milestones for the credit layer and network rollout',
      href: '/roadmap',
    },
  ];

  return (
    <section id="about" className="py-24 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-kicker">About Us</p>
          <h2 className="section-title">
            The credit layer for instant, on-chain commerce
          </h2>
          <p className="section-lead">
            4Mica issues cryptographic payment tabs that keep capital productive while delivering real-time UX. We help teams
            monetize APIs, AVS services, and on-chain commerce without forcing users to pre-fund every request.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {aboutCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <h3 className="text-xl font-semibold text-ink-strong">{card.title}</h3>
              <p className="text-sm text-ink-body leading-relaxed mt-3">{card.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold link-accent">
                Learn more
                <i className="ri-arrow-right-line ml-2 text-base"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
