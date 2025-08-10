'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logoSrc from '../../../public/images/rosopak.png'


function Navbar() {
  const [shineKey, setShineKey] = useState(0);

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5">
      {/* Logo - responsive sizing */}
      <div className="flex-shrink-0">
        <Image 
          src={logoSrc} 
          width={35} 
          height={35} 
          alt="logo" 
          className="sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
        />
      </div>
       
      {/* CTA Button - responsive sizing and text */}
      <div
        className="relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 bg-gray-200 text-black border border-gray-300 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-1 sm:gap-2 md:gap-3 cursor-pointer overflow-hidden"
        style={{
          boxShadow:
            '0 4px 12px rgba(0,0,0,0.08), 0 0 15px rgba(0,0,0,0.03)',
        }}
        onMouseEnter={() => {
          setShineKey((prev) => prev + 1); // Restart shine each hover
        }}
      >
        {/* Shine overlay */}
        <span
          key={shineKey}
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            backgroundImage:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
            transform: 'skewX(-20deg)',
            animation: 'shineMove 1s ease forwards',
          }}
        />

        <span className="text-sm sm:text-base md:text-lg font-medium relative z-10 whitespace-nowrap">
          <span className="text-base sm:text-lg md:text-xl mr-1 sm:mr-2 md:mr-3">→</span> 
          <span className="xs:inline">START A PROJECT</span>
        </span>

        {/* Inline keyframes */}
        <style>
          {`
            @keyframes shineMove {
              0% { left: -100%; }
              100% { left: 150%; }
            }
            @media (min-width: 475px) {
              .xs\\:inline { display: inline; }
              .xs\\:hidden { display: none; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Navbar;