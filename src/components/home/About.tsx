"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { techIcons } from "@/data/techIcons";
import useTooltip from "@/hooks/useTooltip";

const About = () => {
  const { language } = useLanguage();
  const { Tooltip } = useTooltip();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {language === "en" ? "About Me" : "Sobre Mí"}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {language === "en" ? "Who am I?" : "¿Quién soy?"}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {language === "en" 
                ? "I'm a passionate Front-End Developer and automation expert with a strong foundation in web technologies. I specialize in creating modern, responsive, and user-friendly web applications."
                : "Soy un Desarrollador Front-End apasionado y experto en automatización con una sólida base en tecnologías web. Me especializo en crear aplicaciones web modernas, responsivas y amigables para el usuario."
              }
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {language === "en"
                ? "With expertise in React, Next.js, JavaScript, TypeScript and modern CSS frameworks like Tailwind, I build solutions that are not only visually appealing but also performant and accessible."
                : "Con experiencia en React, Next.js, JavaScript, TypeScript y frameworks modernos de CSS como Tailwind, construyo soluciones que no solo son visualmente atractivas sino también eficientes y accesibles."
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
          
          <div className="md:w-1/2">
            {/* Skills Section */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {language === "en" ? "Skills & Expertise" : "Habilidades y Experiencia"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">Front End</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.react.name}>
                        <Image
                          src={techIcons.react.icon}
                          alt="React"
                          width={14}
                          height={14}
                          className="mr-1 object-contain w-auto h-auto"
                        />
                      </Tooltip>
                      React.js
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.nextjs.name}>
                        <Image
                          src={techIcons.nextjs.icon}
                          alt="Next.js"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Next.js
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.vite.name}>
                        <Image
                          src={techIcons.vite.icon}
                          alt="Vite"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Vite
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.javascript.name}>
                        <Image
                          src={techIcons.javascript.icon}
                          alt="JavaScript"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      JavaScript
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.typescript.name}>
                        <Image
                          src={techIcons.typescript.icon}
                          alt="TypeScript"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      TypeScript
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.html5.name}>
                        <Image
                          src={techIcons.html5.icon}
                          alt="HTML"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      HTML5
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.css3.name}>
                        <Image
                          src={techIcons.css3.icon}
                          alt="CSS"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      CSS3
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.tailwind.name}>
                        <Image
                          src={techIcons.tailwind.icon}
                          alt="Tailwind"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Tailwind
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.bootstrap.name}>
                        <Image
                          src={techIcons.bootstrap.icon}
                          alt="Bootstrap"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Bootstrap
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">
                  {language === "en" ? "Back End" : "Back End"}
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.nodejs.name}>
                        <Image
                          src={techIcons.nodejs.icon}
                          alt="Node.js"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Node.js
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.express.name}>
                        <Image
                          src={techIcons.express.icon}
                          alt="Express"
                          width={14}
                          height={14}
                          className="mr-1 object-contain invert dark:invert-0" 
                        />
                      </Tooltip>
                      Express
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.django.name}>
                        <Image
                          src={techIcons.django.icon}
                          alt="Django"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Django
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.python.name}>
                        <Image
                          src={techIcons.python.icon}
                          alt="Python"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Python
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">
                  {language === "en" ? "Other Skills" : "Otras Habilidades"}
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.flutter.name}>
                        <Image
                          src={techIcons.flutter.icon}
                          alt="Flutter"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Flutter
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.figma.name}>
                        <Image
                          src={techIcons.figma.icon}
                          alt="UI/UX"
                          width={14}
                          height={14}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      UI/UX Design
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.appsscript.name}>
                        <Image
                          src={techIcons.appsscript.icon}
                          alt="Apps Script"
                          width={12}
                          height={12}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      Apps Script
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center text-xs">
                      <Tooltip label={techIcons.vba.name}>
                        <Image
                          src={techIcons.vba.icon}
                          alt="VBA"
                          width={12}
                          height={12}
                          className="mr-1 object-contain"
                        />
                      </Tooltip>
                      VBA
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experience */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {language === "en" ? "Experience" : "Experiencia"}
            </h3>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {language === "en" ? "Fiverr Freelancer" : "Freelancer en Fiverr"}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 