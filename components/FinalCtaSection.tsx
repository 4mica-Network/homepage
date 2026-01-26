'use client';

import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="py-24 section-gloss">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-10 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF]">
            Ready to build with payment tabs?
          </h2>
          <p className="mt-4 text-lg text-[#C8D7F2] leading-relaxed">
            Start building or join the community and help define the standard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/resources/technical-docs"
              className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center"
            >
              Start Building
            </Link>
            <Link
              href="https://discord.gg/bb8Pn5qX"
              className="border-2 border-[#48C9B0] text-[#48C9B0] hover:bg-[#48C9B0]/10 hover:border-[#A3FFD6] hover:text-[#A3FFD6] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
