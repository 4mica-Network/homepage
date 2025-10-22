
'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 12);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMounted]);

  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] via-[#1B2B50] to-[#102040]">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 w-full">
          <div className="mb-8">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#F2F4F8] mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] bg-clip-text text-transparent">4Mica</span>
              <br />
                Instant Web3 Payments
              <br />
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#F2F4F8]/85 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Secure lines-of-credit across any blockchain
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleLearnMore}
              className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>

            <button
              onClick={() => {
                window.location.href = "mailto:akash@4mica.xyz?subject=Request%20Demo&body=Hi%20Akash,%20I%20would%20like%20to%20request%20a%20demo%20for%204Mica.";
              }}
              className="border-2 border-[#48C9B0] text-[#48C9B0] hover:bg-[#48C9B0]/10 hover:border-[#A3FFD6] hover:text-[#A3FFD6] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              Request Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
             Configurable TTL
            </div>
            <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
              Gas Efficient
            </div>
            <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
              Instant Fair-Exchange
            </div>
            <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
              Non-Custodial
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F2F4F8]/60">
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-[#48C9B0]/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#48C9B0] rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] via-[#1B2B50] to-[#102040] overflow-hidden">
      {/* Subtle Decentralized Payment Network Animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Enhanced Filters for Subtle Look */}
          <defs>
            <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="verySubtleBlur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Square Node Gradients */}
            <linearGradient id="agentSquare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#4682B4", stopOpacity:0.7}} />
              <stop offset="100%" style={{stopColor:"#1B2B50", stopOpacity:0.5}} />
            </linearGradient>

            {/* Active Square - Blinking */}
            <linearGradient id="activeSquare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#48C9B0", stopOpacity:0.9}} />
              <stop offset="100%" style={{stopColor:"#4682B4", stopOpacity:0.7}} />
            </linearGradient>

            {/* Subtle Payment Particle */}
            <radialGradient id="subtlePayment" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor:"#A3FFD6", stopOpacity:0.8}} />
              <stop offset="50%" style={{stopColor:"#48C9B0", stopOpacity:0.6}} />
              <stop offset="100%" style={{stopColor:"#48C9B0", stopOpacity:0}} />
            </radialGradient>

            {/* Connection Line */}
            <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#48C9B0", stopOpacity:0.2}} />
              <stop offset="50%" style={{stopColor:"#A3FFD6", stopOpacity:0.4}} />
              <stop offset="100%" style={{stopColor:"#48C9B0", stopOpacity:0.2}} />
            </linearGradient>
          </defs>

          {/* Static Connection Lines - Always Visible Behind Nodes */}
          <g stroke="url(#connectionLine)" strokeWidth="1.5" fill="none" opacity="0.6" filter="url(#verySubtleBlur)">
            {/* Horizontal connections */}
            <line x1="150" y1="120" x2="350" y2="100" />
            <line x1="350" y1="100" x2="550" y2="130" />
            <line x1="550" y1="130" x2="750" y2="110" />
            <line x1="750" y1="110" x2="950" y2="140" />
            <line x1="950" y1="140" x2="1050" y2="120" />

            <line x1="100" y1="280" x2="280" y2="300" />
            <line x1="280" y1="300" x2="480" y2="270" />
            <line x1="480" y1="270" x2="680" y2="290" />
            <line x1="680" y1="290" x2="880" y2="280" />
            <line x1="880" y1="280" x2="1080" y2="300" />

            <line x1="200" y1="450" x2="400" y2="430" />
            <line x1="400" y1="430" x2="600" y2="460" />
            <line x1="600" y1="460" x2="800" y2="440" />
            <line x1="800" y1="440" x2="1000" y2="470" />

            <line x1="120" y1="620" x2="320" y2="600" />
            <line x1="320" y1="600" x2="520" y2="640" />
            <line x1="520" y1="640" x2="720" y2="610" />
            <line x1="720" y1="610" x2="920" y2="630" />

            {/* Vertical connections */}
            <line x1="150" y1="120" x2="100" y2="280" />
            <line x1="350" y1="100" x2="280" y2="300" />
            <line x1="550" y1="130" x2="480" y2="270" />
            <line x1="750" y1="110" x2="680" y2="290" />
            <line x1="950" y1="140" x2="880" y2="280" />
            <line x1="1050" y1="120" x2="1080" y2="300" />

            <line x1="100" y1="280" x2="200" y2="450" />
            <line x1="280" y1="300" x2="400" y2="430" />
            <line x1="480" y1="270" x2="600" y2="460" />
            <line x1="680" y1="290" x2="800" y2="440" />
            <line x1="880" y1="280" x2="1000" y2="470" />

            <line x1="200" y1="450" x2="120" y2="620" />
            <line x1="400" y1="430" x2="320" y2="600" />
            <line x1="600" y1="460" x2="520" y2="640" />
            <line x1="800" y1="440" x2="720" y2="610" />
            <line x1="1000" y1="470" x2="920" y2="630" />

            {/* Diagonal mesh connections */}
            <line x1="150" y1="120" x2="480" y2="270" />
            <line x1="350" y1="100" x2="680" y2="290" />
            <line x1="550" y1="130" x2="880" y2="280" />
            <line x1="750" y1="110" x2="400" y2="430" />
            <line x1="950" y1="140" x2="600" y2="460" />

            <line x1="100" y1="280" x2="600" y2="460" />
            <line x1="280" y1="300" x2="800" y2="440" />
            <line x1="480" y1="270" x2="920" y2="630" />
            <line x1="680" y1="290" x2="320" y2="600" />
            <line x1="880" y1="280" x2="520" y2="640" />
          </g>

          {/* Square AI Agent Network - Behind Particles */}
          <g filter="url(#subtleGlow)">
            {/* Top Layer */}
            <rect x="142" y="112" width="16" height="16" rx="2" fill={animationPhase === 0 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 0 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="342" y="92" width="16" height="16" rx="2" fill={animationPhase === 1 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 1 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="542" y="122" width="16" height="16" rx="2" fill={animationPhase === 2 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 2 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="742" y="102" width="16" height="16" rx="2" fill={animationPhase === 3 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 3 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="942" y="132" width="16" height="16" rx="2" fill={animationPhase === 4 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 4 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="1042" y="112" width="16" height="16" rx="2" fill={animationPhase === 5 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 5 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>

            {/* Middle Layer */}
            <rect x="92" y="272" width="16" height="16" rx="2" fill={animationPhase === 6 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 6 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="272" y="292" width="16" height="16" rx="2" fill={animationPhase === 7 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 7 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="472" y="262" width="16" height="16" rx="2" fill={animationPhase === 8 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 8 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="672" y="282" width="16" height="16" rx="2" fill={animationPhase === 9 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 9 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="872" y="272" width="16" height="16" rx="2" fill={animationPhase === 10 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 10 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>
            <rect x="1072" y="292" width="16" height="16" rx="2" fill={animationPhase === 11 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 11 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" />}
            </rect>

            {/* Lower Middle Layer */}
            <rect x="192" y="442" width="16" height="16" rx="2" fill={animationPhase === 0 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 0 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="0.5s" />}
            </rect>
            <rect x="392" y="422" width="16" height="16" rx="2" fill={animationPhase === 1 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 1 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="0.5s" />}
            </rect>
            <rect x="592" y="452" width="16" height="16" rx="2" fill={animationPhase === 2 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 2 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="0.5s" />}
            </rect>
            <rect x="792" y="432" width="16" height="16" rx="2" fill={animationPhase === 3 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 3 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="0.5s" />}
            </rect>
            <rect x="992" y="462" width="16" height="16" rx="2" fill={animationPhase === 4 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 4 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="0.5s" />}
            </rect>

            {/* Bottom Layer */}
            <rect x="112" y="612" width="16" height="16" rx="2" fill={animationPhase === 5 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 5 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="1s" />}
            </rect>
            <rect x="312" y="592" width="16" height="16" rx="2" fill={animationPhase === 6 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 6 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="1s" />}
            </rect>
            <rect x="512" y="632" width="16" height="16" rx="2" fill={animationPhase === 7 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 7 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="1s" />}
            </rect>
            <rect x="712" y="602" width="16" height="16" rx="2" fill={animationPhase === 8 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 8 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="1s" />}
            </rect>
            <rect x="912" y="622" width="16" height="16" rx="2" fill={animationPhase === 9 ? "url(#activeSquare)" : "url(#agentSquare)"}>
              {animationPhase === 9 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="3" begin="1s" />}
            </rect>
          </g>

          {/* Subtle Payment Particles - Moving Along Complete Lines */}
          <g>
            {/* Horizontal flows */}
            <circle r="4" fill="url(#subtlePayment)" opacity="0.7">
              <animateMotion dur="4s" repeatCount="indefinite" path="M150,120 L350,100 L550,130 L750,110" />
            </circle>
            <circle r="4" fill="url(#subtlePayment)" opacity="0.7">
              <animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M280,300 L480,270 L680,290 L880,280" />
            </circle>
            <circle r="4" fill="url(#subtlePayment)" opacity="0.7">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M400,430 L600,460 L800,440 L1000,470" />
            </circle>

            {/* Vertical flows */}
            <circle r="4" fill="#48C9B0" opacity="0.6">
              <animateMotion dur="5s" repeatCount="indefinite" begin="0.5s" path="M350,100 L280,300 L400,430 L320,600" />
            </circle>
            <circle r="4" fill="#48C9B0" opacity="0.6">
              <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s" path="M750,110 L680,290 L800,440 L720,610" />
            </circle>

            {/* Diagonal mesh flows */}
            <circle r="3" fill="#A3FFD6" opacity="0.5">
              <animateMotion dur="6s" repeatCount="indefinite" begin="1.5s" path="M150,120 Q350,200 480,270 Q650,350 880,280" />
            </circle>
            <circle r="3" fill="#A3FFD6" opacity="0.5">
              <animateMotion dur="6s" repeatCount="indefinite" begin="3.5s" path="M1050,120 Q850,200 600,460 Q400,550 120,620" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#F2F4F8] mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] bg-clip-text text-transparent">4Mica</span>
            <br />
                Instant Web3 Payments
              <br />
            </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-[#F2F4F8]/85 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Secure lines-of-credit across any blockchain
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={handleLearnMore}
            className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>

          <button
              onClick={() => {
                window.location.href = "mailto:akash@4mica.xyz?subject=Request%20Demo&body=Hi%20Akash,%20I%20would%20like%20to%20request%20a%20demo%20for%204Mica.";
              }}
              className="border-2 border-[#48C9B0] text-[#48C9B0] hover:bg-[#48C9B0]/10 hover:border-[#A3FFD6] hover:text-[#A3FFD6] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              Request Demo
            </button>
        </div>

        {/* Key Features Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
            Configurable TTL
          </div>
          <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
            Gas Efficient
          </div>
          <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
            Instant Fair-Exchange
          </div>
          <div className="bg-[#F2F4F8]/8 backdrop-blur-sm border border-[#48C9B0]/25 px-4 py-2 rounded-full text-[#F2F4F8] text-sm font-medium">
            Non-Custodial
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#F2F4F8]/60">
        <span className="text-sm mb-2 font-medium">Discover More</span>
        <div className="w-6 h-10 border-2 border-[#48C9B0]/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#48C9B0] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
