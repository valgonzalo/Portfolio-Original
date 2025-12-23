// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Modal functionality
const modal = document.getElementById('projectModal');

// Projects data
const projects = {
    proyecto1: {
        title: 'Proyecto Nave',
        category: 'Desarrollo Web',
        description: 'Proyecto académico que explora diseño espacial moderno con animaciones CSS avanzadas y experiencia de usuario inmersiva. Incluye secciones interactivas, galería de imágenes y diseño responsive optimizado para todos los dispositivos.',
        tags: ['Desarrollo Web', 'Diseño UX/UI', 'Responsive']
    },
    proyecto2: {
        title: 'E-Commerce',
        category: 'Tienda Online',
        description: 'Plataforma completa de comercio electrónico desarrollada con React y Node.js. Incluye sistema de autenticación, carrito de compras, pasarela de pago integrada, panel de administración y gestión de inventario en tiempo real.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    proyecto3: {
        title: 'Design Studio',
        category: 'Portfolio Creativo',
        description: 'Sitio web para estudio de diseño con efectos 3D interactivos, animaciones fluidas y galería de proyectos. Implementa Three.js para crear experiencias visuales inmersivas y GSAP para transiciones suaves entre secciones.',
        tags: ['UI/UX', 'Animaciones', 'Three.js', 'GSAP']
    }
};

// Open modal function
function openModal(projectId) {
    const project = projects[projectId];
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;
    
    // Update tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    
    // Reset form
    e.target.reset();
});

// Smooth scroll for navigation links
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

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.top = '20px';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        nav.style.top = '-100px';
    } else {
        // Scrolling up
        nav.style.top = '20px';
    }
    
    lastScroll = currentScroll;
});