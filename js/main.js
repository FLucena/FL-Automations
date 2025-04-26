// Main JavaScript file for FL Automations

// Global variable to store all projects
let allProjects = [];

// Tech icon mapping
const techIcons = {
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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
    name: 'TailwindCSS'
  }
};

// Available tech tags
const availableTechTags = [
  'nextjs', 'react', 'javascript', 'typescript', 'python', 
  'flutter', 'streamlit', 'threejs', 'html', 'css', 'tailwind'
];

let currentTechIconIndex = 0;
let isFlipped = false;

// Modal variables
let currentPage = 1;
const projectsPerPage = 6;
let filteredProjects = [];
let activeTechFilters = [];

// Coin flip icons
const coinFlipIcons = [
  { name: 'Next.js', url: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
  { name: 'Tailwind CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Google Apps Script', url: 'https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png' },
  { name: 'Google Sheets', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png' },
  { name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
  { name: 'TypeScript', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
  { name: 'Python', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' }
];

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
  
  // Mobile menu toggle - Updated to fix passive event issues
  initMobileMenu();
  
  // Initialize modal functionality
  initProjectsModal();
});

// Initialize projects modal functionality
function initProjectsModal() {
  // Modal elements
  const modal = document.getElementById('projects-modal');
  const viewAllBtn = document.getElementById('view-all-projects');
  const viewAllBtnEs = document.getElementById('view-all-projects-es');
  const closeBtn = document.querySelector('.close-modal');
  const searchInput = document.getElementById('project-search');
  const searchInputEs = document.getElementById('project-search-es');
  const filterContainer = document.getElementById('filter-tags');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const paginationNumbers = document.getElementById('pagination-numbers');
  
  // Create tech filter tags
  createTechFilterTags();
  
  // Open modal when clicking "View all projects"
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }
  
  if (viewAllBtnEs) {
    viewAllBtnEs.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }
  
  // Close modal functionality
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Close modal when clicking outside of content
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Add Escape key support to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });
  
  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentPage = 1;
      updateClearButtonVisibility();
      filterAndDisplayProjects();
    });
  }
  
  if (searchInputEs) {
    searchInputEs.addEventListener('input', function() {
      currentPage = 1;
      updateClearButtonVisibility();
      filterAndDisplayProjects();
    });
  }
  
  // Pagination buttons
  if (prevPageBtn) {
    prevPageBtn.addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        displayPaginatedProjects();
        updatePaginationUI();
      }
    });
  }
  
  if (nextPageBtn) {
    nextPageBtn.addEventListener('click', function() {
      const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedProjects();
        updatePaginationUI();
      }
    });
  }
}

