
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PixelLogo from './PixelLogo';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background pixel grid pattern */}
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

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`flex justify-center mb-8 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block border-2 border-maximally-dark p-4 bg-white">
              <PixelLogo />
            </div>
          </div>
          
          <h1 className={`font-press-start text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight transition-all duration-700 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-maximally-dark">MAXIMIZE YOUR</span> <br />
            <span className="text-maximally-blue">DIGITAL PRESENCE</span> <br />
            <span className="text-maximally-red">WITH AI</span>
          </h1>
          
          <p className={`font-jetbrains text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Pixelated perfection meets cutting-edge AI marketing. We turn your brand into the next level digital powerhouse.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#contact" className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-4 px-8 text-center">
              <span className="relative z-10">START YOUR JOURNEY</span>
            </a>
            <a href="#services" className="pixel-button bg-white text-maximally-dark font-jetbrains font-bold py-4 px-8 flex items-center justify-center gap-2">
              <span className="relative z-10">EXPLORE SERVICES</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pixel-divider w-full mt-20"></div>
    </section>
  );
};

export default HeroSection;
