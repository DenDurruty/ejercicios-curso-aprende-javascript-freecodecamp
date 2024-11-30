// 03:30:15 "OPERADOR LOGICO OR"


/*
- Estos operadores lógicos nos permiten combinar distintas expresiones para formar condiciones un poco más elaboradas o más complejas.

- El segundo operador lógico que vamos a ver es el operador 0R:
  Para: X || Y

  |  X  |  Y  |  X || Y |
  -----------------------
  |  T  |  T  |    T    |
  |  T  |  F  |    T    |
  |  F  |  T  |    T    |
  |  F  |  F  |    F    |

  La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.

  > <
*/


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Ejemplo 1
var a = 8;

console.log((a < 5) || (a > 15)); // false || false = false


// Ejemplo 2
var a = 2;

console.log((a < 5) || (a > 15)); // true || false = true


// Ejemplo 3
var a = 20;

console.log((a < 5) || (a > 15)); // false || true = true


// Ejemplo 4
var a = 5;

console.log((a == 5) || (a < 15)); // true || true = true




// node 033015_operadorLogicoOr.js