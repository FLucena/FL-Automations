// Main JavaScript file for FL Automations

// Global variable to store all projects
let allProjects = [];

// Technology icons for the coin flip
const techIcons = [
  { name: 'Next.js', url: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
  { name: 'Google Apps Script', url: 'https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png' },
  { name: 'Google Sheets', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png' },
  { name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
  { name: 'TypeScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
  { name: 'Python', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' }
];

let currentTechIconIndex = 0;
let isFlipped = false;

// Initialize AOS library for animations
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
  
  // Load projects from JSON file
  loadProjectsFromJSON();
  
  // Initialize English typing animation
  initTypedEn();
  
  // Set up profile image error handling
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.onerror = function() {
      console.error('Error loading profile image');
      this.src = 'https://via.placeholder.com/300x300?text=Francisco';
    };
    
    profileImg.onload = function() {
      console.log('Profile image loaded successfully');
    };
  }
  
  // Handle navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Initialize the coin flip functionality
  initCoinFlip();
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('mobile-nav-open');
      mobileMenuToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (nav.classList.contains('mobile-nav-open')) {
          nav.classList.remove('mobile-nav-open');
          mobileMenuToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (nav.classList.contains('mobile-nav-open') && 
          !nav.contains(event.target) && 
          !mobileMenuToggle.contains(event.target)) {
        nav.classList.remove('mobile-nav-open');
        mobileMenuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
});

// Initialize the coin flip functionality
function initCoinFlip() {
  const coin = document.querySelector('.coin');
  const techIcon = document.getElementById('tech-icon');
  
  if (!coin || !techIcon) return;
  
  // Set initial tech icon
  updateTechIcon();
  
  // Variables for drag functionality
  let isDragging = false;
  let startX, startY;
  let rotateX = 0, rotateY = 0;
  let lastRotateX = 0, lastRotateY = 0;
  
  // Mouse down event
  coin.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    coin.style.transition = 'none';
  });
  
  // Mouse move event
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    rotateY = lastRotateY + deltaX * 0.5;
    rotateX = lastRotateX - deltaY * 0.5;
    
    // Update coin rotation
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Check if coin is flipped (showing back face)
    isFlipped = Math.abs(rotateY % 360) > 90 && Math.abs(rotateY % 360) < 270;
  });
  
  // Mouse up event
  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    
    isDragging = false;
    lastRotateX = rotateX;
    lastRotateY = rotateY;
    
    // Smooth transition when releasing
    coin.style.transition = 'transform 0.5s ease';
    
    // If the coin is flipped, update the tech icon for next flip
    if (isFlipped) {
      // Update tech icon for next flip
      setTimeout(updateTechIcon, 500);
    }
  });
  
  // Touch events for mobile
  coin.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    coin.style.transition = 'none';
    e.preventDefault();
  });
  
  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
    
    rotateY = lastRotateY + deltaX * 0.5;
    rotateX = lastRotateX - deltaY * 0.5;
    
    // Update coin rotation
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Check if coin is flipped
    isFlipped = Math.abs(rotateY % 360) > 90 && Math.abs(rotateY % 360) < 270;
    
    e.preventDefault();
  });
  
  document.addEventListener('touchend', () => {
    if (!isDragging) return;
    
    isDragging = false;
    lastRotateX = rotateX;
    lastRotateY = rotateY;
    
    // Smooth transition when releasing
    coin.style.transition = 'transform 0.5s ease';
    
    // If the coin is flipped, update the tech icon for next flip
    if (isFlipped) {
      setTimeout(updateTechIcon, 500);
    }
  });
  
  // Double click to flip the coin
  coin.addEventListener('dblclick', () => {
    coin.style.transition = 'transform 0.8s ease';
    
    if (!isFlipped) {
      // Flip to back
      rotateY = 180;
      isFlipped = true;
    } else {
      // Flip to front
      rotateY = 0;
      isFlipped = false;
      // Update tech icon for next flip
      setTimeout(updateTechIcon, 500);
    }
    
    lastRotateY = rotateY;
    lastRotateX = 0;
    rotateX = 0;
    
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
}

// Update the tech icon on the back of the coin
function updateTechIcon() {
  const techIcon = document.getElementById('tech-icon');
  if (!techIcon) return;
  
  // Get next tech icon
  currentTechIconIndex = (currentTechIconIndex + 1) % techIcons.length;
  const icon = techIcons[currentTechIconIndex];
  
  // Update the tech icon
  techIcon.src = icon.url;
  techIcon.alt = icon.name + ' icon';
}

// Load projects from JSON file
function loadProjectsFromJSON() {
  // Try to fetch the JSON file
  fetch('js/projects.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      allProjects = data;
      displayFeaturedProjects();
      displayRandomProjects();
    })
    .catch(error => {
      console.error('Error loading projects:', error);
      // Use hardcoded projects as fallback
      allProjects = [
        {
          "id": 1,
          "title": "FL Automations",
          "description": {
            "en": "A blog with all the apps and projects I have been working on!",
            "es": "¡Un blog con todas las aplicaciones y proyectos en los que he estado trabajando!"
          },
          "url": "https://www.flautomations.com.ar/",
          "featured": true,
          "icon": "blog"
        },
        {
          "id": 2,
          "title": "Dental Start",
          "description": {
            "en": "Modern dentist website providing exceptional personalized treatments.",
            "es": "Sitio web moderno de dentista que ofrece tratamientos personalizados excepcionales."
          },
          "url": "https://dental-start.vercel.app/",
          "featured": true,
          "icon": "location"
        },
        {
          "id": 3,
          "title": "Rock-Paper-Scissors Game!",
          "description": {
            "en": "Engaging rock-paper-scissors game. Enjoy addictive gameplay.",
            "es": "Juego atractivo de piedra-papel-tijeras. Disfruta de una jugabilidad adictiva."
          },
          "url": "https://react-game-rock-paper-scissors.vercel.app/",
          "featured": true,
          "icon": "game"
        },
        {
          "id": 4,
          "title": "AI Chat with Cohere",
          "description": {
            "en": "A Streamlit application that lets you chat with Cohere's AI model.",
            "es": "Una aplicación Streamlit que te permite chatear con el modelo de IA de Cohere."
          },
          "url": "https://cohere-aichat.streamlit.app/",
          "featured": false
        },
        {
          "id": 5,
          "title": "User Management",
          "description": {
            "en": "A user management system with the ability to export the list in CSV format.",
            "es": "Un sistema de gestión de usuarios con la capacidad de exportar la lista en formato CSV."
          },
          "url": "https://apimanagement.vercel.app/",
          "featured": false
        },
        {
          "id": 6,
          "title": "Tic tac toe",
          "description": {
            "en": "The Tic tac toe game created with Flutter!",
            "es": "¡El juego de Tic tac toe creado con Flutter!"
          },
          "url": "https://tictactoe-flautomations.vercel.app/",
          "featured": false
        },
        {
          "id": 7,
          "title": "Max & Min Finder App",
          "description": {
            "en": "Discover the highest and lowest values in any array with our intuitive app.",
            "es": "Descubre los valores más altos y más bajos en cualquier matriz con nuestra intuitiva aplicación."
          },
          "url": "https://listapp-flautomations.vercel.app/",
          "featured": false
        },
        {
          "id": 8,
          "title": "Palindrome Checker",
          "description": {
            "en": "An intuitive application designed to identify if a word or phrase is a palindrome.",
            "es": "Una aplicación intuitiva diseñada para identificar si una palabra o frase es un palíndromo."
          },
          "url": "https://palindrome-checker-flautomations.vercel.app/",
          "featured": false
        },
        {
          "id": 9,
          "title": "Division Calculator",
          "description": {
            "en": "A Next.js app that divides numbers using subtraction instead of division.",
            "es": "Una aplicación Next.js que divide números usando resta en lugar de signos de división."
          },
          "url": "https://division-calculator.vercel.app/",
          "featured": false
        },
        {
          "id": 10,
          "title": "Product Showcase",
          "description": {
            "en": "A 3D showcase where the user can interact with the product",
            "es": "Un escaparate 3D donde el usuario puede interactuar con el producto"
          },
          "url": "https://3dshowcase.vercel.app/",
          "featured": false
        },
        {
          "id": 11,
          "title": "Dog Fetcher",
          "description": {
            "en": "Discover randomly selected dog photos with our app.",
            "es": "Descubre fotos de perros seleccionadas aleatoriamente con nuestra aplicación."
          },
          "url": "https://dogfetcher-sigma.vercel.app/",
          "featured": false
        },
        {
          "id": 12,
          "title": "Tetris Game",
          "description": {
            "en": "Play tetris!",
            "es": "¡Juega al tetris!"
          },
          "url": "https://tetris-lovat.vercel.app/",
          "featured": false
        }
      ];
      
      displayFeaturedProjects();
      displayRandomProjects();
    });
}

