'use client';

import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="py-24 section-gloss">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-10 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="section-title">
            Ready to build with payment tabs?
          </h2>
          <p className="section-lead">
            Start building or join the community and help define the standard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/resources/technical-docs"
              className="btn btn-primary btn-lg text-center"
            >
              Start Building
            </Link>
            <Link
              href="https://discord.gg/bb8Pn5qX"
              className="btn btn-outline btn-lg text-center"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
