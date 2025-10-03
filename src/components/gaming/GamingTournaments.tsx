'use client';

import Button from "@/components/ui/button";
import { FaTrophy, FaUsers, FaCalendarAlt, FaAward  } from "react-icons/fa";

const GamingTournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Weekly Bowling Championship",
      date: "Every Saturday",
      time: "2:00 PM - 5:00 PM",
      prize: "$500 Cash Prize",
      participants: "16 teams",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "VR Masters Tournament",
      date: "Monthly Finals",
      time: "6:00 PM - 9:00 PM",
      prize: "VR Headset + $300",
      participants: "32 players",
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Arcade Classic Cup",
      date: "Every Friday",
      time: "7:00 PM - 10:00 PM",
      prize: "$250 + Free Plays",
      participants: "24 competitors",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--gaming-bg-2)] to-[var(--gaming-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
            Upcoming Tournaments
          </h2>
          <p className="text-lg text-[var(--gaming-text-2)] max-w-2xl mx-auto">
            Compete for glory and prizes in our exciting gaming tournaments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="group overflow-hidden rounded-2xl bg-gradient-to-b from-[var(--gaming-bg-1)]/50 to-[var(--gaming-bg-2)]/50 border-2 border-[var(--gaming-border-2)] p-6 hover:border-[var(--gaming-text-1)] transition-all duration-300">
              <div className="h-40 mb-4 relative overflow-hidden rounded-xl">
                <img 
                  src={tournament.image} 
                  alt={tournament.title}
                  title={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gaming-bg-1)]/80 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--gaming-text-1)] mb-3">
                {tournament.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-[var(--gaming-text-2)]">
                  <FaCalendarAlt className="text-[var(--gaming-text-1)]" />
                  <span>{tournament.date} • {tournament.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--gaming-text-2)]">
                  <FaAward  className="text-[var(--gaming-text-1)]" />
                  <span className="font-semibold text-[var(--gaming-text-1)]">{tournament.prize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--gaming-text-2)]">
                  <FaUsers className="text-[var(--gaming-text-1)]" />
                  <span>{tournament.participants}</span>
                </div>
              </div>
              
              <Button
                className="w-full bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-lg transition-all duration-300 py-2.5 rounded-xl font-semibold"
              >
                <FaTrophy className="mr-2" />
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingTournaments;