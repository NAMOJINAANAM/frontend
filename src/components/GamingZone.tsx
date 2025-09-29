'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaStar, FaUsers, FaGamepad, FaPlay } from 'react-icons/fa';

const games = [
  {
    title: "Arcade Games",
    description: "Classic games, big prizes! Test your skills on air hockey, basketball shootout, and more.",
    image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pricing: "$1-3 per play",
    link: "/gaming/arcade",
  },
  {
    title: "Bowling Alley", 
    description: "Strike up fun for all ages! Glow-in-the-dark lanes with automated scoring.",
    image: "https://content.jdmagicbox.com/v2/comp/hyderabad/m7/040pxx40.xx40.230330221114.k8m7/catalogue/amoeba-bowling-alley-hyderabad-sports-clubs-8gBpFhH22g.jpg",
    pricing: "$20/lane/hour",
    link: "/gaming/bowling",
  },
  {
    title: "VR Games",
    description: "Step into the game! Immersive experiences with cutting-edge VR technology.",
    image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pricing: "$15 per session",
    link: "/gaming/vr",
  },
  {
    title: "Laser Tag",
    description: "Team-based combat with state-of-the-art laser equipment in multi-level arena.",
    image: "https://images.unsplash.com/photo-1574263867128-39eaed201e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pricing: "$12 per person",
    link: "/gaming/laser-tag",
  },
  {
    title: "E-Sports Lounge",
    description: "Professional gaming setup with high-end PCs and consoles for competitive gaming.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pricing: "$10/hour",
    link: "/gaming/esports",
  }
];

