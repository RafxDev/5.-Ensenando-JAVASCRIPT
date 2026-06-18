//  -------------- Numeros ---------------
// En JavaScript, los números se representan utilizando el tipo de dato "number". 
// Este tipo de dato puede representar tanto números enteros como números flotantes (decimales).

let variableNumero = 10 //numero entero (integer)
let variableDecimal = 3.14 //numero flotante (float o decimal)


// -------------- Strings (Texto) ---------------
// En JavaScript, los textos se representan utilizando el tipo de dato "string". 
// Un string es una secuencia de caracteres que se puede definir utilizando comillas simples, 
// comillas dobles o comillas invertidas (backticks).
let variableTexto = 'Texto' //Valor String (cadena de caracteres con comillas simples)
let variableTexto1 = "Texto" //Valor String (cadena de caracteres con comillas dobles)


// -------------- String Texto Concatenado ---------------
//Valor String (cadena de caracteres con comillas invertidas o backticks) permite concatenar variables dentro 
// del texto usando ${} y saltos de linea
let variableTexto2 = `Esta es una variable distinta ${variableTexto1}` 


// Boolean
// El tipo de dato booleano representa dos valores posibles: true (verdadero) y false (falso).
let isTrue = true; // Booleano que representa verdadero
let isFalse = false; // Booleano que representa falso


// Undefined
// El tipo de dato undefined representa una variable que ha sido declarada pero no inicializada, 
// lo que significa que no se le ha asignado ningún valor. Por defecto, el valor de una variable 
// no inicializada es undefined.
let variableSinValor; // Variable declarada pero no inicializada, su valor es undefined


// Null
// El tipo de dato null representa la ausencia intencional de cualquier valor u objeto. 
// Es un valor que se asigna a una variable para indicar que no tiene ningún valor o que 
// se ha vaciado de su contenido.
let variableNula = null; // Variable que representa la ausencia de valor, se le asigna null


//Objetos
// En JavaScript, un objeto es una colección de propiedades, donde cada propiedad es una asociación 
// entre un nombre (clave) y un valor.
// Los objetos se pueden crear utilizando llaves {} y pueden contener cualquier tipo de dato, 
// incluyendo otros objetos, funciones, arrays, etc.
let objeto = {
    clave: 'valor',
};


//Arrays
// Un array es un tipo de dato que representa una colección ordenada de elementos.
// Los arrays se pueden crear utilizando corchetes [] y pueden contener cualquier tipo de dato, 
// incluyendo otros arrays, objetos, funciones, etc.
let array = [1, 2, 3, 'texto', true];


//Date
// El tipo de dato Date se utiliza para representar fechas y horas en JavaScript.
// Se puede crear un objeto Date utilizando el constructor Date() y se pueden realizar operaciones 
// para obtener información sobre la fecha y hora, como el día, mes, año, hora, minutos, etc.
let fechaActual = new Date("06-17-2026 10:30:00"); // Crea un objeto Date con la fecha y hora actual