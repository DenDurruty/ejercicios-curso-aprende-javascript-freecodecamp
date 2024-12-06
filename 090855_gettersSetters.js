// 09:08:55 "GETTERS Y SETTERS"

/*
- 

*/


// Ejemplo 1
class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {
        console.log("Getter");
        return this._autor;
    }

    set autor(nuevoAutor) {
        console.log("Setter");
        this._autor = nuevoAutor;
    }
}


const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);


// node 090855_gettersSetters.js