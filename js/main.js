/*=========================================
Asesoría Veterinaria Ovina
main.js
=========================================*/

/* Header con sombra al hacer scroll */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 3px 18px rgba(0,0,0,.05)";
        header.style.background = "#ffffff";

    }

});


/* Animación de aparición */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* Scroll suave para el menú */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
