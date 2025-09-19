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

  return (
    <section id="food" className="py-10 relative overflow-hidden bg-gradient-to-b from-[var(--color-beige)]/10 to-[var(--color-white)] dark:from-[var(--color-black)] dark:to-[var(--color-black)]">
      
      {/* Floating Food Icons */}
      <div className="absolute top-10 left-5 text-[var(--color-flame-orange)]/20 text-4xl animate-float">
        <FaPizzaSlice />
      </div>
      <div className="absolute top-1/4 right-8 text-[var(--color-gold)]/20 text-5xl animate-float" style={{animationDelay: '2s'}}>
        <FaIceCream />
      </div>
      <div className="absolute bottom-1/3 left-10 text-[var(--color-purple)]/20 text-6xl animate-float" style={{animationDelay: '3s'}}>
        <FaCoffee />
      </div>
      <div className="absolute bottom-20 right-12 text-[var(--color-flame-red)]/20 text-4xl animate-float" style={{animationDelay: '1.5s'}}>
        <FaHamburger />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)] mb-4">
              <span className="text-[var(--color-flame-orange)]">Food</span> Zone
            </h2>
            <p className="text-xl text-[var(--color-black)]/80 dark:text-[var(--color-white)]/80 max-w-2xl mx-auto">
              Savor every moment with our delicious menu
            </p>
          </div>
        </div>

        {/* Food Carousel with Title and Description */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/80 via-[var(--color-black)]/20 to-transparent"></div>
              
              {/* Text Overlay - Bottom Left */}
              <div className="absolute bottom-8 left-8 max-w-md text-[var(--color-white)]">
                <div className="bg-[var(--color-flame-red)]/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-3">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--color-white)]/80 text-[var(--color-black)] p-3 rounded-full hover:bg-[var(--color-white)] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--color-white)]/80 text-[var(--color-black)] p-3 rounded-full hover:bg-[var(--color-white)] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {foodCarouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[var(--color-flame-orange)] w-8'
                    : 'bg-[var(--color-white)]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Dishes from Different Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)] mb-2">
              Featured Dishes
            </h3>
            <p className="text-[var(--color-black)]/80 dark:text-[var(--color-white)]/80">
              Taste our most popular creations from each category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-[var(--color-white)] dark:bg-[var(--color-black)] border-2 border-[var(--color-light-gray)] dark:border-[var(--color-light-gray)] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Dish Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--color-flame-orange)] text-[var(--color-white)] px-2 py-1 rounded text-xs font-bold">
                    {dish.category}
                  </div>
                  {dish.originalPrice && (
                    <div className="absolute top-3 right-3 bg-[var(--color-purple)] text-[var(--color-white)] px-2 py-1 rounded text-xs font-bold">
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
                        className={`text-sm ${i < Math.floor(dish.rating) ? 'text-[var(--color-gold)]' : 'text-[var(--color-light-gray)]'}`}
                      />
                    ))}
                    <span className="text-sm text-[var(--color-black)]/60 dark:text-[var(--color-white)]/60 ml-1">
                      {dish.rating}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[var(--color-black)] dark:text-[var(--color-white)] mb-2">
                    {dish.name}
                  </h4>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-flame-orange)] font-bold text-lg">
                        {dish.price}
                      </span>
                      {dish.originalPrice && (
                        <span className="text-[var(--color-black)]/60 dark:text-[var(--color-white)]/60 line-through text-sm">
                          {dish.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-[var(--color-purple)] text-[var(--color-white)] p-2 rounded-lg hover:bg-[var(--color-purple)]/90 transition-colors">
                      <FaUtensils className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--color-flame-orange)] to-[var(--color-flame-red)] text-[var(--color-white)] hover:shadow-2xl hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group"
            href="/food"
          >
            <FaUtensils className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodZone;