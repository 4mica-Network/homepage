import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paying with 4Mica',
  description:
    'A payer-first guide to funding collateral, signing X-PAYMENT, and settling tabs on-chain.',
};

export default function PayingWith4MicaPage() {
  const sections = [
    {
      heading: 'Executive Summary',
      paragraphs: [
        'This guide is for payers and agents who want to consume paid resources using 4Mica credit.',
        'You fund collateral once, receive 402 requirements, sign an X-PAYMENT header, and later settle the tab on-chain. Recipients get a certificate immediately, so work can be delivered without waiting on chain.',
      ],
    },
    {
      heading: 'What You Need',
      bullets: [
        'A wallet private key with collateral available (ETH or ERC20).',
        'The recipient endpoint you want to call.',
        'Access to the 4Mica core API (default: https://api.4mica.xyz/).',
        'The recipient tabEndpoint (advertised in the 402 response).',
      ],
    },
    {
      heading: 'Step 1: Fund Collateral',
      paragraphs: [
        'Credit requires collateral in the Core4Mica vault. Deposit once per asset and reuse the same collateral for multiple tabs.',
        'For ERC20 assets, approve first, then deposit.',
      ],
      codeBlocks: [
        {
          language: 'rust',
          caption: 'Deposit collateral with rust-sdk-4mica',
          code: String.raw`use rust_sdk_4mica::{Client, ConfigBuilder, U256};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let client = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    )
    .await?;

    // ETH deposit
    client.user.deposit(U256::from(10_000u64), None).await?;

    // ERC20 flow (approve then deposit)
    // let token = "0xTokenAddress".to_string();
    // client.user.approve_erc20(token.clone(), U256::from(1_000_000u64)).await?;
    // client.user.deposit(U256::from(1_000_000u64), Some(token)).await?;

    Ok(())
}`,
        },
      ],
    },
    {
      heading: 'Step 2: Discover Payment Requirements',
      paragraphs: [
        'Make the request without payment to receive a 402 response. The response includes paymentRequirements and extra.tabEndpoint.',
        'You will use these requirements to create a tab and sign the payment header.',
      ],
    },
    {
      heading: 'Step 3: Request a Tab',
      paragraphs: [
        'Call the tabEndpoint with your wallet address and the payment requirements. The recipient will create or reuse a tab via the facilitator.',
        'The response includes tabId and nextReqId, which are required for signing.',
      ],
      codeBlocks: [
        {
          language: 'http',
          caption: 'POST tabEndpoint',
          code: String.raw`POST /x402/tab HTTP/1.1
Content-Type: application/json

{
  "userAddress": "0xUserAddress",
  "paymentRequirements": { "...": "from 402 response" }
}`,
        },
      ],
    },
    {
      heading: 'Step 4: Sign X-PAYMENT',
      paragraphs: [
        'Use the SDK to build and sign the payment guarantee. The SDK will refresh the tab via tabEndpoint and return the base64 X-PAYMENT header.',
      ],
      codeBlocks: [
        {
          language: 'rust',
          caption: 'Sign the payment header',
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
      ],
    },
    {
      heading: 'Step 5: Retry the Request with X-PAYMENT',
      paragraphs: [
        'Retry the same request with the X-PAYMENT header. The recipient will call /verify and /settle and then serve the response.',
      ],
      codeBlocks: [
        {
          language: 'http',
          caption: 'Retry the protected request',
          code: String.raw`GET /v1/report HTTP/1.1
X-PAYMENT: <base64-envelope>`,
        },
      ],
    },
    {
      heading: 'Step 6: Settle the Tab On-Chain',
      paragraphs: [
        'After receiving the response, settle the tab on-chain using the req_id in the certificate.',
        'This unlocks collateral and keeps your account healthy for future requests.',
      ],
      codeBlocks: [
        {
          language: 'rust',
          caption: 'Pay the tab',
          code: String.raw`use rust_sdk_4mica::U256;

// req_id comes from the certificate returned by /settle
client
    .user
    .pay_tab(tab_id, req_id, U256::from(amount_wei), recipient_address, None)
    .await?;`,
        },
      ],
    },
    {
      heading: 'Handle 402 Responses in Client Code',
      steps: [
        'Call the resource and check for HTTP 402.',
        'Parse paymentRequirements and call tabEndpoint with your wallet.',
        'Sign X-PAYMENT with the SDK.',
        'Retry the request with X-PAYMENT.',
        'If 402 returns again, surface the error and refresh the tab.',
      ],
    },
    {
      heading: 'Operational Tips',
      bullets: [
        'Track tab TTL and settle before expiry to avoid remuneration.',
        'Always use the req_id from the certificate, not a cached value.',
        'Reuse collateral across tabs, but monitor balances if you issue many guarantees.',
        'If you rotate keys, create fresh tabs to avoid mismatched user addresses.',
      ],
    },
    {
      heading: 'Why This Works',
      paragraphs: [
        'Credit lets you access services instantly while keeping settlement on-chain and enforceable. The certificate is the cryptographic bridge between off-chain delivery and on-chain repayment.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 text-[#C8D7F2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-wide text-[#3CAEF5]">Payer Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-4">
            Paying with 4Mica: Credit, Tabs, and Settlement
          </h1>
          <p className="text-sm text-[#9CB7E8]">Published January 29, 2026 · 10 min read · By Mairon</p>
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

              {section.codeBlocks && section.codeBlocks.map((block, idx) => (
                <div
                  key={`code-${idx}`}
                  className="rounded-xl border border-white/10 bg-[#050B1D] p-5 text-sm text-[#C8D7F2] space-y-3"
                >
                  {block.caption && (
                    <p className="text-xs uppercase tracking-wide text-[#7BCBFF]">
                      {block.caption}
                    </p>
                  )}
                  <pre className="overflow-x-auto">
                    <code className="font-mono">{block.code}</code>
                  </pre>
                </div>
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
          <span>Last updated: January 29, 2026</span>
        </footer>
      </div>
    </div>
  );
}
