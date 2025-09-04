
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogContent from './BlogContent';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogContent />
      <Footer />
    </div>
  );
}
