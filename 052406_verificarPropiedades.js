// 05:24:06 "VERIFICAR PROPIEDADES"

/*
- Luego de borrar una propiedad de un objeto el resultado es undefined, pero 
también podemos verificar si la propiedad existe o no antes de usarla.

.hasOwnProperty()

*/


// Ejemplo 1
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56,
};

console.log(miCuaderno.hasOwnProperty("color")); // true
console.log(miCuaderno.hasOwnProperty("origen")); // false


// Ejemplo 2 
function verificarPorpiedad(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return "Propiedad: " + obj[prop];
    } else {
        return "El objeto no tiene esta propiedad.";
    }
}

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(verificarPorpiedad(miCuaderno, "color"));
console.log(verificarPorpiedad(miCuaderno, "origen"));

// node 052406_verificarPropiedades.js