import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#004f74] flex flex-col items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596386461350-326ccb383e9f')] bg-cover bg-center opacity-0"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      <div className="relative space-y-12 transform hover:scale-105 transition-transform duration-700">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          Linked-
          <span className="bg-gradient-to-r from-[#66B2FF] to-[#99CCFF] text-transparent bg-clip-text">ഇൻ</span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl text-white/90 font-light">
          Ever seen a space without Malayalees owning it?
        </h2>
        
        <div className="pt-8">
          <a 
            href="https://www.linkedin.com/company/linked-%E0%B4%87%E0%B5%BB"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#3399FF] hover:bg-[#1a8cff] text-white text-xl px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-105 inline-block"
          >
            <span className="relative z-10">Let's Inked In</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#66B2FF] to-[#3399FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 animate-bounce">
        <ArrowDown className="w-10 h-10 text-[#99CCFF]" />
      </div>
    </div>
  );
};

export default Hero;