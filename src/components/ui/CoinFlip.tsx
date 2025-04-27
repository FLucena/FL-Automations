"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { coinFlipIcons } from "@/data/techIcons";

interface CoinFlipProps {
  profileImage: string;
}

const CoinFlip = ({ profileImage }: CoinFlipProps) => {
  const coinRef = useRef<HTMLDivElement>(null);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const returnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show hint after a short delay
  useEffect(() => {
    const hintTimeout = setTimeout(() => {
      setShowHint(true);
      
      // Hide hint after a few seconds
      const hideTimeout = setTimeout(() => {
        setShowHint(false);
      }, 3000);
      
      return () => clearTimeout(hideTimeout);
    }, 2000);
    
    return () => clearTimeout(hintTimeout);
  }, []);

  useEffect(() => {
    // Change tech icon automatically every 3 seconds but only when flipped
    const iconInterval = setInterval(() => {
      if (isFlipped && !isAnimating && !isDragging) {
        changeTechIcon();
      }
    }, 3000);

    return () => {
      clearInterval(iconInterval);
      if (returnTimeoutRef.current) {
        clearTimeout(returnTimeoutRef.current);
      }
    };
  }, [isAnimating, isDragging, isFlipped]);

  const changeTechIcon = () => {
    setIsAnimating(true);
    
    // Change the icon
    setCurrentIcon(prev => (prev + 1) % coinFlipIcons.length);
    
    // Animation complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    
    setIsDragging(true);
    
    // Get starting position
    if ('touches' in e) {
      setDragStartX(e.touches[0].clientX);
      setDragStartY(e.touches[0].clientY);
    } else {
      setDragStartX(e.clientX);
      setDragStartY(e.clientY);
    }
    
    // Clear any return timeout
    if (returnTimeoutRef.current) {
      clearTimeout(returnTimeoutRef.current);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    // Calculate new position
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    // Calculate rotation based on drag distance
    const deltaX = clientX - dragStartX;
    const deltaY = clientY - dragStartY;
    
    // Base rotation on current flipped state
    const baseRotateY = isFlipped ? 180 : 0;
    
    // Rotate the coin freely in both axes
    setRotateY(baseRotateY + deltaX * 0.5);
    setRotateX(-deltaY * 0.5); // Invert Y for more intuitive rotation
    
    // Flip the coin if rotation exceeds threshold in either axis
    if (Math.abs(deltaX) > 180 || Math.abs(deltaY) > 180) {
      flipCoin();
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Start return timer
    startReturnToOriginalTimeout();
  };

  const startReturnToOriginalTimeout = () => {
    returnTimeoutRef.current = setTimeout(() => {
      returnToOriginalPosition();
    }, 1000);
  };

  const returnToOriginalPosition = () => {
    setIsAnimating(true);
    
    // Animate back to original position based on flipped state
    setRotateX(0);
    setRotateY(isFlipped ? 180 : 0);
    
    // Animation complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const flipCoin = () => {
    
    if (isAnimating) {
      return;
    }
    
    setIsAnimating(true);
    
    // If we're flipping to the back side, change the tech icon
    if (!isFlipped) {
      // Change to next tech icon
      setCurrentIcon(prev => (prev + 1) % coinFlipIcons.length);
    }
    
    setIsFlipped(!isFlipped);
    
    // Set rotation to properly show flipped/unflipped state
    setRotateX(0);
    setRotateY(!isFlipped ? 180 : 0);
    
    // After flip animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleClick = () => {
    // Disable custom double-click detection since we're using the native one
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isAnimating) {
      return;
    }
    
    flipCoin();
  };

  return (
    <div className="coin-flip-container perspective-500 w-full h-full">
      <div
        ref={coinRef}
        className={`coin-flip relative w-full h-full rounded-full transform-style-3d transition-transform duration-500 cursor-pointer ${
          showHint ? "animate-pulse" : ""
        } hover:scale-105 hover:shadow-xl`}
        style={{ 
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isDragging ? "none" : "transform 0.5s ease, box-shadow 0.3s ease"
        }}
        data-is-flipped={isFlipped}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            flipCoin();
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        aria-label="Double click or drag to flip coin and see tech icons"
      >
        {/* Front - Profile Picture */}
        <div className="coin-face absolute w-full h-full rounded-full backface-hidden flex items-center justify-center bg-white dark:bg-gray-700 p-2 shadow-lg overflow-hidden">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Francisco Lucena"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="object-cover w-auto h-auto"
              onError={(e) => {
                // Apply fallback via CSS since we can't directly change the src in Next Image
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('bg-gray-300', 'dark:bg-gray-600', 'flex', 'items-center', 'justify-center');
                const placeholder = document.createElement('div');
                placeholder.className = 'text-lg font-medium text-gray-500 dark:text-gray-400';
                placeholder.innerText = 'Francisco Lucena';
                target.parentElement!.appendChild(placeholder);
              }}
            />
          ) : (
            <div className="bg-gray-300 dark:bg-gray-600 flex items-center justify-center w-full h-full rounded-full">
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                Francisco Lucena
              </span>
            </div>
          )}
        </div>
        
        {/* Back - Tech Icon */}
        <div className="coin-face-back absolute w-full h-full rounded-full backface-hidden rotate-y-180 flex items-center justify-center bg-white dark:bg-gray-700 p-2 shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={coinFlipIcons[currentIcon]?.url || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'} // Transparent fallback
              alt={coinFlipIcons[currentIcon]?.name || 'Technology icon'}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-contain p-10 w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-500 {
          perspective: 500px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default CoinFlip; 