// Create tech filter tags
function createTechFilterTags() {
  const filterContainer = document.getElementById('filter-tags');
  if (!filterContainer) return;
  
  filterContainer.innerHTML = '';
  
  // Create tech filter buttons
  availableTechTags.forEach(tech => {
    const techInfo = techIcons[tech];
    
    const tagElement = document.createElement('button');
    tagElement.className = 'filter-tag';
    tagElement.dataset.tech = tech;
    tagElement.dataset.tooltip = techInfo.name;
    
    // Create image element for the tech icon
    const imgElement = document.createElement('img');
    imgElement.src = techInfo.icon;
    imgElement.alt = techInfo.name;
    imgElement.loading = 'lazy';
    imgElement.className = 'filter-icon';
    
    // Add fallback in case image doesn't load
    imgElement.onerror = function() {
      this.style.display = 'none';
      tagElement.textContent = techInfo.name.charAt(0);
    };
    
    // Additional validation for empty images that may not trigger onerror
    imgElement.onload = function() {
      if (this.naturalWidth === 0 || this.naturalHeight === 0) {
        this.onerror();
      }
    };
    
    tagElement.appendChild(imgElement);
    
    tagElement.addEventListener('click', function() {
      this.classList.toggle('active');
      
      const tech = this.dataset.tech;
      if (this.classList.contains('active')) {
        // Add to filters
        if (!activeTechFilters.includes(tech)) {
          activeTechFilters.push(tech);
        }
      } else {
        // Remove from filters
        activeTechFilters = activeTechFilters.filter(t => t !== tech);
      }
      
      // Show/hide clear button based on if there are active filters or search text
      updateClearButtonVisibility();
      
      // Reset to first page when filter changes
      currentPage = 1;
      filterAndDisplayProjects();
    });
    
    filterContainer.appendChild(tagElement);
  });
  
  // Add a clear filters button below the search box
  const searchArea = document.querySelector('.search-area');
  if (!searchArea) return;
  
  // Remove existing clear button if any
  const existingClearButton = document.querySelector('.clear-filters');
  if (existingClearButton) {
    existingClearButton.remove();
  }
  
  const clearButton = document.createElement('button');
  clearButton.className = 'clear-filters';
  clearButton.innerHTML = '<i class="fa-solid fa-xmark"></i> Clear Filters';
  clearButton.disabled = true; // Initially disabled since no filters are active
  
  clearButton.addEventListener('click', function() {
    if (this.disabled) return;
    
    // Reset active filters
    activeTechFilters = [];
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.classList.remove('active');
    });
    
    // Clear search input
    const searchInput = document.getElementById('project-search');
    const searchInputEs = document.getElementById('project-search-es');
    if (searchInput) searchInput.value = '';
    if (searchInputEs) searchInputEs.value = '';
    
    // Disable clear button
    this.disabled = true;
    
    // Reset to first page and refresh display
    currentPage = 1;
    filterAndDisplayProjects();
  });
  
  // Append to search area
  searchArea.appendChild(clearButton);
}

// Add helper function to update clear button visibility
function updateClearButtonVisibility() {
  const clearButton = document.querySelector('.clear-filters');
  const searchInput = document.getElementById('project-search');
  const searchInputEs = document.getElementById('project-search-es');
  
  if (!clearButton) return;
  
  const hasActiveFilters = activeTechFilters.length > 0;
  const hasSearchText = (searchInput && searchInput.value.trim() !== '') || 
                        (searchInputEs && searchInputEs.value.trim() !== '');
  
  // Always keep the button visible, but disable it when no filters are active
  clearButton.disabled = !(hasActiveFilters || hasSearchText);
}

// Filter and display projects
function filterAndDisplayProjects() {
  const searchInput = document.getElementById('project-search');
  const searchInputEs = document.getElementById('project-search-es');
  const searchTerm = searchInput.value.toLowerCase() || searchInputEs.value.toLowerCase();
  
  // Update clear button visibility
  updateClearButtonVisibility();
  
  // Filter projects based on search term and active filters
  filteredProjects = allProjects.filter(project => {
    // Search term filter
    const titleMatch = project.title.toLowerCase().includes(searchTerm);
    const descEnMatch = project.description.en.toLowerCase().includes(searchTerm);
    const descEsMatch = project.description.es.toLowerCase().includes(searchTerm);
    const contentMatch = titleMatch || descEnMatch || descEsMatch;
    
    // Tech filters
    let techMatch = true;
    if (activeTechFilters.length > 0) {
      const projectTechs = project.technologies || [];
      techMatch = activeTechFilters.every(tech => projectTechs.includes(tech));
    }
    
    return contentMatch && techMatch;
  });
  
  // Reset to first page when filters change
  currentPage = Math.min(currentPage, Math.max(1, filteredProjects.length));
  
  // Display paginated results (now as carousel)
  displayPaginatedProjects();
  updatePaginationUI();
}

// Function to navigate to the next project
function goToNextProject() {
  if (filteredProjects.length <= 1) return;
  
  currentPage = currentPage >= filteredProjects.length ? 1 : currentPage + 1;
  displayPaginatedProjects('slide-in-right');
  updatePaginationUI();
}

// Function to navigate to the previous project
function goToPreviousProject() {
  if (filteredProjects.length <= 1) return;
  
  currentPage = currentPage <= 1 ? filteredProjects.length : currentPage - 1;
  displayPaginatedProjects('slide-in-left');
  updatePaginationUI();
}

