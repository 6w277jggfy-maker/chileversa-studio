/* ========================================
   CHILEVERSA STUDIO
   SCRIPT PRINCIPAL
======================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ========================================
       SLIDER DE LA PÁGINA DE INICIO
    ========================================= */

    const slides = document.querySelectorAll(".hero-slide");

    let currentSlide = 0;


    if (slides.length > 1) {

        slides.forEach(function (slide, index) {

            if (index === 0) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }

        });


        setInterval(function () {

            slides[currentSlide].classList.remove("active");

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add("active");

        }, 5000);

    }



    /* ========================================
       MENÚ PARA CELULAR
    ======================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mainNav =
        document.getElementById("mainNav");


    if (mobileMenuButton && mainNav) {


        /* ABRIR / CERRAR MENÚ */

        mobileMenuButton.addEventListener(
            "click",
            function () {

                mainNav.classList.toggle("mobile-open");


                if (
                    mainNav.classList.contains("mobile-open")
                ) {

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

            }
        );


        /* CERRAR AL SELECCIONAR UNA PÁGINA */

        const menuLinks =
            mainNav.querySelectorAll("a");


        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.textContent = "☰";

                    mobileMenuButton.setAttribute(
                        "aria-label",
                        "Abrir menú"
                    );

                }
            );

        });

    }



    /* ========================================
       CERRAR MENÚ AL VOLVER A PC
    ======================================== */

    window.addEventListener(
        "resize",
        function () {

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

        }
    );

});