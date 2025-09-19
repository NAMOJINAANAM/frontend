'use client';

import Button from "@/components/ui/button";
import { FaGamepad, FaStar, FaDice } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GiJoystick } from "react-icons/gi";
const GamingZone = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const games = [
    {
      title: "Arcade Games",
      description: "Classic games, big prizes! Test your skills on air hockey, basketball shootout, and more.",
      image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["50+ Classic Games", "Ticket Prizes", "Ages 6+"],
      pricing: "$1-3 per play",
      link: "/gaming/arcade",
    },
    {
      title: "Bowling Alley", 
      description: "Strike up fun for all ages! Glow-in-the-dark lanes with automated scoring.",
      image: "https://content.jdmagicbox.com/v2/comp/hyderabad/m7/040pxx40.xx40.230330221114.k8m7/catalogue/amoeba-bowling-alley-hyderabad-sports-clubs-8gBpFhH22g.jpg",
      features: ["8 Modern Lanes", "Group Play", "Kids Bumpers"],
      pricing: "$20/lane/hour",
      link: "/gaming/bowling",
    },
    {
      title: "VR Games",
      description: "Step into the game! Immersive experiences with cutting-edge VR technology.",
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Latest VR Tech", "Multiplayer Games", "Ages 12+"],
      pricing: "$15 per session",
      link: "/gaming/vr",
    },
  ];

  // Floating gaming icons for background
  const FloatingIcon = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--color-purple)]/20 dark:text-[var(--color-purple)]/30 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="gaming" className="py-10 border-b-2 relative overflow-hidden bg-gradient-to-b from-[var(--color-white)] to-[var(--color-beige)]/20 dark:from-[var(--color-black)] dark:to-[var(--color-black)]">
      
      {/* Animated Background Elements */}
      <FloatingIcon icon={FaGamepad} style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
      <FloatingIcon icon={FaDice} style={{ top: '20%', right: '5%', animationDelay: '1.5s' }} />
      <FloatingIcon icon={GiJoystick} style={{ bottom: '15%', left: '8%', animationDelay: '2.5s' }} />
      <FloatingIcon icon={FaStar} style={{ bottom: '25%', right: '10%', animationDelay: '3.5s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animation */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)] mb-4">
              <span className="text-[var(--color-purple)] animate-pulse">Gaming</span> Zone
            </h2>
            <p className="text-xl text-[var(--color-black)]/80 dark:text-[var(--color-white)]/80 max-w-2xl mx-auto">
              From classic arcades to cutting-edge VR — we've got the thrills you're looking for
            </p>
          </div>
        </div>

        {/* Gaming Categories with staggered animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-white)]/20 to-[var(--color-white)]/5 dark:from-[var(--color-black)]/20 dark:to-[var(--color-black)]/5 backdrop-blur-md border-2 border-[var(--color-purple)]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-purple)]/0 via-[var(--color-purple)]/10 to-[var(--color-purple)]/0 animate-pulse-glow rounded-3xl"></div>
              
              {/* Content container */}
              <div className="relative z-10">
                {/* Image with Text Overlay */}
                <div className="h-48 overflow-hidden relative rounded-t-3xl">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/90 via-[var(--color-black)]/40 to-transparent"></div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-[var(--color-white)]">
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-md bg-gradient-to-r from-[var(--color-white)] to-[var(--color-gold)] bg-clip-text text-transparent">
                      {game.title}
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow-md line-clamp-2">{game.description}</p>
                  </div>
                  
                  {/* Popular Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--color-purple)] text-[var(--color-white)] px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-[var(--color-gold)]/50 animate-bounce-slow">
                    Popular
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4 bg-[var(--color-gold)] text-[var(--color-black)] px-3 py-1 rounded-lg text-sm font-bold shadow-lg border border-[var(--color-white)]/50">
                    {game.pricing}
                  </div>
                </div>
                
                {/* Content Below Image */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    {game.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[var(--color-black)] dark:text-[var(--color-white)]">
                        <div className="w-2 h-2 bg-[var(--color-purple)] rounded-full animate-ping-slow"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-[var(--color-purple)]/20">
                    <Button 
                      className="w-full bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-flame-orange)] text-[var(--color-white)] transition-all duration-300 py-3 rounded-xl font-semibold group-hover:scale-105 hover:shadow-lg hover:from-[var(--color-flame-orange)] hover:to-[var(--color-purple)] transform hover:-translate-y-1"
                      href={game.link}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with animation */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--color-flame-orange)] to-[var(--color-flame-red)] text-[var(--color-white)] hover:shadow-2xl hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group animate-pulse hover:animate-none"
            href="/gaming/all"
          >
            <FaGamepad className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            Explore All Games
          </Button>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-grid-move { animation: gridMove 20s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-ping-slow { animation: pingSlow 2s cubic-bezier(0,0,0.2,1) infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default GamingZone;