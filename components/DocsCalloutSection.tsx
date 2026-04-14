'use client';

import { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    id: 1,
    badge: 'Deposit',
    title: 'Collateral routes to Aave',
    desc: 'Agent deposits once. Funds flow directly into Aave — earning APY while you spend. One pool, unlimited credit.',
    color: '#f59e0b',
    lines: [
      { t: 'code', v: 'await client.user.approveErc20(' },
      { t: 'key',  v: '  usdc.address, ', val: 'AMOUNT' },
      { t: 'code', v: ')' },
      { t: 'blank' },
      { t: 'code', v: 'await client.user.deposit(' },
      { t: 'key',  v: '  AMOUNT, ', val: 'usdc.address' },
      { t: 'code', v: ')' },
      { t: 'blank' },
      { t: 'ok',   v: '✓ routed to Aave · aUSDC accrues yield' },
    ],
  },
  {
    id: 2,
    badge: '402',
    title: 'Resource server returns 402',
    desc: 'Agent requests a resource. Server responds with 402 and tab details — no prefunding, no channel setup.',
    color: '#f87171',
    lines: [
      { t: 'http-err' },
      { t: 'blank' },
      { t: 'code', v: '{' },
      { t: 'key',  v: '  "scheme":      ', val: '"4Mica-credit",' },
      { t: 'key',  v: '  "network":     ', val: '"eip155:11155111",' },
      { t: 'key',  v: '  "maxAmount":   ', val: '"0x64",' },
      { t: 'key',  v: '  "tabEndpoint": ', val: '"https://x402.4Mica.xyz/tabs",' },
      { t: 'key',  v: '  "tabId":       ', val: '"0x123",' },
      { t: 'key',  v: '  "asset":       ', val: '"0x41E9…USDC"' },
      { t: 'code', v: '}' },
    ],
  },
  {
    id: 3,
    badge: 'Sign',
    title: 'Instant off-chain payment',
    desc: 'Agent signs an EIP-712 guarantee and attaches it as X-PAYMENT. No gas. No chain transaction. Instant.',
    color: '#3baeef',
    lines: [
      { t: 'code', v: 'const payment = await signGuarantee({' },
      { t: 'key',  v: '  tabId:     ', val: '"0x123",' },
      { t: 'key',  v: '  reqId:     ', val: '"0x0",' },
      { t: 'key',  v: '  amount:    ', val: '"0x64",' },
      { t: 'key',  v: '  recipient: ', val: '"0x72e1…ResourceHub",' },
      { t: 'code', v: '})' },
      { t: 'blank' },
      { t: 'dim',  v: 'GET /resource  X-PAYMENT: <base64(payment)>' },
    ],
  },
  {
    id: 4,
    badge: '200 OK',
    title: 'Resource delivered',
    desc: '4Mica verifies the EIP-712 signature. Server releases the resource with a signed certificate.',
    color: '#4ade80',
    lines: [
      { t: 'http-ok' },
      { t: 'blank' },
      { t: 'code', v: '{' },
      { t: 'key',  v: '  "data": ', val: '{' },
      { t: 'key',  v: '    "bundle": ', val: '"USDC/ETH-ARB-PERP",' },
      { t: 'key',  v: '    "price":  ', val: '3241.87,' },
      { t: 'key',  v: '    "ttl":    ', val: '30' },
      { t: 'code', v: '  },' },
      { t: 'key',  v: '  "certificate": ', val: '"0x5678…cert"' },
      { t: 'code', v: '}' },
    ],
  },
  {
    id: 5,
    badge: 'Settle',
    title: '4Mica nets and settles',
    desc: 'Claims accumulate off-chain. 4Mica nets opposite flows and settles on-chain at T+7 — fewer transactions, less gas.',
    color: '#48c9b0',
    lines: [
      { t: 'dim',  v: 'Gross notional:  425 USDC  (4 transfers)' },
      { t: 'dim',  v: 'After netting:   125 USDC  (2 transfers)' },
      { t: 'blank' },
      { t: 'code', v: 'await core4Mica.payTabInERC20Token({' },
      { t: 'key',  v: '  tabId:     ', val: '"0x123",' },
      { t: 'key',  v: '  amount:    ', val: '"0x64",' },
      { t: 'key',  v: '  erc20:     ', val: '"0x41E9…USDC",' },
      { t: 'key',  v: '  recipient: ', val: '"0x72e1…ResourceHub"' },
      { t: 'code', v: '})' },
    ],
  },
];

