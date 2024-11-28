// 02:31:49 "AMBITO LOCAL Y VARIABLES LOCALES"

/*
- Las variables LOCALES, son variables que definimos dentro de una función y que sólo se pueden
utilizar dentro de esa función.

*/


// Ejemplo de variable local
console.log("Variable declarada dentro de la función:");

function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal); // 4
}

miFuncion();


console.log("Variable llamada fuera de la función donde fue declarada:");
console.log(miVariableLocal); // ReferenceError: miVariableLocal is not defined



// node 023344_ambitoLocalYVariablesLocales.js