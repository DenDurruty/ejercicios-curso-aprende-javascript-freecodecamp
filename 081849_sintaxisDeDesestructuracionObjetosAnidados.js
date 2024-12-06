// 08:18:49 "SINTÁXIS DE DESESTRUCTURACIÓN: OBJETOS ANIDADOS"

/*
- ¿Cpomo podemos usar la sintáxis de desestructuración para objetos anidados?  

*/


// Ejemplo 1
const usuario = {
    johnDoe: {
        edad: 27,
        correo: "johnDoe@freecodecamp.com"
    }
};


const {johnDoe: {edad, correo}} = usuario;


console.log(edad);
console.log(correo);


const {johnDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = usuario;

console.log(edadDelUsuario);
console.log(correoDelUsuario);



// Ejemplo 2
const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77,
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};

/*
const minimaHoy = PRONOSTICO_LOCAL.hoy.minima; 
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima; 
*/

const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy);

// node 081849_sintaxisDeDesestructuracionObjetosAnidados.js