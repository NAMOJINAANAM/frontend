// 'use client';

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { FaArrowLeft, FaGamepad, FaBowlingBall, FaVrCardboard, FaStar, FaUsers, FaChild, FaFilter, FaArrowRight, FaClock, FaDollarSign, FaHeart } from 'react-icons/fa';

// // Define types
// interface Game {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   image: string;
//   ageRange: string;
//   price: string;
//   rating: number;
//   duration?: string;
//   players?: string;
//   featured?: boolean;
// }

// interface Category {
//   id: string;
//   name: string;
//   icon: React.ReactNode;
//   description: string;
//   color: string;
// }

// // Categories Data (moved outside component for generateStaticParams)
// export const categories: Category[] = [
//   {
//     id: 'arcade',
//     name: 'Arcade Games',
//     icon: <FaGamepad className="w-5 h-5" />,
//     description: 'Fun, skill-based, and ticket-winning games for all ages',
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     id: 'bowling',
//     name: 'Bowling Alley',
//     icon: <FaBowlingBall className="w-5 h-5" />,
//     description: 'State-of-the-art lanes with automated scoring, perfect for parties',
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     id: 'vr',
//     name: 'VR Games',
//     icon: <FaVrCardboard className="w-5 h-5" />,
//     description: 'Immersive experiences with the latest VR technology',
//     color: 'from-green-500 to-emerald-500'
//   },
//   {
//     id: 'simulators',
//     name: 'Simulators',
//     icon: <FaStar className="w-5 h-5" />,
//     description: 'Realistic driving and flight simulations',
//     color: 'from-orange-500 to-red-500'
//   },
//   {
//     id: 'kids',
//     name: 'Kids Zone',
//     icon: <FaChild className="w-5 h-5" />,
//     description: 'Safe and fun games for younger players',
//     color: 'from-yellow-500 to-amber-500'
//   },
//   {
//     id: 'sports',
//     name: 'Sports Games',
//     icon: <FaUsers className="w-5 h-5" />,
//     description: 'Physical and virtual sports challenges',
//     color: 'from-indigo-500 to-purple-500'
//   },
//   {
//     id: 'all',
//     name: 'All Games',
//     icon: <FaGamepad className="w-5 h-5" />,
//     description: 'All exciting games and experiences',
//     color: 'from-[var(--color-primary)] to-yellow-400'
//   }
// ];

// // All Games Data (moved outside component)
// export const allGames: Game[] = [
//   // Arcade Games
//   {
//     id: '1',
//     name: 'Air Hockey',
//     category: 'arcade',
//     description: 'Fast-paced, competitive fun on the table. Challenge your friends to intense matches.',
//     image: '/games/air-hockey.jpg',
//     ageRange: 'Ages 6+',
//     price: '$2 per game',
//     rating: 4.8,
//     duration: '5-10 mins',
//     players: '2 Players',
//     featured: true
//   },
//   {
//     id: '2',
//     name: 'Basketball Shootout',
//     category: 'arcade',
//     description: 'Test your shooting skills and accuracy. Beat the high score and win tickets!',
//     image: '/games/basketball-shootout.jpg',
//     ageRange: 'Ages 8+',
//     price: '$1 per play',
//     rating: 4.5,
//     duration: '3-5 mins',
//     players: '1-4 Players'
//   },
//   {
//     id: '3',
//     name: 'Racing Simulators',
//     category: 'arcade',
//     description: 'High-speed driving thrills with realistic controls and immersive displays.',
//     image: '/games/racing-simulator.jpg',
//     ageRange: 'Ages 10+',
//     price: '$3 per race',
//     rating: 4.9,
//     duration: '10-15 mins',
//     players: '1-8 Players',
//     featured: true
//   },
//   {
//     id: '4',
//     name: 'Claw Machines',
//     category: 'arcade',
//     description: 'Win fun prizes with skill and precision. Various themes and prize options available.',
//     image: '/games/claw-machine.jpg',
//     ageRange: 'All Ages',
//     price: '$1 per try',
//     rating: 4.2,
//     duration: '2 mins',
//     players: '1 Player'
//   },
//   {
//     id: '5',
//     name: 'Shooting Games',
//     category: 'arcade',
//     description: 'Action-packed target challenges with realistic guns and exciting scenarios.',
//     image: '/games/shooting-game.jpg',
//     ageRange: 'Ages 12+',
//     price: '$2 per game',
//     rating: 4.6,
//     duration: '8-12 mins',
//     players: '1-2 Players'
//   },
//   {
//     id: '6',
//     name: 'Dance Machines',
//     category: 'arcade',
//     description: 'Groove to the beat and follow the moves. Great exercise and fun for all ages.',
//     image: '/games/dance-machine.jpg',
//     ageRange: 'Ages 8+',
//     price: '$2 per song',
//     rating: 4.7,
//     duration: '3-4 mins',
//     players: '1-2 Players'
//   },

