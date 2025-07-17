"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { techIcons } from "@/data/techIcons";
import Image from "next/image";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  imageUrl?: string;
  techIcon?: string;
}

const certificates: Certificate[] = [
  {
    id: "react-talento-tech",
    title: "React JS",
    issuer: "Talento Tech",
    date: "2025",
    pdfUrl: "/certificates/cert-react-talento-tech.pdf",
    techIcon: "react",
  },
  {
    id: "front-end-js-buenos-aires-aprende",
    title: "Front End JavaScript",
    issuer: "Buenos Aires Aprende",
    date: "2024",
    pdfUrl: "/certificates/cert-front-end-js-buenos-aires-aprende.pdf",
    techIcon: "javascript",
  },
  {
    id: "typescript-open-bootcamp",
    title: "TypeScript",
    issuer: "Open Bootcamp",
    date: "2023",
    pdfUrl: "/certificates/cert-typescript-open-bootcamp.pdf",
    techIcon: "typescript",
  },
  {
    id: "python-datacamp",
    title: "Python Programming",
    issuer: "DataCamp",
    date: "2022",
    pdfUrl: "/certificates/cert-python-datacamp.pdf",
    techIcon: "python",
  },
  {
    id: "full-stack-python-codo-a-codo",
    title: "Full Stack Python",
    issuer: "Codo a Codo",
    date: "2022",
    pdfUrl: "/certificates/cert-full-stack-python-codo-a-codo.pdf",
    techIcon: "python",
  },
  {
    id: "django-codo-a-codo",
    title: "Django Framework",
    issuer: "Codo a Codo",
    date: "2022",
    pdfUrl: "/certificates/cert-django-codo-a-codo.pdf",
    techIcon: "django",
  },
  {
    id: "git-open-bootcamp",
    title: "Git & GitHub",
    issuer: "Open Bootcamp",
    date: "2022",
    pdfUrl: "/certificates/cert-git-open-bootcamp.pdf",
    techIcon: "git",
  },
  {
    id: "programacion-open-bootcamp",
    title: "Programming Fundamentals",
    issuer: "Open Bootcamp",
    date: "2022",
    pdfUrl: "/certificates/cert-programacion-open-bootcamp.pdf",
    techIcon: "javascript",
  },
  {
    id: "desarrollador-salesforce-talento-tech",
    title: "Salesforce Developer",
    issuer: "Talento Tech",
    date: "2024",
    pdfUrl: "/certificates/cert-desarrollador-salesforce-talento-tech.pdf",
    techIcon: "salesforce",
  },
  {
    id: "node-talento-tech",
    title: "Node.js",
    issuer: "Talento Tech",
    date: "2025",
    pdfUrl: "/certificates/cert-node-talento-tech.pdf",
    techIcon: "nodejs",
  },
  {
    id: "python-for-data-science-solo-learn",
    title: "Python for Data Science",
    issuer: "SoloLearn",
    date: "2022",
    pdfUrl: "/certificates/cert-python-for-data-science-solo-learn.jpg",
    techIcon: "python",
  },
];

const Certificates = () => {
  const { language } = useLanguage();

  const openCertificate = (certificate: Certificate) => {
    window.open(certificate.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  // Sort certificates by date (newest first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    return parseInt(b.date) - parseInt(a.date);
  });

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {language === "en" ? "Certificates" : "Certificados"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sortedCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-700 relative"
              onClick={() => openCertificate(certificate)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openCertificate(certificate)}
              aria-label={`Open ${certificate.title} certificate`}
            >
              {/* Background Icon */}
              {certificate.techIcon && techIcons[certificate.techIcon] && (
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
                  certificate.techIcon === 'django' 
                    ? 'opacity-10 dark:opacity-40' 
                    : 'opacity-10 dark:opacity-40'
                }`}>
                  <Image
                    src={techIcons[certificate.techIcon].icon}
                    alt=""
                    className={`w-32 h-32 object-contain ${
                      certificate.techIcon === 'django' 
                        ? 'brightness-0 dark:brightness-0 dark:invert' 
                        : ''
                    }`}
                    width={128}
                    height={128}
                  />
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center justify-end mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {certificate.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {certificate.issuer}
                </p>
                
                <div className="mt-auto">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      openCertificate(certificate);
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {language === "en" ? "View Certificate" : "Ver Certificado"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 