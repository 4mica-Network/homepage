'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CodeBlock from '../../../components/CodeBlock';
import MermaidDiagram from '../../../components/MermaidDiagram';
import CodeTabs from '../blog/CodeTabs';

const navigationItems = [
  { id: 'overview', title: 'Overview', icon: 'ri-eye-line' },
  { id: 'installation', title: 'Installation', icon: 'ri-download-cloud-2-line' },
  { id: 'server-integration', title: 'Server Integration', icon: 'ri-server-line' },
  { id: 'client-integration', title: 'Client Integration', icon: 'ri-user-line' },
  { id: 'facilitator-api', title: 'Facilitator API', icon: 'ri-cloud-line' },
  { id: 'operator-api', title: 'Operator API', icon: 'ri-database-2-line' },
  { id: 'payment-flow', title: 'Protocol Flow', icon: 'ri-route-line' },
  { id: 'examples', title: 'Code Examples', icon: 'ri-file-code-line' },
  { id: 'support', title: 'Support', icon: 'ri-customer-service-2-line' }
];

export default function TechnicalDocsContent() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 text-[#C8D7F2]" aria-busy>Loading technical docs…</div>}>
      <TechnicalDocsContentInner />
    </Suspense>
  );
}

function TechnicalDocsContentInner() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const requestedSection = searchParams.get('section');
    if (requestedSection && navigationItems.some((item) => item.id === requestedSection)) {
      setActiveSection(requestedSection);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-20 text-[#C8D7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-6">
            4Mica Rust SDK Documentation
          </h1>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-xl text-[#C8D7F2] max-w-3xl mx-auto">
            In-depth documentation for the official Rust SDK powering secure, cryptographically-guaranteed tab-based
            payments on the 4Mica network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-[#E7F1FF] mb-4">Contents</h3>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center ${
                      activeSection === item.id
                        ? 'bg-[#1E4DD8] text-white'
                        : 'text-[#C8D7F2] hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-panel rounded-lg p-8">
              {activeSection === 'overview' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Overview</h2>
                  <div className="space-y-6">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      The 4Mica SDKs ship across Rust (v0.4.0), Python (v0.4.3), and TypeScript (v0.3.0) with shared primitives for
                      tabs, sequential <code className="font-mono">req_id</code> guarantees, and HTTP 402/X402 flows. They wrap the
                      Core4Mica contracts, facilitator, and X402 helper into a single toolkit so you can collateralize, issue
                      guarantees, and settle tabs without forcing users to pre-fund every request.
                    </p>
                    <p className="text-[#C8D7F2] leading-relaxed">
                      This page summarizes the refreshed SDK README plus the latest protocol sequence diagrams. Use it as a quick-start
                      for integrating Core4Mica directly or bridging HTTP 402 resources through the x402-4mica facilitator.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#E7F1FF] mb-4">Key Capabilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'User Client',
                            desc: 'Deposit collateral, sign guarantees, settle tabs, and manage withdrawals with typed responses.'
                          },
                          {
                            title: 'Recipient Client',
                            desc: 'Open/reuse tabs, issue payment guarantees, and remunerate against locked collateral.'
                          },
                          {
                            title: 'X402 Flow Helper',
                            desc: 'Generate base64 X-PAYMENT headers and optionally call /settle for HTTP 402 protected resources.'
                          },
                          {
                            title: 'Typed Claims & Certificates',
                            desc: 'PaymentGuaranteeClaimsV1 with req_id + totals upgraded to BLS certificates for on-chain redemption.'
                          },
                          {
                            title: 'Safety Rails',
                            desc: 'Address validation, required/optional config separation, and structured error enums for each flow.'
                          },
                          {
                            title: 'Secure Defaults',
                            desc: 'Non-custodial design with enforced grace periods, domain separation, and 4Mica-only signing schemes.'
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-white/10 border border-white/10 rounded-lg p-4">
                            <h4 className="font-semibold text-[#C8D7F2] mb-2">{item.title}</h4>
                            <p className="text-sm text-[#C8D7F2]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'installation' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Installation</h2>
                  <div className="space-y-6">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      The SDKs ship as <code className="font-mono">rust-sdk-4mica</code> (v0.4.0), <code className="font-mono">sdk-4mica</code>{' '}
                      for Python (v0.4.3), and <code className="font-mono">sdk-4mica</code> for TypeScript (v0.3.0). Each targets the
                      Core4Mica contracts and x402 facilitator APIs with async support baked in.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#E7F1FF] mb-3">Install the SDK</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'Rust',
                            language: 'toml',
                            code: `[dependencies]
rust-sdk-4mica = "0.4.0"`,
                          },
                          {
                            label: 'Python',
                            language: 'bash',
                            code: `pip install sdk-4mica==0.4.3`,
                          },
                          {
                            label: 'TypeScript',
                            language: 'bash',
                            code: `npm install sdk-4mica@0.3.0`,
                          },
                        ]}
                      />
                      <p className="text-sm text-[#C8D7F2] mt-3">
                        For Rust, you can also run <code className="font-mono">cargo add rust-sdk-4mica@0.4.0</code>. After updating{' '}
                        <code className="font-mono">Cargo.toml</code>, run <code className="font-mono">cargo build</code> to pull the crate and
                        verify your toolchain.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'server-integration' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Server Integration</h2>
                  <div className="space-y-8">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      Recipient flow for getting paid: respond with 402, provision tabs, then verify + settle
                      guarantees to receive certificates.
                    </p>
                    <div className="space-y-2 text-sm text-[#C8D7F2]">
                      <h3 className="text-lg font-semibold text-[#E7F1FF]">Steps</h3>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Return 402 with <code className="font-mono">paymentRequirements</code> and <code className="font-mono">extra.tabEndpoint</code>.</li>
                        <li>Tab endpoint calls <code className="font-mono">POST /tabs</code> to open or reuse a tab.</li>
                        <li>When the retry arrives, call <code className="font-mono">/verify</code>.</li>
                        <li>Call <code className="font-mono">/settle</code> to mint the certificate.</li>
                        <li>Persist the certificate and serve the protected response.</li>
                      </ol>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Return 402 Payment Required</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'HTTP',
                            language: 'http',
                            code: `HTTP/1.1 402 Payment Required
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
      "tabEndpoint": "https://your.api.example.com/x402/tab"
    }
  }
}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Create or Reuse Tabs (Recipient SDK)</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'TypeScript',
                            language: 'ts',
                            code: `import { Client, ConfigBuilder } from "sdk-4mica";

const cfg = new ConfigBuilder()
  .rpcUrl(process.env["4MICA_RPC_URL"] ?? "https://api.4mica.xyz/")
  .walletPrivateKey(process.env.RECIPIENT_KEY!)
  .build();

const client = await Client.new(cfg);
const tabId = await client.recipient.createTab(
  "0xUserAddress",
  "0xRecipientAddress",
  null,
  3600
);
await client.aclose();`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import asyncio
from fourmica_sdk import Client, ConfigBuilder

async def main():
    cfg = ConfigBuilder().wallet_private_key("0x...").build()
    client = await Client.new(cfg)
    tab_id = await client.recipient.create_tab(
        user_address="0xUserAddress",
        recipient_address="0xRecipientAddress",
        erc20_token=None,
        ttl=3600,
    )
    await client.aclose()

asyncio.run(main())`,
                          },
                          {
                            label: 'Rust',
                            language: 'rust',
                            code: `use rust_sdk_4mica::{Client, ConfigBuilder};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let cfg = ConfigBuilder::default()
        .wallet_private_key(std::env::var("RECIPIENT_KEY")?)
        .build()?;
    let client = Client::new(cfg).await?;

    let tab_id = client
        .recipient
        .create_tab("0xUserAddress".to_string(), "0xRecipientAddress".to_string(), None, Some(3600))
        .await?;
    println!("tab_id={tab_id}");
    Ok(())
}`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'client-integration' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Client Integration</h2>
                  <div className="space-y-8">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      Payer flow for consuming paid resources: fund collateral, parse requirements,
                      sign <code className="font-mono">X-PAYMENT</code>, retry, then settle on-chain later.
                    </p>
                    <div className="space-y-2 text-sm text-[#C8D7F2]">
                      <h3 className="text-lg font-semibold text-[#E7F1FF]">Steps</h3>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Fund collateral (ETH or ERC20).</li>
                        <li>Parse 402 <code className="font-mono">paymentRequirements</code> and confirm <code className="font-mono">4mica</code> scheme.</li>
                        <li>Sign <code className="font-mono">X-PAYMENT</code> with the SDK.</li>
                        <li>Retry the request with the <code className="font-mono">X-PAYMENT</code> header.</li>
                        <li>Pay the tab on-chain later using <code className="font-mono">req_id</code> from the certificate.</li>
                      </ol>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Fund Collateral</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'TypeScript',
                            language: 'ts',
                            code: `import { Client, ConfigBuilder } from "sdk-4mica";

const cfg = new ConfigBuilder()
  .rpcUrl(process.env["4MICA_RPC_URL"] ?? "https://api.4mica.xyz/")
  .walletPrivateKey(process.env.PAYER_KEY!)
  .build();

const client = await Client.new(cfg);
await client.user.deposit(10_000n);
await client.aclose();`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import asyncio
from fourmica_sdk import Client, ConfigBuilder

async def main():
    cfg = ConfigBuilder().wallet_private_key("0x...").build()
    client = await Client.new(cfg)
    await client.user.deposit(10_000)
    await client.aclose()

asyncio.run(main())`,
                          },
                          {
                            label: 'Rust',
                            language: 'rust',
                            code: `use rust_sdk_4mica::{Client, ConfigBuilder, U256};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let client = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    )
    .await?;

    client.user.deposit(U256::from(10_000u64), None).await?;
    Ok(())
}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Parse 402 Requirements</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'TypeScript',
                            language: 'ts',
                            code: `import { PaymentRequirements } from "sdk-4mica";

const requirements = PaymentRequirements.fromRaw(reqRaw);
if (!requirements.scheme.includes("4mica")) {
  throw new Error("Unsupported scheme; expected 4mica credit.");
}`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `from fourmica_sdk import PaymentRequirements

requirements = PaymentRequirements.from_raw(req_raw)
if "4mica" not in requirements.scheme:
    raise ValueError("Unsupported scheme; expected 4mica credit.")`,
                          },
                          {
                            label: 'Rust',
                            language: 'rust',
                            code: `use rust_sdk_4mica::x402::PaymentRequirements;

let requirements: PaymentRequirements = serde_json::from_value(req_raw)?;
if !requirements.scheme.contains("4mica") {
    anyhow::bail!("Unsupported scheme; expected 4mica credit.");
}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Sign X-PAYMENT</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'TypeScript',
                            language: 'ts',
                            code: `import { Client, ConfigBuilder, PaymentRequirements, X402Flow } from "sdk-4mica";

const cfg = new ConfigBuilder().walletPrivateKey("0x...").build();
const client = await Client.new(cfg);
const flow = X402Flow.fromClient(client);

const requirements = PaymentRequirements.fromRaw(reqRaw);
const payment = await flow.signPayment(requirements, "0xUserAddress");
const xPaymentHeader = payment.header;
await client.aclose();`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `import asyncio
from fourmica_sdk import Client, ConfigBuilder, PaymentRequirements, X402Flow

async def main():
    cfg = ConfigBuilder().wallet_private_key("0x...").build()
    client = await Client.new(cfg)
    flow = X402Flow.from_client(client)
    requirements = PaymentRequirements.from_raw(req_raw)
    payment = await flow.sign_payment(requirements, "0xUserAddress")
    x_payment_header = payment.header
    await client.aclose()

asyncio.run(main())`,
                          },
                          {
                            label: 'Rust',
                            language: 'rust',
                            code: `use rust_sdk_4mica::{Client, ConfigBuilder, X402Flow};
use rust_sdk_4mica::x402::PaymentRequirements;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let client = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    )
    .await?;
    let flow = X402Flow::new(client)?;
    let requirements: PaymentRequirements = serde_json::from_value(req_raw)?;
    let signed = flow.sign_payment(requirements, "0xUserAddress".to_string()).await?;
    let x_payment_header = signed.header;
    Ok(())
}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#E7F1FF]">Pay the Tab On-Chain</h3>
                      <CodeTabs
                        blocks={[
                          {
                            label: 'TypeScript',
                            language: 'ts',
                            code: `const receipt = await client.user.payTab(
  tabId,
  reqId,
  amountWei,
  recipientAddress,
  undefined
);`,
                          },
                          {
                            label: 'Python',
                            language: 'python',
                            code: `await client.user.pay_tab(
    tab_id=tab_id,
    req_id=req_id,
    amount=amount_wei,
    recipient_address=recipient_address,
    erc20_token=None,
)`,
                          },
                          {
                            label: 'Rust',
                            language: 'rust',
                            code: `use rust_sdk_4mica::U256;

client
    .user
    .pay_tab(tab_id, req_id, U256::from(amount_wei), recipient_address, None)
    .await?;`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'facilitator-api' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Facilitator API Reference</h2>
                  <div className="space-y-6">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      Resource servers call the facilitator directly; end users and SDK clients only hit your
                      <code className="font-mono">tabEndpoint</code> and protected resources. The hosted base URL is typically
                      <code className="font-mono">https://x402.4mica.xyz/</code>, but any compatible deployment exposes the same
                      endpoints.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">GET /</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Returns service metadata and a quick
                          pointer to supported schemes/networks.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span> No body.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">
                            {'{ message, supported: SupportedKind[], health: "/health", docs }'}
                          </code>
                        </p>
                        <CodeBlock
                          code={`{
  "message": "Welcome to the 4mica credit facilitator...",
  "supported": [{ "scheme": "4mica-credit", "network": "polygon-amoy", "x402Version": 1 }],
  "health": "/health",
  "docs": "See README.md for a full flow walkthrough."
}`}
                          language="json"
                        />
                      </div>

                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">GET /health</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Liveness probe for load balancers.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span> No body.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">{'{ status: "ok" }'}</code>
                        </p>
                        <CodeBlock code={`{ "status": "ok" }`} language="json" />
                      </div>

                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">GET /supported</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Lists all supported (scheme, network) pairs
                          for credit and any delegated exact/debit flows.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span> No body.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">
                            {'{ kinds: [{ scheme, network, x402Version?, extra? }] }'}
                          </code>
                        </p>
                        <CodeBlock
                          code={`{
  "kinds": [
    { "scheme": "4mica-credit", "network": "polygon-amoy", "x402Version": 1 }
  ]
}`}
                          language="json"
                        />
                      </div>

                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">POST /tabs</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Opens or reuses a payment tab for a
                          (user, recipient, asset) triple. Used by your tab endpoint.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span>{' '}
                          <code className="font-mono">
                            {'{ userAddress, recipientAddress, erc20Token?, ttlSeconds? }'}
                          </code>
                          . Use <code className="font-mono">erc20Token</code> = null or omit for ETH. Alias:{' '}
                          <code className="font-mono">assetAddress</code> is accepted.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">
                            {'{ tabId, userAddress, recipientAddress, assetAddress, startTimestamp, ttlSeconds, nextReqId }'}
                          </code>
                          . <code className="font-mono">tabId</code> is a canonical hex string and{' '}
                          <code className="font-mono">nextReqId</code> is the next sequential request id.
                        </p>
                        <CodeTabs
                          blocks={[
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "userAddress": "0xUser",
  "recipientAddress": "0xRecipient",
  "erc20Token": null,
  "ttlSeconds": 86400
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "tabId": "0x0000000000000000000000000000000000000000000000000000000000000042",
  "userAddress": "0xUser",
  "recipientAddress": "0xRecipient",
  "assetAddress": "0xAsset",
  "startTimestamp": 1716500000,
  "ttlSeconds": 86400,
  "nextReqId": "0x0"
}`,
                            },
                          ]}
                        />
                      </div>

                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">POST /verify</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Validates the structure of the X-PAYMENT
                          header against the original payment requirements. No on-chain work is done here.
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span>{' '}
                          <code className="font-mono">
                            {'{ x402Version: 1, paymentHeader: "<base64>", paymentRequirements }'}
                          </code>
                          .
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">
                            {'{ isValid: true|false, invalidReason?, certificate? }'}
                          </code>
                          . Invalid requests return <code className="font-mono">isValid: false</code> with a reason.
                        </p>
                        <CodeTabs
                          blocks={[
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "x402Version": 1,
  "paymentHeader": "<base64 X-PAYMENT>",
  "paymentRequirements": {
    "scheme": "4mica-credit",
    "network": "polygon-amoy",
    "maxAmountRequired": "10000000000000000",
    "payTo": "0xRecipient",
    "asset": "0xAsset",
    "extra": { "tabEndpoint": "https://api.example.com/x402/tab" }
  }
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "isValid": true,
  "invalidReason": null,
  "certificate": null
}`,
                            },
                          ]}
                        />
                      </div>

                      <div className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                        <h3 className="text-lg font-semibold text-[#E7F1FF]">POST /settle</h3>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">What it does:</span> Re-validates the X-PAYMENT header and
                          issues a BLS certificate for 4mica-credit (or proxies exact/debit settlements).
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Gets:</span>{' '}
                          <code className="font-mono">
                            {'{ x402Version: 1, paymentHeader: "<base64>", paymentRequirements }'}
                          </code>
                          .
                        </p>
                        <p className="text-sm text-[#C8D7F2]">
                          <span className="font-semibold">Returns:</span>{' '}
                          <code className="font-mono">
                            {'{ success, error?, txHash?, networkId?, certificate? }'}
                          </code>
                          . For 4mica-credit, <code className="font-mono">success</code> is true and a{' '}
                          <code className="font-mono">certificate</code> is included. Delegated exact flows may return{' '}
                          <code className="font-mono">txHash</code> instead.
                        </p>
                        <CodeTabs
                          blocks={[
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "x402Version": 1,
  "paymentHeader": "<base64 X-PAYMENT>",
  "paymentRequirements": {
    "scheme": "4mica-credit",
    "network": "polygon-amoy",
    "maxAmountRequired": "10000000000000000",
    "payTo": "0xRecipient",
    "asset": "0xAsset",
    "extra": { "tabEndpoint": "https://api.example.com/x402/tab" }
  }
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "success": true,
  "error": null,
  "txHash": null,
  "networkId": "polygon-amoy",
  "certificate": {
    "claims": "0x...",
    "signature": "0x..."
  }
}`,
                            },
                          ]}
                        />
                      </div>
                    </div>

                    <div className="border border-white/10 rounded-lg p-6 space-y-3">
                      <h3 className="text-lg font-semibold text-[#E7F1FF]">Shared payloads</h3>
                      <div className="text-sm text-[#C8D7F2] space-y-2">
                        <p>
                          <span className="font-semibold">paymentRequirements</span> must include{' '}
                          <code className="font-mono">scheme</code>, <code className="font-mono">network</code>,{' '}
                          <code className="font-mono">maxAmountRequired</code>, <code className="font-mono">payTo</code>,{' '}
                          <code className="font-mono">asset</code>, plus optional{' '}
                          <code className="font-mono">resource</code>, <code className="font-mono">description</code>,{' '}
                          <code className="font-mono">mimeType</code>, <code className="font-mono">outputSchema</code>,{' '}
                          <code className="font-mono">maxTimeoutSeconds</code>, and <code className="font-mono">extra</code>.
                        </p>
                        <p>
                          <span className="font-semibold">certificate</span> is returned as{' '}
                          <code className="font-mono">{'{ claims, signature }'}</code>, both hex strings suitable for
                          on-chain remuneration.
                        </p>
                        <p>
                          <span className="font-semibold">Versioning:</span> the facilitator only accepts{' '}
                          <code className="font-mono">x402Version = 1</code>; mismatches return validation errors in the
                          response body.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'operator-api' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Operator API Reference</h2>
                  <div className="space-y-6">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      Core operator endpoints are served by <code className="font-mono">4mica-core/core</code> under the
                      <code className="font-mono">/core</code> prefix. Admin routes require the{' '}
                      <code className="font-mono">x-api-key</code> header with the matching scope.
                    </p>
                    <div className="bg-white/10 border border-white/10 rounded-lg p-5 text-sm text-[#C8D7F2] space-y-2">
                      <p>
                        <span className="font-semibold">Admin scopes:</span>{' '}
                        <code className="font-mono">admin_api_keys:manage</code>,{' '}
                        <code className="font-mono">user_suspension:write</code>
                      </p>
                      <p>
                        <span className="font-semibold">Admin header:</span>{' '}
                        <code className="font-mono">x-api-key</code>
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          method: 'GET',
                          path: '/core/health',
                          desc: 'Liveness + listener readiness.',
                          expects: 'No body.',
                          returns: '{ status: "ok", listener_ready: true }',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "status": "ok",
  "listener_ready": true
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/public-params',
                          desc: 'Public operator parameters.',
                          expects: 'No body.',
                          returns:
                            '{ public_key, contract_address, ethereum_http_rpc_url, eip712_name, eip712_version, chain_id }',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "public_key": [1, 2, 3],
  "contract_address": "0xCoreContract",
  "ethereum_http_rpc_url": "https://rpc.example.com",
  "eip712_name": "4Mica",
  "eip712_version": "1",
  "chain_id": 1
}`,
                            },
                          ],
                        },
                        {
                          method: 'POST',
                          path: '/core/payment-tabs',
                          desc: 'Create or reuse a payment tab.',
                          expects:
                            '{ user_address, recipient_address, erc20_token?, ttl? }',
                          returns:
                            '{ id, user_address, recipient_address, erc20_token?, next_req_id }',
                          examples: [
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "user_address": "0xUser",
  "recipient_address": "0xRecipient",
  "erc20_token": null,
  "ttl": 3600
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "id": "0x1",
  "user_address": "0xUser",
  "recipient_address": "0xRecipient",
  "erc20_token": null,
  "next_req_id": "0x0"
}`,
                            },
                          ],
                        },
                        {
                          method: 'POST',
                          path: '/core/guarantees',
                          desc: 'Issue a BLS guarantee for a signed request.',
                          expects:
                            '{ claims: { version: "v1", user_address, recipient_address, tab_id, req_id, amount, asset_address, timestamp }, signature, scheme }',
                          returns: '{ claims, signature } (BLSCert)',
                          examples: [
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "claims": {
    "version": "v1",
    "user_address": "0xUser",
    "recipient_address": "0xRecipient",
    "tab_id": "0x1",
    "req_id": "0x0",
    "amount": "0x64",
    "asset_address": "0xAsset",
    "timestamp": 1716500000
  },
  "signature": "0xUserSig",
  "scheme": "eip712"
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "claims": "0xClaimsBytes",
  "signature": "0xBlsSignature"
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/recipients/{recipient_address}/settled-tabs',
                          desc: 'List settled + remunerated tabs for a recipient.',
                          expects: 'Path param: recipient_address.',
                          returns: 'TabInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "tab_id": "0x1",
    "user_address": "0xUser",
    "recipient_address": "0xRecipient",
    "asset_address": "0xAsset",
    "start_timestamp": 1716500000,
    "ttl_seconds": 3600,
    "status": "open",
    "settlement_status": "settled",
    "created_at": 1716500000,
    "updated_at": 1716500300
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/recipients/{recipient_address}/pending-remunerations',
                          desc: 'List pending remunerations for a recipient.',
                          expects: 'Path param: recipient_address.',
                          returns: 'PendingRemunerationInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "tab": {
      "tab_id": "0x1",
      "user_address": "0xUser",
      "recipient_address": "0xRecipient",
      "asset_address": "0xAsset",
      "start_timestamp": 1716500000,
      "ttl_seconds": 3600,
      "status": "open",
      "settlement_status": "pending",
      "created_at": 1716500000,
      "updated_at": 1716500300
    },
    "latest_guarantee": {
      "tab_id": "0x1",
      "req_id": "0x0",
      "from_address": "0xUser",
      "to_address": "0xRecipient",
      "asset_address": "0xAsset",
      "amount": "0x64",
      "start_timestamp": 1716500000,
      "certificate": "0xCertificateBytes"
    }
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/tabs/{tab_id}',
                          desc: 'Fetch a single tab.',
                          expects: 'Path param: tab_id.',
                          returns: 'TabInfo | null',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "tab_id": "0x1",
  "user_address": "0xUser",
  "recipient_address": "0xRecipient",
  "asset_address": "0xAsset",
  "start_timestamp": 1716500000,
  "ttl_seconds": 3600,
  "status": "open",
  "settlement_status": "pending",
  "created_at": 1716500000,
  "updated_at": 1716500300
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/recipients/{recipient_address}/tabs',
                          desc: 'List tabs for a recipient.',
                          expects:
                            'Path param: recipient_address. Optional query: settlement_status (repeatable).',
                          returns: 'TabInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "tab_id": "0x1",
    "user_address": "0xUser",
    "recipient_address": "0xRecipient",
    "asset_address": "0xAsset",
    "start_timestamp": 1716500000,
    "ttl_seconds": 3600,
    "status": "open",
    "settlement_status": "pending",
    "created_at": 1716500000,
    "updated_at": 1716500300
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/tabs/{tab_id}/guarantees',
                          desc: 'List all guarantees for a tab.',
                          expects: 'Path param: tab_id.',
                          returns: 'GuaranteeInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "tab_id": "0x1",
    "req_id": "0x0",
    "from_address": "0xUser",
    "to_address": "0xRecipient",
    "asset_address": "0xAsset",
    "amount": "0x64",
    "start_timestamp": 1716500000,
    "certificate": "0xCertificateBytes"
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/tabs/{tab_id}/guarantees/latest',
                          desc: 'Get the latest guarantee for a tab.',
                          expects: 'Path param: tab_id.',
                          returns: 'GuaranteeInfo | null',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "tab_id": "0x1",
  "req_id": "0x0",
  "from_address": "0xUser",
  "to_address": "0xRecipient",
  "asset_address": "0xAsset",
  "amount": "0x64",
  "start_timestamp": 1716500000,
  "certificate": "0xCertificateBytes"
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/tabs/{tab_id}/guarantees/{req_id}',
                          desc: 'Get a specific guarantee by req_id.',
                          expects: 'Path params: tab_id, req_id.',
                          returns: 'GuaranteeInfo | null',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "tab_id": "0x1",
  "req_id": "0x0",
  "from_address": "0xUser",
  "to_address": "0xRecipient",
  "asset_address": "0xAsset",
  "amount": "0x64",
  "start_timestamp": 1716500000,
  "certificate": "0xCertificateBytes"
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/recipients/{recipient_address}/payments',
                          desc: 'List on-chain payments observed for a recipient.',
                          expects: 'Path param: recipient_address.',
                          returns: 'UserTransactionInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "user_address": "0xUser",
    "recipient_address": "0xRecipient",
    "tx_hash": "0xTxHash",
    "amount": "0x64",
    "verified": true,
    "finalized": true,
    "failed": false,
    "created_at": 1716500000
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/tabs/{tab_id}/collateral-events',
                          desc: 'List collateral events tied to a tab.',
                          expects: 'Path param: tab_id.',
                          returns: 'CollateralEventInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "id": "evt_1",
    "user_address": "0xUser",
    "asset_address": "0xAsset",
    "amount": "0x64",
    "event_type": "guarantee_issued",
    "tab_id": "0x1",
    "req_id": "0x0",
    "tx_id": null,
    "created_at": 1716500000
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/users/{user_address}/assets/{asset_address}',
                          desc: 'Get a user’s asset balance.',
                          expects: 'Path params: user_address, asset_address.',
                          returns: 'AssetBalanceInfo | null',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "user_address": "0xUser",
  "asset_address": "0xAsset",
  "total": "0x64",
  "locked": "0x10",
  "version": 1,
  "updated_at": 1716500000
}`,
                            },
                          ],
                        },
                        {
                          method: 'POST',
                          path: '/core/users/{user_address}/suspension',
                          desc: 'Suspend or unsuspend a user.',
                          expects:
                            'Header: x-api-key (scope user_suspension:write). Body: { suspended: boolean }',
                          returns: '{ user_address, suspended, updated_at }',
                          examples: [
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "suspended": true
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "user_address": "0xUser",
  "suspended": true,
  "updated_at": 1716500000
}`,
                            },
                          ],
                        },
                        {
                          method: 'GET',
                          path: '/core/admin/api-keys',
                          desc: 'List admin API keys.',
                          expects: 'Header: x-api-key (scope admin_api_keys:manage).',
                          returns: 'AdminApiKeyInfo[]',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `[
  {
    "id": "uuid",
    "name": "ops",
    "scopes": ["admin_api_keys:manage"],
    "created_at": 1716500000,
    "revoked_at": null
  }
]`,
                            },
                          ],
                        },
                        {
                          method: 'POST',
                          path: '/core/admin/api-keys',
                          desc: 'Create a new admin API key.',
                          expects:
                            'Header: x-api-key (scope admin_api_keys:manage). Body: { name, scopes }',
                          returns: '{ id, name, scopes, created_at, api_key }',
                          examples: [
                            {
                              label: 'Request',
                              language: 'json',
                              code: `{
  "name": "ops",
  "scopes": ["admin_api_keys:manage"]
}`,
                            },
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "id": "uuid",
  "name": "ops",
  "scopes": ["admin_api_keys:manage"],
  "created_at": 1716500000,
  "api_key": "ak_..."
}`,
                            },
                          ],
                        },
                        {
                          method: 'POST',
                          path: '/core/admin/api-keys/{id}/revoke',
                          desc: 'Revoke an admin API key.',
                          expects:
                            'Header: x-api-key (scope admin_api_keys:manage). Path param: id (uuid).',
                          returns: '{ id, name, scopes, created_at, revoked_at? }',
                          examples: [
                            {
                              label: 'Response',
                              language: 'json',
                              code: `{
  "id": "uuid",
  "name": "ops",
  "scopes": ["admin_api_keys:manage"],
  "created_at": 1716500000,
  "revoked_at": 1716501000
}`,
                            },
                          ],
                        },
                      ].map((endpoint) => (
                        <div key={`${endpoint.method}-${endpoint.path}`} className="border border-white/10 rounded-lg p-5 space-y-2 bg-white/5">
                          <h3 className="text-lg font-semibold text-[#E7F1FF]">
                            {endpoint.method} {endpoint.path}
                          </h3>
                          <p className="text-sm text-[#C8D7F2]">
                            <span className="font-semibold">What it does:</span> {endpoint.desc}
                          </p>
                          <p className="text-sm text-[#C8D7F2]">
                            <span className="font-semibold">Gets:</span> {endpoint.expects}
                          </p>
                          <p className="text-sm text-[#C8D7F2]">
                            <span className="font-semibold">Returns:</span> {endpoint.returns}
                          </p>
                          {endpoint.examples && <CodeTabs blocks={endpoint.examples} />}
                        </div>
                      ))}
                    </div>
                    <div className="border border-white/10 rounded-lg p-5 text-sm text-[#C8D7F2] space-y-2">
                      <h3 className="text-lg font-semibold text-[#E7F1FF]">Response shape notes</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="font-mono">TabInfo</code>: tab_id, user_address, recipient_address, asset_address, start_timestamp, ttl_seconds, status, settlement_status, created_at, updated_at.</li>
                        <li><code className="font-mono">GuaranteeInfo</code>: tab_id, req_id, from_address, to_address, asset_address, amount, start_timestamp, certificate?.</li>
                        <li><code className="font-mono">PendingRemunerationInfo</code>: tab, latest_guarantee?.</li>
                        <li><code className="font-mono">CollateralEventInfo</code>: id, user_address, asset_address, amount, event_type, tab_id?, req_id?, tx_id?, created_at.</li>
                        <li><code className="font-mono">UserTransactionInfo</code>: user_address, recipient_address, tx_hash, amount, verified, finalized, failed, created_at.</li>
                        <li><code className="font-mono">AssetBalanceInfo</code>: user_address, asset_address, total, locked, version, updated_at.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'payment-flow' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Protocol Flow</h2>
                  <div className="space-y-6">
                    <p className="text-[#C8D7F2] leading-relaxed">
                      This flow summarizes the internal protocol sequence for credit guarantees, from collateral to settlement and
                      remuneration. It mirrors the internal sequence diagrams in <code className="font-mono">Sequence Diagrams</code>.
                    </p>
                    <div className="bg-white/10 border border-white/10 rounded-lg p-6">
                      <ol className="list-decimal list-inside space-y-3 text-[#C8D7F2]">
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Deposit collateral.</span> Payers deposit ETH or ERC-20 into the
                          Core4Mica vault; the core listener persists collateral events so wallets are eligible.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Discovery.</span> The resource returns a 402 template with accepted
                          <code className="font-mono"> (scheme, network)</code> pairs and a <code className="font-mono">tabEndpoint</code>.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Tab provisioning.</span> The resource calls the facilitator
                          <code className="font-mono"> /tabs</code> (typically via <code className="font-mono">tabEndpoint</code>) to open or reuse a tab.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Header composition.</span> The payer (or SDK helper) signs
                          <code className="font-mono"> PaymentGuaranteeRequestClaimsV1</code> and wraps it into a base64
                          <code className="font-mono"> X-PAYMENT</code> header.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Verification.</span> The resource calls
                          <code className="font-mono"> /verify</code> for structural validation (no core call).
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Settlement.</span> The resource calls
                          <code className="font-mono"> /settle</code>, the facilitator requests a BLS certificate from core, verifies it, and returns it.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Tab closure.</span> Happy path: the payer settles on-chain using the
                          <code className="font-mono"> req_id</code> in the certificate. Default path: after grace period, the recipient
                          remunerates on-chain with the certificate.
                        </li>
                        <li>
                          <span className="font-semibold text-[#C8D7F2]">Withdrawals &amp; sync.</span> Withdrawal requests pause guarantees while
                          events settle; background operators stream events to keep core state aligned.
                        </li>
                      </ol>
                    </div>
                    <div className="border border-white/10 rounded-lg p-6 space-y-3">
                      <h3 className="text-lg font-semibold text-[#E7F1FF]">High-level sequence</h3>
                      <MermaidDiagram
                        code={`sequenceDiagram
    autonumber
    participant Client as Payer SDK
    participant Resource as Recipient Resource
    participant Facilitator as x402-4Mica Facilitator
    participant CoreService as 4Mica Core
    participant Contract as Vault

    Client->>Contract: Deposit collateral
    Contract-->>CoreService: Collateral event
    CoreService->>CoreService: Sync collateral state

    Client->>Resource: Request protected content
    Resource-->>Client: 402 Payment Required (template + tabEndpoint)
    Client->>Resource: POST tabEndpoint (wallet + requirements)
    Resource->>Facilitator: POST /tabs
    Facilitator->>CoreService: Create/reuse tab
    CoreService-->>Facilitator: Tab metadata
    Facilitator-->>Resource: Tab info
    Resource-->>Client: paymentRequirements + tabId (bound to wallet)

    Client->>Resource: Retry with X-PAYMENT header
    Resource->>Facilitator: POST /verify
    Facilitator-->>Resource: Valid / invalid decision

    Resource->>Facilitator: POST /settle
    Facilitator->>CoreService: Request guarantee
    CoreService-->>Facilitator: BLS certificate
    Facilitator-->>Resource: Success + certificate
    Resource-->>Client: Serve protected response

    alt User pays tab
        Client->>Contract: payTab/payTabInERC20Token
        Contract-->>CoreService: Payment events
        CoreService->>CoreService: Record payment & unlock collateral
        CoreService-->>Resource: Tab marked settled
    else User defaults and Recipient redeems guarantee
        Resource->>Contract: remunerate(guarantee, signature)
        Contract-->>CoreService: RecipientRemunerated event
        CoreService->>CoreService: Update repo, reduce collateral
        Contract->>Resource: Pay amount of tab from User collateral
    end

    Client->>Contract: Request/cancel/finalize withdrawal
    Contract-->>CoreService: Withdrawal events
    CoreService->>CoreService: Pause/unpause wallet & update balances`}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-[#E5E5E5] rounded-lg p-4">
                        <h4 className="font-semibold text-[#C8D7F2] mb-3">Actors</h4>
                        <ul className="space-y-2 text-sm text-[#C8D7F2]">
                          <li>Payer SDK: deposits collateral, signs guarantees, pays tabs.</li>
                          <li>Recipient resource: issues 402 templates, calls verify/settle.</li>
                          <li>Facilitator (<code className="font-mono">x402-4mica</code>): /tabs, /verify, /settle orchestration.</li>
                          <li>Core service: issues BLS guarantees and tracks tab state.</li>
                          <li>Core4Mica contract: custodies collateral and pays/remunerates.</li>
                        </ul>
                      </div>
                      <div className="border border-[#E5E5E5] rounded-lg p-4">
                        <h4 className="font-semibold text-[#C8D7F2] mb-3">Guards &amp; guarantees</h4>
                        <ul className="space-y-2 text-sm text-[#C8D7F2]">
                          <li>/verify is structural only; no core calls.</li>
                          <li>/settle upgrades claims with monotonic <code className="font-mono">req_id</code> and running totals.</li>
                          <li>Certificates are verified against operator public parameters and domain.</li>
                          <li>Remuneration only succeeds after grace period and if the tab is unpaid.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'examples' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Code Examples</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#E7F1FF] mb-3">End-to-End Payment Flow</h3>
                      <CodeBlock
                        code={`use rust_sdk_4mica::{
    Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme, U256,
};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let user_config = ConfigBuilder::default()
        .wallet_private_key("user_private_key".to_string())
        .build()?;
    let user_client = Client::new(user_config).await?;

    let recipient_config = ConfigBuilder::default()
        .wallet_private_key("recipient_private_key".to_string())
        .build()?;
    let recipient_client = Client::new(recipient_config).await?;

    let deposit_amount = U256::from(2_000_000_000_000_000_000u128);
    let receipt = user_client.user.deposit(deposit_amount).await?;
    println!("Deposited collateral: {:?}", receipt.transaction_hash);

    let user_address = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8".to_string();
    let recipient_address = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC".to_string();
    let tab_id = recipient_client
        .recipient
        .create_tab(user_address.clone(), recipient_address.clone(), Some(3600))
        .await?;
    println!("Created tab: {}", tab_id);

    let claims = PaymentGuaranteeRequestClaims::new(
        user_address.clone(),
        recipient_address.clone(),
        tab_id,
        U256::ZERO,
        U256::from(1_000_000_000_000_000_000u128),
        std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)?
            .as_secs(),
        None,
    );
    let payment_sig = user_client.user.sign_payment(claims.clone(), SigningScheme::Eip712).await?;
    println!("Payment signed");

    let bls_cert = recipient_client
        .recipient
        .issue_payment_guarantee(claims, payment_sig.signature, payment_sig.scheme)
        .await?;
    println!("Guarantee issued");

    let receipt = recipient_client.recipient.remunerate(bls_cert).await?;
    println!("Claimed from user collateral!");
    println!("Transaction hash: {:?}", receipt.transaction_hash);

    Ok(())
}`}
                        language="rust"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'support' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6">Support & Licensing</h2>
                  <div className="space-y-6 text-[#C8D7F2]">
                    <p>
                      The SDK is MIT licensed (see <code className="font-mono">LICENSE</code>) and aligns with the refreshed SDK README and protocol
                      docs. Use the links below for the latest code, facilitator examples, and public documentation.
                    </p>
                    <div className="bg-white/10 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#E7F1FF] mb-3">Official Resources</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="font-semibold">Website:</span>{' '}
                          <a className="text-[#1E4DD8]" href="https://4mica.xyz" target="_blank" rel="noreferrer">
                            https://4mica.xyz
                          </a>
                        </li>
                        <li>
                          <span className="font-semibold">Rust SDK README:</span>{' '}
                          <a className="text-[#1E4DD8]" href="https://github.com/4mica-Network/4mica-core/tree/main/sdk" target="_blank" rel="noreferrer">
                            github.com/4mica-Network/4mica-core/tree/main/sdk
                          </a>
                        </li>
                        <li>
                          <span className="font-semibold">Facilitator (x402-4mica):</span>{' '}
                          <a
                            className="text-[#1E4DD8]"
                            href="https://github.com/4mica-Network/x402-4mica"
                            target="_blank"
                            rel="noreferrer"
                          >
                            github.com/4mica-Network/x402-4mica
                          </a>
                        </li>
                        <li>
                          <span className="font-semibold">Core Platform:</span>{' '}
                          <a
                            className="text-[#1E4DD8]"
                            href="https://github.com/4mica-Network/4mica-core"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://github.com/4mica-Network/4mica-core
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-center">
                      <span className="block">Made with ❤️ by the 4Mica Network</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
