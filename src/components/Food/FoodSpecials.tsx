'use client';

import Button from "@/components/ui/button";
import { FaPercent, FaClock, FaGift } from "react-icons/fa";

const FoodSpecials = () => {
  const specials = [
    {
      id: 1,
      title: "Family Feast Friday",
      description: "Get 20% off any family meal package every Friday",
      icon: FaPercent,
      color: "from-[var(--food-border-1)] to-[var(--food-text-1)]"
    },
    {
      id: 2,
      title: "Happy Hour",
      description: "2-for-1 drinks and appetizers from 4PM-6PM daily",
      icon: FaClock,
      color: "from-[var(--food-text-1)] to-[var(--food-border-2)]"
    },
    {
      id: 3,
      title: "Loyalty Program",
      description: "Earn points with every purchase and get free meals",
      icon: FaGift,
      color: "from-[var(--food-border-2)] to-[var(--food-border-1)]"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--food-bg-2)] to-[var(--food-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--food-text-1)] mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-[var(--food-text-2)] max-w-2xl mx-auto">
            Take advantage of our exclusive deals and promotions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((special) => {
            const IconComponent = special.icon;
            
            return (
              <div key={special.id} className="text-center p-8 rounded-2xl bg-gradient-to-b from-[var(--food-bg-1)]/50 to-[var(--food-bg-2)]/50 border-2 border-[var(--food-border-2)]">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${special.color} mb-6`}>
                  <IconComponent className="text-2xl text-[var(--food-bg-1)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--food-text-1)] mb-3">
                  {special.title}
                </h3>
                <p className="text-[var(--food-text-2)] mb-6">
                  {special.description}
                </p>
                <Button
                  className="bg-gradient-to-r from-[var(--food-border-1)] to-[var(--food-text-1)] text-[var(--food-bg-1)] hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodSpecials;