
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { SEO } from '@/components/SEO';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const Blog = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <SEO 
        title="Blog | Maximally"
        description="Stay ahead of AI marketing trends. Read our thoughts on growth, automation, and design."
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-press-start text-4xl md:text-5xl text-maximally-dark mb-4">
              THE MAXIMALLY BLOG
            </h1>
            <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
              No fluff. Just insights that move the needle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white p-6 minecraft-border hover:border-maximally-blue transition-colors">
                <p className="font-jetbrains text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="font-press-start text-xl mb-3">{post.title}</h2>
                <p className="font-jetbrains text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="font-jetbrains text-maximally-blue hover:text-maximally-dark transition-colors"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Blog;
