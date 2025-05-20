import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { techIcons } from "@/data/techIcons";
import useTooltip from "@/hooks/useTooltip";

const SkillsSection = () => {
  const { language } = useLanguage();
  const { Tooltip } = useTooltip();

  return (
    <div className="md:w-1/2">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {language === "en" ? "Skills & Expertise" : "Habilidades y Experiencia"}
      </h3>
      
      <div className="flex gap-4 mb-6">
        <div className="w-1/2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">Front End</h4>
          <ul className="text-gray-900 dark:text-white space-y-1">
            {[
              { icon: techIcons.react, name: "React.js" },
              { icon: techIcons.nextjs, name: "Next.js" },
              { icon: techIcons.vite, name: "Vite" },
              { icon: techIcons.javascript, name: "JavaScript" },
              { icon: techIcons.typescript, name: "TypeScript" },
              { icon: techIcons.flutter, name: "Flutter" },
              { icon: techIcons.html5, name: "HTML5" },
              { icon: techIcons.css3, name: "CSS3" },
              { icon: techIcons.tailwind, name: "Tailwind" },
              { icon: techIcons.bootstrap, name: "Bootstrap" },
            ].map((tech, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div className="flex items-center text-sm">
                  <Tooltip label={tech.icon.name}>
                    <Image
                      src={tech.icon.icon}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="mr-1 object-contain dark:invert-0"
                    />
                  </Tooltip>
                  {tech.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-1/2">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm mb-4">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">
              {language === "en" ? "Back End" : "Back End"}
            </h4>
            <ul className="text-gray-900 dark:text-white space-y-1">
              {[
                { icon: techIcons.nodejs, name: "Node.js" },
                { icon: techIcons.express, name: "Express" },
                { icon: techIcons.django, name: "Django" },
                { icon: techIcons.python, name: "Python" },
              ].map((tech, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="flex items-center text-sm">
                    <Tooltip label={tech.icon.name}>
                      <Image
                        src={tech.icon.icon}
                        alt={tech.name}
                        width={14}
                        height={14}
                        className="mr-1 object-contain"
                      />
                    </Tooltip>
                    {tech.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">
              {language === "en" ? "Other Skills" : "Otras Habilidades"}
            </h4>
            <ul className="text-gray-900 dark:text-white space-y-1">
              {[
                { icon: techIcons.figma, name: "UI/UX Design" },
                { icon: techIcons.appsscript, name: "Apps Script" },
                { icon: techIcons.vba, name: "VBA" },
              ].map((tech, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="flex items-center text-sm">
                    <Tooltip label={tech.icon.name}>
                      <Image
                        src={tech.icon.icon}
                        alt={tech.name}
                        width={12}
                        height={12}
                        className="mr-1 object-contain"
                      />
                    </Tooltip>
                    {tech.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 