// Function to handle keyboard navigation
function handleCarouselKeyboard(e) {
  if (document.getElementById('projects-modal').style.display !== 'block') {
    // Remove the event listener when the modal is closed
    document.removeEventListener('keydown', handleCarouselKeyboard);
    return;
  }
  
  if (e.key === 'ArrowLeft') {
    goToPreviousProject();
  } else if (e.key === 'ArrowRight') {
    goToNextProject();
  }
}

// Update language display in modal
function updateLanguageDisplayInModal() {
  const enVisible = document.querySelector('.lang-en:not([style*="display: none"])');
  
  if (enVisible) {
    // English is visible
    document.querySelectorAll('#projects-modal .lang-en').forEach(el => {
      el.style.display = '';
    });
    document.querySelectorAll('#projects-modal .lang-es').forEach(el => {
      el.style.display = 'none';
    });
  } else {
    // Spanish is visible
    document.querySelectorAll('#projects-modal .lang-en').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll('#projects-modal .lang-es').forEach(el => {
      el.style.display = '';
    });
  }
}

// Update pagination UI
function updatePaginationUI() {
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const paginationNumbers = document.getElementById('pagination-numbers');
  
  if (!prevPageBtn || !nextPageBtn || !paginationNumbers) return;
  
  // Calculate total pages
  const totalPages = filteredProjects.length;
  
  // Enable/disable prev/next buttons
  prevPageBtn.disabled = false;
  nextPageBtn.disabled = false;
  
  // Generate page numbers
  paginationNumbers.innerHTML = '';
  
  if (totalPages > 0) {
    paginationNumbers.innerHTML = `<span class="current-page">${currentPage}</span> / <span class="total-pages">${totalPages}</span>`;
  }
}

// Get HTML for tech tags
function getTechTagsHTML(technologies, shouldLimitTags = false) {
  let techTagsHTML = '';
  const maxVisibleTags = 3; // Maximum number of tags to show when limiting
  
  // If technologies is null or undefined, return empty string
  if (!technologies) return '';
  
  // Limit the number of tags if shouldLimitTags is true
  const visibleTechnologies = shouldLimitTags 
    ? technologies.slice(0, maxVisibleTags) 
    : technologies;
  
  // Generate HTML for visible tech tags with tooltips
  visibleTechnologies.forEach(tech => {
    const techInfo = techIcons[tech] || { name: tech };
    const displayName = techInfo.name || tech;
    const iconUrl = techInfo.icon || '';
    
    techTagsHTML += `
      <span class="tech-tag" data-tooltip="${displayName}">
        <img src="${iconUrl}" alt="${displayName}" class="tech-icon-small">
      </span>`;
  });
  
  // Show +X more if there are hidden technologies
  if (shouldLimitTags && technologies.length > maxVisibleTags) {
    const moreCount = technologies.length - maxVisibleTags;
    const hiddenTechs = technologies.slice(maxVisibleTags).map(tech => {
      const techInfo = techIcons[tech] || { name: tech };
      return techInfo.name || tech;
    }).join(', ');
    
    techTagsHTML += `<span class="tech-tag more-tag" data-tooltip="${hiddenTechs}">+${moreCount}</span>`;
  }
  
  return `<div class="tech-tags">${techTagsHTML}</div>`;
}

