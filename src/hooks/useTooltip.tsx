import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export const useTooltip = () => {
  const Tooltip = ({ label, children }: TooltipProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipRoot, setTooltipRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
      const root = document.createElement('div');
      root.style.position = 'fixed';
      root.style.top = '0';
      root.style.left = '0';
      root.style.width = '100%';
      root.style.height = '100%';
      root.style.zIndex = '99999';
      root.style.pointerEvents = 'none';
      document.body.appendChild(root);
      setTooltipRoot(root);

      return () => {
        document.body.removeChild(root);
      };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      // Only update position if the event target is the direct container
      if (e.currentTarget === e.target || e.currentTarget.contains(e.target as Node)) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      // Only show tooltip if hovering the direct container
      if (e.currentTarget === e.target || e.currentTarget.contains(e.target as Node)) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    return (
      <div 
        className="relative inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
        {isVisible && tooltipRoot && createPortal(
          <div 
            className="fixed px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-xs rounded pointer-events-none whitespace-nowrap transition-opacity duration-150 shadow-lg"
            style={{
              left: mousePosition.x + 10,
              top: mousePosition.y - 30,
            }}
            role="tooltip"
            aria-hidden="true"
          >
            {label}
          </div>,
          tooltipRoot
        )}
      </div>
    );
  };

  return { Tooltip };
};

export default useTooltip; 