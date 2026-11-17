// ========================================
// Chris Amani Cars - JavaScript
// ========================================

// Services Data
const services = [
    {
        title: "Interior & Exterior Detailing",
        icon: "fas fa-spray-can",
        desc: "Complete deep cleaning of your vehicle's interior and exterior. Vacuuming, shampooing, leather treatment, and exterior wash to restore showroom shine.",
        features: ["Deep vacuum & shampoo", "Leather conditioning", "Exterior hand wash", "Door jamb cleaning", "Window & glass cleaning"]
    },
    {
        title: "Car Wrapping",
        icon: "fas fa-paint-roller",
        desc: "Transform your vehicle's appearance with premium vinyl wrapping. Choose from matte, gloss, satin, or custom color options to protect your original paint.",
        features: ["Matte / Gloss finishes", "Color change wraps", "Paint protection", "Custom designs", "Removable vinyl"]
    },
    {
        title: "Vehicle Branding",
        icon: "fas fa-palette",
        desc: "Professional vehicle branding and graphic design for businesses. Turn your car into a moving billboard with custom decals and logos.",
        features: ["Custom logo design", "Fleet branding", "Window lettering", "Full vehicle wraps", "Business graphics"]
    },
    {
        title: "Paint Protection",
        icon: "fas fa-shield-alt",
        desc: "Protect your vehicle's paint from scratches, UV rays, and environmental damage with ceramic coating and paint protection film.",
        features: ["Ceramic coating", "Paint protection film", "UV protection", "Scratch resistance", "Hydrophobic finish"]
    },
    {
        title: "Polishing & Waxing",
        icon: "fas fa-magic",
        desc: "Restore your vehicle's paint clarity and depth with professional polishing and premium waxing services that bring back the showroom finish.",
        features: ["Paint correction", "Swirl removal", "Premium waxing", "Oxidation removal", "High-gloss finish"]
    },
    {
        title: "Headlight Restoration",
        icon: "fas fa-lightbulb",
        desc: "Restore cloudy, yellowed headlights to like-new clarity. Improve nighttime visibility and vehicle appearance with our restoration process.",
        features: ["Oxidation removal", "UV sealant", "Improved visibility", "Clear lens finish", "Long-lasting results"]
    }
];

// Gallery Data
const galleryItems = [
    { title: "Mercedes-Benz S-Class", category: "detailing", image: "fas fa-car" },
    { title: "BMW X5 Wrap", category: "wrapping", image: "fas fa-car-side" },
    { title: "Tesla Model 3 Branding", category: "branding", image: "fas fa-car" },
    { title: "Ford Mustang Protection", category: "protection", image: "fas fa-car-side" },
    { title: "Toyota Camry Detailing", category: "detailing", image: "fas fa-car" },
    { title: "Honda Civic Wrap", category: "wrapping", image: "fas fa-car-side" },
    { title: "Audi Q7 Branding", category: "branding", image: "fas fa-car" },
    { title: "Nissan GT-R Protection", category: "protection", image: "fas fa-car-side" },
    { title: "Volkswagen Golf Detailing", category: "detailing", image: "fas fa-car" },
    { title: "Subaru WRX Wrap", category: "wrapping", image: "fas fa-car-side" },
    { title: "Jeep Wrangler Branding", category: "branding", image: "fas fa-car" },
    { title: "Porsche 911 Protection", category: "protection", image: "fas fa-car-side" }
];

