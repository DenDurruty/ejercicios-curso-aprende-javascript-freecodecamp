// 02:22:44 "PARAMETROS Y ARGUMENTOS"

/*
- 
*/

// Ejemplo 1
function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);

}

sumar(5, 3);
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);


// Ejemplo 2 - También se pueden pasar los valores de los argumentos como variables
function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);

}

var x = 5;
var y = 3;

sumar(x, y);


// Ejemplo 3 - Cocatenar cadenas
function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar.");



// node 022244_parametrosYArgumentos.js