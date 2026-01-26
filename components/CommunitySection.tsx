'use client';

import Link from 'next/link';

const discordUrl = 'https://discord.gg/bb8Pn5qX';
const githubUrl = 'https://github.com/4mica-Network/4mica-core/';
const communityUrl = 'https://discord.gg/bb8Pn5qX';

export default function CommunitySection() {
  const hooks = [
    {
      label: 'Join the Discord',
      href: discordUrl,
    },
    {
      label: 'Star on GitHub',
      href: githubUrl,
    },
    {
      label: 'Build with us',
      href: githubUrl,
    },
    {
      label: 'Request early access',
      href: 'mailto:mairon@4mica.xyz?subject=Early%20Access%20Request&body=Hi%204Mica%20team,%20I%20would%20like%20early%20access.',
    },
  ];

  return (
    <section id="community" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center max-w-6xl mx-auto">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Community</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mt-4">
              Build the payment tab standard
            </h2>
            <p className="mt-6 text-lg text-[#C8D7F2] leading-relaxed">
              We are building in public with developers who ship infra. Join the discussion, open issues, and help shape the
              protocol.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={communityUrl}
                className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-center"
              >
                Join Community
              </Link>
              <Link
                href="/resources/technical-docs"
                className="border border-white/15 text-[#C8D7F2] hover:text-white hover:border-white/40 px-6 py-3 rounded-full text-sm font-semibold transition-colors text-center"
              >
                Start Building
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {hooks.map((hook) => (
              <Link
                key={hook.label}
                href={hook.href}
                className="glass-panel rounded-2xl px-5 py-4 text-sm font-semibold text-[#E7F1FF] hover:text-white transition-colors"
              >
                {hook.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