// Display featured projects in the Projects section
function displayFeaturedProjects() {
  const featuredProjects = allProjects.filter(project => project.featured);
  const container = document.querySelector('.project-cards-container');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  featuredProjects.forEach((project, index) => {
    const iconSVG = getIconSVG(project.icon);
    
    const projectHTML = `
      <div class="projects-div flex div-${index + 1} project-card" data-aos="zoom-in" data-aos-delay="${100 * (index + 1)}">
        ${iconSVG}
        
        <h3>${project.title}</h3>
        <p class="lang-en">
          ${project.description.en}
        </p>
        <p class="lang-es" style="display: none;">
          ${project.description.es}
        </p>
        <div class="project-links">
          <button>
            <a href="${project.url}" target="_blank" class="live-preview" title="Live Preview">
              <i class="fa-solid fa-eye"></i>
            </a>
          </button>
          <button>
            <a href="mailto:flucena.dev@gmail.com?subject=Suggestion for ${encodeURIComponent(project.title)}" class="live-preview lang-en" title="Suggest Ideas">
              <i class="fa-solid fa-lightbulb"></i>
            </a>
            <a href="mailto:flucena.dev@gmail.com?subject=Sugerencia para ${encodeURIComponent(project.title)}" class="live-preview lang-es" style="display: none;" title="Sugerir Ideas">
              <i class="fa-solid fa-lightbulb"></i>
            </a>
          </button>
        </div>
      </div>
    `;
    
    container.innerHTML += projectHTML;
  });
}

