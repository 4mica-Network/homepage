import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const highlights = [
    {
      title: 'Credit-backed UX',
      description: 'Issue cryptographic tabs so users can pay instantly without prefunding each call.',
    },
    {
      title: 'Guaranteed settlement',
      description: 'BLS guarantees and enforceable claims keep every tab auditable and recoverable.',
    },
    {
      title: 'Cross-chain ready',
      description: 'Support Ethereum, Solana, and emerging rollups with the same credit rails.',
    },
    {
      title: 'Built for production',
      description: 'SDKs, clear failure modes, and operational tooling from day one.',
    },
  ];

  const companyInfo = [
    { label: 'Focus', value: 'Credit-backed payment rails' },
    { label: 'Core product', value: 'Tabs, guarantees, settlement APIs' },
    { label: 'Integrations', value: 'SDKs, x402 facilitator, on-chain contracts' },
    { label: 'Status', value: 'Production-ready pilot deployments' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Company</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E7F1FF] mt-4">
              4Mica Mission
            </h1>
            <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
              4Mica is a lightweight overlay that enables services to extend cryptographically backed lines of credit across any
              blockchain. Acting as a credit layer for instant, low-friction settlements and guaranteed fair exchange, 4Mica fixes
              Web3&apos;s inefficient pre-funded model and makes programmable credit accessible to all.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="glass-panel rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-[#E7F1FF]">{highlight.title}</h3>
                  <p className="mt-2 text-xs text-[#9CB7E8] leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-[#E7F1FF]">Company Info</h2>
              <div className="mt-6 space-y-4 text-sm text-[#C8D7F2]">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[#9CB7E8]">{item.label}</span>
                    <span className="text-right">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/leadership" className="text-sm font-semibold text-[#7BCBFF] inline-flex items-center">
                  Meet the team
                  <i className="ri-arrow-right-line ml-2 text-base"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
