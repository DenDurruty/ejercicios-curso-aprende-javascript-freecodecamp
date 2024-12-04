// 07:49:30 "MUTAR UN ARREGLO DECLARADO CON CONST"

/*
- 

*/


// Ejemplo 1 - NO se puede redefinir un arreglo por completo cuando está definido con CONST
const MI_ARREGLO = [1, 2, 3, 4];

//MI_ARREGLO = [5, 6, 7, 8]; // Error, MI_ARREGLO es sólo para lectura

// PEEERO si cambiamos cada elemento del arreglo por separado...

MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO);



// node 074930_mutarArregloDeclaradoEnConst.js