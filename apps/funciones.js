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
 * Esta funcion encripta.
 * 
*/
function encriptar() {
    // recorremos el diccionario a traves de sus claves.
    let _texto = document.getElementById("codex").value;
    for (var i in _encripta) {
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
    for (var i in _encripta) {
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
function codificar(opcion) {
    // capturamos el texto;
    let _texto = document.getElementById("codex").value;

    //evaluamos si hay datos.
    if (_texto === "") {
        // mostramos la imagen de no result.    
        //document.getElementById("imagen1").style.display = "block";
        document.getElementById("resultado").style.display = "none";

        // ocultamos el boton copiar.
        document.getElementById("nodato").style.display = "inherit";

        //swal("Oops!", "Algo salió mal en la página!", "error");

    } else if (opcion === 1) {
        // recorremos el diccionario a traves de sus claves.
        // codifico
        for (var i in _encripta) {
            _texto = _texto.replaceAll(i, _encripta[i]);
        }

        // ocultamos la imagen.
        document.getElementById("nodato").style.display = "none";

        // mostramos el panel.        
        document.getElementById("resultado").style.display = "block";

        // mostramos el texto resultante.
        document.getElementById("decodex").innerHTML = _texto;

        // mostramos el boton de copiar.    
        //document.getElementById("boton-copy").style.display = "inherit";

    } else if (opcion === 0) {

        // recorremos el diccionario a traves de sus claves.
        // desencripto
        for (var i in _encripta) {
            _texto = _texto.replaceAll(_encripta[i], i);
        }

        // ocultamos la imagen.
        document.getElementById("nodato").style.display = "none";

        // mostramos el panel.        
        document.getElementById("resultado").style.display = "inherit";

        // mostramos el texto resultante.
        document.getElementById("decodex").innerHTML = _texto;

        // mostramos el boton de copiar.                
        //document.getElementById("boton-copy").style.display = "inherit";

    }
}


/**
 * 
 * Copia el texto encriptado o desencriptado
 * 
*/
document.getElementById("boton_copy").onclick = function () {
    var text = document.getElementById("decodex").value;

    navigator.clipboard.writeText(text)
        .then(() => {
            //console.log('Text copied to clipboard');
            swal("Excelente!", "Se copió el texto al portapapeles!", "info");
        })
        .catch(err => {
            //console.error('Error in copying text: ', err);
            swal("Oop!", "Hubo un problema copiando al portapapeles!", "error");
        });
}