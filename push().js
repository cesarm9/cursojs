var numArray = [1,2,3,4,5];

función para hacer push de mas datos

function newNum(){
    numArray.push(6,7)
    console.log(numArray)
};

// se declara el arreglo
var numArray = [1,2,3,4,5];

// Se crea la función newNum, que a el arreglo numArray le hace el push de los datos 6 y 7 y luego imprime

function newNum(){
    numArray.push(6,7)
    console.log(numArray)
};

// Ejecutamos la función y ya nos imprime tambien los datos por que adentro trae console.logs
newNum()
VM2474:3 (7) [1, 2, 3, 4, 5, 6, 7]


// El shift te elimina el primer indice del arreglo
function shiftNum(){
    numArray.shift()
    console.log(numArray)
};

// Ejecutamos función y lo imprime todo
shiftNum()
VM2546:3 (6) [2, 3, 4, 5, 6, 7]


// Lo mismo solo que elimina ultimo elemento
function shiftNum(){
    numArray.pop()
    console.log(numArray)
};


shiftNum()
VM2546:3 (6) [2, 3, 4, 5, 6]