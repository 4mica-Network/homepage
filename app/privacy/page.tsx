'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen pt-24 text-ink-body">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold text-ink-strong">Privacy Policy</h1>
            <p className="mt-3 text-sm text-ink-muted">Last updated: February 6, 2026</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <p>
                4Mica respects your privacy. This page explains what information we collect and how
                we use it.
              </p>
              <p>
                We collect minimal usage data to operate the site and improve reliability. If you
                connect a wallet, we may process your public wallet address and on-chain activity to
                provide the requested service.
              </p>
              <p>
                We do not sell your personal data. We share data only with service providers needed
                to run the site and with blockchain networks as required to process transactions.
              </p>
              <p>
                If you have questions, contact us at <span className="font-mono">mairon@4mica.xyz</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
