'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaMap, FaArrowRight } from 'react-icons/fa';

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showMap, setShowMap] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      
      {/* Animated Background - Reduced effect on mobile */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-3 sm:opacity-5 md:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '20px 20px' : '40px 40px',
            transform: isMobile 
              ? 'none' 
              : `perspective(500px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20 mb-3 sm:mb-4">
            <FaMapMarkerAlt className="text-[var(--color-primary)] text-xs sm:text-sm md:text-base" />
            <span className="text-[var(--color-primary)] text-xs sm:text-sm md:text-base font-semibold">
              Contact & Location
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            GET IN <span className="text-[var(--color-primary)]">TOUCH</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Have questions or want to make a reservation? We'd love to hear from you and help plan your experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/50 shadow-xl sm:shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[var(--color-primary)] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 border-2 border-black shadow-[0_2px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:scale-95 flex items-center justify-center gap-2 sm:gap-3 group/btn"
                >
                  <FaPaperPlane className="w-4  h-4 sm:w-5 sm:h-5 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>

          {/* Address & Map - Right Side */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/50 shadow-xl sm:shadow-2xl h-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Visit Our Venue
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">Address</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      123 Entertainment Avenue<br />
                      Times Square, New York, NY 10036
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">Phone</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">Email</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      info@funzone.com<br />
                      reservations@funzone.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">Hours</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      Mon-Thu: 10AM-10PM<br />
                      Fri-Sat: 10AM-Midnight<br />
                      Sun: 11AM-8PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Toggle Button */}
              <button
                onClick={() => setShowMap(!showMap)}
                className="w-full border-2 cursor-pointer border-[var(--color-primary)] text-[var(--color-primary)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group/btn"
              >
                <FaMap className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/btn:scale-110 transition-transform duration-200" />
                <span className="whitespace-nowrap">{showMap ? 'Hide Map' : 'Show Map Directions'}</span>
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Map Container - Shown when toggled */}
              {showMap && (
                <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg sm:shadow-2xl transform transition-all duration-500">
                  <div className="h-48 sm:h-64 md:h-80 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621581789363!2d-74.005942748374!3d40.71274937922715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1233dd7b6b%3A0x5bc84684c4be83!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1632931234567!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Venue Location"
                      className="filter grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
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

        /* Improve touch experience on mobile */
        @media (max-width: 640px) {
          button, a {
            -webkit-tap-highlight-color: transparent;
          }
          
          input, textarea {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </section>
  );
}