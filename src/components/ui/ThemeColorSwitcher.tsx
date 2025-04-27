"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export const ThemeColorSwitcher = () => {
  const { theme } = useTheme();
  
  // Update the meta theme-color when theme changes
  useEffect(() => {
    // Get the theme-color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    // Create it if it doesn't exist
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    // Set the color based on the current theme
    const themeColor = theme === 'dark' ? '#171717' : '#ffffff';
    metaThemeColor.setAttribute('content', themeColor);
  }, [theme]);
  
  // This component doesn't render anything visible
  return null;
};

export default ThemeColorSwitcher; 