//   // Bowling Games
//   {
//     id: '7',
//     name: 'Glow Bowling',
//     category: 'bowling',
//     description: 'Vibrant glow-in-the-dark bowling experience with neon lights and music.',
//     image: '/games/glow-bowling.jpg',
//     ageRange: 'All Ages',
//     price: '$20/lane/hour',
//     rating: 4.8,
//     duration: '60 mins',
//     players: '2-6 Players',
//     featured: true
//   },
//   {
//     id: '8',
//     name: 'Tournament Bowling',
//     category: 'bowling',
//     description: 'Competitive bowling with automated scoring and professional lane conditions.',
//     image: '/games/tournament-bowling.jpg',
//     ageRange: 'Ages 10+',
//     price: '$25/lane/hour',
//     rating: 4.7,
//     duration: '60 mins',
//     players: '2-8 Players'
//   },

//   // VR Games
//   {
//     id: '9',
//     name: 'VR Roller Coaster',
//     category: 'vr',
//     description: 'Thrilling virtual reality coaster rides with realistic motion and effects.',
//     image: '/games/vr-coaster.jpg',
//     ageRange: 'Ages 12+',
//     price: '$5 per experience',
//     rating: 4.9,
//     duration: '15 mins',
//     players: '1 Player',
//     featured: true
//   },
//   {
//     id: '10',
//     name: 'Zombie Survival',
//     category: 'vr',
//     description: 'Battle hordes of zombies in immersive VR world. Team up or go solo.',
//     image: '/games/zombie-vr.jpg',
//     ageRange: 'Ages 16+',
//     price: '$6 per session',
//     rating: 4.8,
//     duration: '20 mins',
//     players: '1-4 Players'
//   },
//   {
//     id: '11',
//     name: 'VR Sports',
//     category: 'vr',
//     description: 'Play tennis, boxing, or other sports in fully immersive virtual reality.',
//     image: '/games/vr-sports.jpg',
//     ageRange: 'Ages 10+',
//     price: '$4 per game',
//     rating: 4.6,
//     duration: '15 mins',
//     players: '1-2 Players'
//   },
// ];

// // Generate static params for all categories
// export function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category.id,
//   }));
// }

// // Component Props
// interface PageProps {
//   params: Promise<{ category: string }>;
// }

// // Main Component
// export default function GamesPage({ params }: PageProps) {
//   const [unwrappedParams, setUnwrappedParams] = useState<{ category: string } | null>(null);
//   const [games, setGames] = useState<Game[]>([]);
//   const [filteredGames, setFilteredGames] = useState<Game[]>([]);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [sortBy, setSortBy] = useState('featured');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Unwrap the params promise
//     const unwrapParams = async () => {
//       const resolvedParams = await params;
//       setUnwrappedParams(resolvedParams);
//       setActiveCategory(resolvedParams.category || 'all');
//     };
    
//     unwrapParams();
//   }, [params]);

//   useEffect(() => {
//     if (!unwrappedParams) return;
    
//     setIsLoading(true);
    
//     // Filter games based on category
//     if (activeCategory === 'all') {
//       setGames(allGames);
//       setFilteredGames(allGames);
//     } else {
//       const categoryGames = allGames.filter(game => game.category === activeCategory);
//       setGames(categoryGames);
//       setFilteredGames(categoryGames);
//     }
    
//     setIsLoading(false);
//   }, [activeCategory, unwrappedParams]);

//   useEffect(() => {
//     // Sort games based on selection
//     let sortedGames = [...games];
    
//     switch (sortBy) {
//       case 'rating':
//         sortedGames.sort((a, b) => b.rating - a.rating);
//         break;
//       case 'price-low':
//         sortedGames.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
//         break;
//       case 'price-high':
//         sortedGames.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
//         break;
//       case 'name':
//         sortedGames.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case 'featured':
//       default:
//         sortedGames.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
//         break;
//     }
    
