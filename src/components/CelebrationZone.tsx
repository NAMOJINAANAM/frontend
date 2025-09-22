'use client';

import Button from "@/components/ui/button";
import { FaBirthdayCake, FaGift, FaGlassCheers, FaCalendarAlt, FaUsers, FaUtensils, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const CelebrationZone = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % celebrationCarouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
type FloatingIconProps = {
  icon: any; // this ensures it’s a valid react-icons component
  style?: any; // inline styles
};
  const celebrationCarouselItems = [
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Birthday Parties",
      description: "Fun-filled celebrations for all ages with themed decorations",
      type: "Kids & Families"
    },
    {
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Events",
      description: "Team-building activities and professional gatherings",
      type: "Business"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Anniversaries",
      description: "Celebrate milestones in style with personalized packages",
      type: "Special Occasions"
    },
    {
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Graduation Parties",
      description: "Honor achievements with memorable celebrations",
      type: "Milestones"
    }
  ];

  const celebrationPackages = [
    {
      icon: FaBirthdayCake,
      title: "Custom Themes",
      description: "Transform our space with your unique vision and style",
      features: ["Decorations", "Personalized Setup", "Theme Coordination"]
    },
    {
      icon: FaUsers,
      title: "Game Packages",
      description: "Entertainment options for all ages and group sizes",
      features: ["Arcade Credits", "VR Experiences", "Tournaments"]
    },
    {
      icon: FaUtensils,
      title: "Catering Options",
      description: "Delicious food and beverage packages for your event",
      features: ["Buffet Style", "Plated Meals", "Custom Menus"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % celebrationCarouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + celebrationCarouselItems.length) % celebrationCarouselItems.length);
  };

  // Floating Celebration Icons component
  const FloatingIcon:React.FC<FloatingIconProps> = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--celebration-bg-1)]/20 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="celebrations" className="py-2 pt-10 relative overflow-hidden bg-white">
      
      {/* Floating Celebration Icons */}
      <FloatingIcon icon={FaGift} style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
      <FloatingIcon icon={FaGlassCheers} style={{ top: '20%', right: '5%', animationDelay: '2s' }} />
      <FloatingIcon icon={FaCalendarAlt} style={{ bottom: '15%', left: '8%', animationDelay: '3s' }} />
      <FloatingIcon icon={FaBirthdayCake} style={{ bottom: '25%', right: '10%', animationDelay: '1.5s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--celebration-bg-1)]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-[var(--celebration-bg-2)]/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--celebration-bg-1)] to-transparent"></div>
            
            <div className="relative inline-block mb-4 group">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 relative">
                {/* Main text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)]">
                  Celebration Zone
                </span>
                
                {/* Sparkle effect overlay */}
                {/* <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] opacity-70 blur-sm">
                  Celebration Zone
                </span> */}
                
                {/* Floating sparkles */}
                <span className="absolute -top-2 -left-4 text-[var(--celebration-bg-1)] text-2xl animate-float">✨</span>
                <span className="absolute -top-4 -right-4 text-[var(--celebration-bg-2)] text-2xl animate-float" style={{animationDelay: '1s'}}>✨</span>
                <span className="absolute -bottom-2 left-6 text-[var(--celebration-bg-1)] text-xl animate-float" style={{animationDelay: '2s'}}>✨</span>
              </h2>
              
              {/* Animated underline */}
              {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div> */}
            </div>

            <p className="text-md md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative font-light">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--celebration-bg-1)]/20 rounded-full animate-ping-slow"></span>
              Make every occasion unforgettable
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--celebration-bg-2)]/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></span>
            </p>

            {/* Animated celebration icons */}
            <div className="flex justify-center mt-4 space-x-5">
              <div className="w-10 h-10 bg-[var(--celebration-bg-1)]/20 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-[var(--celebration-bg-1)] text-xl">🎂</span>
              </div>
              <div className="w-10 h-10 bg-[var(--celebration-bg-2)]/20 rounded-full flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.3s'}}>
                <span className="text-[var(--celebration-bg-1)] text-xl">🎉</span>
              </div>
              <div className="w-10 h-10 bg-[var(--celebration-bg-1)]/20 rounded-full flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.6s'}}>
                <span className="text-[var(--celebration-bg-1)] text-xl">🎁</span>
              </div>
              <div className="w-10 h-10 bg-[var(--celebration-bg-2)]/20 rounded-full flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.9s'}}>
                <span className="text-[var(--celebration-bg-1)] text-xl">🥳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Celebration Carousel */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 group border border-gray-200 shadow-lg">
          {celebrationCarouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
              
              {/* Text Overlay - Bottom Left */}
              <div className="absolute bottom-8 left-8 max-w-md text-white">
                <div className="bg-[var(--celebration-bg-1)]/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-3 border border-white/30">
                  <span className="font-bold text-lg">{item.type}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">{item.title}</h3>
                <p className="text-lg opacity-90 drop-shadow-md">{item.description}</p>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[var(--celebration-bg-1)] p-3 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-200 shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[var(--celebration-bg-1)] p-3 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-200 shadow-lg"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {celebrationCarouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Celebration Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--celebration-bg-1)] mb-2">
              Our Celebration Offerings
            </h3>
            <p className="text-gray-600">
              Everything you need for a memorable event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {celebrationPackages.map((pkg, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-[0_0_25px_var(--celebration-bg-1)]/30 transition-all duration-500 hover:-translate-y-2 p-6 text-center relative"
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--celebration-bg-1)]/0 via-[var(--celebration-bg-1)]/5 to-[var(--celebration-bg-1)]/0 animate-pulse-glow rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-[var(--celebration-bg-1)]/20 text-[var(--celebration-bg-1)] text-3xl">
                      <pkg.icon />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {pkg.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-[var(--celebration-bg-1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] text-white hover:shadow-lg transition-all duration-300 py-2 rounded-xl font-semibold"
                    href="/celebrations"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] text-white hover:text-[var(--celebration-bg-1)] hover:border-2 hover:border-[var(--celebration-bg-1)] hover:shadow-2xl hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group animate-pulse hover:animate-none hover:shadow-[0_0_25px_var(--celebration-bg-1)]/40"
            href="/celebrations"
          >
            <FaCalendarAlt className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            Plan Your Event
          </Button>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-grid-move { animation: gridMove 20s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-ping-slow { animation: pingSlow 2s cubic-bezier(0,0,0.2,1) infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, var(--celebration-bg-1) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--celebration-bg-1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default CelebrationZone;