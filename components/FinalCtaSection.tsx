'use client';

import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="py-24 section-gloss">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-10 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="section-title">
            Deposit once. Spend anywhere. Settle later.
          </h2>
          <p className="section-lead">
            Your collateral earns yield in Aave while your agents transact on credit — no prefunding, no gas per request.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/resources/technical-docs"
              className="btn btn-primary btn-lg text-center"
            >
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
