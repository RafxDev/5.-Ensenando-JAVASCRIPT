// ---------- Scope ------------------

//Scope (Disponibilidad) se refiere a la accesibilidad de las variables en diferentes partes del 
//código. En JavaScript, existen dos tipos principales de scope: global y local.

let x = 5; // Variable global

{
    let x = 10; // Variable local dentro del bloque
    console.log(x); // Imprime 10
}

console.log(x); // Imprime 5, la variable global no se ve afectada por la variable local

{
    console.log(x); // Imprime 5, la variable global sigue siendo accesible dentro del bloque
}




// En este ejemplo, la variable 'a' es global y puede ser modificada dentro del bloque, 
// mientras que la variable 'b' es local al bloque y no afecta a 'a' fuera de él.

let a = 5;

{
    let b = 3;
    a = a + b; // Modifica la variable global 'a' utilizando la variable local 'b'
    console.log(a); // Imprime 8
}
