// 06:39:30 "CICLOS FOR ANIDADOS"

/*
- Un ciclo for dentro de otro ciclo for. Son muy útiles para
procesar estructuras de datos multidimensionales.

*/


// Ejemplo 1
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++ ) {
    console.log(miArreglo[i]);
}


//Ejemplo 2
// Qué pasa si queremos trabajar sobre los elementos de ese arreglo anidado?
var misArreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < misArreglos.length; i++ ) {
    console.log("> Nueva iteración: ");
    var arregloAnidado = misArreglos[i]; // Arreglo
    console.log("Arreglo: " + arregloAnidado);

    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(">>> Ciclo anidado");
        console.log("Elemento: ");
        console.log(arregloAnidado[j]); // Elemento
    }
}


// node 063930_ciclosForAnidados.js