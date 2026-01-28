'use client';

import Link from 'next/link';

export default function DocsCalloutSection() {
  return (
    <section id="docs" className="py-16 section-gloss">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Docs</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#E7F1FF]">
                Start with tabs, ship in a day
              </h2>
              <p className="mt-4 text-lg text-[#C8D7F2] leading-relaxed">
                Quickstart, SDKs, and API endpoints for /tabs, /verify, and /settle
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/resources/technical-docs"
                  className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-center"
                >
                  Start Building
                </Link>
                <Link
                  href="/resources"
                  className="border border-white/15 text-[#C8D7F2] hover:text-white hover:border-white/40 px-6 py-3 rounded-full text-sm font-semibold transition-colors text-center"
                >
                  Browse Docs
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#050B1D] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7BCBFF]">
                Minimal flow
              </p>
              <div className="mt-4 space-y-2 text-sm text-[#C8D7F2]">
                <div className="flex items-center justify-between">
                  <span>Recipient: POST /tabs</span>
                  <span className="text-[#48C9B0]">open tab</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Agent: POST /settle</span>
                  <span className="text-[#48C9B0]">credit guarantee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Agent: payTabInERC20Token</span>
                  <span className="text-[#48C9B0]">T+7 days</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#6A7AA3]">
                SDKs: Rust, TypeScript, Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