type LineType = { t: string; v?: string; val?: string };

function CodeLine({ line, stepColor }: { line: LineType; stepColor: string }) {
  if (line.t === 'blank') return <div className="h-3" />;

  const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap' };
  const v = line.v ?? '';

  if (line.t === 'dim') {
    return <div style={{ ...row, color: 'rgba(148,163,184,0.4)' }}>{v}</div>;
  }
  if (line.t === 'http-ok') {
    return (
      <div style={row}>
        <span style={{ color: 'rgba(200,215,242,0.5)' }}>HTTP/1.1 </span>
        <span style={{ color: '#4ade80' }}>200 OK</span>
      </div>
    );
  }
  if (line.t === 'http-err') {
    return (
      <div style={row}>
        <span style={{ color: 'rgba(200,215,242,0.5)' }}>HTTP/1.1 </span>
        <span style={{ color: '#f87171' }}>402 Payment Required</span>
      </div>
    );
  }
  if (line.t === 'ok') {
    return (
      <div style={row}>
        <span style={{ color: stepColor, marginRight: 6 }}>{v.slice(0, 2)}</span>
        <span style={{ color: 'rgba(200,215,242,0.65)' }}>{v.slice(2)}</span>
      </div>
    );
  }
  if (line.t === 'key' && line.val !== undefined) {
    return (
      <div style={row}>
        <span style={{ color: '#7dd3fc' }}>{v}</span>
        <span style={{ color: '#86efac' }}>{line.val}</span>
      </div>
    );
  }
  return <div style={{ ...row, color: 'rgba(200,215,242,0.75)' }}>{v}</div>;
}

export default function DocsCalloutSection() {
  const [active, setActive] = useState(0);

  const step = STEPS[active];

  return (
    <section id="docs" className="py-16 section-gloss">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 lg:p-12">

          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="section-kicker">How it works</p>
              <h2 className="mt-2 section-title-sm">Deposit once, spend anywhere</h2>
              <p className="section-lead mt-1">
                Collateral earns yield in Aave. Agents transact on credit. 4Mica settles later.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/resources/technical-docs" className="btn btn-primary btn-md text-center whitespace-nowrap">
                Start Building
              </Link>
              <Link href="/resources" className="btn btn-soft btn-md text-center whitespace-nowrap">
                Browse Docs
              </Link>
            </div>
          </div>

          {/* Step number tabs */}
          <div className="mb-5 flex gap-2">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer border"
                  style={{
                    borderColor: isActive ? s.color + '50' : 'rgba(255,255,255,0.07)',
                    background: isActive ? s.color + '15' : 'rgba(255,255,255,0.02)',
                    color: isActive ? s.color : 'rgba(200,215,242,0.35)',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all"
                    style={{
                      background: isActive ? s.color : 'rgba(255,255,255,0.08)',
                      color: isActive ? '#050b1d' : 'rgba(200,215,242,0.35)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="hidden sm:inline whitespace-nowrap">{s.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-5 items-start">

            {/* Step detail */}
            <div className="rounded-xl border px-5 py-4 transition-all duration-200" style={{ borderColor: step.color + '30', background: step.color + '08' }}>
              <p className="text-sm font-semibold" style={{ color: step.color }}>{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'rgba(200,215,242,0.55)' }}>{step.desc}</p>
            </div>

            {/* Code panel */}
            <div
              className="rounded-xl border border-white/10 bg-[#050b1d] p-5 font-mono text-xs leading-5 overflow-x-auto min-h-[220px] transition-all duration-300"
              style={{ borderColor: step.color + '30' }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.5)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(234,179,8,0.5)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(34,197,94,0.5)' }} />
                <span className="ml-2 text-[10px] tracking-wider" style={{ color: step.color + 'aa' }}>
                  {step.badge} · step {active + 1}/{STEPS.length}
                </span>
              </div>

              {step.lines.map((line, i) => (
                <CodeLine key={i} line={line} stepColor={step.color} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
