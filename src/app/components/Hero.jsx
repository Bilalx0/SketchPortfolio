"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
        {/* Green Arrow Shape - moved further left and up */}
        <div
          className="absolute w-32 h-32 transition-transform duration-1000 ease-out"
          style={{
            top: "5%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.06}px) rotate(45deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 rounded-lg shadow-2xl"></div>
        </div>

        {/* Orange/Yellow Shape - moved further right and up */}
        <div
          className="absolute w-24 h-40 transition-transform duration-1000 ease-out"
          style={{
            top: "8%",
            right: "12%",
            transform: `translate(${mousePosition.x * -0.06}px, ${mousePosition.y * 0.08}px) rotate(-15deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg shadow-2xl"></div>
        </div>

        {/* Blue Curved Shape - moved further left and down */}
        <div
          className="absolute w-28 h-28 transition-transform duration-1000 ease-out"
          style={{
            bottom: "15%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * -0.07}px) rotate(30deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-2xl"></div>
        </div>

        {/* Purple/Pink Shape - moved further right and down */}
        <div
          className="absolute w-16 h-16 transition-transform duration-1000 ease-out"
          style={{
            bottom: "20%",
            right: "8%",
            transform: `translate(${mousePosition.x * -0.07}px, ${mousePosition.y * 0.05}px) rotate(60deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 shadow-2xl"></div>
        </div>

        {/* Additional floating shape - top center */}
        <div
          className="absolute w-20 h-20 transition-transform duration-1000 ease-out"
          style={{
            top: "12%",
            left: "50%",
            transform: `translate(-50%, 0) translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.03}px) rotate(75deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg shadow-2xl"></div>
        </div>

        {/* Small accent shapes with more spacing */}
        <div
          className="absolute w-8 h-8 transition-transform duration-1000 ease-out"
          style={{
            top: "35%",
            left: "8%",
            transform: `translate(${mousePosition.x * 0.09}px, ${mousePosition.y * -0.04}px)`,
          }}
        >
          <div className="w-full h-full bg-black rounded-full shadow-lg"></div>
        </div>

        <div
          className="absolute w-6 h-6 transition-transform duration-1000 ease-out"
          style={{
            top: "45%",
            right: "18%",
            transform: `translate(${mousePosition.x * -0.08}px, ${mousePosition.y * 0.09}px)`,
          }}
        >
          <div className="w-full h-full bg-green-400 rounded-full shadow-lg"></div>
        </div>

        {/* Additional small accent for balance */}
        <div
          className="absolute w-4 h-4 transition-transform duration-1000 ease-out"
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main Typography */}
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight">
            <span 
              className="block text-7xl md:text-9xl lg:text-[12rem] text-black"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.15), 0 0 30px rgba(0,0,0,0.1), 0 0 45px rgba(0,0,0,0.05)',
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))',
              }}
            >
              Meet Bilal
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p 
            className="text-lg md:text-2xl text-gray-800 leading-relaxed font-medium"
            style={{
              textShadow: '0 0 8px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
            }}
          >
            Award winning Frontend Designer; elevating digital experiences, crafting intuitive interfaces, and driving
            meaningful impact
          </p>
        </div>

        {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-10">
          {/* Let's Connect Button */}
          <button 
            className="px-8 py-4 bg-gray-200 text-black border border-gray-300 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 cursor-pointer"

            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 0 15px rgba(0,0,0,0.03)',
            }}
          >
            {"Let's Connect"}
            <span className="text-xl">→</span>
          </button>

          {/* Available for Work Status */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-black font-medium">Available for work</span>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 -rotate-90 z-50">
        <span 
          className="text-black text-sm tracking-widest font-bold"
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
