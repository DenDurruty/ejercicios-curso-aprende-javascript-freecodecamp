// 05:29:17 "OBJETOS COMPLEJOS"

/*
- 
*/


// Ejemplo de una variable que tiene un arreglo con dos objetos dentro:
var ordenesDePizza = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "para llevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimentón"
        ],
        "para llevar": false
    }
];


console.log(ordenesDePizza[0]); // accedemos al primer objeto
console.log(ordenesDePizza[0].tipo); // accedemos a la primera propiedad del primer objeto
console.log(ordenesDePizza[0]["tipo"]); // accedemos a la primera propiedad del primer objeto
console.log(ordenesDePizza[0].toppings); // accedemos a la propiedad toppings
console.log(ordenesDePizza[0].toppings[0]); // accedemos al primer elemento de la propiedad toppings del primer objeto

// Cómo agregar un tercer objeto? poner coma, abrir llaves y escribir las propiedades y los valores.

// node 052917_objetosComplejos.js