// Pricing Data
const pricing = [
    { name: "Basic Detail", price: 79, desc: "Perfect for regular maintenance cleaning",
      features: ["Exterior hand wash", "Interior vacuum", "Window cleaning", "Tire shine", "Dashboard wipe"], popular: false },
    { name: "Premium Detail", price: 149, desc: "Comprehensive deep cleaning package",
      features: ["Everything in Basic", "Leather conditioning", "Carpet shampooing", "Engine bay cleaning", "Wax application"], popular: true },
    { name: "Ceramic Coating", price: 399, desc: "Long-lasting paint protection",
      features: ["Paint correction", "Ceramic coating (1 year)", "Hydrophobic finish", "UV protection", "Interior detail included"], popular: false },
    { name: "Full Vehicle Wrap", price: 899, desc: "Complete color transformation",
      features: ["Premium vinyl wrap", "Color of your choice", "Paint protection", "Professional installation", "3-year warranty"], popular: false },
    { name: "Vehicle Branding", price: 299, desc: "Custom business branding",
      features: ["Custom logo design", "Business contact info", "Professional installation", "High-quality vinyl", "Removable graphics"], popular: false },
    { name: "Headlight Restoration", price: 89, desc: "Restore headlight clarity",
      features: ["Oxidation removal", "Polishing", "UV sealant", "Improved visibility", "30-minute service"], popular: false }
];
// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initServices();
    initGallery();
    initPricing();
    initForms();
    initYear();
    initScrollEffects();
});

// Navbar scroll effect & mobile toggle
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; }
        else { navbar.style.boxShadow = 'none'; }
    });
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        if (navLinks.classList.contains('show')) {
            navLinks.style.display = 'flex'; navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute'; navLinks.style.top = '70px';
            navLinks.style.left = '0'; navLinks.style.right = '0';
            navLinks.style.background = 'var(--white)'; navLinks.style.padding = '20px';
            navLinks.style.boxShadow = 'var(--shadow)';
        } else { navLinks.style.display = 'none'; }
    });
}

// Render Services
function initServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map(svc => `
        <div class="service-card">
            <div class="service-icon"><i class="${svc.icon}"></i></div>
            <h3>${svc.title}</h3>
            <p>${svc.desc}</p>
            <ul class="service-features">
                ${svc.features.map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}
// Render Gallery
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = galleryItems.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <div class="gallery-image"><i class="${item.image}"></i></div>
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
                <span>View Details</span>
            </div>
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <span>${item.category}</span>
            </div>
        </div>
    `).join('');
}

// Filter Gallery
window.filterGallery = function(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) btn.classList.add('active');
    });
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
        } else { item.classList.add('hidden'); }
    });
    const search = document.getElementById('gallerySearch');
    if (search) search.value = '';
};

// Search Gallery
document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('gallerySearch');
    if (search) {
        search.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                if (title.includes(term)) { item.classList.remove('hidden'); item.style.display = 'block'; }
                else { item.classList.add('hidden'); }
            });
        });
    }
});

// Render Pricing
function initPricing() {
    const grid = document.getElementById('pricingGrid');
    grid.innerHTML = pricing.map(pkg => `
        <div class="pricing-card${pkg.popular ? ' popular' : ''}">
            ${pkg.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <div class="pricing-header">
                <h3>${pkg.name}</h3>
                <div class="price">$${pkg.price}<span>/vehicle</span></div>
                <p>${pkg.desc}</p>
            </div>
            <ul class="pricing-features">
                ${pkg.features.map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('')}
            </ul>
            <button class="btn btn-primary">Choose Package</button>
        </div>
    `).join('');
}
// Form Handlers
function initForms() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadSuccess = document.getElementById('uploadSuccess');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const files = formData.getAll('carPhotos');
            if (files.length > 5) { alert('Please upload maximum 5 photos.'); return; }
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Submitting...'; btn.style.opacity = '0.7';
            setTimeout(() => {
                uploadForm.style.display = 'none';
                uploadSuccess.classList.remove('hidden');
                btn.textContent = originalText; btn.style.opacity = '1';
            }, 1500);
        });
    }
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...'; btn.style.opacity = '0.7';
            setTimeout(() => {
                contactForm.style.display = 'none';
                contactSuccess.classList.remove('hidden');
                btn.textContent = originalText; btn.style.opacity = '1';
            }, 1500);
        });
    }
}

// Current year in footer
function initYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Scroll reveal effect
function initScrollEffects() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.service-card, .gallery-item, .pricing-card, .about-content, .contact-info').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}