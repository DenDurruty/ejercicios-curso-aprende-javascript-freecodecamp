// 07:44:39 "CONST EN JAVASCRIPT"

/*
- 

*/


// Ejemplo 1
const MI_CONSTANTE = 35; // En una variable CONST siempre se asigna el valor en la misma línea sino da ERROR

console.log(MI_CONSTANTE); // 35

//MI_CONSTANTE = 15; // ERROR, mi constante sólo se puede leer


// Ejemplo 2
function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined;
    }

    return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));

// node 074439_constEnJavascript.js