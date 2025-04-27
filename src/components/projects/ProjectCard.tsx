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
      className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Open ${project.title} project details`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm h-12 overflow-hidden">
          {project.description[language]}
        </p>
        
        <div className="tech-tags flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <div 
              key={tech}
              className="tech-tag flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1"
            >
              <Tooltip label={techIcons[tech]?.name} position="top">
                <div className="flex items-center">
                  <Image 
                    src={techIcons[tech]?.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                    alt={techIcons[tech]?.name || 'Technology icon'}
                    className="mr-1 w-4 h-4 object-contain"
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-gray-700 dark:text-gray-300">
                    {techIcons[tech]?.name}
                  </span>
                </div>
              </Tooltip>
            </div>
          ))}
          
          {project.technologies.length > 3 && (
            <Tooltip label={`${project.technologies.length - 3} more technologies`}>
              <div className="tech-tag bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  +{project.technologies.length - 3}
                </span>
              </div>
            </Tooltip>
          )}
        </div>
        
        <div className="flex justify-between items-center">
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
              isHovered ? "text-accent" : "text-gray-500 dark:text-gray-400"
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