// Display random projects in the All Projects section
function displayRandomProjects() {
  const nonFeaturedProjects = allProjects.filter(project => !project.featured);
  const randomProjects = getRandomProjects(nonFeaturedProjects, 9);
  const container = document.querySelector('.projects-container');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  randomProjects.forEach(project => {
    const projectHTML = `
      <div class="project">
        <h2>${project.title}</h2>
        <p class="lang-en">${project.description.en}</p>
        <p class="lang-es" style="display: none;">${project.description.es}</p>
        <div class="project-links">
          <a href="${project.url}" target="_blank" class="hyperlink" title="Live Preview">
            <i class="fa-solid fa-eye"></i>
          </a>
          <a href="mailto:flucena.dev@gmail.com?subject=Suggestion for ${encodeURIComponent(project.title)}" class="hyperlink lang-en" title="Suggest Ideas">
            <i class="fa-solid fa-lightbulb"></i>
          </a>
          <a href="mailto:flucena.dev@gmail.com?subject=Sugerencia para ${encodeURIComponent(project.title)}" class="hyperlink lang-es" style="display: none;" title="Sugerir Ideas">
            <i class="fa-solid fa-lightbulb"></i>
          </a>
        </div>
      </div>
    `;
    
    container.innerHTML += projectHTML;
  });
}

