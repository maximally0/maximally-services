
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="flex flex-col w-full pt-24 md:pt-32 pb-20">
        <section className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-press-start text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight">
              <span className="text-maximally-dark">MAXIMALLY</span> <br />
              <span className="text-maximally-blue">BLOG</span>
            </h1>
            <p className="font-jetbrains text-gray-800 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Cutting-edge insights on AI marketing, content strategy, and pixel-perfect design that actually converts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={index}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
              />
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Blog;
