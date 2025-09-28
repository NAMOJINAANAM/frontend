'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaStar, FaUsers, FaClock, FaGamepad } from 'react-icons/fa';

const games = [
  {
    title: "Arcade Games",
    description: "Classic games, big prizes! Test your skills on air hockey, basketball shootout, and more.",
    image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // features: ["50+ Classic Games", "Ticket Prizes", "Ages 6+"],
    pricing: "$1-3 per play",
    link: "/gaming/arcade",
  },
  {
    title: "Bowling Alley", 
    description: "Strike up fun for all ages! Glow-in-the-dark lanes with automated scoring.",
    image: "https://content.jdmagicbox.com/v2/comp/hyderabad/m7/040pxx40.xx40.230330221114.k8m7/catalogue/amoeba-bowling-alley-hyderabad-sports-clubs-8gBpFhH22g.jpg",
    // features: ["8 Modern Lanes", "Group Play", "Kids Bumpers"],
    pricing: "$20/lane/hour",
    link: "/gaming/bowling",
  },
  {
    title: "VR Games",
    description: "Step into the game! Immersive experiences with cutting-edge VR technology.",
    image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // features: ["Latest VR Tech", "Multiplayer Games", "Ages 12+"],
    pricing: "$15 per session",
    link: "/gaming/vr",
  },
  {
    title: "Laser Tag",
    description: "Team-based combat with state-of-the-art laser equipment in multi-level arena.",
    image: "https://images.unsplash.com/photo-1574263867128-39eaed201e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // features: ["Multi-level Arena", "Team Play", "Ages 8+"],
    pricing: "$12 per person",
    link: "/gaming/laser-tag",
  },
  {
    title: "E-Sports Lounge",
    description: "Professional gaming setup with high-end PCs and consoles for competitive gaming.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    // features: ["High-end PCs", "Tournaments", "Ages 13+"],
    pricing: "$10/hour",
    link: "/gaming/esports",
  }
];

