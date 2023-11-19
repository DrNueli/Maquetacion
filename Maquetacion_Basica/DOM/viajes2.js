//cada vez que se pulse el botón "filtrar", nos muestre por consola la información de las solicitudes recibidas
//  que tengan como destino Canarias, Mallorca o Galicia 
// (tener en cuenta que los usuarios pueden escribir, el destino en mayuscula o minuscula).


function filtrarSolicitudes() {
    let destinosValidos = ["canarias", "mallorca", "galicia"];

    let solicitudesFiltradas = solicitudes.filter(solicitud => 
        destinosValidos.includes(solicitud.destino.toLowerCase())
    );

    console.log(solicitudesFiltradas);

        let resultadosContainer=document.getElementById("resultadosFiltrados");
        resultadosContainer.innerHTML = "";

        solicitudesFiltradas.forEach(solicitud => {
            let solicitudContainer = document.createElement("div");
            solicitudContainer.classList.add("solicitudContainer");
            solicitudContainer.innerHTML = `
            <div>
                <p>Nombre: ${solicitud.nombre}</p>
                <p>Origen: ${solicitud.origen}</p>
                <p>Destino: ${solicitud.destino}</p>
                <p>Número de personas: ${solicitud.numeroDePersonas}</p>
                <p>Fecha: ${solicitud.fecha}</p>
                <br>
            </div>
            `;
            resultadosContainer.appendChild(solicitudContainer);
        });

}

document.getElementById('hacerFiltrado').addEventListener('click', filtrarSolicitudes);
