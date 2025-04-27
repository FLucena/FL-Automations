"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeColorSwitcher from "@/components/ui/ThemeColorSwitcher";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { mounted } = useTheme();
  
  // Prevents flash of unstyled content during theme initialization
  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeColorSwitcher />
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 