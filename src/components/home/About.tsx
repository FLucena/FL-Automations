"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { techIcons } from "@/data/techIcons";

const About = () => {
  const { language } = useLanguage();

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
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Front End</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.nextjs.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="Next.js"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      React.js / Next.js
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.typescript.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="TypeScript"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      JavaScript / TypeScript
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.html.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="HTML"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      HTML5 / CSS3
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.tailwind.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="Tailwind"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Tailwind CSS
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  {language === "en" ? "Back End" : "Back End"}
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt="Node.js"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Node.js
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                        alt="Express"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Express
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                        alt="Django"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Django
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.python.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="Python"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Python
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                  {language === "en" ? "Other Skills" : "Otras Habilidades"}
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src={techIcons.flutter.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt="Flutter"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      Flutter
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        alt="UI/UX"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      UI/UX Design
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center">
                      <Image
                        src="https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png"
                        alt="Apps Script"
                        width={16}
                        height={16}
                        className="mr-1 object-contain"
                      />
                      {language === "en" ? "Automation (Apps Script, VBA)" : "Automatización (Apps Script, VBA)"}
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