import type { Metadata } from 'next';
import Link from 'next/link';
import CodeTabs from '../CodeTabs';

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
      heading: 'Switching from x402 Debit to 4Mica Credit',
      paragraphs: [
        'If a resource migrates from an x402 debit facilitator to the 4Mica credit facilitator, the flow changes from immediate on-chain payment to credit-backed guarantees.',
      ],
      steps: [
        'Expect `paymentRequirements.scheme = "4mica-credit"` (or another scheme containing "4mica") plus `extra.tabEndpoint` in the 402 response.',
        'Deposit collateral before your first credit request; the facilitator refuses tabs for empty balances.',
        'Use the 4Mica SDK X402Flow to sign the guarantee and produce the `X-PAYMENT` header.',
        'Retry the request with `X-PAYMENT`, then pay the tab later using the `req_id` from the certificate.',
        'Keep your old debit path as a fallback if the scheme is not 4mica.',
      ],
    },
    {
      heading: 'What You Need',
      bullets: [
        'A wallet private key with collateral available (ETH or ERC20).',
        'The recipient endpoint you want to call.',
        'Access to the 4Mica operator API (default: https://api.4mica.xyz/).',
        'A 402 response that advertises `scheme: "4mica-credit"` and `extra.tabEndpoint`.',
      ],
    },
    {
      heading: 'Step 1: Fund Collateral (Payer SDK)',
      paragraphs: [
        'Credit requires collateral in the Core4Mica vault. Deposit once per asset and reuse the same collateral for multiple tabs.',
        'For ERC20 assets, approve first, then deposit.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Deposit collateral (TypeScript SDK)',
          code: String.raw`import { Client, ConfigBuilder } from "sdk-4mica";

const cfg = new ConfigBuilder()
  .rpcUrl(process.env["4MICA_RPC_URL"] ?? "https://api.4mica.xyz/")
  .walletPrivateKey(process.env.PAYER_KEY!)
  .build();

const client = await Client.new(cfg);

// ETH deposit
await client.user.deposit(10_000n);

// ERC20 flow (approve then deposit)
// const token = "0xTokenAddress";
// await client.user.approveErc20(token, 1_000_000n);
// await client.user.deposit(1_000_000n, token);

await client.aclose();`,
        },
        {
          language: 'python',
          caption: 'Deposit collateral (Python SDK)',
          code: String.raw`import asyncio
from fourmica_sdk import Client, ConfigBuilder

PAYER_KEY = "0x..."

async def main():
    cfg = (
        ConfigBuilder()
        .wallet_private_key(PAYER_KEY)
        .rpc_url("https://api.4mica.xyz/")
        .build()
    )
    client = await Client.new(cfg)
    try:
        # ETH deposit
        await client.user.deposit(10_000)

        # ERC20 flow (approve then deposit)
        # token = "0xTokenAddress"
        # await client.user.approve_erc20(token, 1_000_000)
        # await client.user.deposit(1_000_000, token)
    finally:
        await client.aclose()

asyncio.run(main())`,
        },
        {
          language: 'rust',
          caption: 'Deposit collateral (Rust SDK)',
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
      heading: 'Step 2: Parse 402 Requirements & Select 4Mica Credit',
      paragraphs: [
        'Make the request without payment to receive a 402 response. Then parse the requirements and ensure the scheme is 4mica credit.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Parse requirements (TypeScript SDK)',
          code: String.raw`import { PaymentRequirements } from "sdk-4mica";

const requirements = PaymentRequirements.fromRaw(reqRaw); // from 402 response
if (!requirements.scheme.includes("4mica")) {
  throw new Error("Unsupported scheme; expected 4mica credit.");
}`,
        },
        {
          language: 'python',
          caption: 'Parse requirements (Python SDK)',
          code: String.raw`from fourmica_sdk import PaymentRequirements

requirements = PaymentRequirements.from_raw(req_raw)
if "4mica" not in requirements.scheme:
    raise ValueError("Unsupported scheme; expected 4mica credit.")`,
        },
        {
          language: 'rust',
          caption: 'Parse requirements (Rust SDK)',
          code: String.raw`use rust_sdk_4mica::x402::PaymentRequirements;

let requirements: PaymentRequirements = serde_json::from_value(req_raw)?;
if !requirements.scheme.contains("4mica") {
    anyhow::bail!("Unsupported scheme; expected 4mica credit.");
}`,
        },
      ],
    },
    {
      heading: 'Step 3: Sign X-PAYMENT (Payer SDK)',
      paragraphs: [
        'Use the SDK to build and sign the payment guarantee. The SDK automatically calls the tabEndpoint to refresh the tab and returns the base64 X-PAYMENT header.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Sign X-PAYMENT (TypeScript SDK)',
          code: String.raw`import { Client, ConfigBuilder, X402Flow } from "sdk-4mica";

const cfg = new ConfigBuilder()
  .rpcUrl(process.env["4MICA_RPC_URL"] ?? "https://api.4mica.xyz/")
  .walletPrivateKey(process.env.PAYER_KEY!)
  .build();

const client = await Client.new(cfg);
const flow = X402Flow.fromClient(client);

// requirements from Step 2
const payment = await flow.signPayment(requirements, "0xUserAddress");
const xPaymentHeader = payment.header;

await client.aclose();`,
        },
        {
          language: 'python',
          caption: 'Sign X-PAYMENT (Python SDK)',
          code: String.raw`import asyncio
from fourmica_sdk import Client, ConfigBuilder, X402Flow

PAYER_KEY = "0x..."
USER_ADDRESS = "0x..."

async def main():
    cfg = (
        ConfigBuilder()
        .wallet_private_key(PAYER_KEY)
        .rpc_url("https://api.4mica.xyz/")
        .build()
    )
    client = await Client.new(cfg)
    flow = X402Flow.from_client(client)

    # requirements from Step 2
    payment = await flow.sign_payment(requirements, USER_ADDRESS)
    x_payment_header = payment.header

    await client.aclose()

asyncio.run(main())`,
        },
        {
          language: 'rust',
          caption: 'Sign X-PAYMENT (Rust SDK)',
          code: String.raw`use rust_sdk_4mica::{Client, ConfigBuilder, X402Flow};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let payer = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    )
    .await?;

    let flow = X402Flow::new(payer)?;
    // requirements from Step 2
    let signed = flow
        .sign_payment(requirements, std::env::var("USER_ADDRESS")?)
        .await?;

    let x_payment_header = signed.header; // send as X-PAYMENT
    Ok(())
}`,
        },
      ],
    },
    {
      heading: 'Step 4: Retry the Request with X-PAYMENT',
      paragraphs: [
        'Retry the same request with the X-PAYMENT header. The recipient will call /verify and /settle and then serve the response.',
      ],
    },
    {
      heading: 'Step 5: Pay the Tab On-Chain (Payer SDK)',
      paragraphs: [
        'After receiving the response, settle the tab on-chain using the req_id in the certificate.',
        'This unlocks collateral and keeps your account healthy for future requests.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Pay the tab (TypeScript SDK)',
          code: String.raw`const receipt = await client.user.payTab(
  tabId,
  reqId,          // from certificate
  amountWei,
  recipientAddress,
  undefined       // or ERC20 token address
);`,
        },
        {
          language: 'python',
          caption: 'Pay the tab (Python SDK)',
          code: String.raw`await client.user.pay_tab(
    tab_id=tab_id,
    req_id=req_id,          # from certificate
    amount=amount_wei,
    recipient_address=recipient_address,
    erc20_token=None,
)`,
        },
        {
          language: 'rust',
          caption: 'Pay the tab (Rust SDK)',
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
      heading: 'Optional: Settle via the Facilitator (SDK helper)',
      paragraphs: [
        'If a recipient delegates settlement to the payer (less common), you can call the facilitator /settle endpoint using the SDK.',
      ],
      codeBlocks: [
        {
          language: 'ts',
          caption: 'Settle with the facilitator (TypeScript SDK)',
          code: String.raw`const settled = await flow.settlePayment(
  payment,
  requirements,
  "https://x402.4mica.xyz"
);

const certificate = settled.settlement;`,
        },
        {
          language: 'python',
          caption: 'Settle with the facilitator (Python SDK)',
          code: String.raw`settled = await flow.settle_payment(
    payment,
    requirements,
    facilitator_url="https://x402.4mica.xyz/"
)

certificate = settled.settlement`,
        },
        {
          language: 'rust',
          caption: 'Settle with the facilitator (Rust SDK)',
          code: String.raw`let settled = flow
    .settle_payment(payment, requirements, "https://x402.4mica.xyz")
    .await?;

let certificate = settled.settlement;`,
        },
      ],
    },
    {
      heading: 'Handle 402 Responses in Client Code',
      steps: [
        'Call the resource and check for HTTP 402.',
        'Parse paymentRequirements and confirm the scheme is 4mica credit (fallback to debit if not).',
        'Sign X-PAYMENT with the SDK (it calls tabEndpoint internally).',
        'Retry the request with X-PAYMENT.',
        'If 402 returns again, surface the error and refresh the tab.',
      ],
    },
    {
      heading: 'Operational Tips',
      bullets: [
        'Track tab TTL and settle before expiry (default 21 days) to avoid remuneration.',
        'If unpaid, recipients can remunerate after the grace period (default 14 days).',
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

              {section.codeBlocks && <CodeTabs blocks={section.codeBlocks} />}
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