//     setFilteredGames(sortedGames);
//   }, [sortBy, games]);

//   const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

//   if (isLoading || !unwrappedParams) {
//     return (
//       <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-white text-xl">Loading games...</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
//       {/* Background Pattern */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* Header Section */}
//         <div className="mb-8">
//           <Link 
//             href="/gaming"
//             className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-white mb-6 transition-colors duration-300"
//           >
//             <FaArrowLeft className="w-4 h-4" />
//             <span>Back to All Categories</span>
//           </Link>

//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color}`}>
//                 {currentCategory.icon}
//               </div>
//               <div>
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
//                   {currentCategory.name}
//                 </h1>
//                 <p className="text-lg text-gray-300 max-w-2xl">
//                   {currentCategory.description}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <span className="text-gray-400">Sort by:</span>
//               <select 
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="bg-gray-800/50 border border-gray-700/50 text-white rounded-xl px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent backdrop-blur-sm"
//               >
//                 <option value="featured">Featured</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="name">Alphabetical</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Category Navigation */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <Link
//                 key={cat.id}
//                 href={`/gaming/${cat.id}`}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
//                   activeCategory === cat.id
//                     ? `bg-gradient-to-r ${cat.color} text-white border-transparent`
//                     : 'bg-gray-800/50 text-white border-gray-700/50 hover:border-current/50'
//                 }`}
//               >
//                 {cat.icon}
//                 {cat.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Games Count */}
//         <div className="mb-6">
//           <p className="text-gray-400">
//             Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
//             {activeCategory !== 'all' && ` in ${currentCategory.name}`}
//           </p>
//         </div>

//         {/* Games Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
//           {filteredGames.map((game) => (
//             <div
//               key={game.id}
//               className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10"
//             >
//               {game.featured && (
//                 <div className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold z-10">
//                   Featured
//                 </div>
//               )}
              
//               {/* Game Image */}
//               <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-700/50">
//                 <div className="w-full h-full flex items-center justify-center text-gray-400">
//                   <FaGamepad className="w-12 h-12 opacity-50" />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
//                 {/* Quick Actions */}
//                 <div className="absolute top-3 right-3 flex gap-2">
//                   <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300">
//                     <FaHeart className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Game Info */}
//               <div className="space-y-3">
//                 <div className="flex items-start justify-between">
//                   <h3 className="font-bold text-white text-lg group-hover:text-[var(--color-primary)] transition-colors">
//                     {game.name}
//                   </h3>
//                   <div className="flex items-center gap-1 text-amber-400">
//                     <FaStar className="w-4 h-4" />
//                     <span className="text-sm font-semibold">{game.rating}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {game.description}
//                 </p>
                
//                 {/* Game Details */}
//                 <div className="flex items-center gap-4 text-xs text-gray-400">
//                   {game.duration && (
//                     <div className="flex items-center gap-1">
//                       <FaClock className="w-3 h-3" />
//                       <span>{game.duration}</span>
//                     </div>
//                   )}
//                   {game.players && (
//                     <div className="flex items-center gap-1">
//                       <FaUsers className="w-3 h-3" />
//                       <span>{game.players}</span>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
//                   <span className="text-gray-400 text-sm">{game.ageRange}</span>
//                   <span className="text-[var(--color-primary)] font-semibold">
//                     {game.price}
//                   </span>
//                 </div>
//               </div>

//               {/* Hover Action Button */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 <Link
//                   href={`/book-now/${game.category}/${game.id}`}
//                   className="bg-[var(--color-primary)] text-black px-6 py-2 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2"
//                 >
//                   <span>Book Now</span>
//                   <FaArrowRight className="w-3 h-3" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* No Games Found */}
//         {filteredGames.length === 0 && (
//           <div className="text-center py-16">
//             <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaGamepad className="w-8 h-8 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-2">No Games Found</h3>
//             <p className="text-gray-400 mb-6">There are no games available in this category at the moment.</p>
//             <Link
//               href="/gaming/all"
//               className="bg-[var(--color-primary)] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
//             >
//               View All Games
//             </Link>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <div className="text-center border-t border-gray-700/50 pt-12">
//           <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
//           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//             Contact our team for special requests, group bookings, or information about upcoming games and events.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="bg-[var(--color-primary)] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(239,249,35,0.6)]"
//             >
//               Contact Us
//             </Link>
//             <Link
//               href="/gaming/all"
//               className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300"
//             >
//               Browse All Categories
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }