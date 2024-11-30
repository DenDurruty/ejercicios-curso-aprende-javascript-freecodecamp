// 04:32:55 "REEMPLAZAR IF ELSE POR SWITCH"

/*
- En ciertos casos podemos reemplazar condicionales con sentencias switch.

*/

// Ejemplo con condicional
function seleccionarIdioma(valor) {
    var idioma;

    if (valor == 1) {
        idioma = "Español";
    } else if (valor == 2) {
        idioma = "Francés";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Inglés";
    }

    return idioma;
}


console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));


// Ejemplo con switch
function seleccioneIdioma(valor) {
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
    }

    return idioma;
}


console.log(seleccioneIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccioneIdioma(3));
console.log(seleccionarIdioma(4));


// node 043255_reemplazarIfElsePorSwitch.js