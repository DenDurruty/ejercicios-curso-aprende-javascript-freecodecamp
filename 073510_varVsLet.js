// 07:35:10 "VAR VS LET"

/*
- Diferencia entre declarar con VAR y LET:
con LET no podemos declarar una variable más de una vez.

*/


// Ejemplo 1
var campista = "James"; 
console.log(campista); // James

var campista = "David"; 
console.log(campista); // David


// Ejemplo 2
let camper = "James"; 
console.log(camper); // James

//let camper = "David" 
//console.log(camper); // ERROR, el identificador "camper" ya ha sido declarado



// node 073510_varVsLet.js