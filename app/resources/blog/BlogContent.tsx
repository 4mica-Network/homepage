
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogContent() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', subscribedEmail);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d2sprdo194fldsa6vk1g', {
        method: 'POST',
        body: new URLSearchParams({ email: subscribedEmail })
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setSubscribedEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AVS Payments: Why 4Mica Matters',
      excerpt: '4Mica issues cryptographic “tabs” backed by user collateral, so services can deliver instantly while settlement catches up later—Visa-like UX with on-chain guarantees.',
      author: 'Mairon',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20payment%20technology%20visualization%20with%20blockchain%20networks%20and%20digital%20transactions%2C%20modern%20fintech%20infrastructure%20with%20blue%20and%20teal%20gradients%2C%20clean%20tech%20illustration%20showing%20real-time%20payment%20flows%20and%20cryptocurrency%20systems&width=400&height=250&seq=blog-post-1&orientation=landscape'
    },
  ];

  const categories = ['All', 'Technology', 'Architecture', 'Integration', 'Security', 'Case Study', 'Economics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F9FF] pt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            4Mica Blog
          </h1>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-xl text-[#1B1F3B] max-w-3xl mx-auto">
            Insights, updates, and thought leadership on AVS payments, blockchain infrastructure, and the future of decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-[#1E4DD8] text-white'
                        : 'bg-white text-[#1B1F3B] hover:bg-[#3CAEF5] hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#1E4DD8] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#1B1F3B] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#1B1F3B] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#3CAEF5] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1B1F3B]">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/resources/blog/${post.id}`}
                        className="text-[#1E4DD8] hover:text-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-[#1E4DD8] text-white px-8 py-3 rounded-lg hover:bg-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#1B1F3B] mb-4">Stay Updated</h3>
                <p className="text-[#1B1F3B] mb-4">
                  Get the latest insights on AVS payments and blockchain infrastructure.
                </p>
                
                {isSubscribed ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-white"></i>
                      </div>
                    </div>
                    <p className="text-green-800 text-sm">Successfully subscribed!</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} data-readdy-form id="newsletter-signup">
                    <input
                      type="email"
                      name="email"
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4DD8] mb-3 text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#1E4DD8] text-white py-2 rounded-lg hover:bg-[#3CAEF5] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#1B1F3B] mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link 
                      key={post.id} 
                      href={`/resources/blog/${post.id}`}
                      className="block cursor-pointer"
                    >
                      <div className="flex space-x-3 hover:bg-[#F5F9FF] p-2 rounded transition-colors">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded object-cover object-top flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#1B1F3B] line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#1B1F3B] mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['AVS', 'Payments', 'Blockchain', 'DeFi', 'EigenLayer', 'Security', 'Integration', 'Architecture'].map((tag) => (
                    <span 
                      key={tag}
                      className="bg-[#F5F9FF] text-[#1B1F3B] px-3 py-1 rounded-full text-sm hover:bg-[#1E4DD8] hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
