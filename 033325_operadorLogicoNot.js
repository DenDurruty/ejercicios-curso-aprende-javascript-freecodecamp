// 03:33:25 "OPERADOR LÓGICO NOT"

/*
- Estos operadores lógicos nos permiten combinar distintas expresiones para formar condiciones un poco más elaboradas o más complejas.

- El tercer operador lógico que vamos a ver es el operador NOT:
  Para: !X

  |  X  |  !X | 
  -------------
  |  T  |  F  | 
  |  F  |  T  |  
 

 Este operador lo usamos para negar el valor de verdad de una expresión.

  > <
*/


console.log(!true);  // false
console.log(!false); // true



// Ejemplo 1
var a = 8;

console.log(!(a > 5)); // !true = false


// Ejemplo 2
var a = 8;

console.log((a < 5)); // !false = true



// node 033325_operadorLogicoNot.js