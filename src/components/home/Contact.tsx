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
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 2;

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
    setSubmitResult(null);
    
    try {
      // Convert form data to URL parameters
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      // Attempt to send the form
      await fetch(`https://script.google.com/macros/s/AKfycbwubGGQp9LafhBIEX8Tzt3vITo-fjCd7Hmwjp9UR6ksLVcarwqRHxz7O2GDy0iqSg-PDQ/exec?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // If we get here, the request was sent successfully
      setSubmitResult({
        success: true,
        message: language === "en" 
          ? "Your message has been sent successfully! I'll get back to you soon."
          : "¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo pronto."
      });
      
      // Reset form and retry count
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setRetryCount(0);
    } catch (error) {
      console.error('Error:', error);
      
      // If we haven't exceeded max retries, try again
      if (retryCount < MAX_RETRIES) {
        setRetryCount(prev => prev + 1);
        setSubmitResult({
          success: false,
          message: language === "en"
            ? `Attempting to send your message again (${retryCount + 1}/${MAX_RETRIES})...`
            : `Intentando enviar tu mensaje nuevamente (${retryCount + 1}/${MAX_RETRIES})...`
        });
        
        // Wait a bit before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
        return handleSubmit(e);
      }
      
      // If we've exceeded max retries, show error
      setSubmitResult({
        success: false,
        message: language === "en"
          ? "Unable to send your message. Please try again later or contact me directly at franciscolucena90@gmail.com"
          : "No se pudo enviar tu mensaje. Por favor, inténtalo más tarde o contáctame directamente a franciscolucena90@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add a function to handle form reset
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setSubmitResult(null);
    setRetryCount(0);
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
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
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
                  
                  {submitResult && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                    >
                      {language === "en" ? "New Message" : "Nuevo Mensaje"}
                    </button>
                  )}
                </div>
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
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact; 