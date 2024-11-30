// 05:14:25 "AGREGAR PROPIEDADES"

/*
- También se pueden agregar nuevas propiedades a un objeto en javascript.

*/


// Ejemplo 1
var curso = {
    "titulo": "Aprende Javascript desde Cero",
    "idioma": "Español",
    "duracion": "30"
};

console.log(curso); // antes de agregar


curso.vistas = 34500; // con notación de punto agrego la nueva propiedad
curso["canal"] = "freeCodeCamp" // con notación de corchetes también se puede agregar una nueva propiedad

console.log(curso.vistas);
console.log(curso.canal);


console.log(curso); // luego de agregar



// node 051425_agregarPropiedades.js