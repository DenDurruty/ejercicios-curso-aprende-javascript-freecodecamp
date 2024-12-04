// 07:51:55 "CREAR UN OBJETO INMUTABLE"

/*
- 

*/


// Ejemplo 1 
let colores = {
    "verde" : "#10e04b",
    "azul" : "#1b50e0",
    "negro" : "#000000",
    "blanco" : "#ffffff",
};

Object.freeze(colores);

colores.amarillo = "#fff200";

console.log(colores); // Error de tipo, no se puede agregar la propiedad amarillo, porque el objeto
// no es extensible.

/* delete colores.verde; */
console.log(colores); // no se puede borrar la propiedad "verde" porque el objeto es inmutable



// node 075155_crearUnObjetoInmutable.js