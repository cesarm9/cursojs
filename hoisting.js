//var es una palabra reservada
var miNombre;
miNombre = "Cesar";
//esta es la forma normal de declara e inicializar si aun no tengo el valor

console.log(miNombre);

var miNombre = "Cesar";

//lo que haria es que el console log inicializa miNombre como miNombre = undefined y lo imprime, hasta despues le asigna en la siguiente linea su valor

hey();
function hey(){
    console.log("Hola " + miNombre);
}

var miNombre = "Cesar"

//Hace lo mismo aqui que en la otra, por buena practica todas las funciones se deben definir al inicio del codigo