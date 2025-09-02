'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogsPage() {
  const [activeSection, setActiveSection] = useState("architecture");

  const sections = [
    { id: "architecture", label: "Architecture" },
    { id: "security", label: "Security & Compliance" },
    { id: "scaling", label: "Scaling Payments" },
    { id: "case-studies", label: "Case Studies" },
  ];

  return (
    <div className="min-h-screen flex bg-[#F5F9FF]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-[#1B1F3B] mb-6">Blog Topics</h2>
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
            id="architecture"
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-[#1B1F3B] mb-6">Infrastructure Architecture</h1>
            <p className="text-lg text-[#1B1F3B] max-w-3xl leading-relaxed">
              Our payment infrastructure is designed to achieve global scale while maintaining fault tolerance,
              latency guarantees, and regulatory compliance. This section explores architectural principles, tradeoffs,
              and future-proofing strategies applied in our platform.
            </p>
          </motion.section>

          <section id="security" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Security & Compliance</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              Security is foundational in payments. Here we dive into encryption standards, compliance regimes (PCI DSS,
              ISO 20022), key management practices, and strategies to protect against fraud and systemic risks.
            </p>
          </section>

          <section id="scaling" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Scaling Payments</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              Handling billions of transactions daily requires horizontal scaling, intelligent routing, and deep observability.
              This section highlights real-world scaling challenges and the techniques we used to solve them.
            </p>
          </section>

          <section id="case-studies" className="mb-16">
            <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Case Studies</h2>
            <p className="text-[#1B1F3B] max-w-3xl leading-relaxed">
              Explore case studies on cross-border settlement, high-frequency retail payments, and enterprise integrations.
              Each study presents challenges, solutions, and measurable outcomes.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
