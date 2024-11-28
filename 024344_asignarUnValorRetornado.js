// 02:43:44 "ASIGNAR UN VALOR RETORNADO"

/*
- Cuando una función retorna un valor podemos asignar ese valor retornado a una variable.

*/


// Ejemplo 1
function sumar(a, b) {
    return a + b;
}

var resultado = sumar(5, 3); // var resultado = 8;

console.log(resultado); 


// Ejemplo 2
function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("Javascript");

console.log(miMeta);


// node 024344_asignarUnValorRetornado.js
