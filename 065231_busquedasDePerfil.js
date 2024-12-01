// 06:52:31 "BUSQUEDAS DE PERFIL"

/*
- Combinación de arreglos, objetos, minifunciones

*/


// Ejemplo 1
var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violín"]
    }
];


function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe."
        }  
    }
    return "El contacto no está en la lista de contactos."
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Nora", "dirección"));




















// node 065231_busquedasDePerfil.js