// 08:12:32 "OPERADOR SPREAD"

/*
- Hace excatamente lo contrario que el operador REST.
- Este operador toma un arreglo y lo descompone en sus elementos individuales 

*/


// Ejemplo 1
const numeros = [1, 2, 3];

function sumar(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x + y + z;
}

console.log(sumar(...numeros));


// node 081232_operadorSpread.js