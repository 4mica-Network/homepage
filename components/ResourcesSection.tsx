'use client';
import Link from 'next/link';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'One-Pager',
      href: '/resources/one-pager',
      description: "Concise overview of 4Mica's real-time, non-custodial payments stack and value proposition",
      icon: 'ri-file-text-line',
      gradient: 'from-brand-deep to-brand-strong'
    },
    {
      title: 'Technical Documents',
      href: '/resources/technical-docs',
      description: 'SDK usage, facilitator and operator APIs, plus protocol flow references for teams and developers',
      icon: 'ri-book-line',
      gradient: 'from-brand-strong to-brand-violet'
    },
    {
      title: 'Blog',
      href: '/resources/blog',
      description: 'Product updates, practical guides, and perspectives on 4Mica payments and infrastructure',
      icon: 'ri-article-line',
      gradient: 'from-brand to-brand-deep'
    }
  ];

  return (
    <section id="resources" className="py-20 section-gloss">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Resources
          </h2>
          <div className="accent-bar mx-auto mb-8"></div>
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
                  
                  <h3 className="text-2xl font-bold text-ink-strong mb-4 text-center">
                    {resource.title}
                  </h3>
                  
                  <p className="text-ink-body leading-relaxed text-center">
                    {resource.description}
                  </p>
                  
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center link-accent font-semibold">
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
