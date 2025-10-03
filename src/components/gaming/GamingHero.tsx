'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaArrowRight, FaTrophy, FaUsers, FaGamepad, FaStar, FaExpand, FaCompress } from 'react-icons/fa';
import { Gi3dStairs } from "react-icons/gi";

interface GamingHeroProps {
  backgroundMedia?: {
    type: 'image' | 'video';
    src: string;
  };
  title?: string;
  subtitle?: string;
  threeDImage?: string;
}

export default function GamingHero({ 
  backgroundMedia,
  title = "ULTIMATE GAMING EXPERIENCE",
  subtitle = "Immerse yourself in next-generation gaming with cutting-edge technology and competitive tournaments",
  threeDImage = "https://ex-coders.com/html/pubzi/assets/img/home-1/hero/poly-liquid.png"
}: GamingHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [is3DExpanded, setIs3DExpanded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const threeDRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });

      // 3D rotation based on mouse position
      if (threeDRef.current) {
        const rect = threeDRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateY = ((e.clientX - centerX) / rect.width) * 20;
        const rotateX = ((centerY - e.clientY) / rect.height) * 20;
        
        setRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggle3DExpand = () => {
    setIs3DExpanded(!is3DExpanded);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {backgroundMedia ? (
          backgroundMedia.type === 'video' ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={backgroundMedia.src} type="video/mp4" />
              </video>
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
              
              {/* Video Controls */}
              <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                <button
                  onClick={toggleVideoPlayback}
                  className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                >
                  {isVideoPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                >
                  {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
                </button>
              </div>
            </>
          ) : (
            <>
              <img
                src={backgroundMedia.src}
                alt="Gaming Background"
                className="w-full h-full object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </>
          )
        ) : (
          /* Default 3D Animated Background */
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              transform: `perspective(1000px) rotateX(${5 + mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        )}
        
        {/* Animated Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(239, 249, 35, 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content & CTA */}
            <div className="text-center lg:text-left">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">ULTIMATE GAMING EXPERIENCE</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                {subtitle}
              </p>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 gap-4 mb-8 sm:mb-12">
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Tournaments</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Players</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaGamepad className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">100+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Games</div>
                </div>
                <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaStar className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
                  <div className="text-xs sm:text-sm text-gray-300">Rating</div>
                </div>
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/tournaments"
                  className="group relative bg-transparent px-8 sm:px-12 py-4 border border-[var(--color-primary)] sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden w-full sm:w-auto text-center"
                >
                  <div className="absolute inset-0 bg-white/20 border border-[var(--color-primary)] transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-3 justify-center text-[var(--color-primary)]">
                    <FaPlay className="w-5 h-5 " />
                    Explore Games
                    <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side - 3D Image Experience */}
            <div className="relative">

              <div className={`relative transition-all duration-500 ${
                is3DExpanded 
                  ? 'fixed inset-4 sm:inset-8 lg:inset-20 z-50' 
                  : 'w-full'
              }`}>
                <div
                  ref={threeDRef}
                  className="relative rounded-3xl shadow-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/50"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${is3DExpanded ? 1 : 0.95})`,
                    transition: is3DExpanded ? 'transform 0.3s ease' : 'transform 0.1s ease-out',
                    height: is3DExpanded ? 'calc(100vh - 160px)' : '400px'
                  }}
                >
                  {/* 3D Image */}
                  <img
                    src={threeDImage}
                    alt="3D Gaming Arena Experience"
                    className="w-full h-full object-contain"
                    style={{
                      transform: `scale(1.1)`,
                    }}
                  />
                  
                  {/* 3D Overlay Effects */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" /> */}
                  
                  {/* Interactive Hotspots */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[var(--color-primary)] rounded-full animate-ping" />
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                  {/* Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={toggle3DExpand}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                    >
                      {is3DExpanded ? <FaCompress className="w-3 h-3" /> : <FaExpand className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Info Panel */}
                  <div className="absolute bottom-0 sm:bottom-4 left-0 sm:left-4 max-w-xs">
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                      <h3 className="text-white font-bold text-sm mb-1">Gaming Arena</h3>
                      <p className="text-gray-300 text-xs">
                        Explore our premium gaming setup with high-end PCs, VR stations, and tournament-ready equipment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Close button for expanded mode */}
                {is3DExpanded && (
                  <button
                    onClick={toggle3DExpand}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 z-10"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Features under 3D Image */}
              {/* <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="text-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaTrophy className="w-4 h-4 text-[var(--color-primary)] mx-auto mb-1" />
                  <div className="text-white font-bold text-xs">Tournaments</div>
                </div>
                <div className="text-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaUsers className="w-4 h-4 text-[var(--color-primary)] mx-auto mb-1" />
                  <div className="text-white font-bold text-xs">Multiplayer</div>
                </div>
                <div className="text-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <FaStar className="w-4 h-4 text-[var(--color-primary)] mx-auto mb-1" />
                  <div className="text-white font-bold text-xs">Premium</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-float3D" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float3D" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-float3D" style={{ animationDelay: '4s' }} />

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% { 
            transform: translate3d(30px, -30px, 30px) scale(1.1);
          }
          66% { 
            transform: translate3d(-20px, 20px, -20px) scale(0.9);
          }
        }
        
        .animate-float3D {
          animation: float3D 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}