import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { Helmet } from 'react-helmet-async';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximally",
    "url": "https://maximally.ai",
    "logo": "https://maximally.ai/logo.png",
    "description": "AI-first digital marketing agency specializing in content engines, SEO optimization and pixel-perfect design that converts.",
    "sameAs": [
      "https://twitter.com/maximally",
      "https://facebook.com/maximally",
      "https://linkedin.com/company/maximally",
      "https://www.instagram.com/maximally.in",
      "https://www.linkedin.com/company/maximallysupplements"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Background pixel grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
          {Array.from({
          length: 400
        }).map((_, i) => <div key={i} className={`${Math.random() > 0.8 ? 'bg-maximally-blue' : Math.random() > 0.5 ? 'bg-maximally-red' : 'bg-maximally-dark'} opacity-${Math.floor(Math.random() * 50) + 10}`}></div>)}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className={`font-press-start text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-tight transition-all duration-700 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-maximally-dark">AI</span> <span className="text-maximally-blue">×</span> <span className="text-maximally-red">MARKETING</span><br />
            <span className="text-maximally-dark">PIXEL BY PIXEL</span>
          </h1>

          <p className={`font-jetbrains text-gray-800 text-base md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 transform leading-relaxed ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Maximally blends AI precision with creative strategy to help brands build bold identities, craft high-converting digital assets, and scale using modern growth systems.
          </p>

          <div className={`flex flex-col gap-4 transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-3 px-6 md:py-4 md:px-8 text-center text-sm md:text-base">
                <span className="relative z-10">START YOUR JOURNEY</span>
              </a>
              <a href="/pricing" className="pixel-button bg-white hover:bg-white text-maximally-dark hover:text-maximally-dark font-jetbrains font-bold py-3 px-6 md:py-4 md:px-8 flex items-center justify-center gap-2 text-sm md:text-base">
                <span className="relative z-10">EXPLORE SERVICES</span>
                <ArrowRight size={16} className="relative z-10" />
              </a>
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <a href="/blog" className="text-maximally-blue hover:text-maximally-dark transition-colors">Read Our Blog</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pixel-divider w-full mt-12 md:mt-20"></div>
    </section>
  );
};

export default HeroSection;