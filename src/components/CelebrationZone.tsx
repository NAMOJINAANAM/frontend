'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBirthdayCake, FaGift, FaGlassCheers, FaCalendarAlt, FaUsers, FaUtensils, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const celebrationCarouselItems = [
  {
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Birthday Parties",
    description: "Fun-filled celebrations for all ages with themed decorations and gaming activities",
    type: "Kids & Families"
  },
  {
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Corporate Events",
    description: "Team-building activities and professional gatherings in premium spaces",
    type: "Business"
  },
  {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Anniversaries",
    description: "Celebrate milestones in style with personalized packages and decorations",
    type: "Special Occasions"
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Graduation Parties",
    description: "Honor achievements with memorable celebrations and gaming tournaments",
    type: "Milestones"
  }
];

const celebrationPackages = [
  {
    icon: FaBirthdayCake,
    title: "Custom Themes",
    description: "Transform our space with your unique vision and personalized decorations",
    features: ["Theme Coordination", "Personalized Setup", "Custom Decorations"],
    price: "Starting at $299"
  },
  {
    icon: FaUsers,
    title: "Game Packages",
    description: "Entertainment options for all ages and group sizes with premium access",
    features: ["Arcade Credits", "VR Experiences", "Tournament Setup"],
    price: "Starting at $199"
  },
  {
    icon: FaUtensils,
    title: "Catering Options",
    description: "Delicious food and beverage packages curated for your celebration",
    features: ["Buffet Style", "Plated Meals", "Custom Menus"],
    price: "Starting at $149"
  }
];

export default function CelebrationZone() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % celebrationCarouselItems.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % celebrationCarouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + celebrationCarouselItems.length) % celebrationCarouselItems.length);
  };

  return (
    <section className="relative py-1 sm:py-2 lg:py-3 bg-gradient-to-bl from-black via-gray-900 to-black overflow-hidden">
      
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
            <FaCalendarAlt className="text-[var(--color-primary)] text-sm sm:text-base" />
            <span className="text-[var(--color-primary)] text-sm sm:text-base font-semibold">Celebration Zone</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            MAKE <span className="text-[var(--color-primary)]">MEMORIES</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unforgettable celebrations with gaming excitement and premium amenities
          </p>
        </div> */}

        {/* Main Carousel */}
        {/* <div className="relative h-80 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 group border border-gray-700/50 shadow-2xl">
          {celebrationCarouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              

              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-md text-white">
                <div className="bg-[var(--color-primary)]/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-3 border border-white/30">
                  <span className="font-bold text-sm sm:text-base">{item.type}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg opacity-90 drop-shadow-md max-w-xs sm:max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/70 border border-[var(--color-primary)]/30 text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/70 border border-[var(--color-primary)]/30 text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>


          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
            {celebrationCarouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 border border-white ${
                  index === currentSlide
                    ? 'bg-[var(--color-primary)] w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div> */}

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Celebration Packages
            </h3>
            <p className="text-gray-400 text-lg">
              Everything you need for an unforgettable event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {celebrationPackages.map((pkg, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-purple-500/20 flex items-center justify-center text-2xl sm:text-3xl text-[var(--color-primary)] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <pkg.icon />
                </div>
                

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {pkg.title}
                </h4>
                

                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center text-sm text-gray-300">
                      <FaStar className="w-3 h-3 mr-2 text-[var(--color-primary)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                

                <div className="text-[var(--color-primary)] font-bold text-lg mb-4">
                  {pkg.price}
                </div>
                

                <Link
                  href="/celebrations"
                  className="inline-flex items-center justify-center w-full bg-[var(--color-primary)] text-black px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 border-2 border-black shadow-[0_3px_0_rgba(0,0,0,1)] hover:shadow-[0_5px_0_rgba(0,0,0,1)] active:scale-95"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            href="/celebrations/booking"
            className="inline-flex items-center gap-3 border border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Plan Your Celebration</span>
          </Link>
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
      `}</style>
    </section>
  );
}