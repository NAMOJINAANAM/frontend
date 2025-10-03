'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaPlay, FaStar, FaRocket, FaCalendar, FaGamepad, FaTrophy } from 'react-icons/fa';

interface CTAProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient';
  imagePosition?: 'left' | 'right';
  background?: 'dark' | 'light' | 'gradient';
  showPattern?: boolean;
}

export default function CTA({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  buttonIcon = <FaArrowRight className="w-4 h-4" />,
  variant = 'primary',
  imagePosition = 'right',
  background = 'dark',
  showPattern = true
}: CTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getButtonStyles = () => {
    const baseStyles = "group relative px-8 py-4 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 overflow-hidden flex items-center gap-3 justify-center";
    
    switch (variant) {
      case 'primary':
        return `${baseStyles} bg-[var(--color-primary)] text-black hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(239,249,35,0.6)]`;
      case 'secondary':
        return `${baseStyles} border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black`;
      case 'gradient':
        return `${baseStyles} bg-gradient-to-r from-[var(--color-primary)] to-yellow-400 text-black hover:scale-105 shadow-2xl hover:shadow-[0_0_50px_rgba(239,249,35,0.8)]`;
      default:
        return baseStyles;
    }
  };

  const getBackgroundStyles = () => {
    switch (background) {
      case 'light':
        return 'bg-gradient-to-br from-white to-gray-100 text-gray-900';
      case 'gradient':
        return 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white';
      case 'dark':
      default:
        return 'bg-gradient-to-br from-black via-gray-900 to-black text-white';
    }
  };

  const getPatternStyles = () => {
    if (!showPattern) return 'opacity-0';
    return background === 'light' ? 'opacity-5' : 'opacity-10';
  };

  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${getBackgroundStyles()}`}>
      
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0">
          <div 
            className={`absolute inset-0 ${getPatternStyles()}`}
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 249, 35, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 249, 35, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      )}

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-float3D" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float3D" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Content Side */}
          <div className={`space-y-6 sm:space-y-8 ${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Badge/Subtitle */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/20">
              {React.isValidElement(buttonIcon) ? 
                React.cloneElement(buttonIcon as React.ReactElement, { 
                  className: "text-[var(--color-primary)] text-sm" 
                }) : 
                <FaArrowRight className="text-[var(--color-primary)] text-sm" />
              }
              <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wide">
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title.split(' ').map((word, index, array) => 
                word.toUpperCase() === word || array.length === 1 ? (
                  <span key={index} className="text-[var(--color-primary)]">{word} </span>
                ) : (
                  <span key={index} className={background === 'light' ? 'text-gray-900' : 'text-white'}>{word} </span>
                )
              )}
            </h2>

            {/* Description */}
            <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl ${
              background === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              {description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={buttonLink}
                className={getButtonStyles()}
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-200">
                  {React.isValidElement(buttonIcon) ? 
                    React.cloneElement(buttonIcon as React.ReactElement, { className: "w-4 h-4" }) : 
                    buttonIcon
                  }
                </div>
                
                {/* Shimmer Effect for Gradient Variant */}
                {variant === 'gradient' && (
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                )}
              </Link>

              {/* Secondary Action (Optional) */}
              <button className="group flex items-center gap-3 px-6 py-4 text-lg font-semibold transition-all duration-300">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  background === 'light' 
                    ? 'bg-gray-200 group-hover:bg-[var(--color-primary)]/20' 
                    : 'bg-gray-800 group-hover:bg-[var(--color-primary)]/20'
                } transition-all duration-300`}>
                  <FaPlay className={`w-5 h-5 ${
                    background === 'light' 
                      ? 'text-gray-600 group-hover:text-[var(--color-primary)]' 
                      : 'text-gray-400 group-hover:text-[var(--color-primary)]'
                  } transition-all duration-300`} />
                </div>
                <span className={background === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative ${imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group">
              {/* Main Image Container */}
                {/* Image Placeholder - Replace with actual image */}
                <div className='border-2 rounded-full w-70 h-70 border-[var(--color-primary)] bg-gradient-to-b from-black to-gray-700'>
                {/* <div className="aspect-square w-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-purple-500/10">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaGamepad className="w-8 h-8 text-black" />
                    </div>
                    <p className={background === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                      {image}
                    </p>
                  </div>
                </div> */}
                <img src={image} alt="CTA images" title='CTA image' className='w-full h-full object-contain'/>
              {/* Animated Border */}
     </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% { 
            transform: translate3d(20px, -20px, 20px) scale(1.05);
          }
          66% { 
            transform: translate3d(-15px, 15px, -15px) scale(0.95);
          }
        }
        
        .animate-float3D {
          animation: float3D 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}