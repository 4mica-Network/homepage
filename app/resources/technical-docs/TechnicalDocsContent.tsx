'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CodeBlock from '../../../components/CodeBlock';

const navigationItems = [
  { id: 'overview', title: 'Overview', icon: 'ri-eye-line' },
  { id: 'installation', title: 'Installation', icon: 'ri-download-cloud-2-line' },
  { id: 'configuration', title: 'Configuration', icon: 'ri-equalizer-line' },
  { id: 'usage', title: 'Usage Guide', icon: 'ri-terminal-box-line' },
  { id: 'x402', title: 'X402 Integration', icon: 'ri-key-2-line' },
  { id: 'payment-flow', title: 'Protocol Flow', icon: 'ri-route-line' },
  { id: 'error-handling', title: 'Error Handling', icon: 'ri-error-warning-line' },
  { id: 'development', title: 'Development', icon: 'ri-tools-line' },
  { id: 'security', title: 'Security', icon: 'ri-shield-check-line' },
  { id: 'examples', title: 'Code Examples', icon: 'ri-file-code-line' },
  { id: 'support', title: 'Support', icon: 'ri-customer-service-2-line' }
];

export default function TechnicalDocsContent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F9FF] pt-20" aria-busy>Loading technical docs…</div>}>
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
    <div className="min-h-screen bg-[#F5F9FF] pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            4Mica Rust SDK Documentation
          </h1>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-xl text-[#1B1F3B] max-w-3xl mx-auto">
            In-depth documentation for the official Rust SDK powering secure, cryptographically-guaranteed tab-based
            payments on the 4Mica network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-[#1B1F3B] mb-4">Contents</h3>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center ${
                      activeSection === item.id
                        ? 'bg-[#1E4DD8] text-white'
                        : 'text-[#1B1F3B] hover:bg-[#F5F9FF]'
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeSection === 'overview' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Overview</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      The latest 4Mica Rust SDK (v0.3.3) powers cryptographically enforced, non-custodial credit lines. It wraps the
                      Core4Mica contracts, facilitator, and HTTP 402 helper into a single toolkit so you can collateralize, issue
                      guarantees, and settle tabs without forcing users to pre-fund every request.
                    </p>
                    <p className="text-[#1B1F3B] leading-relaxed">
                      This page summarizes the refreshed SDK README plus the latest protocol sequence diagrams. Use it as a quick-start
                      for integrating Core4Mica directly or bridging HTTP 402 resources through the x402-4mica facilitator.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-4">Key Capabilities</h3>
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
                          <div key={index} className="bg-[#F5F9FF] rounded-lg p-4">
                            <h4 className="font-semibold text-[#1B1F3B] mb-2">{item.title}</h4>
                            <p className="text-sm text-[#1B1F3B]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'installation' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Installation</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      The SDK ships as <code className="font-mono">rust-sdk-4mica</code> on crates.io (currently <code className="font-mono">0.3.3</code>).
                      It targets the Core4Mica contracts and x402 facilitator APIs with Tokio + async support baked in.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Cargo Dependency</h3>
                      <CodeBlock
                        code={`[dependencies]
rust-sdk-4mica = "0.3.3"`}
                        language="toml"
                        className="p-4"
                      />
                      <p className="text-sm text-[#1B1F3B] mt-3">
                        You can also run <code className="font-mono">cargo add rust-sdk-4mica@0.3.3</code>. After updating{' '}
                        <code className="font-mono">Cargo.toml</code>, run <code className="font-mono">cargo build</code> to pull the crate and
                        verify your toolchain.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'configuration' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Configuration</h2>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">Required Parameters</h3>
                      <ul className="space-y-2 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold">wallet_private_key:</span> Hex-encoded signer key with or without a{' '}
                          <code className="font-mono">0x</code> prefix. This is the only required setting.
                        </li>
                        <li>
                          <span className="font-semibold">rpc_url:</span> 4Mica RPC endpoint. Defaults to{' '}
                          <code className="font-mono">https://api.4mica.xyz/</code>; override for local stacks.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">Optional Parameters</h3>
                      <p className="text-[#1B1F3B]">
                        The SDK fetches most public params automatically. Override these when pointing at custom infrastructure.
                      </p>
                      <ul className="space-y-2 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold">ethereum_http_rpc_url:</span> Upstream Ethereum JSON-RPC endpoint.
                        </li>
                        <li>
                          <span className="font-semibold">contract_address:</span> Deployed Core4Mica contract address.
                        </li>
                      </ul>
                      <p className="text-sm text-[#1B1F3B]">
                        The Ethereum <code className="font-mono">chain_id</code>, contract metadata, and operator parameters are fetched and
                        validated from the core service automatically.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">Config Builder Example</h3>
                      <CodeBlock
                        code={`use rust_sdk_4mica::{Config, ConfigBuilder, Client};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = ConfigBuilder::default()
        .wallet_private_key("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80".to_string())
        .build()?;

    let client = Client::new(config).await?;
    Ok(())
}`}
                        language="rust"
                        className="p-4"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">Environment Variable Setup</h3>
                      <CodeBlock
                        code={`export 4MICA_WALLET_PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

# Optional: override defaults (api.4mica.xyz is used automatically if unset)
export 4MICA_RPC_URL="https://api.4mica.xyz/"
export 4MICA_ETHEREUM_HTTP_RPC_URL="http://localhost:8545"
export 4MICA_CONTRACT_ADDRESS="0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0"`}
                        language="bash"
                        className="p-4"
                      />
                      <CodeBlock
                        code={`use rust_sdk_4mica::{ConfigBuilder, Client};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = ConfigBuilder::default()
        .from_env()
        .build()?;

    let client = Client::new(config).await?;
    Ok(())
}`}
                        language="rust"
                        className="p-4"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'usage' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Usage Guide</h2>
                  <div className="space-y-8">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      <code className="font-mono">Client</code> exposes <code className="font-mono">user</code> and{' '}
                      <code className="font-mono">recipient</code> helpers that share signer + public parameters. Layer{' '}
                      <code className="font-mono">X402Flow</code> on top when you need HTTP 402 integration (see the next section).
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-4">API Methods Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-3">UserClient Methods</h4>
                          <ul className="space-y-2 text-[#1B1F3B] text-sm">
                            <li>
                              <span className="font-semibold">deposit(amount: U256, erc20_token?: String)</span> → TransactionReceipt | DepositError
                            </li>
                            <li>
                              <span className="font-semibold">get_user()</span> → UserInfo | GetUserError
                            </li>
                            <li>
                              <span className="font-semibold">get_tab_payment_status(tab_id: U256)</span> → TabPaymentStatus | TabPaymentStatusError
                            </li>
                            <li>
                              <span className="font-semibold">sign_payment(claims, scheme)</span> → PaymentSignature | SignPaymentError
                            </li>
                            <li>
                              <span className="font-semibold">pay_tab(tab_id, req_id, amount, recipient)</span> → TransactionReceipt | PayTabError
                            </li>
                            <li>
                              <span className="font-semibold">request_withdrawal(amount)</span> → TransactionReceipt | RequestWithdrawalError
                            </li>
                            <li>
                              <span className="font-semibold">cancel_withdrawal()</span> → TransactionReceipt | CancelWithdrawalError
                            </li>
                            <li>
                              <span className="font-semibold">finalize_withdrawal()</span> → TransactionReceipt | FinalizeWithdrawalError
                            </li>
                          </ul>
                        </div>
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-3">RecipientClient Methods</h4>
                          <ul className="space-y-2 text-[#1B1F3B] text-sm">
                            <li>
                              <span className="font-semibold">create_tab(user_address, recipient_address, ttl)</span> → U256 | CreateTabError
                            </li>
                            <li>
                              <span className="font-semibold">get_tab_payment_status(tab_id)</span> → TabPaymentStatus | TabPaymentStatusError
                            </li>
                            <li>
                              <span className="font-semibold">issue_payment_guarantee(claims, signature, scheme)</span> → BLSCert | IssuePaymentGuaranteeError
                            </li>
                            <li>
                              <span className="font-semibold">remunerate(cert)</span> → TransactionReceipt | RemunerateError
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Instantiate once, reuse everywhere</h3>
                      <CodeBlock
                        code={`use rust_sdk_4mica::{Client, ConfigBuilder};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    ).await?;

    // client.user and client.recipient share the same signer + params
    println!("ready: {}", client.user.address()?);
    Ok(())
}`}
                        language="rust"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">User Client (Payer)</h3>
                      <div className="space-y-4">
                        <CodeBlock
                          code={`use rust_sdk_4mica::U256;

// Deposit 1 ETH as collateral
let amount = U256::from(1_000_000_000_000_000_000u128);
match client.user.deposit(amount).await {
    Ok(receipt) => println!("Deposit successful: {:?}", receipt.transaction_hash),
    Err(e) => eprintln!("Deposit failed: {}", e),
}`}
                          language="rust"
                        />
                        <CodeBlock
                          code={`use rust_sdk_4mica::UserInfo;

// Inspect current collateral and withdrawal state
let user_info = client.user.get_user().await?;
println!("Collateral: {}", user_info.collateral);
println!("Withdrawal request amount: {}", user_info.withdrawal_request_amount);
println!("Withdrawal request timestamp: {}", user_info.withdrawal_request_timestamp);`}
                          language="rust"
                        />
                        <CodeBlock
                          code={`use rust_sdk_4mica::{PaymentGuaranteeClaims, SigningScheme, U256};

let claims = PaymentGuaranteeClaims {
    user_address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8".to_string(),
    recipient_address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC".to_string(),
    tab_id: U256::from(1),
    req_id: U256::from(1),
    amount: U256::from(1_000_000_000_000_000_000u128),
    timestamp: 1704067200,
};

match client.user.sign_payment(claims.clone(), SigningScheme::Eip712).await {
    Ok(sig) => {
        println!("Signature: {}", sig.signature);
        println!("Scheme: {:?}", sig.scheme);
    }
    Err(e) => eprintln!("Signing failed: {}", e),
}

let fallback_sig = client.user.sign_payment(claims, SigningScheme::Eip191).await?;`}
                          language="rust"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Recipient Client</h3>
                      <div className="space-y-4">
                        <CodeBlock
                          code={`let user_address = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8".to_string();
let recipient_address = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC".to_string();
let tab_id = client.recipient.create_tab(user_address, recipient_address, Some(3600)).await?;
println!("Created tab with ID: {}", tab_id);`}
                          language="rust"
                        />
                        <CodeBlock
                          code={`let status = client.recipient.get_tab_payment_status(tab_id).await?;
println!("Paid: {}", status.paid);
println!("Remunerated: {}", status.remunerated);`}
                          language="rust"
                        />
                        <CodeBlock
                          code={`let payment_sig = client.user.sign_payment(claims.clone(), SigningScheme::Eip712).await?;
let bls_cert = client.recipient.issue_payment_guarantee(
    claims,
    payment_sig.signature,
    payment_sig.scheme,
).await?;
println!("BLS Certificate: {:?}", bls_cert);`}
                          language="rust"
                        />
                        <CodeBlock
                          code={`let receipt = client.recipient.remunerate(bls_cert).await?;
println!("Claimed from user collateral!");
println!("Transaction hash: {:?}", receipt.transaction_hash);`}
                          language="rust"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'x402' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">HTTP 402 / X402 Integration</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      <code className="font-mono">X402Flow</code> turns <code className="font-mono">paymentRequirements</code> from a{' '}
                      <code className="font-mono">402 Payment Required</code> response into a signed <code className="font-mono">X-PAYMENT</code>{' '}
                      header. It mirrors the facilitator flow described in the latest SDK README and the sequence diagrams:
                    </p>
                    <div className="bg-[#F5F9FF] rounded-lg p-6">
                      <ol className="list-decimal list-inside space-y-3 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold">Discover requirements.</span> Client receives{' '}
                          <code className="font-mono">paymentRequirementsTemplate</code> +{' '}
                          <code className="font-mono">extra.tabEndpoint</code> in a 402 response (with accepted <code className="font-mono">(scheme, network)</code> pairs).
                        </li>
                        <li>
                          <span className="font-semibold">Refresh tab + bind wallet.</span> <code className="font-mono">X402Flow</code> POSTs{' '}
                          <code className="font-mono">tabEndpoint</code> with <code className="font-mono">{'{ userAddress, paymentRequirements }'}</code>{' '}
                          so the facilitator opens or reuses the tab and stamps <code className="font-mono">tabId</code>.
                        </li>
                        <li>
                          <span className="font-semibold">Sign the guarantee.</span> The helper builds{' '}
                          <code className="font-mono">PaymentGuaranteeRequestClaimsV1</code> and signs it via EIP-712 (4mica-only schemes),
                          returning the base64 <code className="font-mono">X-PAYMENT</code> header.
                        </li>
                        <li>
                          <span className="font-semibold">Retry &amp; verify.</span> The resource retries with <code className="font-mono">X-PAYMENT</code>,
                          forwards the payload to <code className="font-mono">/verify</code>, and receives structured validation without hitting core.
                        </li>
                        <li>
                          <span className="font-semibold">Settle when ready.</span> The resource calls <code className="font-mono">/settle</code> (or uses{' '}
                          <code className="font-mono">X402Flow::settle_payment</code>) to mint a BLS certificate from the core service. Recipients persist
                          that certificate for later on-chain remuneration if the payer never clears the tab.
                        </li>
                      </ol>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="text-lg font-semibold text-[#1B1F3B] mb-3">Client side: build the header</h3>
                        <CodeBlock
                          code={`use rust_sdk_4mica::{Client, ConfigBuilder, X402Flow};
use rust_sdk_4mica::x402::PaymentRequirements;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let payer = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("PAYER_KEY")?)
            .build()?,
    ).await?;

    let payment_requirements: PaymentRequirements = serde_json::from_value(
        tab_response["paymentRequirements"].clone()
    )?;
    let user_address = std::env::var("PAYER_ADDRESS")?;

    let flow = X402Flow::new(payer)?;
    let signed = flow
        .sign_payment(payment_requirements.clone(), user_address.clone())
        .await?;

    let x_payment_header = signed.header; // send as X-PAYMENT
    Ok(())
}`}
                          language="rust"
                          className="p-4"
                        />
                      </div>
                      <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="text-lg font-semibold text-[#1B1F3B] mb-3">Server side: settle after /verify</h3>
                        <CodeBlock
                          code={`use rust_sdk_4mica::{Client, ConfigBuilder, X402Flow, X402SignedPayment};
use rust_sdk_4mica::x402::PaymentRequirements;

async fn settle(
    facilitator_url: &str,
    payment_requirements: PaymentRequirements,
    payment: X402SignedPayment,
) -> Result<(), Box<dyn std::error::Error>> {
    let core = Client::new(
        ConfigBuilder::default()
            .wallet_private_key(std::env::var("RESOURCE_SIGNER_KEY")?)
            .build()?,
    ).await?;
    let flow = X402Flow::new(core)?;

    let settled = flow
        .settle_payment(payment, payment_requirements, facilitator_url)
        .await?;
    println!("settlement result: {}", settled.settlement);
    Ok(())
}`}
                          language="rust"
                          className="p-4"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-[#1B1F3B]">
                      Notes: <code className="font-mono">scheme</code> must include <code className="font-mono">4mica</code>, claims must match the advertised
                      <code className="font-mono">paymentRequirements</code>, and <code className="font-mono">X402Flow</code> auto-refreshes tabs via{' '}
                      <code className="font-mono">extra.tabEndpoint</code> before signing. The facilitator mirrors upstream errors so resources can return
                      precise HTTP 402 responses.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'payment-flow' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Payment Flow</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      Tabs model ongoing work between a payer and a recipient. The sequence below condenses the refreshed protocol overview
                      (see <code className="font-mono">4mica_protocol_overview.md</code> and <code className="font-mono">4mica_protocol_credit.txt</code>):
                    </p>
                    <div className="bg-[#F5F9FF] rounded-lg p-6">
                      <ol className="list-decimal list-inside space-y-3 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Deposit collateral.</span> Users lock ETH or ERC-20 in Core4Mica; the
                          API syncs events so wallets become eligible for guarantees.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Discover payment options.</span> Recipients respond with 402 templates listing accepted{' '}
                          <code className="font-mono">(scheme, network)</code> pairs and a <code className="font-mono">tabEndpoint</code> for minting tabs.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Provision a tab.</span> Resource servers (or <code className="font-mono">X402Flow</code>) POST{' '}
                          <code className="font-mono">/tabs</code> through the facilitator to bind <code className="font-mono">tabId</code> to the payer wallet and asset/TTL.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Compose guarantees.</span> Payers sign{' '}
                          <code className="font-mono">PaymentGuaranteeRequestClaimsV1</code> for each request. The facilitator upgrades them to include{' '}
                          <code className="font-mono">req_id</code>, running totals, and domain info before BLS signing.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Pre-flight &amp; settle.</span> Resources call <code className="font-mono">/verify</code> to validate
                          structure, then <code className="font-mono">/settle</code> to mint certificates. Certificates let work proceed while the user still holds funds.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Close the tab.</span> Happy path: payer calls <code className="font-mono">pay_tab</code> on-chain using the latest{' '}
                          <code className="font-mono">req_id</code>. Fallback: after grace period, recipients call <code className="font-mono">remunerate</code> on-chain with the certificate.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Withdraw safely.</span> Withdrawal requests pause guarantee issuance for that wallet until
                          the contract events finalize, ensuring no double spends across tabs and withdrawals.
                        </li>
                      </ol>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-[#E5E5E5] rounded-lg p-4">
                        <h4 className="font-semibold text-[#1B1F3B] mb-3">Actors</h4>
                        <ul className="space-y-2 text-sm text-[#1B1F3B]">
                          <li>Payer SDK (<code className="font-mono">rust-sdk-4mica</code>): signs guarantees, pays tabs, requests withdrawals.</li>
                          <li>Resource + facilitator (<code className="font-mono">x402-4mica</code>): exposes <code className="font-mono">/supported</code>,{' '}
                            <code className="font-mono">/tabs</code>, <code className="font-mono">/verify</code>, and <code className="font-mono">/settle</code>.</li>
                          <li>Core service (<code className="font-mono">api.4mica.xyz</code>): issues BLS guarantees, tracks tabs, streams contract events.</li>
                          <li>Core4Mica contract: enforces grace periods, verifies BLS certs, and moves collateral.</li>
                        </ul>
                      </div>
                      <div className="border border-[#E5E5E5] rounded-lg p-4">
                        <h4 className="font-semibold text-[#1B1F3B] mb-3">Guards &amp; guarantees</h4>
                        <ul className="space-y-2 text-sm text-[#1B1F3B]">
                          <li>Zero-amount claims, invalid recipients, and double spends are rejected before signing.</li>
                          <li>BLS certificates are verified against operator public parameters (domain-separated).</li>
                          <li>Remuneration fails if the tab is expired, already paid, or previously remunerated.</li>
                          <li>Collateral and withdrawal events are synchronized so payouts never exceed locked funds.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'error-handling' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Error Handling</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      The SDK exposes precise error enums per operation so you can react to specific failure cases, surface actionable
                      messages, and retry safely.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Configuration',
                          items: ['ConfigError::InvalidValue', 'ConfigError::Missing']
                        },
                        {
                          title: 'Client & RPC',
                          items: ['ClientError::Rpc', 'ClientError::Provider']
                        },
                        {
                          title: 'Signing',
                          items: [
                            'SignPaymentError::AddressMismatch',
                            'SignPaymentError::InvalidUserAddress',
                            'SignPaymentError::InvalidRecipientAddress',
                            'SignPaymentError::Failed',
                            'SignPaymentError::Rpc'
                          ]
                        },
                        {
                          title: 'Deposits & Withdrawals',
                          items: [
                            'DepositError::{InvalidParams, AmountZero, UnknownRevert, Transport}',
                            'RequestWithdrawalError::{InvalidParams, AmountZero, InsufficientAvailable, UnknownRevert, Transport}',
                            'CancelWithdrawalError::{InvalidParams, NoWithdrawalRequested, UnknownRevert, Transport}',
                            'FinalizeWithdrawalError::{InvalidParams, NoWithdrawalRequested, GracePeriodNotElapsed, TransferFailed, UnknownRevert, Transport}'
                          ]
                        },
                        {
                          title: 'Tabs & Payments',
                          items: [
                            'CreateTabError::InvalidParams',
                            'PayTabError::{InvalidParams, Transport}',
                            'TabPaymentStatusError::{UnknownRevert, Transport}'
                          ]
                        },
                        {
                          title: 'Guarantees & Remuneration',
                          items: [
                            'IssuePaymentGuaranteeError::{InvalidParams, Rpc}',
                            'RemunerateError::InvalidParams',
                            'RemunerateError::TabNotYetOverdue',
                            'RemunerateError::TabExpired',
                            'RemunerateError::TabPreviouslyRemunerated',
                            'RemunerateError::TabAlreadyPaid',
                            'RemunerateError::InvalidSignature',
                            'RemunerateError::DoubleSpendingDetected',
                            'RemunerateError::InvalidRecipient',
                            'RemunerateError::AmountZero',
                            'RemunerateError::TransferFailed',
                            'RemunerateError::Transport'
                          ]
                        }
                      ].map((group, index) => (
                        <div key={index} className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-3">{group.title}</h4>
                          <ul className="space-y-2 text-sm text-[#1B1F3B]">
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <CodeBlock
                      code={`use rust_sdk_4mica::error::{
    DepositError,
    FinalizeWithdrawalError,
    RemunerateError,
    RequestWithdrawalError,
    SignPaymentError,
};`}
                      language="rust"
                      className="p-4"
                    />
                  </div>
                </div>
              )}

              {activeSection === 'development' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Development</h2>
                  <div className="space-y-6 text-[#1B1F3B]">
                    <p>
                      The SDK ships with unit and integration tests targeting contract behavior, serialization, and x402 helpers. Use the
                      following commands while developing new integrations or contributing upstream.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Run Test Suite', command: 'cargo test' },
                        { title: 'Format & Lint', command: 'cargo fmt && cargo clippy -- -D warnings' },
                        { title: 'Build for Release', command: 'cargo build --release' }
                      ].map((item, index) => (
                        <div key={index} className="bg-[#F5F9FF] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">{item.title}</h4>
                          <CodeBlock code={item.command} language="bash" className="p-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Security Considerations</h2>
                  <div className="space-y-6 text-[#1B1F3B]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Never commit private keys. Use environment variables or secure key management services instead.',
                        'Validate addresses. The SDK verifies signer/claims alignment and raises AddressMismatch when they differ.',
                        'Prefer EIP-712 signing. Structured data hashing reduces replay and serialization ambiguity.',
                        'Monitor collateral levels. Double spending attempts fail, but operational alerts prevent disruption.',
                        'Use multi-signature wallets for large collateral deposits and production remitters.',
                        'Audit payment flows and settlement patterns regularly, especially when adjusting grace periods.',
                        'When using HTTP 402, enforce scheme/network matching before settling and log facilitator responses.'
                      ].map((advice, index) => (
                        <div key={index} className="border border-[#E5E5E5] rounded-lg p-4 text-sm leading-relaxed">
                          {advice}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm">
                      The Core4Mica contract prohibits zero-value transfers, enforces grace periods, and validates BLS signatures before
                      funds are released, reducing the attack surface for both users and recipients.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'examples' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Code Examples</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">End-to-End Payment Flow</h3>
                      <CodeBlock
                        code={`use rust_sdk_4mica::{
    Client, ConfigBuilder, PaymentGuaranteeClaims, SigningScheme, U256,
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

    let claims = PaymentGuaranteeClaims {
        user_address: user_address.clone(),
        recipient_address: recipient_address.clone(),
        tab_id,
        req_id: U256::from(1),
        amount: U256::from(1_000_000_000_000_000_000u128),
        timestamp: std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)?
            .as_secs(),
    };
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
                        className="p-4"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'support' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Support & Licensing</h2>
                  <div className="space-y-6 text-[#1B1F3B]">
                    <p>
                      The SDK is MIT licensed (see <code className="font-mono">LICENSE</code>) and aligns with the refreshed SDK README and protocol
                      docs. Use the links below for the latest code, facilitator examples, and public documentation.
                    </p>
                    <div className="bg-[#F5F9FF] rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-[#1B1F3B] mb-3">Official Resources</h3>
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
