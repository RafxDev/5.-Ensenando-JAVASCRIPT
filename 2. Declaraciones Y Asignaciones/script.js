//Variables

//  --------------  Variable Var --------------------------
//Permite declarar una variable sin valor inicial, y se puede reasignar posteriormente. 
//Sin embargo, su uso es menos recomendado debido a problemas de alcance (scope) y hoisting.
var nombreDeLaVariable = "Hola Mundo";


//  ------------------  Variable Let  --------------------
//Permite declarar una variable que puede ser reasignada posteriormente, pero no se puede redeclarar 
// dentro del mismo ámbito.
let nombreDeLaVariable2 = "Adios Mundo";

//Declarar variables let al mismo tiempo
let x,y,z,a

//Asignar valores a las variables let
x = 10;
y = 20;
z = 30;
a = x + y + z;

//También se pueden declarar y asignar al mismo tiempo
let b,c,d;
b = 5; c = 15; d = 25;


//  -------------------  Variable Const  -----------------------
//Permite declarar una variable que no puede ser reasignada después de su inicialización. 
//Debe ser inicializada en el momento de su declaración.
const nombreDeLaVariable3 = "Hola y Adios Mundo";


