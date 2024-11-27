// 02:00:17 "ACCEDER A ARREGLOS MULTIDIMENSIONALES"

/*
Arreglo:         [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índice:               0          1          2
Índices internos:  0  1  2    0  1  2    0  1  2

*/


var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(miArreglo); // Arreglo completo
console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]


console.log(miArreglo[1][2]); // 6
console.log(miArreglo[2][0]); // 7



// node 020017_accederAarreglosMultidimensionales.js