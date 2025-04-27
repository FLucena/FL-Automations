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
    featured: true,
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
    technologies: ["nextjs", "react", "tailwind"],
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
    technologies: ["python", "streamlit"],
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
    title: "Product Showcase",
    description: {
      en: "A 3D showcase where the user can interact with the product",
      es: "Un escaparate 3D donde el usuario puede interactuar con el producto"
    },
    url: "https://3dshowcase.vercel.app/",
    featured: false,
    technologies: ["threejs", "javascript"],
    hasPreview: false
  },
  {
    id: 11,
    title: "Dog Fetcher",
    description: {
      en: "Discover randomly selected dog photos with our app for searching dog pictures of all breeds.",
      es: "Descubre fotos de perros seleccionadas aleatoriamente con nuestra aplicación para buscar imágenes de perros de todas las razas."
    },
    url: "https://dogfetcher-sigma.vercel.app/",
    featured: false,
    technologies: ["javascript", "html", "css"],
    hasPreview: false
  },
  {
    id: 12,
    title: "Tetris Game",
    description: {
      en: "Play tetris!",
      es: "¡Juega al tetris!"
    },
    url: "https://tetris-lovat.vercel.app/",
    featured: false,
    technologies: ["javascript", "html", "css"],
    hasPreview: false
  },
  {
    id: 13,
    title: "3D App",
    description: {
      en: "Discover the upcoming websites with a 3D app.",
      es: "Descubre los próximos sitios web con una aplicación 3D."
    },
    url: "https://threejs-demo-rho.vercel.app/",
    featured: false,
    technologies: ["threejs", "javascript"],
    hasPreview: false
  },
  {
    id: 14,
    title: "FinSave",
    description: {
      en: "FinSave is a platform that helps you save money and achieve your financial goals.",
      es: "FinSave es una plataforma que te ayuda a ahorrar dinero y alcanzar tus objetivos financieros."
    },
    url: "https://finsave.vercel.app/",
    featured: true,
    icon: "computer",
    technologies: ["nextjs", "react", "tailwind"],
    hasPreview: false
  },
  {
    id: 15,
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
]; 