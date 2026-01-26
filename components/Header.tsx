'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitted'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const companyLinks = [
    { href: '/about', label: '4Mica Mission' },
    { href: '/leadership', label: 'Team' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  const primaryLinks = [
    { href: '/#docs', label: 'Docs' },
    { href: '/#resources', label: 'Resources' },
    { href: '/#community', label: 'Community' },
  ];

  const openContactModal = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isContactOpen) return;
    setContactStatus('idle');
    lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const container = contactRef.current;
      if (!container) return;
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => firstInputRef.current?.focus());

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      lastActiveElementRef.current?.focus();
    };
  }, [isContactOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 text-white transition-all duration-300 ease-out ${
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
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                type="button"
                className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
              >
                Company
                <i className="ri-arrow-down-s-line text-lg"></i>
              </button>
              <div className="absolute left-0 mt-3 w-52 rounded-xl glass-panel-strong border border-white/10 shadow-lg opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                {companyLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-sm text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors ${
                      index > 0 ? 'border-t border-white/10' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={openContactModal}
              className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="text-white"
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
            <div className="text-xs uppercase tracking-[0.3em] text-[#7BCBFF]">Company</div>
            <div className="mt-3 space-y-2">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[#7BCBFF]">Explore</div>
            <div className="mt-3 space-y-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openContactModal}
                className="block text-left text-sm text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors"
              >
                Contact Us
              </button>
            </div>
            <div className="mt-6 grid gap-3">
              <Link
                href="/resources/technical-docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#4682B4] to-[#48C9B0] hover:from-[#5493C5] hover:to-[#59D4BB] text-[#F2F4F8] px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-center"
              >
                Start Building
              </Link>
              <Link
                href="https://discord.gg/bb8Pn5qX"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border border-[#48C9B0] text-[#48C9B0] hover:bg-[#48C9B0]/10 hover:border-[#A3FFD6] hover:text-[#A3FFD6] px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-center"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      )}

      {isContactOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsContactOpen(false);
            }
          }}
          role="presentation"
        >
          <div
            ref={contactRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="bg-white rounded-lg max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 id="contact-title" className="text-xl font-bold text-[#1B1F3B]">
                Contact Us
              </h3>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-xl"></i>
                </div>
              </button>
            </div>
            
            {contactStatus === 'submitted' ? (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1E4DD8]/10 text-[#1E4DD8] flex items-center justify-center mx-auto">
                  <i className="ri-check-line text-2xl"></i>
                </div>
                <p className="mt-4 text-base font-semibold text-[#1B1F3B]">Thanks for reaching out.</p>
                <p className="mt-2 text-sm text-[#4A5568]">
                  We will reply soon. You can also email akash@4mica.xyz.
                </p>
                <div className="mt-6 grid gap-3">
                  <button
                    type="button"
                    onClick={() => setContactStatus('idle')}
                    className="w-full border border-gray-300 text-[#1B1F3B] py-2 px-4 rounded-md hover:border-gray-400 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(false)}
                    className="w-full bg-[#1E4DD8] text-white py-2 px-4 rounded-md hover:bg-[#3CAEF5] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="contact-form"
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setContactStatus('submitted');
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1B1F3B] mb-1">
                    Name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4DD8] text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1B1F3B] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4DD8] text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1B1F3B] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4DD8] text-sm resize-none"
                    placeholder="Your message (max 500 characters)"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#1E4DD8] text-white py-2 px-4 rounded-md hover:bg-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
