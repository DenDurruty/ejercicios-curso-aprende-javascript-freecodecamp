// 08:04:52 "VALORES POR DEFECTO PARA PARÁMETROS"

/*
- 
*/


// Ejemplo 1 - pasamos valor por defecto
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5));// 6


// Si pasamos el valor como argumento a pesar de tener un valor asignado en el parámetro
console.log(incrementar(5, 3)); // 8


// node 080452_valoresPorDefectoParaParam.js