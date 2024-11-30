// 03:25:24 "OPERADOR LÓGICO AND"

/*
- Estos operadores lógicos nos permiten combinar distintas expresiones para formar condiciones un poco más elaboradas o más complejas.

- El primer operador lógico que vamos a ver es el operador AND:
  Para: X && Y

  |  X  |  Y  |  X && Y |
  -----------------------
  |  T  |  T  |    T    |
  |  T  |  F  |    F    |
  |  F  |  T  |    F    |
  |  F  |  F  |    F    |

  La expresión solo es verdadera cuando ambos operandos son verdaderos.

  > <
*/


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Ejemplo 1
var a = 8;

console.log((a > 5) && (a < 10)); // true && true = true


// Ejemplo 2
var a = 3;

console.log((a > 5) && (a < 10)); // false && true = false


// Ejemplo 3
var a = 15;

console.log((a > 5) && (a < 10)); // true && false = false


// Ejemplo 4
var a = 1;

console.log((a > 5) && (a == 3)); // false && false = false




// node 032524_operadorLogicoAnd.js