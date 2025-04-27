"use client";

import { availableTechTags, techIcons } from "@/data/techIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import useTooltip from "@/hooks/useTooltip";
import Image from "next/image";

interface TechFilterProps {
  activeTechFilters: string[];
  toggleTechFilter: (tech: string) => void;
}

const TechFilter = ({ activeTechFilters, toggleTechFilter }: TechFilterProps) => {
  const { language } = useLanguage();
  const { Tooltip } = useTooltip();

  return (
    <div className="tech-filter">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {language === "en" ? "Filter by technology:" : "Filtrar por tecnología:"}
      </h3>
      
      <div className="filter-tags-container flex flex-wrap gap-3">
        {availableTechTags.map((tech) => (
          <Tooltip key={tech} label={techIcons[tech].name}>
            <button
              onClick={() => toggleTechFilter(tech)}
              className={`filter-tag flex items-center justify-center rounded-lg p-2 transition-all ${
                activeTechFilters.includes(tech)
                  ? "bg-accent text-white shadow-md"
                  : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              aria-label={`${language === "en" ? "Filter by" : "Filtrar por"} ${techIcons[tech].name}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src={techIcons[tech].icon || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                  alt={techIcons[tech].name || 'Technology icon'}
                  width={24}
                  height={24}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TechFilter; 