// 05:16:54 "ELIMINAR PROPIEDADES"

/*
- ¿Cómo eliminar propiedades?
*/


// Ejemplo
var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "Español",
    "duracion": 30
};

console.log(curso); // antes de borrar la propiedad

console.log(curso.duracion); // 30

delete curso.duracion; // eliminamos la propiedad duración

console.log(curso.duracion); // undefined

console.log(curso); //después de borra la propiedad





// node 051654_eliminarPropiedades.js