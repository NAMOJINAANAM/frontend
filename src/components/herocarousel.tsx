'use client';

import { useState, useEffect, useRef } from 'react';
import Button from "@/components/ui/button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from 'next/image';

interface SlideContent {
  id: number;
  heading: string;
  subheading: string;
  mediaType: 'image' | 'video';
  mediaLink: string;
  actionButtonName: string;
  actionButtonLink: string;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animationKey, setAnimationKey] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slides data - using same media URL for both foreground and background
  const slides: SlideContent[] = [
    {
      id: 1,
      heading: "GameZone",
      subheading: "Ultimate Gaming Experience",
      mediaType: "video",
      mediaLink: "https://www.youtube.com/embed/LNlgYczTqxY?si=Dbj3HRuyCnriVqu8",
      actionButtonName: "Explore Games",
      actionButtonLink: "/gaming"
    },
    {
      id: 2,
      heading: "Food Zone",
      subheading: "Gourmet Delights & Refreshments",
      mediaType: "image",
      mediaLink: "/images/food-zone.png",
      actionButtonName: "View Menu",
      actionButtonLink: "/food"
    },
    {
      id: 3,
      heading: "Celebration Zone",
      subheading: "Unforgettable Events & Parties",
      mediaType: "image",
      mediaLink: "/images/celebration-zone.png",
      actionButtonName: "Plan Event",
      actionButtonLink: "/events"
    }
  ];

  // Auto-advance slides (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isHovered]);

  const nextSlide = () => {
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const handleButtonClick = (link: string) => {
    console.log(`Navigating to: ${link}`);
  };

  const currentSlideData = slides[currentSlide];
  const isEvenSlide = currentSlide % 2 === 0;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-white"
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Media Layer - Only for image slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.mediaType === 'image' ? (
              <Image
                src={slide.mediaLink} // Use same media URL
                alt={`${slide.heading} Background`}
                fill
                className="object-cover scale-110 blur-sm" 
                quality={60}
                priority={index === 0}
              />
            ) : (

              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple)]/30 via-[var(--color-black)]/70 to-[var(--color-flame-red)]/30" />
            )}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-20 top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/30"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/30"
          aria-label="Next slide"
        >
          <HiChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 w-full relative z-10">
        <div className={`flex flex-col lg:flex-row ${isEvenSlide ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center min-h-screen gap-6 sm:gap-8 md:gap-12 lg:gap-16`}>
          
          {/* Foreground Media Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <div key={`media-${animationKey}`} className={`${direction === 'right' ? 'animate-slide-in-from-right' : 'animate-slide-in-from-left'} duration-500 flex items-center justify-center`}>
              {currentSlideData.mediaType === 'image' ? (
                <div className="relative w-full aspect-video max-w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 bg-black/50 backdrop-blur-md border border-white/10">
                  <Image
                    src={currentSlideData.mediaLink}
                    alt={currentSlideData.heading}
                    fill
                    className="object-contain"
                    priority={currentSlide === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-video max-w-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 bg-black/50 backdrop-blur-md border border-white/10">
                  <iframe
                    src={currentSlideData.mediaLink}
                    className="w-full h-full object-cover"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none">
            <div key={`content-${animationKey}`} className={`${direction === 'right' ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right'} duration-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl text-center lg:text-left bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50`}>
              
              <h1 className="text-3xl sm:text-4xl md:text-xl lg:text-2xl xl:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8">
                {currentSlideData.heading}
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-lg lg:text-xl text-[var(--color-gold)] font-semibold mb-6 sm:mb-8 md:mb-10 tracking-wider">
                {currentSlideData.subheading}
              </p>
              
              <p className="text-lg sm:text-xl md:text-md text-white mb-8 sm:mb-10 md:mb-12 leading-relaxed sm:leading-loose font-medium max-w-2xl mx-auto lg:mx-0">
                {currentSlideData.heading === "GameZone" && "Immerse yourself in our state-of-the-art arcade, VR experiences, and competitive gaming tournaments."}
                {currentSlideData.heading === "Food Zone" && "Savor delicious meals, snacks, and beverages crafted to fuel your gaming adventures."}
                {currentSlideData.heading === "Celebration Zone" && "Host birthdays, corporate events, and special celebrations in our premium party spaces."}
              </p>
              
              <Button 
                onClick={() => handleButtonClick(currentSlideData.actionButtonLink)}
                className="bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-flame-red)] text-white hover:from-[var(--color-flame-red)] hover:to-[var(--color-purple)] hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-110 px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-2xl shadow-purple-500/40 border border-white/20"
              >
                {currentSlideData.actionButtonName}
              </Button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-white animate-pulse' 
                : 'bg-white/50 hover:bg-white/70 shadow-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroCarousel;