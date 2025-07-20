import { useLanguage } from "@/contexts/LanguageContext";

const AboutContent = () => {
  const { language } = useLanguage();

  return (
    <div className="md:w-1/2">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {language === "en" ? "Who am I?" : "¿Quién soy?"}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {language === "en" 
          ? "I'm a passionate Full-Stack Developer and automation expert with a strong foundation in web technologies. I specialize in creating modern, responsive, and user-friendly web applications."
          : "Soy un Desarrollador Full-Stack apasionado y experto en automatización con una sólida base en tecnologías web. Me especializo en crear aplicaciones web modernas, responsivas y amigables para el usuario."
        }
      </p>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {language === "en"
          ? "With expertise in React, Next.js, Node.js, Express, JavaScript, TypeScript and modern CSS frameworks like Tailwind, I build complete solutions that are not only visually appealing but also performant and accessible."
          : "Con experiencia en React, Next.js, Node.js, Express, JavaScript, TypeScript y frameworks modernos de CSS como Tailwind, construyo soluciones completas que no solo son visualmente atractivas sino también eficientes y accesibles."
        }
      </p>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {language === "en"
          ? "I also specialize in workflow automation using Google Apps Script, VBA, n8n, and AI tools to create efficient solutions that save time and reduce errors."
          : "También me especializo en automatización de flujos de trabajo usando Google Apps Script, VBA, n8n y herramientas de IA para crear soluciones eficientes que ahorran tiempo y reducen errores."
        }
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {language === "en" ? "My Approach" : "Mi Enfoque"}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {language === "en"
          ? "I believe in clean, maintainable code that follows industry best practices. User experience is at the heart of everything I build, ensuring that applications are intuitive and enjoyable to use."
          : "Creo en un código limpio y mantenible que sigue las mejores prácticas de la industria. La experiencia del usuario está en el centro de todo lo que construyo, asegurando que las aplicaciones sean intuitivas y agradables de usar."
        }
      </p>
    </div>
  );
};

export default AboutContent; 