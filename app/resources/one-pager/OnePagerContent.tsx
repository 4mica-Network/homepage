
'use client';

import Image from 'next/image';

export default function OnePagerContent() {
  return (
    <div className="min-h-screen relative text-[#C8D7F2]">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Credit-backed, Capital-efficient, and Instant payments for any service, web3 or traditional. 
          </h1>
        </div>

        <div className="container mx-auto px-6 pb-20">
          {/* Problem Statement & Use Case */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Problem Statement - Left */}
            <div className="glass-panel rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-error-warning-line text-white text-lg"></i>
                  </div>
                </div>
                Problem
              </h2>
              
              <p className="text-lg text-[#C8D7F2] mb-6 leading-relaxed">
                Any service deployed on web3 rails lack a capital-efficient, cheap, and non-custodial way to pay in real time.
              </p>
              
              <div className="space-y-4">
                <p className="text-[#E7F1FF] font-semibold">Current workarounds lead to:</p>
                <ul className="space-y-3">
                  {[
                    'Centralized trust',
                    'Fragmented liquidity', 
                    'Locked capital (capital inefficiency)',
                    'UX & regulatory friction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-[#C8D7F2]">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-red-500/15 border border-red-400/30 rounded-lg p-4 mt-6">
                  <p className="text-red-200 font-semibold">
                    The result: per-task billing is nearly impossible at scale → slowed adoption.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case - Right */}
            <div className="glass-panel rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#3CAEF5] rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-lightbulb-line text-white text-lg"></i>
                  </div>
                </div>
                Case Study: AVSs (e.g., Aligned Layer)
              </h2>
              
              <div className="mb-6">
                <Image 
                  src="/assets/aligned_layer_logo.png"
                  alt="Aligned Layer"
                  width={320}
                  height={120}
                  className="mx-auto mb-4 h-30 w-1/2 max-w-[50%] object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <ul className="space-y-5">
                <li className="flex items-start text-[#C8D7F2] text-lg">
                  <div className="w-3 h-3 bg-[#3CAEF5] rounded-full mr-3 mt-2"></div>
                  Aligned offers ultra-cheap verification costs
                </li>
                <li className="flex items-start text-[#C8D7F2] text-lg">
                  <div className="w-3 h-3 bg-[#3CAEF5] rounded-full mr-3 mt-2"></div>
                  Aligned cost: &nbsp;
                  <span className="font-bold text-[#3CAEF5] text-xl">$0.019</span>{' '}
                     &nbsp;vs payment gas fee: &nbsp;
                  <span className="font-bold text-red-500 text-xl">$0.14</span>
                </li>
                <li className="flex items-start text-[#C8D7F2] text-lg">
                  <div className="w-3 h-3 bg-[#3CAEF5] rounded-full mr-3 mt-2"></div>
                  Transaction gas fees are 8x higher than the service cost &nbsp;
                </li>
                <li className="flex items-start text-[#C8D7F2] text-lg">
                  <div className="w-3 h-3 bg-[#3CAEF5] rounded-full mr-3 mt-2"></div>
                   Payment limitations prevent scaling
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* 4Mica Solution */}
          <div className="glass-panel rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-[#E7F1FF] mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
              </div>
              4Mica Solution
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Line of Credit',
                  description: 'Enables cryptographically-backed "lines of credit"',
                  icon: 'ri-bank-card-line'
                },
                {
                  title: 'Instant Payments',
                  description: 'One yield-generating deposit → backs thousands of instant micro-payments',
                  icon: 'ri-flashlight-line'
                },
                {
                  title: 'Configurable SLAs',
                  description: 'Configurable TTLs & SLAs, for full flexibility',
                  icon: 'ri-settings-3-line'
                },
                {
                  title: 'Secure and Trustless Settlement',
                  description: 'Settlement automatically enforced on parent chain (no value leakage)',
                  icon: 'ri-shield-check-line'
                },
                {
                  title: 'Flexible Integration',
                  description: 'Flexible and composable across any service that accepts crypto',
                  icon: 'ri-puzzle-line'
                },
                {
                  title: 'Multi-Platform Support',
                  description: 'Trusted by Aligned layer as the ultimate payment solution for AVSs',
                  icon: 'ri-links-line'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 border border-white/10 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className={`${item.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E7F1FF] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#C8D7F2]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Section */}
          <div className="glass-panel rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#E7F1FF] mb-8 text-center flex items-center justify-center">
              <div className="w-8 h-8 bg-[#1E4DD8] rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-settings-3-line text-white text-lg"></i>
                </div>
              </div>
              Architecture
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-8">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="bg-white/10 border border-white/10 rounded-lg p-6 text-center min-w-[160px]">
                  <div className="w-12 h-12 bg-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-safe-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E7F1FF] mb-2">Collateral</h3>
                  <p className="text-sm text-[#C8D7F2]">Deposit in yield-generating vault</p>
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-2xl text-white"></i>
                </div>
                
                <div className="bg-white/10 border border-white/10 rounded-lg p-6 text-center min-w-[160px]">
                  <div className="w-12 h-12 bg-[#3CAEF5] rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-bank-card-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E7F1FF] mb-2">Line of Credit</h3>
                  <p className="text-sm text-[#C8D7F2]">Instant access to service</p>
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-2xl text-white"></i>
                </div>
                
                <div className="bg-white/10 border border-white/10 rounded-lg p-6 text-center min-w-[160px]">
                  <div className="w-12 h-12 bg-[#5C7CFA] rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-flashlight-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E7F1FF] mb-2">Instant Value-Exchange</h3>
                  <p className="text-sm text-[#C8D7F2]">Cryptographic payment tabs</p>
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-2xl text-white"></i>
                </div>
                
                <div className="bg-white/10 border border-white/10 rounded-lg p-6 text-center min-w-[160px]">
                  <div className="w-12 h-12 bg-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#E7F1FF] mb-2">Settlement on L1</h3>
                  <p className="text-sm text-[#C8D7F2]">Secure and trustless by design</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-[#3CAEF5] rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-time-line text-white"></i>
                  </div>
                </div>
                <h4 className="font-semibold text-[#E7F1FF] mb-1">Configurable TTL </h4>
                <p className="text-xs text-[#C8D7F2]">Time-to-live settings</p>
              </div>
              
              <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-[#5C7CFA] rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-percent-line text-white"></i>
                  </div>
                </div>
                <h4 className="font-semibold text-[#E7F1FF] mb-1">Collateral Ratio</h4>
                <p className="text-xs text-[#C8D7F2]">Risk management</p>
              </div>
              
              <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-shield-line text-white"></i>
                  </div>
                </div>
                <h4 className="font-semibold text-[#E7F1FF] mb-1">Configurable SLA</h4>
                <p className="text-xs text-[#C8D7F2]">Service agreements</p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center">
            <p className="text-xl text-white/90 font-medium italic">
              &ldquo;4Mica is building the missing payment primitive that makes AVSs commercially viable.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