// Get random projects from an array
function getRandomProjects(projects, count) {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Get SVG icon based on icon name
function getIconSVG(iconName) {
  switch(iconName) {
    case 'blog':
      return `<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512 512" xml:space="preserve">
              <g>
                <g>
                  <g>
                    <path d="M93.238,220.968h172.463c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084H93.238
                      c-4.466,0-8.084,3.619-8.084,8.084S88.772,220.968,93.238,220.968z"/>
                    <path d="M93.238,177.853h97.01c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084h-97.01
                      c-4.466,0-8.084,3.619-8.084,8.084S88.772,177.853,93.238,177.853z"/>
                    <path d="M114.796,398.282h280.253c16.344,0,29.642-13.298,29.642-29.642v-91.082c0-5.206-1.371-10.333-3.968-14.822
                      c-2.233-3.865-7.179-5.189-11.044-2.953c-3.866,2.233-5.188,7.179-2.953,11.044c1.176,2.034,1.797,4.362,1.797,6.732v91.082
                      c0,7.43-6.044,13.474-13.474,13.474H114.796c-7.43,0-13.474-6.044-13.474-13.474v-91.082c0-7.43,6.044-13.474,13.474-13.474
                      h150.905c4.466,0,8.084-3.619,8.084-8.084c0-4.466-3.618-8.084-8.084-8.084H114.796c-16.344,0-29.642,13.298-29.642,29.642
                      v91.082C85.154,384.984,98.452,398.282,114.796,398.282z"/>
                    <path d="M477.068,412.237c1.684-5.067,2.596-10.484,2.596-16.11V158.989c0-28.231-22.969-51.2-51.2-51.2h-45.81V29.642
                      C382.653,13.298,369.355,0,353.01,0h-21.558c-16.344,0-29.642,13.298-29.642,29.642v78.147H83.537
                      c-28.231,0-51.2,22.969-51.2,51.2v237.137c0,5.627,0.912,11.043,2.596,16.11C14.43,419.065,0,438.368,0,460.8
                      C0,489.031,22.969,512,51.2,512h409.6c28.231,0,51.2-22.969,51.2-51.2C512,438.368,497.57,419.065,477.068,412.237z
                      M317.979,29.642c0-7.43,6.044-13.474,13.474-13.474h21.558c7.43,0,13.474,6.044,13.474,13.474v13.474h-48.505V29.642z
                      M366.484,59.284v188.632h-16.168V59.284H366.484z M317.979,59.284h16.168v188.632h-16.168V59.284z M317.979,264.084h48.505
                      v20.66c0,0.579-0.192,1.153-0.539,1.617l-21.558,28.743c-0.704,0.938-1.652,1.078-2.156,1.078c-0.503,0-1.452-0.14-2.156-1.078
                      l-21.557-28.741c-0.348-0.466-0.54-1.04-0.54-1.619V264.084z M48.505,158.989c0-19.317,15.715-35.032,35.032-35.032h218.274
                      v37.726h-57.667c-4.466,0-8.084,3.619-8.084,8.084s3.618,8.084,8.084,8.084h57.667v106.892c0,4.053,1.339,8.071,3.773,11.318
                      l21.558,28.743c3.596,4.796,9.096,7.545,15.091,7.545c5.994,0,11.495-2.75,15.091-7.545l21.559-28.745
                      c2.433-3.244,3.772-7.263,3.772-11.316v-63.776h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954
                      v-26.947h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954v-37.726h45.81
                      c19.317,0,35.032,15.715,35.032,35.032v237.137c0,19.317-15.715,35.032-35.032,35.032H83.537
                      c-19.317,0-35.032-15.715-35.032-35.032V158.989z M460.8,495.832H51.2c-19.317,0-35.032-15.715-35.032-35.032
                      c0-16.257,11.071-30.113,26.426-33.963c9.349,12.434,24.222,20.49,40.943,20.49h344.926c16.72,0,31.594-8.056,40.943-20.49
                      c15.355,3.85,26.426,17.707,26.426,33.963C495.832,480.117,480.117,495.832,460.8,495.832z"/>
                    <path d="M235.52,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
                      c4.466,0,8.084-3.618,8.084-8.084C243.604,467.113,239.986,463.495,235.52,463.495z"/>
                    <path d="M433.853,463.495H272.168c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h161.684
                      c4.466,0,8.084-3.618,8.084-8.084C441.937,467.113,438.318,463.495,433.853,463.495z"/>
                    <path d="M202.105,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
                      c4.466,0,8.084-3.618,8.084-8.084C210.189,467.113,206.571,463.495,202.105,463.495z"/>
                    <path d="M164.379,463.495H78.147c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h86.232
                      c4.466,0,8.084-3.618,8.084-8.084C172.463,467.113,168.845,463.495,164.379,463.495z"/>
                  </g>
                </g>
              </g>
            </svg>`;
    case 'location':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>`;
    case 'tooth':
      return `<img src="img/tooth.svg" alt="Tooth Icon" class="project-icon tooth-icon" style="width: 220px; height: 220px; display: block; margin: 0 auto;">`;
    case 'game':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.128 9.155a3.751 3.751 0 11.713-1.321l1.136.656a.75.75 0 01.222 1.104l-.006.007a.75.75 0 01-1.032.157 1.421 1.421 0 00-.113-.072l-.92-.531zm-4.827-3.53a2.25 2.25 0 013.994 2.063.756.756 0 00-.122.23 2.25 2.25 0 01-3.872-2.293zM13.348 8.272a5.073 5.073 0 00-3.428 3.57c-.101.387-.158.79-.165 1.202a1.415 1.415 0 01-.707 1.201l-.96.554a3.751 3.751 0 10.734 1.309l13.729-7.926a.75.75 0 00-.181-1.374l-.803-.215a5.25 5.25 0 00-2.894.05l-5.325 1.629zm-9.223 7.03a2.25 2.25 0 102.25 3.897 2.25 2.25 0 00-2.25-3.897zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              <path d="M16.372 12.615a.75.75 0 01.75 0l5.43 3.135a.75.75 0 01-.182 1.374l-.802.215a5.25 5.25 0 01-2.894-.051l-5.147-1.574a.75.75 0 01-.156-1.367l3-1.732z" />
            </svg>`;
    case 'computer':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
            </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
            </svg>`;
  }
}

// Switch between light and dark mode
function switchMode() {
  var element = document.body;
  element.classList.toggle("light_mode");
  
  // Update live preview links
  var liveLinks = document.querySelectorAll(".live-preview");
  for (var i = 0; i < liveLinks.length; i++) {
    liveLinks[i].classList.toggle('dark-text');
  }
  
  // Update hyperlinks (for project list pages)
  var links = document.querySelectorAll(".hyperlink");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle('dark-text');
  }
}

// Toggle between English and Spanish
function toggleLanguage() {
  const enElements = document.querySelectorAll('.lang-en');
  const esElements = document.querySelectorAll('.lang-es');
  
  // First hide/show text elements
  enElements.forEach(el => {
    if (!el.closest('.profile-image')) {
      // Special handling for buttons in hero section
      if (el.classList.contains('btn')) {
        el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
      } 
      // Special handling for navigation links
      else if (el.tagName === 'A' && el.closest('nav')) {
        el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
      }
      else {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  
  esElements.forEach(el => {
    if (!el.closest('.profile-image')) {
      // Special handling for buttons in hero section
      if (el.classList.contains('btn')) {
        el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
      }
      // Special handling for navigation links
      else if (el.tagName === 'A' && el.closest('nav')) {
        el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
      }
      else {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  
  // Make sure profile image stays visible
  document.querySelector('.profile-image').style.display = 'block';
  
  // Initialize appropriate typing animation based on language
  if (enElements[0].style.display === 'none') {
    if (!typedEs) {
      initTypedEs();
    }
  } else {
    if (!typedEn) {
      initTypedEn();
    }
  }
}

// Variables for typed.js instances
let typedEn = null;
let typedEs = null;

// Initialize English typing animation
function initTypedEn() {
  if (typeof Typed !== 'undefined') {
    typedEn = new Typed(".typing-text-en", {
      strings: ["websites", "applications", "automations", "solutions"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    });
  }
}

// Initialize Spanish typing animation
function initTypedEs() {
  if (typeof Typed !== 'undefined') {
    typedEs = new Typed(".typing-text-es", {
      strings: ["sitios web", "aplicaciones", "automatizaciones", "soluciones"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    });
  }
}

// Send email from contact form
function sendEmail() {
  // Get values from visible inputs based on language
  const isEnglish = document.querySelector('.lang-en').style.display !== 'none';
  const name = isEnglish ? document.getElementById("name").value : document.getElementById("name-es").value;
  const email = isEnglish ? document.getElementById("email").value : document.getElementById("email-es").value;
  const message = isEnglish ? document.getElementById("message").value : document.getElementById("message-es").value;

  const subject = isEnglish ? "Contact Form Submission" : "Envío del formulario de contacto";
  const body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  const mailtoLink = "mailto:flautomationsok@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

// Refresh projects - can be called to get new random projects
function refreshProjects() {
  const container = document.querySelector('.projects-container');
  
  if (container) {
    // First fade out existing projects
    const projects = container.querySelectorAll('.project');
    
    projects.forEach((project, index) => {
      setTimeout(() => {
        project.style.transition = 'all 0.3s ease';
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
      }, index * 50); // Staggered animation
    });
    
    // Then load new projects after animation completes
    setTimeout(() => {
      // Create new projects but keep them hidden initially
      const nonFeaturedProjects = allProjects.filter(project => !project.featured);
      const randomProjects = getRandomProjects(nonFeaturedProjects, 9);
      
      // Clear the container
      container.innerHTML = '';
      
      // Add new projects with opacity 0
      randomProjects.forEach(project => {
        const projectHTML = `
          <div class="project" style="opacity: 0; transform: translateY(20px);">
            <h2>${project.title}</h2>
            <p class="lang-en">${project.description.en}</p>
            <p class="lang-es" style="display: none;">${project.description.es}</p>
            <div class="project-links">
              <a href="${project.url}" target="_blank" class="hyperlink" title="Live Preview">
                <i class="fa-solid fa-eye"></i>
              </a>
              <a href="mailto:flucena.dev@gmail.com?subject=Suggestion for ${encodeURIComponent(project.title)}" class="hyperlink lang-en" title="Suggest Ideas">
                <i class="fa-solid fa-lightbulb"></i>
              </a>
              <a href="mailto:flucena.dev@gmail.com?subject=Sugerencia para ${encodeURIComponent(project.title)}" class="hyperlink lang-es" style="display: none;" title="Sugerir Ideas">
                <i class="fa-solid fa-lightbulb"></i>
              </a>
            </div>
          </div>
        `;
        
        container.innerHTML += projectHTML;
      });
      
      // Now fade them in with staggered effect
      const newProjects = container.querySelectorAll('.project');
      newProjects.forEach((project, index) => {
        setTimeout(() => {
          project.style.transition = 'all 0.5s ease';
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, index * 100); // Staggered animation
      });
    }, 500); // Wait for fade out to complete
  } else {
    displayRandomProjects();
  }
} 