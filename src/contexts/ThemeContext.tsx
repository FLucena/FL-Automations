"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create a separate theme script that will be inserted into the head
// This helps prevent FOUC (flash of unstyled content)
const createThemeScript = () => {
  return `
    (function() {
      try {
        // Check if the theme is stored in localStorage
        const storedTheme = localStorage.getItem('theme');
        // Check if the system prefers dark mode
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Determine which theme to use
        if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (_) {
        // If localStorage is not available, default to system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    })();
  `;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Inject the theme script into the head on the client side
  useEffect(() => {
    // Create and inject the script element
    const scriptEl = document.createElement('script');
    scriptEl.id = 'theme-script';
    scriptEl.innerHTML = createThemeScript();
    
    // Insert the script at the beginning of the head
    const headEl = document.head;
    if (headEl.firstChild) {
      headEl.insertBefore(scriptEl, headEl.firstChild);
    } else {
      headEl.appendChild(scriptEl);
    }
    
    // Clean up function to remove the script when component unmounts
    return () => {
      const existingScript = document.getElementById('theme-script');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  // Initialize theme state from localStorage or system preference
  useEffect(() => {
    try {
      // Try to get theme from localStorage
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      
      if (storedTheme) {
        // If theme is stored in localStorage, use that
        setTheme(storedTheme);
      } else {
        // Otherwise use system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
        
        // Store the system preference in localStorage
        localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
      }
    } catch (error  ) {
      console.error('Error initializing theme:', error);
      // If localStorage is not available, default to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
    
    // Mark as mounted to prevent FOUC
    setMounted(true);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        // Only apply system preference if user hasn't explicitly set a theme
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          setTheme(newTheme);
          document.documentElement.classList.toggle('dark', e.matches);
        }
      } catch (error) {
        console.error('Error updating theme:', error);
        // If localStorage is not available, always follow system preference
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    
    // Add event listener for system preference changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      try {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        
        // Update the classList to apply the theme immediately
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        
        // Store in localStorage
        localStorage.setItem('theme', newTheme);
        
        return newTheme;
      } catch (error) {
        console.error('Error toggling theme:', error);
        // If localStorage is not available, just toggle the theme
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        return newTheme;
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 