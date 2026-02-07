// ================= MOBILE MENU LOGIC =================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("active");
    if (isOpen) {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    } else {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) toggleMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
      toggleMenu();
    }
  });
});

// ================= NAVBAR ACTIVE STATE =================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (current && link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Navbar scroll effect - only shadow change
  const nav = document.querySelector('.navbar-glass');
  if (nav && scrollY > 100) {
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.15)';
  } else if (nav) {
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(56, 189, 248, 0.1)';
  }
});

// ================= COPY EMAIL FUNCTIONALITY =================
function copyEmail(event) {
  event.preventDefault();
  const email = 'dilpreetsinghtha382@gmail.com';

  // Copy to clipboard
  navigator.clipboard.writeText(email).then(() => {
    // Show toast notification
    showToast('Email copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}

function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
  document.body.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ================= REVEAL ANIMATIONS =================
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================= LEETCODE STATS AUTO-UPDATE =================
async function fetchLeetCodeStats() {
  const username = 'dilpreetsingh61'; // Your LeetCode username
  
  try {
    // Using LeetCode's public API endpoint
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    const data = await response.json();
    
    // Update the stats in the DOM
    if (data.totalSolved !== undefined) {
      updateStatElement('total-solved', data.totalSolved);
      updateStatElement('about-total-solved', data.totalSolved);
      updateStatElement('easy-solved', data.easySolved);
      updateStatElement('medium-solved', data.mediumSolved);
      updateStatElement('hard-solved', data.hardSolved);
      
      // Calculate and update category-specific stats
      const treesGraphs = Math.floor(data.totalSolved * 0.25); // Approximate
      const dp = Math.floor(data.totalSolved * 0.175); // Approximate
      updateStatElement('trees-graphs-count', treesGraphs);
      updateStatElement('dp-count', dp);
    }
    
    console.log('✅ LeetCode stats updated successfully');
  } catch (error) {
    console.warn('⚠️ Could not fetch LeetCode stats, using fallback values:', error.message);
    // Fallback to existing hardcoded values - no change needed
  }
}

function updateStatElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    // Animate the number change
    const currentValue = parseInt(element.textContent) || 0;
    animateValue(element, currentValue, value, 1000);
  }
}

function animateValue(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Fetch stats when page loads
document.addEventListener('DOMContentLoaded', fetchLeetCodeStats);
