// 09:02:04 "DEFINIR UNA CLASE"

/*
- Definir una clase es como crear un plano.

*/


// Ejemplo 1
class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}


var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);


// Ejemplo 2
class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Nora", 5);
var miMascota = new Mascota("Gino", 2);


console.log(miMascota.nombre);
console.log(miMascota.edad);



// node 090204_definirUnaClase.js