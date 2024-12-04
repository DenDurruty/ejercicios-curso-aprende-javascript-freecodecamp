// 07:59:05 "FUNCIONES FLECHA CON PARÁMETROS"

/*
- 

*/


// Ejemplo 1 - Tenemos esta función que queremos transformar en una función flecha:
/*
const sumarTres = function(x) {
    return x + 3;
};

console.log(sumarTres(20));
*/


// la transformamos a flecha
const sumarTres = (x) => x + 3;

console.log(sumarTres(20));



// Ejemplo 2 - tenemos otra función anónima...
/*
const concatenarArreglos = function(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concatenarArreglos([1, 2], [3, 4]));
console.log(concatenarArreglos("Hola", "Aló"));
*/


// la transformamos a flecha:
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos("Hola", "Aló"));
console.log(concatenarArreglos([1, 2], [3, 4]));



// Ejemplo 3 // ¿Qué pasaría si la función tuviese más de una línea?
/*
const sumar = function(a ,b) {
    let num = 6;
    return a + b + num;
};

console.log(sumar(5, 2));
*/


// la transformamos a flecha:
const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};

console.log(sumar(5, 2));



// node 075905_funcionesFlechaConParam.js