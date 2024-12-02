// 07:12:50 "NUMEROS ENTEROS ALEATORIOS EN UN RANGO"

/*
- 
*/


// Ejemplo 1
function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

console.log(rangoAleatorio(3, 8));


// Ejemplo 2
function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

for (var i = 0; i < 15; i++) {
    console.log(rangoAleatorio(3, 8));
}

// node 071250_numerosEnterosAleatoriosRango.js