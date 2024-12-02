// 07:29:12 "MÚLTIPLES OPERADORES CONDICIONALES"

/*
- un condicional dentro de otro

*/


// Ejemplo 1 - condicional como lo conocemos con su claúsula else if
function compararNumeros(a, b) {
    if (a == b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        return "b es mayor que a";
    }
}

console.log(compararNumeros(4, 4));


// Ejemplo 2 - con condicional ternario múltiple
function compararNumeros(a, b) {
    return a == b ? "a y b son iguales"
         : a > b ? "a es mayor que b"
         : "b es mayor que a";
}

console.log(compararNumeros(15, 15));



// node 072912_multiplesOperadoresCondicionales.js