"use client";

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        {/* Simple bouncing text */}
        <div className="text-2xl font-bold text-[var(--color-primary)] animate-bounce-quick">
          FZ
        </div>
        
        {/* Quick loading dots */}
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-dot-quick-1"></div>
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-dot-quick-2"></div>
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-dot-quick-3"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-quick {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes dot-quick-1 {
          0%, 100% { opacity: 0.3; }
          33% { opacity: 1; }
        }
        
        @keyframes dot-quick-2 {
          0%, 100% { opacity: 0.3; }
          66% { opacity: 1; }
        }
        
        @keyframes dot-quick-3 {
          0%, 100% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        .animate-bounce-quick {
          animation: bounce-quick 0.6s ease-in-out infinite;
        }
        
        .animate-dot-quick-1 {
          animation: dot-quick-1 1s ease-in-out infinite;
        }
        
        .animate-dot-quick-2 {
          animation: dot-quick-2 1s ease-in-out infinite;
        }
        
        .animate-dot-quick-3 {
          animation: dot-quick-3 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}