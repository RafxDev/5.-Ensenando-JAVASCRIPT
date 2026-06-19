//  ------------------- Funciones --------------------------
/* Una función es un bloque de código diseñado para realizar una tarea específica. 
Las funciones son reutilizables, lo que significa que puedes llamarlas varias veces en tu programa
sin tener que escribir el mismo código una y otra vez. 
*/


// ------ Sintaxis de una función ---------
/*

function nombreDeLaFuncion(parámetros) {
  // Código a ejecutar
}

*/

function nombreDeLaFuncion(parametro1, parametro2) {
    lineasDeCodigoQueHaraEstaFuncion1;
    lineasDeCodigoQueHaraEstaFuncion2;
    // ...
    lineasDeCodigoQueHaraEstaFuncionN;
}



//Ejemplo Funcion Suma
let x = 5;
let y = 6;

function suma(x,y) {
    return x + y;
}

let respuestaSuma = suma(x, y);

// Console log con texto y variable
console.log(`La Respuesta de ${x} + ${y} es: ${respuestaSuma}`);
console.log(respuestaSuma); // Imprime 11   



//  ----------- Funcion pasar grados Fahrenheit a Celcius -----------------

const temperatura = 76;

function trasnformarACelcius(Fahrenheit){
    return (5/9) * (Fahrenheit-32); // La fórmula para convertir de Fahrenheit a Celsius
}

const respuesta = trasnformarACelcius(temperatura);

console.log(`la temperatura en grados celcius es de `, respuesta)
console.log(`la temperatura en grados celcius es de `, parseInt(respuesta)) // Imprime 24.44 pero con parseInt se redondea a 24



// -------- Funcion Flecha ---------

/*  Las funciones flecha son una forma más concisa de escribir funciones en JavaScript. 
Se introdujeron en ES6 (ECMAScript 2015) y se caracterizan por su sintaxis más corta y su 
comportamiento diferente con respecto al contexto de "this"
*/


// Sintaxis de una función flecha
// La función sumaFlecha es equivalente a la función suma tradicional, pero con una sintaxis más concisa
// En este caso, la función sumaFlecha toma dos parámetros (a y b) y devuelve su suma
// La palabra clave "return" se utiliza para devolver el resultado de la función
const sumaFlecha = (a, b) => {
    return a + b;
}


// Sintaxis de una función flecha con una sola expresión
// Si la función tiene una sola expresión, puedes omitir las llaves y el "return"
// En este caso, la función sumaFlechaConcisa devuelve automáticamente el resultado de a + b
const sumaFlechaConcisa = (a, b) => a + b;