// Initialize mobile menu functionality
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (!mobileMenuToggle || !nav) return;
  
  // Toggle mobile menu on click
  mobileMenuToggle.addEventListener('click', function(e) {
    toggleMobileMenu(nav, mobileMenuToggle);
  });
  
  // Add keyboard accessibility for the mobile menu toggle
  mobileMenuToggle.addEventListener('keydown', function(e) {
    // Toggle on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu(nav, mobileMenuToggle);
    }
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (nav.classList.contains('mobile-nav-open')) {
        toggleMobileMenu(nav, mobileMenuToggle, false);
      }
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    // Don't process if menu is already closed
    if (!nav.classList.contains('mobile-nav-open')) return;
    
    // Check if click is outside menu and toggle
    if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      toggleMobileMenu(nav, mobileMenuToggle, false);
    }
  });
  
  // Helper function to toggle mobile menu state
  function toggleMobileMenu(nav, toggle, forceState) {
    const newState = forceState !== undefined ? forceState : !nav.classList.contains('mobile-nav-open');
    
    if (newState) {
      nav.classList.add('mobile-nav-open');
      toggle.classList.add('active');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.remove('mobile-nav-open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
}

// Initialize the coin flip functionality
function initCoinFlip() {
  const coin = document.querySelector('.coin');
  const techIcon = document.getElementById('tech-icon');
  const profileImg = document.querySelector('.profile-img');
  
  if (!coin || !techIcon) return;
  
  // Set initial tech icon
  updateTechIcon();
  
  // Variables for drag functionality
  let isDragging = false;
  let startX, startY;
  let rotateX = 0, rotateY = 0;
  let lastRotateX = 0, lastRotateY = 0;
  let returnToOriginalTimeout;
  let isFlipped = false;
  
  // Prevent browser's default image dragging behavior
  if (profileImg) {
    profileImg.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  }
  
  // Prevent default drag on the coin and its children
  coin.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  
  // Mouse down event
  coin.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent default browser drag behavior
    clearTimeout(returnToOriginalTimeout);
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
    } else {
      // Return to original position immediately when not flipped
      returnToOriginalPosition();
    }
  });
  
  // Mouse out event - return to original position immediately
  coin.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      
      // If not flipped, return to original position immediately
      if (!isFlipped) {
        returnToOriginalPosition();
      }
    } else {
      // If already not dragging, start the timeout
      startReturnToOriginalTimeout();
    }
  });
  
  // Touch events for mobile - Modified to prevent default behavior
  coin.addEventListener('touchstart', (e) => {
    clearTimeout(returnToOriginalTimeout);
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    coin.style.transition = 'none';
  }, { passive: false });
  
  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    // Prevent default scrolling when dragging the coin
    if (e.target === coin || coin.contains(e.target)) {
      e.preventDefault();
    }
    
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
    
    rotateY = lastRotateY + deltaX * 0.5;
    rotateX = lastRotateX - deltaY * 0.5;
    
    // Update coin rotation
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Check if coin is flipped
    isFlipped = Math.abs(rotateY % 360) > 90 && Math.abs(rotateY % 360) < 270;
  }, { passive: false });
  
  // Touch end event
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
    } else {
      // Return to original position immediately when not flipped
      returnToOriginalPosition();
    }
  }, { passive: true });
  
  // Touch leave - return to original position immediately
  coin.addEventListener('touchleave', () => {
    if (isDragging) {
      isDragging = false;
      
      // If not flipped, return to original position immediately
      if (!isFlipped) {
        returnToOriginalPosition();
      }
    } else {
      // If already not dragging, start the timeout
      startReturnToOriginalTimeout();
    }
  }, { passive: true });
  
  // Double click to flip the coin - using touchend for mobile as well
  coin.addEventListener('dblclick', flipCoin);
  
  // Add a tap handler for mobile - fixed to avoid conflicts
  let lastTap = 0;
  coin.addEventListener('touchend', (e) => {
    // Skip if we're dragging (this is part of the coin rotation)
    if (isDragging) return;
    
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
      flipCoin();
      // Don't try to prevent default on passive listeners
      // This part is for "double tap" detection only
    }
    
    lastTap = currentTime;
  }, { passive: true });
  
  // Function to gradually return the coin to its original position
  function startReturnToOriginalTimeout() {
    clearTimeout(returnToOriginalTimeout);
    
    // Only return to original position if not deliberately flipped
    if (!isFlipped || rotateY % 360 === 0) {
      returnToOriginalTimeout = setTimeout(() => {
        returnToOriginalPosition();
      }, 2000); // Wait 2 seconds of inactivity before returning
    }
  }
  
  // New function to return coin to original position with smooth animation
  function returnToOriginalPosition() {
    // Use a faster animation for the return-to-origin than for the idle timeout
    // This makes it feel more responsive when directly interacting
    coin.style.transition = 'transform 3.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    // First reset variables
    rotateX = 0;
    rotateY = 0;
    lastRotateX = 0;
    lastRotateY = 0;
    
    // Then apply transform
    coin.style.transform = `rotateX(0deg) rotateY(0deg)`;
    
    // Clear any existing timeouts to prevent conflicts
    clearTimeout(returnToOriginalTimeout);
  }
  
  function flipCoin() {
    clearTimeout(returnToOriginalTimeout);
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
  }
}

