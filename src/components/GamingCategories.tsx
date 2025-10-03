'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaGamepad , FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const gameCategories = [
  {
    id: 1,
    name: "Arcade Classics",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/arcade",
    gamesCount: "25 Games"
  },
  {
    id: 2,
    name: "VR Adventures",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/vr", 
    gamesCount: "18 Games"
  },
  {
    id: 3,
    name: "Racing & Sports",
    image: "https://images.unsplash.com/photo-158056617613-cc0c9c8bdc6?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/racing",
    gamesCount: "32 Games"
  },
  {
    id: 4,
    name: "Strategy & Puzzle",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/strategy",
    gamesCount: "21 Games"
  },
  {
    id: 5,
    name: "Battle Arena",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/multiplayer",
    gamesCount: "45 Games"
  },
  {
    id: 6,
    name: "Family Games",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/family",
    gamesCount: "28 Games"
  },
  {
    id: 7,
    name: "Retro Zone",
    image: "https://images.unsplash.com/photo-1585849834901-89f573da6c9f?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
    link: "/gaming/retro",
    gamesCount: "15 Games"
  },
  // {
  //   id: 8,
  //   name: "Pro Gaming",
  //   image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=center",
  //   link: "/gaming/esports",
  //   gamesCount: "12 Games"
  // }
];

const featuredGames = [
  {
    id: 1,
    title: "Cyber Racing 2077",
    description: "Experience the future of racing with hyper-realistic graphics and immersive VR support",
    media: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&w=1200&h=675&fit=crop&crop=center",
    type: "image"
  },
  {
    id: 2,
    title: "Neon Arcade World",
    description: "Step into a retro-futuristic arcade paradise with 50+ classic games",
    media: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&w=1200&h=675&fit=crop&crop=center",
    type: "image"
  },
  {
    id: 3,
    title: "Virtual Reality Arena",
    description: "Immerse yourself in mind-bending VR adventures with full-body tracking",
    media: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&w=1200&h=675&fit=crop&crop=center",
    type: "image"
  },
  {
    id: 4,
    title: "Laser Tag Championship",
    description: "Team-based laser combat in our multi-level arena with professional equipment",
    media: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&w=1200&h=675&fit=crop&crop=center",
    type: "image"
  }
];

export default function GamingShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeGame, setActiveGame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle responsive visible categories
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setVisibleCategories(1);
      } else if (width < 640) {
        setVisibleCategories(2);
      } else if (width < 1024) {
        setVisibleCategories(3);
      } else {
        setVisibleCategories(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextGame();
    }
    if (isRightSwipe) {
      prevGame();
    }
  };

  // Infinite scroll logic for categories
  const nextCategory = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCategory(prev => {
      const nextIndex = prev + 1;
      if (nextIndex >= gameCategories.length) {
        setTimeout(() => {
          setActiveCategory(0);
          setIsTransitioning(false);
        }, 700);
        return nextIndex;
      }
      setIsTransitioning(false);
      return nextIndex;
    });
  };

  const prevCategory = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCategory(prev => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        setTimeout(() => {
          setActiveCategory(gameCategories.length - 1);
          setIsTransitioning(false);
        }, 700);
        return prevIndex;
      }
      setIsTransitioning(false);
      return prevIndex;
    });
  };

  const nextGame = () => {
    setActiveGame((prev) => (prev === featuredGames.length - 1 ? 0 : prev + 1));
  };

  const prevGame = () => {
    setActiveGame((prev) => (prev === 0 ? featuredGames.length - 1 : prev - 1));
  };

  // Auto-rotate category carousel
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      nextCategory();
    }, 4000);
    return () => clearInterval(categoryInterval);
  }, []);

  // Auto-rotate featured games
  useEffect(() => {
    const gameInterval = setInterval(() => {
      nextGame();
    }, 5000);
    return () => clearInterval(gameInterval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Top Section - Auto-moving Category Carousel */}
      <div className="relative pt-4 sm:pt-8">
  <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

    {/* Normal Categories Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
  {gameCategories.map((category, index) => (
    <div key={category.id} className="aspect-square min-w-0">
      <CategoryCard 
        category={category} 
        isActive={index === activeCategory}
      />
    </div>
  ))}
  
  {/* View All Card */}
  <div className="aspect-square min-w-0">
    <Link href="/gaming" title="/gaming">
      <div className={`
        group relative bg-gradient-to-br from-gray-800/60 to-gray-900/90 backdrop-blur-xl 
        rounded-2xl p-3 border-2 border-gray-700/40 
        transition-all duration-500 cursor-pointer w-full h-full flex flex-col items-center justify-center
        hover:scale-105 hover:shadow-2xl hover:border-[var(--color-primary)]/60
        text-center
      `}>
        
        {/* Animated Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`
          }}
        />
        
        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all duration-500" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full space-y-3">
          {/* Image Container */}
          <div className={`
            relative w-full h-full rounded-2xl
            transform transition-all duration-500
            border-2 border-white/20 shadow-lg
          `}>
            {/* View All Image */}
            <img
              src="/images/foodimage.png"
              alt="View All Categories"
              title="View All Categories"
              className="w-full h-full object-cover transform scale-136 bg-transparent  transition-transform duration-700"
            />
            
          
          </div>
          
          {/* Text Content */}
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight drop-shadow-sm">
              View All
            </h3>
            <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Explore All Games
            </p>
          </div>
        </div>

        {/* Enhanced Hover Effect Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent transition-all duration-500 group-hover:w-4/5" />

        {/* Floating Particles on Hover */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-float"
              style={{
                left: `${25 + i * 50}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Plus Icon Indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-primary)] rounded-full flex items-center justify-center border-2 border-black shadow-lg z-20">
          <div className="w-1 h-1 bg-black rounded-full" />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[var(--color-primary)]/30 rounded-tl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[var(--color-primary)]/30 rounded-tr-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        
        {/* Bottom Corner Accents */}
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[var(--color-primary)]/30 rounded-bl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[var(--color-primary)]/30 rounded-br-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
      </div>
    </Link>
  </div>
</div>

  </div>
</div>

      {/* Bottom Section - Responsive Media Carousel */}
      <div 
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-transparent flex items-center justify-center mt-4 sm:mt-6 lg:mt-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Responsive Media Container */}
        <div className="relative m-2 w-full h-full max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-none flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
          {/* Enhanced Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-purple-500/5 z-0" />
          
          {/* Media Slides */}
          {featuredGames.map((game, index) => (
            <div
              key={game.id}
              className={`absolute w-full h-full transition-all duration-1000 ease-out ${
                index === activeGame 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              {/* Enhanced Image Container */}
              <div className="relative w-full h-full">
                {game.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={game.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={game.media}
                    alt={game.title}
                    title={game.title}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl sm:rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 rounded-xl sm:rounded-2xl" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[inset_0_0_50px_rgba(239,249,35,0.1)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1 z-0">
          <div 
            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-yellow-400 transition-all duration-5000 ease-out"
            style={{ 
              width: `${((activeGame + 1) / featuredGames.length) * 100}%` 
            }}
          />
        </div>
              </div>
            </div>
          ))}
          
          {/* Border Glow */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-all duration-500" />
        </div>

        {/* Enhanced Text Content - Responsive */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto z-10 max-w-2xl">
          <div className={`transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Category Badge */}
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-yellow-400 text-black px-4 py-1 sm:px-6 sm:py-2 rounded-full inline-block mb-2 sm:mb-4 font-bold text-xs sm:text-sm shadow-lg">
              Featured Game
            </div>
            
            {/* Game Title */}
            <h1 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-4 text-white leading-tight drop-shadow-2xl">
              {featuredGames[activeGame].title}
            </h1>
          </div>
        </div>
        {/* Enhanced Carousel Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3">
          {featuredGames.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveGame(index)}
              className={`transition-all duration-500 border-2 ${
                index === activeGame 
                  ? 'bg-[var(--color-primary)] border-[var(--color-primary)] shadow-[0_0_15px_rgba(239,249,35,0.6)]' 
                  : 'bg-transparent border-white/50 hover:border-white hover:bg-white/30'
              } ${
                index === activeGame 
                  ? 'w-6 sm:w-8 h-2 sm:h-3 rounded-lg' 
                  : 'w-2 h-2 sm:w-3 sm:h-3 rounded-full'
              }`}
              aria-label={`Go to game ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        
      </div>
    </section>
  );
}

// Updated Category Card Component with better mobile styling
function CategoryCard({ category, isActive }: { category: any; isActive: boolean }) {
  return (
    <Link href={category.link} title={category.link}>
      <div className={`
        group relative bg-gradient-to-br from-gray-800/60 to-gray-900/90 backdrop-blur-xl 
        rounded-2xl p-3 border-2 border-gray-700/40 
        transition-all duration-500 cursor-pointer w-full h-full min-h-[140px] flex flex-col items-center justify-center
        hover:scale-105 hover:shadow-2xl hover:border-[var(--color-primary)]/60
        text-center
        ${isActive ? 'border-[var(--color-primary)] scale-105 shadow-2xl shadow-[var(--color-primary)]/30' : ''}
      `}>
        
        {/* Animated Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`
          }}
        />
        
        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all duration-500" />

        {/* Image Container with Enhanced Design */}
        <div className="relative p-1 z-10 flex flex-col items-center justify-center flex-1 w-full">
          {/* Image Container with Beautiful Effects */}
          <div className={`
            relative w-full h-full rounded-2xl overflow-hidden
            transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
            border-2 border-white/20 shadow-lg group-hover:shadow-xl
          `}>
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.name}
              title={category.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            
            {/* Image Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Border Glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-primary)]/30 rounded-2xl transition-all duration-500" />
          </div>
          
          {/* Category Name with Enhanced Typography */}
          <h3 className="text-sm font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight drop-shadow-sm px-1">
            {category.name}
          </h3>
          
          {/* Optional: Game Count or Description */}
          <p className="hidden xs:block text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {category.gamesCount || 'Explore'}
          </p>
        </div>

        {/* Enhanced Hover Effect Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent transition-all duration-500 group-hover:w-4/5" />

        {/* Floating Particles on Hover */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-float"
              style={{
                left: `${25 + i * 50}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Active State Indicator */}
        {isActive && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-primary)] rounded-full flex items-center justify-center border-2 border-black shadow-lg animate-pulse z-20">
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
        )}

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[var(--color-primary)]/30 rounded-tl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[var(--color-primary)]/30 rounded-tr-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        
        {/* Bottom Corner Accents */}
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[var(--color-primary)]/30 rounded-bl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[var(--color-primary)]/30 rounded-br-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]/60" />
      </div>
    </Link>
  );
}
// Add to your global styles
<style jsx>{`
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) translateX(0px);
      opacity: 1;
    }
    50% { 
      transform: translateY(-8px) translateX(4px);
    }
    75% {
      opacity: 0.7;
    }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`}</style>