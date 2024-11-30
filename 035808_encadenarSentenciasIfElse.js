// 03:58:08 "ENCADENAR SENTENCIAS IF ELSE"

/*
- Condicional con dos ejemplos else if

*/


// Ejemplo
function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5) {
        console.log("Bajo peso");
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log("Peso normal");
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.3);



// node 035808_encadenarSentenciasIfElse.js