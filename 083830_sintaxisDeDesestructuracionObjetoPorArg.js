// 08:38:30 "SINTÁXIS DE DESESTRUCTURACIÓN: PASAR OBJETO POR ARGUMENTO"

/*
- La sintáxis de desestructuración también se puede utilizar
para pasar un objeto como argumento.

*/


// Ejemplo 1
var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};

/*
const actualizarPerfil = (informacionPerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionPerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};


actualizarPerfil(nuevoPerfilCliente);
*/

// una forma de tomar propiedades específicas
const actualizarPerfil = ({nombre, edad}) => {
    console.log(nombre);
    console.log(edad);
};

actualizarPerfil(nuevoPerfilCliente);



// Ejemplo 2
const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85,
};

// Este objeto lo podemos pasar a esta función flecha
/*
const mitad = (estadist) => (estadist.max + estadist.min) / 2.0; 
*/

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));



// node 083830_sintaxisDeDesestructuracionObjetoPorArg.js