// Update the tech icon on the back of the coin
function updateTechIcon() {
  const techIcon = document.getElementById('tech-icon');
  const coinBack = document.querySelector('.coin-back');
  if (!techIcon || !coinBack) return;
  
  // Update to next tech icon
  currentTechIconIndex = (currentTechIconIndex + 1) % coinFlipIcons.length;
  const icon = coinFlipIcons[currentTechIconIndex];
  
  // Update the tech icon
  techIcon.src = icon.url;
  techIcon.alt = icon.name + ' icon';
  
  // Add data-tooltip attribute to the parent container for tooltips
  coinBack.setAttribute('data-tooltip', icon.name);
  
  // Add error handling for icon loading
  techIcon.onerror = function() {
    console.error(`Failed to load tech icon: ${icon.name}`);
    // Set a fallback text or icon
    const coin = document.querySelector('.coin-back');
    if (coin) {
      this.style.display = 'none';
      // Add fallback text if the icon doesn't load
      if (!coin.querySelector('.icon-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'icon-fallback';
        fallback.textContent = icon.name.charAt(0);
        fallback.style.fontSize = '36px';
        fallback.style.fontWeight = 'bold';
        coin.appendChild(fallback);
      } else {
        coin.querySelector('.icon-fallback').textContent = icon.name.charAt(0);
        coin.querySelector('.icon-fallback').style.display = 'block';
      }
    }
  };
  
  // Clear fallback if image loads successfully
  techIcon.onload = function() {
    this.style.display = 'block';
    const fallback = document.querySelector('.coin-back .icon-fallback');
    if (fallback) {
      fallback.style.display = 'none';
    }
  };
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
          "icon": "tooth"
        },
        {
          "id": 3,
          "title": "Rock-Paper-Scissors Game!",
          "description": {
            "en": "Engaging rock-paper-scissors game. Enjoy addictive gameplay.",
            "es": "Juego atractivo de piedra-papel-tijeras. Disfruta de una jugabilidad adictiva."
          },
          "url": "https://react-game-rock-paper-scissors.vercel.app/",
          "featured": false,
          "icon": "game"
        },
        {
          "id": 14,
          "title": "FinSave",
          "description": {
            "en": "FinSave is a platform that helps you save money and achieve your financial goals.",
            "es": "FinSave es una plataforma que te ayuda a ahorrar dinero y alcanzar tus objetivos financieros."
          },
          "url": "https://finsave.vercel.app/",
          "featured": true,
          "icon": "computer"
        }
        // Other projects...
      ];
      
      displayFeaturedProjects();
    });
}

