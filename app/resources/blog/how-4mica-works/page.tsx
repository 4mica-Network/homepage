import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How 4Mica Works | 4Mica Blog',
  description:
    'A deep dive into 4Mica&rsquo;s cryptographic credit primitive, covering the problem it solves, the core components, security model, and real-world use cases.',
};

export default function How4MicaWorksPage() {
  const sections = [
    {
      heading: 'Executive Summary',
      paragraphs: [
        'Web3 payments still feel like a cash-only economy: every interaction must be prefunded, assets sit idle, and settlement latency erodes UX. 4Mica changes that by introducing a cryptographic payment tab, a non-custodial line of credit that lets users consume services instantly while settlement happens later. Collateral lives in yield-bearing vaults, operators issue guarantees within milliseconds, and service providers (the lenders) receive fair-exchange promises they can redeem on-chain if a user walks away. The result is Visa-like speed backed by immutable settlement.', 
        'Instead of forcing builders to choose between UX and decentralisation, 4Mica fuses both: deposits never leave a vault, recipients hold a BLS-signed guarantee, and the protocol coordinates the flow of credit without touching the happy-path settlement. When a borrower settles, the tab resets; if they do not, the guarantee becomes an enforceable claim against the locked collateral. That simple feedback loop is the payment primitive Web3 has been missing.',
      ],
    },
    {
      heading: 'Why Prefunded Payments Fail',
      paragraphs: [
        'Public chains earned their resilience by sacrificing throughput. Bitcoin finalises every 10 minutes, Ethereum roughly every 12 seconds, and even fast L2s choke under bursty demand. Meanwhile, mainstream finance hides settlement behind trusted credit rails. You swipe a card, the merchant sees an instant “approved,” and the banks square up later. Web3 has the opposite trade-off: no background trust, but also no workable concept of credit.',
        'That gap creates a double tax: capital must be warehoused inside hot wallets, and the UX of fund before you act turns small interactions into chores. 4Mica asks a straightforward question: can we bring the convenience of credit to a zero-trust environment without introducing custodial chokepoints? The answer is yes, if we bind access to yield-bearing collateral and combine threshold signatures with programmable settlement windows.',
      ],
    },
    {
      heading: 'Core Components',
      paragraphs: [
        '4Mica revolves around four collaborating roles:',
        'Borrower: any user, agent, or automation that needs to consume a service on credit. Borrowers post collateral into a Vault and receive a spending limit derived from that position.',
        'Vault: a non-custodial contract where collateral earns yield instead of gathering dust. Vaults expose hooks for both deposits and make-whole payouts.',
        'Lender: the service provider. It could be an AVS verifier, an agentic marketplace, a merchant, or any counterparty willing to accept a guarantee for work performed.',
        '4Mica Network: a decentralised operator set (an AVS in upcoming releases) that watches Vault events, tracks borrower balances, and issues aggregated guarantees when new requests arrive. The network never handles settlement funds; it only certifies that the Vault backs the tab.',
      ],
      listType: 'unordered',
    },
    {
      heading: 'Lifecycle of a Cryptographic Tab',
      paragraphs: [
        'A tab begins when a borrower deposits collateral. The Vault records that state, and the 4Mica network indexes it in real time. From there:',
      ],
      steps: [
        'Service request: the borrower asks a lender for work (e.g. verifying a proof, providing compute, or delivering content).',
        'Guarantee issuance: the lender pings 4Mica. Operators check that the borrower&rsquo;s credit headroom exists, then co-sign a BLS guarantee containing borrower, lender, tab ID, amount, and timestamps.',
        'Instant delivery: the lender serves the request immediately because the guarantee is redeemable on-chain.',
        'Settlement: the borrower pays on-chain, closing the tab; or the lender redeems the guarantee after a configurable grace period, triggering an automated withdrawal from the Vault.',
      ],
      paragraphsAfter: [
        'Because each guarantee is bound to a unique request and tab ID, it cannot be replayed. Collateral remains productive during the entire flow, which means builders can underwrite thousands of micro-payments from a single deposit.',
      ],
    },
    {
      heading: 'Security Principles',
      paragraphs: [
        'The protocols security target is simple: if 4Mica issued a guarantee, the recipient must be able to get paid. Achieving that requires several layers working together:',
      ],
      bullets: [
        'Operator honesty: 4Mica inherits Ethereums restaked security. As long as two-thirds of operators are honest, adversaries cannot forge a valid aggregated signature.',
        'Finality awareness: guarantees respect the finality windows of the base chain. Collateral cannot be withdrawn before remuneration windows close, preventing race conditions.',
        'Strict validation: the Core4Mica contract refuses to pay if a tab is expired, already settled, or mismatched with collateral. Custom errors make failure modes explicit.',
        'Open verification: guarantees are public and independently checkable. Anyone can verify the signature and claims, which keeps dispute resolution transparent.',
      ],
      paragraphsAfter: [
        'Together, these measures let builders rely on cryptographic enforcement instead of wrapped trust. If a borrower defaults, the Vault pays out deterministically; if the borrower behaves, their capital never stops earning yield.',
      ],
    },
    {
      heading: 'Where 4Mica Lands First',
      paragraphs: [
        'Speed unlocks new business models, so the earliest adopters are categories where prefunding is especially painful:',
      ],
      bullets: [
        'Off-chain compute and ZK verification: partners such as Aligned Layer can verify proofs for pennies, but on-chain settlement would otherwise cost more than the work performed. A 4Mica guarantee keeps verification instant without degrading UX.',
        'Agentic marketplaces: autonomous agents often need to call APIs hundreds of times per session. 4Mica lets an agent present a guarantee, consume resources, and settle in batches; exactly the behaviour envisaged in standards like x402.',
        'Retail pilots: think “open a tab” for real-world merchants. Users keep funds in a yield vault, merchants receive instant guarantees, and regulatory-compliant off-ramps clear the tab on schedule.',
        'Gaming: free players can try a game without preloading tokens. In-game purchases, rentals, and time-based unlocks can be streamed against the tab.',
      ],
    },
    {
      heading: 'Implementation Notes',
      paragraphs: [
        'The MVP ships as an open, modular protocol. Developers integrate by depositing into the Vault, requesting guarantees via the facilitator API (moving to decentralised operators as EigenLayer-based infrastructure matures), and monitoring settlement or remuneration events. Collateral locks, guarantees, and redemptions are all auditable on-chain. Documentation lives at docs.4mica.xyz, and the core contracts are open-sourced at github.com/4mica-Network/4mica-core.',
      ],
    },
    {
      heading: 'The Bigger Picture',
      paragraphs: [
        'Web3 will not become the backbone of global commerce if every tap feels like sending a bank wire. 4Mica is the pragmatic middle ground: it keeps decentralised security, leverages cryptography instead of trust, and shortens the path from intent to action. Borrowers enjoy capital efficiency; lenders gain deterministic protection; ecosystems finally get a payment primitive that scales with demand.',
        'In other words, 4Mica is the shopkeepers tab rebuilt for blockchains. It turns moment-to-moment interactions into an instant and recoverable flow, fast enough for modern UX, secure enough for decentralised settlement, and flexible enough to integrate wherever builders need credit to unlock adoption.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 text-[#C8D7F2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-wide text-[#3CAEF5]">Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-4">
            How 4Mica Works: Cryptographic Credit for Web3
          </h1>
          <p className="text-sm text-[#9CB7E8]">Published January 15, 2025 · 7 min read · By Mairon</p>
        </header>

        <article className="glass-panel rounded-2xl p-8 space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E7F1FF]">{section.heading}</h2>
              {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-[#C8D7F2]">
                  {paragraph}
                </p>
              ))}

              {section.steps && (
                <ol className="list-decimal list-inside space-y-2 text-[#C8D7F2]">
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}

              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-[#C8D7F2]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.paragraphsAfter && section.paragraphsAfter.map((paragraph, idx) => (
                <p key={`after-${idx}`} className="leading-relaxed text-[#C8D7F2]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        <footer className="mt-12 flex items-center justify-between text-sm text-[#9CB7E8] flex-col md:flex-row gap-4">
          <Link
            href="/resources/blog"
            className="text-[#7BCBFF] hover:text-[#A3FFD6] transition-colors cursor-pointer whitespace-nowrap"
          >
            ← Back to Blog
          </Link>
          <span>Last updated: September 2025</span>
        </footer>
      </div>
    </div>
  );
}
