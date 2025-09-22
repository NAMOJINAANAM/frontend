'use client';

import Button from "@/components/ui/button";
import { FaImages, FaCamera, FaHeart, FaShare } from "react-icons/fa";

const GalleryHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[var(--gallery-bg-1)] to-[var(--gallery-bg-2)]">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 text-[var(--gallery-text-1)]/20 text-6xl">
        <FaImages />
      </div>
      <div className="absolute bottom-20 right-12 text-[var(--gallery-border-1)]/20 text-7xl">
        <FaCamera />
      </div>
      <div className="absolute top-1/4 right-8 text-[var(--gallery-text-2)]/20 text-5xl">
        <FaHeart />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--gallery-text-1)] mb-6 neon-text-gallery">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gallery-text-2)] mb-8 max-w-3xl mx-auto">
            Explore moments of joy, excitement, and celebration captured at our venue. 
            From gaming triumphs to delicious meals and special events.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-[var(--gallery-text-2)] bg-[var(--gallery-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gallery-text-1)] rounded-full animate-pulse"></div>
              <span>500+ Photos</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gallery-text-2)] bg-[var(--gallery-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gallery-text-1)] rounded-full animate-pulse"></div>
              <span>3 Categories</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gallery-text-2)] bg-[var(--gallery-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gallery-text-1)] rounded-full animate-pulse"></div>
              <span>Share Memories</span>
            </div>
          </div>
          
          <Button 
            size="xl"
            className="bg-gradient-to-r from-[var(--gallery-border-1)] to-[var(--gallery-text-1)] text-[var(--gallery-bg-1)] hover:shadow-2xl transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg group hover:scale-105"
            href="#gallery-grid"
          >
            <FaImages className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            View Gallery
          </Button>
        </div>
      </div>

      <style jsx>{`
        .neon-text-gallery {
          text-shadow: 0 0 5px var(--gallery-text-1), 0 0 10px var(--gallery-text-1), 0 0 15px var(--gallery-text-1), 0 0 20px var(--gallery-border-1);
        }
      `}</style>
    </section>
  );
};

export default GalleryHero;