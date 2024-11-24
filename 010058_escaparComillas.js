// 01:00:58 "ESCAPAR COMILLAS"

/* 
- Escapar comillas u omitir comillas.

- No está permitido usar el mismo tipo de comillas dentro de una cadena de caracteres.

- Para omitir el error hay que poner "\".

*/



// Ejemplo 1 - Forma incorrecta

/* 
var miCadena = "Soy una cadena de caracteres "con comillas"."; // Este ejemplo me va a dar un error
console.log(miCadena);
*/



// Ejemplo 2 - Forma correcta

var miCadena = "Soy una cadena de caracteres \"con comillas\"."; // En este ejemplo estamos omitiendo las comillas
console.log(miCadena);



// node 010058_escaparComillas.js
