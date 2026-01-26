import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Company</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E7F1FF] mt-4">Careers</h1>
            <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
              At the moment we are not hiring, but we welcome contributions and collaboration with
              builders who care about instant, on-chain commerce.
            </p>
          </div>

          <div className="mt-12 max-w-3xl glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#E7F1FF]">Let&apos;s chat</h2>
            <p className="mt-3 text-sm text-[#C8D7F2] leading-relaxed">
              If you want to contribute, share research, or explore a partnership, reach out and
              we&apos;ll get back quickly.
            </p>
            <a
              href="mailto:mairon@4mica.xyz"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E4DD8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3CAEF5]"
            >
              Chat with us
              <i className="ri-chat-3-line text-base"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
