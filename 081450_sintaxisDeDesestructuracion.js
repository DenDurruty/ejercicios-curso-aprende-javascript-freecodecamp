// 08:14:50 "SINTÁXIS DE DESESTRUCTURACIÓN"

/*
- Permite asignar las propiedades de un objeto a variables
*/


// Ejemplo 1
const usuario = {
    nombre: "Gino Smith",
    edad: 34,
};


// Esto:
/*
const nombre = usuario.nombre;
const edad = usuario.edad;
*/
// se puede simplificar así:
const {nombre, edad} = usuario; 


// Ejemplo 2
var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

const {x, y, z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);


// node 081450_sintaxisDeDesestructuracion.js