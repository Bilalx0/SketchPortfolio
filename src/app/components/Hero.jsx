"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [shineKey, setShineKey] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Green Arrow Shape - responsive positioning */}
        <div
          className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-transform duration-1000 ease-out"
          style={{
            top: "5%",
            left: "5%",
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.06}px) rotate(45deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 rounded-lg shadow-2xl"></div>
        </div>

        {/* Orange/Yellow Shape - responsive sizing */}
        <div
          className="absolute w-12 h-20 sm:w-18 sm:h-30 md:w-24 md:h-40 transition-transform duration-1000 ease-out"
          style={{
            top: "8%",
            right: "8%",
            transform: `translate(${mousePosition.x * -0.06}px, ${mousePosition.y * 0.08}px) rotate(-15deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg shadow-2xl"></div>
        </div>

        {/* Blue Curved Shape - responsive sizing */}
        <div
          className="absolute w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 transition-transform duration-1000 ease-out"
          style={{
            bottom: "15%",
            left: "8%",
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * -0.07}px) rotate(30deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-2xl"></div>
        </div>

        {/* Purple/Pink Shape - responsive sizing */}
        <div
          className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform duration-1000 ease-out"
          style={{
            bottom: "20%",
            right: "6%",
            transform: `translate(${mousePosition.x * -0.07}px, ${mousePosition.y * 0.05}px) rotate(60deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 shadow-2xl"></div>
        </div>

        {/* Additional floating shape - top center - responsive sizing */}
        <div
          className="absolute w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-1000 ease-out"
          style={{
            top: "12%",
            left: "50%",
            transform: `translate(-50%, 0) translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.03}px) rotate(75deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg shadow-2xl"></div>
        </div>

        {/* Small accent shapes - hidden on very small screens */}
        <div
          className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-transform duration-1000 ease-out hidden sm:block"
          style={{
            top: "35%",
            left: "8%",
            transform: `translate(${mousePosition.x * 0.09}px, ${mousePosition.y * -0.04}px)`,
          }}
        >
          <div className="w-full h-full bg-black rounded-full shadow-lg"></div>
        </div>

        <div
          className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 transition-transform duration-1000 ease-out hidden sm:block"
          style={{
            top: "45%",
            right: "18%",
            transform: `translate(${mousePosition.x * -0.08}px, ${mousePosition.y * 0.09}px)`,
          }}
        >
          <div className="w-full h-full bg-green-400 rounded-full shadow-lg"></div>
        </div>

        {/* Additional small accent for balance - hidden on small screens */}
        <div
          className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 transition-transform duration-1000 ease-out hidden sm:block"
          style={{
            bottom: "35%",
            left: "25%",
            transform: `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.04}px)`,
          }}
        >
          <div className="w-full h-full bg-orange-400 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        {/* Main Typography */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight">
           <span
  className="block text-5xl sm:text-7xl md:text-9xl lg:text-[12rem]"
  style={{
    backgroundImage: 'linear-gradient(0deg, #000000, #3B3737, #000000)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow:
      '0 0 15px rgba(0,0,0,0.15), 0 0 30px rgba(0,0,0,0.1), 0 0 45px rgba(0,0,0,0.05)',
    filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))',
  }}
>
  Meet Bilal
</span>


          </h1>
        </div>

        {/* Description */}
        <div className="max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
          <p 
            className="text-sm sm:text-lg md:text-2xl text-gray-800 leading-relaxed font-medium px-2"
            style={{
              textShadow: '0 0 8px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
            }}
          >
           Skilled Full Stack Web Developer; building intuitive and robust web solutions, and delivering meaningful results from front to back.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
         <button
  className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gray-200 text-black border border-gray-300 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 cursor-pointer overflow-hidden"
  style={{
    boxShadow:
      '0 4px 12px rgba(0,0,0,0.08), 0 0 15px rgba(0,0,0,0.03)',
  }}
  onMouseEnter={() => setShineKey((prev) => prev + 1)} // Restart shine each hover
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

  <span className="text-base sm:text-lg font-medium relative z-10">
    {"Let's Connect"} <span className="text-lg sm:text-xl">→</span>
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
</button>

          {/* Available for Work Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-black font-medium text-sm sm:text-base">Available for work</span>
          </div>
        </div>
      </div>

      {/* Vertical Text - hide on very small screens */}
      <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 -rotate-90 z-50 hidden sm:block">
        <span 
          className="text-black text-xs sm:text-sm tracking-widest font-bold"
          style={{
            textShadow: '0 0 6px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.05)',
          }}
        >
          PORTFOLIO
        </span>
      </div>
    </div>
  )
}