import type { Metadata } from 'next';
import Link from 'next/link';
import CodeTabs from '../CodeTabs';

export const metadata: Metadata = {
  title: 'Getting Paid with 4Mica',
  description:
    'A deep dive into the 4Mica credit flow, x402 integration, and settlement paths',
};

export default function How4MicaWorksPage() {
  const inlineCodeClass =
    'rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[#E3B56A]';
  const renderInlineCode = (text: string) => {
    const parts = text.split('`');
    if (parts.length === 1) {
      return text;
    }

    return (
      <>
        {parts.map((part, idx) =>
          idx % 2 === 1 ? (
            <code
              key={`code-${idx}`}
              className={inlineCodeClass}
            >
              {part}
            </code>
          ) : (
            <span key={`text-${idx}`}>{part}</span>
          ),
        )}
      </>
    );
  };

  const renderInlineCodeOrNode = (value: React.ReactNode) =>
    typeof value === 'string' ? renderInlineCode(value) : value;

  const sections = [
    {
      heading: 'Executive Summary',
      paragraphs: [
        '4Mica is a cryptographic credit system for web3. It lets a payer consume a service immediately while settlement happens later. Recipients get a guarantee that is enforceable on-chain if the payer defaults. Payers keep collateral productive in the vault, earning yield and giving credit to the payers; recipients get payout protection.',
        'This post explains how to accept payments using 4Mica, and how each possible scenario is handled (happy path, default path, and optional exact/debit fallback).',
      ],
    },
    {
      heading: 'System Map: Who Does What',
      paragraphs: [
        'A 4Mica transaction is a choreography between five actors:',
      ],
      bullets: [
        <>
          <strong>Payer (AI agents, users):</strong> Have collateral in the vault which backs their credit, settle the credits after 7 days. Earn yield on the credit.
        </>,
        <>
          <strong>Recipient (resource server):</strong> serves protected APIs that require payments. Responsible for configurating the tabs (ttl, asset), verify user credit, ask for credit guarantees, and in case of defaults, initiate the settlement process.
        </>,
        <>
          <strong>Facilitator:</strong> This is any x402 facilitator, integrated with 4Mica. Responsible for providing payment information for the 4Mica credit flow.
        </>,
        <>
          <strong>4Mica Operators:</strong> Where the magic happens. Minting tabs, issuing guarantees, and managing the overall credit flow.
        </>,
        <>
          <strong>Vault:</strong> Where agents deposit collateral to back their credit. They hold the custody, and can withdraw it at any time within a 22-day window. There are conditions to make sure the withdrawn collateral is not used to back any unpaid credit.
        </>,
      ],
    },
    {
      heading: 'x402 Primer: HTTP 402 + Payment Requirements',
      paragraphs: [
        'x402 is an open, HTTP-native payment standard. It activates HTTP 402 Payment Required so a resource can advertise how it wants to be paid, then lets the client retry the same request with a payment header.',
        'In the 4Mica credit flow, the x402 scheme string is `4mica-credit` and the client sends an `X-PAYMENT` header (a base64 JSON envelope with `x402Version: 1`). The resource server delegates verification and settlement to the x402-4mica facilitator.',
      ],
      bullets: [
        '402 responses advertise `scheme`, `network`, `payTo`, `asset`, `maxAmountRequired`, and `extra.tabEndpoint`.',
        'Clients retry with `X-PAYMENT`; resources call `/verify` for structural checks and `/settle` to obtain a certificate.',
        'If the header is missing or invalid, return 402 again with the same requirements and an actionable error.',
      ],
    },
    {
      heading: 'Concept Glossary',
      paragraphs: [
        'Here are the key primitives you will see across the docs and SDKs:',
      ],
      bullets: [
        <>
          <strong>Tab:</strong> Line of credit between payer and recipient for a specific asset.
        </>,
        <>
          <strong>paymentRequirements:</strong> the x402 payload the recipient advertises in a 402
          response (<code className={inlineCodeClass}>scheme</code>,{' '}
          <code className={inlineCodeClass}>network</code>,{' '}
          <code className={inlineCodeClass}>payTo</code>,{' '}
          <code className={inlineCodeClass}>asset</code>,{' '}
          <code className={inlineCodeClass}>maxAmountRequired</code>).
        </>,
        <>
          <strong>tabEndpoint:</strong> a recipient-owned endpoint listed in{' '}
          <code className={inlineCodeClass}>paymentRequirements.extra.tabEndpoint</code>. The payer
          calls it to bind requirements to a wallet and receive a tab.
        </>,
        <>
          <strong>PaymentGuaranteeRequestClaims:</strong> the signed request from the payer (
          <code className={inlineCodeClass}>tab_id</code>,{' '}
          <code className={inlineCodeClass}>recipient</code>,{' '}
          <code className={inlineCodeClass}>asset</code>,{' '}
          <code className={inlineCodeClass}>amount</code>,{' '}
          <code className={inlineCodeClass}>timestamp</code>).
        </>,
        <>
          <strong>X-PAYMENT:</strong> the base64 header wrapping the signed claims. Recipients pass
          it to <code className={inlineCodeClass}>/verify</code> and{' '}
          <code className={inlineCodeClass}>/settle</code>.
        </>,
        <>
          <strong>PaymentGuaranteeClaims:</strong> the upgraded claims produced by core. It adds{' '}
          <code className={inlineCodeClass}>domain</code>,{' '}
          <code className={inlineCodeClass}>version</code>,{' '}
          <code className={inlineCodeClass}>req_id</code>, and{' '}
          <code className={inlineCodeClass}>total_amount</code>.
        </>,
        <>
          <strong>Certificate:</strong> the signature over{' '}
          <code className={inlineCodeClass}>PaymentGuaranteeClaims</code> returned by{' '}
          <code className={inlineCodeClass}>/settle</code>. This the cryptographic proof of the credit, and verifying it means you will get paid after a period of 14 days. If the user defaults, the recipient should use a certificate to get paid within 7 days.
        </>,
        <>
          <strong>Grace periods:</strong> User have 7 days after the close of tabs to settle the amount via sdk. If user fails to settle, recipient can remunerate after 14 days. Recipient have 7 days to do so. 
        </>,
      ],
    },
    {
      heading: 'SDK Installation',
      paragraphs: [
        'Pick the SDK that matches your stack. Source repos: `~/4mica-core/sdk`, `~/py-sdk-4mica`, `~/ts-sdk-4mica`.',
      ],
      codeBlocks: [
        {
          language: 'bash',
          label: 'Rust',
          code: String.raw`cargo add rust-sdk-4mica

# Cargo.toml
rust-sdk-4mica = "0.4.0"`,
        },
        {
          language: 'bash',
          label: 'Python',
          code: "pip install 'sdk-4mica[bls]'",
        },
        {
          language: 'bash',
          label: 'TypeScript',
          code: 'npm i sdk-4mica',
        },
      ],
    },
    {
      heading: 'Return 402 Payment Required',
      paragraphs: [
        'When a request arrives without a valid `X-PAYMENT` header, respond with HTTP 402 and include `paymentRequirements` so the client can request a tab and retry.',
        'The requirements must match what you will later verify: the amount must equal `maxAmountRequired`, and `scheme`, `network`, `payTo`, and `asset` must match the tab you issue.',
      ],
      codeBlocks: [
        {
          language: 'http',
          caption: '402 response (template requirements + tabEndpoint)',
          code: String.raw`HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "paymentRequirements": {
    "scheme": "4mica-credit",
    "network": "polygon-amoy",
    "maxAmountRequired": "100",
    "resource": "/v1/report",
    "description": "Generate report",
    "mimeType": "application/json",
    "payTo": "0xRecipientAddress",
    "maxTimeoutSeconds": 300,
    "asset": "0xAssetAddress",
    "extra": {
      // recipient-owned endpoint for tab management
      "tabEndpoint": "https://your.api.example.com/x402/tab"
    }
  }
}`,
        },
      ],
    },
    {
      heading: 'Handle User Requests (Recipient Logic)',
      steps: [
        'If `X-PAYMENT` is missing, return 402 with `paymentRequirements` and `extra.tabEndpoint`.',
        'If present, call `/verify` with `{ x402Version, paymentHeader, paymentRequirements }`.',
        'If `/verify` returns invalid, return 402 again (optionally with the invalidReason).',
        'If valid, call `/settle` to mint a certificate once you are ready to accept credit.',
        'Persist the certificate, then serve the protected response immediately. You can also fetch all your certificates later if needed.',
      ],
      paragraphsAfter: [
        'Only `/settle` touches the 4Mica core to issue a BLS certificate. `/verify` is purely structural and is safe to use as a preflight check before doing any expensive work.',
      ],
    },
    {
      heading: 'Integrate 4Mica with Code Samples',
      paragraphs: [
        'Recipients expose a `tabEndpoint` that calls the facilitator `/tabs` to open or reuse a tab for the user, then return those details to the client.',
        'Clients use the SDK to sign the payment guarantee and produce the `X-PAYMENT` header used to retry the request.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Recipient tabEndpoint (Next.js/Fetch style)',
          code: String.raw`const FACILITATOR_URL =
  process.env.X402_FACILITATOR_URL ?? "https://x402.4mica.xyz";

export async function POST(req: Request) {
  const { userAddress, paymentRequirements } = await req.json();
  const { payTo, asset, extra } = paymentRequirements;

  const tabRes = await fetch(\`\${FACILITATOR_URL}/tabs\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userAddress,
      recipientAddress: payTo,
      erc20Token: asset,
      ttlSeconds: 3600,
    }),
  });

  if (!tabRes.ok) {
    return new Response("Unable to create tab", { status: 502 });
  }

  const tab = await tabRes.json();

  return Response.json({
    paymentRequirements: {
      ...paymentRequirements,
      extra: {
        ...extra,
        tabId: tab.tabId,
        tabEndpoint: "https://api.example.com/x402/tab",
      },
    },
    tab,
  });
}`,
        },
        {
          language: 'rust',
          caption: 'Client signs X-PAYMENT with rust-sdk-4mica',
          code: String.raw`use rust_sdk_4mica::{Client, ConfigBuilder, X402Flow};
use rust_sdk_4mica::x402::PaymentRequirements;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let payer = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    )
    .await?;

    let flow = X402Flow::new(payer)?;
    let requirements: PaymentRequirements =
        serde_json::from_value(tab_response["paymentRequirements"].clone())?;

    let signed = flow
        .sign_payment(requirements, "0xUserAddress".to_string())
        .await?;

    let x_payment_header = signed.header; // send as X-PAYMENT
    Ok(())
}`,
        },
        {
          language: 'python',
          caption: 'Client signs X-PAYMENT with sdk-4mica (Python)',
          code: String.raw`import asyncio
from fourmica_sdk import Client, ConfigBuilder, PaymentRequirements, X402Flow

payer_key = "0x..."    # wallet private key
user_address = "0x..." # address to embed in the claims

async def main():
    cfg = ConfigBuilder().wallet_private_key(payer_key).rpc_url("https://api.4mica.xyz/").build()
    client = await Client.new(cfg)
    flow = X402Flow.from_client(client)

    # Fetch the recipient's paymentRequirements (must include extra.tabEndpoint)
    req_raw = fetch_requirements_somehow()[0]
    requirements = PaymentRequirements.from_raw(req_raw)

    payment = await flow.sign_payment(requirements, user_address)
    headers = {"X-PAYMENT": payment.header}  # base64 string to send with the retry

    await client.aclose()

asyncio.run(main())`,
        },
      ],
    },
    {
      heading: 'Minimal Flow (x402 Credit)',
      steps: [
        'Recipient returns 402 Payment Required with paymentRequirements and extra.tabEndpoint.',
        'Payer SDK calls the tabEndpoint, which forwards to POST /tabs to open or reuse a tab.',
        'Payer signs a guarantee and retries with the X-PAYMENT header.',
        'Recipient optionally calls /verify (structural checks) and then /settle (issues the certificate).',
        'Recipient delivers the protected response immediately; payer settles on-chain later (payTab or payTabInERC20Token).',
      ],
      paragraphsAfter: [
        'This is the “agent pays with credit” experience: the recipient opens the tab, the agent gets a guarantee via /settle, and the agent settles later on-chain—often after a 7‑day grace window configured by the operator.',
      ],
    },
    {
      heading: 'Sequence Diagram (Minimal Flow)',
      paragraphs: [
        'Below is a compact sequence view of the minimal x402 path with the key handoffs:',
      ],
      sequence: [
        'Payer → Recipient: request protected resource',
        'Recipient → Payer: 402 + paymentRequirements (tabEndpoint)',
        'Payer → Recipient: POST tabEndpoint (wallet + requirements)',
        'Recipient → Facilitator: POST /tabs',
        'Facilitator → Core: create/reuse tab',
        'Facilitator → Recipient: tabId + metadata',
        'Payer → Recipient: retry with X-PAYMENT header',
        'Recipient → Facilitator: POST /verify',
        'Recipient → Facilitator: POST /settle',
        'Facilitator → Core: issue guarantee',
        'Facilitator → Recipient: certificate',
        'Recipient → Payer: serve response',
        'Payer → Contract: payTab / payTabInERC20Token (later)',
      ],
    },
    {
      heading: 'All Steps: Credit Guarantee Flow',
      steps: [
        'Payer deposits collateral into the Core4Mica vault.',
        'Recipient returns 402 with paymentRequirements + tabEndpoint.',
        'Client calls tabEndpoint; recipient calls /tabs to create or reuse the tab.',
        'Client signs PaymentGuaranteeRequestClaims and retries with X-PAYMENT.',
        'Recipient calls /verify for structural validation.',
        'Recipient calls /settle to obtain a BLS certificate from core.',
        'Recipient serves the protected response and stores the certificate.',
        'Payer settles on-chain with payTab/payTabInERC20Token before TTL, or recipient remunerates after the grace period.',
        'Optional: payer requests, cancels, or finalizes withdrawals; operators keep state in sync via events.',
      ],
    },
    {
      heading: 'What /verify vs /settle Actually Do',
      paragraphs: [
        '/verify is purely structural: it decodes X-PAYMENT and ensures the claims match the recipient’s advertised requirements. It does not talk to core and does not issue a certificate.',
        '/settle repeats the same checks and then calls core to request a BLS guarantee. The facilitator verifies the certificate locally and returns it to the recipient.',
      ],
      bullets: [
        '/verify returns { isValid, invalidReason?, certificate: null }.',
        '/settle returns { success, networkId, certificate }.',
        'Both enforce scheme/network, payTo, asset, and exact amount matching.',
      ],
    },
    {
      heading: 'Happy Path: Payer Settles On-Chain',
      steps: [
        'Recipient receives a certificate from /settle and serves the request.',
        'Payer later calls payTab (ETH) or payTabInERC20Token (ERC20) with tabId, req_id, amount, and recipient.',
        'The contract records the payment and emits events; core unlocks collateral and the tab appears as settled to the recipient.',
      ],
      paragraphsAfter: [
        'The req_id used here is the one embedded in the certificate returned by /settle. This is how the chain ties a specific guarantee to a specific repayment.',
      ],
    },
    {
      heading: 'Default Path: Recipient Remunerates',
      steps: [
        'If the payer does not settle before the grace period, the recipient (or a daemon) lists pending remunerations.',
        'The recipient verifies the certificate and calls Core4Mica.remunerate with the certificate bytes and BLS signature.',
        'The contract validates domain, timestamp + grace window, tab status, and collateral; it then transfers funds to the recipient.',
      ],
      paragraphsAfter: [
        'This path is deterministic: the same certificate that enabled instant delivery becomes the claim that makes the recipient whole.',
      ],
    },
    {
      heading: 'Tab Lifecycle, TTL, and req_id Rules',
      paragraphs: [
        'Tabs are reused for the same payer/recipient/asset until the TTL expires. Each guarantee increments req_id and updates total_amount in the certificate. The contract rejects out-of-order req_id or asset mismatches. This is how replay and double-spend attempts are prevented.',
      ],
      bullets: [
        'Tabs can be created for ETH or ERC20 assets.',
        'The tab’s startTimestamp is derived from the first valid guarantee.',
        'Claims must fall within the tab’s active time window.',
      ],
    },
    {
      heading: 'Two Ways to Integrate',
      bullets: [
        'x402 flow: recipients expose a tabEndpoint and call /verify + /settle. Payers use the SDK to sign X-PAYMENT.',
        'Direct core flow: recipients create tabs and request guarantees via the SDK, then remunerate directly. This is useful for closed systems or internal pipelines.',
      ],
    },
    {
      heading: 'Optional Exact / Debit Fallback',
      paragraphs: [
        'If operators configure an exact (debit) backend, the facilitator can route /verify and /settle to that path instead. Responses mirror upstream x402 debit flows and may include transaction hashes rather than certificates.',
      ],
    },
    {
      heading: 'Why This Design Holds',
      paragraphs: [
        '4Mica keeps the happy path off-chain but preserves enforceability on-chain. Recipients never need to trust a coordinator; they only need a certificate that the contract will accept. Payers keep capital efficient, and the system has a clear and auditable failure mode: either the payer pays, or the recipient remunerates.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 text-[#C8D7F2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-wide text-[#3CAEF5]">Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-4">
            4Mica Deep Dive: Tabs, Guarantees, and Settlement Paths
          </h1>
          <p className="text-sm text-[#9CB7E8]">
            Published January 28, 2026 · Updated January 29, 2026 · 15 min read · By Mairon
          </p>
        </header>

        <article className="glass-panel rounded-2xl p-8 space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E7F1FF]">{section.heading}</h2>
              {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-[#C8D7F2]">
                  {renderInlineCode(paragraph)}
                </p>
              ))}

              {section.steps && (
                <ol className="list-decimal list-inside space-y-2 text-[#C8D7F2]">
                  {section.steps.map((step) => (
                    <li key={step}>{renderInlineCode(step)}</li>
                  ))}
                </ol>
              )}

              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-[#C8D7F2]">
                  {section.bullets.map((bullet, idx) => (
                    <li key={`${section.heading}-bullet-${idx}`}>
                      {renderInlineCodeOrNode(bullet)}
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraphsAfter && section.paragraphsAfter.map((paragraph, idx) => (
                <p key={`after-${idx}`} className="leading-relaxed text-[#C8D7F2]">
                  {renderInlineCode(paragraph)}
                </p>
              ))}
              {section.codeBlocks && <CodeTabs blocks={section.codeBlocks} />}
              {section.sequence && (
                <div className="rounded-xl border border-white/10 bg-[#050B1D] p-5 text-sm text-[#C8D7F2] space-y-2">
                  {section.sequence.map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-[#48C9B0] flex-shrink-0"></span>
                      <span className="font-mono">{line}</span>
                    </div>
                  ))}
                </div>
              )}
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
          <span>Last updated: January 29, 2026</span>
        </footer>
      </div>
    </div>
  );
}
