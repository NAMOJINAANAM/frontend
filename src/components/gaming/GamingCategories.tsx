'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGamepad, FaBowlingBall, FaVrCardboard, FaStar, FaUsers, FaChild, FaFilter, FaArrowRight } from 'react-icons/fa';

interface Game {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  ageRange: string;
  price: string;
  rating: number;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  count: number;
}

const GamingCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  // Dynamic Categories Data
  const categories: Category[] = [
    {
      id: 'arcade',
      name: 'Arcade',
      icon: <FaGamepad className="w-5 h-5" />,
      description: 'Fun, skill-based, and ticket-winning games for all ages',
      color: 'from-purple-500 to-pink-500',
      count: 12
    },
    {
      id: 'bowling',
      name: 'Bowling',
      icon: <FaBowlingBall className="w-5 h-5" />,
      description: 'State-of-the-art lanes with automated scoring',
      color: 'from-blue-500 to-cyan-500',
      count: 8
    },
    {
      id: 'vr',
      name: 'VR Games',
      icon: <FaVrCardboard className="w-5 h-5" />,
      description: 'Immersive experiences with latest VR technology',
      color: 'from-green-500 to-emerald-500',
      count: 6
    },
    {
      id: 'simulators',
      name: 'Simulators',
      icon: <FaStar className="w-5 h-5" />,
      description: 'Realistic driving and flight simulations',
      color: 'from-orange-500 to-red-500',
      count: 5
    },
    {
      id: 'kids',
      name: 'Kids Zone',
      icon: <FaChild className="w-5 h-5" />,
      description: 'Safe and fun games for younger players',
      color: 'from-yellow-500 to-amber-500',
      count: 10
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: <FaUsers className="w-5 h-5" />,
      description: 'Physical and virtual sports challenges',
      color: 'from-indigo-500 to-purple-500',
      count: 7
    }
  ];

  // Dynamic Games Data
  const allGames: Game[] = [
    // Arcade Games
    {
      id: '1',
      name: 'Air Hockey',
      category: 'arcade',
      description: 'Fast-paced, competitive fun on the table',
      image: '/games/air-hockey.jpg',
      ageRange: 'Ages 6+',
      price: '$2 per game',
      rating: 4.8,
      featured: true
    },
    {
      id: '2',
      name: 'Basketball Shootout',
      category: 'arcade',
      description: 'Test your shooting skills and accuracy',
      image: '/games/basketball-shootout.jpg',
      ageRange: 'Ages 8+',
      price: '$1 per play',
      rating: 4.5
    },
    {
      id: '3',
      name: 'Racing Simulators',
      category: 'arcade',
      description: 'High-speed driving thrills with realistic controls',
      image: '/games/racing-simulator.jpg',
      ageRange: 'Ages 10+',
      price: '$3 per race',
      rating: 4.9,
      featured: true
    },
    {
      id: '4',
      name: 'Claw Machines',
      category: 'arcade',
      description: 'Win fun prizes with skill and precision',
      image: '/games/claw-machine.jpg',
      ageRange: 'All Ages',
      price: '$1 per try',
      rating: 4.2
    },
    {
      id: '5',
      name: 'Shooting Games',
      category: 'arcade',
      description: 'Action-packed target challenges',
      image: '/games/shooting-game.jpg',
      ageRange: 'Ages 12+',
      price: '$2 per game',
      rating: 4.6
    },
    {
      id: '6',
      name: 'Dance Machines',
      category: 'arcade',
      description: 'Groove to the beat and follow the moves',
      image: '/games/dance-machine.jpg',
      ageRange: 'Ages 8+',
      price: '$2 per song',
      rating: 4.7
    },

    // Bowling Games
    {
      id: '7',
      name: 'Glow Bowling',
      category: 'bowling',
      description: 'Vibrant glow-in-the-dark bowling experience',
      image: '/games/glow-bowling.jpg',
      ageRange: 'All Ages',
      price: '$20/lane/hour',
      rating: 4.8,
      featured: true
    },
    {
      id: '8',
      name: 'Tournament Bowling',
      category: 'bowling',
      description: 'Competitive bowling with automated scoring',
      image: '/games/tournament-bowling.jpg',
      ageRange: 'Ages 10+',
      price: '$25/lane/hour',
      rating: 4.7
    },

    // VR Games
    {
      id: '9',
      name: 'VR Roller Coaster',
      category: 'vr',
      description: 'Thrilling virtual reality coaster rides',
      image: '/games/vr-coaster.jpg',
      ageRange: 'Ages 12+',
      price: '$5 per experience',
      rating: 4.9,
      featured: true
    },
    {
      id: '10',
      name: 'Zombie Survival',
      category: 'vr',
      description: 'Battle hordes in immersive VR world',
      image: '/games/zombie-vr.jpg',
      ageRange: 'Ages 16+',
      price: '$6 per session',
      rating: 4.8
    },
    {
      id: '11',
      name: 'VR Sports',
      category: 'vr',
      description: 'Play tennis or boxing in virtual reality',
      image: '/games/vr-sports.jpg',
      ageRange: 'Ages 10+',
      price: '$4 per game',
      rating: 4.6
    },

    // Add more games for other categories...
  ];

  useEffect(() => {
    setIsVisible(true);
    filterGames('all');
  }, []);

  const filterGames = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredGames(allGames);
    } else {
      const filtered = allGames.filter(game => game.category === categoryId);
      setFilteredGames(filtered);
    }
  };

  const getCategoryDescription = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.description : '';
  };

  const getCategoryGames = (categoryId: string) => {
    return allGames.filter(game => game.category === categoryId);
  };

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-bl from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
            <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>        
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            EXPLORE GAMES
          </h2>
          {/* <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our wide range of gaming experiences, from classic arcade fun to cutting-edge VR adventures
          </p> */}
        </div>

        {/* Categories Filter */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {/* All Games Button */}
            <button
              onClick={() => filterGames('all')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === 'all'
                  ? 'border-[var(--color-primary)] text-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20'
                  : 'bg-gray-800/50 text-white border-gray-700/50 hover:border-[var(--color-primary)]/50 hover:scale-105'
              }`}
            >
              <FaGamepad className="w-4 h-4" />
              All Games
              <span className="bg-black/20 px-2 py-1 rounded-full text-xs">
                {allGames.length}
              </span>
            </button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => filterGames(category.id)}
                className={`flex items-center gap-2 px-4 cursor-pointer sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm border ${
                  activeCategory === category.id
                    ? `border-[var(--color-primary)] text-[var(--color-primary)]`
                    : 'bg-gray-800/50 text-white border-gray-700/50 hover:border-current/50 hover:scale-105'
                }`}
              >
                {category.icon}
                {category.name}
                <span className="bg-black/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className={`text-center mb-8 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            {getCategoryDescription(activeCategory)}
          </p>
        </div>

        {/* Games Grid */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* All Games View */}
          {activeCategory === 'all' ? (
            <div className="space-y-16">
              {categories.map((category) => {
                const categoryGames = getCategoryGames(category.id);
                if (categoryGames.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-8">
                    {/* Category Header */}
                    <div className="grid grid-cols-1 sm:flex items-center justify-between ">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl border border-[var(--color-primary)] text-[var(--color-primary)] }`}>
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {category.name} Games
                          </h3>
                          <p className="text-sm sm:text-xl text-gray-400">{category.description}</p>
                        </div>
                      </div>
                      <Link
                        href={`/gaming/${category.id}`}
                        className="group flex items-center w-fit mt-2 gap-2 hover:text-[var(--color-primary)] text-white px-4 py-2 rounded-xl border hover:border-[var(--color-primary)] transition-all duration-300"
                      >
                        <span>See All</span>
                        <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Games Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {categoryGames.slice(0, 4).map((game) => (
                        <div
                          key={game.id}
                          className="group relative cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10"
                        >
                          {game.featured && (
                            <div className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                              Featured
                            </div>
                          )}
                          
                          {/* Game Image */}
                          <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-gray-700/50">
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                              Game Image
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                          </div>

                                          {/* Game Info */}
                                          <div className="space-y-3">
                                            <div className="flex items-start justify-between">
                                              <h4 className="font-bold text-white text-lg group-hover:text-[var(--color-primary)] transition-colors">
                                                {game.name}
                                              </h4>
                                              <div className="flex items-center gap-1 text-amber-400">
                                                <FaStar className="w-4 h-4" />
                                                <span className="text-sm font-semibold">{game.rating}</span>
                                              </div>
                                            </div>
                                            
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                              {game.description}
                                            </p>
                                            
                                            <div className="flex items-center justify-between text-sm">
                                              <span className="text-gray-400">{game.ageRange}</span>
                                              <span className="text-[var(--color-primary)] font-semibold">
                                                {game.price}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            /* Single Category View */
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                              {filteredGames.map((game) => (
                                <div
                                  key={game.id}
                                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10"
                                >
                                  {game.featured && (
                                    <div className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                                      Featured
                                    </div>
                                  )}
                                  
                                  {/* Game Image */}
                                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-gray-700/50">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                      Game Image
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                  </div>

                                  {/* Game Info */}
                                  <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                      <h4 className="font-bold text-white text-lg group-hover:text-[var(--color-primary)] transition-colors">
                                        {game.name}
                                      </h4>
                                      <div className="flex items-center gap-1 text-amber-400">
                                        <FaStar className="w-4 h-4" />
                                        <span className="text-sm font-semibold">{game.rating}</span>
                                      </div>
                                    </div>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                      {game.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between text-sm">
                                      <span className="text-gray-400">{game.ageRange}</span>
                                      <span className="text-[var(--color-primary)] font-semibold">
                                        {game.price}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            href="/gaming/all"
            className="inline-flex items-center gap-3 border border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaGamepad className="w-6 h-6" />
            <span>View All Games</span>
            <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamingCategories;