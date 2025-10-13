'use client';
import Link from 'next/link';

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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/resources/one-pager" className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1E4DD8] to-[#3CAEF5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-file-text-line text-2xl text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B1F3B] mb-4 text-center">
                  One-Pager
                </h3>
                
                <p className="text-[#1B1F3B] leading-relaxed text-center">
                  Comprehensive overview of 4Mica&rsquo;s real-time, non-custodial payment infrastructure for AVSs.
                </p>
                
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-[#1E4DD8] font-semibold">
                    Read More 
                    <div className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/resources/technical-docs" className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3CAEF5] to-[#5C7CFA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-book-line text-2xl text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B1F3B] mb-4 text-center">
                  Technical Docs
                </h3>
                
                <p className="text-[#1B1F3B] leading-relaxed text-center">
                  In-depth technical specifications, API references, and integration guides for developers.
                </p>
                
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-[#1E4DD8] font-semibold">
                    Explore Docs
                    <div className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/resources/blog" className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-[#5C7CFA] to-[#1E4DD8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-article-line text-2xl text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B1F3B] mb-4 text-center">
                  Blog
                </h3>
                
                <p className="text-[#1B1F3B] leading-relaxed text-center">
                  Latest insights, updates, and thought leadership on AVS payments and infrastructure.
                </p>
                
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-[#1E4DD8] font-semibold">
                    Read Articles
                    <div className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
