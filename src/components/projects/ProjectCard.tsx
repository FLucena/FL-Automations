"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { techIcons } from "@/data/techIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import useTooltip from "@/hooks/useTooltip";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const { Tooltip } = useTooltip();

  return (
    <div
      className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer md:h-auto h-[420px]"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Open ${project.title} project details`}
    >
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-5 text-sm line-clamp-3">
          {project.description[language]}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 5).map((tech) => {
            // Normalize tech name to match techIcons keys
            const normalizedTech = tech === 'css' ? 'css3' : 
                                 tech === 'html' ? 'html5' : 
                                 tech;
            const techIcon = techIcons[normalizedTech];
            
            return (
              <Tooltip 
                key={tech} 
                label={techIcon?.name || tech} 
              >
                <div 
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 flex items-center justify-center"
                >
                  <Image 
                    src={techIcon?.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                    alt={techIcon?.name || tech}
                    className="w-auto h-auto object-contain"
                    width={20}
                    height={20}
                  />
                </div>
              </Tooltip>
            );
          })}
          
          {project.technologies.length > 5 && (
            <Tooltip label={`${project.technologies.length - 5} more technologies`}>
              <div 
                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-medium text-black">
                  +{project.technologies.length - 5}
                </span>
              </div>
            </Tooltip>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {language === "en" ? "Visit Site" : "Visitar Sitio"}
          </a>
          
          <button
            className={`view-details-btn flex items-center text-sm ${
              isHovered ? "text-accent" : "text-gray-500"
            } transition-colors`}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {language === "en" ? "Details" : "Detalles"}
            <svg
              className={`ml-1 w-4 h-4 transform transition-transform ${
                isHovered ? "translate-x-1" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 