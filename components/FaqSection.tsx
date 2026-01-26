'use client';

export default function FaqSection() {
  const faqs = [
    {
      question: 'What is a payment tab?',
      answer:
        'A tab is a credit line identified by tab_id. The recipient opens it, and req_id tracks each spend against the tab.',
    },
    {
      question: 'What is a payment guarantee?',
      answer:
        'A guarantee is a BLS-signed claim with tab_id, req_id, client, recipient, asset, amount, total_amount, timestamp, and a domain separator.',
    },
    {
      question: 'When can recipients claim collateral?',
      answer:
        'After the remuneration grace period (default 14 days) and before tab expiration (default 21 days). Claims outside that window revert.',
    },
    {
      question: 'When do users settle?',
      answer:
        'The product flow asks users to settle after 7 days. If they do not, the on-chain claim window opens at 14 days by default.',
    },
    {
      question: 'How do withdrawals work for users?',
      answer:
        'Users request a withdrawal, then finalize after the withdrawal grace period (default 22 days). A synchronization delay (default 6 hours) protects tabs opened near a withdrawal request.',
    },
    {
      question: 'Which assets are supported by default?',
      answer:
        'ETH, USDC, and USDT are supported. Stablecoin flows require USDC or USDT; other assets revert.',
    },
  ];

  return (
    <section id="faq" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mt-4">Common questions</h2>
          <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
            Defaults are pulled from Core4Mica contract parameters.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="glass-panel rounded-2xl p-6">
              <summary className="cursor-pointer text-base font-semibold text-[#E7F1FF]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-[#C8D7F2] leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
