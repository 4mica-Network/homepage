'use client';

import { useState } from 'react';
import CodeBlock from '../../../components/CodeBlock';

export default function TechnicalDocsContent() {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', title: 'Overview', icon: 'ri-eye-line' },
    { id: 'installation', title: 'Installation', icon: 'ri-download-cloud-2-line' },
    { id: 'configuration', title: 'Configuration', icon: 'ri-equalizer-line' },
    { id: 'usage', title: 'Usage Guide', icon: 'ri-terminal-box-line' },
    { id: 'payment-flow', title: 'Payment Flow', icon: 'ri-route-line' },
    { id: 'error-handling', title: 'Error Handling', icon: 'ri-error-warning-line' },
    { id: 'development', title: 'Development', icon: 'ri-tools-line' },
    { id: 'security', title: 'Security', icon: 'ri-shield-check-line' },
    { id: 'examples', title: 'Code Examples', icon: 'ri-file-code-line' },
    { id: 'support', title: 'Support', icon: 'ri-customer-service-2-line' }
  ];

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
                      Imagine walking into your neighborhood bar on a busy Friday. Instead of paying for each drink, you open a tab,
                      keep enjoying the night, and the bartender quietly records every round you order. There&apos;s mutual trust:
                      you promise to settle up before you leave, and the bar keeps serving without friction.
                    </p>
                    <p className="text-[#1B1F3B] leading-relaxed">
                      4Mica establishes trust in payment systems by enabling cryptographically enforced,
                      on-chain lines of credit. 
                      Each payment request generates a cryptographic guarantee that collateral is securely
                      locked and available—ensuring recipients can trust that funds will be delivered once 
                      the credit line (or “tab”) is settled. The Rust SDK provides both parties with a 
                      type-safe toolkit to manage these guarantees, including signature handling, settlements,
                      and seamless contract interactions with the Core4Mica protocol.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-4">Key Capabilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'User Client',
                            desc: 'Deposit collateral, sign guarantees, settle tabs, and manage withdrawals.'
                          },
                          {
                            title: 'Recipient Client',
                            desc: 'Open tabs, issue payment guarantees, and claim remuneration when settlements fail.'
                          },
                          {
                            title: 'Typed Errors',
                            desc: 'Strongly typed errors with detailed context for every contract-facing operation.'
                          },
                          {
                            title: 'Built-in Signing',
                            desc: 'First-class EIP-712 and EIP-191 signing utilities with automatic address validation.'
                          },
                          {
                            title: 'Type-Safe Contracts',
                            desc: 'Comprehensive Rust types wrap all Core4Mica contract interactions.'
                          },
                          {
                            title: 'Secure Defaults',
                            desc: 'Non-custodial design with configurable grace periods and tab expiration enforced on-chain.'
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
                      Add the SDK to your project&apos;s <code className="font-mono">Cargo.toml</code> dependencies. The crate is
                      published as <code className="font-mono">rust-sdk-4mica</code> and targets the Core4Mica smart contract.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Cargo Dependency</h3>
                      <CodeBlock
                        code={`[dependencies]
rust-sdk-4mica = "0.1.0"`}
                        language="toml"
                        className="p-4"
                      />
                      <p className="text-sm text-[#1B1F3B] mt-3">
                        After updating <code className="font-mono">Cargo.toml</code>, run <code className="font-mono">cargo build</code> to pull
                        the crate and verify your toolchain.
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
                          <span className="font-semibold">rpc_url:</span> 4Mica RPC endpoint (defaults to{' '}
                          <code className="font-mono">http://localhost:3000</code>).
                        </li>
                        <li>
                          <span className="font-semibold">wallet_private_key:</span> Hex-encoded signer key with or without a{' '}
                          <code className="font-mono">0x</code> prefix.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">Optional Parameters</h3>
                      <p className="text-[#1B1F3B]">
                        These are fetched from the server by default. Override only when pointing to custom infrastructure.
                      </p>
                      <ul className="space-y-2 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold">ethereum_http_rpc_url:</span> Upstream Ethereum JSON-RPC endpoint.
                        </li>
                        <li>
                          <span className="font-semibold">contract_address:</span> Deployed Core4Mica contract address.
                        </li>
                      </ul>
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

# Optional: override defaults
export 4MICA_RPC_URL="http://localhost:3000"
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
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-4">API Methods Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-3">UserClient Methods</h4>
                          <ul className="space-y-2 text-[#1B1F3B] text-sm">
                            <li>
                              <span className="font-semibold">deposit(amount: U256)</span> → TransactionReceipt | DepositError
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

              {activeSection === 'payment-flow' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Payment Flow</h2>
                  <div className="space-y-6">
                    <p className="text-[#1B1F3B] leading-relaxed">
                      Tabs model ongoing work between a payer and a recipient. Guarantees are signed promises to settle within a grace window.
                      The Core4Mica contract enforces timing, verifies signatures, and protects against double spends based on the logic shown below.
                    </p>
                    <div className="bg-[#F5F9FF] rounded-lg p-6">
                      <ol className="list-decimal list-inside space-y-3 text-[#1B1F3B]">
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Open a tab.</span> The recipient creates a unique{' '}
                          <code className="font-mono">tab_id</code> via <code className="font-mono">create_tab</code>, capturing the
                          payer wallet, recipient wallet, and optional TTL. The contract stamps <code className="font-mono">tab_timestamp</code>
                          for future grace period checks.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Issue guarantees during the tab lifetime.</span> Users sign
                          <code className="font-mono">PaymentGuaranteeClaims</code> with EIP-712 or EIP-191 and recipients mint BLS certificates
                          using <code className="font-mono">issue_payment_guarantee</code>. These guarantees reference the tab and
                          capture <code className="font-mono">req_id</code>, amount, and timestamp.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Close or settle the tab.</span> When work is completed the payer can
                          settle on-chain with <code className="font-mono">pay_tab</code> or an operator records payment via{' '}
                          <code className="font-mono">recordPayment</code>. Paid amounts accumulate in <code className="font-mono">payments[tab_id].paid</code>.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Grace period for remuneration.</span> If the payer does not settle,
                          the recipient must wait until <code className="font-mono">tab_timestamp + remunerationGracePeriod</code> to call{' '}
                          <code className="font-mono">remunerate</code>. Remuneration must happen before{' '}
                          <code className="font-mono">tab_timestamp + tabExpirationTime</code> and fails if the tab was already
                          paid or previously remunerated.
                        </li>
                        <li>
                          <span className="font-semibold text-[#1B1F3B]">Collateral adjustments.</span> A successful remuneration
                          deducts from the payer&apos;s collateral and reconciles any pending withdrawal requests that overlap the
                          tab timestamp plus <code className="font-mono">synchronizationDelay</code>.
                        </li>
                      </ol>
                    </div>
                    <p className="text-sm text-[#1B1F3B]">
                      The contract guards against zero-amount claims, invalid recipients, double spending, and expired tabs. BLS signatures
                      are verified against the configured <code className="font-mono">GUARANTEE_VERIFICATION_KEY</code>, ensuring only
                      registered verification keys can authorize remuneration.
                    </p>
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
                      The SDK ships with unit and integration tests targeting contract behavior and serialization. Use the following commands
                      while developing new integrations or contributing upstream.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Run Test Suite', command: 'cargo test' },
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
                        'Audit payment flows and settlement patterns regularly, especially when adjusting grace periods.'
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
                      The SDK is released under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license.
                      Review the license before integrating into commercial products.
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
                          <span className="font-semibold">Documentation:</span>{' '}
                          <a className="text-[#1E4DD8]" href="https://docs.4mica.xyz" target="_blank" rel="noreferrer">
                            https://docs.4mica.xyz
                          </a>
                        </li>
                        <li>
                          <span className="font-semibold">GitHub:</span>{' '}
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
