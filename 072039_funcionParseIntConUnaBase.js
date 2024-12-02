// 07:20:39 "FUNCION parseInt() CON UNA BASE"

/*
- La FUNCION parseInt() CON UNA BASE sirve para tranformar una cadena de caracteres en un número entero.
Por ejemplo, trasnformar una cadena ceros y unos (sistema binario) en un entero.
Por ejemplo pasamos la cadena "11011" y como argumento la base de ese sistema que sería 2, en binario.
*/


// Ejemplo 1 - sistema binario
console.log(parseInt("110111", 2)); // 55
console.log(parseInt(110111, 2)); // también funciona sin comillas


// Ejemplo 2 - sistema hexadecimal
console.log(parseInt("3E0A", 16)); // 
// console.log(parseInt(3E0A, 16)); // no funciona sin comillas

// node 072039_funcionParseIntConUnaBase.js