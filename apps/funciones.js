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


let _encripta = {"e": "enter", "i": "imes", "o": "ober", "u": "ufat", "a": "ai"};


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
 * Copia el texto encriptado o desencriptado
 * 
 */
function copiar_texto() {
    alert("copiar texto");
}


