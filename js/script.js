(function () {

    const btn = document.querySelector(".hamb");
    const menu = document.querySelector(".menu");
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