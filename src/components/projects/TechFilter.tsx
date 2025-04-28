"use client";

import { availableTechTags, techIcons } from "@/data/techIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import useTooltip from "@/hooks/useTooltip";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TechFilterProps {
  activeTechFilters: string[];
  toggleTechFilter: (tech: string) => void;
}

const TechFilter = ({ activeTechFilters, toggleTechFilter }: TechFilterProps) => {
  const { language } = useLanguage();
  const { Tooltip } = useTooltip();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("start");

  // Check if scrolling is needed and update indicators
  useEffect(() => {
    const checkScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
      setShowScrollIndicator(hasHorizontalScroll);
      
      // Update scroll position
      if (container.scrollLeft <= 10) {
        setScrollPosition("start");
      } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        setScrollPosition("end");
      } else {
        setScrollPosition("middle");
      }
    };
    
    // Check on mount and whenever the container might change
    checkScroll();
    
    // Check on window resize
    window.addEventListener('resize', checkScroll);
    
    // The container to listen for scroll events
    const currentContainer = scrollContainerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('scroll', checkScroll);
    }
    
    return () => {
      window.removeEventListener('resize', checkScroll);
      if (currentContainer) {
        currentContainer.removeEventListener('scroll', checkScroll);
      }
    };
  }, [activeTechFilters]);

  return (
    <div className="tech-filter relative">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {language === "en" ? "Filter by technology:" : "Filtrar por tecnología:"}
      </h3>
      
      <div 
        ref={scrollContainerRef}
        className="filter-tags-container flex gap-3 overflow-x-auto md:flex-wrap scrollbar-hide pb-2"
      >
        {availableTechTags.map((tech) => (
          <Tooltip key={tech} label={techIcons[tech].name}>
            <button
              onClick={() => toggleTechFilter(tech)}
              className={`filter-tag flex-shrink-0 flex items-center justify-center rounded-lg p-2 transition-all ${
                activeTechFilters.includes(tech)
                  ? "bg-accent text-white shadow-md"
                  : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              aria-label={`${language === "en" ? "Filter by" : "Filtrar por"} ${techIcons[tech].name}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <Image
                    src={techIcons[tech].icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                    alt={techIcons[tech].name || 'Technology icon'}
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
              </div>
            </button>
          </Tooltip>
        ))}
      </div>
      
      {/* Scroll indicators */}
      {showScrollIndicator && (
        <>
          <div 
            className={`md:hidden absolute left-0 top-1/2 h-8 w-8 transform -translate-y-1/2 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent pointer-events-none transition-opacity duration-300 ${
              scrollPosition === "start" ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />
          <div 
            className={`md:hidden absolute right-0 top-1/2 h-8 w-8 transform -translate-y-1/2 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent pointer-events-none transition-opacity duration-300 ${
              scrollPosition === "end" ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true" 
          />
        </>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default TechFilter; 