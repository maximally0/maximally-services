
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
        title="AI Marketing Agency in Chandigarh | Digital Branding for Startups | Maximally"
        description="Leading AI marketing agency in Chandigarh & Delhi NCR. Transform your startup with AI-powered digital marketing, branding & paid advertising services. Trusted by 50+ startups across India."
        canonicalUrl="https://maximally.in"
        city="Chandigarh"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Maximally - AI Marketing Agency",
          "image": "https://maximally.in/lovable-uploads/maximally-social.png",
          "description": "AI-powered digital marketing and branding agency specializing in startup growth, paid advertising, and influencer marketing.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Chandigarh",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.7333",
            "longitude": "76.7794"
          },
          "areaServed": ["Chandigarh", "Delhi", "Dehradun", "Global"],
          "serviceType": ["AI Marketing", "Digital Branding", "Paid Advertising", "Influencer Marketing"],
          "priceRange": "₹₹₹"
        }}
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
