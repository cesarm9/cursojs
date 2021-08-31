var miAuto = {
    marca: "Toya",
    modelo: "Corolla",
    annio: 2020
};

miAuto.annio
//2020
miAuto.marca
//"Toya"
miAuto.modelo
//"Corolla"

var miAuto = {
    marca: "Toya",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

miAuto.detalleDelAuto();
VM479:6 Auto Corolla 2020