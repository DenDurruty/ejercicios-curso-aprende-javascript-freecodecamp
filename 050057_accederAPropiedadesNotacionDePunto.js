// 05:00:57 "ACCEDER A PROPIEDADES: NOTACIÓN DE PUNTO"

/*
- Puedes acceder a las propiedades de un objeto si utilizas algo llamado
"notación de punto".

*/


// EJEMPLO 1
var miPerro = {
    "nombre" : "Gino",
    "edad" : 5,
    "peso" : 6,
    "raza" : "Beagle"
};

console.log(miPerro);

// Por ejemplo si queremos acceder a la propiedad nombre, utilizamos la notación de punto así:
console.log(miPerro.nombre);

// de igual manera para acceder a las otras propiedades
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);



// EJEMPLO 2
var miCuaderno = {
    "color" : "verde",
    "categoria" : 3,
    "numero de paginas" : 200,
    "numero de hojas" : 100,
};

console.log(miCuaderno);
console.log(miCuaderno.color);

//Notación de corchetes nos permite acceder a las propiedades que tienen espacio en su nombre por ej:
console.log(miCuaderno["numero de paginas"]);



// node 050057_accederAPropiedadesNotacionDePunto.js