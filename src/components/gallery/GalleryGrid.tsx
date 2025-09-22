'use client';

import { useState } from "react";
import { FaHeart, FaShare, FaExpand, FaDownload } from "react-icons/fa";
type GalleryFilterProps = {
  activeFilter: string; 
};
const GalleryGrid: React.FC<GalleryFilterProps> = ({ activeFilter }) => {
  type GalleryImage = {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
  likes: number;
  shares: number;
};

const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "gaming",
      title: "VR Gaming Tournament",
      description: "Players competing in our annual VR championship",
      likes: 128,
      shares: 45
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "food",
      title: "Gourmet Burger Feast",
      description: "Our signature double cheeseburger with truffle fries",
      likes: 215,
      shares: 67
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "celebrations",
      title: "Birthday Celebration",
      description: "Sarah's 10th birthday party at our venue",
      likes: 189,
      shares: 52
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "gaming",
      title: "Arcade Champions",
      description: "Winners of our arcade game tournament",
      likes: 172,
      shares: 38
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "food",
      title: "Wood-Fired Pizza",
      description: "Freshly made pizza from our stone oven",
      likes: 243,
      shares: 89
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "celebrations",
      title: "Corporate Event",
      description: "Tech company team-building event",
      likes: 156,
      shares: 41
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "food",
      title: "Dessert Platter",
      description: "Our popular dessert sharing platter",
      likes: 278,
      shares: 94
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "celebrations",
      title: "Graduation Party",
      description: "Celebrating Mark's university graduation",
      likes: 201,
      shares: 63
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "celebrations",
      title: "Kids Birthday Party",
      description: "Fun-filled birthday celebration",
      likes: 194,
      shares: 57
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "food",
      title: "Crispy Chicken Wings",
      description: "Our signature spicy buffalo wings",
      likes: 226,
      shares: 71
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "gaming",
      title: "VR Experience",
      description: "Customers enjoying our latest VR game",
      likes: 167,
      shares: 44
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "gaming",
      title: "Racing Simulators",
      description: "Professional racing simulators with motion seats",
      likes: 198,
      shares: 59
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item:any) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery-grid" className="py-16 bg-gradient-to-b from-[var(--gallery-bg-1)] to-[var(--gallery-bg-2)]">
      <div className="container mx-auto px-4">
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="mb-4 break-inside-avoid group cursor-pointer">
              <div className="overflow-hidden rounded-2xl border-2 border-[var(--gallery-border-2)] hover:border-[var(--gallery-text-1)] transition-all duration-300">
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    onClick={() => openLightbox(item)}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--gallery-bg-1)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-sm md:text-base mb-1 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-xs md:text-sm drop-shadow-md line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button className="text-white/80 hover:text-[var(--gallery-text-1)] transition-colors">
                          <FaHeart className="text-sm" />
                          <span className="text-xs ml-1">{item.likes}</span>
                        </button>
                        <button className="text-white/80 hover:text-[var(--gallery-text-1)] transition-colors">
                          <FaShare className="text-sm" />
                          <span className="text-xs ml-1">{item.shares}</span>
                        </button>
                      </div>
                      <button 
                        className="text-white/80 hover:text-[var(--gallery-text-1)] transition-colors"
                        onClick={() => openLightbox(item)}
                      >
                        <FaExpand className="text-sm" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[var(--gallery-border-1)] text-[var(--gallery-bg-1)] px-2 py-1 rounded text-xs font-bold capitalize">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && selectedImage && (
          <div className="fixed inset-0 bg-[var(--gallery-bg-1)]/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="max-w-4xl w-full max-h-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="bg-[var(--gallery-bg-2)] rounded-2xl overflow-hidden border-2 border-[var(--gallery-border-1)]">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--gallery-text-1)] mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-[var(--gallery-text-2)]">
                        {selectedImage.description}
                      </p>
                    </div>
                    <div className="bg-[var(--gallery-border-1)] text-[var(--gallery-bg-1)] px-3 py-1 rounded-full text-sm font-bold capitalize">
                      {selectedImage.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[var(--gallery-text-2)]">
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-[var(--gallery-text-1)]" />
                        <span>{selectedImage.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaShare className="text-[var(--gallery-text-1)]" />
                        <span>{selectedImage.shares} shares</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-[var(--gallery-border-1)] text-[var(--gallery-bg-1)] rounded-lg hover:bg-[var(--gallery-text-1)] transition-colors">
                        <FaDownload />
                      </button>
                      <button className="p-2 bg-[var(--gallery-border-1)] text-[var(--gallery-bg-1)] rounded-lg hover:bg-[var(--gallery-text-1)] transition-colors">
                        <FaShare />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="absolute top-4 right-4 text-[var(--gallery-text-1)] text-3xl bg-[var(--gallery-bg-2)]/30 p-2 rounded-full backdrop-blur-sm hover:bg-[var(--gallery-border-1)] transition-colors"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;