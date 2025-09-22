'use client';

import Button from "@/components/ui/button";
import { FaCalendar, FaUser, FaArrowRight, FaComments, FaTags, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
const BlogPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

type FloatingIconProps = {
  icon: any; // this ensures it’s a valid react-icons component
  style?: any; // inline styles
};

type BlogPreviewProps = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  comments: string;
  image: string;
  tags: string[];
  date: string;
};

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      category: "gaming",
      title: "The Rise of VR Gaming in Entertainment Centers",
      excerpt: "Explore how virtual reality is transforming the gaming experience at modern entertainment venues.",
      author: "Alex Johnson",
      date: "March 15, 2023",
      readTime: "5 min read",
      comments: 12,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["VR", "Gaming", "Technology"]
    },
    {
      id: 2,
      category: "events",
      title: "How to Plan the Perfect Birthday Party at Our Venue",
      excerpt: "Everything you need to know to create unforgettable birthday celebrations for all ages.",
      author: "Maria Rodriguez",
      date: "February 28, 2023",
      readTime: "7 min read",
      comments: 8,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Events", "Planning", "Celebrations"]
    },
    {
      id: 3,
      category: "food",
      title: "Behind the Scenes: Our Chef's Signature Dishes",
      excerpt: "Take a culinary journey through our most popular menu items and the inspiration behind them.",
      author: "James Wilson",
      date: "February 10, 2023",
      readTime: "6 min read",
      comments: 15,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Food", "Recipes", "Behind the Scenes"]
    },
    {
      id: 4,
      category: "gaming",
      title: "Top 10 Tips to Improve Your Bowling Score",
      excerpt: "Expert advice to help you master the lanes and impress your friends on your next visit.",
      author: "Sarah Thompson",
      date: "January 22, 2023",
      readTime: "8 min read",
      comments: 23,
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Bowling", "Tips", "Games"]
    },
    {
      id: 5,
      category: "events",
      title: "Why Our Venue is Perfect for Corporate Team Building",
      excerpt: "Discover how we help companies strengthen team bonds through fun activities and games.",
      author: "Michael Chen",
      date: "January 15, 2023",
      readTime: "5 min read",
      comments: 6,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Corporate", "Team Building", "Business"]
    },
    {
      id: 6,
      category: "food",
      title: "The Science Behind Our Perfect Pizza Dough",
      excerpt: "Learn about the fermentation process that makes our pizza crust light, airy, and delicious.",
      author: "Emily Parker",
      date: "December 5, 2022",
      readTime: "9 min read",
      comments: 18,
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Food", "Pizza", "Recipes"]
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Floating icons for background
  const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--celebration-bg-1)]/20 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="blog" className="py-2 pt-10 relative overflow-hidden bg-white">
      
      {/* Animated Background Elements */}
      <FloatingIcon icon={FaCalendar} style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
      <FloatingIcon icon={FaComments} style={{ top: '20%', right: '5%', animationDelay: '1.5s' }} />
      <FloatingIcon icon={FaUser} style={{ bottom: '15%', left: '8%', animationDelay: '2.5s' }} />
      <FloatingIcon icon={FaTags} style={{ bottom: '25%', right: '10%', animationDelay: '3.5s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animation */}
        <div className="text-center mb-8 relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--celebration-bg-1)]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-[var(--celebration-bg-2)]/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--celebration-bg-1)] to-transparent"></div>
            
            <div className="relative inline-block mb-4">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 relative">
                {/* Main text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)]">
                  Latest Stories
                </span>
              </h2>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>

            <p className="text-md md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--celebration-bg-1)]/20 rounded-full animate-ping-slow"></span>
              Discover tips, news, and behind-the-scenes stories from our entertainment venue
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--celebration-bg-2)]/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></span>
            </p>

            {/* Animated dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-[var(--celebration-bg-1)]/30 rounded-full animate-bounce-slow"
                  style={{animationDelay: `${i * 0.3}s`}}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "gaming", "events", "food"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] text-white shadow-lg" 
                  : "bg-white/80 text-gray-700 border border-gray-200 hover:shadow-md"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_var(--celebration-bg-1)]/30 group cursor-pointer transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[var(--celebration-bg-1)] text-white px-3 py-1 rounded-full text-xs font-bold capitalize">
                  {post.category}
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <FaUser className="mr-1 text-[var(--celebration-bg-1)]" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <FaCalendar className="mr-1 text-[var(--celebration-bg-1)]" />
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[var(--celebration-bg-1)] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <FaClock className="mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <FaComments className="mr-1" />
                      {post.comments} comments
                    </span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Button */}
                <button className="flex items-center text-[var(--celebration-bg-1)] font-medium group-hover:underline">
                  Read More
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[var(--celebration-bg-1)] to-[var(--celebration-bg-2)] text-white hover:text-[var(--celebration-bg-1)] hover:shadow-2xl hover:scale-110 hover:border-2 hover:border-[var(--celebration-bg-1)] transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg group animate-pulse hover:animate-none hover:shadow-[0_0_25px_var(--celebration-bg-1)]/40"
            href="/blog"
          >
            View All Articles
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
          background-image: linear-gradient(to right, var(--celebration-bg-1) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--celebration-bg-1) 1px, transparent 1px);
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;