
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import { SEO } from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/lovable-uploads/maximally-social.png",
    "description": "AI-first digital marketing agency specializing in content engines, SEO optimization and pixel-perfect design that converts.",
    "sameAs": [
      "https://www.instagram.com/maximally.in",
      "https://www.linkedin.com/company/maximallysupplements"
    ]
  };

  return (
    <>
      <SEO 
        title="AI-First Digital Marketing Agency"
        description="Maximally is an AI-first digital marketing agency delivering cutting-edge solutions for modern businesses. Specializing in content engines, SEO optimization, and pixel-perfect design that converts."
        canonicalUrl="https://maximally.in"
      />
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
      }} />
      <div className="min-h-screen w-full overflow-x-hidden max-w-[100vw]">
        <Navbar />
        <main className="flex flex-col w-full">
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
