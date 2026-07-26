/*==================================================
  Asesoría Veterinaria Ovina
  main.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      HEADER AL HACER SCROLL
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*=========================================
      SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        });

    });

    /*=========================================
      ANIMACIONES AL HACER SCROLL
    =========================================*/

    const elementos = document.querySelectorAll(

        ".card, .about, .contact, .cta, .hero-image, .hero-text"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    elementos.forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*=========================================
      MENÚ ACTIVO
    =========================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", ()=>{

        let current="";

        sections.forEach(section=>{

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if(window.scrollY >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /*=========================================
      EFECTO BOTÓN WHATSAPP
    =========================================*/

    const whatsapp = document.querySelector(".whatsapp");

    if(whatsapp){

        setInterval(()=>{

            whatsapp.classList.toggle("pulse");

        },1800);

    }

});
