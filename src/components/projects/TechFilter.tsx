"use client";

import { availableTechTags, techIcons } from "@/data/techIcons";
import useTooltip from "@/hooks/useTooltip";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TechFilterProps {
  activeTechFilters: string[];
  toggleTechFilter: (tech: string) => void;
}

const TechFilter = ({ activeTechFilters, toggleTechFilter }: TechFilterProps) => {
  const { Tooltip } = useTooltip();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Check if scrolling is needed and update indicators
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleResize = () => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [activeTechFilters]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust scroll speed
    setDragDistance(Math.abs(walk));
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragDistance < 5) { // If drag distance is very small, treat it as a click
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (button) {
        const tech = button.getAttribute('data-tech');
        if (tech) {
          toggleTechFilter(tech);
        }
      }
    }
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - containerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + containerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault(); // Prevent default scrolling behavior
      if (e.key === 'ArrowLeft') {
        handleScrollLeft();
      } else {
        handleScrollRight();
      }
    }
  };

  // Focus the container when it's clicked
  const handleClick = () => {
    containerRef.current?.focus();
  };

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        tabIndex={0}
      >
        {availableTechTags.map((tech) => {
          const techIcon = techIcons[tech];
          if (!techIcon) return null;
          
          return (
            <Tooltip key={tech} label={techIcon.name}>
              <button
                data-tech={tech}
                onClick={(e) => {
                  if (dragDistance >= 5) {
                    e.preventDefault();
                    return;
                  }
                }}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                  transition-colors duration-200
                  ${activeTechFilters.includes(tech)
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }
                  snap-start
                `}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="relative w-6 h-6">
                    <Image
                      src={techIcon.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                      alt={techIcon.name || 'Technology icon'}
                      width={24}
                      height={24}
                      className="object-contain w-auto h-auto"
                    />
                  </div>
                </div>
              </button>
            </Tooltip>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={handleScrollLeft}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
          p-2 rounded-full bg-white dark:bg-gray-800 shadow-md
          ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
          transition-opacity duration-200
        `}
        disabled={!canScrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleScrollRight}
        className={`
          absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
          p-2 rounded-full bg-white dark:bg-gray-800 shadow-md
          ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
          transition-opacity duration-200
        `}
        disabled={!canScrollRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TechFilter;