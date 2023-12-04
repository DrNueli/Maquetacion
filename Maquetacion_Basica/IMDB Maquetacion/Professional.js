
function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo || "";
    }

    let profesionales = [
        new Professional("Reeves", 45, 75, 170, false, "USA", 1, "actor", "./imagenesIMDB/actor1.png"),
        new Professional("Coppola", 80, 85, 190, true, "Spain", 2, "director", "./imagenesIMDB/actor2.png"),
        new Professional("Kenu", 50, 90, 180, false, "USA", 0, "actor", "./imagenesIMDB/actor3.png"),
        new Professional("Paco", 30, 65, 170, false, "Spain", 0, "writer", "./imagenesIMDB/actor1.png"),
    ];

    let contenedor = document.getElementById("seccionProfesionales");

    profesionales.forEach(function (elemento) {
        contenedor.innerHTML += 
        '<div class="col-sm-6 col-lg-3 mb-4">' +
        '<img src="' + elemento.photo + '" class="card-img-top" alt="Movie Photo" style="max-width:100%;">' + 
        '<h2 class="card-text">Nombre: ' + elemento.name + '</h2>' +
        '<p class="card-text">Edad: ' + elemento.age + '</p>' +
        '<p class="card-text">Peso: ' + elemento.weight + '</p>' +
        '<p class="card-text">Altura: ' + elemento.height + '</p>' +
        '<p class="card-text">Retirado: ' + elemento.isRetired + '</p>' +
        '<p class="card-text">Nacionalidad: ' + elemento.nationality + '</p>' +
        '<p class="card-text">Nº Oscars: ' + elemento.oscarsNumber + '</p>' +
        '<p class="card-text">Profesión: ' + elemento.profession + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    });