// Display featured projects in the Projects section
function displayFeaturedProjects() {
  const featuredProjects = allProjects.filter(project => project.featured);
  const container = document.querySelector('.project-cards-container');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  featuredProjects.forEach((project, index) => {
    // Use project images instead of SVG icons
    let projectImage = '';
    
    // Map project titles to their respective image files
    if (project.title === 'FinSave') {
      projectImage = '<img src="img/Projects/finsave.png" alt="FinSave Project" class="project-image">';
    } else if (project.title === 'FL Automations') {
      projectImage = '<img src="img/Projects/flautomations.png" alt="FL Automations Project" class="project-image">';
    } else if (project.title === 'Dental Start') {
      projectImage = '<img src="img/Projects/dental-start.webp" alt="Dental Start Project" class="project-image">';
    } else {
      // Fallback to using SVG if no matching image
      projectImage = getIconSVG(project.icon);
    }
    
    // Get tech tags for this project
    const techTagsHTML = getTechTagsHTML(project.technologies, true);
    
    const projectHTML = `
      <div class="projects-div flex div-${index + 1} project-card" data-aos="zoom-in" data-aos-delay="${100 * (index + 1)}">
        <div class="image-container">
          ${projectImage}
        </div>
        
        <h3>${project.title}</h3>
        ${techTagsHTML}
        <p class="lang-en">
          ${project.description.en}
        </p>
        <p class="lang-es" style="display: none;">
          ${project.description.es}
        </p>
        <div class="project-links">
          <a href="${project.url}" target="_blank" class="live-preview" title="Live Preview" aria-label="Visit live project">
            <i class="fa-solid fa-eye"></i>
          </a>
          <a href="mailto:flucena.dev@gmail.com?subject=Suggestion for ${encodeURIComponent(project.title)}" class="live-preview lang-en" title="Suggest Ideas" aria-label="Suggest ideas for this project">
            <i class="fa-solid fa-lightbulb"></i>
          </a>
          <a href="mailto:flucena.dev@gmail.com?subject=Sugerencia para ${encodeURIComponent(project.title)}" class="live-preview lang-es" style="display: none;" title="Sugerir Ideas" aria-label="Sugerir ideas para este proyecto">
            <i class="fa-solid fa-lightbulb"></i>
          </a>
        </div>
      </div>
    `;
    
    container.innerHTML += projectHTML;
  });
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
  
  // Update language display in modal if it's open
  updateLanguageDisplayInModal();
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
  const nameInput = isEnglish ? document.getElementById("name") : document.getElementById("name-es");
  const emailInput = isEnglish ? document.getElementById("email") : document.getElementById("email-es");
  const messageInput = isEnglish ? document.getElementById("message") : document.getElementById("message-es");
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  // Validate inputs
  let isValid = true;
  
  // Reset previous error states
  [nameInput, emailInput, messageInput].forEach(input => {
    input.classList.remove('error');
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
  });
  
  // Name validation
  if (!name) {
    displayError(nameInput, isEnglish ? 'Name is required' : 'Nombre es requerido');
    isValid = false;
  }
  
  // Email validation
  if (!email) {
    displayError(emailInput, isEnglish ? 'Email is required' : 'Email es requerido');
    isValid = false;
  } else if (!isValidEmail(email)) {
    displayError(emailInput, isEnglish ? 'Please enter a valid email' : 'Por favor ingresa un email válido');
    isValid = false;
  }
  
  // Message validation
  if (!message) {
    displayError(messageInput, isEnglish ? 'Message is required' : 'Mensaje es requerido');
    isValid = false;
  }
  
  if (!isValid) return;
  
  // Show loading state
  const submitBtn = isEnglish ? 
    document.querySelector('.send.lang-en') : 
    document.querySelector('.send.lang-es');
  const originalText = submitBtn.value;
  submitBtn.value = isEnglish ? 'Sending...' : 'Enviando...';
  submitBtn.disabled = true;
  
  // Option 1: Send via mailto as fallback
  const subject = isEnglish ? "Contact Form Submission" : "Envío del formulario de contacto";
  const body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  // Here you would typically send data to a server endpoint
  // For demonstration, using a timeout to simulate API call
  setTimeout(() => {
    try {
      // Simulate successful API call (in a real app, this would be an actual API request)
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = isEnglish ? 
        'Message sent successfully! I will get back to you soon.' : 
        '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.';
      
      const formContainer = submitBtn.closest('.submit-container');
      formContainer.appendChild(successMessage);
      
      // Reset form
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      
      // Reset button
      submitBtn.value = originalText;
      submitBtn.disabled = false;
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.remove();
        }
      }, 5000);
    } catch (error) {
      // In case of error, create error message with retry option
      const errorContainer = document.createElement('div');
      errorContainer.className = 'error-message form-error';
      errorContainer.style.marginLeft = '0';
      errorContainer.style.marginBottom = '1rem';
      
      const errorText = document.createElement('span');
      errorText.textContent = isEnglish ? 
        'Failed to send message. ' : 
        'Error al enviar el mensaje. ';
      
      const retryLink = document.createElement('a');
      retryLink.href = "mailto:flautomationsok@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      retryLink.textContent = isEnglish ? 'Try sending email directly' : 'Intenta enviar email directamente';
      retryLink.style.textDecoration = 'underline';
      retryLink.style.marginLeft = '0.5rem';
      
      errorContainer.appendChild(errorText);
      errorContainer.appendChild(retryLink);
      
      const formContainer = submitBtn.closest('.submit-container');
      formContainer.appendChild(errorContainer);
      
      // Reset button
      submitBtn.value = originalText;
      submitBtn.disabled = false;
    }
  }, 1500);
}

