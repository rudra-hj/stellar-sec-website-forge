
import React, { useEffect, useState } from 'react';
import ThreeCanvas from './ThreeCanvas';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface GooeyHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
}

export const GooeyHero: React.FC<GooeyHeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaAction,
  secondaryCtaText,
  secondaryCtaAction,
}) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // Ensure the component is mounted before rendering Three.js
  // This avoids hydration mismatch errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll handler for the "Scroll down" button
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-cybersec-dark z-0"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content - now on the left side */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {subtitle}
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {ctaText && (
                <Button 
                  size="lg" 
                  onClick={ctaAction}
                  className="px-8"
                >
                  {ctaText}
                </Button>
              )}
              
              {secondaryCtaText && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={secondaryCtaAction}
                  className="px-8 border-white/20 hover:bg-white/10"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          
          {/* Gooey Cell Canvas - now on the right side */}
          {mounted && (
            <div className="w-full md:w-1/2 aspect-square relative z-10">
              <ThreeCanvas className="w-full h-full rounded-full" />
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={handleScroll}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            className="animate-bounce w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default GooeyHero;
