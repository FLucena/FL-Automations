"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import { techIcons } from "@/data/techIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import useTooltip from "@/hooks/useTooltip";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string) {
  // Handles both youtu.be and youtube.com links
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const { Tooltip } = useTooltip();

  useEffect(() => {
    // Handle keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Handle clicks outside the modal
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add event listeners
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      
      // Disable body scroll
      document.body.style.overflow = "hidden";
    }

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      
      // Re-enable body scroll
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity">
      <div
        ref={modalRef}
        className={`modal-content bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex ${project.video ? 'flex-col md:flex-row' : 'flex-col'}`}
      >
        {/* Project Details (Left) */}
        <div className={`modal-body flex-1 overflow-y-auto p-6 md:p-8 ${project.video ? 'md:w-1/2' : 'w-full'}`}>
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-6 text-sm">
              {project.description[language]}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              {language === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}
            </h3>
            
            <div className="tech-tags flex flex-wrap gap-4 mb-4 relative z-0">
              {project.technologies.map((tech) => {
                return (
                  <Tooltip 
                    key={tech} 
                    label={techIcons[tech]?.name || tech}
                  >
                    <div 
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full p-2 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image 
                        src={techIcons[tech]?.icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                        alt={techIcons[tech]?.name || tech}
                        className={`w-auto h-auto object-contain ${tech === 'express' ? 'invert dark:invert-0' : ''}`}
                        width={24}
                        height={24}
                      />
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          
          {project.hasPreview && (
            <div className="project-preview mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {language === "en" ? "Project Preview" : "Vista Previa del Proyecto"}
              </h3>
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                {/* This could be replaced with an actual project preview image */}
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "en" ? "Project visual preview" : "Vista previa visual del proyecto"}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="project-actions flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {language === "en" ? "Visit Project" : "Visitar Proyecto"}
            </a>
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {language === "en" ? "View Code" : "Ver Código"}
              </a>
            )}
          </div>
        </div>
        {/* Video (Right column, only if present) */}
        {project.video && (
          <div className="w-full md:w-1/2 flex items-stretch md:bg-black md:p-4 p-0 bg-transparent">
            <div className="w-full h-64 md:h-full rounded-lg overflow-hidden flex">
              <iframe
                src={getYouTubeEmbedUrl(project.video)}
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal; 