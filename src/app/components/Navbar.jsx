'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/rosopak.png';

function Navbar() {
  const [shineKey, setShineKey] = useState(0);

  return (
    <div className="flex items-center justify-between px-10 py-5">
      <Image src={logo} width={50} height={50} alt="logo" />

      <div
        className="relative px-6 py-3 bg-gray-200 text-black border border-gray-300 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 cursor-pointer overflow-hidden"
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

        <span className="text-lg font-medium relative z-10">
          <span className="text-xl mr-3">→</span> START A PROJECT
        </span>

        {/* Inline keyframes */}
        <style>
          {`
            @keyframes shineMove {
              0% { left: -100%; }
              100% { left: 150%; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Navbar;
