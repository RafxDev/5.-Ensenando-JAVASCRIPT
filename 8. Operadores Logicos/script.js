//Operadores Logicos
let x = 5;
let y = 10;
let r = 5


// --------------  Operador de igualdad (==)  ---------------
// compara solo el valor de las variables, sin importar su tipo de dato
let z = x == y; //va a ser un booleano
console.log(z); //false

// Operador de igualdad estricta (===) 
// compara tanto el valor como el tipo de dato de las variables
let w = x === y;
console.log(w); //false


//  -------------  Operador de desigualdad (!=)  --------------
// compara solo el valor de las variables, sin importar su tipo de dato
let a = x != y; //va a ser un booleano
console.log(a); //true

// Operador de desigualdad estricta (!==) 
// compara tanto el valor como el tipo de dato de las variables
let b = x !== y;
console.log(b); //true


// Menor que (<) 
// evuelve true si el valor de la izquierda es menor que el valor de la derecha
let c = x < y;
console.log(c); //true

// Mayor que (>) 
// devuelve true si el valor de la izquierda es mayor que el valor de la derecha
let d = x > y;
console.log(d); //false

// Menor o igual que (<=) 
// devuelve true si el valor de la izquierda es menor o igual que el valor de la derecha
let e = x <= y;
console.log(e); //true

// Mayor o igual que (>=) 
// devuelve true si el valor de la izquierda es mayor o igual que el valor de la derecha
let f = x >= y;
console.log(f); //false



// Operador lógico AND (&&)
// devuelve true si ambas condiciones son verdaderas, de lo contrario devuelve false
let g = x > y && x < r;
console.log(g); //false


// Operador lógico OR (||)
// devuelve true si al menos una de las condiciones es verdadera, de lo contrario devuelve false
let h = x > y || x > r;
console.log(h); //false

// Operador Logico NOT (Negacion) (!)
// devuelve true si la condición es falsa, y devuelve false si la condición es verdadera
let i = !(x > y);
console.log(i); //true

