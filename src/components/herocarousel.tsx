'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlay, FaGamepad, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-fit bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(203, 254, 28, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(203, 254, 28, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            transform: isClient ? 
              `perspective(500px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` :
              'perspective(500px) rotateX(0deg) rotateY(0deg)'
          }}
        />
      </div>

      {/* Animated Image - Responsive positioning */}
      <div className={`absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 2xl:right-16 z-30 top-3 sm:top-5 md:top-12 lg:top-16 xl:top-26 2xl:top-30 w-1/2 sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-1/3 2xl:w-1/3 transform transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div 
          className="relative w-full h-full"
          style={{
            transform: isClient ?
              `perspective(1000px) 
               rotateY(${mousePosition.x * 0.03}deg) 
               rotateX(${mousePosition.y * -0.03}deg)
               translateZ(${mousePosition.y * 0.3}px)` :
              'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
            transition: 'transform 0.2s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          <img 
            src="https://ex-coders.com/html/pubzi/assets/img/home-1/hero/poly-liquid.png" 
            alt="Gaming Experience" 
            className="w-full h-full object-contain"
            style={{
              transform: isClient ?
                `translateZ(20px)
                 rotateY(${mousePosition.x * 0.01}deg)
                 rotateX(${mousePosition.y * -0.01}deg)` :
                'translateZ(20px)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) brightness(1.1) contrast(1.1)',
              transition: 'all 0.3s ease-out',
              animation: 'float-up-down 4s ease-in-out infinite, imageGlow 3s ease-in-out infinite alternate'
            }}
          />
          
          {/* Animated Glow Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent rounded-full blur-xl"
            style={{
              animation: 'pulseGlow 2s ease-in-out infinite alternate'
            }}
          />
        </div>
      </div>

      {/* Content Container - Full width text */}
      <div className="relative z-10 max-w-7xl xl:max-w-8xl 2xl:max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-5 sm:py-5 md:py-8 lg:py-10 xl:py-15 2xl:py-20">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Main Heading - Single line text in white */}
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-none md:leading-none lg:leading-none">
              <span className="text-white gap-2 sm:gap-3 md:gap-4">
                ULTIMATE GAMING EXPERIENCE
              
              <button className="group mx-2 cursor-pointer relative bg-transparent text-white rounded-xl hover:scale-105 transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24">
                <div className="relative w-full h-full">
                  <div className="w-full h-full bg-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-[var(--color-primary)] transition-all duration-300">
                    <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 ml-0.5 sm:ml-1" />
                  </div>
                </div>
              </button>
              </span>
            </h1>
          </div>

          {/* Stats Cards */}
          <div className="flex mt-6 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 max-w-2xl">
  <div className="flex items-start">
    <div className="h-12 sm:h-16 md:h-20 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/60 to-transparent mx-2 sm:mx-4 md:mx-6"></div>

    <div className="text-center px-4">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-primary)]">10K+</div>
      <div className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">Players</div>
    </div>
    

    <div className="h-12 sm:h-16 md:h-20 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/60 to-transparent mx-2 sm:mx-4 md:mx-6"></div>
    

    <div className="text-center px-4">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-primary)]">50+</div>
      <div className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">Games</div>
    </div>
    

    <div className="h-12 sm:h-16 md:h-20 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/60 to-transparent mx-2 sm:mx-4 md:mx-6"></div>
    

    <div className="text-center px-4">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-primary)]">24/7</div>
      <div className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">Fun</div>
    </div>
  </div>
</div>


          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
            <Link
              href="/book-now"
              className="group relative bg-[var(--color-primary)] text-black px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 rounded-xl font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:scale-105 transition-all duration-300 border-2 border-black shadow-lg hover:shadow-xl flex items-center gap-2 sm:gap-3 justify-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <FaGamepad className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span>BOOK NOW</span>
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
    0%, 100% { 
      transform: translateY(0px) scale(1);
    }
    50% { 
      transform: translateY(-20px) scale(1.05);
    }
  }

  @keyframes float-up-down {
    0%, 100% { 
      transform: translateY(0px) translateZ(20px);
    }
    25% {
      transform: translateY(-10px) translateZ(20px);
    }
    50% { 
      transform: translateY(-20px) translateZ(20px);
    }
    75% {
      transform: translateY(-10px) translateZ(20px);
    }
  }
  
  @keyframes imageGlow {
    0% {
      filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)) brightness(1.1) contrast(1.1);
    }
    100% {
      filter: drop-shadow(0 30px 60px rgba(203, 254, 28, 0.3)) brightness(1.2) contrast(1.2);
    }
  }
  
  @keyframes pulseGlow {
    0% {
      opacity: 0.3;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-up-down {
    animation: float-up-down 4s ease-in-out infinite;
  }
      `}</style>
    </section>
  );
}