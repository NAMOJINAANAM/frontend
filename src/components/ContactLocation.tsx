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
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
            <FaMapMarkerAlt className="text-[var(--color-primary)] text-sm sm:text-base" />
            <span className="text-[var(--color-primary)] text-sm sm:text-base font-semibold">Contact & Location</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            GET IN <span className="text-[var(--color-primary)]">TOUCH</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have questions or want to make a reservation? We'd love to hear from you and help plan your experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 border-2 border-black shadow-[0_3px_0_rgba(0,0,0,1)] hover:shadow-[0_5px_0_rgba(0,0,0,1)] active:scale-95 flex items-center justify-center gap-3 group/btn"
                >
                  <FaPaperPlane className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>

          {/* Address & Map - Right Side */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Visit Our Venue</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      123 Entertainment Avenue<br />
                      Times Square, New York, NY 10036
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Phone</h4>
                    <p className="text-gray-300 leading-relaxed">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Email</h4>
                    <p className="text-gray-300 leading-relaxed">
                      info@funzone.com<br />
                      reservations@funzone.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300 group">
                  <div className="bg-[var(--color-primary)] text-black p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Hours</h4>
                    <p className="text-gray-300 leading-relaxed">
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
                className="w-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group/btn"
              >
                <FaMap className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform duration-200" />
                <span>{showMap ? 'Hide Map' : 'Show Map Directions'}</span>
                <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Map Container - Shown when toggled */}
              {showMap && (
                <div className="mt-6 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transform transition-all duration-500">
                  <div className="h-80 w-full">
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

        {/* Additional CTA */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <Link
              href="/reservations"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-primary)] to-yellow-400 text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(239,249,35,0.6)]"
            >
              <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Make a Reservation</span>
            </Link>
            <Link
              href="/directions"
              className="inline-flex items-center gap-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300"
            >
              <FaMap className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Get Directions</span>
            </Link>
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
      `}</style>
    </section>
  );
}