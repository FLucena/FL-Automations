interface ProjectDescription {
  en: string;
  es: string;
}

export interface Project {
  id: number;
  title: string;
  description: ProjectDescription;
  url: string;
  featured: boolean;
  icon?: string;
  technologies: string[];
  hasPreview: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FL Automations",
    description: {
      en: "A blog with all the apps and projects I have been working on!",
      es: "¡Un blog con todas las aplicaciones y proyectos en los que he estado trabajando!"
    },
    url: "https://www.flautomations.com.ar/",
    featured: false,
    icon: "blog",
    technologies: ["nextjs", "typescript", "react", "tailwind"],
    hasPreview: false
  },
  {
    id: 2,
    title: "Dental Start",
    description: {
      en: "Modern dentist website providing exceptional personalized treatments.",
      es: "Sitio web moderno de dentista que ofrece tratamientos personalizados excepcionales."
    },
    url: "https://dental-start.vercel.app/",
    featured: false,
    icon: "tooth",
    technologies: ["nextjs", "typescript", "react", "tailwind"],
    hasPreview: false
  },
  {
    id: 3,
    title: "Rock-Paper-Scissors Game!",
    description: {
      en: "Engaging rock-paper-scissors game. Enjoy addictive gameplay.",
      es: "Juego atractivo de piedra-papel-tijeras. Disfruta de una jugabilidad adictiva."
    },
    url: "https://react-game-rock-paper-scissors.vercel.app/",
    featured: false,
    icon: "game",
    technologies: ["react", "javascript", "css"],
    hasPreview: false
  },
  {
    id: 4,
    title: "AI Chat with Cohere",
    description: {
      en: "A Streamlit application that lets you chat with Cohere's AI model. Built with Python and Streamlit, this app demonstrates modern AI conversation capabilities.",
      es: "Una aplicación Streamlit que te permite chatear con el modelo de IA de Cohere. Construida con Python y Streamlit, esta aplicación demuestra las capacidades modernas de conversación con IA."
    },
    url: "https://cohere-aichat.streamlit.app/",
    featured: false,
    technologies: ["python", "streamlit", "ai"],
    hasPreview: false
  },
  {
    id: 5,
    title: "User Management",
    description: {
      en: "A user management system with the ability to export the list in CSV format. The User Management API uses GET, PUT, POST, and DELETE methods for this app. Built in Next.js",
      es: "Un sistema de gestión de usuarios con la capacidad de exportar la lista en formato CSV. La API de gestión de usuarios utiliza métodos GET, PUT, POST y DELETE para esta aplicación. Construido en Next.js"
    },
    url: "https://apimanagement.vercel.app/",
    featured: false,
    technologies: ["nextjs", "react", "javascript", "tailwind"],
    hasPreview: false
  },
  {
    id: 6,
    title: "Tic tac toe",
    description: {
      en: "The Tic tac toe game created with Flutter!",
      es: "¡El juego de Tic tac toe creado con Flutter!"
    },
    url: "https://tictactoe-flautomations.vercel.app/",
    featured: false,
    technologies: ["flutter"],
    hasPreview: false
  },
  {
    id: 7,
    title: "Max & Min Finder App",
    description: {
      en: "Discover the highest and lowest values in any array with our intuitive Max & Min Finder app. Built with Next.js.",
      es: "Descubre los valores más altos y más bajos en cualquier matriz con nuestra intuitiva aplicación Max & Min Finder. Construida con Next.js."
    },
    url: "https://listapp-flautomations.vercel.app/",
    featured: false,
    technologies: ["nextjs", "react", "typescript", "tailwind"],
    hasPreview: false
  },
  {
    id: 8,
    title: "Palindrome Checker",
    description: {
      en: "An intuitive and easy-to-use application designed to identify if a word or phrase is a palindrome. Built with Next.js.",
      es: "Una aplicación intuitiva y fácil de usar diseñada para identificar si una palabra o frase es un palíndromo. Construida con Next.js."
    },
    url: "https://palindrome-checker-flautomations.vercel.app/",
    featured: false,
    technologies: ["nextjs", "react", "javascript", "tailwind"],
    hasPreview: false
  },
  {
    id: 9,
    title: "Division Calculator",
    description: {
      en: "A Next.js app that divides numbers using subtraction instead of division or multiplication signs. Learn alternative algorithms and enhance your TypeScript skills.",
      es: "Una aplicación Next.js que divide números usando resta en lugar de signos de división o multiplicación. Aprende algoritmos alternativos y mejora tus habilidades de TypeScript."
    },
    url: "https://division-calculator.vercel.app/",
    featured: false,
    technologies: ["nextjs", "typescript", "tailwind"],
    hasPreview: false
  },
  {
    id: 10,
    title: "Dog Fetcher",
    description: {
      en: "Discover randomly selected dog photos with our app for searching dog pictures of all breeds.",
      es: "Descubre fotos de perros seleccionadas aleatoriamente con nuestra aplicación para buscar imágenes de perros de todas las razas."
    },
    url: "https://dogfetcher-sigma.vercel.app/",
    featured: false,
    technologies: ["javascript", "html5", "css3"],
    hasPreview: false
  },
  {
    id: 11,
    title: "Tetris Game",
    description: {
      en: "Play tetris!",
      es: "¡Juega al tetris!"
    },
    url: "https://tetris-lovat.vercel.app/",
    featured: false,
    technologies: ["javascript", "html5", "css3"],
    hasPreview: false
  },
  {
    id: 12,
    title: "3D App",
    description: {
      en: "Discover the upcoming websites with a 3D app.",
      es: "Descubre los próximos sitios web con una aplicación 3D."
    },
    url: "https://threejs-demo-rho.vercel.app/",
    featured: false,
    technologies: ["threejs", "javascript", "3d"],
    hasPreview: false
  },
  {
    id: 13,
    title: "FinSave",
    description: {
      en: "FinSave is a platform that helps you save money and achieve your financial goals.",
      es: "FinSave es una plataforma que te ayuda a ahorrar dinero y alcanzar tus objetivos financieros."
    },
    url: "https://finsave.vercel.app/",
    featured: false,
    icon: "computer",
    technologies: ["nextjs", "react", "tailwind"],
    hasPreview: false
  },
  {
    id: 14,
    title: "Pet Connect",
    description: {
      en: "Pet Connect is a platform that facilitates responsible pet adoption, connecting animal shelters with people looking to give a loving home to a new family member.",
      es: "Pet Connect es una plataforma que facilita la adopción responsable de mascotas, conectando refugios de animales con personas que buscan dar un hogar amoroso a un nuevo miembro de la familia."
    },
    url: "https://pet-connect-vite.netlify.app/",
    featured: true,
    icon: "pet",
    technologies: ["vite", "typescript", "react", "bootstrap"],
    hasPreview: false
  },
  {
    id: 15,
    title: "Modelflow",
    description: {
      en: "A powerful Node.js API and toolkit for processing 3D models, including conversion, optimization, and preview generation.",
      es: "Una API y toolkit poderosa para procesar modelos 3D, incluyendo conversión, optimización y generación de vista previa."
    },
    url: "https://modelflow.netlify.app/",
    featured: false,
    icon: "3dshowcase",
    technologies: ["nodejs", "vite", "react", "tailwind"],
    hasPreview: false
  },
  {
    id: 16,
    title: "Mamuk",
    description: {
      en: "A training app that connects coaches with clients.",
      es: "Una app de entrenamiento que conecta a los coaches con los clientes."
    },
    url: "https://mamuk.com.ar/",
    featured: true,
    icon: "gym",
    technologies: ["nextjs", "nodejs", "express", "typescript", "tailwind"],
    hasPreview: false
  },
  {
    id: 17,
    title: "Product Showcase",
    description: {
      en: "A 3D showcase where the user can interact with the product",
      es: "Un escaparate 3D donde el usuario puede interactuar con el producto"
    },
    url: "https://3dshowcase.vercel.app/",
    featured: false,
    technologies: ["threejs", "javascript", "3d"],
    hasPreview: false
  },
  {
    id: 18,
    title: "Biz Templates",
    description: {
      en: "A collection of templates for your business, ready to use in your work.",
      es: "Una colección de plantillas en Excel o Google Sheets para tu negocio, listas para utilizar en tu trabajo."
    },  
    url: "https://biztemplates.netlify.app/",
    featured: false,
    technologies: ["javascript", "html5", "css3"],
      hasPreview: false
    },
    {
      id: 19,
      title: "Pokémon App",
      description: {
        en: "A React application that allows users to browse Pokémon and play a guessing game. Built with Vite and Bootstrap.",
        es: "Una aplicación React que permite a los usuarios explorar Pokémon y jugar un juego de adivinanzas. Desarrollada con Vite y Bootstrap."
      },
      url: "https://pokemon-explorer-flautomations.netlify.app/",
      featured: true,
      icon: "game",
      technologies: ["react", "vite", "bootstrap", "javascript"],
      hasPreview: false
    },
    {
      id: 20,
      title: "Mi nuevo vicio",
      description: {
        en: "A platform to explore games and have a collection of them",
        es: "Una plataforma para explorar juegos y tener una colección de ellos"
      },
      url: "https://proyecto-final-react25017-fil.vercel.app/",
      featured: false,
      icon: "game",
      technologies: ["vite", "react", "bootstrap", "javascript"],
      hasPreview: false
    },
    {
      id: 21,
      title: "Buzzart",
      description: {
        en: "An eCommerce platform for 3D models tailored for games, advertising, and 3D printing.",
        es: "Una plataforma de eCommerce de modelos 3D diseñados para videojuegos, publicidad e impresión 3D."
      },
      url: "https://buzzart.vercel.app/",
      featured: false,
      icon: "ecommerce",
      technologies: ["nextjs", "3d", "react", "tailwind"],
      hasPreview: false
    },
    {
      id: 22,
      title: "E-Commerce API - Node.js RESTful API",
      description: {
        en: "Functional RESTful API that allows you to manage the products of an online store (E-Commerce) with authorization",
        es: "API RESTful funcional que permite gestionar los productos de una tienda en línea (E-Commerce) con autorización"
      },
      url: "https://proyecto-final-ecommerce-francisco.vercel.app/",
      featured: false,
      icon: "api",
      technologies: ["nodejs", "express", "jwt", "javascript"],
      hasPreview: false
    },
    {
      id: 23,
      title: "Model Swap",
      description: {
        en: "A 3d model converter that allows you to swap 3D models file types with a simple drag and drop interface",
        es: "Un convertidor de modelos 3D que permite intercambiar tipos de archivos de modelos 3D con una interfaz simple de arrastrar y soltar"
      },
      url: "https://model-swap.onrender.com/",
      featured: false,
      icon: "3dshowcase",
      technologies: ["flask", "python"],
      hasPreview: false
      
    },
    {
      id: 24,
      title: "AI Chamuyo",
      description: {
        en: "A gamified, mobile-first web application that uses AI to analyze audio recordings and determine the probability of deception. Users can record statements and receive visual feedback on truthfulness with a game-like scoring system.",
        es: "Una aplicación web que usa IA para analizar grabaciones de audio y determinar la probabilidad de mentiras. Los usuarios pueden grabar declaraciones y recibir retroalimentación visual sobre la verdad. Se utiliza un sistema de puntuación similar a un juego."
      },
      url: "https://aichamuyo.vercel.app/",
      featured: false,
      icon: "ai",
      technologies: ["vite", "react", "tailwind", "ai", "typescript"],
      hasPreview: false
      
    }
]; 