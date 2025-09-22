'use client';

import { useState } from "react";
import { FaGamepad, FaBowlingBall, FaVrCardboard , FaTrophy, FaUsers, FaStar } from "react-icons/fa";

const GamingCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Games', icon: FaGamepad, count: 56 },
    { id: 'arcade', name: 'Arcade Games', icon: FaGamepad, count: 25 },
    { id: 'bowling', name: 'Bowling', icon: FaBowlingBall, count: 8 },
    { id: 'vr', name: 'VR Experiences', icon: FaVrCardboard, count: 12 },
    { id: 'tournament', name: 'Tournaments', icon: FaTrophy, count: 6 },
    { id: 'multiplayer', name: 'Multiplayer', icon: FaUsers, count: 18 },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--gaming-bg-2)] to-[var(--gaming-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
            Game Categories
          </h2>
          <p className="text-lg text-[var(--gaming-text-2)] max-w-2xl mx-auto">
            Discover endless entertainment across our diverse gaming categories
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
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-gradient-to-b from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] border-[var(--gaming-text-1)] shadow-lg'
                    : 'bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] border-[var(--gaming-border-2)] hover:border-[var(--gaming-text-1)]'
                }`}
              >
                <IconComponent className="text-2xl mb-2" />
                <span className="text-sm font-medium text-center mb-1">{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isActive 
                    ? 'bg-[var(--gaming-bg-1)] text-[var(--gaming-text-1)]' 
                    : 'bg-[var(--gaming-border-2)] text-[var(--gaming-text-2)]'
                }`}>
                  {category.count} games
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamingCategories;