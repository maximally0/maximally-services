
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
            className="font-jetbrains prose prose-lg mx-auto 
              prose-headings:font-press-start 
              prose-h1:text-4xl prose-h1:text-maximally-dark prose-h1:mb-8
              prose-h2:text-3xl prose-h2:text-maximally-blue prose-h2:mt-12 prose-h2:mb-6 
              prose-p:text-gray-700 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 
              prose-li:text-gray-700 prose-li:mb-3 
              prose-strong:text-maximally-red prose-strong:font-bold 
              prose-em:text-maximally-blue prose-em:font-normal prose-em:bg-blue-50 prose-em:px-2 prose-em:py-1 prose-em:rounded
              prose-blockquote:border-maximally-blue prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
              [&>h2>span]:text-maximally-red"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <FooterSection />
    </div>
  );
};

export default BlogPost;
