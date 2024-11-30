// 04:24:32 "SENTENCIAS SWITCH: OPCIÓN PREDETERMINADA"

/*
- Equivalente de una sentecia else, en switch.

*/


function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2: 
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default: 
            idioma = "Inglés";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));


// node 042432_sentenciasSwitchOpcionPredeterminada.js