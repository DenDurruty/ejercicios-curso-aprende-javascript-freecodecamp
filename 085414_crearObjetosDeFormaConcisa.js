// 08:54:14 "CREAR OBJETOS DE FORMA CONCISA"

/*
- 

*/


// Ejemplo 1
const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona('Gino Smith', 28, 'español'));

// Cómo escribir esa misma función en una sola línea?
const crearPersonas = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersonas("Gino Smirnoff", 27, "español"));


// node 085414_crearObjetosDeFormaConcisa.js