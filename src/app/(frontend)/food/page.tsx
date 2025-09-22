'use client';

import FoodHero from "@/components/Food/FoodHero";
import FoodCategories from "@/components/Food/FoodCategories";
import FoodMenu from "@/components/Food/FoodMenu";
import FoodSpecials from "@/components/Food/FoodSpecials";
import GuestLayout from "@/app/layouts/GuestLayout";

const FoodZone = () => {
  return (
    <main className="min-h-screen">
      <GuestLayout>
      <FoodHero />
      <FoodCategories />
      <FoodMenu />
      <FoodSpecials />
      </GuestLayout>
      
      {/* Add custom styles */}
      <style jsx>{`
        .neon-text-food {
          text-shadow: 0 0 5px var(--food-text-1), 0 0 10px var(--food-text-1), 0 0 15px var(--food-text-1), 0 0 20px var(--food-border-1);
        }
      `}</style>
    </main>
  );
};

export default FoodZone;