export default function GamingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto slide
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === games.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  const visibleCards = 3; // Number of cards visible at once

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-[var(--color-primary)]">GAMING</span> ZONE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate entertainment with our state-of-the-art gaming facilities
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side - Card Carousel (75% width) */}
          <div className="lg:w-3/4">
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-white">Our Games</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 shadow-lg"
                  >
                    <FaArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 shadow-lg"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Carousel Container */}
              <div 
                ref={carouselRef}
                className="relative overflow-hidden rounded-2xl"
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                    width: `${(games.length / visibleCards) * 100}%`
                  }}
                >
                  {games.map((game, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-1/3 px-3" // 3 cards visible
                    >
                      <GameCard game={game} isActive={index === currentIndex} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {games.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[var(--color-primary)] scale-125' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 3D Image Area (25% width) */}
          <div className="lg:w-1/4">
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* 3D Image Container */}
              <div 
                className="relative w-full"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${mousePosition.y * -0.02}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Your 3D Image Goes Here */}
                <div 
                  className="relative rounded-2xl overflow-hidden border-4 border-[var(--color-primary)] shadow-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-black/50"
                  style={{
                    transform: 'translateZ(30px)',
                    animation: 'float3D 6s ease-in-out infinite'
                  }}
                >
                  <div className="w-full h-80 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <FaGamepad className="text-4xl text-[var(--color-primary)] mx-auto mb-3 animate-bounce" />
                      <p className="text-lg font-bold mb-2">3D Gaming</p>
                      <p className="text-gray-400 text-sm">Experience immersive gaming in 3D</p>
                    </div>
                  </div>
                </div>

                {/* 3D Floating Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-black border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                  <FaStar className="text-[var(--color-primary)] text-lg" />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[var(--color-primary)] rounded flex items-center justify-center border-2 border-black shadow-lg animate-pulse">
                  <FaUsers className="text-black text-sm" />
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                  <span className="text-white text-sm">Active Players</span>
                  <span className="text-[var(--color-primary)] font-bold">250+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                  <span className="text-white text-sm">Rating</span>
                  <span className="text-[var(--color-primary)] font-bold">4.9/5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/50 rounded-lg border border-[var(--color-primary)]/20">
                  <span className="text-white text-sm">Open Until</span>
                  <span className="text-[var(--color-primary)] font-bold">12AM</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateZ(30px) scale(1);
          }
          50% { 
            transform: translateZ(40px) scale(1.02);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// Game Card Component
function GameCard({ game, isActive }: { game: any; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-lg rounded-3xl overflow-hidden transition-all duration-700 group cursor-pointer shadow-2xl ${
        isActive 
          ? 'border-4 border-[var(--color-primary)] scale-105 shadow-[0_0_30px_rgba(239,249,35,0.3)]' 
          : 'border-2 border-[var(--color-primary)]/20 scale-100 hover:scale-102'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px) rotateX(5deg)' : 'translateY(0px) rotateX(0deg)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-yellow-300/5 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Animated Border Glow */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--color-primary)]/30 via-transparent to-[var(--color-primary)]/30 opacity-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-100 animate-pulse-glow' : ''
      }`} />

      {/* Game Image Container */}
      <div className="relative h-48 sm:h-56 md:h-52 lg:h-48 xl:h-60 overflow-hidden">
        <img 
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Shine Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
          isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
        }`} />

        {/* Basic Info (Always visible) */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg leading-tight flex-1 pr-2">
              {game.title}
            </h4>
            <div className="bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              {game.pricing}
            </div>
          </div>
          
          {/* Features Preview */}
          {/* <div className="flex flex-wrap gap-1 opacity-80">
            {game.features.slice(0, 2).map((feature: string, index: number) => (
              <span key={index} className="text-white/90 text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                {feature}
              </span>
            ))}
            {game.features.length > 2 && (
              <span className="text-white/70 text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                +{game.features.length - 2} more
              </span>
            )}
          </div> */}
        </div>

        {/* Hover Indicator */}
        <div className={`absolute top-4 right-4 w-8 h-8 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center border border-[var(--color-primary)]/30 transition-all duration-500 ${
          isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
          <FaArrowRight className="text-[var(--color-primary)] text-xs" />
        </div>
      </div>

      {/* Hover Overlay with Detailed Info */}
      <div className={`absolute inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-md transition-all duration-500 flex flex-col p-5 sm:p-6 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Close Icon */}
        <div className="absolute top-4 right-4 w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="text-sm sm:text-2xl font-bold text-[var(--color-primary)] mb-3 leading-tight">
            {game.title}
          </h4>
          
          <p className="text-gray-200 text-xs sm:text-base mb-4 leading-relaxed line-clamp-3">
            {game.description}
          </p>
          
          {/* Features with Icons */}
          {/* <div className="space-y-2 mb-6">
            {game.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-3 group/feature">
                <div className="w-6 h-6 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center border border-[var(--color-primary)]/30 transition-all duration-300 group-hover/feature:bg-[var(--color-primary)]/30">
                  <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                </div>
                <span className="text-gray-200 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div> */}
        </div>
        
        {/* CTA Button */}
        <Link
          href={game.link}
          className="group/btn inline-flex items-center justify-center space-x-2 bg-[var(--color-primary)] text-black px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 border-2 border-black shadow-[0_4px_0_rgba(0,0,0,1)] hover:shadow-[0_6px_0_rgba(0,0,0,1)] active:scale-95 active:shadow-[0_2px_0_rgba(0,0,0,1)]"
        >
          <span>Explore Game</span>
          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--color-primary)] rounded-full flex items-center justify-center border-2 border-black shadow-lg animate-pulse z-10">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      )}

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)]/50 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[var(--color-primary)]/50 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[var(--color-primary)]/50 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)]/50 rounded-br-3xl"></div>
    </div>
  );
}

// Add to your CSS
<style jsx>{`
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .scale-102 {
    transform: scale(1.02);
  }
`}</style>