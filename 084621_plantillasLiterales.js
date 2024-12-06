// 08:46:21 "PLANTILLAS LITERALES"

/*
+ Plantillas literales o Plantillas de cadenas

CARACTERÍSTICAS:
- Se usa el acento invertido (backtick) ën lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.

*/


// Ejemplo 1
var a = 6;
console.log(`El valor de a es ${a}`);



// Ejemplo 2
var nombre = "Nora";
var edad = 6;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);


// Ejemplo 3 - también podemos reemplazar otro tipo de datos como arreglos
var miArreglo = [1, 2, 3, 4];

console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);


// Ejemplo 4 - también puede reemplazar el valor de las propiedades de un objeto y asignar la plantilla a una variable
var persona = {
    nombre: "Gino Cass",
    edad: "10"
};

const SALUDO = `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;

console.log(SALUDO);

// node 084621_plantillasLiterales.js