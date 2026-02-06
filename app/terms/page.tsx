'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen pt-24 text-ink-body">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold text-ink-strong">Terms of Service</h1>
            <p className="mt-3 text-sm text-ink-muted">Last updated: February 6, 2026</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <p>
                By using 4Mica, you agree to these terms. If you do not agree, do not use the
                service.
              </p>
              <p>
                4Mica provides software and interfaces to interact with blockchain networks. You
                are responsible for your wallet security, transaction approvals, and compliance
                with applicable laws.
              </p>
              <p>
                The service is provided “as is” without warranties of any kind. We are not liable
                for losses arising from blockchain transactions or third-party services.
              </p>
              <p>
                Questions? Contact us at <span className="font-mono">mairon@4mica.xyz</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
