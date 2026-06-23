//  ------ Objetos ------
/*
estan basados en moldes llamados clases, y a partir de estos moldes se pueden crear objetos, 
ue son instancias de la clase.
ejemplo auto, es un objeto que tiene propiedades como marca, modelo, año, color, etc. y
métodos como arrancar(), acelerar(), frenar(), etc.
*/

//Ejemplo Carro

let auto1 = {
    marca: 'Fiat',
    modelo: 'Uno',
    peso: 550,
    color: 'Rojo',

}

let auto2 = {
    marca: 'Renault',
    modelo: '12',
    peso: 750,
    color: 'Marron'
}

console.log('Auto 1: ', auto1)
console.log('Auto 2: ', auto2)

//Accediendo a las propiedades de un objeto (clave, valor)
console.log('El color del Auto 1 es: ', auto1.color)

//Modificando el valor de una propiedad
auto1.color = 'Azul'
console.log('Auto 1 con nuevo color: ', auto1)

//Agregando una nueva propiedad a un objeto
auto1.puertas = 4
console.log('Auto 1 con nueva propiedad: ', auto1)