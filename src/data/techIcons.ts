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
  html5: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    name: 'HTML5'
  },
  css3: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    name: 'CSS3'
  },
  tailwind: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    name: 'TailwindCSS'
  },
  nodejs: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  express: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    name: 'Express'
  },
  django: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    name: 'django'
  },
  bootstrap: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  figma: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    name: 'Figma'
  },
  appsscript: {
    icon: 'https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png',
    name: 'Google Apps Script'
  },
  vba: {
    icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vba_icon_130097.png',
    name: 'VBA'
  },
  vite: {
    icon: 'https://vitejs.dev/logo.svg',
    name: 'Vite'
  },
  ai: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHN0eWxlPnRleHQgeyBmb250LWZhbWlseTogQXJpYWw7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDEycHg7IGZpbGw6ICMwMDA7IH0gPC9zdHlsZT48dGV4dCB4PSIxMiIgeT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFJPC90ZXh0Pjwvc3ZnPg==',
    name: 'AI'
  },
  '3d': {
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHN0eWxlPnRleHQgeyBmb250LWZhbWlseTogQXJpYWw7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDEycHg7IGZpbGw6ICMwMDA7IH0gPC9zdHlsZT48dGV4dCB4PSIxMiIgeT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjNEPC90ZXh0Pjwvc3ZnPg==',
    name: '3D'
  },
  n8n: {
    icon: 'https://www.myqnap.org/wp-content/uploads/n8n-logo.png',
    name: 'n8n'
  },
  make: {
    icon: 'https://www.make.com/favicon.ico',
    name: 'Make (Integromat)'
  },
  zapier: {
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-zapier-282124.png',
    name: 'Zapier'
  },
  flask: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    name: 'Flask'
  },
  git: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    name: 'Git'
  },
  salesforce: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
    name: 'Salesforce'
  }
};

export const availableTechTags: string[] = [
  'nextjs', 'react', 'javascript', 'typescript', 'python', 
  'flutter', 'streamlit', 'threejs', 'html5', 'css3', 'tailwind',
  'nodejs', 'express', 'django', 'bootstrap', 'figma', 'appsscript', 'vba', 'vite', 'ai', '3d', 'flask', 'git', 'salesforce'
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