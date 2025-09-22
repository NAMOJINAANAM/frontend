'use client';

import Button from "@/components/ui/button";
import { FaUtensils, FaStar, FaClock, FaShippingFast } from "react-icons/fa";

const FoodHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[var(--food-bg-1)] to-[var(--food-bg-2)]">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 text-[var(--food-text-1)]/20 text-6xl">
        <FaUtensils />
      </div>
      <div className="absolute bottom-20 right-12 text-[var(--food-border-1)]/20 text-7xl">
        <FaUtensils />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--food-text-1)] mb-6 neon-text-food">
            Food Zone
          </h1>
          <p className="text-xl md:text-2xl text-[var(--food-text-2)] mb-8 max-w-3xl mx-auto">
            Savor extraordinary flavors with our gourmet menu crafted by expert chefs. 
            From sizzling burgers to wood-fired pizzas, every bite is a celebration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-[var(--food-text-2)]">
              <FaStar className="text-[var(--food-text-1)]" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--food-text-2)]">
              <FaClock className="text-[var(--food-text-1)]" />
              <span>Freshly Prepared</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--food-text-2)]">
              <FaShippingFast className="text-[var(--food-text-1)]" />
              <span>Quick Service</span>
            </div>
          </div>
          
          <Button 
            size="xl"
            className="bg-gradient-to-r from-[var(--food-border-1)] to-[var(--food-text-1)] text-[var(--food-bg-1)] hover:shadow-2xl transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg group hover:scale-105"
            href="#menu"
          >
            <FaUtensils className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            Explore Our Menu
          </Button>
        </div>
      </div>

      <style jsx>{`
        .neon-text-food {
          text-shadow: 0 0 5px var(--food-text-1), 0 0 10px var(--food-text-1), 0 0 15px var(--food-text-1), 0 0 20px var(--food-border-1);
        }
      `}</style>
    </section>
  );
};

export default FoodHero;