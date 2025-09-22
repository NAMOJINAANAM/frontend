'use client';

import Button from "@/components/ui/button";
import { FaUtensils, FaPizzaSlice, FaIceCream, FaHamburger, FaCoffee, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const FoodZone = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % foodCarouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const foodCarouselItems = [
    {
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gourmet Burgers",
      description: "20% OFF on all burgers this weekend!",
      discount: "20% OFF"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Wood-Fired Pizza",
      description: "Buy 1 Get 1 Free on large pizzas",
      discount: "BOGO"
    },
    {
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fresh Pasta",
      description: "Free garlic bread with any pasta order",
      discount: "FREE"
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Signature Pizza",
      description: "Family meal deal - Save 25%",
      discount: "25% OFF"
    },
    {
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dessert Platter",
      description: "Complimentary dessert with main course",
      discount: "COMPLIMENTARY"
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % foodCarouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + foodCarouselItems.length) % foodCarouselItems.length);
  };
type FloatingIconProps = {
  icon: any; // this ensures it’s a valid react-icons component
  style?: any; // inline styles
};
  // Floating Food Icons component
  const FloatingIcon:React.FC<FloatingIconProps> = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--food-bg-1)]/20 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="food" className="py-2 pt-10 relative overflow-hidden bg-white">
      
      {/* Floating Food Icons */}
      <FloatingIcon icon={FaPizzaSlice} style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
      <FloatingIcon icon={FaIceCream} style={{ top: '20%', right: '5%', animationDelay: '2s' }} />
      <FloatingIcon icon={FaCoffee} style={{ bottom: '15%', left: '8%', animationDelay: '3s' }} />
      <FloatingIcon icon={FaHamburger} style={{ bottom: '25%', right: '10%', animationDelay: '1.5s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--food-bg-1)]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-[var(--food-bg-2)]/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--food-bg-1)] to-transparent"></div>
            
            <div className="relative inline-block mb-4">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 relative">
                {/* Main text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--food-bg-1)] to-[var(--food-bg-2)]">
                  Food Zone
                </span>
                
                {/* Neon effect overlay */}
                {/* <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-[var(--food-bg-1)] to-[var(--food-bg-2)] opacity-70 blur-sm">
                  Food Zone
                </span> */}
              </h2>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--food-bg-1)] to-[var(--food-bg-2)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>

            <p className="text-md md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--food-bg-1)]/20 rounded-full animate-ping-slow"></span>
              Savor every moment with our delicious menu
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--food-bg-2)]/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></span>
            </p>

            {/* Animated food icons */}
            <div className="flex justify-center mt-4 space-x-4">
              <div className="w-8 h-8 bg-[var(--food-bg-1)]/20 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-[var(--food-bg-1)] text-lg">🍔</span>
              </div>
              <div className="w-8 h-8 bg-[var(--food-bg-2)]/20 rounded-full flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.2s'}}>
                <span className="text-[var(--food-bg-1)] text-lg">🍕</span>
              </div>
              <div className="w-8 h-8 bg-[var(--food-bg-1)]/20 rounded-full flex items-center justify-center animate-bounce-slow" style={{animationDelay: '0.4s'}}>
                <span className="text-[var(--food-bg-1)] text-lg">🍦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Food Carousel with Title and Description */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 group border border-gray-200 shadow-lg">
          {foodCarouselItems.map((item, index) => (
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
                <div className="bg-[var(--food-bg-1)]/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-3 border border-white/30">
                  <span className="font-bold text-lg">{item.discount}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">{item.title}</h3>
                <p className="text-lg opacity-90 drop-shadow-md">{item.description}</p>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[var(--food-bg-1)] p-3 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-200 shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[var(--food-bg-1)] p-3 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-200 shadow-lg"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {foodCarouselItems.map((_, index) => (
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

        {/* Featured Dishes from Different Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--food-bg-1)] mb-2">
              Featured Dishes
            </h3>
            <p className="text-gray-600">
              Taste our most popular creations from each category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-[0_0_25px_var(--food-bg-1)]/30 transition-all duration-500 hover:-translate-y-2 relative"
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--food-bg-1)]/0 via-[var(--food-bg-1)]/5 to-[var(--food-bg-1)]/0 animate-pulse-glow rounded-3xl"></div>
                
                {/* Dish Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--food-bg-1)] text-white px-2 py-1 rounded text-xs font-bold border border-white/30">
                    {dish.category}
                  </div>
                  {dish.originalPrice && (
                    <div className="absolute top-3 right-3 bg-white text-[var(--food-bg-1)] px-2 py-1 rounded text-xs font-bold border border-gray-200">
                      SAVE ${parseInt(dish.originalPrice.replace('$', '')) - parseInt(dish.price.replace('$', ''))}
                    </div>
                  )}
                </div>

                {/* Dish Details */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${i < Math.floor(dish.rating) ? 'text-[var(--food-bg-1)]' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      {dish.rating}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {dish.name}
                  </h4>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--food-bg-1)] font-bold text-lg">
                        {dish.price}
                      </span>
                      {dish.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {dish.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-[var(--food-bg-1)] text-white p-2 rounded-lg hover:bg-[var(--food-bg-2)] transition-colors border border-[var(--food-bg-1)]/30">
                      <FaUtensils className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--food-bg-1)] to-[var(--food-bg-2)] text-white hover:text-[var(--food-bg-1)] hover:border-2 hover:border-[var(--food-bg-1)] hover:shadow-2xl hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group animate-pulse hover:animate-none hover:shadow-[0_0_25px_var(--food-bg-1)]/40"
            href="/food"
          >
            <FaUtensils className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            View Full Menu
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
          background-image: linear-gradient(to right, var(--food-bg-1) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--food-bg-1) 1px, transparent 1px);
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

export default FoodZone;