// Definición de un objeto literal
const vendedor = {
    // Propiedades del objeto
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto.SA',
    habilidades_blandas: ['Ventas', 'Marketing', 'Atención al cliente'],
    // Métodos del objeto
    vender: function () {
        console.log("Pedro ha vendido un auto")
    },
    // Método para obtener el nombre completo del vendedor
    nombreCompleto: function () {
        //this hace referencia al objeto vendedor, por lo que podemos acceder a sus propiedades nombre y apellido
        return this.nombre + ' ' + this.apellido
    }

}

//this
//this es una palabra reservada que hace referencia al objeto en el que se encuentra, 
// en este caso al objeto vendedor.
//sirve para acceder a las propiedades y métodos del objeto desde dentro de sus propios métodos.