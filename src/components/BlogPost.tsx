
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { blogPosts } from '@/data/blogPosts';
import { ArrowRight, Calendar, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="flex flex-col w-full pt-24 md:pt-32 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gray-50 py-10 md:py-16 border-b-2 border-maximally-dark mb-10">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
              {Array.from({ length: 400 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`${Math.random() > 0.8 ? 'bg-maximally-blue' : Math.random() > 0.5 ? 'bg-maximally-red' : 'bg-maximally-dark'} opacity-${Math.floor(Math.random() * 50) + 10}`}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={() => navigate('/blog')}
                className="flex items-center font-jetbrains text-maximally-dark mb-6 text-sm hover:text-maximally-blue transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to blog
              </button>
              
              <div className="flex items-center text-gray-600 text-sm mb-4 font-jetbrains">
                <Calendar size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              
              <h1 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-6 leading-tight text-maximally-dark">
                {post.title}
              </h1>
              
              <p className="font-jetbrains text-gray-800 text-lg md:text-xl border-l-4 border-maximally-blue pl-4 py-1">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto font-jetbrains">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* CTA Section */}
            <div className="border-2 border-maximally-dark p-6 mt-16 bg-gray-50">
              <h3 className="font-press-start text-lg text-maximally-dark mb-4">Let's build your growth engine</h3>
              <p className="mb-6 text-gray-700">
                Ready to implement what you've learned? Our team of AI-powered marketing experts is ready to help you build a sustainable growth engine for your business.
              </p>
              <a 
                href="/contact" 
                className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-3 px-6 text-center inline-flex items-center"
              >
                <span className="relative z-10">START THE CONVERSATION</span>
                <ArrowRight size={16} className="ml-2 relative z-10" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default BlogPost;
