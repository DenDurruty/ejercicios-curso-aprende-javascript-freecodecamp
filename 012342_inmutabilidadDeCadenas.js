// 01:23:42 "INMUTABILIDAD DE CADENAS DE CARACTERES"

/*
- Las cadenas son inmutables, no se pueden cambiar los caracteres individuales de una cadena. 
Lo que se puede hacer es reasignar la cadena completa.

*/

var miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; // Error. No se puede asignar el valor a una propiedad que sólo se puede leer. 

miCadena = "Hola, Mundo";
console.log(miCadena);


// node 012342_inmutabilidadDeCadenas.js

