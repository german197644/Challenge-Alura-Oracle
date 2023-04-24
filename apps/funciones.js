/** 
 * Desarrollado por: Pogliani German Dario.
 * 04-2023
 * Curso: Desafio Oracle One - Alura
 * 
 */

/**
 * 
 * La letra "a" es convertida para "ai"
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
*/


let _encripta = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };


/**
 * 
 * recorro encripta
 * 
 */
for (var i in _encripta) {
    console.log(i + " : " + _encripta[i]);
}


/** 
 * 
 * Esta funcion encripta.
 * 
*/
function encriptar() {
    // recorremos el diccionario a traves de sus claves.
    let _texto = document.getElementById("codex").value;
    console.log(_texto);
    for (var i in _encripta) {
        //console.log(_encripta[i]);
        _texto = _texto.replaceAll(i, _encripta[i]);
    }
    // reemplazamos el texto viejo por el texto encriptado.
    document.getElementById("codex").value = _texto;

    console.log("fin encriptar: " + _texto);
}

/**
 * 
 * 
 * Esta funcion desencripta.
 * 
 */
function desencriptar() {
    // recorremos el diccionario a traves de sus claves.
    let _texto = document.getElementById("codex").value;
    console.log(_texto);
    for (var i in _encripta) {
        //console.log(i +" : "+_encripta[i]);
        _texto = _texto.replaceAll(_encripta[i], i);
    }
    // reemplazamos el texto viejo por el texto encriptado.
    document.getElementById("codex").value = _texto;

    console.log("fin encriptar: " + _texto);
}

/**
 * 
 * encripta y desencripta segun una opcion
 * 
 */
//document.addEventListener("DOMContentLoaded", function () { 
function codificar(opcion) {
    // capturamos el texto;
    let _texto = document.getElementById("codex").value;    

    //evaluamos si hay datos.
    if (_texto === "") {
        // mostramos la imagen de no result.    
        document.getElementById("imagen1").style.display = "block";
        document.getElementById("resultado").style.display = "none";

        // ocultamos el boton copiar.
        //document.getElementById("boton_copy").style.visibility = "visible";
        document.getElementById("nodato").style.display= "inherit";

        swal("Oops!", "Algo salió mal en la página!", "error");

    } else if (opcion === 1) {
        // recorremos el diccionario a traves de sus claves.
        // codifico
        for (var i in _encripta) {
            _texto = _texto.replaceAll(i, _encripta[i]);
        }

        // ocultamos la imagen.
        document.getElementById("nodato").style.display= "none";

        // mostramos el panel.        
        document.getElementById("resultado").style.display = "block";

        // mostramos el texto resultante.
        document.getElementById("decodex").innerHTML = _texto;

        // mostramos el boton de copiar.
        //document.getElementById("boton-copy").style.visibility = "visible";
        //document.getElementById("boton-copy").style.display = "show";
        document.getElementById("boton-copy").style.display = "inherit";

    } else {

        // recorremos el diccionario a traves de sus claves.
        // decodifico
        for (var i in _encripta) {
            _texto = _texto.replaceAll(_encripta[i], i);
        }

        // ocultamos la imagen.
        document.getElementById("nodato").style.display= "none";

        // mostramos el panel.        
        document.getElementById("resultado").style.display = "inherit";

        // mostramos el texto resultante.
        document.getElementById("decodex").innerHTML = _texto;

        // mostramos el boton de copiar.        
        //document.getElementById("boton-copy").style.display = "block";
        //document.getElementById("boton-copy").style.display = "show";
        document.getElementById("boton-copy").style.display = "inherit";

    }
}


/**
 * 
 * Copia el texto encriptado o desencriptado
 * 
 */

document.getElementById("boton_copy").addEventListener("click", function () {
    //document.getElementById("boton_copy").style.display = "show";
    document.getElementById("boton_copy").style.visibility="visible";
    swal("Excelente!", "Se copió el texto al portapapeles!", "info");
});

/*
function copiar_texto() {
    //alert("copiar texto");
    swal("Oops!", "Something went wrong on the page!", "error");
}
*/


