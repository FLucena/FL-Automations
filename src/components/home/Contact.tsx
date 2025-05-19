"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    
    // Clear submit result when form is edited
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = language === "en" ? "Name is required" : "El nombre es requerido";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = language === "en" ? "Email is required" : "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === "en" ? "Valid email is required" : "Se requiere un correo electrónico válido";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = language === "en" ? "Subject is required" : "El asunto es requerido";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = language === "en" ? "Message is required" : "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === "en" ? "Message should be at least 10 characters" : "El mensaje debe tener al menos 10 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success case (in real app, this would be an actual API call)
      setSubmitResult({
        success: true,
        message: language === "en" 
          ? "Your message has been sent successfully! I'll get back to you soon."
          : "¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo pronto."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      // Error case
      setSubmitResult({
        success: false,
        message: language === "en"
          ? "There was an error sending your message. Please try again."
          : "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {language === "en" ? "Get In Touch" : "Ponte en Contacto"}
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {language === "en" ? "Send Me a Message" : "Envíame un Mensaje"}
              </h3>
              
              {submitResult && (
                <div className={`p-4 mb-4 rounded-md ${
                  submitResult.success 
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                }`}>
                  {submitResult.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {language === "en" ? "Your Name" : "Tu Nombre"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white ${
                        errors.name 
                          ? "border-red-500 dark:border-red-500" 
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={language === "en" ? "Enter your name" : "Ingresa tu nombre"}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {language === "en" ? "Your Email" : "Tu Correo Electrónico"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white ${
                        errors.email 
                          ? "border-red-500 dark:border-red-500" 
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={language === "en" ? "Enter your email" : "Ingresa tu correo electrónico"}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {language === "en" ? "Subject" : "Asunto"}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white ${
                      errors.subject 
                        ? "border-red-500 dark:border-red-500" 
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={language === "en" ? "Enter subject" : "Ingresa el asunto"}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {language === "en" ? "Message" : "Mensaje"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-white ${
                      errors.message 
                        ? "border-red-500 dark:border-red-500" 
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={language === "en" ? "Enter your message" : "Ingresa tu mensaje"}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === "en" ? "Sending..." : "Enviando..."}
                    </>
                  ) : (
                    language === "en" ? "Send Message" : "Enviar Mensaje"
                  )}
                </button>
              </form>
            </div>
          </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {language === "en" ? "Contact Information" : "Información de Contacto"}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {language === "en" ? "Email" : "Correo Electrónico"}
                    </h4>
                    <a 
                      href="mailto:franciscolucena90@gmail.com"
                      className="text-accent hover:underline"
                    >
                      franciscolucena90@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {language === "en" ? "Location" : "Ubicación"}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {language === "en" ? "Follow Me" : "Sígueme"}
                </h4>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/flucena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/franciscoivanlucena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.fiverr.com/s/gD2LRP9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-accent transition-colors"
                    aria-label="Fiverr"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M2.139 20.299h2.002v-4.446h1.904v4.446h1.988v-6.091h-3.893v-0.377c0-0.003 0-0.006 0-0.010 0-0.368 0.298-0.666 0.666-0.666 0.032 0 0.064 0.002 0.095 0.007l-0.004-0h1.147v-1.645h-1.48c-0.068-0.008-0.148-0.012-0.228-0.012-1.215 0-2.2 0.985-2.2 2.2 0 0.002 0 0.004 0 0.005v-0 0.5h-1.133v1.645h1.135v4.445zM10.387 20.299h1.769l2.208-6.091h-2.024l-1.075 3.545-1.097-3.545h-2.016l2.233 6.091zM18.074 16.549c-0.034-0.566-0.501-1.013-1.073-1.013-0.013 0-0.027 0-0.040 0.001l0.002-0c-0.030-0.003-0.065-0.005-0.101-0.005-0.565 0-1.024 0.453-1.034 1.016v0.001zM20.026 17.73h-4.198c0.048 0.604 0.55 1.076 1.163 1.076 0.033 0 0.066-0.001 0.099-0.004l-0.004 0c0.039 0.005 0.083 0.008 0.128 0.008 0.41 0 0.761-0.252 0.907-0.61l0.002-0.007 1.781 0.5c-0.474 1.017-1.488 1.709-2.663 1.709-0.055 0-0.109-0.002-0.163-0.004l0.008 0c-0.035 0.001-0.077 0.002-0.118 0.002-1.694 0-3.068-1.373-3.068-3.068 0-0.027 0-0.054 0.001-0.081l-0 0.004c-0.003-0.050-0.005-0.108-0.005-0.166 0-1.638 1.328-2.966 2.966-2.966 0.035 0 0.070 0.001 0.105 0.002l-0.005-0c0.060-0.004 0.13-0.007 0.2-0.007 1.596 0 2.89 1.294 2.89 2.89 0 0.044-0.001 0.088-0.003 0.132l0-0.006c0 0.28-0.012 0.462-0.025 0.596zM28.506 15.854h-1.062c-0.682 0-1.050 0.512-1.050 1.365v3.082h-2.012v-4.446h-0.855c-0.684 0-1.050 0.512-1.050 1.365v3.082h-2.012v-6.091h2.012v0.925c0.199-0.547 0.714-0.931 1.32-0.931 0.047 0 0.094 0.002 0.139 0.007l-0.006-0h2.464v0.925c0.198-0.547 0.714-0.931 1.319-0.931 0.047 0 0.093 0.002 0.139 0.007l-0.006-0h0.659zM29.751 20.484c0 0 0.001 0 0.001 0 0.687 0 1.243-0.557 1.243-1.243s-0.557-1.243-1.243-1.243c-0.687 0-1.243 0.557-1.243 1.243 0 0.228 0.062 0.443 0.169 0.627l-0.003-0.006c0.219 0.375 0.618 0.622 1.076 0.623h0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact; 