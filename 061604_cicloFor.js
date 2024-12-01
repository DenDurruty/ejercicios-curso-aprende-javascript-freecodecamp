// 06:16:04 "CICLO FOR"

/*
- Usamos el ciclo FOR cuando sabemos cuántas iteraciones van a ser necesarias.

- El ciclo for actualiza automáticamente esa variable que con el ciclo while había que hacer manualmente.

*/


// Ejemplo
var miArreglo = [];

/*
iniciar var;condición;incrementar i
*/
for (var i = 0; i < 10; i++) {
    miArreglo.push(i);
}

console.log(miArreglo);


// Ejemplo 2
var misArreglos = [];

for (var i = 0; i < 10; i = i + 2) {
    misArreglos.push(i);
}

console.log(misArreglos);


// Ejemplo 2
var miarreglo = [];

for (var i = 0; i < 10; i += 2) {
    miarreglo.push("A");
}

console.log(miarreglo);

// node 061604_cicloFor.js