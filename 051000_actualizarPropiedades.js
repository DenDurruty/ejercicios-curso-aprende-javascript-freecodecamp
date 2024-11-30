// 05:10:00 "ACTUALIZAR PROPIEDADES"

/*
- Podemos actualizar el valor de las propiedades para permitir que 
el objeto cambie durante la ejecución del programa.

*/


// Ejemplo 1
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul 


// Para cambiar el color de la mochila:
mochila.color = "verde";

console.log(mochila.color); // verde


// Para cambiar el contenido:
console.log(mochila.contenido); // antes de agregarle contenido

mochila.contenido.push("lápiz");

console.log(mochila.contenido); // luego de agregar contenido con .push


// Para reasignar completamente el contenido de la mochila:
console.log(mochila.contenido);

mochila.contenido = [];

console.log(mochila.contenido);



// node 051000_actualizarPropiedades.js