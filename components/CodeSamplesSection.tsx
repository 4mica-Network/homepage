'use client';

import { useState } from 'react';

type LanguageId = 'typescript' | 'python' | 'rust' | 'api';
type KeyAction = 'payer' | 'recipient';

const languageTabs: { id: LanguageId; label: string }[] = [
  { id: 'typescript', label: 'TypeScript' },
  { id: 'python', label: 'Python' },
  { id: 'rust', label: 'Rust' },
  { id: 'api', label: 'API' },
];

const keyActions: { id: KeyAction; label: string }[] = [
  { id: 'payer', label: 'Payer (agent)' },
  { id: 'recipient', label: 'Recipient (payee)' },
];

const codeSamples: Record<LanguageId, Record<KeyAction, string>> = {
  typescript: {
    payer: `import { Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme } from "sdk-4mica";

async function run() {
  const cfg = new ConfigBuilder()
    .fromEnv()
    .walletPrivateKey(process.env.PAYER_KEY!)
    .build();

  const client = await Client.new(cfg);

  const claims = PaymentGuaranteeRequestClaims.new(
    userAddress,
    recipientAddress,
    tabId,
    amountWei,
    Math.floor(Date.now() / 1000),
    assetAddress,
    reqId
  );

  const signed = await client.user.signPayment(claims, SigningScheme.EIP712);
  console.log(signed.signature);
}

run();`,
    recipient: `import { Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme } from "sdk-4mica";

async function run() {
  const cfg = new ConfigBuilder()
    .fromEnv()
    .walletPrivateKey(process.env.RECIPIENT_KEY!)
    .build();

  const client = await Client.new(cfg);

  const tabId = await client.recipient.createTab(
    userAddress,
    recipientAddress,
    assetAddress,
    3600
  );
  const latest = await client.recipient.getLatestGuarantee(tabId);
  const reqId = latest ? latest.reqId + 1n : 0n;

  const claims = PaymentGuaranteeRequestClaims.new(
    userAddress,
    recipientAddress,
    tabId,
    amountWei,
    Math.floor(Date.now() / 1000),
    assetAddress,
    reqId
  );

  const cert = await client.recipient.issuePaymentGuarantee(
    claims,
    payerSignature,
    SigningScheme.EIP712
  );
  console.log(cert.signature);
}

run();`,
  },
  python: {
    payer: `import asyncio
import time
from fourmica_sdk import Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme

async def main() -> None:
    cfg = ConfigBuilder().from_env().wallet_private_key(PAYER_KEY).build()
    client = await Client.new(cfg)

    claims = PaymentGuaranteeRequestClaims.new(
        user_address=user_address,
        recipient_address=recipient_address,
        tab_id=tab_id,
        req_id=req_id,
        amount=amount_wei,
        timestamp=int(time.time()),
        erc20_token=asset_address,
    )

    signature = await client.user.sign_payment(claims, SigningScheme.EIP712)
    print(signature.signature)

asyncio.run(main())`,
    recipient: `import asyncio
import time
from fourmica_sdk import Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme

async def main() -> None:
    cfg = ConfigBuilder().from_env().wallet_private_key(RECIPIENT_KEY).build()
    client = await Client.new(cfg)

    tab_id = await client.recipient.create_tab(
        user_address=user_address,
        recipient_address=recipient_address,
        erc20_token=asset_address,
        ttl=3600,
    )
    latest = await client.recipient.get_latest_guarantee(tab_id)
    req_id = latest.req_id + 1 if latest else 0

    claims = PaymentGuaranteeRequestClaims.new(
        user_address=user_address,
        recipient_address=recipient_address,
        tab_id=tab_id,
        req_id=req_id,
        amount=amount_wei,
        timestamp=int(time.time()),
        erc20_token=asset_address,
    )

    cert = await client.recipient.issue_payment_guarantee(
        claims, payer_signature, SigningScheme.EIP712
    )
    print(cert.signature)

asyncio.run(main())`,
  },
  rust: {
    payer: `use rust_sdk_4mica::{Client, ConfigBuilder, PaymentGuaranteeRequestClaims, SigningScheme, U256};
use std::time::{SystemTime, UNIX_EPOCH};

let cfg = ConfigBuilder::default()
  .wallet_private_key(std::env::var("PAYER_KEY")?)
  .build()?;
let client = Client::new(cfg).await?;

let claims = PaymentGuaranteeRequestClaims::new(
  user_address.clone(),
  recipient_address.clone(),
  tab_id,
  req_id,
  U256::from(amount_wei),
  SystemTime::now().duration_since(UNIX_EPOCH)?.as_secs(),
  Some(asset_address.clone()),
);

let signed = client.user.sign_payment(claims.clone(), SigningScheme::Eip712).await?;
println!("{}", signed.signature);`,
    recipient: `use rust_sdk_4mica::{Client, ConfigBuilder, U256};

let cfg = ConfigBuilder::default()
  .wallet_private_key(std::env::var("RECIPIENT_KEY")?)
  .build()?;
let client = Client::new(cfg).await?;

let tab_id = client
  .recipient
  .create_tab(user_address.clone(), recipient_address.clone(), None, Some(3600))
  .await?;

let latest = client.recipient.get_latest_guarantee(tab_id).await?;
let req_id = latest
  .map(|g| g.req_id + U256::from(1u64))
  .unwrap_or(U256::ZERO);

println!("TAB_ID={tab_id}");
println!("REQ_ID={req_id}");

let cert = payer_certificate;
client.recipient.remunerate(cert).await?;`,
  },
  api: {
    payer: `curl -X POST "$CORE_URL/core/guarantees" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "claims": {
      "version": "v1",
      "user_address": "0xUSER",
      "recipient_address": "0xRECIPIENT",
      "tab_id": "0x1",
      "req_id": "0x0",
      "amount": "0x16345785d8a0000",
      "asset_address": "0x0000000000000000000000000000000000000000",
      "timestamp": 1716500000
    },
    "signature": "0x...",
    "scheme": "eip712"
  }'`,
    recipient: `curl -X POST "$CORE_URL/core/payment-tabs" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_address": "0xUSER",
    "recipient_address": "0xRECIPIENT",
    "erc20_token": null,
    "ttl": 3600
  }'`,
  },
};

