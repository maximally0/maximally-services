
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-6">READY TO MAXIMIZE?</h2>
          <p className="font-jetbrains text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
            Join the next generation of digital marketing with our AI-powered, pixel-perfect solutions. Your competitors won't know what hit them.
          </p>
          
          <div className="w-fit mx-auto">
            <a 
              href="#contact" 
              className="pixel-button bg-maximally-red text-white font-jetbrains font-bold py-5 px-10 text-center flex items-center gap-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">START YOUR TRANSFORMATION</span>
              <ArrowRight 
                size={20} 
                className={`relative z-10 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
