'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlay, FaStar, FaTrophy, FaUsers, FaGamepad, FaArrowRight } from 'react-icons/fa';

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

  // Fixed particle positions (same on server and client)
  const fixedParticles = [
    { left: 10, top: 20, delay: 0 },
    { left: 20, top: 80, delay: 1 },
    { left: 30, top: 40, delay: 2 },
    { left: 40, top: 60, delay: 3 },
    { left: 50, top: 30, delay: 0 },
    { left: 60, top: 70, delay: 1 },
    { left: 70, top: 50, delay: 2 },
    { left: 80, top: 90, delay: 3 },
    { left: 90, top: 10, delay: 0 },
    { left: 15, top: 50, delay: 1 }
  ];

  const features = [
    { icon: FaGamepad, text: "50+ Arcade Games" },
    { icon: FaTrophy, text: "Weekly Tournaments" },
    { icon: FaUsers, text: "VR Experience" },
    { icon: FaStar, text: "5-Star Rating" }
  ];

  // Don't render particles during SSR
  const renderParticles = isClient ? fixedParticles : [];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Fixed particles - no random values */}
        {renderParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[var(--color-primary)] rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
        
        {/* Grid pattern - fixed transformation */}
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px sm:50px 50px',
            transform: isClient ? 
              `perspective(500px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` :
              'perspective(500px) rotateX(0deg) rotateY(0deg)'
          }}
        />
      </div>

      {/* 3D Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/50 border-2 border-[var(--color-primary)] px-3 py-1 sm:px-4 sm:py-2 rounded-full">
              <FaStar className="text-[var(--color-primary)] text-sm sm:text-base animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-bold">#1 Gaming Center</span>
            </div>

            {/* Main Heading with 3D Text Effect */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white">ULTIMATE</span>
                <span className="block text-[var(--color-primary)] relative">
                  GAMING
                  {/* 3D Text Shadow */}
                  <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-black -z-10" 
                    style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5) sm:4px 4px 0px rgba(0,0,0,0.5)' }}>
                    GAMING
                  </span>
                </span>
                <span className="block text-white">EXPERIENCE</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Step into the future of entertainment with our state-of-the-art 
                <span className="text-[var(--color-primary)] font-bold"> arcade games</span>, 
                <span className="text-[var(--color-primary)] font-bold"> VR adventures</span>, and 
                <span className="text-[var(--color-primary)] font-bold"> bowling alleys</span>
              </p>
              {/* image animations */}
                          <div 
  className="absolute -right-5 sm:right-10 -top-16 lg:hidden w-fit max-w-md mx-auto lg:max-w-xl"
  style={{
    transform: isClient ?
      `perspective(1200px) 
       rotateY(${mousePosition.x * 0.05}deg) 
       rotateX(${mousePosition.y * -0.05}deg)
       translateZ(${mousePosition.y * 0.5}px)
       scale(${1 + (Math.sin(Date.now() * 0.002) * 0.05)})` :
      'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transformStyle: 'preserve-3d'
  }}
