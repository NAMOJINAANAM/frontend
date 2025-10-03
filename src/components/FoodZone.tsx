'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUtensils, FaPizzaSlice, FaIceCream, FaHamburger, FaCoffee, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const foodCarouselItems = [
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Gourmet Burgers",
    description: "20% OFF on all burgers this weekend!",
    discount: "20% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Wood-Fired Pizza",
    description: "Buy 1 Get 1 Free on large pizzas",
    discount: "BOGO"
  },
  {
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Fresh Pasta",
    description: "Free garlic bread with any pasta order",
    discount: "FREE"
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    title: "Signature Pizza",
    description: "Family meal deal - Save 25%",
    discount: "25% OFF"
  }
];

const featuredDishes = [
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    name: "Double Cheeseburger",
    category: "Mains",
    price: "$16",
    originalPrice: "$20",
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    name: "Pepperoni Pizza",
    category: "Mains",
    price: "$18",
    originalPrice: "$22",
    rating: 4.9
  },
  {
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    name: "Chocolate Sundae",
    category: "Desserts",
    price: "$9",
    originalPrice: "$12",
    rating: 4.7
  },
  {
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    name: "Crispy Wings",
    category: "Snacks",
    price: "$12",
    originalPrice: "$15",
    rating: 4.6
  }
];

export default function FoodZone() {
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
      setCurrentSlide((prev) => (prev + 1) % foodCarouselItems.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % foodCarouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + foodCarouselItems.length) % foodCarouselItems.length);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      
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
        <div className={`text-center mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
            <FaUtensils className="text-[var(--color-primary)] text-sm sm:text-base" />
            <span className="text-[var(--color-primary)] text-sm sm:text-base font-semibold">Food Zone</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            FUEL YOUR <span className="text-[var(--color-primary)]">FUN</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Delicious meals and snacks to keep you energized while gaming
          </p>
        </div>

        {/* Main Carousel */}
          
        <div className="relative h-80 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 group border border-gray-700/50 shadow-2xl">
          {foodCarouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Text Overlay - Bottom Left */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-md text-white">
                
                <div className="bg-[var(--color-primary)]/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-3 border border-white/30">
                  <span className="font-bold text-sm sm:text-base">{item.discount}</span>
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
          
          {/* Carousel Controls */}
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

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 rounded-full px-4 py-2">
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
            {foodCarouselItems.map((_, index) => (
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
        </div>

        {/* Featured Dishes */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Dishes
            </h3>
            <p className="text-gray-400 text-lg">
              Taste our most popular creations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
  {featuredDishes.map((dish, index) => (
    <div
      key={index}
      className="group h-fit cursor-pointer relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20"
    >
      {/* Dynamic Layout based on index */}
      <div className={`flex flex-col ${index % 2 === 1 ? 'flex-col-reverse' : ''}`}>
        
        {/* Dish Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            title={dish.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute ${index % 2 === 1 ? 'bottom-3' : 'top-3'} left-3 bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold border border-white/30`}>
            {dish.category}
          </div>
          {dish.originalPrice && (
            <div className={`absolute ${index % 2 === 1 ? 'bottom-3' : 'top-3'} right-3 bg-black/80 text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-bold border border-[var(--color-primary)]/30 backdrop-blur-sm`}>
              SAVE ${parseInt(dish.originalPrice.replace('$', '')) - parseInt(dish.price.replace('$', ''))}
            </div>
          )}
        </div>

        {/* Dish Details */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < Math.floor(dish.rating) ? 'text-[var(--color-primary)]' : 'text-gray-500'}`}
              />
            ))}
            <span className="text-sm text-gray-300 ml-1">
              {dish.rating}
            </span>
          </div>

          <h4 className="text-md sm:text-lg font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {dish.name}
          </h4>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-primary)] font-bold text-md sm:text-lg">
                {dish.price}
              </span>
              {dish.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  {dish.originalPrice}
                </span>
              )}
            </div>
            <button className="bg-[var(--color-primary)] text-black p-2 sm:p-3 rounded-xl hover:scale-110 transition-all duration-300 border-2 border-black shadow-[0_3px_0_rgba(0,0,0,1)] hover:shadow-[0_5px_0_rgba(0,0,0,1)] active:scale-95">
              <FaUtensils className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            href="/food/menu"
            title="/food/menu"
            className="inline-flex items-center gap-3 border border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaUtensils className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>View Full Menu</span>
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