export default function GamingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Handle responsive visible cards
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

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
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === games.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? games.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-bl from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `perspective(500px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center">
          
          {/* Left Side - 3D Image Area */}
          <div className="w-full lg:w-2/5 xl:w-2/5 2xl:w-2/5">
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* 3D Image Container */}
              <div 
                className="relative w-full max-w-md mx-auto lg:max-w-none group/3d"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${mousePosition.y * -0.02}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-black/50 transform transition-all duration-700 overflow-hidden">
                  <img 
                    src="https://ex-coders.com/html/pubzi/assets/img/home-1/about/superhero.png" 
                    alt="3D Gaming Experience"
                    className="w-full h-auto object-cover transform transition-transform duration-1000"
                    style={{
                      transform: `translateZ(30px) rotateY(${mousePosition.x * 0.01}deg)`,
                      animation: 'float3D 6s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Card Carousel */}
          <div className="w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5">
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              
              {/* Small Games Carousel */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                  Popular Games
                </h4>
                <div className="relative overflow-hidden">
                  {/* Auto-scrolling container */}
                  <div className="flex space-x-2 sm:space-x-3 md:space-x-4 pb-4">
                    {[
                      ...[
                        {
                          title: "Arcade",
                          image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Classic"
                        },
                        {
                          title: "Bowling",
                          image: "https://content.jdmagicbox.com/v2/comp/hyderabad/m7/040pxx40.xx40.230330221114.k8m7/catalogue/amoeba-bowling-alley-hyderabad-sports-clubs-8gBpFhH22g.jpg",
                          type: "Sports"
                        },
                        {
                          title: "VR Zone",
                          image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Virtual"
                        },
                        {
                          title: "Laser Tag",
                          image: "https://images.unsplash.com/photo-1574263867128-39eaed201e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Action"
                        },
                        {
                          title: "E-Sports",
                          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Competitive"
                        },
                        {
                          title: "Racing",
                          image: "https://images.unsplash.com/photo-158056617613--cc0c9c8bdc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Simulation"
                        },
                        {
                          title: "Shooting",
                          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Arcade"
                        },
                        {
                          title: "Billiards",
                          image: "https://images.unsplash.com/photo-1600857062244-5c0071bae254?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Table"
                        },
                        {
                          title: "Dance",
                          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Rhythm"
                        },
                        {
                          title: "Puzzle",
                          image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Brain"
                        }
                      ],
                      // Duplicate for seamless loop
                      ...[
                        {
                          title: "Arcade",
                          image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Classic"
                        },
                        {
                          title: "Bowling",
                          image: "https://content.jdmagicbox.com/v2/comp/hyderabad/m7/040pxx40.xx40.230330221114.k8m7/catalogue/amoeba-bowling-alley-hyderabad-sports-clubs-8gBpFhH22g.jpg",
                          type: "Sports"
                        },
                        {
                          title: "VR Zone",
                          image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Virtual"
                        },
                        {
                          title: "Laser Tag",
                          image: "https://images.unsplash.com/photo-1574263867128-39eaed201e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Action"
                        },
                        {
                          title: "E-Sports",
                          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Competitive"
                        },
                        {
                          title: "Racing",
                          image: "https://images.unsplash.com/photo-158056617613--cc0c9c8bdc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Simulation"
                        },
                        {
                          title: "Shooting",
                          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Arcade"
                        },
                        {
                          title: "Billiards",
                          image: "https://images.unsplash.com/photo-1600857062244-5c0071bae254?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Table"
                        },
                        {
                          title: "Dance",
                          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Rhythm"
                        },
                        {
                          title: "Puzzle",
                          image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                          type: "Brain"
                        }
                      ]
                    ].map((game, index) => (
                      <div 
                        key={index} 
                        className="flex-shrink-0 w-16 xs:w-18 sm:w-20 md:w-22 lg:w-24 xl:w-26 2xl:w-28 animate-scroll"
                      >
                        <div className="group relative bg-transparent rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
                          <div className="relative w-full aspect-square rounded-md sm:rounded-lg overflow-hidden mb-1 sm:mb-2">
                            <img 
                              src={game.image} 
                              alt={game.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            {/* Game Type Badge */}
                            <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1">
                              <div className="bg-[var(--color-primary)] text-black px-1 py-0.5 rounded text-[6px] xs:text-[7px] sm:text-[8px] font-bold">
                                {game.type}
                              </div>
                            </div>
                          </div>
                          <p className="text-white text-[10px] xs:text-xs sm:text-sm font-bold text-center leading-tight">
                            {game.title}
                          </p>
                          {/* Hover Effect Line */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-4 sm:group-hover:w-6 md:group-hover:w-8"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Gradient Overlays for Smooth Edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Main Carousel Navigation */}
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 truncate">
                    Featured Games
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">
                    Discover our amazing gaming collection
                  </p>
                </div>
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
                  <button
                    onClick={prevSlide}
                    className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    style={{ transform: 'rotate(-30deg)' }}
                  >
                    <FaArrowLeft className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:scale-110" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    style={{ transform: 'rotate(30deg)' }}
                  >
                    <FaArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:scale-110" />
                  </button>
                </div>
              </div>

              {/* Main Carousel Container */}
<div 
  ref={carouselRef}
  className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-transparent backdrop-blur-sm"
>
  <div 
    className="flex transition-transform duration-700 ease-out"
    style={{ 
      transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
      width: `${(games.length / visibleCards) * 100}%`
    }}
  >
    {games.map((game, index) => (
      <div 
        key={index}
        className={`flex-shrink-0 ${
          visibleCards === 1 ? 'w-full' : 
          visibleCards === 2 ? 'w-1/2' : 
          'w-1/3'
        } ${
          // Perfect spacing for each breakpoint
          visibleCards === 1 ? 'px-2 sm:px-3 md:px-4 lg:px-6' :
          visibleCards === 2 ? 'px-1.5 sm:px-2.5 md:px-3 lg:px-4' :
          'px-1 sm:px-2 md:px-2.5 lg:px-3'
        } py-4`} // Added vertical padding for breathing room
      >
        <div className="relative h-full transform transition-all duration-300 hover:scale-[1.02]">
          <GameCard 
            game={game} 
            isActive={index === currentIndex}
            index={index}
            visibleCards={visibleCards}
          />
          
          {/* Adjacent Card Glow Effect */}
          {(index === currentIndex + 1 || index === currentIndex - 1) && (
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent rounded-2xl pointer-events-none" />
          )}
        </div>
      </div>
    ))}
  </div>
  
  {/* Edge Fade Effects */}
  <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
</div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-1.5 sm:space-x-2 md:space-x-3 mt-4 sm:mt-6 md:mt-8">
                {Array.from({ length: games.length - visibleCards + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-500 ${
                      index === currentIndex 
                        ? 'bg-[var(--color-primary)] scale-125 shadow-[0_0_10px_rgba(239,249,35,0.5)]' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    } ${
                      visibleCards === 1 ? 'w-2 h-2 sm:w-3 sm:h-3' :
                      visibleCards === 2 ? 'w-1.5 h-1.5 sm:w-2.5 sm:h-2.5' :
                      'w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3'
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateZ(30px) scale(1) rotateY(0deg);
          }
          50% { 
            transform: translateZ(40px) scale(1.02) rotateY(5deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-20rem * 5));
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Extra small devices */
        @media (max-width: 475px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
}

// Enhanced Game Card Component with responsive improvements
function GameCard({ game, isActive, index, visibleCards }: { 
  game: any; 
  isActive: boolean; 
  index: number;
  visibleCards: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 group cursor-pointer shadow-2xl hover:shadow-3xl border ${
        isActive 
          ? 'border-[var(--color-primary)] scale-105 shadow-[0_0_30px_rgba(239,249,35,0.4)] ring-2 ring-[var(--color-primary)]/30' 
          : 'border-gray-800/80 scale-100 hover:scale-105 hover:border-[var(--color-primary)]/60'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? 'translateY(-8px) rotateY(3deg) scale(1.02)' 
          : 'translateY(0px) rotateY(0deg) scale(1)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animationDelay: `${index * 100}ms`,
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(23,23,23,0.95) 0%, rgba(0,0,0,0.98) 50%, rgba(23,23,23,0.95) 100%)'
          : 'linear-gradient(135deg, rgba(23,23,23,0.9) 0%, rgba(0,0,0,0.95) 50%, rgba(23,23,23,0.9) 100%)'
      }}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-transparent to-[var(--color-primary)]/5 transition-all duration-1000 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          }`}
        />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(239,249,35,0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(239,249,35,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            transform: isHovered ? 'translateX(-10px) translateY(-10px)' : 'translateX(0) translateY(0)',
            transition: 'transform 0.8s ease-out'
          }}
        />
      </div>

      {/* Game Image Container with Modern Overlay */}
      <div className={`relative ${
        visibleCards === 1 ? 'h-44 sm:h-52 md:h-60 lg:h-72' :
        visibleCards === 2 ? 'h-36 sm:h-40 md:h-44 lg:h-52' :
        'h-32 sm:h-36 md:h-40 lg:h-48 xl:h-52'
      } overflow-hidden`}>
        <div className="relative w-full h-full">
          <img 
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            style={{
              filter: isHovered 
                ? 'brightness(1.15) contrast(1.1) saturate(1.2)' 
                : 'brightness(1) contrast(1) saturate(1)',
              transform: isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1) rotate(0deg)'
            }}
          />
          
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          
          {/* Animated Scan Line Effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/10 to-transparent transition-all duration-1000 ${
              isHovered ? 'opacity-100 h-full' : 'opacity-0 h-0'
            }`}
            style={{
              animation: isHovered ? 'scan 2s ease-in-out infinite' : 'none'
            }}
          />
        </div>
        
        {/* Premium Pricing Badge */}
        <div className="absolute top-3 right-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          <div className="relative">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-yellow-400 text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-2xl border-2 border-white/20 transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,249,35,0.6)]">
              <span className="drop-shadow-sm">{game.pricing}</span>
            </div>
            {/* Shine effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-opacity duration-1000 opacity-0 group-hover:opacity-100" />
          </div>
        </div>

        {/* Game Title with Modern Typography */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-2xl leading-tight mb-1">
                {game.title}
              </h4>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-[var(--color-primary)] text-xs" />
                  <span className="text-white/80 text-xs font-medium">4.8</span>
                </div>
                <div className="w-1 h-1 bg-white/40 rounded-full" />
                <span className="text-white/60 text-xs">Action</span>
              </div>
            </div>
            
            {/* Play Button */}
            <button className="group/play flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-primary)] text-black rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(239,249,35,0.8)] ml-3">
              <FaPlay className="w-4 h-4 transform group-hover/play:scale-110 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Hover Indicator - Modern Design */}
        <div className={`absolute top-3 left-3 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-primary)]/10 rounded-full flex items-center justify-center border border-[var(--color-primary)]/40 backdrop-blur-sm transition-all duration-500 ${
          isHovered ? 'scale-110 opacity-100 rotate-180' : 'scale-100 opacity-70 rotate-0'
        }`}>
          <FaArrowRight className="text-[var(--color-primary)] text-[10px] sm:text-[12px] transform transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Enhanced Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md transition-all duration-500 flex flex-col p-4 sm:p-6 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="flex-1 flex flex-col justify-center">
          {/* Header with Icon */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center shadow-lg">
              <FaGamepad className="text-black text-sm" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] leading-tight">
                {game.title}
              </h4>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
            {game.description}
          </p>
        </div>
        
        {/* Enhanced CTA Button */}
        <Link
          href={game.link}
          className="group/btn relative overflow-hidden bg-[var(--color-primary)] px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(239,249,35,0.6)] border-2 border-white/20 active:scale-95 transform hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Explore Game</span>
            <FaArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
          </span>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
        </Link>
      </div>

      {/* Active Status Indicator */}
      {isActive && (
        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[var(--color-primary)] to-yellow-400 rounded-full flex items-center justify-center border-2 border-black shadow-2xl animate-pulse z-20">
          <div className="w-2 h-2 bg-black rounded-full" />
          {/* Pulsing Ring */}
          <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-full animate-ping" />
        </div>
      )}

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-l-2 border-t-2 border-[var(--color-primary)]/50 rounded-tl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]" />
      <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-r-2 border-t-2 border-[var(--color-primary)]/50 rounded-tr-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-l-2 border-b-2 border-[var(--color-primary)]/50 rounded-bl-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-r-2 border-b-2 border-[var(--color-primary)]/50 rounded-br-2xl transition-all duration-500 group-hover:border-[var(--color-primary)]" />

      {/* Floating Particles Effect */}
      <div className={`absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full animate-float"
            style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Add these global styles for the new animations
<style jsx>{`
  @keyframes scan {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`}</style>