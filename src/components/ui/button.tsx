'use client';

import { useState, useEffect, ButtonHTMLAttributes } from 'react';
import Link from "next/link";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg'|'xl';
  isLoading?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  href?:string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  icon: Icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4';

  // Variants
  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-flame-red)] text-white hover:from-[var(--color-flame-red)] hover:to-[var(--color-purple)] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[var(--color-purple)]/30',
    secondary: 'bg-[var(--color-gold)] text-[var(--color-black)] hover:bg-[var(--color-flame-orange)] hover:text-white hover:shadow-md focus:ring-[var(--color-gold)]/30',
    outline: 'border-2 border-[var(--color-purple)] text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white focus:ring-[var(--color-purple)]/30',
    ghost: 'text-[var(--color-purple)] hover:bg-[var(--color-purple)]/10 focus:ring-[var(--color-purple)]/20',
    danger: 'bg-[var(--color-flame-red)] text-white hover:bg-[var(--color-flame-orange)] hover:shadow-md focus:ring-[var(--color-flame-red)]/30'
  };

  // Sizes
  const sizes: Record<string, string> = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8'
  };

  // Icon sizes
  const iconSizes: Record<string, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  // Disabled state
  const disabledClasses = disabled || isLoading ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-none' : '';

  // Animation classes
  const animationClass = isMounted ? 'animate-fade-in' : 'opacity-0';

  return (
    <Link href={`${href}`}>
    <button
      className={`cursor-pointer ${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${animationClass} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <svg
          className={`animate-spin -ml-1 mr-2 ${iconSizes[size]}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {/* Left icon */}
      {!isLoading && Icon && iconPosition === 'left' && (
        <Icon className={`mr-2 ${iconSizes[size]}`} />
      )}

      {/* Button text */}
      {children}

      {/* Right icon */}
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className={`ml-2 ${iconSizes[size]}`} />
      )}
    </button>
    </Link>
  );
};

export default Button;