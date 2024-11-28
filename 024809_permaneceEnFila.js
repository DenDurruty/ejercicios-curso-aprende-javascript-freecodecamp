// 02:48:09 "PERMANECE EN FILA"

/*
- Próximo en la fila

En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos
se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos 
previos se retiran del principio de la cola.

Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como
argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo.
La función próximoEnLaFila debe retornar el elemento que fue removido.

*/


// Opción 1
function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);
    var removido = arreglo.shift();
    return removido;
}

console.log(proximoEnLaFila([0,1,2], 3));


// Opción 2
function proximoEnLaFilaa(arreglo, elemento) {
    arreglo.push(elemento); // Agregar al final del arreglo
    return arreglo.shift(); // Remover el primer elemento y retornarlo
}

var miArreglo = [1, 2, 3, 4, 5]; // Asignar el arreglo a una variable

console.log("Antes: " + JSON.stringify(miArreglo)); // Queremos ver nuestro arreglo antes y después de la función

console.log(proximoEnLaFilaa(miArreglo, 6));

console.log("Después: " + JSON.stringify(miArreglo));


// node 024809_permaneceEnFila.js