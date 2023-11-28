

// ejemplo 1 /////////////////////////////

function mostrar(){

    document.getElementById("parrafo").style.display = "block"
}

function ocultar(){
    document.getElementById("parrafo").style.display = "none"
}


jQuery(() => {

    $("#mostrar").on("click", ()=>{
        $("#parrafo2").show(1000);  
    });
    
    $("#ocultar").on("click", ()=>{
        $("#parrafo2").hide(1000);
    });

    $("#boton").on("click", ()=>{

        // $("#parrafo3").prepend('<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button>  ');

        // $("#parrafo3").append('<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button> <h1>Helloooo</h1> <p class="bg-danger">Parrafo</p>');


        // $("#parrafo3").html('<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button> <h1>HOLIII</h1> ');

        // document.getElementById("new").innerHTML = '<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button> <h1>Helloooo</h1> '

    });
    
    // $("#ocultarappend").on("click", ()=>{
    //     $("#parrafo2").hide(1000);
    // });

    // $("#fadeIn").on("click",()=>{
    //     $("#parrafo2").fadeIn(1000)
    // })

    // $("#fadeOut").on("click",()=>{
    //     $("#parrafo2").fadeOut(1000)
    // })

    // $("#slideDown").on("click",()=>{
    //     $("#parrafo2").slideDown(1000)
    // })

    // $("#slideDown").on("click", function (){
    //     $("#parrafo").slideDown(1000)
    // })

    // $("#slideUp").on("click",()=>{
    //     $("#parrafo2").slideUp(1000)
    // })
})

function nueva(){
    $('#print').html('HOLAAAA')
}


// ///////////////////////////////////////////////////////////////////////////
// ejemplo 2 /////////////////////////////


function formulario(){

    // Con JQUERY
    let url = $("#exampleInput1").val()
    
    $("#imagen").attr("src", url).show(1000)

}

function formJS(){
    // Con JAVASCRIPT Vanilla

    let url = document.getElementById("exampleInput2").value

    document.getElementById("imagen2").src = url

    document.getElementById("imagen2").style.display = "block"

    // https://www.paisajesimagenes.com/wp-content/uploads/Fotos-de-paisajes-naturales..jpg

}
