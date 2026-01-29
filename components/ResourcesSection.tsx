'use client';
import Link from 'next/link';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'One-Pager',
      href: '/resources/one-pager',
      description: "Concise overview of 4Mica's real-time, non-custodial payments stack and value proposition",
      icon: 'ri-file-text-line',
      gradient: 'from-[#1E4DD8] to-[#3CAEF5]'
    },
    {
      title: 'Technical Documents',
      href: '/resources/technical-docs',
      description: 'SDK usage, facilitator and operator APIs, plus protocol flow references for teams and developers',
      icon: 'ri-book-line',
      gradient: 'from-[#3CAEF5] to-[#5C7CFA]'
    },
    {
      title: 'Blog',
      href: '/resources/blog',
      description: 'Product updates, practical guides, and perspectives on 4Mica payments and infrastructure',
      icon: 'ri-article-line',
      gradient: 'from-[#2ED6FF] to-[#1E4DD8]'
    }
  ];

  return (
    <section id="resources" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E7F1FF] mb-6">
            Resources
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link key={resource.title} href={resource.href} className="group cursor-pointer">
                <div className="glass-panel rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${resource.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#E7F1FF] mb-4 text-center">
                    {resource.title}
                  </h3>
                  
                  <p className="text-[#C8D7F2] leading-relaxed text-center">
                    {resource.description}
                  </p>
                  
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-[#7BCBFF] font-semibold">
                      Learn More 
                      <div className="w-4 h-4 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
