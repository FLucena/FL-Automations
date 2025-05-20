"use client";

import AboutHeader from "./about/AboutHeader";
import AboutContent from "./about/AboutContent";
import SkillsSection from "./about/SkillsSection";
import ExperienceSection from "./about/ExperienceSection";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AboutHeader />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <AboutContent />
          
          <div className="md:w-1/2">
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 