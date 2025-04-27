"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, texts: Record<Language, string>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "es" : "en");
  };

  const t = (key: string, texts: Record<Language, string>) => {
    return texts[language] || texts.en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 