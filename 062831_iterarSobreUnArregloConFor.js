// 06:28:31 "ITERAR SOBRE UN ARREGLO CON UN CICLO FOR"

/*
- Vas a poder hacer algo con cada uno de los elemntos de ese arreglo. 

*/


// Ejemplo 1
var miArreglo = [4, 6, 8, 2];
var total = 0;

for (i = 0; i < miArreglo.length; i++) {
    console.log("Iteración: " + i);
    console.log(miArreglo[i]);
    total += miArreglo[i];
}

console.log(total);


// Ejemplo 2
var lenguajes = ["Javascript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}


// Ejemplo 3
function contarNumerosPares (arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }

    return total;
 } 

 console.log(contarNumerosPares([5, 3, 1]));
 console.log(contarNumerosPares([5, 3, 1, 6, 8, 9]));


 
// node 062831_iterarSobreUnArregloConFor.js
