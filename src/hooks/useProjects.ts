"use client";

import { useState, useEffect, useMemo } from "react";
import { Project, projects } from "@/data/projects";

export const useProjects = () => {
  const [activeTechFilters, setActiveTechFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filtered projects based on tech filters and search query
  useEffect(() => {
    let filtered = [...projects];
    
    // Apply tech filters
    if (activeTechFilters.length > 0) {
      filtered = filtered.filter(project => 
        activeTechFilters.every(tech => project.technologies.includes(tech))
      );
    }
    
    // Apply search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.en.toLowerCase().includes(query) || 
        project.description.es.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeTechFilters, searchQuery]);

  // Get featured projects
  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, []);

  // Toggle a tech filter
  const toggleTechFilter = (tech: string) => {
    setActiveTechFilters(prev => {
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveTechFilters([]);
    setSearchQuery("");
  };

  // Get current page projects
  const getCurrentPageProjects = () => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to specific page
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    projects,
    featuredProjects,
    filteredProjects,
    activeTechFilters,
    searchQuery,
    currentPage,
    totalPages,
    projectsPerPage,
    setSearchQuery,
    toggleTechFilter,
    clearFilters,
    getCurrentPageProjects,
    nextPage,
    prevPage,
    goToPage,
  };
}; 