// 02:35:34 "ÁMBITO GLOBAL VS ÁMBITO LOCAL"

/*
- Las variables locales tienen precedencia sobre las variables globales si tienen el mismo nombre en una función.

*/


var miNombre = "Nora"; // Variable global

function mostrarMiNombre() {
    var miNombre = "Gino";
    console.log(miNombre);
}

mostrarMiNombre(miNombre); // Se muestra el valor Gino porque la variable local tiene prioridad ante la global cuando se llama a una función.

console.log(miNombre); // Se muestra el valor Nora que es el de la variable global porque estamos en el programa principal.



// node 023534_ambitoGlobalVsAmbitoLocal.js