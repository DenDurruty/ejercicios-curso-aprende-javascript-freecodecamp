// 08:06:48 "OPERADOR REST"

/*
- Permite pasar cuaquier número de argumentos a una función y que esos argumentos
 se agrupen como un arreglo.

*/


// Ejemplo 1
/*
function miFuncion(...args) {
    console.log(args);
    console.log(args.length);
}

miFuncion(1, 2);
miFuncion(1, 2, 3, 4);
miFuncion([1, 2, 3], [4, 5, 6]);
*/

// Ejercicio para que la siguiente función reciba cualquier tipo de argumentos hay que modificarla
/*
const sumar = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
};
*/


const sumar = (...args) => {

    return args.reduce((a, b) => a + b, 0); // pasamos una función flecha como argumento
};                                          // el método reduce es un método que se puede llamar con un arreglo

console.log(sumar(3, 5, 6));


// si queremos
const sumare = (...argus) => {
    return argus.reduce((a, b) => a + b, 0);
}; 


// node 080648_operadorRest.js