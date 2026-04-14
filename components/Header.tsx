'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const companyLinks = [
    { href: '/about', label: '4Mica Mission' },
    { href: '/leadership', label: 'Team' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  const primaryLinks = [
    { href: '/resources/technical-docs', label: 'Documents' },
    { href: '/resources', label: 'Resources' },
  ];

useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

return (
    <>
      <header
        className={`sticky top-0 z-40 text-ink transition-all duration-300 ease-out ${
          isScrolled
            ? 'translate-y-2 glass-panel-strong'
            : 'translate-y-0 bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/assets/logo_transparent.png"
              alt="4Mica logo"
              width={180}
              height={60}
              className="h-10 w-auto object-cover rounded-lg"
              priority
            />
            <span className="text-2xl font-bold font-pacifico">4Mica</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button
                  type="button"
                  className="text-ink hover:text-brand-strong transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
                >
                  Company
                  <i className="ri-arrow-down-s-line text-lg"></i>
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                  <div className="w-52 rounded-xl glass-panel-strong border border-white/10 shadow-lg">
                    {companyLinks.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-sm text-ink hover:text-brand-strong transition-colors ${
                          index > 0 ? 'border-t border-white/10' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink hover:text-brand-strong transition-colors cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:mairon@4mica.xyz"
                className="text-ink hover:text-brand-strong transition-colors whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="text-ink"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMobileMenuOpen ? 'close-line' : 'menu-line'} text-xl`}></i>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
            role="presentation"
          />
          <div
            id="mobile-menu"
            className="absolute top-20 left-4 right-4 glass-panel-strong rounded-2xl p-6"
          >
            <div className="section-kicker">Company</div>
            <div className="mt-3 space-y-2">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-ink hover:text-brand-strong transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 section-kicker">Explore</div>
            <div className="mt-3 space-y-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-ink hover:text-brand-strong transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:mairon@4mica.xyz"
                className="block text-sm text-ink hover:text-brand-strong transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-6 grid gap-3">
              <Link
                href="/resources/technical-docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary btn-md text-center"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
