// 03:36:48 "SENTENCIAS CONDICIONALES"

/*
- Los condicionales nos permiten decidir si un bloque de código se ejecuta o no dependiendo de una condición.
Básicamente nos da más control sobre qué es lo que va a ocurrir en el programa. 

*/


// Ejemplo 1
if (true) {
    console.log("La condición es verdadera.");
}


// Ejemplo 2
var x = 5;

if (x > 2) {
    console.log("La condición es verdadera.");
}


// Ejemplo 3
var x = 5;

if (x > 2 && x < 10) {
    console.log("La condición es verdadera.");
}


// Ejemplo 4
var estacion = "Invierno";

if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno.");
}


// Ejemplo 5
var estacion = "Verano";

if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno.");
}

console.log("Después del condicional.")

// node 033648_sentenciasCondicionales.js