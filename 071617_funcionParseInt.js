// 07:16:17 "FUNCIÓN parseInt()"

/*
- FUNCIÓN parseInt(), lo que hace es convertir una cadena de caracteres a un entero. También sirve para 
convertir un decimal en un entero.

*/


// Ejemplo 1
console.log(parseInt("5"));
console.log(parseInt("-47"));
console.log(parseInt("0"));
console.log(parseInt("6.7")); // 6 porque trunca el decimal y lo convierte en entero
console.log(parseInt("abc")); // NaN

// Ejemplo 2
var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);



// node 071617_funcionParseInt.js