import React from 'react';
import Header from '@/components/Header';

const Blog: React.FC = () => (
  <main className="min-h-screen bg-[#f8f8f5] text-gray-950">
    <Header />
    <section className="container mx-auto px-6 pb-24 pt-36 md:pt-44">
      <h1 className="mb-8 font-serif text-5xl font-light md:text-7xl">Blog</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
        No posts published yet.
      </p>
    </section>
  </main>
);

export default Blog;
