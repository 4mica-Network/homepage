'use client';

import { useState } from 'react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "collateral", label: "Collateral API" },
    { id: "payment", label: "Payment API" },
    { id: "x402", label: "X402 Integration" },
    { id: "settlement", label: "Settlement" },
    { id: "deregistration", label: "Deregistration" },
  ];

  return (
    <div className="min-h-screen flex bg-[#F5F9FF]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-[#1B1F3B] mb-6">Docs Menu</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                activeSection === section.id
                  ? "bg-[#1B1F3B] text-white"
                  : "text-[#1B1F3B] hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="h-full pr-4 overflow-y-auto">
          <section id="intro" className="mb-16">
            <h1 className="text-4xl font-bold text-[#1B1F3B] mb-6">Technical Docs</h1>
            <p className="text-lg text-[#1B1F3B] max-w-2xl leading-relaxed">
              Welcome to the 4Mica technical documentation. Here you’ll find API references,
              integration guides, and best practices for working with our payment infrastructure.
            </p>
          </section>

          <section id="collateral" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Collateral API</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              The Collateral API allows partners to manage pledged assets for securing transactions.
              Use it to register, update, and release collateral in a safe and auditable manner.
            </p>
          </section>

          <section id="payment" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Payment API</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              The Payment API enables real-time payment initiation, authorization, and confirmation.
              It is optimized for low-latency, high-volume payment flows.
            </p>
          </section>

          <section id="x402" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">X402 Integration</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              X402 integration ensures compliance with interbank settlement standards.
              This module provides interoperability and supports secure messaging formats.
            </p>
          </section>

          <section id="settlement" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Settlement</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              The settlement layer ensures finality of transactions. It provides APIs to
              reconcile balances, confirm clearing, and generate settlement reports.
            </p>
          </section>

          <section id="deregistration" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Deregistration</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              Deregistration APIs allow safe removal of accounts, nodes, or partners
              from the payment infrastructure while ensuring proper audit trails.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