>
  {/* 3D Image Container with Depth */}
  <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
    
    {/* Main Image with 3D Transform */}
    <img 
      src="/images/heroImg.png" 
      alt="Fun Zone Gaming" 
      className="w-fit lg:w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-contain"
      style={{
        transform: isClient ?
          `translateZ(30px)
           rotateY(${mousePosition.x * 0.02}deg)
           rotateX(${mousePosition.y * -0.02}deg)
           scale(${1 + (Math.cos(Date.now() * 0.001) * 0.02)})` :
          'translateZ(30px)',
        filter: `
          drop-shadow(20px 20px 30px rgba(0,0,0,0.6))
          brightness(${1 + (mousePosition.y * 0.002)})
          contrast(${1.1 + (mousePosition.x * 0.001)})
        `,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: 'imageFloat3D 8s ease-in-out infinite'
      }}
    />

    {/* 3D Glow Effect Behind Image */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/30 to-yellow-300/20 blur-2xl -z-10 rounded-2xl"
      style={{
        transform: 'translateZ(-20px) scale(1.1)',
        animation: 'glowPulse3D 4s ease-in-out infinite',
        filter: 'blur(40px)'
      }}
    />

    {/* 3D Reflection Effect */}
    <div 
      className="absolute -bottom-10 inset-x-0 h-20 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent -z-5"
      style={{
        transform: 'translateZ(-15px) rotateX(80deg)',
        maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
        animation: 'reflectionShimmer 6s ease-in-out infinite'
      }}
    />

    {/* Floating Particles in 3D Space */}
    {isClient && (
      <>
        {/* Front Layer Particles */}
        <div 
          className="absolute top-4 right-4 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-particle-3d-1"
          style={{ transform: 'translateZ(50px)' }}
        />
        <div 
          className="absolute bottom-8 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-particle-3d-2"
          style={{ transform: 'translateZ(40px)' }}
        />
        
        {/* Middle Layer Particles */}
        <div 
          className="absolute top-12 left-8 w-4 h-4 bg-[var(--color-primary)]/70 rounded-lg rotate-45 animate-particle-3d-3"
          style={{ transform: 'translateZ(10px)' }}
        />
        
        {/* Back Layer Particles */}
        <div 
          className="absolute bottom-4 right-12 w-3 h-3 bg-yellow-300/50 rounded-full animate-particle-3d-4"
          style={{ transform: 'translateZ(-20px)' }}
        />
      </>
    )}

    {/* 3D Border Effect */}
    <div 
      className="absolute inset-0 border-4 border-[var(--color-primary)]/20 rounded-2xl"
      style={{
        transform: 'translateZ(10px)',
        animation: 'borderGlow3D 5s ease-in-out infinite'
      }}
    />
    
    {/* Inner 3D Border */}
    <div 
      className="absolute inset-4 border-2 border-yellow-300/30 rounded-xl"
      style={{
        transform: 'translateZ(25px)',
        animation: 'innerBorderPulse 3s ease-in-out infinite'
      }}
    />

  </div>
</div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 sm:p-3 bg-black/30 rounded-lg border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)] transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="text-[var(--color-primary)] text-sm sm:text-lg" />
                  <span className="text-white text-xs sm:text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/book-now"
                className="group relative bg-[var(--color-primary)] text-black px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 justify-center"
              >
                <FaGamepad className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>BOOK NOW</span>
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="group relative bg-transparent text-white px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black flex items-center gap-2 justify-center">
                <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>WATCH TOUR</span>
              </button>
            </div>
            
          </div>

          {/* Right Side - 3D Image Container */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Main 3D Image Container */}
            <div 
  className="hidden lg:flex relative w-full max-w-md mx-auto lg:max-w-xl"
  style={{
    transform: isClient ?
      `perspective(1200px) 
       rotateY(${mousePosition.x * 0.05}deg) 
       rotateX(${mousePosition.y * -0.05}deg)
       translateZ(${mousePosition.y * 0.5}px)
       scale(${1 + (Math.sin(Date.now() * 0.002) * 0.05)})` :
      'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transformStyle: 'preserve-3d'
  }}
