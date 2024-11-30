// 03:46:58 "CLÁUSULA ELSE IF"

/*
- Los condicionales también pueden manejar varias condiciones.

> <
*/


// Ejemplo 1
function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisible por 2.");
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3.");
    } else {
        console.log("No es divisible entre las opciones.");
    }
}

clasificarValor(2); // Divisible entre 2
clasificarValor(15); // Divisible entre 3.
clasificarValor(29); // No es divisible entre las opciones.



// node 034658_clausulaElseIf.js