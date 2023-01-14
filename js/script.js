// Función para mostrar el menú
(function () {

    let btn = document.querySelector(".hamb");
    let menu = document.querySelector(".menu");
    //Seleccionara todos los span dentro de la clase hamb
    const bars = document.querySelectorAll(".hamb span");

    btn.addEventListener("click", () => {
        //agregar clase para estilo del menu
        menu.classList.toggle("active");


        //agregar clase para animar barras
        bars.forEach(child => {
            child.classList.toggle("animate");
        })
    })

})();

// sticky nav

(function () {

    let pinged = false;

    let nav = document.querySelector(".container");

    let stickyScrollPoint = document.querySelector(".container").offsetHeight;

    function pingToTop() {

        if (pinged) return;

        nav.classList.add("pined");

        pinged = true;



    }

    function unPingFromTop() {

        if (!pinged) return;

        nav.classList.remove("pined");

        pinged = false;

    }

    window.addEventListener('scroll', function (ev) {

        let coords = nav.getBoundingClientRect();

        if (window.scrollY < stickyScrollPoint) return unPingFromTop();

        if (coords.top <= 0) {

            return pingToTop();

        }

        unPingFromTop();

    })

})();
// sticky nav end