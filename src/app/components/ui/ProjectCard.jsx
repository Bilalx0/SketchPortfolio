import React from 'react';

function ProjectCard({ title, gradient, tech, image }) {
  return (
    <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div 
          className="lg:w-1/2 p-8 lg:p-12 text-neutral-100 relative h-screen" 

          style={{
            background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-tight mb-8">
            {title || "Crafted unified experiences across touchpoints for Cisco's IoT-based SaaS Platform"}
          </h2>
          
          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {(tech || ['React', 'TypeScript', 'Node.js', 'MongoDB']).map((technology, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/30 transition-colors"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
            <svg 
              className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="lg:w-1/2 bg-gray-800 relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title || "Project showcase"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-64 lg:h-full flex items-center justify-center relative">
              {/* Mock laptop */}
              <div className="relative">
                <div className="w-80 h-52 bg-gray-700 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg p-4">
                    <div className="w-full h-full bg-gray-900 rounded-md p-3">
                      <div className="grid grid-cols-8 gap-1 h-full">
                        {[...Array(64)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`rounded-sm ${
                              Math.random() > 0.7 ? 'bg-blue-400' : 
                              Math.random() > 0.5 ? 'bg-purple-400' : 'bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mock tablet */}
                <div className="absolute -bottom-8 -right-8 w-32 h-20 bg-gray-600 rounded-lg shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-2">
                    <div className="w-full h-full bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Attribution */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-xs font-medium text-gray-800">🎨 Made in Framer</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard