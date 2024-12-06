// 08:57:13 "MÉTODOS"

/*
- 

*/


// Ejemplo 1
const persona = {
    nombre: "Isabel",
    presentarse: function() {
        return `Hola. Mi nombre es ${this.nombre}.`; // la palabra this se refiere al objeto con el que estamos trabajando
    }
};

console.log(persona.presentarse());

// Ejemplo 2 - con el standard ES6 podemos simplificar nuestro código aún más para 
// para definir esta función
const personaa = {
    nombres: "Isabel",
    presentarsee: function() {
        return `Hola. Mi nombre es ${this.nombres}.`;
    }
};


console.log(personaa.presentarsee());


// node 085713_metodos.js