'use client';
import Link from "next/link";

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-[#F5F9FF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Resources
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="w-24 h-24 bg-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-file-text-line text-3xl text-white"></i>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-[#1B1F3B] mb-6">
              Documentation & Whitepapers
            </h3>
            
            <p className="text-lg text-[#1B1F3B] mb-8 leading-relaxed">
              We're preparing comprehensive documentation, technical whitepapers, and developer guides 
              to help you understand and integrate with the 4Mica payment infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Technical Docs */}
              <div className="bg-[#F5F9FF] rounded-lg p-6 flex-1 max-w-xs">
                <Link href="/docs">
                  <div className="w-12 h-12 bg-[#3CAEF5] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-book-line text-xl text-white"></i>
                    </div>
                  </div>
                </Link>
                <h4 className="font-semibold text-[#1B1F3B] mb-2">Technical Docs</h4>
                <p className="text-sm text-[#1B1F3B]">API references and integration guides</p>
              </div>
              
              {/* Whitepapers */}
              <div className="bg-[#F5F9FF] rounded-lg p-6 flex-1 max-w-xs">
                <Link href="/whitepapers">
                  <div className="w-12 h-12 bg-[#5C7CFA] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-file-paper-line text-xl text-white"></i>
                    </div>
                  </div>
                </Link>
                <h4 className="font-semibold text-[#1B1F3B] mb-2">Whitepapers</h4>
                <p className="text-sm text-[#1B1F3B]">In-depth technical specifications</p>
              </div>
              
              {/* Code Samples */}
              <div className="bg-[#F5F9FF] rounded-lg p-6 flex-1 max-w-xs">
                <Link href="/code-samples">
                  <div className="w-12 h-12 bg-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-code-line text-xl text-white"></i>
                    </div>
                  </div>
                </Link>
                <h4 className="font-semibold text-[#1B1F3B] mb-2">Code Samples</h4>
                <p className="text-sm text-[#1B1F3B]">Ready-to-use integration examples</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
