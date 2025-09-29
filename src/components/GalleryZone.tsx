'use client';

import Button from "@/components/ui/button";
import { FaImages, FaVideo, FaArrowLeft, FaArrowRight, FaTimes, FaExpand, FaCamera, FaFilm, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const GalleryZone = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gallery media items
  const galleryMedia = [
    {
      id: 1,
      type: "image",
      category: "gaming",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "VR Gaming Tournament",
      description: "Players competing in our annual VR championship"
    },
    {
      id: 2,
      type: "image",
      category: "celebrations",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Birthday Celebration",
      description: "Sarah's 10th birthday party at our venue"
    },
    {
      id: 3,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Gourmet Pizza",
      description: "Our signature wood-fired pizza with fresh ingredients"
    },
    {
      id: 4,
      type: "video",
      category: "gaming",
      src: "https://player.vimeo.com/video/370756449",
      thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Bowling Tournament",
      description: "Highlights from our monthly bowling competition"
    },
    {
      id: 5,
      type: "image",
      category: "celebrations",
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Corporate Event",
      description: "Tech company team-building event at our venue"
    },
    {
      id: 6,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Signature Burgers",
      description: "Our chef's special double cheeseburger with truffle fries"
    },
    {
      id: 7,
      type: "image",
      category: "gaming",
      src: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Arcade Champions",
      description: "Winners of our arcade game tournament"
    },
    {
      id: 8,
      type: "image",
      category: "celebrations",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Graduation Party",
      description: "Celebrating Mark's university graduation"
    },
    {
      id: 9,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Dessert Platter",
      description: "Our popular dessert sharing platter for celebrations"
    },
    {
      id: 10,
      type: "video",
      category: "gaming",
      src: "https://player.vimeo.com/video/371105588",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "VR Experience",
      description: "Customers enjoying our latest VR adventure game"
    },
    {
      id: 11,
      type: "image",
      category: "celebrations",
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Kids Birthday Party",
      description: "Fun-filled birthday celebration with games and activities"
    },
    {
      id: 12,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Fresh Pasta",
      description: "Handmade pasta with seasonal ingredients"
    }
  ];

  // Filter media based on selected category
  const filteredMedia = selectedCategory === "all" 
    ? galleryMedia 
    : galleryMedia.filter(item => item.category === selectedCategory);

  // Open lightbox with specific media
  const openLightbox = (index:any) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  // Navigate to previous media in lightbox
  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) => 
      prevIndex === 0 ? filteredMedia.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next media in lightbox
  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) => 
      prevIndex === filteredMedia.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevMedia();
        if (e.key === 'ArrowRight') nextMedia();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  type FloatingIconProps = {
  icon: any; // this ensures it’s a valid react-icons component
  style?: any; // inline styles
};
  // Floating gallery icons for background
  const FloatingIcon:React.FC<FloatingIconProps> = ({ icon: Icon, style }) => (
    <div 
      className="absolute text-[var(--gallery-bg-1)]/20 text-4xl md:text-6xl animate-float"
      style={style}
    >
      <Icon />
    </div>
  );

  return (
    <section id="gallery" className="py-1 sm:py-2 lg:py-3 relative overflow-hidden bg-gradient-to-bl from-black via-gray-900 to-black">    
      {/* Animated grid pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animation */}
        <div className="text-center mb-8 relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--gallery-bg-1)]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-[var(--gallery-bg-2)]/10 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gallery-bg-1)] to-transparent"></div>
            
            <div className="relative inline-block mb-1">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 relative">
                {/* Main text with gradient */}
                <span className="text-white bg-clip-text bg-gradient-to-r from-[var(--gallery-bg-1)] to-[var(--gallery-bg-2)]">
                  Gallery Zone
                </span>
              </h2>
            </div>

            {/* <p className="text-md md:text-2xl text-white max-w-3xl mx-auto leading-relaxed relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--gallery-bg-1)]/20 rounded-full animate-ping-slow"></span>
              Relive the best moments from our venue — gaming triumphs, celebrations, and delicious food
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--gallery-bg-2)]/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></span>
            </p> */}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "gaming", "celebrations", "food"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === category 
                ? "bg-white/80 text-gray-700 border border-[var(--color-primary)] hover:shadow-md"
                : "border border-[var(--color-primary)] text-[var(--color-primary)] shadow-lg" 
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mb-12">
          {filteredMedia.map((item, index) => (
            <div 
              key={item.id}
              className={`mb-4 break-inside-avoid relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="overflow-hidden rounded-2xl bg-white border border-[var(--color-primary)] shadow-lg hover:shadow-[0_0_25px_var(--gallery-bg-1)]/30 transition-all duration-500">
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md">{item.title}</h3>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md line-clamp-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-[var(--color-primary)]/90 text-white p-2 rounded-full backdrop-blur-sm">
                    {item.type === "video" ? <FaVideo className="text-sm" /> : <FaImages className="text-sm" />}
                  </div>
                  <div className="absolute top-3 left-3 bg-[var(--gallery-bg-1)] text-white px-2 py-1 rounded text-xs font-bold capitalize">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            className="inline-flex items-center gap-3 border border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
            href="/gallery"
          >
            <FaImages className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
            See More Memories
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl z-10 bg-black/30 p-2 rounded-full backdrop-blur-sm hover:bg-[var(--gallery-bg-1)] transition-colors"
          >
            <FaTimes />
          </button>

          <button 
            onClick={prevMedia}
            className="absolute left-4 text-white text-2xl z-10 bg-black/30 p-3 rounded-full backdrop-blur-sm hover:bg-[var(--gallery-bg-1)] transition-colors"
          >
            <FaArrowLeft />
          </button>

          <button 
            onClick={nextMedia}
            className="absolute right-4 text-white text-2xl z-10 bg-black/30 p-3 rounded-full backdrop-blur-sm hover:bg-[var(--gallery-bg-1)] transition-colors"
          >
            <FaArrowRight />
          </button>

          <div className="max-w-4xl w-full max-h-full overflow-hidden">
            {filteredMedia[currentMediaIndex].type === "image" ? (
              <img 
                src={filteredMedia[currentMediaIndex].src} 
                alt={filteredMedia[currentMediaIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            ) : (
              <div className="w-full aspect-video">
                <iframe 
                  src={filteredMedia[currentMediaIndex].src}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{filteredMedia[currentMediaIndex].title}</h3>
              <p className="text-gray-300">{filteredMedia[currentMediaIndex].description}</p>
              <div className="flex justify-center items-center mt-2 text-sm">
                <span className="bg-[var(--gallery-bg-1)] text-white px-2 py-1 rounded capitalize mr-2">
                  {filteredMedia[currentMediaIndex].category}
                </span>
                <span className="flex items-center">
                  {filteredMedia[currentMediaIndex].type === "video" ? <FaVideo className="mr-1" /> : <FaImages className="mr-1" />}
                  {filteredMedia[currentMediaIndex].type}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400">
            {currentMediaIndex + 1} / {filteredMedia.length}
          </div>
        </div>
      )}

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
          background-image: linear-gradient(to right, var(--gallery-bg-1) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--gallery-bg-1) 1px, transparent 1px);
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

export default GalleryZone;