"use client";

import { useEffect, useRef } from "react";
import CoinFlip from "@/components/ui/CoinFlip";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { useLanguage } from "@/contexts/LanguageContext";
import Typed from "typed.js";

const Hero = () => {
  const { language } = useLanguage();
  const typedElementEn = useRef<HTMLSpanElement>(null);
  const typedElementEs = useRef<HTMLSpanElement>(null);
  const typedInstanceEn = useRef<Typed | null>(null);
  const typedInstanceEs = useRef<Typed | null>(null);

  useEffect(() => {
    // Initialize Typed.js for English text
    if (typedElementEn.current) {
      typedInstanceEn.current = new Typed(typedElementEn.current, {
        strings: [
          "Software Developer",
          "Automation Engineer",
          "Data Analyst",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: "|",
      });
    }

    // Initialize Typed.js for Spanish text
    if (typedElementEs.current) {
      typedInstanceEs.current = new Typed(typedElementEs.current, {
        strings: [
          "Desarrollador de Software",
          "Ingeniero de Automatización",
          "Analista de Datos",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: "|",
      });
    }

    // Cleanup
    return () => {
      if (typedInstanceEn.current) {
        typedInstanceEn.current.destroy();
      }
      if (typedInstanceEs.current) {
        typedInstanceEs.current.destroy();
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 md:pl-6 lg:pl-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Hello, I'm " : "Hola, soy "}
            <span className="text-accent">Francisco</span>
          </h1>
          
          <div className="flex items-center h-12 mb-6">
            <span className={`typed-text text-2xl md:text-3xl text-gray-700 dark:text-gray-300 ${language === "en" ? "block" : "hidden"}`}>
              <span ref={typedElementEn}></span>
            </span>
            <span className={`typed-text text-2xl md:text-3xl text-gray-700 dark:text-gray-300 ${language === "es" ? "block" : "hidden"}`}>
              <span ref={typedElementEs}></span>
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            {language === "en" 
              ? "I build modern, responsive web applications using the latest technologies and best practices."
              : "Construyo aplicaciones web modernas y responsivas utilizando las últimas tecnologías y mejores prácticas."
            }
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              {language === "en" ? "View Projects" : "Ver Proyectos"}
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              {language === "en" ? "Contact Me" : "Contáctame"}
            </a>
          </div>
        </div>
        
        {/* Right Content - Coin with Profile Picture and Tech Icons */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 relative">
            <CoinFlip profileImage="/square-img.png" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero; 