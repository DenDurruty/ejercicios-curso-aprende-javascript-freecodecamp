// 05:19:26 "OBJETOS PARA BÚSQUEDAS"

/*
- 
*/


// Ejemplo CON SWITCH
// Vamos a analizar el código y luego lo vamos a modificar.

function buscarElementoQuimico(simbolo) {
    var elementoQuimico = "";

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "B":
            elementoQuimico = "Boro";
            break;
    }
    return elementoQuimico;
}

console.log(buscarElementoQuimico("Cl"));


// Ejemplo 2 CON OBJETO
function busqueElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio",
    };

    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

// node 051926_objetosParaBusquedas.js