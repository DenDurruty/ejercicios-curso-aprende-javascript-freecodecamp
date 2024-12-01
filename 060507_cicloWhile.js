// 06:05:07 "CICLO WHILE"

/*
- Los ciclos o bucles nos permiten repetir una secuencia de instrucciones
un número específico de veces.

- Tenemosdos tipos: ciclos o bucles while y ciclos o bucles for. En inglés "loop".

- Los ciclos WHILE se utilizan cuando no tenemos un número específico de iteraciones.

- WHILE = MIENTRAS

*/


// Ejemplo 1
var i = 0;

while (i <= 3) {
    console.log("Hola, Mundo!");
    i++;
}


// Ejemplo 2
var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);


// Ejemplo 3
var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
    numeros.pop();
}

console.log(numeros);


// node 060507_cicloWhile.js