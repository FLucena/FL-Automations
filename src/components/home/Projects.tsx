"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/data/projects";

const Projects = () => {
  const { language } = useLanguage();
  const { featuredProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {language === "en" ? "Featured Projects" : "Proyectos Destacados"}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {language === "en" 
            ? "Here are some of my recent projects. Each project demonstrates different skills and technologies." 
            : "Aquí hay algunos de mis proyectos recientes. Cada proyecto demuestra diferentes habilidades y tecnologías."
          }
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 [&_.project-card]:bg-blue-50 [&_.project-card]:dark:bg-gray-800">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleOpenProjectModal(project)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#all-projects"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-md"
          >
            <span>
              {language === "en" ? "View All Projects" : "Ver Todos los Proyectos"}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseProjectModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects; 