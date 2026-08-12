document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MENÚ PARA CELULAR
    ========================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mainNav =
        document.getElementById("mainNav");


    if (mobileMenuButton && mainNav) {

        mobileMenuButton.addEventListener("click", function () {

            mainNav.classList.toggle("mobile-open");

            if (mainNav.classList.contains("mobile-open")) {

                mobileMenuButton.textContent = "✕";

                mobileMenuButton.setAttribute(
                    "aria-label",
                    "Cerrar menú"
                );

            } else {

                mobileMenuButton.textContent = "☰";

                mobileMenuButton.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            }

        });

    }


    /* ==========================================
       CERRAR MENÚ AL CAMBIAR DE PÁGINA
    ========================================== */

    const navLinks =
        document.querySelectorAll("#mainNav a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {

                mainNav.classList.remove(
                    "mobile-open"
                );

            }

            if (mobileMenuButton) {

                mobileMenuButton.textContent = "☰";

                mobileMenuButton.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            }

        });

    });


    /* ==========================================
       SLIDER DE LA PÁGINA DE INICIO
    ========================================== */

    const slides =
        document.querySelectorAll(".hero-slide");


    if (slides.length > 1) {

        let currentSlide = 0;


        // Asegurar que solo la primera imagen
        // esté activa al comenzar

        slides.forEach(function (slide, index) {

            if (index === 0) {

                slide.classList.add("active");

            } else {

                slide.classList.remove("active");

            }

        });


        // Cambiar imagen cada 5 segundos

        setInterval(function () {

            slides[currentSlide]
                .classList.remove("active");


            currentSlide++;


            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }


            slides[currentSlide]
                .classList.add("active");

        }, 5000);

    }


    /* ==========================================
       SCROLL SUAVE
    ========================================== */

    document.documentElement.style.scrollBehavior =
        "smooth";


    /* ==========================================
       CERRAR EL MENÚ AL VOLVER A PC
    ========================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 750) {

            if (mainNav) {

                mainNav.classList.remove(
                    "mobile-open"
                );

            }

            if (mobileMenuButton) {

                mobileMenuButton.textContent = "☰";

            }

        }

    });

});