// 04:39:55 "PATRON DE RETORNO ANTICIPADO"

/*
- Cualquier línea que esté luego de return no se va a ejecutar.

- Este patrón de retorno anticipado es muy útil cuando necesitamos 
detener la función por alguna razón específica.

*/

// Ejemplo 1
function miFuncion() {
    console.log("Hola");
    return "Mundo";
    console.log("Adiós"); // esta línea nunca se va a ejecutar porque está luego de una sentencia return
}

console.log(miFuncion());


// Ejemplo 2
function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined; // PATRÓN DE RETORNO ANTICIPADO
    }
    return Math.sqrt(num);
}


console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));



// node 043955_patronDeRetornoAnticipado.js