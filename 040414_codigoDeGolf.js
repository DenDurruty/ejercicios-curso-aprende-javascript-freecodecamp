// 04:04:14 "CÓDIGO DE GOLF"

/*
- En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes
que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus 
golpes.

Tu función tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a 
menor prioridad:

Golpes                       Retornar
-----------------------------------------------
1                            "Hole-in-one!"
<= par - 2                   "Eagle"
par - 1                      "Birdie"
par                          "Par"
par + 1                      "Bogey"
par + 2                      "Double Bogey"
>= par + 3                   "Go Home!"

par y golpes siempre serán numéricos y positivos.

*/



// node 040414_codigoDeGolf.js