// Application data
const appData = {
  "portfolioItems": [
    {
      "id": 1,
      "title": "Twitch Channel Branding",
      "category": "Branding",
      "description": "Complete branding package for gaming streamer including logo, banner, and overlays"
    },
    {
      "id": 2,
      "title": "Logo Design Collection",
      "category": "Logos",
      "description": "Modern minimalist logos for various businesses and personal brands"
    },
    {
      "id": 3,
      "title": "Social Media Graphics",
      "category": "Social Media",
      "description": "Engaging social media posts and stories for Instagram and other platforms"
    },
    {
      "id": 4,
      "title": "Gaming Banners",
      "category": "Banners",
      "description": "High-impact banners for gaming channels and esports teams"
    },
    {
      "id": 5,
      "title": "Brand Identity Kit",
      "category": "Branding",
      "description": "Complete visual identity including logos, colors, and style guides"
    },
    {
      "id": 6,
      "title": "YouTube Thumbnails",
      "category": "Social Media",
      "description": "Eye-catching thumbnails that increase click-through rates"
    }
  ],
  "services": [
    {
      "name": "Logo Design",
      "description": "Professional logo design with multiple concepts and revisions",
      "price": "Starting at ₹2,000"
    },
    {
      "name": "Twitch/Gaming Branding",
      "description": "Complete streaming setup with logos, banners, and overlays",
      "price": "Starting at ₹5,000"
    },
    {
      "name": "Social Media Graphics",
      "description": "Custom graphics for Instagram, Facebook, Twitter and more",
      "price": "Starting at ₹500 per post"
    },
    {
      "name": "Banner Design",
      "description": "Web banners, YouTube banners, and promotional graphics",
      "price": "Starting at ₹1,500"
    }
  ],
  "testimonials": [
    {
      "name": "Gaming Streamer",
      "text": "Amazing work on my Twitch branding! Really helped my channel stand out.",
      "rating": 5,
      "project": "Twitch Branding Package"
    },
    {
      "name": "Small Business Owner",
      "text": "Professional logo design that perfectly captured our brand vision.",
      "rating": 5,
      "project": "Logo Design"
    },
    {
      "name": "Content Creator",
      "text": "Fast delivery and excellent quality social media graphics.",
      "rating": 4,
      "project": "Social Media Graphics"
    }
  ],
  "skills": [
    "Adobe Photoshop",
    "Adobe After Effects", 
    "Logo Design",
    "Brand Identity",
    "Social Media Graphics",
    "Gaming/Twitch Branding",
    "Typography",
    "Color Theory"
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeApp();
    }, 100);
});

function initializeApp() {
    renderSkills();
    renderPortfolio();
    renderServices();
    renderTestimonials();
    setupEventListeners();
    setupSmoothScrolling();
    handleScrollAnimations();
    updateActiveNavLink();
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = appData.skills.map(skill => `
        <div class="skill-item">${skill}</div>
    `).join('');
}

// Render Portfolio
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = appData.portfolioItems.map(item => `
        <div class="portfolio-item" data-category="${item.category}" data-id="${item.id}">
            <div class="portfolio-image">
                <span>Portfolio Image</span>
                <div class="portfolio-overlay">
                    <span>View Details</span>
                </div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-category">${item.category}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = appData.services.map(service => `
        <div class="service-item">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-price">${service.price}</div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial-item">
            <div class="testimonial-rating">
                ${generateStars(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-project">${testimonial.project}</div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">☆</span>';
        }
    }
    return stars;
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileNav();
        });
    }

    // Portfolio filtering
    setupPortfolioFiltering();

    // Portfolio modal
    setupPortfolioModal();

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(e);
        });
    }

    // Close mobile nav when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const navMenu = document.getElementById('navMenu');
            if (navMenu && navMenu.classList.contains('active')) {
                toggleMobileNav();
            }
        });
    });
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Add mobile menu styles dynamically
    if (navMenu.classList.contains('active')) {
        navMenu.style.cssText = `
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: var(--color-surface);
            border-top: 1px solid var(--color-card-border);
            padding: var(--space-16);
            gap: var(--space-16);
            box-shadow: var(--shadow-lg);
        `;
    } else {
        navMenu.style.cssText = '';
    }
}

// Portfolio Filtering
function setupPortfolioFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            filterPortfolioItems(filter);
        });
    });
}

function filterPortfolioItems(filter) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// Portfolio Modal
function setupPortfolioModal() {
    const portfolioModal = document.getElementById('portfolioModal');
    if (!portfolioModal) return;
    
    // Open modal when clicking portfolio items
    document.addEventListener('click', function(e) {
        e.preventDefault();
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            const itemId = parseInt(portfolioItem.getAttribute('data-id'));
            openPortfolioModal(itemId);
        }
    });

    // Close modal events
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            closePortfolioModal();
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closePortfolioModal();
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !portfolioModal.classList.contains('hidden')) {
            closePortfolioModal();
        }
    });
}

function openPortfolioModal(itemId) {
    const portfolioModal = document.getElementById('portfolioModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalImageText = document.getElementById('modalImageText');
    
    const item = appData.portfolioItems.find(p => p.id === itemId);
    if (!item || !portfolioModal) return;

    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modalDescription.textContent = item.description;
    modalImageText.textContent = `${item.title} Preview`;

    portfolioModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    const portfolioModal = document.getElementById('portfolioModal');
    if (!portfolioModal) return;
    
    portfolioModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Smooth Scrolling - Fixed implementation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const headerHeight = 80;
                const offsetTop = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handler - Fixed implementation
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        message: formData.get('message')
    };

    // Simple validation
    if (!data.name || !data.email || !data.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Show success message
    showFormMessage('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
}

function showFormMessage(message, type) {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `status status--${type}`;
    messageEl.textContent = message;
    messageEl.style.marginTop = 'var(--space-16)';

    // Remove existing messages
    const existingMessage = contactForm.parentNode.querySelector('.status');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Add message after form
    contactForm.parentNode.appendChild(messageEl);

    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 5000);
}

// Scroll-based animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.portfolio-item, .service-item, .testimonial-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add CSS for active nav links and animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--color-primary) !important;
        font-weight: var(--font-weight-semibold);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .portfolio-item {
        animation: fadeIn 0.5s ease-in-out;
    }

    /* Fix for mobile navigation */
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: var(--color-surface);
            border-top: 1px solid var(--color-card-border);
            padding: var(--space-16);
            gap: var(--space-16);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
        }
    }
`;
document.head.appendChild(style);