
document.getElementById("toggleButton").addEventListener("click", function() {
    let content = document.getElementById("seccionMovies");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.innerText = "OCULTAR TODAS LAS PELICULAS";
    } else {
        content.style.display = "none";
        this.innerText = "MOSTRAR TODAS LAS PELICULAS";
    }
});


document.getElementById("botonProfesionales").addEventListener("click", function() {
    let content = document.getElementById("seccionProfesionales");
    if (content.style.display === "none") {
        content.style.display = "flex"; // block, siempre lo pone en bloque uno encima de otro, se puede cambiar a flex, se podria poner grid incluso
        this.innerText = "OCULTAR TODAS LOS ACTORES";
    } else {
        content.style.display = "none";
        this.innerText = "MOSTRAR TODAS LOS ACTORES";
    }
});

