// Conversión de tipos de datos en JavaScript
// En JavaScript, es posible convertir entre diferentes tipos de datos utilizando funciones de conversión. 
// Por ejemplo, para convertir un string a un número, se puede utilizar la función parseInt() o parseFloat().


let a = 5; // Variable 'a' es un número entero
let b = '5'; // Variable 'b' es un string que representa un número

// Convertir 'b' a un número entero utilizando parseInt()
let c = a + parseInt(b); // Convierte 'b' a un número entero antes de sumarlo a 'a'

console.log(c); // Imprime 10


let d = 3.14; // Variable 'd' que representa un número decimal
let e = '1.24'; // Variable 'e' es un string que representa un número decimal

// Convertir 'e' a un número decimal utilizando parseFloat()
let f = d + parseFloat(e); // Convierte 'e' a un número decimal utilizando parseFloat()

console.log(f); // Imprime 4.38