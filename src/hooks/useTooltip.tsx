import React from 'react';

interface TooltipProps {
  label: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

export const useTooltip = () => {
  const Tooltip = ({ label, position = 'top', children }: TooltipProps) => {
    // Positioning classes based on position
    const positionClasses = {
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
    };

    return (
      <div className="relative group">
        {children}
        <div 
          className={`absolute ${positionClasses[position]} px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg`}
          style={{ transitionDuration: '200ms' }}
        >
          {label}
        </div>
      </div>
    );
  };

  return { Tooltip };
};

export default useTooltip; 