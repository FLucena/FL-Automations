"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFoundClient() {
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        {language === "en" ? "Page Not Found" : "Página No Encontrada"}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        {language === "en" 
          ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          : "La página que estás buscando puede haber sido eliminada, renombrada o no está disponible temporalmente."}
      </p>
      <Link 
        href="/" 
        className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
      >
        {language === "en" ? "Go back home" : "Volver al inicio"}
      </Link>
    </div>
  );
} 