aqui se declara la función constructora para auto

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var AutoNuevo =  new auto("Tesla", "Model 3", 2020);
aqui se crea una variable llamada new auto con los datos que se le pasan de parametro
y abajo se crean otros autos 2


var AutoNuevo2 =  new auto("Tesla", "Model X", 2018);

var AutoNuevo3 = new auto("Toyota", "Corolla", 2020);


aqui se hace el print y te muestra lo que traen adentro
AutoNuevo
auto {marca: "Tesla", modelo: "Model 3", annio: 2020}
AutoNuevo2
auto {marca: "Tesla", modelo: "Model X", annio: 2018}
AutoNuevo3
auto {marca: "Toyota", modelo: "Corolla", annio: 2020}