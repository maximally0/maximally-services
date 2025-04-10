
import React from 'react';

const PixelLogo = () => {
  return (
    <div className="w-8 h-8 md:w-10 md:h-10 grid grid-cols-4 grid-rows-4 gap-[2px] hover:animate-glitch">
      {/* First row */}
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
      
      {/* Second row */}
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-blue"></div>
      <div className="bg-maximally-blue"></div>
      <div className="bg-maximally-dark"></div>
      
      {/* Third row */}
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-red"></div>
      <div className="bg-maximally-blue"></div>
      <div className="bg-maximally-dark"></div>
      
      {/* Fourth row */}
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
      <div className="bg-maximally-dark"></div>
    </div>
  );
};

export default PixelLogo;
