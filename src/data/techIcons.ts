export interface TechIcon {
  icon: string;
  name: string;
}

export interface TechIconsMap {
  [key: string]: TechIcon;
}

export const techIcons: TechIconsMap = {
  nextjs: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    name: 'Next.js'
  },
  react: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React'
  },
  javascript: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  typescript: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  python: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    name: 'Python'
  },
  flutter: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    name: 'Flutter'
  },
  streamlit: {
    icon: 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
    name: 'Streamlit'
  },
  threejs: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    name: 'Three.js'
  },
  html: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    name: 'HTML5'
  },
  css: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    name: 'CSS3'
  },
  tailwind: {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png',
    name: 'TailwindCSS'
  }
};

export const availableTechTags: string[] = [
  'nextjs', 'react', 'javascript', 'typescript', 'python', 
  'flutter', 'streamlit', 'threejs', 'html', 'css', 'tailwind'
];

export const coinFlipIcons = [
  { name: 'Next.js', url: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
  { name: 'Tailwind CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Google Apps Script', url: 'https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png' },
  { name: 'Google Sheets', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png' },
  { name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
  { name: 'TypeScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
  { name: 'Python', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' }
]; 