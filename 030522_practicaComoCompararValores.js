// 03:05:22 "PRÁCTICA: CÓMO COMPARAR VALORES"

/*
-  
*/

var a;
var b;

a = 5;
b = 5;

console.log(a == b); // true
console.log(a === b); // true


b = 8;

console.log(a == b); // false
console.log(a === b); // false porque aunque el tipo de dato sea igual, sus valores son distintos


b = "5";

console.log(a == b); // true
console.log(a === b); // false


a = "Javascript";
b = "Javascript";

console.log(a == b); // true
console.log(a === b); // false


// node 030522_practicaComoCompararValores.js


