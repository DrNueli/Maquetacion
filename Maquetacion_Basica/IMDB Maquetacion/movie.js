    function Movie(title, releaseYear, nationality, genre, actors, writer, director, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = actors || [];
        this.writer = writer || "";
        this.director = director || "";
        this.photo = photo || "";
    }

    let pelis = [
        new Movie("Godzilla", 1994, "USA", "Aventura", ["Leonardo DiCaprio", "Kate Winslet", "Brad Pitt"], "Quentin Tarantino", "James Cameron", "./imagenesIMDB/peli5.png"),
        new Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller", ["Al Pacino", "Marlon Brando"], "Mario Puzo", "Francis Ford Coppola", "./imagenesIMDB/peli4.png"),
        new Movie("John Wick", 2008, "Kenu USA", "Acción", ["Keanu Reeves"], "Derek Kolstad", "Chad Stahelski", "./imagenesIMDB/peli3.png")
    ];

    let container = document.getElementById("arrayPelis");

    pelis.forEach(function (elemento) {
        let actorsList = elemento.actors.join(", ");
        container.innerHTML += 
            '<div class="col-4">' +
                '<div class="card">' +
                    '<img src="' + elemento.photo + '" class="card-img-top" alt="Movie Photo" style="max-width:100%;">' + 
                    '<div class="card-body">' + 
                        '<h2 class="card-title">' + elemento.title + '</h2>' +
                        '<p class="card-text">Año de Rodaje: ' + elemento.releaseYear + '</p>' +
                        '<p class="card-text" style="font-weight:bold">Nationality: ' + elemento.nationality + '</p>' +
                        '<p class="card-text">Genero: ' + elemento.genre + '</p>' +
                        '<p class="card-text" style="font-weight:bold">Director: ' + elemento.director + '</p>' +
                        '<p class="card-text" style="font-weight:bold">Actores: ' + actorsList + '</p>' +
                        '<p class="card-text">Escritor: ' + elemento.writer + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
    });

    function adjuntarPeli(){
    let titulo1 = document.getElementById("inputTitle").value;
    let release1 = document.getElementById("inputRelease").value;
    let nacionalidad1 = document.getElementById("inputNationality").value;
    let genero1 = document.getElementById("inputGenre").value;
    let actores1 = document.getElementById("inputActors").value.split(",");
    let escritor1 = document.getElementById("inputWriter").value;
    let director1 = document.getElementById("inputDirector").value;
    let foto1 = document.getElementById("inputPhoto").value;

    let nuevaPeli = new Movie(titulo1, release1, nacionalidad1, genero1, actores1, escritor1, director1, foto1);
    pelis.push(nuevaPeli);

    // Limpia los campos del formulario
    document.getElementById("inputTitle").value = '';
    document.getElementById("inputRelease").value = '';
    document.getElementById("inputNationality").value = '';
    document.getElementById("inputGenre").value = '';
    document.getElementById("inputActors").value = '';
    document.getElementById("inputWriter").value = '';
    document.getElementById("inputDirector").value = '';    
    document.getElementById("inputPhoto").value = '';

    // Actualizar el DOM
    mostrarPelis();
    }

    function mostrarPelis() {
        let container = document.getElementById("arrayPelis");
        container.innerHTML = ''; // Limpiar contenido actual

        pelis.forEach(function (elemento) {
        let actorsList = elemento.actors.join(", ");
        container.innerHTML += 
            '<div class="card" style="width: 18rem;">' +
            '<p>Title: ' + elemento.title + '</p>' +
            '<p>Release Year: ' + elemento.releaseYear + '</p>' +
            '<p>Nationality: ' + elemento.nationality + '</p>' +
            '<p>Genre: ' + elemento.genre + '</p>' +
            '<p>Actors: ' + actorsList + '</p>' +
            '<p>Writer: ' + elemento.writer + '</p>' +
            '<p>Director: ' + elemento.director + '</p>' +
            '<img src="' + elemento.photo   + '">'   +
            '</div>';
        });
    }
