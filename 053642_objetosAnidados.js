// 05:36:42 "OBJETOS ANIDADOS"

/*
- Son objetos contenidos dentro de otros objetos.

*/


// Ejemplo
var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};


/* 
- Tenemos un objeto principal asociado a la variable "miReceta"

- "miReceta" tiene 3 propiedades: "descripcion", "costos" e "ingredientes".

- A su vez "ingredientes" es un objeto con dos propiedades: "masa" y "cobertura"

- Tanto "masa" como "cobertura" son objetos que tienen 3 propiedades cada uno. 

*/


// Cómo accedemos a las tres primeras propiedades?
console.log(miReceta.descripcion); 
console.log(miReceta.costo);
console.log(miReceta.ingredientes);


// Cómo accedemos a los ingredientes de la propiedad masa?
console.log(miReceta.ingredientes.masa);

// Cómo accedemos a cada propiedad de la propiedad masa?
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

// También podemos hacer esto con notación de corchetes
console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);



// node 053642_objetosAnidados.js