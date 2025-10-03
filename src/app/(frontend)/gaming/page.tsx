'use client';

import GamingHero from "@/components/gaming/GamingHero";
import GamingCategories from "@/components/gaming/GamingCategories";
import GamingCatalog from "@/components/gaming/GamingCatalog";
import GamingTournaments from "@/components/gaming/GamingTournaments";
import GuestLayout from "@/app/layouts/GuestLayout";
import CTA from "@/components/CTA";

const GamingZone = () => {
  return (
    <main className="min-h-screen">
      <GuestLayout>
      <GamingHero />
      <GamingCategories />
<CTA
  title="Ready to Level Up Your Experience?"
  subtitle="Get Started Today"
  description="Join thousands of satisfied players and discover why we're the top choice for premium gaming entertainment."
  image="/images/CTAimg.png"
  buttonText="Book Now"
  buttonLink="/booking"
/>
      </GuestLayout>
      {/* Add custom styles */}
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
    </main>
  );
};

export default GamingZone;