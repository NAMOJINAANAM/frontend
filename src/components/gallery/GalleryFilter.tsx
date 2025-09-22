'use client';

import { useState } from "react";
import { FaGamepad, FaUtensils, FaGlassCheers, FaImages } from "react-icons/fa";

type GalleryFilterProps = {
  activeFilter: string; 
  setActiveFilter: (filter: string) => void;
};
const GalleryFilter: React.FC<GalleryFilterProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', name: 'All Photos', icon: FaImages },
    { id: 'gaming', name: 'Gaming', icon: FaGamepad },
    { id: 'food', name: 'Food', icon: FaUtensils },
    { id: 'celebrations', name: 'Celebrations', icon: FaGlassCheers },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[var(--gallery-bg-2)] to-[var(--gallery-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gallery-text-1)] mb-4">
            Gallery Categories
          </h2>
          <p className="text-lg text-[var(--gallery-text-2)] max-w-2xl mx-auto">
            Filter through our collection of memories from different zones
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            const isActive = activeFilter === filter.id;
            
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--gallery-border-1)] to-[var(--gallery-text-1)] text-[var(--gallery-bg-1)] border-[var(--gallery-text-1)] shadow-lg'
                    : 'bg-[var(--gallery-bg-1)]/30 text-[var(--gallery-text-2)] border-[var(--gallery-border-2)] hover:border-[var(--gallery-text-1)]'
                }`}
              >
                <IconComponent className="mr-2" />
                <span className="font-medium">{filter.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilter;