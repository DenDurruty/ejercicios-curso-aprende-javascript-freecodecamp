// 02:41:14 "UNDEFINED"

/*
- Podemos no retornar ningún valor de la función, pero aún así la función va a retornar un valor por defecto. Ese
valor va a ser UNDEFINED.

- Es muy distinto mostrar un valor (console.log()) que retornarlo (return).

*/


// Ejemplo de retorno por defecto (sin sentencia return)
function sumar(a, b) {
    console.log(a + b); // 8 // Se va a MOSTRAR EL VALOR en la consola
}

console.log(sumar(5, 3)); // undefined // Al no haber una sentencia RETURN, la función muestra un valor por defecto: UNDEFINED



/* En este ejemplo la función se ejecuta cuando la llamamos "console.log(sumar(5, 3))", 
se muestra el valor de la suma "console.log(a + b)"
y luego el valor retornado por esa llamada "console.log(sumar(5, 3))" a la función se muestra en la consola. 

Ese valor es UNDEFINED. Si hubiésemos tenido una sentencia return, el valor hubiese sido 8. */


// Ejemplo de retorno con sentencia return
function sumarab(a, b) {
    console.log(a + b); 
    return a + b;
}

console.log(sumarab(5, 3));



// node 024114_undefined.js