import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TimelineSection from '../../components/TimelineSection';

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7BCBFF]">Company</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E7F1FF] mt-4">Roadmap</h1>
            <p className="text-lg text-[#C8D7F2] leading-relaxed mt-6">
              A transparent view into how we deliver credit-backed payment rails for web3 commerce.
            </p>
          </div>
        </section>
        <TimelineSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
}
