/* ===============================
   TYPING EFFECT (INFINITO)
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const text = "Valentino Arellano";
    const typingElement = document.getElementById("typing");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;

        if (!isDeleting) {
            typingElement.textContent = text.slice(0, index + 1);
            index++;

            if (index === text.length) {
                setTimeout(() => (isDeleting = true), 1200);
            }
        } else {
            typingElement.textContent = text.slice(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? 80 : 120);
    }

    typeEffect();
});


/* ===============================
   MODAL PROYECTOS
================================ */

// Datos de proyectos
const projects = {
    proyecto1: {
        title: "Proyecto Nave",
        category: "Desarrollo Web",
        description:
            "Proyecto académico que explora diseño espacial moderno con animaciones CSS avanzadas y experiencia de usuario inmersiva. Incluye secciones interactivas, galería de imágenes y diseño responsive.",
        tags: ["Desarrollo Web", "Diseño UX/UI", "Responsive"]
    },
    proyecto2: {
        title: "Proyecto 2",
        category: "Frontend",
        description:
            "Proyecto enfocado en la creación de interfaces modernas utilizando buenas prácticas de diseño y animaciones suaves.",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    proyecto3: {
        title: "Proyecto 3",
        category: "Web App",
        description:
            "Aplicación web con funcionalidades dinámicas y estructura escalable.",
        tags: ["JavaScript", "UI", "UX"]
    }
};

// Elementos del modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");

const modalImg1 = document.getElementById("modalImg1");
const modalImg2 = document.getElementById("modalImg2");
const modalImg3 = document.getElementById("modalImg3");

// Abrir modal
function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;

    // Cargar imágenes
    modalImg1.src = `./img/Proyectos/${projectId}/1.png`;
    modalImg2.src = `./img/Proyectos/${projectId}/2.png`;
    modalImg3.src = `./img/Proyectos/${projectId}/3.png`;

    // Limpiar tags
    modalTags.innerHTML = "";

    project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // evita scroll
}

// Cerrar modal
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Cerrar modal con click afuera
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
