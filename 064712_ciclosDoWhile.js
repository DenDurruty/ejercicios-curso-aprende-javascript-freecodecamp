// 06:47:12 "CICLOS DO WHILE"

/*
- En el ciclo do while, siempre se va a ejecutar al menos una vez la primer
secuencia (do) de las instrucciones.

*/


// Ejemplo 1 - ciclo while
var x;

x = 5;

while (x < 10) {
    console.log(x);
    x++;
}



// Ejemplo 2 - ciclo DO WHILE
var x;

x = 5;

do {
    console.log(x);
    x++; 
} while (x < 10);


// Ejemplo 3 - Aquí cuando se mostró x era 16, pero luego para seguir imprimiendo le pide que sea menor a 10 
// por lo tanto no se puede continuar.
var x = 16;

do {
    console.log(x);
    x++;
} while (x < 10);



// node 064712_ciclosDoWhile.js