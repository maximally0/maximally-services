
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { SEO } from '@/components/SEO';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <SEO 
        title={`${post.title} | Maximally Blog`}
        description={post.excerpt}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="font-press-start text-4xl md:text-5xl text-maximally-dark mb-4">
              {post.title}
            </h1>
            <div className="font-jetbrains text-gray-600">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </header>
          
          <div 
            className="font-jetbrains prose prose-lg mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <FooterSection />
    </div>
  );
};

export default BlogPost;