>
  {/* 3D Image Container with Depth */}
  <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
    
    {/* Main Image with 3D Transform */}
    <img 
      src="/images/heroImg.png" 
      alt="Fun Zone Gaming" 
      className="w-fit lg:w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-contain"
      style={{
        transform: isClient ?
          `translateZ(30px)
           rotateY(${mousePosition.x * 0.02}deg)
           rotateX(${mousePosition.y * -0.02}deg)
           scale(${1 + (Math.cos(Date.now() * 0.001) * 0.02)})` :
          'translateZ(30px)',
        filter: `
          drop-shadow(20px 20px 30px rgba(0,0,0,0.6))
          brightness(${1 + (mousePosition.y * 0.002)})
          contrast(${1.1 + (mousePosition.x * 0.001)})
        `,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: 'imageFloat3D 8s ease-in-out infinite'
      }}
    />

    {/* 3D Glow Effect Behind Image */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/30 to-yellow-300/20 blur-2xl -z-10 rounded-2xl"
      style={{
        transform: 'translateZ(-20px) scale(1.1)',
        animation: 'glowPulse3D 4s ease-in-out infinite',
        filter: 'blur(40px)'
      }}
    />

    {/* 3D Reflection Effect */}
    <div 
      className="absolute -bottom-10 inset-x-0 h-20 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent -z-5"
      style={{
        transform: 'translateZ(-15px) rotateX(80deg)',
        maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
        animation: 'reflectionShimmer 6s ease-in-out infinite'
      }}
    />

    {/* Floating Particles in 3D Space */}
    {isClient && (
      <>
        {/* Front Layer Particles */}
        <div 
          className="absolute top-4 right-4 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-particle-3d-1"
          style={{ transform: 'translateZ(50px)' }}
        />
        <div 
          className="absolute bottom-8 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-particle-3d-2"
          style={{ transform: 'translateZ(40px)' }}
        />
        
        {/* Middle Layer Particles */}
        <div 
          className="absolute top-12 left-8 w-4 h-4 bg-[var(--color-primary)]/70 rounded-lg rotate-45 animate-particle-3d-3"
          style={{ transform: 'translateZ(10px)' }}
        />
        
        {/* Back Layer Particles */}
        <div 
          className="absolute bottom-4 right-12 w-3 h-3 bg-yellow-300/50 rounded-full animate-particle-3d-4"
          style={{ transform: 'translateZ(-20px)' }}
        />
      </>
    )}

    {/* 3D Border Effect */}
    <div 
      className="absolute inset-0 border-4 border-[var(--color-primary)]/20 rounded-2xl"
      style={{
        transform: 'translateZ(10px)',
        animation: 'borderGlow3D 5s ease-in-out infinite'
      }}
    />
    
    {/* Inner 3D Border */}
    <div 
      className="absolute inset-4 border-2 border-yellow-300/30 rounded-xl"
      style={{
        transform: 'translateZ(25px)',
        animation: 'innerBorderPulse 3s ease-in-out infinite'
      }}
    />

  </div>
</div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-8">
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">10K+</div>
                <div className="text-white text-xs sm:text-sm">Happy Players</div>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">50+</div>
                <div className="text-white text-xs sm:text-sm">Games</div>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">24/7</div>
                <div className="text-white text-xs sm:text-sm">Fun</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
          @keyframes imageFloat3D {
    0%, 100% { 
      transform: translateZ(30px) rotateY(0deg) rotateX(0deg) scale(1);
      filter: drop-shadow(20px 20px 30px rgba(0,0,0,0.6)) brightness(1) contrast(1.1);
    }
    25% { 
      transform: translateZ(40px) rotateY(5deg) rotateX(2deg) scale(1.02);
      filter: drop-shadow(25px 25px 35px rgba(0,0,0,0.7)) brightness(1.05) contrast(1.15);
    }
    50% { 
      transform: translateZ(30px) rotateY(0deg) rotateX(-2deg) scale(1);
      filter: drop-shadow(15px 15px 25px rgba(0,0,0,0.5)) brightness(0.95) contrast(1.05);
    }
    75% { 
      transform: translateZ(35px) rotateY(-5deg) rotateX(3deg) scale(1.01);
      filter: drop-shadow(30px 30px 40px rgba(0,0,0,0.8)) brightness(1.1) contrast(1.2);
    }
  }

  @keyframes glowPulse3D {
    0%, 100% { 
      opacity: 0.3;
      transform: translateZ(-20px) scale(1.1);
    }
    50% { 
      opacity: 0.6;
      transform: translateZ(-25px) scale(1.15);
    }
  }

  @keyframes reflectionShimmer {
    0%, 100% { 
      opacity: 0.3;
      transform: translateZ(-15px) rotateX(80deg);
    }
    50% { 
      opacity: 0.7;
      transform: translateZ(-20px) rotateX(85deg);
    }
  }

  @keyframes borderGlow3D {
    0%, 100% { 
      border-color: rgba(239, 249, 35, 0.2);
      box-shadow: 0 0 20px rgba(239, 249, 35, 0.1);
    }
    50% { 
      border-color: rgba(239, 249, 35, 0.5);
      box-shadow: 0 0 40px rgba(239, 249, 35, 0.3);
    }
  }

  @keyframes innerBorderPulse {
    0%, 100% { 
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateZ(25px) scale(1);
    }
    50% { 
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateZ(30px) scale(1.05);
    }
  }

  @keyframes particle-3d-1 {
    0%, 100% { 
      transform: translateZ(50px) translate(0, 0) scale(1);
      opacity: 0.8;
    }
    50% { 
      transform: translateZ(60px) translate(10px, -10px) scale(1.2);
      opacity: 1;
    }
  }

  @keyframes particle-3d-2 {
    0%, 100% { 
      transform: translateZ(40px) translate(0, 0) scale(1);
      opacity: 0.6;
    }
    50% { 
      transform: translateZ(30px) translate(-8px, 8px) scale(1.1);
      opacity: 0.9;
    }
  }

  @keyframes particle-3d-3 {
    0%, 100% { 
      transform: translateZ(10px) rotate(45deg) scale(1);
    }
    33% { 
      transform: translateZ(20px) rotate(90deg) scale(1.1);
    }
    66% { 
      transform: translateZ(5px) rotate(0deg) scale(0.9);
    }
  }

  @keyframes particle-3d-4 {
    0%, 100% { 
      transform: translateZ(-20px) translate(0, 0) scale(1);
      opacity: 0.4;
    }
    50% { 
      transform: translateZ(-30px) translate(5px, -5px) scale(1.3);
      opacity: 0.7;
    }
  }

  .animate-particle-3d-1 {
    animation: particle-3d-1 4s ease-in-out infinite;
  }

  .animate-particle-3d-2 {
    animation: particle-3d-2 5s ease-in-out infinite;
  }

  .animate-particle-3d-3 {
    animation: particle-3d-3 6s ease-in-out infinite;
  }

  .animate-particle-3d-4 {
    animation: particle-3d-4 7s ease-in-out infinite;
  }
      `}</style>
    </section>
  );
}