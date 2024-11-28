// 02:31:49 "ÁMBITO GLOBAL Y VARIABLES GLOBALES"

/*
- Existen dos tipos de variables: VARIABLES GLOBALES y VARIABLES LOCALES.

- Una variable con ámbito GLOBAL puede utilizarse en cualquier parte del programa porque está definida
en el programa principal.

*/

// Ejemplo de variable global - Se puede acceder, usar y modificar en cualquier lugar del programa.
var miVariableGlobal = 5;


console.log("Variable definida en el programa principal y no dentro de una función:");
console.log(miVariableGlobal);


console.log("Misma variable utilizada dentro de una función:");
function miFuncion() {
    console.log(miVariableGlobal);
}

miFuncion();


console.log("Misma variable utilizada luego de usarla en una función:");
console.log(miVariableGlobal);



// node 023149_ambitoGlobalYVariablesGlobales.js