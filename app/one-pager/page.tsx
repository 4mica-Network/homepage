'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TutorialsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    { id: "getting-started", label: "Getting Started" },
    { id: "collateral-guide", label: "Collateral API Guide" },
    { id: "payment-flow", label: "End-to-End Payment Flow" },
    { id: "observability", label: "Monitoring & Observability" },
  ];

  return (
    <div className="min-h-screen flex bg-[#F5F9FF]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-[#1B1F3B] mb-6">Tutorials</h2>
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
          <motion.section
            id="getting-started"
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-[#1B1F3B] mb-6">Getting Started with 4Mica APIs</h1>
            <p className="text-lg text-[#1B1F3B] max-w-3xl leading-relaxed mb-4">
              This tutorial walks you through setting up your first integration. You’ll learn how to authenticate,
              make your first API request, and verify the response.
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`curl -X POST https://api.4mica.com/auth \\
  -H "Content-Type: application/json" \\
  -d '{"clientId": "your-id", "secret": "your-secret"}'`}
            </pre>
          </motion.section>

          <section id="collateral-guide" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Collateral API Guide</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed mb-4">
              Learn how to register collateral, query balances, and release pledged assets.
              The Collateral API ensures secure and auditable asset management.
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`POST /collateral/register
{
  "assetId": "USD-123",
  "amount": 1000000,
  "expiry": "2025-12-31"
}`}            </pre>
          </section>

          <section id="payment-flow" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">End-to-End Payment Flow</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed mb-4">
              This tutorial demonstrates the entire lifecycle of a payment — from initiation and authorization
              to settlement confirmation.
            </p>
            <ol className="list-decimal list-inside text-[#1B1F3B] space-y-2">
              <li>Authenticate with the API</li>
              <li>Initiate a payment with payer and payee details</li>
              <li>Handle authorization callbacks</li>
              <li>Confirm settlement</li>
            </ol>
          </section>

          <section id="observability" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Monitoring & Observability</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              Learn how to integrate monitoring hooks, set up dashboards, and use observability APIs for real-time insights.
              Proactive monitoring ensures reliability in mission-critical payment infrastructure.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
