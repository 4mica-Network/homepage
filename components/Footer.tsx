'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-transparent text-[#E6F0FF] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-pacifico mb-4 block">
              4Mica
            </Link>
            <p className="text-[#F0F4FF]/80 leading-relaxed max-w-md">
              Instant, cryptographically-backed lines-of-credit for any product. 
              Secure, seamless, and decentralized.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#team" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#resources" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://x.com/0x4Mica" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-line text-xl"></i>
                </div>
              </Link>
              <Link href="#" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-line text-xl"></i>
                </div>
              </Link>
              <Link href="https://github.com/4mica-Network" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-github-line text-xl"></i>
                </div>
              </Link>
              <Link href="#" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-discord-line text-xl"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#F0F4FF]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#F0F4FF]/80 mb-4 md:mb-0">
              © 2025 4Mica. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#F0F4FF]/80 hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
