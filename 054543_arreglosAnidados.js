// 05:45:43 "ARREGLOS ANIDADOS"

/*
- Son arreglos que se encuentran dentro de estructuras más complejas como por ejemplo dentro
de un objeto que es parte de un arreglo.

*/


// Ejemplo
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [     
            "abeto",
            "pino",
            "abedul"
        ]
    }
];


// Cómo accedemos a los elementos anidados?
var primeraFlor = misPlantas[0].lista[0]; // con notación de punto
console.log(primeraFlor);

var primeraFlor = misPlantas[0]["lista"][0]; // con notación de corchete
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1]; // con notación de punto
console.log(segundoArbol);

var segundoArbol = misPlantas[1]["lista"][1]; // con notación de corchetes
console.log(segundoArbol);

// node 054543_arreglosAnidados.js