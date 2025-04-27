"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsHidden(scrollY > 100);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`scroll-indicator fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${
        isHidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      aria-hidden="true"
    >
      <div className="text-gray-600 dark:text-gray-300 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator; 