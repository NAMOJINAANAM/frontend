'use client';

import Button from "@/components/ui/button";
import { FaGamepad, FaTrophy, FaUsers, FaVrCardboard } from "react-icons/fa";

const GamingHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)]">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-5 text-[var(--gaming-text-1)]/20 text-6xl animate-float">
        <FaGamepad />
      </div>
      <div className="absolute top-1/4 right-12 text-[var(--gaming-border-1)]/20 text-7xl animate-float" style={{animationDelay: '2s'}}>
        <FaTrophy />
      </div>
      <div className="absolute bottom-1/3 left-10 text-[var(--gaming-text-2)]/20 text-8xl animate-float" style={{animationDelay: '3s'}}>
        <FaUsers />
      </div>
      <div className="absolute bottom-20 right-8 text-[var(--gaming-border-2)]/20 text-6xl animate-float" style={{animationDelay: '1.5s'}}>
        <FaVrCardboard />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--gaming-text-1)] mb-6 neon-text-gaming">
            Gaming Zone
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gaming-text-2)] mb-8 max-w-3xl mx-auto">
            Experience the ultimate gaming adventure with cutting-edge technology, 
            competitive tournaments, and endless fun for all ages and skill levels.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gaming-text-1)] rounded-full animate-pulse"></div>
              <span>50+ Games</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gaming-text-1)] rounded-full animate-pulse"></div>
              <span>VR Experiences</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <div className="w-2 h-2 bg-[var(--gaming-text-1)] rounded-full animate-pulse"></div>
              <span>Tournaments</span>
            </div>
          </div>
          
          <Button 
            size="xl"
            className="bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-2xl transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg group hover:scale-105 hover:shadow-[0_0_30px_var(--gaming-text-1)]"
            href="#games"
          >
            <FaGamepad className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            Explore All Games
          </Button>
        </div>
      </div>

      <style jsx>{`
        .neon-text-gaming {
          text-shadow: 0 0 5px var(--gaming-text-1), 0 0 10px var(--gaming-text-1), 0 0 15px var(--gaming-text-1), 0 0 20px var(--gaming-border-1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default GamingHero;