'use client';

import { useState } from "react";
import { FaHamburger, FaPizzaSlice, FaIceCream, FaGlassCheers, FaLeaf,FaUtensils } from "react-icons/fa";

const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Items', icon: FaUtensils },
    { id: 'burgers', name: 'Gourmet Burgers', icon: FaHamburger },
    { id: 'pizza', name: 'Wood-Fired Pizza', icon: FaPizzaSlice },
    { id: 'desserts', name: 'Decadent Desserts', icon: FaIceCream },
    { id: 'drinks', name: 'Refreshments', icon: FaGlassCheers },
    { id: 'healthy', name: 'Healthy Options', icon: FaLeaf },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--food-bg-2)] to-[var(--food-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--food-text-1)] mb-4">
            Our Culinary Categories
          </h2>
          <p className="text-lg text-[var(--food-text-2)] max-w-2xl mx-auto">
            Discover a world of flavors with our carefully curated menu categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-[var(--food-border-1)] to-[var(--food-text-1)] text-[var(--food-bg-1)] shadow-lg'
                    : 'bg-[var(--food-bg-1)]/30 text-[var(--food-text-2)] hover:bg-[var(--food-border-1)]/20 border border-[var(--food-border-2)]'
                }`}
              >
                <IconComponent className="text-2xl mb-2" />
                <span className="text-sm font-medium text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;