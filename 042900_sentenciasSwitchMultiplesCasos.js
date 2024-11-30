// 02:29:00 "SENTENCIAS SWITCH: MÚLTIPLES CASOS"

/*
- Tmbién podemos escoger ejecutar un código específico para varios valores.

*/


function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "Bajo";
            break;
        case 2: 
        case 3:
            volumen = "Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;
    } 
    return volumen;
}

console.log(clasificarVolumen(1));
console.log(clasificarVolumen(2));
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(4));
console.log(clasificarVolumen(5));
console.log(clasificarVolumen(6));



// node 042900_sentenciasSwitchMultiplesCasos.js