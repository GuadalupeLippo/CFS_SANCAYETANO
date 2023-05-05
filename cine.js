"use strict";
//Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay.Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos. La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada .La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada.//
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var CantidadBut = rls.questionInt("ingrese la cantidad de butacas:");
var arrBut = new Array(CantidadBut);
function cargarArr(arr) {
    for (var i = 0; i < arrBut.length; i++) {
        var datoCargado = Math.random();
        if (datoCargado > 0.5) {
            arrBut[i] = true;
        }
        else {
            arrBut[i] = false;
        }
        console.log("el numero cargado en la posicion ".concat(i + 1, " , es ").concat(arrBut[i]));
    }
}
cargarArr(arrBut);
function contadorButVacias(arr) {
    var butVacias = 0;
    for (var i = 0; i < arrBut.length; i++) {
        if (arrBut[i] == false) {
            butVacias = butVacias + 1;
        }
    }
    return butVacias;
}
console.log("la cantidad de butacas vacias en el cine son : ".concat(contadorButVacias(arrBut)));
