import { useLanguage } from "@/contexts/LanguageContext";

const AboutHeader = () => {
  const { language } = useLanguage();

  return (
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
      {language === "en" ? "About Me" : "Sobre Mí"}
    </h2>
  );
};

export default AboutHeader; 