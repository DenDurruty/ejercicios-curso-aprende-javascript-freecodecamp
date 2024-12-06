// 08:28:56 "SINTÁXIS DE DESESTRUCTURACIÓN: ARREGLOS"

/*
- 

*/


// Ejemplo 1
var a;
var b;

[a, b] = [1, 2]

console.log(a, b);
console.log(a);
console.log(b);

// Ejemplo 2
var a;
var b;
var c;

[a, b, c] = [1, 2, 3]

console.log(a, b, c);
console.log(a);
console.log(b);
console.log(c);


// Ejemplo 3
var a;
var b;

[a, b] = [1, 2, 3, 4, 5, 6];

console.log(a, b);
console.log(a);
console.log(b);


// Ejemplo 4
var a;
var b;
var c;


[a, b,, c] = [1, 2, 3, 4, 5, 6]; // Puedo saltar cuantos elementos quiera poniendo ,

console.log(a, b, c);
console.log(a);
console.log(b);
console.log(c);


[a, b,,,, c] = [1, 2, 3, 4, 5, 6]; // Puedo saltar cuantos elementos quiera poniendo ,

console.log(a, b, c);
console.log(a);
console.log(b);
console.log(c);


// Ejemplo 5 - Podemos usas la sintáxis de desestructuración para ntercambiar su valor
// en una sola línea
var a = 8;
var b = 6;

[b, a] = [a, b];

console.log("a: " + a);
console.log("b: " + b);



// node 082856_sintaxisDeDesestructuracionArreglos.js
