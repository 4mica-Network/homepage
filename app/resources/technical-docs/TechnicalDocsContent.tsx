
'use client';

import { useState } from 'react';

export default function TechnicalDocsContent() {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', title: 'Overview', icon: 'ri-eye-line' },
    { id: 'architecture', title: 'Architecture', icon: 'ri-settings-3-line' },
    { id: 'api-reference', title: 'API Reference', icon: 'ri-code-line' },
    { id: 'integration', title: 'Integration Guide', icon: 'ri-link' },
    { id: 'security', title: 'Security', icon: 'ri-shield-check-line' },
    { id: 'examples', title: 'Code Examples', icon: 'ri-file-code-line' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F9FF] pt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Technical Documentation
          </h1>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-xl text-[#1B1F3B] max-w-3xl mx-auto">
            Comprehensive technical specifications and integration guides for implementing 4Mica payment infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
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

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Overview</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">What is 4Mica?</h3>
                      <p className="text-[#1B1F3B] leading-relaxed">
                        4Mica is a payment infrastructure designed specifically for Actively Validated Services (AVSs) 
                        that enables real-time, non-custodial micro-payments. It solves the fundamental challenge of 
                        per-task billing at scale by providing a "line of credit" mechanism backed by collateral deposits.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: 'Non-Custodial', desc: 'No centralized trust required' },
                          { title: 'Real-Time Payments', desc: 'Instant micro-transaction processing' },
                          { title: 'Collateral-Backed', desc: 'Single deposit underwrites thousands of payments' },
                          { title: 'Configurable SLAs', desc: 'Flexible TTL and collateral ratios' }
                        ].map((feature, index) => (
                          <div key={index} className="bg-[#F5F9FF] rounded-lg p-4">
                            <h4 className="font-semibold text-[#1B1F3B] mb-2">{feature.title}</h4>
                            <p className="text-sm text-[#1B1F3B]">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture Section */}
              {activeSection === 'architecture' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Architecture</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">System Components</h3>
                      <div className="space-y-4">
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">Collateral Manager</h4>
                          <p className="text-[#1B1F3B]">Handles collateral deposits and maintains collateral ratios for credit lines.</p>
                        </div>
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">Payment Router</h4>
                          <p className="text-[#1B1F3B]">Routes instant payments and manages micro-transaction flows.</p>
                        </div>
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">Settlement Engine</h4>
                          <p className="text-[#1B1F3B]">Enforces final settlement on the parent chain with configurable TTL.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Flow Diagram</h3>
                      <div className="bg-[#F5F9FF] rounded-lg p-6">
                        <div className="text-center">
                          <p className="text-[#1B1F3B] mb-4">
                            Collateral Deposit → Credit Line Creation → Instant Payments → Batch Settlement
                          </p>
                          <div className="text-sm text-[#1B1F3B]">
                            <p>• Single collateral deposit enables thousands of micro-payments</p>
                            <p>• Configurable parameters: TTL, collateral ratio, SLA requirements</p>
                            <p>• Final settlement enforced on L1 for security</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Reference Section */}
              {activeSection === 'api-reference' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">API Reference</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Core Endpoints</h3>
                      
                      <div className="space-y-4">
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono mr-3">POST</span>
                            <code className="text-[#1B1F3B] font-mono">/api/v1/collateral/deposit</code>
                          </div>
                          <p className="text-[#1B1F3B] mb-2">Create a collateral deposit for credit line</p>
                          <pre className="bg-[#F5F9FF] p-3 rounded text-sm overflow-x-auto">
{`{
  "amount": "1000000000000000000",
  "token": "0x...",
  "ttl": 3600,
  "collateralRatio": 150
}`}
                          </pre>
                        </div>
                        
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono mr-3">GET</span>
                            <code className="text-[#1B1F3B] font-mono">/api/v1/credit/balance</code>
                          </div>
                          <p className="text-[#1B1F3B] mb-2">Get available credit balance</p>
                          <pre className="bg-[#F5F9FF] p-3 rounded text-sm overflow-x-auto">
{`{
  "availableCredit": "5000000000000000000",
  "usedCredit": "500000000000000000",
  "collateralLocked": "1000000000000000000"
}`}
                          </pre>
                        </div>
                        
                        <div className="border border-[#E5E5E5] rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono mr-3">POST</span>
                            <code className="text-[#1B1F3B] font-mono">/api/v1/payment/instant</code>
                          </div>
                          <p className="text-[#1B1F3B] mb-2">Execute instant micro-payment</p>
                          <pre className="bg-[#F5F9FF] p-3 rounded text-sm overflow-x-auto">
{`{
  "recipient": "0x...",
  "amount": "1000000000000000",
  "taskId": "task_123",
  "metadata": {...}
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Integration Guide Section */}
              {activeSection === 'integration' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Integration Guide</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Quick Start</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-[#F5F9FF] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">1. Install SDK</h4>
                          <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
npm install @4mica/sdk
                          </pre>
                        </div>
                        
                        <div className="bg-[#F5F9FF] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">2. Initialize Client</h4>
                          <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`import { FourMicaClient } from '@4mica/sdk';

const client = new FourMicaClient({
  apiKey: 'your-api-key',
  network: 'mainnet'
});`}
                          </pre>
                        </div>
                        
                        <div className="bg-[#F5F9FF] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">3. Create Collateral Deposit</h4>
                          <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`const deposit = await client.collateral.deposit({
  amount: '1000000000000000000', // 1 ETH
  ttl: 3600, // 1 hour
  collateralRatio: 150
});`}
                          </pre>
                        </div>
                        
                        <div className="bg-[#F5F9FF] rounded-lg p-4">
                          <h4 className="font-semibold text-[#1B1F3B] mb-2">4. Execute Payments</h4>
                          <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`const payment = await client.payment.instant({
  recipient: '0x...',
  amount: '1000000000000000', // 0.001 ETH
  taskId: 'verification_task_123'
});`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === 'security' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Security</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Security Model</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: 'Non-Custodial', desc: 'Users maintain control of their assets at all times' },
                          { title: 'Collateral-Backed', desc: 'All credit lines are backed by locked collateral' },
                          { title: 'Time-Bounded', desc: 'Configurable TTL limits exposure window' },
                          { title: 'On-Chain Settlement', desc: 'Final settlement enforced on parent chain' }
                        ].map((item, index) => (
                          <div key={index} className="border border-[#E5E5E5] rounded-lg p-4">
                            <h4 className="font-semibold text-[#1B1F3B] mb-2">{item.title}</h4>
                            <p className="text-sm text-[#1B1F3B]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">Best Practices</h3>
                      <ul className="space-y-2">
                        {[
                          'Set appropriate collateral ratios based on risk tolerance',
                          'Configure TTL values to match your operational requirements',
                          'Implement proper monitoring for collateral levels',
                          'Use multi-signature wallets for large collateral deposits',
                          'Regularly audit payment flows and settlement patterns'
                        ].map((practice, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#1E4DD8] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-[#1B1F3B]">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Examples Section */}
              {activeSection === 'examples' && (
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Code Examples</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">AVS Integration Example</h3>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
{`// Example: Aligned AVS Integration
import { FourMicaClient } from '@4mica/sdk';

class AlignedAVS {
  constructor() {
    this.fourMica = new FourMicaClient({
      apiKey: process.env.FOUR_MICA_API_KEY,
      network: 'mainnet'
    });
  }

  async processVerificationTask(task) {
    try {
      // Execute verification
      const result = await this.verify(task.data);
      
      // Charge for verification service
      const payment = await this.fourMica.payment.instant({
        recipient: task.operator,
        amount: task.fee,
        taskId: task.id,
        metadata: {
          service: 'verification',
          result: result.hash
        }
      });
      
      return {
        verified: result.valid,
        paymentId: payment.id,
        txHash: payment.txHash
      };
    } catch (error) {
      console.error('Verification failed:', error);
      throw error;
    }
  }
}`}
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1F3B] mb-3">React Integration Example</h3>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
{`// Example: React Component for Payment Management
import React, { useState, useEffect } from 'react';
import { FourMicaClient } from '@4mica/sdk';

export function PaymentManager() {
  const [client, setClient] = useState(null);
  const [balance, setBalance] = useState(null);
  
  useEffect(() => {
    const fourMica = new FourMicaClient({
      apiKey: process.env.REACT_APP_FOUR_MICA_API_KEY,
      network: 'mainnet'
    });
    setClient(fourMica);
    
    // Load balance
    fourMica.credit.getBalance().then(setBalance);
  }, []);

  const handlePayment = async (recipient, amount) => {
    try {
      const payment = await client.payment.instant({
        recipient,
        amount,
        taskId: \`task_\${Date.now()}\`
      });
      
      // Update balance
      const newBalance = await client.credit.getBalance();
      setBalance(newBalance);
      
      return payment;
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div>
      <h3>Available Credit: {balance?.availableCredit} ETH</h3>
      <button onClick={() => handlePayment('0x...', '1000000')}>
        Send Micro-Payment
      </button>
    </div>
  );
}`}
                        </pre>
                      </div>
                    </div>
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
