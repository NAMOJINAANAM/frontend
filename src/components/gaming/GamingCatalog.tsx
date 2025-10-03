'use client';

import Button from "@/components/ui/button";
import { FaUsers, FaTrophy, FaStar, FaClock, FaGamepad } from "react-icons/fa";

const GamingCatalog = () => {
  const games = [
    {
      id: 1,
      name: "Virtual Reality Arena",
      description: "Immerse yourself in cutting-edge VR experiences with multiplayer capabilities",
      category: "vr",
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "2-4",
      difficulty: "Medium",
      duration: "15-30min",
      rating: 4.9,
      popular: true,
      featured: true
    },
    {
      id: 2,
      name: "Cosmic Bowling",
      description: "Glow-in-the-dark bowling with cosmic themes and special effects",
      category: "bowling",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "2-8",
      difficulty: "Easy",
      duration: "45-60min",
      rating: 4.8,
      popular: true
    },
    {
      id: 3,
      name: "Retro Arcade Classics",
      description: "Collection of 80s and 90s arcade classics with modern enhancements",
      category: "arcade",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "1-2",
      difficulty: "Easy",
      duration: "10-20min",
      rating: 4.7
    },
    {
      id: 4,
      name: "Racing Simulators",
      description: "Professional racing simulators with motion seats and realistic controls",
      category: "arcade",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "1-4",
      difficulty: "Hard",
      duration: "10-15min",
      rating: 4.8,
      featured: true
    },
    {
      id: 5,
      name: "Laser Tag Arena",
      description: "Multi-level laser tag arena with special effects and team missions",
      category: "multiplayer",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "4-16",
      difficulty: "Medium",
      duration: "20-30min",
      rating: 4.9,
      popular: true
    },
    {
      id: 6,
      name: "E-Sports Tournament",
      description: "Competitive gaming tournaments with prizes and leaderboards",
      category: "tournament",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "8-32",
      difficulty: "Hard",
      duration: "60-120min",
      rating: 4.8,
      featured: true
    },
    {
      id: 7,
      name: "Air Hockey Championship",
      description: "Professional air hockey tables with tournament play options",
      category: "arcade",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "2",
      difficulty: "Medium",
      duration: "10-15min",
      rating: 4.6
    },
    {
      id: 8,
      name: "Interactive Dance Floor",
      description: "Motion-sensing dance games with multiplayer competitions",
      category: "multiplayer",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      players: "1-8",
      difficulty: "Easy",
      duration: "5-10min",
      rating: 4.7,
      popular: true
    }
  ];

  return (
    <section id="games" className="py-16 bg-gradient-to-b from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
            Game Catalog
          </h2>
          <p className="text-lg text-[var(--gaming-text-2)] max-w-2xl mx-auto">
            Explore our extensive collection of games and experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game.id} className="group overflow-hidden rounded-2xl bg-gradient-to-b from-[var(--gaming-bg-1)]/70 to-[var(--gaming-bg-2)]/70 backdrop-blur-md border-2 border-[var(--gaming-border-2)] shadow-lg hover:shadow-[0_0_25px_var(--gaming-text-1)] transition-all duration-500 hover:-translate-y-2">
              {/* Game Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  title={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gaming-bg-1)]/90 via-[var(--gaming-bg-1)]/40 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {game.popular && (
                    <span className="bg-[var(--gaming-border-1)] text-[var(--gaming-bg-1)] px-2 py-1 rounded text-xs font-bold">
                      Popular
                    </span>
                  )}
                  {game.featured && (
                    <span className="bg-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] px-2 py-1 rounded text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-[var(--gaming-bg-1)]/90 text-[var(--gaming-text-1)] px-2 py-1 rounded text-sm font-bold flex items-center">
                  <FaStar className="mr-1 text-yellow-400" />
                  {game.rating}
                </div>
              </div>
              
              {/* Game Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--gaming-text-1)] mb-2">
                  {game.name}
                </h3>
                <p className="text-[var(--gaming-text-2)] mb-4 text-sm">
                  {game.description}
                </p>
                
                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-[var(--gaming-text-1)] mb-1">
                      <FaUsers className="mr-1 text-sm" />
                    </div>
                    <span className="text-xs text-[var(--gaming-text-2)]">{game.players} Players</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-[var(--gaming-text-1)] mb-1">
                      <FaTrophy className="mr-1 text-sm" />
                    </div>
                    <span className="text-xs text-[var(--gaming-text-2)]">{game.difficulty}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-[var(--gaming-text-1)] mb-1">
                      <FaClock className="mr-1 text-sm" />
                    </div>
                    <span className="text-xs text-[var(--gaming-text-2)]">{game.duration}</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-lg transition-all duration-300 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <FaGamepad />
                  Play Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingCatalog;