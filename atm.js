
var caja = [];
var entregado = [];
caja.push(new billete(10, 50) );
caja.push(new billete(5, 20) );
caja.push(new billete(10, 10) );
caja.push(new billete(10, 5) );
caja.push(new billete(10, 1) );
var dinero =  0;
var div = 0;
var papeles = 0;


var r = document.getElementById("resultado");
var b= document.getElementById("extraer");
document.addEventListener("click", entregarDinero);


