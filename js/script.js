/* =====================================================
   DEV - SEDUC - SENAI 2025-2026
   SCRIPT.JS
===================================================== */


/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");
    }

});


/* =====================================================
   FECHAR MENU AO CLICAR NO LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   MODO ESCURO
===================================================== */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        localStorage.setItem("theme", "dark");

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});


/* =====================================================
   FILTRO DE PROJETOS
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "todos" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   FORMULÁRIO
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mensagem =
        document.getElementById("mensagem").value.trim();


    if (!nome || !email || !mensagem) {

        alert("Preencha todos os campos.");

        return;
    }


    alert(
        `Obrigado, ${nome}! Sua mensagem foi registrada.`
    );


    contactForm.reset();

});


/* =====================================================
   ANIMAÇÃO DOS CARDS
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".tech-card, .study-card, .project-card, .timeline-item"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.animation =
                        "fadeUp 0.6s ease forwards";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    observer.observe(element);

});


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const currentYear =
    new Date().getFullYear();

console.log(
    `DEV - SEDUC - SENAI | ${currentYear}`
);


/* =====================================================
   CONSOLE
===================================================== */

console.log(
`
========================================
 DEV - SEDUC - SENAI 2025-2026
========================================

Projeto de portfólio educacional.

Tecnologias:
HTML
CSS
JavaScript
Dart
Flutter
Java
SQL
Redes
Arduino

========================================
`
);