function displayError(input, message) {
  input.classList.add('error');
  
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  
  input.parentElement.appendChild(errorMessage);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Open modal
function openModal() {
  const modal = document.getElementById('projects-modal');
  if (modal) {
    // Reset filters and search
    activeTechFilters = [];
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.classList.remove('active');
    });
    document.getElementById('project-search').value = '';
    document.getElementById('project-search-es').value = '';
    
    // Reset clear filters button - make it disabled instead of hiding
    const clearButton = document.querySelector('.clear-filters');
    if (clearButton) {
      clearButton.disabled = true;
    }
    
    // Reset to first page
    currentPage = 1;
    
    // Reset filteredProjects to show all projects
    filteredProjects = [...allProjects];
    
    // Filter and display projects
    displayPaginatedProjects();
    updatePaginationUI();
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('projects-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Display paginated projects (Transformed to carousel)
function displayPaginatedProjects(animationClass = '') {
  const projectsContainer = document.getElementById('modal-projects');
  if (!projectsContainer) return;
  
  projectsContainer.innerHTML = '';
  
  if (filteredProjects.length === 0) {
    projectsContainer.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-search"></i>
        <p class="lang-en">No projects found matching your criteria.</p>
        <p class="lang-es" style="display: none;">No se encontraron proyectos que coincidan con tus criterios.</p>
      </div>
    `;
    return;
  }
  
  // Add current project
  const currentProject = filteredProjects[currentPage - 1];
  
  // Get tech tags for this project
  const techTagsHTML = getTechTagsHTML(currentProject.technologies, true);
  
  // Apply the animation class if provided
  const animationClassAttribute = animationClass ? ` ${animationClass}` : '';
  
  const projectHTML = `
    <div class="modal-project-card${animationClassAttribute}" data-index="${currentPage - 1}">
      <h3 class="modal-project-title">${currentProject.title}</h3>
      <p class="modal-project-description lang-en">${currentProject.description.en}</p>
      <p class="modal-project-description lang-es" style="display: none;">${currentProject.description.es}</p>
      ${techTagsHTML}
      <div class="modal-project-links">
        <a href="${currentProject.url}" target="_blank" title="Live Preview" aria-label="Visit live project">
          <i class="fa-solid fa-eye"></i>
        </a>
        <a href="mailto:flucena.dev@gmail.com?subject=Suggestion for ${encodeURIComponent(currentProject.title)}" class="lang-en" title="Suggest Ideas" aria-label="Suggest ideas for this project">
          <i class="fa-solid fa-lightbulb"></i>
        </a>
        <a href="mailto:flucena.dev@gmail.com?subject=Sugerencia para ${encodeURIComponent(currentProject.title)}" class="lang-es" style="display: none;" title="Sugerir Ideas" aria-label="Sugerir ideas para este proyecto">
          <i class="fa-solid fa-lightbulb"></i>
        </a>
      </div>
    </div>
  `;
  
  projectsContainer.innerHTML = projectHTML;
  
  // Only add navigation if there's more than one project
  if (filteredProjects.length > 1) {
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-nav carousel-prev';
    prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-nav carousel-next';
    nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    
    projectsContainer.appendChild(prevButton);
    projectsContainer.appendChild(nextButton);
    
    // Event listeners for navigation
    prevButton.addEventListener('click', goToPreviousProject);
    nextButton.addEventListener('click', goToNextProject);
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', handleCarouselKeyboard);
  
  // Make sure language display matches current state
  updateLanguageDisplayInModal();
} 