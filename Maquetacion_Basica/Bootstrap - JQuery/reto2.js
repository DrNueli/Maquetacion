$(document).ready(function() {
    var carrito = [];

    // Función para añadir al carrito
    function añadirCarrito(nombre, precio) {
        carrito.push({ nombre: nombre, precio: precio });
        actualizarModal();
    }

    // Actualizar el contenido del modal
    function actualizarModal() {
        var total = 0;
        var contenidoModal = "";

        carrito.forEach(function(item) {
            contenidoModal += "<p>" + item.nombre + " - " + item.precio + "€</p>";
            total += parseFloat(item.precio);
        });

        contenidoModal += "<p>Total: " + total + "€</p>";
        $("#modal-body").html(contenidoModal);
    }

    // Evento click para los botones de añadir al carrito
    $(".add-to-cart").click(function(event) {
        event.preventDefault();
        var nombre = $(this).data("name");
        var precio = $(this).data("price");
        añadirCarrito(nombre, precio);
    });
});
