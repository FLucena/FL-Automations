"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TechFilter from "./TechFilter";
import ProjectModal from "./ProjectModal";
import { useProjects } from "@/hooks/useProjects";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project } from "@/data/projects";

const ProjectGrid = () => {
  const { language } = useLanguage();
  const {
    filteredProjects,
    activeTechFilters,
    searchQuery,
    currentPage,
    totalPages,
    setSearchQuery,
    toggleTechFilter,
    clearFilters,
    getCurrentPageProjects,
    nextPage,
    prevPage,
    goToPage,
  } = useProjects();
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page, last page, and pages around current page
      if (currentPage <= 3) {
        // Current page is close to the beginning
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Current page is close to the end
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Current page is in the middle
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const currentProjects = getCurrentPageProjects();

  return (
    <div className="project-grid-container">
      {/* Filters Section */}
      <div className="filters-section bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="search-container relative w-full md:w-64">
            <span className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder={language === "en" ? "Search projects..." : "Buscar proyectos..."}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            disabled={activeTechFilters.length === 0 && searchQuery === ""}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={language === "en" ? "Clear all filters" : "Limpiar todos los filtros"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {language === "en" ? "Clear filters" : "Limpiar filtros"}
          </button>
        </div>
        
        {/* Tech Filters */}
        <TechFilter 
          activeTechFilters={activeTechFilters} 
          toggleTechFilter={toggleTechFilter} 
        />
        
        {/* Project Count */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {language === "en" 
            ? `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""}`
            : `Mostrando ${filteredProjects.length} proyecto${filteredProjects.length !== 1 ? "s" : ""}`
          }
        </div>
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleOpenProjectModal(project)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {language === "en" ? "No projects found" : "No se encontraron proyectos"}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            {language === "en" 
              ? "Try changing your search criteria or clearing the filters."
              : "Intente cambiar sus criterios de búsqueda o limpiar los filtros."
            }
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            {language === "en" ? "Clear filters" : "Limpiar filtros"}
          </button>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination flex justify-center items-center space-x-2 mt-8">
          {/* Previous Page Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={language === "en" ? "Previous page" : "Página anterior"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Page Numbers */}
          {getPageNumbers().map((pageNum, index) => (
            pageNum === "ellipsis" ? (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={`page-${pageNum}`}
                onClick={() => goToPage(pageNum as number)}
                className={`w-10 h-10 rounded-lg border ${
                  currentPage === pageNum
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                aria-label={`${language === "en" ? "Page" : "Página"} ${pageNum}`}
                aria-current={currentPage === pageNum ? "page" : undefined}
              >
                {pageNum}
              </button>
            )
          ))}
          
          {/* Next Page Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={language === "en" ? "Next page" : "Página siguiente"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseProjectModal}
        />
      )}
    </div>
  );
};

export default ProjectGrid; 