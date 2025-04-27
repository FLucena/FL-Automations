"use client";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      
      {/* All Projects Section */}
      <section id="all-projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            All Projects
          </h2>
          <ProjectGrid />
        </div>
      </section>
      
      <Contact />
    </Layout>
  );
}
