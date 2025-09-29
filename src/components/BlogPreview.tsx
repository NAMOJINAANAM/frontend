'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendar, FaUser, FaClock, FaArrowRight, FaTags, FaComment, FaShare, FaBookOpen, FaPenNib } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Gaming: VR and AR Experiences",
    excerpt: "Explore how virtual and augmented reality are transforming the gaming industry and what it means for players.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "Gaming",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["VR", "AR", "Innovation"],
    comments: 12,
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Party Games for Group Events",
    excerpt: "Discover the most engaging multiplayer games perfect for corporate events, birthdays, and group gatherings.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "Entertainment",
    author: "Mike Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    tags: ["Party Games", "Multiplayer", "Events"],
    comments: 8,
    featured: true
  },
  {
    id: 3,
    title: "Behind the Scenes: Our New Menu Launch",
    excerpt: "Get an exclusive look at how our culinary team developed the new seasonal menu with fresh, local ingredients.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "Food",
    author: "Chef Marco",
    date: "2024-01-10",
    readTime: "4 min read",
    tags: ["Food", "Menu", "Behind Scenes"],
    comments: 15,
    featured: false
  },
  {
    id: 4,
    title: "E-Sports Tournaments: What to Expect in 2024",
    excerpt: "A comprehensive guide to upcoming gaming tournaments and how to participate in our competitive events.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "E-Sports",
    author: "Alex Thompson",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["E-Sports", "Tournaments", "Competitive"],
    comments: 23,
    featured: false
  },
  {
    id: 5,
    title: "Creating Memorable Birthday Celebrations",
    excerpt: "Learn how we design unforgettable birthday experiences with themed decorations and personalized activities.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "Celebrations",
    author: "Emma Wilson",
    date: "2024-01-05",
    readTime: "5 min read",
    tags: ["Birthdays", "Celebrations", "Events"],
    comments: 7,
    featured: false
  },
  {
    id: 6,
    title: "The Science of Fun: Why Gaming Makes Us Happy",
    excerpt: "Exploring the psychological benefits of gaming and how it contributes to mental well-being and social connections.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&w=600&h=400&fit=crop&crop=center",
    category: "Psychology",
    author: "Dr. Lisa Park",
    date: "2024-01-03",
    readTime: "8 min read",
    tags: ["Psychology", "Wellness", "Gaming Benefits"],
    comments: 18,
    featured: true
  }
];

export default function BlogZone() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Featured post (first featured post or first post)
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `perspective(500px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            LATEST <span className="text-[var(--color-primary)]">STORIES</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Insights, tips, and stories from the world of gaming, entertainment, and culinary experiences
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border-2 ${
                selectedCategory === category 
                  ? "bg-[var(--color-primary)] text-black border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/30" 
                  : "bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-[var(--color-primary)]/50 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Featured Image */}
              <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-black px-4 py-2 rounded-full font-bold text-sm">
                  Featured
                </div>
              </div>

              {/* Featured Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="bg-gray-700/50 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-black font-bold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium">{featuredPost.author}</p>
                      <p className="text-gray-400 text-sm">Author</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaComment className="w-4 h-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/30 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 border-2 border-black shadow-[0_3px_0_rgba(0,0,0,1)] hover:shadow-[0_5px_0_rgba(0,0,0,1)] active:scale-95 w-fit group/btn"
                >
                  <span>Read Full Story</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredPosts.filter(post => post.id !== featuredPost.id).map((post, index) => (
            <article
              key={post.id}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </div>
                {post.featured && (
                  <div className="absolute top-3 right-3 bg-black/80 text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    Featured
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-black text-xs font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaComment className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/30 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-[var(--color-primary)] hover:text-white transition-colors duration-300 group/readmore"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <FaArrowRight className="w-3 h-3 transform group-hover/readmore:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 border border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaBookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>View All Articles</span>
          </Link>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateZ(30px) scale(1) rotateY(0deg);
          }
          50% { 
            transform: translateZ(40px) scale(1.02) rotateY(5deg);
          }
        }
        
        .animate-float3D {
          animation: float3D 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}