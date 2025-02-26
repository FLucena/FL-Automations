// Main JavaScript file for FL Automations

// Initialize AOS library for animations
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
  
  // Initialize English typing animation
  initTypedEn();
  
  // Set up profile image error handling
  const profileImg = document.querySelector('.profile-image img');
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
});

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

// Load projects dynamically (for future enhancement)
function loadProjects(language) {
  // This function could be used to dynamically load projects from a JSON file
  // or API in the future instead of hardcoding them in HTML
  console.log("Projects would be loaded in " + language);
} 