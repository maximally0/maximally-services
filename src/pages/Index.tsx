
import { lazy, Suspense } from 'react';
import { SEO } from '@/components/SEO';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "url": "https://maximally.in",
    "logo": "https://maximally.in/lovable-uploads/maximally-social.png",
    "description": "AI-powered digital marketing agency specializing in SEO services, content creation, and marketing automation for startups in India.",
    "sameAs": [
      "https://www.instagram.com/maximally.in",
      "https://www.linkedin.com/company/maximallysupplements"
    ],
    "areaServed": "India",
    "priceRange": "₹₹₹",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI SEO Optimization",
            "description": "Data-driven SEO services powered by artificial intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Content Creation",
            "description": "Automated content generation and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description": "AI-powered marketing automation solutions"
          }
        }
      ]
    }
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
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CtaSection />
          </Suspense>
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
