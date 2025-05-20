import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { language } = useLanguage();

  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {language === "en" ? "Experience" : "Experiencia"}
      </h3>
      
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-gray-800 dark:text-white">
              {language === "en" ? "Fiverr Freelancer" : "Freelancer en Fiverr"}
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">2021 - Present</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-2">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">4.9/5</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {language === "en" ? "Over 1300 completed projects" : "Más de 1300 proyectos completados"}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {language === "en"
              ? "Delivering high-quality web development and automation solutions on Fiverr, with consistently excellent client reviews."
              : "Entregando soluciones de desarrollo web y automatización de alta calidad en Fiverr, con reseñas excelentes de clientes de manera consistente."
            }
          </p>
          <a 
            href="https://www.fiverr.com/s/gD2LRP9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm inline-flex items-center mt-2"
          >
            {language === "en" ? "View Fiverr Profile" : "Ver Perfil de Fiverr"}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection; 