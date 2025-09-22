'use client';

import Button from "@/components/ui/button";
import { FaGamepad, FaUtensils, FaGlassCheers, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

interface SlideContent {
  id: number;
  heading: string;
  subheading: string;
  mediaType: 'image' | 'gif';
  mediaLink: string;
  actionButtonName: string;
  actionButtonLink: string;
}

const ZoneCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Carousel data for each zone
  const slides: SlideContent[] = [
    {
      id: 1,
      heading: "Gaming Zone",
      subheading: "Experience the ultimate gaming adventure with state-of-the-art arcades, VR experiences, and competitive tournaments",
      // mediaType: "image",
      // mediaLink: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      mediaType: "gif",
      mediaLink: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3NucDh3enh4cng0bGc2NDA5c2RjM2dla3R0OTZyMmZrM3MyamIyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ywl0HkYJNTe9n63c32/giphy.gif",
      actionButtonName: "Explore Games",
      actionButtonLink: "/gaming"
    },
    {
      id: 2,
      heading: "Food Zone",
      subheading: "Savor delicious gourmet burgers, wood-fired pizzas, and mouth-watering desserts in our vibrant food court",
      // mediaType: "image",
      // mediaLink: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      mediaType: "gif", 
      mediaLink: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTN2c252a251NDJ4bHRtdXJxNXZsdnZ5azN2OW9vZTVjMG9ucmx3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4ayiIWaq2VULC/giphy.gif",
      actionButtonName: "View Menu",
      actionButtonLink: "/food"
    },
    {
      id: 3,
      heading: "Celebration Zone",
      subheading: "Create unforgettable memories with custom parties, corporate events, and special celebrations",
      mediaType: "image",
      mediaLink: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      actionButtonName: "Plan Event",
      actionButtonLink: "/celebrations"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Get zone-specific styling
  const getZoneStyle = (zone: string) => {
    switch(zone.toLowerCase()) {
      case 'gaming zone':
        return {
          bgGradient: 'from-[var(--gaming-bg-1)]/90 to-[var(--gaming-bg-2)]/90',
          textColor: 'text-[var(--gaming-text-1)]',
          buttonStyle: 'bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-[0_0_20px_var(--gaming-text-1)]'
        };
      case 'food zone':
        return {
          bgGradient: 'from-[var(--food-bg-1)]/90 to-[var(--food-bg-2)]/90',
          textColor: 'text-[var(--food-text-1)]',
          buttonStyle: 'bg-gradient-to-r from-[var(--food-border-1)] to-[var(--food-text-1)] text-[var(--food-bg-1)] hover:shadow-[0_0_20px_var(--food-text-1)]'
        };
      case 'celebration zone':
        return {
          bgGradient: 'from-[var(--celebration-bg-1)]/90 to-[var(--celebration-bg-2)]/90',
          textColor: 'text-[var(--celebration-text-1)]',
          buttonStyle: 'bg-gradient-to-r from-[var(--celebration-border-1)] to-[var(--celebration-text-1)] text-[var(--celebration-bg-1)] hover:shadow-[0_0_20px_var(--celebration-text-1)]'
        };
      default:
        return {
          bgGradient: 'from-blue-500/90 to-purple-600/90',
          textColor: 'text-white',
          buttonStyle: 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
        };
    }
  };

  const zoneStyle = getZoneStyle(slides[currentSlide].heading);

  return (
    <div className="relative w-full h-screen max-h-[400px] sm:max-h-[700px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.mediaLink})` }}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${zoneStyle.bgGradient} via-transparent to-transparent`} />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24">
            <div className={`transform transition-all duration-1000 ${
              isTransitioning ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
            }`}>
              <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${zoneStyle.textColor} drop-shadow-md`}>
                {slide.heading}
              </h2>
              <p className="text-xl md:text-2xl text-white max-w-2xl mb-8 drop-shadow-md">
                {slide.subheading}
              </p>
              <Button
                href={slide.actionButtonLink}
                className={`${zoneStyle.buttonStyle} px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105`}
              >
                {slide.heading === "Gaming Zone" && <FaGamepad className="mr-2" />}
                {slide.heading === "Food Zone" && <FaUtensils className="mr-2" />}
                {slide.heading === "Celebration Zone" && <FaGlassCheers className="mr-2" />}
                {slide.actionButtonName}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300 z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300 z-20"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Zone Indicator */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            slides[currentSlide].heading === "Gaming Zone" ? "bg-[var(--gaming-text-1)]" : 
            slides[currentSlide].heading === "Food Zone" ? "bg-[var(--food-text-1)]" : 
            "bg-[var(--celebration-text-1)]"
          }`} />
          <span className="text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full">
            {slides[currentSlide].heading}
          </span>
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl ${
        slides[currentSlide].heading === "Gaming Zone" ? "border-[var(--gaming-border-1)]" : 
        slides[currentSlide].heading === "Food Zone" ? "border-[var(--food-border-1)]" : 
        "border-[var(--celebration-border-1)]"
      } border-4 opacity-70 animate-pulse`} />
    </div>
  );
};

export default ZoneCarousel;