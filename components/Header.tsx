'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            <Link 
              href="/#resources" 
              className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
            >
              Resources
            </Link>
            <Link 
              href="/#team" 
              className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
            >
              Team
            </Link>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-[#F0F4FF] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#1B1F3B]">Contact Us</h3>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-xl"></i>
                </div>
              </button>
            </div>
            
            <form id="contact-form" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1B1F3B] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
          </div>
        </div>
      )}
    </>
  );
}
