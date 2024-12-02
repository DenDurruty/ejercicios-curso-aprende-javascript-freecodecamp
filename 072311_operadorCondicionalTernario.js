// 07:23:11 "OPERADOR CONDICIONAL (TERNARIO)"

/*
- Condicional en una sola línea

*/


// Ejemplo 1 - condicional que ya conocemos
function retornarMinimo(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(retornarMinimo(3, 10));


// Ejemplo 2 - condicional ternario (condicional compactado en una sola línea)
function retornaElMinimo(x, y) {
    return x < y ? x : y;
}

console.log(retornaElMinimo(3, 10));


// Ejemplo 3 - condicional ternario (condicional compactado en una sola línea)
function retornarElMinimo(x, y) {
    console.log(x < y ? x : y);
}

retornarElMinimo(4, 7);
retornarElMinimo(8, 2);
retornarElMinimo(5, 5);

// RESOLVER
var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3); // 27



// node 072311_operadorCondicionalTernario.js