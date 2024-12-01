// 07:06:46 "NUMEROS ENTEROS ALEATORIOS"

/*
- 

*/


// Ejemplo 1 - con variable
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

console.log(numeroAleatorioEntre0y19);


// Ejemplo 2 - con función
function generarEnteroAleatorio(limiteSuperior) {
    // Generar un entero aleatorio entre 0 y el límite superior (sin incluirlo)

    return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));


// Ejemplo 3 - con función 15 veces
function generarEnteroAleatorio(limiteSuperior) {
    // Generar un entero aleatorio entre 0 y el límite superior (sin incluirlo)

    return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(5));
}


// node 070646_numerosEnterosAleatorios.jsm