
import React from 'react';

const PixelLogo = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative">
      <div className="absolute w-full h-full grid grid-cols-5 grid-rows-5">
        {/* Main blue M shape */}
        <div className="bg-maximally
-blue col-span-1 row-span-5"></div>
        <div className="bg-maximally-blue col-span-1 row-span-2"></div>
        <div className="bg-transparent col-span-1 row-span-3"></div>
        <div className="bg-maximally-blue col-span-1 row-span-2"></div>
        <div className="bg-maximally-blue col-span-1 row-span-5"></div>
        
        {/* Red square accent */}
        <div className="bg-maximally-red col-start-4 col-span-1 row-start-1 row-span-1"></div>
      </div>
    </div>
  );
};

export default PixelLogo;
