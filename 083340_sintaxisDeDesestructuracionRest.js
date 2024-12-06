// 08:33:40 "SINTÁXIS DE DESESTRUCTURACIÓN: CON EL OPERADOR REST"

/*
- 

*/


// Ejemplo 1
var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];

console.log(a);
console.log(b);
console.log(arr);


// Ejemplo 2
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimeroElementos(arreglo) {
    const [ , , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
}


const arregloFinal = removerTresPrimeroElementos(arregloInicial);
console.log(arregloFinal);



// node 083340_sintaxisDeDesestructuracionRest.js