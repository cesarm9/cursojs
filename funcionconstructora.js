function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
undefined
auto
ƒ auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var AutoNuevo =  new auto("Tesla", "Model 3", 2020);

undefined
AutoNuevo
auto {marca: "Tesla", modelo: "Model 3", annio: 2020}
var Aut
undefined
var AutoNuevo2 =  new auto("Tesla", "Model X", 2018);

undefined
var AutoNuevo3 = new Auto("Toyota", "Corolla", 2020);
VM1232:1 Uncaught ReferenceError: Auto is not defined
    at <anonymous>:1:18
(anonymous) @ VM1232:1
var AutoNuevo3 = new auto("Toyota", "Corolla", 2020);
undefined
AutoNuevo
auto {marca: "Tesla", modelo: "Model 3", annio: 2020}
AutoNuevo2
auto {marca: "Tesla", modelo: "Model X", annio: 2018}
AutoNuevo3
auto {marca: "Toyota", modelo: "Corolla", annio: 2020}