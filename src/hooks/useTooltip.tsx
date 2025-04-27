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
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-1",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-1",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-1",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-1"
    };

    return (
      <div className="relative inline-flex group/tooltip">
        {children}
        <div 
          className={`absolute ${positionClasses[position]} px-2 py-1 bg-gray-900 text-white text-xs rounded pointer-events-none whitespace-nowrap z-50 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-150`}
          role="tooltip"
          aria-hidden="true"
        >
          {label}
          <div 
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
              position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
              position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
              'left-[-4px] top-1/2 -translate-y-1/2'
            }`}
          />
        </div>
      </div>
    );
  };

  return { Tooltip };
};

export default useTooltip; 