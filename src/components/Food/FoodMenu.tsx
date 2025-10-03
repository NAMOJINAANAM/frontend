'use client';

import Button from "@/components/ui/button";
import { FaStar, FaFire, FaLeaf, FaCartPlus } from "react-icons/fa";

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Double Truffle Burger",
      description: "Premium beef patty with black truffle aioli, caramelized onions, and aged cheddar",
      price: "$18",
      category: "burgers",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      spicy: true,
      popular: true
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes",
      price: "$16",
      category: "pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      vegetarian: true
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: "$12",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9
    },
    {
      id: 4,
      name: "BBQ Bacon Burger",
      description: "Juicy beef patty with crispy bacon, BBQ sauce, and onion rings",
      price: "$20",
      category: "burgers",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      popular: true
    },
    {
      id: 5,
      name: "Mediterranean Salad",
      description: "Fresh greens with feta, olives, cucumbers, and lemon-herb dressing",
      price: "$14",
      category: "healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      vegetarian: true
    },
    {
      id: 6,
      name: "Pepperoni Passion",
      description: "Spicy pepperoni with mozzarella and our signature tomato sauce",
      price: "$19",
      category: "pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      spicy: true
    }
  ];

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-[var(--food-bg-1)] to-[var(--food-bg-2)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--food-text-1)] mb-4">
            Featured Menu
          </h2>
          <p className="text-lg text-[var(--food-text-2)] max-w-2xl mx-auto">
            Discover our most popular dishes that keep guests coming back for more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-2xl bg-gradient-to-b from-[var(--food-bg-1)]/70 to-[var(--food-bg-2)]/70 backdrop-blur-md border-2 border-[var(--food-border-2)] shadow-lg hover:shadow-[0_0_25px_var(--food-text-1)] transition-all duration-500 hover:-translate-y-2">
              {/* Item Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  title={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--food-bg-1)]/90 via-[var(--food-bg-1)]/40 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.popular && (
                    <span className="bg-[var(--food-border-1)] text-[var(--food-bg-1)] px-2 py-1 rounded text-xs font-bold">
                      Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-[var(--food-text-1)] text-[var(--food-bg-1)] px-2 py-1 rounded text-xs font-bold flex items-center">
                      <FaFire className="mr-1" /> Spicy
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="bg-[var(--gallery-text-1)] text-[var(--gallery-bg-1)] px-2 py-1 rounded text-xs font-bold flex items-center">
                      <FaLeaf className="mr-1" /> Veg
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-[var(--food-bg-1)]/90 text-[var(--food-text-1)] px-2 py-1 rounded text-sm font-bold flex items-center">
                  <FaStar className="mr-1 text-yellow-400" />
                  {item.rating}
                </div>
              </div>
              
              {/* Item Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--food-text-1)] mb-2">
                  {item.name}
                </h3>
                <p className="text-[var(--food-text-2)] mb-4 text-sm">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--food-text-1)]">
                    {item.price}
                  </span>
                  <Button
                    className="bg-gradient-to-r from-[var(--food-border-1)] to-[var(--food-text-1)] text-[var(--food-bg-1)] hover:shadow-lg transition-all duration-300 py-2 px-4 rounded-xl font-semibold flex items-center gap-2"
                  >
                    <FaCartPlus />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;