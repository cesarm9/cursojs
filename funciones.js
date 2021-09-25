//hay funciones declarativas y de expresion

//declarativa:En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function miFuncion(){
    return 3

}
miFuncion

//ejemplo
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');


//expresion
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


//ejemplos
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
nombre(‘Diego’);

//va a mostrar hola diego

/////////////
function sumar(a,b) {
    var resultado = a + b;
    return resultado
}

sumar(1,2)
// //el resultado va a ser 3
// Diferencias:

// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la función expresiva, no, tendríamos que declararla primero, y después mandarla llamar.

// Hoisting significa que puedes llamar a una funcion  y definirla mas abajo