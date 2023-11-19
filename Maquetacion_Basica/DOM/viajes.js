// recoja la información de los campos de texto y 
// cree un objeto literal que se guarde en un array de objetos literales 
// cada vez que se pulse el botón "solicitar información".

let solicitudes = [];

function recolectarInformacion() {
    let nombre = document.querySelector("input[placeholder='nombre*']").value;
    let origen = document.querySelector("input[placeholder='origen*']").value;
    let destino = document.querySelector("input[placeholder='destino*']").value;
    let numeroDePersonas = document.querySelector("input[placeholder='número de personas*']").value;
    let fecha = document.querySelector("input[placeholder='fecha']").value;

    let solicitud = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        numeroDePersonas: numeroDePersonas,
        fecha: fecha
    };

    solicitudes.push(solicitud);
    console.log(solicitudes); 
}

document.getElementById('SolicitarInfo').addEventListener('click', recolectarInformacion);
