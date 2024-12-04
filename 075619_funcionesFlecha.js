// 07:56:19 "FUNCIONES FLECHA"

/*
- Las funciones flecha son un tipo más compacto de funciones que podemos escribir en js 
que normalmente se utilizan cuando necesitamos definir funciones anónimas.

*/


// Ejemplo 1 - A veces necesitamos definir una función anónima...
/*
const fecha = function() {
    return new Date(); // retorna el objeto fecha

}; */

// a este tipo de funciones podemos transformarlas en una función flecha así...
const fecha = () => new Date ();

console.log(fecha());



// node 075619_funcionesFlecha.js