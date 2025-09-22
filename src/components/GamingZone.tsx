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
type FloatingIconProps = {
  icon: any; // this ensures it’s a valid react-icons component
  style?: any; // inline styles
};
  // Floating gaming icons for background
  const FloatingIcon:React.FC<FloatingIconProps> = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--gaming-bg-1)]/20 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="gaming" className="py-2 pt-10 relative overflow-hidden bg-white">
      
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
        <div className="text-center mb-8 relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--gaming-bg-1)]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-[var(--gaming-bg-2)]/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gaming-bg-1)] to-transparent"></div>
            
            <div className="relative inline-block mb-4">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 relative">
                {/* Main text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)]">
                  Gaming Zone
                </span>
                
                {/* Neon effect overlay */}
                {/* <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] opacity-70 blur-sm">
                  Gaming Zone
                </span> */}
              </h2>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>

            <p className="text-md md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--gaming-bg-1)]/20 rounded-full animate-ping-slow"></span>
              From classic arcades to cutting-edge VR — we've got the thrills you're looking for
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--gaming-bg-2)]/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></span>
            </p>

            {/* Animated dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-[var(--gaming-bg-1)]/30 rounded-full animate-bounce-slow"
                  style={{animationDelay: `${i * 0.3}s`}}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Gaming Categories with staggered animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-[0_0_25px_var(--gaming-bg-1)]/30 transition-all duration-500 hover:-translate-y-3 relative transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gaming-bg-1)]/0 via-[var(--gaming-bg-1)]/5 to-[var(--gaming-bg-1)]/0 animate-pulse-glow rounded-3xl"></div>
              
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-md bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {game.title}
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow-md line-clamp-2">{game.description}</p>
                  </div>
                  
                  {/* Popular Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--gaming-bg-1)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-[var(--gaming-bg-1)]/50 animate-bounce-slow">
                    Popular
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4 bg-white text-[var(--gaming-bg-1)] px-3 py-1 rounded-lg text-sm font-bold shadow-lg border border-gray-200">
                    {game.pricing}
                  </div>
                </div>
                
                {/* Content Below Image */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    {game.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[var(--gaming-bg-1)] rounded-full animate-ping-slow"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Button 
                      className="w-full bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] text-white hover:text-[var(--gaming-bg-1)] hover:border-2 hover:border-[var(--gaming-bg-1)] transition-all duration-300 py-3 rounded-xl font-semibold group-hover:scale-105 hover:shadow-lg hover:shadow-[var(--gaming-bg-1)]/30 transform hover:-translate-y-1"
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
            className="bg-gradient-to-r from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] text-white hover:text-[var(--gaming-bg-1)] hover:shadow-2xl hover:scale-110 hover:border-2 hover:border-[var(--gaming-bg-1)] transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group animate-pulse hover:animate-none hover:shadow-[0_0_25px_var(--gaming-bg-1)]/40"
          >
            <FaGamepad className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            Explore All Games
          </Button>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
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
          background-image: linear-gradient(to right, var(--gaming-bg-1) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--gaming-bg-1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes ping-slow {
          0% { transform: translateY(-50%) scale(1); opacity: 1; }
          75%, 100% { transform: translateY(-50%) scale(2.5); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0,0,0.2,1) infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default GamingZone;