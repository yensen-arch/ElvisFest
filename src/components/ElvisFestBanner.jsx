import React from 'react';
import { Music, Star } from 'lucide-react';

export default function ElvisFestBanner() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-black to-gray-900 overflow-hidden flex items-center justify-center">
      {/* Gold records background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full border-4 border-yellow-400"
            style={{
              width: `${Math.random() * 100 + 50}px`, 
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Music notes floating effect */}
      <div className="absolute top-4 left-6">
        <Music size={24} className="text-yellow-400" />
      </div>
      <div className="absolute top-12 right-16">
        <Music size={20} className="text-yellow-400" />
      </div>
      <div className="absolute bottom-10 left-1/4">
        <Music size={16} className="text-yellow-400" />
      </div>
      
      {/* Stars */}
      <Star className="absolute top-6 right-6 text-yellow-400" size={24} />
      <Star className="absolute bottom-6 left-8 text-yellow-400" size={20} />
      
      {/* Main text with Elvis styling */}
      <div className="relative z-10 text-center px-4 py-6 bg-black bg-opacity-50 rounded-lg border-t border-b border-yellow-400">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-1 bg-yellow-400" />
        </div>
        <div className="mb-2 text-yellow-400 font-light tracking-wider">
          V4V PRESENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-white mb-2">
          ELVIS FEST
          <span className="text-yellow-400">2025</span>
        </h1>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-1 bg-yellow-400" />
        </div>
      </div>
    </div>
  );
}