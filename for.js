var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];


function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}
VM757:2 Hola, Maria
VM757:2 Hola, Sergio
VM757:2 Hola, Rosa
VM757:2 Hola, Daniel
///////////////////////////


for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}
VM757:2 Hola, Maria
VM757:2 Hola, Sergio
VM757:2 Hola, Rosa
VM757:2 Hola, Daniel