// 07:37:18 "ÁMBITO DE VAR VS LET"

/*
- Variable global si está definidca en el programa principal.
- Variable local si está definida dentro de una función.

*/


// Ejemplo 1
var miVariableGlobal = 4;

console.log(miVariableGlobal);


function miFuncion() {
    console.log(miVariableGlobal);


    var miVariableLocal = 8;
    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);
//console.log(miVariableLocal); // Error, miVariableLocal no está definida



// Ejemplo 2 - LET
// Si usamos var dentro del ciclo...
for (var i = 0; i < 3; i++) {
    console.log(i);
}


console.log("Variable: " + i); // Muestra el valor d ela variable aún fuera del ciclo


// pero si usamos LET dentro del ciclo...
for (let  j = 0; j < 3; j++) {
    console.log(j);
}

//console.log("Variable: " + j); // ERROR, j no está definido



// Ejemplo 3 - LET
// Si usamos dentro del ciclo...
var mostrarColor = true;

if (mostrarColor) {
    let color = "verde";
    console.log("Mi color favorito es: " + color);
}

//console.log(color); // Mi color favorito es verde / ERROR, color no está definido.


// pero si usamos var dentro del ciclo...
var mostrarColor = true;

if (mostrarColor) {
    var color = "verde";
    console.log("Mi color favorito es: " + color);
}

console.log(color); // Mi color favorito es verde / verde




// node 073718_ambitoDeVarVsLet.js