type TokenPattern = {
  regex: RegExp;
  classes: string[];
};

const tokenPatterns: Record<LanguageId, TokenPattern> = {
  typescript: {
    regex:
      /(\/\/.*$)|(`[^`]*`|'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b0x[0-9a-fA-F]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:import|from|async|function|const|let|await|return|new|class|export|default|try|catch|throw|if|else|for|while)\b)|(\b(?:console|Math|Date|BigInt|Number|String|Boolean|Object|process|Promise)\b)/g,
    classes: ['comment', 'string', 'number', 'keyword', 'builtin'],
  },
  python: {
    regex:
      /(#.*$)|('''[^']*'''|"""[^"]*"""|'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b0x[0-9a-fA-F]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:import|from|async|def|await|return|class|try|except|raise|if|elif|else|for|while|with|as|in|None|True|False)\b)/g,
    classes: ['comment', 'string', 'number', 'keyword'],
  },
  rust: {
    regex:
      /(\/\/.*$)|(b?"[^"\\]*(?:\\.[^"\\]*)*"|b?'[^'\\]*(?:\\.[^'\\]*)*')|(\b0x[0-9a-fA-F_]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:use|let|mut|async|await|fn|pub|struct|impl|match|if|else|for|while|loop|return|crate|mod|enum|trait|Result|Ok|Err|Some|None)\b)|(\b\w+!)/g,
    classes: ['comment', 'string', 'number', 'keyword', 'macro'],
  },
  api: {
    regex:
      /(#.*$)|('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:curl|POST|GET|PUT|PATCH|DELETE)\b)|(--?[A-Za-z-]+)|(\$[A-Z0-9_]+)\b/g,
    classes: ['comment', 'string', 'number', 'keyword', 'flag', 'variable'],
  },
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const highlightLine = (line: string, language: LanguageId) => {
  const pattern = tokenPatterns[language];
  if (!pattern) {
    return escapeHtml(line);
  }
  let result = '';
  let lastIndex = 0;
  pattern.regex.lastIndex = 0;
  let match = pattern.regex.exec(line);
  while (match) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      result += escapeHtml(line.slice(lastIndex, index));
    }
    const groupIndex = match.slice(1).findIndex((group) => group !== undefined);
    const className = groupIndex >= 0 ? pattern.classes[groupIndex] : '';
    const tokenValue = escapeHtml(match[0]);
    result += className ? `<span class="code-token ${className}">${tokenValue}</span>` : tokenValue;
    lastIndex = index + match[0].length;
    match = pattern.regex.exec(line);
  }
  if (lastIndex < line.length) {
    result += escapeHtml(line.slice(lastIndex));
  }
  return result;
};

export default function CodeSamplesSection() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageId>('typescript');
  const [activeAction, setActiveAction] = useState<KeyAction>('payer');
  const activeCode = codeSamples[activeLanguage][activeAction];
  const codeLines = activeCode.trimEnd().split('\n');
  const highlightedLines = codeLines.map((line) => highlightLine(line, activeLanguage));

  return (
    <section className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#9CB7E8]">
              <span>Quick Start</span>
              <span>Payer + Recipient Flow</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#050B1D]">
              <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-[#050B1D] px-3 py-2">
                {languageTabs.map((tab) => {
                  const isActive = activeLanguage === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveLanguage(tab.id)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        isActive
                          ? 'bg-white/15 text-[#F2F4F8] shadow-sm'
                          : 'text-[#9CB7E8] hover:text-[#E7F1FF]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className="grid md:grid-cols-[170px_1fr]">
                <div className="border-b border-white/10 bg-[#050B1D] p-3 md:border-b-0 md:border-r">
                  <div className="flex gap-2 md:flex-col">
                    {keyActions.map((action) => {
                      const isActive = activeAction === action.id;
                      return (
                        <button
                          key={action.id}
                          type="button"
                          onClick={() => setActiveAction(action.id)}
                          className={`rounded-lg px-3 py-2 text-left text-xs font-semibold transition ${
                            isActive
                              ? 'bg-white/15 text-[#F2F4F8]'
                              : 'text-[#9CB7E8] hover:text-[#E7F1FF]'
                          }`}
                        >
                          {action.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-[#050B1D] p-4 sm:p-5">
                  <div className="space-y-1 font-mono text-xs sm:text-sm leading-relaxed text-[#E7F1FF]">
                    {codeLines.map((line, index) => (
                      <div key={`${activeLanguage}-${activeAction}-${index}`} className="grid grid-cols-[2.2rem_1fr] gap-3">
                        <span className="select-none text-right text-[10px] text-[#6A7AA3] sm:text-xs">
                          {index + 1}
                        </span>
                        <span
                          className="whitespace-pre"
                          dangerouslySetInnerHTML={{ __html: highlightedLines[index] || ' ' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#9CB7E8]">
              <span>Payer and recipient flow examples</span>
              <span className="text-[#48C9B0]">SDK + API ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
